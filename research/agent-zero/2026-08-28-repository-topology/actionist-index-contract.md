# Actionist index contract

Status: 'proposed_contract' · applies to the private client-facing
Sinamun/Actionist-AppSDK index/control plane

## Purpose

The Actionist index is a durable directory of artifacts and relationships. It is not the source
repository for every SISO project, not a Git submodule graph and not an admission register by
itself. It makes a repository move survivable by storing stable IDs, immutable revisions,
content digests and typed links.

The existing Actionist snapshot remains the client-owned history. This contract proposes a future
small index projection; it does not authorize changing that repository in this lane.

## Entry contract

Every published or indexed artifact entry must have these fields:

| Field | Required form | Meaning |
| --- | --- | --- |
| artifact_id | stable opaque ID, never a filesystem path | Identity that survives a move or rename. |
| artifact_kind | repository, release, registry, framework, block, data_manifest, generated_projection or documentation | What is being indexed. |
| display_name | human-readable string | Search and UI label; not identity. |
| owner | observed account or explicit proposed owner | Account/authority boundary. Do not infer legal ownership from a URL. |
| visibility | public, private, client_private, metadata_only or unknown | Publication state of this entry and its payload. |
| canonical_locator | URL or declared object-store URI | Current retrieval location; may be null for a proposed item. |
| immutable_revision | full commit, tag digest, release ID or object digest | The exact version being referenced. A mutable branch alone is invalid. |
| content_digest | algorithm + digest, or explicit not_captured | Integrity check for the referenced artifact/manifest. |
| source_of_truth | stable artifact ID + path/manifest role | Which record or source generated this entry. |
| publication_state | observed, proposed, staging, released, held or revoked | Lifecycle state, separate from quality. |
| rights_state | observed, cleared_for_metadata, cleared_for_redistribution, unknown or held | Rights decision for this exact artifact and route. |
| dependencies | array of artifact IDs with relationship kind | Typed dependency/consumer edges. |
| great_library_join | Work/Release/Snapshot IDs or explicit null + reason | Public lineage join; absence is not a failure for a proposal. |
| last_verified_at | ISO date | Freshness of the evidence, not a claim of production health. |

The contract also permits supersedes, superseded_by, qualification_refs, admission_scope,
retrieval, private_overlay and notes. These fields must not contain credentials, raw client data,
absolute machine paths or unreviewed source excerpts.

## Identity invariants

1. artifact_id is stable and opaque. It never embeds an owner, repository path or branch.
2. An immutable revision and digest are required before a row can be called released, qualified
   or admitted.
3. A mutable locator can be retained as a convenience alias only when paired with the immutable
   revision and a verification date.
4. A move creates an alias/replacement relation; it does not create a new capability silently.
5. A withdrawn artifact remains as a tombstone with reason, successor and revocation propagation.
6. Links are typed (implements, indexes, generated_from, publishes, depends_on, consumes,
   supersedes, materializes) and never rely on directory adjacency.
7. A public index entry can point to a private payload only as metadata. It must expose the
   payload's visibility and retrieval authorization state.
8. unknown is preserved. It is not rewritten as false, not_applicable or released.
9. No entry grants a block qualification or production admission merely by being indexed.
10. There are no submodule requirements. Consumers resolve the entry through the locator,
    revision, digest and release receipt.

## Suggested projection

If later authorized, a small index could use:

~~~text
index/
  repositories.json
  artifacts/
    <artifact-id>.json
  relationships.jsonl
  manifests/
    <release-or-data-manifest>.json
  generated/
    search.json
    graph.json
~~~

repositories.json is a projection of artifact entries, not a second Great Library registry.
relationships.jsonl is append-friendly and typed. A generated projection must declare its
source-of-truth IDs and generator revision.

## Publication states

| State | Meaning | Can it be public? |
| --- | --- | --- |
| observed | Read-only evidence exists; no publication decision. | Only if the payload and metadata are independently safe. |
| proposed | A future placement/name or contract is recommended. | No locator should be implied. |
| staging | Local package or generated record exists but is not a release. | Metadata-only if scrubbed; default private. |
| released | Immutable artifact release with rights and verification receipts. | Yes only when visibility and rights say so. |
| held | A gate is missing or failed. | Do not publish payload; a redacted status may be public. |
| revoked | A prior release must no longer be consumed. | Keep the tombstone and reason; block resolution. |

qualified and admitted are qualification-system states, not replacements for publication_state;
they require the seven-record contract family and evidence receipts.

## Index-to-library join

~~~json
{
  "artifact_id": "actionist.block.teable.release.v0.1",
  "artifact_kind": "release",
  "owner": {"account": "sisodias", "ownership_status": "observed_account"},
  "visibility": "metadata_only",
  "canonical_locator": null,
  "immutable_revision": {"type": "git_commit", "value": "<full-commit-sha>"},
  "content_digest": {"algorithm": "sha256", "value": "<release-manifest-sha256>"},
  "source_of_truth": {"artifact_id": "actionist.block.teable", "role": "release-manifest"},
  "publication_state": "staging",
  "rights_state": "held",
  "dependencies": [
    {"artifact_id": "siso.teable.donor", "kind": "depends_on"}
  ],
  "great_library_join": {
    "work_id": null,
    "release_id": null,
    "snapshot_id": null,
    "reason": "future Work and Release require an authorized publication step"
  },
  "last_verified_at": "2026-08-28"
}
~~~

The placeholder values make this a contract example, not a claim that the release exists.

## Privacy and public-provenance rules

- Client-private material is represented by a redacted status and an authorized retrieval class,
  never by copying the material into the index.
- Credentials, raw WhatsApp/comms, local .env values, machine paths and private data are
  forbidden in index entries and generated projections.
- Third-party source is linked by its public locator, pinned revision and license/obligation
  state. A compiled reference or screenshot is not represented as source ownership.
- Generated corpora point to a manifest and object store, not thousands of path-dependent rows.
- Every public item names its provenance and distinguishes SISO-authored code, donor service,
  reference evidence, generated metadata and client-owned material.

## Verification contract

A future publisher should fail closed if:

- an entry has a duplicate artifact_id;
- a typed link targets an unknown ID;
- a released row lacks an immutable revision, digest or rights state;
- a generated projection lacks source_of_truth;
- a public row exposes a private path, credential pattern or raw client payload;
- a replacement/tombstone does not preserve the predecessor and revocation relation;
- a Great Library join claims a Work/Release/Snapshot that is not present in the cited receipt.

