# P09 — Data and state plane: research report

Run `2026-08-27-sprint-1-fable` · lane S1-L4 · agent ACTIONIST-S1-L4-HOST
Status: research only · UNEXECUTED · NOT_ADMITTED · admitted blocks 0

## Question this part owns

What must the Actionist host standardize about state so that owned code, absorbed donor
code, intact donor services and external systems can serve one client workflow — without
hidden dual writes, contested migrations, or pretending one database is the answer?

## Exact denominators

| Evidence stream | Count | Notes |
|---|---|---|
| Commercial surfaces surveyed | 35 | 10 top10, 23 register, 2 rejected |
| OSS projects surveyed | 41 | 10 top10, 22 register, 9 rejected |
| Licence bodies actually read (OSS) | 32 of 41 | remaining 9 badge-level, uncontroversial MIT/Apache |
| Local sources read this run | 11 | see `source-register.jsonl` |
| Innovation candidates generated | 35 | 18 commercial + 17 OSS |
| State classes in the taxonomy | 9 | the part's primary deliverable |

Denominator honesty: the ~100-surface target in the program is a target, not a quota.
P09's domain-appropriate denominator is 76 (35 commercial + 41 OSS) because the relevant
population — storage/state products and projects a host could actually bind — is smaller
than 100 once marketing-only and non-embeddable entries are excluded. Padding to 100
would have meant adding surfaces with nothing to establish. Two named surfaces
(Crunchy Data, Elastic Cloud Serverless) could not be verified at all and are marked
rejected/unverified rather than counted as evidence.

## What was established

### 1. The state classification, not the database, is the unit of decision

Commercial practice distinguishes fewer state classes than architecture diagrams assume,
but it distinguishes them *sharply* — vendors price them differently, which is the
honest signal. Nine classes survive: owned transactional, donor-owned (intact),
donor-owned (absorbed), document/collaboration, analytics/read models, search/vector,
files/objects, events, and cache/ephemeral/local. The full ownership table is in
`decision-ledger.json`.

The observation that matters most: **sync and workflow are the two classes where the
vendor owns your state machine, not just your bytes** — and those are exactly where
donor federation is hardest, because you cannot point them at a store you do not
control. That reframes "which database" into "which state machines am I renting".

### 2. Postgres survives as a default and fails as an invariant

A08 (Postgres default for new owned transactional B2B state) is confirmed as *inferred*
and unchallenged by this survey. A09 (every block internally uses Postgres) stays
rejected, and the local reasoning is sharper than the general argument: the cost of
moving a donor is the fork, not the database. Plane's Django ORM emits Postgres-specific
SQL; Documenso and Papermark are Prisma-on-Postgres. Moving them anywhere is rewriting
three data layers and redoing that work on every upstream merge.

### 3. Tenancy is decided by cost-at-rest, not capability

Every surveyed surface *can* do database-per-tenant. Only those that scale idle tenants
to zero can afford it at high tenant counts. Neon recommends project-per-tenant outright;
D1 documents 50k databases per account with tenancy priced at zero; Supabase Pro
explicitly does not scale to zero, which is precisely why its guidance is RLS-first.
Schema-per-tenant is supported nearly everywhere and recommended almost nowhere — Neon
discourages it unless the team is already experienced with it.

For Actionist this yields a selection rule rather than a house style: low-activity
tenants on a scale-to-zero substrate, promotion to shared-RLS when activity justifies
always-on compute.

### 4. The most transferable idea: authorization above the database

ElectricSQL explicitly refuses to codify auth into a database rule system. A host-owned
proxy sets the shape; client subsets may only narrow it, never widen. Algolia
independently proves the adjacent primitive — a signed, unalterable, filter-bearing key
handed to an untrusted client, with the explicit documentation line that per-tenant
indices are unnecessary.

This is the only pattern found that works **without schema access**, which is the
defining constraint when federating donor stores. It suggests a two-kind adapter model
rather than N: donors whose authorization layer the host can reach get in-database RLS;
donors whose it cannot get proxy-enforced shapes.

