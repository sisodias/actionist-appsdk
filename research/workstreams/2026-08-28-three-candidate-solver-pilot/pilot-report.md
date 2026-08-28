# Three-candidate solver pilot report

Run: `2026-08-28-three-candidate-solver-pilot`  
Lane: `ACTIONIST-THREE-CANDIDATE-SOLVER`  
Host contract: `actionist.three-candidate-host.v0.1`  
Target scope: `pilot.marketing-social-agency`

## Decision

The strict deterministic composer returns `INFEASIBLE` for AFFiNE, Teable, Chatwoot and the combined three-candidate scenario. Every scenario fails first at ordered rule `R-SCOPE` because all candidate registry records remain outside the target host scope with `admission_status: NOT_ADMITTED`. The solver then retains later failures and underdetermined fields instead of treating the scope result as permission to continue.

This is a contract-only research result. The packet does not authorize staged binding, donor-source execution, deployment, admission or client-data access.

## Scope and method

The pilot composes the seven-record module family for the read-only marketing/social-agency approval and asset-delivery workflow. The workflow projection covers the atoms `approval_publish`, `schedule_coordinate`, `report_digest`, `follow_up_chase` and `extract_structure`; it preserves the product ceiling of `stage` and the non-goals of external publishing, ad spend, outbound client messaging and rights grants.

The solver imports all 22 ordered rule rows from the P12 authority table and preserves their 19 distinct constraints. Shared constraints are not collapsed away: port closure, authority and rollback each retain their multiple ordered rule checks. Four scenarios are evaluated: one per candidate and one combined scenario. Three fresh runs are compared by input, output and scenario digests.

## Solver results

| Scenario | Verdict | First non-pass | Later failures | Later underdetermined | Passes |
|---|---|---|---:|---:|---:|
| `candidate-affine` | `INFEASIBLE` | `R-SCOPE` / `scope` | 2 | 6 | 14 |
| `candidate-teable` | `INFEASIBLE` | `R-SCOPE` / `scope` | 2 | 5 | 15 |
| `candidate-chatwoot` | `INFEASIBLE` | `R-SCOPE` / `scope` | 5 | 5 | 12 |
| `combined-all-three` | `INFEASIBLE` | `R-SCOPE` / `scope` | 4 | 6 | 12 |

The later failure sets are:

- AFFiNE: `R-SCOPE`, `R-AUTHORITY`.
- Teable: `R-SCOPE`, `R-AUTHORITY`.
- Chatwoot: `R-SCOPE`, `R-TENANCY`, `R-AUTHORITY`, `R-IDEMPOTENCY`, `R-CONSENT`.
- Combined: `R-SCOPE`, `R-AUTHORITY`, `R-IDEMPOTENCY`, `R-CONSENT`.

The later underdetermined results are preserved in `missing-field-ledger.jsonl`. They include source-identity or shape-and-rights evidence, tenant bridges, UI token paths and resolver context, donor revision recovery, rollback horizons and measured glue fields. `R-TOKEN` therefore remains underdetermined for every UI-bearing projection. `R-CONSENT` rejects the Chatwoot message-send effect because it is external-effecting and has no declared approval step; the product workflow remains read-only.

## Evidence classification

### Observed

- The source packages expose seven canonical records: `CapabilityContract`, `PackagingProfile`, `HostContract`, `BindingPlan`, `QualificationDossier`, `RegistryRecord` and `ReleaseManifest`.
- The three candidate projections preserve the source record paths and source holds without source mutation.
- Teable has an explicit host-to-allowlisted-base bridge shape; Chatwoot has a local donor exchange precedent; AFFiNE has a planned host session wire and workspace surface.
- All registry records are `NOT_ADMITTED`; release records are not released; rollback objects are retained with unready recovery state.

### Inferred

