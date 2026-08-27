# Pilot packet — Themesberg Flowbite React admin dashboard

## Disposition

`held` / visual fallback. It is useful as an alternate dashboard reference but
has more host adaptation than Horizon.

## Source and evidence

- Sweep source: `research/github-sweep/lane2-react-admin-dashboard.json#fullName=themesberg/flowbite-react-admin-dashboard`
- Canonical repository: https://github.com/themesberg/flowbite-react-admin-dashboard
- Pinned review commit: `ce3afeb2149ad5a91e59c8e98c85e9220224c744`
- Commit: https://github.com/themesberg/flowbite-react-admin-dashboard/commit/ce3afeb2149ad5a91e59c8e98c85e9220224c744
- License: MIT at https://github.com/themesberg/flowbite-react-admin-dashboard/blob/ce3afeb2149ad5a91e59c8e98c85e9220224c744/LICENSE
- Pinned package evidence reports Vite 3.2, React 18, Flowbite React, Tailwind
  3.2, TypeScript, and a `yarn typecheck && vite build` script.

## Reason held

The source is a genuine dashboard interface with a permissive license, but its
Vite/React 18/Flowbite shape is outside the Next.js/shadcn host contract and it
has no identified Postgres/Drizzle data boundary in the reviewed metadata. It
would require a runtime and component-library port before a Block Contract
conversion, so it is a reference/fallback rather than the smallest gate.

## Next gate

Keep for visual comparison only; promote to extraction if the Horizon source
fails the license/asset or route-boundary review.
