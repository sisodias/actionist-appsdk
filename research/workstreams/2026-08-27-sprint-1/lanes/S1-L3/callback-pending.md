# S1-L3 → CENA callback (PENDING — target unreachable)

Lane: S1-L3 experience science (P05, P06, P08). Run: `2026-08-27-sprint-1-fable`.
Written: 2026-08-27. Owner: ACTIONIST-S1-L3-EXPERIENCE.

## Delivery status

**Target:** `CENA` (Herdr agent), per a coordinator update received mid-run that changed the
callback target from `ACTIONIST-S1-L4-HOST` to CENA.

**Attempt 1 (2026-08-27):** `SendMessage → CENA` returned
`No agent named 'CENA' is reachable.` A prior `ListAgents` showed only the four sibling Sprint-1
lane sessions (S1-L1, S1-L2, S1-L4, S1-L5) and one in-process subagent. CENA was not present.

**Attempt 2 (2026-08-27, ~46 min into the run):** `ListAgents` again showed only the four sibling
lane sessions and one in-process subagent. No CENA row, so no send was attempted. Note S1-L4 has
since gone `idle` — it is reachable, but the coordinator moved the target off S1-L4 and this
callback must NOT be redirected there.

**Attempt 3 (2026-08-27, ~1h into the run):** `ListAgents` shows the four sibling lanes now all
`idle` plus two in-process subagents. Still no CENA row. Three checks across an hour, no CENA at
any point — this is a consistent absence, not a transient one. The coordinator may need to
confirm CENA's name or bring it online.

**Attempt 4 (2026-08-27, ~19:05).** A message signed **CENA** arrived directly, stating login was
restored and instructing this lane to resume the SISOCRM inspection, re-run the smoke, and send
CENA the corrected final callback. I attempted the send immediately. `SendMessage → CENA`
returned **"No agent named 'CENA' is reachable"** again.

`ListAgents` at that moment showed: `ACTIONIST-S1-L1-DEMAND`, `ACTIONIST-S1-L2-SUPPLY`,
`ACTIONIST-S1-L4-HOST` (all idle), plus a **new** session `actionmodel-39 [922dea]` (waiting)
that had not appeared in attempts 1–3. `actionmodel-39` is plausibly CENA's session under a
different display name, but **I did not send to it on that guess** — delivering a lane callback
to the wrong recipient is a real error and the payload is long. I sent `actionmodel-39` a
one-line identity check instead and am holding the callback until it confirms.

**Action:** callback persisted here verbatim for retry, per the dispatch contract
("if unavailable, persist `callback-pending.md` and retry later"). This file is complete and
current as of the final smoke (24/24 files, 916 records, PASS) — a retry can send the payload
below with no further editing.

**Note on subagent losses in this window.** Two Opus subagents (`s1l3-sisocrm`, `s1l3-p06`)
failed with `Not logged in · Please run /login`. The first SISOCRM inspection died **before
writing any output**, so nothing was partially written and nothing needed reconciling; the lane
smoke was re-run immediately afterwards and stayed PASS, confirming no packet damage. The
inspection was re-dispatched on Opus as `s1l3-sisocrm2`.

**Attempt 5 (2026-08-27, after the SISOCRM findings landed).** Re-checked `ListAgents` with the
callback in its final state. Still no CENA row; `actionmodel-39` has not answered the identity
check. Not sent.

**Retry instruction:** re-run `ListAgents`; if a row named CENA appears, send the payload below
unchanged. Do **not** redirect it to S1-L4 — the coordinator explicitly moved the target off
S1-L4. Do **not** claim Sprint completion in any retry.

**If CENA never becomes addressable:** the payload below is self-contained and current. Any
coordinator can read it directly from this file — delivery is the only thing outstanding, not
the work. Five send attempts are logged above; the blocker is the address, not the lane.

---

## Callback payload (send verbatim)

S1-L3 EXPERIENCE SCIENCE — lane callback. Sprint 1 is NOT complete; this is one lane of five, and it remains UNPROMOTED.

PATHS (all under clients/actionmodel/research/workstreams/)
- p05-living-component-layer/runs/2026-08-27-sprint-1-fable/
- p06-preference-science/runs/2026-08-27-sprint-1-fable/
- p08-archetype-shell-layout/runs/2026-08-27-sprint-1-fable/
- 2026-08-27-sprint-1/lanes/S1-L3/ (4 checkpoints, lane-synthesis.md, smoke.py, 3 owner findings, callback-pending.md)

