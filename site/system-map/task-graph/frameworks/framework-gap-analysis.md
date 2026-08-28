# Actionist Framework Registry gap analysis

Status: `research_only` · observed 2026-08-28 · owner `ACTIONIST-FRAMEWORK-REGISTRY`

This analysis compares the current 24 framework records with the complete Actionist loop. It ranks
gaps by dependency centrality and consequence: a gap is high when many downstream decisions depend
on it or when its failure could make a client-facing claim unsafe. It does not rank novelty, vendor
interest or repository count.

## Current registry state

| Maturity | Count | Meaning here |
|---|---:|---|
| `idea` | 0 | No named framework is left at idea-only state in this packet. |
| `specified` | 9 | A protocol is written and falsifiable, but its stable machine form or execution is incomplete. |
| `machine_readable` | 14 | JSON, JSONL or schema artifacts exist; execution and promotion may still be absent. |
| `dry_run` | 1 | The deterministic composer has synthetic fixtures and hand-run traces, but no executable solver. |
| `measured` | 0 | No framework has direct measurements for its intended production decision. |
| `operational` | 0 | No framework is authorized in a maintained production loop. |

The maturity count is deliberately not a progress score. The current research boundary still says:
no source execution, no admitted module, no production release and no client outcome attribution.

## How the ranking works

- `dependency_centrality` is a pre-registered 1–10 judgment of how many downstream framework
  decisions are blocked or made unsafe by the gap. It is not a graph degree pretending to be a
  measurement.
- `consequence` states the failure if the gap is ignored.
- `gap_kind` uses four distinct states:
  - `genuinely_missing_framework` — no current framework closes the required authority or decision
    boundary.
  - `existing_framework_lacks_machine_readable_form` — the method exists in prose or scattered
    artifacts but cannot yet be consumed deterministically.
  - `machine_readable_but_untested` — a schema/structured artifact exists but the intended run has
    not happened.
  - `tested_but_not_operational` — a synthetic, hand or static check has exercised part of the
    framework, but no authorized runtime/production loop uses it.
- A gap can point at an existing framework without claiming that the existing framework is complete.

## Ranked gaps

### G-01 — Host authority registry implementation contract

- Dependency centrality: **10/10**
- Gap kind: `genuinely_missing_framework`
- Affected records: `FW-HOST-AUTHORITY`, `FW-ARCHETYPE-SHELL`
- Consequence: Without a host-owned settings/navigation/identity registry, every composed surface
  can reintroduce donor login, route or scope ambiguity. The single-product premise cannot be
  tested.
- Current evidence: P10 specifies strong identity, partial navigation and unprecedented settings
  tiers; P04 carries a HostContract shape; neither supplies an exercised portable registry.
- Required response: define `HostRegistryContract`, settings precedence/provenance, route-ref
  contribution, two-gate visibility, cascading emptiness and donor-chrome negative tests.
- Owner/next gate: D11/D14, P10/P08; Loop 0 and Loop 3 host-absorption proof.

### G-02 — Complete workflow outcome and attribution contract

- Dependency centrality: **10/10**
- Gap kind: `genuinely_missing_framework`
- Affected records: `FW-DEMAND-PRODUCTSPEC`, `FW-EVIDENCE-QUALIFICATION`,
  `FW-PRODUCTION-LEARNING`
- Consequence: The system can qualify parts but cannot prove that a selected composition delivered
  the client's economic or operational outcome. Selection and learning remain ungrounded.
- Current evidence: ProductSpec has acceptance markers and P15 has evidence signals, but no
  canonical outcome receipt joins workflow, client metric, release, capability and consent scope.
- Required response: define `OutcomeReceipt` with terminal owner, metric window, workflow fixture,
  capability attribution, binding/release IDs, comparison context and privacy scope.
- Owner/next gate: D03/D18, P02/P15; the first client-safe pilot decision packet.

### G-03 — Candidate funnel machine-readable row and query contract

- Dependency centrality: **8/10**
- Gap kind: `existing_framework_lacks_machine_readable_form`
- Affected records: `FW-SOURCE-CANDIDATE-FUNNEL`, `FW-REGISTRY-LIFECYCLE`
- Consequence: Discovery is split between source-registry rows and prose, so shape-specific
  retrieval, reproducible candidate sets and evidence completeness cannot be automated reliably.
- Current evidence: Block Hub defines the funnel and the permanent source registry exists, but the
  `(source, block, recipe, workflow, shape)` row/query contract is not canonical.
- Required response: add a versioned candidate-query/edge schema with source identity, evidence
  class, shape, block, recipe, workflow, blockers and next gate.
- Owner/next gate: D04/D09, P03; one thin and one well-supplied block.

### G-04 — Closed design-grammar candidate catalogue and pack compiler

- Dependency centrality: **8/10**
- Gap kind: `existing_framework_lacks_machine_readable_form`
- Affected records: `FW-PREFERENCE-LEARNING`, `FW-DESIGN-GRAMMAR-TOKENS`,
  `FW-SURFACE-ROLE-MAPPING`
- Consequence: Preference learning can be described but cannot yet produce controlled complete
  light/dark packs or render one pack across donor classes.
- Current evidence: `knowledge/06` specifies the grammar and protocol; P07 supplies semantic and
  binding contracts; the candidate register, compiler and valid-pack corpus are absent.
- Required response: normalize palette, typography, spacing, shape, motion and component seeds into
  a versioned grammar register, compiler and A–N gate receipt.
- Owner/next gate: D13/D14, P06/P07; local grammar inventory and closed-pack proof.

### G-05 — Value Matrix calibration and falsifier run

