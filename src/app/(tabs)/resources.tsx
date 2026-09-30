import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { Body, Button, Card, Screen, SectionTitle } from '../../components/ui';
import type { IconName } from '../../components/ui';
import { resources } from '../../data/resources';
import { openUrl, resourceSearchUrl } from '../../lib/links';
import { radius, spacing, useTheme } from '../../lib/theme';

export default function ResourcesScreen() {
  const t = useTheme();
  const [query, setQuery] = useState('');
  const hasQuery = query.trim().length > 1;

  return (
    <Screen>
      <Body muted>
        Trusted ministries and tools for going deeper. Links open in an in-app browser. Salt and Grace is not
        affiliated with these organizations.
      </Body>

      <View style={[styles.search, { backgroundColor: t.surface, borderColor: t.border }]}>
        <Ionicons name="search" size={18} color={t.textMuted} />
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search a topic across these sites"
          placeholderTextColor={t.textMuted}
          style={[styles.input, { color: t.text }]}
          autoCorrect={false}
          accessibilityLabel="Search resources"
        />
      </View>

      <SectionTitle>{hasQuery ? `Search “${query.trim()}” on…` : 'Resources'}</SectionTitle>
      {resources.map((r) => (
        <Card key={r.id}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.md }}>
            <View style={[styles.icon, { backgroundColor: t.accentSoft }]}>
              <Ionicons name={r.icon as IconName} size={22} color={t.primary} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ color: t.text, fontSize: 17, fontWeight: '700' }}>{r.name}</Text>
              <Text style={{ color: t.textMuted, fontSize: 13 }}>{r.domain}</Text>
            </View>
          </View>
          <Body>{r.description}</Body>
          <Text style={{ color: t.accent, fontSize: 13, fontWeight: '600' }}>Best for: {r.bestFor}</Text>
          <Button
            title={hasQuery ? `Search ${r.name}` : `Visit ${r.name}`}
            icon={hasQuery ? 'search' : 'open-outline'}
            variant="secondary"
            onPress={() => openUrl(hasQuery ? resourceSearchUrl(r, query.trim()) : r.url)}
          />
        </Card>
      ))}
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
  icon: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center' },
});
