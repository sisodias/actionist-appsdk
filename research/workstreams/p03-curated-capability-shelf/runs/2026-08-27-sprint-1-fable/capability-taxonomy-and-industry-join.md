# P03 — capability taxonomy, 17-industry join, and overlap model

Lane: ACTIONIST-S1-L2-SUPPLY · Run: 2026-08-27-sprint-1-fable · Observed: 2026-08-27
Status: synthesis from audited prior evidence; denominator surveys land separately in draft-top-repos.jsonl / draft-top-companies.jsonl.

## 1. Capability-kind taxonomy (the shelf's row unit)

A shelf entry is a CAPABILITY KIND, supplied by one or more sources (OSS repo, commercial vendor, local asset), each with a reuse shape. This inverts the prior corpora, which were repo-rowed. 24 kinds, grouped by plane:

**Data & records:** spreadsheet-database (Airtable-like), notes/docs (Notion-like), file/object management, search, analytics/BI embed.
**Workflow & authority:** case/workflow state machine, approvals, forms/surveys, e-signature, project/task management, scheduling/calendar.
**Communication:** support desk/ticketing, messaging/notifications, email infra, chat/comments/presence.
**Commercial spine:** CRM, billing/payments, inventory/commerce.
**Boundary & platform:** auth/identity, client portal shell, connectors/iPaaS, document generation/PDF, LMS/learning, field operations.

## 2. Industry → capability join (17 industries × capability kinds)

Derived from the Phase-8 archetype map (primary/secondary per industry) + the 12-atom demand table (niche-atom-block-join §2.3). Method: an industry needs a kind if its primary or secondary archetype's data spine requires it, or its catalogue atoms name it.

Universal (needed by 17/17): auth/identity, CRM-lite (party records), messaging/notifications, forms/intake, file/document management, reporting/analytics.
Near-universal (≥12/17): case/workflow state machine (11 primary+secondary per archetype map; adding atom-level workflow demand → 15/17), scheduling (10/17), client portal (12/17 via portal-secondary plus document-collection atoms), approvals (13/17 via approval_publish atom), document generation (12/17).
Clustered: billing/payments (8/17), e-signature (7/17 — law, mortgage, insurance, real estate, property, construction, accounting), inventory (3/17), LMS (2/17), field ops (3/17), support desk (5/17), spreadsheet-database as end-user surface (6/17), search beyond record lookup (4/17).

## 3. Commodity / scarce / missing classification

**Commodity** (deep OSS + deep commercial supply; selection problem, not sourcing problem):
CRM, admin dashboards/scaffolds, forms, auth/identity, analytics embeds, support desk, notifications, email infra, docs/notes engines, spreadsheet-database engines, connectors (3 catalogues measured: OpenConnector 1,445 providers/15,156 actions; Activepieces 761 pieces; Nango 982 providers).

**Scarce** (demand-rich, clean-supply-thin — confirmed by Phase-8 shelf inversion finding):
- Case/workflow spine: closest OSS fits are copyleft (Documenso AGPL-3.0, frappe/hrms GPL-3.0); permissive candidates are scaffolds without domain state machines.
- Client portal (untrusted external identity + scoped read + request submission): no credible permissive JS/TS candidate cleared Phase-8 gates.
- E-signature with clean rights: Documenso is AGPL; commercial (DocuSign-class) is priced per-envelope.
- Field operations (offline capture + evidence): no shelf row at all in Phase-8 (0 rows).
- LMS/learning with permissive license: frappe/lms AGPL, chamilo GPL, pupilfirst NOASSERTION — all holds.

**Missing** (no acceptable source in any lane at current evidence):
- Industry-specific compliance overlays (trust accounting, PHI consent gates, statutory deadline clocks) — custom-delta territory by design.
- Tenant-safe connector connection store (OpenConnector's failed the tenancy falsifier; must be owned).
- Host chrome: Actionist identity/settings/navigation layer — definitionally owned, P09-P11 lanes' scope, cited read-only here.

## 4. Repo overlap model (composite supply)

One repo may supply many kinds; shelf must decompose. Overlap classes with known exemplars from audited evidence:

| Overlap class | Pattern | Exemplars (evidence: Phase-8 shelf + connector research + SISOCRM receipts) |
|---|---|---|
| Full-app composite | connectors + UI + data + workflow + host chrome in one repo | Twenty (CRM+pipeline+notes+API), Chatwoot (desk+inbox+automation+reports), cal.com (scheduling+billing+workflows+embeds) |
| Platform composite | data engine + UI + plugin system | Teable, NocoBase, AFFiNE, Appsmith-class |
| Engine + catalogue | runtime + provider/connector catalogue | Activepieces (workflow engine + 761 pieces), OpenConnector (OAuth engine + 1,445 providers) |
| Scaffold composite | auth + billing + admin, no domain model | open-saas, SaaS-Boilerplate, production-saas-starter |
| Single-capability | one kind, extractable | invoify (invoice gen), formbricks (forms/surveys), react-email-class |

Implication: counting repos undercounts supply for commodity kinds (each composite ships 3-6 kinds) and OVERCOUNTS for scarce kinds (the case_workflow inside Chatwoot is desk-specific, not a general spine). The overlap graph in the final report quantifies this from the two survey files: nodes = repos + kinds; edges = supplies(repo, kind); stats = kinds-per-repo distribution, repos-per-kind distribution, and the scarce-kind exposure list.

## 5. Provenance lanes (kept distinct per dispatch)

1. `phase2_expansion_corpus` — 500 repos, immutable, metadata-grade.
2. `phase8_template_shelf` — 17 pinned rows, license-verified 2026-08-27.
3. `s1l2_oss_survey` — this run's live-verified OSS denominator.
4. `s1l2_commercial_survey` — this run's commercial denominator.
5. `local_estate` — SISOCRM donors, 21st stores (8,515 union / 3,506 source-bearing), AutoSaaS, Great Library.
6. `user_provided` — operator/client-supplied SaaS/repo lists; NEVER merged silently; subagent B-task locates them.
7. `unresolved_large_corpora` — 1.3M / 850k-80k pointers; discovery-only even if resolved.
