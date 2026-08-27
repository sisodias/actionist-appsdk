# Connectors: licensing + catalog-size findings — 27 Aug 2026

Direct GitHub/npm API verification by the main agent (not a subagent claim). Every
number below was pulled from the live API on 27 Aug 2026 and is reproducible.

## Why this file exists

The 26 Aug `lovable-teardown` put "~100 OAuth connectors w/ credential isolation" in the
**genuinely-hard** column and scored it **ZERO** for the scoped case, on the reasoning
that "platform already owns the DB". That is right about Actionist's *own* data and
wrong about everything else a client dashboard wants to touch (Gmail, Slack, Stripe,
HubSpot, Notion…). The 389-repo `github-sweep` had **zero** connector coverage — all 40
lanes were builders/scaffolds/design-systems. `BLOCK-FRAMEWORK.md` already reserves
`kind: integration` as a block type with no research behind it. This closes that gap.

## The licensing map (the decisive finding)

Most headline names in this space are **not** freely embeddable. Verified via
`repos/{r}/license` + reading the actual LICENSE text:

| Repo | Stars | License | Embeddable in a hosted Actionist? |
|---|---|---|---|
| **oomol-lab/open-connector** | 5,324 | **Apache-2.0** | **YES** — see below; likely the headline pick |
| **activepieces/activepieces** | 24,051 | **MIT** except `packages/ee/**` | **YES** — clean, and closest to our UI stack |
| **ComposioHQ/composio** | 29,895 | MIT (SDK only) | **NO** — see the trap below |
| modelcontextprotocol/registry | 7,193 | MIT→Apache-2.0 transition | YES |
| NangoHQ/nango | 11,610 | **Elastic v2 (ELv2)** | **NO** — see below |
| airbytehq/airbyte | 21,961 | **Elastic v2 (ELv2)** | NO |
| PipedreamHQ/pipedream | 11,652 | Pipedream Source Available v1.0 | NO |
| n8n-io/n8n | 202,534 | Sustainable Use (fair-code) | NO for embedding |
| windmill-labs/windmill | 17,687 | Apache-2.0 **or** AGPLv3 (split) | Care — check per-file |
| triggerdotdev/trigger.dev | 16,135 | Apache-2.0 | YES (different problem though) |

**The ELv2 blocker, quoted exactly:** "You may not provide the software to third parties
as a hosted or managed service, where the service provides users with access to any
substantial set of the features or functionality of the software."

Actionist is precisely that — a hosted platform where Cena's clients get the
functionality. So Nango and Airbyte are **study-only**. Not a grey area.

### OpenConnector — the find the sweep added (Apache-2.0, self-hostable)

Surfaced by the parallel code-search campaign, not by my own searches. It is what people
*assume* Composio is, and it survives the Composio test:

- **Apache-2.0** (real SPDX, not NOASSERTION), 5,324 stars.
- Self-hostable: `docker/`, `deploy/`, `migrations/`, Cloudflare-compatible, Node 22+.
- README positions it explicitly as "an open-source connector gateway for AI agents and
  an alternative to Pipedream/Composio".
- Live catalog API (`connector.oomol.com/v1/catalog`): **1,445 providers / 14,791
  actions** — larger than Activepieces (728) and Nango (982).
- **The catalog is IN the repo** — `src/providers/` holds 1,000+ provider directories
  (API listing caps at 1000, so the true count is higher). This is the check Composio
  failed.
- **The OAuth runtime is in the repo too**, cleanly separated and *tested*:
  `src/oauth/{oauth-flow-service, oauth-token, oauth-credential-refresh-service,
  oauth-client-config-service}.ts`, each with a `.test.ts` beside it, plus
  `src/connection-service.ts` and `src/catalog-store.ts`. No EE carve-out, no
  cross-boundary imports of the kind that make Activepieces' runtime read-only.
- MCP-ready and OpenAPI 3.1 — matches where the connector shape is heading.

**Self-containment check — DONE, passed.** Read `src/providers/slack/definition.ts` in
full. It is a typed `ProviderDefinition` with the auth facts inline, importing only
sibling files (`./actions.ts`, `./scopes.ts`) and `../../core/types.ts`. No call to a
hosted API, no API key required to read it:

```ts
export const provider: ProviderDefinition = {
  service: "slack", displayName: "Slack",
  categories: ["Communication", "Productivity"], authTypes: ["oauth2"],
  auth: [{ type: "oauth2",
    authorizationUrl: "https://slack.com/oauth/v2_user/authorize",
    tokenUrl: "https://slack.com/api/oauth.v2.user.access",
    refreshTokenUrl: "https://slack.com/api/oauth.v2.access",
    scopes: slackUserOAuthScopes, scopeSeparator: ",",
    tokenEndpointAuthMethod: "client_secret_post" }],
  actions: slackActions,
}
```

This is **Nango's declarative quality without Nango's licence** — the best-shaped
artifact found in the whole space, and already in TypeScript (our stack) rather than
YAML needing a parser. Note it also captures `refreshTokenUrl` and
`tokenEndpointAuthMethod`, per-vendor details that are painful to rediscover by hand.

