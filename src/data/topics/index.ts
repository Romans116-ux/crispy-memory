import type { CategoryId, Topic } from '../types';
import { atheismTopics } from './atheism';
import { bibleTopics } from './bible';
import { buddhismTopics } from './buddhism';
import { foundationsTopics } from './foundations';
import { godTopics } from './god';
import { islamTopics } from './islam';
import { jwTopics } from './jehovahs-witnesses';
import { jesusTopics } from './jesus';
import { toughTopics } from './tough';
import { worldviewTopics } from './worldviews';

export const topics: Topic[] = [
  ...foundationsTopics,
  ...godTopics,
  ...bibleTopics,
  ...jesusTopics,
  ...toughTopics,
  ...islamTopics,
  ...atheismTopics,
  ...buddhismTopics,
  ...jwTopics,
  ...worldviewTopics,
];

export const topicById: Record<string, Topic> = Object.fromEntries(topics.map((t) => [t.id, t]));

export function topicsInCategory(category: CategoryId): Topic[] {
  return topics.filter((t) => t.category === category);
}
