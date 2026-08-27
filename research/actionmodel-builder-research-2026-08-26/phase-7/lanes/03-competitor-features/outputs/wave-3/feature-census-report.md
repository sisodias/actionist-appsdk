# Phase-7 competitor census — Wave 3 (P7-COMPETITOR-FEATURES-W3)

Lane-local research artifact for the disjoint third feature tranche. Only this `outputs/wave-3/` subtree is written by this lane. Wave 1, Wave 2, phases 2–6, and coordinator files are immutable inputs. This is not an overall Phase-7 completion claim.

## Scope and boundaries

| Contract item | Value |
|---|---|
| Selected surfaces | 24 exact platform-depth ranks 47–70 |
| Feature keys | Same eight priority keys; 24 × 8 = 192 rows |
| Product-surface universe | Wave-1 118-surface universe preserved by composite identity join |
| Dictionary | Wave-1 144 provisional keys preserved |
| Taxonomy | 68 stated vs 144 enumerated; verdict `taxonomy_count_conflict`; mapping unresolved; denominator `NONE` |
| Execution | `UNEXECUTED`; no login, credentials, client/private data, source execution, clone/copy, implementation, build, deploy, benchmark, scan, rollback, or admission |
| Admission | `NOT_ADMITTED`; all rows reference-only |
| Parent | active; shared Phase-7 state not promoted |

## Exact counts

`competitor-feature-evidence.jsonl` contains 192 unique surface×feature rows across 24 surfaces and 8 keys. Rank coverage is exactly 47–70. Status counts: gated=5, partially_observed=28, unknown=159. Evidence classes: E/D=176, E/U=16.

| Feature key | Rows |
|---|---:|
| `exit.source_export` | 24 |
| `recovery.source_rollback` | 24 |
| `auth.consent_and_approval` | 24 |
| `security.tenant_isolation` | 24 |
| `deploy.mobile_distribution` | 24 |
| `ui.asset_ownership` | 24 |
| `economics.success_cost` | 24 |
| `lifecycle.continuity_contract` | 24 |

## Source and identity join

Ranks 47–54 are sourced from the recorded platform-depth P1-B packet; ranks 55–70 are sourced from the P2-A packet. The Phase-6 P2-A packet begins at rank 55, so the P1-B source path is retained for the earlier eight ranks rather than fabricating a missing Phase-6 path. Every row uses the packet’s composite `(source_record_type, source_record_id)` identity to resolve the preserved Wave-1 surface reference; numeric IDs are not treated as globally unique.