- Dependency centrality: **8/10**
- Gap kind: `machine_readable_but_untested`
- Affected records: `FW-REPOSITORY-VALUE-MATRIX`
- Consequence: The shape-specific score is a defensible design but cannot select or reject a source;
  writing calibration scores now would turn positive anchors into unsupported recommendations.
- Current evidence: the RVM schema, weights, equation and unscored anchors are machine-readable;
  VSCP-1 and held-out shape comparisons have not run.
- Required response: capture AFFiNE, Twenty, Chatwoot and Plane under the same protocol, then run a
  small held-out sample and planted-failure controls.
- Owner/next gate: D06-D09, ACTIONIST-FRAMEWORK-REGISTRY; VSCP-1 calibration.

### G-06 — Composer execution against real contract records

- Dependency centrality: **9/10**
- Gap kind: `tested_but_not_operational`
- Affected records: `FW-DETERMINISTIC-COMPOSER`, `FW-MODULE-CONTRACT-FAMILY`
- Consequence: The system cannot yet demonstrate that the 22-rule elimination layer exposes
  contract defects and blocks incompatible assemblies before model choice.
- Current evidence: P12 has schemas, 24 synthetic fixtures, hand dry-run traces and smoke receipts,
  but no executable solver or real P03 candidate record set.
- Required response: encode three real shelf candidates, execute all rules three times, report
  first-failure accuracy, UNDERDETERMINED rate, determinism and vocabulary drift.
- Owner/next gate: D15, P12; three-candidate contract-and-solver pilot.

### G-07 — Qualification, admission and complete-workflow run

- Dependency centrality: **10/10**
- Gap kind: `machine_readable_but_untested`
- Affected records: `FW-EVIDENCE-QUALIFICATION`, `FW-RELEASE-RECOVERY`,
  `FW-PRODUCTION-LEARNING`
- Consequence: All current sources remain unqualified and unadmitted; the framework cannot show
  that individual gates plus a whole workflow produce a safe release.
- Current evidence: T0–T4, profile receipt requirements and release schemas exist, but no source
  was executed, no workflow passed and admitted modules remain zero.
- Required response: authorize one staged read-only binding only after the three-candidate contract
  pilot; run orthogonal evidence families, negative paths and complete-workflow acceptance.
- Owner/next gate: D17-D18, P14/P15; staged qualification/release gate.

### G-08 — Runtime density and recovery-cost measurement

- Dependency centrality: **8/10**
- Gap kind: `machine_readable_but_untested`
- Affected records: `FW-RUNTIME-PROFILES-BUDGETS`, `FW-RELEASE-RECOVERY`
- Consequence: The stacking model may look efficient on paper while process, RAM, CPU, connections,
  queues, managed limits or donor recovery burden exceed client support windows.
- Current evidence: P14 profiles and the pilot resource-budget schema exist; pilot arithmetic is
  explicitly a design fixture and runtime density is unmeasured.
- Required response: measure one mixed composition in preview/staging with pinned process, memory,
  CPU, storage, pool, queue, managed-dependency and object-horizon receipts.
- Owner/next gate: D16-D18, P14 plus host-runtime lane; Loop 2 and release rehearsal.

### G-09 — Cross-client consent and privacy governance for learning

- Dependency centrality: **7/10**
- Gap kind: `genuinely_missing_framework`
- Affected records: `FW-PRODUCTION-LEARNING`, `FW-OBSERVABILITY-ATTRIBUTION`
- Consequence: If anonymised cross-client aggregation is not contractually available, the sparse-data
  learning premise degrades to per-tenant observations and the ranking design changes materially.
- Current evidence: P15 represents `single_client` and `aggregated_consented` scope, but operator /
  client consent, regulated-workload exclusions, anonymization and deletion policy are unknown.
- Required response: settle permitted aggregation, retention, deletion, opt-out and redaction
  semantics before live learning.
- Owner/next gate: D18, operator decision; consent conversation before any cross-client signal.

### G-10 — Release rehearsal and operational promotion loop

- Dependency centrality: **7/10**
- Gap kind: `machine_readable_but_untested`
- Affected records: `FW-EVIDENCE-QUALIFICATION`, `FW-RELEASE-RECOVERY`,
  `FW-OBSERVABILITY-ATTRIBUTION`, `FW-PRODUCTION-LEARNING`
- Consequence: A static registry can be searchable while the underlying framework remains unable to
  promote, revoke, recover or learn from a maintained composition.
- Current evidence: release, rollback, attribution and learning schemas are machine-readable; no
  complete staged release/recovery/promotion cycle has executed.
- Required response: run a staged read-only composition through qualification, release lock, induced
  failure, object-level recovery, revocation and learning receipt checks.
- Owner/next gate: D16-D18, CENA gate; only after the qualification and runtime gates above.

## Consequence map

The highest-centrality gaps are not new product features. They are authority and proof boundaries:

```text
Host authority registry ─┐
Outcome attribution ─────┼─> complete workflow can be identified and owned
Candidate query contract ┘

Closed design grammar ───┐
Value Matrix calibration ├─> a source can be selected for a named shape without guessing
Composer execution ──────┘

Qualification/admission ──┐
Runtime density/recovery ─┼─> a composition can be released and undone honestly
Consent governance ──────┘

Release rehearsal ───────────> production learning can consume trustworthy signals
```

Until these gates move, the correct state of the registry is `research_only`: searchable methods,
not production capabilities. The next highest-value work is the three-candidate contract-and-solver
pilot, followed by the smallest staged qualification only if it closes its own contract defects.

## Evidence boundary

Completed packets under `research/workstreams/2026-08-28-agency-os-pilot/lanes/` were read as evidence
only. Their `done` lane states do not upgrade a framework to operational or authorize source
execution. The historical research files and this dispatch remain unchanged.
