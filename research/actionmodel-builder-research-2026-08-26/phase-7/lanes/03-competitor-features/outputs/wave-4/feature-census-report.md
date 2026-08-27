# Phase-7 competitor census — Wave 4 (P7-COMPETITOR-FEATURES-W4)

Lane-local research artifact for the disjoint fourth feature tranche. Only this `outputs/wave-4/` subtree is written. Wave 1, Wave 2, Wave 3, phases 2–6, and coordinator files are immutable inputs. This is not an overall Phase-7 completion claim.

## Scope and boundaries

| Contract item | Value |
|---|---|
| Selected surfaces | 24 exact platform-depth ranks 23–46 |
| Feature keys | Same eight priority keys; 24 × 8 = 192 rows |
| Product-surface universe | Wave-1 118-surface universe preserved by composite identity join |
| Dictionary | Wave-1 144 provisional keys preserved |
| Taxonomy | 68 stated vs 144 enumerated; verdict `taxonomy_count_conflict`; mapping unresolved; denominator `NONE` |
| Execution | `UNEXECUTED`; no login, credentials, client/private data, source execution, cloning/copying, implementation, build, deploy, benchmark, scan, rollback, or admission |
| Admission | `NOT_ADMITTED`; rows remain reference-only |
| Parent | active; shared Phase-7 state not promoted |

## Exact counts

`competitor-feature-evidence.jsonl` contains 192 unique surface×feature rows across 24 surfaces and 8 keys. Rank coverage is exactly 23–46. Status counts: partially_observed=23, unknown=169. Evidence classes: E/D=192.

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

The dispatch labels this tranche as the Phase-6 platform-depth P1-A/P1-B source packets. The on-disk packet lineage is retained exactly: P1-A supplies ranks 23–34 and P1-B supplies ranks 35–46. Numeric IDs collide across existing surfaces and expansion candidates, so every row joins on `(source_record_type, source_record_id)` to the preserved Wave-1 universe.

