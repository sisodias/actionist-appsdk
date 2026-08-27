# UI picker workstream — checkpoint 2026-08-27 (session end)

## What exists and is verified

**Research (all in `../../research/`, all dated 2026-08-27):**
- `token-pack-science` — colour layer is real science (WCAG formula, OKLCH, Radix step-roles);
  spacing/type are convention. 75-item max schema; DTCG validates structure only, tiers need an
  Actionist profile.
- `21st-corpus-audit` — corpus: 7,949 dirs, 7,678 previews, offline-renderable. Untagged is 670
  (8.4%) junk, NOT the stale 3,998 in stats. No existing hub worth extending.
- `ui-competitor-teardown` — pre-build style choice is TABLE STAKES (Lovable ships it + literal-scan
  enforcement + auto-retry). Gap = finite curated zero-setup gallery. Never claim "nobody does presets."
  Sameness pain well-evidenced ("can't prompt your way out").
- `ui-pack-gallery-ux` — simultaneous grid not wizard; 12-18 shown in 3-4 vibe groups; same reference
  screen per card; light card + dark hover; style-first-then-structure (Canva precedent).
- `ui-aesthetic-taxonomy` — 7 mechanical knobs; 16-pack spanning set (tiers A-D); neumorphism/
  glassmorphism/claymorphism rejected for packs; market gap = mechanically-distinct client gallery.
- `ui-pick-to-spec` — SDUI proven (Spotify schema verified: zero styling fields). Bundles are SPA
  shells (1 div, 136 jsx() — DOM parsing dead). className signals survive minification and
  discriminate archetypes (verified on 3 sign-ins). Hybrid extraction: className scan → vision enum
  form → disagreement = accuracy metric. Never gate on visual diff alone (Design2Code: block match
  collapses while CLIP barely moves).
- `ui-component-picker-ux` — NEVER DELIVERED (gateway 429). Re-dispatch if curation detail needed.

## Built artifacts (this directory)
- `PACK-SCHEMA.md` — 7 knobs, gates G1-G5, tier map.
- `packs.json` — Grid / Paper & Ink / Console; light+dark; ALL GATES PASS.
- `gate.mjs` — WCAG 2.2 + 1.4.11 gate. Caught 12 real border failures (~1.5:1 vs 3.0) on first run.
- `build-gallery.mjs` → `gallery.html` — 3-col grid, same ref screen, dark on hover, 430px frames.
  Fixed: no baked focus outline; fixed frame height (spacious packs fit).
- Themability scorer lived in session scratchpad (WIPED — rebuild from `21st-corpus-audit` §detheming
  if needed; ~60 lines, results were: 6,212/7,949 pickable, median themability 1.0, per-tag table in
  transcript). Scores JSON also wiped — RERUN required before curation work.

## Key decisions locked
1. Tokens first, then components; component previews render RE-THEMED in the picked pack.
2. Pack = closed set; assembler references names, never literals (lint gate = the enforcement).
3. Corpus is visual vocabulary — adapt-don't-paste (21st ToS bars redistribution; $6/mo Builder
   gives unlimited MCP code retrieval but rights are per-author).
4. Packs must differ on knob vector (G5), not hue.
5. Dark mode authored per pack, never a client choice; APCA for dark gates (WCAG overstates near black).

## Next actions (in order)
1. Re-run themability scorer, persist scores.json INTO THIS DIR (not scratchpad).
2. Author remaining 13 packs against the 16-pack spanning set; gate each.
3. Add shadow/density/type knobs into gate G5 distinctness check (currently knob-vector string compare).
4. Component picker: filter 6,212 pickable by tag, render previews re-themed via :root swap
   (proven: 18-token swap, structure intact — screenshots were in scratchpad/retheme).
5. Re-dispatch ui-component-picker-ux (curation algorithm: 521 heroes → 10 diverse).
6. Pick-to-spec v0: className-signal extractor over sign-in tag first (140 components, axes in
   ui-pick-to-spec §3).

## Client positioning (for any Cena conversation)
Claim the MECHANISM not the category: "finite, curated, pre-vetted, zero-setup, deterministic —
pick how the product is built, not just what colour it is." Read the must-not-claim table in the
teardown before any deck.
