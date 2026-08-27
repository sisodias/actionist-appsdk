# P9-L03 local corpus to block join

Observed 2026-08-27. Research-only; no client data, vendor login, source clone/copy/open/execute, build, deploy, benchmark, license scan, SBOM, or admission.

## Measured join

The Phase 8 local join reports component union **8,515**: new metadata/component store **7,949**, legacy design-system store **3,508**, intersection **2,942**. The union contains **3,506 source-bearing legacy identities** and **5,009 bundle/metadata-only or otherwise non-source identities**. New harvest evidence separately reports **7,828 bundles** and **7,949 metadata records**. These are artifact populations, not admitted blocks.

The B2B shelf has **17 pinned template rows**: 12 declared-permissive-but-unverified, 2 copyleft-declared, and 3 unknown. The template gap register contributes **70 seeds**. Repo-to-block mechanics contributes 4 source shapes, 11 pipeline stages, 18 mechanism rows (8 DET, 4 DET-ENV, 6 SEMI), and human-required stages 2, 6, 10. AutoSaaS is joined as a harvest/provenance protocol path only.

## Strict gate counters

| Gate | Measured inputs | Strictly capable now | Why |
|---|---:|---:|---|
| Stage 0 identity | 3,506 source-bearing; 17 pinned shelf identities | 0 | no complete URL + immutable revision + declared content digest receipt for a candidate |
| Stage 2 shape | 4 source shapes; 3,506 source-bearing; 7,828 bundles | 0 | shape choice is a required human receipt and no candidate receipt exists |
| Stage 3 dependency closure | 18 mechanisms; 10 conversion stages | 0 | no candidate dependency graph/closure receipt was produced |
| Rights gate | 11,549 third-party records; 2 license fields; 17 shelf rows | 0 | metadata signals are not clearance; no license scan or dependency review |
| Admission | 8,532 joined component/shelf identities | 0 | all required evidence/owner/rollback/authority gates remain unexecuted; admitted blocks = 0 |

The **70 template seeds**, **17 shelf rows**, and **8,515 component union** are preserved as discovery/reference denominators. Bundle, metadata, source-bearing, template, and unresolved-inventory identities are not conflated.

## Mini corpus

The claimed Mini **850k/80k** corpus could not be resolved through the named Phase 8/2/7 inventories and paths. No broad disk sweep and no shell-history read were performed. Location remains **UNKNOWN**. The smallest next gate is an operator-provided exact path or manifest name for a bounded `stat`/metadata check.

## Source map and boundaries

- `phase-8/lanes/02-local-corpus-join/outputs/local-corpus-join.jsonl` — direct local asset counts and paths.
- `phase-8/lanes/02-local-corpus-join/outputs/overlap-and-dedupe.jsonl` — 8,515 union, 3,506 source-bearing interpretation, and no content-hash limitation.
- `phase-8/lanes/03-b2b-template-shelf/outputs/b2b-template-shelf.jsonl` — 17 shelf rows, pinned identities, declared rights states.
- `phase-8/external-opus-inputs/templates/template-seed-register.jsonl` — 70 template gap seeds.
- `phase-8/lanes/04-repo-to-block-mechanics/outputs/mechanism-and-tool-census.jsonl` and `repo-to-block-pipeline.md` — mechanics and source-shape requirements.
- `phase-8/lanes/01-universal-block-framework/outputs/universal-block-contract-delta.json` — proposed identity, packaging, composition and evidence deltas; not adopted.
- `phase-2/outputs/local-corpus-register.jsonl` — 79-root known inventory boundary; missing paths remain unknown.
- `phase-8/cross-lane-join.json` — 2/11,549 license fields, zero admissions, and unresolved Mini path.

All evidence is labeled direct, inferred, or unknown in the ledgers. No promotion is authorized.
