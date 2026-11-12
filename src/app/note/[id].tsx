import Ionicons from '@expo/vector-icons/Ionicons';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import { useEffect, useRef } from 'react';
import { Platform, Pressable, Share, StyleSheet, Text, TextInput, View } from 'react-native';

import { Body, Screen } from '../../components/ui';
import { topicById } from '../../data/topics';
import { confirmDestructive } from '../../lib/confirm';
import { formatNoteDate, useNotes } from '../../lib/notes';
import { radius, serif, spacing, useTheme } from '../../lib/theme';

export default function NoteScreen() {
  const t = useTheme();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { getNote, updateNote, deleteNote, loaded } = useNotes();
  const note = getNote(id);
  const topic = note?.topicId ? topicById[note.topicId] : undefined;

  // Remove notes left completely empty when the editor closes.
  const latest = useRef(note);
  latest.current = note;
  useEffect(
    () => () => {
      const n = latest.current;
      if (n && !n.title.trim() && !n.body.trim()) deleteNote(n.id);
    },
    [deleteNote],
  );

  if (!note) {
    return (
      <Screen>
        <Stack.Screen options={{ title: 'Note' }} />
        {loaded ? <Body muted>This note was deleted.</Body> : null}
      </Screen>
    );
  }

  const onDelete = async () => {
    const ok = await confirmDestructive('Delete this note?', 'This can’t be undone.', 'Delete');
    if (!ok) return;
    deleteNote(note.id);
    if (router.canGoBack()) router.back();
    else router.replace('/journal');
  };

  const onShare = () => {
    const parts = [note.title.trim(), note.body.trim()].filter(Boolean);
    if (parts.length) Share.share({ message: parts.join('\n\n') }).catch(() => {});
  };

  return (
    <Screen>
      <Stack.Screen
        options={{
          title: 'Note',
          headerRight: () => (
            <View style={{ flexDirection: 'row', gap: spacing.lg, paddingRight: Platform.OS === 'web' ? spacing.lg : 0 }}>
              <Pressable onPress={onShare} accessibilityRole="button" accessibilityLabel="Share note" hitSlop={10}>
                <Ionicons name="share-outline" size={22} color={t.primary} />
              </Pressable>
              <Pressable onPress={onDelete} accessibilityRole="button" accessibilityLabel="Delete note" hitSlop={10}>
                <Ionicons name="trash-outline" size={22} color={t.danger} />
              </Pressable>
            </View>
          ),
        }}
      />

      {topic ? (
        <Pressable
          onPress={() => router.push(`/topic/${topic.id}`)}
          accessibilityRole="link"
          accessibilityLabel={`Linked topic: ${topic.title}`}
          style={[styles.topicChip, { backgroundColor: t.accentSoft }]}
        >
          <Ionicons name="link-outline" size={14} color={t.primary} />
          <Text style={{ color: t.primary, fontWeight: '600', fontSize: 13 }} numberOfLines={1}>
            {topic.title}
          </Text>
        </Pressable>
      ) : null}

      <TextInput
        value={note.title}
        onChangeText={(title) => updateNote(note.id, { title })}
        placeholder="Title"
        placeholderTextColor={t.textMuted}
        style={[styles.title, { color: t.text }]}
        accessibilityLabel="Note title"
        returnKeyType="next"
      />
      <Text style={{ color: t.textMuted, fontSize: 12 }}>Edited {formatNoteDate(note.updatedAt)}</Text>
      <TextInput
        value={note.body}
        onChangeText={(body) => updateNote(note.id, { body })}
        placeholder="Write your thoughts, questions, prayers or conversation notes…"
        placeholderTextColor={t.textMuted}
        style={[styles.body, { color: t.text, backgroundColor: t.surface, borderColor: t.border }]}
        multiline
        textAlignVertical="top"
        autoFocus={!note.body && !!note.title}
        accessibilityLabel="Note text"
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  topicChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
    borderRadius: 999,
    maxWidth: '100%',
  },
  title: { fontFamily: serif, fontSize: 26, fontWeight: '700', paddingVertical: spacing.xs },
  body: {
    minHeight: 320,
    fontSize: 17,
    lineHeight: 25,
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: StyleSheet.hairlineWidth,
  },
});
