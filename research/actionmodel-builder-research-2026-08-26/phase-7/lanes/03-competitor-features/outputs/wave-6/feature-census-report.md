# Phase-7 competitor feature census — Wave 6 (P7-COMPETITOR-FEATURES-W6)

Lane-local evidence-round-2 research artifact. Only this `outputs/wave-6/`
subtree is written. The Wave-1 through Wave-5 packets, Phase-7 state, and
coordinator files are preserved inputs. This report does not claim overall
Phase-7 completion.

## Scope and boundary

| Contract item | Value |
|---|---|
| Surfaces | 118 exact product-surface records from the immutable universe |
| Ranked surfaces | PS-001 through PS-117, platform-depth ranks 1..117 |
| Explicit gap | PS-118 FlutterFlow; no first-class register row and no first-party URL in the named inputs |
| Feature keys | Established eight priority keys |
| Cross-product | 118 × 8 × `evidence_round=2` = exactly 944 rows |
| Unique identity | `surface_identity × feature_key × evidence_round`; composite register identity is retained where available |
| Prior disjointness | PASS when round is included; W6 round 2 is distinct from W1–W5 round-1 packet identities |
| Taxonomy | 68 stated vs 144 enumerated; mapping unresolved; verdict `taxonomy_count_conflict`; denominator `NONE` |
| Evidence mode | Existing W1–W5 public first-party/read and explicit-gap packet context normalized into a second evidence round; no new capability proof |
| Execution | `UNEXECUTED`; no login, credentials, client/private data, source execution, cloning/copying, implementation, build, deploy, benchmark, scan, or admission |
| Admission | `NOT_ADMITTED`; all rows remain reference-only |
| Parent | active; shared Phase-7 state was not edited or promoted |

This W6 packet is an evidence-round refresh, not a claim that a second runtime
or authenticated observation occurred. The round metadata explicitly records
`no_new_source_read; inherited_context_only` and `new_capability_proof=false`.
Reachability, documentation, and inherited product claims remain separate from
capability proof.

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

Observed inherited disposition counts are `unknown=800`, `partially_observed=100`,
`gated=40`, and `legacy=4`. Evidence classes are `E/D=880`, `E/U=48`,
`E/D+E/U=8`, and `I/U=8`. These are packet/documentation or explicit-gap
dispositions, not execution results. Capability proof is
`not_established` for all 944 rows.

## Surface coverage and identity policy

The immutable product-surface universe contains 118 `product_surface` records
plus relationship records. W6 uses every product-surface record exactly once
per feature key. PS-001..PS-117 retain their universe `register_ordinal` as
platform-depth rank 1..117. PS-118 retains its exact gap identity, null rank,
and `gap_candidate:PS-118` identity key; it is not padded or promoted to a
ranked surface.

For ranked records, `surface_identity_key` is
`<register_record_type>:<register_raw_id>` and the full round-aware key is
`<surface_identity_key>|<feature_key>|round-2`. For PS-118 the key is
`gap_candidate:PS-118|<feature_key>|round-2`. This avoids numeric-ID ambiguity
and proves W6 disjointness from W1–W5 by including the evidence round.

| Coverage component | Surface count | Rows |
|---|---:|---:|
| Ranked PS-001..PS-117 | 117 | 936 |
| Explicit gap PS-118 (FlutterFlow) | 1 | 8 |
| **Total** | **118** | **944** |

## Prior packet lineage and source limits

Each W6 row preserves its prior W1–W5 evidence ID, packet wave, schema, source
URL(s), observed date, access signal, evidence class, and limitation under
`round_context`, `source`, and `access`. The W6 report does not treat the
inherited source as a new read. The row-level direct claims remain labelled as
first-party product claims where the prior packet had them, while the explicit
PS-118 gap remains a local gap note and not a first-party claim.

