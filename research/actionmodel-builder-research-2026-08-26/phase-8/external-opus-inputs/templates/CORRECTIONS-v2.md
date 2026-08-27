# Corrections addendum — v2

Observed: 2026-08-27 · Supersedes classification in `template-seed-register.jsonl` (v1, kept intact)
Corrected register: `template-seed-register-v2.jsonl` · Status: research-only, UNEXECUTED, NOT_ADMITTED

The v1 packet was accepted `complete_verified`. It contained four errors found by independent
re-derivation. v1 is preserved unmodified; v2 carries the corrections.

## C-1. AR-07 client portal — verdict REVERSED (gap -> search-artifact)

v1 and my own follow-up reported AR-07 a proven zero. **Wrong.** `o2sdev/openselfservice`
exists: MIT, TypeScript, 181 stars, 33 forks, pushed 2026-08-26, self-described as
"The Open Source Composable Frontend for Customer Portals".

The miss is reproducible and was reproduced twice:

    $ gh search repos "client portal stars:>30" --limit 20 --sort stars
      -> 20 rows, openselfservice ABSENT
    $ gh search repos "customer portal language:TypeScript stars:>10"
      -> RANK 1 = o2sdev/openselfservice | 181 | mit

Cause: `client portal` is lexically dominated on GitHub by the **Interactive Brokers Client
Portal Web API** (Voyz/ibeam 852, Voyz/ibind 445, utilmon/EasyIB 111 — all verified), plus an
Ethereum "portal client" and a Siemens TIA Portal tool. The archetype's real vocabulary is
fragmented across *customer portal*, *self-service*, *client area*, *customer-account*.
GitHub **topics** (`client-portal`, `customer-portal`) bypass the noise entirely.

**Worse than a miss:** 10 v1 seeds contain "customer portal" — **9 are Stripe's hosted billing
page**, a payment-provider product, not a portal you build. Only TS-058 (saeloun/miru-web) is a
genuine client portal, embedded in a time-tracking product. A keyword pass tuned for AR-07
returns 10 hits and reports it well-covered. Any downstream doc claiming AR-07 coverage on
lexical evidence is wrong.

## C-2. AR-08 booking/scheduling — 1 seed -> 0 (fifth empty archetype)

TS-007 `illacloud/illa-builder` was labelled AR-08 from the string "Automate workflows with
schedule or webhook" — a cron trigger, not a booking system. Its AR-03 came from "crm" inside a
feature list. Corrected to AR-02 only. **Empty archetypes: 4 -> 5** (AR-05, AR-07, AR-08, AR-09, AR-10).

## C-3. NOT-A-TEMPLATE — 10 of 70 (14%) are not app starters

Frameworks (refine, react-admin, spree, illa-builder, modern.js, Serenity), a tutorial repo
(prisma-examples), an awesome-list (awesome-generative-ai-apps), a component kit (saas-ui), and a
Laravel package (moonshine). Recorded in v2 as `not_a_template`.

**This is the register's real defect, and it is not the labels.** Of 70 seeds: 10 are not
templates, 21 have no vertical shape, leaving ~39 usable — **28 of which are the same AR-01
auth+billing scaffold**. Seventy rows implies variety that does not exist.

## C-4. Archetype count — 10 -> 11

`research/packs/vertical-model.html` does not contain the 66 use cases; `research/actionmodel-long-run/outputs/verticals/catalogue.json` does. All 66 mapped
with zero invented IDs: **55 map to AR-01..AR-10, 11 require a new archetype, 0 map to none.**

The missing archetype is **AR-11 monitor/publish** — watch an external surface on a schedule,
classify a change, publish a notification. It carries **11 of 66, the largest single bucket**.
It cannot be folded into AR-01 (whose spine is an internal metrics store) or AR-05 (whose spine
is a ticket with an SLA clock): these read competitor sites, CI systems and regulatory pages the
tenant does not own.

Caveat carried forward: **60 of 66 use cases are `coming_soon`** — 91% of the denominator is a
catalogue label with no first-party recipe behind it.

## C-5. Distribution correction (v1 -> v2)

| Archetype | v1 | v2 |
|---|---:|---:|
| AR-00-unmapped | 23 | 21 |
| AR-01 | 27 | 28 |
| AR-02 | 16 | 15 |
| AR-03 | 4 | 3 |
| AR-04 | 5 | 4 |
| AR-06 | 1 | 1 |
| AR-08 | 1 | **0** |
| AR-05 / AR-07 / AR-09 / AR-10 | 0 | 0 |

The histogram barely moves. **That is the trap** — 14 of 70 labels (20%) changed underneath a
nearly-intact distribution.

## C-6. Structural finding — licensing scales with breadth, not vertical

Verified across four archetypes plus a permissive control:

- **Mature vertical apps are copyleft.** E-signature: DocuSeal 18,389 AGPL-3.0; Documenso 14,774
  AGPL-3.0; OpenSign 6,919 open-core split. Support: Zammad/FreeScout/libredesk AGPL. HR: frappe/hrms
  8,679 GPL-3.0; ever-gauzy 4,349 AGPL-3.0.
