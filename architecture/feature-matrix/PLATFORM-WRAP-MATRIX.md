# Platform wrap-in matrix — big-software blocks the builder can stand ON

Date: 2026-08-27 · Research-only · NOT_ADMITTED · no implementation authorized
Client: Action Model (Cena / actionmodel.com)
Binding contract: `CONTRACT.md` (evidence-or-unknown, licence gate, DIRECT vs INFERRED)
Block shape: `../block-contract.schema.json`

## The question this answers

The user's insight: *"for some stuff we're already adding, there'll already be databases
and all of that — a lot of stuff you wouldn't even have to remake."*

So: which big-software platforms can be wrapped as **pre-built blocks the generated app is
built ON** — the app's database IS an Airtable base, the app's docs ARE Notion pages —
rather than generated from scratch?

**Scope boundary.** A separate Phase-8 connector lane owns Activepieces / Composio / Nango /
MCP registries / OAuth vaults. This lane is the opposite direction: platform as *substrate*,
not as a service the app calls out to. Where a platform only works as an outbound connector,
that is recorded in one line and dropped.

## Headline

**One platform in ten survives the gate: Grist.** Every other candidate fails on one of two
things — a licence that forbids exactly Cena's resale model, or an embed story that runs the
wrong direction (their UI hosts our code, not ours hosting theirs).

The single most important correction in this document: **NocoDB is not open source.** It is
the highest-starred repo in the entire twin class at 64,749 stars, it is universally described
as "the open-source Airtable alternative", and its own pricing page markets the Community
edition as "Free Forever, Fair-Code" with no stated commercial restriction. The LICENSE.md
body says something different, and it is disqualifying.

## Class A — SaaS platforms (wrap via API, cannot self-host)

### Airtable — verdict SKIP (ToS-barred)

| Field | Finding | Class |
|---|---|---|
| API surface | REST. **5 requests/second per base**; 50 req/s per personal access token; 429 then a 30-second lockout | DIRECT |
| Embed direction | **Wrong way.** Extensions/Blocks SDK renders *inside Airtable's own UI*. Share-view embeds are read-only iframes | DIRECT |
| ToS on resale | Developer Terms, "Commercial Conduct": may not "Use Airtable's APIs to replicate or compete with Airtable's core products or services" | DIRECT |
| Per-seat requirement | Same section bars sub-licensing or allowing API access "without requiring them to have an Airtable account" — "(each User requires access tokens for their own Airtable accounts)" | DIRECT |
| Economics | Free / Team $20 seat/mo / Business $45 seat/mo (annual) | DIRECT |

Two independent kills. First, a scoped app builder that emits CRUD apps over a table backend
**is** substantially the thing the Commercial Conduct clause names; building it on Airtable's
own API is the textbook case that clause exists to stop. Second, even if it were permitted,
every end customer of every generated app needs their own paid Airtable account — the per-seat
cost passes straight through to Cena's per-build price and scales with *his client's* headcount,
not his.

The rate limit alone would end it regardless: 5 req/s per base is a per-app ceiling, not a
per-tenant one. A single generated app under modest load exhausts it.

Terms: https://www.airtable.com/company/developer-terms · Limits: https://airtable.com/developers/web/api/rate-limits · Pricing: https://www.airtable.com/pricing

### Notion — verdict CONNECT (not a substrate)

| Field | Finding | Class |
|---|---|---|
| API surface | REST; pages, databases, data sources, views, comments, file uploads, search. Webhooks present | DIRECT |
| Rate limit | ~3 requests/second per connection average, bursts allowed; per-workspace limit scales with plan | DIRECT |
| Payload cap | 1000 block elements and 500KB per request; 100 elements per array; 2000 chars per rich-text field | DIRECT |
| Embed direction | **No embed SDK exists.** Official SDK is outbound only — your code calls Notion's REST API. Nothing renders Notion's editor inside a third-party app | DIRECT |
| ToS on resale | **UNVERIFIED** — the terms pages 307-redirect to `app.notion.com`, which returns HTTP 401 or an empty body to every fetch attempt (4 URL variants tried) | — |

The API is genuinely capable, but there is no way to put Notion's editor inside a generated app,
so "the app's docs ARE Notion pages" cannot be built as a *block*. It can only ever be an
outbound sync. That makes Notion the connector lane's problem, not this lane's.