| Prior packet | Coverage used for W6 | SHA-256 |
|---|---|---|
| Wave-1 universe `product-surface-universe.jsonl` | 118 surfaces, including PS-118 | `0293f29f194f9e2424e5635d22ada476beea897f2343a470b5d2a897326b48d6` |
| Wave-1 feature dictionary | 144 provisional keys | `e6654a5e00f291f9d6fa50b302838359614dff956f65d3342b2b71aaa7ff0161` |
| Wave-1 evidence | ranks 95–117 plus PS-118 | `4de26ea9f3075b690e695ab75ca6d4939f0a8f1fde854c231361941723b47633` |
| Wave-1 report | prior census context | `b8a35e215ada4823f74fea0dc342137cdb29f06cc2bb02a3b60658e3ab213f7d` |
| Wave-1 lane state | prior verification context | `c427f18c93c045e1a2fea1d9f57229b552cc02d6a8dc3a7c2702a593c96d2b6b` |
| Wave-2 evidence | ranks 71–94 | `429b12fdf38126a20981dab446637feb8211848c9aa151795ea6d6acd1c40dd3` |
| Wave-2 report | prior census context | `b59ee3b7a21d5087927a33b7b17c10abf7cae8f7bfc2b29e9d03531b2cdb1697` |
| Wave-2 lane state | prior verification context | `73ebd48e29c4d339dccdc929b192a65d17c26391393edb1e16c0fabcbf0ffc94` |
| Wave-3 evidence | ranks 47–70 | `b833341c6df0e542361462a2459b844b4a91ea82defbc9f0c8e2b7372251551b` |
| Wave-3 report | prior census context | `2abffd69e976d6100eead05616101f125558c2ec8eced1b1231e17af18f3721d` |
| Wave-3 lane state | prior verification context | `d8d478a1008dc2aa102a7145cc777453088b58235a9a026962078837092e1f1c` |
| Wave-4 evidence | ranks 23–46 | `126c5fc8222e598cfbead9bb24d3811b3596802f2db628dade8369649b6f9726` |
| Wave-4 report | prior census context | `df73e91a78e13615605cbe48fe2bfccea1152d4695ea1d4c86e2f534d5606ae5` |
| Wave-4 lane state | prior verification context | `556ce2144427fd6a0649eb977f937a8eb73b689427b05cf5a84641be70e184d1` |
| Wave-5 evidence | ranks 1–22 | `04384df3534cb6d7bf198491be5bb9ba27cd0a840f483222ea97f6a47bb613fc` |
| Wave-5 report | prior census context | `bc8818e1b28810032cb293b67449df9044e64ea287edfa54e451eb81fe61e07e` |
| Wave-5 lane state | prior verification context | `9137a5db83c35ea689d90178742a6d40ba96bd5ac5879261ea83292517435bcd` |

The packet source paths are preserved in each row. They include the Phase-4,
Phase-5, and Phase-6 platform packets used by W1–W5, plus the local census gap
note for PS-118. A source URL, redirect, HTTP status, or inherited claim is
not capability proof. Access limits—including thin readers, redirects,
timeouts, throttling, shutdown/rebrand signals, and the unresolved FlutterFlow
first-party identity—remain explicit in row-level `source` and `access` data.

## Claims, capability proof, rights, and gates

`direct_claims.first_party_product_claims` is separate from
`inferred_claims.prior_round_inferred_claims`. The former contains only prior
packet product/documentation claims; the latter records inherited reasoning and
the deterministic round join. No inference upgrades to proof.

Every row has `capability_proof.status=not_established`, a null proof method and
result, and a reason that no login, credential, task, runtime, benchmark,
scan, build, deployment, or admission was performed. Every row also preserves
unknown Block Contract fields plus feature unknowns for authority/consent,
tenant isolation, exit/export, rollback, mobile distribution, economics,
lifecycle, support, rights, provenance, and SBOM.

Rights/provenance/SBOM values are informational unknowns or inherited
not-cleared signals. They are not legal clearance, ownership proof, a license
decision, a dependency inventory, an OEM/support commitment, a reuse decision,
or an admission decision. Each row has a falsifier and a smallest
feature-scoped read-only next gate; none was executed in W6.

