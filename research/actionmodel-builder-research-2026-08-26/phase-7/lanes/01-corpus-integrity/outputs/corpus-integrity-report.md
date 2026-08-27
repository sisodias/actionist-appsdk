# Phase 7 corpus-integrity report

Lane: `P7-CORPUS-INTEGRITY`  
Observed: `2026-08-27`  
Mode: research-only; parent goal active; no target completion claim.

## Outcome

The identity layer is closed for the current inputs: **500 canonical registry identities** (284 baseline + 216 expansion-only), **216 matrix-aligned identities**, and **284 registry-only identities**. The current closure queue contains **270 complete pairs** and **3076 partial pairs** across 17 industries. The target ledger contains **270 evidence-only selected pairs** and **1430 explicit unfilled target deficits**, preserving the measured **1,430 complete-pair gap**. No repository is fabricated or padded into a deficit slot.

`selected_for_evidence_only` means that a queue row has all ten observed dimension records. It is not a rights decision, capability proof, runtime proof, implementation authorization, or admission.

## Inputs and method

Read in full: the Phase-7 program/state, coverage-gap audit, closure queue and manifest, 284-row baseline GitHub register, 500-row expansion GitHub register, merged matrix and wave matrix inputs, and the 117-record platform register. The build uses only those local public-metadata artifacts; it performs no login, network mutation, clone, source copy, source execution, build, deploy, benchmark, scan, or admission.

Canonical identity is `lowercase owner/name` plus a normalized `https://github.com/owner/name` URL. Original URL casing, display owner/name, source lanes, dispositions, evidence URLs, and observation dates remain in the node records. Selection order is deterministic lexicographic canonical key within each industry. Complete rows are selected for evidence reference only; each missing target position is represented with `repository: null` and a stop condition.

The 284 baseline identities match expansion exactly on owner, name, URL, disposition, license, source lane, and vertical relevance. The 216 expansion-only identities are exactly the current matrix repository universe; the merged matrix has no matrix-only identity. Wave files overlap the merged matrix and are not added as extra identities.

## Measured counts

| Measure | Count |
|---|---:|
| Baseline register rows / unique identities | 284 / 284 |
| Expansion register rows / unique identities | 500 / 500 |
| Union canonical identities | 500 |
| Current matrix canonical identities | 216 |
| Closure queue rows | 3346 |
| Complete all-ten-dimensional pairs | 270 |
| Partial pairs | 3076 |
| Required complete pairs | 1,700 |
| Preserved complete-pair deficit | 1,430 |
| Selection ledger rows | 1700 (270 selected + 1,430 deficits) |
| Identity nodes / relationship edges | 500 / 504 |
| Platform register records read but not joined into repository identity | 117 |

Unique expansion disposition counts (preserved, not cleared): `candidate=231`, `hold=237`, `reference=21`, `reject=10`, `unknown=1`.

## Per-industry deterministic selection and deficit queue

Each industry receives exactly 100 target positions in the selection ledger. Existing complete pairs are sorted by canonical owner/name; remaining positions are explicit deficits with no repository assignment.

| Industry | Current pairs | Complete selected | Partial candidates | Unfilled deficit |
|---|---:|---:|---:|---:|
| accounting_firms | 201 | 14 | 187 | 86 |
| construction | 195 | 15 | 180 | 85 |
| course_creators | 201 | 19 | 182 | 81 |
| ecommerce | 194 | 18 | 176 | 82 |
| education_training | 197 | 17 | 180 | 83 |
| healthcare_medical_practices | 194 | 13 | 181 | 87 |
| hospitality | 196 | 13 | 183 | 87 |
| insurance_agencies | 198 | 14 | 184 | 86 |
| it_services_msps | 194 | 14 | 180 | 86 |
| law_firms | 199 | 16 | 183 | 84 |
| logistics_freight | 191 | 19 | 172 | 81 |
| marketing_social_media_agencies | 199 | 13 | 186 | 87 |
| mortgage_brokers | 196 | 12 | 184 | 88 |
| property_management | 201 | 16 | 185 | 84 |
| real_estate | 202 | 15 | 187 | 85 |
| recruiting_staffing | 193 | 22 | 171 | 78 |
| saas | 195 | 20 | 175 | 80 |

