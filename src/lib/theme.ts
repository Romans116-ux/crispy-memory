import { useColorScheme } from 'react-native';

const light = {
  background: '#F7F4EE',
  surface: '#FFFFFF',
  surfaceAlt: '#EFE9DD',
  text: '#1D1B18',
  textMuted: '#6B645A',
  border: '#E2DACB',
  primary: '#7A4B1E',
  primaryText: '#FFFFFF',
  accent: '#B8862B',
  accentSoft: '#F4E7CC',
  danger: '#A33A2B',
};

type Palette = typeof light;

const dark: Palette = {
  background: '#141210',
  surface: '#1F1C19',
  surfaceAlt: '#2A2621',
  text: '#F2EDE4',
  textMuted: '#A89F92',
  border: '#37312A',
  primary: '#E0B36A',
  primaryText: '#1D1B18',
  accent: '#E0B36A',
  accentSoft: '#3A2F1E',
  danger: '#E27B6B',
};

export type Theme = Palette & { dark: boolean };

export function useTheme(): Theme {
  const scheme = useColorScheme();
  return scheme === 'dark' ? { ...dark, dark: true } : { ...light, dark: false };
}

export const spacing = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 };
export const radius = { sm: 8, md: 12, lg: 18 };
export const serif = 'Georgia';
