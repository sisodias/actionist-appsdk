# ACTIONIST-BLOCK-AFFINE completion packet

AGENT_PACKET v1

TO: CENA
FROM: ACTIONIST-BLOCK-AFFINE
THREAD: 2026-08-28-affine-block
OBJ: Deliver a reusable, locally verified AFFiNE workspace block without donor source copying, deployment, or admission.
STATE: done
MODE: single-agent visible lane; no subagents; local synthetic execution only

ANCHORS:

- A1: `blocks/affine-workspace/actionist-block.json`
- A2: `blocks/affine-workspace/records/01-capability.json` through `records/07-release.json`
- A3: `blocks/affine-workspace/host-binding/affine-workspace-host-binding.ts`
- A4: `blocks/affine-workspace/scripts/validate.mjs`, `bind.mjs`, `install.mjs`
- A5: `research/workstreams/2026-08-28-affine-block/run/evidence-index.json`
- A6: `research/workstreams/2026-08-28-affine-block/run/verification.json`

FACTS:

- F1: The selected reuse shape is `intact_service` with `preserved_identity_erased` / `iframe_cross_origin` mounting and B5 bounded coherence.
- F2: The host owns identity, tenant/workspace selection, URL space, navigation position, and settings entry; the donor owns runtime, workspace data, files, and internal routing.
- F3: The package contains no AFFiNE source, donor repository, runtime image, client data, credential value, absolute client path, deployment output, or admission scope.
- F4: The seven linked records are present and resolve from the manifest.
- F5: The evidence index hash-checks 13 historical/current sources, including the authenticated frame precedent, host integration/tests, SISO Knowledge host-module precedent, source registry row, and provenance/licence boundary.
- F6: `QualificationDossier.qualification_status` is `NOT_QUALIFIED`; `RegistryRecord.admission_status` and `ReleaseManifest.admission_status` are `NOT_ADMITTED`.

DECISIONS:

- D1: Keep AFFiNE as a donor-owned intact service; provide only a reusable Actionist host contract and binding adapter.
- D2: Carry the session assertion through runtime `postMessage+header` handoff using a host-owned `secret-ref:...`; never put the assertion in a URL or committed artifact.
- D3: Give the host the navigation intent/label/icon/route reference but no donor position field; keep donor settings rendered behind the host settings entry in v0.1.
- D4: Preserve historical evidence and correct stale path interpretation in `CURRENT-INTERPRETATION.md`; no historical receipt was rewritten.

CONSTRAINTS:

- C1: Ownership was limited to `blocks/affine-workspace/**` and this workstream run directory; `DISPATCH.md` remained read-only.
- C2: No subagents were used.
- C3: No donor/client project was modified, no donor runtime was started, no client data was read, no deployment occurred, and no admission was claimed.
- C4: Open holds remain explicit; this packet is not a production qualification or release admission.

TODO:

- T1: None within this dispatch. Future pilot gates are listed under OPEN.

VERIFY:

- V1: `node --check` passed for all three JavaScript entrypoints.
- V2: `node scripts/validate.mjs` passed with `records=7`, `evidence_sources=13`, `package_files_checked=20`, `source_copied=false`, `donor_repository_vendored=false`, and `admission_status=NOT_ADMITTED`.
- V3: Valid synthetic bind produced a deterministic `BOUND` binding; post-write validation of `binding.generated.json` passed.
- V4: The exact generated workspace URL was `http://127.0.0.1:3020/workspace/workspace-fixture/all?siso_embedded=1&siso_workspace_revision=3&siso_host_origin=http%3A%2F%2F127.0.0.1%3A4100&siso_server_origin=http%3A%2F%2F127.0.0.1%3A3010`.
- V5: Wrong client, expired identity, missing edit capability, and missing identity each exited non-zero with `HOST_IDENTITY_REFUSED` and the expected refusal code.
- V6: Install into a disposable directory passed and its receipt proved source copied, donor vendored, secrets embedded, absolute client paths, and deployment were all false.
- V7: `npm test` passed 5 tests, 5 pass, 0 fail.
- V8: Owned-file whitespace check passed with `OWNED_DIFF_CHECK_PASS`; the read-only dispatch file was excluded from the owned diff check.
- V9: Verification packet parsed before this completion packet was written.

OPEN:

- O1: `H-THEME` — cross-origin token/radius/spacing/font parity is not proven; B5 remains bounded.
- O2: `H-SETTINGS` — donor-rendered settings behind host navigation is the only proven v0.1 fallback; host-chrome remount is unproven.
- O3: `H-UPGRADE` — donor upgrade replay and export-anchor survival have not been run.
- O4: `H-DENSITY` — density, mobile, below-full-page behavior, tenant switching, and second-identity isolation remain unmeasured.
- O5: `H-CE-WEB` — official CE web/service provenance, manifest/SBOM/notices, and file-level redistribution remain unproven.

## Delivered artifacts

- `blocks/affine-workspace/actionist-block.json` — ergonomic manifest, ownership, reuse shape, commands, holds, and hard source boundary.
- `blocks/affine-workspace/records/` — capability, packaging, host requirements, binding plan, qualification, registry, and release records.
- `blocks/affine-workspace/schemas/` — manifest and generated host-binding schemas.
- `blocks/affine-workspace/config/` — environment schema and reference-only example configuration.
- `blocks/affine-workspace/fixture/host.json` — disposable host identity/workspace/runtime fixture.
- `blocks/affine-workspace/host-binding/affine-workspace-host-binding.ts` — typed identity/session, route, navigation, trust, and health seam.
- `blocks/affine-workspace/scripts/` — deterministic validation, binding, and bounded install commands.
- `blocks/affine-workspace/tests/smoke.test.mjs` — contract, route, negative identity, install-boundary, configuration, and interface smoke tests.
- `blocks/affine-workspace/README.md` — install/bind/validate runbook and hold boundaries.
- `research/workstreams/2026-08-28-affine-block/run/evidence-index.json` — relative evidence coordinates and content hashes.
- `research/workstreams/2026-08-28-affine-block/run/CURRENT-INTERPRETATION.md` — resolved current interpretation without historical edits.
- `research/workstreams/2026-08-28-affine-block/run/package-smoke.json` — indexed package smoke receipt.
- `research/workstreams/2026-08-28-affine-block/run/verification.json` — machine-readable final verification result.

## Callback

The required callback payload is intentionally short and points back to this packet:

```text
[from: ACTIONIST-BLOCK-AFFINE] @CENA: DONE. Package blocks/affine-workspace; validate and npm test pass (7 records, 13 evidence sources, 5/5 tests); identity negatives refuse; holds H-THEME/H-SETTINGS/H-UPGRADE/H-DENSITY/H-CE-WEB. Full packet: research/workstreams/2026-08-28-affine-block/run/COMPLETION-PACKET.md. NOT_ADMITTED.
```

This packet is written before the fresh Herdr pane resolution and callback send. The callback must be verified by reading CENA's pane after `pane run`, pressing Enter only if the message remains queued, and confirming the resulting pane output.
