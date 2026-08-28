# P03 first-principles synthesis — capability supply graph

Lane: ACTIONIST-S1-L2-SUPPLY · Run: 2026-08-27-sprint-1-fable · Observed: 2026-08-27

## Objectives

1. Convert heterogeneous software supply (OSS, commercial, local estate) into a decision-grade shelf: which capability, from which source, in which reuse shape, at what adaptation cost.
2. Make scarcity visible: the shelf must say where supply is thin or absent, not just what exists.
3. Keep provenance honest: seven distinct lanes, never silently merged.

## Constraints (inherited, binding)

- Research only; no clone/build/execute/admit. Live metadata/LICENSE reads permitted.
- Repositories are source containers (A04); every entry needs decomposition + reuse shape (A05).
- Stars/licence badges are claims to investigate (A22; 29% Phase-8 badge failure rate).
- Quality and adaptation value outrank popularity (operator direction, 26 Aug).
- User lists are a separate provenance lane (dispatch).

## Invariants proposed for P03 outputs

1. A shelf row is (capability_kind, source, reuse_shape) — never a bare repo.
2. Every rights claim carries its evidence artifact (LICENSE body read, not API field).
3. Composite repos appear once per supplied capability with an explicit overlap edge.
4. `commodity/scarce/missing` classification must cite both denominators (OSS + commercial); one-sided scarcity is UNDERDETERMINED.
5. Unresolved corpora (1.3M, 850k/80k) may inform discovery breadth only; no shelf row may depend on them.

## Assumptions this run adds or sharpens

- S1: The 24-kind taxonomy spans ≥95% of the 17-industry demand surface (inferred from archetype+atom join; falsifier below).
- S2: For commodity kinds, source-selection quality (seam clarity, maintenance) differentiates outcomes more than kind coverage (inferred from SISOCRM receipts).
- S3: The scarce set (case/workflow spine, portal, clean e-sign, field ops, permissive LMS) is where Actionist's build-vs-borrow decision creates durable advantage (inferred from Phase-8 inversion finding).

## Contradictions held open

- C1: "728 connectors"-class headline counts vs measured OAuth-ready counts (113-class corrections; connector research: 1,302 API-key vs 103 OAuth2 in OpenConnector). Both true at different definitions; shelf quotes the narrow number.
- C2: The 500-corpus's A-band ranks eval/provenance tooling above app capabilities — correct for its "inspection value" metric, wrong for P03's adaptation-value metric. Held as two rankings, not reconciled.
- C3: 21st stores: "7,949 components" vs 3,506 source-bearing. Rate-limited acquisition, not availability; both preserved.

## Falsifiers

- F1 (kills S1): a sampled industry workflow requiring a capability outside the 24 kinds that is not custom-delta by nature.
- F2 (kills S3): a permissive, maintained, domain-general case/workflow spine or portal kit surfacing in the s1l2_oss_survey — would move those kinds from scarce to commodity and weaken the build case.
- F3 (kills the shelf method): if top-10 dossier repos, on deep read, decompose into capabilities that don't match their assigned kinds (taxonomy failure).
- F4 (kills commodity claims): licence-body reads flipping ≥20% of "permissive" commodity rows to source-available/copyleft, as happened in Phase 8.

## Unresolved questions (carried to decision ledger)

- Q1: authoritative interface for 1.3M/850k corpora (A20/A21) — subagent probe pending.
- Q2: what measurable evidence predicts adaptation cost better than metadata (P03 cannot answer without the pilot; flagged for P04/P12 read-only consumers).
- Q3: whether commercial embed lanes (per-end-user pricing) are economically compatible with Actionist resale — needs client-economics input outside this lane.

## Contracts and experiments defined, not implemented

- CuratedCapability record: {kind, source_ref, provenance_lane, reuse_shape, rights_class+evidence, quality_signals, adaptation_risks, industry_fit[], overlap_edges[], disposition, next_gate}.
- Experiment E1: three-source bake-off for ONE scarce kind (case/workflow): adapt-copyleft-as-service vs extract-permissive-partial vs build-delta; measures adaptation hours by category. Decision gate: pick the pilot spine.
- Experiment E2: licence-body audit of the full top-100 (extends the Phase-8 method from 17 to 100 rows). Gate: any shelf promotion.
