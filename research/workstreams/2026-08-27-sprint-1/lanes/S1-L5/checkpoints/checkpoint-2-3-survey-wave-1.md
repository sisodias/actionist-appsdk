# S1-L5 checkpoints 2 & 3 — survey wave 1 (commercial + OSS), PARTIAL

Lane: S1-L5 · Agent: ACTIONIST-S1-L5-RUNTIME · Run: 2026-08-27-sprint-1-fable
Recorded: 2026-08-27. Parent model at wave-1 dispatch: Fable 5[1m]; parent moved to Opus 5[1m] mid-lane.
Status: checkpoints 2 and 3 **partially satisfied**. Denominators are NOT met for 5 of 6 surveys.

## Wave-1 dispatch

Six subagents, every one dispatched with `model: "opus"` explicitly per the project override.
Note: the p13-oss agent self-reported its runtime as "Fable 5" and the quota error named the
Fable 5 limit. Whether the explicit opus pin was honoured by the runtime is **unresolved** and is
recorded here as a live routing question, not a settled fact. It does not change what was written.

## Verified from source (re-derived by the lane owner, not taken from agent prose)

Counts below come from parsing the JSONL directly on 2026-08-27, after the agents returned.

| Survey | Records | Parse failures | top10 | Denominator target | Met? |
|---|---:|---:|---:|---|---|
| P13 commercial | 40 (= 30 distinct surfaces + 6 production-evidence + 2 format/engine + 1 excluded namesake + 1 governance sub-record) | 0 | 10 | ~100 | **No — 30 surfaces** |
| P13 OSS | 0 (no file written) | — | 0 | ~100 | **No — zero** |
| P14 commercial | 20 | 0 | 10 | ~100 | **No — 20** |
| P14 OSS | 0 (no file written) | — | 0 | ~100 | **No — zero** |
| P15 commercial | 5 | 0 | 5 | ~100 or justified `not_applicable` | **No — 5; not_applicable determination NOT made** |
| P15 OSS | 97 | 0 | 10 | ~100 | **Yes (97, no padding)** |

P13 commercial evidence classes: first_party_docs 24, secondary 13, observed_behavior 3.
P14 commercial evidence classes: first_party_docs 18, secondary 2.
P15 commercial evidence classes: first_party_docs 5.
P15 OSS evidence classes: observed_behavior 62, first_party_docs 31, secondary 4.
P15 OSS category spread: bayesian_preference 14, privacy_telemetry 12, bandits 11, llm_eval_loop 11,
experimentation 10, recommender 10, asset_scoring 10, drift_monitoring 8, edit_learning 6, registry_ranking 5.

## Cause of the shortfall

An account-wide model usage limit ("You've reached your Fable 5 limit") terminated the web-research
lane across all six agents within roughly ten minutes of dispatch. Confirmed non-transient by each
agent independently retrying across distinct URLs and queries. Local tools stayed alive throughout.
No agent padded its census to hide the gap; every surviving record is a page actually read.
This is a **BLOCKED** condition (could not observe), not **FAIL** (observed wrong).

## Substantive wave-1 results worth carrying forward

### P13 — three postures at the editing boundary (strongest structural finding)
Bounded edit operations (add/remove/replace/reorder/theme/text) are near-universal and therefore
NOT the differentiator. Boundary behaviour is, and the census found exactly three postures:
1. **Denial by construction** — Storyblok component whitelists, Power Apps managed solution layering:
   the disallowed move is unrepresentable in the data model.
2. **Graduated permission** — Builder.io `styleStrictMode`, Webflow role gating.
3. **Unbounded fallthrough** — every AI app builder: the same prompt box that performs a bounded edit
   can also rewrite anything, so the boundary is decorative.
No surveyed AI builder solves case 3. Lovable is the sharpest illustration: compile-time stable
component IDs and line-scoped diffs give genuinely elegant binding, then the escape hatch dissolves
the composition anyway. **This directly supports P13's core thesis** that bounded edits must not
dissolve the composition, and identifies posture 1 as the only architecturally sound answer.

### P13 — intent capture is the real gap
No surveyed surface durably records *why* an edit was made. Closest approximations: Contentful
Patterns (reusable decision as a named object), Power Apps layers (the override is a distinct
addressable object, so the system knows a deliberate change occurred), OpenDesign's DESIGN.md
(prose, not machine-checkable). Figma Make in-context annotations are a lead but **unverified**.

### P13 — "Open Design" is three unrelated things; the intended one is dormant
Verified by direct fetch: the `opendesigndev` GitHub org (owner of opendesign.dev, home of the Open
Design Engine and the Octopus format spec) shows most recent activity 3 Sep 2024, most repos untouched
since 2023, nothing in 2025–2026. Separately `open-design.ai` is a 2026 Powerformer agent wrapper,
not a spec or editor. Third, the Open Design Alliance is an unrelated CAD/BIM nonprofit. The
Animaall/Ceros lineage named in the dispatch is **unresolved — neither confirmed nor refuted**.
Consequence: the dispatch's instruction to census "Open Design and comparable systems" rests on a
dormant project. Any downstream design doc treating Open Design as a live spec to build on must be flagged.

