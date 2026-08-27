# Finance Operations research lane

**Packet:** AGENT_PACKET v1 — REUSABLE-BLOCKS / Finance Operations  
**Objective:** identify reusable finance-operations products, code, modules, data contracts, and safe adaptation patterns for the Action Model.  
**Date opened:** 2026-08-26  
**Mode:** research-only; no services, credentials, production data, or code changes.  
**Evidence rule:** local artifacts are used to establish prior work and boundaries; external claims require canonical upstream repositories, license files, manifests, schemas, tests, or deployment documentation. Discovery metadata is not source verification.

## Milestones

| Milestone | Status | Evidence |
|---|---|---|
| Local landscape | **complete — 2026-08-26** | Action Model vertical contracts; SISOCRM finance radar; AutoSaaS finance process run; SISOCRM payment/Stripe code; Dispo receipt adapter and Drizzle/Postgres schema; reusable-block contract. |
| Bounded primary-source sweep | **complete — 2026-08-26** | Canonical repository pages, READMEs, license files, architecture/docs, schemas/source paths, tests, and deployment notes were inspected for the ranked set; no candidate is admitted. |
| Ranked lane and adaptation map | **complete — 2026-08-26** | Candidate matrix, source-read dossiers, finance block mapping, confidence bands, and explicit rejection/hold criteria are below. |
| Final recommendation and callback | **complete — 2026-08-26** | Report audit passed; evidence gaps and bounded follow-on sweeps are explicit; coordinator callback was written first, pane-resolved, submitted, and verified. |

## Current posture

Finance Operations is a high-value Action Model archetype, but the local evidence
still describes a workflow hypothesis rather than an implemented vertical:

- The Action Model vertical lane scores finance at 28/35, ahead of operations at
  27/35, while explicitly marking all composite offers unverified.
- The strongest finance offer is invoice-to-cash control: collect invoice/receipt
  evidence, extract fields, reconcile payments, and prepare approval-gated
  follow-up or posting exceptions.
- The local source-of-truth rule is correct: Actionist should hold a derived
  review queue; a client-approved ledger/payment system remains authoritative.
- No local finance candidate has passed the reusable-block admission ladder.

The working research thesis is therefore a composed lane:

1. use a mature accounting/ERP product as a whole-system reference or isolated
   service where its ledger and jurisdictional semantics are valuable;
2. extract only narrow, source-verifiable modules such as receipt ingestion,
   invoice capture, reconciliation, reporting, or approval queues;
3. keep a native Action Model finance control plane for evidence, exception,
   approval, idempotency, read-back, and recovery;
4. do not infer that a finance UI, billing API, or payment processor is a
   general ledger, a close system, or a broker commission system.

## Action Model anchors

| Anchor | Local evidence | Implication for finance research |
|---|---|---|
| Finance priority | research/actionmodel-long-run/outputs/verticals/CURRENT.md and pilot-offers-001.json | Finance is a provisional high-priority pilot family, not a product commitment. |
| Finance job contract | pilot_document_finance in pilot-offers-001.json | Required entities include invoice, receipt, vendor, customer, payment, ledger entry, currency, exception, approval, and message. |
| Authority | pilot offer and reusable-block report | Ledger writes, write-offs, disputes, external chase messages, and final close sign-off require named finance authority. |
| Verification | pilot offer | Hash/source link, schema/totals/currency/duplicate/tolerance checks, post-write read-back, and send receipt are required. |
| Recovery | pilot offer | Quarantine parse failures, preserve snapshots, reopen exceptions, cancel queued sends, and retry by idempotency key. |
| Block contract | design/block-contract.schema.json and reusable-block-framework-report.md | Candidate must expose provenance, ports, data mode, token use, proof, owner, and rollback; the schema is a v0 seam, not an admission. |

## Local-first inventory

### Local finance research and scaffolds

| Asset | What was read | Classification | Reusable-block relevance | Hard boundary / gap |
|---|---|---|---|---|
| /Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/SISOCRM/research/campaigns/gap-radar/04-FINANCE-OPERATIONS.md | Snapshot 2026-07-30; 27 ranked candidates; top-five source-read dossiers; BigCapital, InvoiceShelf, ERPNext, Dolibarr, and Hyperswitch decisions. | Research ledger, not executable code. | Best local seed for candidate families, source URLs, and broker-commission gap. | Lower-ranked rows were not equivalent source verification; no candidate was admitted; stars/activity are discovery signals. |
| /Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/SISOCRM/research/campaigns/gap-radar/04-finance-operations.json | Structured 27-candidate matrix and five source-read dossiers. | Machine-readable research output. | Reusable candidate fields: repository, license, stack, scope, slices, integrations, deployment, data evidence, role, score. | Does not include all block-contract fields: auth/tenant details, tests, exact release commit, rollback, or data sensitivity. |
| /Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/SISOCRM/research/campaigns/business-broker-repo-radar/rescued-tmp-artifacts/sisocrm-finance-local.json | 160 discovery records, including accounting, billing, receipt, ledger, OCR, payments, and irrelevant false positives. | Discovery seed only. | Broad recall and candidate aliases; useful for bounded deduplication. | Contains false positives and stale/metadata-only entries; never use as direct evidence. |
| /Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/AutoSaaS/process-runs/finance-accounting-automation/ | Process run manifest, 30-validation-decision, feature ontology, extraction library, local-reuse CSV, generated implementation scaffold, and validation packet. | Process/scaffold experiment, not finance implementation. | Defines useful finance atoms: invoice capture, bill approval, payment run, bank reconciliation, expense review, receipt matching, journal workflow, close, tax export, cash forecast, budget variance, audit trail, accounting sync. | Manifest says selected competitors 0; validation decision is blocked-pending-validation; build allowed false. Generated UI uses mock rows and a Convex DomainWorkflowHarness, not a verified ledger/data adapter. |
| /Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/AutoSaaS/process-runs/finance-accounting-automation/build-pack/implementation-scaffold/ | InvoiceTable, ReportCard, billing/accounting-sync route scaffolds. | Visual/domain-shell scaffold. | Shows the intended route/component vocabulary and state surfaces. | It is not source-adapted finance code: values are static, the accounting-sync domain scenario is generic, and target compatibility has missing Next/React/Tailwind warnings. |

