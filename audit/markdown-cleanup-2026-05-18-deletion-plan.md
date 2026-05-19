# Markdown Cleanup Deletion Plan — 2026-05-18

> **Pre-deletion safety check.** This plan is presented for Daniel's review BEFORE any markdown file is deleted from the repo. A scratch backup folder (`_markdown_audit_backup/`) has been created at the repo root and is gitignored-by-convention (not committed). Once deletions are approved, the to-delete files will be copied there first, then removed from the tree.

---

## Markdown audit table

| File | Size | First commit | Last commit | Verdict | Disposition |
|---|---:|:---:|:---:|---|---|
| `README.md` | 6,545 B | 2025-11-08 | 2026-05-02 | **Update in place** | Already rewritten this pass: removed "trained Mālama crew" framing, added `NEXT_PUBLIC_MEETING_ZOOM_URL`, added pointer to `Alpha_Project_Specs.md`, corrected route list, dropped reference to dead `_documentation/`. |
| `Alpha_Project_Specs.md` | new | — | — | **Created this pass** | Canonical AI-agent source of truth. |
| `backend/DEPLOYMENT.md` | 3,475 B | 2025-11-30 | 2025-11-30 | **Keep as-is** | Operationally accurate Railway deploy guide. Linked from README. |
| `audit/codebase-audit-2026-05-18.md` | 44,676 B | 2026-05-18 | 2026-05-18 | **Keep** | Cited from `Alpha_Project_Specs.md` §17. Reference. |
| `audit/cleanup-2026-05-18-verification.md` | 6,315 B | untracked | untracked | **Keep until verified** | Operational doc for the imminent cleanup-pass verification. Once Daniel verifies and accepts the changes, move to `audit/archive/` or delete. |
| `audit/markdown-cleanup-2026-05-18-deletion-plan.md` | this file | — | — | **Created this pass** | This document. Keep through the cleanup, then archive or delete. |
| `Site Status_5_2_2026.md` | 18,124 B | 2026-05-02 | 2026-05-02 | **DELETE** | Snapshot from 2026-05-02. Superseded by Alpha_Project_Specs §6 (Feature status), §5 (Routes), §16 (Known issues). Also contains a stray `/btw` typo on line 1 (uncommitted, pre-existing). |
| `TODO.md` | 3,892 B | 2026-04-02 | 2026-05-02 | **DELETE** | Superseded by TODO2.md (which is also being deleted). All "Completed This Session" items are now history; all "Remaining Tasks" items are either done, superseded, or captured in `Alpha_Project_Specs.md` §15 / §16. |
| `TODO2.md` | 25,226 B | 2026-05-02 | 2026-05-02 | **DELETE** | The previous authoritative roadmap. Multiple completed items have since been reversed by the 2026-05-18 cleanup pass (Wall of Nights counter, donation tier ladder, `/give`/`/support-us` routes, crew bios). Remaining unauthorized planned items captured in `Alpha_Project_Specs.md` §6.3. References a non-existent `ohana-recovery-analysis.md`. |
| `TODO2_Project_Management_Plan.md` | 18,478 B | 2026-05-02 | 2026-05-02 | **DELETE** | Sprint plan derived from TODO2.md. Same supersession applies. Duplicates content already captured upstream. |
| `_documentation/FILE_STRUCTURE.md` | 3,028 B | 2026-04-02 | 2026-05-02 | **DELETE** | Out-of-date directory map. References deleted directories (`components/give/`, `(public)/give/`). Current structure documented in README + `Alpha_Project_Specs.md` §2.2. |
| `_documentation/PROGRESS.md` | 5,991 B | 2026-04-02 | 2026-05-02 | **DELETE** | Outdated progress snapshot. Describes `/give` as live, "Mālama crew" as placeholder-active, YouTube embed (already migrated to Vimeo). Useful content (color reference, key design decisions) was either obsolete or has been merged into `Alpha_Project_Specs.md`. |

After deletions, the `_documentation/` directory becomes empty and can be removed.

---

