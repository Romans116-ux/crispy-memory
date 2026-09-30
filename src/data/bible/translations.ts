export interface Translation {
  /** Bible Gateway version code. */
  id: string;
  name: string;
  /** True when verse text for this translation ships inside the app. */
  bundled: boolean;
}

/** Translations offered in the picker. Non-bundled ones are read on Bible Gateway. */
export const translations: Translation[] = [
  { id: 'NIV', name: 'New International Version', bundled: true },
  { id: 'ESV', name: 'English Standard Version', bundled: false },
  { id: 'KJV', name: 'King James Version', bundled: true },
  { id: 'NKJV', name: 'New King James Version', bundled: false },
  { id: 'NASB', name: 'New American Standard Bible', bundled: false },
  { id: 'CSB', name: 'Christian Standard Bible', bundled: false },
  { id: 'NLT', name: 'New Living Translation', bundled: false },
  { id: 'NET', name: 'New English Translation', bundled: false },
  { id: 'AMP', name: 'Amplified Bible', bundled: false },
  { id: 'WEB', name: 'World English Bible', bundled: true },
];

export const DEFAULT_TRANSLATION = 'NIV';

export const translationById: Record<string, Translation> = Object.fromEntries(
  translations.map((t) => [t.id, t]),
);

export const NIV_COPYRIGHT =
  'Scripture quotations taken from The Holy Bible, New International Version® NIV®. Copyright © 1973, 1978, 1984, 2011 by Biblica, Inc.™ Used by permission. All rights reserved worldwide.';
