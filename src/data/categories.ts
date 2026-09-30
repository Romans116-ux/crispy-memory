import type { Category } from './types';

export const categories: Category[] = [
  {
    id: 'foundations',
    title: 'Foundations',
    subtitle: 'What apologetics is and how to do it well',
    icon: 'compass-outline',
  },
  {
    id: 'god',
    title: 'Does God Exist?',
    subtitle: 'Cosmology, design, morality and reason',
    icon: 'planet-outline',
  },
  {
    id: 'bible',
    title: 'The Bible',
    subtitle: 'Manuscripts, canon, archaeology and prophecy',
    icon: 'book-outline',
  },
  {
    id: 'jesus',
    title: 'Jesus Christ',
    subtitle: 'History, identity and the resurrection',
    icon: 'sunny-outline',
  },
  {
    id: 'tough',
    title: 'Tough Questions',
    subtitle: 'Evil, hell, science and exclusivity',
    icon: 'help-buoy-outline',
  },
  {
    id: 'worldviews',
    title: 'Other Worldviews',
    subtitle: 'Engaging other beliefs with truth and grace',
    icon: 'globe-outline',
  },
];

export const categoryById = Object.fromEntries(categories.map((c) => [c.id, c])) as Record<
  Category['id'],
  Category
>;