## Taxonomy decision

The named findings and Wave-1 dictionary still disagree: 68 keys are stated,
while 144 keys are enumerated (18 domains × 8). The mapping remains
`unresolved`, the verdict is `taxonomy_count_conflict`, and the denominator is
`NONE`/JSON `null`. The eight established priority keys are used as explicit
feature labels only; no percentage, score, or completeness denominator is
derived from 68 or 144.

## Inputs and report-relative links

| Input | Link | SHA-256 |
|---|---|---|
| W6 dispatch receipt | [`wave-6-dispatch-receipt.json`](../../../../wave-6-dispatch-receipt.json) | `6db9bb2ddb4c7e50687d76c6ba0ba2b666c7bdc64c71c54c4fc4e1d1778bdfd6` |
| Phase-7 program | [`PHASE-7-PROGRAM.md`](../../../../PHASE-7-PROGRAM.md) | `bde02720f1b169c190607403632a6b8b8f783142f659f779869f54396228d2d0` |
| Phase-7 shared state, read-only | [`phase-7-state.json`](../../../../phase-7-state.json) | live read hash recorded in lane state; not edited |
| Platform-depth register | [`platform-deepdives-register.jsonl`](../../../../../phase-2/outputs/platform-deepdives-register.jsonl) | `13213b409c1d66a0c105a39d6046f98c6c4dbd581b15aa93dfee17d909cecc1c` |
| Wave-1 universe | [`product-surface-universe.jsonl`](../product-surface-universe.jsonl) | `0293f29f194f9e2424e5635d22ada476beea897f2343a470b5d2a897326b48d6` |
| Wave-1 dictionary | [`feature-dictionary.jsonl`](../feature-dictionary.jsonl) | `e6654a5e00f291f9d6fa50b302838359614dff956f65d3342b2b71aaa7ff0161` |

Prior wave evidence links: [`Wave-1 evidence`](../competitor-feature-evidence.jsonl),
[`Wave-2 evidence`](../wave-2/competitor-feature-evidence.jsonl),
[`Wave-3 evidence`](../wave-3/competitor-feature-evidence.jsonl),
[`Wave-4 evidence`](../wave-4/competitor-feature-evidence.jsonl), and
[`Wave-5 evidence`](../wave-5/competitor-feature-evidence.jsonl). Their
reports and lane states remain in the same sibling directories. The W1 source
for the explicit gap note is [`luna-competitor-feature-census-findings.md`](../../../../outputs/luna-competitor-feature-census-findings.md).

## Verification contract

Post-write smoke recomputes JSONL parsing, exact 118×8×round-2 coverage,
round-aware disjointness from W1–W5, universe identity parity, source/date
presence and URL parity, claim/capability separation, status control,
rights/SBOM unknowns, falsifiers, read-only gates, report-relative links,
preserved hashes, boundary flags, and Git diff whitespace. The smoke performs
no network, login, runtime, source, build, deployment, benchmark, scan, or
admission action.

## Task ledger

| Task | State |
|---|---|
| Read W6 dispatch receipt and existing W1–W5 feature packets | complete |
| Load all 118 immutable product-surface identities, including PS-118 gap | complete |
| Normalize W1–W5 context into evidence round 2 with composite identity | complete; 944 rows |
| Preserve taxonomy conflict, capability-not-established, access, rights/SBOM unknowns | complete |
| Write W6 evidence and report in the lane-local subtree | complete |
| Run post-write smoke and fresh CENA callback | recorded in lane-state/callback receipt |

## Boundary

`research_only=true`; `execution_status=UNEXECUTED`;
`admission_status=NOT_ADMITTED`; `implementation_authorized=false`;
`parent_goal_status=active`; shared Phase-7 state is unmodified and unpromoted;
overall Phase-7 completion is not claimed.
