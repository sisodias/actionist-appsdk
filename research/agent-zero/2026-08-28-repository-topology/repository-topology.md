# Actionist repository topology and publication boundary

Status: 'research_only' · read-only topology lane · observed 2026-08-28

## Outcome

The recommended topology is a small, durable index/control plane plus separate owners for
catalogue metadata, framework methods, block metadata, reusable implementations, engines and
large data. The existing Sinamun/Actionist-AppSDK checkout is the client-facing private index
surface. It should point to versioned artifacts; it should not become the SISO monorepo or the
home for the multi-gigabyte UI corpus.

This document records observed facts separately from recommendations. Proposed repositories are
not present, were not created, and have no remote in this lane.

## Topology at a glance

~~~text
Sinamun/Actionist-AppSDK  [existing, private, client-facing index/control plane]
       | stable artifact IDs, immutable revisions, digests, visibility and links
       +--------------------------+---------------------------+
       v                          v                           v
Great Library              SISO Foundry                  Actionist registries
[existing, public]         [existing, public]             [proposed, small]
identity / Work /          discovery, ranking,            framework methods +
Release / Snapshot         evidence engine                block contracts
       |                          |                           |
       +--------------+-----------+---------------------------+
                      v
             versioned releases and typed joins
                      |
          +-----------+------------+------------------+
          v                        v                  v
  block implementations     siso-ui-base          external data planes
  [proposed, one/unit]      [existing, private]   [proposed/private]
  Teable / AFFiNE           UI engine + compact     21st corpus, Foundry
                            indexes                data, generated payloads
~~~

The arrows are publication links, not filesystem containment. No submodule or nested checkout is
recommended as the join mechanism.

## Observed repository and workspace facts

| Node | Observed evidence | Boundary implication |
| --- | --- | --- |
| Sinamun/Actionist-AppSDK | GitHub API reports private, owner Sinamun, default branch main, API size 15,937 KB. The local checkout is on research/actionmodel-snapshot-20260827 at 87dbfc544da022c958ef2838483ca4bf97cad200; its remote is https://github.com/Sinamun/Actionist-AppSDK. | Treat it as a client-facing index/control plane and preserve its history. Do not add SISO source, private client material or bulk data here. |
| Actionist snapshot | Actionist-AppSDK/SNAPSHOT-MANIFEST.md says the snapshot includes docs, canonical knowledge, architecture, historical receipts, static views and non-secret client context; it excludes runtime state, the nested checkout, generated dependencies/builds, raw WhatsApp/exposed credentials and external multi-GB payloads. | The existing exclusion policy is the right starting boundary. |
| Great Library | Local checkout is sisodias/great-library-of-siso, public, main at 4ce8da029c90e272e3fe26374c1fb4d2d5c5c86e; its schemas define Works, Releases, Snapshots, Assemblies and Source Inventories. | Keep one public identity/lineage/release catalogue. Actionist may carry a projection and join keys, not a second authoritative catalogue. |
| SISO Foundry | sisodias/siso-foundry is public MIT, current remote revision 6cf02e0fb4611ffbeebf9f4c4967626a662b14ef; its provenance describes code/contracts in Git and large data in an external FOUNDRY_DATA plane. | Keep the discovery/evidence engine separate from Actionist index metadata and from reusable block releases. |
| SISO UI Base | Local checkout is private sisodias/siso-ui-base, main at 24b85423220dd5b3730975155f89b4558f1859c3. It has 85 tracked files / 3,478,858 tracked bytes but a 3.6G working tree; registry/21st/harvest is about 3.0G. | Keep engine code and compact indexes in the private repo; keep bulk corpus in a private, content-addressed data plane until rights and publication are separately cleared. |
| Framework registry | The current workspace already contains knowledge/frameworks/ and the generated local projection site/system-map/task-graph/frameworks/. The registry declares 24 frameworks, 0 measured and 0 operational, and research_only. | Treat these as current Actionist reasoning artifacts. A future small public framework repository is an extraction/publication option, not a current remote. |
| Teable block | blocks/teable-data-grid/ is a local prototype_not_admitted intact-service package. The donor is sisodias/teable, a public AGPL/NOASSERTION fork at b245a987f8bfb7411d4e2423907b9cbb0a1c9b6b; no donor source was copied into the package. | A future Teable implementation release gets its own owner/release boundary. The donor's obligations and runtime remain explicit. |
| AFFiNE block | blocks/affine-workspace/ is LOCAL_SYNTHETIC_ONLY / NOT_ADMITTED, an iframe/sidecar host adapter with no copied AFFiNE source, client data or deploy. | A future AFFiNE implementation release gets its own boundary and must clear the current theme, settings, upgrade, density and cross-environment holds. |
| Great Library locator drift | Current local/generated Great Library records contain historical Lordsisodia URLs while current API evidence uses sisodias for the relevant public repositories. | Reconcile aliases before a future publication; do not silently treat a stale URL as a new repository or release. |

## Placement decisions

