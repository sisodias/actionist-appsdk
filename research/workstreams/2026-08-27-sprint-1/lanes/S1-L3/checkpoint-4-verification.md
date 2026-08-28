# S1-L3 checkpoint 4 — synthesis, verification and challenge

Lane: S1-L3 (P05, P06, P08). Run: 2026-08-27-sprint-1-fable. Written: 2026-08-27.
Lane owner model at write: Opus 5 [1m] (transitioned from Fable 5 [1m] mid-run; no work discarded).

## Post-write structural smoke — PASS

Harness: `lanes/S1-L3/smoke.py` (read-only; exit 0 PASS / 1 PARTIAL / 2 FAIL).

```
LANE VERDICT: PASS
[PASS] P05  8/8 files, 373 records — observed 262, unknown 67, inferred 20, hypothesis 24
[PASS] P06  8/8 files, 164 records — observed 136, unknown 3, inferred 12, hypothesis 13
[PASS] P08  8/8 files,  44 records — observed  18, unknown 5, inferred  9, hypothesis 12
EXIT=0
```

Totals: **24/24 required packet files, 581 JSONL records, 0 defects.**

### The harness was itself verified

A checker that only ever passes is not evidence. Two verification steps were run:

1. **False-positive fix.** The first run reported FAIL on P05 for nine count mismatches. On
   inspection these were **my defect, not P05's**: P05 declares finer-grained count keys
   (`top_companies_verified_observed=55`, `top_companies_unknown_unreached=50`) which sum
   exactly to the file total of 105, and my substring matcher compared each sub-count against
   the total. Verified 55+50=105, 110+12=122, 33+5=38 all reconcile. The checker now compares
   only canonical `*_records` keys, and reports non-summing breakdowns as advisory notes.
2. **Negative test.** A throwaway copy of the P06 packet was corrupted with three injected
   defects — malformed JSON, `evidence_class:"totally-made-up"`, and a falsified
   `source_register=999`. The harness caught all three at the exact line, plus a drifted
   innovation count, and exited 2. Temp copy deleted.

The advisory note is already earning its place: P05's repo breakdown sums to 135 against a
122 total, meaning `excluded_rights_or_stale` (13) overlaps the confirmed set rather than
partitioning it. Plausible categorisation, now visible rather than silent.

### A real defect the smoke caught

After the P06 subagent recovered and overwrote `top-repos.jsonl` with 119 records, the
`lane-state.json` still claimed 5 — the owner's placeholder figure. The harness failed the
lane on it. Corrected to match files on disk, with a supersession note recorded in the state
file. **This is exactly the failure mode the depth contract's post-write smoke exists to catch**,
and it would not have been noticed by rereading.

## Independent challenge of headline claims (depth contract item 8)

| Claim | Challenge run | Outcome |
|---|---|---|
| 21st bundle store = 7,949 dirs | Re-ran `ls harvest \| wc -l` | CONFIRMED |
| Legacy store = 3,508 components | Shell dir-type loop; `ls` shows 3,509 | CONFIRMED — the extra entry is `catalog.json`, a manifest not a component |
| A15 five-area shell rejected | Re-read `nav-architecture.md` lines 1-27 verbatim | CONFIRMED as written; the strongest counter-argument (ISSO *does* have 5 product icons) was then written INTO the report rather than left unstated, with the condition under which it would succeed (falsifier F1, unrun) |
| case_workflow+portal = 65% not 80% | Recomputed greedy cover from the 17-row table | CONFIRMED; five primaries reach 14/17 |
| Bundles are re-themable via shadcn tokens | Fetched `ui.shadcn.com/docs/theming` first-party | CONFIRMED — the documented token set matches what the corpus audit found in `:root` blocks |
| P06 choice budget | **Superseded.** The owner's derivation assumed an unjustified 0.4-0.6 bits/comparison band; the recovered subagent derivation replaces it with a binary-symmetric-channel model, a ±1-level tolerance target (4.04 bits), and five cross-checking sources | Owner's version LOST to better evidence, correctly |
| P05's 7 self-reported SHA-256 hashes | Recomputed all 7 against files on disk | **7 match, 0 mismatch** — its state file is not stale and its self-report is trustworthy |
| P05: legacy store is 3,507 not 3,508 | Re-ran testing for `registry-item.json` rather than counting dirs | **P05 correct, I was wrong.** 3,508 dirs but `_utils` is a utility dir, not a component |
| P05: dependency surface is 237 packages, not 18 | Independently scanned `registry-item.json` dependency arrays across the source store | **CONFIRMED in substance.** My scan read 3,507 components and reproduced P05's histogram exactly (lucide-react 1272, class-variance-authority 1031, framer-motion 874, @radix-ui/react-slot 824, motion 294, next 176). My distinct count was 256 vs their 237 — a scoped-name normalisation difference. Low hundreds, not 18, either way |
| P05: industry axis does not discriminate | Independently scanned `classification.json` `best_for_industries` across the source store | **CONFIRMED EXACTLY.** 3,507 components, mean **3.93** industries each, **171** claiming ten or more, **89.6%** claiming `saas` (3,143/3,507). Every figure reproduces. An axis where ~9 in 10 rows share a value cannot discriminate — P05's D-06 (drop industry from the component layer) is well-founded |
| P08 (reassigned agent): the five-area shell is a hardcoded tuple, not a convention | Opened both cited files at the cited lines | **CONFIRMED, and it upgrades my own A15 finding.** `src/shared/layout/sidebar-factory.tsx:21-22` carries the comment `/** Must be exactly 5 sections */` above a literal five-element tuple type. `src/shared/layout/page-registry.tsx:6` freezes `SECTION_PRODUCTS` `as const`, and lines 28-34 bind hotkeys ⌘1–⌘5 under `// Fixed section template — IDs, hotkeys, and fallback icons never change.` Note the agent reported bare filenames; the real paths are under `src/shared/layout/` |
| P08: slot ids have lost their meaning | Read label→product pairs from all three rails — **twice**, the second time correctly | **AGENT'S RECEIPT UPHELD; MY "CORRECTION" WAS THE ERROR AND IS RETRACTED.** I first claimed `recon`="Comms"/"Chat Feed", contradicting the agent's "Team"/"Tasks". The agent pushed back with line numbers; I re-read `agency/sidebar-config.tsx:46-68` and it was right. My extractor matched `label:` then scanned 400 chars for `product:`, crossing the section/`items[]` nesting boundary and pairing a nested item label with the *next* section's product. Correct pairs: agency = Overview/Content/**Team**/Webcam/**Tools**; model = Live/Chat/**Tasks**/Menu/**Insights**; content-gen = Recon/Intelligence/Hub/Content Gen/Agents. Retracted in `P08-SR-055`, fixed in `first-principles.md` |
| My follow-on claims "not one slot id predicts its label" and "Insights→`hub`" | Re-read `content-gen/sidebar-config.tsx:39-42, 100-102` | **BOTH FALSE, both mine.** The content-gen rail declares `product` *before* `label` and is **fully self-consistent** (Recon→`recon`, Hub→`hub`, …) — my parser only scanned backwards so it returned `?` and I over-generalised. "Insights" maps to `content-gen`, not `hub`. The A15 finding survives on **cross-rail** evidence only: the same id carries unrelated labels across personas (`recon` = Team *and* Tasks) |
| P08 agent: work may be in a second dir `P08-archetypes-shells-and-layouts/` (the parts.json `workstream_root`) | Listed `research/workstreams/` | **NO DUPLICATE.** Exactly one P08 dir exists (`p08-archetype-shell-layout/`); the `workstream_root` path is ABSENT. Nothing stranded; the smoke has been validating the right packet throughout. Worth noting for the coordinator: `site/system-map/data/parts.json` names workstream roots that do not match the dirs actually in use — a latent misrouting trap for any agent that trusts parts.json for paths |
| P08 agent's citation `sidebar-factory.tsx:19-25` vs my `21-22` | Read lines 19-25 | **BOTH CORRECT; theirs is better.** 19-25 is the full `DashboardSidebarInput` interface — `/** Must be exactly 5 sections */` at :21, five-element tuple at :22. Adopting their range as the citation |

