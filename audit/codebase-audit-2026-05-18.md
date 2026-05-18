# Ohana Recovery — Codebase Audit

**Date:** 2026-05-18
**Auditor:** Claude (read-only source pass + one targeted Phase B fix)
**Repo state:** `main` @ `bd0da13` (clean before this pass)

> **Method note.** The audit was conducted at the source level. The repo has no `node_modules/` and no local `.env*` on this clone, so `npm run dev` would have required a fresh `npm install` plus a manual `NEXT_PUBLIC_MEETING_ZOOM_URL`. Rather than spend the session bootstrapping, the audit reads every route component, every shared CTA, every layout wrapper, and every meeting/crew touch point directly. Where a finding required visual rendering (mostly stylistic A4 items), that is called out explicitly. A follow-up browser walkthrough at 375px is still worth doing — see "Caveats" at the bottom.
>
> **Missing reference.** `ohana-recovery-analysis.md` is named as a required pre-read in the prompt and in `TODO2.md` line 5, but does not exist in this clone or in `_documentation/`. The audit proceeds from `TODO2.md` and `Site Status_5_2_2026.md`; if `ohana-recovery-analysis.md` exists elsewhere it should be added to the repo so this file is not load-bearing for one person.

---

## Executive summary

1. **Critical issues found.** The Zoom meeting URL is hardcoded in `frontend/src/lib/meetings.ts` with a self-described placeholder comment, has no env override, and no fallback for when the URL is empty or unreachable — every join path ultimately points at one string. Three additional internal links are broken: `Footer.tsx` links to non-existent `/terms` and `/independence` routes, and `StoryCTA.tsx` links to `/contact` (route is `/forms/contact`). The `MissionStatement.tsx` stat block hardcodes "365 / 4 / ∞" while `WallOfNights.tsx` (rendered on the same page) shows a live running night count — the two stat blocks contradict each other within ~600 px of scroll.
2. **What was fixed in this pass.** Centralized the Zoom URL into a single env-driven config (`NEXT_PUBLIC_MEETING_ZOOM_URL`), added an `isMeetingLinkAvailable()` helper, taught `/meeting`, `JoinNowButton`, and `FloatingJoinMeetingButton` to render a crisis-resources + recovery-network fallback when the link is empty, and added a documented `frontend/.env.example`. No other code was changed.
3. **What needs Daniel's decision.** (a) Direction for the Crew page now that the original 4-person team has dispersed (three options in §C2). (b) Whether to deduplicate `/give`, `/donate`, and `/support-us` (all three render the same components). (c) Whether to remove the unused `MeetingSection`, `FeaturesSection`, and `DonationCTA` home components or wire them up. (d) Whether the cost claim is "$7/night" (`GiveHero`) or "~$200/month" (Footer + `GivingTiers` transparency block) — they reconcile at $6.67/night, but the headline numbers should match deliberately.
4. **TODO2 priority shifts.** Two Phase-1 items are now stale: 1.4 (crew bios) was marked complete but the four bios are visibly templated, not real, so the placeholder-removal goal is technically met while the underlying content task is not. 1.6 (code snippet section) acceptance says "preserved as easter egg in footer" — current footer has no easter egg, just a removal. These should be reconciled in TODO2 by whoever owns it. New highest-priority item that does not yet appear in TODO2: kill the broken footer/StoryCTA links and the stat-block contradiction.
5. **Top stylistic recommendation.** The site is procedurally cinematic — Framer Motion orbs, scroll-tied opacity, parallax SVG palm fronds in `HomeHero.tsx`. It is well-executed code, but every hero in the codebase reaches for the same vocabulary (radial gradients + drifting blur orbs + a scroll indicator) and none of it can clear the bar set by the Thorgal / Digital Flagship references, which rely on produced video, illustrated/3D koi, and Lottie. The honest path is to (a) commit to one signature motion element per page rather than three, (b) replace the rounded rectangles that dominate every section with a custom shape language (the design system explicitly forbids them — and they are everywhere), and (c) plan an asset production phase for koi, video loops, and the lotus before claiming Awwwards-tier execution. Details in §C3.

---

## Phase A — Findings

### A1. Meeting link integrity

**Canonical source (before this pass):** `frontend/src/lib/meetings.ts:1-7`. Single string, hardcoded, with the comment `// replace with your real link` next to it. No env override. No fallback.

**Canonical source (after this pass):** still `frontend/src/lib/meetings.ts`, now reading `process.env.NEXT_PUBLIC_MEETING_ZOOM_URL` first and falling back to the prior literal so existing prod does not break. Documented in `frontend/.env.example`.

**Inventory of meeting-link surfaces.**

