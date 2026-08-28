# S1-L5 checkpoint 4 — first-principles synthesis, verification and callback

Lane: S1-L5 · Owner: ACTIONIST-S1-L5-RUNTIME · Run: 2026-08-27-sprint-1-fable
Recorded: 2026-08-27 · Parent model at report: Opus 5[1m]
Status: checkpoint 4 of 4 complete. **Lane packets delivered. Sprint 1 remains unpromoted.**

## Artifacts written (all owned paths only)

Per part — `research/workstreams/<part>/runs/2026-08-27-sprint-1-fable/` — all 8 required files:
`research-report.md`, `source-register.jsonl`, `top-companies.jsonl`, `top-repos.jsonl`,
`innovation-register.jsonl`, `first-principles.md`, `decision-ledger.json`, `lane-state.json`.
24 packet files total, plus P13's `verification-shopify-theme-settings-wipe.md`, P14's
`observability-attribution-notes.md`, and the survey notes each subagent produced.

Lane level — `research/workstreams/2026-08-27-sprint-1/lanes/S1-L5/`:
`lane-synthesis.md`, `local-estate-join.md`, `cross-lane-inputs-S1-L4.md`, and four checkpoints.

## Counts, re-derived from files immediately before reporting

| Part | Commercial | OSS | Innovations (ranked) | Source register | Decisions |
|---|---:|---:|---:|---:|---:|
| P13 | 40 records / 30 distinct surfaces | 70 | 100 (10) | 26 | 8 |
| P14 | 49 | 80 | 100 (10) | 26 | 12 |
| P15 | 22 | 97 | 100 (10) | 26 | 11 |

Census records total: **358**. Denominator targets met: **1 of 6** (P15 OSS). No padding anywhere.

## Post-write structural smoke

**3,807 checks · 0 failures · 0 warnings · VERDICT PASS.**

Checked: all 8 required files present and non-empty per part; every JSONL line parses; every record
carries `id`, `observed_date` and a valid `evidence_class`; no duplicate IDs within a file; every
decision-ledger entry carries a falsifier; every ledger and lane-state asserts
`admitted_blocks=0` / `execution_status=UNEXECUTED` / `sprint_promotion=unpromoted` /
`subagent_model_policy=opus_only`; and **lane-state counts match the actual file contents** (the check
that would catch a stale or hand-written count).

## Independent challenge of headline claims

The depth contract requires challenging the lane's own headline claims rather than rereading them.
Four were re-derived mechanically from the JSONL after the reports were written:

1. **"Only 4 of 29 observability surfaces reach dependency-level attribution."** Confirmed from source:
   service 8, deploy 7, dependency 4, commit 3, none 3, endpoint 3, app 1 — over exactly 29 records
   carrying the field. The four are Datadog APM, Honeycomb BubbleUp, Dynatrace Davis, Elastic APM.
2. **"P15 OSS is 97 records across 10 balanced categories."** Confirmed: 97 records, 10 categories,
   spread 14/12/11/11/10/10/10/8/6/5.
3. **"P13 commercial is 30 distinct surfaces, not 40 records."** Confirmed by exclusion: 40 total minus
   6 production-evidence, 1 design-engine-format, 1 ai-design-workspace, 1 unrelated-namesake,
   1 governance-as-code = **30**. The report's framing is exact.
4. **Rank integrity across all six top-10 sets.** All contiguous 1–10, no gaps or duplicates.

One correction was made during the run, not deferred: the Shopify settings-wipe finding was re-verified
first-hand and the wave-1 framing "acknowledged, unfixed" was found **overstated** — Shopify staff
acknowledged receipt and opened an investigation; there is no formal bug acknowledgement on record.
Corrected in place in the P13 packet.

## Subagent policy audit

Ten subagents dispatched across two waves; **every one pinned `model: "opus"` explicitly**. Zero
Sonnet/Haiku/MiniMax/Luna dispatches. **0 policy violations.**

One unresolved routing question is recorded rather than glossed: the wave-1 `p13-oss` agent
self-reported its runtime as "Fable 5" and the quota error named the Fable 5 limit, so whether the
explicit opus pin was honoured by the runtime is **unresolved**. It does not affect what was written,
and wave-2 ran after the parent moved to Opus 5.

## Callback

Delivered to the Herdr CENA coordinator, pane `w659e02f80e5bb1-1` (workspace `w659e02f80e5bb1`),
resolved fresh from `herdr workspace list` + `herdr pane list` immediately before sending rather than
from a remembered ID. Read-back via `herdr pane read --source recent-unwrapped` confirmed the exact
callback text present in the CENA transcript, queued for submission after CENA's in-flight tool call
(CENA was actively running coordinator verification receipts for other lanes).

