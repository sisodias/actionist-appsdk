# Great Library join and publication contract

Status: 'research_only' · no Great Library files were changed

## Authority split

The existing Great Library is the public identity and lineage registry. Its README and schemas
define a catalog of stable Works, versioned Releases, metadata-complete Snapshots, Assemblies and
Source Inventories. The Actionist index is a client-facing projection and operational join surface.
It must not become a competing Work catalogue.

The physical checkout relationship is not ownership: repositories can be checked out together,
but a directory nesting or symlink does not establish containment.

## Field mapping

| Actionist index concept | Great Library record | Join rule |
| --- | --- | --- |
| artifact_id | work_id or release artifact identity | Keep Actionist IDs stable and opaque. Store the Great Library ID when one exists; never derive it from a path. |
| repository identity | Work.provenance.locators[] | Pin URL, revision, visibility, verification evidence and ownership status. |
| immutable source release | Release.artifacts[] | Record exact locator, revision, license/obligation, availability, owner and integrity. |
| generated repository/data manifest | Release artifact of kind registry_metadata or source_archive, as appropriate | The release must identify the generator/source-of-truth and manifest digest. |
| object-store shard/payload | Snapshot.artifact_materialization[] or a release artifact locator | The public record may carry metadata and receipt while the payload remains private or external. |
| current cross-repo view | Snapshot | Pin the set of releases and the snapshot manifest SHA-256; do not copy all payloads into the snapshot. |
| composition of released capabilities | Assembly | Use only after each component has its own release/qualification boundary. |
| broad intake/corpus | Source Inventory | Discovery evidence can remain candidate/held; it is not a Work or admission decision. |

## Recommended join sequence

~~~text
local source or data plane
        |
        v
Actionist artifact entry: stable ID + immutable revision + digest + rights state
        |
        v
owning repository release (if applicable)
        |
        v
Great Library Work -> Release -> successor Snapshot
        |
        v
Actionist index projection and generated links
~~~

The owner improves the owning repository first. The publication unit is an immutable release.
The Great Library then accepts the Work/Release metadata and records a successor Snapshot when
the public catalog view changes. An Actionist page can link to all of these IDs without owning
their lifecycle.

## Current joins and gaps

### Existing public registry

The local Great Library checkout is public sisodias/great-library-of-siso at
4ce8da029c90e272e3fe26374c1fb4d2d5c5c86e. Its current generated site exposes repository records
with fields such as owner, repository, URL, Work ID, lifecycle, library URL, locator revision,
visibility, status, active release and artifact revision.

The Great Library already has a private-locator Work precedent:
gls:work:efb00129-4ec6-4637-a2f8-dcead4f7d8dd for Action Model connector research points to a
private repository while keeping the registry metadata public. This supports a public metadata /
private payload split, but it does not automatically grant publication or a release.

### UI Base candidate

The Great Library laptop-estate Source Inventory records siso-ui-base as a candidate requiring
sanitization and with no target Work ID. Keep that candidate status until the engine, external
corpus and rights route are separated. Do not create a Work merely because a local checkout
exists.

### Locator reconciliation

Some generated/current Great Library records retain historical Lordsisodia URLs, while current
GitHub API evidence for the relevant public repositories uses sisodias. A future join must
record an alias/reconciliation event and re-verify the exact revision. It must not overwrite a
historical receipt or silently redirect a release.

## Companion fields not currently first-class

The current Great Library schemas are strong for Work/Release/Snapshot identity, but the
repository-topology lane needs additional fields. Keep them in an Actionist companion manifest
until a separately authorized Great Library schema change:

| Companion field | Why it is needed |
| --- | --- |
| repository_manifest | Maps a repository to artifact classes, source-of-truth files and generated outputs. |
| artifact_shard | Identifies one bounded object-store or release shard and its digest. |
| object_store_locator | Separates metadata publication from payload retrieval and authorization. |
| generated_from | Prevents stale generated site/index files from masquerading as source. |
| link_health | Records checked URL/revision/alias resolution without changing the historical record. |
| digest_basis | States whether a digest covers a Git tree, release manifest, archive or object. |
| retention | Records retention, recovery horizon and revocation propagation for external payloads. |
| artifact_rights and privacy_class | Keeps source license, client confidentiality and redistribution route distinct. |
| repository_aliases | Reconciles account/URL changes such as Lordsisodia to sisodias with evidence. |

The companion fields should link to Great Library IDs rather than replicate their values as an
independent catalogue.

## Artifact-class join policy

| Artifact class | Public Great Library route | Actionist route | Default gate |
| --- | --- | --- | --- |
| SISO-authored source/contracts | Work + immutable Release | index entry with source/release digest | rights and release verification |
| Framework method/schema | Work or registry metadata Release | framework entry + generated page pointer | scrub client context and machine-path leakage |
| Block contract metadata | registry metadata Release | block entry + seven-record refs | qualification/admission remain separate |
| Block implementation | Work + source/runtime Release | implementation/release entry | donor, runtime, identity, tenancy, rollback and rights |
| Generated index/projection | release artifact with generator/source hash | generated pointer | deterministic rebuild and link check |
| UI corpus/data shard | metadata manifest/receipt; payload may stay private | data-manifest entry | rights, retention, content digest and retrieval authorization |
| Client/private material | no public payload release | redacted private overlay only | explicit client authorization |

## Release gate

A future release is joinable only when it has:

1. an owning repository or explicitly named object store;
2. exact immutable revision and content digest;
3. artifact-level license/rights/privacy state;
4. a rollback/revocation route;
5. generated-from/source-of-truth references;
6. a Great Library Work/Release/Snapshot decision or an explicit reason for holding;
7. an Actionist index entry that points to the release without copying the payload.

The Teable and AFFiNE packages currently fail closed at this boundary: they are local prototypes
with partial qualification and no released implementation repository. Framework records are
research-only; the registry currently declares zero operational frameworks.

## What this lane did not do

No Great Library registry, GitHub repository, remote, release, snapshot, object store or public
page was changed. The join is a publication plan for a later authorized owner/release step.

