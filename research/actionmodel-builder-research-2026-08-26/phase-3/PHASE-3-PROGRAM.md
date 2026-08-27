# Action Model Builder — Phase 3 source depth, corpus triage, and pilot preparation

Run: actionmodel-builder-research-2026-08-26
Phase: source-depth-and-pilot-preparation
Status: dispatched; parent research goal active
Predecessor: Phase 2 verified with five lane receipts and 17,000 observations at 100 per cell
Mode: research only; no implementation, execution, deployment, client data, vendor login, or admission

## Purpose

Phase 2 turned the numeric matrix into inspectable artifacts. Phase 3 turns those
artifacts into a ranked depth queue and a bounded pilot specification. It must
answer what deserves a deeper read, what can be inspected from the local corpus,
what evidence is still missing, and what a future authorized synthetic run would
need. It must not silently convert a candidate, repository, vendor claim, or
local path into a reusable block.

## Non-negotiable boundaries

- No vendor login, paid plan, private contract, client data, production account, or credential.
- No repository cloning, source-code copying, arbitrary source execution, build, deployment, external write, message, payment, or browser side effect.
- Local corpus work is metadata and rights-signal triage only; do not open arbitrary source files.
- Keep first-party, empirical, community, inferred, gated, stale, unknown, and blocked evidence distinct.
- Every candidate retains an owner, source identity, observation date, rights state, falsifier, and next gate.
- A synthetic pilot is a design artifact only. Do not run a model, runtime, browser, security probe, license scan, or admission decision.
- Each worker writes only its own Phase-3 output and its own lane object. The coordinator owns shared Phase-3 promotion.

## Lane contracts

### RCH-PLATFORM-SOURCE-DEPTH

Use the 67 existing platform records and 50 expansion candidates from Phase 2.
Build a ranked source-depth queue, not a new marketing list. For each priority
surface, record the exact first-party pages to inspect, capability fields still
unknown, lifecycle/access limits, rights/OEM/support questions, and a falsifier.
Separate direct documentation from inference and keep authenticated behavior
unknown unless it was actually tested (it is not to be tested in this phase).

Outputs:
- outputs/platform-depth-triage.md
- outputs/platform-depth-triage.jsonl

Acceptance: priority rationale, source URLs, field gaps, evidence class, date,
falsifier, and next gate for every record; no exhaustive-universe claim.

### RCH-GITHUB-CANDIDATE-PRIORITY

Use the immutable 500-row GitHub expansion and its 17,000-slot matrix as inputs.
Rank the most valuable repository candidates for later clean-room inspection
across all 17 industries and 10 dimensions. Preserve repository identity,
industry/dimension joins, evidence class, license/rights unknowns, maintenance,
dependency/SBOM questions, and why a candidate is reference-only until a future
authorized gate. Do not clone, open arbitrary source, or copy code.

Outputs:
- outputs/github-candidate-priority.md
- outputs/github-candidate-priority.jsonl

Acceptance: exact input row counts, deterministic ranking fields, no duplicate
identity claims, source/rights unknowns, and a falsifier/next gate per ranked
candidate. The matrix remains evidence inventory, not capability proof.

### RCH-LOCAL-CORPUS-TRIAGE

Use the Phase-2 79-root, 80-line metadata inventory. Group the local material
into actionable inspection queues: UI/21st.dev hubs, GitHub indexes and datasets,
AutoSaaS, private builders, research packs, templates, and archives. Rank by
likely value and inspection safety using only recorded metadata and manifest
signals. Identify exact follow-up metadata that could establish rights,
provenance, freshness, ownership, and dedupe; do not open untrusted source.

Outputs:
- outputs/local-corpus-triage.md
- outputs/local-corpus-triage.jsonl

Acceptance: every triage record points to an existing inventory ID/path, retains
rights unknowns, records overlap/missing status, and proposes a read-only next
inspection. No delete, move, rename, execute, or network action.

### RCH-SYNTHETIC-PILOT-SPEC

Turn the Block Contract v1, industry specifications, and evaluation plan into
one bounded synthetic read-only pilot specification. Compare operations, finance,
CRM/lead, and support archetypes; choose a recommended pilot only as a
falsifiable design recommendation. Define fixture inputs, state transitions,
allowed read/staged operations, denial cases, evidence receipts, visual/runtime
states, cost fields, and stop conditions. Do not run it or authorize admission.

Output:
- outputs/synthetic-pilot-specification.md

Acceptance: explicit scope and non-scope, chosen archetype rationale, contract
references, expected outputs, negative cases, receipt schema, owner, falsifier,
and UNEXECUTED/NOT_ADMITTED markers.

### RCH-DECISION-LEDGER

Synthesize Phase 2 and the Phase-3 queue into a decision ledger: what is proven,
what is only documented or inferred, what is unknown, which research task has
the highest information value, and what would kill or hold it. Link every
decision to source artifacts, not agent summaries. Produce a ranked 1–3 next
research backlog and explicit stop rules for breadth versus depth.

Output:
- outputs/decision-ledger.md

Acceptance: no unsupported claims, links to exact artifacts, priorities have a
reason and falsifier, and parent goal plus implementation/admission boundaries
remain explicit.

## Shared promotion gate

Phase 3 may be marked verified only when all five lane receipts are present,
their artifact paths and counts reconcile, hashes are recorded where applicable,
the parent remains active, and implementation_authorized=false,
execution_status=UNEXECUTED, and admission_status=NOT_ADMITTED remain true.
Phase 3 completion never promotes a block or authorizes the pilot.

## Return contract

Return AGENT_PACKET v1 with exact artifact paths, counts, verification commands,
blockers, evidence limits, and callback status. A draft file is not a completed
lane until post-write smoke and fresh callback delivery are verified.
