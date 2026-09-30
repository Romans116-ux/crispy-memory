export type CategoryId =
  | 'god'
  | 'bible'
  | 'jesus'
  | 'tough'
  | 'worldviews'
  | 'foundations';

export interface Category {
  id: CategoryId;
  title: string;
  subtitle: string;
  icon: string; // Ionicons glyph name
}

export interface Verse {
  /** Human-readable reference, e.g. "1 Corinthians 15:3-8". */
  ref: string;
  /**
   * Show the verse text in the app (from the bundled translations in src/data/bible).
   * When false, only a link to read the passage on Bible Gateway is shown.
   */
  quote?: boolean;
}

export interface Argument {
  heading: string;
  body: string;
}

export interface Objection {
  objection: string;
  response: string;
}

export interface Topic {
  id: string;
  category: CategoryId;
  title: string;
  /** The question a skeptic or seeker actually asks. */
  question: string;
  /** A one-to-two sentence answer you could give in conversation. */
  shortAnswer: string;
  /** Longer overview paragraphs. */
  overview: string[];
  points: Argument[];
  objections: Objection[];
  verses: Verse[];
  /** Terms used to search the partner resource sites for further reading. */
  searchTerms: string;
  /** Primary passage for verse-by-verse commentary, e.g. "1 Corinthians 15". */
  keyPassage?: string;
  /** Recommended thinkers and books for further study. */
  furtherReading?: string[];
}