The partial queue remains the authoritative source for future dimension work; this lane does not silently promote a partial row. Its exact per-row missing dimensions remain in `phase-7/outputs/closure-queue.jsonl`, whose digest is recorded below.

## Identity relationship classification

- Exact baseline→expansion same-canonical observation edges: `284` (284).
- Expansion→merged-matrix alignment edges: `216` (216).
- Direct former-name/rebrand edges: `3` (3): Figma Tokens → Tokens Studio for Figma, Origin UI → coss.com/ui, and Vebra Alto → Alto.
- Direct mirror claim edges: `1` (1), with unresolved upstream identity; no source was copied or inspected.
- Fork status is not inferred from a generic GitHub `forks` count. No GitHub fork-parent metadata was present in the local register; fork relationship remains unknown unless a direct relationship receipt is present. The CodeSandbox description’s invitation to fork examples is retained as a non-parent signal.
- Alias/name signals are retained as unresolved where present (JayeX CLI versus `jx`; a `package_aliases` path in CycloneDX). They are not promoted to repository alias edges without a target identity.

## Source and rights limits

Every selection carries closure source URLs, observed dates, evidence-class counts, dimensions present/missing, limitation, and falsifier/next gate. Registry dispositions and license fields remain informational. `hold`, `unknown`, `reject`, `reference`, and `candidate` are not converted into clearance or reuse permission. Source rights, notices, contributors, SBOM, runtime, capability, maintenance, support, rollback, and admission remain separate unresolved gates.

A matrix-aligned identity means only that its canonical URL appears in the current matrix. It does not prove that every industry pair is complete; current pair counts and the 1,430 deficit are preserved explicitly.

## Input digests

The lane state records SHA-256 digests for the program, audit, closure manifest/queue, baseline/expansion registers, platform register, merged matrix, and every wave matrix input. These are provenance anchors, not content or rights attestations.

## Boundary

All output records carry `research_only=true`, `execution_status=UNEXECUTED`, `admission_status=NOT_ADMITTED`, `implementation_authorized=false`, `admitted_blocks=0`, and `parent_goal_status=active`. No vendor login, credentials, client/private data, cloning, source copying, execution, build, deployment, benchmark, scan, implementation, or admission occurred.

`CORPUS_INTEGRITY_POSTWRITE_SMOKE_PASS`

This report must not be read as a claim that the 17×100 complete-repository target is met. The next read-only gate is repository-specific dimension completion for the explicit deficit queue, followed by independent rights/evaluation/runtime gates.

## Callback receipt

The following exact one-line receipt was sent to the freshly resolved CENA pane with Herdr. The pane readback after the Enter-only retry confirmed submission while CENA remained actively verifying other Phase-7 lanes:

```text
[from: RCH-P7-CORPUS-INTEGRITY] @CENA: DONE lane receipt only — wrote phase-7/lanes/01-corpus-integrity/outputs/{repository-selection-ledger.jsonl,repository-identity-edges.jsonl,corpus-integrity-report.md,lane-state.json,post-write-smoke.py}; 1,700 ledger rows (270 selected evidence-only + 1,430 explicit deficits), 500 identity nodes/504 edges, 17 industries, 284 baseline + 500 expansion reconciled, 216 matrix-aligned; hashes report=7cff1c0b50606503efcb546fd3f9904d0e3dc656922e164c00d49bf604ecc5d1 ledger=136c61ae8974f5462860d74e775c4af3eff82021fa25dd9acd70b93df230183c edges=d4e47edb715aaff94e683330203a81d502f7059b3db9d83ea3dd24dc70e9f8eb; smoke PASS structure/identity/source/gap/boundary, holds/unknowns preserved, blockers=0; target not complete, UNEXECUTED/NOT_ADMITTED, parent active.
```

`CORPUS_INTEGRITY_CALLBACK_RECEIPT_VERIFIED`
