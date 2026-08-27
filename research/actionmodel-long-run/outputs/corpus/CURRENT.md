# AM-CORPUS current state

Status: `active`  
Run: `actionmodel-long-run-2026-08-26`  
Last immutable checkpoint: `checkpoint-007.md`  
Last updated: 2026-08-26

## What is proven

- Existing sweep inventory is 389 merged candidates; it was reused, not
  restarted.
- Cluster 001 reviewed all 15 records in the React admin-dashboard lane.
- Cluster 002 reviewed all 15 records in the Next.js boilerplate lane.
- Cluster 003 reviewed 32 records across schema/migration/database-to-API
  slices.
- Cluster 004 reviewed 8 code-sandbox records; three proof/deploy source slices
  were empty.
- Cluster 005 reviewed 15 license/provenance records.
- Cluster 006 reviewed 30 component-registry and Storybook records.
- Cumulative bounded review is 0 accepted, 114 held, 1 rejected.
- Each disposition is content-backed and has a local source path, canonical
  repository URL, reason, and next gate in its cluster review file.
- Horizon UI is the best current read-only dashboard conversion candidate after
  direct review at a pinned commit; its block-shaped draft is not admitted.
- JustVugg/dbcli is the best current read-model discovery sidecar candidate;
  its write surface and package/import mismatch keep it held.
- Browser-preview and deployment evidence remain open gaps; local 21st previews
  are reference-only visual evidence.
- Local harvest integrity passes, but no license scanner is installed; the
  license/copyright/dependency/asset receipt remains open.
- `Ducksss/payload-components` is a held registry-contract reference with
  manifests, provenance, recovery fields, and documented build/smoke gates;
  it is Payload-specific and is not an admitted block.
- Cluster 007 has a machine-readable admission-gate plan in
  `cluster-007-plan.json`; all execution receipts remain explicitly not run.
- Cluster 007 preflight found 8.2 GiB available and a Playwright executable,
  but no license scanner, pinned checkout, fixture host, or owner/rollback
  assignment; the Horizon pilot remains held.

## Current pilot

`horizon-ui/shadcn-nextjs-boilerplate` →
`candidate-horizon-ui-shadcn-nextjs-boilerplate.block.json`

Current gate: `held_for_conversion`; build, browser smoke, screenshot,
dependency/asset license, owner, rollback, and normalization receipts remain
open.

## Evidence gaps

- `catalog_full.sqlite` and the external 850k-repository GitHub data plane are
  not mounted locally.
- The merged sweep carries discovery metadata, not pinned commits or complete
  admission evidence.
- No candidate checkout was created; no build or browser result is claimed.
- Horizon's provider-specific Supabase/Stripe wiring and linked EULA need a
  focused review.

## Next action

Continue `cluster-007-horizon-admission-execution` when the scanner, pinned
checkout, fixture host, owner, and rollback prerequisites are available. Until
then keep Horizon held, ixartz as the host baseline, dbcli only behind the
documented read-only wrapper gate, and Payload Components as a registry-contract
reference.
