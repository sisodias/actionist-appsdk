# GitHub corpus report — Action Model Builder Research

Run: actionmodel-builder-research-2026-08-26  
Lane: RCH-GITHUB  
Observed: 2026-08-26  
Mode: research-only; no repository was cloned, built, executed, copied, or admitted.

## Verdict

This pass emits **284 content-inspected and classified repository records** in github-corpus.jsonl. The existing Action Model sweep remains a discovery baseline: its 389 merged records were metadata-only at the merged-file level, so this output fetches first-party repository API metadata, README content, and top-level contents for a fresh, deduplicated review set.

A candidate disposition means worth a separate pinned-source/adaptation gate; it does not mean license-cleared, buildable, safe, extracted, or admitted.

## Coverage and counts

| Metric | Count |
| Records emitted | 284 |
| Unique canonical repositories | 284 |
| Duplicate records in emitted JSONL | 0 |
| Overlap with existing 389-record sweep | 55 |
| Search result duplicates removed before inspection | 0 |
| Existing merged sweep baseline | 389 |

### Cluster coverage

| Cluster | Inspected records |
| builder | 38 |
| scaffold | 38 |
| registry | 32 |
| ast | 32 |
| data | 34 |
| sandbox | 30 |
| browser | 18 |
| eval | 21 |
| provenance | 41 |

### Dispositions

| Disposition | Count | Meaning |
| candidate | 156 | Relevant, content-backed, permissive declaration; separate admission gate required |
| reference | 15 | Useful pattern/history, but not a current direct candidate |
| hold | 108 | Relevant but rights, security, provenance, or other gate is unresolved |
| reject | 4 | Fetched content did not support relevance to the selected lane |
| unknown | 1 | Insufficient first-party content/API evidence |

### License states

| License state | Count |
| no_declared_license | 63 |
| declared_permissive | 198 |
| nonstandard_or_other | 16 |
| copyleft_or_reciprocal | 7 |

Unknown/no-license and other-license records are intentionally retained. They are not silently treated as permissive. The repository API license field is a discovery signal; it is not a legal clearance or dependency/asset scan.

## Method and evidence quality

1. Read the local program contract, current corpus lane state, SWEEP-MERGED.json, and Block Framework before searching.
2. The initial pass ran 45 exact GitHub repository queries across the nine required clusters. After GitHub search rate limiting, this repair pass preserved the prior valid content-backed rows and fetched the explicit first-party browser/eval/provenance seeds below through repository API, README, and contents endpoints. The exact query and command remain recorded on every seed row.
3. Canonicalized repository identity to lowercase owner/name, merged repeated hits, and selected balanced cluster quotas before content inspection.
4. For every selected repository, fetched the first-party repos/{owner}/{name} API object, the raw README endpoint when available, and the top-level contents endpoint. The JSONL stores URLs, observed headings, bounded content signal, top-level paths, license state, and activity data.
5. Tagged capability signals from fetched README/description/contents text and mapped them to verticals and reusable atoms.
6. Assigned dispositions with an explicit reason. Browser/sandbox candidates are held because permission, isolation, secret-egress, and rollback gates are not proven by a README.

Evidence class: E for direct fetched repository/API/README/contents evidence; I only for the bounded atom/vertical mapping; U where the API or content was unavailable. No search snippet is used as sole review evidence.

## Query manifest

