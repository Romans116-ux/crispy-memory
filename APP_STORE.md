# App Store Submission Guide

Everything needed to take Reason for Hope from this repo to the App Store.

## 1. One-time setup

1. Enroll in the [Apple Developer Program](https://developer.apple.com/programs/) ($99/year).
2. Create an [Expo account](https://expo.dev/signup) and install nothing else locally — builds run in the cloud, so no Mac is required.
3. In `app.json`, change `ios.bundleIdentifier` (currently `com.reasonforhope.app`) to an identifier you own, e.g. `com.yourministry.reasonforhope`. Do the same for `android.package`.
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
| Name | Reason for Hope |
| Subtitle (30 chars) | Christian Apologetics Guide |
| Primary category | Reference |
| Secondary category | Education |
| Age rating | 4+ (no objectionable content) |
| Price | Free |
| Privacy "nutrition label" | **Data Not Collected** |
| Privacy policy URL | Host `PRIVACY.md` (e.g. GitHub Pages or your ministry site) |
| Support URL | Your ministry or contact page |

**Keywords (100 chars):**
`apologetics,bible,christian,faith,jesus,resurrection,god,theology,evidence,scripture,gospel,defend`

**Promotional text:**
Always be ready to give an answer. Clear, Scripture-grounded responses to life's biggest questions about God, Jesus and the Bible.

**Description:**

> "Always be ready to give an answer to everyone who asks you a reason concerning the hope that is in you." — 1 Peter 3:15
>
> Reason for Hope equips you to understand and share the reasons for the Christian faith — with confidence, gentleness and respect.
>
> EXPLORE THE BIG QUESTIONS
> • Does God exist? The beginning of the universe, fine-tuning and the moral law
> • Can we trust the Bible? Manuscripts, the canon, archaeology and fulfilled prophecy
> • Who is Jesus? The historical Jesus, his claims to deity and the evidence for the resurrection
> • Tough questions: evil and suffering, hell, science and faith, and whether Jesus is the only way
> • Other worldviews: talking with atheists, Muslims and Jehovah's Witnesses, and understanding the Trinity
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

## 4. Screenshots

App Store Connect requires 6.9" iPhone screenshots (1320 × 2868 or 1290 × 2796). The easiest route is running a preview build in the iOS Simulator (`eas build --profile development`) and pressing ⌘S. Good screens to capture: Today, a topic (e.g. The Resurrection), Common objections expanded, Scripture lookup, Resources.

## 5. Review notes (paste into "Notes for reviewer")

> Reason for Hope is a reference app of original Christian apologetics content (26 topics, with key points, objections and responses). Scripture is quoted from the NIV (under Biblica's standard quotation permission, with the required notice in the About screen) and optionally the public-domain KJV or WEB. External links open third-party resources (Bible Gateway, Got Questions, etc.) in an in-app Safari view for further study; the app is not affiliated with these sites. No login is required and no data is collected.

## Content guidelines

- All topic text in `src/data/topics/` is original writing. When adding content, summarize ideas in your own words and link to the source site rather than copying articles — the linked ministries hold copyright to their material.
- **NIV:** Biblica allows quoting up to 500 NIV verses without written permission, as long as the copyright notice is shown (it is, in About). The app quotes about 45 verses and `npm run validate` enforces a 250-verse budget. If you charge for the app or add in-app purchases, confirm with Biblica (biblica.com/permissions) before release.
- KJV and WEB text is generated from public-domain data by `npm run build:scripture`. Other translations (ESV, NKJV, NASB, CSB, NLT, NET, AMP) are copyrighted and are only linked on Bible Gateway, not bundled.
- Run `npm run validate` after editing content.