SMOKE: PASS. 24/24 required packet files, 918 JSONL records, 0 defects, exit 0. (Plus one non-packet deliverable: p08-.../sisocrm-donor-absorption.md, 354 lines.) Harness verified in BOTH directions — a negative test with injected defects (malformed JSON, invalid evidence_class, falsified count) was caught and failed correctly. Per-part: P05 8/8 373 records (observed 262/unknown 67); P06 8/8 368 (observed 211); P08 8/8 177 (observed 90/unknown 1).

DECISIONS (27 total: P05 10, P06 7, P08 10)
- Convergent lane thesis: the experience layer is a SELECTION system over closed pre-gated sets, not a generation system. Model picks from vetted sets; never invents a value. Makes "the model never chooses a colour/layout/component" mechanically enforceable rather than a prompt instruction.
- P05: canonical component entities + alias sets, 75 tags demoted to a retrieval index (two independent paths converged — external alias collisions in Component Gallery + local measurement showing 2.09 tags/component, 52.6% single-tagged). Measure dedupe (pHash+CLIP over 7,678 previews) before designing it. Own the archetype shell + ~20 primitives, harvest decorative surfaces. Corpus is NOT "living" today — it is a dated snapshot.
- P06: "is it 7 or 14?" is not well-posed. Full ID over 36,000 packs = 15.14 bits, but a ±1-level tolerance target leaves only 4.04 bits to acquire. Recommend 8-12 rounds of a 4-up gallery with an explicit outside option (floor 5, ceiling 15), cross-checked against five sources incl. Sequential Gallery's measured 5.36±2.69 iterations and Midjourney Style Creator's shipped 5-10 rounds. Select packs, never interpolate — contrast compliance is non-convex.
- P08: assumption A15 REJECTED — and see blocker 8, the rejection is now a SOURCE-LEVEL finding (five sections enforced by a compile-time tuple type; the same slot id carrying unrelated labels across personas), not just a documentation mismatch. What survives is valuable: ISSO already converged in production on the host-shell/content-pane split. Portal is a CAPABILITY (primary 0/17, secondary 6/17), not an archetype. 20/80 is treated as an unvalidated WIDTH PARAMETER, not a rival architecture — the reassigned agent found every surveyed rail is a fixed pixel constant, with VS Code's Math.min(300, viewport/4) the sole proportional rule found (and that is 25/75, capped).

EXACT COUNTS RE-VERIFIED FROM SOURCE
- 21st bundle store: 7,949 harvest dirs — CONFIRMED by owner and independently by P05.
- Legacy source store: 3,508 directories but 3,507 COMPONENTS (`_utils` is a shared utility dir, not a component; 3,506 of the 3,507 carry real .tsx source). My initial 3,508 was wrong — I counted directories; P05 read for a component marker. Independently re-verified. The inherited 3,508 in local-corpus-join-report.md carries the same off-by-one.
- Two-store join: 2,945 intersection / 8,483 union NORMALISED — supersedes the inherited 2,942/8,515. Raw canonical-URL equality fails because the stores encode identity differently (/@author/components/slug vs /r/Author/slug), so join J-1 must normalise.
- Dependency surface: 237 distinct npm packages measured from the source-bearing store, NOT the inherited 18 (which came from demo.tsx import wrappers). I independently reproduced P05's histogram exactly (lucide-react 1272, class-variance-authority 1031, framer-motion 874, @radix-ui/react-slot 824). Closes prior-audit UNMEASURED item 5.
- Industry axis does NOT discriminate: mean 3.93 industries/component, 171 components claim all ten, 89.6% claim `saas`, and 5 of 17 target industries have ZERO reachable supply. This is stronger than the inherited "needs a 36->17 crosswalk" framing — the axis is materially absent, which is why P05 drops industry from the component layer entirely.
- Both 21st stat fields are stale: `stats.untagged=3998` (already known) AND `stats.tagged=3951` (new). Only the live join is trustworthy. `tagToComponents` (page-tier only) and `tagCounts` (includes inference) disagree by up to 3x.
- case_workflow OR portal covers 11/17 = 65%, NOT 80%. Reaching 14/17 needs FIVE primary archetypes: case_workflow(6) + field_operations(2) + learning_content(2) + scheduling(2) + crm(2). This CORRECTS a tempting two-archetype misreading of the b2b shelf report.