## Why each delete is safe

### `Site Status_5_2_2026.md`

- Treated `/give` and "Mālama crew" as authoritative — both contradict current direction.
- Verification snapshot table is stale (`npm run lint` failing claim is still true, but everything else about the build is now obsolete).
- Feature-status table is duplicated by `Alpha_Project_Specs.md` §6 with corrections.
- File tree at lines 152–447 is now duplicated by §2.2 of the new spec.
- Risk: low. No outbound links from elsewhere in the repo.

### `TODO.md`

- "Completed This Session" is historical narrative not actionable doctrine.
- "Remaining Tasks" Priority 1 (crew bios) was superseded by founder-led direction; Priority 2 (give-page nav decision) was superseded by `/support` consolidation; Priority 3/4 captured in `Alpha_Project_Specs.md` §15.
- Risk: low.

### `TODO2.md`

- 25 KB of detailed sprint specs. Most P1 items shipped. Several have since been reversed:
  - 2.3 donation page direction (impact tiers + cost breakdown) → reversed.
  - 2.5 Wall of Nights counter → removed entirely.
  - 1.4 crew bios → superseded by founder-led data file.
- Phase 3/4 items (PDF one-sheet, SEO, volunteer onboarding doc, iOS, partnerships, grants, full a11y audit) are captured as "planned but not authorized" in `Alpha_Project_Specs.md` §6.3 — agents will see them but won't act on them without re-authorization.
- Risk: moderate. Anyone reading the repo who relied on TODO2.md as the project map will need to switch to `Alpha_Project_Specs.md`. The new doc points to TODO2's superseded items by name so the historical context is preserved.

### `TODO2_Project_Management_Plan.md`

- Pure sprint-mapping derived from TODO2.md. Adds no information that isn't in the new spec.
- Risk: low.

### `_documentation/FILE_STRUCTURE.md`

- Directory map. The current map lives in README + spec doc.
- Risk: low. No links elsewhere.

### `_documentation/PROGRESS.md`

- Status snapshot. Obsolete claims (YouTube → Vimeo already done, give page deleted, Mālama crew placeholders) make it actively misleading.
- Color reference (lines 114–123) is useful but those values can be read from `frontend/tailwind.config.ts` directly. Not worth preserving as docs.
- "Key Design Decisions" section (lines 95–101) is real doctrine. Already merged into `Alpha_Project_Specs.md` §7.
- Risk: low.

### `_documentation/` directory itself

- After the two files above are removed, the directory is empty. Remove the directory to prevent future agents from creating new files inside it that AI sessions then ingest as authoritative.
- Risk: very low.

---

## Conflicts found across markdown files (catalogue for §17 of the spec)

These are the specific contradictions a future AI agent would have ingested before this cleanup pass. They are documented here as evidence for the deletion verdicts above.

