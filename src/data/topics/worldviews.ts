import type { Topic } from '../types';

export const worldviewTopics: Topic[] = [
  {
    id: 'trinity',
    category: 'worldviews',
    title: 'The Trinity',
    question: 'How can God be three and one at the same time? Isn\'t that a contradiction?',
    shortAnswer:
      'The Trinity is not "one God and three Gods" or "one person and three persons." It is one God (one "what") who eternally exists as three persons (three "whos"): Father, Son and Holy Spirit.',
    overview: [
      'The word "Trinity" is not in the Bible, but the teaching is. Christians summarized what Scripture says in three statements: there is only one God; the Father, Son and Spirit are each fully God; and the three are distinct persons.',
      'Understanding the Trinity is essential when talking with Muslims, Jehovah\'s Witnesses, Oneness Pentecostals and others who reject it.',
    ],
    points: [
      {
        heading: 'There is one God',
        body: 'Scripture is emphatically monotheistic: "Hear, O Israel: The LORD our God, the LORD is one" (Deuteronomy 6:4). Jesus affirmed this (Mark 12:29).',
      },
      {
        heading: 'Three persons are called God',
        body: 'The Father is God (John 6:27). The Son is God (John 1:1, 20:28; Titus 2:13). The Holy Spirit is God; lying to him is lying to God (Acts 5:3-4).',
      },
      {
        heading: 'The three are distinct',
        body: 'At Jesus\' baptism the Son is baptized, the Spirit descends and the Father speaks from heaven (Matthew 3:16-17). The Son prays to the Father and sends the Spirit. They relate to each other personally.',
      },
      {
        heading: 'One name',
        body: 'Jesus commanded baptism "in the name (singular) of the Father and of the Son and of the Holy Spirit" (Matthew 28:19).',
      },
      {
        heading: 'Why it matters',
        body: 'If God is Trinity, love is eternal: the Father, Son and Spirit have loved each other forever. God did not need to create in order to love. The Trinity also makes the gospel possible, since the Father sends the Son, who is himself God, to save us.',
      },
    ],
    objections: [
      {
        objection: '1 + 1 + 1 = 3, not 1.',
        response:
          'The doctrine does not claim three persons are one person, which would be a contradiction. It says God is one in being and three in person. Different categories are being counted.',
      },
      {
        objection: 'The Trinity was invented at the Council of Nicaea.',
        response:
          'Nicaea (AD 325) clarified language to defend what churches already believed against Arius. Earlier writers such as Ignatius (around AD 110) called Jesus God, and the New Testament itself uses triadic formulas (2 Corinthians 13:14).',
      },
    ],
    verses: [
      { ref: 'Deuteronomy 6:4', quote: true },
      { ref: 'Matthew 28:19', quote: true },
      { ref: 'Matthew 3:16-17' },
      { ref: '2 Corinthians 13:14' },
      { ref: 'Acts 5:3-4' },
    ],
    searchTerms: 'doctrine of the Trinity explained',
    keyPassage: 'John 1',
    furtherReading: ['The Forgotten Trinity by James White', 'Delighting in the Trinity by Michael Reeves'],
  },
  {
    id: 'relativism',
    category: 'worldviews',
    title: 'Is Truth Relative?',
    question: '"That may be true for you, but not for me." Isn\'t all truth relative?',
    shortAnswer:
      'The statement "all truth is relative" presents itself as absolutely true, so it refutes itself. Truth is what corresponds to reality, and reality doesn\'t change based on our preferences.',
    overview: [
      'Relativism is common in Western culture, especially about religion and morality. Often it is motivated by a good desire to be humble and tolerant.',
      'But true tolerance requires disagreement: you only tolerate views you think are mistaken. And humility is best served by pursuing truth together, not denying it exists.',
    ],
    points: [
      {
        heading: 'Relativism is self-defeating',
        body: 'If "there is no absolute truth" is absolutely true, then it is false. If it is only relatively true, there is no reason anyone else should accept it.',
      },
      {
        heading: 'Preferences vs. facts',
        body: 'Your favorite ice cream is true "for you." Whether Jesus rose from the dead is not that kind of claim. It either happened or it didn\'t, regardless of what anyone believes.',
      },
      {
        heading: 'Nobody lives as a relativist',
        body: 'Relativists still object when they are lied to, robbed or treated unjustly. Our reactions to wrongs done to us reveal that we believe in real moral truth.',
      },
      {
        heading: 'Jesus claimed to be the truth',
        body: 'Jesus told Pilate he came to testify to the truth, and Pilate replied, "What is truth?" (John 18:37-38). Jesus claimed not just to teach truth but to be the truth (John 14:6).',
      },
    ],
    objections: [
      {
        objection: 'Different cultures have different morals, so morality is relative.',
        response:
          'Disagreement doesn\'t mean there is no right answer; cultures have disagreed about whether the earth is round. And beneath the surface, cultures share remarkably similar core moral values, as C.S. Lewis documented in The Abolition of Man.',
      },
    ],
    verses: [
      { ref: 'John 18:37-38' },
      { ref: 'John 8:32', quote: true },
      { ref: 'John 14:6', quote: true },
    ],
    searchTerms: 'moral relativism absolute truth',
    keyPassage: 'John 18',
    furtherReading: ['Relativism: Feet Firmly Planted in Mid-Air by Francis Beckwith and Greg Koukl', 'The Abolition of Man by C.S. Lewis'],
  },
];