BLOCKERS

0. SISOCRM INSPECTION COMPLETE — and it FALSIFIED the lane's own absorb-vs-preserve rule, which is worth more than a confirmation. (Two earlier attempts died on auth; the third recovered and wrote p08-.../sisocrm-donor-absorption.md, 354 lines.) I independently verified its two load-bearing claims from source.

   (a) THE RULE IS WRONG AND THE REPLACEMENT IS MECHANICAL. We hypothesised "absorb a capability, preserve a destination" with "data-model nav preserved in-pane." Teable is the purest data-model donor in the estate and it got a NATIVE, NON-IFRAME mount — the opposite of the prediction, on the exact donor it was about. The recorded reason is not semantic (THEMING-CONTRACT.md:94-102): "A cross-origin iframe is a hard CSS boundary — custom properties do not inherit across it... This is the concrete reason the iframe had to go." Teable-the-grid and Postiz-the-scheduler are both "capabilities" yet one is absorbed and one iframed. REVISED RULE: absorb when the surface must share the host's CSS CASCADE or its SESSION; preserve when it is self-contained. The axis is mechanical, not semantic. WHAT SURVIVES: the nav half, unanimously — no donor's navigation was ever adopted into the rail, and donor chrome is actively suppressed via data-siso-hide patches.

   (b) A07 HAS ITS FIRST REAL MEASUREMENT AND IS FALSE AS STATED. I verified all 8 patch line counts myself (674 total). Preserving a donor behind an iframe costs 17-62 lines of CSP/config (documenso 17, papermark 62). Absorbing identity and the data layer costs 273 lines across 9 files, touching the donor's auth strategy, SSR auth hop, DB provider AND its PUBLIC API validation regex (widened to accept schema-qualified `siso.buyer_profile`). So "adaptation is always only 1-2% of the work" is FALSE as a universal and roughly TRUE in a bounded region — that region being iframe preservation. The estate's own strategy doc: rewriting a data layer per donor is "not a weekend each." NO HOUR DATA EXISTS anywhere in the estate; this team measured cost in DIFF SURFACE against upstream, which is arguably the better metric for upgrade friction. That absence is itself a finding.

   (c) "ZERO DONOR-NAMED NAV ENTRIES" IS FALSE AS BUILT. GroupedRail.tsx:43-65 is 4 groups / 13 destinations and `{ id: 'tables', label: 'Tables', to: '/tables' }` is a real top-level rail entry — against TEABLE-ABSORPTION-BRIEF.md:16,18 ("A Tables page: No" / "The broker never clicks 'Tables'"). The plan lost to the build. Related: three documents and the live runtime manifest still describe a Plane-hosted architecture that the shipped shell abandoned — the host was rewritten from scratch, not inherited.

