# AM-CORPUS cluster-007 admission-gate execution plan

Date: 2026-08-26  
Lane: `AM-CORPUS`  
Pilot: `siso/horizon-dashboard-read@0.1.0`  
State: `plan_only_not_executed`

## Purpose and boundary

This is the smallest real admission sequence for the read-only Horizon
dashboard conversion. It is a plan and receipt contract, not an admission
verdict. The only candidate in scope is the pinned Horizon source described in
`candidate-horizon-ui-shadcn-nextjs-boilerplate.md` and drafted in
`candidate-horizon-ui-shadcn-nextjs-boilerplate.block.json`.

The conversion boundary is the authenticated `/dashboard/main` page, its chart
and read-only table, the required shadcn primitives, and the host layout slot.
Provider-specific Supabase/Stripe/chat/essay/webhook code stays outside the
block. The block owns no migrations and no write endpoints.

The Payload Components packet is a comparison reference for manifest,
recovery, and install-state fields. It is not a dependency of the Horizon
block and does not provide any gate result below.

## Preconditions

Execution may start only when all of these are available and recorded in the
output directory:

1. A disposable checkout or equivalent source snapshot at Horizon commit
   `efe90c62391f2d3247a5a5f0712adcad0515aba7`, with its path and SHA-256.
2. A host/base-scaffold target and a fixture session/read-model adapter; no
   provider credentials are required for the read-only fixture smoke.
3. A license scanner that can inspect source, package dependencies, and image,
   font, SVG, and other shipped assets. If ScanCode is unavailable, the gate
   remains held; the local 21st integrity PASS is not a license receipt.
4. A browser runner capable of route assertions, request observation, and
   screenshot capture.
5. An assigned tenant/host owner and a reversible manifest/route rollback
   location.

Do not run package installation or candidate build from this lane until the
checkout/space authority is explicitly available. No such checkout or gate
execution has occurred in this checkpoint.

## Required receipt sequence

The machine-readable version is `cluster-007-plan.json`. Each receipt below is
required before a final verdict; a planned command is not a result.

### G1 — source and license provenance

Create `horizon-source-receipt.json` with the canonical URL, pinned commit,
source snapshot hash, MIT license text/copyright, scanner version/command,
dependency and asset scan roots, attribution bundle, and unknown/disallowed
files. The source license observation is already recorded, but the complete
receipt is not.

Pass only when source, dependencies, and shipped assets are within the permit
policy (MIT, Apache-2.0, BSD-2-Clause, BSD-3-Clause, ISC, or first-party), all
attribution obligations are captured, and no unknown/GPL/AGPL/BSL item remains.

### G2 — extraction, adaptation, and ownership map

Create `horizon-adaptation-receipt.json` listing each kept and excluded source
path, the provider-wiring replacements, the Postgres/Drizzle read shape, token
slots, registry dependencies, and an owner for every generated/edited host
file. The draft adaptation log is a plan only.

Pass only when no direct Supabase/Stripe SDK remains in the block, no hardcoded
palette values remain in the converted surface, no block-owned write or
migration is introduced, and the diff is limited to the stated boundary.

### G3 — deterministic build

Create `horizon-build-receipt.json` recording the checkout SHA, package manager
and lockfile hash, install command, host/scaffold identifier, exact build
command (`npm run build` for the source baseline or the host's equivalent),
exit code, and log artifact path.

Pass only on a clean build in the target host with the converted block enabled.
The source's declared build script and the source README are observations, not
this receipt.

### G4 — browser smoke and write denial

Create `horizon-browser-smoke.json` recording browser/version, fixture session,
route `/dashboard/main`, assertions for chart and table visibility, and every
observed network method. The smoke must fail on any `POST`, `PUT`, `PATCH`, or
`DELETE` request caused by the block; a read request is allowed only through
the provider-agnostic read-model adapter.

Pass only when the authenticated route renders the chart and table, the table
is read-only, no mutation request occurs, and the browser exits cleanly.

### G5 — screenshot baseline

Create `horizon-screenshot-receipt.json` with the baseline path, viewport,
browser/OS renderer, fixture data hash, capture command, and image SHA-256.
Capture after G2–G4 pass and compare against the Actionist tokenized target.

Pass only when the baseline is reproducible and the visual gate records its
threshold and result. A reserved path in the draft JSON is not a captured
baseline.

### G6 — owner and rollback

Create `horizon-owner-rollback.json` with tenant/host owner, registry entry,
route/file ownership, release identifier, rollback command or manifest diff,
and a failure-injection or dry-run result proving that the prior host state can
be restored without deleting unrelated files or data.

Pass only when rollback is scoped to this block and its route/registry entries,
and the owner accepts the receipt. No database deletion is part of rollback for
this read-only block.

### G7 — final verdict

Create `horizon-admission-verdict.json` only after G1–G6. `accepted` requires
all six gates to pass; `held` is mandatory for any `not_run`, failed, unknown,
or incomplete gate; `rejected` is reserved for a policy-disallowed license,
unsafe write boundary, or irreconcilable target mismatch. The verdict must
point to every receipt and include the final source/contract hashes.

## Current gate matrix

| Gate | Existing evidence | State in this lane |
|---|---|---|
| source URL + pinned commit | Horizon packet and draft JSON | observed |
| source MIT/copyright | pinned LICENSE read | observed; complete scan open |
| block-contract schema | `jsonschema` validation passed | pass for draft shape only |
| adaptation map | draft `adaptation_log` | planned, not executed |
| dependency/asset license scan | no scanner/checkout receipt | not_run |
| target build | source script observed | not_run |
| browser smoke/write denial | test description drafted | not_run |
| screenshot baseline | reserved path only | not_run |
| owner + rollback | no assigned target receipt | not_run |
| final admission | no verdict file | held/not admitted |

## Stop conditions

Stop and retain `held` if the source snapshot differs from the pinned commit,
the license/asset scan finds an unknown or disallowed item, provider-specific
side effects remain in the block, the host build fails, the browser observes a
mutation request, the screenshot is not reproducible, or ownership/rollback is
ambiguous. Do not weaken the gate to make a candidate pass.

## Reproduction pointers

```text
research/actionmodel-long-run/outputs/corpus/candidate-horizon-ui-shadcn-nextjs-boilerplate.block.json
research/actionmodel-long-run/outputs/corpus/candidate-horizon-ui-shadcn-nextjs-boilerplate.md
research/actionmodel-long-run/outputs/corpus/candidate-payload-components-registry.md
design/BLOCK-FRAMEWORK.md
design/block-contract.schema.json
```
