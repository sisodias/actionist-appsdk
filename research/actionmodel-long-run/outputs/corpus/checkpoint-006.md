# AM-CORPUS checkpoint-006

Date: 2026-08-26  
Lane: `AM-CORPUS`  
Run: `actionmodel-long-run-2026-08-26`  
State after checkpoint: `active`

## Scope

This checkpoint processes all 15 records in
`research/github-sweep/lane2-component-registry.json` and all 15 records in
`research/github-sweep/lane2-storybook-components-library.json`. The local
records were read before disposition. Direct source review was limited to the
highest-signal registry/proof candidates so the 389-record sweep was not
restarted:

- `Ducksss/payload-components` at
  `d5c2df45ed30be23ac21cd72480a6748b1e71d21`
- `jal-co/scn-stack` at
  `d15c9d1cdac3fb75b0cdcca19426cf8504b44118`
- `vantezzen/shadcn-registry-template` at
  `a6954706f31519df6a0197bfc1ef64ae12623f26`
- `rebeccarich/storybook-addon-flow-builder` at
  `5f6b91feb9910564504d2cfe1e41aabe0bd5b887`
- `troychaplin/component2block` at
  `53fd3256b9be74a87efbbbcec370693781d485b2`
- `olivercaine/ui-component-library` at
  `5d65b7aecff93599485dcebf86516ca9cee8217b`

The complete per-record receipt is `cluster-006-review.json`. The strongest
new contract reference is documented in
`candidate-payload-components-registry.md`.

## Counts

| Scope | Reviewed | Accepted | Held | Rejected |
|---|---:|---:|---:|---:|
| cluster-001 dashboard/admin shells | 15 | 0 | 15 | 0 |
| cluster-002 exact-stack starters | 15 | 0 | 15 | 0 |
| cluster-003 read-model/schema tools | 32 | 0 | 31 | 1 |
| cluster-004 code-sandbox/proof records | 8 | 0 | 8 | 0 |
| cluster-005 license/provenance records | 15 | 0 | 15 | 0 |
| cluster-006 component registry + Storybook | 30 | 0 | 30 | 0 |
| **cumulative bounded source records** | **115** | **0** | **114** | **1** |

Every cluster-006 record has a source path, canonical repository URL, and
content-backed reason in `cluster-006-review.json`. No record is counted as an
admitted block.

## Findings

`Ducksss/payload-components` is the best registry-contract reference in this
cluster. Its pinned MIT source exposes `registry:block` items and manifests
that describe version, supported target majors, owned files, Payload wiring,
recovery-patched files, post-install generation, preview metadata, and sample
content. Its documentation also describes dry-run and idempotent install
behavior, a provenance ledger, deterministic registry checks, fresh-consumer
smoke shards, release checks, and visual baselines. The source is Payload-
specific and therefore is not itself a Horizon block. The candidate remains
held pending a checkout, complete dependency/asset license receipt, adaptation
review, build, browser smoke, screenshot, owner, and rollback evidence.

`jal-co/scn-stack` is a useful registry scaffolder: its MIT source supports
hosted and GitHub source registries, generated registry items, namespaces, and
tests/CI. It supplies registry plumbing rather than a ready table/chart block.
`vantezzen/shadcn-registry-template` has the right general JSON shape but its
pinned source has no LICENSE file and its demo contains a deprecated marquee;
it stays held. `rebeccarich/storybook-addon-flow-builder` provides Storybook
story-index discovery, generated flow stories, fixtures, and MSW mocks, but it
is an unpublished API-key-dependent flow tool, not a block registry. The
remaining records are platform-mismatched, too sparse, generic/legacy, or
license-unclear.

## Disposition rules applied

- `none` and `other` license hints remain held until direct license evidence
  resolves them.
- MIT or Apache-2.0 hints are only license leads, not admission clearance;
  complete source/dependency/asset and attribution scans are still required.
- A registry, Storybook preview, or CI workflow is evidence of a possible
  contract/proof surface, not evidence that a block is buildable in SISO.
- Platform mismatches (Rust/Dioxus, Vue, ESP32, ONNX, WordPress, Gatsby, or
  generic backend registries) remain reference-only unless an explicit adapter
  is scoped and proven.
- No candidate is accepted without source pinning, adaptation/provenance,
  build, browser smoke, ownership, and rollback evidence.

## Admission consequence

The Horizon dashboard source remains the only read-only Block Contract
conversion pilot. The Payload registry packet improves the conversion plan by
showing a manifest/recovery shape, but it does not alter the Horizon draft or
the shared schema and does not create an admitted block.

## Proof boundary

No repository checkout, dependency install, build, browser run, screenshot,
license scan, runtime edit, merged-artifact edit, shared-schema edit, or other
lane output edit was performed. GitHub source inspection was read-only. The
only new durable files are this checkpoint, the cluster receipt, and the
Payload candidate packet.

## Reproduction commands

```sh
jq 'length' research/github-sweep/lane2-component-registry.json
jq 'length' research/github-sweep/lane2-storybook-components-library.json
jq -e '(.source_record_count == (.candidates|length)) and (.dispositions.accepted + .dispositions.held + .dispositions.rejected == .source_record_count)' research/actionmodel-long-run/outputs/corpus/cluster-006-review.json
jq '.dispositions' research/actionmodel-long-run/outputs/corpus/cluster-006-review.json
jq '[.candidates[] | select(.pinned_commit != null) | {repo,pinned_commit}]' research/actionmodel-long-run/outputs/corpus/cluster-006-review.json
```

## Next bounded queue

Proceed to `cluster-007-admission-gate-execution-plan`: record the exact
read-only steps and receipts needed to turn the Horizon draft into a real
admission attempt, using the Payload manifest as a comparison reference. Keep
the plan bounded to the corpus output directory and do not claim a build,
browser, license, ownership, or rollback result until each command has run.