| Cluster | Exact query | Limit | Command |
| builder | ai app builder | 20 | gh search repos "ai app builder" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| builder | llm app generator | 20 | gh search repos "llm app generator" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| builder | prompt to app | 20 | gh search repos "prompt to app" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| builder | lovable clone | 20 | gh search repos "lovable clone" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| builder | internal tool builder | 20 | gh search repos "internal tool builder" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| scaffold | nextjs saas starter | 20 | gh search repos "nextjs saas starter" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| scaffold | admin dashboard nextjs | 20 | gh search repos "admin dashboard nextjs" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| scaffold | multi tenant saas | 20 | gh search repos "multi tenant saas" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| scaffold | supabase starter | 20 | gh search repos "supabase starter" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| scaffold | crud generator | 20 | gh search repos "crud generator" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| registry | component registry | 20 | gh search repos "component registry" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| registry | shadcn registry | 20 | gh search repos "shadcn registry" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| registry | storybook component library | 20 | gh search repos "storybook component library" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| registry | design system tokens | 20 | gh search repos "design system tokens" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| registry | figma tokens | 20 | gh search repos "figma tokens" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| ast | ast codemod | 20 | gh search repos "ast codemod" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| ast | ast transformation | 20 | gh search repos "ast transformation" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| ast | jscodeshift codemod | 20 | gh search repos "jscodeshift codemod" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| ast | ts morph | 20 | gh search repos "ts morph" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| ast | babel plugin transform | 20 | gh search repos "babel plugin transform" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| data | postgres schema introspection | 20 | gh search repos "postgres schema introspection" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| data | database to api | 20 | gh search repos "database to api" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| data | openapi generator | 20 | gh search repos "openapi generator" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| data | prisma introspection | 20 | gh search repos "prisma introspection" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| data | sql migration tool | 20 | gh search repos "sql migration tool" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| sandbox | code sandbox | 20 | gh search repos "code sandbox" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| sandbox | e2b sandbox | 20 | gh search repos "e2b sandbox" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| sandbox | preview environment | 20 | gh search repos "preview environment" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| sandbox | static site deploy | 20 | gh search repos "static site deploy" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| sandbox | container preview | 20 | gh search repos "container preview" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| browser | browser use agent | 20 | gh search repos "browser use agent" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| browser | computer use agent | 20 | gh search repos "computer use agent" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| browser | playwright agent | 20 | gh search repos "playwright agent" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| browser | browser automation llm | 20 | gh search repos "browser automation llm" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| browser | workflow automation agent | 20 | gh search repos "workflow automation agent" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| eval | llm eval | 20 | gh search repos "llm eval" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| eval | agent eval | 20 | gh search repos "agent eval" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| eval | browser agent benchmark | 20 | gh search repos "browser agent benchmark" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| eval | prompt evaluation | 20 | gh search repos "prompt evaluation" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| eval | llm tracing | 20 | gh search repos "llm tracing" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| provenance | license scanner | 20 | gh search repos "license scanner" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| provenance | software bill of materials | 20 | gh search repos "software bill of materials" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| provenance | software supply chain | 20 | gh search repos "software supply chain" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| provenance | in-toto | 20 | gh search repos "in-toto" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |
| provenance | dependency provenance | 20 | gh search repos "dependency provenance" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url |

## Top research candidates

These are research candidates only and need pinned commit, full source/dependency/asset license review, adaptation log, stack/data/token contract, build, browser/screenshot proof where applicable, named owner, and rollback before any admission decision.

