/**
 * Sanity checks for the bundled apologetics content. Run with `npm run validate`.
 * Fails if topics are malformed, IDs collide, or generated links can't be built.
 */
import { categories } from '../src/data/categories';
import { resources } from '../src/data/resources';
import { topics } from '../src/data/topics';
import { bibleGatewayUrl, enduringWordUrl, parseReference, resourceSearchUrl } from '../src/lib/urls';
import { searchTopics } from '../src/lib/search';

const errors: string[] = [];
const fail = (msg: string) => errors.push(msg);

const ids = new Set<string>();
for (const t of topics) {
  if (ids.has(t.id)) fail(`Duplicate topic id: ${t.id}`);
  ids.add(t.id);
  if (!/^[a-z0-9-]+$/.test(t.id)) fail(`${t.id}: id must be kebab-case`);
  if (!categories.some((c) => c.id === t.category)) fail(`${t.id}: unknown category ${t.category}`);
  for (const field of ['title', 'question', 'shortAnswer', 'searchTerms'] as const) {
    if (!t[field].trim()) fail(`${t.id}: empty ${field}`);
  }
  if (t.overview.length === 0) fail(`${t.id}: needs an overview`);
  if (t.points.length < 3) fail(`${t.id}: needs at least 3 key points`);
  if (t.objections.length === 0) fail(`${t.id}: needs at least one objection`);
  if (t.verses.length === 0) fail(`${t.id}: needs at least one verse`);
  for (const v of t.verses) {
    if (!parseReference(v.ref)) fail(`${t.id}: unparseable verse reference "${v.ref}"`);
    bibleGatewayUrl(v.ref);
  }
  if (t.keyPassage) {
    if (!parseReference(t.keyPassage)) fail(`${t.id}: unparseable key passage "${t.keyPassage}"`);
    enduringWordUrl(t.keyPassage);
  }
  for (const r of resources) new URL(resourceSearchUrl(r, t.searchTerms));
  if (!searchTopics(t.title).some((res) => res.topic.id === t.id)) fail(`${t.id}: not found by its own title`);
}

for (const c of categories) {
  if (!topics.some((t) => t.category === c.id)) fail(`Category ${c.id} has no topics`);
}

// Link-builder spot checks.
const expect = (actual: string, expected: string) => {
  if (actual !== expected) fail(`Expected ${expected}\n       got ${actual}`);
};
expect(enduringWordUrl('1 Corinthians 15:3-8'), 'https://enduringword.com/bible-commentary/1-corinthians-15/');
expect(enduringWordUrl('Psalm 19'), 'https://enduringword.com/bible-commentary/psalms-19/');
expect(bibleGatewayUrl('John 3:16', 'NIV'), 'https://www.biblegateway.com/passage/?search=John+3%3A16&version=NIV');

if (errors.length) {
  console.error(`Content validation failed:\n- ${errors.join('\n- ')}`);
  process.exit(1);
}
const verses = topics.reduce((n, t) => n + t.verses.length, 0);
const objections = topics.reduce((n, t) => n + t.objections.length, 0);
console.log(
  `OK: ${topics.length} topics, ${categories.length} categories, ${objections} objections, ${verses} verse references.`,
);
