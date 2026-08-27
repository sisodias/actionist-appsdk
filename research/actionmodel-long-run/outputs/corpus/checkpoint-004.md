# AM-CORPUS checkpoint-004

Date: 2026-08-26  
Lane: `AM-CORPUS`  
Run: `actionmodel-long-run-2026-08-26`  
State after checkpoint: `active`

## Scope

This checkpoint reconciles the existing proof/preview source slices:

- `lane3-browser-preview-iframe-dev.json` — empty array;
- `lane3-code-sandbox-api.json` — 8 records;
- `lane3-static-site-deploy-api.json` — empty array; and
- `lane3-wildcard-subdomain-deploy.json` — empty array.

The complete candidate receipt is `cluster-004-review.json`. No empty source
slice is treated as a successful capability or as an accepted candidate.

## Counts

| Scope | Reviewed | Accepted | Held | Rejected |
|---|---:|---:|---:|---:|
| cluster-001 dashboard/admin shells | 15 | 0 | 15 | 0 |
| cluster-002 exact-stack starters | 15 | 0 | 15 | 0 |
| cluster-003 read-model/schema tools | 32 | 0 | 31 | 1 |
| cluster-004 code-sandbox/proof records | 8 | 0 | 8 | 0 |
| **cumulative bounded source records** | **70** | **0** | **69** | **1** |

All eight non-empty records have a source path, canonical URL, content-backed
reason, and next gate in `cluster-004-review.json`. Three source slices are
explicitly recorded as empty there.

## Findings

The only clearly relevant permissive-looking sandbox record,
`bitrun/api`, was directly reviewed at its pinned 2016 commit. Its README
describes a Docker-backed arbitrary-code execution API with a command override
and a ten-second limit. That is a security-sensitive execution primitive, not
evidence of a safe browser preview, artifact store, approval flow, or rollback
boundary. It remains held for isolation/security review.

The other seven records are unlicensed, vague, a .NET API training repository,
or a code-generation/malicious-code sandbox description. They remain held; no
license ambiguity was promoted to acceptance.

## Local visual evidence

The prescribed 21st corpus query was run through `find.mjs` rather than bulk
catalog reads. The dashboard query reported 343 matches and returned cached
metric-card/chart references; the data-visualization query reported 258 matches
and returned cached chart references. Three cached previews were inspected:

- metric-card preview: `/Users/shaansisodia/SISO_Workspace/siso-ui-base/registry/21st/harvest/moumensoliman__glassmorphism-minimal-metrics-block-shadcnui/preview.webp`;
- incident interpolation preview: `/Users/shaansisodia/SISO_Workspace/siso-ui-base/registry/21st/harvest/reaviz__interpolation-chart-1/preview.webp`;
- incident bar-chart preview: `/Users/shaansisodia/SISO_Workspace/siso-ui-base/registry/21st/harvest/reaviz__incident-bar-chart/preview.webp`.

These are visual references with local bundles/previews, not Git repositories
with pinned commits and licenses. They can inform a screenshot baseline after a
licensed block is extracted; they cannot satisfy admission on their own.

## Proof distinction

The evidence now separates four gates that must not be collapsed:

1. source/build proof for the candidate code;
2. browser smoke proof for the assembled route;
3. screenshot/visual proof for the UI; and
4. deployment/subdomain proof with owner and rollback.

The three empty sweep slices prove only that those source lanes currently have
no candidates. They do not prove the gates are implemented.

## Current architecture decision

The pilot composition remains:

```text
Horizon dashboard feature → ixartz-compatible host → dbcli-like read discovery
                                                   ↘ proof/preview gates still open
```

No code-execution sandbox is admitted. The browser-preview and deployment
capabilities remain explicit research gaps, not inferred from sandbox records or
local visual references.

## Proof boundary

No external checkout, build, browser smoke, screenshot diff, deployment, or
security-isolation test was executed. This checkpoint records source and local
catalog evidence only. Horizon's contract draft remains schema-valid with no
`eval.admission` result.

## Reproduction commands

```sh
for f in research/github-sweep/lane3-browser-preview-iframe-dev.json research/github-sweep/lane3-code-sandbox-api.json research/github-sweep/lane3-static-site-deploy-api.json research/github-sweep/lane3-wildcard-subdomain-deploy.json; do jq 'length' "$f"; done
jq '.dispositions' research/actionmodel-long-run/outputs/corpus/cluster-004-review.json
node /Users/shaansisodia/SISO_Workspace/siso-ui-base/registry/21st/find.mjs dashboard --limit 8 --json
node /Users/shaansisodia/SISO_Workspace/siso-ui-base/registry/21st/find.mjs data-visualization --limit 8 --json
```

## Next bounded queue

Proceed to `cluster-005-license-and-provenance`: reconcile the existing
license-detection lane and local harvest manifests, then define the exact
dependency/asset scan receipt required before a Block Contract can move from
held to admitted.

