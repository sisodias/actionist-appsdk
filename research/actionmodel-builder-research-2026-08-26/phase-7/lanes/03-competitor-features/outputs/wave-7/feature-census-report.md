# Phase-7 competitor feature census — Wave 7 (P7-COMPETITOR-FEATURES-W7)

Lane-local evidence-round-3 research artifact. Only this `outputs/wave-7/`
subtree is written. W1–W6 feature packets, the immutable platform register,
the W6 coordinator receipt, Phase-7 program, and Phase-7 state are preserved
inputs. This is not an overall Phase-7 completion claim.

## Scope and boundary

| Contract item | Value |
|---|---|
| Surfaces | 118 exact product-surface records from the immutable universe |
| Ranked surfaces | PS-001 through PS-117, platform-depth ranks 1..117 |
| Explicit gap | PS-118 FlutterFlow; no first-class register row and no first-party URL in the named inputs |
| Feature keys | Same established eight priority keys used by W1–W6 |
| Cross-product | 118 × 8 × `evidence_round=3` = exactly 944 rows |
| Unique identity | `surface_identity × feature_key × evidence_round`; ranked composite register identity is preserved |
| Prior disjointness | PASS when round is included; W7 round 3 is disjoint from W1–W6 round-aware identities |
| Taxonomy | 68 stated vs 144 enumerated; mapping unresolved; verdict `taxonomy_count_conflict`; denominator `NONE` |
| Evidence mode | Public first-party/read and explicit-gap context inherited from the verified W6 packet; no new capability proof |
| Execution | `UNEXECUTED`; no login, credentials, client/private data, source execution, cloning/copying, implementation, build, deploy, benchmark, scan, or admission |
| Admission | `NOT_ADMITTED`; all rows remain reference-only; `admitted_blocks=0` |
| Parent | active; shared Phase-7 state was not edited or promoted |

W7 is a round transition, not a claim that a third runtime or authenticated
observation occurred. Every row records `round3_status` as
`no_new_source_read; inherited_round2_context_only` and
`new_capability_proof=false`. Reachability, documentation, and inherited
product claims remain separate from capability proof.

## Exact counts

`competitor-feature-evidence.jsonl` parses to exactly 944 records, with 118
surface identities, 8 feature keys, and 944 unique round-aware identities. The
ranked set contributes 117 × 8 = 936 rows; PS-118 contributes 1 × 8 = 8 rows.

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

Inherited status counts are `unknown=800`, `partially_observed=100`,
`gated=40`, and `legacy=4`. Evidence classes are `E/D=880`, `E/U=48`,
`E/D+E/U=8`, and `I/U=8`. These are public packet/access or explicit-gap
dispositions, not runtime test results. Capability proof is
`not_established` for all 944 rows.

## Surface coverage and identity policy

The immutable universe contains 118 `product_surface` records plus separate
relationship records. W7 uses every product-surface record exactly once per
feature key. PS-001..PS-117 retain their universe `register_ordinal` as
platform-depth rank 1..117. PS-118 retains its exact gap identity, null rank,
and `gap_candidate:PS-118` identity key; no rank or first-party source was
invented and no padding was added.

For ranked records, `surface_identity_key` is
`<register_record_type>:<register_raw_id>` and the full W7 key is
`<surface_identity_key>|<feature_key>|round-3`. For PS-118 the full key is
`gap_candidate:PS-118|<feature_key>|round-3`. The evidence row also retains
the W6 predecessor ID and its historical context, allowing independent
round-aware overlap checks without relying on numeric rank as identity.

| Coverage component | Surface count | Rows |
|---|---:|---:|
| Ranked PS-001..PS-117 | 117 | 936 |
| Explicit gap PS-118 (FlutterFlow) | 1 | 8 |
| **Total** | **118** | **944** |

## W6 predecessor and source/access limits

Every W7 row preserves the W6 row's source URL(s), source path, observed date,
access status, evidence class, limitation, rights/SBOM unknowns, falsifier,
next read-only gate, and capability-not-established status. The W7 row's
`round_context` points to its exact W6 evidence ID and records that no new
source was read. This distinction prevents inherited context from becoming a
fresh proof claim.

