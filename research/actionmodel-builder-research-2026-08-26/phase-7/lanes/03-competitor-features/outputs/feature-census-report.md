# Phase-7 competitor feature census — P7-COMPETITOR-FEATURES

Lane-local research artifact. This packet is a bounded first tranche, not an overall Phase-7 completion claim. It records public first-party reachability/documentation signals and explicit unknowns; it does not admit a product, prove a capability, or authorize implementation.

## Contract and boundaries

| Contract item | Recorded value |
|---|---|
| Mode | research-only |
| Parent | active; shared Phase-7 state is not promoted by this lane |
| Universe | 117 platform-register records + 1 explicit FlutterFlow gap candidate = 118 product-surface records |
| Relationship edges | 15 normalized company/product/family/rebrand/lifecycle/OSS-sibling records |
| Feature tranche | 23 Phase-3 platform-depth ranks (95–117) + FlutterFlow, across 8 priority keys = 192 rows |
| Execution | UNEXECUTED; no vendor login, credentials, private/client data, source execution, clone, build, deploy, benchmark, scan, rollback, or admission |
| Admission | NOT_ADMITTED; all rows remain reference-only |
| Implementation | false / not authorized |

## Taxonomy reconciliation

The named census finding states a 68-key taxonomy but enumerates 18 domains × 8 keys = 144 provisional keys. No authoritative 68-to-144 mapping was supplied. The dictionary preserves all 144 keys, marks each `denominator_eligible=false`, and uses no 68 denominator. Verdict: `taxonomy_count_conflict`; mapping: `unresolved`; accepted denominator: `NONE`. See [`feature-dictionary.jsonl`](feature-dictionary.jsonl) and [`luna-competitor-feature-census-findings.md`](../../../outputs/luna-competitor-feature-census-findings.md).

## Product-surface universe

`product-surface-universe.jsonl` contains 118 product-surface records and 15 separate relationship records. The 117 register records are retained in file order as `PS-001` through `PS-117`; the explicit local census gap is `PS-118` (FlutterFlow). 117 surfaces carry one or more recorded source URLs; FlutterFlow carries no resolved first-party URL in the named local inputs. Unique recorded source URLs: 119.

| Surface slice | Count | Source treatment |
|---|---:|---|
| Canonical/register surfaces | 117 | Exact register identity and recorded source fields preserved |
| Explicit gap candidate | 1 | FlutterFlow; local gap note only, no first-party feature claim |
| Relationship edges | 15 | Separate records; external labels stay unresolved where no register row exists |

### Identity and lifecycle normalization

Edges are identity normalization only, not product capability or rights conclusions. Each edge retains direct versus inferred class, source path/URL, limitation, and boundary fields in the universe JSONL. Normalized cases include Bolt.new → bolt.diy (`oss_sibling`), Databutton → Riff (`rebrand_successor`), Ona/former Gitpod → Gitpod (`rebrand_successor`), Relay (`lifecycle_shutdown`), MultiOn (`legacy_current`, unresolved), Google AI Studio/Firebase Studio/Antigravity family, Vercel → v0 and Vercel AI SDK, GitHub Spark → GitHub Copilot cloud agent, Cloudflare product joins, OpenAI documentation/SDK, and Anthropic managed-agent/Claude Code product joins. External labels and historical identities are not silently promoted to separate canonical surfaces.

## First full-fidelity tranche

Feature rows use the controlled status vocabulary: `observed`, `partially_observed`, `not_found`, `gated`, `contradicted`, `legacy`, `shutdown`, `unknown`, `not_applicable`. The eight selected keys prioritize exit/export, rollback, authority/consent, tenant/security, mobile distribution (including the FlutterFlow gap), design/asset provenance, economics, and lifecycle continuity.

