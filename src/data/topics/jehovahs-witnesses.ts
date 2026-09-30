import type { Topic } from '../types';

export const jwTopics: Topic[] = [
  {
    id: 'jehovahs-witnesses',
    category: 'jw',
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
        body: 'John 1:3 says "through him all things were made," and Colossians 1:16 says all things were created by him. Isaiah 44:24 says Jehovah made all things alone. Only the Creator can be the agent of all creation. The NWT inserts the word "other" into Colossians 1 ("all other things") to avoid this.',
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
      { ref: 'John 1:1-3', quote: true },
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
    id: 'jw-holy-spirit',
    category: 'jw',
    title: 'Is the Holy Spirit a Person?',
    question: 'Jehovah\'s Witnesses say the Holy Spirit is God\'s "active force." What does the Bible say?',
    shortAnswer:
      'Scripture describes the Holy Spirit doing what only a person can do: speaking, teaching, deciding, being grieved and being lied to. A force cannot do any of these.',
    overview: [
      'Jehovah\'s Witnesses teach that the Holy Spirit is not a person but an impersonal energy, God\'s "active force," like electricity.',
      'The clearest way to respond is to read passages together that describe what the Spirit does.',
    ],
    points: [
      {
        heading: 'The Spirit speaks and decides',
        body: 'The Spirit said, "Set apart for me Barnabas and Saul for the work to which I have called them" (Acts 13:2). He distributes gifts "just as he determines" (1 Corinthians 12:11). Forces do not speak in the first person or make choices.',
      },
      {
        heading: 'The Spirit can be grieved',
        body: 'Paul writes, "do not grieve the Holy Spirit of God" (Ephesians 4:30). You cannot hurt the feelings of electricity.',
      },
      {
        heading: 'Lying to the Spirit is lying to God',
        body: 'Peter tells Ananias he has lied to the Holy Spirit and then says, "You have not lied just to human beings but to God" (Acts 5:3-4). The Spirit is both personal and divine.',
      },
      {
        heading: '"He," not "it"',
        body: 'In John 14-16 Jesus calls the Spirit "another Helper" like himself, who teaches, reminds, testifies and guides. John uses the masculine pronoun "he" (ekeinos) even though the Greek word for spirit (pneuma) is neuter.',
      },
    ],
    objections: [
      {
        objection: 'The Spirit is "poured out" and people are "filled" with it, so it must be a force.',
        response:
          'These are metaphors, and Scripture uses similar language of persons: believers are told to "clothe yourselves with the Lord Jesus Christ" (Romans 13:14), and Christ "fills everything in every way" (Ephesians 1:23). Metaphors do not cancel the many passages that show the Spirit acting as a person.',
      },
      {
        objection: 'The Holy Spirit has no personal name.',
        response:
          'Jesus commands baptism in "the name of the Father and of the Son and of the Holy Spirit" (Matthew 28:19), placing the Spirit alongside the Father and Son in a single name.',
      },
    ],
    verses: [
      { ref: 'Ephesians 4:30', quote: true },
      { ref: 'John 16:13', quote: true },
      { ref: 'Acts 5:3-4' },
      { ref: 'Acts 13:2' },
      { ref: '1 Corinthians 12:11' },
    ],
    searchTerms: 'Holy Spirit person Jehovah\'s Witnesses active force',
    keyPassage: 'John 16',
    furtherReading: [
      'Reasoning from the Scriptures with the Jehovah\'s Witnesses by Ron Rhodes',
      'The Forgotten Trinity by James White',
    ],
  },
  {
    id: 'jw-predictions',
    category: 'jw',
    title: 'The Watchtower\'s Predictions',
    question: 'How should I think about the Watchtower organization\'s claims to speak for God?',
    shortAnswer:
      'The organization has repeatedly announced dates for the end of the world, including 1914, 1925 and 1975, that did not come true. Scripture gives a clear test for anyone who claims to speak for God, and urges every believer to check teaching against the Bible itself.',
    overview: [
      'Jehovah\'s Witnesses are led by a Governing Body in the Watch Tower Bible and Tract Society, which since 2013 has identified itself as the "faithful and discreet slave" of Matthew 24:45, the channel through which God gives spiritual food to his people.',
      'Raise this topic gently. Many Witnesses have never been shown the history, and it can be painful to consider.',
    ],
    points: [
      {
        heading: 'A history of failed dates',
        body: 'Founder Charles Taze Russell taught that 1914 would see the end of the present order. Under Joseph Rutherford, the campaign "Millions Now Living Will Never Die" pointed to 1925, including the return of the Old Testament patriarchs. In the late 1960s and early 1970s, publications pointed to 1975 as the end of 6,000 years of human history.',
      },
      {
        heading: 'The biblical test',
        body: 'Deuteronomy 18:22 says that if what someone proclaims in the Lord\'s name does not come true, the Lord has not spoken it. Jesus himself said no one knows the day or hour (Matthew 24:36).',
      },
      {
        heading: '"New light" or changing teaching?',
        body: 'The organization explains changes as "new light," citing Proverbs 4:18. But truth that God reveals does not reverse itself, and the organization has at times required members to accept teachings that it later abandoned.',
      },
      {
        heading: 'Be like the Bereans',
        body: 'The Bereans were commended for examining the Scriptures to see if what even the apostle Paul said was true (Acts 17:11). Encourage your friend to read the Bible for themselves and to ask what it says about Jesus.',
      },
    ],
    objections: [
      {
        objection: 'The organization never claimed to be an inspired prophet.',
        response:
          'It claims to be God\'s sole channel of truth on earth, and a 1972 issue of The Watchtower described the anointed class as a "prophet" among the nations. If an organization claims to speak for God, it is fair to apply the Bible\'s test.',
      },
      {
        objection: 'Christians have made failed predictions too.',
        response:
          'That is true, and they were wrong as well. The difference is that mainstream Christianity has never made obedience to a particular organization\'s date-setting a condition of being right with God.',
      },
    ],
    verses: [
      { ref: 'Deuteronomy 18:22', quote: true },
      { ref: 'Matthew 24:36', quote: true },
      { ref: 'Acts 17:11', quote: true },
      { ref: 'Proverbs 4:18' },
    ],
    searchTerms: 'Jehovah\'s Witnesses false prophecies 1914 1975',
    keyPassage: 'Deuteronomy 18',
    furtherReading: [
      'Crisis of Conscience by Raymond Franz (former Governing Body member)',
      'Jehovah\'s Witnesses resources at carm.org',
    ],
  },
  {
    id: 'jw-bodily-resurrection',
    category: 'jw',
    title: 'Did Jesus Rise in His Body?',
    question: 'Jehovah\'s Witnesses say Jesus was raised as a spirit creature. Does the Bible agree?',
    shortAnswer:
      'No. Jesus predicted he would raise his own body, and after the resurrection he showed his wounds, ate with his disciples and said, "a ghost does not have flesh and bones, as you see I have."',
    overview: [
      'Watchtower teaching holds that Jesus was raised as an invisible spirit, and that God disposed of his physical body. His appearances are explained as materialized bodies he took on temporarily.',
      'The Gospels go out of their way to show that the risen Jesus was physical and was the same body that had been crucified.',
    ],
    points: [
      {
        heading: 'Jesus predicted it',
        body: 'Jesus said, "Destroy this temple, and I will raise it again in three days." John explains that "the temple he had spoken of was his body" (John 2:19-21). The same body that was destroyed would be raised.',
      },
      {
        heading: 'Flesh and bones',
        body: 'When the disciples thought they were seeing a spirit, Jesus corrected them: "Touch me and see; a ghost does not have flesh and bones, as you see I have" (Luke 24:39). He then ate fish in front of them.',
      },
      {
        heading: 'The same wounds',
        body: 'Jesus invited Thomas to put his finger in the nail marks and his hand in his side (John 20:27). A temporarily materialized body would not have the wounds of the crucified one.',
      },
      {
        heading: 'The tomb was empty',
        body: 'If Jesus had been raised only as a spirit, there would be no need for an empty tomb. All four Gospels emphasize that the body was gone and the grave clothes left behind.',
      },
    ],
    objections: [
      {
        objection: '1 Corinthians 15:44 says the body is raised a "spiritual body."',
        response:
          'Paul uses "spiritual" to mean empowered and directed by God\'s Spirit, not immaterial. In 1 Corinthians 2:15 the "spiritual" person is still a flesh-and-blood human. The contrast is between a body subject to weakness and death, and a body transformed by the Spirit.',
      },
      {
        objection: '"Flesh and blood cannot inherit the kingdom of God" (1 Corinthians 15:50).',
        response:
          '"Flesh and blood" is a Jewish expression for mortal human nature. The very next verses explain that the perishable must be clothed with the imperishable: the body is transformed, not discarded.',
      },
    ],
    verses: [
      { ref: 'Luke 24:39', quote: true },
      { ref: 'John 2:19', quote: true },
      { ref: 'John 20:27' },
      { ref: '1 Corinthians 15:42-44' },
    ],
    searchTerms: 'bodily resurrection of Jesus Jehovah\'s Witnesses spirit creature',
    keyPassage: 'Luke 24',
    furtherReading: [
      'Reasoning from the Scriptures with the Jehovah\'s Witnesses by Ron Rhodes',
      'The Resurrection of the Son of God by N.T. Wright',
    ],
  },
  {
    id: 'jw-144000',
    category: 'jw',
    title: 'The 144,000 and the Hope of Heaven',
    question: 'Is heaven only for 144,000 people, with everyone else living on earth?',
    shortAnswer:
      'The Bible promises every believer the same standing as God\'s child and the same hope. Revelation itself shows a "great multitude that no one could count" standing before God\'s throne.',
    overview: [
      'Jehovah\'s Witnesses teach that only 144,000 "anointed" Christians go to heaven to rule with Christ. The "great crowd" of other faithful Witnesses hope to live forever on a paradise earth, and only the anointed partake of the bread and wine at the annual Memorial.',
      'Christians also believe in a renewed earth (Revelation 21). The disagreement is about dividing believers into two classes with different relationships to God.',
    ],
    points: [
      {
        heading: 'Read Revelation 7 carefully',
        body: 'The 144,000 are described as 12,000 from each of the twelve tribes of Israel (7:4-8). Immediately after, John sees a great multitude from every nation standing "before the throne and before the Lamb" (7:9) and serving God "in his temple" (7:15).',
      },
      {
        heading: 'Consistent interpretation',
        body: 'If the number 144,000 is literal, it is fair to ask whether the other details are too: that they are all Israelites from specific tribes and, according to Revelation 14:4, all people who "did not defile themselves with women."',
      },
      {
        heading: 'All believers are God\'s children',
        body: 'John 1:12 says all who receive Christ are given the right to become children of God. Paul says "our citizenship is in heaven" (Philippians 3:20), and Jesus commanded all his disciples to remember him with the bread and cup (Luke 22:19).',
      },
      {
        heading: 'One hope',
        body: 'Paul writes that there is "one hope" for the whole church (Ephesians 4:4). Every believer is born again and united with Christ, with no second class of Christians.',
      },
    ],
    objections: [
      {
        objection: 'Jesus spoke of a "little flock" (Luke 12:32), which means a small group goes to heaven.',
        response:
          'In context Jesus is comforting his disciples, who were few at that time, not setting a limit on the number of those who would be saved. In John 10:16 the "other sheep" are brought into "one flock" with one shepherd, most naturally Gentiles joining Jewish believers, not a separate earthly class.',
      },
    ],
    verses: [
      { ref: 'Revelation 7:9', quote: true },
      { ref: 'John 1:12', quote: true },
      { ref: 'Philippians 3:20', quote: true },
      { ref: 'Revelation 7:4-8' },
      { ref: 'Ephesians 4:4-6' },
    ],
    searchTerms: '144000 Jehovah\'s Witnesses great crowd heaven',
    keyPassage: 'Revelation 7',
    furtherReading: [
      'Reasoning from the Scriptures with the Jehovah\'s Witnesses by Ron Rhodes',
      'Jehovah\'s Witnesses resources at carm.org',
    ],
  },
];