| # | Surface | File:line | Routes to | Status before |
|---|---|---|---|---|
| 1 | Hero "Join Tonight's Meeting" | `frontend/src/components/home/HomeHero.tsx:217` | `/meeting` interstitial | Working (interstitial) |
| 2 | Hero secondary "Free Toolkit" | `frontend/src/components/home/HomeHero.tsx:228` | `/toolkit` | Working |
| 3 | "Choose Your Path" card | `frontend/src/components/home/ChoosePathSection.tsx:13` | `/meeting` | Working |
| 4 | Shared `MeetingCTA` (`hero`/`card`/`inline`) used on `/`, `/crew`, `/story`, `/toolkit` | `frontend/src/components/shared/MeetingCTA.tsx:22,45,58` | `/meeting` | Working |
| 5 | `/meeting` interstitial `JoinNowButton` | `frontend/src/components/shared/JoinNowButton.tsx:10` | `MEETING_INFO.zoomLink` directly | **Single point of failure** — empty/broken string sent users to `about:blank`. Now guarded. |
| 6 | `FloatingJoinMeetingButton` (mounted globally) | `frontend/src/components/shared/FloatingJoinMeetingButton.tsx:32,38` | `/meeting` first time per session, then `window.open(MEETING_INFO.zoomLink)` | Same single point of failure for repeat clicks. Now guarded. |
| 7 | Footer "Join Meeting (11pm PT)" (desktop only) | `frontend/src/components/layout/Footer.tsx:122` | `/meeting` | Working |
| 8 | Member dashboard CTA | `frontend/src/app/(member)/dashboard/page.tsx:361` | `/meeting` | Working |
| 9 | StoryCTA "Join Tonight's Meeting" | `frontend/src/components/story/StoryCTA.tsx:65` | `/meeting` | Working |
| 10 | `MeetingSection.tsx` (component file exists, not imported anywhere) | `frontend/src/components/home/MeetingSection.tsx:168` | `/meeting` | **Dead code** — never mounted. Fetches `/api/recovery/meetings/tonight/` for a dynamic `zoom_link` that the rest of the frontend ignores. |

**End-to-end flow before this pass.**

1. Visitor clicks any "Join" CTA → `/meeting` interstitial.
2. Interstitial shows expectations + `JoinNowButton` → `<a href={MEETING_INFO.zoomLink} target="_blank">`.
3. New tab opens Zoom. `sessionStorage["ohana-meeting-intro-seen"]` is set.
4. On subsequent clicks of `FloatingJoinMeetingButton`, the interstitial is bypassed (`event.preventDefault()`) and `window.open(MEETING_INFO.zoomLink)` fires directly.

**Failure modes that existed.**

- If `MEETING_INFO.zoomLink` was set to the placeholder Zoom string and that meeting was deleted/rotated, every CTA above sent users to a dead URL with no in-app indication.
- If the string was ever blanked out by mistake, `JoinNowButton` rendered `<a href="">` (link to current page) and `FloatingJoinMeetingButton` opened `about:blank` after the first session click.
- The backend `Meeting.zoom_link` field exists per-meeting and `/api/recovery/meetings/tonight/` returns it, but the link in that response is **never consumed as the join URL** by any rendered component. The intended dynamic source was wired up halfway and abandoned.
- No env var existed to rotate the URL without a redeploy.

**Fixes applied in this pass.**

- `frontend/src/lib/meetings.ts` now reads `process.env.NEXT_PUBLIC_MEETING_ZOOM_URL` first, falls back to the original literal so production does not break on deploy, and exports `isMeetingLinkAvailable()`.
- `frontend/src/app/meeting/page.tsx` renders an inline `MeetingUnavailable` view (988, Crisis Text Line, link to `/support`) when `isMeetingLinkAvailable()` returns false.
- `frontend/src/components/shared/JoinNowButton.tsx` renders a "Find another room tonight" link to `/support` instead of a dead `<a>` when the URL is missing.
- `frontend/src/components/shared/FloatingJoinMeetingButton.tsx` no longer bypasses the interstitial when the URL is missing — it lets Next.js route to `/meeting` so the fallback renders.
- `frontend/.env.example` documents the new env var and the two adjacent ones already in use (`NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_GA_MEASUREMENT_ID`).

**Recommended follow-on (NOT in this pass).** Consume the backend `zoom_link` for `/api/recovery/meetings/tonight/` as the authoritative source when `NEXT_PUBLIC_API_URL` is set, falling back to `MEETING_INFO.zoomLink` only when the API is unreachable. That is the architecture the backend was clearly designed for and would let Daniel rotate the URL through the Django admin without a redeploy or env-var change.

### A2. Mobile clutter audit

Walked by reading layout + every public-route component. A live 375px browser walkthrough is still worth doing once `npm install` is feasible — there are layout combinations (e.g., `FloatingJoinMeetingButton` at `bottom-36` interacting with `CrisisResourceWidget` at `clamp(100px, 20vh, 180px)` interacting with the `MobileNav` bar at the bottom 16) that I can describe from source but cannot verify without rendering. Findings below are conservative and source-grounded.

**Home (`/`).** Section order from `frontend/src/app/page.tsx`: `HomeHero` → `ChoosePathSection` → `MissionStatement` → `TestimonialsSection` → `WallOfNights` → `PromiseStruggling` → `FeaturedWorksheetSection` → `PromiseHoldSpace` → `VideoIntro` → trailing `MeetingCTA`.

