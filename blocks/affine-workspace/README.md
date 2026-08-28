# Actionist AFFiNE workspace block v0.1

This is a reusable, contract-first prototype for mounting an existing AFFiNE workspace as an `intact_service` behind an Actionist host. The selected mount profile is `preserved_identity_erased` over a cross-origin iframe (binding class B5): the host owns identity, tenant/workspace selection, URL space, navigation position, and settings entry; the donor owns its runtime, workspace data, files, and internal router.

The package contains no AFFiNE source, donor runtime image, client data, credentials, deployment configuration, or source checkout. It reconstructs the proven local authenticated frame seam as typed binding logic plus a synthetic host fixture. A generated binding is host-specific and disposable.

## Local runbook

From this directory:

```sh
node scripts/validate.mjs
node scripts/bind.mjs --host fixture/host.json --out ./out
node scripts/validate.mjs --binding ./out/binding.generated.json
node scripts/install.mjs --host fixture/host.json --out ./installed
```

`validate` checks the seven linked records, configuration shape, static source boundary, evidence hashes, deterministic fixture route, and admission hold. `bind` refuses a missing, expired, wrong-client, wrong-workspace, or under-capable identity. `install` materializes only this package's contract files and a generated binding; it never clones, runs, deploys, or admits a donor application. Use `--force` only when the explicit output directory is disposable and its selected package files may be overwritten.

## Host binding contract

The host supplies a complete identity containing `user_id`, `client_id`, `workspace_id`, expiry, and capabilities. The binding requires `view` and `edit`, requires host workspace selection authority, and rejects a second donor login route. The session assertion is represented only by a `secret-ref:...` reference in configuration. Its runtime value must arrive through the host's `postMessage+header` handoff, be audience-bound to this capability, and be single-use. It must never appear in a URL, iframe query, committed fixture, or generated binding.

The generated workspace route is deterministic:

```text
<frame-origin>/workspace/<host-selected-workspace>/all?siso_embedded=1&siso_workspace_revision=3&siso_host_origin=<host-origin>&siso_server_origin=<server-origin>
```

The host contributes a navigation intent, label, icon, and route reference. It does not receive a donor-owned position field. The host settings entry remains `/settings?tab=documents`; the donor settings view is selected with `siso_mode=settings` and remains donor-rendered behind host navigation. Health uses the configured server endpoint and expected status 200. Files remain donor-owned. Events are accepted only from the configured frame origin and use the versioned Actionist envelope. Observability carries the capability, release, and `traceparent` ownership metadata.

## Evidence and holds

The evidence index and current interpretation are in `../../research/workstreams/2026-08-28-affine-block/run/`. Historical receipts are referenced by relative path and SHA-256; they are not copied or rewritten. The positive local precedent is the authenticated native AFFiNE frame seam and reload persistence. Official CE native launch evidence and historical redistribution provenance remain separate, with the latter blocked for source-level redistribution.

The following holds are intentionally open: cross-origin theme/token parity, host-chrome settings remount, donor upgrade replay, runtime density/mobile/tenant-switcher measurements, and official CE web/service file-level provenance. This package is `LOCAL_SYNTHETIC_ONLY`, `NOT_QUALIFIED`, and `NOT_ADMITTED`. Do not deploy it or describe it as admitted until those gates have current receipts and an explicit human admission record.