- AFFiNE is semantically relevant to asset and workspace structure, Teable to structured approval and metric data, and Chatwoot to follow-up and inbox context. This is workflow fit only, not proof of client equivalence or runtime compatibility.
- The minimum host delta is a shared identity, tenant, navigation, settings, data ownership, event, observability and rollback contract. It is documented in `host-contract-delta.json`, not implemented.

### Unknown or blocked

- Unknowns and their owners are enumerated line-by-line in `missing-field-ledger.jsonl`.
- The most consequential contract defects are the missing AFFiNE tenant key/bridge, empty UI token mappings for all UI-bearing projections, the missing Chatwoot account bridge, and the missing Chatwoot message-send idempotency and approval fields.
- Source evidence gaps remain separate from contract defects. A human authority decision remains separate from both; the solver does not infer consent or admission.
- Model uncertainty is `NOT_APPLICABLE`: no model output or confidence value participates in this solver.

## Normalization surgeries

`normalization-surgeries.jsonl` derives the applicable intact-service surgeries by taxonomy category, cost class and determinism, while retaining source projection flags that the taxonomy does not select for this shape. Ownership is explicit for identity, tenant, settings, navigation, data, events, connectors, token mapping, runtime, upgrade and rollback. Held and human-gated surgeries remain held; no cost estimate is introduced.

The recurring pattern is an intact donor service behind a host boundary: host-owned identity and URL space, donor-owned application state, event-fed cross-owner reads, explicit tenant bridges, and a release-owner rollback contract. The token mapping remains a separate host contract gap because the taxonomy's intact-service exclusion does not erase the UI-bearing host requirement.

## Host-contract delta

The required host shape is recorded in `host-contract-delta.json`. Its non-negotiable seams are:

- host-verified two-token identity with audience binding, single use, bounded assertion lifetime and no query-parameter identity;
- host-selected `tenant_id` with server-side bridges to AFFiNE `workspace_id`, Teable `base_id` and Chatwoot `account_id`, deny-by-default isolation and no trust in browser-supplied tenant headers;
- deploy-time navigation manifest, host-owned URL space, separate permission and entitlement checks, cascading emptiness and donor-rendered settings behind host navigation;
- one owner per donor resource and migration, event-fed cross-owner reads and forbidden cross-owner writes;
- explicit file namespace and host authorization before donor access;
- canonical capability-event envelope and per-capability release correlation, trace propagation and failure grouping;
- rollback objects for code, configuration, secrets, schema, data, donor revision, route and connector credential state.

## Holds and boundary

All source holds are copied into the contract projections and checked against the candidate-set assertions. No hold is converted to pass by inference. In particular, the AFFiNE theme, settings, upgrade, density and CE-web holds remain open; all six Teable holds remain open; and all five Chatwoot holds remain open.

The run boundary is explicit: research-only, implementation unauthorized, donor source not cloned or executed, no staged binding, no deployment, no admission, no client data and no shared-file edits. Relaxations applied: `0`.

## Reproducibility

The persisted solver output records three identical runs:

- input digest: `sha256:3bb3b20c191d1d3625cfaa7cb56babc9fee0315aad6e23c62e4de43c277f7f50`;
- output digest: `sha256:f2eab0e3b664a60d84cf4e46611121b06fdeae66d119bf83c570e0bc01117943`;
- scenario digests: AFFiNE `sha256:7ad47c23ddf3ebc49cd732760dee451d4b73011a2da8fa1985062e945d631b1f`, Teable `sha256:4491aa2460baceb16377c659248945ec7fb5e0f5b5aab658812807dec98bdf97`, Chatwoot `sha256:c1efbefa4953334faf5c18848878830876bd16a8b34826eca816caab5e095d3a`, combined `sha256:361ba324c934e28e90bab18d1e574d6af1375615193b145500d0ae0001dd5e02`;
- digest parity: `PASS` across all three repeats;
- relaxations: `0`.

The machine verifier is `verify.mjs`. It re-runs the solver locally, checks the exact ordered rule import, verifies all seven records and preserved holds, validates evidence paths, rejects admission/deployment claims, and enforces the owned run-directory boundary.
