# Pilot packet — ixartz Next.js Boilerplate

## Disposition

`held` / exact-stack scaffold fallback. It is not the dashboard pilot because
the reviewed source is a general starter rather than a concrete read-only
dashboard surface.

## Source and evidence

- Sweep source: `research/github-sweep/lane2-nextjs-boilerplate.json#fullName=ixartz/Next-js-Boilerplate`
- Canonical repository: https://github.com/ixartz/Next-js-Boilerplate
- Pinned review commit: `51dfd23b21ac4ef8da56f8cc9a2f4b78f5df0deb`
- Commit: https://github.com/ixartz/Next-js-Boilerplate/commit/51dfd23b21ac4ef8da56f8cc9a2f4b78f5df0deb
- License: MIT at https://github.com/ixartz/Next-js-Boilerplate/blob/51dfd23b21ac4ef8da56f8cc9a2f4b78f5df0deb/LICENSE
- Source README/package expose Next.js 16, React 19, Tailwind 4, Drizzle,
  Postgres support, migrations, build scripts, Vitest, and Playwright.

## Reason held

This is the strongest exact-stack scaffold evidence found locally, but the
reviewed route tree is marketing/counter/auth oriented and does not provide the
dashboard chart/table capability needed for the first read-only pilot. It is a
good host to test the normalized Horizon feature against after the dashboard
boundary is proven. Its rich test/build surface does not substitute for a
dashboard block's own route and browser receipts.

## Next gate

Use as the host compatibility fixture for the Horizon draft only after the
Horizon extraction and license/asset scan are complete.
