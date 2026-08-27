# GitHub Candidate Priority — Phase 3

- Lane: `RCH-GITHUB-CANDIDATE-PRIORITY`
- Generated: `2026-08-26T16:47:56.326Z`
- Mode: research only; priority queue for future clean-room inspection.
- Boundary: no repository clone, arbitrary source open, code copying, execution, build, deployment, external write, credentials, client data, or admission.

## Immutable inputs

| Input | Absolute path | Rows | SHA-256 |
|---|---|---:|---|
| Phase-2 GitHub expansion | `/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/Actionist-AppSDK/SISO/research/actionmodel-builder-research-2026-08-26/expansion/outputs/github-expansion.jsonl` | 500 | `25fc2201c1f1f158993724f7f6abd1ddae0b1d5c82be8c8f60b9be2616959df8` |
| Phase-2 repository matrix | `/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/Actionist-AppSDK/SISO/research/actionmodel-builder-research-2026-08-26/expansion/outputs/repo-matrix-observations.jsonl` | 17000 | `1d4f56da0d54be7e8847ded834261a7faff3bb131b9c76ace9d5c66863b9e107` |

The matrix input contains 750 observed/indexed slots and 16250 explicit unobserved slots across 17 industries × 10 dimensions = 170 cells, exactly 100 slots per cell.

## Output counts

| Metric | Count |
|---|---:|
| Unique candidate records | 500 |
| Cell-priority records | 170 |
| JSONL records including input manifest | 671 |
| Unique owner/name identities | 500 |
| Candidate priority bands A / B / C | 117 / 195 / 188 |
| Cells with indexed matrix evidence | 150 |
| Cells matrix-unobserved | 20 |

## Deterministic ranking

Each candidate has one unique identity record and receives an integer score from 0–100: evidence strength (README + top-level metadata versus metadata-only), capability tags, observed matrix coverage, maintenance/adoption metadata, license signal, disposition, and a rights-risk penalty. Ties resolve by owner/name. The score ranks inspection value; it is not a safety, license, quality, or capability verdict.

Each candidate retains its source lane/query/date, first-party evidence URLs, matrix slot joins, evidence class, confidence, license/rights unknowns, maintenance metadata, SBOM/dependency unknowns, disposition, reference-only rationale, falsifier, and next gate.

## Highest-priority queue

| Rank | ID | Repository | Score | Band | Source lane | License signal | Matrix slots |
|---:|---|---|---:|:---:|---|---|---:|
| 1 | GCP-001 | boxyhq/saas-starter-kit | 91 | A | builder | declared_permissive | 9 |
| 2 | GCP-002 | aws-solutions/generative-ai-application-builder-on-aws | 88 | A | builder | declared_permissive | 0 |
| 3 | GCP-003 | comet-ml/opik | 88 | A | eval | declared_permissive | 0 |
| 4 | GCP-004 | get-convex/chef | 88 | A | builder | declared_permissive | 0 |
| 5 | GCP-005 | imbhargav5/nextbase-nextjs-supabase-starter | 88 | A | scaffold | declared_permissive | 0 |
| 6 | GCP-006 | makerkit/nextjs-saas-starter-kit-lite | 88 | A | scaffold | declared_permissive | 0 |
| 7 | GCP-007 | mlflow/mlflow | 88 | A | eval | declared_permissive | 0 |
| 8 | GCP-008 | OpenAPITools/openapi-generator | 88 | A | data | declared_permissive | 0 |
| 9 | GCP-009 | ortelius/ortelius | 88 | A | provenance | declared_permissive | 0 |
| 10 | GCP-010 | perplexityai/bumblebee | 88 | A | provenance | declared_permissive | 0 |
| 11 | GCP-011 | raindrop-ai/workshop | 88 | A | eval | declared_permissive | 0 |
| 12 | GCP-012 | tastyeffectco/sandboxd | 88 | A | builder | declared_permissive | 0 |
| 13 | GCP-013 | AgentEvalHQ/AgentEval | 87 | A | eval | declared_permissive | 0 |
| 14 | GCP-014 | AndyY-Q/launchkit-ai | 87 | A | builder | declared_permissive | 0 |
| 15 | GCP-015 | claw-bench/claw-bench | 87 | A | eval | declared_permissive | 0 |
| 16 | GCP-016 | CycloneDX/cyclonedx-dotnet | 87 | A | provenance | declared_permissive | 0 |
| 17 | GCP-017 | jsonresume/jsonresume.org | 87 | A | registry | declared_permissive | 0 |
| 18 | GCP-018 | yezz123/ai-template | 87 | A | scaffold | declared_permissive | 0 |
| 19 | GCP-019 | amanraj74/hirepilot | 86 | A | data | declared_permissive | 9 |
| 20 | GCP-020 | aozyildirim/Agena | 86 | A | scaffold | declared_permissive | 0 |
| 21 | GCP-021 | FreakStudioCN/micropythonos-ai-app-builder | 86 | A | builder | declared_permissive | 0 |
| 22 | GCP-022 | joylarkin/AI-Coding-Landscape | 86 | A | builder | declared_permissive | 0 |
| 23 | GCP-023 | langwatch/langwatch | 86 | A | eval | declared_permissive | 0 |
| 24 | GCP-024 | llm-as-a-verifier/llm-as-a-verifier | 86 | A | eval | declared_permissive | 0 |
| 25 | GCP-025 | najeed/ai-agent-eval-harness | 86 | A | eval | declared_permissive | 0 |

