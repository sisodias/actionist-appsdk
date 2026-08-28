# ACTIONIST three-candidate contract-and-solver pilot

Date: 2026-08-28
Agent: `ACTIONIST-THREE-CANDIDATE-SOLVER`
Coordinator: CENA

## Objective

Test whether the Sprint 2 seven-record module family and deterministic 22-rule composer can describe and evaluate three real heterogeneous candidates—AFFiNE, Teable and Chatwoot—without donor execution or invented compatibility.

This is the automatically authorized contract-only pilot recorded by the Program Driver. It may read existing evidence, encode records, derive surgery sets and run a deterministic local solver. It may not clone or execute donor source, stage a binding, deploy, admit, use client data, or change shared block/knowledge/site artifacts.

## Read first

1. `AGENTS.md`
2. `research/workstreams/2026-08-28-program-driver/operator-decisions.md`
3. `research/workstreams/2026-08-28-program-driver/critical-path.md`
4. `research/workstreams/2026-08-27-sprint-2/convergence/S2-CONVERGENCE.md`
5. `research/workstreams/2026-08-27-sprint-2/convergence/canonical-seam-decisions.json`
6. `research/workstreams/p04-repo-to-module-framework/runs/2026-08-27-sprint-2-opus/module-contract-family.json`
7. `research/workstreams/p04-repo-to-module-framework/runs/2026-08-27-sprint-2-opus/normalization-surgery-taxonomy.jsonl`
8. `research/workstreams/p12-deterministic-composer/runs/2026-08-27-sprint-2-opus/deterministic-composer.md`
9. `research/workstreams/p12-deterministic-composer/runs/2026-08-27-sprint-2-opus/compatibility-and-authority-rules.json`
10. `research/workstreams/p12-deterministic-composer/runs/2026-08-27-sprint-2-opus/assembly-plan.schema.json`
11. `blocks/affine-workspace/**`
12. `research/workstreams/2026-08-28-affine-block/run/COMPLETION-PACKET.md`
13. `blocks/teable-data-grid/**`
14. `research/workstreams/2026-08-28-teable-block/runs/2026-08-28-teable-block-v0.1/run-receipt.json`
15. `knowledge/capability-shelf/source-registry.jsonl` and exact local Chatwoot/Bykonz/SISOCRM precedents it links.

Read historical evidence as evidence; do not rewrite it. Treat AFFiNE and Teable as verified prototype packages with holds, not qualified/admitted blocks. Treat Chatwoot as a candidate until its record set is complete.

## Ownership

Write only inside:

- `research/workstreams/2026-08-28-three-candidate-solver-pilot/**`

`DISPATCH.md` is coordinator-owned and read-only. All other project paths are read-only.

## Required work

1. Normalize the AFFiNE and Teable seven-record packages into one comparison projection without dropping holds or changing their source records.
2. Reconstruct a seven-record Chatwoot candidate set from exact existing local/runtime/source receipts. Missing evidence stays `UNDERDETERMINED`; do not infer a pass from repository reputation.
3. Apply the canonical seam decisions and all 22 composer rules in their specified order. If 22 textual rules reduce to fewer distinct constraints, preserve both counts and their mapping.
4. Evaluate the named marketing/social-agency client approval and asset-delivery workflow.
5. Run the exact solver at least three times from the same inputs and prove deterministic output digests.
6. Report the first failing/underdetermined rule for each candidate and for the combined assembly. Never relax a rule; `relaxations_applied` must remain zero.
7. Derive normalization surgeries by taxonomy class and ownership, but do not estimate unsupported hours or percentages.
8. Derive the minimum concrete Host Contract delta exposed by these three candidates, especially identity/session, tenancy, navigation/settings, data/migration ownership, files, events, observability and rollback objects.
9. Separate contract defects from source-evidence gaps, model uncertainty and human authority decisions.

## Deliverables

1. `candidate-set.json`
2. `contracts/affine.json`, `contracts/teable.json`, `contracts/chatwoot.json`
3. `rule-import.json` mapping all 22 ordered rules to distinct constraints and source paths
4. `solver.mjs`
5. `solver-results.json` with three-run digest parity
6. `missing-field-ledger.jsonl`
7. `normalization-surgeries.jsonl`
8. `host-contract-delta.json`
9. `pilot-report.md`
10. `lane-state.json`
11. `verify.mjs`

## Success / verdict rules

- A candidate or composition verdict is exactly `FEASIBLE`, `INFEASIBLE` or `UNDERDETERMINED`.
- `UNDERDETERMINED` names the missing contract field and owning domain; it is not model confidence.
- The first failing rule owns the next gate.
- Rule order is load-bearing and recorded.
- Authority disagreement resolves to the stricter/port-level declaration; unresolved disagreement is `UNDERDETERMINED`.
- Evidence and rights are min-gated; missing families cannot be raised by reporting fewer families.
- Zero admission scopes remain zero.
- A successful deterministic run does not constitute qualification, staged binding or release.

## Verify

`node research/workstreams/2026-08-28-three-candidate-solver-pilot/verify.mjs` must check required artifacts, JSON/JSONL validity, seven-record coverage per candidate, 22-rule import/order, no orphan constraints, three-run digest equality, zero relaxations, verdict vocabulary, evidence-path existence, hold preservation, no admission/deployment claims and owned-path boundary.

## Hard stop

Stop before any donor clone/source execution, runtime start, network mutation, package installation outside disposable local outputs, staged binding, client data, deployment, admission, release, repository mutation or cross-lane write.

## Callback

Finishing silently is failure. Write and verify all artifacts first. Then re-resolve CENA in named Herdr session `herdr-2`, verify the pane by reading recent content, send a callback of six lines or fewer, read it back after two seconds and press Enter only if queued.

Return exactly:

```text
status: done | blocked | failed
result: one sentence
evidence: exact artifact paths and headline verdicts
verify: exact command and exit code
artifact: run directory
```