- **Dev tools are MIT.** refine 35,586 · react-admin 26,915 · open-saas 15,641 · next-forge 7,660 ·
  SaaS-Boilerplate 7,380 — all MIT.
- **Refinement (from AR-09):** pressure scales with **breadth**, not vertical. Narrow scope survives
  permissively — `timeoff-management` MIT 1,042 (leave-only), `jorani` MIT 410 (leave-only) — while the
  one full-scope maintained TS HR system is AGPL. HR also skews **GPL not AGPL**: it self-hosts more,
  so the SaaS loophole is not the threat.

Two projects prohibit our exact use case outright: **Chaskiq** (Commons Clause withholds hosting-for-fee)
and **Tgo** (modified Apache forbids multi-tenant operation). Not obligations to review — direct
prohibitions on the business model.

**Correction to the v1 brief:** Chatwoot is **not** source-available. MIT outside `enterprise/`
with a separate EE licence; GitHub reports NOASSERTION because of the split.

**Correction to a sibling's open item:** `opencats/OpenCATS` shows NOASSERTION but its LICENSE
reads *"available under two licenses: 1) OpenCATS code is under Mozilla Public License 2.0"* —
dual MPL-2.0 / CATS Public License. The most-established OSS ATS is more permissive than its
metadata implies.

## C-7. Competitor shelf sizing

Lovable 204 (69 apps + **135 websites**) · Glide 540 (336 community / 69 first-party) · Retool ~170+ ·
Replit 82 · Bolt 23 first-party designer-built. **Action Model: 0.**

