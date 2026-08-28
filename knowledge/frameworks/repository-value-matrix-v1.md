# Repository Value Matrix v1

Status: `machine_readable` · proposal, not calibrated · observed 2026-08-28

The Repository Value Matrix (RVM) answers one narrow question:

> Given one source, one block, one recipe, one workflow and one reuse shape, is this source worth
> taking to the next evidence gate?

It is not a repository leaderboard, a quality badge or an admission decision. The row grain is:

```text
(source_identity, score_shape, recipe_id, block_id, workflow_id)
```

The same source receives five independent scores for `complete_product`, `surface_module`, `engine`,
`package` and `pattern`. A source can be valuable as an intact product or engine and unusable as a
transplant. A `custom_delta` is not a repository score; it is the comparison baseline when no source
is worth adapting.

## Design rules

1. Pin the source before scoring. A branch, star count or mutable URL is not an identity.
2. Score a source only in a named block/recipe/workflow context. There is no global repository
   score.
3. Keep `observed`, `inferred`, `hypothesis`, `unknown` and `rejected` separate.
4. `unknown` is not zero and never becomes `not_applicable` merely to complete a row.
5. Apply hard gates before arithmetic. An excellent UI cannot compensate for a cross-tenant leak,
   missing migration owner or ambiguous source obligation.
6. Use a weighted geometric mean (the shape-specific **Diamond Score**) so a weak dimension pulls the
   result down; preserve the dimension vector and minimum critical dimension beside the score.
7. Treat licence and clean-room reimplementation effort as a cost dimension. It can make a copied
   shape ineligible when obligations are incompatible, but it is not an automatic rejection of the
   source as a service, reference or pattern.
8. Calibration anchors are fixtures with no fabricated scores. They establish what a positive
   evidence packet looks like; they do not establish admission, universal reuse or legal clearance.

## Dimensions

Each dimension is stored with its raw signal, normalized `0–100` score, evidence status and evidence
references. Higher normalized values are better, including for cost dimensions after inversion.

| Dimension | Measurement contract | Missing-evidence behavior |
|---|---|---|
| `product_completeness` | Required user-visible workflow breadth, core entities, states, settings, identity, admin and recovery for the named block/recipe/workflow. | Unknown until the source is read at the target shape; not inferred from README feature lists. |
| `ui_quality` | Controlled surface capture: hierarchy, typography, spacing/density, state completeness, responsive behavior, accessibility and visual coherence. | `not_applicable` only for engine rows with no user-visible surface; otherwise unknown until VSCP-1. |
| `out_of_box_operability` | Clean setup, documented prerequisites, start/build/health behavior and representative workflow in a pinned disposable environment. | Unknown before runtime smoke; metadata cannot satisfy it. |
| `architecture_quality` | Boundary clarity, dependency closure, data/identity ownership, upgrade path, testability and absence of hidden global state. | Unknown when source/architecture read is incomplete. |
| `integration_seams` | Typed APIs/events/ports, route/session seams, extension points, error/read-back behavior and host binding clarity. | Unknown unless the relevant seam is directly evidenced. |
| `adaptation_burden` | Raw normalization-surgery points, changed files/lines, boundary/architectural surgeries, semantic mapping and irreversible work, inverted to a benefit score. | Unknown; never replaced with the operator's 1–2% observation. |
| `runtime_burden` | Process/profile count, active/idle memory, CPU, storage, connections, queues, managed dependencies and isolation requirements, normalized and inverted. | Unknown until the relevant runtime is measured or a bounded fixture is explicitly labelled inference. |
| `maintenance_burden` | Upstream sync model, release units, dependency churn, migration ownership, upgrade/rollback effort and maintenance receipts, inverted to a benefit score. | Unknown without source/update evidence; silence is not low burden. |
| `reuse_breadth` | Evidence-backed fit across named blocks/recipes/workflows, not tags, stars or generic descriptions. | Zero observed breadth is different from unknown breadth; preserve the status. |
| `evidence_confidence` | Completeness and independence of the evidence ladder for this exact row, including pinned identity and negative paths. | Unknown/under-documented rows return `UNDERDETERMINED`, not a low confidence number guessed from metadata. |
| `rights_reimplementation_cost` | Licence/obligation review plus bounded clean-room reimplementation effort, with raw obligation and cost receipts retained; inverted to a benefit score. | `unknown` blocks copied-source scoring; it does not erase reference/pattern value or create automatic legal rejection. |

### Cost normalization

Before direct measurements exist, the framework may record a pre-registered **cost-point fixture**;
it must be labelled `inferred` and cannot be reported as hours. The initial surgery index is:

```text
raw_adaptation_points =
    1 × cosmetic_surgeries
  + 3 × boundary_surgeries
  + 5 × architectural_surgeries
  + 4 × irreversible_surgeries
```

