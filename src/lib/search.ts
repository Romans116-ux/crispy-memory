import { topics } from '../data/topics';
import type { Topic } from '../data/types';

export interface SearchResult {
  topic: Topic;
  score: number;
  /** Short excerpt showing where the match occurred. */
  excerpt: string;
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[‘’']/g, '')
    .replace(/[^a-z0-9: ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function excerptAround(text: string, term: string): string {
  const idx = text.toLowerCase().indexOf(term);
  if (idx < 0) return text.slice(0, 140);
  const start = Math.max(0, idx - 50);
  const end = Math.min(text.length, idx + term.length + 90);
  return `${start > 0 ? '…' : ''}${text.slice(start, end).trim()}${end < text.length ? '…' : ''}`;
}

/** Simple weighted full-text search across all topic content. */
export function searchTopics(query: string, pool: Topic[] = topics): SearchResult[] {
  const q = normalize(query);
  if (q.length < 2) return [];
  const terms = q.split(' ').filter((t) => t.length > 1);
  if (terms.length === 0) return [];

  const results: SearchResult[] = [];
  for (const topic of pool) {
    const fields: [string, number][] = [
      [topic.title, 10],
      [topic.question, 6],
      [topic.shortAnswer, 3],
      [topic.searchTerms, 4],
      [topic.overview.join(' '), 1],
      [topic.points.map((p) => `${p.heading} ${p.body}`).join(' '), 1],
      [topic.objections.map((o) => `${o.objection} ${o.response}`).join(' '), 2],
      [topic.verses.map((v) => `${v.ref} ${v.text ?? ''}`).join(' '), 2],
    ];

    let score = 0;
    let matchedAll = true;
    let excerpt = '';
    for (const term of terms) {
      let termScore = 0;
      for (const [text, weight] of fields) {
        if (normalize(text).includes(term)) {
          termScore += weight;
          if (!excerpt && weight <= 3) excerpt = excerptAround(text, term);
        }
      }
      if (termScore === 0) matchedAll = false;
      score += termScore;
    }
    if (matchedAll && score > 0) {
      results.push({ topic, score, excerpt: excerpt || topic.shortAnswer });
    }
  }
  return results.sort((a, b) => b.score - a.score);
}