| Input | Coverage | SHA-256 |
|---|---|---|
| W6 evidence | all 118 surfaces × 8 keys; round 2 | `c0580897e5d94ee60d846bf48ffdcf428dc3ca1db9eb1db8c795f0969d99d06d` |
| W6 report | prior coverage and boundary context | `0af25295067687f0b55a3b122e5ea22c77eeedf6c72d1d8547516a3ba9bbca25` |
| W6 lane state | prior counts, hashes, callback, boundary | `d07c7d507a13bf0d32404e504dbc98d88546ce813d11fa856502dc5060e0473b` |
| W6 coordinator receipt | five-lane receipt; feature W6 PASS; overall unpromoted | `e8ca9a2b523d837c57659eb3d97b1556571d7e1f46a0499f907245913d46defe` |

Inherited source paths include the Phase-4, Phase-5, and Phase-6 platform
packets and the local census gap note. A source URL, redirect, HTTP status,
access signal, or inherited claim is not capability proof. Thin readers,
redirects, timeouts, throttling, shutdown/rebrand signals, and the unresolved
FlutterFlow first-party identity remain explicit in row-level `source` and
`access` objects.

## Claims, capability proof, rights, and gates

`direct_claims.first_party_product_claims` remains separate from
`inferred_claims.prior_round_inferred_claims`. Direct claims are carried from
the prior public packet; inferred claims carry prior reasoning and the
deterministic W6→W7 join. No inference upgrades to proof.

All rows retain `capability_proof.status=not_established` with null proof
method/result. No vendor login, credential, task, runtime, benchmark, scan,
build, deployment, or admission action was performed. Unknown Block Contract
fields and feature unknowns remain explicit for authority/consent, tenant
isolation, exit/export, rollback, mobile distribution, economics, lifecycle,
support, rights, provenance, and SBOM.

Rights/provenance/SBOM fields are informational unknowns or inherited
not-cleared signals. They are not legal clearance, ownership proof, license
decision, dependency inventory, OEM/support commitment, reuse authorization,
or admission. Each row has a falsifier and smallest read-only next gate; none
was executed in W7.

## Taxonomy decision

The taxonomy remains unresolved: one named finding says 68 keys, while the
enumerated dictionary contains 144 keys (18 domains × 8). The verdict is
`taxonomy_count_conflict`, mapping is `unresolved`, and the denominator is
`NONE`/JSON `null`. The eight priority keys are labels only; no score,
percentage, or completeness denominator is derived from 68 or 144.

## W1–W6 preservation anchors

| Preserved artifact | SHA-256 |
|---|---|
| W1 `product-surface-universe.jsonl` | `0293f29f194f9e2424e5635d22ada476beea897f2343a470b5d2a897326b48d6` |
| W1 `feature-dictionary.jsonl` | `e6654a5e00f291f9d6fa50b302838359614dff956f65d3342b2b71aaa7ff0161` |
| W1 `competitor-feature-evidence.jsonl` | `4de26ea9f3075b690e695ab75ca6d4939f0a8f1fde854c231361941723b47633` |
| W1 `feature-census-report.md` | `b8a35e215ada4823f74fea0dc342137cdb29f06cc2bb02a3b60658e3ab213f7d` |
| W1 `lane-state.json` | `c427f18c93c045e1a2fea1d9f57229b552cc02d6a8dc3a7c2702a593c96d2b6b` |
| W2 `competitor-feature-evidence.jsonl` | `429b12fdf38126a20981dab446637feb8211848c9aa151795ea6d6acd1c40dd3` |
| W2 `feature-census-report.md` | `b59ee3b7a21d5087927a33b7b17c10abf7cae8f7bfc2b29e9d03531b2cdb1697` |
| W2 `lane-state.json` | `73ebd48e29c4d339dccdc929b192a65d17c26391393edb1e16c0fabcbf0ffc94` |
| W3 `competitor-feature-evidence.jsonl` | `b833341c6df0e542361462a2459b844b4a91ea82defbc9f0c8e2b7372251551b` |
| W3 `feature-census-report.md` | `2abffd69e976d6100eead05616101f125558c2ec8eced1b1231e17af18f3721d` |
| W3 `lane-state.json` | `d8d478a1008dc2aa102a7145cc777453088b58235a9a026962078837092e1f1c` |
| W4 `competitor-feature-evidence.jsonl` | `126c5fc8222e598cfbead9bb24d3811b3596802f2db628dade8369649b6f9726` |
| W4 `feature-census-report.md` | `df73e91a78e13615605cbe48fe2bfccea1152d4695ea1d4c86e2f534d5606ae5` |
| W4 `lane-state.json` | `556ce2144427fd6a0649eb977f937a8eb73b689427b05cf5a84641be70e184d1` |
| W5 `competitor-feature-evidence.jsonl` | `04384df3534cb6d7bf198491be5bb9ba27cd0a840f483222ea97f6a47bb613fc` |
| W5 `feature-census-report.md` | `bc8818e1b28810032cb293b67449df9044e64ea287edfa54e451eb81fe61e07e` |
| W5 `lane-state.json` | `9137a5db83c35ea689d90178742a6d40ba96bd5ac5879261ea83292517435bcd` |
| W6 `competitor-feature-evidence.jsonl` | `c0580897e5d94ee60d846bf48ffdcf428dc3ca1db9eb1db8c795f0969d99d06d` |
| W6 `feature-census-report.md` | `0af25295067687f0b55a3b122e5ea22c77eeedf6c72d1d8547516a3ba9bbca25` |
| W6 `lane-state.json` | `d07c7d507a13bf0d32404e504dbc98d88546ce813d11fa856502dc5060e0473b` |

