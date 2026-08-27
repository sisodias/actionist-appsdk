# Cloudflare Pages handoff

The report is a static site: `index.html` plus the linked Markdown, JSON and TSV evidence files. It needs no build step and is within Cloudflare Pages’ direct-upload limits.

## Wrangler route

From this directory:

```bash
npx wrangler login
npx wrangler pages project create actionmodel-deep-dive
npx wrangler pages deploy . --project-name actionmodel-deep-dive
```

The first command opens Cloudflare authentication. The project-creation command is only needed once. The deployed report will be available at the Pages project’s `*.pages.dev` URL.

For later updates, run only:

```bash
npx wrangler pages deploy . --project-name actionmodel-deep-dive
```

Cloudflare’s current [Direct Upload guide](https://developers.cloudflare.com/pages/get-started/direct-upload/) documents both this Wrangler flow and dashboard drag-and-drop. The current Wrangler command reference is [here](https://developers.cloudflare.com/workers/wrangler/commands/pages/).

## Dashboard drag-and-drop route

1. Open Cloudflare Dashboard → Workers & Pages.
2. Choose **Create application → Get started → Drag and drop your files**.
3. Use the folder `/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/research/actionmodel-deep-dive`.
4. Name the project `actionmodel-deep-dive` and deploy.

This folder is intentionally self-contained: the main report links to local `.md`, `.json` and `.tsv` files using relative paths, so those files must be uploaded together with `index.html`.

## Current publishing state

This workspace does not contain a Cloudflare API token, Wrangler login session or existing Pages project configuration, so no live Cloudflare URL was claimed from this run. The local HTML was served and browser-checked successfully at desktop and mobile widths.
