dkes# TODO2 — Ohana Recovery Development Roadmap

> **Purpose:** Actionable task list for a coding agent working on the Ohana Recovery web application. Each task includes context, implementation notes, and acceptance criteria. Work top-to-bottom within each phase unless a dependency is noted.
>
> **Reference:** See `ohana-recovery-analysis.md` in project root for full strategic rationale behind these tasks.
>
> **Stack:** Next.js frontend (Vercel), Django backend, Zoom integration, Ko-fi donations. Site: ohanarecovery.org

---

## Phase 1 — High-Impact Quick Wins

These are the highest-value, lowest-effort changes. Complete all of these before moving to Phase 2. Estimated time: 1–2 weeks.

---

### 1.1 — Move "Join Tonight's Meeting" into first viewport

**Why:** The primary CTA is below the fold. A visitor in distress at 2 AM should see the join button without scrolling.

**Implementation:**
- In the homepage hero section, add a prominent "Join Tonight's Meeting" button directly below the tagline ("A safe space for connection, healing, and growth..."), above any other content sections.
- Keep the existing button further down the page as well — repetition is intentional.
- Style the hero CTA as the highest-contrast element on the page. It should be the most visually obvious interactive element in the first viewport.
- On mobile, the button must be visible without any scrolling at all.

**Acceptance:**
- [x] "Join Tonight's Meeting" button visible on desktop and mobile without scrolling
- [x] Button routes to meeting interstitial; interstitial Join Now links to Zoom meeting URL
- [x] Visual weight of button exceeds all other elements in hero section

---

### 1.2 — Add "What to Expect" interstitial before Zoom handoff

**Why:** Clicking a raw Zoom link from an unfamiliar site at 2 AM is a trust barrier. One paragraph of context dramatically reduces first-time hesitation.

**Implementation:**
- Create a lightweight interstitial page or modal that appears when a user clicks any "Join Meeting" CTA.
- Content (adapt tone to match existing site voice):
  - Cameras are optional. Most people leave them off.
  - You don't have to talk. Listening is enough.
  - No cross-talk. One person shares at a time.
  - No sign-up, no commitment, no pressure.
  - It's just people who get it.
- Include a clear "Join Now" button that proceeds to the actual Zoom link.
- Include a "Not ready yet? Explore the Toolkit" secondary link.
- The interstitial should feel warm and reassuring, not like a legal disclaimer or onboarding gate.

**Acceptance:**
- [x] Clicking any "Join Meeting" button routes through interstitial first
- [x] Interstitial displays meeting expectations copy
- [x] "Join Now" proceeds to Zoom URL
- [x] Secondary path to Toolkit is available
- [x] Page/modal matches dark-mode site aesthetic

---

### 1.3 — Add meeting status / countdown indicator

**Why:** Visitors have no way to know if the meeting is live right now or when the next one starts. Ambiguity kills first-time attendance.

