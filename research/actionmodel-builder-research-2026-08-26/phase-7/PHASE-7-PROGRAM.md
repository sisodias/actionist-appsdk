# Phase 7 program — full-fidelity corpus closure

Status: scoped for dispatch; parent goal remains active
Mode: research-only
Predecessor: Phase 6 verified, parent-active
Owner: CENA coordinator
Observed date: 2026-08-27

## Why this phase exists

The prior matrix has 17,000 observed slots across 17 industries and 10 dimensions. It has exactly 100 distinct repository URLs in every individual cell, but only 270 industry–repository pairs contain all 10 dimensions. The requested object is 100 complete repositories per industry, which is 1,700 complete pairs. The measured deficit is 1,430 complete pairs.

This is a join/completion defect, not an empty-slot defect. Phase 7 must select stable repositories per industry first, then require repository-specific evidence for all ten dimensions. It must not promote on the 17,000-slot headline.

The platform register has 117 normalized surfaces, but it is not an exhaustive competitor×feature ledger. The proposed taxonomy also has a count conflict: 18 domains with 8 enumerated keys each gives 144 candidate keys, while an earlier note says 68. The final taxonomy denominator must be machine-counted and reconciled before feature coverage is claimed.

## Required closure invariants

The coordinator may not promote this phase unless an independent verifier proves all of the following:

1. The declared industry universe contains exactly 17 industries.
2. The declared repository dimension universe contains exactly 10 dimensions.
3. Each industry has 100 distinct canonical repository identities selected for that industry.
4. Each selected industry×repository pair has exactly one dimension-evidence record for each of the ten dimensions.
5. Each dimension record contains repository-specific source evidence, observation date, evidence class, limitation, and falsifier or next read-only gate.
6. Repository identity is deduplicated by canonical owner/name and URL, with forks, mirrors, aliases, rebrands, and successors represented as explicit relationships.
7. Search snippets, stars, generic descriptions, capability tags, or reused generic evidence cannot satisfy a dimension.
8. Rights, license, notice, contributor provenance, SBOM state, runtime behavior, and capability proof remain separate fields.
9. Missing, gated, not-found, contradicted, legacy, shutdown, and not-applicable states are retained explicitly.
10. The competitor census has a declared product-surface universe, reconciled feature-key count, one row per applicable surface×feature, source/date/status fields, and explicit unknowns.
11. All artifacts preserve research_only=true, execution_status=UNEXECUTED, admission_status=NOT_ADMITTED, implementation_authorized=false, and admitted_blocks=0.
12. A failed gate, thin source, unresolved right, or missing independent denominator blocks promotion instead of being silently downgraded.

The target record counts are 1,700 repository-selection records and 17,000 dimension-evidence records. These are targets for a future closure receipt, not claims about the current state.

## Lane ownership

Each lane is independent in source ownership and writes only inside its own lane directory. Lanes must not overwrite phases 2–6, the Phase-7 coordinator files, or the existing gap audit and closure queue.

### P7-CORPUS-INTEGRITY

Close the identity layer. Reconcile the 284 baseline records, 500-record expansion register, merged observed matrix, and closure queue. Produce canonical repository selection records, alias/fork/mirror edges, query provenance, and a deterministic deficit queue. Prove which repository identities are selected per industry and which are reusable discovery material only.

Required outputs:

- repository-selection-ledger.jsonl
- repository-identity-edges.jsonl
- corpus-integrity-report.md
- lane-state.json

No source execution, cloning, copying, license admission, or capability claim.

### P7-DIMENSION-EVIDENCE

Close the ten-dimensional evidence layer for selected pairs. For each selected industry×repository pair, produce repository-specific records for demand/atom fit, workflow behavior, data model, integration surface, UI assembly, agent authority, verification/eval, provenance/rights, runtime/deployment, and economics/maintenance.

Required outputs:

- dimension-evidence-ledger.jsonl
- source-receipts.jsonl
- dimension-depth-report.md
- lane-state.json

