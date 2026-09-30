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
        body: 'Scripture is emphatically monotheistic: "Hear, Israel: Yahweh is our God. Yahweh is one" (Deuteronomy 6:4). Jesus affirmed this (Mark 12:29).',
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
      { ref: 'Deuteronomy 6:4', text: 'Hear, Israel: Yahweh is our God. Yahweh is one.' },
      {
        ref: 'Matthew 28:19',
        text: 'Go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit,',
      },
      { ref: 'Matthew 3:16-17' },
      { ref: '2 Corinthians 13:14' },
      { ref: 'Acts 5:3-4' },
    ],
    searchTerms: 'doctrine of the Trinity explained',
    keyPassage: 'John 1',
    furtherReading: ['The Forgotten Trinity by James White', 'Delighting in the Trinity by Michael Reeves'],
  },
  {
    id: 'jehovahs-witnesses',
    category: 'worldviews',
    title: 'Talking with Jehovah\'s Witnesses',
    question: 'Jehovah\'s Witnesses say Jesus is "a god," Michael the archangel. How do I respond?',
    shortAnswer:
      'Be kind, and keep coming back to the text of Scripture, especially passages that show Jesus sharing the identity, works and worship of Jehovah.',
    overview: [
      'Jehovah\'s Witnesses are often sincere and well prepared. They teach that Jesus is a created being, the first creation of Jehovah, and that the Holy Spirit is an impersonal force. They use their own New World Translation.',
      'The most helpful conversations are patient, respectful and focused on a few key passages read carefully together.',
    ],
    points: [
      {
        heading: 'John 1:1 and "a god"',
        body: 'The New World Translation renders John 1:1c as "the Word was a god." In Greek, a predicate noun placed before the verb without the article typically describes the nature or quality of the subject rather than making it indefinite. The sense is "what God was, the Word was." A "lesser god" would also conflict with strict monotheism (Isaiah 43:10).',
      },
      {
        heading: 'Jesus is the Creator',
        body: 'John 1:3 says "all things were made through him," and Colossians 1:16 says all things were created by him. Isaiah 44:24 says Jehovah made all things alone. Only the Creator can be the agent of all creation. The NWT inserts the word "other" into Colossians 1 ("all other things") to avoid this.',
      },
      {
        heading: 'Jesus receives worship',
        body: 'In Hebrews 1:6 the angels are commanded to worship the Son. Angels refuse worship (Revelation 22:8-9), so the Son cannot be an angel, and Hebrews 1 explicitly contrasts him with angels.',
      },
      {
        heading: 'Jehovah texts applied to Jesus',
        body: 'Isaiah 45:23 says every knee will bow to Jehovah; Philippians 2:10-11 applies this to Jesus. Joel 2:32 says whoever calls on the name of Jehovah will be saved; Romans 10:9-13 applies it to Jesus.',
      },
    ],
    objections: [
      {
        objection: 'Colossians 1:15 calls Jesus "the firstborn of all creation," so he was created.',
        response:
          '"Firstborn" can mean preeminent heir, not first created. God calls David his "firstborn" (Psalm 89:27), though David was the youngest son. The next verse says all things were created by him, which rules out his being one of them.',
      },
    ],
    verses: [
      {
        ref: 'John 1:1-3',
        text: 'In the beginning was the Word, and the Word was with God, and the Word was God. The same was in the beginning with God. All things were made through him. Without him, nothing was made that has been made.',
      },
      { ref: 'Colossians 1:15-17' },
      { ref: 'Hebrews 1:6-8' },
      { ref: 'Isaiah 44:24' },
      { ref: 'Philippians 2:9-11' },
    ],
    searchTerms: 'Jehovah\'s Witnesses deity of Christ John 1:1',
    keyPassage: 'Hebrews 1',
    furtherReading: ['Reasoning from the Scriptures with the Jehovah\'s Witnesses by Ron Rhodes', 'Jehovah\'s Witnesses resources at carm.org'],
  },
  {
    id: 'islam-and-jesus',
    category: 'worldviews',
    title: 'Islam and the Crucifixion',
    question: 'Muslims honor Jesus as a prophet but say he wasn\'t crucified. Who is right?',
    shortAnswer:
      'The crucifixion of Jesus is one of the most firmly established facts of ancient history, attested by Christian, Roman and Jewish sources. The Qur\'an\'s denial comes about six hundred years later.',
    overview: [
      'Islam holds Jesus (Isa) in high regard as a prophet born of a virgin who performed miracles. But Surah 4:157 states that he was not killed or crucified; it only appeared so.',
      'Conversations with Muslim friends go best when we show respect for their devotion and focus on the historical evidence and on who Jesus claimed to be.',
    ],
    points: [
      {
        heading: 'Historians agree on the crucifixion',
        body: 'It is reported in all four Gospels, in Paul\'s letters, by Tacitus and by Josephus. Scholars across the spectrum, including skeptics like Bart Ehrman and John Dominic Crossan, consider it certain.',
      },
      {
        heading: 'Earliest sources carry the most weight',
        body: 'Historians favor sources closest to events. The New Testament documents were written within decades, many by eyewitnesses or their associates. The Qur\'an was recited around AD 610-632, far removed from first-century Judea.',
      },
      {
        heading: 'The Qur\'an affirms earlier Scripture',
        body: 'The Qur\'an says the Torah and Gospel were given by God (for example Surah 5:46-47) and tells Christians to judge by the Gospel. Manuscripts from before Muhammad\'s time show that the Gospel then was the same one we have now, including the crucifixion and resurrection.',
      },
      {
        heading: 'The cross is the heart of the message',
        body: 'Jesus repeatedly predicted his death and resurrection (Mark 8:31). Without the cross there is no atonement and no resurrection, which is why the question matters so much.',
      },
    ],
    objections: [
      {
        objection: 'The Bible has been corrupted.',
        response:
          'This claim is hard to reconcile with the manuscript evidence, which shows no wholesale change to the text before or after Muhammad. It also raises a theological problem: if God could preserve the Qur\'an, why could he not preserve the Torah and Gospel he gave earlier?',
      },
      {
        objection: 'God would not allow a great prophet to be humiliated on a cross.',
        response:
          'Scripture foresaw a suffering Messiah (Isaiah 53). The cross is not God\'s defeat but his victory: he vindicated Jesus by raising him from the dead.',
      },
    ],
    verses: [
      { ref: 'Mark 8:31' },
      {
        ref: 'Isaiah 53:5',
        text: 'But he was pierced for our transgressions. He was crushed for our iniquities. The punishment that brought our peace was on him; and by his wounds we are healed.',
      },
      { ref: '1 Corinthians 15:3-4' },
      { ref: 'Galatians 1:8' },
    ],
    searchTerms: 'Islam Jesus crucifixion Quran 4:157',
    keyPassage: 'Mark 15',
    furtherReading: [
      'Seeking Allah, Finding Jesus by Nabeel Qureshi',
      'No God but One by Nabeel Qureshi',
      'Islam resources at carm.org',
    ],
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
      {
        ref: 'John 18:37-38',
      },
      {
        ref: 'John 8:32',
        text: 'You will know the truth, and the truth will make you free.',
      },
      {
        ref: 'John 14:6',
        text: 'Jesus said to him, "I am the way, the truth, and the life. No one comes to the Father, except through me."',
      },
    ],
    searchTerms: 'moral relativism absolute truth',
    keyPassage: 'John 18',
    furtherReading: ['Relativism: Feet Firmly Planted in Mid-Air by Francis Beckwith and Greg Koukl', 'The Abolition of Man by C.S. Lewis'],
  },
  {
    id: 'atheism',
    category: 'worldviews',
    title: 'Talking with Atheists',
    question: 'How should I engage a friend who says there\'s no evidence for God?',
    shortAnswer:
      'Listen first, find out why they don\'t believe, and remember that "no evidence" usually means "no evidence I find convincing." Then share the cumulative case and, most of all, your honest reasons for trusting Christ.',
    overview: [
      'Atheists come to their views for many reasons: intellectual objections, bad experiences with religion, personal suffering, or simply never having considered the evidence. Knowing which one applies changes the conversation.',
      'Apologetics works best as a cumulative case. No single argument has to carry all the weight; like strands of a rope, they gain strength together.',
    ],
    points: [
      {
        heading: 'Ask about their story',
        body: '"Were you ever religious?" "What would change your mind?" These questions build relationship and reveal whether the obstacle is intellectual, emotional or moral.',
      },
      {
        heading: 'Share the burden of proof',
        body: 'Some atheists define atheism as merely "lacking belief." But anyone who claims "there is no God" or "naturalism is true" is making a claim that needs support too.',
      },
      {
        heading: 'Build a cumulative case',
        body: 'The beginning of the universe, fine-tuning, objective morality, consciousness and the historical evidence for the resurrection all point in the same direction. Together they form a strong case.',
      },
      {
        heading: 'Point to Jesus',
        body: 'Ultimately the question is not just whether some god exists but who Jesus is. Invite your friend to read one of the Gospels (Mark or John is a good start) with an open mind.',
      },
    ],
    objections: [
      {
        objection: 'Extraordinary claims require extraordinary evidence.',
        response:
          'Every claim requires sufficient evidence. The existence of a finely tuned universe that began to exist is itself extraordinary, and the claim that it arose from nothing, for no reason, is the more extraordinary one.',
      },
      {
        objection: 'You\'re an atheist about every god except one; I just go one god further.',
        response:
          'Rejecting specific gods for good reasons is different from rejecting God altogether. The question is whether there is a Creator at all, not which culture\'s deities to discard. The arguments for a transcendent Creator do not apply to Zeus or Thor, which are beings within the universe.',
      },
    ],
    verses: [
      {
        ref: 'Psalm 14:1',
        text: 'The fool has said in his heart, "There is no God."',
      },
      {
        ref: 'Jeremiah 29:13',
        text: 'You shall seek me, and find me, when you search for me with all your heart.',
      },
      { ref: 'Acts 17:22-31' },
    ],
    searchTerms: 'answering atheist arguments',
    keyPassage: 'Acts 17',
    furtherReading: ['Gunning for God by John Lennox', 'The Reason for God by Timothy Keller', 'I Don\'t Have Enough Faith to Be an Atheist by Geisler and Turek'],
  },
];
