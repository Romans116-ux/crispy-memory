import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { Platform, Pressable, Text } from 'react-native';

import { spacing, useTheme } from '../lib/theme';
import { useTranslation } from '../lib/translation';

/** Header button showing the current translation; opens the picker. */
export function TranslationButton() {
  const t = useTheme();
  const { translation } = useTranslation();
  return (
    <Pressable
      onPress={() => router.push('/translation')}
      accessibilityRole="button"
      accessibilityLabel={`Bible translation: ${translation}. Change translation`}
      hitSlop={10}
      style={({ pressed }) => ({
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginRight: Platform.OS === 'web' ? spacing.lg : 0,
        opacity: pressed ? 0.6 : 1,
      })}
    >
      <Ionicons name="book-outline" size={18} color={t.primary} />
      <Text style={{ color: t.primary, fontWeight: '700', fontSize: 15 }}>{translation}</Text>
    </Pressable>
  );
}
