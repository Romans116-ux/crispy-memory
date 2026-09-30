import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { Verse } from '../data/types';
import { bibleGatewayUrl, openUrl } from '../lib/links';
import { radius, serif, spacing, useTheme } from '../lib/theme';

export function VerseCard({ verse }: { verse: Verse }) {
  const t = useTheme();
  return (
    <Pressable
      onPress={() => openUrl(bibleGatewayUrl(verse.ref))}
      accessibilityRole="link"
      accessibilityHint="Opens this passage on Bible Gateway"
      style={({ pressed }) => [
        styles.card,
        { backgroundColor: t.accentSoft, borderLeftColor: t.accent },
        pressed && { opacity: 0.75 },
      ]}
    >
      {verse.text ? <Text style={[styles.text, { color: t.text }]}>“{verse.text}”</Text> : null}
      <View style={styles.footer}>
        <Text style={[styles.ref, { color: t.primary }]}>{verse.ref}</Text>
        <Text style={[styles.hint, { color: t.textMuted }]}>
          {verse.text ? 'WEB · Read in context' : 'Read on Bible Gateway'}
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
  hint: { fontSize: 12 },
});
