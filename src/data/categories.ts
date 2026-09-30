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
    id: 'islam',
    title: 'Islam',
    subtitle: 'Jesus, the Bible and salvation in conversation with Muslims',
    icon: 'moon-outline',
  },
  {
    id: 'atheism',
    title: 'Atheism & Skepticism',
    subtitle: 'Miracles, science, the mind and religion\'s record',
    icon: 'flask-outline',
  },
  {
    id: 'buddhism',
    title: 'Buddhism',
    subtitle: 'Suffering, karma, the self and the way of Jesus',
    icon: 'flower-outline',
  },
  {
    id: 'jw',
    title: 'Jehovah\'s Witnesses',
    subtitle: 'Christ, the Spirit and the Watchtower\'s claims',
    icon: 'people-outline',
  },
  {
    id: 'worldviews',
    title: 'Truth and Doctrine',
    subtitle: 'Relativism, the Trinity and core Christian beliefs',
    icon: 'globe-outline',
  },
];

export const categoryById = Object.fromEntries(categories.map((c) => [c.id, c])) as Record<
  Category['id'],
  Category
>;
