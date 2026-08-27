# License and provenance gate specification

Date: 2026-08-26  
Owner: `AM-CORPUS`  
State: `specified_not_run`

## What the local evidence proves

The existing local 21st integrity script is
`/Users/shaansisodia/SISO_Workspace/siso-ui-base/registry/21st/verify-harvest.mjs`.
Its read-only JSON run on 2026-08-26 returned:

```json
{
  "total": 7949,
  "valid": 7949,
  "inFlight": 0,
  "badJson": 0,
  "missingFields": 0,
  "noBundle": 121,
  "tinyBundle": 0,
  "stubUpstream": 1,
  "noPreview": 271,
  "withUsage": 2436,
  "pass": true
}
```

That is an **integrity** result only. The script checks metadata fields,
bundle/preview presence, malformed JSON, and tiny/stub bundles. It does not
check a source commit, SPDX license, copyright notice, dependency license, or
third-party asset terms. The local component `meta.json` files similarly carry
URL/author/slug/id and dependency metadata but do not establish Git provenance
or a license.

No `scancode` or `scancode-toolkit` executable is installed on this machine.
The existing research receipt identifies
`aboutcode-org/scancode-toolkit` as the intended industry-standard gate, but no
local checkout or executed scan is claimed here.

## Required receipt before block admission

For each extracted candidate, write a JSON receipt alongside the candidate
packet with these fields:

```json
{
  "source_url": "https://github.com/owner/repo",
  "commit_sha": "40-hex-pinned-source-commit",
  "scanner": "scancode-toolkit@<version>",
  "command": "scancode --license --copyright --info --strip-root --json scan.json <candidate-root>",
  "input_root": "<isolated-candidate-root>",
  "source_sha256": "<archive-or-tree-receipt>",
  "license_counts": {"MIT": 0, "Apache-2.0": 0, "BSD-3-Clause": 0, "unknown": 0},
  "copyright_files": [],
  "unknown_or_disallowed_files": [],
  "dependency_and_asset_scan": "clean|flagged",
  "attribution_bundle": "<path>",
  "verdict": "clean|hold|reject",
  "run_date": "YYYY-MM-DD"
}
```

The candidate passes the license gate only when every source/dependency/asset
file is mapped to a permitted license (MIT, Apache-2.0, BSD-2-Clause,
BSD-3-Clause, ISC, or first-party), all notices are retained, no unknown or
GPL/AGPL/BSL file is inside the proposed reuse boundary, and the source commit
is pinned. `unknown`, `other`, mixed-license, or missing copyright evidence is
`hold`, not clean. GPL/AGPL stays reference-only per the lane policy. BSL or
other production-restricted terms are rejected for the current OSS client path
unless a separate commercial/legal decision is recorded.

## Tool candidates reviewed

- `stcarrez/spdx-tool` — Apache-2.0; direct source describes per-file SPDX
  detection and JSON/XML reports, but its Ada/GNAT build and web dependency/asset
  coverage are unproven. Hold as an optional tool candidate.
- `whichlicense/license-detection` — Apache-2.0 but archived; direct README
  calls out ScanCode license data and CC-BY-4.0 attribution. Hold as reference.
- `dkpro/dkpro-c4corpus` — Apache-2.0 but aimed at CommonCrawl/Creative Commons
  corpus processing; not a direct application-code gate. Hold as reference.
- `nix-community/nix-init` and `pmonks/lice-comb` — MPL-2.0; hold outside the
  v0 permit list.
- Licensee/sample/test-data repositories — fixture/reference only; they do not
  clear a candidate's source or dependency tree.

## Current candidate impact

Horizon has source-level MIT evidence at its pinned commit, but the license
gate is still open for dependencies, credited resources, and the linked
Horizon UI EULA. Its Block Contract draft therefore remains held and lacks an
`eval.admission` result.

