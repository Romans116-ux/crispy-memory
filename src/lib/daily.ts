import { topics } from '../data/topics';
import type { Topic, Verse } from '../data/types';

/** Whole days since the Unix epoch in local time, so the pick changes at local midnight. */
export function dayNumber(date: Date = new Date()): number {
  const local = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  return Math.floor(local / 86_400_000);
}

export function topicOfTheDay(date: Date = new Date()): Topic {
  return topics[dayNumber(date) % topics.length];
}

const quotedVerses: { verse: Verse; topic: Topic }[] = topics.flatMap((topic) =>
  topic.verses.filter((v) => v.quote).map((verse) => ({ verse, topic })),
);

export function verseOfTheDay(date: Date = new Date()): { verse: Verse; topic: Topic } {
  // Offset by a prime so the verse and the topic don't always come from the same topic.
  return quotedVerses[(dayNumber(date) * 7 + 3) % quotedVerses.length];
}
