# S2-L5 ↔ S2-L1 reconciliation — packaging inputs to runtime profiles

Lane: S2-L5 · Run: `2026-08-27-sprint-2-opus`
Status: research only · **executed against S2-L1's published contract family**

Source read: `research/workstreams/p04-repo-to-module-framework/runs/2026-08-27-sprint-2-opus/module-contract-family.json`
(`contract_family_version` present; read at 2026-08-27 22:12 while S2-L1 was still `working` —
their file may advance after this check, and any row here can be re-run against a later version).

The Sprint 2 convergence requirement includes "S2-L1 packaging profiles with S2-L5 runtime/release
profiles." This document records the executed result of seven checks, not a proposal.

---

## 1. Headline: independent convergence on the load-bearing structures

S2-L1 and S2-L5 worked from the same Sprint 1 evidence without coordinating drafts, and arrived at
identical structures on the three things that matter most. That is corroboration, not duplication —
two derivations reaching the same eight-object rollback model is stronger evidence than either alone.

| Structure | S2-L1 | S2-L5 | Agreement |
|---|---|---|---|
| Rollback objects | 8 `object_kind` values | 8 `object_class` values | **Same eight, different names** |
| Horizon rule | "MINIMUM horizon across all objects… computed at release time" | `composition_horizon = min(...)`, H-1 | **Identical** |
| Digest pinning | "a pin is not a pin"; `pinned_by_digest` + `retained_in_actionist_storage` | I-P14-3 digest + Actionist-owned retention | **Identical** |
| Anti-averaging | `evidence_tier` never exceeds the minimum across nine families | `tier_rule: minimum_across_families` | **Identical** |
| Attribution requirements | `HostContract.observability` requires identifier, per-capability release correlation, trace propagation, ownership metadata | Same four, plus health assertion | **L5 is a superset** |

## 2. Check results

| ID | Check | Result | Detail |
|---|---|---|---|
| RC-1 | Every reuse shape maps to exactly one runtime profile given ownership fields | **PARTIAL** | L1 has 10 reuse shapes to my 7 mapped. `template` and `reference_only` map to no runtime profile — correctly, since neither runs. See §3. |
| RC-2 | No contract permits two migration owners | **PASS** | L1 promoted "C6 → `migration_owner`" to an S2-L4 solver constraint. |
| RC-3 | Stable capability identifier distinct from display name and URL | **PASS** | `HostContract.observability.capability_identifier` — "stable, survives redeploy, identical across deploy system and telemetry", explicitly plural. |
| RC-4 | `trusts_client_headers` cannot be admitted | **NOT MODELLED** | L1's `HostContract.identity` does not carry the server-to-server clause. Raised as a defect in §4. |
| RC-5 | Pin is a digest, not a tag or range | **PASS** | `source_identity.immutable_revision`: "A branch name is NOT an identity and is rejected"; `source_digest` pattern `^sha256:[a-f0-9]{64}$`. |
| RC-6 | Capabilities sharing a host artifact marked as a correlated rollback group | **NOT MODELLED** | Neither lane's schema carries a `cause_id` grouping. Raised in §4. |
| RC-7 | Same tier vocabulary, both minimum-across-families | **PASS with a vocabulary gap** | Both pin to the minimum rule. L1's `evidence_tier` enum is `T0..T4`; my `ReleaseManifest.qualification.tier` is `T1..T4`. **L5's schema is missing T0.** |

**RC-7's T0 gap is mine to fix, not L1's.** Their enum carries five values; I wrote four. A capability
at T0 would fail validation against my manifest. Recorded rather than silently patched, because the
Sprint 1 anti-averaging rule as quoted ("a single T1 family pins the whole block at T1") does not
itself establish whether T0 exists — L1 has evidently sourced it from UBF §10 and I did not verify
that text this run.

## 3. The reuse-shape → runtime-profile mapping, updated to L1's vocabulary

L1's enum is authoritative for reuse shape (they own D06/D07). Updated mapping:

| S2-L1 `reuse_shape` | S2-L5 `runtime_profile` | Note |
|---|---|---|
| `intact_service` | `sidecar-service` | Donor owns migrations; horizon not ours |
| `intact_fork` | `sidecar-service` | Plus donor revision pinned by digest |
| `embedded_module` | `microfrontend` | Host owns server state |
| `transplant` | `microfrontend` or `package-in-host` | By `invocation_mode` |
| `extracted_package` | `package-in-host` | **No independent rollback** |
| `generated_from_pattern` | `package-in-host` | Same |
| `adapter` | `package-in-host` or `worker` | By `invocation_mode` |
| `custom_delta` | follows what it modifies | Not independently profiled |
| `template` | **none** | A recipe, not a running thing |
| `reference_only` | **none** | Nothing is deployed |

Many-to-one, and now explicitly partial: two shapes have no runtime profile because they never run.
This is the correct shape of the relation, and it confirms the §2 warning that reuse shape does not
determine runtime profile without the ownership fields — `transplant` and `adapter` each span two.

**`upstream_sync_model` is a field S2-L5 should consume and currently does not.** L1's enum
(`downstream_service`, `pinned_fork_with_merge`, `pinned_fork_no_merge`, `vendored_no_upstream`,
`none`) directly determines upgrade path and therefore upgrade-burden evidence in P15. A
`vendored_no_upstream` capability has no upgrade-break signal to learn from, ever. Noted as a real
gap in my contract.

## 4. Defects raised against S2-L1 (theirs to accept or reject)

**S2L5-P04-001 — `HostContract.identity` does not forbid trusting client-supplied headers.**
The SISOCRM donor standard requires donors to validate server-to-server and never trust browser
headers. This is the clause that most often forces a donor fork, and it is an admission gate, not a
style preference. Suggest an `identity_trust_model` with `trusts_client_headers` as inadmissible.

**S2L5-P04-002 — No correlated-rollback grouping.** Capabilities sharing a host artifact roll back
together (my Trace B). Without a `cause_id` or rollback-group field, P15 counts one cause as N
independent demotion events and punishes innocent capabilities — a large error at n=10. Affects both
our schemas; I have modelled `cause_id` on the signal side, but the grouping must originate where the
binding is known.

**S2L5-P04-003 — `ReleaseManifest` is defined by both lanes.** L1 owns it as D18 in the contract
family; I wrote a fuller `release-manifest.schema.json` (approval record, `non_recoverable_effects`,
per-object-class rehearsal receipts, `attribution_class`, `status` incl. `REFUSED`). These are
compatible — mine is a superset with the same object model — but **two schemas for one record is a
convergence defect the coordinator must resolve.** Recommendation: L1's contract family carries the
record's *place* in the family; mine carries its *content*. Merge into one, owned by D18.

## 5. Defects S2-L5 accepts against itself

- **`tier` enum missing `T0`** (RC-7). My manifest would reject a T0 capability.
- **`upstream_sync_model` not consumed** (§3), so upgrade-burden evidence has no declared source.
- **Correlated rollback grouping is modelled only on the signal, not on the binding** (S2L5-P04-002).

None is patched in this run: all three touch the seam between two lanes' owned records, and unilateral
edits at a seam are what the sprint's no-overwrite rule exists to prevent. They are handed to the
coordinator with the fix stated.

## 6. Vocabulary settled and unsettled

**Settled by evidence:** `capability_id` — L1 uses it 9 times, `module_id` zero. Both lanes converged
on "capability" as the identified unit even though L1's lane is named for modules.

**Unsettled, coordinator to rule:**
- L1's `PackagingProfile` and my five runtime profiles are **different objects** despite the shared
  word "profile". The convergence requirement's phrase "S2-L1 packaging profiles with S2-L5
  runtime/release profiles" compares a delivery record to a runtime class. They relate through §3's
  mapping; neither contains the other.
- Object naming differs cosmetically across the same eight rollback objects: L1 `configuration` /
  `database_schema` / `connector_credential_state`; L5 `config` / `schema` / `connector_state`. One
  spelling must win before either schema is implemented.
