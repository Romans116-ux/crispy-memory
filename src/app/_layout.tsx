import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { BookmarksProvider } from '../lib/bookmarks';
import { useTheme } from '../lib/theme';
import { TranslationProvider } from '../lib/translation';

export default function RootLayout() {
  const t = useTheme();
  return (
    <TranslationProvider>
    <BookmarksProvider>
      <StatusBar style={t.dark ? 'light' : 'dark'} />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: t.background },
          headerTintColor: t.primary,
          headerTitleStyle: { color: t.text },
          headerShadowVisible: false,
          headerBackTitle: 'Back',
          contentStyle: { backgroundColor: t.background },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="topic/[id]" options={{ title: '' }} />
        <Stack.Screen name="category/[id]" options={{ title: '' }} />
        <Stack.Screen name="about" options={{ title: 'About', presentation: 'modal' }} />
        <Stack.Screen name="translation" options={{ title: 'Bible Translation', presentation: 'modal' }} />
      </Stack>
    </BookmarksProvider>
    </TranslationProvider>
  );
}
