# AM-CORPUS bounded queue

Updated after `checkpoint-006` on 2026-08-26. Keep one cluster in flight and
retain the later queue instead of reopening the 389-record sweep.

## Completed: cluster-002-exact-stack-starters

Source: `research/github-sweep/lane2-nextjs-boilerplate.json` (15 records).
Result: 0 accepted, 15 held, 0 rejected. ixartz is the host compatibility
baseline; Next-Elite is an auth/RBAC shell fallback; Horizon remains the feature
source. See `cluster-002-review.json` and `checkpoint-002.md`.

## Completed: cluster-003-read-model-and-schema-tools

Sources: `lane2-postgres-schema-migration-tool.json`,
`lane3-schema-introspection.json`, and `lane3-database-to-api.json` (32
records). Result: 0 accepted, 31 held, 1 rejected. `JustVugg/dbcli` is the
read-model sidecar candidate but needs a write-denying wrapper and packaging
fix; `nvcnvn/scheme` is migration reference; Schema-Weaver is rejected for
current OSS production reuse because its pinned license is BSL-1.1. See
`cluster-003-review.json`, `candidate-dbcli-read-adapter.md`, and
`checkpoint-003.md`.

## Completed: cluster-004-proof-and-preview

Sources: `lane3-browser-preview-iframe-dev.json`,
`lane3-code-sandbox-api.json`, `lane3-static-site-deploy-api.json`, and
`lane3-wildcard-subdomain-deploy.json` (8 non-empty records; three empty
slices). Result: 0 accepted, 8 held, 0 rejected. `bitrun/api` is a held,
security-sensitive arbitrary-code sandbox reference; local 21st previews are
reference-only. See `cluster-004-review.json` and `checkpoint-004.md`.

## Completed: cluster-005-license-and-provenance

Source: `lane3-license-detection.json` (15 records). Result: 0 accepted, 15
held, 0 rejected. Local harvest integrity is PASS for 7,949 entries, but no
license scanner is installed; see `cluster-005-review.json`,
`license-gate.md`, and `checkpoint-005.md`.

## Completed: cluster-006-component-registry

Sources: `lane2-component-registry.json` and
`lane2-storybook-components-library.json` (30 records). Result: 0 accepted, 30
held, 0 rejected. `Ducksss/payload-components` is the strongest registry
contract reference; `jal-co/scn-stack` is registry scaffolding; the Storybook
records provide proof/tooling references but no admitted Horizon block. See
`cluster-006-review.json`, `candidate-payload-components-registry.md`, and
`checkpoint-006.md`.

## Completed: cluster-007-admission-gate-execution-plan

The bounded read-only execution plan is recorded in
`cluster-007-admission-gate-execution-plan.md` and `cluster-007-plan.json`.
It defines source/license, adaptation, dependency/asset, build, browser,
screenshot, owner/rollback, and final-verdict receipts. All execution receipts
remain `not_run`; no gate result was claimed.

## In flight: cluster-007-horizon-admission-execution

Preflight is recorded in `cluster-007-execution-preflight.json` and
`checkpoint-007.md`: disk and a Playwright executable are available, but the
scanner, pinned checkout, fixture host, and owner/rollback assignment are not.
Execute the plan only after those prerequisites are available. Until then the
Horizon draft remains held and the plan is the standing queue. Use the Payload
manifest/recovery shape as a comparison reference only.

## Standing holds

- Any `none`, `other`, GPL/AGPL, or mixed/unclear license stays held until
  direct evidence resolves it.
- No direct GitHub discovery expansion until the local clusters and named
  evidence gaps have been processed.
- No edits to `SWEEP-MERGED.json`, `design/block-contract.schema.json`, runtime
  code, or another lane's output.
