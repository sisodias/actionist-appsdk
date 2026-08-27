# Phase-7 competitor census — Wave 5 (P7-COMPETITOR-FEATURES-W5)

Lane-local research artifact for the leading platform-depth tranche. Only this
`outputs/wave-5/` subtree is written. Wave 1 through Wave 4, phases 2–6, and
coordinator files are preserved inputs. This is not an overall Phase-7
completion claim.

## Scope and boundaries

| Contract item | Value |
|---|---|
| Selected surfaces | 22 exact platform-depth ranks 1–22 |
| Source split | P0-A ranks 1–7; P0-B ranks 8–14; P1-A ranks 15–22 |
| Feature keys | Established eight priority keys; 22 × 8 = 176 rows |
| Product-surface universe | Wave-1 118-surface universe preserved by composite identity join |
| Dictionary | Wave-1 144 provisional keys preserved |
| Taxonomy | 68 stated vs 144 enumerated; verdict `taxonomy_count_conflict`; mapping unresolved; denominator `NONE` |
| Evidence mode | Public first-party/read-only platform packet evidence; reachability and product claims are not capability proof |
| Execution | `UNEXECUTED`; no login, credentials, client/private data, source execution, cloning/copying, implementation, build, deploy, benchmark, scan, rollback, or admission |
| Admission | `NOT_ADMITTED`; rows remain reference-only |
| Parent | active; shared Phase-7 state not promoted |

The requested `/2026-08-27/phase-7/` dispatch mirror was absent. The
authoritative dispatch receipt at the exact pack root
`research/actionmodel-builder-research-2026-08-26/phase-7/` was read and used;
this path difference is recorded as an access/coordination limit, not silently
resolved by inventing a source.

## Exact counts

`competitor-feature-evidence.jsonl` contains exactly 176 unique surface×feature
rows across 22 surfaces and 8 keys. Rank coverage is exactly 1–22; no padding
rows were added.

| Feature key | Rows |
|---|---:|
| `auth.consent_and_approval` | 22 |
| `deploy.mobile_distribution` | 22 |
| `economics.success_cost` | 22 |
| `exit.source_export` | 22 |
| `lifecycle.continuity_contract` | 22 |
| `recovery.source_rollback` | 22 |
| `security.tenant_isolation` | 22 |
| `ui.asset_ownership` | 22 |

Observed row status counts are recorded in `lane-state.json`: unknown=115,
gated=29, partially_observed=28, and legacy=4. These are controlled
documentation/access dispositions, not runtime test results. Capability proof
is `not_established` for every row.

## Source and composite identity join

The dispatch contract identifies the source packets as the leading P0/P1
platform-depth tranche. The on-disk lineage is retained exactly: P0-A supplies
ranks 1–7, P0-B supplies ranks 8–14, and P1-A supplies ranks 15–22. Existing
surface numeric IDs can collide with other registers, so the join key is the
composite `(source_record_type, source_record_id)` and each row preserves the
source packet URL parity.

