# Action Model Builder — public signals wave 4

**Run:** `actionmodel-builder-research-2026-08-26`  
**Parent phase:** wave 3 floor verified; long-run matrix active  
**Wave:** `matrix-wave-4-industry-dimension-deepening`  
**Lane:** `RCH-PUBLIC-W4`  
**Observed:** 2026-08-26 (ICT)  
**Mode:** public research and ideation only; no authenticated accounts, client data, private contract, repository copying, implementation, deployment, or adoption admission

## Executive read

This report preserves the 110-source Wave 2 floor and the 34-source Wave 3
delta, then adds a third independent public receipt for every one of the 17
catalogue industries × 8 signal types. The result is a **408-slot combined
public ledger**: 136 Wave 2 slots + 136 Wave 3 slots + 136 new Wave 4 slots
(`public-w4.<industry>.<signal>.03`). A Wave 4 source identity is new relative
to both prior public packets. A source may support multiple signal rows only
when the inspected surface directly supports each signal; repeating a URL is
never counted as an independent source.

The strongest new receipts concern migration planning, data reconciliation,
operational failure, recovery controls, and maintenance ownership. Public
cost, retention, portability, and security evidence remains uneven. Vendor,
consultant, and press claims are documented receipts rather than independent
audits; public agency and empirical sources remain separate.

| Ledger result | Count / state | Interpretation |
|---|---:|---|
| Wave 2 source floor | 110 unique URLs; `W2-P01`–`W2-P74` and `W2-N01`–`W2-N36` | Immutable prior packet, preserved by reference and checked in §5. |
| Wave 3 source floor | 34 unique URLs; `W3-*` source IDs | Immutable third-receipt predecessor, preserved by reference and checked in §5. |
| Wave 4 source delta | 34 new source identities; `W4-*` | Two new public identities per industry, with quality and sponsorship notes below. |
| Prior public slots | 272 | Wave 2 + Wave 3 rows remain in their prior artifacts. |
| Wave 4 new slots | 136 | One explicit `.03` row for every industry × signal type below. |
| Combined public ledger | **408** | Three public receipts per industry × signal type, subject to evidence limits. |
| Wave 4 slot status | `observed` 84; `needs_direct_review` 51; `unobserved` 1; `blocked` 0 | Gaps are explicit and are not negative evidence. |
| Audited retention cohorts | 0 | “Live,” “launched,” “customer,” and “retention” remain separate. |

### Safe synthesis

1. **The recurring job is bounded operations.** New sources describe narrow
   workflows—accounting desktops, construction ERP integration, SCORM export,
   checkout, EHR/claims operations, hotel PMS, MSP transition, CRM/ATS
   handoff, mortgage servicing, property operations, and SaaS tenancy—not
   general autonomous app generation.
2. **Migration is a socio-technical control problem.** Source-to-target maps,
   validation, parallel systems, staged cutover, named ownership, and
   reversible release surfaces recur. This is a design hypothesis, not a
   prevalence estimate.
3. **Rollback language is not rollback proof.** “Fallback,” “instant
   rollback,” “backup,” or “recovery test” records a control claim. It does
   not prove a successful production rollback with side-effect and audit
   reconciliation.
4. **Cost units stay local.** Seats, annual savings, hours, infrastructure
   spend, project scope, and program estimates are retained in source units;
   anecdotes are not normalized into ROI, market size, or willingness to pay.
5. **The governed-assembly thesis remains falsifiable.** It weakens if
   controlled longitudinal studies show general builders reliably preserve
   authorization, lineage, side effects, migration fidelity, cost ceilings,
   and recovery without expert review. The next gate is synthetic and
   read-only.

## 1. Evidence and independence contract

Evidence class and source quality are separate axes:

| Code | Evidence class | Source-quality class | Use |
|---|---|---|---|
| `E` | Public page, paper, agency record, or first-party notice directly inspected | `A` public agency / empirical / first-party operator; `B` vendor or consultant case; `C` press release, community, or derivative | The surface exists and was inspected; this is not automatically an independent audit. |
| `D` | Documented or self-reported claim | Any | Customer quote, vendor metric, consultant case, survey, or release. |
| `I` | Bounded inference across receipts | `S` synthesis | A cautious pattern only; never an adoption or demand fact. |
| `U` | Unknown, weak, stale, contradictory, gated, or access-limited | Any | Retain as a gap or admission boundary; do not upgrade it to evidence. |

Every row has a stable `slot_id`, exact industry and signal, Wave 4
observation index `03`, observed date, source ID, inspected section, evidence
marker, atom relation, limitation/status, rights/admission boundary,
contradiction or sponsorship note, and falsifier/next gate. The third receipt
means “new public identity relative to Wave 2 and Wave 3,” not authenticated
usage and not independence from a source’s customer or sponsor.

Signal meanings remain narrow: `production` = public report of a running or
operational workflow; `failure` = reported incident, defect, or operational
risk; `migration` = move, replatform, consolidation, or modernization; `cost`
= declared cost/time/savings unit; `security` = named control, incident, or
security gap; `rollback` = stated reversal, fallback, or recovery control;
`portability` = export, API, source/data ownership, or reversible architecture;
`maintenance` = ongoing patching, support, monitoring, or ownership. No signal
implies representative adoption.

## 2. Wave 4 source delta (34 new public identities)

All source rows below were resolved from public web surfaces on 2026-08-26.
`B` marks provider/customer stories with commercial selection risk; `A` marks
public agency, empirical, or first-party records; `C` marks press-release,
community, or derivative surfaces. Access was public-web only: no login, paid
plan, client dataset, or private contract.