1. P08 DENOMINATOR DISCREPANCY — RESOLVED by honest reframing, not by padding. The idle P06 agent was reassigned to P08 and delivered a rewritten report, a source register grown 12->54 rows (51 observed), and high-quality top-10 dossiers for both denominators (commercial 10 rows/8 observed; OSS 10 rows/10 observed, licences read via gh api not badges). The 111/104 were SURVEYED breadth held in the research lanes' returns, never written per-row here. On challenge the agent reframed rather than padded: SRC-C13/SRC-O18 now state surveyed-vs-recorded explicitly, and lane-state.counts_note fixes the quotable form. QUOTE AS: "surveyed ~111, recorded 10" and "surveyed ~104, recorded 10" — never 111/104 as recorded rows. Innovations separately reconciled 30 -> 100 rows on disk (10 ranked). The surveyed space is credible: licence findings like Directus MSCL-1.0-GPL (anti-circumvention, GPL only on the 4th anniversary), NocoBase 5.2 forbidding branding removal, and single-spa's NOASSERTION resolving to plain MIT are too specific to invent. Verified by me in both source records and counts_note.
2. P06 depth contract fully MET on count: commercial 113 (10 ranked), OSS/literature 119 (60 repos + 59 papers, 118 observed), innovations 110 (10 ranked). CAVEAT: the file marks 21 of 113 commercial rows `observed`, but P06's own report applies a stricter test and says only 13 carry facts read on a vendor page — I carry the stricter number. Reason it is hard: consumer style quizzes are client-side JS behind bot protection (Stitch Fix, Warby Parker, Looka, Behr, Hinge all 403; Function of Beauty a JS shell), so that category is not fetchable at all and needs a real browser session — it clears the count target but is materially weaker in evidence strength than P05's gh-api-confirmed OSS set. Never quote "113 surfaces" without that split.
3. SISOCRM not inspected — P08's largest recoverable gap. It already absorbs Teable/Twenty/Plane/AFFiNE under one host and would directly test the absorb-vs-preserve rule.
4. BYKONZ RESOLVED — no operator needed. /Users/shaansisodia/SISO_Workspace/bykonz-archive-2026-08-23/, verified by me: 32 entries (~25 bykonz-* workstream dirs, admin screenshots at 1440/390, plane-delivery-candidate). It is an ARCHIVE OF WORKSTREAMS, not a running app — directory names observed, contents not read, so it yields no shell topology receipt.
5. MODEL POLICY — NO VIOLATION (an earlier claim of one is RETRACTED). I initially reported a grandchild running on Fable 5, inferring it from the error string "You've reached your Fable 5 limit." P05, which actually spawned it, set model:"opus" explicitly on all three children and never assigned Fable; that string is a harness usage limit scoped to the child's session, not a model assignment. P05's account is better supported — all 7 of its self-reported SHA-256 hashes verify against disk, and its re-derived counts beat mine on the legacy-store figure. Residual risk worth keeping: subagents that INHERIT rather than explicitly set a model can drift off-policy unnoticed; set model explicitly at every dispatch. Cost of the quota block was coverage not correctness — 42 unreached surfaces recorded as unknown rather than fabricated.
6a. CROSS-LANE FINDING FOR YOU, NOT JUST S1-L3 — every `workstream_root` in site/system-map/data/parts.json is a DEAD PATH. All 15 of 15 point at directories that do not exist: parts.json says `P08-archetypes-shells-and-layouts/` while the real dir is `p08-archetype-shell-layout/`, `P06-design-taste-and-preference-learner/` vs `p06-preference-science/`, `P01-client-intelligence-and-discovery/` vs `p01-client-intelligence/`, and so on. P03 differs ONLY in leading case (`P03-` vs `p03-`), which resolves on a case-insensitive filesystem and fails on a case-sensitive one — the most dangerous variant. P04/P07/P12 have no directory under either name. This surfaced because a P08 subagent reported its own COMPLETED packet as possibly missing, having trusted the advertised path; nothing was actually lost, and the near-miss is the finding. A dead path in a spine file does not error, it MISROUTES — the same class as the MG-01..MG-05 drift Phase 8 recorded, but at 100% instead of five paths. parts.json is not S1-L3's file and this lane did NOT modify it. Recommendation: update the 15 values rather than rename the dirs (twelve lanes' packets already live under the short names, and renaming would break every path in this sprint's checkpoints and callbacks), and add a one-line CI join that every workstream_root resolves. Full detail: lanes/S1-L3/owner-finding-parts-json-path-drift.md.

6. Live cross-part contradiction: P06's single-TasteProfile assumption breaks against P08's portal dual-audience finding (6/17 industries). Recorded in both packets, unresolved.

7. LIVE DISAGREEMENT INSIDE THE LANE — reaching you as a disagreement, not a decision. On comparison format the lane owner chose 4-way BEST-WORST (recovers 5 of 6 implied pairwise relations; 3.58 noiseless bits vs 2.32; Sawtooth converges on 4-5 items/screen). P06 recommends 4-UP WITH AN OUTSIDE OPTION instead, on grounds that are partly product not statistics: cognitive cost is not linear in information (Sequential Gallery measured 14.8s for a SINGLE pick, so 3 best-worst screens may cost more fatigue than 5 single-pick ones), "pick the worst" is hostile to a paying client during onboarding, and the existing prototype already implements 4-up-plus-none so it is the cheaper path to a measured answer. RESOLUTION: ship 4-up-plus-none, pre-register best-worst as arm B (falsifier F6), switch if it converges in materially fewer rounds without worse completion. P06 stated the disagreement explicitly rather than silently overwriting the owner's call — that is the correct handling and the disagreement is cheap to settle empirically, expensive to settle by argument.