| Feature key | Related register signal, if any | Rows |
|---|---|---:|
| `exit.source_export` | `import_export`, `portability` | 24 |
| `recovery.source_rollback` | `rollback` | 24 |
| `auth.consent_and_approval` | `agent_tool_authority` | 24 |
| `security.tenant_isolation` | `tenancy` | 24 |
| `deploy.mobile_distribution` | none; deployment is not mobile/store proof | 24 |
| `ui.asset_ownership` | none | 24 |
| `economics.success_cost` | `pricing_usage` | 24 |
| `lifecycle.continuity_contract` | `lifecycle` | 24 |

Observed row status counts: unknown=192. Evidence classes: E/D=184, I/U=8. Every row has `capability_proof.status=not_established`; no runtime or clean-room result is represented.

### Surface tranche join

| Rank | Surface | Universe ref | First-party URL |
|---:|---|---|---|
| 95 | Appwrite | PS-073 | [https://appwrite.io/](https://appwrite.io/) |
| 96 | Supabase | PS-074 | [https://supabase.com/](https://supabase.com/) |
| 97 | Webflow AI | PS-068 | [https://webflow.com/ai](https://webflow.com/ai) |
| 98 | Relume | PS-104 | [https://www.relume.io/](https://www.relume.io/) |
| 99 | Magic Patterns | PS-105 | [https://www.magicpatterns.com/](https://www.magicpatterns.com/) |
| 100 | Shipixen | PS-106 | [https://shipixen.com/](https://shipixen.com/) |
| 101 | Celigo | PS-089 | [https://www.celigo.com/](https://www.celigo.com/) |
| 102 | Parabola | PS-090 | [https://parabola.io/](https://parabola.io/) |
| 103 | Baserow | PS-071 | [https://baserow.io/](https://baserow.io/) |
| 104 | Durable | PS-107 | [https://durable.co/](https://durable.co/) |
| 105 | Wix AI Website Builder | PS-108 | [https://www.wix.com/ai-website-builder](https://www.wix.com/ai-website-builder) |
| 106 | WordPress.com AI Builder | PS-109 | [https://wordpress.com/ai-website-builder/](https://wordpress.com/ai-website-builder/) |
| 107 | Caspio | PS-113 | [https://www.caspio.com/pricing/](https://www.caspio.com/pricing/) |
| 108 | Microsoft Copilot Studio | PS-078 | [https://www.microsoft.com/en-us/microsoft-copilot/microsoft-copilot-studio](https://www.microsoft.com/en-us/microsoft-copilot/microsoft-copilot-studio) |
| 109 | Amazon Bedrock Agents | PS-079 | [https://aws.amazon.com/bedrock/agents/](https://aws.amazon.com/bedrock/agents/) |
| 110 | Vercel | PS-098 | [https://vercel.com/](https://vercel.com/) |
| 111 | Cloudflare Agents Sandbox | PS-100 | [https://developers.cloudflare.com/agents/tools/sandbox/](https://developers.cloudflare.com/agents/tools/sandbox/) |
| 112 | Claude Managed Agents | PS-115 | [https://platform.claude.com/docs/en/managed-agents/environments](https://platform.claude.com/docs/en/managed-agents/environments) |
| 113 | Cloudflare Workers | PS-116 | [https://developers.cloudflare.com/workers/](https://developers.cloudflare.com/workers/) |
| 114 | OpenAI Agents platform docs | PS-117 | [https://platform.openai.com/docs/guides/agents](https://platform.openai.com/docs/guides/agents) |
| 115 | Vercel AI SDK | PS-076 | [https://sdk.vercel.ai/](https://sdk.vercel.ai/) |
| 116 | GitHub Spark | PS-077 | [https://github.com/features/spark](https://github.com/features/spark) |
| 117 | Firebase Studio | PS-075 | [https://firebase.google.com/docs/studio](https://firebase.google.com/docs/studio) |
| — | FlutterFlow | PS-118 | none resolved in named local inputs |

For the 23 ranked surfaces, `E/D` means the first-party URL/reachability or documentation signal recorded by the Phase-3/6 packet; it is not a feature claim. FlutterFlow is `I/U` because it is included as an explicit local gap candidate and has no resolved first-party read in this tranche. All rows preserve source path, date, access, limitations, unknowns, falsifier, next gate, rights/provenance, and research boundary in [`competitor-feature-evidence.jsonl`](competitor-feature-evidence.jsonl).

## Evidence discipline

- First-party product claim: each row has a separate `direct_claims.first_party_product_claim`. For this tranche it is either null or explicitly states that only a related register field remains unverified; no marketing adjacency was converted into a feature claim.
- Capability proof: each row has a separate `capability_proof` object, always `not_established`. No generated app, authenticated behavior, source inspection, execution, deployment, benchmark, scan, or production test was performed.
- Inference: rank selection is deterministic and identity joins are marked as inferred or named-signal-only where applicable. Selection, category, and source reachability are not capability proof.
- Rights/provenance: all rows retain `rights_status=unknown`, `provenance_status=not_cleared`, `sbom_status=unknown`, and `reuse_or_admission=not_admitted` unless a future bounded source read changes those fields.

## Falsifiers and smallest next gates

Every evidence row contains a row-specific falsifier and a row-specific smallest read-only gate. The common falsifier is a bounded first-party contradiction or a clean-room/read-only artifact that establishes the opposite status. The next gate re-opens only the exact recorded first-party URL for the one feature, or resolves FlutterFlow identity and one first-party source; it does not authorize login, execution, source copying, build, deploy, benchmark, scan, or admission.

## Named input register and local links

| Input | Local link | SHA-256 |
|---|---|---|
| 117-record platform register | [`platform-deepdives-register.jsonl`](../../../../phase-2/outputs/platform-deepdives-register.jsonl) | `13213b409c1d66a0c105a39d6046f98c6c4dbd581b15aa93dfee17d909cecc1c` |
| Luna census findings | [`luna-competitor-feature-census-findings.md`](../../../outputs/luna-competitor-feature-census-findings.md) | `5347053b6f10f9cccb6fefdc64ef5ecc578cf570c337377d0d454a4472b454f6` |
| Phase-6 final platform packet (ranks 95–117) | [`platform-p2-evidence-c.jsonl`](../../../../phase-6/outputs/platform-p2-evidence-c.jsonl) | `b03a1445a27d090715fa26ff66e628563d7ae0504c7b99bae634499c04b920b8` |
| Phase-4 platform packet directory | [`phase-4/outputs/`](../../../../phase-4/outputs/) | read-only input family |
| Phase-5 platform packet directory | [`phase-5/outputs/`](../../../../phase-5/outputs/) | read-only input family |
| Phase-6 platform packet directory | [`phase-6/outputs/`](../../../../phase-6/outputs/) | read-only input family |

Phase-4/5/6 platform packets, company dossiers, public-signal packs, the 117-record register, the Phase-7 program/state, and the named Luna findings were read as local research inputs before this write. No network read was needed for this lane. Demand/public-signal material is context only and is not used as product capability proof.

## Task ledger

| Task | State |
|---|---|
| Read Phase-7 contract/state and named local research inputs | complete |
| Preserve 117 register identities and add explicit FlutterFlow gap | complete |
| Reconcile stated 68 versus enumerated 144 taxonomy | complete; conflict unresolved and no 68 denominator used |
| Normalize company/product/lifecycle/rebrand/OSS-sibling edges | complete; 15 explicit edge records |
| Publish 8-key priority tranche | complete; 192 rows |
| Separate claims, capability proof, access, rights, unknowns, falsifiers, and gates | complete |
| Run post-write structural/source/boundary/hash/diff smoke | recorded in lane-state after write |
| Deliver lane callback only; do not promote shared Phase-7 state | pending callback |

## Lane receipt boundary

`execution_status=UNEXECUTED`; `admission_status=NOT_ADMITTED`; `implementation_authorized=false`; parent goal remains active; overall Phase-7 completion is not claimed.
