import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Body, Button, Heading, Row, Screen } from '../../components/ui';
import type { IconName } from '../../components/ui';
import { topicById } from '../../data/topics';
import { useBookmarks } from '../../lib/bookmarks';
import { formatNoteDate, noteSnippet, useNotes } from '../../lib/notes';
import { radius, spacing, useTheme } from '../../lib/theme';

type Section = 'notes' | 'saved';

function EmptyState({ icon, title, text, action }: { icon: IconName; title: string; text: string; action: React.ReactNode }) {
  const t = useTheme();
  return (
    <View style={{ alignItems: 'center', gap: spacing.md, marginTop: spacing.xxl }}>
      <Ionicons name={icon} size={48} color={t.textMuted} />
      <Heading size={22}>{title}</Heading>
      <Body muted style={{ textAlign: 'center' }}>
        {text}
      </Body>
      {action}
    </View>
  );
}

export default function JournalScreen() {
  const t = useTheme();
  const [section, setSection] = useState<Section>('notes');
  const { notes, createNote } = useNotes();
  const { ids } = useBookmarks();
  const saved = ids.map((id) => topicById[id]).filter(Boolean);

  const newNote = () => router.push(`/note/${createNote()}`);

  return (
    <Screen>
      <View style={[styles.segment, { backgroundColor: t.surfaceAlt }]} accessibilityRole="tablist">
        {(['notes', 'saved'] as const).map((s) => {
          const active = section === s;
          const label = s === 'notes' ? `Notes (${notes.length})` : `Saved (${saved.length})`;
          return (
            <Pressable
              key={s}
              onPress={() => setSection(s)}
              accessibilityRole="tab"
              accessibilityState={{ selected: active }}
              style={[styles.segmentItem, active && { backgroundColor: t.surface }]}
            >
              <Text style={{ color: active ? t.text : t.textMuted, fontWeight: '700' }}>{label}</Text>
            </Pressable>
          );
        })}
      </View>

      {section === 'notes' ? (
        notes.length === 0 ? (
          <EmptyState
            icon="create-outline"
            title="Your journal is empty"
            text="Write down questions you've been asked, conversation notes, prayers or what you're learning. Notes stay private on this device."
            action={<Button title="New note" icon="add" onPress={newNote} />}
          />
        ) : (
          <>
            <Button title="New note" icon="add" onPress={newNote} />
            {notes.map((note) => {
              const topic = note.topicId ? topicById[note.topicId] : undefined;
              const meta = [formatNoteDate(note.updatedAt), topic?.title].filter(Boolean).join(' · ');
              const snippet = noteSnippet(note);
              return (
                <Row
                  key={note.id}
                  icon="document-text-outline"
                  title={note.title.trim() || 'Untitled note'}
                  subtitle={snippet ? `${snippet}\n${meta}` : meta}
                  onPress={() => router.push(`/note/${note.id}`)}
                />
              );
            })}
          </>
        )
      ) : saved.length === 0 ? (
        <EmptyState
          icon="bookmark-outline"
          title="Nothing saved yet"
          text="Tap the bookmark on any topic to keep it here for quick review before a conversation."
          action={<Button title="Browse topics" icon="albums-outline" onPress={() => router.push('/topics')} />}
        />
      ) : (
        saved.map((topic) => (
          <Row
            key={topic.id}
            icon="bookmark"
            title={topic.title}
            subtitle={topic.question}
            onPress={() => router.push(`/topic/${topic.id}`)}
          />
        ))
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  segment: { flexDirection: 'row', padding: 4, borderRadius: radius.md, gap: 4 },
  segmentItem: { flex: 1, alignItems: 'center', paddingVertical: spacing.sm, borderRadius: radius.sm },
});