| Rank | Surface | Preserved ref | Source URL | Access |
|---:|---|---|---|---|
| 23 | E2B | PS-020 | [https://e2b.dev/](https://e2b.dev/) | HTTP 200; first-party E2B product page directly readable; SDK examples observed as documentation only; no key or sandbox used |
| 24 | Browserbase | PS-021 | [https://docs.browserbase.com/welcome/getting-started](https://docs.browserbase.com/welcome/getting-started) | HTTP 200; first-party getting-started docs directly readable; no account, playground, session, or API key used |
| 25 | Skyvern | PS-022 | [https://www.skyvern.com/docs/developers/getting-started/introduction](https://www.skyvern.com/docs/developers/getting-started/introduction) | HTTP 200; first-party developer introduction directly readable; no dashboard, credential, browser, or task used |
| 26 | Langflow | PS-023 | [https://docs.langflow.org/](https://docs.langflow.org/) | HTTP 200; first-party docs homepage directly readable; no flow run or server deployed |
| 27 | Dify | PS-024 | [https://www.dify.ai/workflows](https://www.dify.ai/workflows) | HTTP 200; first-party Workflow Studio page directly readable; cloud login/get-started links not used |
| 28 | Gumloop | PS-026 | [https://docs.gumloop.com/core-concepts/agents](https://docs.gumloop.com/core-concepts/agents) | HTTP 200; first-party Agents documentation directly readable; no account, connector, agent, or approval action used |
| 29 | Google AI Studio/Firebase Studio/Antigravity | PS-028 | [https://ai.google.dev/gemini-api/docs/aistudio-fullstack](https://ai.google.dev/gemini-api/docs/aistudio-fullstack) | HTTP 200; first-party Google AI for Developers page directly readable; API key/sign-in/build actions not used |
| 30 | Cursor | PS-029 | [https://cursor.com/docs/cloud-agent](https://cursor.com/docs/cloud-agent) | HTTP 200; first-party Cloud Agents docs directly readable; source-control login and cloud agent start not used |
| 31 | Bolt.new | PS-003 | [https://bolt.new/get-started](https://bolt.new/get-started) | HTTP 200; first-party Get Started page directly readable; no project, repository, or deployment used |
| 32 | Claude Code web | PS-030 | [https://code.claude.com/docs/en/claude-code-on-the-web](https://code.claude.com/docs/en/claude-code-on-the-web) | HTTP 200; first-party Claude Code web documentation directly readable; no Claude account, cloud session, repository, or task used |
| 33 | GitHub Copilot cloud agent | PS-031 | [https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent) | HTTP 200; first-party GitHub documentation directly readable; no GitHub account, repository, issue, or agent session used |
| 34 | Blink | PS-034 | [https://blink.new/](https://blink.new/) | HTTP 200; first-party Blink homepage directly readable; no prompt, project, account, or deployment used |
| 35 | WeWeb | PS-036 | [https://www.weweb.io/solutions/ai-apps](https://www.weweb.io/solutions/ai-apps) | public_reader_reached_http_200 |
| 36 | Glide / GlideOS | PS-037 | [https://www.glideapps.com/pricing?version=businesses](https://www.glideapps.com/pricing?version=businesses) | public_reader_reached_http_200 |
| 37 | Superblocks | PS-038 | [https://docs.superblocks.com/getting-started/what-is-superblocks](https://docs.superblocks.com/getting-started/what-is-superblocks) | public_reader_reached_http_200 |
| 38 | AppSheet Gemini | PS-039 | [https://support.google.com/appsheet/answer/16106353?hl=en](https://support.google.com/appsheet/answer/16106353?hl=en) | public_reader_reached_http_200 |
| 39 | Replit Agent | PS-004 | [https://docs.replit.com/learn/build-with-agent](https://docs.replit.com/learn/build-with-agent) | public_reader_reached_http_200 |
| 40 | Power Apps/Copilot | PS-040 | [https://www.microsoft.com/en-us/power-platform/products/power-apps/pricing/](https://www.microsoft.com/en-us/power-platform/products/power-apps/pricing/) | public_reader_reached_http_200 |
| 41 | Salesforce Agentforce/Lightning | PS-041 | [https://www.salesforce.com/agentforce/pricing/](https://www.salesforce.com/agentforce/pricing/) | public_reader_reached_http_200 |
| 42 | Mendix | PS-043 | [https://docs.mendix.com/developerportal/deploy/mendix-cloud-deploy/](https://docs.mendix.com/developerportal/deploy/mendix-cloud-deploy/) | public_reader_internal_error |
| 43 | Figma Make | PS-044 | [https://www.figma.com/solutions/design-to-code/](https://www.figma.com/solutions/design-to-code/) | public_reader_reached_http_200 |
| 44 | Anima | PS-047 | [https://docs.animaapp.com/docs/anima-api](https://docs.animaapp.com/docs/anima-api) | public_reader_reached_http_200 |
| 45 | Devin Cloud | PS-049 | [https://docs.devin.ai/admin/billing](https://docs.devin.ai/admin/billing) | public_reader_reached_http_200 |
| 46 | Base44 | PS-005 | [https://docs.base44.com/Getting-Started/Quick-start-guide](https://docs.base44.com/Getting-Started/Quick-start-guide) | public_reader_reached_http_200 |

Ranks 23–34 use [`platform-p1-evidence-a.jsonl`](../../../../../phase-5/outputs/platform-p1-evidence-a.jsonl); ranks 35–46 use [`platform-p1-evidence-b.jsonl`](../../../../../phase-5/outputs/platform-p1-evidence-b.jsonl). Airplane/Huddle are not in this slice; any source-specific access limits in this slice are preserved in row-level access fields. Reachability/documentation is not capability proof.

## Claims versus capability proof

Each row separates `direct_claims.first_party_product_claims` from `capability_proof`. Direct claims are public first-party documentation/read observations carried from the platform-depth packet; `feature_specific_matches` records only explicit feature terms. `capability_proof.status` is `not_established` for every row. Inferences retain deterministic rank and composite identity selection but do not establish runtime behavior, authority, tenant isolation, portability, rollback, mobile distribution, economics, or support.

## Unknowns, rights, falsifiers, and next gates

Every row contains source/date/access, limitations, unknown block-contract fields, rights/ownership/provenance/SBOM/support/OEM gaps, a falsifier, and a smallest feature-scoped read-only next gate. No falsifier or next gate was executed. No license, SBOM, reuse, or admission decision was made.

## Wave-1 / Wave-2 / Wave-3 preservation anchors

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

| Wave-3 artifact | SHA-256 |
|---|---|
| `competitor-feature-evidence.jsonl` | `b833341c6df0e542361462a2459b844b4a91ea82defbc9f0c8e2b7372251551b` |
| `feature-census-report.md` | `2abffd69e976d6100eead05616101f125558c2ec8eced1b1231e17af18f3721d` |
| `lane-state.json` | `d8d478a1008dc2aa102a7145cc777453088b58235a9a026962078837092e1f1c` |

Wave-1 links: [`product-surface-universe.jsonl`](../product-surface-universe.jsonl), [`feature-dictionary.jsonl`](../feature-dictionary.jsonl), [`competitor-feature-evidence.jsonl`](../competitor-feature-evidence.jsonl), [`feature-census-report.md`](../feature-census-report.md), and [`lane-state.json`](../lane-state.json). Wave-2 links: [`competitor-feature-evidence.jsonl`](../wave-2/competitor-feature-evidence.jsonl), [`feature-census-report.md`](../wave-2/feature-census-report.md), and [`lane-state.json`](../wave-2/lane-state.json). Wave-3 links: [`competitor-feature-evidence.jsonl`](../wave-3/competitor-feature-evidence.jsonl), [`feature-census-report.md`](../wave-3/feature-census-report.md), and [`lane-state.json`](../wave-3/lane-state.json).

## Inputs and verification plan

| Input | Link | SHA-256 |
|---|---|---|
| Wave-4 dispatch receipt | [`wave-4-dispatch-receipt.json`](../../../../wave-4-dispatch-receipt.json) | `df601782030aeda5a30e34e12c6a80fa1d9d0e13e1b335992f00f80821ea204e` |
| Platform-depth P1-A (ranks 23–34) | [`platform-p1-evidence-a.jsonl`](../../../../../phase-5/outputs/platform-p1-evidence-a.jsonl) | `71999ed84cec6ab52f3888ffe5891ff59261bcdb2f22a4157375f63c21ebd5ce` |
| Platform-depth P1-B (ranks 35–46) | [`platform-p1-evidence-b.jsonl`](../../../../../phase-5/outputs/platform-p1-evidence-b.jsonl) | `52ce203fadd83d55cf321aceb03bcd29dec6924b5797f1dee5e991b0ba3467a6` |
| Phase-7 program | [`PHASE-7-PROGRAM.md`](../../../../PHASE-7-PROGRAM.md) | local read-only input |
| Phase-7 state | [`phase-7-state.json`](../../../../phase-7-state.json) | shared file intentionally unmodified |

Post-write smoke must recompute JSONL parse, exact rank and 24×8 coverage, composite identity/source URL parity, Wave-1/Wave-2/Wave-3 hash preservation, required claim/proof/access/rights/falsifier/gate fields, boundaries, report links, and diff whitespace. No network or execution probe is authorized.

## Task ledger

| Task | State |
|---|---|
| Read Wave-4 dispatch receipt and platform-depth P1-A/P1-B inputs | complete |
| Select exact disjoint ranks 23–46 | complete; 24 surfaces |
| Preserve Wave-1/Wave-2/Wave-3 universe, dictionary, evidence, and taxonomy anchors | complete |
| Publish eight priority keys | complete; 192 unique rows |
| Separate first-party claims from capability proof; retain access/rights/SBOM unknowns | complete |
| Write Wave-4 report and lane state under new subtree | complete |
| Run post-write smoke and deliver fresh callback | recorded in lane-state/callback receipt |

## Boundary

`research_only=true`; `execution_status=UNEXECUTED`; `admission_status=NOT_ADMITTED`; `implementation_authorized=false`; `parent_goal_status=active`; overall Phase-7 completion is not claimed.