### Local code and data-boundary precedents

| Asset | Verified local behavior | Classification | Reuse mode | Gap |
|---|---|---|---|---|
| /Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/SISOCRM/modules/siso-docs/packages/backend/server/src/plugins/payment/ | Stripe/RevenueCat subscription service, price lookup, invoice status types, webhook processing, subscription events, quota/entitlement updates, and retry-visible payment-event handling. | Real subscription billing integration. | Adapter/integration reference only. | It models SaaS subscriptions for users/workspaces, not AP/AR, bank reconciliation, general ledger, close, or client finance authority. |
| /Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/SISOCRM/modules/siso-docs/packages/backend/server/migrations/20260604000000_payment_provider_facts/migration.sql | Provider subscriptions and payment events with provider, target type/id, external identifiers, amount/currency, processing status, attempts, errors, metadata, unique external-event identity, and indexes. | Real data-boundary precedent. | Event/idempotency schema reference. | Provider facts are not accounting postings; no double-entry, journal, reconciliation, or tenant/RLS policy for the Action Model. |
| /Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/SISOCRM/modules/siso-docs/packages/backend/server/src/__tests__/payment/ | AVA/Sinon tests cover price lookup, subscriptions, webhook persistence, event handling, and failure/retry visibility. | Real contract/test precedent. | Test-pattern and event-adapter reference. | Tests use mocked Stripe and local test DB; no client-ledger reconciliation or financial close proof. |
| /Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/dispo/src/lib/loyverse/receipts.ts | Zod receipt schema, cursor pagination, receipt lookup, completed receipt creation after payment, explicit immutability warning, and no update/delete surface. | Real external receipt adapter. | Extractable adapter pattern, not accounting module. | Retail POS receipt/revenue capture; Loyverse is source of truth. It has no GL, AP/AR, close, approval, or bank reconciliation. |
| /Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/dispo/src/lib/loyverse/__tests__/receipts.test.ts | Mocked shape tests for minimal/full receipts, passthrough fields, create-body validation, pagination envelope, and function signatures; no live token. | Real adapter-test precedent. | Strong pattern for no-credential contract tests. | Shape tests do not prove external API behavior or accounting correctness. |
| /Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/dispo/src/db/schema.ts | Drizzle Postgres schema; every domain table has tenant_id; UUID keys, timestamptz, numeric(12,2) money, status enums, provider secrets encrypted in tenant_configs. | Real multi-tenant data boundary. | Postgres tenant/schema and encrypted-provider-config reference. | Retail order/reward domain; no RLS proof or finance ledger invariants; plaintext secret comments and provider-specific data need review before reuse. |
| /Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/isso-dashboard/src/entities/account/types.ts | Account means a tracked creator/account in Convex, not a financial account. | False-positive classification. | Do not reuse for chart-of-accounts semantics. | Same name, unrelated domain. |
| /Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/SISOCRM/integrations/contracts/ | Module source, auth handoff, context, routes, events, token mode, lifecycle, and six-condition integration proof. | Generic host integration contract. | Adapter/service boundary reference. | No finance entities, ledger authority, posting semantics, or reconciliation contract. |

### Local conclusions

The laptop contains useful finance-operations seams but no finance system that is
safe to call a reusable block:

- strongest real code seam: Dispo's receipt adapter and tenant-aware Drizzle
  boundary;
- strongest real finance-adjacent data seam: SISOCRM's provider-subscription and
  payment-event tables with external-event uniqueness and retry state;
- strongest research seed: SISOCRM's 27-candidate finance radar and broker
  commission contract;
- strongest process discipline: AutoSaaS's explicit validation block and
  source-replacement warning;
- largest gap: no local double-entry ledger, AP/AR, bank-reconciliation, close,
  approval, or broker-commission implementation has passed the Action Model
  block contract.

The local finance run's generated states and event names must not be promoted to
domain truth. They are a design target awaiting direct-source review.

## Reusable-block mapping rules for this lane

| Finance source shape | Default block classification | Evidence needed before admission |
|---|---|---|
| Complete ERP/accounting suite | Whole-system reference or isolated service | License, jurisdiction, deployment, tenant/auth, ledger invariants, migration/backup, API, tests, and operational owner. |
| Complete billing/invoicing application | Contained service or intact billing module | Invoice/payment state machine, receipts, tax/currency, API, tenancy, auth, migration, test coverage, and license boundary. |
| Payment orchestration/reconciliation engine | Adapter-only or contained service | Processor/webhook contracts, idempotency, settlement/reconciliation model, PCI/security posture, external side effects, and operational runbook. |
| Receipt/OCR/document extraction | Extractable adapter/module | Input/output schema, provenance/hash, human review, confidence/error states, storage/PII handling, no automatic posting. |
| Double-entry ledger core | Adapter-only ledger service or reference | Posting invariants, immutable journal/reversal model, period locks, currency precision, audit chain, permissions, close behavior, and rollback/restore. |
| Approval/close/audit workflow | Extractable workflow module only if state is explicit | Actor/role authority, delegation/quorum, self-approval prevention, immutable events, deadlines, reopen/reversal path, and read-back. |
| UI/dashboard/report package | UI block only | Source/license, token map, typed data port, empty/loading/error states, and no direct financial writes. |
| Personal finance or budget app | Reference-only unless a narrow generic ledger primitive is proven | Domain fit, multi-tenant model, business accounting semantics, and license/maintenance review. |
| Generated scaffold or metadata-only candidate | Reference-only | Must be replaced with canonical source and real behavior evidence. |

## Non-negotiable finance control contract

Any candidate that can create or mutate financial state must expose or preserve:

1. source document and external-record identity;
2. currency, precision, tax, amount, and rounding rules;
3. immutable or append-only event/posting history;
4. explicit draft, approved, posted, paid, reconciled, reversed, and closed states
   where applicable;
5. role/tenant/authority checks at the side-effect boundary;
6. idempotency for webhook, import, payment, and posting retries;
7. reconciliation tolerance and unmatched/exception representation;
8. period-close and reopen/reversal semantics;
9. post-write read-back from the authoritative system;
10. audit record with actor, source, version, time, reason, and correlation key.

No candidate should be mapped directly into a “ledger block” if it only offers
invoice rows, payment statuses, balances, or a dashboard total.

