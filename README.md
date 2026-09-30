# Reason for Hope

A Christian apologetics app for iPhone and iPad (and Android), built with Expo and React Native.

> "Always be ready to give an answer to everyone who asks you a reason concerning the hope that is in you, with humility and fear." — 1 Peter 3:15 (WEB)

## Features

- **26 apologetics topics** in six categories: Foundations, Does God Exist?, The Bible, Jesus Christ, Tough Questions and Other Worldviews
- Each topic has a **short answer**, **key points**, **common objections with responses**, **Scripture** and **recommended reading**
- **Go deeper** links on every topic to the partner resources:
  [Got Questions](https://www.gotquestions.org), [CARM](https://carm.org), [Precept Austin](https://www.preceptaustin.org),
  [Enduring Word](https://enduringword.com), [Wesley Huff](https://www.wesleyhuff.com),
  [Bible Gateway](https://www.biblegateway.com) and [Logos](https://www.logos.com)
- **Today** tab with a question and verse of the day
- **Scripture** tab: look up any passage in 8 translations on Bible Gateway, with one-tap Enduring Word commentary and Precept Austin word studies
- Full-text **search** across questions, objections and verses
- **Bookmarks** stored on-device
- Light and dark mode, no accounts, no tracking

## Project layout

```
src/
  app/                  Expo Router screens (file-based routes)
    (tabs)/             Today, Topics, Scripture, Saved, Resources
    topic/[id].tsx      Topic detail
    category/[id].tsx   Category list
    about.tsx
  components/           Shared UI
  data/
    topics/             Apologetics content, one file per category
    categories.ts
    resources.ts        The partner resource sites
  lib/                  Theme, bookmarks, search, URL builders
scripts/validate-content.ts
```

## Development

```bash
npm install
npm start            # scan the QR code with Expo Go, or press i for the iOS simulator
npm run web          # run in a browser
npm run typecheck
npm run validate     # checks every topic is complete and every link can be built
```

## Shipping to the App Store

See **[APP_STORE.md](./APP_STORE.md)** for the full checklist: EAS cloud build (no Mac required), App Store Connect listing copy, keywords, privacy label and reviewer notes. The privacy policy is in [PRIVACY.md](./PRIVACY.md).

## Adding content

Add a `Topic` object to the relevant file in `src/data/topics/`. Write summaries in your own words and link out to the resource sites rather than copying their articles. Quote Scripture only from the public-domain World English Bible; omit `text` on a verse to show just a "Read on Bible Gateway" link. Run `npm run validate` afterwards.