| Repository | Cluster | Stars | License | Observed capability signal |
| aquasecurity/trivy (https://github.com/aquasecurity/trivy) | provenance | 37612 | Apache-2.0 | <div align="center"> <img src="docs/imgs/logo.png" width="200"> |
| mlflow/mlflow (https://github.com/mlflow/mlflow) | eval | 27683 | Apache-2.0 | <h1 align="center" style="border-bottom: none"> <a href="https://mlflow.org/"> |
| OpenAPITools/openapi-generator (https://github.com/OpenAPITools/openapi-generator) | data | 26686 | Apache-2.0 | <h1 align="center">OpenAPI Generator</h1> <div align="center"> |
| comet-ml/opik (https://github.com/comet-ml/opik) | eval | 21610 | Apache-2.0 | <div align="center"><b><a href="README.md">English</a> \| <a href="readme_CN.md">简体中文</a> \| <a href="readme_ES.md">Español</a> \| <a href="readme_FR.md">Français</a> \| <a href="readme_DE.md">Deutsch</a></b></div> <h1 align="center" style="border-bottom: none"> |
| confident-ai/deepeval (https://github.com/confident-ai/deepeval) | eval | 17868 | Apache-2.0 | <p align="center"> <picture> |
| anchore/syft (https://github.com/anchore/syft) | provenance | 9459 | Apache-2.0 | <p align="center"> <img src="https://user-images.githubusercontent.com/5199289/136844524-1527b09f-c5cb-4aa9-be54-5aa92a6086c1.png" width="271" alt="Cute pink owl syft logo"> |
| dsherret/ts-morph (https://github.com/dsherret/ts-morph) | ast | 6163 | MIT | <img src="docs/assets/logo.svg" alt="ts-morph" height="58" /> [![CI](https://github.com/dsherret/ts-morph/workflows/CI/badge.svg)](https://github.com/dsherret/ts-morph/actions?query=workflow%3ACI) |
| perplexityai/bumblebee (https://github.com/perplexityai/bumblebee) | provenance | 4972 | Apache-2.0 | bumblebee Bumblebee is a read-only inventory collector for package, extension, |
| get-convex/chef (https://github.com/get-convex/chef) | builder | 4602 | Apache-2.0 | <p align="center"> <picture> |
| DependencyTrack/dependency-track (https://github.com/DependencyTrack/dependency-track) | provenance | 4141 | Apache-2.0 | <div align="center"> OWASP Dependency-Track |
| InfyOmLabs/laravel-generator (https://github.com/InfyOmLabs/laravel-generator) | scaffold | 3823 | MIT | <h1 align="center"><img src="https://assets.infyom.com/open-source/infyom-logo.png" alt="InfyOm"></h1> InfyOm Laravel Generator |
| langwatch/langwatch (https://github.com/langwatch/langwatch) | eval | 3511 | Apache-2.0 | <img width="1212" height="395" alt="012d1688-24ae-4759-ae70-5f8f81a13c0e" src="https://github.com/user-attachments/assets/27b6e50e-efde-41cf-9f7c-94b829b25a8c" /> <h3 align="center"> |
| juicycleff/ultimate-backend (https://github.com/juicycleff/ultimate-backend) | scaffold | 2903 | MIT | <h1 align="center"> ULTIMATE BACKEND |
| llm-as-a-verifier/llm-as-a-verifier (https://github.com/llm-as-a-verifier/llm-as-a-verifier) | eval | 2874 | MIT | <!-- markdownlint-disable MD001 MD041 --> <p align="center"> |
| ncdai/chanhdai.com (https://github.com/ncdai/chanhdai.com) | registry | 2220 | MIT | <!-- # [chanhdai.com](https://chanhdai.com) --> <p> |

## Holds and false positives

### Holds

| Repository | Cluster | License | Reason |
| abhayymishraa/webbuilder (https://github.com/abhayymishraa/webbuilder) | builder | no_declared_license | Relevant capability was observed, but licensing/provenance is not machine-cleared; reference-only until reviewed. |
| adityadeshlahre/elbavol (https://github.com/adityadeshlahre/elbavol) | builder | no_declared_license | Relevant capability was observed, but licensing/provenance is not machine-cleared; reference-only until reviewed. |
| beam-cloud/lovable-clone (https://github.com/beam-cloud/lovable-clone) | builder | no_declared_license | Relevant capability was observed, but licensing/provenance is not machine-cleared; reference-only until reviewed. |
| cyberraf/lovable-clone (https://github.com/cyberraf/lovable-clone) | builder | no_declared_license | Relevant capability was observed, but licensing/provenance is not machine-cleared; reference-only until reviewed. |
| dyad-sh/dyad (https://github.com/dyad-sh/dyad) | builder | NOASSERTION | Relevant capability was observed under NOASSERTION; distribution/adaptation requires a separate rights review. |
| harrybaines/lovable-clone (https://github.com/harrybaines/lovable-clone) | builder | no_declared_license | Relevant capability was observed, but licensing/provenance is not machine-cleared; reference-only until reviewed. |
| Jisap/next15-lovable-clone (https://github.com/Jisap/next15-lovable-clone) | builder | no_declared_license | Relevant capability was observed, but licensing/provenance is not machine-cleared; reference-only until reviewed. |
| mirza9hsn/Lovable-Clone (https://github.com/mirza9hsn/Lovable-Clone) | builder | no_declared_license | Relevant capability was observed, but licensing/provenance is not machine-cleared; reference-only until reviewed. |
| neels22/lovable-clone (https://github.com/neels22/lovable-clone) | builder | no_declared_license | Relevant capability was observed, but licensing/provenance is not machine-cleared; reference-only until reviewed. |
| piyush-eon/ai-app-builder (https://github.com/piyush-eon/ai-app-builder) | builder | no_declared_license | Relevant capability was observed, but licensing/provenance is not machine-cleared; reference-only until reviewed. |
| sa4hnd/vibra-code (https://github.com/sa4hnd/vibra-code) | builder | AGPL-3.0 | Relevant capability was observed under AGPL-3.0; distribution/adaptation requires a separate rights review. |
| sushant1408/lovable-clone (https://github.com/sushant1408/lovable-clone) | builder | no_declared_license | Relevant capability was observed, but licensing/provenance is not machine-cleared; reference-only until reviewed. |
| therajusah/Lovable (https://github.com/therajusah/Lovable) | builder | no_declared_license | Relevant capability was observed, but licensing/provenance is not machine-cleared; reference-only until reviewed. |
| vedantxn/nextly (https://github.com/vedantxn/nextly) | builder | no_declared_license | Relevant capability was observed, but licensing/provenance is not machine-cleared; reference-only until reviewed. |
| Adel-Qusay/Codeigniter-4-CRUD-generator (https://github.com/Adel-Qusay/Codeigniter-4-CRUD-generator) | scaffold | no_declared_license | Relevant capability was observed, but licensing/provenance is not machine-cleared; reference-only until reviewed. |

### False positives / rejects

| Repository | Cluster | Reason |
| Anuj-Kumar-Sharma/distributed-lovable (https://github.com/Anuj-Kumar-Sharma/distributed-lovable) | builder | The builder discovery result has no matching capability signal in the fetched content. |
| Anuj-Kumar-Sharma/my-lovable-svc (https://github.com/Anuj-Kumar-Sharma/my-lovable-svc) | builder | The builder discovery result has no matching capability signal in the fetched content. |
| kehanzhang/lovable-clone (https://github.com/kehanzhang/lovable-clone) | builder | The builder discovery result has no matching capability signal in the fetched content. |
| koolkishan/lovable-clone-youtube-files (https://github.com/koolkishan/lovable-clone-youtube-files) | builder | The builder discovery result has no matching capability signal in the fetched content. |

## Vertical-atom joins and whitespace

The JSONL carries one vertical_atom_relevance object per repository. The main joins observed in this pass are:

| Atom | Primary supporting clusters | What remains unproven |
| scaffold-selection | builder, scaffold | Compatibility against Actionist host and client schema |
| component-registry | registry | Install/recovery contract under the target host |
| typed-transformation | ast | Safe transformations on real harvested boundaries |
| data-introspection | data | Read-only authority, tenant isolation, and normalized Postgres contract |
| isolated-preview | sandbox | Adversarial isolation and rollback receipts |
| browser-operation | browser | Approval, prompt-injection resistance, and side-effect verification |
| verification | eval | End-to-end block evidence rather than tool-level evals |
| license-gate | provenance | File/dependency/asset scan plus human rights decision |

Whitespace/gaps: AST and browser search surfaces were absent or empty in the prior 41-lane sweep, so this pass adds direct queries; evaluation and provenance tools are broad and often infrastructure-oriented rather than builder-specific; repository API license labels do not resolve mixed assets or transitive dependencies; and no record here proves a usable Actionist block.

## Limitations and safety boundary

- GitHub search ranking and repository descriptions are discovery inputs, not adoption or quality proof.
- README/top-level content inspection is stronger than a snippet but weaker than a pinned checkout, source-path review, dependency scan, build, browser smoke, visual baseline, or authenticated behavior test.
- MPL-2.0 is retained as declared permissive for research comparison but still needs distribution-specific review; copyleft, other, unknown, and no-license states are held.
- Recent activity is derived from repository metadata and does not prove maintenance quality, security, or compatibility.
- The corpus intentionally does not copy code or make product-market claims.

## Task-slot completion

| Task | Status | Evidence |
| 1. Define taxonomy/dedupe | complete | Nine cluster labels; canonical owner/name dedupe |
| 2. App builders | complete | Five builder queries; content-backed records |
| 3. Scaffolds/admin/CRUD | complete | Five scaffold queries; content-backed records |
| 4. Registries/design/tokens | complete | Five registry queries; content-backed records |
| 5. AST/codemod | complete | Five AST queries; prior empty lane expanded |
| 6. Data/schema/API | complete | Five data queries |
| 7. Sandbox/preview/deploy | complete | Five sandbox queries |
| 8. Browser/computer-use | complete | Five browser queries; security holds explicit |
| 9. Eval/provenance/supply chain | complete | Five eval plus five provenance queries |
| 10. Inspect/classify target | complete | 284 records with fetched README/API/contents evidence fields |
| 11. Vertical-atom joins | complete | Per-record relevance object plus report crosswalk |
| 12. Report/gaps | complete | This report; limitations and gaps retained |

## Reproduction

From the repository root:

    node research/actionmodel-builder-research-2026-08-26/build-github-corpus.mjs
    python3 - <<'PY'
    import json
    from pathlib import Path
    p=Path('research/actionmodel-builder-research-2026-08-26/outputs/github-corpus.jsonl')
    rows=[json.loads(x) for x in p.read_text().splitlines() if x.strip()]
    assert 200 <= len(rows) <= 500
    assert len({(r['owner'].lower(), r['name'].lower()) for r in rows}) == len(rows)
    required={'repo_url','owner','name','observed_date','source_query','source_lane','license','activity_health','capability_tags','vertical_atom_relevance','disposition','reason','evidence'}
    assert all(required <= r.keys() for r in rows)
    print('PASS', len(rows), 'unique records')
    PY

The generated JSONL and this report are the lane deliverables.