## External sweep scope

The existing local 27-candidate matrix is the discovery baseline. This new
primary-source pass is bounded to:

- whole accounting/ERP: OpenBooks, Accounted, ERPNext, Dolibarr, BigCapital;
- compact billing/AR: InvoiceShelf, dubbl, LineLedger;
- ledger/reconciliation primitives: Blnk, LineLedger, Accounted;
- payment/settlement: Hyperswitch;
- usage/subscription billing: Lago, Kill Bill, OpenMeter;
- receipt/invoice extraction: invoice2data and one structured receipt OCR
  implementation;
- a deliberately small number of lower-maturity or reference-only comparators.

For each serious candidate the report will record canonical source URL, license,
stack, database/data model, APIs/events, authentication/tenant model, tests,
operational risk, reusable-block mode, evidence date, and unknowns. GitHub stars
or search snippets will not be treated as proof.

## Evidence gap register

| Gap | Current status | Consequence |
|---|---|---|
| Action Model host/database/auth contract | Unknown | No tenant or migration choice can be made for a candidate. |
| Broker commission lifecycle | Local contract inferred; no OSS candidate proves forecast → earned → billed → collected → split → settlement. | Native SISO module remains a likely gap; validate against client authority before build. |
| Jurisdiction | Unknown | VAT/tax/close behavior cannot be promoted across UK/EU/US/Canada claims. |
| Source-read commit for every candidate | Partial | Top candidates need immutable commit pins and file-level license review before adaptation. |
| Ledger correctness | Partial | Product README claims need executable invariant/test evidence; no live or production data may be used in this lane. |
| Auth/tenant isolation | Partial | A tenant_id, URL slug, or API key is not sufficient evidence of isolation. |
| Approval authority | Partial | Workflow states are not equivalent to segregation-of-duties or delegated approval rules. |
| Bank feeds/processor reconciliation | Partial | Need import identity, matching rules, settlement/fee/FX treatment, and exception/close behavior. |
| Receipt extraction quality | Partial | OCR/LLM extraction must preserve originals, hashes, confidence, human correction, and no auto-post policy. |
| Operational readiness | Unknown for most new candidates | Compose files and tests do not establish backups, upgrades, security audit, support, or rollback. |
| License and network-service boundary | Partial | AGPL, custom/source-available, extension exceptions, and embedded/API separation require per-candidate review. |

## Primary-source sweep — date and evidence boundary

External repository and official-document checks in this section were performed
on 2026-08-26. The URLs are canonical GitHub repository, README, architecture,
license, test, migration, or source-file paths; they are not search-result
snippets. A page-level read is not the same as a clone, build, security audit,
accounting audit, or production reference. “High” confidence below means the
repository evidence supports the stated fact, not that the software is safe to
deploy or embed.

The local seed was the 2026-07-30 SISOCRM gap-radar snapshot. The new sweep
adds source-read candidates that were not present in that snapshot, especially
OpenBooks, Accounted, LineLedger, Blnk, dubbl, and NavAccounting.

## Candidate matrix