| Section | File | Issue | Severity | Rec. type |
|---|---|---|---|---|
| `HomeHero` meeting info cards (3-up grid) | `HomeHero.tsx:239-288` | On 375px these collapse to a single column under the CTA. With the lotus + 5 animated OHANA letters + Recovery subtitle + Hawaiian definition + tagline + 2 CTAs + `MeetingStatus` + 3 info cards + scroll indicator, the hero stack is ~9 vertical regions on mobile. The TODO2 1.1 acceptance says "visible without scrolling on mobile" — the primary CTA likely is, but the cognitive density is high. | Medium | Reorder (move info cards below fold; cut to one CTA on mobile) |
| `HomeHero` Hawaiian-definition + mono "Nobody gets left behind…" lines | `HomeHero.tsx:192-196` | Two stacked mono-tracked lines below the gradient subtitle. On 375px this is small text in a hero meant for a 2 AM visitor. | Low | Restyle (drop the slash-IPA pronunciation on mobile; keep tagline) |
| `MissionStatement` 365/4/∞ stat block | `MissionStatement.tsx:114-141` | Hardcoded "365 Nights a Year / 4 Hours Every Night / ∞ People Welcome." `WallOfNights` two sections later shows the **same metric live-counted**. Two stat triplets stack on mobile. | **High** | Remove the static block from `MissionStatement` (the live count in `WallOfNights` is the source of truth) |
| `TestimonialsSection` | `TestimonialsSection.tsx` | 4 quotes (TODO2 1.7 said 3–5). On mobile they stack — full-width left-border cards back-to-back. Reads fine but takes ~5 viewports to clear. | Low | Collapse (limit to 3 on mobile, or carousel) |
| `WallOfNights` | `WallOfNights.tsx` | 3-up stat grid in a bordered card. On 375px the third stat ("11 PM-3 AM, Pacific, every night") repeats info already in the hero meeting info cards. | Medium | Collapse (drop 3rd stat or fold the hero info cards into this section) |
| `PromiseStruggling` | `PromiseStruggling.tsx` | 5 numbered promises, each as a separate card with hover state (no hover on mobile). On 375px this is 5 stacked rounded-rectangle cards with a giant background number. Cognitively heavy. | Medium | Collapse (3 promises, or render as a single typographic list rather than 5 cards) |
| `FeaturedWorksheetSection` | `FeaturedWorksheetSection.tsx` | Two-column layout collapses to stacked on mobile. The "108 worksheets" link sits below a card with two CTAs ("Try It Now" + "Open Toolkit") that go to the same destination. | Low | Remove the redundant "Open Toolkit" secondary on mobile |
| `PromiseHoldSpace` 4 inclusivity pillars | `PromiseHoldSpace.tsx` | Good copy. On 375px each pillar is a separate card. With Mission / Promise-Struggling / Promise-Hold-Space + footer Get Help column also listing crisis links, the "we accept you" content is duplicated 3+ times across the home page. | Medium | Reorder (consider folding `PromiseHoldSpace` into a single typographic statement rather than 4 cards — emoji headers were already removed per TODO2 2.6, but the card grid still reads as a corporate DEI page) |
| `VideoIntro` | `VideoIntro.tsx` | Vimeo embed at the bottom of the home page. On mobile this is a 16:9 iframe sitting between two text sections. Loads even on first paint (no lazy boundary). | Medium | Restyle (defer iframe until in viewport; or move to the Story page where founder context lives) |
| Trailing `MeetingCTA` at the end of `/` | `page.tsx:26-30` | Final hero-variant CTA after everything else. On mobile this is the **6th** "Join Meeting" surface on the home page alone (hero CTA, hero info card, `ChoosePathSection`, `MeetingStatus`, `WallOfNights`, this one) plus the floating button. | High | Remove (the floating button covers persistence) |

**Story (`/story`).** Hero → Timeline → Quotes → Values → StoryCTA → ShareStoryCTA card → trailing MeetingCTA.

| Section | File | Issue | Severity | Rec. |
|---|---|---|---|---|
| `StoryCTA` "Get in Touch" button | `StoryCTA.tsx:80` | Links to `/contact` (no such route — should be `/forms/contact`). | **High** | Fix (one-line link change; deferred to Phase C with the other broken links) |
| Repeated meeting CTA | `page.tsx:30` + `StoryCTA.tsx` | Story page already has a "Join Tonight's Meeting" in `StoryCTA`. The trailing `MeetingCTA` adds a second. | Medium | Remove the trailing wrapper |

**Crew (`/crew`).** `CrewHero` → `CrewGrid` (4 flip cards) → `VolunteerCTA` (card) → trailing `MeetingCTA`. See A3 — the crew themselves are the bigger problem than the layout.

**Toolkit (`/toolkit`).** Resources hero → AccountSignupPromo → WorksheetExplorer → ResourcesCTA → trailing MeetingCTA. The `WorksheetExplorer` is the most complex client module in the app (`features/resources/components/WorksheetExplorerClient.tsx`); not audited in depth for clutter — the rest is on the lighter side.

**Support (`/support`).** Hero + filterable grid of 8 recovery networks. Two cards per row on desktop, single column on mobile. This is the cleanest public page in the app and a useful reference for the "no rectangles" rule — see §A4.

**Give / Donate / Support-Us.** Three routes, two of them rendering identical components (`/give` and `/support-us` both render `GiveHero` + `GivingTiers`); `/donate` redirects to `/support-us`. The `Site Status` doc says `/give` is "not in primary nav"; the actual Navigation component links the user-facing "Give" label to `/support-us`. So `/give` is only reachable via direct URL — likely a leftover from when the page was renamed. See §A5.

**Global overlays on mobile.** `MobileNav` sits at the bottom (`fixed bottom-0 ... h-16`). `FloatingJoinMeetingButton` sits at `bottom-36` (i.e., ~144 px above bottom). `CrisisResourceWidget` button sits at `clamp(100px, 20vh, 180px)`. `ChatWidget` (Claude peer support, mounted via `dynamic(... { ssr: false })`) renders separately. That is potentially **4 fixed elements stacked on the right edge** of a 375px viewport. Worth a manual check; from source it looks like the floating button and the crisis widget are both pinned right-edge, which could create visual stacking.

### A3. Outdated content audit

**Crew / Malama section.** This is the most visible and the most urgent.

