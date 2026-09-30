import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { radius, spacing, useTheme } from '../lib/theme';

export function Expandable({ title, body }: { title: string; body: string }) {
  const t = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <View style={[styles.container, { backgroundColor: t.surface, borderColor: t.border }]}>
      <Pressable
        onPress={() => setOpen((o) => !o)}
        accessibilityRole="button"
        accessibilityState={{ expanded: open }}
        style={styles.header}
      >
        <Text style={[styles.title, { color: t.text }]}>“{title}”</Text>
        <Ionicons name={open ? 'chevron-up' : 'chevron-down'} size={18} color={t.textMuted} />
      </Pressable>
      {open ? (
        <View style={[styles.body, { borderTopColor: t.border }]}>
          <Text style={[styles.label, { color: t.primary }]}>RESPONSE</Text>
          <Text style={[styles.bodyText, { color: t.text }]}>{body}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { borderRadius: radius.md, borderWidth: StyleSheet.hairlineWidth, overflow: 'hidden' },
  header: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, padding: spacing.md },
  title: { flex: 1, fontSize: 15, fontWeight: '600', lineHeight: 21 },
  body: { padding: spacing.md, paddingTop: spacing.sm, borderTopWidth: StyleSheet.hairlineWidth, gap: 4 },
  label: { fontSize: 11, fontWeight: '800', letterSpacing: 1 },
  bodyText: { fontSize: 15, lineHeight: 22 },
});
