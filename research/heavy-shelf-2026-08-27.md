# Heavy shelf — mature product-class references
Observed 2026-08-27. Study material for architecture extraction ("approaches, never markup").
Licence deliberately NOT a gate here (Shaan's call 2026-08-27): AGPL/copyleft entries are
study-only references; rewrite patterns, never copy code into a hosted product.

## Finding
The existing 833-repo corpus contains ~5 heavy B2B products; it was built to research
builders (AI frameworks, browser automation), not business apps. The list below merges those
5 with this session's fresh sweeps.

## The shelf (vertical -> product, stars, licence, why it matters)
- CRM: twentyhq/twenty 55.6k AGPL+ent — METADATA-DRIVEN schema (objects/fields as data);
  answers the schema-binding question; the key architecture for client-owned databases.
- No-code business systems: nocobase/nocobase 23.8k other — plugin architecture +
  metadata-driven; closest existing analogue to the Cena builder. (was in corpus)
- Scheduling: calcom/cal.diy 47.9k MIT, 20 pkgs — app-store/app-store-cli = working plugin
  registry at scale; MIT so usable outright.
- Docs/DMS: paperless-ngx 44.6k GPL-3.0.
- ERP: frappe/erpnext 38.5k GPL-3.0; aureuserp 11.8k MIT (modern Laravel).
- Team chat: mattermost 38.9k mixed.
- Support: chatwoot/chatwoot 36.2k MIT-core+EE — conversation/SLA state machines.
- Commerce: bagisto 28k MIT; spree 15.6k BSD-3.
- CRM (Laravel): krayin/laravel-crm 23.7k MIT.
- E-signature: docuseal 18.4k AGPL; documenso 14.8k AGPL, 13 pkgs.
- Surveys/forms: formbricks 12.8k mixed, 17 pkgs.
- Billing platform: polarsource/polar 10.2k Apache-2.0.
- Accounting: akaunting 10.1k mixed (corpus); frappe/books 4.9k AGPL (corpus).
- HR: frappe/hrms 8.7k GPL-3.0; ever-co/ever-gauzy 4.3k AGPL — 22 pkgs + 14 apps, largest
  modular B2B monorepo found.
- Inventory: InvenTree 7.5k MIT.
- Enterprise SaaS glue: boxyhq/saas-starter-kit 4.9k Apache-2.0 — SAML SSO, SCIM, audit logs. (corpus)
- Kanban: kanbn/kan 5.5k AGPL. Scheduling-lite: rallly 5.2k AGPL.
- CRM (full): espocrm 3.3k AGPL — portal module is the canonical customer-portal reference. (corpus)
- Client portal: o2sdev/openselfservice 181 MIT — young but the only portal-native TS template.
- Scaffolding CLI: AmanVarshney01/create-better-t-stack 5.7k MIT — generator-shaped like the builder itself.

## Architecture patterns to extract
1. Metadata-driven schema (twenty, nocobase) — the mechanism for arbitrary client DBs.
2. Plugin/app registry (cal.com app-store, nocobase plugins) — the block-registry precedent.
3. packages/ + apps/ split (next-forge 20, twenty 20, cal.com 20+3, gauzy 22+14,
   formbricks 17+2, documenso 13+3) — the canonical carve.
4. Conversation/SLA state machines (chatwoot), approval flows (docuseal/documenso).

## Boundary
Metadata + public-docs observations only; no capability verified, nothing admitted.
Star counts observed 2026-08-27.

## Tier 2 — the "open-source alternative to X" giants (added same day, Shaan's prompt)
Category-defining products; stars observed 2026-08-27. Most are fair-code/AGPL/split — study-only.
- Workflow automation: n8n 202.5k fair-code; activepieces 24.1k split; automatisch 13.9k; windmill 17.7k
- Backend-as-a-service: supabase 108.4k Apache-2.0; directus 37.6k split (BSL); strapi 73k split
- Notion-class: AppFlowy 76k AGPL; AFFiNE 71.9k split; outline 40.3k BSL; colanode 5k Apache-2.0
- Airtable-class: nocodb 64.8k split; teable 21.7k split; apitable 15.6k AGPL; baserow 5.7k split; mathesar 5.1k GPL
- Project mgmt: plane 58.4k AGPL; openproject 16k GPL-3.0
- Internal-tools builders: ToolJet 40.8k AGPL; budibase 28.2k split; (appsmith/illa/refine in tier 1)
- Analytics: posthog 39.3k split; plausible 28.8k AGPL
- Forms (Typeform-class): heyform 9k AGPL; formbricks 12.8k (tier 1); formio 2.3k OSL; ohmyform 2.9k AGPL stale
- Key patterns this tier adds: n8n/activepieces node-registry model (connector catalogue precedent);
  nocodb/teable/directus DB-introspection -> instant UI (THE client-owned-database mechanism, shipped at scale);
  supabase as the assumed deploy substrate itself.

## Corpus note
These giants were largely ABSENT from the 833-repo corpus because sweep queries were
builder-vocabulary ("lovable clone", "crud generator"), not product-vocabulary ("airtable
alternative"). Vocabulary determines coverage — third confirmed instance of this failure class.
