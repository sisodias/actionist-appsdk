# Phase-7 competitor feature census — Wave 10 (P7-COMPETITOR-FEATURES-W10)

## Packet contract

This lane-local packet is a research-only round-6 context refresh for the immutable 118-surface universe. It contains exactly 117 ranked surfaces (platform-depth ranks 1..117) plus the explicit PS-118 FlutterFlow gap, crossed with eight established priority keys: 118 × 8 = 944 unique rows. No padding or overall Phase-7 completion claim is present.

| Contract field | W10 value |
|---|---|
| Lane | `P7-COMPETITOR-FEATURES-W10` |
| Evidence round | `6` |
| Surfaces | 118 = 117 ranked + explicit `PS-118` gap |
| Feature keys | 8 established keys; no taxonomy denominator |
| Rows | exactly 944 = 118 × 8 |
| Identity | `surface_identity × feature_key × evidence_round` |
| Prior exclusion | W1–W9 excluded by round-aware identity; W10 uses `round-6` |
| Taxonomy | 68 stated vs 144 enumerated; unresolved; denominator `NONE` |
| Evidence mode | Inherited W9 public-read/access context; no new source read |
| Capability proof | `not_established` for all rows |
| Execution | `UNEXECUTED`; no runtime, login, source execution, scan, build, or deploy |
| Admission | `NOT_ADMITTED`; `admitted_blocks=0`; reference-only |
| Parent | active; shared Phase-7 state unmodified/unpromoted |