Recorded honestly: I could not read Notion's API terms. Since the verdict is CONNECT on
capability grounds alone, the unread terms do not change the outcome — but if anyone later
wants to WRAP Notion, the terms are an open blocker, not a cleared one.

API: https://developers.notion.com/docs/getting-started · Limits: https://developers.notion.com/reference/request-limits

### Google Sheets — verdict CONNECT

| Field | Finding | Class |
|---|---|---|
| API surface | REST. 300 read + 300 write requests/minute per project; 60/minute per user per project | DIRECT |
| Cost | Standard use free today; the page states over-quota use is planned to begin billing to Google Cloud later in 2026 | DIRECT |
| Embed direction | Publish-to-web iframes, read-only presentation | DIRECT |

Per-user quota of 60 writes/minute is workable for import/export and reporting, but a Sheet is
not a relational store: no constraints, no referential integrity, no row-level access model.
As a generated app's actual data layer it is a liability. Excellent as a connector — users
genuinely want their data in Sheets — which is the other lane.

https://developers.google.com/workspace/sheets/api/limits

### Coda — verdict SKIP (rebranded, and tables are read-only)

| Field | Finding | Class |
|---|---|---|
| Status | **Acquired and rebranded.** `coda.io/developers` 307-redirects to `docs.superhuman.com`; the docs are titled "Superhuman Docs API" and describe "Superhuman Docs (formerly Coda)" | DIRECT |
| API surface | REST at `coda.io/apis/v1`. Reads 100 req/6s; writes 10 req/6s; doc-content writes 5 req/10s; listing docs 4 req/6s | DIRECT |
| Tables | **Read-only via API** — list and get only; no create/update table endpoints. Rows are writable | DIRECT |
| Webhooks | None found; writes return HTTP 202 + `requestId` for status polling | DIRECT |
| Embed | No embed/iframe API in the reference. Packs run *inside* Coda | DIRECT |

If the API cannot create a table, it cannot be the substrate for a generated app whose schema
the builder authors. Add an in-flight platform rebrand under new ownership and this is the
weakest candidate in the set. Skip.

https://docs.superhuman.com/developers/apis/v1

### SmartSuite — verdict SKIP (unverifiable)

REST API covering "Solutions, Tables, Records, Fields". Rate limits, webhook status, plan tier
required for API access, and any embed path are all **UNVERIFIED** — the developer landing page
states none of them. No embed story surfaced. Smallest install base of the five with the least
published detail; nothing here justifies the integration risk over Grist.

https://developers.smartsuite.com/docs/api/getting-started/introduction/

## Class B — OSS twins (self-hostable = candidate true blocks)

All stars and SPDX below re-verified live via `gh api` on 2026-08-27 immediately before writing.

| Repo | Stars | GitHub SPDX | Actual licence state | Gate |
|---|---|---|---|---|
| `nocodb/nocodb` | 64,749 | NOASSERTION | **Sustainable Use License** — internal business purposes only | **AVOID** |
| `AppFlowy-IO/AppFlowy` | 75,991 | AGPL-3.0 | AGPL-3.0 (server half `AppFlowy-Cloud` also AGPL-3.0) | STUDY |
| `outline/outline` | 40,344 | NOASSERTION | **BSL 1.1**, Change Date 2030-07-13 → Apache-2.0 | **AVOID** |
| `docmost/docmost` | 21,478 | AGPL-3.0 | AGPL-3.0 core + **proprietary EE** in 3 dirs | STUDY |
| `teableio/teable` | 21,720 | NOASSERTION | **AGPL-3.0 apps** + MIT `packages/` only | STUDY |
| `bram2w/baserow` | 5,727 | NOASSERTION | **MIT core** + proprietary `premium/` + `enterprise/` | LIFT (core only) |
| `gristlabs/grist-core` | 11,624 | Apache-2.0 | Apache-2.0, clean NOTICE, no EE repo | **LIFT** |

**Four of seven return NOASSERTION** — GitHub cannot classify them, and that is precisely where
the enterprise splits hide. Every one was resolved by reading the LICENSE body.

### NocoDB — verdict SKIP (licence forbids the business model)