### 5. Tenant isolation is bespoke work, and that is a finding

The brief asked for multi-tenancy frameworks with real adoption. For a TypeScript host
there are effectively none. Three targeted searches returned sub-5-star starter
templates. The only maintained frameworks with genuine adoption are language-locked:
`archtechx/tenancy` (Laravel, 4.4k stars) and `citusdata/django-multitenant` (822).
Both are useful as design references for the tenant-context lifecycle; neither is
adoptable as a dependency.

Consequence: tenant isolation must be budgeted as owned, tested work. It is the
highest-risk correctness surface in the plane, and no purchase removes it.

### 6. The licence-badge trap is systemic

Reading LICENSE bodies rather than badges produced corrections that would have shipped
wrong deliverables: Citus is AGPL-3.0 (widely misremembered as permissive because
Microsoft owns it); Liquibase is FSL-1.1 while GitHub reports only "Other"; Redpanda
reports `license: null` to the API because its terms live at `licenses/bsl.md`;
Meilisearch is now `MIT AND BUSL-1.1`; MinIO is AGPL-3.0 **and archived**; Elasticsearch's
document-level security — the actual multi-tenancy feature — sits inside the ELv2-only
x-pack; Convex and PowerSync are FSL; Inngest is SSPL.

Three structural traps were checked deliberately because of the Composio failure this
project already absorbed: per-package overrides under a permissive root, meta-repo badges
that do not cover the runtime (Supabase's Apache badge covers `apps/`; the components a
host would run live in separately-verified repos), and a permissive licence on a repo
that is not the live product (Hasura's `graphql-engine` is genuinely Apache-2.0 and is
the v2 engine in maintenance; the current DDN/v3 engine is not published under those
terms). All three patterns were found live.

## Invariants proposed

Seven, with falsifiers, in `first-principles.md` and `decision-ledger.json`. The load-
bearing ones: one authoritative owner per stateful resource; workload shape precedes
store choice; Postgres defaults only for new owned transactional state; cross-owner views
are event-fed read models never cross-owner mutation; capabilities consume typed ports
with ORM inside the adapter; migration authority is release-scoped with a rollback path;
tenant identity is a first-class key from the first migration.

## Contradictions this lane refuses to collapse

Absorption (one schema, real foreign keys) and federation (separate schemas, event-fed
read models) pull in opposite directions, and both are locally *proven correct* — one day
apart, by the same team, for different donors. The resolution is that this is not a
platform choice but a per-capability one made by PackagingProfile. The cost of supporting
both indefinitely is unmeasured and should not be assumed small.

## Open decisions and unknowns

`decision-ledger.json` carries five open decisions. The one this lane added: **what
mechanically prevents a capability from writing a table it does not own?** Candidates are
per-capability database roles with grants matching declared tables, RLS as the single
authorization source binding host service and any API layer alike, or static analysis of
adapter declarations at admission. Proposed as a measured Loop-2 dimension.

Unverified and flagged: Crunchy Data (rate-limited, reported acquisition unconfirmed),
Elastic Cloud Serverless pricing (404), Typesense Cloud pricing, NATS accounts-as-tenancy
(inferred from architecture knowledge, not read — and load-bearing for the
permissive-events recommendation), Temporal namespace-to-tenant mapping (explicitly
unconfirmed by the pricing page), transitive dependency licences for every repo.

## Experiments this feeds

Loop 0 (contract surgery — can a thin DataResourceContract cover three reuse shapes),
Loop 2 (the bake-off, now with a proposed dual-write-prevention dimension), Loop 3
(host absorption, which measures the data category of the adaptation delta).

## Boundary

Nothing was cloned, executed, benchmarked, deployed or admitted. No client-private data
or authenticated vendor access was used. All claims are documentary evidence about
licences, documentation and architecture — not measured performance.
