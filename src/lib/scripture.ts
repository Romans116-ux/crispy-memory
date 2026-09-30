import { NIV } from '../data/bible/niv';
import { KJV, WEB } from '../data/bible/public-domain';
import { DEFAULT_TRANSLATION } from '../data/bible/translations';

const bundled: Record<string, Record<string, string>> = { NIV, KJV, WEB };

export interface VerseText {
  text: string;
  /** Translation the text is actually in; differs from the request when it isn't bundled. */
  translation: string;
}

/**
 * Returns bundled text for a quoted verse in the requested translation, falling back
 * to the NIV when that translation can't be shipped in the app.
 */
export function verseText(ref: string, translation: string): VerseText | null {
  const preferred = bundled[translation]?.[ref];
  if (preferred) return { text: preferred, translation };
  const fallback = bundled[DEFAULT_TRANSLATION][ref];
  return fallback ? { text: fallback, translation: DEFAULT_TRANSLATION } : null;
}

export const bundledTranslationIds = Object.keys(bundled);
