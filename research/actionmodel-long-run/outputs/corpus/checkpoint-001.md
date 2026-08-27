# AM-CORPUS checkpoint-001

Date: 2026-08-26  
Lane: `AM-CORPUS`  
Run: `actionmodel-long-run-2026-08-26`  
State after checkpoint: `active`

## Scope and source truth

This checkpoint reconciles the bounded dashboard/admin-shell cluster from the
existing sweep. It does not re-run discovery and does not edit the merged
artifact.

- Existing merged source: `research/github-sweep/SWEEP-MERGED.json`
- Cluster source: `research/github-sweep/lane2-react-admin-dashboard.json`
- Adjacent pilot source: `research/github-sweep/lane2-nextjs-boilerplate.json`
- Contract: `design/block-contract.schema.json`
- Framework/admission rules: `design/BLOCK-FRAMEWORK.md` and
  `research/actionist-solutions-sweep-spec-2026-08-26.md`
- Per-record dispositions: `cluster-001-review.json`
- Candidate packets: `candidate-horizon-ui-shadcn-nextjs-boilerplate.md`,
  `candidate-ixartz-next-js-boilerplate.md`, and
  `candidate-themesberg-flowbite-react-admin-dashboard.md`
- Read-only conversion draft:
  `candidate-horizon-ui-shadcn-nextjs-boilerplate.block.json`

The local Awesome `catalog_full.sqlite` path named in the sweep spec was not
found under the checked SISO workspace, Foundry, or `foundry-data` roots. The
Foundry GitHub directory is only an identity directory in the local project
notes. The local 21st catalogue was queried through its prescribed
`registry/21st/find.mjs` interface; those results are UI references without
Git commit/license provenance and are not admitted as blocks.

## Counts

### Existing sweep

`jq 'length' research/github-sweep/SWEEP-MERGED.json` returns **389**.

| Sweep license value | Count |
|---|---:|
| none | 176 |
| mit | 144 |
| apache-2.0 | 34 |
| other | 16 |
| agpl-3.0 | 8 |
| gpl-3.0 | 5 |
| mpl-2.0 | 2 |
| bsd-3-clause | 1 |
| mit-0 | 1 |
| epl-1.0 | 1 |
| wtfpl | 1 |
| **total** | **389** |

These are inventory hints, not legal clearance. The `none`, `other`, GPL, and
AGPL values are never silently promoted to reuse.

### Cluster 001

The source file contains 15 records. Every record was read and recorded in
`cluster-001-review.json` with its source path, canonical URL, content fact,
reason, and next gate.

| Disposition | Count | Meaning in this lane |
|---|---:|---|
| accepted | 0 | Nothing enters the admitted-block set from this source slice. |
| held | 15 | Candidate remains reviewable, but one or more admission gates are unproven. |
| rejected | 0 | No record was rejected solely from the sweep hint; unclear licenses are held. |
| **reviewed** | **15** | 15/15 disposition receipts present. |

## Disposition rules used

1. `accepted` means accepted into a bounded conversion queue only after a
   canonical source, pinned commit, source-level license/copyright evidence,
   stack/boundary evidence, adaptation plan, build/smoke plan, owner, and
   rollback path are named. It never means admitted to the registry.
2. `held` is mandatory for no/unclear/mixed license, missing commit or
   provenance, unresolved data ownership, incompatible runtime/styling, or
   missing build/browser/visual/owner/rollback evidence.
3. `rejected` is reserved for a clear disqualifier such as GPL/AGPL code being
   proposed for client reuse, a prohibited license boundary, or a source that
   cannot be used within the stated scope after direct review. No such clear
   case occurred in cluster 001, so the count is zero.
4. A repository description, star count, freshness date, or license label is a
   discovery signal only. It cannot stand in for source reading or admission
   evidence.

## Pilot decision

`horizon-ui/shadcn-nextjs-boilerplate` is the current best candidate for the
smallest read-only Block Contract conversion. Direct review at commit
`efe90c62391f2d3247a5a5f0712adcad0515aba7` found:

- MIT `LICENSE` with `Copyright (c) 2024 Horizon UI`;
- a concrete `/dashboard/main` route;
- chart and paginated table components;
- Next.js 15.1.6, React 19 RC, Tailwind 3.4, shadcn, and a declared build
  script;
- a source SQL schema and direct Supabase queries that expose the exact
  normalization work still required.

The candidate remains **held for conversion** because build, browser smoke,
screenshot, dependency/asset license scan, owner, rollback, and provider/data
normalization receipts are absent. The draft block contract therefore has no
`eval.admission` result.

The exact-stack `ixartz/Next-js-Boilerplate` is retained as a host/scaffold
fallback: it has stronger Drizzle/Postgres/Playwright alignment but lacks a
concrete dashboard surface in the reviewed tree. Themesberg is retained as a
visual fallback with a Vite/React/Flowbite adaptation penalty.

## Strongest hold reason

The strongest recurring reason is not popularity or age: a repo candidate lacks
the complete chain from source-level license/provenance through bounded
adaptation, build, browser smoke, owner, and rollback. For Horizon specifically,
provider-specific Supabase/Stripe wiring and a separate linked EULA require
review before client distribution.

## Reproduction commands

```sh
jq 'length' research/github-sweep/SWEEP-MERGED.json
jq -r '.[] | [.fullName, (.license.key // "<missing>")] | @tsv' research/github-sweep/lane2-react-admin-dashboard.json
jq '.dispositions' research/actionmodel-long-run/outputs/corpus/cluster-001-review.json
node /Users/shaansisodia/SISO_Workspace/siso-ui-base/registry/21st/find.mjs dashboard --limit 8 --json
```

The direct GitHub API source receipts and their URLs are in the three candidate
packets. No local checkout was created and no build/smoke result is claimed.

## Next bounded queue

Proceed to `cluster-002-exact-stack-starters`: review the 15 records in
`research/github-sweep/lane2-nextjs-boilerplate.json` for scaffold compatibility,
then compare only the dashboard-relevant candidates against the Horizon pilot.

