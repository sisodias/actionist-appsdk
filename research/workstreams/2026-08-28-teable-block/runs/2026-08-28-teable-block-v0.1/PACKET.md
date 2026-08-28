AGENT_PACKET v1
TO: CENA
FROM: ACTIONIST-BLOCK-TEABLE
THREAD: 2026-08-28-teable-block
OBJ: Deliver and verify a reusable Teable data-grid block package without donor mutation, deployment or admission.
STATE: done
MODE: single lane; no subagents; local synthetic verification only

ANCHORS:
- A1: blocks/teable-data-grid/actionist-block.json
- A2: blocks/teable-data-grid/records/
- A3: blocks/teable-data-grid/tools/teable-block.mjs
- A4: blocks/teable-data-grid/interfaces/host-binding.ts
- A5: blocks/teable-data-grid/theme/teable-theme-bridge.css
- A6: ../../fahmy-2026-08/docs/client-platform/implementation-manager/evidence/teable-data-final/teable-data-final-receipt.json
- A7: ../../fahmy-2026-08/docs/client-platform/implementation-manager/evidence/data-visible/teable-isolation-admission-gate.json

FACTS:
- F1: The package contains 25 owned files and no Teable source checkout or client data.
- F2: The selected reuse shape is intact_service with a sidecar_service runtime and host-owned proxy/binding seam.
- F3: Donor identity is pinned to sisodias/teable commit b245a987f8bfb7411d4e2423907b9cbb0a1c9b6b; the git-archive digest is sha256:e41fe62b54c1d0c077a9c5a036f1b4e04016dcd0203396f943411e89e6e09fc6.
- F4: One PostgreSQL server/database is declared compatible with separate ownership boundaries: Teable metadata remains public at the pinned V2 source, Teable owns runtime-generated per-base schemas, and the host owns a separate non-public schema.
- F5: Migration authority is explicit and singular per resource: teable-prisma, teable-data-plane-migrator, actionist-host and teable-storage-adapter.
- F6: Identity is host_verified_context; tenant/base selection is required and host-bound; browser-supplied identity/tenant headers are untrusted.
- F7: The historical Teable candidate receipt is BLOCKED/PARTIAL_PASS; the package preserves its authenticated native desktop/mobile CRUD and attachment proof gaps.
- F8: No production deployment, donor execution, client mutation, release or admission was performed or claimed.

DECISIONS:
- D1: Keep the donor intact and reference the existing runtime/source precedent; copied source files = 0.
- D2: Use a typed host seam covering identity/session handoff, tenant/base selection, navigation, settings fallback, health, attachments, events and observability.
- D3: Keep donor settings behind host navigation for v0.1; do not claim host-chrome settings absorption.
- D4: Use a scoped HSL token bridge under .actionist-teable-surface; no global root write and no RGB-to-HSL alias.
- D5: Keep registry admission scope empty and release status not_released; unresolved evidence is UNDERDETERMINED/held, never averaged into qualification.

CONSTRAINTS:
- C1: Owned writes are limited to blocks/teable-data-grid/** and this dispatch-owned run directory; DISPATCH.md and donor/client projects were not modified.
- C2: No subagents, fresh clone, donor source execution, external deployment, production mutation or admission.
- C3: AGPL/Section 7 branding and corresponding-source/legal gate remain explicit holds.

VERIFY:
- V1 PASS: Python JSON Schema validation accepted the manifest, config, host fixture and seven linked records.
- V2 PASS: node blocks/teable-data-grid/tools/teable-block.mjs validate -> manifest PASS, records=7.
- V3 PASS: node blocks/teable-data-grid/tools/teable-block.mjs smoke -> 13 PASS checks, including tenant isolation requirements, migration-owner declaration, evidence parity and refusal of missing identity/tenant/migration owner.
- V4 PASS: npm test --prefix blocks/teable-data-grid -> tests/smoke.mjs PASS, checks=13.
- V5 PASS: direct install and bind commands generated disposable install-plan.json and binding.generated.json; generated tenant/base were tenant-a/base-a; deployment=false and admissionClaimed=false.
- V6 PASS: git diff --check was clean; an explicit git diff --no-index --check sweep also passed for every untracked owned package file.
- V7 PASS: immutable donor archive digest rechecked as e41fe62b54c1d0c077a9c5a036f1b4e04016dcd0203396f943411e89e6e09fc6.

OPEN:
- O1: Authenticated native Teable desktop CRUD remains blocked in the historical receipt; a fresh reproducible host-session proof is required.
- O2: Authenticated native Teable mobile CRUD remains blocked in the historical receipt.
- O3: Attachment upload/read authorization and tenant/base namespace proof remain blocked; a donor signed URL is not host authorization.
- O4: Host identity/session exchange and direct denial of donor login routes are interface-level only in this package.
- O5: Independent role/schema, Redis, attachment and backup/restore proof remains open in the isolation gate; release recovery horizon is 0.
- O6: AGPL corresponding-source and Teable Section 7 product/legal attestation remains blocked.
- O7: The block is NOT_QUALIFIED and NOT_ADMITTED; no client/application admission scope exists.

ARTIFACTS:
- Package: blocks/teable-data-grid/
- Manifest: blocks/teable-data-grid/actionist-block.json
- Seven records: blocks/teable-data-grid/records/{capability,packaging,host-requirements,binding-plan,qualification,registry,release}.json
- CLI: blocks/teable-data-grid/tools/teable-block.mjs
- Typed seam: blocks/teable-data-grid/interfaces/host-binding.ts
- Theme seam: blocks/teable-data-grid/theme/teable-theme-bridge.css
- Run receipt: research/workstreams/2026-08-28-teable-block/runs/2026-08-28-teable-block-v0.1/run-receipt.json

CALLBACK:
- Full packet written before callback: yes.
- Required destination: verified CENA pane in Herdr session herdr-2, workspace w659e02f80e5bb1.
- Callback status: sent_readback_verified to pane w659e02f80e5bb1-1; pane read-back showed the status and `Working`, so the message was submitted and no repair Enter was needed.
