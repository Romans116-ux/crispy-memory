import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import type { ComponentProps } from 'react';
import type { ColorValue } from 'react-native';

import { TranslationButton } from '../../components/TranslationButton';
import type { IconName } from '../../components/ui';
import { useTheme } from '../../lib/theme';

type IconColor = ComponentProps<typeof Ionicons>['color'];

function tabIcon(name: IconName) {
  // The tab bar passes a generic ColorValue; it is always a plain color string here.
  return ({ color, size }: { color: ColorValue; size: number }) => (
    <Ionicons name={name} size={size} color={color as IconColor} />
  );
}

export default function TabLayout() {
  const t = useTheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: t.primary,
        tabBarInactiveTintColor: t.textMuted,
        tabBarStyle: { backgroundColor: t.surface, borderTopColor: t.border },
        headerStyle: { backgroundColor: t.background },
        headerTitleStyle: { color: t.text },
        headerShadowVisible: false,
        headerRight: () => <TranslationButton />,
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Today', tabBarIcon: tabIcon('sunny-outline') }} />
      <Tabs.Screen name="topics" options={{ title: 'Topics', tabBarIcon: tabIcon('albums-outline') }} />
      <Tabs.Screen name="scripture" options={{ title: 'Scripture', tabBarIcon: tabIcon('book-outline') }} />
      <Tabs.Screen name="saved" options={{ title: 'Saved', tabBarIcon: tabIcon('bookmark-outline') }} />
      <Tabs.Screen name="resources" options={{ title: 'Resources', tabBarIcon: tabIcon('library-outline') }} />
    </Tabs>
  );
}