The complete JSONL register contains the full 500-candidate queue plus one cell-priority record for every industry × dimension cell. Cell records reference candidate IDs and never repeat repository identity claims.

## Coverage and evidence limits

Every cell has five deterministic candidate IDs. 20 cells have no observed Phase-2 matrix row and are explicitly marked `matrix_unobserved`; their queues are expansion-metadata fallbacks, not industry capability claims.

Matrix-unobserved cells: Accounting Firms × Integration, API, browser, and tool surface; Accounting Firms × Agent authority, approval, and side effects; Education & Training × Data entities, schema, and source of truth; Healthcare & Medical Practices × Verification, eval, and recovery evidence; IT Services & MSPs × Verification, eval, and recovery evidence; Law Firms × Verification, eval, and recovery evidence; Logistics & Freight × Verification, eval, and recovery evidence; Marketing & Social Media Agencies × Workflow behavior and outcome; Marketing & Social Media Agencies × Data entities, schema, and source of truth; Marketing & Social Media Agencies × Integration, API, browser, and tool surface; Marketing & Social Media Agencies × Agent authority, approval, and side effects; Marketing & Social Media Agencies × Verification, eval, and recovery evidence; Marketing & Social Media Agencies × License, provenance, SBOM, and attribution; Marketing & Social Media Agencies × Sandbox, tenancy, deployment, and rollback; Mortgage Brokers × Integration, API, browser, and tool surface; Mortgage Brokers × UI, registry, scaffold, and token assembly; Property Management × Verification, eval, and recovery evidence; Real Estate × Verification, eval, and recovery evidence; Recruiting & Staffing × Verification, eval, and recovery evidence; SaaS × Verification, eval, and recovery evidence.

License/rights fields preserve the Phase-2 state, including no-declared-license and other unknowns. No rights clearance is inferred. Every candidate records `sbom_dependency.status=unknown_not_scanned`; lockfile/manifest names are signals only, not a dependency or security review. Maintenance fields are repository metadata only and do not prove health, support, or production readiness.

## Future clean-room gate

A ranked candidate remains reference-only until an authorized gate pins the commit/tag, reviews LICENSE/NOTICE and provenance, inspects only an allowlisted metadata/dependency surface, generates an SBOM, evaluates the candidate-specific falsifier, and records attribution, rollback, and stop evidence. The future gate must stop before code copying, execution, build, deployment, extraction, or admission if rights, provenance, dependency, credential, or falsifier evidence fails.

## Verification

Initial post-write schema/count/boundary smoke: PASS. Verified 671 JSONL records (500 unique candidates, 170 cell-priority records, one input manifest), 500 unique owner/name identities, contiguous deterministic ranks, exact 17×10 cell coverage with 100 matrix slots per cell, candidate-ID joins, absolute input paths, rights/SBOM unknown preservation, no unsafe action claims, and immutable Phase-2 input hashes.

## Fresh CENA callback receipt

- Status: `sent_and_verified`.
- Target: freshly resolved CENA coordinator pane through `/Users/shaansisodia/.local/bin/herdr pane list`; current pane `w659e02f80e5bb1-1` was read before delivery.
- Message: `[from: RCH-GITHUB-CANDIDATE-PRIORITY] @CENA: DONE Phase 3 candidate-priority lane. Wrote github-candidate-priority.md and github-candidate-priority.jsonl: 500 unique candidates, 170 cell queues, 671 JSONL records; exact immutable inputs 500/17,000, 17x10 cells at 100 slots. Schema/count/boundary smoke PASS; rights/SBOM remain unknown, reference-only, no clone/source/execute/build/deploy/admit. State lane updated only; 0 blockers.`
- Herdr verification: initial send remained queued; one Enter-only retry submitted it, and the receipt became visible in the CENA pane.
