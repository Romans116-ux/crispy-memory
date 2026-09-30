export interface Resource {
  id: string;
  name: string;
  url: string;
  /** Domain used for site-restricted searches. */
  domain: string;
  description: string;
  bestFor: string;
  icon: string;
}

export const resources: Resource[] = [
  {
    id: 'gotquestions',
    name: 'Got Questions',
    url: 'https://www.gotquestions.org',
    domain: 'gotquestions.org',
    description:
      'Concise, Scripture-based answers to hundreds of thousands of questions about the Bible, theology and life.',
    bestFor: 'Quick, clear answers to specific questions',
    icon: 'chatbubbles-outline',
  },
  {
    id: 'carm',
    name: 'CARM',
    url: 'https://carm.org',
    domain: 'carm.org',
    description:
      'Christian Apologetics & Research Ministry: articles on doctrine, cults, world religions, atheism and logic.',
    bestFor: 'Doctrine, cults and comparative religion',
    icon: 'shield-checkmark-outline',
  },
  {
    id: 'preceptaustin',
    name: 'Precept Austin',
    url: 'https://www.preceptaustin.org',
    domain: 'preceptaustin.org',
    description:
      'Verse-by-verse commentaries, Greek and Hebrew word studies, and a large library of classic Bible study resources.',
    bestFor: 'Word studies and in-depth inductive study',
    icon: 'search-outline',
  },
  {
    id: 'enduringword',
    name: 'Enduring Word',
    url: 'https://enduringword.com',
    domain: 'enduringword.com',
    description:
      "David Guzik's free, readable commentary on every chapter of the Bible, plus audio and video teaching.",
    bestFor: 'Chapter-by-chapter commentary',
    icon: 'library-outline',
  },
  {
    id: 'wesleyhuff',
    name: 'Wesley Huff',
    url: 'https://www.wesleyhuff.com',
    domain: 'wesleyhuff.com',
    description:
      'Teaching on New Testament manuscripts, textual criticism, early Christianity and the reliability of the Bible.',
    bestFor: 'Manuscripts and the historical reliability of Scripture',
    icon: 'document-text-outline',
  },
  {
    id: 'biblegateway',
    name: 'Bible Gateway',
    url: 'https://www.biblegateway.com',
    domain: 'biblegateway.com',
    description:
      'Read and search the Bible in hundreds of translations and languages, with side-by-side comparison.',
    bestFor: 'Reading any passage in any translation',
    icon: 'book-outline',
  },
  {
    id: 'logos',
    name: 'Logos',
    url: 'https://www.logos.com',
    domain: 'logos.com',
    description:
      'Bible study software and a vast digital library of commentaries, original-language tools and theology.',
    bestFor: 'Serious study with original-language tools',
    icon: 'layers-outline',
  },
];

export const resourceById = Object.fromEntries(resources.map((r) => [r.id, r])) as Record<
  string,
  Resource
>;