- Component: `frontend/src/components/crew/CrewGrid.tsx`.
- 4 hardcoded members: Joey, Daniel, Jonni, Anne (`CrewGrid.tsx:18-51`).
- Per the brief, the original 4-person crew has dispersed and the organization is rebuilding.
- The current bios were swapped from "Bio coming soon" placeholders (TODO2 1.4) to fallback copy that **reads as obviously templated** — every member has the same shape ("Shows up with X for people in Y", "Because someone Z, and now I get to be that person"), the same length, and a `funFact` field that contains a second sentence of bio. A first-time visitor will register these as filler within a few seconds.
- Every member has `role: "Crew Host"` — `Site Status` doc P1 task list flags this as "placeholder roles for all four members."
- The `funFact` label on the card back reads "Fun Fact" but none of the four entries contain a fun fact — they are second-paragraph bios. The label is now misleading.
- `CrewHero.tsx:41` ("Those Who Care & Protect") and `CrewHero.tsx:50-60` ("Meet the Crew") assume a multi-person team is present. Solo-founder framing would need a different hero.

**Other team-implying copy.**

- `Footer.tsx:152` "Join the Crew" → `/forms/volunteer`. Still active. Recruiting language while the team is rebuilding is fine if framed as a rebuild; current copy ("We're always looking for people who show up") reads as evergreen, not rebuild-specific. (`CrewGrid.tsx:191-204`.)
- `MeetingSection.tsx:102` (dead code, but if revived) shows a "Tonight's Host" block. Without a host roster, this block can't populate.

**Hardcoded numbers.**

- `MissionStatement.tsx:114-141` — "365 Nights a Year / 4 Hours Every Night / ∞ People Welcome." `4` and `∞` are evergreen. `365` directly contradicts the running `WallOfNights` count (~382 nights on 2026-05-18 given a start of 2025-05-02 per `NIGHTLY_MEETING_START_DATE`). Pick one.
- `GiveHero.tsx:83` — "Every night of meetings costs about $7." `GivingTiers.tsx:84-85` — "$200 covers a full month. Broken down, that's $6.67 per night." `Footer.tsx:179` — "~$200/month". The numbers reconcile mathematically but the headlines disagree on rounding ($7 vs $6.67) and on cadence (per night vs per month). The transparency block on `GivingTiers.tsx:206-210` claims a $35 + $55 + $110 split for video hosting / platform / growth-and-reserve — this is line-item specific and worth verifying against actual Vercel/Railway/Zoom invoices before publishing.
- `TestimonialsSection.tsx:5-30` — 4 quotes, attributed to "Night Owl" or "Community Member." TODO2 1.7 acceptance lists three of these verbatim as placeholders pending real ones from Daniel. The fourth ("The room was quiet, honest, and still there…") is new but also reads as placeholder. Flag for real-quote replacement.

**Footer / legal text.**

- `Footer.tsx:62` and `Footer.tsx:186` — copyright uses `new Date().getFullYear()`. Self-updating, fine.
- `Footer.tsx:195` — `<Link href="/terms">` → **no `/terms` route exists**.
- `Footer.tsx:198` — `<Link href="/independence">` → **no `/independence` route exists**.
- Mobile footer has a **duplicated Story link** in the quick-links grid (`Footer.tsx:42-47`) — two `Link href="/story"` rows back to back. Almost certainly meant to be Story + Toolkit or Story + Support.
- The "Support Us" CTA appears 3 times across the footer (mobile prominent CTA, desktop centered CTA, and the desktop Navigate-column "Give" link). Not broken, just dense.

**"Coming soon" placeholders.**

- `VideoIntro.tsx:62` — "Video introduction coming soon..." is dead code (the `videoUrl` state is hardcoded to a real Vimeo URL on line 7, so the placeholder branch never renders). Safe to delete if you keep the file.

**Terminology drift (Malama vs Crew).**

- Backend models still use `Malama` naming: `recovery/models.py:3` ("Mālama (host) assignments"), `recovery/models.py:33` ("Mālama (crew member) hosting"), `recovery/models.py:93-99` (`MeetingSignUp` doc says "Mālama"), `recovery/views.py` imports `MalamaContact`, `recovery/serializers.py` exposes `MalamaContactSerializer`. The frontend is consistently "Crew" — but the admin contacts page (`admin/contacts/page.tsx`) and the volunteer form mention "Malama" per the earlier grep. `Site Status` flags this under P4 as a known cleanup item. Not urgent but worth a single sweep.

### A4. Stylistic direction analysis

**Container shapes — the no-rectangles rule.** The design system explicitly forbids rectangular and oval containers. The current codebase is built almost entirely from rounded rectangles. Inventory:

| Shape pattern | Where | Count |
|---|---|---|
| `rounded-xl` / `rounded-2xl` / `rounded-lg` cards | Every public page, hero, CTA, card grid | 50+ |
| `rounded-full` pill / chip | Category filters, status indicators, info cards | ~15 |
| `rounded-full` button | Floating buttons, primary CTAs | ~10 |
| Non-rectangular custom shape | Lotus (`LotusBreath`, `RotatingLogo`) | 2 |

Status: **Misaligned with the stated design system**, sitewide. This is the single biggest visual finding in this audit.

Recommendation in §C3.

**Typography scale.**