A generic matrix observation cannot be copied into a missing dimension. Each row must retain source identity, path or endpoint, date, evidence class, limitation, falsifier, and next gate. Runtime or authenticated behavior must stay unknown unless explicitly authorized and executed.

### P7-COMPETITOR-FEATURES

Declare and deepen the competitor universe. Normalize product surfaces separately from companies and lifecycle relationships. Reconcile the provisional 68-versus-144 taxonomy count, publish the final feature dictionary and mapping, and populate evidence rows for each applicable surface×feature.

Required outputs:

- product-surface-universe.jsonl
- feature-dictionary.jsonl
- competitor-feature-evidence.jsonl
- feature-census-report.md
- lane-state.json

The row schema must separate first-party product claim from capability proof and use controlled statuses: observed, partially_observed, not_found, gated, contradicted, legacy, shutdown, unknown, and not_applicable. FlutterFlow and the mobile-builder cluster require explicit treatment.

### P7-INDUSTRY-JOINS

Make the industry-specific join defensible for all 17 industries. Use the five discovery buckets in the Luna industry plan, preserve underfilled buckets, and connect each selected repository to the industry’s atom, workflow, source-of-truth, state, terminal owner, exception, and falsifier.

Required outputs:

- industry-repository-joins.jsonl
- industry-coverage-report.md
- underfilled-bucket-ledger.jsonl
- lane-state.json

No generic repository can count for an industry without a defensible niche join. Healthcare, legal, mortgage, recruiting, finance, and other regulated or consequential surfaces remain administrative/read-only research wedges only.

### P7-RIGHTS-EVAL-READINESS

Close the independent gates that determine whether evidence can ever become a reusable block input. Review license/notice/provenance/SBOM status, immutable source identity, rights boundaries, synthetic evaluation readiness, authority/security concerns, runtime/rollback unknowns, cost visibility, and falsifiers.

Required outputs:

- rights-provenance-ledger.jsonl
- evaluation-readiness-ledger.jsonl
- rights-eval-report.md
- lane-state.json

This lane must record unknown or not-run rather than infer clearance. It must not execute code, run dependency scans, access private systems, or admit a block.

## Evidence contract

Every record has an artifact ID, lane ID, schema version, observed date, parent goal status, research boundary, and source references. Every external source is classified by access and evidence strength. Each claim has a limitation and a falsifier.

Minimum source receipt fields:

- source_id and source_kind
- canonical URL or API endpoint
- repository/product identity
- path, endpoint, or query
- observed/retrieved date
- access status and HTTP result when known
- content or artifact digest when available
- evidence class
- rights linkage
- correction owner or unresolved state

Minimum negative-path fields:

- status
- why it is unknown, gated, absent, or contradicted
- smallest next read-only gate
- stop/kill condition
- no-admission boundary

## Dispatch and wave rules

- Dispatch all five lanes with non-overlapping output paths.
- Each lane reports its own task count, row count, source count, exact coverage, blockers, and callback status.
- Workers may use first-party web and public GitHub metadata, but must preserve query/date/rate-limit evidence and may not fabricate or pad.
- Workers may not clone, copy, execute, build, deploy, benchmark, scan, log in, use client data, or mutate existing research artifacts.
- Use bounded tranches. A tranche is accepted only after post-write structural, identity, link, rights-boundary, and count smoke.
- The coordinator remains unpromoted while any lane is pending, any count is stale, or any source/evidence/rights gap is concealed.
- The parent research goal remains active after every tranche.

## Promotion gate

The Phase-7 verifier must consume every lane receipt and independently recompute:

- 17 industries;
- 10 dimensions;
- 100 distinct selected repositories per industry;
- 1,700 selected pairs;
- 17,000 dimension records with no missing pair×dimension keys;
- competitor surface count and final feature-key count;
- source/date/evidence/limitation/falsifier completeness;
- identity and duplicate edges;
- explicit rights/SBOM/evaluation unknowns;
- all research-only boundary flags.

Until those checks pass, the correct state is phase_active_parent_goal_active. No block admission or implementation authorization follows from this research phase.