`adaptation_burden = 100 × clamp(1 - raw_adaptation_points / 100, 0, 1)`.
Runtime and maintenance retain their raw vector (processes, RAM, CPU, connections, queues,
release units and recovery gaps) and use a declared normalization version. No factor may be
converted to hours without a measured receipt. `rights_reimplementation_cost` uses the same
pattern: retain obligation class, source-copy scope and clean-room estimate separately, then invert
only the declared normalized cost.

## Shape-specific Diamond Score

For shape `s`, let `A_s` be the dimensions applicable to that shape, `w_i(s)` its weight and
`s_i ∈ [0,100]` the normalized dimension score. Let `epsilon = 0.0001`.

```text
D(s) = 100 × exp(
  sum(i ∈ A_s, w_i(s) × ln(max(s_i / 100, epsilon)))
  / sum(i ∈ A_s, w_i(s))
)
```

If a dimension is explicitly `not_applicable` by the shape policy, its weight is removed and the
remaining weights are renormalized. If a required dimension is `unknown`, the shape result is
`UNDERDETERMINED` and `diamond_score` is `null`. A score of `0` is a measured zero, not a missing
value.

The geometric form is deliberately min-sensitive. It still does not replace hard gates: a score
cannot rescue an ineligible row. The output always includes `minimum_critical_dimension`,
`weights_used`, raw values, confidence and gate failures.

## Shape weights

Weights sum to exactly `1.00` before removal of explicitly inapplicable dimensions.

| Dimension | Complete product | Surface/module | Engine | Package | Pattern |
|---|---:|---:|---:|---:|---:|
| `product_completeness` | 0.20 | 0.08 | 0.04 | 0.05 | 0.02 |
| `ui_quality` | 0.12 | 0.22 | 0.02 | 0.08 | 0.24 |
| `out_of_box_operability` | 0.15 | 0.10 | 0.14 | 0.12 | 0.06 |
| `architecture_quality` | 0.10 | 0.08 | 0.20 | 0.16 | 0.10 |
| `integration_seams` | 0.08 | 0.18 | 0.20 | 0.22 | 0.16 |
| `adaptation_burden` | 0.05 | 0.10 | 0.08 | 0.12 | 0.14 |
| `runtime_burden` | 0.05 | 0.05 | 0.10 | 0.07 | 0.03 |
| `maintenance_burden` | 0.08 | 0.06 | 0.10 | 0.08 | 0.05 |
| `reuse_breadth` | 0.05 | 0.05 | 0.05 | 0.04 | 0.12 |
| `evidence_confidence` | 0.08 | 0.06 | 0.05 | 0.04 | 0.06 |
| `rights_reimplementation_cost` | 0.04 | 0.02 | 0.02 | 0.02 | 0.02 |
| **Total** | **1.00** | **1.00** | **1.00** | **1.00** | **1.00** |

The weight profiles are policy proposals. They are not learned from a production dataset and must
be recalibrated only through the registered experiments. They make the trade-off visible before a
future run rather than allowing the goalposts to move after seeing scores.

## Hard gates and missing evidence

The following gates run before the Diamond Score:

| Gate | Complete product | Surface/module | Engine | Package | Pattern |
|---|---|---|---|---|---|
| Pinned source identity | required | required | required | required | required for the referenced source |
| Ambiguous/incompatible rights | copied row ineligible; reference route may remain | copied row ineligible; reference route may remain | service/reference route may remain | copied row ineligible | pattern may continue only with explicit clean-room route |
| Minimum evidence tier | T2 | T2 | T1 | T1 | T1 |
| Identity/tenant/authority proof | required when the capability carries state or actions | required | required for state/action ports | required for host-bound state | required for reproduced behavior |
| Runtime/operability proof | required | required for mounted surface | required for engine boundary | build/contract smoke | reproducible pattern replay |
| Visual product-surface gate | required | required | `not_applicable` when no surface | applicable if UI package | required for visual pattern |
| Critical dimension floor | no required dimension below 60; accessibility ≥90 when UI applies | same | integration/architecture ≥60 | integration/architecture ≥60 | UI/integration ≥60 when applicable |
| Cross-tenant, critical accessibility or identity failure | `INELIGIBLE` / `NO_SHIP` | `INELIGIBLE` / `NO_SHIP` | `INELIGIBLE` / `NO_SHIP` where applicable | `INELIGIBLE` / `NO_SHIP` where applicable | `INELIGIBLE` for the reproduced row |

Missing evidence has one of three explicit results:

- `UNDERDETERMINED`: a required field or family is missing but the source is not disproven.
- `INELIGIBLE`: a hard gate is disproven for this shape, such as a cross-tenant leak or
  incompatible obligation.
- `SCORED`: all required fields for this row are present and the shape-specific score can be
  calculated. `SCORED` is not `QUALIFIED` or `ADMITTED`.

No score is imputed from stars, repository age, tag presence, README claims or a sibling shape.

## Evidence ladder

