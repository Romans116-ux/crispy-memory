import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

const STORAGE_KEY = 'salt-and-grace/notes/v1';

export interface Note {
  id: string;
  title: string;
  body: string;
  /** Topic the note was written from, if any. */
  topicId?: string;
  createdAt: number;
  updatedAt: number;
}

interface NotesValue {
  /** Newest-edited first. */
  notes: Note[];
  loaded: boolean;
  getNote: (id: string) => Note | undefined;
  createNote: (init?: { topicId?: string; title?: string }) => string;
  updateNote: (id: string, patch: Partial<Pick<Note, 'title' | 'body'>>) => void;
  deleteNote: (id: string) => void;
}

const NotesContext = createContext<NotesValue | null>(null);

function isNote(x: unknown): x is Note {
  if (!x || typeof x !== 'object') return false;
  const n = x as Record<string, unknown>;
  return (
    typeof n.id === 'string' &&
    typeof n.title === 'string' &&
    typeof n.body === 'string' &&
    typeof n.createdAt === 'number' &&
    typeof n.updatedAt === 'number'
  );
}

function newId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

export function NotesProvider({ children }: { children: ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((raw) => {
        if (!raw) return;
        const parsed: unknown = JSON.parse(raw);
        if (Array.isArray(parsed)) setNotes(parsed.filter(isNote));
      })
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, []);

  useEffect(() => {
    if (!loaded) return;
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(notes)).catch(() => {});
  }, [notes, loaded]);

  const createNote = useCallback((init?: { topicId?: string; title?: string }) => {
    const now = Date.now();
    const note: Note = {
      id: newId(),
      title: init?.title ?? '',
      body: '',
      topicId: init?.topicId,
      createdAt: now,
      updatedAt: now,
    };
    setNotes((prev) => [note, ...prev]);
    return note.id;
  }, []);

  const updateNote = useCallback((id: string, patch: Partial<Pick<Note, 'title' | 'body'>>) => {
    setNotes((prev) => prev.map((n) => (n.id === id ? { ...n, ...patch, updatedAt: Date.now() } : n)));
  }, []);

  const deleteNote = useCallback((id: string) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  }, []);

  const value = useMemo<NotesValue>(() => {
    const sorted = [...notes].sort((a, b) => b.updatedAt - a.updatedAt);
    return {
      notes: sorted,
      loaded,
      getNote: (id) => notes.find((n) => n.id === id),
      createNote,
      updateNote,
      deleteNote,
    };
  }, [notes, loaded, createNote, updateNote, deleteNote]);

  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
}

export function useNotes(): NotesValue {
  const ctx = useContext(NotesContext);
  if (!ctx) throw new Error('useNotes must be used inside NotesProvider');
  return ctx;
}

export function formatNoteDate(ms: number): string {
  return new Date(ms).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}

/** First non-empty line of the body, for list previews. */
export function noteSnippet(note: Note): string {
  return note.body.split('\n').find((l) => l.trim())?.trim() ?? '';
}
