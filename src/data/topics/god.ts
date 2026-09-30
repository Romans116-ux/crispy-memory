import type { Topic } from '../types';

export const godTopics: Topic[] = [
  {
    id: 'kalam',
    category: 'god',
    title: 'The Universe Had a Beginning',
    question: 'Why is there something rather than nothing?',
    shortAnswer:
      'Whatever begins to exist has a cause. The evidence strongly indicates the universe began to exist. So the universe has a cause beyond space, time and matter, which sounds a great deal like God.',
    overview: [
      'This line of reasoning, known as the kalam cosmological argument, has roots in medieval Islamic and Christian philosophy and has been popularized today by William Lane Craig.',
      'Its strength is that each premise is supported by ordinary intuition, philosophy and modern cosmology, and the conclusion follows logically.',
    ],
    points: [
      {
        heading: 'Premise 1: Whatever begins to exist has a cause',
        body: 'Things do not pop into being uncaused out of nothing. If they could, it would be inexplicable why it doesn\'t happen all the time, with anything and everything. This premise is a first principle that even science assumes.',
      },
      {
        heading: 'Premise 2: The universe began to exist',
        body: 'Big Bang cosmology points to an absolute beginning of space and time. The Borde-Guth-Vilenkin theorem (2003) indicates that any universe which has on average been expanding cannot be past-eternal. The second law of thermodynamics adds that if the universe were infinitely old, it would already have run down.',
      },
      {
        heading: 'Conclusion: The universe has a cause',
        body: 'That cause must itself be beyond space and time (since it created them), immaterial, enormously powerful, and personal, because only a choice can explain how a timeless cause produces an effect with a beginning.',
      },
      {
        heading: 'It fits Scripture',
        body: 'Genesis 1:1 opens with an absolute beginning. Hebrews 11:3 says the visible universe was not made from visible things. Ancient Christians held this long before science confirmed a beginning.',
      },
    ],
    objections: [
      {
        objection: 'Then who made God?',
        response:
          'The premise is that whatever begins to exist has a cause. God, by definition, is eternal and never began to exist, so he does not need a cause. See the topic "Who Made God?" for more.',
      },
      {
        objection: 'Quantum physics shows things can come from nothing.',
        response:
          'The quantum vacuum is not "nothing." It is a sea of energy governed by physical laws. Particles arising from it still arise from something. True nothing has no properties, no laws and no potential at all.',
      },
      {
        objection: 'Maybe our universe came from a multiverse.',
        response:
          'That only pushes the question back. Most multiverse models are themselves subject to the Borde-Guth-Vilenkin result, so the larger system would still need a beginning.',
      },
    ],
    verses: [
      { ref: 'Genesis 1:1', text: 'In the beginning, God created the heavens and the earth.' },
      {
        ref: 'Hebrews 11:3',
        text: 'By faith we understand that the universe has been framed by the word of God, so that what is seen has not been made out of things which are visible.',
      },
      {
        ref: 'Romans 1:20',
        text: 'For the invisible things of him since the creation of the world are clearly seen, being perceived through the things that are made, even his everlasting power and divinity, that they may be without excuse.',
      },
      { ref: 'Psalm 90:2' },
    ],
    searchTerms: 'kalam cosmological argument universe beginning',
    keyPassage: 'Genesis 1',
    furtherReading: ['Reasonable Faith by William Lane Craig', 'On Guard by William Lane Craig'],
  },
  {
    id: 'fine-tuning',
    category: 'god',
    title: 'A Finely Tuned Universe',
    question: 'Isn\'t life in the universe just a lucky accident?',
    shortAnswer:
      'The laws and constants of physics fall within extraordinarily narrow ranges that permit life. The best explanation for such precise, life-permitting settings is a mind that intended them.',
    overview: [
      'Physicists across worldviews acknowledge that if certain constants, such as the strength of gravity, the strong nuclear force or the cosmological constant, were even slightly different, no stable stars, chemistry or life could exist.',
      'The fine-tuning argument asks what best explains this. There are three options: physical necessity, chance, or design.',
    ],
    points: [
      {
        heading: 'The precision is staggering',
        body: 'By some estimates the cosmological constant is tuned to roughly one part in 10^120. The ratio of the strong nuclear force to the electromagnetic force, and the initial entropy of the universe, are also finely balanced.',
      },
      {
        heading: 'Not physical necessity',
        body: 'Nothing we know of in physics requires the constants to have the values they do. They appear to be independent of the laws themselves, like dials that could have been set differently.',
      },
      {
        heading: 'Not plausibly chance',
        body: 'The odds are so small that appealing to chance becomes unreasonable. Imagine a card player dealt a royal flush fifty hands in a row; you would rightly conclude the deck was arranged.',
      },
      {
        heading: 'Design is the best explanation',
        body: 'We already know that minds can set conditions to achieve purposes. A transcendent, intelligent Creator explains why the universe is fit for life. As Psalm 19:1 says, "The heavens declare the glory of God."',
      },
    ],
    objections: [
      {
        objection: 'If it weren\'t fine-tuned we wouldn\'t be here to notice.',
        response:
          'True, but that does not remove the need for an explanation. If you survived a firing squad of fifty marksmen who all missed, you should not shrug and say "if they had hit me I wouldn\'t be here." You should ask why they all missed.',
      },
      {
        objection: 'A multiverse would make our universe inevitable somewhere.',
        response:
          'There is no direct evidence for a multiverse, and any mechanism that generates universes would itself need fine-tuning. It also risks explaining too much: it could "explain" any improbable event, which undermines ordinary science.',
      },
    ],
    verses: [
      {
        ref: 'Psalm 19:1',
        text: 'The heavens declare the glory of God. The expanse shows his handiwork.',
      },
      { ref: 'Isaiah 45:18' },
      { ref: 'Jeremiah 33:25' },
      {
        ref: 'Colossians 1:17',
        text: 'He is before all things, and in him all things are held together.',
      },
    ],
    searchTerms: 'fine tuning universe design argument',
    keyPassage: 'Psalm 19',
    furtherReading: ['A Fortunate Universe by Geraint Lewis and Luke Barnes', 'The Privileged Planet by Gonzalez and Richards'],
  },
  {
    id: 'moral-argument',
    category: 'god',
    title: 'The Moral Law',
    question: 'Can we be good without God?',
    shortAnswer:
      'Atheists can certainly live moral lives. The deeper question is whether, without God, anything is truly right or wrong. Objective moral values point to a moral Lawgiver.',
    overview: [
      'Nearly everyone recognizes that some things, such as torturing a child for fun, are really wrong, not just unfashionable or disadvantageous. That recognition is a clue to the nature of reality.',
      'The moral argument reasons: If God does not exist, objective moral values do not exist. Objective moral values do exist. Therefore God exists.',
    ],
    points: [
      {
        heading: 'The question is grounding, not behavior',
        body: 'The argument does not claim that unbelievers cannot know or do right. Paul says the law is written on every human heart (Romans 2:15). The claim is that only God provides a foundation for moral facts that are binding on everyone.',
      },
      {
        heading: 'Without God, morality becomes opinion',
        body: 'If humans are merely the products of blind evolution, our moral feelings are just survival instincts. They might be useful, but they would not be true. Many atheist philosophers have acknowledged this conclusion.',
      },
      {
        heading: 'We experience morality as real',
        body: 'When we say the Holocaust was evil, we don\'t mean "I dislike it." We mean it was wrong even though its perpetrators approved of it. Moral reformers like William Wilberforce and Martin Luther King Jr. appealed to a standard above their cultures.',
      },
      {
        heading: 'God\'s nature is the standard',
        body: 'In Christianity, goodness is not an arbitrary rule God invents; it flows from his unchanging, perfectly good character. That provides a stable, personal foundation for morality.',
      },
    ],
    objections: [
      {
        objection: 'Is something good because God commands it, or does God command it because it is good? (Euthyphro)',
        response:
          'This is a false dilemma. The good is grounded in God\'s own nature. His commands flow from who he is, so they are neither arbitrary nor dependent on some standard outside him.',
      },
      {
        objection: 'Evolution explains why we have moral feelings.',
        response:
          'At most, evolution could explain why we have certain feelings, not whether those feelings track real moral truth. In fact, if our morality is only a survival mechanism, that gives us reason to doubt it is objectively true.',
      },
    ],
    verses: [
      {
        ref: 'Romans 2:14-15',
        text: '(for when Gentiles who don\'t have the law do by nature the things of the law, these, not having the law, are a law to themselves, in that they show the work of the law written in their hearts, their conscience testifying with them, and their thoughts among themselves accusing or else excusing them)',
      },
      { ref: 'Micah 6:8' },
      { ref: 'Psalm 145:17' },
    ],
    searchTerms: 'moral argument objective morality God',
    keyPassage: 'Romans 2',
    furtherReading: ['Mere Christianity by C.S. Lewis (Book 1)', 'Good God by David Baggett and Jerry Walls'],
  },
  {
    id: 'who-made-god',
    category: 'god',
    title: 'Who Made God?',
    question: 'If everything needs a cause, what caused God?',
    shortAnswer:
      'Not everything needs a cause, only things that begin to exist. God is eternal and never began, so asking "who made God?" is like asking "who is the bachelor\'s wife?"',
    overview: [
      'This is one of the most common questions children and skeptics ask, and it is a good one. It rests, however, on a misunderstanding of the arguments for God.',
      'No serious argument claims that "everything has a cause." The claim is that everything that comes into being has a cause.',
    ],
    points: [
      {
        heading: 'An infinite chain explains nothing',
        body: 'If every cause needed a prior cause forever, nothing would ever get started. Reason points to a first, uncaused cause that exists by its own nature.',
      },
      {
        heading: 'God is necessary, not contingent',
        body: 'Things like trees, planets and people exist but might not have. God, as the greatest possible being, exists necessarily. He depends on nothing outside himself.',
      },
      {
        heading: 'Everyone believes in something eternal',
        body: 'Either something has always existed, or everything came from absolutely nothing. The atheist has historically said the universe is eternal; the Christian says God is. Science now indicates the universe had a beginning.',
      },
    ],
    objections: [
      {
        objection: 'Richard Dawkins says God would have to be more complex than the universe, so even more improbable.',
        response:
          'God is not a physical object made of parts, so he is not complex in that sense. Also, in science we do not need an explanation of the explanation before accepting it. Archaeologists can recognize arrowheads as designed without knowing who designed the designer.',
      },
    ],
    verses: [
      {
        ref: 'Psalm 90:2',
        text: 'Before the mountains were brought forth, before you had formed the earth and the world, even from everlasting to everlasting, you are God.',
      },
      { ref: 'Exodus 3:14' },
      { ref: 'Revelation 1:8' },
    ],
    searchTerms: 'who made God who created God',
    keyPassage: 'Psalm 90',
    furtherReading: ['Who Made God? edited by Ravi Zacharias and Norman Geisler'],
  },
];
