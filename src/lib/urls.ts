// Pure URL builders, kept free of native imports so they can run in Node scripts.
import type { Resource } from '../data/resources';

export const DEFAULT_TRANSLATION = 'ESV';

export const translations = ['ESV', 'NIV', 'NKJV', 'NASB', 'CSB', 'KJV', 'NLT', 'WEB'] as const;
export type Translation = (typeof translations)[number];

export function bibleGatewayUrl(reference: string, version: string = DEFAULT_TRANSLATION): string {
  const search = encodeURIComponent(reference.trim()).replace(/%20/g, '+');
  return `https://www.biblegateway.com/passage/?search=${search}&version=${encodeURIComponent(version)}`;
}

/**
 * Splits a reference such as "1 Corinthians 15:3-8" or "Job 38-42" into
 * its book and first chapter. Returns null if it cannot be parsed.
 */
export function parseReference(reference: string): { book: string; chapter: number } | null {
  const match = reference.trim().match(/^((?:[1-3]\s*)?[A-Za-z][A-Za-z ]*?)\s+(\d+)/);
  if (!match) return null;
  return { book: match[1].replace(/\s+/g, ' ').trim(), chapter: Number(match[2]) };
}

const enduringWordBookSlugs: Record<string, string> = {
  psalm: 'psalms',
  'song of solomon': 'song-of-solomon',
  'song of songs': 'song-of-solomon',
};

/** Chapter commentary by David Guzik on enduringword.com. */
export function enduringWordUrl(reference: string): string {
  const parsed = parseReference(reference);
  if (!parsed) return 'https://enduringword.com/bible-commentary/';
  const lower = parsed.book.toLowerCase();
  const slug = enduringWordBookSlugs[lower] ?? lower.replace(/\s+/g, '-');
  return `https://enduringword.com/bible-commentary/${slug}-${parsed.chapter}/`;
}

/** A site-restricted web search, used so links keep working as sites reorganize. */
export function siteSearchUrl(domain: string, query: string): string {
  return `https://duckduckgo.com/?q=${encodeURIComponent(`site:${domain} ${query}`)}`;
}

export function resourceSearchUrl(resource: Resource, query: string): string {
  if (resource.id === 'biblegateway') {
    return `https://www.biblegateway.com/quicksearch/?quicksearch=${encodeURIComponent(query)}`;
  }
  return siteSearchUrl(resource.domain, query);
}
