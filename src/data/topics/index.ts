import type { CategoryId, Topic } from '../types';
import { bibleTopics } from './bible';
import { foundationsTopics } from './foundations';
import { godTopics } from './god';
import { jesusTopics } from './jesus';
import { toughTopics } from './tough';
import { worldviewTopics } from './worldviews';

export const topics: Topic[] = [
  ...foundationsTopics,
  ...godTopics,
  ...bibleTopics,
  ...jesusTopics,
  ...toughTopics,
  ...worldviewTopics,
];

export const topicById: Record<string, Topic> = Object.fromEntries(topics.map((t) => [t.id, t]));

export function topicsInCategory(category: CategoryId): Topic[] {
  return topics.filter((t) => t.category === category);
}