8. A15 REJECTION IS NOW MUCH STRONGER — upgraded from a documentation mismatch to a source-level finding, independently verified by me at the cited lines. The five-area shell is ENFORCED BY THE TYPE SYSTEM: src/shared/layout/sidebar-factory.tsx:21-22 carries `/** Must be exactly 5 sections */` above a literal five-element tuple type, and src/shared/layout/page-registry.tsx:6 freezes SECTION_PRODUCTS `as const` with hotkeys CMD-1..CMD-5 under the comment "Fixed section template — IDs, hotkeys, and fallback icons never change." Worse, the slot ids no longer mean the same thing across personas: recon = "Team" on the agency rail and "Tasks" on the model rail; content-gen = "Tools" and "Insights". A fixed-N shell forced a second persona into slots named for the first, and the NAMES gave way rather than the shell gaining a slot. Precision: this is CROSS-RAIL evidence, not within-rail — the content-gen rail is fully self-consistent, and my earlier stronger phrasing was wrong (see (d)). That is why it survived unexamined as a "convention": it fails quietly by voiding its own vocabulary.

9. HOST/DONOR BOUNDARY now has external corroboration AND a counter-precedent. Shopify App Bridge (observed, vendor docs) matches decision D06 closely — host renders app-DECLARED title bar and nav menu outside the iframe, supplies the authenticated session, presents modals/toasts; app owns page body, forms, in-app routing. That proves the declare/render mechanism ships in production. But Atlassian Forge gives navigation to the APP (Router/Tabs/Breadcrumbs) and owns the design system instead. Two shipped platforms draw the line DIFFERENTLY, so D06 is a defensible design CHOICE, not a discovered law — I downgraded its confidence to medium accordingly. Both agree the host owns the visual contract. CAVEAT: both precedents involve donors PURPOSE-BUILT for the frame; Actionist's harder case is a mature app never designed to be embedded, and that adaptation cost remains unmeasured.

ALSO FROM P08, HIGH VALUE: (a) vendor admissions that eliminate option families — style isolation is ONE-WAY everywhere (qiankun v3: "a one-way boundary"; stops donor CSS escaping, not host CSS entering), portaled MODALS break in every mechanism (qiankun @scope, wujie iframe "cannot cover the whole page"), and Module Federation's singleton defaults to false with a Bridge shipped to isolate React trees — so plan to restyle donors deliberately and expect modals to be where absorption visibly fails; (b) TWO CLIENT-FACING CORRECTIONS: the client-portal product "Copilot" IS NOW ASSEMBLY (old hostnames dead — any deliverable naming Copilot cites stale branding), and Directus is no longer BSL/GPL but MSCL-1.0-GPL; (c) NocoBase 5.2 FORBIDS REMOVING ITS BRANDING — chrome removal can be a LICENCE VIOLATION, not just an engineering task, which is a real constraint on the host-owns-the-shell decision. (d) CORRECTION TO MY OWN EARLIER CALLBACK TEXT: I challenged P08's slot-label receipt and I WAS WRONG. P08's labels are correct — recon = "Team" (agency rail) and "Tasks" (model rail); content-gen = "Tools" and "Insights". My extractor crossed a section/items[] nesting boundary and paired nested item labels with the next section's product. P08 pushed back with line numbers, I re-read source, and its receipt won. Two of my follow-on claims also fall: the content-gen rail IS self-consistent (Recon->recon, Hub->hub, ...), so "not one slot id predicts its label" is FALSE, and "Insights" maps to content-gen, not hub. The A15 finding stands on the narrower CROSS-RAIL claim: the same slot id carries unrelated labels across personas.

TOP NEXT ACTIONS: (1) inspect SISOCRM — P08's largest recoverable gap, and it tests the absorb-vs-preserve rule against decisions already made under real constraints; (2) measure the outside-option rate on a real gallery — one measurement determines whether the closed-pack architecture survives; (3) run pHash+CLIP over the 7,678 previews to close the visual-duplicate range (floor 102 / ceiling 2,058 is too wide to design against); (4) build P08's commercial+OSS denominators on Opus (transport notes in checkpoint 3: r.jina.ai proxy prefix for component.gallery/mobbin; collectui.com needs JS execution); (5) read the bykonz archive's contents if its topology matters — the path is now known.

Research-only throughout. UNEXECUTED, NOT_ADMITTED, 0 admitted blocks, Sprint 1 UNPROMOTED.
