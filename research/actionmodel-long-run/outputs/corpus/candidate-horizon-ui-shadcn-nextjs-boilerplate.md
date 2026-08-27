# Pilot packet — Horizon UI Shadcn Next.js boilerplate

## Disposition

`pilot_selected_not_admitted` / held for conversion evidence. This is the best
current candidate for a read-only dashboard conversion, not an admitted block.

## Source and provenance

- Sweep source: `research/github-sweep/lane2-nextjs-boilerplate.json#fullName=horizon-ui/shadcn-nextjs-boilerplate`
- Merged source: `research/github-sweep/SWEEP-MERGED.json` (`horizon-ui/shadcn-nextjs-boilerplate`)
- Canonical repository: https://github.com/horizon-ui/shadcn-nextjs-boilerplate
- Pinned review commit: `efe90c62391f2d3247a5a5f0712adcad0515aba7`
- Commit: https://github.com/horizon-ui/shadcn-nextjs-boilerplate/commit/efe90c62391f2d3247a5a5f0712adcad0515aba7
- License evidence: https://github.com/horizon-ui/shadcn-nextjs-boilerplate/blob/efe90c62391f2d3247a5a5f0712adcad0515aba7/LICENSE
- License read at the pinned commit: MIT; copyright line is `Copyright (c) 2024 Horizon UI`.
- Direct source review date: 2026-08-26.

## Why it is the pilot

The source README calls it an open-source admin dashboard for Shadcn UI,
Next.js, and Tailwind CSS. The pinned `package.json` exposes `next` 15.1.6,
React 19 release-candidate packages, Tailwind 3.4, shadcn, Supabase,
TanStack Table, and a `build` script. The source tree contains a concrete
`/dashboard/main` route, a line chart, and a paginated dashboard table. That is
the shortest observed path from an existing dashboard surface to a bounded
read-only block.

Direct evidence:

- README: https://github.com/horizon-ui/shadcn-nextjs-boilerplate/blob/efe90c62391f2d3247a5a5f0712adcad0515aba7/README.md
- package: https://github.com/horizon-ui/shadcn-nextjs-boilerplate/blob/efe90c62391f2d3247a5a5f0712adcad0515aba7/package.json
- route: https://github.com/horizon-ui/shadcn-nextjs-boilerplate/blob/efe90c62391f2d3247a5a5f0712adcad0515aba7/app/dashboard/main/page.tsx
- dashboard surface: https://github.com/horizon-ui/shadcn-nextjs-boilerplate/blob/efe90c62391f2d3247a5a5f0712adcad0515aba7/components/dashboard/main/index.tsx
- SQL source: https://github.com/horizon-ui/shadcn-nextjs-boilerplate/blob/efe90c62391f2d3247a5a5f0712adcad0515aba7/schema.sql
- shadcn config: https://github.com/horizon-ui/shadcn-nextjs-boilerplate/blob/efe90c62391f2d3247a5a5f0712adcad0515aba7/components.json

## Conversion boundary

Keep only the authenticated dashboard page, chart, table, required shadcn
primitives, and the host's layout slot. Convert the Supabase `getUser` and
`getUserDetails` calls to a session/read-model adapter. Use no block-owned
migrations and no side-effecting APIs. Remove or leave outside the boundary:

- `/api/chatAPI`, `/api/essayAPI`, and `/api/webhooks`;
- OpenAI and Stripe wiring;
- direct Supabase client imports and provider-specific auth/session code;
- hardcoded sample data after a fixture-backed read model is available.

The machine-readable draft is
`candidate-horizon-ui-shadcn-nextjs-boilerplate.block.json`. It is intentionally
not marked admitted and does not contain an `eval.admission` result.

## Evidence ladder

| Gate | Current evidence | Status |
|---|---|---|
| canonical URL + pinned commit | repository API + commit URL above | observed |
| license/copyright | MIT `LICENSE` at pinned commit | observed, dependency scan pending |
| stack/runtime | package and config at pinned commit | observed, host compatibility pending |
| boundary/data ownership | route, components, and `schema.sql` read | partial; normalization pending |
| adaptation log | draft JSON lists extract, detach, DB, token, interface steps | planned, not executed |
| build | source script is `npm run build` | not run; no checkout was created |
| browser smoke | target is authenticated `/dashboard/main` with chart/table assertions | not run |
| screenshot baseline | target path reserved in draft JSON | not captured |
| owner + rollback | host/tenant owner and restore boundary not assigned | missing |

## Blocking risks

1. The repository's latest reviewed code commit is dated 2025-01-27 even though
   the sweep metadata reports a later update; freshness needs an explicit
   policy rather than relying on the metadata date.
2. The source is provider-specific: Supabase Auth, Supabase SQL/RLS, Stripe
   tables, and direct Supabase queries must be detached before reuse.
3. The source CSS uses both CSS variables and hardcoded zinc/chart values; the
   tokenization gate is not passed.
4. The README credits third-party resources and links a separate Horizon UI
   license/EULA. A dependency/asset license scan is required before any client
   distribution.
5. No build, browser smoke, screenshot, owner, or rollback evidence exists in
   this lane yet. Therefore this packet is a conversion candidate only.

## Smallest real admission gate

1. Reproduce the pinned source in an isolated checkout and run its declared
   build command.
2. Extract only `/dashboard/main`; replace sample/static data with a fixture
   read model and provider-agnostic session hook.
3. Normalize the read shape to Postgres/Drizzle without creating block-owned
   tables; run a license scan over source, dependencies, and assets.
4. Start the host with a fixture session, run a browser smoke asserting the
   route, chart, table, and absence of write requests, then capture a baseline.
5. Assign the tenant owner and record a rollback as removal of the block route
   plus restoration of the prior registry/host manifest.

Until all five steps have receipts, the disposition remains held.
