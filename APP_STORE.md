# App Store Submission Guide

Everything needed to take Salt and Grace from this repo to the App Store.

## 1. One-time setup

1. Enroll in the [Apple Developer Program](https://developer.apple.com/programs/) ($99/year).
2. Create an [Expo account](https://expo.dev/signup) and install nothing else locally — builds run in the cloud, so no Mac is required.
3. The app ID in `app.json` is `com.saltandgrace.app` (`ios.bundleIdentifier` and `android.package`). App IDs are unique across the App Store; if Apple reports it as taken when you register it, change both to another reverse-domain ID, e.g. `com.saltandgraceministry.app`.
4. Link the project to EAS: `npx eas-cli@latest init`

## 2. Build and submit

```bash
npm install
npm run typecheck && npm run validate
npx eas-cli@latest build --platform ios --profile production
npx eas-cli@latest submit --platform ios --latest
```

EAS will prompt you to sign in to your Apple account and will create the certificates, provisioning profile and App Store Connect app record for you. The build then appears in TestFlight; add it to a version in App Store Connect and submit for review.

## 3. App Store Connect listing

| Field | Suggested value |
| --- | --- |
| Name | Salt and Grace (if taken, try "Salt and Grace: Apologetics") |
| Subtitle (30 chars) | Christian Apologetics Guide |
| Primary category | Reference |
| Secondary category | Education |
| Age rating | 4+ (no objectionable content) |
| Price | Free |
| Privacy "nutrition label" | **Data Not Collected** |
| Privacy policy URL | `https://romans116-ux.github.io/crispy-memory/privacy.html` (see "Hosting the website" below) |
| Support URL | `https://romans116-ux.github.io/crispy-memory/` |

**Keywords (100 chars):**
`apologetics,bible,christian,faith,jesus,resurrection,god,theology,evidence,scripture,gospel,defend`

**Promotional text:**
Always be ready to give an answer. Clear, Scripture-grounded responses to life's biggest questions about God, Jesus and the Bible.

**Description:**

> "Let your conversation be always full of grace, seasoned with salt, so that you may know how to answer everyone." — Colossians 4:6
>
> Salt and Grace equips you to understand and share the reasons for the Christian faith — with confidence, gentleness and respect.
>
> EXPLORE THE BIG QUESTIONS
> • Does God exist? The beginning of the universe, fine-tuning and the moral law
> • Can we trust the Bible? Manuscripts, the canon, archaeology and fulfilled prophecy
> • Who is Jesus? The historical Jesus, his claims to deity and the evidence for the resurrection
> • Tough questions: evil and suffering, hell, science and faith, and whether Jesus is the only way
> • Islam: the crucifixion, whether the Bible was corrupted, Jesus as the Son of God, and assurance of salvation
> • Atheism: miracles, science and knowledge, the mind, and religion and violence
> • Buddhism: karma and grace, the self, and how the Buddha's path compares with Jesus
> • Jehovah's Witnesses: the deity of Christ, the Holy Spirit, the bodily resurrection, the 144,000 and the Watchtower's predictions
> • Truth and doctrine: relativism and the Trinity
>
> EVERY TOPIC INCLUDES
> • A short answer you can give in conversation
> • Key points explained clearly
> • Common objections with thoughtful responses
> • Scripture quoted in the NIV, KJV or WEB, and a link to read it in context in your preferred translation
> • Links to go deeper with trusted resources
>
> GO DEEPER WITH TRUSTED RESOURCES
> Jump straight to Bible Gateway, Enduring Word commentary, Got Questions, CARM, Precept Austin word studies, Wesley Huff's manuscript teaching and Logos.
>
> ALSO INCLUDES
> • A question and verse of the day
> • Passage lookup with commentary in one tap
> • Bookmarks for quick review before a conversation
> • Full dark mode support
>
> No ads. No accounts. No tracking.

## Hosting the website

The support page and privacy policy live in `docs/` (`index.html` and `privacy.html`). The contact email shown on both pages is gag00lts@gmail.com.

To serve them with GitHub Pages: in the repository on GitHub, open **Settings → Pages**, set **Source** to "Deploy from a branch", choose branch `main` and folder `/docs`, and save. GitHub Pages requires the repository to be public, or a GitHub Pro plan for a private repository. The site appears at `https://romans116-ux.github.io/crispy-memory/` within a few minutes.

## 4. Screenshots

App Store Connect requires 6.9" iPhone screenshots (1320 × 2868 or 1290 × 2796). The easiest route is running a preview build in the iOS Simulator (`eas build --profile development`) and pressing ⌘S. Good screens to capture: Today, a topic (e.g. The Resurrection), Common objections expanded, Scripture lookup, Resources.

## 5. Review notes (paste into "Notes for reviewer")

> Salt and Grace is a reference app of original Christian apologetics content (41 topics, with key points, objections and responses). Scripture is quoted from the NIV (under Biblica's standard quotation permission, with the required notice in the About screen) and optionally the public-domain KJV or WEB. External links open third-party resources (Bible Gateway, Got Questions, etc.) in an in-app Safari view for further study; the app is not affiliated with these sites. No login is required and no data is collected.

## Content guidelines

- All topic text in `src/data/topics/` is original writing. When adding content, summarize ideas in your own words and link to the source site rather than copying articles — the linked ministries hold copyright to their material.
- **NIV:** Biblica allows quoting up to 500 NIV verses without written permission, as long as the copyright notice is shown (it is, in About). The app quotes about 45 verses and `npm run validate` enforces a 250-verse budget. If you charge for the app or add in-app purchases, confirm with Biblica (biblica.com/permissions) before release.
- KJV and WEB text is generated from public-domain data by `npm run build:scripture`. Other translations (ESV, NKJV, NASB, CSB, NLT, NET, AMP) are copyrighted and are only linked on Bible Gateway, not bundled.
- Run `npm run validate` after editing content.