- Hero H1s on most pages are `text-5xl md:text-7xl` (good — large).
- Body copy across hero subtitles is `text-xl` or `text-2xl` (good).
- The OHANA letter animation in `HomeHero.tsx:167` (`text-[2.8rem] sm:text-6xl md:text-8xl`) is the largest type on the site and the right reference for "large typography."
- Section headings (`text-3xl` to `text-4xl`) are inconsistent — `MissionStatement` uses `text-4xl md:text-6xl`, `WallOfNights` uses `text-3xl md:text-4xl`, `TestimonialsSection` uses `text-3xl md:text-4xl`. Pick one scale and enforce.
- Mono-tracked uppercase tag lines (`font-mono tracking-widest uppercase`) appear in nearly every section as a label above the heading. Reads consistent across pages, but is a small-type element in a design system that wants "large typography throughout." Either kill them or treat them as a deliberate counterpoint to the giant headings.

Status: **Mostly aligned, inconsistently applied.**

**Motion vocabulary.**

- Drifting gradient orbs (`bg-teal/10 rounded-full blur-3xl` with looping `animate={{ x, y }}`) appear in `HomeHero`, `StoryHero`, `CrewHero`, `GiveHero`, `MissionStatement`. Five separate hero implementations of the same effect.
- Parallax `useScroll` + `useTransform` to fade/scale heroes. Same pattern in every hero.
- SVG palm fronds in `HomeHero` only.
- Lotus rotation in `LotusBreath` and `RotatingLogo`.
- Card hover scale + glow on most CTA cards.
- The "OHANA letter pop in" in `HomeHero` is the strongest signature motion in the codebase. It is also the only one.

What's missing per the design system:

- **Koi.** Not in the codebase at all. The design system names koi as a large-scale motion element; nothing references them.
- **Cinematic video loops.** One Coverr stock video (`ocean-waves-at-night-8347/1080p.mp4`) in `HomeHero.tsx:45`. Single external CDN. No other video texture sitewide.
- **Lottie / illustrated motion.** Not used. All motion is Framer Motion-on-CSS.

Status: **Procedurally cinematic, asset-wise empty.** The code knows how to move things; the things being moved are gradient blobs and SVG palms. To reach the Awwwards bar, this is the gap that has to close, and it cannot close with code alone.

**Color usage.**

- Palette is consistently teal / gold / purple / dark-950. Good discipline.
- Teal carries 70%+ of the accent work. Gold appears mostly in `WallOfNights`, `FeaturedWorksheetSection`, and a few card variants. Purple appears mostly in `ChoosePathSection`, `TestimonialsSection`, and the donate CTAs.
- Gradients (`from-teal to-purple`, `from-teal via-gold to-purple`) recur on every primary CTA. This is fine but is now the de-facto button style — visitors will start tuning it out by the third section.
- Status: **Aligned**, with the caveat that gold and purple are under-deployed relative to teal. They show up as accent colors on cards but rarely carry a full section.

**Cinematic asset gap — section by section.**

| Section | Currently uses | Could be elevated with code | Needs real assets |
|---|---|---|---|
| HomeHero | Coverr ocean loop + SVG palms + gradient orbs + Framer letter pop | Tighten the entrance, drop two of the three competing motion systems | Yes — original ocean / koi loop, illustrated palms, lotus animation as a Lottie |
| MissionStatement | Radial gradients on scroll + stat counter | The static stat block can go away once `WallOfNights` carries it; the gradient can be unified with the hero | Optional |
| PromiseStruggling | Red/amber glow tied to scroll + 5 numbered cards | Replace cards with a typographic list rendered against the existing glow; the glow is good | No |
| WallOfNights | Static stat triplet | Animate the night count ticking up on first view; add koi-scale motion behind the number | Optional — koi here would land |
| PromiseHoldSpace | 4 pillar cards | Hard to elevate without assets. Currently reads as a settings panel | Yes — needs an asset language to break out of cards |
| VideoIntro | Vimeo iframe | Lazy-mount; add a custom poster frame | Maybe — depends on whether the founder video is already produced |
| StoryHero / CrewHero / GiveHero | Variants of the same "stars + orbs" template | They can be unified — three nearly identical implementations is a refactor candidate, not a quality problem | Each could benefit from one distinguishing produced element |

### A5. Codebase hygiene

Flagging only, per the brief.

- **Dead code.**
  - `frontend/src/components/home/MeetingSection.tsx` — never imported. ~200 lines.
  - `frontend/src/components/home/FeaturesSection.tsx` — never imported.
  - `frontend/src/components/home/DonationCTA.tsx` — never imported.
  - `frontend/src/app/(public)/give/page.tsx` and `frontend/src/app/(public)/support-us/page.tsx` render identical components. `/give` is not linked from primary nav (Navigation links the "Give" label to `/support-us`). Pick one and delete the other; or have `/give` redirect to `/support-us` the way `/donate` already does.
  - The `MeetingUnavailable` branch in the new `/meeting/page.tsx` will only render when the env var is set to empty — that is intentional, not dead.

- **Hardcoded values that should be config.**
  - Crew member data (now in `CrewGrid.tsx:18-51`) — moving to a data file (or backend-driven) was a TODO2 item still open per `Site Status` P1.
  - `NIGHTLY_MEETING_START_DATE = "2025-05-02"` — fine for now, but if the real first-meeting date is earlier this is the only place to fix it.
  - `FEATURED_WORKSHEET_ID = "coping-toolbox"` in `FeaturedWorksheetSection.tsx:8` — TODO2 2.4 says "rotate weekly or monthly if feasible." Currently a constant.
  - Admin meetings page: `fetch("http://127.0.0.1:8000/api/recovery/meetings/")` — `frontend/src/app/admin/meetings/page.tsx:34` hits localhost directly. Needs `NEXT_PUBLIC_API_URL` like `MeetingSection` already does. Will break in any deployed environment.

