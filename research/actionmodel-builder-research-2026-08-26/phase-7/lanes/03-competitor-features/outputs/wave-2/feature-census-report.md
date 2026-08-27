# Phase-7 competitor census — Wave 2 (P7-COMPETITOR-FEATURES-W2)

Lane-local research artifact. This is a disjoint second tranche and does not claim overall Phase-7 completion. Only the `outputs/wave-2/` subtree is written by this tranche; Wave 1, phases 2–6, and coordinator files are preserved.

## Scope and contract

| Item | Value |
|---|---|
| Selected surfaces | 24 exact Phase-6 platform-depth ranks 71–94 |
| Feature keys | Same 8 Wave-1 priority keys; 24 × 8 = 192 rows |
| Product-surface universe | Preserved Wave-1 118 records; not copied or modified |
| Feature dictionary | Preserved Wave-1 144 provisional keys; no taxonomy remap |
| Taxonomy | 68 stated vs 144 enumerated; `taxonomy_count_conflict`; mapping unresolved; denominator `NONE` |
| Evidence source | Phase-6 packets A (71–74) and B (75–94), public first-party reads only |
| Execution | `UNEXECUTED`; no login, credentials, private/client data, source execution, clone, build, deploy, benchmark, scan, rollback, or admission |
| Admission | `NOT_ADMITTED`; reference-only |
| Parent | active; shared Phase-7 state not promoted |

## Exact tranche counts

`competitor-feature-evidence.jsonl` contains 192 unique surface×feature records for 24 surfaces and 8 features. Ranks are exactly 71–94. Status counts: gated=6, partially_observed=21, unknown=165. Evidence classes: E/D=176, E/U=16.

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

## Rank and source join

Each ranked row joins the Phase-6 identity by its preserved `source_record_id` to the Wave-1 product-surface universe reference. A source URL is retained exactly; HTTP/reachability and public documentation are recorded as access signals only.

