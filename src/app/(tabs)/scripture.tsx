import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';

import { Body, Button, Chip, Row, Screen, SectionTitle } from '../../components/ui';
import { VerseCard } from '../../components/VerseCard';
import { resourceById } from '../../data/resources';
import { topics } from '../../data/topics';
import {
  bibleGatewayUrl,
  DEFAULT_TRANSLATION,
  enduringWordUrl,
  openUrl,
  parseReference,
  resourceSearchUrl,
  translations,
} from '../../lib/links';
import type { Translation } from '../../lib/links';
import { radius, spacing, useTheme } from '../../lib/theme';

const keyPassages = [
  { ref: '1 Peter 3:15', why: 'The call to give a reason for your hope' },
  { ref: 'Acts 17:16-34', why: 'Paul reasons with the philosophers in Athens' },
  { ref: '1 Corinthians 15', why: 'The earliest resurrection creed' },
  { ref: 'Romans 1:18-32', why: 'God revealed in creation and conscience' },
  { ref: 'John 1:1-18', why: 'The Word became flesh' },
  { ref: 'Isaiah 53', why: 'The suffering servant' },
  { ref: 'Psalm 19', why: 'The heavens declare the glory of God' },
  { ref: 'Luke 1:1-4', why: 'Luke\'s careful historical method' },
];

const memoryVerses = Array.from(
  new Map(
    topics.flatMap((t) => t.verses.filter((v) => v.text && v.text.length < 220)).map((v) => [v.ref, v]),
  ).values(),
);

export default function ScriptureScreen() {
  const t = useTheme();
  const [ref, setRef] = useState('');
  const [version, setVersion] = useState<Translation>(DEFAULT_TRANSLATION);
  const valid = parseReference(ref) !== null;

  return (
    <Screen>
      <SectionTitle>Look up a passage</SectionTitle>
      <View style={[styles.search, { backgroundColor: t.surface, borderColor: t.border }]}>
        <Ionicons name="book-outline" size={18} color={t.textMuted} />
        <TextInput
          value={ref}
          onChangeText={setRef}
          placeholder="e.g. John 3:16 or Romans 8"
          placeholderTextColor={t.textMuted}
          style={[styles.input, { color: t.text }]}
          autoCapitalize="words"
          autoCorrect={false}
          returnKeyType="go"
          onSubmitEditing={() => valid && openUrl(bibleGatewayUrl(ref, version))}
          accessibilityLabel="Bible reference"
        />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: spacing.sm }}>
        {translations.map((v) => (
          <Chip key={v} label={v} selected={version === v} onPress={() => setVersion(v)} />
        ))}
      </ScrollView>

      {valid ? (
        <View style={{ gap: spacing.sm }}>
          <Button title={`Read in ${version}`} icon="book" onPress={() => openUrl(bibleGatewayUrl(ref, version))} />
          <Button
            title="Enduring Word commentary"
            icon="library-outline"
            variant="secondary"
            onPress={() => openUrl(enduringWordUrl(ref))}
          />
          <Button
            title="Precept Austin word study"
            icon="search-outline"
            variant="secondary"
            onPress={() => openUrl(resourceSearchUrl(resourceById.preceptaustin, ref))}
          />
          <Button
            title="Got Questions on this passage"
            icon="chatbubbles-outline"
            variant="secondary"
            onPress={() => openUrl(resourceSearchUrl(resourceById.gotquestions, ref))}
          />
        </View>
      ) : (
        <Body muted>Enter a book and chapter to read the passage and open commentary.</Body>
      )}

      <SectionTitle>Key apologetics passages</SectionTitle>
      {keyPassages.map((p) => (
        <Row
          key={p.ref}
          title={p.ref}
          subtitle={p.why}
          trailing="open-outline"
          onPress={() => openUrl(bibleGatewayUrl(p.ref, version))}
        />
      ))}

      <SectionTitle>Verses to remember</SectionTitle>
      {memoryVerses.map((v) => (
        <VerseCard key={v.ref} verse={v} />
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
});
