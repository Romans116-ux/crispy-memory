import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

import { DEFAULT_TRANSLATION, translationById } from '../data/bible/translations';

const STORAGE_KEY = 'reason-for-hope/translation/v1';

interface TranslationValue {
  translation: string;
  setTranslation: (id: string) => void;
}

const TranslationContext = createContext<TranslationValue | null>(null);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [translation, setState] = useState(DEFAULT_TRANSLATION);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((saved) => {
        if (saved && translationById[saved]) setState(saved);
      })
      .catch(() => {});
  }, []);

  const setTranslation = useCallback((id: string) => {
    if (!translationById[id]) return;
    setState(id);
    AsyncStorage.setItem(STORAGE_KEY, id).catch(() => {});
  }, []);

  const value = useMemo(() => ({ translation, setTranslation }), [translation, setTranslation]);
  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>;
}

export function useTranslation(): TranslationValue {
  const ctx = useContext(TranslationContext);
  if (!ctx) throw new Error('useTranslation must be used inside TranslationProvider');
  return ctx;
}