**Double absence — commercially under-served AND no permissive OSS:**
- **E-signature** — one template across every shelf read (Lovable's PDF Signing Tool); zero on Glide's
  540, Bolt, Softr, Budibase, Retool. Absent from *every* taxonomy. OSS half verified AGPL/open-core.
- **Helpdesk** — absent from Glide, Softr, Bolt entirely; permissive OSS vacuum verified.

Nobody carries these because there is nothing permissive to wrap. These are **builds, not curation**.

## Method note

The failure mode this addendum corrects was hit **three times independently** — by the v1 sweep, and
by two agents sent to fix it (token `erp` matching inside unrelated words; a first-pass grep scoring an
Electron boilerplate at "erp:78"). It is cheap to hit and produces confident-looking output. Every v2
classification rests on README prose, not token frequency.

Also observed: `gh api search/repositories` returns **empty rather than erroring** under rate limiting.
Some v1 zero-results may be empty responses rather than genuine absences. The 30/min search ceiling is
shared fleet-wide.

## Boundary

Research-only. No clone, execution, build, or license scan. Declared metadata and public README/LICENSE
text only. Nothing admitted; `block_contract_evaluated: false` on all 70. Every capability claim in the
sources is an author assertion, unverified.

## Still open

`ar10-contract-docs`, `ar01-saas-foundation-read`, `ar02-ar03-crm-admin-read`, `deploy-target-lanes`
have not returned. AR-10's verdict, the decomposability assessments, and the wildcard-subdomain /
deploy-API research remain unresearched here.

---

# Addendum B — lanes returned 2026-08-27 (C-8 .. C-11)

Nine of ten dispatched lanes returned. `ar02-ar03-crm-admin-read` (CRM/admin schema-binding)
did not; that question remains unresearched.

## C-8. METHODOLOGY DEFECT — silent rate-limit zeros (affects every zero in this packet)

`gh` **exits 0 on a search rate-limit 403 and emits no JSON.** A consuming pipeline sees an
empty result set, not an error. Reproduced directly:

    $ for i in 1 2 3; do gh search repos "test query $i" --limit 1 --json fullName >/dev/null 2>&1; echo "exit=$?"; done
    exit=0 / exit=0 / exit=0

The search endpoint is **30 req/min and shared fleet-wide**; one lane reported exhausting it on
its first call. An unpaced batch therefore produces zeros across *every* query simultaneously —
which is the exact signature of `github-sweep/`'s 8 empty lanes.

**Consequence:** any zero in this packet or the original 40-lane sweep may be an empty response
rather than an absence. The v1 empty-lane inventory (C-2 context, §2 of the v1 report) should be
read as *unverified coverage gaps*, never as evidence of market absence. Recommend auditing the
original sweep runner's exit-code/empty-body handling before any zero is cited downstream.

## C-9. METHODOLOGY DEFECT — NOASSERTION drops permissive repos

GitHub's `license.spdx_id` returns `NOASSERTION` for split, dual, or unrecognised licences whose
LICENSE **text** is unambiguous. Confirmed instances: `formkiq/formkiq-core` (MIT),
`mayan-edms/Mayan-EDMS` (Apache-2.0), `luarvic/click2approve` (MIT), `opencats/OpenCATS`
(**dual MPL-2.0 / CATS Public License** — verified, resolving a sibling lane's open item),
`chatwoot/chatwoot` (MIT outside `enterprise/`).

**This packet is affected.** The v1 gate admitted only recognised permissive keys, so it
**silently dropped every repo whose real licence was permissive but whose metadata said
NOASSERTION**. The v2 register is clean of the trap (65 MIT / 4 Apache-2.0 / 1 BSD-3, zero
NOASSERTION) *because* those rows were excluded, not because they were absent.
**The 1,394 → 196 → 70 funnel is an undercount of unknown size.**

## C-10. LICENSING LAW — refined to the sub-archetype

C-6 stated the pattern scales with breadth. AR-10 sharpens it: **it is specific to sub-archetypes
where the hosted service IS the product.**

- **E-signature — near-absolute.** Every project above 37 stars is AGPL: DocuSeal 18,389 AGPL-3.0,
  Documenso 14,774 AGPL-3.0, OpenSign 6,919 AGPL + directory carve-out fencing the hosted surface
  out of the grant. Permissive tier is kysigned (37), click2approve (15), signcraft (6) — all young.
- **DMS — pattern does NOT hold.** Verified mature and permissive: `ciur/papermerge` 2,934
  Apache-2.0, `suitenumerique/drive` 458 MIT, `formkiq/formkiq-core` 161 MIT,
  `mayan-edms/Mayan-EDMS` 834 Apache-2.0.
- **HR — narrow survives, broad does not.** `timeoff-management` MIT 1,042 and `jorani` MIT 410
  are leave-only; the one full-scope maintained TS system (`ever-gauzy` 4,349) is AGPL. HR skews
  **GPL not AGPL** — it self-hosts more, so the SaaS loophole is not the threat.

Best legal-validity candidate found: `esig/dss` (1,025, **LGPL-2.1**) — workable for hosted where
AGPL is not. All conformance claims UNVERIFIED.

**AR-10 verdict: search-artifact, not gap.** Four vocabulary traps, each reproduced: "contract"
is captured by blockchain; `topic:esign` is captured by iOS sideloading; "electronic signature"
returns cryptographic primitives not applications; and **`topic:approval-workflow` has been
colonised** — 1 of 25 top results is business approval, the rest AI-agent HITL gating. That last
is a term whose meaning shifted out from under the archetype.

## C-11. AR-01 — decomposability assessed (documentation-level)

`vercel/next-forge` is the strongest raw material for a block-based builder, verified:

    $ gh api repos/vercel/next-forge/contents/packages --jq '[.[]|select(.type=="dir")]|length'
    20
    -> ai, analytics, auth, cms, collaboration, database, design-system, email, feature-flags,
       internationalization, next-config, notifications, observability, payments, rate-limit,
       security, seo, storage, typescript-config, webhooks
    $ gh api .../migrations/authentication --jq '[.[].name]|join(", ")'
    appwrite.mdx, authjs.mdx, better-auth.mdx, supabase.mdx
    $ gh api .../migrations/database --jq '[.[].name]|join(", ")'
    appwrite.mdx, convex.mdx, drizzle.mdx, edgedb.mdx, planetscale.mdx, prisma-postgres.mdx, supabase.mdx, turso.mdx

It documents the exact Clerk→Supabase and Neon→Supabase migrations, and the auth guide supplies
`Organization`/`OrganizationMember` Prisma models replacing Clerk Organizations. Migration commands
are scoped `--filter @repo/auth` — **the swap does not fan out across the app**, which is the
rollback boundary the Block Contract requires.

**Two caveats that must travel with that recommendation:**

1. **Maintenance.** Verified `contributors`: `haydenbleasel 1270`, `dependabot 124`,
   `davidmytton 7`. HEAD commit `2026-05-28`, ~3 months behind the freshest candidates. The Vercel
   org name does more reputational work than the contribution graph supports; 21 migration guides
   rest on one maintainer.
2. **It is raw material, not a block system.** Its own `updates.mdx`: *"you'll likely need to
   manually merge the changes you've made with the changes from the update."* Package boundaries
   make blocks **carveable, not updatable**. Provenance and rollback machinery must be supplied by
   the builder — which is exactly the gap the Block Contract fills.

Also: `ixartz/SaaS-Boilerplate` (7,380 MIT) has **no `packages/` directory** (verified: root is
`.github .storybook .vscode migrations public skills src tests`) and its README paywalls Stripe
out of the free tier — **the billing block does not exist in the forkable MIT artifact**.
Three of six candidates are eliminated on platform grounds: apptension is Django/AWS, open-saas is
Wasp-compiled (auth is a language construct, not extractable), kriasoft is Cloudflare Workers.

**Limit:** decomposability is NOT verifiable from documentation. Directory listings prove packages
exist as separate entries; they cannot prove those packages do not import each other. No manifests
or import graphs were read. Every decomposability judgement is a documentation-grounded assessment.

## Still open after Addendum B

`ar02-ar03-crm-admin-read` did not return. **Schema-binding — whether a CRM/admin candidate binds
to a fixed schema or generates surfaces from an introspected client database — is the decisive
property for "clients build apps over their own databases", and it remains unresearched.**
`deploy-target-lanes` also did not return; wildcard-subdomain routing and per-build deploy
economics remain unresearched, and those two lanes were empty in the original sweep too.
