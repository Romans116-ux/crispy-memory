import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { View } from 'react-native';

import { Body, Button, Heading, Row, Screen } from '../../components/ui';
import { topicById } from '../../data/topics';
import { useBookmarks } from '../../lib/bookmarks';
import { spacing, useTheme } from '../../lib/theme';

export default function SavedScreen() {
  const t = useTheme();
  const { ids } = useBookmarks();
  const saved = ids.map((id) => topicById[id]).filter(Boolean);

  if (saved.length === 0) {
    return (
      <Screen>
        <View style={{ alignItems: 'center', gap: spacing.md, marginTop: spacing.xxl * 2 }}>
          <Ionicons name="bookmark-outline" size={48} color={t.textMuted} />
          <Heading size={22}>Nothing saved yet</Heading>
          <Body muted style={{ textAlign: 'center' }}>
            Tap the bookmark on any topic to keep it here for quick review before a conversation.
          </Body>
          <Button title="Browse topics" icon="albums-outline" onPress={() => router.push('/topics')} />
        </View>
      </Screen>
    );
  }

  return (
    <Screen>
      {saved.map((topic) => (
        <Row
          key={topic.id}
          icon="bookmark"
          title={topic.title}
          subtitle={topic.question}
          onPress={() => router.push(`/topic/${topic.id}`)}
        />
      ))}
    </Screen>
  );
}