Sibling links: [`W1 evidence`](../competitor-feature-evidence.jsonl),
[`W2 evidence`](../wave-2/competitor-feature-evidence.jsonl),
[`W3 evidence`](../wave-3/competitor-feature-evidence.jsonl),
[`W4 evidence`](../wave-4/competitor-feature-evidence.jsonl), and
[`W5 evidence`](../wave-5/competitor-feature-evidence.jsonl). The direct W6
predecessor is [`W6 evidence`](../wave-6/competitor-feature-evidence.jsonl),
with its report and lane state in the same directory. The immutable universe
and dictionary are [`product-surface-universe.jsonl`](../product-surface-universe.jsonl)
and [`feature-dictionary.jsonl`](../feature-dictionary.jsonl).

## Inputs and report-relative links

| Input | Link | SHA-256 |
|---|---|---|
| W7 dispatch receipt | [`wave-7-dispatch-receipt.json`](../../../../wave-7-dispatch-receipt.json) | `a0b0b578cc9dd0d6eddbcd02f80e1a774f5f5d0f247d224c1c94b89af67d53c4` |
| Phase-7 program | [`PHASE-7-PROGRAM.md`](../../../../PHASE-7-PROGRAM.md) | `bde02720f1b169c190607403632a6b8b8f783142f659f779869f54396228d2d0` |
| W6 coordinator receipt | [`wave-6-coordinator-receipt.json`](../../../../wave-6-coordinator-receipt.json) | `e8ca9a2b523d837c57659eb3d97b1556571d7e1f46a0499f907245913d46defe` |
| Immutable platform register | [`platform-deepdives-register.jsonl`](../../../../../phase-2/outputs/platform-deepdives-register.jsonl) | `13213b409c1d66a0c105a39d6046f98c6c4dbd581b15aa93dfee17d909cecc1c` |
| Phase-7 shared state, read-only | [`phase-7-state.json`](../../../../phase-7-state.json) | live read hash recorded in lane state; not edited |
| Explicit PS-118 gap note | [`luna-competitor-feature-census-findings.md`](../../../../outputs/luna-competitor-feature-census-findings.md) | inherited source path only; no first-party URL claimed |

## Verification contract

Post-write smoke recomputes JSONL parsing, exact 118×8×round-3 coverage,
rank/gap shape, universe identity parity, W6 predecessor parity, round-aware
disjointness from W1–W6, source/date/URL parity, claim/capability separation,
controlled statuses, rights/SBOM unknowns, falsifiers, read-only gates,
preserved hashes, report-relative links, boundary flags, and Git diff
whitespace. It performs no network, login, runtime, source, build, deployment,
benchmark, scan, clone/copy, or admission action.

## Task ledger

| Task | State |
|---|---|
| Read W7 program, dispatch receipt, immutable register, W6 coordinator receipt, and W1–W6 packets | complete |
| Load all 118 immutable surface identities, including PS-118 gap | complete |
| Produce exact evidence round 3 with round-aware composite identity | complete; 944 rows |
| Preserve taxonomy, capability-not-established, access, rights/SBOM unknowns, falsifiers, and next gates | complete |
| Write W7 evidence and report under the lane-local subtree | complete |
| Run independent post-write smoke and fresh CENA callback | recorded in lane-state/callback receipt |

## Boundary

`research_only=true`; `execution_status=UNEXECUTED`;
`admission_status=NOT_ADMITTED`; `admitted_blocks=0`;
`implementation_authorized=false`; `parent_goal_status=active`; shared
Phase-7 state is unmodified and unpromoted; overall Phase-7 completion is not
claimed.
