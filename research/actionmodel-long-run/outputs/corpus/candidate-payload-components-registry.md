# Candidate packet: Ducksss/payload-components

Status: `held_candidate_reference`  
Reviewed: 2026-08-26  
Source: https://github.com/Ducksss/payload-components  
Pinned source commit: `d5c2df45ed30be23ac21cd72480a6748b1e71d21`

## Why this candidate matters

This is the strongest component-registry record in cluster-006 for admission
workflow evidence. The pinned source exposes `registry:block` items and typed
manifests, and its README describes a wrapper that installs source, registers a
Payload block, wires the renderer and Pages collection, regenerates types and
the import map, and records install state. The source also documents dry-run,
idempotent re-install, recovery, and a provenance ledger. Its CI names release,
fresh-consumer, and visual-baseline gates.

The useful conclusion is the contract shape, not that the repository is already
a SISO block. The candidate targets Payload v3 + Next.js and its `stats-card`
manifest is a useful comparison for Horizon's table/chart feature boundary.

## License and provenance observations

- The pinned `LICENSE` is MIT, copyright `2026 Ducksss`.
- `package.json` declares MIT and includes registry source, manifests, schemas,
  templates, and CLI output in the package surface.
- `payload-components/PROVENANCE.md` records re-implemented layouts derived
  from `tailark/blocks` at pinned commits and labels the intentional
  divergences. That upstream attribution chain must be independently scanned
  before reuse; the repository's own MIT declaration is not a substitute for
  dependency/asset provenance.
- `payload-components/manifests/stats-card.json` declares version, supported
  Payload/Next majors, owned files, Payload wiring fragments, recovery-patched
  files, post-install generation, preview text, and sample content.

## Admission mapping

| Gate | Evidence observed | State here |
| --- | --- | --- |
| source URL and pinned commit | GitHub repository and commit above | observed |
| declared software license | MIT LICENSE and package metadata | observed, not a complete scan |
| item/manifest contract | `payload-components/registry.json`, `manifests/*.json` | observed |
| adaptation/provenance | `PROVENANCE.md` and upstream Tailark references | needs independent review |
| target compatibility | Payload v3 + Next.js support matrix | not Horizon-compatible by itself |
| dependency and asset scan | no local checkout or scanner receipt | open |
| build and deterministic checks | CI commands are documented | not run in this lane |
| browser smoke and screenshot | visual workflow is documented | not run in this lane |
| owner and install boundary | generated-file ownership is described | needs target-specific receipt |
| rollback/recovery | manifest recovery fields and state/journal claims | needs failure-injection evidence |

## Disposition

`held`. This record is suitable for a bounded registry-contract comparison and
possibly a future read-only conversion experiment, but it is not an admitted
block and does not replace the Horizon pilot. Admission requires a checkout,
complete source/dependency/asset license receipt, target adaptation, build,
browser smoke, screenshot, owner, and rollback evidence. No runtime code or
shared schema was changed.

## Reproduction pointers

```text
research/github-sweep/lane2-component-registry.json#fullName=Ducksss/payload-components
https://github.com/Ducksss/payload-components/tree/d5c2df45ed30be23ac21cd72480a6748b1e71d21
https://github.com/Ducksss/payload-components/blob/d5c2df45ed30be23ac21cd72480a6748b1e71d21/payload-components/PROVENANCE.md
https://github.com/Ducksss/payload-components/blob/d5c2df45ed30be23ac21cd72480a6748b1e71d21/payload-components/manifests/stats-card.json
```