Callback content: paths, exact counts, the five unmet denominators with cause, the four load-bearing
decisions, the Shopify correction, the Open Design dormancy finding, the three blockers, the
do-not-quote list, and the smoke result. **It explicitly does not claim Sprint completion.**

Cross-lane: S1-L4 sent P09/P10/P11 findings; recorded as cited read-only in
`cross-lane-inputs-S1-L4.md`. Nothing was written into another lane's paths.

## Wave-2 completion, self-audit and correction callback

The four wave-2 subagents completed after the first callback was sent. Counts were re-derived from
source rather than assumed; the earlier figures held, but the re-audit surfaced one defect **in my own
verification** and closed two open questions.

### Defect in my first smoke, found and fixed

My first smoke checked rank contiguity only on `top-companies.jsonl` for P13, so it missed that
`top-repos.jsonl` carried **eleven** top10 records: `puckeditor/puck` appeared twice at rank 1.

On inspection these were **two distinct findings on the same repository**, not a duplicate record —
P13-R-001 covers Puck's Config-defined editable surface, P13-R-002 covers per-field write permission
in the persisted data model. The defect was the shared rank, not the evidence. P13-R-002 was demoted
to `census` with a cross-reference (evidence preserved, top-10 set restored to exactly ten), and its
substance was promoted into `first-principles.md` because it is the **concrete existence proof that
denial-by-construction is implementable**: Puck's `BaseData` carries a `readOnly` map, so the
prohibition travels with the content rather than living in editor configuration. A permission enforced
in editor UI is lost the moment any other channel touches the data; one encoded in the stored record
survives upgrades, migrations, agents and direct API writes.

The final smoke now checks rank contiguity and disposition/rank agreement on **every** ranked file:
**3,797 checks · 0 failures · PASS.**

### Two open questions resolved, both against prior recommendations

**ComputeSDK portability — resolved against the prior (D-P14-09 open → accepted).** The canonical
`universal-sandbox.ts` interface declares no `pause`/`resume`/`suspend`, and `status: 'running' |
'stopped' | 'error'` cannot represent a paused sandbox — not a missing method a patch could add. The
E2B provider never passes `keepMemory`, so the memory-preserving path is unreachable through it. A
provider author concedes in their own source comment that `getInstance()` is an "escape hatch" to the
stateful API "that ComputeSDK's core surface does not model". **This overturns the inherited
"LIFT the ComputeSDK contract" conclusion**, and the failure mode is silent — code compiles and runs,
previews merely cold-boot and lose process state.

**pgroll/reshape — resolved, and worse than first reported (new D-P14-13).** The prior audit's K=2
claim was correct, but the window is **transient by design**: it exists only between `start` and
`complete`, completing drops the old version, and after completion rollback is impossible. The gap is
two-dimensional — count *and* duration. Actionist needs K versions long-lived while one client sits on
v1 for months. The versioned-view primitive is sound and independently converged on by both projects,
so this is extending validated prior art — but it must be planned and costed as an extension.

**P15 `not_applicable` determination made (D-P15-11 recorded_gap → accepted, plus new D-P15-12).**
No coherent market of production-learning-loop vendors exists: Azure AI Personalizer, the category's
flagship managed service, was **retired 25 August 2026 — two days before the survey** — with the
migration path being an OSS repository rather than a successor. Every genuine loop found is a feature
inside another category. The nearest true analogue is deliberately unbuilt: deps.dev and OpenSSF
Scorecard contain no outcome feedback at all. This *strengthens* the own-the-mechanism decision.

### Final counts and correction callback

P13 commercial 40 / OSS 70 · P14 commercial 49 / OSS 80 · P15 commercial 22 / OSS 97 ·
innovations 100 per part · source-register 26 per part · decisions 8 / 13 / 12.

A correction callback was delivered to CENA (pane re-resolved fresh before sending) carrying the
revised counts, the self-found defect and its fix, both resolutions, and the `not_applicable`
determination. Read-back confirmed the exact text in the CENA transcript. It again explicitly does not
claim Sprint completion.

## Boundary at close

research_only · no clone/execute/build/deploy/benchmark/admission · no client-private data ·
no authenticated vendor access · execution_status UNEXECUTED · admission_status NOT_ADMITTED ·
admitted_blocks 0 · implementation_authorized false · external_side_effects none ·
wrote only owned run directories and lane checkpoints · **Sprint 1 unpromoted; parent goal active.**