The ladder is cumulative, but each tier still requires the receipts relevant to the chosen shape:

| Tier | Evidence | It can support | It cannot prove |
|---|---|---|---|
| `T0` | URL/metadata/declared licence and discovery identity | Candidate discovery and query routing | Source bytes, runtime, quality or compatibility |
| `T1` | Pinned source read, manifest, dependency/role inspection and explicit capability boundary | Architecture, closure and shape proposal | Runtime behavior, tenancy or integration success |
| `T2` | Disposable runtime smoke, health/start/build and representative workflow states | Out-of-box operability and basic product/surface behavior | Host binding, complete tenancy or production maintenance |
| `T3` | Host integration proof: identity, tenancy, ports, data ownership, visual/state binding and negative paths | Shape-specific compatibility and qualification inputs | Long-term upgrade or client outcome |
| `T4` | Maintained release/upgrade/recovery evidence and attributed workflow/client outcome | Operational ranking and promotion inputs | Universal transfer to another block, recipe or shape |

The score record stores `evidence_level`, `evidence_refs` and missing families. A T0/T1 candidate
can remain useful for discovery; it cannot silently become a T2/T3 recommendation.

## Reproducible screenshot protocol: VSCP-1

`ui_quality` is scored from controlled captures, not a subjective star column. VSCP-1 is a protocol
definition, not a completed run.

1. Pin browser/runtime image, Playwright version, font files, locale `en-US`, timezone UTC, sRGB,
   device scale factor, reduced-motion preference and deterministic seed.
2. Use a synthetic fixture manifest with long labels, normal density, empty/error/denied/stale and
   success states. Freeze clocks, random IDs, network mocks and image responses.
3. Capture representative surfaces at `1440x1024`, `1280x900`, `1024x768`, `768x1024` and `390x844`
   in light and dark when supported.
4. Record rest, loading, empty, error, denied, success, invalid and stale, plus focus/selected/
   disabled probes where the surface declares them.
5. Emit an immutable row containing `anchor_id`, `surface_id`, `recipe_id`, `score_shape`, viewport,
   mode, state, fixture hash, browser hash, screenshot SHA-256, ARIA snapshot hash, computed-style
   digest, DOM-contract digest and network assertion.
6. Derive hierarchy, typography, spacing, responsiveness, accessibility and role-coherence signals
   mechanically; retain raw counts before normalization.
7. Aggregate repeated captures with medians and retain the worst critical accessibility,
   responsiveness and state result. A polished hero cannot hide a broken table or denied state.
8. Run identical-first donor diff before harmonization, then computed-property coherence after the
   binding. A bridge file or passing build is not a visual pass.
9. Store the score and gate verdict with the immutable capture manifest. Human coherence review must
   reference that manifest.

The product-surface policy proposal is overall score ≥75, no dimension below 60, accessibility ≥90,
interaction-state and responsive scores ≥70, normalized donor-chrome burden ≥60, and no critical
tenant/identity/overflow failure. These thresholds are pre-registered calibration proposals, not
industry constants.

## Calibration fixtures

AFFiNE, Twenty, Chatwoot and Plane are positive operator calibration anchors. They are fixtures, not
fabricated measured scores, rankings or admissions. The first calibration run must execute the same
VSCP-1 matrix for all four and retain their shape-specific limits:

| Anchor | Intended calibration role | Current status |
|---|---|---|
| AFFiNE | Rich workspace/editor surface and host handoff | `protocol_defined_not_run` |
| Twenty | Metadata-driven CRM/table surface and identity/data boundary | `protocol_defined_not_run` |
| Chatwoot | Inbox/queue/thread surface and identity-bound service boundary | `protocol_defined_not_run` |
| Plane | Operational project surface and contextual navigation boundary | `protocol_defined_not_run` |

Their source identities and explicit limits are preserved in the capability source registry. No
numeric score is written until a pinned capture manifest exists.

## Falsifiers and next gate

- A candidate with a hard tenancy/rights/identity failure outranks a clean candidate: gate ordering
  or the output contract is broken.
- A missing required dimension becomes zero or `not_applicable` to produce a score: unknown handling
  is broken.
- The planted visual encoding alias passes VSCP-1's conversion probe: the visual gate is broken.
- Repeat captures from the same manifest do not reproduce: the screenshot protocol is not a gate.
- Shape-specific scores cannot separate product, surface, engine, package and pattern fixtures: the
  shape weights or dimension applicability are not doing useful work.
- A focused ten-donor calibration shows that observed adaptation, runtime and maintenance outcomes
  are unrelated to the score while a simpler baseline is safer: replace the matrix rather than
  preserve it for novelty.

Next gate: run VSCP-1 on the four anchors and a small held-out sample, then compare score verdicts to
human review and observed adaptation/qualification receipts. Until that run, the RVM is
`machine_readable`, untested and unsuitable for full-corpus ranking.
