# AM-CORPUS checkpoint-003

Date: 2026-08-26  
Lane: `AM-CORPUS`  
Run: `actionmodel-long-run-2026-08-26`  
State after checkpoint: `active`

## Scope

This checkpoint processes the three existing data-plane slices:

- `research/github-sweep/lane2-postgres-schema-migration-tool.json`;
- `research/github-sweep/lane3-schema-introspection.json`; and
- `research/github-sweep/lane3-database-to-api.json`.

The complete per-record disposition receipt is `cluster-003-review.json`.
Clusters 001 and 002 remain immutable at their prior checkpoint files. No
merged artifact, shared schema, runtime code, or other lane output was edited.

## Counts

| Scope | Reviewed | Accepted | Held | Rejected |
|---|---:|---:|---:|---:|
| cluster-001 dashboard/admin shells | 15 | 0 | 15 | 0 |
| cluster-002 exact-stack starters | 15 | 0 | 15 | 0 |
| cluster-003 read-model/schema tools | 32 | 0 | 31 | 1 |
| **cumulative bounded source records** | **62** | **0** | **61** | **1** |

Every record in cluster-003 has a source path, canonical URL, content-backed
reason, and next gate in `cluster-003-review.json`.

## Findings

### Best read-model candidate: JustVugg/dbcli

The pinned MIT source is explicitly agent-first and supports PostgreSQL,
schema/profile/ERD discovery, bounded queries, JSON output, semantic exit
codes, and tests. It is the smallest conceptual gate for feeding a read-only
dashboard with observed schema/data facts. It is still held because the same
CLI exposes writes, the connection store writes local state, and the checked-in
`dibcli/` directory does not match the `dbcli*` package/import names in
`pyproject.toml` and the source imports. Full evidence is in
`candidate-dbcli-read-adapter.md`.

### Migration candidate: nvcnvn/scheme

The pinned Apache-2.0 source provides Postgres schema normalization, diff,
plan files, per-step transactions, advisory locks, dry-run, and partial
recovery. Those are valuable migration/recovery references, but `apply` can
change a database, so it is not a read-only adapter and needs a separate
approval boundary.

### Explicit rejection for current OSS reuse: Schema-Weaver/pg-migration-engine

The pinned LICENSE is BSL-1.1: development/testing/evaluation are free, while
production use requires a separate commercial license. It is rejected for the
current MIT/Apache/BSD/ISC OSS block path and retained as reference-only. This
is the one rejection in the 32-record cluster; the AGPL candidate remains held
per the lane constraint.

### Database-to-API candidates

The strongest-looking bridge, `L3-Squad/smart-api-bridge`, is MIT but its
source README and setup metadata describe FastAPI CRUD for MySQL and expose
POST/PUT/PATCH/DELETE, including hard/soft delete. It remains held until a
strict Postgres/read-only extraction is proven. The remaining database-to-API
records are either unlicensed/unclear, stale, non-Postgres, or lack a bounded
read-only contract; each reason is recorded in the cluster receipt.

## Architecture decision

The smallest honest composition remains layered:

```text
ixartz-compatible host (Next/React/Tailwind/Drizzle/Playwright)
  + Horizon dashboard feature (route/chart/table, normalized)
  + dbcli-like read-model discovery sidecar (write-denied wrapper required)
```

No layer is admitted yet. Horizon minimizes dashboard extraction; ixartz
minimizes host/data/proof normalization; dbcli minimizes schema discovery but
needs a security/package gate. This directly answers the open question without
pretending one repository supplies all three layers.

## Proof boundary

This checkpoint contains source/API and local-record review only. No external
repository checkout was created, and no build, Postgres fixture, browser smoke,
screenshot, dependency scan, owner, or rollback receipt was executed. The
Horizon draft remains schema-valid and has no `eval.admission` result.

## Reproduction commands

```sh
jq 'length' research/github-sweep/SWEEP-MERGED.json
jq 'length' research/github-sweep/lane2-postgres-schema-migration-tool.json
jq 'length' research/github-sweep/lane3-schema-introspection.json
jq 'length' research/github-sweep/lane3-database-to-api.json
jq '.dispositions' research/actionmodel-long-run/outputs/corpus/cluster-003-review.json
python3 -c 'import json; from jsonschema import validate; validate(json.load(open("research/actionmodel-long-run/outputs/corpus/candidate-horizon-ui-shadcn-nextjs-boilerplate.block.json")), json.load(open("design/block-contract.schema.json"))); print("block_schema=PASS")'
```

## Next bounded queue

Proceed to `cluster-004-proof-and-preview`: reconcile the browser-preview,
code-sandbox, static-deploy, and local 21st evidence into separate build,
browser-smoke, screenshot, and deployment gates. A preview or deploy surface
must not be counted as a block admission.