W10 does not represent a sixth runtime or authenticated observation. Each row retains W9 source/date/access context and points to its exact W9 predecessor under `round_context`; `round6_status` is `no_new_source_read; inherited_round5_context_only` and `new_capability_proof=false.

## Exact counts

`competitor-feature-evidence.jsonl` parses to exactly 944 records, with 118 surface identities, 8 feature keys, and 944 unique round-aware identities.

| Coverage component | Surfaces | Rows |
|---|---:|---:|
| Ranked PS-001..PS-117 | 117 | 936 |
| Explicit PS-118 gap (FlutterFlow) | 1 | 8 |
| **Total** | **118** | **944** |

| Feature key | Rows |
|---|---:|
| `auth.consent_and_approval` | 118 |
| `deploy.mobile_distribution` | 118 |
| `economics.success_cost` | 118 |
| `exit.source_export` | 118 |
| `lifecycle.continuity_contract` | 118 |
| `recovery.source_rollback` | 118 |
| `security.tenant_isolation` | 118 |
| `ui.asset_ownership` | 118 |

Feature-status counts are inherited context only: `gated=40`, `legacy=4`, `partially_observed=100`, `unknown=800`.
Evidence-class counts are inherited context/access classifications, not runtime results: `E/D=880`, `E/D+E/U=8`, `E/U=48`, `I/U=8`.
Capability proof is `not_established` for all 944 rows.

## Identity, claims, and coverage policy

Ranked records preserve exact immutable surface identity (`surface_identity_key`, `surface_ref`, register record type/raw ID, and platform-depth rank). PS-118 remains the explicit gap identity with null rank and no invented first-party URL. W10 evidence IDs are newly namespaced `W10-CFE-0001` through `W10-CFE-0944`; the round-aware key is `<surface_identity_key>|<feature_key>|round-6`.

`direct_claims` remains separate from `inferred_claims`. Direct claims are inherited public first-party/documentation claims; inherited reasoning is retained under the inferred structure and the W9 predecessor is explicit. Neither reachability, a URL, a documentation claim, nor a local gap is capability proof.

## W9 predecessor and access limits

Every W10 row points to its exact W9 predecessor and preserves W9 source URLs, source path, observed date, access signal, evidence class, limitation, rights/provenance/SBOM unknowns, falsifier, and smallest next read-only gate. The W10 round adds no source inspection and no runtime probe. PS-118 retains `source.urls=[]`, `source.url=null`, and its explicit local gap note.

| Input | SHA-256 |
|---|---|
| W9 evidence predecessor | `8b8bb8e50cb43ebf09bb8bfe91099674709f4102a383e6ccf89662a03867a288` |
| W9 report | `134311c14239ee5113fbc95990b60f8f0064deaafb155590af3668bf620b85af` |
| W9 lane state | `3dc4e29c215037e5e45ce1d1b22548168c10524c1e9740860f682e040af30ba7` |
| W10 dispatch receipt | `e3c44562d20809cb1a00b1b22aec5acc434ebcf8ff5516a154a545b5fe8aa0fc` |
| Phase-7 program | `bde02720f1b169c190607403632a6b8b8f783142f659f779869f54396228d2d0` |
| W9 coordinator receipt | `51ba33c9a1ee5cab12b1a70867ec83233a5af8c6bc009b893e4b1f65fa912c49` |
| Immutable platform register | `13213b409c1d66a0c105a39d6046f98c6c4dbd581b15aa93dfee17d909cecc1c` |
| Shared Phase-7 state (read-only) | `b86e318cdf80a2c5aa0f3ffcb9721f4582100057638dd2c0742c645bda09caa0`; not edited |

## Rights, provenance, SBOM, and read-only gates

Rights/provenance/SBOM/support/OEM fields remain explicit unknowns or gated signals. They are not legal clearance, ownership proof, license decisions, dependency inventory, reuse authorization, or admission. Every row retains a falsifier and smallest next read-only gate; no gate was executed in W10.

## Taxonomy decision

The 68-stated versus 144-enumerated taxonomy conflict remains unresolved. The verdict is `taxonomy_count_conflict`, mapping is `unresolved`, and denominator is `NONE`/JSON `null`. The eight priority keys are labels only; no percentage or completeness score is derived from either count.

## W1–W9 preservation anchors

Prior packets remain unchanged. Their hashes were read before W10 output creation:

| Wave | Evidence rows | Evidence SHA-256 | Report SHA-256 | Lane-state SHA-256 |
|---:|---:|---|---|---|
| W1 | 192 | `4de26ea9f3075b690e695ab75ca6d4939f0a8f1fde854c231361941723b47633` | `b8a35e215ada4823f74fea0dc342137cdb29f06cc2bb02a3b60658e3ab213f7d` | `c427f18c93c045e1a2fea1d9f57229b552cc02d6a8dc3a7c2702a593c96d2b6b` |
| W2 | 192 | `429b12fdf38126a20981dab446637feb8211848c9aa151795ea6d6acd1c40dd3` | `b59ee3b7a21d5087927a33b7b17c10abf7cae8f7bfc2b29e9d03531b2cdb1697` | `73ebd48e29c4d339dccdc929b192a65d17c26391393edb1e16c0fabcbf0ffc94` |
| W3 | 192 | `b833341c6df0e542361462a2459b844b4a91ea82defbc9f0c8e2b7372251551b` | `2abffd69e976d6100eead05616101f125558c2ec8eced1b1231e17af18f3721d` | `d8d478a1008dc2aa102a7145cc777453088b58235a9a026962078837092e1f1c` |
| W4 | 192 | `126c5fc8222e598cfbead9bb24d3811b3596802f2db628dade8369649b6f9726` | `df73e91a78e13615605cbe48fe2bfccea1152d4695ea1d4c86e2f534d5606ae5` | `556ce2144427fd6a0649eb977f937a8eb73b689427b05cf5a84641be70e184d1` |
| W5 | 176 | `04384df3534cb6d7bf198491be5bb9ba27cd0a840f483222ea97f6a47bb613fc` | `bc8818e1b28810032cb293b67449df9044e64ea287edfa54e451eb81fe61e07e` | `9137a5db83c35ea689d90178742a6d40ba96bd5ac5879261ea83292517435bcd` |
| W6 | 944 | `c0580897e5d94ee60d846bf48ffdcf428dc3ca1db9eb1db8c795f0969d99d06d` | `0af25295067687f0b55a3b122e5ea22c77eeedf6c72d1d8547516a3ba9bbca25` | `d07c7d507a13bf0d32404e504dbc98d88546ce813d11fa856502dc5060e0473b` |
| W7 | 944 | `175c70bd5fb32b70f5bad8f390a39a2ed04ecf8139624406b6ed2f1365545ce8` | `e78ed62dd2c67e10c2e2cc133a0145ae049d6e6e2a4705a2a6b171c27759d87e` | `ff1c222a809363383607c272b0a2ffe6e9c806842db5229a21496a8226026c83` |
| W8 | 944 | `876d1cb5d4c574ec20b54e3683d02b3401854b5c3dbfde28950a76c93f975389` | `dfed042846cf92bcd33c7a074f82260b1c0cd2837e710d0d906f4ac571f7c3a3` | `050652c920d1d61e063f4c72a2c558de6a29efb15b0642f09c6027825ba09142` |
| W9 | 944 | `8b8bb8e50cb43ebf09bb8bfe91099674709f4102a383e6ccf89662a03867a288` | `134311c14239ee5113fbc95990b60f8f0064deaafb155590af3668bf620b85af` | `3dc4e29c215037e5e45ce1d1b22548168c10524c1e9740860f682e040af30ba7` |

Source links (relative to this report): [`W1 evidence`](../competitor-feature-evidence.jsonl), [`W2`](../wave-2/competitor-feature-evidence.jsonl), [`W3`](../wave-3/competitor-feature-evidence.jsonl), [`W4`](../wave-4/competitor-feature-evidence.jsonl), [`W5`](../wave-5/competitor-feature-evidence.jsonl), [`W6`](../wave-6/competitor-feature-evidence.jsonl), [`W7`](../wave-7/competitor-feature-evidence.jsonl), [`W8`](../wave-8/competitor-feature-evidence.jsonl), and [`W9`](../wave-9/competitor-feature-evidence.jsonl).

## Inputs and report-relative links

| Input | Link | SHA-256 |
|---|---|---|
| W10 dispatch receipt | [`wave-10-dispatch-receipt.json`](../../../../wave-10-dispatch-receipt.json) | `e3c44562d20809cb1a00b1b22aec5acc434ebcf8ff5516a154a545b5fe8aa0fc` |
| Phase-7 program | [`PHASE-7-PROGRAM.md`](../../../../PHASE-7-PROGRAM.md) | `bde02720f1b169c190607403632a6b8b8f783142f659f779869f54396228d2d0` |
| W9 coordinator receipt | [`wave-9-coordinator-receipt.json`](../../../../wave-9-coordinator-receipt.json) | `51ba33c9a1ee5cab12b1a70867ec83233a5af8c6bc009b893e4b1f65fa912c49` |
| Immutable platform register | [`platform-deepdives-register.jsonl`](../../../../../phase-2/outputs/platform-deepdives-register.jsonl) | `13213b409c1d66a0c105a39d6046f98c6c4dbd581b15aa93dfee17d909cecc1c` |
| Shared Phase-7 state, read-only | [`phase-7-state.json`](../../../../phase-7-state.json) | `b86e318cdf80a2c5aa0f3ffcb9721f4582100057638dd2c0742c645bda09caa0`; not edited |
| Product-surface universe | [`product-surface-universe.jsonl`](../product-surface-universe.jsonl) | `0293f29f194f9e2424e5635d22ada476beea897f2343a470b5d2a897326b48d6` |
| Feature dictionary | [`feature-dictionary.jsonl`](../feature-dictionary.jsonl) | `e6654a5e00f291f9d6fa50b302838359614dff956f65d3342b2b71aaa7ff0161` |
| PS-118 gap note | [`luna-competitor-feature-census-findings.md`](../../../../outputs/luna-competitor-feature-census-findings.md) | inherited local gap; no first-party URL claimed |

## Verification contract

The independent post-write smoke parses JSONL, validates exact 118×8×round-6 coverage, rank/gap shape, surface identity parity, W9 predecessor parity, round-aware disjointness from W1–W9, source/date/URL parity, claims/capability separation, controlled statuses, rights/SBOM unknowns, falsifiers, read-only gates, hashes, relative links, lane state, boundaries, no-bytecode output, and Git diff whitespace. It performs no network, login, runtime, source, build, deploy, benchmark, scan, clone/copy, or admission action.

## Task ledger

| Task | State |
|---|---|
| Read W10 dispatch/program and prior W1–W9 packets | complete |
| Load all immutable surface identities, including PS-118 gap | complete |
| Produce exact round-6 evidence with round-aware composite identity | complete; 944 rows |
| Preserve taxonomy conflict, capability-not-established, access, rights/SBOM unknowns, falsifiers, and next gates | complete |
| Write W10 evidence/report/lane state under lane-local subtree | complete |
| Run independent post-write smoke and fresh CENA callback | recorded in lane-state/callback receipt |

## Boundary

`research_only=true`; `execution_status=UNEXECUTED`; `admission_status=NOT_ADMITTED`; `admitted_blocks=0`; `implementation_authorized=false`; `parent_goal_status=active`; shared Phase-7 state is unmodified and unpromoted; overall Phase-7 completion is not claimed.