**Implementation:**
- Create a `MeetingStatus` component that calculates meeting state based on current time vs 11 PM – 3 AM Pacific (auto-convert to visitor's local timezone).
- Three states:
  - **Live now:** "Meeting is live — join anytime" with a subtle pulse/glow animation
  - **Starting soon** (within 2 hours): "Tonight's meeting starts in X hours, Y minutes"
  - **Later today:** "Next meeting tonight at [local time]"
- Display this component prominently on the homepage, ideally near or within the hero section.
- Use client-side JS for timezone detection and countdown. No backend needed.
- The countdown should tick in real time (update every minute is fine, every second for the last 5 minutes).

**Acceptance:**
- [x] Component displays correct state based on visitor's local timezone
- [x] Countdown updates in real time
- [x] All three states render correctly
- [x] Times displayed in visitor's local timezone with PT reference

---

### 1.4 — Fill crew bios (content task)

**Why:** Every crew card currently says "Bio coming soon" and "Fun fact coming soon." Placeholder content on a trust-building page is worse than no page at all.

**Implementation:**
- This is primarily a content task. The coding agent should:
  - Update the crew data source (likely a data file or component in the crew page) to replace all placeholder text.
  - If bios are not yet provided by the team members, replace "Bio coming soon" with a brief, warm fallback that doesn't read as placeholder. Example: for the card front, use a one-sentence role description like "Crew host. Shows up every night so nobody has to sit alone." For the "Why Recovery Work?" section on the card back, something like "Because someone was there for me, and now I get to be that person for someone else."
  - Flag to Daniel that real bios should replace these as soon as crew members provide them.
- Remove "Fun fact coming soon" entirely if no fun facts are available — an empty promise is worse than absence.

**Acceptance:**
- [x] No instance of "coming soon" appears anywhere on the Crew page
- [x] Every crew card has meaningful text on both front and back
- [x] Cards still flip/expand correctly with new content

---

### 1.5 — Add persistent floating "Join Meeting" button

**Why:** As the visitor scrolls through the homepage, the primary CTA disappears. It should remain accessible at all times.

**Implementation:**
- Add a fixed-position floating button (bottom-right corner, above any chat widget if one exists).
- The button should only be fully visible during meeting hours (11 PM – 3 AM PT). Outside meeting hours, either hide it or change it to "Next Meeting at [time]" in a subtler style.
- During meeting hours, add a gentle pulse animation (CSS only, no heavy JS).
- The button should route through the "What to Expect" interstitial (task 1.2) if the visitor hasn't seen it this session. Use sessionStorage to track.
- Z-index should be high enough to float above all content but not interfere with the nav or any modals.
- On mobile, ensure it doesn't overlap critical content or bottom nav elements.

**Acceptance:**
- [x] Floating button visible on scroll across all pages
- [x] Button state changes based on meeting hours
- [x] Pulse animation during live hours (CSS only)
- [x] Routes through interstitial on first click per session
- [x] Does not obstruct content on mobile viewports

---

### 1.6 — Remove or collapse the code snippet section

**Why:** The "Info for Nerds" JSX code section on the homepage creates tonal dissonance between emotional recovery content and a developer flex. It breaks the narrative flow.

**Implementation:**
- Remove the code snippet section from the main homepage scroll flow entirely.
- Option A (preferred): Move it to a hidden easter egg — a small `</>` icon in the footer that expands the code block on click.
- Option B: Remove it completely.
- Do NOT leave it in the primary scroll sequence between emotional content sections.

**Acceptance:**
- [x] Code snippet section no longer appears in normal homepage scroll
- [x] Code snippet was not preserved as an easter egg; it was removed from the homepage flow
- [x] No gap or layout shift where the section was removed

---

### 1.7 — Add anonymous community testimonials

**Why:** The site currently has one anonymous quote. For a community-driven platform, 3–5 rotating testimonials build social proof without requiring names or identifiable information.

**Implementation:**
- Create a testimonials section on the homepage, placed after the "Our Promise to You" section and before the inclusivity cards.
- Use anonymous attribution: "— Community Member" or "— Night Owl" or similar.
- Display 3–5 quotes. Can be static initially; a rotating/carousel version is a nice-to-have.
- Placeholder quotes until Daniel provides real ones (write in the authentic tone of the site — raw, honest, not inspirational-poster):
  - "I thought I was the only one awake at 2 AM fighting this. Turns out I had a whole family I didn't know about."
  - "No one asked me to introduce myself. No one asked how many days I had. I just sat there and listened, and for the first time in months, I didn't feel alone."
  - "I've been to a hundred meetings. This is the first one that felt like it was built for people like me."
- Style to match the existing dark-mode aesthetic. Consider a subtle quote-mark glyph or a soft border-left accent.

**Acceptance:**
- [x] 3–5 testimonial quotes displayed on homepage
- [x] Quotes are anonymous with no identifying information
- [x] Section integrates visually with surrounding homepage sections
- [x] Content tone matches existing site voice (not corporate, not cliché)

---

### 1.8 — Add persistent crisis resource link

**Why:** The 988 Suicide & Crisis Lifeline is in the footer, but a person in crisis shouldn't have to scroll to find it. This should be visible from every page without interaction.

**Implementation:**
- Add a small, persistent element — either in the top nav bar or as a fixed-position element — with: "Crisis? Call 988 or text HOME to 741741"
- Style it to be visible but not dominating. Muted text, small font, always accessible.
- Link "988" to `tel:988` and the text line to `sms:741741&body=HOME` (or just display as text).
- This element should appear on every page across the site.

**Acceptance:**
- [x] Crisis contact info visible on every page without scrolling
- [x] Phone number and text line both accessible
- [x] Styling is persistent but not visually overwhelming
- [x] Present on all routes (homepage, story, crew, toolkit, support)

---

## Phase 2 — Signature Experience Upgrades

Begin after all Phase 1 tasks are complete. Estimated time: 1–2 months.

---

### 2.1 — "Choose Your Path" entry flow

**Why:** The homepage currently presents everything at once. Different visitors have different immediate needs. Let them self-select.

**Implementation:**
- Below the hero section (after the CTA and meeting status), add three clear pathway cards:
  - **"I need support tonight"** → scrolls/links to meeting info + "What to Expect" + join button
  - **"I want to learn about Ohana"** → links to Story page
  - **"I need tools for recovery"** → links to Toolkit page
- These should be visually distinct, horizontally laid out on desktop, stacked on mobile.
- Each card should have a subtle hover animation and a clear icon or illustration.
- This replaces the current flow where all content is presented linearly. The content below the pathway cards can remain but should feel like "deeper exploration" rather than required reading.

**Acceptance:**
- [x] Three pathway cards displayed below hero section
- [x] Each card links to the correct destination
- [x] Cards are responsive (horizontal desktop, stacked mobile)
- [x] Visual design matches site aesthetic

---

### 2.2 — Timezone-aware meeting time display

**Why:** The site shows "11 PM – 3 AM PT" but the search result snippet says "(auto-converts)". The auto-conversion should be prominent on the homepage, not hidden.

**Implementation:**
- Detect visitor timezone via `Intl.DateTimeFormat().resolvedOptions().timeZone`
- Convert 11 PM – 3 AM Pacific to the visitor's local time
- Display prominently: "Tonight: [local start time] – [local end time] (your time)"
- Show the PT reference in smaller text below: "11 PM – 3 AM Pacific"
- If the visitor is in Pacific time, no conversion needed — just show the times with "(your time)" appended.

**Acceptance:**
- [x] Meeting times display in visitor's detected timezone
- [x] PT reference shown as secondary info
- [x] Correct conversion across all US and international timezones
- [x] Handles DST transitions correctly

---

### 2.3 — Dedicated "Support Ohana" donation page

**Why:** The current Ko-fi link in the footer reads as a footnote. A dedicated page frames donations as investment, not charity, and shows what the money actually funds.

**Implementation:**
- Create a new page at `/support-us` (or `/donate` — check what feels right with existing nav structure).
- Content sections:
  - **What it costs to run Ohana:** Transparent breakdown — Zoom license, Vercel hosting, domain, development time, future features. Real numbers.
  - **Impact framing:** "$10 keeps the lights on for a night." "$50 covers a month of worksheets." "$200 funds a full month of operation."
  - **How to give:** Prominent Ko-fi button/embed. Mention if other channels are available.
  - **Where it goes:** "100% of donations go to keeping Ohana free and running. No salaries. No overhead. Just the work."
- Add a nav link to this page. Consider placing it as a subtle but visible CTA in the main nav (not just the footer).
- The existing footer Ko-fi link should remain but also link to this new page.

**Acceptance:**
- [x] `/support-us` page exists and is accessible from nav
- [x] Transparent cost breakdown is displayed
- [x] Impact-framed donation tiers are presented
- [x] Ko-fi integration is prominent
- [x] Page tone is confident and investment-oriented, not desperate

---

### 2.4 — Surface one featured worksheet on homepage

**Why:** 108 worksheets is a huge value proposition, but it's entirely hidden behind the Toolkit nav link. One featured worksheet on the homepage gives visitors immediate, tangible utility.

**Implementation:**
- Add a section to the homepage (after testimonials, before footer) that surfaces a single worksheet.
- Choose a universally applicable worksheet — something like a grounding exercise, a "what am I feeling right now" check-in, or a simple breathing/coping tool.
- Show the worksheet title, a one-sentence description, and a "Try It Now" button that links to the worksheet in the Toolkit.
- Include a secondary link: "Explore all 108 worksheets →"
- Rotate the featured worksheet weekly or monthly if feasible (could be driven by a simple config file or data source).

**Acceptance:**
- [x] One worksheet is featured on the homepage with title and description
- [x] "Try It Now" links to the worksheet in Toolkit
- [x] "Explore all 108" link goes to Toolkit index
- [x] Section fits visually within homepage flow

---

### 2.5 — "Wall of Nights" consistency counter

**Why:** A simple count of consecutive nights the meeting has been held is powerful social proof. It demonstrates reliability through a single number.

**Implementation:**
- Determine the start date of nightly meetings (ask Daniel or check project records).
- Calculate the number of consecutive nights from that date to today.
- Display prominently on the homepage, likely in the stat blocks section that already shows "365 Nights a Year" / "4 Hours Every Night" / "∞ People Welcome."
- Replace or supplement the "365" stat with the actual running count: "X nights and counting"
- The count should update daily (can be calculated client-side from a hardcoded start date).

**Acceptance:**
- [x] Accurate night count displayed based on start date
- [x] Updates automatically each day
- [x] Integrated into existing stats section or new prominent position
- [x] Visually impactful — this number should feel significant

**Status note, 2026-05-02:** Counter uses `2025-05-02` as the one-year operating start date. Update `NIGHTLY_MEETING_START_DATE` if a more exact first-meeting date is confirmed later.

---

### 2.6 — Homepage emotional pacing refactor

**Why:** The current section order is flat — every section carries equal visual weight. Better pacing creates a narrative arc.

**Implementation:**
- Reorder homepage sections to follow this flow:
  1. **Hero** — logo, tagline, "Join Tonight's Meeting" CTA, meeting status/countdown
  2. **Choose Your Path** — three pathway cards (task 2.1)
  3. **Mission statement** — "To be the light in the darkest hours" (condensed)
  4. **Social proof** — testimonials (task 1.7) + Wall of Nights counter (task 2.5)
  5. **Our Promise** — the numbered commitments (keep as-is, strong content)
  6. **Featured Worksheet** — one toolkit preview (task 2.4)
  7. **Inclusivity section** — condense "We Hold Space for All" (see below)
  8. **Join the Crew** CTA — volunteer recruitment
  9. **Footer**
- For the inclusivity section: replace emoji headers (🌈 🌍 etc.) with subtle custom icons or remove icons entirely. Reduce from 6 cards to 3–4. The content is good but visually reads as a corporate DEI page.
- Remove the code snippet section from this flow (already handled in 1.6).

**Dependencies:** Tasks 1.6, 1.7, 2.1, 2.4, 2.5 should be completed first.

**Acceptance:**
- [x] Homepage sections follow the specified narrative arc
- [x] Inclusivity section is condensed and emoji-free
- [x] Scroll experience has clear visual hierarchy — hero dominates, sections decrease in intensity
- [x] No content is lost, only reordered and refined

---

### 2.7 — Privacy-first analytics

**Why:** No analytics means no visibility into what's working. Use the least invasive practical setup for the current budget and disclose it clearly.

**Implementation:**
- Integrate Google Analytics 4 using `NEXT_PUBLIC_GA_MEASUREMENT_ID`. Google Analytics is free for standard use and fits the current budget requirement.
- Track: page views, meeting link clicks (as custom events), toolkit page visits, donation page visits.
- Do NOT track: user identity, session recordings, form inputs, any PII.
- Add the script tag to the site's `<head>` via Next.js `_app` or layout component.

**Acceptance:**
- [x] Analytics script loads on all pages when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is configured
- [x] Google Analytics disclosed in privacy policy, including cookie usage
- [x] Meeting link clicks tracked as custom events
- [ ] Dashboard accessible to Daniel
- [x] Privacy policy updated to mention analytics tool

**Status note, 2026-05-02:** Google Analytics integration is implemented with measurement ID `G-NY5ZGB6ZCY`, with optional `NEXT_PUBLIC_GA_MEASUREMENT_ID` override support. Final follow-up: confirm live dashboard data after deployment.

---

### 2.8 — Simple email capture

**Decision, 2026-05-02:** Do not implement newsletter or email capture. This product should not collect email addresses for retention unless a future requirement changes.

**Implementation:**
- Do not add a homepage newsletter form.
- Do not add Buttondown, Mailchimp, Django email-retention models, or any other marketing-email backend.
- Do not collect email addresses unless a user explicitly submits an existing operational form such as contact, story, volunteer, or account signup.

**Acceptance:**
- [x] Email capture intentionally excluded from homepage
- [x] No newsletter backend/vendor needed
- [x] No unsubscribe mechanism needed because no marketing email is sent

**Phase 2 remaining follow-ups, 2026-05-02:**
- Task 2.7 needs dashboard data confirmation after deployment.

---

## Phase 3 — Operational & Growth Systems

Begin after Phase 2 priorities are in place. Estimated time: 2–4 months.

---

### 3.1 — Printable one-sheet PDF for institutional distribution

**Context:** Treatment centers, hospitals, courts, and sober living houses discharge people with pamphlets. Ohana should have a simple, printable handout.

**Implementation:**
- Create a single-page PDF (letter size, print-friendly) with:
  - Ohana logo and name
  - "Late night and need someone to talk to?"
  - ohanarecovery.org
  - "Every night, 11 PM – 3 AM Pacific. Free. No sign-up."
  - QR code linking to the site
  - Crisis resources (988, Crisis Text Line)
- Host the PDF on the site (e.g., `/resources/ohana-one-sheet.pdf`) and link to it from the Support page.
- Design should be clean, high-contrast, and legible when photocopied in black and white.

**Acceptance:**
- [ ] PDF is downloadable from the site
- [ ] Prints cleanly on standard letter paper
- [ ] Legible in black and white
- [ ] QR code links to ohanarecovery.org
- [ ] Crisis resources included

---

### 3.2 — SEO content optimization

**Context:** The homepage is emotionally rich but light on search-friendly recovery terminology. People searching for help at night use specific phrases.

**Implementation:**
- Naturally integrate the following terms into existing homepage copy (do NOT keyword-stuff — weave into existing sentences or add new contextual sentences):
  - "free online recovery meeting"
  - "late-night sobriety support"
  - "secular recovery group"
  - "addiction support group online"
  - "AA alternative"
  - "free recovery worksheets"
  - "peer support for addiction"
- Add appropriate meta description to all pages if not already present.
- Ensure each page has a unique, descriptive `<title>` tag.
- Add structured data (JSON-LD) for the organization: name, URL, description, meeting schedule.

**Acceptance:**
- [ ] Target search terms appear naturally in homepage content
- [ ] All pages have unique meta descriptions and title tags
- [ ] JSON-LD structured data present in homepage `<head>`
- [ ] No keyword stuffing — copy reads naturally

---

### 3.3 — Volunteer onboarding documentation

**Context:** As the crew grows, there needs to be a standard document for new volunteers.

**Implementation:**
- Create a page at `/crew/onboarding` (or a downloadable doc linked from the volunteer form).
- Content sections:
  - What crew hosts do (facilitate, hold space, not counsel or advise)
  - Time commitment expectations
  - Code of conduct (respect, confidentiality, no advice-giving)
  - How meetings are structured
  - Emergency protocols (what to do if someone is in crisis during a meeting)
  - Who to contact with questions
- This can be a simple, well-formatted page — no complex features needed.

**Acceptance:**
- [ ] Onboarding content accessible to prospective volunteers
- [ ] Covers all key areas: role, expectations, conduct, emergencies
- [ ] Linked from the volunteer application form

---

### 3.4 — Anonymous chat widget (AI-powered)

**Context:** A separate detailed prompt for this feature already exists (`ohana-anon-chatbot-claude-code-prompt.md`). This is a reference entry.

**Implementation:**
- See the dedicated Claude Code prompt for full architecture, privacy requirements, system prompt, and implementation plan.
- Key constraints: fully anonymous, stateless, no data retention, privacy-first architecture, web chat widget (not SMS), Claude API backend.
- This is a significant feature — scope and implement according to the dedicated prompt.

**Acceptance:**
- [ ] See dedicated prompt for full acceptance criteria

---

## Phase 4 — Long-Term Vision

These are larger-scope items that require significant planning. They are documented here for roadmap visibility, not immediate execution.

---

### 4.1 — iOS application

**Stack:** Swift, SwiftUI, Combine, MVVM + Clean Architecture. See prior planning conversations for framework decisions and architecture patterns.

**Scope:** Meeting reminders, toolkit access, community features, push notifications. App Store submission with privacy policy, accessibility compliance.

**Estimated timeline:** MVP 4–6 weeks, full feature parity 3–4 months.

---

### 4.2 — Partnership cross-listings

**Action items:**
- Contact SMART Recovery, Recovery Dharma, and LifeRing about mutual resource listing.
- Contact treatment centers and sober living houses about distributing the one-sheet (task 3.1).
- Identify recovery-adjacent podcasts for organic visibility.

---

### 4.3 — Grant readiness

**Prerequisites:**
- Basic fiscal structure (dedicated bank account, bookkeeping)
- Operational documentation (meeting protocols, volunteer system)
- Impact metrics (attendance data, geographic reach, toolkit usage)

**Target funders:** SAMHSA, local community health grants, recovery-focused foundations.

---

### 4.4 — Accessibility audit

**Scope:** Screen reader compatibility, keyboard navigation, cognitive accessibility, color contrast verification, multilingual support evaluation.

---

## Notes for the Coding Agent

- **Design system:** Dark mode is the primary (and currently only) theme. The palette is ocean blues, deep navy/blacks, and warm accent colors. Typography is clean and modern. Match all new elements to the existing visual language.
- **Site tone:** Warm, raw, honest, human. Not clinical, not corporate, not inspirational-poster. Write copy like you're talking to a friend at 2 AM, not writing a brochure.
- **Privacy posture:** This is a recovery platform. Privacy is not a feature — it's a core value. No tracking beyond the minimal analytics in task 2.7. No PII collection unless explicitly chosen by the user (email capture, account creation).
- **Performance:** The audience is often on phones, often on poor connections, often stressed. Pages should load fast. Minimize JS bundles. Lazy-load below-fold images. Every second of load time is a potential lost visitor.
- **Mobile-first:** A significant portion of the audience will be on phones in bed at 2 AM. Every feature must work flawlessly on mobile.
- **Crisis safety:** Any page that discusses recovery, meetings, or emotional topics should have the crisis resource link visible (task 1.8). This is non-negotiable.