| Rank | Surface | Preserved ref | Source URL | Access signal |
|---:|---|---|---|---|
| 47 | Augment | PS-050 | [https://www.augmentcode.com/pricing](https://www.augmentcode.com/pricing) | public_reader_reached_http_200 |
| 48 | Jules | PS-051 | [https://jules.google/docs/usage-limits](https://jules.google/docs/usage-limits) | public_reader_reached_http_200 |
| 49 | Amazon Q | PS-052 | [https://aws.amazon.com/q/developer/pricing/](https://aws.amazon.com/q/developer/pricing/) | public_reader_reached_fetched_2_weeks_ago |
| 50 | Pipedream | PS-054 | [https://pipedream.com/connect](https://pipedream.com/connect) | public_reader_reached_http_200 |
| 51 | Lindy | PS-055 | [https://www.lindy.ai/pricing](https://www.lindy.ai/pricing) | public_reader_reached_http_200 |
| 52 | Workato | PS-057 | [https://docs.workato.com/agentic/agentic.html](https://docs.workato.com/agentic/agentic.html) | public_reader_reached_http_200 |
| 53 | Automation Anywhere | PS-058 | [https://www.automationanywhere.com/ai](https://www.automationanywhere.com/ai) | public_reader_reached_http_200 |
| 54 | Creatio | PS-059 | [https://www.creatio.com/](https://www.creatio.com/) | public_reader_internal_error |
| 55 | Manus WebDev | PS-006 | [https://open.manus.ai/docs/v2/website](https://open.manus.ai/docs/v2/website) | HTTP 200; first-party Manus API Website docs directly readable; no API key, task, website, or publish call used |
| 56 | UiPath | PS-062 | [https://www.uipath.com/pricing](https://www.uipath.com/pricing) | HTTP 200; first-party pricing page directly readable; no account, plan purchase, robot, or agent run used |
| 57 | Apify | PS-063 | [https://apify.com/pricing](https://apify.com/pricing) | HTTP 200; first-party pricing page directly readable; no Actor, Store item, run, proxy, or account used |
| 58 | Cloudflare Browser Run | PS-064 | [https://developers.cloudflare.com/browser-run/](https://developers.cloudflare.com/browser-run/) | HTTP 200; first-party Cloudflare docs directly readable; no Worker, browser session, token, or MCP server used |
| 59 | Codeanywhere | PS-066 | [https://codeanywhere.com/pricing](https://codeanywhere.com/pricing) | HTTP 200; first-party pricing/feature page directly readable; no workspace, repository, IDE, or payment used |
| 60 | Airtable Omni/Cobuilder | PS-007 | [https://support.airtable.com/articles/1744327578-using-omni-ai-in-airtable](https://support.airtable.com/articles/1744327578-using-omni-ai-in-airtable) | HTTP 200; first-party Airtable support page directly readable; no base, interface, Omni chat, or account used |
| 61 | Onlook | PS-009 | [https://docs.onlook.com/getting-started/core-features](https://docs.onlook.com/getting-started/core-features) | HTTP 200; first-party Onlook feature docs directly readable; no project, Figma import, GitHub edit, or code change used |
| 62 | Visily | PS-015 | [https://support.visily.ai/portal/en/kb/articles/how-to-export-designs-to-code](https://support.visily.ai/portal/en/kb/articles/how-to-export-designs-to-code) | HTTP 200; first-party support article directly readable; no Visily workspace, export, payment, or design used |
| 63 | Uizard | PS-016 | [https://uizard.io/pricing/](https://uizard.io/pricing/) | HTTP 200; first-party pricing page directly readable; no Uizard account, project, generation, or export used |
| 64 | Bubble | PS-027 | [https://bubble.io/ai-app-builder](https://bubble.io/ai-app-builder) | HTTP 200; first-party AI app-builder page directly readable; no Bubble account, app, database, or store submission used |
| 65 | Plasmic | PS-045 | [https://www.plasmic.app/](https://www.plasmic.app/) | HTTP 200; first-party Plasmic homepage directly readable; no project, CMS, codebase, or publish action used |
| 66 | Framer | PS-046 | [https://www.framer.com/ai/](https://www.framer.com/ai/) | HTTP 200; first-party Framer AI page directly readable; no site, canvas, CMS, account, or publish action used |
| 67 | Zapier Forms/Tables/Interfaces/MCP | PS-008 | [https://help.zapier.com/hc/en-us/articles/39645433045773-Zapier-plan-updates-Tables-Interfaces-and-MCP-now-included](https://help.zapier.com/hc/en-us/articles/39645433045773-Zapier-plan-updates-Tables-Interfaces-and-MCP-now-included) | HTTP 200; first-party Zapier support article directly readable; no Zapier account, table, interface, MCP connection, or workflow used |
| 68 | Airplane | PS-091 | [https://www.airplane.dev/](https://www.airplane.dev/) | HTTP 000 from read-only curl; bounded public reader returned internal error; no readable first-party capability claim admitted |
| 69 | Softr AI App Generator | PS-069 | [https://www.softr.io/ai-app-generator](https://www.softr.io/ai-app-generator) | HTTP 200; first-party Softr AI app-builder page directly readable; no studio account, prompt, database, or app used |
| 70 | Huddle | PS-110 | [https://letshuddle.ai/](https://letshuddle.ai/) | HTTP 200 by curl; bounded public reader returned internal error; no readable capability claim admitted |

Airplane (rank 68) retains its HTTP 000/readability limit and Huddle (rank 70) retains its public-reader error in the row access fields. Any other historical or thin-access signal is preserved as supplied by the source packet. Reachability and documentation are not capability proof.

## Claims versus capability proof

Each row separates `direct_claims.first_party_product_claims` from `capability_proof`. Direct claims are public first-party documentation/read observations carried from the named packet, with `feature_specific_matches` only where the selected feature is explicitly mentioned. `capability_proof.status` is `not_established` for every row. Inferred claims retain source-packet inferences and deterministic rank/identity selection; they do not establish runtime behavior, authority, isolation, portability, rollback, mobile distribution, economics, or support.

## Unknowns, rights, falsifiers, and next gates

Each row records source/date/access, limitations, unknown block-contract fields, rights/ownership/provenance/SBOM/support/OEM gaps, a falsifier, and a smallest feature-scoped read-only next gate. Rights and provenance remain unknown/not cleared; no license, SBOM, reuse, or admission decision is made. Falsifiers and gates are not executed.

## Wave-1 and Wave-2 preservation anchors

| Wave-1 artifact | SHA-256 |
|---|---|
| `product-surface-universe.jsonl` | `0293f29f194f9e2424e5635d22ada476beea897f2343a470b5d2a897326b48d6` |
| `feature-dictionary.jsonl` | `e6654a5e00f291f9d6fa50b302838359614dff956f65d3342b2b71aaa7ff0161` |
| `competitor-feature-evidence.jsonl` | `4de26ea9f3075b690e695ab75ca6d4939f0a8f1fde854c231361941723b47633` |
| `feature-census-report.md` | `b8a35e215ada4823f74fea0dc342137cdb29f06cc2bb02a3b60658e3ab213f7d` |
| `lane-state.json` | `c427f18c93c045e1a2fea1d9f57229b552cc02d6a8dc3a7c2702a593c96d2b6b` |

| Wave-2 artifact | SHA-256 |
|---|---|
| `competitor-feature-evidence.jsonl` | `429b12fdf38126a20981dab446637feb8211848c9aa151795ea6d6acd1c40dd3` |
| `feature-census-report.md` | `b59ee3b7a21d5087927a33b7b17c10abf7cae8f7bfc2b29e9d03531b2cdb1697` |
| `lane-state.json` | `73ebd48e29c4d339dccdc929b192a65d17c26391393edb1e16c0fabcbf0ffc94` |

Wave-1 links: [`product-surface-universe.jsonl`](../product-surface-universe.jsonl), [`feature-dictionary.jsonl`](../feature-dictionary.jsonl), [`competitor-feature-evidence.jsonl`](../competitor-feature-evidence.jsonl), [`feature-census-report.md`](../feature-census-report.md), and [`lane-state.json`](../lane-state.json). Wave-2 links: [`competitor-feature-evidence.jsonl`](../wave-2/competitor-feature-evidence.jsonl), [`feature-census-report.md`](../wave-2/feature-census-report.md), and [`lane-state.json`](../wave-2/lane-state.json).

## Inputs and verification plan

| Input | Link | SHA-256 |
|---|---|---|
| Wave-3 dispatch receipt | [`wave-3-dispatch-receipt.json`](../../../../wave-3-dispatch-receipt.json) | `c8042afebcebfc8c25f78c3700dca6bd57d285dfa994595475e75564c785e282` |
| Platform-depth P1-B (ranks 47–54) | [`platform-p1-evidence-b.jsonl`](../../../../../phase-5/outputs/platform-p1-evidence-b.jsonl) | `52ce203fadd83d55cf321aceb03bcd29dec6924b5797f1dee5e991b0ba3467a6` |
| Platform-depth P2-A (ranks 55–70) | [`platform-p2-evidence-a.jsonl`](../../../../../phase-6/outputs/platform-p2-evidence-a.jsonl) | `4a7a7616a3bdde37c7a8e057e5d2a404a9325c6a072f5ca0d9a7b2d89c63374c` |
| Phase-7 program | [`PHASE-7-PROGRAM.md`](../../../../PHASE-7-PROGRAM.md) | local read-only input |
| Phase-7 state | [`phase-7-state.json`](../../../../phase-7-state.json) | shared file intentionally unmodified |

Post-write smoke must recompute JSONL parse, exact rank and 24×8 coverage, composite identity/source URL parity, Wave-1/Wave-2 hash preservation, required claim/proof/access/rights/falsifier/gate fields, boundaries, report links, and diff whitespace. No network or execution probe is authorized.

## Task ledger

| Task | State |
|---|---|
| Read Wave-3 dispatch receipt and platform-depth source packets | complete |
| Select exact disjoint ranks 47–70 | complete; 24 surfaces |
| Preserve Wave-1/Wave-2 universe, dictionary, and evidence anchors | complete |
| Publish eight priority keys × 24 surfaces | complete; 192 unique rows |
| Separate first-party claims from capability proof; retain access/rights/SBOM unknowns | complete |
| Write Wave-3 report and lane state under new subtree | complete |
| Run post-write smoke and deliver fresh callback | recorded in lane-state/callback receipt |

## Boundary

`research_only=true`; `execution_status=UNEXECUTED`; `admission_status=NOT_ADMITTED`; `implementation_authorized=false`; `parent_goal_status=active`; overall Phase-7 completion is not claimed.
