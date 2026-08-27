# OpenConnector spike — RESULT: it works. 27 Aug 2026

Hands-on spike of `oomol-lab/open-connector` (Apache-2.0), run by the main agent on the
MacBook. Every claim below was executed live, not read. **Verdict: the adopt
recommendation holds. The catalog and OAuth engine are real and work end-to-end.**

## What ran

No Docker on this machine (and only ~1.3 GB free disk), so it ran **natively on Node
22.23.2** — which turned out to be the better path anyway: `npm install` pulled 423
packages in 11s, no container needed. Sparse shallow clone
(`--depth 1 --filter=blob:none --sparse`, dirs `src scripts migrations docs`) = 63 MB.

Security posture set from the first run, per the 27 Aug review:
`OOMOL_CONNECT_ENCRYPTION_KEY` + `OOMOL_CONNECT_ADMIN_TOKEN` both set before boot.

## Results — every one verified by execution

**1. Self-contained catalog build: CONFIRMED (closes the one open gap).**
`postinstall` generated from repo source alone, no network:
```
Generated registry.generated.ts (1445 providers).
Generated action-contracts.generated.ts (1445 providers).
Generated 1445 apps and 15156 actions.
```
The prior verification could not confirm the 14,791 action count reproduced from source.
**It does** — locally 15,156 actions (higher than the hosted number, i.e. the repo is
ahead of the published catalog). 1,454 dirs under `src/providers/`. No proprietary shell.

**2. Server boots clean.** SQLite backend, 11 migrations applied in 10ms, binds
`127.0.0.1:3000`. Data dir is local. No phone-home observed.

**3. No-auth action executed live.** `POST /v1/actions/hackernews.get_top_stories`
returned real story IDs from the live HN API. `GET /v1/actions` reports **1,445 services**.

**4. Credential storage is genuinely encrypted at rest.** Stored a real GitHub token,
then read the SQLite file directly:
```
github/default: enc:v1:yKlgIeTrsGiVqp04._7lhXgjkh1fY7DUDcauYgg.zumPe9YK0...
  encrypted-prefix: True     contains 'gho_'/'ghp_': False
```
OAuth client secrets and OAuth `state` rows are encrypted too (`enc:v1:` prefix).

**5. Full authenticated round-trip works.**
`POST /v1/actions/github.get_current_user` → `success: True, login: sisodias, id:
80409709`. Credential written encrypted, decrypted at execute time, real API call. **This
is the whole loop working.**

**6. Credential verification is real — and it rejects bad tokens.** A fake
`github_pat_SPIKE_FAKE_SENTINEL` was **refused** with `credential_verification_failed:
"Bad credentials"` — it verifies against the live provider before storing. Nothing was
persisted. Excellent behaviour we would otherwise have had to build.

**7. `CredentialProfile` auto-resolves.** Storing the token returned
`profile: {accountId: "sisodias", displayName: "sisodias", grantedScopes: []}` with no
extra call. This is the "runs as alice@corp" trust primitive, working out of the box.

**8. OAuth2 flow generates a correct authorization URL.** Registered a client config via
`PUT /api/oauth/configs/googledrive`, then `POST /api/oauth/authorizations`:
```
https://accounts.google.com/o/oauth2/v2/auth
  ?access_type=offline&prompt=consent
  &client_id=…&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Foauth%2Fcallback
  &response_type=code&state=fe2ba4bc-…&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive
```
Correct params, proper encoding, `access_type=offline` for refresh tokens, state
persisted encrypted. **This is exactly the URL a "Connect Google Drive" button emits.**
NOT completed: finishing the callback needs a real Google Cloud OAuth app (a credential
I will not create on Shaan's behalf). Everything up to the user-consent redirect is proven.

## Corrections to earlier numbers

**OAuth2 providers: 103, not 1,445.** From the running server's own
`/api/providers`: `api_key 1302 · oauth2 103 · custom_credential 75 · no_auth 20`
(authTypes overlap slightly). Same pattern as Activepieces (96 OAuth2 of 761) and Nango
(425 of 982): **the big catalog numbers are dominated by API-key providers.**

Consolidated OAuth counts across all three catalogs: OpenConnector 103 · Activepieces 96 ·
Nango 425. Lovable ships ~100. **Any one of these already matches or beats Lovable on
OAuth connectors**, and Nango's 425 is the outlier worth understanding later.

This reinforces the build-order inversion: **ship the API-key path first.** It is ~90% of
every catalog and needs no callback URLs, no per-vendor app registration, no refresh.

## Route reference (docs were wrong; these are from `connect-server.ts`)

The quickstart's `/api/connections/:service/oauth/start` and `/api/oauth-clients/:service`
**do not exist**. Real routes:
`/api/oauth/configs` · `/api/oauth/configs/:service` · `/api/oauth/authorizations` ·
`/api/connections/:service` · `/api/providers/:service` · `/api/runtime-tokens` ·
`/v1/actions/:actionId` · `/v1/proxy/:service` · `/v1/health`.
Service ids have no underscore-separators for Google (`googledrive`, `googlecalendar`,
`googledocs` — **not** `google_sheets`).

## The blocker, now demonstrated rather than inferred

Created two connections `github/tenant-a` and `github/tenant-b`, then listed
`/api/connections` with a single admin token. **All connections from every "tenant" are
returned in one flat list** — 23 rows including both tenants'. Confirms the schema read:
`connections` is `primary key (service, connection_name)` with no tenant column, and
`oauth_client_configs` is keyed on `service` alone (**one OAuth app per service,
globally**).

Also confirmed in source (`src/server/secrets/secret-codec.ts:55`): `createSecretCodec`
returns `PlainTextSecretCodec` when the key is unset. And `keySalt` is a **hardcoded
constant** (line 10), so one passphrase → one global key. There is no per-tenant key
derivation to configure; it does not exist.

Third gate seen at boot: runtime API auth is a **separate switch** from admin auth —
`WARN: runtime API authentication is disabled; … set OOMOL_CONNECT_RUNTIME_TOKEN`.
So a safe deployment needs **three** env vars, not two: `ENCRYPTION_KEY`, `ADMIN_TOKEN`,
`RUNTIME_TOKEN`.

## Verdict

**Adopt the catalog + OAuth engine. Write our own connection store.** The spike changes
nothing about that conclusion — it strengthens it, because the parts we want are now
proven working rather than inferred from source, and the part we must replace is
demonstrated broken-for-our-purpose rather than argued from a schema.

Recommended integration remains **option (b)**: use OpenConnector as a catalog + OAuth
library behind Actionist's own tenant-aware storage. The spike shows the provider
definitions and the OAuth URL builder are cleanly separable (`/api/providers` and
`/api/oauth/authorizations` are thin over `src/oauth/*` + `src/providers/*`), so this is a
realistic seam, not wishful thinking.

## Cleanup / state

Cleanup completed after the execution receipts were captured. The server was terminated
by its exact process ID, the SQLite database containing the encrypted GitHub credential
was deleted, and the 63 MB sparse clone plus `node_modules` and throwaway spike keys were
removed from `scratchpad/oc`. A post-cleanup process check found no OpenConnector server,
and the `scratchpad/oc` directory is absent. The durable result is this report; no token,
database or cloned source was copied into the client research tree.

## Not tested

- OAuth callback completion + token refresh (needs a real Google OAuth app).
- Postgres backend (ran SQLite; 13 PG migrations exist).
- The web console (`web/` assets not built; warns to use :5173 for dev).
- Provider icon licensing — still **UNVERIFIED**, still the thing to check before any
  client-facing UI.
