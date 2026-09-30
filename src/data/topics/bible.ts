import type { Topic } from '../types';

export const bibleTopics: Topic[] = [
  {
    id: 'manuscripts',
    category: 'bible',
    title: 'Can We Trust the Manuscripts?',
    question: 'Hasn\'t the Bible been changed and copied so many times we can\'t know what it originally said?',
    shortAnswer:
      'No ancient book is better attested. We have over 5,800 Greek New Testament manuscripts, some within a few generations of the originals, which lets scholars reconstruct the original text with remarkable confidence.',
    overview: [
      'The "telephone game" picture is misleading. Copying did not happen in a single line, one person whispering to the next. It happened in many branches across many regions, so errors in one line can be caught by comparing others.',
      'This field is called textual criticism. Scholars such as Wesley Huff, Daniel Wallace and Peter Gurry specialize in it, and it is one of the strongest areas of evidence for the Bible\'s reliability.',
    ],
    points: [
      {
        heading: 'An abundance of manuscripts',
        body: 'Over 5,800 Greek manuscripts of the New Testament survive, alongside roughly 10,000 in Latin and thousands more in other ancient languages. By comparison, Homer\'s Iliad, the next best attested work, has around 1,900, and many classical works survive in a handful of copies.',
      },
      {
        heading: 'Early copies',
        body: 'Papyrus 52, a fragment of John 18, is commonly dated to the second century. Substantial papyri like P46 (Paul\'s letters) and P66 and P75 (John and Luke) are dated around AD 200 or earlier. For many classical authors the gap is closer to a thousand years.',
      },
      {
        heading: 'Most variants are trivial',
        body: 'The large number of variants is a result of having so many manuscripts. The vast majority are spelling differences, word order (which rarely matters in Greek) or obvious slips. Only a small fraction are both meaningful and viable, and no core Christian doctrine depends on a disputed reading.',
      },
      {
        heading: 'The Old Testament too',
        body: 'The Dead Sea Scrolls, discovered from 1947, include a nearly complete Isaiah scroll from roughly the second century BC, about a thousand years older than the previous oldest Hebrew copies. The text matches the later copies to a striking degree.',
      },
      {
        heading: 'Early quotations',
        body: 'The church fathers quoted the New Testament so extensively in sermons, letters and commentaries that much of it could be reconstructed from their quotations alone.',
      },
    ],
    objections: [
      {
        objection: 'There are more variants than words in the New Testament!',
        response:
          'That is true, and it reflects the wealth of manuscripts, not their weakness. If a book survived in one copy there would be zero variants, but also no way to check it. More copies mean more variants and more certainty about the original.',
      },
      {
        objection: 'What about passages like the woman caught in adultery (John 7:53-8:11) or the long ending of Mark?',
        response:
          'Modern Bibles openly flag these in brackets or footnotes precisely because scholars can identify later additions. That transparency is a sign that the process works, and neither passage changes any Christian doctrine.',
      },
    ],
    verses: [
      { ref: 'Isaiah 40:8', quote: true },
      { ref: 'Matthew 24:35', quote: true },
      { ref: '2 Timothy 3:16' },
    ],
    searchTerms: 'New Testament manuscripts reliability textual criticism',
    keyPassage: '2 Timothy 3',
    furtherReading: [
      'Myths and Mistakes in New Testament Textual Criticism, ed. Elijah Hixson and Peter Gurry',
      'Wesley Huff\'s teaching on manuscripts (wesleyhuff.com)',
      'The Text of the New Testament by Bruce Metzger and Bart Ehrman',
    ],
  },
  {
    id: 'canon',
    category: 'bible',
    title: 'Who Picked the Books?',
    question: 'Didn\'t a church council decide which books got into the Bible centuries later?',
    shortAnswer:
      'The church did not create the canon; it recognized the books that were already functioning as Scripture. Most of the New Testament was accepted widely by the second century, long before any council.',
    overview: [
      'A popular story says the Emperor Constantine or the Council of Nicaea (AD 325) chose the books of the Bible. That is a myth. Nicaea dealt with the deity of Christ, not the canon.',
      'The process was organic. Churches read the writings that came from the apostles and their close associates, and those books gradually became universally recognized.',
    ],
    points: [
      {
        heading: 'Early recognition',
        body: 'Peter already refers to Paul\'s letters as Scripture (2 Peter 3:15-16). By the late second century writers like Irenaeus were using the four Gospels as a settled set, and the Muratorian Fragment lists most of the New Testament books.',
      },
      {
        heading: 'Clear criteria',
        body: 'Books were recognized if they were apostolic (connected to an apostle or eyewitness), orthodox (consistent with the faith handed down), and catholic (used widely by churches everywhere, not just by one group).',
      },
      {
        heading: 'Later lists confirmed, not invented',
        body: 'In AD 367 Athanasius listed exactly our 27 New Testament books. Regional councils at Hippo (393) and Carthage (397) affirmed that list. They were recognizing a consensus, not imposing a new one.',
      },
      {
        heading: 'The "lost gospels" are late',
        body: 'Texts like the Gospel of Thomas or the Gospel of Judas are generally dated to the second century or later, well after the eyewitness generation, and reflect Gnostic ideas foreign to first-century Judaism.',
      },
    ],
    objections: [
      {
        objection: 'Some books, like 2 Peter or Revelation, were debated.',
        response:
          'Yes, and that shows the church took the question seriously rather than rubber-stamping everything. The core of the New Testament, the Gospels, Acts and Paul\'s letters, was never seriously in doubt.',
      },
      {
        objection: 'What about the Old Testament canon?',
        response:
          'Jesus referred to the Hebrew Scriptures as "the law of Moses, the prophets, and the psalms" (Luke 24:44), the three-part division of the Jewish Bible, and treated them as God\'s word.',
      },
    ],
    verses: [
      { ref: '2 Peter 3:15-16' },
      { ref: 'Luke 24:44' },
      { ref: '2 Timothy 3:16', quote: true },
    ],
    searchTerms: 'canon of scripture who decided books of the Bible',
    keyPassage: '2 Peter 3',
    furtherReading: ['The Question of Canon by Michael Kruger', 'Canon Revisited by Michael Kruger'],
  },
  {
    id: 'archaeology',
    category: 'bible',
    title: 'Archaeology and the Bible',
    question: 'Is there any archaeological evidence for the Bible?',
    shortAnswer:
      'Yes, a great deal. Archaeology has repeatedly confirmed people, places and details mentioned in Scripture, including some that critics once considered fictional.',
    overview: [
      'Archaeology cannot prove that God spoke, but it can test whether the biblical writers were careful about history. On point after point, they have proven reliable.',
      'Several discoveries have overturned earlier skeptical claims that particular people or places never existed.',
    ],
    points: [
      {
        heading: 'The House of David',
        body: 'Some scholars once doubted King David was a historical person. The Tel Dan Stele, discovered in 1993, is a ninth-century BC inscription that refers to the "House of David."',
      },
      {
        heading: 'Pontius Pilate',
        body: 'The Pilate Stone, found at Caesarea in 1961, bears an inscription naming Pontius Pilate as prefect of Judea, confirming his title as well as his existence.',
      },
      {
        heading: 'Caiaphas the high priest',
        body: 'In 1990 an ornate ossuary (bone box) inscribed with the name "Joseph son of Caiaphas" was found in Jerusalem, widely identified with the high priest who presided over Jesus\' trial.',
      },
      {
        heading: 'John\'s Jerusalem',
        body: 'John describes the Pool of Bethesda with five porticoes (John 5:2) and the Pool of Siloam (John 9:7). Both have been excavated, the Siloam pool in 2004, confirming that the author knew pre-AD 70 Jerusalem well.',
      },
      {
        heading: 'Luke the historian',
        body: 'Luke uses the correct and sometimes unusual titles for local officials across the Roman world, such as "politarchs" in Thessalonica (Acts 17:6), a term later confirmed by inscriptions.',
      },
    ],
    objections: [
      {
        objection: 'Absence of evidence for events like the Exodus proves they didn\'t happen.',
        response:
          'Archaeology recovers only a tiny fraction of the past, and nomadic peoples leave little trace. Scholars debate the date and details of the Exodus, but repeated vindication of the Bible elsewhere should make us cautious about arguments from silence.',
      },
    ],
    verses: [
      { ref: 'John 5:2' },
      { ref: 'Luke 3:1-2' },
      { ref: 'Acts 17:6' },
    ],
    searchTerms: 'archaeology confirms the Bible',
    keyPassage: 'Luke 3',
    furtherReading: [
      'The Popular Handbook of Archaeology and the Bible, ed. Joseph Holden and Norman Geisler',
      'On the Reliability of the Old Testament by K.A. Kitchen',
    ],
  },
  {
    id: 'contradictions',
    category: 'bible',
    title: 'Alleged Contradictions',
    question: 'Isn\'t the Bible full of contradictions?',
    shortAnswer:
      'Most alleged contradictions disappear when we read passages in context and understand how ancient authors wrote. Differences between accounts are often what we expect from independent eyewitnesses.',
    overview: [
      'A contradiction means two statements cannot both be true at the same time and in the same sense. Many "contradictions" are really differences in emphasis, perspective or detail.',
      'In fact, if four Gospel accounts agreed word for word, we would suspect collusion. Real witnesses tell the same story differently.',
    ],
    points: [
      {
        heading: 'Partial is not contradictory',
        body: 'Matthew mentions one angel at the tomb, and Luke mentions two. If there were two, there was certainly one. Matthew is focusing on the one who spoke.',
      },
      {
        heading: 'Ancient writing conventions',
        body: 'Ancient historians often paraphrased speeches, arranged events topically rather than chronologically, and rounded numbers. Judging them by modern citation standards is anachronistic.',
      },
      {
        heading: 'Different perspectives',
        body: 'Matthew 27 says Judas hanged himself; Acts 1 says he fell and his body burst open. Both can be true if the body fell after the hanging. Likewise, Matthew says the priests bought the field; Acts says Judas "acquired" it because it was bought with his money.',
      },
      {
        heading: 'Undesigned coincidences',
        body: 'Sometimes one Gospel incidentally answers a question raised by another. For example, John 6 mentions Jesus asking Philip where to buy bread, and Luke 9 places the event near Bethsaida, which John 12:21 tells us was Philip\'s hometown. Such unplanned fits are marks of truthful testimony.',
      },
    ],
    objections: [
      {
        objection: 'Even one error means the Bible can\'t be God\'s word.',
        response:
          'Christians affirm the Bible is without error in what it teaches as originally written. When a genuine difficulty remains, the wise response is humility. Many "errors" once cited confidently have since been resolved by further study or discovery.',
      },
    ],
    verses: [
      { ref: 'Matthew 28:2-5' },
      { ref: 'Luke 24:4' },
      { ref: 'Proverbs 30:5', quote: true },
    ],
    searchTerms: 'Bible contradictions answered',
    keyPassage: 'Matthew 28',
    furtherReading: [
      'Hidden in Plain View by Lydia McGrew (undesigned coincidences)',
      'Big Book of Bible Difficulties by Norman Geisler and Thomas Howe',
    ],
  },
  {
    id: 'prophecy',
    category: 'bible',
    title: 'Fulfilled Prophecy',
    question: 'Did the Old Testament really predict Jesus?',
    shortAnswer:
      'Yes. Passages written centuries earlier describe the Messiah\'s birthplace, lineage, suffering, death and vindication. Some of those texts exist in copies that predate Jesus, so they could not have been written after the fact.',
    overview: [
      'Jesus said the Scriptures testify about him (John 5:39), and after his resurrection he explained from Moses and all the prophets the things concerning himself (Luke 24:27).',
      'The Dead Sea Scrolls show that key messianic prophecies, including Isaiah 53, existed in their current form before Jesus was born.',
    ],
    points: [
      {
        heading: 'The Suffering Servant (Isaiah 53)',
        body: 'Written centuries before Christ, Isaiah 53 describes a righteous servant who is rejected, pierced for others\' transgressions, silent before his accusers, assigned a grave with the rich, and afterward sees life. The Great Isaiah Scroll from Qumran contains this chapter.',
      },
      {
        heading: 'Psalm 22',
        body: 'David describes a man who is mocked, whose hands and feet are pierced, whose garments are divided by lot, and who cries "My God, my God, why have you forsaken me?" Jesus quoted its first line on the cross.',
      },
      {
        heading: 'Born in Bethlehem',
        body: 'Micah 5:2 names Bethlehem as the birthplace of a ruler "whose goings out are from of old, from ancient times."',
      },
      {
        heading: 'Timing and lineage',
        body: 'The Messiah was to come from Abraham, Judah and David, and Daniel 9 connects his coming to the period before the destruction of the second temple, which fell in AD 70.',
      },
    ],
    objections: [
      {
        objection: 'Jesus or his followers could have deliberately fulfilled these prophecies.',
        response:
          'Some, perhaps. But no one can arrange their own birthplace, ancestry, the manner of their execution, or the actions of soldiers who gambled for their clothing.',
      },
      {
        objection: 'Jewish interpreters say Isaiah 53 is about the nation of Israel.',
        response:
          'Israel is called God\'s servant elsewhere in Isaiah, but in Isaiah 53 the servant suffers innocently for the sins of "my people" (53:8), which distinguishes him from the nation. Several ancient Jewish sources also read the passage messianically.',
      },
    ],
    verses: [
      { ref: 'Isaiah 53:5', quote: true },
      { ref: 'Psalm 22:16-18' },
      { ref: 'Micah 5:2' },
      { ref: 'Luke 24:25-27' },
    ],
    searchTerms: 'messianic prophecies fulfilled by Jesus',
    keyPassage: 'Isaiah 53',
    furtherReading: ['Answering Jewish Objections to Jesus by Michael Brown', 'The Case for Christ by Lee Strobel'],
  },
];