1. **`/give` route status.** Built feature in `README.md`, `_documentation/PROGRESS.md`, `TODO.md`, `Site Status_5_2_2026.md`. Deleted in the 2026-05-18 cleanup pass. Currently redirects to `/support`.
2. **`/support-us` vs `/support`.** `TODO2.md` task 2.3 acceptance treats `/support-us` as canonical. Current canonical is `/support`. `/support-us` is now a redirect.
3. **Mālama crew framing.** README header line, `_documentation/PROGRESS.md`, `TODO.md`, `Site Status_5_2_2026.md`, `TODO2.md` all reference a "Mālama crew" or 4-person team. Current direction is founder-led, no fake team.
4. **Wall of Nights counter.** `TODO2.md` task 2.5 marked complete; `_documentation/PROGRESS.md` describes it as live. Removed entirely in the cleanup pass.
5. **Donation tier framing.** `TODO2.md` task 2.3 specifies impact-tier framing with dollar amounts ("$10 keeps the lights on for a night," "$200 funds a full month"). New direction explicitly forbids dollar tiers on `/support`.
6. **Reference to `ohana-recovery-analysis.md`.** Cited as a required pre-read by `TODO2.md` line 5. File does not exist in the repo. (Already flagged in `audit/codebase-audit-2026-05-18.md`.)
7. **"Crew page uses Unsplash placeholder images and Lorem ipsum bios"** in `_documentation/PROGRESS.md`. Real photos were uploaded later, so the claim is wrong, but the page has now been rebuilt anyway.
8. **"YouTube embed (needs replacement — Vimeo pending)"** in `_documentation/PROGRESS.md`. Migration to Vimeo is already complete (`frontend/src/components/about/VideoIntro.tsx` line 7).
9. **`NIGHTLY_MEETING_START_DATE = "2025-05-02"`** referenced in `TODO2.md` task 2.5. Export was removed from `frontend/src/lib/meetings.ts` in the cleanup pass.
10. **`frontend/.env.local` documentation.** `README.md` mentioned `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_RECAPTCHA_KEY`, `NEXT_PUBLIC_GA_MEASUREMENT_ID` but not `NEXT_PUBLIC_MEETING_ZOOM_URL` (added in Phase B of the 2026-05-18 audit pass). Now corrected in the rewritten README.
11. **"Trained Mālama crew members"** in `README.md` line 3. Implies credentialing / training that does not exist. Removed in the README rewrite this pass.
12. **`PROGRESS.md` "Active To-Do (Next Sessions) #1 Mālama Section — Real Team Data".** Direct contradiction of the founder-led direction.
13. **Multiple `Last Updated: 2026-05-02` stamps** across `TODO.md`, `TODO2.md`, `_documentation/PROGRESS.md`, `_documentation/FILE_STRUCTURE.md`. None reflect the 2026-05-18 cleanup pass. All look authoritative to a scanning AI agent.
14. **Lint status.** `Site Status` says lint failing. Cleanup pass did not address lint. Status preserved in `Alpha_Project_Specs.md` §16 as a known issue.
15. **Footer broken links.** `Footer.tsx` links to `/terms` and `/independence` which do not exist. Flagged in the codebase audit. Not surfaced in any of the older planning docs.

---

## Proposed sequence (awaiting Daniel's go)

1. `mkdir _markdown_audit_backup` (done).
2. `cp` each to-delete file into the backup folder.
3. `git rm` each to-delete file (use `git rm` not plain `rm` so the deletion is staged).
4. `rmdir _documentation/` once empty.
5. Show `git status` for review.
6. **Stop. Wait for Daniel's approval before commit.**
7. On approval: commit. The backup folder is not committed — it stays local until Daniel personally confirms no useful content was missed, then we delete the backup folder too.

---

## What is NOT being deleted

- `README.md` — updated in place, kept.
- `Alpha_Project_Specs.md` — created this pass, kept.
- `backend/DEPLOYMENT.md` — operational. Kept.
- `audit/codebase-audit-2026-05-18.md` — reference. Kept.
- `audit/cleanup-2026-05-18-verification.md` — operational, pending verification. Kept until verified.
- This file (`audit/markdown-cleanup-2026-05-18-deletion-plan.md`) — kept as evidence of the audit.

---

## What was NOT touched this pass

- No backend Python files.
- No frontend application code (TS/TSX).
- No production build (`npm run build`) was run. The dev server is still running on port 3001 from earlier.
- No commits made.
- No git history modified.
- No env vars changed.

---

## Open ambiguity

1. **Whether to delete `audit/cleanup-2026-05-18-verification.md` after Daniel finishes verifying.** Right now it is referenced as "kept until verified." If Daniel signs off on the cleanup pass and the verification doc becomes historical, that's another delete candidate later.
2. **Whether to delete the `_markdown_audit_backup/` folder after commit.** Recommended: keep until Daniel personally confirms no useful content was missed (a week or two), then delete.
3. **Whether to capture any content from `TODO2_Project_Management_Plan.md`'s Acceptance Gate Checklist** (lines 431–470) into `Alpha_Project_Specs.md`. Currently the spec doc names doctrine but does not include a verification checklist. Decision deferred — out of scope for this audit pass.
