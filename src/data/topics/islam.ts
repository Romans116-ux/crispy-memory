import type { Topic } from '../types';

export const islamTopics: Topic[] = [
  {
    id: 'islam-and-jesus',
    category: 'islam',
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
      { ref: 'Isaiah 53:5', quote: true },
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
    id: 'islam-bible-corrupted',
    category: 'islam',
    title: 'Was the Bible Corrupted?',
    question: 'Muslims often say the Torah and Gospel were changed. Is that true?',
    shortAnswer:
      'The Qur\'an itself affirms the Torah and Gospel, tells Christians to judge by them, and says no one can change God\'s words. And manuscripts from centuries before Muhammad show the Bible we read today.',
    overview: [
      'Many Muslims believe the Bible has undergone tahrif (corruption), which is why it disagrees with the Qur\'an about the crucifixion and the deity of Christ. This belief is sincere and important to understand.',
      'A respectful way to engage is to look at what the Qur\'an itself says about earlier Scripture, and then at the historical evidence.',
    ],
    points: [
      {
        heading: 'The Qur\'an affirms the Gospel',
        body: 'The Qur\'an says God gave Jesus the Gospel (Injil) as guidance and light, and tells "the People of the Gospel" to judge by what God revealed in it (Surah 5:46-47). It tells Muhammad that if he is in doubt he should ask those who were reading the Scripture before him (10:94). It even says Jews and Christians have nothing to stand on until they uphold the Torah and the Gospel (5:68).',
      },
      {
        heading: 'God\'s words cannot be changed',
        body: 'The Qur\'an states repeatedly that none can alter the words of God (6:34, 6:115, 18:27). If God is able to preserve the Qur\'an, it would be strange to say he could not, or would not, preserve the Torah and Gospel he also sent.',
      },
      {
        heading: 'The manuscripts predate Muhammad',
        body: 'Muhammad lived from about AD 570 to 632. Complete Bibles such as Codex Sinaiticus and Codex Vaticanus date to the fourth century, and papyri and the Dead Sea Scrolls are older still. They contain the same Gospel we have now, including Jesus\' crucifixion, resurrection and claims to be the Son of God.',
      },
      {
        heading: 'A dilemma',
        body: 'If the Bible was corrupted before Muhammad, why would the Qur\'an tell Christians of his day to judge by it? If it was corrupted after, the earlier manuscripts would show the change, and they don\'t. Either way, the corruption claim is hard to sustain.',
      },
    ],
    objections: [
      {
        objection: 'Paul corrupted the message of Jesus.',
        response:
          'Paul\'s letters are our earliest Christian documents, and he records that Peter, James and John, Jesus\' closest followers, recognized his gospel and gave him "the right hand of fellowship" (Galatians 2:9). The Gospels, written independently, contain the same core message: Jesus\' death for sins, his resurrection and his divine identity.',
      },
      {
        objection: 'Scholars admit some verses were added later, like 1 John 5:7.',
        response:
          'Yes, and they know that because the thousands of manuscripts make later additions easy to spot. Modern translations footnote or omit them. Detectable, minor variations are very different from a wholesale rewriting of the message, which the evidence does not show.',
      },
    ],
    verses: [
      { ref: 'Isaiah 40:8', quote: true },
      { ref: 'Matthew 24:35', quote: true },
      { ref: 'Psalm 119:89', quote: true },
      { ref: 'Galatians 2:9' },
    ],
    searchTerms: 'was the Bible corrupted Islam tahrif',
    keyPassage: 'Galatians 2',
    furtherReading: [
      'Answering Islam by Norman Geisler and Abdul Saleeb',
      'The Bible Among the Myths by John Oswalt',
      'Islam resources at carm.org',
    ],
  },
  {
    id: 'islam-son-of-god',
    category: 'islam',
    title: 'How Can God Have a Son?',
    question: 'The Qur\'an says God "does not beget." Isn\'t calling Jesus the Son of God blasphemy?',
    shortAnswer:
      'Christians agree that God does not have a son through a wife or physical birth. "Son of God" describes an eternal relationship and a shared nature, not biology.',
    overview: [
      'Surah 112 says God "neither begets nor is begotten," and Surah 6:101 asks how God could have a son when he has no companion. Many Muslims understand "Son of God" to mean that God had physical relations, which Christians also reject.',
      'The Qur\'an also describes the Christian Trinity as God, Jesus and Mary (5:116). Clearing up these misunderstandings is often the most helpful first step.',
    ],
    points: [
      {
        heading: 'Not a biological term',
        body: 'We use "son" figuratively all the time, as in "son of the soil." In Scripture, "Son of God" expresses that Jesus shares the Father\'s nature and has an eternal, unique relationship with him. It was never about a physical birth from God.',
      },
      {
        heading: 'His hearers understood it as a claim to equality',
        body: 'When Jesus called God his own Father, his opponents understood he was "making himself equal with God" (John 5:18). The title points to his divine identity, not to a created or procreated being.',
      },
      {
        heading: 'The Trinity is not Father, Mother and Son',
        body: 'Christians have never worshiped Mary as part of God. The Trinity is one God in three persons: Father, Son and Holy Spirit. Christians share the Muslim conviction that there is only one God.',
      },
      {
        heading: 'A bridge in the Qur\'an',
        body: 'The Qur\'an calls Jesus "a Word from God" and "a spirit from him" (4:171). The Gospel of John opens by saying the eternal Word, who was with God and was God, became flesh. This can be a fruitful starting point for conversation.',
      },
    ],
    objections: [
      {
        objection: 'It is beneath God\'s majesty to become a man.',
        response:
          'Muslims rightly affirm that God can do whatever he wills. The question is not whether God is able but whether he chose to. Christians see God\'s greatness shown precisely in his humility and love in coming to rescue us (Philippians 2:5-11).',
      },
      {
        objection: 'Jesus never said, "I am God, worship me."',
        response:
          'He made the claim in ways his Jewish audience understood even more forcefully: forgiving sins, taking the divine name, claiming to share God\'s throne and accepting worship. See the topic "Is Jesus God?"',
      },
    ],
    verses: [
      { ref: 'Matthew 16:16', quote: true },
      { ref: 'Galatians 4:4', quote: true },
      { ref: 'John 1:1-3', quote: true },
      { ref: 'John 5:18' },
      { ref: 'Psalm 2:7' },
    ],
    searchTerms: 'Son of God Islam Jesus begotten',
    keyPassage: 'John 5',
    furtherReading: ['No God but One by Nabeel Qureshi', 'Answering Islam by Norman Geisler and Abdul Saleeb'],
  },
  {
    id: 'islam-muhammad-in-bible',
    category: 'islam',
    title: 'Is Muhammad Foretold in the Bible?',
    question: 'Don\'t Deuteronomy 18 and John 14 predict the coming of Muhammad?',
    shortAnswer:
      'Read in context, the "prophet like Moses" comes from among the Israelites and is identified with Jesus, and the Helper Jesus promised is the Holy Spirit, who would live inside his disciples.',
    overview: [
      'The Qur\'an says Jesus foretold a messenger named Ahmad (Surah 61:6), and Muslim writers often point to Deuteronomy 18 and Jesus\' promise of the Paraclete (Helper) in John 14-16 as prophecies of Muhammad.',
      'Taking these passages seriously means reading them in their own context.',
    ],
    points: [
      {
        heading: 'A prophet "from your fellow Israelites"',
        body: 'Moses said God would raise up a prophet like him "from among you, from your fellow Israelites" (Deuteronomy 18:15). "Brothers" in this passage refers to the tribes of Israel (compare 17:15). Peter applies this prophecy to Jesus (Acts 3:22-26).',
      },
      {
        heading: 'Like Moses, face to face',
        body: 'Deuteronomy 34:10-12 says no prophet had arisen like Moses, whom the LORD knew face to face and who performed great signs. Jesus, who knew the Father intimately and performed signs and wonders, fits this description.',
      },
      {
        heading: 'The Helper is the Holy Spirit',
        body: 'Jesus explicitly names the Helper as "the Holy Spirit, whom the Father will send in my name" (John 14:26). He says the world cannot see him, that he "lives with you and will be in you," and will be with the disciples forever (14:16-17). He came within weeks at Pentecost (Acts 1:5, 2:1-4).',
      },
      {
        heading: 'No manuscript support',
        body: 'Some suggest the original Greek word was periklytos ("praised one," similar to Ahmad) rather than parakletos ("helper"). None of the thousands of Greek manuscripts of John reads periklytos.',
      },
    ],
    objections: [
      {
        objection: 'Song of Songs 5:16 names Muhammad ("machmadim").',
        response:
          'The Hebrew word is a common adjective meaning "desirable" or "lovely," used elsewhere for precious things (for example 1 Kings 20:6). In context a bride is describing her beloved. Reading a personal name into it would change the meaning of the whole poem.',
      },
      {
        objection: 'Muhammad brought the same basic message as the earlier prophets.',
        response:
          'The Bible gives a test for later revelation: it must agree with what God has already revealed (Deuteronomy 13:1-4, Galatians 1:8). The Qur\'an denies the crucifixion and deity of Christ, which are central to the Gospel the Qur\'an says came from God.',
      },
    ],
    verses: [
      { ref: 'Deuteronomy 18:15', quote: true },
      { ref: 'John 14:26', quote: true },
      { ref: 'Galatians 1:8', quote: true },
      { ref: 'Acts 3:22-26' },
      { ref: 'John 14:16-17' },
    ],
    searchTerms: 'Muhammad prophesied in the Bible Deuteronomy 18 Paraclete',
    keyPassage: 'John 14',
    furtherReading: ['Answering Islam by Norman Geisler and Abdul Saleeb', 'Seeking Allah, Finding Jesus by Nabeel Qureshi'],
  },
  {
    id: 'islam-assurance',
    category: 'islam',
    title: 'Can I Know I\'m Saved?',
    question: 'In Islam, good and bad deeds are weighed. How is the Christian hope different?',
    shortAnswer:
      'The Qur\'an describes deeds being weighed on the Day of Judgment, so no one can be sure of the outcome. The gospel offers assurance, because salvation rests on what Christ has done, not on how our scales balance.',
    overview: [
      'Many Muslims live with sincere devotion and a real fear of judgment. The Qur\'an speaks of scales: those whose good deeds are heavy will prosper and those whose deeds are light will lose (7:8-9, 23:102-103).',
      'Even Muhammad is recorded saying, "I do not know what will be done with me or with you" (46:9). This is a place where the good news of grace speaks directly to a real longing.',
    ],
    points: [
      {
        heading: 'Good deeds cannot erase guilt',
        body: 'A judge cannot acquit a guilty criminal because he also did good things. Justice requires the wrong to be dealt with. Scripture says all have sinned (Romans 3:23), so our record cannot save us however many good deeds we add.',
      },
      {
        heading: 'God\'s justice and mercy meet at the cross',
        body: 'God does not simply overlook sin; he paid its penalty himself in Christ. That is how he can be both just and the one who justifies (Romans 3:26).',
      },
      {
        heading: 'Salvation is a gift',
        body: 'Salvation is received by grace through faith, not earned by works (Ephesians 2:8-9). That is why John can write so that believers "may know" that they have eternal life (1 John 5:13).',
      },
      {
        heading: 'A bridge: the great sacrifice',
        body: 'The Qur\'an says God ransomed Abraham\'s son "with a great sacrifice" (37:107). That story points to the principle of substitution, which finds its fulfillment in Jesus, "the Lamb of God, who takes away the sin of the world" (John 1:29).',
      },
    ],
    objections: [
      {
        objection: 'If salvation is free, people will just keep sinning.',
        response:
          'Paul anticipated this: "Shall we go on sinning so that grace may increase? By no means!" (Romans 6:1-2). Grace does not just forgive; it transforms. Good works flow from gratitude, not fear.',
      },
      {
        objection: 'God can forgive whomever he wants without a sacrifice.',
        response:
          'Forgiveness always costs the one who forgives. A just God cannot pretend evil does not matter. At the cross God bears the cost himself, so that forgiveness is both free to us and just.',
      },
    ],
    verses: [
      { ref: 'Ephesians 2:8-9', quote: true },
      { ref: '1 John 5:13', quote: true },
      { ref: 'Romans 6:23', quote: true },
      { ref: 'Romans 3:23-26' },
      { ref: 'John 1:29' },
    ],
    searchTerms: 'assurance of salvation Islam grace works',
    keyPassage: 'Ephesians 2',
    furtherReading: ['Seeking Allah, Finding Jesus by Nabeel Qureshi', 'The Cross of Christ by John Stott'],
  },
];