The Airtable twin everyone reaches for first, and the one that fails hardest. LICENSE.md,
updated 2026-01-29, puts both `master` and `develop` under the Sustainable Use License:

> You may use or modify the software only for your own internal business purposes or for
> non-commercial or personal use. You may distribute the software or provide it to others
> only if you do so free of charge for non-commercial purposes.

Cena's model is commercial delivery of software to paying clients. Standing generated client
apps on a self-hosted NocoDB is neither "internal business purposes" nor "free of charge for
non-commercial purposes". Also note branches other than master/develop are **not licensed at all**.

Per CONTRACT.md rule 2 this is AVOID — not merely STUDY. The gap between the pricing page
("Free Forever, Fair-Code", no restriction stated) and the licence body is the trap; the same
class of trap as the Composio MIT-covers-only-the-SDK finding already logged on this project.

### Outline — verdict SKIP (BSL names our use case)

Business Source License 1.1. The Additional Use Grant permits production use *except*:

> you may not use the Licensed Work for a Document Service

which it defines as a commercial offering letting third parties access the functionality by
creating teams and documents they control. A generated client app whose docs are Outline is
that, described almost exactly. Converts to Apache-2.0 on 2030-07-13 — four years out, not a
plan. AVOID until the Change Date.

### AppFlowy · Docmost · Teable — verdict SKIP (copyleft, architecture only)

AGPL-3.0 across all three, which under the block contract's provenance rules
(`license` enum admits only MIT / Apache-2.0 / BSD / ISC / first-party) means **no AGPL code can
appear in a block at all**. AGPL's network clause is the specific hazard: serving generated apps
to clients over a network from AGPL code triggers source-disclosure obligations over the combined
work. Docmost adds a proprietary EE split (`apps/server/src/ee`, `apps/client/src/ee`,
`packages/ee`, per its README). Teable's `packages/` are MIT but its two actual applications —
`apps/nestjs-backend`, `apps/nextjs-app` — are AGPL-3.0, so the MIT half is SDK scaffolding, not
the product. All three are STUDY: read the architecture, ship none of the code.

### Baserow — verdict CONNECT (MIT core is real, but the embed is read-only)

Genuinely the second-best licence story: MIT Expat for everything outside `premium/` and
`enterprise/`, with all client-side JavaScript MIT regardless. Both restricted directories exist
at root today and the enterprise EE licence requires a paid subscription for production use.

It falls short as a *substrate* on embedding: publicly shared views embed via iframe but are
read-only (forms accept new submissions; grids are static and not clickable per Baserow's own
community reports). A generated app needs to write through the UI it embeds. Usable as a
headless data layer via the REST API with database tokens — which is a connector shape, not a
block shape. Hiding the Baserow logo is a paid feature, which also matters for white-labelled
client delivery.

### Grist — verdict WRAP

The one that clears every gate.

| Field | Finding | Class |
|---|---|---|
| Licence | Apache-2.0 at root, `NOTICE.txt` carries no additional restriction, `gristlabs/grist-ee` returns HTTP 404 — no separate enterprise repo | DIRECT |
| Commercial self-host | Community edition explicitly free to use and redistribute; **no licence key required**; `gristlabs/grist-oss` image is purely free code | DIRECT |
| Multi-tenancy | **One instance serves N tenants.** Leave `GRIST_SINGLE_ORG` unset to permit multiple orgs/team sites | DIRECT |
| Access control | Access rules included in the free Community edition, not paywalled | DIRECT |
| Embed — **both directions** | `?embed=true` read-only; **`?style=singlePage` is editable and follows access rules** | DIRECT |
| Widgets | `grist-plugin-api.js` — our page runs inside Grist (inbound); complements rather than replaces the iframe embed | DIRECT |
| Webhooks | Included in Community edition | DIRECT |
| Paid-only | Admin Controls, email notifications, automations, AI assist, Azure snapshots — none load-bearing for us | DIRECT |

Grist is the only candidate where an **editable** view of platform-owned data can be embedded in
a generated app, under access rules, on an Apache-2.0 licence we may host commercially for clients.
That combination is what "the app's database IS the platform's" actually requires.

