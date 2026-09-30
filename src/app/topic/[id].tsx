import Ionicons from '@expo/vector-icons/Ionicons';
import * as Haptics from 'expo-haptics';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import { Platform, Pressable, Share, StyleSheet, Text, View } from 'react-native';

import { Expandable } from '../../components/Expandable';
import { Body, Card, Heading, Row, Screen, SectionTitle } from '../../components/ui';
import type { IconName } from '../../components/ui';
import { VerseCard } from '../../components/VerseCard';
import { translationById } from '../../data/bible/translations';
import { categoryById } from '../../data/categories';
import { resources } from '../../data/resources';
import { topicById } from '../../data/topics';
import { useBookmarks } from '../../lib/bookmarks';
import { bibleGatewayUrl, enduringWordUrl, openUrl, resourceSearchUrl } from '../../lib/links';
import { radius, serif, spacing, useTheme } from '../../lib/theme';
import { useTranslation } from '../../lib/translation';

export default function TopicScreen() {
  const t = useTheme();
  const { id } = useLocalSearchParams<{ id: string }>();
  const topic = topicById[id];
  const { isSaved, toggle } = useBookmarks();
  const { translation } = useTranslation();

  if (!topic) {
    return (
      <Screen>
        <Body>Topic not found.</Body>
      </Screen>
    );
  }

  const saved = isSaved(topic.id);

  const onToggleSave = () => {
    if (Platform.OS !== 'web') Haptics.selectionAsync().catch(() => {});
    toggle(topic.id);
  };

  const onShare = () => {
    Share.share({
      message: `${topic.question}\n\n${topic.shortAnswer}\n\n— Salt and Grace`,
    }).catch(() => {});
  };

  return (
    <Screen>
      <Stack.Screen
        options={{
          title: categoryById[topic.category].title,
          headerRight: () => (
            <View style={{ flexDirection: 'row', gap: spacing.lg, paddingRight: Platform.OS === 'web' ? spacing.lg : 0 }}>
              <Pressable onPress={onShare} accessibilityRole="button" accessibilityLabel="Share" hitSlop={10}>
                <Ionicons name="share-outline" size={22} color={t.primary} />
              </Pressable>
              <Pressable
                onPress={onToggleSave}
                accessibilityRole="button"
                accessibilityLabel={saved ? 'Remove from saved' : 'Save topic'}
                hitSlop={10}
              >
                <Ionicons name={saved ? 'bookmark' : 'bookmark-outline'} size={22} color={t.primary} />
              </Pressable>
            </View>
          ),
        }}
      />

      <Heading size={28}>{topic.title}</Heading>
      <Text style={[styles.question, { color: t.textMuted }]}>“{topic.question}”</Text>

      <View style={[styles.answer, { backgroundColor: t.accentSoft, borderColor: t.accent }]}>
        <Text style={[styles.answerLabel, { color: t.primary }]}>THE SHORT ANSWER</Text>
        <Text style={[styles.answerText, { color: t.text }]}>{topic.shortAnswer}</Text>
      </View>

      {topic.overview.map((p, i) => (
        <Body key={i}>{p}</Body>
      ))}

      <SectionTitle>Key points</SectionTitle>
      {topic.points.map((p, i) => (
        <Card key={p.heading}>
          <View style={{ flexDirection: 'row', gap: spacing.md }}>
            <View style={[styles.num, { backgroundColor: t.primary }]}>
              <Text style={{ color: t.primaryText, fontWeight: '800' }}>{i + 1}</Text>
            </View>
            <View style={{ flex: 1, gap: 4 }}>
              <Text style={[styles.pointHeading, { color: t.text }]}>{p.heading}</Text>
              <Body>{p.body}</Body>
            </View>
          </View>
        </Card>
      ))}

      {topic.objections.length > 0 ? (
        <>
          <SectionTitle>Common objections</SectionTitle>
          {topic.objections.map((o) => (
            <Expandable key={o.objection} title={o.objection} body={o.response} />
          ))}
        </>
      ) : null}

      <View style={styles.scriptureHeader}>
        <SectionTitle>Scripture</SectionTitle>
        <Pressable
          onPress={() => router.push('/translation')}
          accessibilityRole="button"
          accessibilityLabel={`Translation: ${translationById[translation]?.name}. Change`}
          hitSlop={8}
          style={styles.translationPill}
        >
          <Text style={{ color: t.primary, fontWeight: '700', fontSize: 13 }}>{translation}</Text>
          <Ionicons name="chevron-down" size={14} color={t.primary} />
        </Pressable>
      </View>
      {topic.verses.map((v) => (
        <VerseCard key={v.ref} verse={v} />
      ))}

      <SectionTitle>Go deeper</SectionTitle>
      {topic.keyPassage ? (
        <>
          <Row
            icon="library-outline"
            title={`Commentary on ${topic.keyPassage}`}
            subtitle="Enduring Word · David Guzik"
            trailing="open-outline"
            onPress={() => openUrl(enduringWordUrl(topic.keyPassage!))}
          />
          <Row
            icon="book-outline"
            title={`Read ${topic.keyPassage}`}
            subtitle="Bible Gateway"
            trailing="open-outline"
            onPress={() => openUrl(bibleGatewayUrl(topic.keyPassage!))}
          />
        </>
      ) : null}
      {resources
        .filter((r) => r.id !== 'biblegateway' && r.id !== 'enduringword')
        .map((r) => (
          <Row
            key={r.id}
            icon={r.icon as IconName}
            title={`Search ${r.name}`}
            subtitle={`“${topic.searchTerms}”`}
            trailing="open-outline"
            onPress={() => openUrl(resourceSearchUrl(r, topic.searchTerms))}
          />
        ))}

      {topic.furtherReading?.length ? (
        <>
          <SectionTitle>Recommended reading</SectionTitle>
          <Card>
            {topic.furtherReading.map((b) => (
              <View key={b} style={{ flexDirection: 'row', gap: spacing.sm }}>
                <Text style={{ color: t.accent }}>•</Text>
                <Body style={{ flex: 1 }}>{b}</Body>
              </View>
            ))}
          </Card>
        </>
      ) : null}
    </Screen>
  );
}

const styles = StyleSheet.create({
  question: { fontFamily: serif, fontStyle: 'italic', fontSize: 18, lineHeight: 26 },
  answer: { borderRadius: radius.md, borderWidth: 1, padding: spacing.lg, gap: spacing.xs },
  answerLabel: { fontSize: 11, fontWeight: '800', letterSpacing: 1 },
  answerText: { fontSize: 17, lineHeight: 25, fontWeight: '500' },
  num: { width: 28, height: 28, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  pointHeading: { fontSize: 17, fontWeight: '700' },
  scriptureHeader: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' },
  translationPill: { flexDirection: 'row', alignItems: 'center', gap: 2, paddingVertical: 2 },
});