| Rank | Candidate and source | License / stack / data boundary | API, events, auth, tenant | Tests / operations | Safe reuse mode | Exact unknowns and disposition |
|---:|---|---|---|---|---|---|
| 1 | [OpenBooks](https://github.com/braedonsaunders/openbooks), [README](https://github.com/braedonsaunders/openbooks/blob/main/README.md) | AGPL-3.0-or-later. Accounting-first ERP; PostgreSQL-enforced double-entry; numeric(19,4) and decimal-safe values. Compose includes PostgreSQL 16, Redis, MinIO, web, and worker. | REST/schema/reporting and external-event paths are described. App auth plus RLS is documented; organization/entity and role boundaries are present. | Extensive automated/unit/conformance/trust material; worker/web/DB/object-store operations. README expressly says alpha and not independently accounting/security audited. | Whole-system reference or isolated service after an independent threat/control review; do not extract tables or copy the posting engine directly. | Exact commit-pinned migration/API compatibility, jurisdiction/tax coverage, backup/upgrade runbook, and real tenant-isolation proof remain unknown. AGPL network/embedding boundary needs counsel. **Hold, not admitted.** |
| 2 | [Accounted](https://github.com/erp-mafia/accounted), [ARCHITECTURE](https://github.com/erp-mafia/accounted/blob/main/ARCHITECTURE.md), [LICENSE](https://github.com/erp-mafia/accounted/blob/main/LICENSE) | AGPL-3.0 with a documented extension exception. Next/React/TypeScript with Supabase PostgreSQL, RLS, auth/MFA; Swedish accounting/tax orientation. | Writes go through a bookkeeping engine; draft/commit, voucher series, event bus, documented APIs, scoped API keys, and MCP tools with human approval before commit. company_id RLS plus explicit filtering. | Vitest mocked Supabase and real PostgreSQL pg tests; DB triggers for locked periods/retention; extensions are a first-class boundary. | Ledger/control-plane reference; possible contained adapter/extension only after legal and jurisdiction review. | Exact schema/API stability, non-Swedish accounting, deployment ownership, security audit, and extension-exception application to a SISO integration are unknown. **Strong reference; not admitted.** |
| 3 | [LineLedger](https://github.com/lineledger/lineledger), [tests](https://github.com/lineledger/lineledger/tree/main/tests) | AGPL-3.0; Laravel 13/Livewire 4/Flux/Tailwind; MySQL in Compose. Multi-tenant org/company model; GL is source of truth; invoices, bills, receipts, cheques, deposits are required to balance. | App-level org/company boundary; optional OCR/AI and opt-in MCP writes. No stable public integration contract was proven in the inspected README. | PHPUnit/CI and local MySQL paths; proof scenarios cover closing, trial balance, import, rollback, and hashes. Launched 2026-08-09, source-available/as-is, not soliciting external contributions. | Reference or quarantined service for UI/control ideas; not an in-process block. | Public API/versioning, auth threat model, upgrade/support posture, exact license implications for network use, and production validation are unknown. **Hold.** |
| 4 | [BigCapital](https://github.com/bigcapitalhq/bigcapital) | AGPL-3.0; TypeScript/Node/React/SQL/Redis; self-host Docker; accounting, invoicing, expenses, payments, inventory, and reports. Local source-read paths include sales-invoice, expense, and account migrations. | Headless/API-oriented product and payment/bank integrations are described; tenant/auth/RLS boundary was not proven in the inspected README. | Mature-looking repository and test directory, but no independent control audit was found; deployment is a multi-service self-host path. | Whole-product reference or isolated bounded service. Treat local score 84/100 as gap-radar prioritization, not acceptance. | Exact current schema/API contract, tenant isolation, posting invariants, close/reopen semantics, and operational support are unverified. **Reference only.** |
| 5 | [NavAccounting](https://github.com/mnavaid925/NavAccounting), [MIT license](https://github.com/mnavaid925/NavAccounting/blob/main/LICENSE) | MIT; Django 5.1/Bootstrap 5.3. README describes AP/AR/GL, bills, invoices, receipts, cash, bank reconciliation, close checklist, and audit models. | Shared-schema tenant-aware manager/middleware; URL-based tenancy and RBAC are described. Journal flow Draft → Pending → Approved → Posted with JournalApproval. | README describes demo/generated data and default credentials ('admin@navaccounting.com' / 'admin123!'), a material security smell. No test suite or production deployment evidence was established in this sweep. | Feature and workflow reference only until source audit; possible isolated prototype, never direct production reuse. | Database engine, migrations, exact permission enforcement, invariant tests, secret removal, upgrade path, and tenant isolation are unknown. **Low-confidence hold.** |
| 6 | [ERPNext](https://github.com/frappe/erpnext) | GPL-3.0; Frappe Python/JavaScript full-stack; MariaDB/Redis orientation. Broad ERP with accounting DocTypes, sales invoices, payment entries, budgets, and sales-partner commission. | Frappe REST/API and hooks; role/permission framework and document workflows. Whole ERP owns the data model. | Mature project with official development/test structure and deployment docs, but this pass did not prove a narrow finance-module contract or client-specific close controls. | Whole-product reference/service; commission DocTypes/report are useful comparison evidence. | Exact current commission lifecycle, bank-feed/reconciliation behavior, tenant topology, jurisdiction, and GPL boundary for any adapted code are unknown. **Reference, not extract.** |
| 7 | [Dolibarr](https://github.com/Dolibarr/dolibarr) | GPL-3.0-or-later; PHP with MariaDB/MySQL/PostgreSQL; modular ERP/CRM with proposals, invoices, payments, expenses, bookkeeping, and extensions. | REST API, payment modules, hooks, and a modular extension surface are documented. Multi-company/auth configuration needs deployment-specific proof. | Long-lived project with a test directory and deployment documentation; breadth increases upgrade and configuration risk. | Whole-system/module reference or separately operated service; not a copied block. | Exact accounting invariants, tenant isolation, close semantics, and modern API stability are unknown. **Reference.** |
| 8 | [InvoiceShelf](https://github.com/InvoiceShelf/InvoiceShelf) | AGPL-3.0; Laravel/PHP + Vue; SQL support includes PostgreSQL, MySQL/MariaDB, and SQLite. Estimates, invoices, recurring invoices, payments, expenses, receipts. | V1 REST API and token-style access are documented; no AP/GL/close or tenant boundary was proven in the inspected source. | Self-host/deployment docs and active application structure; README did not establish a finance-control test suite. | Small billing/invoice service or UI/API reference; pair with a separately controlled ledger. | Current API stability, approvals, reconciliation rules, tenant isolation, tax/rounding, and license boundary are unknown. **Contained billing candidate, not accounting core.** |
| 9 | [Blnk](https://github.com/blnkfinance/blnk), [reconciliation source](https://github.com/blnkfinance/blnk/blob/main/reconciliation.go) | Apache-2.0; Go financial core/double-entry ledger. It is a ledger/reconciliation primitive, not an AP/AR product. | Developer/API docs and reconciliation source are visible; tenant, auth, storage, event, and deployment contracts were not established from the inspected README. | Reconciliation implementation and tests are present in the repository; operational profile remains unspecified. | Adapter-only ledger/reconciliation primitive, subject to source and invariant review. | PostgreSQL support, tenant isolation, immutable reversal semantics, close controls, idempotency, and production operations are unknown. **Exploratory.** |
| 10 | [invoice2data](https://github.com/invoice-x/invoice2data) | MIT; Python PDF invoice extraction using templates, with optional AI/template-generation guidance. No finance database or auth boundary. | Library input/output; no event, tenant, or permission model. | Narrow parser component with project tests/docs, but extraction correctness depends on templates and document classes. | Extractable parser/adapter behind immutable-original storage, schema validation, confidence, and human review. | OCR/scanned-PDF accuracy, locale/tax coverage, duplicate identity, PII handling, and template maintenance are unknown. **Best narrow extraction seam; never auto-post by itself.** |
| 11 | [Hyperswitch](https://github.com/juspay/hyperswitch) | Apache-2.0; Rust payment orchestration with connectors, payment intents/attempts, payouts, routing, webhooks; local radar identifies PostgreSQL/Redis. | Connector APIs, webhooks, routing, retries, and merchant/provider concepts; not a general ledger or close system. | Large multi-service deployment and many connector paths; PCI/provider/network failure surface is high. | Separately operated payment orchestration service or adapter; do not embed into a finance block. | Current storage/auth/tenant deployment, settlement accounting, fee/FX treatment, rollback, and operational ownership are unknown. **High-risk service reference.** |
| 12 | [dubbl](https://github.com/dubbl-org/dubbl) | Apache-2.0; API-first Node 20/PostgreSQL 15+/Drizzle. README lists double-entry, invoicing/quotes, AP bills/PO, bank reconciliation, expenses/receipt OCR/approval, budgets, tax, reports, and audit. | REST/API keys and MCP OAuth 2.1 are described; tenant isolation and event semantics were not found in the inspected source. | Docker and Trigger jobs; 39-star/early project signal and no test evidence in the source-read page make maturity uncertain. | Exploratory reference only; no direct adaptation. | Exact schema, auth/tenant enforcement, invariant tests, license provenance, operational support, and API stability are unknown. **Low-confidence hold.** |
| 13 | [Lago](https://github.com/getlago/lago) | AGPL-3.0; usage-based billing platform; local radar records Ruby/Go/React with PostgreSQL/Redis. | API/webhooks and metered events; subscription/usage invoices rather than AP/GL/close. | Multi-service billing operations and event retries; not finance-control evidence. | Usage-billing service/adapter when a client already owns the ledger. | Current event idempotency, tenant boundary, tax/settlement, and production operations are out of scope for this lane. **Adapter-only.** |
| 14 | [Kill Bill](https://github.com/killbill/killbill) and [OpenMeter](https://github.com/openmeterio/openmeter) | Kill Bill: Apache-2.0, Java modular subscription billing. OpenMeter: Apache-2.0, Go event metering with Kafka/ClickHouse/PostgreSQL/Redis/Svix in the documented architecture. | APIs/plugins/webhooks or event ingestion; neither is an AP/AR/GL/close system. | Mature modularity for billing/metering but high operational coupling; OpenMeter requires an event/stream platform. | Service/adapter-only for usage or subscription facts. | Finance posting, tenant/auth, close, reconciliation, and jurisdiction contracts are not provided by these systems. **Do not treat as Finance Ops cores.** |
| 15 | [OpenReceipts](https://github.com/yousef469/OpenReceipts), [receipt-scanner](https://github.com/sarmakska/receipt-scanner), and [receipts-tracker](https://github.com/joseph-ayodele/receipts-tracker) | Small receipt/OCR/LLM tools; OpenReceipts is MIT, while the latter two’s license/production guarantees were not established in this pass. External AI/API and export/storage assumptions vary. | File upload/extraction/export or Supabase/Xero/QB/n8n integrations; no finance authority, tenant, approval, or immutable posting contract. | OpenReceipts has low visible maturity; the other tools are starters/utility applications with incomplete operational evidence. | Visual/parser/adapter reference only, behind a quarantine and human-correction boundary. | License, model/data handling, OCR accuracy, retention, security, tests, and duplicate identity are unknown for most. **Reject as core; narrow evidence only.** |

### Source-read dossiers for the highest-leverage candidates

#### OpenBooks — strongest control-contract evidence, weakest maturity claim

The [README](https://github.com/braedonsaunders/openbooks/blob/main/README.md)
states that the project is an accounting-first ERP, uses PostgreSQL-enforced
double-entry, rejects unbalanced postings and postings to closed periods, and
uses precise numeric values. It describes AR/AP, approvals, OCR adapters,
bank import/reconciliation, close, audit, idempotent posting and external
events, plus a Compose topology with PostgreSQL, Redis, MinIO, web, and worker.
The same document explicitly labels the project alpha, says there has been no
independent accounting or security audit, and lists production requirements
such as TLS, backups, monitoring, secrets, retention, and network isolation.

The [Trust matrix](https://github.com/braedonsaunders/openbooks/blob/main/TRUST.md)
and [audit controls](https://github.com/braedonsaunders/openbooks/blob/main/AUDIT-CONTROLS.md)
are useful evidence artifacts because they make invariants and control claims
reviewable. They do not turn a claim into an admission. The safe mode is:
run a version-pinned copy as a quarantined reference/service in a disposable
finance sandbox, feed it synthetic mixed invoices/receipts, compare its
outputs to a client-authoritative ledger, and retain only a separately owned
adapter if all read-back and rollback gates pass. No source tables, migrations,
or posting code should be copied before a commit-pinned license and security
review.

#### Accounted — unusually clear write boundary and extension model

The [architecture document](https://github.com/erp-mafia/accounted/blob/main/ARCHITECTURE.md)
describes Supabase PostgreSQL with RLS and auth/MFA, company_id isolation,
an all-writes-through-bookkeeping-engine rule, draft/commit semantics,
atomic voucher series, balanced entries, reversal/storno instead of mutation,
locked periods, retention triggers, an event bus, documented APIs, scoped API
keys, and human approval before MCP commits. It also documents tests using
mocked Supabase and real PostgreSQL pg-test files. This is substantially better
evidence than a UI that merely exposes invoice or payment forms.

Its Swedish accounting/tax orientation is a boundary, not a detail to paper
over. The [AGPL license](https://github.com/erp-mafia/accounted/blob/main/LICENSE)
and extension exception need an explicit legal interpretation for any network
service, fork, or adapter. The reusable unit is most plausibly a reference
contract for posting/period controls or a separately operated integration, not
an extracted table set. The exact commit, schema stability, non-Swedish
behavior, and operational ownership remain open.

#### LineLedger — promising proof-oriented reference, very new

The [repository](https://github.com/lineledger/lineledger) describes an
AGPL-licensed Laravel/Livewire finance application with a multi-tenant
organization/company model, GL as source of truth, AP/AR, banking and
reconciliation, budgets, audit hash chains, optional OCR/AI, and opt-in MCP
writes. The [tests and proof material](https://github.com/lineledger/lineledger/tree/main/tests)
include close/trial-balance/import scenarios, hashes, and transaction rollback.
Its documented Compose path uses MySQL, not PostgreSQL.

The project’s launch date (2026-08-09 in the inspected repository material),
source-available/as-is posture, and statement that it is not soliciting
external contributions make it a useful control-pattern reference but a poor
dependency assumption. The no-build conclusion here is evidence-based:
public API/versioning, auth threat model, upgrade support, jurisdiction,
and independent production validation were not proven.

#### BigCapital, ERPNext, Dolibarr, and InvoiceShelf — breadth with extraction cost

The local [SISOCRM finance radar](/Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/SISOCRM/research/campaigns/gap-radar/04-FINANCE-OPERATIONS.md)
already ranked BigCapital and InvoiceShelf as the most useful broad and
small-module references, with ERPNext and Dolibarr as mature ERP comparisons.
Canonical upstream sources confirm their broad product roles:
[BigCapital](https://github.com/bigcapitalhq/bigcapital) is an AGPL
accounting/inventory/invoicing product with self-host deployment and a
headless/API orientation; [ERPNext](https://github.com/frappe/erpnext) is a
GPL Frappe ERP with accounting DocTypes, REST, and hooks; [Dolibarr](https://github.com/Dolibarr/dolibarr)
is a GPL modular PHP ERP/CRM with accounting and payment modules; and
[InvoiceShelf](https://github.com/InvoiceShelf/InvoiceShelf) is an AGPL
Laravel/Vue invoicing, payments, expenses, and receipts application with a
documented V1 REST API.

The source-level seams that are worth reading, not copying, are:
[BigCapital sales-invoice migration](https://github.com/bigcapitalhq/bigcapital/blob/develop/packages/server/src/database/tenant/migrations/20200715193633_create_sale_invoices_table.ts),
[BigCapital expense migration](https://github.com/bigcapitalhq/bigcapital/blob/develop/packages/server/src/database/tenant/migrations/20200105014405_create_expenses_table.ts),
[ERPNext Sales Invoice DocType](https://github.com/frappe/erpnext/blob/develop/erpnext/accounts/doctype/sales_invoice/sales_invoice.json),
[ERPNext sales-partner commission report](https://github.com/frappe/erpnext/blob/develop/erpnext/selling/report/sales_partner_commission_summary/sales_partner_commission_summary.py),
[Dolibarr invoice class](https://github.com/Dolibarr/dolibarr/blob/develop/htdocs/compta/facture/class/facture.class.php),
and [InvoiceShelf invoice migration](https://github.com/InvoiceShelf/InvoiceShelf/blob/3.x/database/migrations/2017_04_12_090759_create_invoices_table.php).
None of those source paths proves that a SISO client’s tax, approval,
tenant, bank, or close rules match. Broad ERP extraction is therefore
rejected as the smallest first move.

#### Narrow primitives — Blnk and invoice2data

[Blnk](https://github.com/blnkfinance/blnk) is the cleanest license fit among
the ledger primitives reviewed: Apache-2.0 and a Go reconciliation/ledger
core with implementation and test files. Its README/docs pass did not prove
PostgreSQL, tenancy, auth, immutable reversal, or period-close semantics. It
can be investigated as an adapter target, but not admitted as a ledger without
those tests.

[invoice2data](https://github.com/invoice-x/invoice2data) is a genuinely
narrow extractable library: PDF invoice text/field extraction driven by
templates, with optional AI/template-generation guidance, and MIT licensing.
It can sit behind an evidence-preserving intake block. It cannot decide
whether an invoice is authoritative, matched, approved, posted, paid, or
closed. The first useful finance block is therefore an adapter plus quarantine,
not invoice2data alone.

## Finance reusable-block mapping

The Action Model block contract requires a block to declare: source/provenance,
inputs and outputs, data owner, auth/tenant boundary, side effects, invariant
tests, observability, rollback, and a named owner. Finance adds accounting
controls that are mandatory for admission:

| Contract area | Finance-specific acceptance evidence | What automation may do | What remains human/client authority |
|---|---|---|---|
| Source and identity | Original artifact URI, content hash, source system ID, received/occurred time, legal entity, currency, locale, and provenance chain | Import, hash, normalize, detect likely duplicates | Decide whether an artifact is authoritative or legally relevant |
| Schema and precision | Versioned invoice/receipt/payment/entry schema; decimal precision; tax and rounding policy; timezone; required fields | Parse, validate, map, and quarantine invalid records | Approve policy changes and jurisdictional interpretation |
| Matching and reconciliation | Deterministic keys plus documented tolerance; one-to-many/many-to-one rules; unmatched and duplicate states; idempotency key | Propose matches, calculate differences, produce exception queues | Resolve ambiguous matches, write-offs, FX/fee treatment, and settlement authority |
| Posting and close | Balanced debit/credit, immutable committed entry, reversal instead of edit/delete, period lock, reopen authority, read-back | Stage drafts and produce a proof package | Approve commit, reopen, close, write-off, dispute, or external communication |
| Approval and segregation | Named approver roles, delegation expiry, separation of preparation/approval, decision/audit event | Route and remind; enforce state transitions | Finance owner approves material side effects |
| Evidence and recovery | Append-only audit/event chain, source links, verification receipts, snapshot/restore rehearsal, cancel/reopen path | Record every transition and retry safely | Own incident response and recovery decisions |
| Ownership and change | License/provenance record, pinned version, dependency SBOM, contract tests, visual tests where UI is reused, and named owner | Run checks and report drift | Accept releases and own vendor/client compatibility |

### Classification rules

| Reusable-block mode | Admission meaning | Candidates that can reach it in principle |
|---|---|---|
| Whole-system reference | Learn domain vocabulary, invariants, workflows, and boundaries; do not copy product internals | OpenBooks, Accounted, ERPNext, Dolibarr, LineLedger, BigCapital |
| Separately operated contained service | A version-pinned product owns a bounded domain and integrates through a tested contract; client ledger/authority remains explicit | OpenBooks, Accounted, BigCapital, InvoiceShelf, Hyperswitch, Lago |
| Extractable module/adapter | A narrow library or integration has a small interface, no hidden authority, and can be wrapped with SISO evidence/approval | invoice2data; Blnk only after storage/tenant/invariant proof; local Dispo receipt adapter as a pattern |
| Component/visual reference | UI patterns or generated scaffolds inform presentation but do not establish finance semantics | AutoSaaS generated finance scaffold; NavAccounting screens; ERP/receipt UI |
| Adapter-only | Converts external events/documents into a controlled internal contract; does not own posting or close | Hyperswitch, OpenMeter, Lago/Kill Bill, payment-provider code, OCR tools |
| Reject for this lane | Insufficient license, maturity, control evidence, or wrong domain for a first finance block | OpenReceipts/utility OCR as core; raw generated mocks; personal-finance apps; unverified new apps |

## Ranked short list and decision posture

This ranking is a research queue, not a build recommendation. It weights
control evidence, boundary clarity, license fit, extraction surface, and
operational burden. It does not use stars, download counts, or a README claim
as a substitute for verification.

1. **OpenBooks** — best current source-read evidence for double-entry,
   approvals, close, reconciliation, idempotency, audit, and deployment
   controls; alpha and AGPL make it a sandbox/reference first.
2. **Accounted** — clearest write boundary, RLS, reversal/period controls,
   extension event bus, and real-PostgreSQL test evidence; Swedish scope and
   AGPL exception require legal/jurisdiction review.
3. **LineLedger** — good proof-oriented control examples and tenant/GL
   vocabulary; too new and MySQL/source-available for direct admission.
4. **BigCapital** — broad, locally researched, and useful as an accounting
   product reference; license and tenant/ledger proof make extraction costly.
5. **InvoiceShelf** — the most plausible compact billing reference; it is not
   a reconciled accounting core.
6. **Blnk** — potentially useful Apache ledger/reconciliation primitive, but
   storage/tenant/auth/close evidence is incomplete.
7. **ERPNext / Dolibarr** — mature whole-system references, not smallest
   extractable blocks; useful for commission and module taxonomy.
8. **invoice2data** — strongest narrow extraction candidate, provided that
   quarantine, confidence, human review, and source hash are supplied by SISO.
9. **Hyperswitch / Lago / Kill Bill / OpenMeter** — useful separately operated
   integration or metering services, outside the finance-control core.
10. **NavAccounting / dubbl / small OCR tools** — inspect only through bounded
   source audits; current evidence does not support adoption.

No candidate passes admission. The smallest evidence-backed pilot shape is a
native, approval-gated **finance evidence and reconciliation block** with
invoice/receipt intake, hash/provenance, normalized fields, deterministic
match proposals, exception queue, and read-back verification. It may use
invoice2data or a client-approved adapter for parsing. It must stage, never
auto-post or auto-send, until a named finance owner approves. A ledger or
payment system supplied by the client remains the source of truth.

The local SISOCRM payment event boundary is a useful adapter pattern, not a
ledger: external provider IDs, event type, amount, currency, occurred time,
processing state, attempts, errors, and metadata are persisted with duplicate
guards. The local Dispo receipt boundary is a useful extraction pattern:
Zod validates source receipts and receipt creation is post-payment and
immutable. These local patterns are stronger first-pilot building material
than copying a broad ERP.

## Commission-specific gap

The local radar’s commission lane remains unfilled by the serious candidates.
ERPNext proves sales-partner commission fields/reporting, but this sweep did
not find a complete broker lifecycle with forecast → earned → billed →
collected → split → settlement, hold periods, referral/co-broker splits,
client approval, and ledger reconciliation. That gap should remain an explicit
native domain contract if client evidence confirms the need:

commission_plan → entitlement_event → earned_state → invoice_or_receivable →
collection_event → split_obligation → settlement → reversal/adjustment

Every transition needs source identity, effective date, currency/precision,
approval authority, idempotency, audit, and rollback/reversal semantics. This
is a gap statement, not authorization to build it.

## Coverage ledger

| Taxonomy / source class | Covered in this pass | Primary evidence level | Confidence | Unsearched or partial area | Bounded follow-on sweep |
|---|---|---|---|---|---|
| Full accounting ERP / GL / close | OpenBooks, Accounted, LineLedger, BigCapital, ERPNext, Dolibarr, NavAccounting | README plus selected architecture/source/test/deployment pages; no builds | High for stated repo facts; medium/low for safety | Jurisdiction-specific tax, payroll, statutory filings, bank-feed production behavior | Inspect at most 3 candidates; pin commits, read migrations and close/post tests, compare one synthetic 20-document fixture |
| Compact invoicing / AP-AR | InvoiceShelf, dubbl, BigCapital, ERPNext | README/API/license and selected source paths | Medium | Approval segregation, tax/rounding, tenant isolation, write idempotency | One compact product plus one library; require API contract and rollback/read-back tests |
| Ledger/reconciliation primitive | Blnk, OpenBooks, Accounted | README/source/architecture/test pointers | Medium | PostgreSQL/RLS/tenant, period locks, reversals, exact event model | Read one commit’s schema and reconciliation tests; reject without executable balanced-entry and duplicate-event probes |
| Payment orchestration / provider facts | local SISOCRM payment plugin, Hyperswitch | Local source/migration/tests plus upstream README/docs | High for local facts; medium for upstream | Settlement, fees, FX, chargebacks, provider outage/replay behavior | One adapter pass against synthetic provider events; no credentials or live webhooks |
| Receipt/OCR/document extraction | local Dispo receipt adapter, invoice2data, OpenReceipts, receipt-scanner, receipts-tracker | Local source/tests plus upstream README/license pages | High for local boundary; medium/low for OSS utilities | OCR accuracy, PII retention, duplicate identity, human correction, model provenance | Compare 20 synthetic/masked documents across two parsers; measure field accuracy and quarantine rate |
| Usage/subscription billing | Lago, Kill Bill, OpenMeter | README/docs/repo structure | Medium for scope; low for finance-core fit | Posting, close, AP/AR, authority | Exclude from first pilot; revisit only if client billing events are a proven source |
| Personal finance / lightweight trackers | Firefly, Actual, other local radar entries | Local radar metadata only in this pass | Low | Not aligned to client AP/AR/close authority | Do not spend next sweep unless a client job explicitly requires it |
| Design-to-code / generated UI | AutoSaaS finance scaffolds, local component/registry pipeline | Local manifests, validation, generated code | High that they are scaffolds; zero as finance proof | Visual fidelity, interaction contracts, real data, accessibility, provenance | Use only as visual reference; run visual/DOM checks after a real contract exists |
| Commission / revenue share | ERPNext report; local Action Model gap radar | One upstream report plus local research | Medium for the gap; low for reusable coverage | Earned/collected/split/settlement lifecycle and jurisdiction | Separate 1-day bounded domain sweep after client authority is known |
| License/provenance/dependency | Repository LICENSE pages, local provenance schemas/process docs | Partial; no legal opinion or complete SBOM | Medium | Transitive licenses, network copyleft, generated-code provenance, contributor terms | Pin commit, collect SPDX/SBOM, review network/fork/adapter boundary before any code reuse |
| Operations / rollback / ownership | OpenBooks TRUST/deployment notes; LineLedger proof docs; local process gates | Documentation only; no services started | Medium for documented claims, low for operational readiness | Backup restore, upgrades, incident response, support, rollback rehearsal | Require disposable sandbox rehearsal owned by a named operator; otherwise reject |

### Coverage limits and unknowns

This is intentionally a bounded sweep, not an exhaustive catalogue. It does
not cover every country’s tax/accounting regime, payroll, procurement suites,
commercial products, bank-feed licensing, OCR benchmark datasets, or the
long tail of GitHub projects. GitHub search ranking is discovery input only.
The current corpus is biased toward repositories with canonical READMEs and
visible source; inaccessible, archived, private, or credential-gated systems
are not silently treated as absent.

The following remain explicit unknowns rather than conclusions:

- the Action Model’s final host, tenant, auth, migration, and event contracts;
- the client legal entity, country, tax regime, chart of accounts, fiscal
  calendar, materiality threshold, and approval delegation;
- whether any candidate’s stated controls survive a pinned build and a
  synthetic adversarial fixture;
- exact API/schema stability and version compatibility for every candidate;
- backup/restore, security, support, upgrade, incident, and deletion guarantees;
- legal interpretation of AGPL/GPL, Accounted’s extension exception, and
  source-available/as-is projects in a networked or embedded adaptation;
- OCR/LLM field accuracy, model training/data retention, and provenance;
- fees, FX, settlement, disputes, and bank-feed authority;
- client ownership for source connections, queues, adapters, and rollback.

## Admission, staged adaptation, and rejection gates

### Admission

A candidate or module may enter a disposable evidence sandbox only when its
canonical source, license, commit, dependency provenance, data owner,
tenant/auth boundary, deployment shape, and rollback owner are recorded. The
candidate must expose a narrow contract that can be tested without client
credentials or production data. Admission is not production approval.

### Staged adaptation

1. **Characterize:** pin source and license; read schemas, migrations, APIs,
   tests, deployment docs, and control claims; create a provenance manifest.
2. **Wrap:** place the candidate behind an adapter with explicit
   SourceArtifact, NormalizedDocument, MatchProposal, Exception, Approval,
   and VerificationReceipt records. Preserve originals and hashes.
3. **Shadow:** feed synthetic or masked fixtures; compare extracted fields,
   totals, currency, duplicate identity, match decisions, and exception
   states to a known oracle. No external writes.
4. **Approve:** add contract tests for balanced/immutable/idempotent behavior,
   approval separation, close/reopen, retries, and read-back. Add visual
   regression only for reused UI, and dependency/license/provenance checks
   on every pinned release.
5. **Pilot:** permit staged ledger or queue writes only with a named finance
   owner and explicit authority; require audit events, replay safety,
   quarantine, snapshot/restore, cancel/reopen, and a rollback rehearsal.
6. **Promote or roll back:** promote only on measured gates; otherwise retain
   the adapter/reference and revert the version-pinned integration without
   deleting source evidence or audit records.

### Rejection

Reject a candidate for this lane when its license or provenance cannot be
resolved; its data authority is ambiguous; it lacks a testable tenant/auth
boundary; it mutates committed financial facts without reversals; it cannot
prove balanced/idempotent/period-locked behavior where applicable; it requires
live credentials to verify its core contract; it has hidden external AI/data
retention; it is only a visual scaffold; or its operations/rollback owner is
unknown. A candidate may be rejected for the first pilot while remaining a
useful whole-system reference.

## Smallest first-pilot framework

The smallest defensible pilot is a **read-only-to-staged finance evidence
block**, not an ERP migration:

- **Input adapters:** approved inbox/drive artifacts, masked bank/payment
  exports, and client-approved receipt/invoice parsers.
- **Token/data layer:** portable semantic tokens for status, surface,
  typography, spacing, density, focus, and semantic finance states
  (neutral, needs-review, approved, matched, exception, blocked, posted,
  reversed). Tokens remain presentation metadata; monetary precision,
  currency, tax, and states belong to versioned data schemas.
- **Canonical records:** SourceArtifact, Invoice, Receipt, Payment,
  NormalizedLine, MatchProposal, Exception, Approval, StagedEntry,
  VerificationReceipt, and AuditEvent. The client ledger/payment system is
  authoritative; the Action Model stores derived state plus evidence links.
- **Database boundary:** use a Postgres adapter only for the Action Model’s
  staging, queue, evidence, idempotency, and audit records. Do not mirror a
  client ledger as a second authority. Use tenant_id, source_system,
  source_external_id, content_hash, currency, decimal monetary fields,
  occurred_at, status, version, and immutable event IDs; enforce uniqueness
  and append-only/auditable transitions in the adapter.
- **Test gates:** schema/contract tests; source-hash and duplicate tests;
  decimal/tax/rounding tests; matching/tolerance tests; balanced-entry and
  closed-period tests when staging ledger entries; approval/segregation tests;
  retry/idempotency tests; read-back/verification tests; audit/recovery tests;
  dependency/license/SBOM/provenance checks; and visual/DOM regression only
  for components that actually cross the reusable UI boundary.
- **Rollback and ownership:** every adapter release has a pinned source,
  migration/version record, rollback owner, restore point, and disable switch.
  Quarantine parse/match failures, reopen exceptions, reverse staged entries,
  cancel drafts, and preserve audit/source evidence. The finance data owner
  approves external sends, writes, write-offs, disputes, and close.

This framework is the recommendation for the research lane only. It does not
authorize a build, production connection, ledger migration, or candidate
admission. The first follow-on decision must be client authority and
jurisdiction discovery, followed by one bounded synthetic-source comparison.

## Final recommendation

Do not choose an OSS finance system as the Action Model’s universal reusable
block. Record OpenBooks and Accounted as the highest-value control-contract
references, LineLedger and BigCapital as secondary product references,
InvoiceShelf as a compact billing reference, Blnk/invoice2data as narrow
adapter candidates, and ERPNext/Dolibarr as whole-system/commission
comparators. Keep all of them unadmitted until the gates above are evidenced.

Proceed only with a small, client-authoritative, Postgres-backed staging and
evidence boundary if a later build decision is made. The evidence currently
supports a finance intake/reconciliation/approval control plane; it does not
support automatic posting, close, write-offs, settlement, or commission
calculation across arbitrary clients.

## Coordinator callback

Report written at the requested path after the local inventory, primary-source
matrix, ranking, coverage ledger, adaptation gates, and first-pilot framework
were added. The callback must be sent only after re-resolving the coordinator
pane; it should state: no candidate admitted, OpenBooks/Accounted are the
strongest control references, invoice2data and the local receipt/payment
boundaries are the narrowest adapter patterns, and jurisdiction/authority/
tenant/license/operations remain gates.