### ADVERSARIAL VERIFICATION (Opus agent, 27 Aug) — verdict re-scoped

An independent Opus agent was tasked to *falsify* the OpenConnector recommendation. Most
claims survived; **one assumption was wrong and changes the shape of the adoption.**

CONFIRMED, stronger than the shallow check:
- **Apache-2.0 is genuine.** `LICENSE.txt` is unmodified stock Apache-2.0. `NOTICE.md`
  adds no field-of-use restriction — only an ordinary trademark disclaimer ("Third-party
  provider and app names, trademarks, logos… remain the property of their respective
  owners", references "do not imply endorsement"). No CLA, no commercial-use clause, no
  contradicting per-file headers.
- **Catalog is fully in-repo — exactly 1,445 provider dirs** via the git trees API
  (`recursive=1`, `truncated: false`, 7,338 entries), matching the hosted catalog's
  `providerCount: 1445` live response. 39.5 MB of provider source. `definition.ts` in
  1445/1445, `executors.ts` 1445/1445, `actions.ts` 1443/1445. **No proprietary shell.**
- **No phone-home.** `catalog-store.ts` loads via `readdir`/`readFile` from local disk.
  `oauth/oauth-token.ts` posts directly to each provider's own `tokenUrl` using *our*
  OAuth client credentials. Only `oomol.com` references in non-doc code are the optional
  `fusion-api` provider (1 of 1,445) and a Feishu helper. No licence key, no telemetry.
  Real Helm chart, Dockerfile, 13 SQL migrations (SQLite/Postgres/D1).
- **Providers are real, not stubs.** Slack `runtime.ts` 32 KB, Gmail `executors.ts` 36 KB,
  HubSpot 25 KB / 26 actions, Stripe `actions.ts` 16 KB with hand-built JSON schemas.
  Gmail has correct Google endpoints with `access_type: offline` + `prompt: consent`.
  Authored via a documented skill (`.codex/skills/add-provider/SKILL.md`), not scraped.
  Egress is SSRF-guarded against loopback/link-local/metadata ranges.

**REFUTED — the blocker: there is no multi-tenancy.**
`migrations/postgresql/0010_runtime.sql` keys `connections` on
`primary key (service, connection_name)` — **no user or tenant column anywhere.**
Isolation is only via runtime tokens carrying `allowedConnections` allowlists of opaque
IDs: a flat, operator-managed ACL. OpenConnector is architected as a **single-operator
personal gateway, not a multi-tenant SaaS backend** — and ours is the latter.

**PARTIAL — encryption is real but silently degrades.**
`src/server/secrets/secret-codec.ts` is genuine AES-256-GCM (scrypt KDF, random 12-byte
IV, auth tag). But `createSecretCodec` returns `PlainTextSecretCodec` when
`OOMOL_CONNECT_ENCRYPTION_KEY` is unset, and `docs/credentials.md` confirms credentials
are then "stored as plaintext." Key derivation is one global key
(`scryptSync(passphrase, keySalt, 32)`), not per-tenant.

**Deployment landmine, quoted from `SECURITY.md`:** insecure self-hosted configuration is
explicitly **out of scope** for vulnerability reports — "Insecure self-hosted
configuration that this project documents how to avoid." Also "Both admin and runtime
authentication are disabled by default for local development," and the Docker image binds
`0.0.0.0` while Node binds `127.0.0.1`. **A naive container deploy is an unauthenticated,
unencrypted credential store on a public interface.** Any spike must set
`OOMOL_CONNECT_ENCRYPTION_KEY` + `OOMOL_CONNECT_ADMIN_TOKEN` from the first run.

**Maintenance:** created 2026-06-29 — **two months old**. 5,324 stars, ~20 contributors
but the top four (108/99/63/36 commits) are all OOMOL-affiliated. Daily cadence through
26 Aug, only 5 open issues. Risk isn't abandonment today; it's a young vendor-controlled
project with a commercial hosted product behind it. Mitigation: Apache-2.0 means a
relicense only binds future versions, and the 39.5 MB catalog is already forkable.

**Verdict: OpenConnector is the adopt target for the catalog + OAuth engine — NOT the
connection store; Activepieces supplies the frontend** (its shadcn connect-dialogs are on our exact stack,
and OpenConnector's `web/` is unexamined). Remaining due diligence before building:
sanity-check maintenance risk (single-vendor project with a commercial `oomol.com`
product behind it) and diff its 1,445 providers against Activepieces' 728 for coverage
gaps worth backfilling.

### The Composio trap (MIT that buys you nothing)

Composio's 29,895 stars and MIT badge make it look like the obvious win. It is not.
Inspected the repo directly: `ts/packages/` holds `core`, `cli`, `providers`,
`json-schema-to-zod`… and **no toolkit/connector directory at all**. The README states
it plainly — "This is the Composio SDK monorepo", and the quickstart begins "Grab a
`COMPOSIO_API_KEY` from the dashboard".

So the **MIT license covers the client SDK; the 1000+ toolkits live server-side behind
their paid API.** Adopting Composio means renting Composio forever, with our connector
layer — and our clients' credentials — hostage to a third-party vendor. That is a
*buy* decision dressed as an open-source one. It may still be the right buy for a demo,
but it must be evaluated on price and lock-in, never counted as free OSS.

General rule this surfaces, worth applying to the rest of the corpus: **an MIT badge on
a repo says nothing about whether the valuable asset is in the repo.** Check what the
directory actually contains before scoring a candidate.

Activepieces' split is the opposite and unusually friendly: everything outside
`packages/ee/` and `packages/server/api/src/app/ee` is **MIT Expat**. The 728 connectors
live in `packages/pieces/community/` — outside the carve-out, therefore MIT.

## Catalog sizes (counted, not estimated)

- **Activepieces: 728 connectors** (`packages/pieces/community`, MIT). Each is an
  independently-versioned npm package (`@activepieces/piece-slack` is at 0.17.9 with
  **144 published versions** — actively maintained, not a dump).
- **Nango: 982 providers** in ONE 921KB `providers.yaml`. Auth-mode split:
  OAUTH2 395 · API_KEY 323 · OAUTH2_CC 101 · BASIC 97 · OAUTH1 4 · JWT 4 · TBA 1.
- **Pipedream: 3,398 component directories** (git-tree count; the contents API caps at
  1000 and hides the true size).
- **MCP registry: live public API** at `registry.modelcontextprotocol.io/v0/servers`,
  JSON-schema'd, no scraping required.

### Auth-type mix — the number that corrects the headline

"728 connectors" is true but misleading if read as "728 connect-your-account buttons".
Counted via GitHub code search over `packages/pieces/community` (a piece can declare
more than one, so these overlap):

| Auth type | Activepieces pieces |
|---|---|
| `PieceAuth.SecretText` (API key) | **508** |
| `PieceAuth.CustomAuth` | 229 |
| **`PieceAuth.OAuth2`** | **113** |
| `PieceAuth.None` | 69 |
| `PieceAuth.BasicAuth` | 11 |

**Nango independently agrees on the shape** — API_KEY 323 vs OAuth-family 425 of 982
(OAUTH2 294 + OAUTH2_CC 101 + MCP_OAUTH2 24 + OAUTH1 4 + generic 2). Two independently
built catalogs landing on the same distribution is strong evidence it reflects the SaaS
API world, not one vendor's bias.

**Strategic read:** the true OAuth "connect my account" set is ~113 (AP) / ~425 (Nango),
not 728/982 — but **113 already exceeds Lovable's ~100**, so the headline conclusion
survives the correction. And the majority case is *simpler than OAuth*: an API-key paste
field. That inverts the build order — ship the `SecretText` path first (a form field and
an encrypted write, no callback URLs, no refresh, no per-vendor app registration), which
unlocks the largest slice of the catalog for the least work, then add OAuth2 for the
~113 that need it. The teardown treated "connectors" as monolithically hard; the data
says two-thirds of it is a text input.

**Overlap between Activepieces and Nango is only 182** (normalized name match).
545 AP-only, 800 Nango-only → the catalogs are **complementary**, roughly 1,500 distinct
services between them. Nango's value is therefore breadth-of-*facts*, not code.

Lovable ships ~100 connectors. Activepieces' MIT set alone is **7x that by service
count** — and, more conservatively, **113 OAuth connectors still beats ~100** even when
you only count the like-for-like "connect your account" flows (see auth mix below).
Quote the 113 to Cena, not the 728; it survives scrutiny and still wins.

## Shape of the artifacts (why this is import-able, not hand-write)

Nango's per-provider entry is **pure declarative data** — no framework entanglement:

```yaml
slack:
  display_name: Slack
  categories: [popular, productivity]
  auth_mode: OAUTH2
  authorization_url: https://slack.com/oauth/v2/authorize
  token_url: https://slack.com/api/oauth.v2.access
  scope_separator: ","
  disable_pkce: true
  proxy:
    base_url: https://slack.com/api
    retry: {after: [retry-after]}
    paginate: {type: cursor, cursor_path_in_response: response_metadata.next_cursor}
```

**91.1% of Nango's catalog is pure data** (verified 27 Aug): 895 of 982 providers carry
no `post_connection_script`, `webhook_routing_script`, or
`credentials_verification_script` — only 87 do. So the catalog is overwhelmingly
declarative facts, not code.

**Correction to the campaign's version of this finding:** it reported the 36
`popular`-tagged providers as "all pure data". They are not — **17 of 36 are scripted**,
i.e. the marquee connectors are *disproportionately* the fiddly ones (47% scripted vs 9%
across the catalog). That is the opposite of reassuring and it is the more useful fact:
the long tail imports trivially, and the connectors users actually ask for first are
where the per-provider work hides. Plan the effort curve accordingly — the last 20
connectors cost more than the first 500.

That is the **ideal target schema** for a `kind: integration` block. Note carefully: the
*facts* it encodes (a vendor's public OAuth endpoints, scope names, pagination style) are
public API documentation, not Nango's creative work — but the curated compilation is
theirs under ELv2. Use it as a **spec to read**, populate our own from vendor docs +
the MIT sources. Do not vendor the file.

Activepieces' equivalent is TypeScript but equally declarative at the auth layer:

```ts
export const slackOAuth2Auth = PieceAuth.OAuth2({
  authUrl: 'https://slack.com/oauth/v2/authorize?user_scope=...',
  tokenUrl: 'https://slack.com/api/oauth.v2.access',
  scope: ['channels:read', 'chat:write', ...],
  getConnectionIdentifier: async ({auth}) => ...,  // shows "<user> (<workspace>)"
})
```

The Slack piece is **not** a thin wrapper: ~45 actions + triggers, 14 locales of i18n.
Depth is real.

### ⚡ The extractor is unnecessary — there is a public catalog API (verified 27 Aug)

The search campaign found, and I re-verified live, that **Activepieces serves its entire
catalog as unauthenticated JSON**. No clone, no AST pass, no disk (which matters — this
machine hit ENOSPC today):

```
GET https://cloud.activepieces.com/api/v1/pieces          → 761 pieces
GET https://cloud.activepieces.com/api/v1/pieces/@activepieces/piece-slack
    → full spec: authUrl, tokenUrl, scope[] (30 entries), type: OAUTH2,
      + 28 actions and 14 triggers with complete prop schemas
```

My own re-count from the live endpoint: **761 pieces** — SECRET_TEXT 374, CUSTOM_AUTH
205, **OAUTH2 96**, none/no-auth 75, BASIC_AUTH 11. (Slightly different from my earlier
code-search counts of 508/229/113 — the API is the authoritative number, since code
search counts *files mentioning* a symbol, not pieces. Quote the API figures.)

**This replaces step 1's extractor with a ~20-line script.** The auth-in-two-places
gotcha below becomes irrelevant for the API path; keep it only if we ever parse source
for something the API omits.

Caveat worth noting: the API is *their* hosted cloud endpoint, so it's a live dependency
and a courtesy to rate-limit. Dump once to JSON, vendor the result, re-dump on a
schedule. The data is MIT-licensed piece metadata either way.

**Fallback extraction route** (only if the API path fails): parse from the **GitHub
source**, not npm. The published tarball ships minified/bundled JS (557KB single-line
`index.js`) — fine to *run*, useless to *read*.

**Extractor gotcha, verified — auth lives in two different places.** Some pieces put it
in `src/lib/auth.ts` (slack, hubspot 1.0KB, notion 1.4KB, github 4.8KB); others declare
`PieceAuth.*` inline in `src/index.ts` (stripe, google-sheets — no `auth.ts` at all). An
extractor that only globs `auth.ts` will silently miss a large fraction of the 728 and
look like it worked. **Resolve `PieceAuth` by symbol across the whole `src/` tree, not by
filename**, and assert a count: 728 pieces in → 728 auth records out, with an explicit
failure list. Anything less means silent truncation.

Prefer an AST/symbol pass (Serena or ts-morph) over regex — matching the block-contract
research receipt that adaptation via typed transforms is the weak-model-safe route.

`getConnectionIdentifier` is a stealable UX detail worth calling out: it's what makes a
connection list read "Shaan (SISO workspace)" instead of an opaque token id.

## Where the MIT/EE line falls in the credential runtime (verified)

This is the second decisive finding: **the OAuth runtime itself is MIT, not EE.**

MIT side — `packages/server/api/src/app/`:
- `app-connection/` — the connection entity, controllers, module (the CRUD + storage of
  a user's connection).
- `app-connection/app-connection-service/oauth2/` — `oauth2-service.ts`, `oauth2-util.ts`,
  `services/`. **The token exchange + refresh logic.**
- `helper/encryption.ts` — **real AES-256-CBC**, per-record random IV, key from
  system props with a mutex around key init. Not a stub.

EE carve-out — `packages/server/api/src/app/ee/`:
`app-credentials`, `oauth-apps`, `managed-authn`, `global-connections`, `connection-keys`,
`secret-managers`, `embed-subdomain`, plus the commercial furniture (billing, scim,
audit-logs, signing-key, api-keys, platform).

**Reading of the split:** the *mechanism* (store a connection, encrypt it, run an OAuth2
exchange, refresh an expiring token) is MIT. What Activepieces reserved is the
*multi-tenant commercial packaging* — platform-managed OAuth apps so end users never see
a client_id, connections shared across a whole platform, external secret-manager
backends, and embedding under customer subdomains.

Consequence for us: **we get the hard cryptographic/protocol core for free and write the
tenancy layer ourselves** — which we'd want to own anyway, because it must bind to
Actionist's own tenant model, not Activepieces'. Note the honest catch: "platform-managed
OAuth apps" (`oauth-apps` + `managed-authn`) is precisely the "user clicks connect and
never sees a client_id" experience Lovable ships, and *that* specific piece is EE. We
reimplement it against the MIT primitives rather than lifting it.

## Verdict — FINAL (direct verification + adversarial Opus review + 24-agent campaign)

0. **Two permissively-licensed repos cover the whole problem — minus the tenancy layer,
   which is ours to write either way.**
   **OpenConnector (Apache-2.0)** = catalog (**1,445 providers verified in-repo**) +
   OAuth engine (flow/token/refresh, no phone-home, real AES-256-GCM) + self-host
   (docker/helm/migrations). **Adopt the catalog and the OAuth engine; do NOT adopt its
   connection store** — it has no tenant column and assumes a single trusted operator
   (adversarial verification, 27 Aug).
   **Activepieces (MIT)** = the frontend (`packages/web/src/app/connections/`, shadcn +
   react-hook-form on our exact stack) and a 728-piece second opinion on catalog coverage.
   Between them: no ELv2, no hosted-API hostage, nothing to hand-write from scratch.
   **The answer to "can we import a connector catalog instead of writing 100
   integrations?" is an unambiguous yes.**
1. **ADOPT Activepieces' catalog** — MIT, 728 services / **113 of them OAuth** (vs
   Lovable's ~100). Extract auth metadata from source into `kind: integration` blocks per
   BLOCK-FRAMEWORK. **Build the API-key (`SecretText`, 508 pieces) path first** — bigger
   coverage, far less machinery — then OAuth2.
2. **Composio = BUY-or-skip, not adopt.** MIT SDK, hosted toolkits. Evaluate only as a
   paid dependency (price, lock-in, credential custody), never as free OSS.
3. **STUDY Nango** — best-shaped schema in the space; ELv2 forbids hosting. Read the
   format, re-derive the data. `providers.yaml` is the schema teacher.
4. **MCP registry as the live tail** — Apache/MIT, public API; covers the modern agent
   tool shape and the long tail without us maintaining it.
5. **Correct the teardown's "connectors = ZERO"** line. It holds only for Actionist's own
   DB. Third-party SaaS connections are still real work — but importing beats
   hand-writing by a wide margin, which the teardown never considered.

## Concrete build order (what this research implies)

Derived from the findings above, cheapest-real-value first. Not started — this is the
proposal, not a status report.

0. ~~Spike OpenConnector first~~ **DONE 27 Aug — IT WORKS.** Full results:
   `openconnector-spike-2026-08-27.md`. Ran natively on Node 22 (no Docker needed).
   Proven live: catalog builds from source alone (1,445 providers / **15,156 actions** —
   more than the hosted count, closing the last open gap); credentials stored genuinely
   encrypted (verified by reading the SQLite file); full authenticated round-trip against
   the real GitHub API; fake tokens rejected by live credential verification; OAuth2
   authorization URL correctly generated. Tenancy blocker demonstrated in practice, not
   just inferred. **Note: needs THREE env vars, not two** — runtime API auth is a
   separate switch (`OOMOL_CONNECT_RUNTIME_TOKEN`) from admin auth.
   Original plan text kept below for reference:
   Docker up, point it at one provider, complete one real OAuth connection end-to-end. Its `src/providers/*/definition.ts`
   files are already the block manifests we were going to generate, so a working spike
   deletes step 1's extractor work — do it before investing there.
   **Set `OOMOL_CONNECT_ENCRYPTION_KEY` and `OOMOL_CONNECT_ADMIN_TOKEN` from the very
   first run.** Without them the service silently stores credentials in plaintext with
   auth disabled, and the Docker image binds `0.0.0.0`. Treat the spike as handling live
   credentials from minute one, not as a throwaway.

0b. **Scope the tenancy layer as OURS — this is the real work item the research
   uncovered.** OpenConnector's `connections` table is keyed `(service,
   connection_name)` with no tenant column, and encryption derives a single global key.
   To host this for Cena's clients' end users we need: a tenant/user column plus
   migrations, per-tenant key derivation, and a mapping from Actionist users onto
   connection IDs. **That is a fork of the storage layer, not configuration** — and it
   means carrying a diff against a fast-moving two-month-old upstream.
   Decide deliberately between (a) forking the store, or (b) using OpenConnector purely
   as a catalog + OAuth *library* behind our own connection storage. **(b) is the
   recommendation** — it takes the two genuinely hard, well-tested parts (1,445 provider
   definitions, OAuth exchange/refresh) and avoids an upstream diff on the one component
   we must control anyway for Actionist's tenant model.

1. **Import Activepieces' catalog — now a ~20-line script, not an extractor.** Hit
   `cloud.activepieces.com/api/v1/pieces` (761), then the per-piece endpoint for the 96
   OAUTH2 ones; vendor the JSON. **Do this regardless of the spike outcome** — it's an
   afternoon and gives a second, independent catalog to diff OpenConnector against.
   Emit one `kind: integration` block manifest per service:
   `{id, display_name, categories, auth_type, authUrl, tokenUrl, scopes[], base_url,
   provenance{repo, commit_sha, license: MIT}}`. Gate: **728 in → 728 out**, explicit
   failure list, no silent drops. Nango's `providers.yaml` entry shape is the schema
   teacher for the fields (read it; don't vendor it).
2. **Ship the API-key path end-to-end for ONE service.** Encrypted-at-rest credential
   write + a shadcn form modelled on `secret-text-connection-settings.tsx`. This proves
   the vault, the tenancy binding, and the UI in one slice, and it covers 508 pieces.
3. **Then OAuth2 for one service** (Slack or Google — best-documented). Re-implement
   `oauth2-util`'s `isExpired`/refresh logic against our storage; do NOT vendor the
   module (EE import, see caveat). This unlocks the 113.
4. **Tenancy layer is ours.** Activepieces reserved exactly this (`oauth-apps`,
   `managed-authn`, `global-connections` are EE) and we'd want to own it regardless so it
   binds to Actionist's tenant model.
5. **MCP registry as the live long tail** — point at the public API rather than
   maintaining the tail ourselves.

Load-bearing check — **DONE, passed.** Code-searched `packages/pieces/community` for
per-file headers contradicting the repo-level MIT split:
`GNU General Public` 0 · `AGPL` 0 · `Elastic License` 0 · `All rights reserved` 0.
No contradicting headers anywhere in the 728. The MIT reading holds.
(Caveat on method: GitHub code search indexes rather than greps every byte, so this is
strong evidence, not a proof. A local header pass at import time — step 1 — makes it
conclusive at zero extra cost, since we're already parsing every file then.)

## Patterns worth stealing (search campaign, 24 agents / 170 candidates)

The campaign's real value was design detail, not new repos. The highest-leverage items,
each a bug someone already shipped and paid for:

**Schema design — copy the shape even if we populate it ourselves.**
- Nango's provider schema is a discriminated union on `auth_mode` over a shared
  `BaseProvider`, and its odd fields encode real pain: `authorization_url_skip_encode[]`
  (providers that break on encoded params), `disable_pkce`,
  `alternate_access_token_response_path` (Slack nests the user token under `authed_user`),
  `expires_in_unit: milliseconds`, `token_request_auth_method: basic|custom|private_key_jwt`.
- OpenConnector's `OAuth2AuthDefinition` (`src/core/types.ts`) is the same idea distilled
  from ~1,000 providers, and adds `tokenResponseEnvelope {dataField, codeField...}` for
  APIs that wrap tokens in `{code, data}` (common in Chinese SaaS) and per-field
  `tokenRequestFields` renaming, including `false` to omit a field entirely.
- **`alias:` inheritance** (Nango): `google-mail` is 13 lines because it declares
  `alias: google` and overrides only `proxy.base_url`. Google/Microsoft/Adobe each spawn
  4–8 entries this way. ~10 lines of loader code, large maintenance saving.

**Auto-rendered connect forms — kills per-connector React work.**
Nango's `SimplifiedJSONSchema` (434 providers have one) is a constrained JSON-Schema
subset with `title/description/example/pattern/order/secret/prefix/suffix/enum`,
per-enum `warnings`, and `visible_when: {field, equals}` for conditional fields. Enough
to render every connector's "enter your subdomain / API key" step **from data**, with no
per-connector component. This is the single biggest frontend saving available.

**Tenancy and trust primitives (relevant given OpenConnector has none).**
- **Connect Session** (Nango `postSessions.ts`): server mints a short-lived token scoped
  to `allowed_integrations[]` per customer; only that crosses to the browser. Exactly the
  primitive a generated Actionist app needs to offer "connect Gmail" without ever holding
  our platform secret.
- **Origin-checked postMessage handshake** (`frontend/lib/connectUI.ts`): the iframe is
  created *without* the token in the URL; child posts `ready`, parent verifies
  `event.origin` then posts the token. Keeps secrets out of browser history, referrers and
  access logs.
- **Capability-scoped runtime tokens** (OpenConnector): `allowedActions`/`blockedActions`/
  `allowedConnections`, denial evaluated *before* credential lookup, and a PUT must resend
  the field so an update can't silently drop a restriction.
- **`CredentialProfile {accountId, displayName, grantedScopes}`** captured at connect time
  via a cheap `/me` call — lets the UI say "runs as alice@corp with these scopes" without
  exposing the token. Pairs with Activepieces' `getConnectionIdentifier`.
- **Per-ACTION `requiredScopes`** surfaced against the connection's `grantedScopes` —
  enables "reconnect with more scopes to use this action", the genuinely hard part of a
  real connect flow.

**Operational details that prevent incidents.**
- **`externalId` as the stable connection reference** — never the UUID, never the display
  name. Renames and reconnects don't break references. Free now, painful to retrofit.
- **Refresh 15 min early under a lock keyed by tenant+connection**, and discriminate
  `invalid_grant` (the user's problem → mark connection ERROR) from
  `invalid_client`/`invalid_scope` (**our bug** → must NOT mark the connection bad).
- **Envelope encryption with encryption-context AAD** asserting `{purpose, app}` on
  unwrap, so a DEK wrapped for one purpose can't be replayed elsewhere (~45 lines).
- **Fail fast on mutually-exclusive config** — Nango throws if both `ENCRYPTION_KEY` and
  `ENCRYPTION_KEY_WRAPPED` are set rather than silently picking one. Directly relevant
  given OpenConnector's opposite choice (silently degrading to plaintext).
- **Lazy executor loading** (OpenConnector's 3-file provider layout): `definition.ts`
  (data) + `actions.ts` (schemas) + `executors.ts` (impl, imported only at execute time)
  — serve a 1,445-provider catalog without importing 1,000 modules at boot.
- **`catalogOnly`/`needsCredential`/`locallyExecutable` flags** — ship a large browsable
  catalog where only some entries are wired, without lying to the agent about what it can
  call. The right primitive for filling a 100-connector catalog incrementally.

Campaign stats: 170 candidates, 10 deep-reads, 24 agents, ~1.73M subagent tokens.
Two agents died mid-response (connector-catalog-as-data, embeddable-connect-ui r1) —
both classes were covered by other lanes and by direct verification above, so no gap.
Verdict `adopt_as_library` was empty: the campaign judged everything steal-or-study,
which is *more* conservative than my adopt call on OpenConnector. That tension is
resolved by the adversarial verification above — adopt the catalog + OAuth engine, write
our own store.

## SECOND SWEEP (27 Aug, Opus + receipt contract) — 15 new hits, one beats everything

A wider pass across other ecosystems/topics. **Main-agent re-verification** of the
headline claim (not taken on trust):

**`jentic/jentic-public-apis` — 4,140 vendor dirs, CC0-1.0, pushed 2026-08-27.**
```
gh api repos/jentic/.../git/trees/884b3ac… → {"truncated": false, "vendors": 4140}
gh api repos/jentic/jentic-public-apis --jq '.license.spdx_id' → CC0-1.0
LICENSE.md body → "Creative Commons Legal Code / CC0 1.0 Universal"
```
Specs are real, spot-checked Slack: `apis/openapi/slack.com/main/1.7.0/openapi.json`
(920 KB) → `openapi: 3.0.0`, **168 paths**, `securitySchemes: {slackAuth: oauth2,
authorizationCode, authUrl https://slack.com/oauth/v2/authorize, 55 scopes}`. Layout is
`apis/openapi/<vendor>/<api>/<version>/` with `openapi.json` + a `scorecard.json`
(they quality-score the specs) + `apis.json`.

**Why CC0 matters more than the count:** every other candidate carries obligations —
attribution, NOTICE files, licence compatibility, or a hosting ban. CC0 is public domain:
nothing to track, nothing to attribute, no hosting restriction. It is the only find that
is *both* bigger than OpenConnector (2.9x) and more permissive.

**Complementary, not a replacement:** jentic ships *specs*; OpenConnector ships a
*running gateway*. Plan: OpenConnector to ship, jentic as the long-tail reservoir.

Other new hosting-safe finds (sweep receipts, not independently re-verified by me):
| repo | licence | catalog | note |
|---|---|---|---|
| nextauthjs/next-auth | ISC | **106 OAuth provider configs** | the plain "connect your X" config layer |
| meltano/hub | Apache-2.0 | 1,684 extractors + 131 loaders (YAML) | declarative Singer registry, typed settings |
| TensorBlock/awesome-mcp-servers | MIT | 7,729 entries, one 10.8 MB JSON | **discovery index only** — 7,279/7,729 auth `unknown` |
| rdmgator12/awesome-claude-connectors | CC0-1.0 | 1,625 connectors | mirrors Anthropic's own catalog |
| apache/camel | Apache-2.0 | 405 component JSON | full property schemas per connector |
| better-auth/better-auth | MIT | 48 social providers | modern, very active |
| logto-io/logto | MPL-2.0 | 56 connectors | file-level copyleft, usable |
| langchain-ai/langchain-community | MIT | 93 tool packages | Python tool pack |
| langgenius/dify-official-plugins | Apache-2.0 | 149 manifests | Apache *even though Dify core is not* |
| huginn/huginn | MIT | 73 agents | Ruby, mature, still pushed |

**DEAD ENDS — recorded so nobody re-searches them.**
The three load-bearing ones were **re-verified by the main agent by reading the licence
body**, not taken from the sweep's report (classify-by-reading):

- **panoratech/Panora — AGPL-3.0.** `repos/panoratech/Panora/license` → `AGPL-3.0`;
  LICENSE body opens `GNU AFFERO GENERAL PUBLIC LICENSE / Version 3, 19 November 2007`.
  Disqualifying. (Note: my first-pass search 404'd on `panora-hq/panora` — wrong org.
  Correct path is `panoratech/Panora`.)
- **langgenius/dify-plugins — licence NONE.** `repos/langgenius/dify-plugins --jq
  '.license.spdx_id'` → `NONE`. 574 plugin dirs with **no licence grant at all** —
  worse than a restrictive licence, since nothing permits use.
- **langgenius/dify (core) — modified Apache, bars multi-tenant.** LICENSE clause 1a,
  verbatim: *"Multi-tenant service: Unless explicitly authorized by Dify in writing, you
  may not use the Dify source code to operate a multi-tenant environment."* Tenant is
  defined as a workspace. Actionist is exactly a multi-tenant workspace product →
  disqualifying. Clause 1b also forbids removing the console LOGO/copyright.

Reported by the sweep with receipts, NOT independently re-read by me (treat as strong but
second-hand): Automatisch (AGPL except `.ee.`), zato (AGPL), grafana (AGPL),
konfig-dev/konfig (sunset Dec 2024), supaglue (last push 2024-03-07),
`public-apis` (471k stars but markdown links, not machine-readable),
the `openapi-specification` topic (tooling/codegen only), and the **OmniAuth ecosystem**
(one gem per provider across many repos — no single harvestable catalog).

Sweep's own UNVERIFIED flags: duckle's "385 components" (could not locate the dir),
Kestra per-plugin counts (147 `plugin-*` repos counted, none opened), and .NET/PHP/Rust
+ Postman-collection space not fully enumerated (search quota). Also noted:
`modelcontextprotocol/servers` NOASSERTION is a genuine MIT→Apache-2.0 mixed state, not
a hidden restriction.

## Gaps / not yet verified

- **Provider icon licensing UNVERIFIED** (`web/provider-icons-plugin.ts`). OpenConnector's
  NOTICE disclaims trademark ownership; shipping Gmail/Stripe/Slack logos in a
  client-facing connector picker is a per-brand terms question. **Check before any UI
  ships to Cena** — this is the kind of detail that surfaces late and embarrasses.
- ~~Whether the 14,791 action count reproduces exactly from repo source~~ RESOLVED by the
  execution spike: the local generator produced 1,445 providers and 15,156 actions from
  repository source without a proprietary shell. The repository was ahead of the hosted
  catalogue count observed during research.

- ~~Composio not inspected~~ RESOLVED — SDK-to-hosted-service, see trap above.
- ~~Embeddable React "connect account" widget~~ RESOLVED, better than expected. GitHub
  *search* found nothing credible (the term "embedded iPaaS widget" is marketing, not a
  repo topic) — but the UI is sitting inside Activepieces at
  `packages/web/src/app/connections/`, MIT:
  `new-connection-dialog.tsx`, `create-edit-connection-dialog.tsx`,
  `oauth2-connection-settings.tsx`, `oidc-connection-settings.tsx`,
  `custom-auth-connection-settings.tsx`, `secret-text-connection-settings.tsx`,
  `basic-secret-connection-settings.tsx`, `multi-auth-list.tsx`,
  `reconnect-button-dialog.tsx`, `replace-connections-dialog.tsx`.

  Stack is **React 18 + shadcn/ui + react-hook-form + i18next + lucide** — i.e. our
  builder's own stack (`packages/web/components.json` confirms shadcn). These are
  directly portable as patterns, and they already cover the whole matrix we'd otherwise
  discover the hard way: OAuth2 vs OIDC vs API-key vs basic-auth vs custom, scope
  multi-select, reconnect-when-expired, and replace-connection-across-flows.

  Method lesson: **search the repo you already trust before searching GitHub.** Three
  keyword searches returned zero; the answer was a directory listing away in a repo
  already on the shortlist.
- ~~Whether the OAuth runtime is separable~~ RESOLVED, with an important caveat —
  **the MIT files import across the EE boundary.** `oauth2-util.ts` (MIT path) line 8:
  `import { secretManagersService } from '../../../ee/secret-managers/...'`, and it also
  pulls `fastify`, `axios`, TypeORM entities and `pieceMetadataService`. `encryption.ts`
  imports `redis-connections`.

  So the runtime is **reference-quality, not lift-and-drop**. The *algorithms* are MIT and
  readable (token formatting, `isExpired` with claimed_at + skew, refresh, AES-256-CBC),
  but the files are woven into their Fastify/TypeORM/Redis/EE server. Re-implement the
  ~200 lines of logic against our own storage; do not vendor the modules. Anyone who
  tries to copy the directory wholesale will pull EE code into an MIT-assumed build —
  a licensing accident waiting to happen. Flag this loudly in the block spec.
- ~~Per-piece licence headers not audited~~ RESOLVED — scanned, zero contradictions.

## Machine note (unrelated to this research, but urgent)

Hit ENOSPC mid-research. `/System/Volumes/Data`: **412Gi used, ~2Gi free**.
Top consumer: **`~/.codex` = 23G** (transcripts), `.cache` 4.1G, `Downloads` 3.9G,
`.claude` 1.4G. Plus 3 APFS OS-update snapshots and 12Gi VM swap.
The `transcript-compact` skill exists for exactly this (~4x fleet-wide). Not actioned —
out of scope for this task, flagged for a deliberate pass.

## Where this research now lives

- **GitHub (private):** https://github.com/sisodias/siso-connector-research — both
  dossiers + a README integration guide with the verified wiring commands.
- **Research OS pack:** `packs/connectors.html` (Connector room) — registered in the hub
  and every pack sidebar. Local: http://127.0.0.1:4173/research/packs/connectors.html
- **Artifact (visual summary):** https://claude.ai/code/artifact/f2e771d4-90c1-4dc2-b793-6618fd1b4944