### 1. Client-facing index/control plane

Keep Sinamun/Actionist-AppSDK as a private, client-facing index and control-plane repository.
Its durable payload is a small set of stable entries, links and generated views:

- repository and artifact identities;
- immutable revision and digest;
- ownership account as observed, visibility and publication state;
- Great Library work_id, release_id and snapshot_id when one exists;
- source-of-truth and retrieval pointers;
- typed upstream/downstream relationships;
- qualification, admission and revocation state;
- private-overlay references that never reveal credentials, raw client data or machine paths.

The index should survive a repository move because the identity is an artifact ID plus immutable
revision, not a directory path, branch name or submodule pointer.

### 2. Public identity and lineage

Use the existing Great Library for public Work, Release, Snapshot, Assembly and Source Inventory
identity. A Work can point at a private locator as public metadata, but a private or client
artifact must not be made public merely because its index row is public. A Release is the
publication unit for a pinned artifact; a Snapshot is a metadata-complete view over releases.

### 3. Framework methods

Keep the current canonical framework records in knowledge/frameworks/ until a future extraction
is authorized. If a public repository is later created, it should contain only small schemas,
method records, dependency graph, value-matrix contract, verifier and generated metadata. It
must not absorb client context, raw research payloads or implementation repositories.

Recommended future name: sisodias/actionist-framework-registry (not observed; not created).

### 4. Block metadata

Use a small registry for the seven linked contract records and lifecycle pointers, not for donor
source, client data or large runtime payloads. The registry row can point to a block implementation
release and its Great Library record. prototype_not_admitted, LOCAL_SYNTHETIC_ONLY, NOT_QUALIFIED
and NOT_ADMITTED remain honest statuses.

Recommended future name: sisodias/actionist-block-registry (not observed; not created).

### 5. Reusable block implementations

Use one implementation repository per independent service/runtime boundary when a block is
actually released. Teable and AFFiNE have different donor revisions, licenses, runtime profiles,
failure modes and upgrade paths, so they should not share a catch-all implementation repository.

Recommended future names:

- sisodias/actionist-block-teable (not observed; not created);
- sisodias/actionist-block-affine (not observed; not created).

The current local packages are staging evidence only. A repository does not become a reusable
block merely because it has a README, a manifest or a passing local smoke.

### 6. UI engine and UI corpus

Keep sisodias/siso-ui-base as the private engine/core boundary. Commit code, contracts and
compact, reproducible indexes there; do not commit the 3.0G 21st harvest, 325M preview store,
189M extras store or legacy source-bearing corpus to ordinary Git.

Use a separate private content-addressed data plane for the bulk corpus and generated payloads.
The data plane gets a compact manifest, immutable object digests, rights state, retention policy
and deterministic retrieval instructions. A future public release can expose only sanitized
metadata or first-party/promoted assets after a rights review.

### 7. Discovery data

SISO Foundry's code and schemas remain in its existing repository. Foundry's raw observations,
databases, transcripts, generated browsers, caches and run artifacts remain external to Git as
described by its provenance. The Actionist index records a data-plane manifest pointer and digest
when one is publishable; it does not copy the data.

## Why the split is not merely about size

The boundaries follow four independent axes:

1. ownership: Sina's client-facing index, SISO public registries, private SISO engines and donor
   projects must not share an implicit owner;
2. release cadence: framework records, block runtimes, Great Library records and bulk corpora
   change at different cadences;
3. artifact type: source, registry metadata, generated projection, runtime payload and raw data
   have different reproducibility and rights requirements;
4. failure blast radius: an AFFiNE upgrade, a Teable migration, a Foundry rebuild or a corpus
   refresh must be revertible without rewriting the client index or public catalogue.

Repository size is a consequence of these boundaries, not the primary criterion.

## Publication and privacy gates

Nothing in this lane authorizes publication. Before any public release:

- scrub client context, raw communications, credentials, machine paths and private overlays;
- pin a source identity as URL/package identity + immutable revision + digest;
- record rights state and redistribution obligations for the exact artifact;
- attach a Great Library Work/Release/Snapshot join;
- verify generated metadata from its declared source-of-truth;
- run link, digest, license-notice and visibility checks;
- keep unqualified or rights-unknown artifacts private or metadata-only.

The current corpus and both current block prototypes remain discovery/prototype material, not
admitted production capability.

## Falsifiers and open decisions

This topology should be revisited if any of the following becomes true:

- Sina explicitly assigns a different repository as the client-facing index owner;
- Great Library adds first-class object-store shards and repository-manifest records, making the
  Actionist companion contract redundant;
- a block's runtime, data ownership and upgrade cadence are proven to be shared safely with another
  block;
- rights evidence clears a public source-bearing corpus and its publication obligations;
- current GitHub locator drift is resolved and the old aliases no longer describe live records.

Operator decisions still needed before mutation are repository naming/ownership, public versus
private visibility for each proposed registry, the object-store provider/retention policy and the
Great Library Work IDs for future registries and implementations.

