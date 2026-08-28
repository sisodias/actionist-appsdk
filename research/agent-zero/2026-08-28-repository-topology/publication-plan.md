# Publication and migration plan

Status: 'proposed' · no mutation, publication, repository creation or remote change performed

## Objective

Turn the current Actionist workspace and related SISO repositories into a discoverable,
rights-aware topology without making Actionist-AppSDK a monorepo and without promoting
research/prototype evidence to production capability.

The plan is ordered by identity and provenance first, then repository placement, then release.
Each step has a gate. A failed gate holds the step and does not trigger a compensating move.

## Work packages

| ID | Work package | Owner boundary | Current state | Gate to advance |
| --- | --- | --- | --- | --- |
| P0 | Preserve current Actionist snapshot | Sinamun/Actionist-AppSDK | observed private snapshot; no change in this lane | Sina confirms index/control-plane role and allowed index files |
| P1 | Define stable Actionist IDs and index projection | client-facing index contract | contract written here; no projection written | field, privacy and link verifier passes |
| P2 | Reconcile Great Library aliases and joins | Great Library + Actionist companion | current public catalog exists; historical Lordsisodia locator drift observed | owner verifies URL/account/revision mappings |
| P3 | Extract framework registry | future actionist-framework-registry | current canonical records in knowledge/frameworks/; research-only, 24 records, 0 operational | scrub client/machine paths, pin source, approve public owner/repo |
| P4 | Extract block registry | future actionist-block-registry | block hub and seven-record contract family exist locally; no admitted blocks | choose schema owner; keep qualification/admission separate |
| P5 | Release Teable implementation | future actionist-block-teable | local intact-service prototype; prototype_not_admitted, donor AGPL/NOASSERTION | complete rights, host, identity, tenancy, runtime and rollback qualification |
| P6 | Release AFFiNE implementation | future actionist-block-affine | local synthetic host adapter; LOCAL_SYNTHETIC_ONLY, NOT_ADMITTED | clear theme/settings/upgrade/density/cross-environment holds |
| P7 | Separate UI engine from corpus | private siso-ui-base + private data plane | engine repo exists; local corpus is multi-gigabyte and rights-incomplete | define object manifest, retention, access and rights route |
| P8 | Publish compact UI metadata or sanitized assets | Great Library + public registry if approved | not publishable from current evidence | asset-level rights and generated-manifest verification |
| P9 | Publish immutable releases and successor snapshot | owning repo + Great Library | future only | release manifest, digest, license notices, link health and rollback |

## Proposed future repository placements

These names are recommendations only. Read-only GitHub API checks did not observe them as
existing repositories on the sisodias account:

- sisodias/actionist-framework-registry: small framework records, schemas, dependency graph,
  value matrix and verifier;
- sisodias/actionist-block-registry: small block metadata and seven-record contract pointers;
- sisodias/actionist-block-teable: Teable-specific implementation/release boundary;
- sisodias/actionist-block-affine: AFFiNE-specific implementation/release boundary.

The UI corpus data plane is deliberately not a proposed Git repository. It should be an
authorized private object store or equivalent content-addressed service. No repository is created
by this plan.

## Sequencing

### Phase A — freeze and inventory (P0–P2)

1. Preserve the current Actionist snapshot and its exclusion policy.
2. Build the index manifest from stable IDs, not local path names.
3. Reconcile current account/URL aliases against immutable revisions.
4. Record Great Library Work/Release/Snapshot joins only where the cited record exists.

Exit condition: every proposed public pointer has an owner, visibility, source-of-truth,
immutable revision/digest plan and privacy verdict. A missing join is explicitly held.

### Phase B — small registries (P3–P4)

1. Keep knowledge/frameworks/ and the current block-hub records canonical until an owner
   authorizes extraction.
2. Produce a compact repository manifest and generated projection from those records.
3. Exclude client/private context, raw evidence payloads, absolute machine paths and donor source.
4. Give each registry a release manifest and Great Library metadata join.

Exit condition: a clean/public review finds no credential, client-data, machine-path or
unattributed-source leakage; the registry verifier reports stable IDs and closed links.

### Phase C — independent block releases (P5–P6)

Treat Teable and AFFiNE as separate candidates. For each one:

1. freeze donor locator, revision, license and integrity receipt;
2. select one reuse shape and name the runtime/data/identity owner;
3. complete the seven linked records;
4. run qualification, negative-path, rollback and release checks;
5. publish only an implementation release that is actually cleared.

Exit condition: NOT_ADMITTED is replaced only by an evidence-backed qualification/admission
decision. A registry row alone cannot advance this phase.

### Phase D — UI engine and corpus (P7–P8)

1. Keep UI Base code and compact indexes in its private repository.
2. Create an external private data-plane manifest for harvest/bundle/preview/extra objects.
3. Preserve the legacy source-bearing corpus in a rights-hold namespace.
4. Publish only sanitized metadata or first-party/promoted assets after asset-level review.

Exit condition: every exposed object has a digest, source-of-truth, rights/privacy class,
retention/recovery policy and retrieval authorization.

### Phase E — release and catalogue join (P9)

For an approved artifact, improve the owning repository first, create an immutable release,
record the Work/Release/Snapshot relation in Great Library, then update the Actionist index
projection. Link checks, digest checks, license notices and visibility checks run before a public
page is generated.

## Publication matrix

| Artifact | Owning surface | Default visibility | Publication unit | Hold condition |
| --- | --- | --- | --- | --- |
| Actionist index metadata | Sina's Actionist checkout | client-private | indexed commit/projection | Sina approval absent |
| Framework records | future SISO registry | public after scrub | source + registry release | client/machine-path leakage or unreviewed provenance |
| Block registry metadata | future SISO registry | public after scrub | registry metadata release | qualification/admission state unclear |
| Teable implementation | future Teable repo | private until cleared | source/runtime release | AGPL/host/tenancy/rollback gate |
| AFFiNE implementation | future AFFiNE repo | private until cleared | adapter/runtime release | current holds and donor boundary |
| UI Base engine | existing private repo | private | source release or private candidate | candidate Work absent; rights/ownership review |
| 21st/generated corpus | private object store | private/metadata-only | manifest + object shards | license fields sparse; source/rights unresolved |
| Great Library join | existing public library | public metadata only | Work/Release/Snapshot | stale locator or missing release evidence |

## Rollback and failure containment

- Index failure must not remove or rewrite a Great Library historical release.
- Great Library publication failure must leave the owning repository release intact and the
  Actionist row held.
- A revoked object shard must produce a tombstone and stop retrieval without deleting the public
  provenance record.
- A block runtime rollback must cover code, config, secrets, schema/data, donor revision and
  connectors; the release record must name the recovery horizon.
- A generated site failure must be recoverable from the compact source manifest and generator
  revision.

## Required operator decisions before mutation

1. Confirm Sina's ownership and allowed change surface for Actionist-AppSDK.
2. Approve names, owners and visibility for any future registry or block repository.
3. Select and authorize the private object-store/data-plane provider and retention policy.
4. Decide whether to create Great Library Works for the framework registry, block registry, UI
   engine and each released block.
5. Resolve historical Lordsisodia/sisodias locator aliases with direct owner evidence.

Until those decisions are made, the correct action is to retain local evidence and use this plan
as a publication map. No source is cloned, executed, moved, deleted, committed, pushed or
published by this lane.

