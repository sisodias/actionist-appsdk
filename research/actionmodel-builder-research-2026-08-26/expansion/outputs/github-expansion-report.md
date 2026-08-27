# GitHub expansion report — Action Model Builder Research

Run: actionmodel-builder-research-2026-08-26 / expansion-2026-08-26  
Lane: RCH-GITHUB-EXP  
Observed: 2026-08-26  
Mode: research/ideation only; no product code, client data, repository code, admission, build, or runtime claim.

## Verdict

The expansion artifact carries the immutable 284-row first-pass baseline and 216 new unique content-inspected selections for 500 combined repositories. The target was 500; selection added 216 records after removing 0 baseline/search duplicates.
New-row content evidence: 216 rows have README or top-level content; any unknown or weak row remains explicitly classified.
Long-run matrix amendment: repo-matrix-observations.jsonl establishes 17000 slots (17 industries × 10 dimensions × 100 observations), with 750 seeded observations and 16250 explicit unobserved slots. The matrix is not complete and is reserved for later waves.

A candidate is a research lead only. It is not license-cleared, pinned, extracted, built, tested, admitted, or safe to copy.

## Combined coverage

| Metric | Count |
| Baseline rows retained | 284 |
| New rows | 216 |
| Combined unique rows | 500 |
| Combined duplicate rows | 0 |
| New content-backed rows | 216 |
| Target | 500 |

### Capability families

| Family | Baseline + expansion total |
| builder | 63 |
| scaffold | 73 |
| registry | 55 |
| ast | 40 |
| data | 83 |
| sandbox | 38 |
| browser | 70 |
| eval | 29 |
| provenance | 49 |

### New-row capability-family quota view

| Family | New rows |
| builder | 25 |
| scaffold | 41 |
| registry | 23 |
| ast | 8 |
| data | 49 |
| sandbox | 8 |
| browser | 52 |
| eval | 8 |
| provenance | 8 |

### Industry-linked expansion coverage

| Catalogue industry | New linked rows |
| Accounting Firms | 8 |
| Construction | 8 |
| Course Creators | 8 |
| Ecommerce | 8 |
| Education & Training | 8 |
| Healthcare & Medical Practices | 8 |
| Hospitality | 8 |
| IT Services & MSPs | 8 |
| Insurance Agencies | 8 |
| Law Firms | 8 |
| Logistics & Freight | 8 |
| Marketing & Social Media Agencies | 1 |
| Mortgage Brokers | 8 |
| Property Management | 1 |
| Real Estate | 8 |
| Recruiting & Staffing | 8 |
| SaaS | 8 |

All 17 catalogue industries have at least one query-linked expansion row. This is coverage evidence, not proof of capability in the industry.

### Long-run repo-matrix observation ledger

Ledger path: expansion/outputs/repo-matrix-observations.jsonl
Schema fields: schema_version, ledger, record_type, slot_id, industry_id, industry_label, dimension_id, dimension_label, observation_index, slot_status, observation_type, observed_date, repo_ref, capability_families, atom_ids, evidence_class, confidence, evidence, observation, limitation.
Dimensions: demand_atom_fit, workflow_behavior, data_model, integration_surface, ui_assembly, agent_authority, verification_eval, provenance_rights, runtime_deployment, economics_maintenance.
| Matrix metric | Count |
| Expected slots | 17000 |
| Observed/seeded slots | 750 |
| Unobserved reserved slots | 16250 |

Per-industry seeded observations:
| Industry | Observed slots |
| Accounting Firms | 45 |
| Construction | 53 |
| Course Creators | 59 |
| Ecommerce | 45 |
| Education & Training | 41 |
| Healthcare & Medical Practices | 45 |
| Hospitality | 48 |
| IT Services & MSPs | 51 |
| Insurance Agencies | 55 |
| Law Firms | 47 |
| Logistics & Freight | 45 |
| Marketing & Social Media Agencies | 3 |
| Mortgage Brokers | 39 |
| Property Management | 9 |
| Real Estate | 58 |
| Recruiting & Staffing | 50 |
| SaaS | 57 |

Per-dimension seeded observations:
| Dimension | Observed slots |
| Demand and solution-atom fit | 122 |
| Workflow behavior and outcome | 113 |
| Data entities, schema, and source of truth | 83 |
| Integration, API, browser, and tool surface | 59 |
| UI, registry, scaffold, and token assembly | 58 |
| Agent authority, approval, and side effects | 43 |
| Verification, eval, and recovery evidence | 12 |
| License, provenance, SBOM, and attribution | 74 |
| Sandbox, tenancy, deployment, and rollback | 64 |
| Activity, maintenance, adoption, and economics signals | 122 |