| Rank | Surface | Wave-1 ref | Source URL | Class |
|---:|---|---|---|---|
| 71 | OpenAI Agents SDK | PS-080 | [https://openai.github.io/openai-agents-python/](https://openai.github.io/openai-agents-python/) | E/D |
| 72 | LangGraph | PS-081 | [https://langchain-ai.github.io/langgraph/](https://langchain-ai.github.io/langgraph/) | E/U |
| 73 | CrewAI | PS-082 | [https://docs.crewai.com/](https://docs.crewai.com/) | E/D |
| 74 | AutoGen | PS-083 | [https://microsoft.github.io/autogen/stable/](https://microsoft.github.io/autogen/stable/) | E/D |
| 75 | LlamaIndex | PS-084 | [https://www.llamaindex.ai/](https://www.llamaindex.ai/) | E/D |
| 76 | Temporal | PS-085 | [https://temporal.io/](https://temporal.io/) | E/D |
| 77 | Trigger.dev | PS-086 | [https://trigger.dev/](https://trigger.dev/) | E/D |
| 78 | Windmill | PS-087 | [https://www.windmill.dev/](https://www.windmill.dev/) | E/D |
| 79 | Tray.ai | PS-088 | [https://tray.ai/](https://tray.ai/) | E/U |
| 80 | Browserless | PS-092 | [https://www.browserless.io/](https://www.browserless.io/) | E/D |
| 81 | Hyperbrowser | PS-093 | [https://www.hyperbrowser.ai/](https://www.hyperbrowser.ai/) | E/D |
| 82 | BrowserGym | PS-094 | [https://github.com/ServiceNow/BrowserGym](https://github.com/ServiceNow/BrowserGym) | E/D |
| 83 | Render | PS-095 | [https://render.com/](https://render.com/) | E/D |
| 84 | Railway | PS-096 | [https://railway.com/](https://railway.com/) | E/D |
| 85 | Budibase | PS-070 | [https://budibase.com/](https://budibase.com/) | E/D |
| 86 | Fly.io | PS-097 | [https://fly.io/](https://fly.io/) | E/D |
| 87 | Netlify | PS-099 | [https://www.netlify.com/](https://www.netlify.com/) | E/D |
| 88 | Convex | PS-101 | [https://www.convex.dev/](https://www.convex.dev/) | E/D |
| 89 | Hasura | PS-102 | [https://hasura.io/](https://hasura.io/) | E/D |
| 90 | Neon | PS-103 | [https://neon.tech/](https://neon.tech/) | E/D |
| 91 | agentry | PS-111 | [https://agentry.run/](https://agentry.run/) | E/D |
| 92 | Lowco | PS-112 | [https://lowco.ai/internal-tools-builder](https://lowco.ai/internal-tools-builder) | E/D |
| 93 | Chrome DevTools for agents | PS-114 | [https://developer.chrome.com/docs/devtools/agents/get-started](https://developer.chrome.com/docs/devtools/agents/get-started) | E/D |
| 94 | Directus | PS-072 | [https://directus.io/](https://directus.io/) | E/D |

Ranks 71–74 are sourced from Phase-6 packet A; ranks 75–94 from packet B. The ledger retains each packet’s direct claims, inferred claims, source detail, date, access status, limitation, unknown block-contract fields, falsifier, next read-only gate, rights/provenance/SBOM/support gaps, and boundary.

## Claims versus capability proof

`direct_claims.first_party_product_claims` preserves the packet’s public first-party documentation claims. `feature_specific_matches` records only exact keyword-level matches to the selected feature; a match is a documented signal, not a tested capability. `capability_proof.status` is `not_established` for every row. A reachable page, HTTP status, or documentation statement is not runtime, authenticated, tenant-isolation, export, rollback, mobile-distribution, economics, rights, or support proof.

## Access, rights, and falsifiers

Historical access gates and current reachability are retained in each row; no login or authenticated behavior was attempted. Rights, ownership, provenance, SBOM, support, OEM, and reuse status remain unknown/not cleared. Every row has a falsifier and smallest feature-scoped read-only gate; those gates do not authorize execution, source copying, build, deployment, benchmark, scan, or admission.

## Wave-1 preservation anchors

Wave-1 artifacts were not rewritten. Their observed SHA-256 anchors are:

| Wave-1 artifact | SHA-256 |
|---|---|
| `product-surface-universe.jsonl` | `0293f29f194f9e2424e5635d22ada476beea897f2343a470b5d2a897326b48d6` |
| `feature-dictionary.jsonl` | `e6654a5e00f291f9d6fa50b302838359614dff956f65d3342b2b71aaa7ff0161` |
| `competitor-feature-evidence.jsonl` | `4de26ea9f3075b690e695ab75ca6d4939f0a8f1fde854c231361941723b47633` |
| `feature-census-report.md` | `b8a35e215ada4823f74fea0dc342137cdb29f06cc2bb02a3b60658e3ab213f7d` |
| `lane-state.json` | `c427f18c93c045e1a2fea1d9f57229b552cc02d6a8dc3a7c2702a593c96d2b6b` |

Wave-1 source links: [`product-surface-universe.jsonl`](../product-surface-universe.jsonl), [`feature-dictionary.jsonl`](../feature-dictionary.jsonl), [`competitor-feature-evidence.jsonl`](../competitor-feature-evidence.jsonl), [`feature-census-report.md`](../feature-census-report.md), and [`lane-state.json`](../lane-state.json). The preserved universe and dictionary remain the canonical shared inputs for both tranches.

## Named local inputs

| Input | Link | SHA-256 |
|---|---|---|
| Phase-6 packet A | [`platform-p2-evidence-a.jsonl`](../../../../../phase-6/outputs/platform-p2-evidence-a.jsonl) | `4a7a7616a3bdde37c7a8e057e5d2a404a9325c6a072f5ca0d9a7b2d89c63374c` |
| Phase-6 packet B | [`platform-p2-evidence-b.jsonl`](../../../../../phase-6/outputs/platform-p2-evidence-b.jsonl) | `4136326cb94bcf4ce9a8f0b98fa2a3c1dd6d6e9521a7ab5041d84395a6e5641d` |
| Phase-7 program | [`PHASE-7-PROGRAM.md`](../../../../PHASE-7-PROGRAM.md) | local read-only input |
| Phase-7 state | [`phase-7-state.json`](../../../../phase-7-state.json) | shared file intentionally unmodified |

## Task ledger

| Task | State |
|---|---|
| Read Phase-7 contract/state, Wave-1 artifacts, and Phase-6 A/B inputs | complete |
| Select disjoint ranks 71–94 | complete; 24 surfaces |
| Preserve Wave-1 universe, dictionary, and taxonomy conflict | complete; no copies or edits |
| Publish same eight priority keys | complete; 192 rows |
| Separate first-party claims from capability proof and retain unknowns/rights/boundaries | complete |
| Write Wave-2 report and exact-count state under new subdirectory | complete |
| Run corrected post-write smoke and deliver callback | recorded in lane-state/callback receipt |

## Boundary

`research_only=true`; `execution_status=UNEXECUTED`; `admission_status=NOT_ADMITTED`; `implementation_authorized=false`; `parent_goal_status=active`; overall Phase-7 completion is not claimed.