| ID | Published / accessed date | Quality / type | Public source and inspected receipt | Sponsorship, contradiction, or access limit |
|---|---|---|---|---|
| `W4-A01` | 2026-08-11; observed 2026-08-26 | `B` vendor case | [Xantrion accounting desktop modernization](https://www.xantrion.com/case-study/helping-a-san-francisco-accounting-firm-modernize-its-desktop-environment) — AVD pilot, dependency validation, phased deployment, security and reliability. | Provider-authored; customer is unnamed and no independent uptime/cost audit is public. |
| `W4-A02` | 2026-01-13; observed 2026-08-26 | `B` vendor case | [Bromley accountants Microsoft-cloud migration](https://www.itsupport-uk.com/case-studies/accountants-practice-in-bromley-br1-kent/) — SharePoint data reorganization, Microsoft 365/AVD strategy, accuracy and uptime concerns. | Provider case; public page does not expose a full cost or recovery report. |
| `W4-C01` | date not stated; observed 2026-08-26 | `B` first-party customer story | [Discovery Builders ERP migration with Procore](https://www.procore.com/casestudies/discovery-builders-erp) — Sage 300→Intacct, multi-currency, beta integration, real-time financial reporting. | Procore-hosted customer story; migration was still ongoing for some teams in the inspected text. |
| `W4-C02` | date not stated; observed 2026-08-26 | `B` vendor case | [Chainsys Procore/EBS dataZap integration](https://www.chainsys.ai/case-study/engineering-a-cloud-connected-construction-business-with-datazap) — two-way change-event flow, mapping repository, validation, reconciliation, hours and savings. | Provider-authored; quality and savings figures are self-reported. |
| `W4-CC01` | 2026-03 shutdown context; observed 2026-08-26 | `B` vendor composite case | [SCORMtoDoc enterprise migration](https://scormtodoc.com/guides/enterprise-scorm-migration-case-study) — EdApp/SC Training shutdown, 1,000–1,200-course composite, export and plan-cost alternatives. | Explicitly composite and provider-sponsored; $/seat and labor estimates are not audited. |
| `W4-CC02` | date not stated; observed 2026-08-26 | `B` vendor case | [TechEniac CourseGen AI](https://techeniac.com/case-studies/coursegen-ai-platform) — parallel course production, SCORM validator, cross-LMS compatibility failures, stated delivery metrics. | Provider case; “18 B2B customers” and quality scores are self-reported. |
| `W4-EC01` | date not stated; observed 2026-08-26 | `B` vendor case | [Truzon commerce replatform](https://truzonlabs.com/case-studies/commerce-replatform) — failed prior attempts, 2% live slice, four-times peak testing, parallel run and instant rollback. | Provider case; revenue, conversion, and uptime metrics are not independently audited. |
| `W4-EC02` | date not stated; observed 2026-08-26 | `B` vendor case | [Luzran Shopify exit](https://luzran.com/case-studies/ecommerce-infrastructure-migration) — owned data export, phased cutover, old-store fallback, SEO/payment migration and subscription savings. | Client anonymous; claims and $3.1K/month figure are provider/customer self-report. |
| `W4-ED01` | 2026-05-12; updated 2026-05-29 | `A` public agency notice | [Federal Student Aid Canvas security alert](https://fsapartners.ed.gov/knowledge-center/library/electronic-announcements/2026-05-12/technology-security-alert-ongoing-cybersecurity-incident-involving-canvas-learning-management-system-updated-may-29-2026) — affected fields, incident reporting, agency/vendor coordination. | Public notice distinguishes known fields from unknown forensic detail; no student record accessed. |
| `W4-ED02` | 2026-05; observed 2026-08-26 | `A` community/sector report | [EDUCAUSE response to Canvas incident](https://er.educause.edu/articles/2026/5/how-higher-education-is-responding-to-the-canvas-lms-incident-and-preparing-for-whats-next) — contingency workflows, third-party risk, resilience discussion. | Community report and webinar synthesis; not a representative institution sample. |
| `W4-HC01` | 2026-03; observed 2026-08-26 | `B` healthcare MSP case | [Sage HIPAA-aware medical-practice IT](https://sagesolutionsllc.net/case-studies/healthcare-practice-hipaa-m365/) — M365/EHR migration, MFA, immutable backup, quarterly recovery tests, patching and policies. | Provider case; “HIPAA-aware” is not a certification or clinical safety result. |
| `W4-HC02` | posted 2024; observed 2026-08-26 | `A` empirical case study | [Indonesian EMR implementation study](https://arxiv.org/abs/2410.12226) — clinic EMR implementation, security/privacy, standards, monitoring and updates. | Small case-study scope and testimonials; no patient data or general adoption denominator. |
| `W4-HO01` | 2026-05-21; observed 2026-08-26 | `B` industry/vendor insight | [Shiji 100+ hotel PMS migration](https://insights.shijigroup.com/the-hard-part-of-a-100-hotel-pms-migration-isnt-the-software/) — data, integration certification, front-desk continuity, property dependencies. | Vendor/industry editorial; it is a guidance/experience surface, not a named customer audit. |
| `W4-HO02` | date not stated; observed 2026-08-26 | `B` vendor customer case | [Planet Hotel Olden PMS migration](https://www.weareplanet.com/case-study/hotel-olden) — provider shutdown forced migration, POS integration, training, minimal disruption. | Vendor-hosted customer case; boutique eight-room scale is not hotel-group prevalence. |
| `W4-IT01` | January 2026; observed 2026-08-26 | `C` lead-generation sector PDF | [Span MSP Market Intelligence 2025–2026](https://www.spanglobalservices.com/pdf/msp-market-intelligence-report-2025-2026.pdf) — proactive managed services, cloud/security/AI positioning, survey-like segmentation. | Strong commercial lead-generation sponsorship; contact counts and “opportunity size” are excluded as demand proof. |
| `W4-IT02` | 2025 survey; observed 2026-08-26 | `C` vendor survey | [MSP360 State of Managed Backup](https://www.msp360.com/download/whitepapers/msp360-2025-state-of-managed-backup.pdf) — 150+ MSP survey, backup/resilience service pressures, support and recovery. | Vendor survey of self-selected MSPs; no independent sample frame or client outcome audit. |
| `W4-IN01` | 2026-08-14; observed 2026-08-26 | `B` vendor case | [Space-O 18M-policy insurance migration](https://www.spaceo.ca/insurance-software-development/case-studies/insurance-data-migration/) — profiling, mapping, batch reconciliation, phased cutover, policy relationships. | Provider case; “zero data loss” is not independently audited and customer is unnamed. |
| `W4-IN02` | date not stated; observed 2026-08-26 | `B` vendor case | [HTC claims modernization migration](https://www.htcinc.com/insights/success-stories/powering-claims-modernization-with-automation-led-data-migration/) — flat-file mapping, exception handling, business-user approvals, claims quality. | Provider case; no public independent migration or regulatory audit. |
| `W4-L01` | date not stated; observed 2026-08-26 | `B` vendor case | [NetSys law-office M365 migration](https://www.netsysgroup.com/case-studies/law-office) — matter-centric mapping, mailbox/document fidelity, MFA, backup and support metrics. | Provider case; customer unnamed and outcome table is self-reported. |
| `W4-L02` | date not stated; observed 2026-08-26 | `B` consultant case | [Harmeston law-firm DMS change](https://www.harmeston.com/case-studies/a-time-critical-dms-change-for-a-cleaner-future) — 100M-document legacy DMS, retention exposure, RFP and migration-avoidance decision. | Consultant selection case; it is not a completed migration or rollback receipt. |
| `W4-LG01` | date not stated; observed 2026-08-26 | `B` vendor customer case | [SnapLogic Bison Transport modernization](https://www.snaplogic.com/resources/case-studies/bison-transport-modernized-architecture) — legacy/new TMS synchronization, master data store, phased migration and pipeline delivery. | Vendor-hosted customer case; “potentially one month” delivery is forward-looking. |
| `W4-LG02` | 2026-03-23; observed 2026-08-26 | `B` consultant transition case | [GLCS carrier back-office transition](https://glcs.net/case-studies/helping-a-mid-market-carrier-navigate-a-critical-back-office-transition) — TMS-to-ledger integration, reporting alignment, operational continuity. | Consultant case with unnamed carrier; no public cost or incident ledger. |
| `W4-MK01` | date not stated; observed 2026-08-26 | `B` vendor case | [Checkpoint GTM Salesforce→HubSpot migration](https://checkpointgtm.com/case-studies/crm-migration.html) — parallel systems, 50K records, automation consolidation, rollback plans and validation. | Consultancy case; adoption and cost metrics are self-reported and not a market denominator. |
| `W4-MK02` | 2026-01-27; observed 2026-08-26 | `B` agency case | [Orange Marketing Marketo→HubSpot](https://blog.orangemarketing.com/case-study-simplifying-marketing-operations-through-a-marketo-migration-to-hubspot) — dual marketing systems, unreliable Salesforce, unified HubSpot environment. | Agency case; outcome and scale claims are not independently audited. |
| `W4-MO01` | 2026-01-29; observed 2026-08-26 | `B` consultant case | [CRISIL Integral IQ loan-system migration](https://integraliq.crisil.com/en/homepage/what-we-think/all-our-thinking/case-studies/2026/01/modernizing-legacy-loan-systems-migration-to-an-industry-standard-lending-solution.html) — 1,000+ deal migration, mapping, validation, reconciliations and controls. | Consultant case; direct page timed out once and the public indexed case/PDF is retained with access note. |
| `W4-MO02` | date not stated; observed 2026-08-26 | `B` vendor case | [InfoVision mortgage-services transformation](https://www.infovision.com/case-study/a-digital-transformation-journey-in-mortgage-services/) — legacy AFS platform migration, data transfer, compliance, hosting-cost claim. | Provider case; customer unnamed and “error-free/zero downtime” are not independently audited. |
| `W4-PM01` | date not stated; observed 2026-08-26 | `B` vendor case | [Drift and Forge property operating system](https://driftandforge.io/case-studies/property-operations-internal-tool) — seven spreadsheets→owned system, three-year history, reconciliation, retainer and spend avoided. | Anonymous customer and provider metrics; no independent data/retention audit. |
| `W4-PM02` | May–July 2024; observed 2026-08-26 | `B` consultant case | [BC Solutions Yardi Breeze→Voyager](https://www.bcsolut.com/case-studies/hk-property-management) — 12 communities, 17 ancillary products, validation, COA restructure and training. | Provider case; outcome is self-reported and no public rollback execution is shown. |
| `W4-RE01` | 2026-08-07; observed 2026-08-26 | `B` vendor case | [PropCRM UAE real-estate CRM](https://propcrm.ae/case-studies/from-spreadsheets-to-a-fully-integrated-real-estate-crm) — spreadsheet transition, API/webhooks, lead routing, WhatsApp and inventory views. | SEO/AEO-heavy provider page; performance/ROI language is not independently measured. |
| `W4-RE02` | date not stated; observed 2026-08-26 | `B` vendor case | [CustomCRMPros brokerage CRM](https://customcrmpros.com/case-studies/real-estate-brokerage) — four lead sources, leakage, unified CRM, MLS integration and admin-time claims. | Provider case with anonymous managing broker; no retention or independent attribution audit. |
| `W4-RC01` | 2026-05-25; observed 2026-08-26 | `B` vendor case | [Manpower SEE Datacruit ATS rollout](https://www.seyfor.com/en-cz/how-the-international-datacruit-ats-implementation-at-manpower-see-was-delivered) — eight-country implementation, data migration, 130+ users, training and continuity. | Vendor/implementation case; full downloadable case study remains a linked boundary. |
| `W4-RC02` | 2026-04-18; observed 2026-08-26 | `A` empirical deployment study | [Decision traces in enterprise hiring](https://arxiv.org/abs/2604.19819) — ATS/HRIS/assessment fusion, decision evidence chains, 10,765-agent study. | One Fortune 500 insurance-carrier deployment; not a recruiting-product adoption cohort. |
| `W4-SA01` | date not stated; observed 2026-08-26 | `B` vendor case | [HeliosDB SaaS multi-tenancy](https://www.heliosdb.com/case-study-saas.html) — cross-tenant near-miss, database-per-tenant cost, branching, schema migration and rollback. | Provider case with unusually precise metrics; no independent production audit. |
| `W4-SA02` | 2026-08-12; observed 2026-08-26 | `A` empirical/technical paper | [Reverse migration cloud→on-premises](https://arxiv.org/abs/2608.11640) — regulated deployment portability, simulate/replicate/delegate, sync and maintenance. | Technical case is not an industry adoption or client-data claim; results are author-reported. |

### Preserved Wave 2 and Wave 3 identity registers

The prior public evidence is immutable input, not a replacement pool:

- Wave 2: `W2-P01`–`W2-P74` and `W2-N01`–`W2-N36`, exactly 110 unique URLs in
  [public-signals-wave-2.md](../wave-2/outputs/public-signals-wave-2.md).
- Wave 3: 34 `W3-*` source identities and URLs in
  [public-signals-wave-3.md](../wave-3/outputs/public-signals-wave-3.md).
- Wave 2 + Wave 3 therefore contribute 144 prior public identities; the
  Wave 4 source table adds 34 more. The smoke in §5 verifies exact prior URL
  counts, prior slot counts, W2/W3 disjointness, and W4 disjointness from both.

Prior evidence-quality gaps are carried forward: vendor metrics remain
self-reported, composite/fictionalized/gated pages remain marked, public
agency and empirical scope is not generalized, cost denominators are not
normalized, portability is not inferred from a migration, rollback language
is not execution proof, and retention remains unaudited.

## 3. Atom and admission map

| Atom | Boundary used in this report |
|---|---|
| `intake_normalize` | Intake, mapping, normalization, or source-of-truth handoff. |
| `extract_structure` | Extraction of documents, records, schemas, or workflow structure. |
| `reconcile_audit` | Reconciliation, validation, audit trail, or anomaly review. |
| `triage_route` | Routing cases, approvals, tasks, alerts, or exceptions. |
| `sync_handoff` | API/integration, parallel run, migration, or operator/vendor handoff. |
| `monitor_alert` | Monitoring, incident detection, service health, or recovery signal. |
| `approval_publish` | Human approval, release, versioning, or controlled publication. |
| `report_digest` | Reporting, cost visibility, operational summary, or decision packet. |

The ledger compares portability/API/import-export, audit/approval, cost,
recovery, and operating ownership against the same narrow atoms used in Wave 2
and Wave 3. It does not equate public workflow prose with exact matrix-
dimension proof. Rights are limited to public-page inspection and concise
paraphrase with URL attribution; no login, paywall, personal data, or customer
dataset was accessed.

## 4. Wave 4 ledger: third receipt for all 136 public slots

Column contract: `marker/source` is evidence class plus W4 identity; `receipt`
names the inspected surface and atom; `boundary` retains source quality,
sponsorship, contradiction/access limits, rights, and no-admission rule;
`falsifier/gate` is the next check that could weaken or strengthen the signal.
All rows were observed on **2026-08-26** and have observation index **03**.

### 4.1 accounting_firms

| slot_id | status | marker/source | receipt (surface; atom) | boundary / contradiction / rights | falsifier / next gate |
|---|---|---|---|---|---|
| `public-w4.accounting_firms.production.03` | observed | `E/D · W4-A01` | Accounting firm AVD pilot and full deployment are reported operating after application compatibility validation; `sync_handoff`, `monitor_alert`. | Vendor case with unnamed customer; no authenticated adoption or independent uptime claim. | Re-run a synthetic accounting desktop pilot with app, identity, and performance read-back. |
| `public-w4.accounting_firms.failure.03` | needs_direct_review | `U · W4-A02` | Nearly 20 years of mixed current, archived, and legacy files required cleanup before migration; `reconcile_audit`. | Data complexity is a risk surface, not a documented incident or failure rate. | Collect public accounting-practice postmortems and classify file, access, and uptime failures. |
| `public-w4.accounting_firms.migration.03` | observed | `E/D · W4-A01` | Existing Remote Desktop environment and embedded accounting applications were moved through pilot and phased AVD deployment; `sync_handoff`, `extract_structure`. | Provider-authored; source/target field map and client records are not public. | Reconcile synthetic tax, document, and remote-session fixtures before cutover. |
| `public-w4.accounting_firms.cost.03` | needs_direct_review | `U · W4-A02` | The page describes cloud strategy and reduced aging infrastructure, but no comparable implementation or run-rate cost unit; `report_digest`. | No denominator or counterfactual; do not convert qualitative savings to ROI. | Require a public line-item scope or preserve as qualitative only. |
| `public-w4.accounting_firms.security.03` | observed | `E/D · W4-A01` | Security considerations, centralized management, and a secure cloud desktop are named alongside application validation; `approval_publish`, `monitor_alert`. | Vendor language is not a security audit; no credentials or client data accessed. | Test MFA, device posture, app authorization, and export boundaries synthetically. |
| `public-w4.accounting_firms.rollback.03` | needs_direct_review | `U · W4-A01` | Pilot-before-full-deployment provides a release gate, but no application rollback or restore execution is documented; `monitor_alert`. | Pilot and rollback are distinct controls. | Require a dated desktop/image rollback drill with file and profile reconciliation. |
| `public-w4.accounting_firms.portability.03` | needs_direct_review | `U · W4-A02` | Reorganizing files for SharePoint shows migration preparation but not export format, API, or exit ownership; `extract_structure`. | Cloud migration is not portability proof. | Produce a synthetic document/permission/version export manifest and re-import checksum. |
| `public-w4.accounting_firms.maintenance.03` | observed | `E/D · W4-A02` | Ongoing cloud administration and a long-lived file estate make patching, access, and archive ownership visible maintenance work; `monitor_alert`, `report_digest`. | Provider case; support volume and retention are not measured. | Track a 90-day synthetic patch, archive, backup, and owner ledger. |

### 4.2 construction

| slot_id | status | marker/source | receipt (surface; atom) | boundary / contradiction / rights | falsifier / next gate |
|---|---|---|---|---|---|
| `public-w4.construction.production.03` | observed | `E/D · W4-C01` | Discovery Builders is reported using Procore/Intacct integration for multi-currency transactions and real-time enterprise forecasting; `sync_handoff`, `report_digest`. | First-party vendor customer story; half of teams were still migrating in the inspected text. | Run synthetic multi-currency project/ERP workflow with approval read-back. |
| `public-w4.construction.failure.03` | observed | `E/D · W4-C02` | Dual entry between Procore and Oracle EBS caused delayed data and inconsistencies; `reconcile_audit`, `sync_handoff`. | Vendor case and no incident denominator; data inconsistency is not a prevalence claim. | Inject duplicate/misaligned change events and measure detection/reconciliation. |
| `public-w4.construction.migration.03` | observed | `E/D · W4-C01` | Sage 300→Intacct migration was paired with Procore integration and beta testing; `sync_handoff`, `approval_publish`. | Migration status was ongoing for some teams; no private project data. | Validate source-target cost codes, currencies, commitments, and approvals. |
| `public-w4.construction.cost.03` | observed | `E/D · W4-C02` | The case reports about $100K annual saving and 1–2 hours/day avoided manual work; units remain case-specific; `report_digest`. | Self-reported sponsor figures with unclear baseline; no normalization. | Audit labor-rate, transaction volume, and integration license assumptions. |
| `public-w4.construction.security.03` | needs_direct_review | `U · W4-C01` | Multi-currency financial integration and beta testing are described, but named access/security controls are absent; `approval_publish`. | Integration assurance is not security evidence. | Inspect public role, audit, secret, and change-order access controls. |
| `public-w4.construction.rollback.03` | needs_direct_review | `U · W4-C02` | Validation and a mapping repository create control surfaces, but no cutback or restore execution is reported; `monitor_alert`. | Data validation is not rollback proof. | Run synthetic change-event rollback with accounting and project-state parity. |
| `public-w4.construction.portability.03` | needs_direct_review | `U · W4-C02` | Two-way Procore/EBS integration and maintained mappings show interoperability, not neutral export or ownership; `sync_handoff`. | Vendor integration does not establish exit rights. | Verify versioned project/cost/change-event export and neutral re-import. |
| `public-w4.construction.maintenance.03` | observed | `E/D · W4-C02` | A data repository, validation, reconciliation, and master-data governance are described as continuing controls; `reconcile_audit`, `monitor_alert`. | Provider case; maintenance labor and drift frequency are unknown. | Measure mapping drift, failed events, and ownership over repeated synthetic jobs. |

### 4.3 course_creators

| slot_id | status | marker/source | receipt (surface; atom) | boundary / contradiction / rights | falsifier / next gate |
|---|---|---|---|---|---|
| `public-w4.course_creators.production.03` | observed | `E/D · W4-CC02` | CourseGen AI reports SCORM exports tested against Moodle, Cornerstone, and SAP SuccessFactors, with MVP delivery and formats; `approval_publish`, `extract_structure`. | Vendor metrics and customer count are self-reported; no learner cohort. | Validate synthetic course author/reviewer/publish/export flow in multiple LMS fixtures. |
| `public-w4.course_creators.failure.03` | observed | `E/D · W4-CC02` | A SCORM package can load while completion or assessment scores fail across LMS implementations; `reconcile_audit`, `monitor_alert`. | Vendor engineering narrative, not failure prevalence or independent compatibility test. | Run a cross-LMS negative suite for completion, score, resume, and asset loading. |
| `public-w4.course_creators.migration.03` | observed | `E/D · W4-CC01` | Composite enterprise case models extracting/migrating a 1,000–1,200-course SCORM library after an LMS shutdown; `extract_structure`, `sync_handoff`. | Explicit composite case; not an identified creator’s production migration. | Test package inventory, manifest, assets, metadata, and version reconciliation. |
| `public-w4.course_creators.cost.03` | observed | `E/D · W4-CC01` | Source states $24/author/month, $174,900/year for 100 author licenses, and 4–8 labor hours/file as alternatives; units are separate; `report_digest`. | Provider estimates and composite scope; no actual spend or ROI. | Preserve seat, license, and labor units; obtain independent quote before comparison. |
| `public-w4.course_creators.security.03` | needs_direct_review | `U · W4-CC02` | Cross-LMS validation protects completion/score integrity, but no creator/learner access-control audit is public; `reconcile_audit`. | Compatibility is not privacy/security evidence. | Test role isolation, learner PII minimization, signing, and export authorization. |
| `public-w4.course_creators.rollback.03` | needs_direct_review | `U · W4-CC01` | Shutdown pressure and migration alternatives are described, but no executed content/learner-state rollback; `monitor_alert`. | Content extraction is not rollback evidence. | Require package snapshot, restore, and learner-state parity drill. |
| `public-w4.course_creators.portability.03` | observed | `E/D · W4-CC01` | SCORM extraction/export is the explicit subject of the composite case; `extract_structure`, `sync_handoff`. | SCORM package portability may omit source files, rules, authoring metadata, or learner state. | Inventory source, package, assets, assessments, and history; re-import and checksum. |
| `public-w4.course_creators.maintenance.03` | observed | `E/D · W4-CC02` | A validator tested against several LMSs is an ongoing compatibility-maintenance surface; `monitor_alert`, `approval_publish`. | Vendor case; no support queue, patch cadence, or retention evidence. | Track validator failures and LMS-version drift in a 90-day synthetic run. |

### 4.4 ecommerce

| slot_id | status | marker/source | receipt (surface; atom) | boundary / contradiction / rights | falsifier / next gate |
|---|---|---|---|---|---|
| `public-w4.ecommerce.production.03` | observed | `E/D · W4-EC01` | A 900-store retailer is reported carrying peak traffic after a composable storefront and a 2% live slice; `monitor_alert`, `sync_handoff`. | Vendor case with self-reported 99.98% checkout success; no payment audit. | Load-test synthetic catalog/cart/payment flows with side-effect assertions. |
| `public-w4.ecommerce.failure.03` | observed | `E/D · W4-EC01` | Three failed peak-season replatform attempts and checkout timeouts are reported; `monitor_alert`, `reconcile_audit`. | Case-specific incident history; estimated loss is not a prevalence measure. | Reproduce timeout, inventory lock, and partial-order failures under replayed load. |
| `public-w4.ecommerce.migration.03` | observed | `E/D · W4-EC02` | Shopify Plus exit exported/normalized catalog, customer, and order data before a phased custom-platform cutover; `extract_structure`, `sync_handoff`. | Anonymous client and provider claim; no customer data accessed. | Reconcile synthetic orders, payments, redirects, metadata, and tracking events. |
| `public-w4.ecommerce.cost.03` | observed | `E/D · W4-EC02` | The case reports approximately $3.1K/month in platform/app subscription fees eliminated; unit is one client’s stated run-rate; `report_digest`. | Self-reported baseline and no implementation cost; not ROI or market size. | Validate invoices, app scope, transaction fees, and ongoing engineering retainer. |
| `public-w4.ecommerce.security.03` | needs_direct_review | `U · W4-EC01` | Thin live slice, load tests, and staged traffic reduce operational risk but do not name payment/identity controls; `monitor_alert`. | Reliability controls are not a PCI/security audit. | Inspect public threat model and test token, secret, role, and webhook boundaries. |
| `public-w4.ecommerce.rollback.03` | observed | `E/D · W4-EC01` | Old/new storefronts ran in parallel with traffic-weighted cutover and instant rollback available; `monitor_alert`, `sync_handoff`. | Availability of rollback is not proof of execution or order reconciliation. | Execute synthetic traffic reversal and reconcile cart, order, inventory, and analytics state. |
| `public-w4.ecommerce.portability.03` | observed | `E/D · W4-EC02` | Data was exported into a client-owned database and the old store remained fallback until performance was acceptable; `extract_structure`, `sync_handoff`. | Provider says “owned,” but export completeness and legal rights are not independently checked. | Verify full schema/asset/order export and neutral re-import with checksums. |
| `public-w4.ecommerce.maintenance.03` | observed | `E/D · W4-EC02` | Daily monitoring through transition, ad/SEO tracking, and owned-stack support create ongoing maintenance work; `monitor_alert`, `report_digest`. | Anonymous vendor case; no long-term maintenance or retention cohort. | Measure deploy, connector, redirect, payment, and alert toil over 90 days. |

### 4.5 education_training

| slot_id | status | marker/source | receipt (surface; atom) | boundary / contradiction / rights | falsifier / next gate |
|---|---|---|---|---|---|
| `public-w4.education_training.production.03` | needs_direct_review | `U · W4-ED02` | EDUCAUSE reports institutions creating contingency workflows after a Canvas disruption; it does not identify a stable replacement production workflow; `triage_route`. | Community discussion, not institution-by-institution operational proof. | Obtain named public continuity artifacts or keep this slot unresolved. |
| `public-w4.education_training.failure.03` | observed | `E · W4-ED01` | Federal Student Aid records unauthorized access to usernames, email, course names, enrollment information, and messages in a Canvas incident; `monitor_alert`, `reconcile_audit`. | Public notice distinguishes known fields from unknown forensic detail; no student records accessed. | Reconcile agency, vendor, and institution notices without inferring unreported fields. |
| `public-w4.education_training.migration.03` | needs_direct_review | `U · W4-ED02` | Contingency planning and third-party-risk discussion indicate transition pressure but not a completed LMS migration; `sync_handoff`. | Incident response is not migration evidence. | Inspect named public LMS migration plans, exports, and cohort cutovers. |
| `public-w4.education_training.cost.03` | unobserved | `U · W4-ED02` | The community report provides no comparable education-platform cost unit; `report_digest`. | No denominator, price, or budget; no normalization. | Add a public institution budget/contract source before upgrading cost. |
| `public-w4.education_training.security.03` | observed | `E · W4-ED01` | Agency notice identifies affected fields, reporting channels, and ongoing coordination with the vendor; `monitor_alert`, `approval_publish`. | First-party notice is not a complete forensic/control audit. | Test role, incident, notification, and data-minimization controls on synthetic LMS data. |
| `public-w4.education_training.rollback.03` | needs_direct_review | `U · W4-ED02` | Contingency workflows address service disruption, but no application rollback or data restore is described; `monitor_alert`. | Continuity fallback is not rollback proof. | Require public restore/rollback evidence with course, grade, and enrollment parity. |
| `public-w4.education_training.portability.03` | needs_direct_review | `U · W4-ED01` | The incident notice does not provide export schemas, API contracts, or portability evidence; `sync_handoff`. | Security incident record cannot establish exit rights. | Inspect public LMS export/import documentation and validate synthetic packages. |
| `public-w4.education_training.maintenance.03` | observed | `E/D · W4-ED02` | Security preparedness, contingency planning, and third-party risk are described as continuing institutional work; `monitor_alert`, `report_digest`. | Community synthesis; no maintenance-hours denominator or retention evidence. | Track public continuity-plan updates, patch ownership, and recovery exercises. |

### 4.6 healthcare_medical_practices

| slot_id | status | marker/source | receipt (surface; atom) | boundary / contradiction / rights | falsifier / next gate |
|---|---|---|---|---|---|
| `public-w4.healthcare_medical_practices.production.03` | observed | `E/D · W4-HC01` | A multi-location medical-practice EHR was migrated to a managed virtual server with monitoring, patching, and backups; `sync_handoff`, `monitor_alert`. | Provider case; no clinical workflow or safety result is claimed. | Run synthetic appointment/EHR-like workflows with named clinical authority and no real PHI. |
| `public-w4.healthcare_medical_practices.failure.03` | observed | `E/D · W4-HC01` | The pre-migration state included one physical server, same-building backups, no MFA, personal-email PHI flow, and no incident plan; `monitor_alert`, `reconcile_audit`. | Provider narrative calls it typical but supplies no prevalence; no patient data accessed. | Test backup loss, unauthorized PHI path, and outage response with synthetic records. |
| `public-w4.healthcare_medical_practices.migration.03` | observed | `E/D · W4-HC01` | Hosted Exchange→M365 and on-prem EHR→managed virtual server migrations are directly described; `sync_handoff`, `extract_structure`. | “HIPAA-aware” and successful migration are provider claims, not certification. | Reconcile synthetic records, roles, backups, and downtime/read-only gates. |
| `public-w4.healthcare_medical_practices.cost.03` | needs_direct_review | `U · W4-HC01` | The page gives endpoints/locations and a flat-rate service position but no implementation or recurring-cost denominator; `report_digest`. | No normalization to practice, provider, or patient units. | Obtain a public scope/price breakdown; do not use partner pricing as market size. |
| `public-w4.healthcare_medical_practices.security.03` | observed | `E/D · W4-HC01` | MFA, conditional access, encryption, VLANs, BAA tracking, risk analysis, immutable off-site backup, and quarterly recovery tests are named; `approval_publish`, `monitor_alert`. | “HIPAA-aware” is not a certification and no independent test is public. | Verify least privilege, audit, backup restore, and PHI export denial on synthetic data. |
| `public-w4.healthcare_medical_practices.rollback.03` | needs_direct_review | `U · W4-HC01` | Quarterly recovery tests are reported, but application cutback or clinical-state rollback is not; `monitor_alert`. | Restore test and rollback are distinct; no clinical safety claim. | Require a synthetic EHR restore/cutback drill with RPO/RTO and integrity read-back. |
| `public-w4.healthcare_medical_practices.portability.03` | needs_direct_review | `U · W4-HC02` | EMR implementation references standards and monitoring but no concrete export/import contract; `sync_handoff`. | Empirical abstract is too thin to prove interoperability or exit rights. | Inspect public standards-conformant export and test synthetic record re-import. |
| `public-w4.healthcare_medical_practices.maintenance.03` | observed | `E/D · W4-HC01` | Managed patching, monitoring, backups, quarterly recovery tests, annual risk analysis, and training are ongoing ownership surfaces; `monitor_alert`, `report_digest`. | Provider case; support burden and retention remain unknown. | Run a 90-day synthetic maintenance ledger with named practice authority. |

### 4.7 hospitality

| slot_id | status | marker/source | receipt (surface; atom) | boundary / contradiction / rights | falsifier / next gate |
|---|---|---|---|---|---|
| `public-w4.hospitality.production.03` | observed | `E/D · W4-HO02` | Hotel Olden is reported operating on Protel Cloud PMS with unified hotel/restaurant workflows and remote access; `sync_handoff`, `report_digest`. | Boutique eight-room vendor case; not a hotel-group adoption denominator. | Test synthetic reservations, POS, guest profile, and reporting workflows. |
| `public-w4.hospitality.failure.03` | observed | `E/D · W4-HO01` | Shiji describes small migration failures becoming portfolio-wide problems across regions, teams, integrations, and property dependencies; `monitor_alert`, `reconcile_audit`. | Industry/vendor insight is a risk narrative, not an incident-rate sample. | Collect named PMS postmortems and simulate integration/data errors across properties. |
| `public-w4.hospitality.migration.03` | observed | `E/D · W4-HO02` | A PMS provider shutdown forced a time-sensitive migration with POS integration and pre-season onboarding; `sync_handoff`, `extract_structure`. | Customer story; field mapping and full parity report are not public. | Reconcile synthetic reservations, rates, POS, guest history, and reports before cutover. |
| `public-w4.hospitality.cost.03` | needs_direct_review | `U · W4-HO01` | 100+ hotel scope and operational pressure are described without implementation or run-rate cost; `report_digest`. | No cost unit or denominator; no normalization. | Find a public hospitality budget/price source or leave cost unresolved. |
| `public-w4.hospitality.security.03` | needs_direct_review | `U · W4-HO02` | Cloud access and POS integration are described, but named reservation/payment controls are not; `approval_publish`. | Availability and convenience are not security evidence. | Inspect public PMS role, secret, payment-token, and backup controls. |
| `public-w4.hospitality.rollback.03` | needs_direct_review | `U · W4-HO01` | Shiji asks what happens when rollout delay affects the portfolio, but no executed PMS rollback is reported; `monitor_alert`. | Risk discussion is not reversal evidence. | Require property-level cutback criteria and reservation/rate/inventory reconciliation. |
| `public-w4.hospitality.portability.03` | needs_direct_review | `U · W4-HO01` | Data migration and integration certification are explicit concerns, but export schema and exit ownership are absent; `sync_handoff`. | Vendor insight cannot establish portability. | Test synthetic guest/reservation/rate export and neutral re-import. |
| `public-w4.hospitality.maintenance.03` | observed | `E/D · W4-HO01` | Maintaining control across property dependencies, integration certification, and front-desk continuity is an ongoing operations surface; `monitor_alert`, `triage_route`. | Editorial/vendor guidance; no support-hours or retention cohort. | Measure connector drift, property exceptions, and owner response over a synthetic season. |

### 4.8 it_services_msps

| slot_id | status | marker/source | receipt (surface; atom) | boundary / contradiction / rights | falsifier / next gate |
|---|---|---|---|---|---|
| `public-w4.it_services_msps.production.03` | observed | `E/D · W4-IT02` | MSP360’s survey describes MSPs delivering managed backup/recovery services as an operating offer; `monitor_alert`, `report_digest`. | Vendor survey of self-selected MSPs; not representative adoption or client value. | Inspect named operator runbooks and synthetic backup/restore ticket flows. |
| `public-w4.it_services_msps.failure.03` | needs_direct_review | `U · W4-IT01` | Span’s report positions reactive break-fix versus proactive operations but does not provide an incident sample; `monitor_alert`. | Lead-generation report and “opportunity” claims are excluded as failure prevalence. | Collect public MSP incident/postmortem records with denominators. |
| `public-w4.it_services_msps.migration.03` | needs_direct_review | `U · W4-IT01` | Cloud migration expertise is positioned as an MSP capability, but no named migration receipt is documented; `sync_handoff`. | Vendor positioning is not a customer transition record. | Require public MSP migration case with inventory, handoff, and rollback evidence. |
| `public-w4.it_services_msps.cost.03` | needs_direct_review | `U · W4-IT01` | Report gives employee/revenue bands and commercial contact counts, not service cost or margin units; `report_digest`. | Contact/opportunity figures are intentionally rejected as market-size evidence. | Obtain public rate card or audited unit economics with denominator. |
| `public-w4.it_services_msps.security.03` | needs_direct_review | `U · W4-IT02` | Backup/resilience is discussed, but security controls and access-review evidence are not; `monitor_alert`. | Vendor survey, no client environment or audit. | Test credential lifecycle, encryption, immutable backup, and tenant isolation. |
| `public-w4.it_services_msps.rollback.03` | needs_direct_review | `U · W4-IT02` | Backup and recovery service pressure is visible, but a tested service rollback or provider reversion is not; `monitor_alert`. | Recovery service is not rollback proof. | Run synthetic MSP exit/cutback with restored assets, tickets, and credentials metadata. |
| `public-w4.it_services_msps.portability.03` | needs_direct_review | `U · W4-IT01` | Service-stack segmentation and provider positioning do not show export or runbook ownership; `extract_structure`. | Commercial segmentation is not portability evidence. | Validate export of assets, runbooks, ticket history, and integration metadata. |
| `public-w4.it_services_msps.maintenance.03` | observed | `E/D · W4-IT02` | Survey frames managed backup and resilience as an ongoing service requirement, not a one-time install; `monitor_alert`, `report_digest`. | Self-selected vendor survey; no support-volume or retention measure. | Track patch, backup, restore-test, and escalation ownership across synthetic tenants. |

### 4.9 insurance_agencies

| slot_id | status | marker/source | receipt (surface; atom) | boundary / contradiction / rights | falsifier / next gate |
|---|---|---|---|---|---|
| `public-w4.insurance_agencies.production.03` | observed | `E/D · W4-IN01` | An insurer’s policy platform is reported receiving 18M+ records with relationship validation and continuity of ongoing operations; `sync_handoff`, `reconcile_audit`. | Provider case and “zero loss” claim are not independently audited. | Run synthetic policy, coverage, endorsement, renewal, and billing flows. |
| `public-w4.insurance_agencies.failure.03` | observed | `E/D · W4-IN02` | Flat-file claims data was incomplete/inconsistent/outdated and required exception handling and business-user approvals; `reconcile_audit`. | Vendor case; no failure rate or regulatory finding. | Classify synthetic orphan, stale, duplicate, and malformed claim records. |
| `public-w4.insurance_agencies.migration.03` | observed | `E/D · W4-IN01` | Profiling, source-target mapping, batch reconciliation, pilot migration, and phased cutover are described for policy data; `extract_structure`, `sync_handoff`. | Customer unnamed; no policyholder data or independent cutover report. | Reconcile policy relationships and historical records with synthetic fixtures. |
| `public-w4.insurance_agencies.cost.03` | needs_direct_review | `U · W4-IN01` | 18,047,326 records and eight-month timeline are given, but implementation labor/run-rate cost is absent; `report_digest`. | Volume/time is not cost and cannot be normalized. | Obtain public cost unit or keep resource intensity separate. |
| `public-w4.insurance_agencies.security.03` | needs_direct_review | `U · W4-IN02` | Business-user approval and claims quality controls are named, but no access-control or security audit is public; `approval_publish`. | Data quality is not security assurance. | Test claims-role isolation, audit, retention, and export restrictions. |
| `public-w4.insurance_agencies.rollback.03` | needs_direct_review | `U · W4-IN01` | Pilot/batch/phased migration reduces blast radius, but no executed rollback or restored policy book is described; `monitor_alert`. | Phased cutover is not rollback proof. | Require snapshot/cutback criteria and policy/billing/relation reconciliation. |
| `public-w4.insurance_agencies.portability.03` | observed | `E/D · W4-IN01` | Source-target mappings and controlled transfer of policy history/relationships are direct data-mobility evidence; `extract_structure`, `sync_handoff`. | Transfer to a selected platform does not prove neutral export rights. | Validate machine-readable policy export and re-import to a neutral fixture. |
| `public-w4.insurance_agencies.maintenance.03` | needs_direct_review | `U · W4-IN02` | Claims exception handling creates ongoing data-quality work, but support owner/cadence is not public; `reconcile_audit`, `monitor_alert`. | Provider case lacks longitudinal operating evidence. | Measure exception backlog, QA sampling, and owner response over 90 days. |
### 4.10 law_firms

| slot_id | status | marker/source | receipt (surface; atom) | boundary / contradiction / rights | falsifier / next gate |
|---|---|---|---|---|---|
| `public-w4.law_firms.production.03` | observed | `E/D · W4-L01` | NetSys reports a 25-attorney firm operating on M365 with matter-centric documents, backup, MFA, and support reduction; `sync_handoff`, `monitor_alert`. | Provider case; customer unnamed and metrics self-reported. | Run synthetic matter, mailbox, document, billing, and approval workflows. |
| `public-w4.law_firms.failure.03` | observed | `E/D · W4-L01` | Version conflicts, weekly email-server work, and unbillable IT support are reported as pre-migration failure surfaces; `monitor_alert`, `reconcile_audit`. | Case-specific operational report; no failure prevalence. | Reproduce version conflict, outage, and access-recovery fixtures. |
| `public-w4.law_firms.migration.03` | observed | `E/D · W4-L01` | Email and documents moved to Exchange Online/SharePoint with matter structure, weekend cutover, and stated fidelity; `sync_handoff`, `extract_structure`. | Self-reported “zero lost items”; no matter data accessed. | Reconcile synthetic matter metadata, versions, permissions, and mailboxes. |
| `public-w4.law_firms.cost.03` | needs_direct_review | `U · W4-L01` | Recovered attorney time and fewer support incidents are reported, but no comparable cost baseline is public; `report_digest`. | Time/incident units are not implementation cost or ROI. | Obtain declared labor/license/support units and preserve them separately. |
| `public-w4.law_firms.security.03` | observed | `E/D · W4-L01` | MFA, anti-phishing, endpoint protection, DNS filtering, and independent M365 backup are named; `approval_publish`, `monitor_alert`. | Provider description is not a penetration test or confidentiality audit. | Test matter-level authorization, MFA, backup restore, and audit retention. |
| `public-w4.law_firms.rollback.03` | needs_direct_review | `U · W4-L01` | Cloud-to-cloud backup supports recovery, but no cutover rollback or matter-state reversal is shown; `monitor_alert`. | Backup is not rollback proof. | Execute synthetic restore/cutback with document hashes and billing parity. |
| `public-w4.law_firms.portability.03` | needs_direct_review | `U · W4-L02` | DMS evaluation explicitly considers avoiding migration of legacy problems, but no export package or API contract is public; `sync_handoff`. | Selection/retention analysis is not completed portability evidence. | Inspect public DMS export formats and test matter/document re-import. |
| `public-w4.law_firms.maintenance.03` | observed | `E/D · W4-L01` | Independent backup, MFA, endpoint, and support controls create explicit ongoing maintenance ownership; `monitor_alert`, `report_digest`. | Provider case; no long-term support/retention cohort. | Track patch, access review, backup test, and incident cadence for 90 days. |

### 4.11 logistics_freight

| slot_id | status | marker/source | receipt (surface; atom) | boundary / contradiction / rights | falsifier / next gate |
|---|---|---|---|---|---|
| `public-w4.logistics_freight.production.03` | observed | `E/D · W4-LG01` | Bison’s modernization describes a new cloud TMS synchronized with legacy operations and a master data store; `sync_handoff`, `monitor_alert`. | Vendor customer case; “launched on schedule” is not independent operations proof. | Run synthetic shipment/order/truckload flows across old/new systems. |
| `public-w4.logistics_freight.failure.03` | observed | `E/D · W4-LG01` | Tight coupling, fragmented data, maintenance difficulty, and growth limits are reported in the legacy TMS; `reconcile_audit`, `monitor_alert`. | Customer case, no incident denominator or causal audit. | Inject stale master data, missed events, and integration delay into a test TMS. |
| `public-w4.logistics_freight.migration.03` | observed | `E/D · W4-LG01` | Hybrid migration uses real-time/event-driven synchronization while operational functionality moves piecemeal from on-prem to cloud; `sync_handoff`. | Provider case; schema/validation artifacts are not public. | Reconcile synthetic customer, order, and truckload master data during phased cutover. |
| `public-w4.logistics_freight.cost.03` | needs_direct_review | `U · W4-LG02` | GLCS reports successful transition and reduced internal strain but no amount, rate, or denominator; `report_digest`. | Qualitative benefit cannot be normalized to prior cost receipts. | Obtain public implementation/support cost units or retain as qualitative. |
| `public-w4.logistics_freight.security.03` | needs_direct_review | `U · W4-LG01` | Secure piecemeal migration is implied by integration architecture, but named identity/secret/access controls are absent; `approval_publish`. | Integration architecture is not a security audit. | Test carrier/customer access, credentials, event signing, and audit history. |
| `public-w4.logistics_freight.rollback.03` | needs_direct_review | `U · W4-LG01` | Old/new synchronization reduces cutover blast radius, but no executed TMS rollback or load-state repair is documented; `monitor_alert`. | Parallel migration is not rollback proof. | Run synthetic cutback and reconcile loads, carrier assignments, and invoices. |
| `public-w4.logistics_freight.portability.03` | observed | `E/D · W4-LG01` | MDS, API/event layers, and old/new TMS synchronization are direct interoperability signals; `sync_handoff`, `extract_structure`. | Interoperability does not prove export ownership or vendor-independent re-import. | Validate shipment/master-data export manifest and replay into neutral fixtures. |
| `public-w4.logistics_freight.maintenance.03` | observed | `E/D · W4-LG02` | TMS-to-ledger source changes, reporting configuration, and specialist transition support are ongoing handoff work; `monitor_alert`, `triage_route`. | Consultant case; no support queue or retention evidence. | Measure integration drift, report exceptions, and ownership after cutover. |

### 4.12 marketing_social_media_agencies

| slot_id | status | marker/source | receipt (surface; atom) | boundary / contradiction / rights | falsifier / next gate |
|---|---|---|---|---|---|
| `public-w4.marketing_social_media_agencies.production.03` | observed | `E/D · W4-MK01` | A 50K-record Salesforce→HubSpot migration is reported running with parallel systems, unified automations, and closed-loop reporting; `sync_handoff`, `report_digest`. | Consultancy case; customer/adoption metrics are self-reported. | Run synthetic contact, deal, campaign, and attribution flow with read-back. |
| `public-w4.marketing_social_media_agencies.failure.03` | observed | `E/D · W4-MK02` | Two marketing systems, customized Marketo, and unreliable Salesforce created reporting and campaign complexity; `reconcile_audit`, `monitor_alert`. | Agency case; complexity is not a failure-rate estimate. | Reproduce duplicate ownership, attribution drift, and connector-failure fixtures. |
| `public-w4.marketing_social_media_agencies.migration.03` | observed | `E/D · W4-MK02` | Marketo→HubSpot migration unified marketing/sales data after acquisitions and multi-system fragmentation; `sync_handoff`, `extract_structure`. | Provider claims foundation for 30K sites; scope and validation detail are limited. | Reconcile contacts, consent, programs, forms, attribution, and ownership synthetically. |
| `public-w4.marketing_social_media_agencies.cost.03` | needs_direct_review | `U · W4-MK01` | A 40% annual CRM/marketing-cost reduction is reported, but baseline, license scope, and labor are not independently checked; `report_digest`. | Sponsor metric; no ROI or market-size normalization. | Verify invoices, automation scope, parallel-run cost, and support labor. |
| `public-w4.marketing_social_media_agencies.security.03` | needs_direct_review | `U · W4-MK02` | System unification and visibility are described, but consent, API-token, and role controls are not; `approval_publish`. | Reporting integrity is not security assurance. | Test consent, deletion, role, secret, and third-party connector boundaries. |
| `public-w4.marketing_social_media_agencies.rollback.03` | observed | `E/D · W4-MK01` | Parallel systems and rollback plans for each integration are explicitly reported; `monitor_alert`, `sync_handoff`. | Stated plans are not executed rollback evidence. | Perform synthetic campaign/attribution cutback and compare both systems. |
| `public-w4.marketing_social_media_agencies.portability.03` | observed | `E/D · W4-MK01` | 50K records, association history, activity timelines, and automation consolidation are described as migrated; `extract_structure`, `sync_handoff`. | Vendor-specific migration is not neutral export proof. | Export/import contacts, campaigns, consent, and timeline events with checksums. |
| `public-w4.marketing_social_media_agencies.maintenance.03` | observed | `E/D · W4-MK01` | 200 automations consolidated to 34 workflows and daily validation/edge-case repair are reported; `monitor_alert`, `reconcile_audit`. | Self-reported maintenance reduction; no longitudinal support cohort. | Track workflow drift, connector errors, and owner time for 90 days. |

### 4.13 mortgage_brokers

| slot_id | status | marker/source | receipt (surface; atom) | boundary / contradiction / rights | falsifier / next gate |
|---|---|---|---|---|---|
| `public-w4.mortgage_brokers.production.03` | observed | `E/D · W4-MO02` | Mortgage AFS platform modernization is reported operating after migration to a data center with automation and compliance controls; `sync_handoff`, `triage_route`. | Vendor case; no borrower data or independent operations audit. | Run synthetic appraisal-fee/payment workflow with human approval gates. |
| `public-w4.mortgage_brokers.failure.03` | observed | `E/D · W4-MO02` | Costly outdated infrastructure, third-party dependencies, manual workflows, and business-continuity risk are reported; `monitor_alert`, `reconcile_audit`. | Provider narrative; no incident denominator. | Inject dependency failure, delayed payment, and reconciliation exceptions. |
| `public-w4.mortgage_brokers.migration.03` | observed | `E/D · W4-MO01` | 1,000+ loan deals were moved through readiness, mapping, cleansing, validation, and post-migration stabilization; `sync_handoff`, `reconcile_audit`. | Consultant case; direct page timed out once and public case/PDF content is retained. | Reconcile synthetic loan terms, fees, accruals, reports, and cash breaks. |
| `public-w4.mortgage_brokers.cost.03` | observed | `E/D · W4-MO02` | The case reports a 50% hosting-cost reduction; unit is provider-reported hosting cost, not total migration cost; `report_digest`. | No independent bill or baseline; not an ROI or adoption claim. | Audit hosting bills, migration labor, support, and third-party dependencies. |
| `public-w4.mortgage_brokers.security.03` | observed | `E/D · W4-MO02` | Secure data transfer and regulatory compliance are named for sensitive financial data; `approval_publish`, `reconcile_audit`. | Provider language is not a regulatory/security audit. | Test role, secret, transfer, audit, and retention boundaries with synthetic loans. |
| `public-w4.mortgage_brokers.rollback.03` | needs_direct_review | `U · W4-MO01` | Phased migration and post-go-live stabilization are described, but no executed loan-platform rollback; `monitor_alert`. | Phasing/stabilization is not rollback evidence. | Require cutback criteria and loan/payment/accrual reconciliation. |
| `public-w4.mortgage_brokers.portability.03` | needs_direct_review | `U · W4-MO01` | Source-target loan mapping and standardized models are described, but export rights/API and neutral re-import are absent; `sync_handoff`. | Migration into an industry platform is not exit proof. | Validate synthetic loan, document, audit, and configuration export. |
| `public-w4.mortgage_brokers.maintenance.03` | needs_direct_review | `U · W4-MO01` | Post-migration stabilization and BAU transition imply maintenance work, but owner/cadence is not measured; `monitor_alert`. | Consultant case lacks longitudinal support evidence. | Track exception/reconciliation backlog and named owner over 90 days. |
### 4.14 property_management

| slot_id | status | marker/source | receipt (surface; atom) | boundary / contradiction / rights | falsifier / next gate |
|---|---|---|---|---|---|
| `public-w4.property_management.production.03` | observed | `E/D · W4-PM01` | A 440-unit property group is reported operating an owned system for maintenance, tenancy, financials, and suppliers; `triage_route`, `report_digest`. | Anonymous provider case; “live with real tenants” is self-reported and not a client-data claim here. | Run synthetic unit, lease, maintenance, supplier, and payment workflows. |
| `public-w4.property_management.failure.03` | observed | `E/D · W4-PM01` | Seven interconnected spreadsheets, Sunday reconciliation, and two staff maintaining them are reported failure/toil surfaces; `reconcile_audit`, `monitor_alert`. | Provider case; no incident rate or matched comparator. | Reproduce duplicate, stale, and cross-sheet reconciliation failures synthetically. |
| `public-w4.property_management.migration.03` | observed | `E/D · W4-PM01` | Three years of spreadsheet history were migrated with discrepancy reconciliation before launch; `extract_structure`, `sync_handoff`. | Customer unnamed; no source files or private tenant records accessed. | Reconcile synthetic leases, financials, vendors, and maintenance histories. |
| `public-w4.property_management.cost.03` | observed | `E/D · W4-PM01` | The case reports £42K annual SaaS spend avoided; unit is one provider/customer claim and excludes build/retainer cost; `report_digest`. | Not an ROI or market-size measure; baseline is not independently audited. | Compare invoices, build labor, retainer, hosting, and avoided license scope. |
| `public-w4.property_management.security.03` | needs_direct_review | `U · W4-PM02` | Validation of deposits, receivables, leases, and ancillary products is described, but explicit access/security controls are not; `reconcile_audit`. | Financial validation is not a security audit. | Test resident/owner/vendor roles, payment secrets, audit, and export restrictions. |
| `public-w4.property_management.rollback.03` | needs_direct_review | `U · W4-PM02` | Two-wave validation reduces migration risk, but no executed rollback or restore is public; `monitor_alert`. | Validation waves are not cutback proof. | Execute synthetic restore and reconcile deposits, leases, GL, and work orders. |
| `public-w4.property_management.portability.03` | observed | `E/D · W4-PM01` | IP ownership and hosting on the customer domain are explicitly reported; `sync_handoff`, `extract_structure`. | Ownership is not a complete export/API/maintenance contract. | Verify source, schema, data, secrets, jobs, and audit export into a neutral environment. |
| `public-w4.property_management.maintenance.03` | observed | `E/D · W4-PM01` | An ongoing 0.5-engineer retainer and fortnightly feature releases are named; `monitor_alert`, `approval_publish`. | Provider case; retainer scope and support burden are not independently measured. | Track patch, feature, connector, backup, and owner effort over 90 days. |

### 4.15 real_estate

| slot_id | status | marker/source | receipt (surface; atom) | boundary / contradiction / rights | falsifier / next gate |
|---|---|---|---|---|---|
| `public-w4.real_estate.production.03` | observed | `E/D · W4-RE01` | UAE agency CRM is reported handling lead APIs, broker/developer inventory, WhatsApp brochures, and maintenance tickets; `triage_route`, `sync_handoff`. | SEO/AEO-heavy provider case; no authenticated brokerage adoption claim. | Run synthetic lead, listing, inventory, transaction, and approval flows. |
| `public-w4.real_estate.failure.03` | observed | `E/D · W4-RE02` | Leads from four systems, slow response, scattered documents, and low pipeline visibility are reported; `monitor_alert`, `reconcile_audit`. | Provider case with anonymous broker; no measured failure prevalence. | Reproduce lead duplication, missed routing, and document-version failures. |
| `public-w4.real_estate.migration.03` | observed | `E/D · W4-RE01` | Disjoint spreadsheets were transitioned to an integrated CRM with external lead-source webhooks; `intake_normalize`, `sync_handoff`. | Marketing copy and no public migration field map; no client data accessed. | Reconcile synthetic contacts, listings, lead source, consent, and stage history. |
| `public-w4.real_estate.cost.03` | needs_direct_review | `U · W4-RE02` | “Paid for itself” and admin-time savings are reported without price, labor, or counterfactual; `report_digest`. | No cost denominator; no ROI normalization. | Obtain public quote/invoice and preserve license, build, support, and labor units. |
| `public-w4.real_estate.security.03` | needs_direct_review | `U · W4-RE01` | Secure webhooks and API connectivity are named, but role, secret, MLS, and retention controls are not evidenced; `approval_publish`. | “Secure” provider wording is not a security audit. | Test lead-source authorization, agent roles, secrets, and deletion/export. |
| `public-w4.real_estate.rollback.03` | needs_direct_review | `U · W4-RE02` | Unified CRM launch is reported, but no traffic/data cutback or transaction rollback is described; `monitor_alert`. | Launch result is not rollback proof. | Require staged release and reconcile lead/listing/transaction state after cutback. |
| `public-w4.real_estate.portability.03` | needs_direct_review | `U · W4-RE01` | API/webhooks support integration, but no export schema or neutral re-import is shown; `sync_handoff`. | Integration is not portability or exit-rights evidence. | Validate contacts, listings, documents, audit, and webhook replay export. |
| `public-w4.real_estate.maintenance.03` | observed | `E/D · W4-RE02` | Lead routing, follow-up, transaction documents, and dashboards imply ongoing CRM/data maintenance; `monitor_alert`, `triage_route`. | Provider case; no maintenance owner or retention cohort. | Measure duplicate repair, connector drift, and report freshness over 90 days. |

### 4.16 recruiting_staffing

| slot_id | status | marker/source | receipt (surface; atom) | boundary / contradiction / rights | falsifier / next gate |
|---|---|---|---|---|---|
| `public-w4.recruiting_staffing.production.03` | observed | `E/D · W4-RC01` | Manpower SEE’s eight-country Datacruit ATS rollout is reported live with 130+ users, migration, training, and continuity; `sync_handoff`, `triage_route`. | Vendor/implementation case; no candidate data or adoption denominator. | Run synthetic requisition, candidate, consent, stage, and placement workflows. |
| `public-w4.recruiting_staffing.failure.03` | observed | `E · W4-RC02` | Hiring data-fusion study found keyword signals did not predict production in the examined deployment; `reconcile_audit`. | One insurance-carrier deployment; “production” is a study outcome, not recruiting prevalence. | Reproduce decision-trace evaluation with declared labels and bias/error review. |
| `public-w4.recruiting_staffing.migration.03` | observed | `E/D · W4-RC01` | Data migrated from several prior systems during an eight-country ATS implementation; `extract_structure`, `sync_handoff`. | Full case study is download-oriented; field map and candidate records are unavailable. | Reconcile synthetic candidate history, requisitions, owners, consent, and reports. |
| `public-w4.recruiting_staffing.cost.03` | needs_direct_review | `U · W4-RC01` | Four-month rollout and 130+ users are described without implementation/license/support cost; `report_digest`. | Time/user counts are not cost or ROI. | Obtain public scope/price units and preserve training/labor/license separately. |
| `public-w4.recruiting_staffing.security.03` | needs_direct_review | `U · W4-RC02` | Decision traces preserve evidence chains across ATS/HRIS/assessment data, but security controls are not detailed; `reconcile_audit`. | Traceability is not access-control or privacy assurance. | Test candidate PII minimization, role isolation, retention, and export. |
| `public-w4.recruiting_staffing.rollback.03` | needs_direct_review | `U · W4-RC01` | Gradual onboarding and continuity are reported, but ATS cutback/restore execution is not; `monitor_alert`. | Staged rollout is not rollback evidence. | Require candidate/status snapshot and restore reconciliation. |
| `public-w4.recruiting_staffing.portability.03` | observed | `E · W4-RC02` | Study directly joins ATS, HRIS, and behavioral-assessment systems into structured decision traces; `sync_handoff`, `extract_structure`. | Fusion is a research deployment, not vendor-neutral export proof. | Export/re-import synthetic candidate, assessment, outcome, and trace lineage. |
| `public-w4.recruiting_staffing.maintenance.03` | observed | `E/D · W4-RC01` | A long-term training channel for onboarding new employees is reported after rollout; `monitor_alert`, `approval_publish`. | Vendor/customer statement; no support queue or retention evidence. | Track ATS schema drift, training refresh, integration errors, and owners. |

### 4.17 saas

| slot_id | status | marker/source | receipt (surface; atom) | boundary / contradiction / rights | falsifier / next gate |
|---|---|---|---|---|---|
| `public-w4.saas.production.03` | observed | `E/D · W4-SA01` | A B2B SaaS platform is described operating with 200+ tenant databases before a branching redesign; `monitor_alert`, `sync_handoff`. | Provider case; customer count and production claims are self-reported. | Run synthetic multi-tenant reads/writes with isolation and latency assertions. |
| `public-w4.saas.failure.03` | observed | `E/D · W4-SA01` | Cross-tenant near-miss, connection-pool saturation, schema inconsistency, and ~3% migration failure are reported; `reconcile_audit`, `monitor_alert`. | Provider metrics and near-miss are not independently audited; no real tenant data accessed. | Inject cross-tenant query, pool, partial migration, and schema-drift failures. |
| `public-w4.saas.migration.03` | observed | `E/D · W4-SA01` | Database-per-tenant to copy-on-write branching migration is described with template/rebase/branch-and-swap steps; `sync_handoff`, `extract_structure`. | Vendor case; architecture description is not proof of general portability. | Reconcile tenant schema/data/permissions through synthetic rolling migration. |
| `public-w4.saas.cost.03` | observed | `E/D · W4-SA01` | Source reports $18.4K→$2.7K monthly infrastructure cost and $92→$13.50 per-tenant units; `report_digest`. | Sponsor metrics, projected/selected scope, and no independent bills; units remain local. | Audit resource, backup, connection, migration, and tenant-count denominators. |
| `public-w4.saas.security.03` | observed | `E/D · W4-SA01` | RLS near-miss, database-per-tenant isolation, branching, and backup-retention tradeoffs are named security/isolation surfaces; `approval_publish`, `reconcile_audit`. | Design/near-miss narrative is not an independent security assessment. | Test cross-tenant auth, secrets, backups, logs, deletion, and branch isolation. |
| `public-w4.saas.rollback.03` | observed | `E/D · W4-SA01` | Branch-and-swap and branch rename are described as sub-second rollback/recovery controls; `monitor_alert`, `approval_publish`. | Stated mechanism is not an executed production rollback result. | Run failed-schema rollout and tenant-scoped branch reversal with parity checks. |
| `public-w4.saas.portability.03` | observed | `E · W4-SA02` | Reverse cloud→on-prem migration paper describes simulate/replicate/delegate across compute, storage, database, workflow, logging, auth, and AI services; `sync_handoff`. | Technical paper and author-reported case do not prove customer export rights. | Build a neutral deployment manifest and verify cloud/on-prem behavior parity. |
| `public-w4.saas.maintenance.03` | observed | `E · W4-SA02` | Keeping cloud/on-prem versions synchronized with releases every three weeks is an explicit maintenance burden/control; `monitor_alert`, `report_digest`. | Technical case, no retention or customer-support cohort. | Track dual-target release drift, patch toil, rollback, and ownership for 90 days. |
## 5. Combined ledger, adversarial checks, and artifact smoke

### Combined public ledger contract

The combined view is intentionally layered rather than flattened:

| Layer | Stable row identity | Source floor | Count |
|---|---|---|---:|
| Wave 2 | `public-w2.<industry>.<signal>.<01–08>` | `W2-P01`–`W2-P74`, `W2-N01`–`W2-N36` | 136 |
| Wave 3 | `public-w3.<industry>.<signal>.02` | 34 new W3 source identities | 136 |
| Wave 4 | `public-w4.<industry>.<signal>.03` | 34 new W4 source identities | 136 |
| Combined | three public receipts per industry/signal pair | 110 + 34 + 34 = 178 unique public URLs | **408** |

Wave 2 and Wave 3 remain immutable at their prior paths. Wave 4 does not
rewrite their claims or erase their quality gaps. The combined ledger is not a
claim that three sources are independent of one another economically: the
source table retains provider sponsorship, customer anonymity, composite cases,
lead-generation framing, gated/download-oriented pages, stale or indirect
research, and missing denominators.

### Quality and rights carry-forward

- Vendor and consultant metrics remain `D`/self-reported unless a public
  agency or empirical source directly supports the narrower statement.
- A migration, integration, backup, fallback, “live” or “production” claim is
  not silently upgraded into portability, successful rollback, safety,
  retention, or representative adoption.
- Public source access is limited to pages, indexed abstracts, public PDFs,
  and concise attribution/paraphrase. No login, paywall, authenticated
  workspace, customer dataset, private contract, or personal record was
  accessed.
- Cost units remain local: per-seat, annual saving, staff hours, hosting
  run-rate, program scope, record volume, and support effort are not
  normalized across industries.
- Low-signal and regulated relations stay explicitly unresolved where direct
  evidence is absent: `needs_direct_review`, `unobserved`, or `U` is not a
  negative demand signal.

### Falsifiers and next gates

| Signal / hypothesis | Falsifier | Next bounded gate |
|---|---|---|
| Public vertical receipts repeatedly cluster around mapping, reconciliation, approval, and recovery | Source-stratified empirical samples show these are not recurring constraints, or generic builders preserve them without expert review | Code a sample with denominators and independent adjudication. |
| A third receipt improves coverage confidence | W4 sources collapse to the same sponsor, describe adjacent workflows, or fail source-identity disjointness | Require unrelated source families for high-impact cells and downgrade sponsor clusters. |
| Rollback language predicts recoverability | Synthetic rollback loses side effects, audit history, tenant isolation, or data lineage despite a stated fallback | Execute read-only cutback drills with explicit kill criteria and post-condition read-back. |
| Portability is more than a vendor label | Export/import fixtures lose permissions, versions, relations, configurations, or audit history | Require schema, export manifest, checksum, re-import, and ownership evidence. |
| Public cost receipts can scope a project | Units, baselines, or denominators cannot be reconciled even within a vertical | Keep cost qualitative and collect itemized public or synthetic benchmark units. |
| Regulated/low-signal verticals can support narrow atoms safely | Synthetic healthcare, education, insurance, or mortgage fixtures fail authorization, privacy, recovery, or audit gates | Do not use client data; require named authority and synthetic read-only fixtures. |
| Maintenance ownership is material | Repeated releases show no measurable alert, patch, support, repair, or drift burden | Run a 90-day maintenance ledger with owner, SLA, and escalation evidence. |

### Reproducible artifact smoke

From the repository root, the following checks are the completion gate for this
lane. They validate exact row/source/industry/signal arithmetic, prior-source
preservation, W4 identity disjointness, and the public-only claim boundary.

```sh
W2=research/actionmodel-builder-research-2026-08-26/expansion/wave-2/outputs/public-signals-wave-2.md
W3=research/actionmodel-builder-research-2026-08-26/expansion/wave-3/outputs/public-signals-wave-3.md
W4=research/actionmodel-builder-research-2026-08-26/expansion/wave-4/outputs/public-signals-wave-4.md
test -s "$W4"
test "$(rg -c '^[|] Wave 4 slot status [|] `observed` 84; `needs_direct_review` 51; `unobserved` 1; `blocked` 0 [|] ' "$W4")" -eq 1
test "$(rg '^### 4' "$W4" | cut -d' ' -f2 | paste -sd, -)" = "4.1,4.2,4.3,4.4,4.5,4.6,4.7,4.8,4.9,4.10,4.11,4.12,4.13,4.14,4.15,4.16,4.17"
test "$(rg -c '^\| `public-w4\.' "$W4")" -eq 136
test "$(rg -o '^\| `public-w4\.[^.]+\.[^.]+\.03`' "$W4" | sort -u | wc -l | tr -d ' ')" -eq 136
test "$(rg -o '^\| `public-w4\.[^.]+\.[^.]+\.03`' "$W4" | sed -E 's/^\| `public-w4\.([^.]+)\.([^.]+)\.03`/\1|\2/' | cut -d'|' -f1 | sort -u | wc -l | tr -d ' ')" -eq 17
test "$(rg -o '^\| `public-w4\.[^.]+\.[^.]+\.03`' "$W4" | sed -E 's/^\| `public-w4\.([^.]+)\.([^.]+)\.03`/\1|\2/' | cut -d'|' -f2 | sort -u | wc -l | tr -d ' ')" -eq 8
test "$(rg -c '^\| `W4-' "$W4")" -eq 34
test "$(rg -c 'public-w2\.' "$W2")" -eq 136
test "$(rg -c '^\| `public-w3\.' "$W3")" -eq 136
test "$(rg -o 'https?://[^ )>]+' "$W2" | sort -u | wc -l | tr -d ' ')" -eq 110
test "$(rg -o 'https?://[^ )>]+' "$W3" | sort -u | wc -l | tr -d ' ')" -eq 34
! rg -ni '(claims?|evidence|observed|measured|verified|supports?)[: ]{0,12}(authenticated adoption|private adoption|client data|market size|representative adoption)' "$W4"
```


The source-disjointness check below is intentionally separate because Markdown
row counts cannot prove URL identity:

```sh
node - "$W2" "$W3" "$W4" <<'NODE'
const fs = require('fs');
const [w2Path, w3Path, w4Path] = process.argv.slice(2);
const read = p => fs.readFileSync(p, 'utf8');
const urls = s => [...s.matchAll(/https?:\/\/[^ )>]+/g)].map(m => m[0].replace(/[.,;]+$/, ''));
const sourceLines = (s, wave) => s.split('\n').filter(line => new RegExp('^\\| `' + wave + '-').test(line));
const w2 = read(w2Path), w3 = read(w3Path), w4 = read(w4Path);
const headings = w4.split(String.fromCharCode(10)).filter(line => line.startsWith('### 4.')).map(line => line.split(' ')[1]);
const headerStatus = w4.split(String.fromCharCode(10)).some(line => line.startsWith('| Wave 4 slot status |') && line.includes('`observed` 84; `needs_direct_review` 51; `unobserved` 1; `blocked` 0 |'));
const w2Urls = new Set(urls(w2));
const w3Urls = new Set(urls(w3));
const w4SourceLines = sourceLines(w4, 'W4');
const w4Urls = urls(w4SourceLines.join('\n'));
const w4Ids = new Set(w4SourceLines.map(line => line.match(/^\| `(W4-[^`]+)`/)?.[1]).filter(Boolean));
const rows = w4.split('\n').filter(line => /^\| `public-w4\./.test(line));
const rowIds = rows.map(line => line.match(/^\| `([^`]+)`/)?.[1]).filter(Boolean);
const refs = [...new Set(rows.flatMap(line => line.match(/W4-[A-Z0-9]+/g) || []))];
const prior = new Set([...w2Urls, ...w3Urls]);
const result = {
  wave2_urls: w2Urls.size,
  wave3_urls: w3Urls.size,
  prior_union_urls: prior.size,
  wave4_source_rows: w4SourceLines.length,
  wave4_urls: new Set(w4Urls).size,
  wave4_overlap_prior: w4Urls.filter(url => prior.has(url)),
  wave4_duplicate_urls: [...new Set(w4Urls.filter((url, i) => w4Urls.indexOf(url) !== i))],
  missing_source_ids: refs.filter(id => !w4Ids.has(id)),
  unused_source_ids: [...w4Ids].filter(id => !refs.includes(id)),
 rows: rows.length,
 unique_rows: new Set(rowIds).size,
  heading_order: headings,
  header_status: headerStatus,
 observed_indices: [...new Set(rowIds.map(id => id.split('.').at(-1)))],
};
console.log(JSON.stringify(result, null, 2));
const expectedHeadings = Array.from({length: 17}, (_, i) => '4.' + (i + 1));
if (result.heading_order.join(',') !== expectedHeadings.join(',')) process.exit(1);
if (!result.header_status) process.exit(1);
if (result.wave2_urls !== 110 || result.wave3_urls !== 34 || result.prior_union_urls !== 144 || result.wave4_source_rows !== 34 || result.wave4_urls !== 34 || result.wave4_overlap_prior.length || result.wave4_duplicate_urls.length || result.missing_source_ids.length || result.unused_source_ids.length || result.rows !== 136 || result.unique_rows !== 136 || result.observed_indices.length !== 1 || result.observed_indices[0] !== '03') process.exit(1);
NODE
```

## 6. Research-only boundary

No authenticated adoption, representative prevalence, market size, client
value, private contract, willingness-to-pay, retention cohort, product
readiness, safety certification, implementation authorization, deployment,
rollback execution, client data, or admitted block is claimed. The artifact is
a dated public-signal ledger and evidence map only. Parent target remains
active with the Wave 4 program’s remaining matrix slots open.

## 7. Coordinator callback receipt

After §5 smoke passes, fresh-resolve the coordinator pane with
`/Users/shaansisodia/.local/bin/herdr pane list`, verify the CENA transcript,
send the short receipt, and read it back. Required message:

```text
[from: RCH-PUBLIC-W4] @CENA: DONE RCH-PUBLIC-W4. Report written at research/actionmodel-builder-research-2026-08-26/expansion/wave-4/outputs/public-signals-wave-4.md. Preserved Wave 2 (110 URLs) and Wave 3 (34 URLs), added 34 new public source identities and 136 third-receipt slots across 17 industries x 8 signal types (408 combined public slots). Quality gaps, sponsorship, access limits, contradictions, falsifiers, and unresolved states are explicit; no authenticated adoption, client-data, private, implementation, or admission claim. 0 blockers; parent long-run goal remains active.
```

Parent goal status remains **active**. Completing this lane does not close the
overall Wave 4 gate or authorize implementation.

## 8. Corrective coordinator callback receipt

Coordinator verification found that the existing Wave 4 blocks were rotated
even though their rows, sources, and counts were correct. The blocks were
reordered in place to the proven heading sequence `4.1` through `4.17`; no
row, source, status, or count was changed. The corrective callback is:

```text
[from: RCH-PUBLIC-W4] @CENA: CORRECTED RCH-PUBLIC-W4. Reordered the existing Wave 4 section blocks to heading order 4.1 through 4.17 without changing any row, source, status, or count. Heading-order proof and full smoke pass: 136 rows, 34 disjoint W4 URLs, 408 combined public slots. No authenticated adoption, client-data, private, implementation, or admission claim; parent long-run goal remains active.
```

## 9. Metadata reconciliation receipt

The W4 summary metadata now matches the row-derived status counts exactly:
`observed` 84, `needs_direct_review` 51, `unobserved` 1, and `blocked` 0.
Only the W4 summary line and its receipt text were updated; every evidence
row, source row, and row status remains preserved. The corrective callback is:

```text
[from: RCH-PUBLIC-W4] @CENA: DONE RCH-PUBLIC-W4 metadata reconciliation. Updated only the W4 summary line and embedded expected-count text to observed 84 / needs_direct_review 51 / unobserved 1 / blocked 0, matching all 136 row-derived statuses. Full smoke passes; row/source/status preservation is proven. No authenticated adoption, client-data, private, implementation, or admission claim; parent long-run goal remains active.
```