| Rank | Surface | Preserved ref | Source packet | First-party source | Access / limitation |
|---:|---|---|---|---|---|
| 1 | Locofy | PS-017 | P0-A | [dev.locofy.ai/docs](https://www.dev.locofy.ai/docs/) | HTTP 200; thin bounded docs index; workflow pages not opened |
| 2 | v0 | PS-002 | P0-A | [vercel.com/docs/v0](https://vercel.com/docs/v0) | Redirect/readers returned unsupported-content/internal-error; no claim admitted |
| 3 | n8n | PS-025 | P0-A | [n8n.io/pricing](https://n8n.io/pricing/) | HTTP 200; public pricing/comparison page; no account or trial |
| 4 | Softgen | PS-032 | P0-A | [new.softgen.ai/pricing](https://new.softgen.ai/pricing) | HTTP 200 but reader-thin/image-dominated; pricing claims not admitted |
| 5 | Browser Use | PS-060 | P0-A | [GitHub CLOUD.md](https://github.com/browser-use/browser-use/blob/main/CLOUD.md) | HTTP 200; public official docs; no sign-in, key, browser, or task |
| 6 | CodeSandbox | PS-065 | P0-A | [codesandbox.io](https://codesandbox.io/) | HTTP 200; public homepage; no workspace, code, or runtime |
| 7 | NocoBase | PS-012 | P0-A | [AI Builder docs](https://docs.nocobase.com/ai-builder); [commercial page](https://www.nocobase.com/en/commercial) | Docs HTTP 200; commercial page reader timeout despite bounded curl; no install/account/deploy |
| 8 | Databutton → Riff | PS-033 | P0-B | [databutton.com](https://databutton.com/); [riff.ai](https://riff.ai/) | Public reader reached HTTP 200 redirect; no authenticated workflow |
| 9 | Anything / Create.xyz | PS-035 | P0-B | [Create first app](https://www.create.xyz/docs/first-app) | Public reader reached HTTP 200; no project or runtime |
| 10 | ServiceNow App Engine/Now Assist | PS-042 | P0-B | [App Engine pricing](https://www.servicenow.com/uk/products/now-platform-app-engine/pricing.html) | Reader reached; prior bounded curl HTTP 403; no tenant/account |
| 11 | Devin Desktop | PS-048 | P0-B | [Devin Desktop](https://devin.ai/desktop) | Reader reached; prior bounded curl HTTP 429; no account/task |
| 12 | Make | PS-053 | P0-B | [Make AI Agents](https://www.make.com/en/ai-agents) | Reader reached; prior bounded curl HTTP 403; no scenario/agent |
| 13 | MultiOn | PS-061 | P0-B | [MultiOn welcome](https://docs.multion.ai/welcome) | HTTP 200; legacy-beta documentation signal; no task or account |
| 14 | Ona / former Gitpod | PS-067 | P0-B | [Ona pricing](https://ona.com/pricing) | HTTP 200; current-rebrand surface; continuity not established |
| 15 | Relay | PS-056 | P1-A | [relay.app](https://relay.app/) | HTTP 200 shutdown notice; login link not used; lifecycle status is shutdown |
| 16 | Lovable | PS-001 | P1-A | [Agent mode docs](https://docs.lovable.dev/features/agent-mode) | HTTP 200; public docs; account/project access not used |
| 17 | Retool | PS-010 | P1-A | [AI app generation](https://retool.com/ai-app-generation) | HTTP 200; public product page; demo/account not used |
| 18 | ToolJet | PS-011 | P1-A | [ToolJet AI overview](https://docs.tooljet.ai/docs/setup/tooljet-ai/overview/) | HTTP 200; public setup docs; no workspace/key/request |
| 19 | Appsmith | PS-013 | P1-A | [Appsmith docs](https://docs.appsmith.com/) | HTTP 200; public docs; no cloud account or install |
| 20 | Builder.io | PS-014 | P1-A | [Builder Fusion](https://site.builder.io/m/design-to-code) | HTTP 200; public design-to-code page; no design import/account |
| 21 | Modal Sandboxes | PS-018 | P1-A | [Modal Sandboxes](https://modal.com/products/sandboxes) | HTTP 200; public product page; no account or sandbox |
| 22 | Daytona Sandboxes | PS-019 | P1-A | [Daytona Sandboxes](https://www.daytona.io/docs/sandboxes) | HTTP 200; public docs; no key, sandbox, or code execution |

Wave-1 universe references resolve to [`product-surface-universe.jsonl`](../product-surface-universe.jsonl) and the packet paths and observed access details remain in each row's `source` and `access` objects. Reachability is not capability proof.

## Claims versus capability proof

Each row separates `direct_claims.first_party_product_claims` from
`capability_proof`. Direct claims are the first-party documentation/read
observations carried from the immutable platform-depth packets;
`feature_specific_matches` records only explicit feature terms. Inferences
retain the deterministic rank and composite identity join but do not establish
runtime behavior, authority, consent, tenant isolation, portability, rollback,
mobile distribution, economics, or support. `capability_proof.status` remains
`not_established` for every row because no authenticated workflow, runtime
action, benchmark, scan, or execution was authorized.

## Rights, provenance, SBOM, and feature gaps

Every row retains unknowns for rights/ownership/provenance, SBOM, support/OEM,
authority/consent, tenant boundaries, export, rollback, mobile distribution,
economics, lifecycle continuity, and other Block Contract fields. Public
documentation signals are not license clearance, provenance proof, dependency
inventory, support commitment, or reuse/admission authorization. No source was
cloned or copied, and no SBOM or runtime evidence was generated.

For each feature, the row includes a falsifier and the smallest next
read-only gate. Those gates are proposals only: no gate, falsifier, login,
credential, task, token round-trip, runtime, or vendor action was executed.
Smoke marker: `next read-only gate` is a proposed bounded follow-up, never an
executed capability test.

## Wave-1 through Wave-4 preservation anchors

| Preserved artifact | SHA-256 |
|---|---|
| Wave-1 `product-surface-universe.jsonl` | `0293f29f194f9e2424e5635d22ada476beea897f2343a470b5d2a897326b48d6` |
| Wave-1 `feature-dictionary.jsonl` | `e6654a5e00f291f9d6fa50b302838359614dff956f65d3342b2b71aaa7ff0161` |
| Wave-1 `competitor-feature-evidence.jsonl` | `4de26ea9f3075b690e695ab75ca6d4939f0a8f1fde854c231361941723b47633` |
| Wave-1 `feature-census-report.md` | `b8a35e215ada4823f74fea0dc342137cdb29f06cc2bb02a3b60658e3ab213f7d` |
| Wave-1 `lane-state.json` | `c427f18c93c045e1a2fea1d9f57229b552cc02d6a8dc3a7c2702a593c96d2b6b` |
| Wave-2 `competitor-feature-evidence.jsonl` | `429b12fdf38126a20981dab446637feb8211848c9aa151795ea6d6acd1c40dd3` |
| Wave-2 `feature-census-report.md` | `b59ee3b7a21d5087927a33b7b17c10abf7cae8f7bfc2b29e9d03531b2cdb1697` |
| Wave-2 `lane-state.json` | `73ebd48e29c4d339dccdc929b192a65d17c26391393edb1e16c0fabcbf0ffc94` |
| Wave-3 `competitor-feature-evidence.jsonl` | `b833341c6df0e542361462a2459b844b4a91ea82defbc9f0c8e2b7372251551b` |
| Wave-3 `feature-census-report.md` | `2abffd69e976d6100eead05616101f125558c2ec8eced1b1231e17af18f3721d` |
| Wave-3 `lane-state.json` | `d8d478a1008dc2aa102a7145cc777453088b58235a9a026962078837092e1f1c` |
| Wave-4 `competitor-feature-evidence.jsonl` | `126c5fc8222e598cfbead9bb24d3811b3596802f2db628dade8369649b6f9726` |
| Wave-4 `feature-census-report.md` | `df73e91a78e13615605cbe48fe2bfccea1152d4695ea1d4c86e2f534d5606ae5` |
| Wave-4 `lane-state.json` | `556ce2144427fd6a0649eb977f937a8eb73b689427b05cf5a84641be70e184d1` |

Sibling links: Wave-2 [`competitor-feature-evidence.jsonl`](../wave-2/competitor-feature-evidence.jsonl), Wave-3 [`competitor-feature-evidence.jsonl`](../wave-3/competitor-feature-evidence.jsonl), and Wave-4 [`competitor-feature-evidence.jsonl`](../wave-4/competitor-feature-evidence.jsonl). Their report and state links are in the corresponding sibling directories. The Wave-1 universe and dictionary are preserved at [`../product-surface-universe.jsonl`](../product-surface-universe.jsonl) and [`../feature-dictionary.jsonl`](../feature-dictionary.jsonl).

## Inputs, hashes, and verification

| Input | Link | SHA-256 |
|---|---|---|
| W5 dispatch receipt | [`wave-5-dispatch-receipt.json`](../../../../wave-5-dispatch-receipt.json) | `f8b096b12f6b58a39fa58cc2ee6e614d585d5ef4da9a298fa826e903f09e6478` |
| Phase-7 program | [`PHASE-7-PROGRAM.md`](../../../../PHASE-7-PROGRAM.md) | `bde02720f1b169c190607403632a6b8b8f783142f659f779869f54396228d2d0` |
| P0-A ranks 1–7 | [`platform-p0-evidence-a.jsonl`](../../../../../phase-4/outputs/platform-p0-evidence-a.jsonl) | `fa187a2ca9e33eccb48ba3f009db988c0bb062b42282c93e6b75a087865e26ca` |
| P0-B ranks 8–14 | [`platform-p0-evidence-b.jsonl`](../../../../../phase-4/outputs/platform-p0-evidence-b.jsonl) | `b05193075ea8c3a39431ab89404ffad2d811dd740e24c9cf5951ac108f857d42` |
| P1-A ranks 15–22 | [`platform-p1-evidence-a.jsonl`](../../../../../phase-5/outputs/platform-p1-evidence-a.jsonl) | `71999ed84cec6ab52f3888ffe5891ff59261bcdb2f22a4157375f63c21ebd5ce` |
| Platform-depth register | [`platform-deepdives-register.jsonl`](../../../../../phase-2/outputs/platform-deepdives-register.jsonl) | `13213b409c1d66a0c105a39d6046f98c6c4dbd581b15aa93dfee17d909cecc1c` |
| Phase-7 shared state | [`phase-7-state.json`](../../../../phase-7-state.json) | read-only live hash recorded in lane state |

The source register path above is the on-disk platform-depth register anchor used by
the prior packets; if a coordinator names a different register filename, the
immutable packet hashes and row-level source identities remain authoritative.

Post-write smoke recomputes JSONL parsing, exact rank/cross-product coverage,
composite identity/source URL parity, all required claim/proof/access/rights/
falsifier/gate fields, preserved hashes, report-relative links, taxonomy
markers, boundary flags, and Git diff whitespace. No network or execution
probe is authorized.

## Task ledger

| Task | State |
|---|---|
| Read W5 dispatch receipt at the authoritative 2026-08-26 pack root | complete |
| Select exact disjoint ranks 1–22 with P0/P1 source split | complete; 22 surfaces |
| Preserve Wave-1 through Wave-4 packets, hashes, composite identities, and taxonomy anchors | complete |
| Publish the eight controlled feature keys | complete; 176 unique rows |
| Separate first-party claims from capability proof; retain access/rights/SBOM unknowns | complete |
| Write W5 report and lane state under the new subtree | complete |
| Run post-write smoke and deliver fresh callback | recorded in lane-state/callback receipt |

## Boundary

`research_only=true`; `execution_status=UNEXECUTED`;
`admission_status=NOT_ADMITTED`; `implementation_authorized=false`;
`parent_goal_status=active`; shared Phase-7 state is not promoted; overall
Phase-7 completion is not claimed.
