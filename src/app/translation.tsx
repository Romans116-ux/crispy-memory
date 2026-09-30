import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Body, Screen, SectionTitle } from '../components/ui';
import { translations } from '../data/bible/translations';
import type { Translation } from '../data/bible/translations';
import { radius, spacing, useTheme } from '../lib/theme';
import { useTranslation } from '../lib/translation';

function Option({ item }: { item: Translation }) {
  const t = useTheme();
  const { translation, setTranslation } = useTranslation();
  const selected = translation === item.id;
  return (
    <Pressable
      onPress={() => {
        setTranslation(item.id);
        if (router.canGoBack()) router.back();
      }}
      accessibilityRole="radio"
      accessibilityState={{ checked: selected }}
      accessibilityLabel={`${item.name} (${item.id})`}
      style={({ pressed }) => [
        styles.option,
        { backgroundColor: t.surface, borderColor: selected ? t.primary : t.border },
        pressed && { opacity: 0.7 },
      ]}
    >
      <View style={{ flex: 1 }}>
        <Text style={{ color: t.text, fontSize: 16, fontWeight: '700' }}>{item.id}</Text>
        <Text style={{ color: t.textMuted, fontSize: 14 }}>{item.name}</Text>
      </View>
      <Ionicons
        name={selected ? 'checkmark-circle' : 'ellipse-outline'}
        size={24}
        color={selected ? t.primary : t.border}
      />
    </Pressable>
  );
}

export default function TranslationScreen() {
  return (
    <Screen>
      <Body muted>
        Your choice is used for verses quoted in the app and for every “Read in context” link to Bible Gateway.
      </Body>
      <SectionTitle>Quoted in the app</SectionTitle>
      {translations
        .filter((x) => x.bundled)
        .map((x) => (
          <Option key={x.id} item={x} />
        ))}
      <SectionTitle>Read on Bible Gateway</SectionTitle>
      <Body muted>
        These translations can’t be included in the app. Quotes appear in the NIV, and tapping a verse opens it in
        your chosen translation.
      </Body>
      {translations
        .filter((x) => !x.bundled)
        .map((x) => (
          <Option key={x.id} item={x} />
        ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1.5,
  },
});
