import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

import { Body, Card, Heading, Row, Screen, SectionTitle } from '../../components/ui';
import type { IconName } from '../../components/ui';
import { VerseCard } from '../../components/VerseCard';
import { categories, categoryById } from '../../data/categories';
import { topicOfTheDay, verseOfTheDay } from '../../lib/daily';
import { spacing, useTheme } from '../../lib/theme';

export default function TodayScreen() {
  const t = useTheme();
  const topic = topicOfTheDay();
  const { verse } = verseOfTheDay();

  return (
    <Screen>
      <View style={{ gap: spacing.xs, marginBottom: spacing.sm }}>
        <Heading size={30}>Reason for Hope</Heading>
        <Body muted>Always be ready to give an answer for the hope that is in you.</Body>
      </View>

      <SectionTitle>Question of the day</SectionTitle>
      <Card onPress={() => router.push(`/topic/${topic.id}`)} accessibilityLabel={`Question of the day: ${topic.question}`}>
        <Text style={{ color: t.accent, fontWeight: '700', fontSize: 12, letterSpacing: 0.8 }}>
          {categoryById[topic.category].title.toUpperCase()}
        </Text>
        <Heading size={21}>{topic.question}</Heading>
        <Body muted>{topic.shortAnswer}</Body>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: spacing.xs }}>
          <Text style={{ color: t.primary, fontWeight: '700' }}>Study this answer</Text>
          <Ionicons name="arrow-forward" size={16} color={t.primary} />
        </View>
      </Card>

      <SectionTitle>Verse of the day</SectionTitle>
      <VerseCard verse={verse} />

      <SectionTitle>Explore</SectionTitle>
      {categories.map((c) => (
        <Row
          key={c.id}
          icon={c.icon as IconName}
          title={c.title}
          subtitle={c.subtitle}
          onPress={() => router.push(`/category/${c.id}`)}
        />
      ))}

      <Pressable onPress={() => router.push('/about')} accessibilityRole="button" style={{ marginTop: spacing.xl }}>
        <Text style={{ color: t.textMuted, textAlign: 'center', fontSize: 13 }}>About this app</Text>
      </Pressable>
    </Screen>
  );
}