## Model-policy: RETRACTED as an incident (corrected after P05's callback)

**I recorded a model-policy violation that did not happen, and I am correcting it here rather
than quietly deleting it.**

What I originally wrote: a grandchild agent ("Commercial surfaces slice B") ran on **Fable 5**
under an Opus-only sprint policy. My sole evidence was the error string surfaced in its task
notification — *"You've reached your Fable 5 limit."*

What P05 reports, as the agent that actually spawned it: it set `model: "opus"` **explicitly on
all three children**, per the project override, and never assigned Fable anywhere. The "Fable 5
limit" text is a **harness usage-limit message scoped to that child's session**, not a statement
of the child's model assignment.

**P05's account is the better-supported one and I accept it.** I inferred a model assignment
from an error string; P05 has direct knowledge of the dispatch parameters it set. Its packet is
independently corroborated — all seven self-reported SHA-256 hashes verify against the files on
disk, and its re-derived counts matched source on every item I could check (and beat mine on
one, see below). An agent that accurate about its receipts is not the likely source of a silent
model swap.

**Corrected findings:**

1. **No model-policy violation is established.** The Opus-only policy was honoured as far as the
   evidence shows. My mid-run instruction to all three subagents (any child must be Opus 5) was
   a reasonable precaution but was addressing a problem that did not exist.
2. **The residual risk P05 names is real and worth keeping:** subagents that *inherit* rather
   than explicitly set a model could drift off-policy without anyone noticing. The mitigation is
   what P05 already did — set `model` explicitly at every dispatch, never inherit.
3. **Cost was coverage, not correctness** (unchanged). The quota-blocked slice verified 8 of ~50
   surfaces and recorded the other 42 as `unknown` with the cutoff named — unreached, not
   absent. It explicitly refused to reconstruct vendor component lists from memory, because a
   fabricated list would silently corrupt the naming-divergence measurement P05 was making. That
   was the right call and is this lane's standard.

**Lesson for the lane:** an error string is a signal to investigate, not a verdict about cause.
I treated "Fable 5 limit" as proof of a model assignment when it was equally consistent with a
session quota — the same classify-by-reading failure as the 3,508/3,507 count below, in a
different guise.

## Boundary confirmation

Research only. No cloning, no execution of candidate source, no build, deploy, admission or
production mutation. Writes confined to the three owned run dirs and `lanes/S1-L3/`. Historical
research untouched. Sprint 1 remains **UNPROMOTED**; parent goal remains active.

## Callback

Target changed by coordinator mid-run: **CENA (Herdr agent)**, not ACTIONIST-S1-L4-HOST.
Compact callback carries paths, exact counts, decisions, blockers and this smoke result, and
does **not** claim Sprint completion. If CENA is unreachable, `callback-pending.md` is persisted
in this directory for retry.
