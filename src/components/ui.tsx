import Ionicons from '@expo/vector-icons/Ionicons';
import type { ComponentProps, ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

import { radius, serif, spacing, useTheme } from '../lib/theme';

export type IconName = ComponentProps<typeof Ionicons>['name'];

export function Screen({ children }: { children: ReactNode }) {
  const t = useTheme();
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: t.background }}
      contentContainerStyle={styles.screenContent}
      contentInsetAdjustmentBehavior="automatic"
      keyboardShouldPersistTaps="handled"
    >
      {children}
    </ScrollView>
  );
}

export function Card({
  children,
  style,
  onPress,
  accessibilityLabel,
}: {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  accessibilityLabel?: string;
}) {
  const t = useTheme();
  const base = [styles.card, { backgroundColor: t.surface, borderColor: t.border }, style];
  if (!onPress) return <View style={base}>{children}</View>;
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      style={({ pressed }) => [base, pressed && { opacity: 0.7 }]}
    >
      {children}
    </Pressable>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  const t = useTheme();
  return (
    <Text accessibilityRole="header" style={[styles.sectionTitle, { color: t.textMuted }]}>
      {children}
    </Text>
  );
}

export function Heading({ children, size = 26 }: { children: ReactNode; size?: number }) {
  const t = useTheme();
  return (
    <Text
      accessibilityRole="header"
      style={{ fontFamily: serif, fontSize: size, lineHeight: size * 1.2, fontWeight: '700', color: t.text }}
    >
      {children}
    </Text>
  );
}

export function Body({ children, muted, style }: { children: ReactNode; muted?: boolean; style?: object }) {
  const t = useTheme();
  return <Text style={[styles.body, { color: muted ? t.textMuted : t.text }, style]}>{children}</Text>;
}

export function Row({
  icon,
  title,
  subtitle,
  onPress,
  trailing = 'chevron-forward',
}: {
  icon?: IconName;
  title: string;
  subtitle?: string;
  onPress: () => void;
  trailing?: IconName;
}) {
  const t = useTheme();
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={subtitle ? `${title}. ${subtitle}` : title}
      style={({ pressed }) => [
        styles.row,
        { backgroundColor: t.surface, borderColor: t.border },
        pressed && { opacity: 0.7 },
      ]}
    >
      {icon ? (
        <View style={[styles.rowIcon, { backgroundColor: t.accentSoft }]}>
          <Ionicons name={icon} size={20} color={t.primary} />
        </View>
      ) : null}
      <View style={{ flex: 1 }}>
        <Text style={[styles.rowTitle, { color: t.text }]}>{title}</Text>
        {subtitle ? (
          <Text style={[styles.rowSubtitle, { color: t.textMuted }]} numberOfLines={2}>
            {subtitle}
          </Text>
        ) : null}
      </View>
      <Ionicons name={trailing} size={18} color={t.textMuted} />
    </Pressable>
  );
}

export function Button({
  title,
  icon,
  onPress,
  variant = 'primary',
}: {
  title: string;
  icon?: IconName;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
}) {
  const t = useTheme();
  const primary = variant === 'primary';
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: primary ? t.primary : 'transparent',
          borderColor: t.primary,
        },
        pressed && { opacity: 0.75 },
      ]}
    >
      {icon ? <Ionicons name={icon} size={18} color={primary ? t.primaryText : t.primary} /> : null}
      <Text style={[styles.buttonText, { color: primary ? t.primaryText : t.primary }]}>{title}</Text>
    </Pressable>
  );
}

export function Chip({ label, selected, onPress }: { label: string; selected: boolean; onPress: () => void }) {
  const t = useTheme();
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected }}
      style={[
        styles.chip,
        { borderColor: selected ? t.primary : t.border, backgroundColor: selected ? t.primary : t.surface },
      ]}
    >
      <Text style={{ color: selected ? t.primaryText : t.text, fontWeight: '600', fontSize: 13 }}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  screenContent: { padding: spacing.lg, paddingBottom: spacing.xxl * 2, gap: spacing.md },
  card: { borderRadius: radius.md, borderWidth: StyleSheet.hairlineWidth, padding: spacing.lg, gap: spacing.sm },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    marginTop: spacing.lg,
  },
  body: { fontSize: 16, lineHeight: 24 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: StyleSheet.hairlineWidth,
  },
  rowIcon: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  rowTitle: { fontSize: 16, fontWeight: '600' },
  rowSubtitle: { fontSize: 14, marginTop: 2, lineHeight: 19 },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.md,
    borderWidth: 1.5,
  },
  buttonText: { fontSize: 16, fontWeight: '700' },
  chip: { paddingHorizontal: spacing.md, paddingVertical: 6, borderRadius: 999, borderWidth: 1 },
});
