# AM-CORPUS checkpoint-005

Date: 2026-08-26  
Lane: `AM-CORPUS`  
Run: `actionmodel-long-run-2026-08-26`  
State after checkpoint: `active`

## Scope

This checkpoint processes the 15 records in
`research/github-sweep/lane3-license-detection.json`. It also records the
read-only integrity result from the existing local 21st harvest and the
license-gate receipt required before any block admission.

## Counts

| Scope | Reviewed | Accepted | Held | Rejected |
|---|---:|---:|---:|---:|
| cluster-001 dashboard/admin shells | 15 | 0 | 15 | 0 |
| cluster-002 exact-stack starters | 15 | 0 | 15 | 0 |
| cluster-003 read-model/schema tools | 32 | 0 | 31 | 1 |
| cluster-004 code-sandbox/proof records | 8 | 0 | 8 | 0 |
| cluster-005 license/provenance records | 15 | 0 | 15 | 0 |
| **cumulative bounded source records** | **85** | **0** | **84** | **1** |

Every candidate record in cluster-005 has a source path, canonical URL,
content-backed reason, and next gate in `cluster-005-review.json`.

## Integrity versus license

The prescribed local integrity check passed for all 7,949 local 21st harvest
directories: `valid=7949`, `badJson=0`, `missingFields=0`, `tinyBundle=0`.
It reported 121 directories without bundles, 271 without previews, and one
verified upstream stub. These are integrity counts, not license or provenance
clearance. No ScanCode executable is installed, so the actual source/dependency/
asset license scan remains unrun.

The complete gate specification, receipt shape, and permit/hold/reject policy
are in `license-gate.md`.

## Findings

`stcarrez/spdx-tool` is the most relevant direct candidate in the lane: Apache-
2.0, current, per-file SPDX detection, JSON/XML reports, and header inspection.
It remains held until its Ada build and JavaScript/dependency/asset coverage are
proven. `whichlicense` is archived and carries a ScanCode-data attribution
boundary. The remaining software-license records are either ecosystem-specific
or reference/test data; vehicle-license projects are out of scope. No license
tool is admitted as a block.

## Admission consequence

The Horizon source license is observed at its pinned commit, but its
dependency/asset scan is still open. The local harvest's integrity PASS cannot
be copied into Horizon's `eval.admission.license_scan`. The Horizon draft stays
schema-valid with no admission result.

## Proof boundary

No candidate checkout or license scan was created. No runtime code, shared
schema, merged artifact, or other lane file was changed. The only executed
check was the local read-only integrity script described above.

## Reproduction commands

```sh
jq 'length' research/github-sweep/lane3-license-detection.json
jq '.dispositions' research/actionmodel-long-run/outputs/corpus/cluster-005-review.json
node /Users/shaansisodia/SISO_Workspace/siso-ui-base/registry/21st/verify-harvest.mjs --json
command -v scancode || true
```

## Next bounded queue

Proceed to `cluster-006-component-registry`: review the existing component-
registry and Storybook slices for reusable UI contract/proof surfaces, while
keeping the local 21st bundles reference-only until the license receipt exists.