Docs: https://support.getgrist.com/self-managed/ · https://support.getgrist.com/embedding/ · https://support.getgrist.com/widget-custom/

## Which must-haves does a wrap absorb?

Tested against the 31 `must_have` rows in `lovable-features.jsonl`. Absorption means the platform
supplies the capability so the builder does not author it.

**Grist — absorbs 3 must-haves outright, materially assists 2 more.**

Absorbed:
1. `data.query_and_mutation_model` — *Backend queries and mutations* (**hard**). Grist owns the
   tables, the API, and the access rules. For table-shaped apps the builder stops generating a
   query layer and configures one.
2. `auth.role_model` — *Roles and permissions* (**moderate**). Grist access rules are per-table,
   per-row, and per-column, in the free edition, and the editable embed honours them.
3. `ui.human_design_review` — *Preview review and manual acceptance* (**moderate**) for the data
   surface specifically: an embedded editable Grist page is the reviewable artifact.

Materially assisted, not absorbed:
- `security.tenant_model` — *Workspace tenancy* (moderate): Grist orgs give the tenancy boundary
  for data, but not for the builder's own projects, chat history, or billing.
- `artifact.output_type` — *Full-stack web application output* (hard): the "backend integrations"
  half is supplied; frontend generation and deploy config are untouched.

**Explicitly NOT absorbed by any platform**, and worth stating because it is the tempting error:
none of these platforms touch `agent.tool_use` (Build mode), `security.sandbox_boundary`,
`verify.preview_environment`, `input.natural_language_prompt`, `deploy.hosted_publish`, or
`recovery.source_rollback`. Per SYNTHESIS.md the two `very_hard` must-haves are Build mode and
managed sandbox execution — **wrapping a data platform absorbs neither**. It does not touch the
genuinely hard part of the build.

Counts for the rest: Airtable and NocoDB would each have absorbed a comparable 3 (same data-layer
trio) had they cleared the gate — the reason they score 0 is licence and ToS, not capability.
Baserow absorbs 1 (`data.query_and_mutation_model`, headless only) in a connector shape. Notion,
Sheets, Coda, SmartSuite, Outline, AppFlowy, Docmost, Teable absorb 0 as substrate blocks.

Note the deleted-by-scope list is unaffected: `data.generated_schema`, `data.cloud_provisioning`,
and `auth.builtin` are already deleted by the platform-owns-the-DB thesis, so a wrap cannot claim
credit for them a second time.

## Overall recommendation

**Grist is the only WRAP.** Apache-2.0, commercially self-hostable with no key, true
multi-tenancy on one instance, access rules free, and — uniquely — an *editable* embed that
honours those rules. It absorbs 3 of the 31 must-haves including the `hard` one,
`data.query_and_mutation_model`.

**Baserow is the credible fallback**, and worth keeping warm: MIT core, but read-only embeds
make it a headless data layer rather than a block, so it lands in the connector lane.

**Everything else is out**, and for a reason more interesting than "worse product": the two
best-known names in the class, NocoDB (64,749 stars) and Outline (40,344 stars), are both
licensed specifically to prevent someone doing what Cena intends to do. The pattern from earlier
on this project holds — the most famous entries are the least usable, and the licence body says
something the badge and the pricing page do not.

**The honest limit of this finding:** wrapping Grist shrinks the data layer, not the build.
The agent loop and the sandbox remain exactly as hard as they were.

## Open / unverified

1. **Notion's API terms are unread** — every terms URL redirects to `app.notion.com`, which
   returns 401 or empty. Verdict CONNECT rests on the absent embed SDK (DIRECT), so the outcome
   stands, but a future WRAP attempt must clear this first.
2. **SmartSuite rate limits, webhooks, plan-gating, embed** — all unstated on the developer site.
3. **Grist under N-tenant load is unmeasured.** Multi-org support is documented; whether one
   instance sustains N client apps at Cena's volumes is untested, and no benchmark was found.
4. **Airtable's per-seat pass-through is DIRECT from the terms but the price impact is INFERRED** —
   it depends on Cena's per-client headcount, which is unknown.
5. **`?style=singlePage` write-path semantics were read from Grist's docs, not exercised.** The
   claim that edits honour access rules is DIRECT from documentation, INFERRED as to behaviour
   under a hostile embed.