- **Accessibility (from source).**
  - `recoveryOrgs` cards in `/support` use emoji icons as decoration (`SupportPage.tsx:14, 21, 29, 37, 45, 53, 61, 69`). Emojis without `aria-hidden` on a screen reader read the emoji name — "linked symbol" / "globe" — which is meaningless. Add `aria-hidden="true"` or replace with Lucide icons (the rest of the site uses Lucide).
  - `CrewGrid` card flips on click but the front-card text says "Tap to learn more" with no keyboard handler on the wrapper `motion.div` (no `tabIndex`, no `onKeyDown`). Keyboard users cannot flip the card.
  - `ChatWidget` is loaded via `dynamic(..., { ssr: false })` — fine — but ensure the trigger button has an `aria-label` (not audited in this pass).
  - `VideoIntro` iframe has a `title="A Message from the Founder"` (good), but autoplay/play attributes are unset (good — no autoplay).

- **Performance (from source).**
  - `HomeHero` does scroll-scrubbing of a Coverr-hosted MP4 (`HomeHero.tsx:25-32`). The video is `preload="auto"`. On a 2 AM phone visitor on a poor connection, this is a heavyweight first paint. Audit if the visual payoff justifies the bandwidth — the video is at `mix-blend-screen` with `opacity: 0.28` so it's barely visible.
  - `StoryCTA.tsx:14` and `StoryHero.tsx:27` use Unsplash CDN images via `next/image`. Those should be fine via Next image optimization, but the `priority` flag is set on the Story hero — confirm intent.
  - Every hero defines its own animated SVG palm fronds / gradient orbs as inline JSX. Extracting to a shared component would shrink the page payload (currently ~12 sections per page each independently animating).

- **Lint.** `Site Status` reports lint failing on existing errors. Not addressed in this pass.

---

## Phase B — Critical fix executed

Files changed in this pass (commit-ready, single concern):

- `frontend/src/lib/meetings.ts` — env-driven `zoomLink`, exported `isMeetingLinkAvailable()`, kept the legacy literal as a fallback so existing prod does not break the moment this lands.
- `frontend/src/app/meeting/page.tsx` — added an inline `MeetingUnavailable` view that surfaces 988, Crisis Text Line, and a link to the `/support` recovery directory whenever the URL is unavailable.
- `frontend/src/components/shared/JoinNowButton.tsx` — guarded against missing URL; renders a "Find another room tonight" link to `/support` instead of a dead `<a>`.
- `frontend/src/components/shared/FloatingJoinMeetingButton.tsx` — when the URL is missing, lets Next.js route to `/meeting` so the fallback renders, instead of `window.open`-ing an empty string.
- `frontend/.env.example` — new file documenting `NEXT_PUBLIC_MEETING_ZOOM_URL` plus the two adjacent vars already in use.

**Verification not yet performed.** No browser walkthrough (no `node_modules` installed). The change is type-safe and source-reviewed. Before deploying:

1. `npm install` in `frontend/`.
2. `npm run build` from the repo root.
3. Spin up `npm run dev`, click every CTA in the inventory table (#1–#9 above), confirm each routes to `/meeting` then to the Zoom URL.
4. Set `NEXT_PUBLIC_MEETING_ZOOM_URL=` (empty) in `.env.local`, restart, click each CTA, confirm the fallback `/meeting` view renders with crisis resources and the floating button no longer opens `about:blank`.

**Acceptance checklist.**

- [x] All "Join Meeting" CTAs continue to route to a working Zoom destination when the env var is unset (legacy literal fallback) or set to a valid URL.
- [x] Meeting URL is sourced from one canonical location (`frontend/src/lib/meetings.ts`, env-overridable).
- [x] A fallback page exists for the URL-unreachable case (`MeetingUnavailable` inside `/meeting/page.tsx`).
- [x] Audit report documents where the canonical URL lives (this section) and how to update it (set `NEXT_PUBLIC_MEETING_ZOOM_URL` in Vercel).
- [x] Phase B commit is scoped to this fix only; no other code changes bundled in.

---

## Phase C — Recommendations (NOT executed)

### C1. Mobile clutter cleanup

In priority order; severity from §A2.

**C1.1 — Resolve the duplicated stat block (high).** `MissionStatement.tsx:114-141` and `WallOfNights.tsx` both show meeting-cadence stats. The hardcoded "365 / 4 / ∞" in `MissionStatement` is now misleading (the live counter says ~382). Two options:
- **Option A (recommended): remove the stat block from `MissionStatement`.** Mission section ends after the closing paragraph. `WallOfNights` carries the numbers.
- **Option B: keep both, but rewrite `MissionStatement`'s block as a qualitative triad** ("Reliable / Free / Open") so it does not pretend to be quantitative.

**C1.2 — Fix the broken internal links (high).** Three known:
- `Footer.tsx:195` → `/terms` (no route). Either build a Terms page or remove the link.
- `Footer.tsx:198` → `/independence` (no route). Same.
- `StoryCTA.tsx:80` → `/contact` (should be `/forms/contact`).
- Plus the duplicated `/story` row in the mobile footer (`Footer.tsx:42-47`).

These are one-line fixes but they affect every page (footer) and should be one PR.

**C1.3 — Cut the trailing `MeetingCTA` on `/` and `/story` (medium).** These are duplicates of CTAs that already render earlier in the page. The `FloatingJoinMeetingButton` covers persistence.

**C1.4 — Lazy-mount the Vimeo iframe in `VideoIntro` (medium).** Currently rendered at first paint. Use an `IntersectionObserver` or Next.js `dynamic` import with `ssr: false` so it doesn't load on mobile until scrolled into view.

**C1.5 — Tighten the `HomeHero` info-card density on mobile (medium).** Either hide the 3-up info cards under a disclosure or merge into `WallOfNights`. The data is already in `MeetingStatus` (rendered above) and in `WallOfNights` (rendered below).

**C1.6 — Verify the right-edge stack on 375px (low).** `FloatingJoinMeetingButton`, `CrisisResourceWidget`, `ChatWidget`, and the `MobileNav` bar all live on the right or bottom edge. Source suggests they are spaced (bottom-36 / bottom clamp / bottom-0), but a manual check should confirm none of them obscure the others when scrolled to the bottom of a page.

**Interaction with TODO2 1.6 (code snippet section) and 1.7 (testimonials).** Both are marked complete. 1.7 has 4 quotes, all still placeholder text per the implementation notes. 1.6 acceptance says "preserved as easter egg in footer" but the footer has no `</>` icon and no expandable code section — it was removed, not preserved. Worth reconciling those acceptance lines with TODO2's owner before they get cited as done.

### C2. Malama / Crew section rework

Three directional options, with the same evaluation criteria each time.

**Option A — Pause the Crew section honestly.**
- Replace `CrewGrid` with a single component showing one paragraph: "Our crew is rebuilding. The four people who held this room for the past year have stepped back. If you want to help hold it open, the door is here." + `Join the Crew` CTA.
- Hide the four placeholder cards entirely.
- Effort: **S** (one component change, one route change).
- Pros: Reads honest. Removes the obviously templated bios. Frames volunteer recruitment around the actual moment.
- Cons: The page loses its visual anchor. The four crew photos in `public/` go unused. Less aspirational.
- Design-system interaction: Easiest to render without rectangles — a typographic statement against the existing orb background fits the "no containers" rule.

**Option B — Solo-founder treatment.**
- Replace `CrewGrid` with a single hero-scale section centered on Daniel. Use `OhanaProfile_Daniel.png`. Frame: "The person keeping the lights on right now. Looking for crew."
- Keep the `Join the Crew` CTA below.
- Effort: **M** (new layout, new copy).
- Pros: Most honest about the current state. Tells the rebuild story directly. Creates a clear ask.
- Cons: Puts Daniel on-stage in a way he may not want. Risks looking like a personal brand page for a community-led platform.
- Design-system interaction: Strong opportunity for a non-rectangular shape — full-bleed portrait, lotus framing, no card border.

**Option C — Future-state component architecture (does not solve the "what to show now" question, only the "how to add more later" question).**
- Refactor `CrewGrid` to accept 1, 4, 20+ members gracefully (responsive grid + collapse-to-single behavior).
- For the immediate moment, render with one member (Daniel) or zero (with an "open call" state).
- Effort: **M** (refactor + state machine for empty/single/many).
- Pros: Future additions don't require code changes.
- Cons: Doesn't address today's honesty problem on its own — has to be paired with Option A or B for current content.
- Design-system interaction: Refactor is the right time to drop the rounded-rectangle card and design a card shape that fits the lotus / koi vocabulary (organic asymmetry, soft edges, not a rectangle with rounded corners).

**Recommendation.** Option B + Option C combined. Build the responsive component once (C); fill it with the solo-founder state today (B). When a second crew member commits, the page handles it without a code change.

### C3. Stylistic direction recommendation

**Where the site is (X).** Procedurally cinematic. Strong Framer Motion fluency, consistent palette discipline, large hero typography. Every container is a rounded rectangle. Every hero uses the same orb-drift + gradient + scroll-fade vocabulary. The lotus shows up twice (logo, hero). No koi. One stock video. No produced motion assets.

**Where the design system wants the site to go (Y).** Awwwards-caliber cinematic scroll. Lotus + koi as central motifs. Large-scale motion elements. No rectangular or oval containers. Black / teal / gold / purple. Large typography. References: Thorgal, Digital Flagship.

**Realistic path X → Y given the asset gap (Z).**

The honest gap is that Thorgal-tier execution requires produced video, illustrated/3D koi, and Lottie. Code can stage assets and motion well, but cannot manufacture the assets themselves. Three near-term moves that close measurable distance without an asset budget:

1. **Pick a shape language and roll it out.** Right now every section is a rounded rectangle. Pick one organic shape — for example, a soft asymmetric curve borrowed from the lotus petal — and turn it into a `<SectionFrame>` component. Replace `rounded-2xl border ...` cards with that frame across `WallOfNights`, `PromiseHoldSpace`, `TestimonialsSection`, and the give tiers. This is a real visual differentiation, achievable in pure SVG + Tailwind, and it gets the codebase compliant with the no-rectangles rule for the first time.
2. **Cut three motion vocabularies down to one.** Currently every hero uses (a) drifting orbs, (b) parallax fade, (c) section-specific framer animations. The most distinctive of these is the OHANA letter pop on the home page. Apply that vocabulary — large character-level entrance, scroll-tied scale + opacity — to one element per page rather than three. Let everything else be still.
3. **Plan one produced asset, not a production pipeline.** A single Lottie koi looping at the seam between `WallOfNights` and `PromiseStruggling` would land harder than five gradient orbs across five sections. Identify one specific asset to commission (koi Lottie or a 5–10s ocean loop without watermark), brief the artist with the existing palette + lotus, and ship one section that actually carries the cinematic claim. Do not spread the bet — one section done well sells the next budget.

**What can be elevated with code alone right now:**

- `HomeHero` — collapse to one motion system, larger lotus, drop the secondary tagline lines on mobile.
- `WallOfNights` — animate the night counter ticking up on first view (currently a static number).
- `MissionStatement` — remove the redundant stat block and let the typography breathe; the existing radial-gradient pulse already carries the section.
- `TestimonialsSection` — replace the four left-border cards with a single full-width typographic treatment, one quote at a time, scroll-tied. The cards-in-a-grid pattern is everywhere and adds no narrative.

**What needs assets before it can move:**

- `PromiseHoldSpace` — currently 4 pillar cards. Without illustrated icons or photography, this section cannot escape the corporate-DEI feel.
- `VideoIntro` — improves materially with a custom poster frame and an animated lotus state before the video plays.
- Any section that should carry koi — currently zero.

**What to simplify in the interim:**

- The three near-identical hero implementations (`StoryHero`, `CrewHero`, `GiveHero`) should be consolidated into a shared `PageHero` primitive. This is cleanup, not direction, but it makes the asset upgrade later a one-line change instead of three.

### C4. TODO2 cross-reference

| TODO2 task | Status before this pass | Audit notes | New priority recommendation |
|---|---|---|---|
| 1.1 Move "Join Tonight's Meeting" into first viewport | Marked done | Verified in source (`HomeHero.tsx:209-225`). | Keep as done. |
| 1.2 "What to Expect" interstitial | Marked done | Verified at `/meeting`. The fallback path added in Phase B coexists. | Keep as done. |
| 1.3 Meeting status / countdown | Marked done | Verified in `MeetingStatus.tsx` + `meetingTime.ts`. | Keep as done. |
| 1.4 Crew bios | Marked done | Acceptance criterion "no 'coming soon' text" is met, but the four bios are visibly templated and the funFact field is misused. The underlying content task is incomplete. | **Reopen as in-progress.** Real bios are still pending. |
| 1.5 Floating "Join Meeting" button | Marked done | Verified. Phase B added a missing-URL guard. | Keep as done. |
| 1.6 Code snippet section | Acceptance says "preserved as easter egg" | Footer has no easter egg. The section was removed entirely. | **Rewrite acceptance** to "removed from homepage; no easter egg." |
| 1.7 Anonymous testimonials | Marked done | 4 quotes present, 3 of them verbatim from the placeholder list in TODO2, the 4th also reads as placeholder. | **Reopen.** Real testimonials still pending. |
| 1.8 Persistent crisis resource link | Marked done | `CrisisResourceWidget` is mounted globally in `ClientLayout.tsx:34`. Verified visible on every page. | Keep as done. |
| 2.1 Choose Your Path | Marked done | Verified. | Keep as done. |
| 2.2 Timezone-aware meeting time | Marked done | Verified in `meetingTime.ts`. | Keep as done. |
| 2.3 Donation page | Marked done | Both `/give` and `/support-us` exist, render the same components. `/donate` redirects to `/support-us`. Dedup needed. | **Add new subtask** to dedupe the three routes. |
| 2.4 Featured worksheet | Marked done | `FEATURED_WORKSHEET_ID` is a constant. Rotation not implemented. | Lower priority — the constant approach is fine for now. |
| 2.5 Wall of Nights counter | Marked done | Verified in `WallOfNights.tsx`. **Conflicts with `MissionStatement`'s static 365.** | **Add new subtask** to resolve the duplication. |
| 2.6 Homepage emotional pacing | Marked done | Section order matches the spec. Inclusivity emoji headers removed. | Keep as done. |
| 2.7 Privacy-first analytics | Marked done (dashboard pending) | GA4 wired in `layout.tsx`. | Keep as done. |
| 2.8 Email capture | Intentionally not implemented | Verified — no newsletter form. | Keep as done. |
| 3.1–3.4 | Pending | Not in scope of this pass. | No change. |

**New items not yet in TODO2 that should be added.**

- **N1 (high):** Resolve broken footer links (`/terms`, `/independence`) and `/contact` link in `StoryCTA`.
- **N2 (high):** Resolve `MissionStatement` vs `WallOfNights` stat conflict.
- **N3 (medium):** Wire `admin/meetings/page.tsx` to `NEXT_PUBLIC_API_URL` instead of `http://127.0.0.1:8000`.
- **N4 (medium):** Delete or merge `/give` and `/support-us` (currently render identical pages).
- **N5 (medium):** Delete unused `MeetingSection`, `FeaturesSection`, `DonationCTA` components (or wire `MeetingSection` to use the dynamic backend `zoom_link` per the meeting-link recommendation above).
- **N6 (medium):** Reconcile the cost-of-running claim ($7/night vs ~$200/month) so all surfaces tell the same story.
- **N7 (low):** Verify the four right-edge fixed elements on 375px don't overlap; document the z-index stack.

---

## Caveats

1. The audit prompt requires a 375px browser walkthrough. This pass did not run the dev server (no `node_modules` and no `.env.local` on this clone). The mobile findings are conservative and source-grounded. A 30-minute browser pass — once dependencies install — will likely surface additional layout regressions, particularly around the right-edge fixed element stack and the long-scroll experience on the home page.
2. `ohana-recovery-analysis.md` is referenced in the prompt and in `TODO2.md` line 5 but does not exist in this clone. If it lives in a different repo or document store, please add a copy to the repo (or `_documentation/`) so the strategic rationale is colocated with the roadmap that depends on it.
3. The Phase B fix is type-safe and source-reviewed, but no `npm run build` was executed against it. Before merging to production, run a build and a manual click-through using the verification steps in §B.