### P14 — artifact rollback ≠ composition rollback (strongest finding for P14's thesis)
Vercel reverts traffic in ~1s but its docs state environment variables and configuration are NOT
reverted; Fly.io says the same about `fly.toml`, secrets and migrations. **That gap is precisely
Actionist's "exact recoverable composition" requirement**, and no surveyed vendor closes it.

### P14 — pinning must be by digest, and artifact retention must be ours
Render re-pulls by tag on rollback and may therefore get a different image (digests required for
predictability); Fly warns that images not recently deployed may be pruned. A pinned reference is
worthless if the artifact it names can be garbage-collected.

### P14 — a composition has two rollback horizons
PlanetScale's schema revert is a bounded ~30-minute dual-write window, while artifact rollback has no
such bound. The shorter horizon governs what is genuinely recoverable. This means P14's RollbackPlan
output must carry a per-resource recovery horizon, not a single "can roll back" boolean.

### P14 — prior-conclusion verdicts (partial)
- **E2B survives on capability**: memory-preserving pause (~1s resume, ~4s/GiB pause) beats Modal
  (memory snapshots preview-only, 7-day expiry, same-instance-type only, snapshotting TERMINATES the
  sandbox) and Vercel Sandbox (documented as unsuitable for continuous hosting). Caveat: E2B retains
  paused sandboxes indefinitely with no auto-kill setting — the reaping policy is ours to own.
- **ComputeSDK portability is UNTESTED and is the top open question.** The survey covered capability,
  not portability. Evidence suggests providers do not expose compatible primitives, so the abstraction
  may degrade to a filesystem-snapshot lowest common denominator — forfeiting the exact memory-pause
  property that justified choosing E2B. The prior conclusion "LIFT the ComputeSDK contract" is
  therefore **not yet validated**.
- **Caddy survives on mechanism** (ask-endpoint gating, cold path after first issuance). One material
  risk: shared certificate-storage backends are reportedly not in official Caddy builds, so a
  multi-node fleet may need a custom binary. **Secondary-sourced, NOT confirmed** against module docs.
- **Daytona**: not re-tested; the prior disqualification stands unexamined this wave.

### P15 — 97-record OSS census is the lane's one complete denominator
Ten categories with real balance and 62 observed-behavior records. Top 10 (verified ranks):
VowpalWabbit, BoTorch, MABWiser, Ax, choix, PyMC, zr-obp (Open Bandit Pipeline), openskill.py,
LightFM, GrowthBook.

## Corrections and verification debt (must not reach the client unverified)

1. **Shopify March 2026 theme-update settings-wipe** — the single strongest P13 production-evidence
   finding (the layer architecturally guaranteed to survive an upgrade reportedly did not). It is
   **secondary-sourced only**; no first-party status page or postmortem was reached. Do not quote the
   date or the "acknowledged, unfixed" status until verified. Highest-value remaining verification.
2. **Do not quote "Northflank one-click rollback."** Vendor feature pages claim it; the first-party
   run-and-manage-releases doc describes only re-triggering a prior run and does not state whether
   runs capture image digests.
3. **Statsig has no documented automatic rollback** (alerting only, single-metric optimisation by its
   own docs) — excluded from the P14 top 10.
4. Lovable's April 2026 incident post: first-party URL known, contents unread.
5. Framer 3.0/Agents and Replit Agent 4 / Design Canvas 2026 claims are secondary-only.
6. Blaxel and QA Wolf records are secondary-sourced throughout; headline figures are marketing.
7. **No SLA pages or published postmortems were retrieved for any P14 surface.** In those records
   `production_evidence` means documented operational mechanics and disclosed limitations — weaker
   than the dispatch asked for. Records say `none_found` where an SLA would be required.
8. P13 `upgrade_safety` and `intent_capture` are `unknown` on most census-tier records. Genuine
   evidence gap: these properties are rarely documented and usually need hands-on use.

## Coverage gaps to close in wave 2

- **P13 OSS**: entire ~100-repo denominator, zero written.
- **P14 OSS**: entire ~100-repo denominator, zero written.
- **P15 commercial**: 95 of ~100, plus the `not_applicable` determination that was never made.
- **P14 commercial**: the whole observability/incident subcategory is uncovered (Datadog, Sentry,
  Honeycomb, Grafana, New Relic, incident.io, PagerDuty) — that is where per-component failure
  attribution lives, central to P14's "How are failures attributed per capability?" open question.
  Also uncovered: Railway/Heroku/DO/AWS/GCP/Azure/Porter/Coolify/Dokploy/Sevalla, Morph/CodeSandbox/
  StackBlitz/Replit, all browser sandboxes, Flagsmith/Split/Unleash/Harness/Argo/Octopus/GitLab/
  Buildkite, all visual-regression vendors.
- **P13 commercial**: ~70 surfaces. Highest-value unreached, all four of which make composition
  governance an explicit product surface: AEM Universal Editor, Sitecore XM Cloud Pages, Uniform,
  Webstudio.

## Boundary restatement

research_only · no clone/execute/build/deploy/admission · execution_status UNEXECUTED ·
admission_status NOT_ADMITTED · admitted_blocks 0 · implementation_authorized false ·
sprint remains unpromoted · lane wrote only its owned run dirs and these checkpoints.