Matrix status: schema established and partial evidence seeded; the 17,000-slot long-run observation program is not complete, and unobserved slots must not be read as negative evidence.

### Disposition totals

| Disposition | Combined count |
| candidate | 231 |
| reference | 21 |
| hold | 237 |
| reject | 10 |
| unknown | 1 |
Machine audit of the emitted JSONL agrees: candidate=231, reference=21, hold=237, reject=10, unknown=1.

### License states

| License state | Combined count |
| no_declared_license | 137 |
| declared_permissive | 302 |
| nonstandard_or_other | 16 |
| copyleft_or_reciprocal | 23 |
| source_available_or_other | 22 |

## Method and provenance

1. Read the phase-2 expansion program, baseline report/JSONL, catalogue.json, atoms-001.json, vertical lane current/queue, and first-principles boundaries.
2. Built a query matrix of 60 exact GitHub repository searches: 23 catalogue-industry query variants plus 37 capability-family queries. Each query, command, and linked metadata is retained on selected new rows and reproduced below.
3. Ran authenticated GitHub searches with a preflight rate-limit check, retry, and visible rate-wait/failure log. Search results were discovery only; no snippet was treated as content evidence.
4. Excluded all canonical repositories already present in the immutable 284-row baseline, merged repeated search hits by owner/name, reserved industry and capability quotas, then filled the remaining target by bounded star order.
5. For every selected new row, fetched repository API metadata, raw README when available, top-level contents, one source/config path, license declaration/file presence, and activity fields. No repository was cloned, built, executed, or copied.
6. Assigned candidate/reference/hold/reject/unknown and a reason. No-license, copyleft, source-available/other, mixed-asset uncertainty, browser/sandbox risk, and weak content remain explicit holds/references/unknowns.

Evidence class: E for direct repository/API/README/contents/source-path fetches; I for query-linked industry/team/atom mapping; U for unavailable content/API. Search stars and descriptions remain discovery signals.
Search-rate events recorded: 1; failed/empty query count: 3.

## Query matrix and search receipts

| Kind | Family | Industry IDs | Exact query | Command | Result count |
| industry | data | accounting_firms | accounting invoice reconciliation | gh search repos "accounting invoice reconciliation" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 0 |
| industry | scaffold | construction | construction project management | gh search repos "construction project management" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| industry | scaffold | course_creators | course platform community | gh search repos "course platform community" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 0 |
| industry | data | ecommerce | ecommerce inventory | gh search repos "ecommerce inventory" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| industry | scaffold | education_training | education enrollment | gh search repos "education enrollment" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| industry | browser | healthcare_medical_practices | healthcare appointment | gh search repos "healthcare appointment" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| industry | browser | hospitality | hospitality reservation | gh search repos "hospitality reservation" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 18 |
| industry | browser | it_services_msps | IT helpdesk ticketing | gh search repos "IT helpdesk ticketing" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| industry | data | insurance_agencies | insurance claims | gh search repos "insurance claims" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| industry | data | law_firms | legal document management | gh search repos "legal document management" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| industry | browser | logistics_freight | logistics freight | gh search repos "logistics freight" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| industry | builder | marketing_social_media_agencies | marketing social media analytics | gh search repos "marketing social media analytics" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 1 |
| industry | data | mortgage_brokers | mortgage loan | gh search repos "mortgage loan" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| industry | browser | property_management | property management work orders | gh search repos "property management work orders" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 1 |
| industry | browser | real_estate | real estate crm | gh search repos "real estate crm" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| industry | data | recruiting_staffing | recruiting applicant tracking | gh search repos "recruiting applicant tracking" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| industry | builder | saas | saas crm billing | gh search repos "saas crm billing" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 0 |
| industry | data | accounting_firms | accounting software | gh search repos "accounting software" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| industry | data | accounting_firms | invoice OCR | gh search repos "invoice OCR" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| industry | scaffold | course_creators | online course platform | gh search repos "online course platform" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| industry | scaffold | course_creators | learning management system | gh search repos "learning management system" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| industry | builder | saas | SaaS starter | gh search repos "SaaS starter" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| industry | builder | saas | CRM application | gh search repos "CRM application" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | builder | — | ai app builder | gh search repos "ai app builder" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | builder | — | prompt to app | gh search repos "prompt to app" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | builder | — | internal tool builder | gh search repos "internal tool builder" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 17 |
| capability | builder | — | agent workflow | gh search repos "agent workflow" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | scaffold | — | saas starter | gh search repos "saas starter" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | scaffold | — | admin dashboard | gh search repos "admin dashboard" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | scaffold | — | multi tenant | gh search repos "multi tenant" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | scaffold | — | crud generator | gh search repos "crud generator" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | registry | — | component registry | gh search repos "component registry" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | registry | — | design system | gh search repos "design system" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | registry | — | storybook | gh search repos "storybook" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | registry | — | design tokens | gh search repos "design tokens" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | ast | — | codemod | gh search repos "codemod" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | ast | — | ast transformation | gh search repos "ast transformation" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | ast | — | jscodeshift | gh search repos "jscodeshift" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | ast | — | ts morph | gh search repos "ts morph" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | data | — | postgres schema | gh search repos "postgres schema" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | data | — | database introspection | gh search repos "database introspection" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | data | — | openapi generator | gh search repos "openapi generator" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | data | — | sql migration | gh search repos "sql migration" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | sandbox | — | code sandbox | gh search repos "code sandbox" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | sandbox | — | preview environment | gh search repos "preview environment" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | sandbox | — | static site deploy | gh search repos "static site deploy" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | sandbox | — | container runtime | gh search repos "container runtime" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | browser | — | browser automation | gh search repos "browser automation" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | browser | — | browser agent | gh search repos "browser agent" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | browser | — | computer use | gh search repos "computer use" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | browser | — | playwright mcp | gh search repos "playwright mcp" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | eval | — | llm eval | gh search repos "llm eval" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | eval | — | agent eval | gh search repos "agent eval" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | eval | — | browser benchmark | gh search repos "browser benchmark" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | eval | — | prompt evaluation | gh search repos "prompt evaluation" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | provenance | — | license compliance | gh search repos "license compliance" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | provenance | — | sbom | gh search repos "sbom" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | provenance | — | software supply chain | gh search repos "software supply chain" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | provenance | — | in-toto | gh search repos "in-toto" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |
| capability | provenance | — | dependency scanner | gh search repos "dependency scanner" --limit 20 --sort stars --json fullName,description,stargazersCount,updatedAt,license,url | 20 |

