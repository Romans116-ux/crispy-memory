import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { Verse } from '../data/types';
import { bibleGatewayUrl, openUrl } from '../lib/links';
import { verseText } from '../lib/scripture';
import { radius, serif, spacing, useTheme } from '../lib/theme';
import { useTranslation } from '../lib/translation';

export function VerseCard({ verse }: { verse: Verse }) {
  const t = useTheme();
  const { translation } = useTranslation();
  const quoted = verse.quote ? verseText(verse.ref, translation) : null;
  const fallback = quoted && quoted.translation !== translation;

  return (
    <Pressable
      onPress={() => openUrl(bibleGatewayUrl(verse.ref, translation))}
      accessibilityRole="link"
      accessibilityHint={`Opens ${verse.ref} in the ${translation} on Bible Gateway`}
      style={({ pressed }) => [
        styles.card,
        { backgroundColor: t.accentSoft, borderLeftColor: t.accent },
        pressed && { opacity: 0.75 },
      ]}
    >
      {quoted ? <Text style={[styles.text, { color: t.text }]}>“{quoted.text}”</Text> : null}
      <View style={styles.footer}>
        <Text style={[styles.ref, { color: t.primary }]}>
          {verse.ref}
          {quoted ? <Text style={[styles.version, { color: t.textMuted }]}> {quoted.translation}</Text> : null}
        </Text>
        <Text style={[styles.hint, { color: t.textMuted }]}>
          {fallback || !quoted ? `Read in ${translation}` : 'Read in context'}
        </Text>
        <Ionicons name="open-outline" size={14} color={t.textMuted} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: radius.sm, borderLeftWidth: 4, padding: spacing.md, gap: spacing.sm },
  text: { fontFamily: serif, fontSize: 16, lineHeight: 24, fontStyle: 'italic' },
  footer: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  ref: { fontWeight: '700', fontSize: 15, flex: 1 },
  version: { fontWeight: '600', fontSize: 12 },
  hint: { fontSize: 12 },
});
