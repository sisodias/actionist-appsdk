# AM-CORPUS checkpoint-002

Date: 2026-08-26  
Lane: `AM-CORPUS`  
Run: `actionmodel-long-run-2026-08-26`  
State after checkpoint: `active`

## Scope

This checkpoint processes the next bounded source slice, the 15 records in
`research/github-sweep/lane2-nextjs-boilerplate.json`. It follows checkpoint-001
and does not restart or rewrite the 389-record merged artifact.

Per-record evidence is in `cluster-002-review.json`. The earlier dashboard
cluster remains in `cluster-001-review.json`.

## Counts

| Scope | Reviewed | Accepted | Held | Rejected |
|---|---:|---:|---:|---:|
| cluster-001 dashboard/admin shells | 15 | 0 | 15 | 0 |
| cluster-002 exact-stack starters | 15 | 0 | 15 | 0 |
| **cumulative bounded review** | **30** | **0** | **30** | **0** |

Each reviewed record has a source path, canonical URL, content-backed reason,
and next gate. No candidate is an admitted block.

## Exact-stack comparison

| Candidate | Strongest observed fit | Blocking gap for first pilot | Decision |
|---|---|---|---|
| Horizon UI | Concrete authenticated dashboard route, chart, table, Next/React/Tailwind/shadcn, source SQL | Supabase/Stripe wiring, hardcoded style values, and no build/browser/visual/owner/rollback receipts | Keep as the read-only feature source; held for extraction |
| ixartz | Directly verified MIT, Next 16/React 19, Tailwind 4, Drizzle/Postgres migrations, Vitest/Playwright | Reviewed app routes are generic marketing/counter/auth, not a dashboard feature | Keep as the preferred host compatibility fixture |
| Next-Elite | Directly verified MIT, Next 16/React 19, Tailwind 4, Shadcn, RBAC, protected admin route, Playwright | Admin route renders only a translated header/layout; package has no identified Postgres/Drizzle layer | Keep as auth/RBAC shell fallback, not the pilot host |

The least-adaptation answer is therefore split by layer: Horizon minimizes
dashboard-feature extraction; ixartz minimizes Block Contract host/data/proof
normalization. The next real gate should test Horizon's extracted feature inside
an ixartz-like host, rather than forcing either repository to cover both jobs.

## Direct source receipts

- Horizon commit/license/package/route receipts are in
  `candidate-horizon-ui-shadcn-nextjs-boilerplate.md`.
- ixartz source receipts are in `candidate-ixartz-next-js-boilerplate.md`.
- Next-Elite direct receipt: MIT license at
  https://github.com/salmanshahriar/Next-Elite/blob/ed5cf8ff0469dce1cb7d731313c833de49b9bedc/LICENSE
  and protected admin route at
  https://github.com/salmanshahriar/Next-Elite/blob/ed5cf8ff0469dce1cb7d731313c833de49b9bedc/src/app/%28protected%29/%40admin/dashboard/page.tsx

The Next-Elite route currently calls `requirePermission` and renders a
translated `PageHeader` inside `PageLayout`; it is an admin shell, not evidence
of a populated dashboard or data plane.

## Disposition policy applied

The same evidence ladder remains binding: source URL and pinned commit, source
license/copyright, stack/runtime, bounded inputs/outputs/data ownership,
adaptation log, build, browser smoke, screenshot/contract proof, owner, and
rollback. Missing or unclear license is held. A permissive hint does not clear
the dependency/asset boundary. GPL/AGPL would be rejected for reuse, but no
such record was in this 15-record slice.

## Proof boundary

No checkout, dependency scan, build, browser smoke, or screenshot was executed
for this checkpoint. The direct API review proves source metadata and selected
file content only. The Horizon draft remains schema-valid but has no
`eval.admission` field/result.

## Reproduction commands

```sh
jq 'length' research/github-sweep/SWEEP-MERGED.json
jq 'length' research/github-sweep/lane2-nextjs-boilerplate.json
jq '.dispositions' research/actionmodel-long-run/outputs/corpus/cluster-002-review.json
python3 -c 'import json; from jsonschema import validate; validate(json.load(open("research/actionmodel-long-run/outputs/corpus/candidate-horizon-ui-shadcn-nextjs-boilerplate.block.json")), json.load(open("design/block-contract.schema.json"))); print("block_schema=PASS")'
```

## Next bounded queue

Proceed to `cluster-003-read-model-and-schema-tools`: inspect the local records
for Postgres/schema introspection/database-to-API capabilities and determine
which read-only data adapter can feed the Horizon feature without block-owned
writes.

