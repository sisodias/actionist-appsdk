# Large-asset and generated-artifact strategy

Status: 'proposed_policy' · read-only assessment · checked 2026-08-28

## Policy

Keep small, reproducible source and metadata in Git. Keep generated projections only when they
are compact, deterministic and linked to their source-of-truth. Keep multi-gigabyte corpus
payloads, raw observations, databases, caches and generated browser/run artifacts in a separate
content-addressed data plane with immutable manifests and explicit rights/retention state.

This is both a repository-health decision and a provenance decision. Git LFS can move bytes out of
ordinary Git, but it does not resolve third-party rights, client confidentiality, object
retention, deterministic rebuilds or multi-consumer retrieval.

## Measured local facts

The current siso-ui-base checkout has:

| Path/class | Observed size or count | Treatment |
| --- | ---: | --- |
| tracked Git files | 85 files / 3,478,858 tracked bytes | Keep source/contracts/compact indexes in Git where rights permit. |
| full working tree | about 3.6G | Do not infer publishability from local presence. |
| registry/21st/harvest | 3,014,853,181 bytes / 31,555 files / 7,949 component directories | External data plane; preserve a slim manifest and content digests. |
| registry/21st/previews | 832 files / 338,683,595 bytes | External object store or explicitly versioned release asset; not ordinary Git. |
| registry/21st/extras | 3,028 files / 189,630,803 bytes | External object store; source/rights classification remains separate. |
| harvest contents | 7,949 metadata files; 7,828 bundles; 7,829 demos; 7,678 previews | Keep counts and missing-entry receipts in a compact manifest, not the payload tree. |
| legacy source-bearing corpus | 3,508 directories / 3,506 real .tsx files in the local join evidence | Private/quarantine until license and redistribution route are resolved. |

The corpus audit reports that newer 21st bundles are compiled references and source is not
available for the newer harvest; the local join reports 11,549 third-party records with only two
license fields. These are reasons to preserve provenance and hold publication, not reasons to
delete or move the corpus.

SISO Foundry has a parallel boundary in its provenance: code, contracts, schemas, small fixtures
and provenance are Git material; multi-gigabyte databases, raw observations, transcripts,
generated browsers, caches and run artifacts are external FOUNDRY_DATA.

## Three storage tiers

### Tier A: Git source and compact metadata

Use Git for:

- source code, contracts, schemas and small fixtures;
- framework and block registry records;
- compact URL/name/classification indexes;
- release manifests, checksums and license notices;
- deterministic generator/verifier code;
- documentation that contains no private client payload.

Every generated file declares generated_from, generator revision and digest basis. A generated
file is a projection, not a replacement for the source record.

### Tier B: versioned release assets

Use a release asset when a bounded, immutable export is useful to consumers and its rights,
retention and access route are clear. Split an export into independently verifiable shards when
needed; each shard gets a digest and manifest entry. The release manifest remains in Git and the
Great Library.

Do not use releases as an unbounded database, and do not publish a client/private or rights-
unknown export merely because it fits a size limit.

### Tier C: private/content-addressed data plane

Use an object store or equivalent private data plane for:

- the 21st harvest, bundles, previews and extras;
- raw Foundry databases/observations/transcripts/browser captures;
- generated caches and run artifacts;
- large legacy source-bearing corpora under rights hold;
- any future data whose rebuild cost or retention needs exceed a Git/release artifact.

Each object or shard should have:

~~~json
{
  "object_id": "opaque-stable-id",
  "content_digest": {"algorithm": "sha256", "value": "<digest>"},
  "bytes": 0,
  "media_type": "application/octet-stream",
  "generated_from": [{"artifact_id": "source-of-truth", "revision": "<immutable-revision>"}],
  "rights_state": "unknown",
  "privacy_class": "private",
  "retention": {"policy": "operator-defined", "recovery_horizon_seconds": null},
  "retrieval": {"locator": null, "authorization": "required"}
}
~~~

The values above are a shape contract only. No object store or object was created by this lane.

## 21st corpus handling

The recommended first publication is a slim, rights-aware index:

- component ID, canonical URL, pinned capture/source revision when one exists;
- metadata digest and bundle/preview/demo presence;
- tags, classification provenance and collision status;
- source-available versus compiled-reference status;
- license/rights state and publication route;
- data-plane object IDs for payloads, not machine paths;
- corpus generation date and audit receipt.

Keep the large harvest and previews private. Keep the legacy source-bearing corpus in a separate
quarantine namespace. Do not claim that a compiled bundle is source ownership, and do not promote
the 21st corpus to an admitted reusable block without the existing source identity, dependency,
rights and qualification gates.

The local evidence says the old 832-card board is not a complete view of the 7,949-component
harvest. Rebuild a new faceted projection from the compact manifest rather than extending that
stale board in place.

## GitHub limits checked

Primary GitHub documentation was checked on 2026-08-28:

- [About large files on GitHub](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github?source=post_page---------------------------) warns that files above 50 MiB receive a warning, files above 100 MiB are blocked in regular Git, and recommends keeping repositories under 1 GB (with 5 GB strongly recommended as an upper bound).
- [Repository limits](https://docs.github.com/en/repositories/creating-and-managing-repositories/repository-limits) documents a 2 GB push limit, a 100 MB single-object enforcement point, and recommends LFS for large binaries and external object storage for generated files.
- [About releases](https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases) documents up to 1,000 assets per release and a 2 GiB per-asset limit.
- [About Git Large File Storage](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-git-large-file-storage) documents pointer-file storage and plan-dependent per-file limits; LFS is not a substitute for a rights or retrieval policy.

The local siso-ui-base checkout has Git LFS installed but no LFS-tracked files. That supports
keeping the current Git history compact and using an external data plane rather than retrofitting
the entire corpus into LFS.

## Generated metadata and reproducibility

Generated metadata is publishable only when the manifest records:

1. source-of-truth artifact ID and immutable revision;
2. generator name and generator revision;
3. input manifest/object digests;
4. output digest and byte count;
5. schema version;
6. omitted/private fields and reason;
7. deterministic rebuild command or documented retrieval procedure;
8. link-health and rights/privacy verdict.

The Actionist framework site, Great Library generated site and Foundry indexes can be linked as
projections. They must not be treated as independent sources when their source registry is
missing or stale.

## Retention, restore and revocation

No files are moved or deleted by this plan. A future operator should define:

- immutable version retention and legal hold behavior;
- recovery horizon and restore test cadence;
- per-object revocation/tombstone propagation to Actionist and Great Library;
- checksum verification before serving a shard;
- access logs and authorization class for private payloads;
- garbage collection only after a successor manifest and recovery proof exist.

The public index should remain useful after a private payload is revoked: show the artifact ID,
historical digest, reason and successor/absence state without exposing the payload.

