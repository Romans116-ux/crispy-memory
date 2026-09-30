import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { Body, Chip, Row, Screen, SectionTitle } from '../../components/ui';
import { categories, categoryById } from '../../data/categories';
import { topics } from '../../data/topics';
import type { CategoryId } from '../../data/types';
import { searchTopics } from '../../lib/search';
import { radius, spacing, useTheme } from '../../lib/theme';

export default function TopicsScreen() {
  const t = useTheme();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<CategoryId | 'all'>('all');

  const pool = useMemo(
    () => (category === 'all' ? topics : topics.filter((x) => x.category === category)),
    [category],
  );
  const results = useMemo(() => searchTopics(query, pool), [query, pool]);
  const searching = query.trim().length >= 2;

  return (
    <Screen>
      <View style={[styles.search, { backgroundColor: t.surface, borderColor: t.border }]}>
        <Ionicons name="search" size={18} color={t.textMuted} />
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search questions, objections, verses…"
          placeholderTextColor={t.textMuted}
          style={[styles.input, { color: t.text }]}
          returnKeyType="search"
          autoCorrect={false}
          clearButtonMode="while-editing"
          accessibilityLabel="Search topics"
        />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: spacing.sm }}>
        <Chip label="All" selected={category === 'all'} onPress={() => setCategory('all')} />
        {categories.map((c) => (
          <Chip key={c.id} label={c.title} selected={category === c.id} onPress={() => setCategory(c.id)} />
        ))}
      </ScrollView>

      {searching ? (
        <>
          <SectionTitle>
            {results.length} {results.length === 1 ? 'result' : 'results'}
          </SectionTitle>
          {results.length === 0 ? (
            <Body muted>
              No topics match “{query.trim()}”. Try a different word, or search the partner resources from the
              Resources tab.
            </Body>
          ) : (
            results.map(({ topic, excerpt }) => (
              <Row
                key={topic.id}
                title={topic.title}
                subtitle={excerpt}
                onPress={() => router.push(`/topic/${topic.id}`)}
              />
            ))
          )}
        </>
      ) : (
        (category === 'all' ? categories : [categoryById[category]]).map((c) => (
          <View key={c.id} style={{ gap: spacing.sm }}>
            <SectionTitle>{c.title}</SectionTitle>
            {pool
              .filter((x) => x.category === c.id)
              .map((topic) => (
                <Row
                  key={topic.id}
                  title={topic.title}
                  subtitle={topic.question}
                  onPress={() => router.push(`/topic/${topic.id}`)}
                />
              ))}
          </View>
        ))
      )}
      <Text style={{ color: t.textMuted, fontSize: 12, textAlign: 'center', marginTop: spacing.lg }}>
        {topics.length} topics
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: radius.md,
    borderWidth: StyleSheet.hairlineWidth,
  },
  input: { flex: 1, fontSize: 16, paddingVertical: spacing.md },
});