## Top research candidates

| Repository | Family | Industry | Stars | License | Signal |
| VoltAgent/awesome-design-md (https://github.com/VoltAgent/awesome-design-md) | registry | cross-vertical | 110526 | MIT | <a href="https://github.com/VoltAgent/voltagent"> <img width="1500" alt="claude-skills" src="https://cdn.voltagent.dev/awesome-repo/logo.json.svg" /> |
| storybookjs/storybook (https://github.com/storybookjs/storybook) | registry | cross-vertical | 90938 | MIT | <p align="center"> <a href="https://storybook.js.org/?ref=readme"> |
| HKUDS/nanobot (https://github.com/HKUDS/nanobot) | builder | cross-vertical | 47413 | MIT | <picture> <source media="(prefers-color-scheme: dark)" srcset="./images/readme-cover-dark.svg"> |
| ColorlibHQ/AdminLTE (https://github.com/ColorlibHQ/AdminLTE) | scaffold | cross-vertical | 45557 | MIT | [AdminLTE — Bootstrap 5 Admin Dashboard](https://adminlte.io) [![npm version](https://img.shields.io/npm/v/admin-lte/latest.svg)](https://www.npmjs.com/package/admin-lte) |
| conductor-oss/conductor (https://github.com/conductor-oss/conductor) | builder | cross-vertical | 32131 | Apache-2.0 | <picture> <!-- Dark mode logo --> |
| nrwl/nx (https://github.com/nrwl/nx) | registry | cross-vertical | 29268 | MIT | <div align="center"> <p> |
| openai/openai-agents-python (https://github.com/openai/openai-agents-python) | builder | cross-vertical | 28974 | MIT | OpenAI Agents SDK [![PyPI](https://img.shields.io/pypi/v/openai-agents?label=pypi%20package)](https://pypi.org/project/openai-agents/) The OpenAI Agents SDK is a lightweight yet powerful framework for building multi-agent workflows. It is provider-agnostic, supporting the OpenAI Responses and Chat C |
| google-labs-code/design.md (https://github.com/google-labs-code/design.md) | registry | cross-vertical | 27514 | Apache-2.0 | DESIGN.md A format specification for describing a visual identity to coding agents. DESIGN.md gives agents a persistent, structured understanding of a design system. |
| deepset-ai/haystack (https://github.com/deepset-ai/haystack) | builder | cross-vertical | 26318 | Apache-2.0 | <div align="center"> <a href="https://haystack.deepset.ai/"><img src="https://raw.githubusercontent.com/deepset-ai/haystack/main/images/banner.png" alt="Blue banner with the Haystack logo and the text ‘haystack by deepset – The Open Source AI Framework for Production Ready RAG & Agents’ surrounded b |
| alexpate/awesome-design-systems (https://github.com/alexpate/awesome-design-systems) | registry | cross-vertical | 25781 | Unlicense | ![cover](/cover.png) ![Contributions Welcome](https://img.shields.io/badge/Contributions-welcome-blue.svg) |
| akveo/ngx-admin (https://github.com/akveo/ngx-admin) | scaffold | cross-vertical | 25689 | MIT | ngx-admin [<img src="https://i.imgur.com/oMcxwZ0.png" alt="Eva Design System" height="20px" />](https://eva.design?utm_campaign=eva_design%20-%20home%20-%20ngx_admin%20github%20readme&utm_source=ngx_admin&utm_medium=referral&utm_content=top_status_tile) [Live Demo](https://demo.akveo.com/ngx-admin/? |
| ColorlibHQ/gentelella (https://github.com/ColorlibHQ/gentelella) | scaffold | cross-vertical | 21495 | MIT | Gentelella v4 — Free Admin Dashboard Template English** \| [简体中文](README.zh-CN.md) |
| radix-ui/primitives (https://github.com/radix-ui/primitives) | registry | cross-vertical | 19210 | MIT | [![Radix Primitives Logo](primitives.png)](https://radix-ui.com/primitives) Radix Primitives |
| nextjs/saas-starter (https://github.com/nextjs/saas-starter) | builder | SaaS | 16059 | MIT | Next.js SaaS Starter This is a starter template for building a SaaS application using **Next.js** with support for authentication, Stripe integration for payments, and a dashboard for logged-in users. |
| ast-grep/ast-grep (https://github.com/ast-grep/ast-grep) | ast | cross-vertical | 15645 | MIT | <p align=center> <img src="https://ast-grep.github.io/logo.svg" alt="ast-grep"/> |
| satnaing/shadcn-admin (https://github.com/satnaing/shadcn-admin) | scaffold | cross-vertical | 14021 | MIT | Shadcn Admin Dashboard Admin Dashboard UI crafted with Shadcn and Vite. Built with responsiveness and accessibility in mind. |
| nanobrowser/nanobrowser (https://github.com/nanobrowser/nanobrowser) | builder | cross-vertical | 13676 | Apache-2.0 | <h1 align="center"> <img src="https://github.com/user-attachments/assets/ec60b0c4-87ba-48f4-981a-c55ed0e8497b" height="100" width="375" alt="banner" /><br> |
| Arindam200/awesome-ai-apps (https://github.com/Arindam200/awesome-ai-apps) | builder | cross-vertical | 13502 | MIT | ![Banner](/assets/awesome_banner.png) <div align="center"> |
| microsoft/agent-framework (https://github.com/microsoft/agent-framework) | builder | cross-vertical | 13122 | MIT | ![Microsoft Agent Framework](docs/assets/readme-banner.png) Welcome to Microsoft Agent Framework! |
| ixartz/Next-js-Boilerplate (https://github.com/ixartz/Next-js-Boilerplate) | registry | cross-vertical | 13050 | MIT | Boilerplate and Starter for Next.js 16+, Tailwind CSS 4, and TypeScript. <p align="center"> |

## Holds and evidence boundaries

| Repository | Family | Reason |
| akaunting/akaunting | data | Relevant capability is visible, but license/provenance state NOASSERTION requires a separate rights review. |
| frappe/books | data | Relevant capability is visible, but license/provenance state AGPL-3.0 requires a separate rights review. |
| darcys22/godbledger | data | Relevant capability is visible, but license/provenance state GPL-3.0 requires a separate rights review. |
| juxt/juxt-accounting | data | Relevant capability is visible, but license/provenance state GPL-3.0 requires a separate rights review. |
| prashants/webzash | data | Relevant capability is visible, but license/provenance state NOASSERTION requires a separate rights review. |
| redstreet/fava_investor | data | Relevant capability is visible, but license/provenance state GPL-3.0 requires a separate rights review. |
| redstreet/beancount_reds_importers | data | Relevant capability is visible, but license/provenance state GPL-3.0 requires a separate rights review. |
| MiladJoodi/Civora-Dashboard | scaffold | Relevant capability is visible, but license/provenance state no_declared_license requires a separate rights review. |
| jerrymartejr/AccuBuild | scaffold | Relevant capability is visible, but license/provenance state no_declared_license requires a separate rights review. |
| sohan2000/ai-agents-for-construction | scaffold | Relevant capability is visible, but license/provenance state no_declared_license requires a separate rights review. |
| LordQueso/MCP-construction | scaffold | Relevant capability is visible, but license/provenance state no_declared_license requires a separate rights review. |
| andrewisen/AI281X-DegreeProject | scaffold | Relevant capability is visible, but license/provenance state GPL-3.0 requires a separate rights review. |
| aryan735/yojak-backend | scaffold | Relevant capability is visible, but license/provenance state no_declared_license requires a separate rights review. |
| frappe/lms | scaffold | Relevant capability is visible, but license/provenance state AGPL-3.0 requires a separate rights review. |
| chamilo/chamilo-lms | scaffold | Relevant capability is visible, but license/provenance state GPL-3.0 requires a separate rights review. |
| pupilfirst/pupilfirst | scaffold | Relevant capability is visible, but license/provenance state NOASSERTION requires a separate rights review. |

## Vertical-to-atom-to-capability joins

Each new row contains industry_ids, team_ids, use_case_ids, atom_ids, capability_families, source queries, and vertical_atom_relevance. The join is an inferred research index, not authenticated demand or a product contract.

| Join layer | Evidence in this packet | Still unproven |
| Industry → query | 17 catalogue labels mapped to exact repository queries | Search ranking does not prove demand or fit |
| Team/use case → atom | Teams/atoms assigned from catalogue demand summaries and atom contract | No authenticated workflow or client source of truth |
| Atom → capability family | AST/data/registry/browser/sandbox/eval/provenance tags and family quotas | No conversion, build, security, or recovery receipt |
| Candidate → block | Explicit candidate/hold/reference/reject/unknown plus evidence URLs | Admission requires pinned source, rights, adaptation, build, proof, owner, rollback |

## Coverage gaps and limitations

- The target is a bounded 500-row corpus, not an exhaustive GitHub census.
- Industry queries can return generic CRUD, workflow, or domain-adjacent repositories; content inspection and reject/hold reasons preserve that uncertainty.
- Repository API license labels are not legal clearance and do not resolve transitive dependencies, generated assets, mixed licensing, or copyright obligations.
- README/source-path inspection is weaker than a pinned checkout, dependency scan, build, browser smoke, visual baseline, or authenticated behavior test.
- Search-rate limits can reduce query result counts; the report records rate events and any empty query rather than silently treating gaps as negative evidence.
- No Actionist private/API/client-data capability is claimed; all joins remain research or inference evidence.

## RCH-GITHUB-EXP task ledger

| Task slot | Status | Evidence |
| 1. Query matrix from industries/teams/use cases/atoms | complete | 60 exact queries; catalogue/atoms read |
| 2. Vertical-specific industry queries | complete | 17/17 industry query specs |
| 3. Authenticated searches with retries/rate logs | complete | 60 query receipts; 1 rate events |
| 4. Preserve/dedupe baseline | complete | 284 baseline rows retained; canonical owner/name exclusion |
| 5. Content/source/license/activity inspection | complete | 216 new rows with API/README/contents/source-path fields |
| 6. Per-industry/capability quotas | complete | Industry reservation, capability reservation, then bounded fill |
| 7. Disposition separation | complete | candidate=231, reference=21, hold=237, reject=10, unknown=1 |
| 8. Capability/vertical tagging | complete | Families, capability tags, industry/team/use-case/atom joins |
| 9. Rights uncertainty | complete | No-license/copyleft/other/mixed uncertainty explicit |
| 10. Niche-block reconciliation | complete | Vertical-atom-capability join fields plus report crosswalk |
| 11. Expand toward 500 | complete | 500/500 combined unique rows; remaining gap reported |
| 12. Validate/report/callback | complete | Parser, uniqueness, coverage, count, report, and coordinator callback required |

## Reproduction and validation

From the repository root:

    node research/actionmodel-builder-research-2026-08-26/expansion/build-github-expansion.mjs
    jq -c . research/actionmodel-builder-research-2026-08-26/expansion/outputs/github-expansion.jsonl >/dev/null
    python3 - <<'PY'
    import json
    from pathlib import Path
    p=Path('research/actionmodel-builder-research-2026-08-26/expansion/outputs/github-expansion.jsonl')
    rows=[json.loads(line) for line in p.read_text().splitlines() if line.strip()]
    assert 284 <= len(rows) <= 500
    assert len({(r['owner'].lower(),r['name'].lower()) for r in rows}) == len(rows)
    print('PASS', len(rows), 'unique records')
    PY
    jq -c . research/actionmodel-builder-research-2026-08-26/expansion/outputs/repo-matrix-observations.jsonl >/dev/null

No implementation or repository copying is part of this packet.
