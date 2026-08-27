# Action Model Builder — public signals wave 3

**Run:** `actionmodel-builder-research-2026-08-26`  
**Parent phase:** tranche 1 verified; long-run matrix active  
**Wave:** `matrix-wave-3-industry-dimension-deepening`  
**Lane:** `RCH-PUBLIC-W3`  
**Observed:** 2026-08-26 (ICT)  
**Mode:** public research and ideation only; no authenticated accounts, client data, private contract, repository copying, implementation, deployment, or adoption admission

## Executive read

This report preserves the Wave 2 public floor and adds a second, independent
public receipt for every one of the 17 catalogue industries × 8 signal types.
The result is a **272-slot combined public ledger**: 136 Wave 2 slots carried
forward plus 136 new Wave 3 slots (`public-w3.<industry>.<signal>.02`). A
Wave 3 source identity is new relative to the Wave 2 packet; a source may
support more than one signal only when the inspected page surface directly
supports that signal. Repeating a URL is never counted as a second source.

The new evidence is strongest for production constraints, migrations,
failure modes, auditability, and recovery planning. Cost, portability,
security, and maintenance remain more uneven. Vendor-hosted case studies and
press releases are documented receipts, not independent audits; public agency
reports and empirical papers are kept separate from commercial claims.

| Ledger result | Count / state | Interpretation |
|---|---:|---|
| Wave 2 floor preserved | 110 unique URLs; `W2-P01`–`W2-P74` and `W2-N01`–`W2-N36` | The prior packet is immutable input; no Wave 2 URL is replaced in this lane. |
| Wave 3 source delta | 34 new source identities; `W3-A01`–`W3-SA02` | Two new public identities per industry; source quality and sponsorship are recorded below. |
| Wave 2 public slots | 136 | One explicit slot per industry × signal type in `public-signals-wave-2.md`. |
| Wave 3 new slots | 136 | One explicit `02` receipt per industry × signal type below. |
| Combined public ledger | **272** | Two public receipts per industry × signal type, subject to the access and quality limits below. |
| Wave 3 slot status | `observed` 86; `needs_direct_review` 44; `unobserved` 4; `blocked` 2 | Gaps are explicit and are not negative evidence. |
| Retention evidence | 0 audited cohorts | “Live,” “launched,” “customer,” and “retention” remain separate. |

### Safe synthesis

1. **Production is bounded.** Public receipts repeatedly describe narrow
   workflows—case intake, project approvals, claims migration, course
   delivery, checkout, dispatch, brokerage CRM, or multi-tenant service
   operation—not general autonomous app generation.
2. **Transition is the high-friction surface.** Data mapping, reconciliation,
   permissions, integration drift, staged cutover, and post-launch ownership
   recur across the new sources. The pattern is useful as a design hypothesis,
   not as a prevalence estimate.
3. **Rollback is a capability, not a result.** A source saying “rollback path,”
   “blue-green,” or “reversible DNS” records a control claim. It does not prove
   that a rollback was executed successfully under production conditions.
4. **Public cost units do not normalize.** The ledger retains dollars per
   month/year, project savings, staff time, infrastructure run-rate, and
   program cost as different units. No market-size, ROI, or willingness-to-pay
   claim is made.
5. **The governed-assembly thesis remains falsifiable.** It weakens if
   controlled longitudinal studies show general builders routinely preserve
   authorization, data lineage, side-effect correctness, migration fidelity,
   cost ceilings, and recovery without expert review. The next gate is a
   synthetic, read-only comparison with deterministic fixtures.

## 1. Evidence and independence contract

Evidence class and source quality are separate axes:

| Code | Evidence class | Source-quality class | Use |
|---|---|---|---|
| `E` | Public page, paper, public agency record, or first-party incident record was directly inspected | `A` public agency / empirical / first-party operator; `B` vendor-hosted operator receipt; `C` press release, community, or derivative source | The surface exists and was inspected; it is not automatically independently audited. |
| `D` | Documented or self-reported claim | Any | Customer quote, vendor case study, consultant case, survey, or release. |
| `I` | Bounded inference across receipts | `S` synthesis | Used only for a cautious cross-source pattern; never an adoption or demand fact. |
| `U` | Unknown, weak, stale, contradictory, gated, or access-limited | Any | The source is retained as a gap or admission boundary, not upgraded to evidence. |

Each row below has a stable `slot_id`, exact `industry_id`, exact signal type,
Wave 3 observation index `02`, observed date, source identity, inspected
surface, evidence marker, relation to an Action Model atom, limitation/status,
rights/admission boundary, contradiction note, and falsifier/next gate. The
second receipt means “new public source identity relative to Wave 2,” not
authenticated usage and not a claim that the same source is independent of its
customer or sponsor.

Signal meanings are narrow: `production` = a public report of a running or
operational workflow; `failure` = a reported incident, defect, or operational
risk; `migration` = a move, replatform, consolidation, or modernization;
`cost` = a declared cost/time/savings unit; `security` = a named control,
incident, or security gap; `rollback` = a stated reversal, fallback, or
recovery control; `portability` = export, API, source/data ownership, or
reversible architecture; `maintenance` = ongoing patching, support, monitoring,
or ownership. None implies representative adoption.

## 2. Wave 3 source delta (34 new public identities)

All URLs in this table were inspected or resolved from a public indexed record
on 2026-08-26. `B` means provider or customer story with commercial
sponsorship/selection risk; `A` means public agency, empirical, or first-party
incident record; `C` means press-release, community, or derivative surface.
Access is public-web access only; no login, paid plan, client data, or private
contract was used.

| ID | Published / accessed date | Quality / type | Public source and inspected receipt | Sponsorship, contradiction, or access limit |
|---|---|---|---|---|
| `W3-A01` | 2026-05-20; observed 2026-08-26 | `B` vendor case | [Vyrion accountancy onboarding](https://vyrion.tech/case-studies/ai-accountancy-client-onboarding-workflow-automation) — staged client onboarding, AML/CDD accountability, workflow timing. | Provider-authored; confidential customer and no independent outcome audit. |
| `W3-A02` | date not stated; observed 2026-08-26 | `B` vendor-hosted operator | [SuperStack accounting firm](https://www.superstackit.com/case-studies/accounting-firm-eliminated-it-downtime-tax-season) — server crash, missing MFA/endpoint controls, recovery and recurring operations. | Provider case; “eliminated downtime” and customer metrics are self-reported. |
| `W3-C01` | date not stated; observed 2026-08-26 | `B` vendor-hosted operator | [Salem Constructors / SubmittalLink](https://www.submittallink.com/case-studies/salem-constructors) — four-tool consolidation, change orders, RFIs, drawing versioning, closeout. | Customer quote is hosted by the platform vendor; no independent project audit. |
| `W3-C02` | public 2024-01-17; observed 2026-08-26 | `A` public agency / empirical | [U.S. DOT construction change-order report](https://rosap.ntl.bts.gov/view/dot/79429) — public change-order causes and management controls. | Research is not an AI-builder or product-migration trial; applicability is indirect. |
| `W3-CC01` | date not stated; observed 2026-08-26 | `B` vendor case | [YUSMP course-maker platform](https://yusmpgroup.com/cases/course-maker) — course production, role controls, audit log, privacy and stated price band. | Provider-authored; quoted budget is not an audited spend or cohort outcome. |
| `W3-CC02` | date not stated; observed 2026-08-26 | `B` vendor case | [LifeSpring WordPress-to-Next.js migration](https://shuvogt.com/case-studies/lifespring-wordpress-to-nextjs-migration) — 100K-daily-visitor educational site, plugin ceiling, migration and support. | Provider case; traffic and migration claims are not independently verified. |
| `W3-EC01` | 2026-03-08; observed 2026-08-26 | `B` vendor case | [Webskyne multi-region ecommerce modernization](https://www.webskyne.com/posts/modernizing-a-multi-region-e-commerce-platform-for-10-scale-a-full-stack-case-study-150229) — Strangler migration, checkout, peak reliability, observability. | Vendor-authored; reported performance and cost percentages are self-reported. |
| `W3-EC02` | date not stated; observed 2026-08-26 | `B` vendor case | [BritonOne omnichannel retailer cloud migration](https://www.britononetech.com/case-studies/cloud-devops/cloud-retail-migration) — realistic peak load test, elastic cutover, rollback path. | Provider case; “zero outages” is not an independent incident review. |
| `W3-ED01` | 2026-03-19; observed 2026-08-26 | `A` sector report | [Jisc technical legacy in UK higher education](https://www.jisc.ac.uk/reports/tackling-technical-legacy-in-uk-higher-education-a-strategic-imperative) — legacy cost/maintenance burden and sector governance. | Sector synthesis, not a controlled migration benchmark; estimates are not normalized here. |
| `W3-ED02` | 2026-05 incident; observed 2026-08-26 | `A` first-party incident | [Instructure incident updates](https://www.instructure.com/incident_update) — Canvas security incident, service/access disruption and recovery updates. | Vendor incident record; public chronology may omit forensic or customer-specific detail. |
| `W3-HC01` | 2026 report; observed 2026-08-26 | `A` public agency | [GAO VA electronic health-record modernization](https://files.gao.gov/reports/GAO-26-108812/index.html) — deployment delays, safety/reliability concerns, cost and reset actions. | Government audit is strong public evidence but concerns one program; no client-data access. |
| `W3-HC02` | posted 2022; observed 2026-08-26 | `A` empirical | [Automation in security patch management](https://arxiv.org/abs/2209.01518) — practitioner interviews across three organizations, patching/coordination constraints. | Small qualitative sample; not a healthcare adoption or clinical-safety claim. |
| `W3-HO01` | 2026-08-20; observed 2026-08-26 | `C/B` industry/vendor case | [FIDI Hotel failed PMS migration](https://hoteltechreport.com/news/the-fidi-hotel) — duplicate reservations/revenue, reversal of a failed migration, two-month recovery. | Industry publication and supplier case; customer identity/financial details are limited. |
| `W3-HO02` | 2026-06-18; observed 2026-08-26 | `C` press release | [Sedin Maximo SaaS migration for resort operator](https://www.prnewswire.com/apac/news-releases/sedin-technologies-completes-ibm-maximo-application-suite-saas-migration-for-major-asia-pacific-resort-operator-across-five-properties-302803227.html) — five properties, maintenance workflow rebuild, stated downtime. | Provider release distributed by PRNewswire; results and no-disruption claim are not audited. |
| `W3-IT01` | 2026-02; observed 2026-08-26 | `C` sector report | [MSP Global State of the Industry 2026](https://www.mspglobal.com/wp-content/uploads/2026/02/MSP-GLOBAL-State-of-the-Industry-Report-2026-Winter-min-1.pdf) — managed-service operating pressures and AI positioning. | Survey/report methodology and denominator are not used as market adoption evidence. |
| `W3-IT02` | 2025-12; observed 2026-08-26 | `B` consultant/operator transition record | [DayBlink MSP transition support](https://dayblinkconsulting.com/wp-content/uploads/2025/12/Managed-Service-Provider-Technology-Transition-Support.pdf) — incoming/outgoing vendor shadowing, service catalog, accountability and handoff. | Consultant-authored; no named customer outcome or independent cost measure. |
| `W3-IN01` | 2026-01-12; observed 2026-08-26 | `B` vendor case | [Davies P&C claims migration](https://davies-group.com/consulting/case-studies/claims-system-data-migration/) — thousands of records manually validated, 25-person remediation, QA sampling. | Provider case; “on schedule” and error reduction are not independently audited. |
| `W3-IN02` | 2026; observed 2026-08-26 | `B` vendor case | [Sutherland Guidewire claims modernization](https://www.sutherlandglobal.com/insights/case-study/legacy-claims-migration-to-guidewire-saas-claimcenter) — four legacy platforms, missing models, 60K+ claims, auditable routing. | Provider case; client identity and post-cutover evidence are limited. |
| `W3-L01` | date not stated; observed 2026-08-26 | `B` vendor case | [AllNext ProLaw to Azure](https://www.allnextlegal.com/case-studies/prolaw-microsoft-azure-migration) — legal practice migration, stated uptime/security and staged service move. | Provider-authored; no independent uptime or recovery test. |
| `W3-L02` | date not stated; observed 2026-08-26 | `B` vendor case | [Level5 Boca Raton law firm](https://www.level5mgmt.com/case-studies/boca-raton-law-firm/) — major breach, delayed court work, O365/private-cloud recovery. | Provider narrative; incident scope and remediation metrics are not public. |
| `W3-LG01` | go-live 2025-09; observed 2026-08-26 | `B` consultant/customer reference | [Milliken transportation modernization](https://westernacher.com/work/millikens-digital-transformation-in-transportation-2/) — legacy ERP replacement with SAP TM/S/4HANA, centralized transport operations, carrier selection, and freight visibility. | Consultant-hosted customer reference; measurable savings are stated without a public unit or independent audit. |
| `W3-LG02` | 2026-07-09; observed 2026-08-26 | `C/B` press release / operator quote | [APL Cargo TMS exit](https://www.globenewswire.com/news-release/2026/07/09/3324927/0/en/The-Hidden-Cost-of-Outdated-Systems-How-One-Carrier-s-Exit-From-Legacy-TMS-Freed-Six-Figures-on-Day-One.html) — five years of history, dispatch workload and stated savings. | Datatruck-sponsored release; operator quote is useful but no independent spend audit. |
| `W3-MK01` | date not stated; observed 2026-08-26 | `B` vendor case | [Katalor RevOps merger integration](https://www.katalorgroup.com/case-studies/revops-merger-integration/) — migration waves, training, parallel validation and rollback. | Provider-authored; claimed waste/savings are not independently checked. |
| `W3-MK02` | date not stated; observed 2026-08-26 | `B` vendor case | [MarketOne Marketo migration rescue](https://www.marketone.com/case-studies/orchestrating-mission-impossible-map-migration-rescue-6-weeks) — stalled migration rescue, continuity and phased delivery. | Agency case; no customer telemetry, retention, or neutral comparison. |
| `W3-MO01` | 2026-03-27; observed 2026-08-26 | `B` consultancy case | [PIC mortgage transformation stabilization](https://www.picconsulting.co.uk/news/case-study-stabilising-a-major-programme/) — stalled mortgage SaaS program, test/governance weakness and reset. | Consultancy narrative; customer identity and financial impact are limited. |
| `W3-MO02` | 2026-06-22; observed 2026-08-26 | `B` vendor case | [Drata mortgage-servicing compliance migration](https://drata.com/customers/wins/a-sunset-deadline-forces-a-compliance-migration-that-could-not-wait) — platform sunset, 65 recurring tasks, compliance migration. | Vendor customer story; process count is self-reported and not an adoption denominator. |
| `W3-PM01` | date not stated; observed 2026-08-26 | `B` vendor case | [RPDI Access database replacement](https://www.rpdi.us/blog/case-study-access-database-replacement/) — multi-user failure, backup and replacement of a property/contractor database. | Provider case; customer details and recovery test evidence are limited. |
| `W3-PM02` | date not stated; observed 2026-08-26 | `B` vendor case | [Fortress property-platform transition](https://www.fortresstech.io/two-plus-four-companies-case-study) — data accuracy, onboarding, and transition to a shared property platform. | Provider case; no independent data-quality or retention audit. |
| `W3-RE01` | direct page inspected 2026-08-26 | `B` consultant case | [TwoPir Propertybase brokerage CRM](https://www.twopirconsulting.com/case-study/streamlining-property-management-with-propertybase/) — MLS/IDX, listing/transaction workflows, phased implementation and salvage/rebuild. | Salesforce partner sponsorship; “200+ implementations” is not used as prevalence. |
| `W3-RE02` | direct page inspected 2026-08-26 | `B` vendor case | [InsightsTap brokerage CRM unification](https://insightstap.com/success-stories/data-cleanup-real-estate) — contacts across Zillow/MLS/forms, cleanup, segmentation and integration. | Full playbook is gated/download-oriented; operational outcomes are limited. |
| `W3-RC01` | date not stated; observed 2026-08-26 | `B` vendor case | [Orchestrix recruitment HRIS operation](https://orchestrix.co.uk/case-studies/recruitment-operation-hris) — eight-system consolidation, migration, savings and post-support. | Provider-authored; stated annual saving is not an independently audited cost. |
| `W3-RC02` | posted 2021; observed 2026-08-26 | `A` empirical | [LinkedIn enterprise data migration study](https://arxiv.org/abs/2102.01244) — enterprise data migration architecture and operational tradeoffs. | Older cross-industry paper; not a recruiting-product benchmark or adoption claim. |
| `W3-SA01` | 2026-03-04; observed 2026-08-26 | `B` vendor case | [StackHarbor monolith-to-PaaS SaaS modernization](https://stackharbor.com/en/case-studies/2026-03-04-legacy-monolith-to-paas-modernization/) — 12-person SaaS, 150 customers, rollback, incidents and cost claims. | Provider case; customer and metrics are self-reported. |
| `W3-SA02` | direct page inspected 2026-08-26 | `B` vendor case | [Danubio live multi-tenant rebuild](https://www.danub.io/case-studies/rebuilding-a-live-multi-tenant-platform-without-downtime) — tenant feature flags, live rebuild, rollback and 5,000-brokerage claim. | Provider case; scale and no-downtime result are not independently audited. |

### Preserved Wave 2 identity register

The prior 110 identities remain the source floor and are not silently copied,
replaced, or reclassified here: `W2-P01`–`W2-P74` and `W2-N01`–`W2-N36` in
[public-signals-wave-2.md](../wave-2/outputs/public-signals-wave-2.md). The
Wave 2 artifact contains the exact normalized URL register and 136 prior slot
rows. The artifact smoke in §5 checks that it still resolves to 110 unique
URLs and 136 `public-w2` rows. The 34 W3 URLs above were checked against that
register before admission; no W3 ID aliases a W2 URL.

## 3. Atom and admission map

The same narrow atoms are used across both waves so the ledger compares
portability/API/import-export, audit/approval, cost, recovery, and operating
ownership without pretending the industries are interchangeable.

| Atom | Boundary used in this report |
|---|---|
| `intake_normalize` | Intake, field mapping, normalization, or source-of-truth handoff. |
| `extract_structure` | Extracting documents, records, schemas, or workflow structure. |
| `reconcile_audit` | Reconciliation, validation, audit trail, or anomaly review. |
| `triage_route` | Routing cases, approvals, tasks, alerts, or exceptions. |
| `sync_handoff` | API/integration, parallel run, or operator/vendor handoff. |
| `monitor_alert` | Monitoring, incident detection, service health, or recovery signal. |
| `approval_publish` | Human approval, release, versioning, or controlled publication. |
| `report_digest` | Reporting, cost visibility, operational summary, or decision packet. |

Every receipt is admissible only as a public signal. It cannot be used as an
authenticated adoption, private client-data, market-size, safety, or product
readiness claim. Rights are limited to public-page inspection and concise
paraphrase with URL attribution; no paywall, login, personal data, or customer
dataset was accessed.

## 4. Wave 3 ledger: second receipt for all 136 public slots

Column contract: `marker/source` is evidence class plus W3 identity; `receipt`
names the inspected surface and atom; `boundary` retains source quality,
sponsorship, contradiction/access limits, rights, and no-admission rule;
`falsifier/gate` is the next check that could weaken or strengthen the signal.
All rows were observed on **2026-08-26** and have observation index **02**.

### 4.1 accounting_firms

| slot_id | status | marker/source | receipt (surface; atom) | boundary / contradiction / rights | falsifier / next gate |
|---|---|---|---|---|---|
| `public-w3.accounting_firms.production.02` | observed | `E/D · W3-A01` | Client onboarding was described as a staged, human-accountable production workflow with AML/CDD steps; `intake_normalize`, `triage_route`. | Vendor case; public paraphrase only; no authenticated accounting-firm adoption claim. | Reproduce on synthetic onboarding cases with named reviewer and exception log. |
| `public-w3.accounting_firms.failure.02` | observed | `E/D · W3-A02` | A server crash and absent MFA/endpoint controls were reported as operational failure surfaces; `monitor_alert`, `reconcile_audit`. | Provider-hosted customer story; “eliminated downtime” conflicts with absence of an independent incident log. | Sample incident records across firms; failure signal weakens if controls are routinely audited and recovery is tested. |
| `public-w3.accounting_firms.migration.02` | observed | `E/D · W3-A01` | Accountancy onboarding workflow was moved from manual stages to an accountable workflow surface; `sync_handoff`, `intake_normalize`. | Sponsorship and confidential customer limit transfer; no client data or private implementation inspected. | Map one synthetic tax-season workflow and compare source/target fields and approvals. |
| `public-w3.accounting_firms.cost.02` | needs_direct_review | `U · W3-A02` | The page describes avoided downtime and recurring IT operations but gives no comparable accounting-unit cost; `report_digest`. | Cost unit, denominator, and counterfactual are absent; no normalization permitted. | Obtain an itemized public invoice/run-rate or mark cost unobserved. |
| `public-w3.accounting_firms.security.02` | observed | `E/D · W3-A01` | AML/CDD human accountability and controlled onboarding are named security/compliance controls; `approval_publish`, `reconcile_audit`. | Vendor language is not an audit; no credentials, client records, or regulatory finding accessed. | Test role separation, evidence retention, and unauthorized-export rejection on synthetic data. |
| `public-w3.accounting_firms.rollback.02` | needs_direct_review | `U · W3-A02` | Recovery after a server crash is implied, but a tested application rollback or cutover reversal is not documented; `monitor_alert`. | Operational recovery is not the same as rollback; source is provider-sponsored. | Require a dated restore/rollback drill with RPO/RTO and post-restore reconciliation. |
| `public-w3.accounting_firms.portability.02` | needs_direct_review | `U · W3-A01` | Workflow staging is visible, but export format, API/import mapping, and exit ownership are not; `sync_handoff`. | No public portability artifact; “workflow” does not imply exportability. | Request a synthetic export manifest and re-import checksum before upgrading signal. |
| `public-w3.accounting_firms.maintenance.02` | observed | `E/D · W3-A02` | Recurring endpoint, MFA, backup, and recovery operations are described as ongoing work; `monitor_alert`, `report_digest`. | Self-reported operator story; support burden and retention are not measured. | Compare quarterly patch/backup evidence and named owner across synthetic environments. |

### 4.2 construction

| slot_id | status | marker/source | receipt (surface; atom) | boundary / contradiction / rights | falsifier / next gate |
|---|---|---|---|---|---|
| `public-w3.construction.production.02` | observed | `E/D · W3-C01` | A $38M public-works project is reported running contracts, change orders, RFIs, submittals, and drawings in one hub; `approval_publish`, `sync_handoff`. | Vendor-hosted customer quote; scale is one project, not construction-wide adoption. | Observe a synthetic project with approval and closeout read-back. |
| `public-w3.construction.failure.02` | observed | `E · W3-C02` | Public change-order research identifies recurring management causes and control needs; `reconcile_audit`, `approval_publish`. | Public research is indirect to software migration and does not estimate AI failure prevalence. | Code a larger public sample by cause, denominator, and project phase. |
| `public-w3.construction.migration.02` | observed | `E/D · W3-C01` | Four disconnected tools were consolidated with linked contracts, approvals, drawings, and RFIs; `sync_handoff`, `extract_structure`. | Provider sponsorship; no source export or migration runbook is public. | Run synthetic four-source import with duplicate/version conflict fixtures. |
| `public-w3.construction.cost.02` | observed | `E/D · W3-C01` | The case reports 300+ hours saved and 80+ hours of reconciliation/status work saved; unit is project labor hours, not ROI; `report_digest`. | Self-reported hours and no labor-rate denominator; do not convert to market value. | Verify time-study definitions and compare against a matched project. |
| `public-w3.construction.security.02` | needs_direct_review | `U · W3-C02` | Change-order and document-control research supports audit/approval importance but not a named security control; `reconcile_audit`. | Indirect source; no authenticated access or security test. | Inspect public construction-system security/role documentation and test access boundaries. |
| `public-w3.construction.rollback.02` | needs_direct_review | `U · W3-C02` | Change-order research does not report software rollback or restore execution; `monitor_alert`. | Project change control is not application rollback; keep separate. | Require a synthetic versioned-document rollback and approval-state reconciliation. |
| `public-w3.construction.portability.02` | observed | `E/D · W3-C01` | Consolidation links contracts, drawings, RFIs, and closeout records in one system; that is an integration/organization receipt, not proof of export; `extract_structure`. | No public machine-readable export or exit test; vendor source. | Validate CSV/API/document export with revision and approval lineage preserved. |
| `public-w3.construction.maintenance.02` | observed | `E/D · W3-C01` | Versioned drawings, automatic routing, and closeout organization imply recurring document/workflow maintenance; `monitor_alert`, `approval_publish`. | “One hub” may centralize rather than reduce maintenance; no longitudinal measure. | Compare maintenance ownership and revision errors over multiple synthetic cycles. |

### 4.3 course_creators

| slot_id | status | marker/source | receipt (surface; atom) | boundary / contradiction / rights | falsifier / next gate |
|---|---|---|---|---|---|
| `public-w3.course_creators.production.02` | observed | `E/D · W3-CC01` | A course-maker case describes course production with roles, audit log, and privacy controls; `approval_publish`, `intake_normalize`. | Vendor case and stated budget; no independent learner or creator cohort. | Run synthetic course author/reviewer/publish flow with audit read-back. |
| `public-w3.course_creators.failure.02` | needs_direct_review | `U · W3-CC02` | Plugin ceiling and legacy-site constraints are reported, but an operational failure rate is not; `monitor_alert`. | Provider narrative; traffic claim does not prove course-creator failure prevalence. | Collect public postmortems from course operators and separate plugin, content, and delivery failures. |
| `public-w3.course_creators.migration.02` | observed | `E/D · W3-CC02` | WordPress-to-Next.js migration is described for a high-traffic educational site; `sync_handoff`, `extract_structure`. | Site migration is adjacent to course creation; no learner-record migration shown. | Test content, enrollment, assessment, and asset export/import separately. |
| `public-w3.course_creators.cost.02` | needs_direct_review | `U · W3-CC01` | A stated platform budget is visible, but scope, labor, hosting, and support units are not comparable; `report_digest`. | Provider budget is not actual spend or recurring cost. | Obtain a line-item public quote and normalize only declared units. |
| `public-w3.course_creators.security.02` | observed | `E/D · W3-CC01` | Role controls, audit log, GDPR/CCPA language, and privacy requirements are named; `approval_publish`, `reconcile_audit`. | Vendor self-description; no penetration test or learner data accessed. | Verify least-privilege author/reviewer/export behavior on synthetic PII. |
| `public-w3.course_creators.rollback.02` | needs_direct_review | `U · W3-CC02` | Replatforming is described, but no executed content rollback or learner-state recovery is public; `monitor_alert`. | Build migration is not rollback evidence. | Require versioned release, content snapshot, and enrollment-state restore drill. |
| `public-w3.course_creators.portability.02` | observed | `E/D · W3-CC02` | Moving a content site off WordPress is a public portability/migration receipt; `extract_structure`, `sync_handoff`. | Plugin semantics and LMS records may not transfer; source does not prove full export. | Inventory content, media, assessments, comments, and learner records with checksums. |
| `public-w3.course_creators.maintenance.02` | observed | `E/D · W3-CC01` | Course roles/audit controls and the migrated site’s support surface imply ongoing publishing and platform maintenance; `approval_publish`, `monitor_alert`. | No retention or support-volume denominator; commercial selection risk. | Track synthetic release, patch, and audit tasks over a 90-day maintenance window. |

### 4.4 ecommerce

| slot_id | status | marker/source | receipt (surface; atom) | boundary / contradiction / rights | falsifier / next gate |
|---|---|---|---|---|---|
| `public-w3.ecommerce.production.02` | observed | `E/D · W3-EC01` | Multi-region checkout/catalog services and peak traffic objectives are described as operational targets; `monitor_alert`, `sync_handoff`. | Vendor case; reported scale/conversion results are self-reported. | Load-test synthetic checkout and verify inventory/payment side effects with a kill switch. |
| `public-w3.ecommerce.failure.02` | observed | `E/D · W3-EC02` | On-prem peak-season buckling and fixed-capacity fragility are reported; `monitor_alert`. | Provider case, no independent outage dataset; “zero outages” later is a success claim, not prevalence. | Compare failure rate under replayed peak traffic with and without headroom. |
| `public-w3.ecommerce.migration.02` | observed | `E/D · W3-EC01` | Strangler migration moves catalog/checkout components behind an API gateway while monolith remains; `sync_handoff`. | Architecture description does not prove data parity or customer-account migration. | Run dual-read/dual-write synthetic order fixtures and reconcile every side effect. |
| `public-w3.ecommerce.cost.02` | observed | `E/D · W3-EC02` | The source frames peak outage as lost revenue and elastic capacity as replacing fixed hardware; unit is qualitative, not a spend number; `report_digest`. | No actual cost denominator; no GMV normalization. | Require infrastructure bills and incident counterfactual before cost comparison. |
| `public-w3.ecommerce.security.02` | needs_direct_review | `U · W3-EC01` | Observability and multi-region architecture are named, but the page does not evidence a concrete payment/identity control; `monitor_alert`. | Reliability is not security; vendor claim cannot substitute for PCI/security review. | Inspect public threat model and test secret, role, and payment-token boundaries. |
| `public-w3.ecommerce.rollback.02` | observed | `E/D · W3-EC02` | Cutover was scheduled before peak with a stated rollback path; `monitor_alert`, `sync_handoff`. | Stated path is not an executed rollback; provider sponsorship. | Execute synthetic DNS/traffic reversal and reconcile orders, inventory, and analytics. |
| `public-w3.ecommerce.portability.02` | needs_direct_review | `U · W3-EC01` | API-gateway decomposition may improve component replaceability, but export/import contracts are not shown; `sync_handoff`. | Portability is inferred from architecture, not directly evidenced. | Demand versioned order/catalog schemas and a tested re-import manifest. |
| `public-w3.ecommerce.maintenance.02` | observed | `E/D · W3-EC01` | Central feature flags, observability, and independently deployable services are described as ongoing operating practices; `monitor_alert`. | Vendor-reported operational improvement; no maintenance burden or retention cohort. | Measure deploy/rollback/alert toil over repeated synthetic peak cycles. |

### 4.5 education_training

| slot_id | status | marker/source | receipt (surface; atom) | boundary / contradiction / rights | falsifier / next gate |
|---|---|---|---|---|---|
| `public-w3.education_training.production.02` | observed | `E · W3-ED01` | Sector report documents higher-education systems operating under legacy constraints and governance pressure; `report_digest`, `monitor_alert`. | Sector-level receipt, not proof of any specific institution’s product adoption. | Sample named institutions and require public operational artifacts. |
| `public-w3.education_training.failure.02` | observed | `E · W3-ED02` | First-party Canvas incident updates record access/security disruption and recovery communication; `monitor_alert`. | Vendor incident chronology may omit customer-specific impact; no student data accessed. | Reconcile incident timeline, control gap, and recovery evidence from institution notices. |
| `public-w3.education_training.migration.02` | observed | `E · W3-ED01` | Legacy technical estate is characterized as a migration/modernization problem with maintenance and governance implications; `sync_handoff`. | Sector strategy is not a completed LMS migration receipt. | Require a named public migration plan with cohort, field, and cutover evidence. |
| `public-w3.education_training.cost.02` | observed | `E · W3-ED01` | Jisc reports an aggregate legacy-cost range for UK higher education; unit is sector estimate, not per-school or per-learner cost; `report_digest`. | Estimate methodology and denominator stay as published; no normalization to Wave 2 units. | Reproduce estimate from cited sources and separate capital, run, and maintenance costs. |
| `public-w3.education_training.security.02` | blocked | `U · W3-ED02` | Incident page supports a security/access event, but the public chronology does not expose a complete control or forensic record; `monitor_alert`. | First-party incident access is partial; no authenticated tenant or student record. | Await public post-incident report or mark security control detail unobserved. |
| `public-w3.education_training.rollback.02` | blocked | `U · W3-ED02` | Recovery updates are visible, but no tenant-level rollback execution or data reconciliation is exposed; `monitor_alert`. | Service recovery and rollback are distinct; source access is bounded. | Require a public recovery/restore report with RPO/RTO and integrity check. |
| `public-w3.education_training.portability.02` | needs_direct_review | `U · W3-ED01` | Legacy modernization implies portability pressure, but no public export schema or LMS import test is supplied; `sync_handoff`. | Strategic report cannot prove format compatibility. | Compare public LMS export packages and re-import checksums across two systems. |
| `public-w3.education_training.maintenance.02` | observed | `E · W3-ED01` | Jisc frames technical legacy as a continuing maintenance and governance burden; `monitor_alert`, `report_digest`. | Sector synthesis, not an audited workload measure. | Collect institution maintenance calendars, patch windows, and ownership evidence. |

### 4.6 healthcare_medical_practices

| slot_id | status | marker/source | receipt (surface; atom) | boundary / contradiction / rights | falsifier / next gate |
|---|---|---|---|---|---|
| `public-w3.healthcare_medical_practices.production.02` | observed | `E · W3-HC01` | GAO records VA EHR deployments and operational use while assessing safety/reliability problems; `monitor_alert`, `sync_handoff`. | One government program; no claim about private practices or general adoption. | Use public deployment evidence plus synthetic clinical-like fixtures only. |
| `public-w3.healthcare_medical_practices.failure.02` | observed | `E · W3-HC01` | GAO reports safety/reliability concerns, delays, and corrective/reset actions in EHR modernization; `monitor_alert`, `reconcile_audit`. | Audit scope is VA program; no patient data or clinical advice. | Test whether deterministic workflow/audit gates catch the cited failure classes. |
| `public-w3.healthcare_medical_practices.migration.02` | observed | `E · W3-HC01` | EHR modernization and deployment reset are a direct public migration/program receipt; `sync_handoff`, `approval_publish`. | Program migration is not evidence that small practices can migrate safely. | Compare staged synthetic migration with explicit clinical-logic and downtime gates. |
| `public-w3.healthcare_medical_practices.cost.02` | observed | `E · W3-HC01` | GAO reports a multi-billion-dollar program cost figure; unit is program-level public expenditure, not per-practice implementation cost; `report_digest`. | Do not normalize across program scope or infer market size. | Reconcile GAO fiscal definitions and separate sunk, planned, and remediation cost. |
| `public-w3.healthcare_medical_practices.security.02` | needs_direct_review | `U · W3-HC02` | Practitioner study supports patch-management coordination as a security maintenance issue; `monitor_alert`. | Cross-industry qualitative source; no healthcare control or incident rate. | Inspect public clinic security advisories and test patch/role evidence on synthetic systems. |
| `public-w3.healthcare_medical_practices.rollback.02` | needs_direct_review | `U · W3-HC01` | Corrective reset after EHR deployment problems is a program recovery signal, not a demonstrated application rollback; `monitor_alert`. | “Reset” is not assumed to mean reversible release. | Require public deployment rollback criteria and post-reset data-integrity evidence. |
| `public-w3.healthcare_medical_practices.portability.02` | unobserved | `U · W3-HC01` | The audit concerns modernization/deployment, not export/import or API portability; `sync_handoff`. | No public portability receipt admitted; regulated data boundary remains strict. | Find a public standard-conformant migration/export record before upgrading. |
| `public-w3.healthcare_medical_practices.maintenance.02` | observed | `E · W3-HC02` | Interviews describe patch backlog/coordination work as an ongoing operational constraint; `monitor_alert`, `report_digest`. | Small qualitative sample; no patient data or clinical efficacy claim. | Replicate with public advisories, patch-age distributions, and named maintenance owner. |

### 4.7 hospitality

| slot_id | status | marker/source | receipt (surface; atom) | boundary / contradiction / rights | falsifier / next gate |
|---|---|---|---|---|---|
| `public-w3.hospitality.production.02` | observed | `E/D · W3-HO01` | FIDI Hotel is reported operating after a PMS migration reversal and recovery; `monitor_alert`, `sync_handoff`. | Industry/vendor story; no independently audited booking or revenue ledger. | Verify synthetic reservation, room, payment, and channel-manager side effects. |
| `public-w3.hospitality.failure.02` | observed | `E/D · W3-HO01` | Duplicate reservations and revenue disruption are reported after a failed PMS migration; `reconcile_audit`, `monitor_alert`. | Customer detail and incident denominator are limited; no broad failure rate. | Reproduce duplicate reservation fixtures and measure detection before cutover. |
| `public-w3.hospitality.migration.02` | observed | `E/D · W3-HO02` | A five-property resort operator’s Maximo migration/rebuild is reported with maintenance workflow changes; `sync_handoff`. | Press release; “completed” does not prove parity or long-term operation. | Require public migration inventory, validation report, and owner sign-off. |
| `public-w3.hospitality.cost.02` | needs_direct_review | `U · W3-HO02` | The release gives scope/properties and downtime language but no comparable implementation or run-rate cost; `report_digest`. | Press-release sponsorship and absent denominator; no normalization. | Obtain public line items or keep cost as a gap. |
| `public-w3.hospitality.security.02` | needs_direct_review | `U · W3-HO01` | Reservation duplication shows integrity risk, but no named hospitality security control is directly evidenced; `reconcile_audit`. | Data integrity and security are not interchangeable. | Inspect PMS role/API/backup documentation and run synthetic least-privilege tests. |
| `public-w3.hospitality.rollback.02` | observed | `E/D · W3-HO01` | The story explicitly reports reversing a failed PMS migration and restoring operations; `monitor_alert`, `sync_handoff`. | Reversal result is supplier/industry-reported; execution evidence is not public. | Require a dated rollback runbook and reservation/revenue reconciliation. |
| `public-w3.hospitality.portability.02` | unobserved | `U · W3-HO02` | Maintenance-suite migration is reported, but export/import schemas and channel portability are absent; `sync_handoff`. | No public exit artifact; do not infer portability from SaaS migration. | Inspect public PMS export documentation and test a cross-system reservation import. |
| `public-w3.hospitality.maintenance.02` | observed | `E/D · W3-HO02` | Maintenance workflow rebuild across five resort properties is a direct ongoing-operations receipt; `monitor_alert`, `approval_publish`. | Provider release; staffing, support, and retention unknown. | Compare recurring work-order ownership, SLA, and restore drills over a synthetic season. |

### 4.8 it_services_msps

| slot_id | status | marker/source | receipt (surface; atom) | boundary / contradiction / rights | falsifier / next gate |
|---|---|---|---|---|---|
| `public-w3.it_services_msps.production.02` | observed | `E/D · W3-IT01` | Sector report describes MSPs operating managed services with AI positioned as an operational tool, not a standalone replacement; `report_digest`, `monitor_alert`. | Report methodology and market denominator are not used as adoption evidence. | Inspect named operator runbooks and synthetic ticket/alert handoffs. |
| `public-w3.it_services_msps.failure.02` | observed | `E/D · W3-IT02` | MSP transition support identifies service-catalog, shadowing, and accountability gaps as handoff failure surfaces; `sync_handoff`, `triage_route`. | Consultant document, no named incident cohort. | Test reverse-shadow handoff with missed-service and escalation fixtures. |
| `public-w3.it_services_msps.migration.02` | observed | `E/D · W3-IT02` | Incoming/outgoing MSP transition, service-catalog migration, and reverse shadow are directly described; `sync_handoff`. | Consultant-sponsored; no customer implementation evidence beyond process description. | Run a synthetic service inventory migration and sign-off checklist. |
| `public-w3.it_services_msps.cost.02` | needs_direct_review | `U · W3-IT01` | Sector report discusses operational pressures but no comparable per-tenant or per-ticket cost unit is admitted; `report_digest`. | Survey/report data cannot be normalized into spend or margin. | Require public MSP price/cost ledger with unit and denominator. |
| `public-w3.it_services_msps.security.02` | needs_direct_review | `U · W3-IT02` | Accountability and handoff are described, but named security controls, access reviews, and evidence retention are not; `sync_handoff`. | Operational governance is not a security audit. | Test credential transfer, least privilege, offboarding, and incident escalation. |
| `public-w3.it_services_msps.rollback.02` | unobserved | `U · W3-IT02` | Transition guide describes shadow/reverse shadow but not executed service rollback; `sync_handoff`. | Handoff reversibility is not technical rollback. | Require a public rollback case or run synthetic service-provider reversion. |
| `public-w3.it_services_msps.portability.02` | needs_direct_review | `U · W3-IT02` | Service catalog and accountability transfer suggest operational portability, not API/data export; `extract_structure`. | No machine-readable catalog/export contract shown. | Validate export of assets, credentials metadata, runbooks, and ticket history. |
| `public-w3.it_services_msps.maintenance.02` | observed | `E/D · W3-IT01` | Managed service operations and AI-as-tool framing support ongoing monitoring/maintenance as the core job; `monitor_alert`, `report_digest`. | Sector report is not a retention or workload study. | Compare alert toil, patch ownership, and SLA evidence across synthetic tenants. |

### 4.9 insurance_agencies

| slot_id | status | marker/source | receipt (surface; atom) | boundary / contradiction / rights | falsifier / next gate |
|---|---|---|---|---|---|
| `public-w3.insurance_agencies.production.02` | observed | `E/D · W3-IN02` | A claims modernization case reports 60K+ claims processed through early routing into a consolidated SaaS system; `sync_handoff`, `triage_route`. | Vendor case; no independent post-cutover claims-service audit. | Use synthetic policy/claim status fixtures and prove routing/audit parity. |
| `public-w3.insurance_agencies.failure.02` | observed | `E/D · W3-IN01` | Thousands of records required manual validation/correction due to data-integrity risk before go-live; `reconcile_audit`. | Provider case; “regulatory non-compliance” is risk language, not a finding. | Sample public migration postmortems and measure mismatch/error classes. |
| `public-w3.insurance_agencies.migration.02` | observed | `E/D · W3-IN02` | Four claims platforms consolidated into Guidewire ClaimCenter/ContactManager with missing-model and resource constraints; `sync_handoff`. | Provider-sponsored, named customer withheld; no policyholder data. | Reconcile source/target schema, reserves, correspondence, and litigation flags synthetically. |
| `public-w3.insurance_agencies.cost.02` | needs_direct_review | `U · W3-IN01` | A 25-person remediation team and several weeks are described, but labor rate and total cost are absent; `report_digest`. | Staff count/time is not a comparable cost without denominator. | Obtain public unit cost or retain as resource-intensity only. |
| `public-w3.insurance_agencies.security.02` | observed | `E/D · W3-IN02` | Auditable migration and enterprise data-governance compliance are explicitly claimed; `reconcile_audit`, `approval_publish`. | Provider claim is not an independent regulatory audit. | Test role-scoped claims access, immutable audit, and export denial. |
| `public-w3.insurance_agencies.rollback.02` | needs_direct_review | `U · W3-IN02` | Multi-phase consolidation is stated, but rollback or restore execution is not documented; `monitor_alert`. | Staged migration does not prove reversibility. | Require phase exit/rollback criteria and reserve-history reconciliation. |
| `public-w3.insurance_agencies.portability.02` | unobserved | `U · W3-IN01` | Claims records are remediated for transfer, but no public export format, API contract, or re-import evidence is supplied; `sync_handoff`. | Regulated data boundary and source access limit the claim. | Inspect public Guidewire/import documentation and test synthetic policy exit. |
| `public-w3.insurance_agencies.maintenance.02` | needs_direct_review | `U · W3-IN02` | Early routing and data governance imply ongoing maintenance, but owner, patch, and support burden are not measured; `monitor_alert`. | Vendor case lacks longitudinal follow-up. | Require post-go-live operating artifacts and named maintenance owner. |

### 4.10 law_firms

| slot_id | status | marker/source | receipt (surface; atom) | boundary / contradiction / rights | falsifier / next gate |
|---|---|---|---|---|---|
| `public-w3.law_firms.production.02` | observed | `E/D · W3-L01` | ProLaw-to-Azure practice migration is described as an operating legal-services environment with stated uptime/security controls; `sync_handoff`, `monitor_alert`. | Vendor case; uptime claim is unverified and no matter data accessed. | Run synthetic matter, document, billing, and conflict workflow with audit read-back. |
| `public-w3.law_firms.failure.02` | observed | `E/D · W3-L02` | A law firm breach and resulting court-work delay are reported as operational/security failure; `monitor_alert`, `triage_route`. | Provider narrative; incident scope, cause, and remediation are incomplete. | Compare public incident notices and test breach containment/escalation on synthetic matters. |
| `public-w3.law_firms.migration.02` | observed | `E/D · W3-L01` | Practice-management migration to Azure is a direct legal-platform transition receipt; `sync_handoff`. | No public field map, validation report, or rollback evidence. | Reconcile matter metadata, documents, permissions, and billing in synthetic import. |
| `public-w3.law_firms.cost.02` | needs_direct_review | `U · W3-L01` | Uptime/security benefits are described without implementation, license, or support cost units; `report_digest`. | Marketing case; no normalization. | Obtain public scope and line-item cost or keep unobserved. |
| `public-w3.law_firms.security.02` | observed | `E/D · W3-L02` | Breach response and private-cloud/O365 recovery are named security surfaces; `monitor_alert`, `approval_publish`. | No forensic report or independent control assessment. | Test matter-level authorization, ethical walls, MFA, and evidence retention. |
| `public-w3.law_firms.rollback.02` | needs_direct_review | `U · W3-L01` | Migration is described, but legal-matter rollback and restore are not shown; `monitor_alert`. | A cloud move is not proof of reversible cutover. | Require a dated restore drill with document hashes and billing reconciliation. |
| `public-w3.law_firms.portability.02` | needs_direct_review | `U · W3-L01` | Moving practice software to Azure indicates hosting portability but not matter/document export portability; `sync_handoff`. | Exit format and vendor API terms are absent. | Test a synthetic matter export/re-import with permissions and versions intact. |
| `public-w3.law_firms.maintenance.02` | observed | `E/D · W3-L02` | Post-breach hardening and service recovery describe continuing security/operations ownership; `monitor_alert`. | Provider case and no long-term support metrics. | Measure patch, access-review, incident-tabletop, and restore cadence. |

### 4.11 logistics_freight

| slot_id | status | marker/source | receipt (surface; atom) | boundary / contradiction / rights | falsifier / next gate |
|---|---|---|---|---|---|
| `public-w3.logistics_freight.production.02` | observed | `E/D · W3-LG02` | APL Cargo is reported operating dispatch, communications, POD verification, and factoring reconciliation on one TMS; `triage_route`, `reconcile_audit`. | Datatruck-sponsored release; operator quote is not an independent deployment audit. | Validate synthetic load lifecycle, POD, factoring, and profitability read-back. |
| `public-w3.logistics_freight.failure.02` | needs_direct_review | `U · W3-LG01` | The customer reference describes complex legacy logistics processes and a replacement program, but no discrete failure incident or denominator; `monitor_alert`. | Adjacent transformation pressure is not a failure receipt; do not upgrade it to prevalence. | Find a named public logistics postmortem or test legacy/TMS failure fixtures. |
| `public-w3.logistics_freight.migration.02` | observed | `E/D · W3-LG01` | Milliken’s legacy ERP was replaced with SAP TM/S/4HANA to centralize transportation operations and carrier selection; `sync_handoff`, `extract_structure`. | Consultant/customer reference; field map, validation, and post-cutover evidence are not public. | Reconcile synthetic shipments, carriers, contracts, and financial handoff before upgrade. |
| `public-w3.logistics_freight.cost.02` | needs_direct_review | `U · W3-LG01` | “Measurable freight cost savings” is stated after SAP TM/S/4HANA modernization, but no amount, baseline, or unit is public; `report_digest`. | Consultant/customer reference; no normalization or ROI inference. | Obtain a public cost unit or retain as qualitative only. |
| `public-w3.logistics_freight.security.02` | needs_direct_review | `U · W3-LG01` | SAP TM modernization and centralized operations are described without named access, secret, or security controls; `approval_publish`. | Transformation evidence is not a security audit. | Inspect public identity, role, integration, and retention controls for transport systems. |
| `public-w3.logistics_freight.rollback.02` | needs_direct_review | `U · W3-LG02` | History migration is reported complete, but no executed TMS cutback or load-state restore is public; `monitor_alert`. | Successful migration does not prove rollback. | Require dual-run/cutback evidence and reconcile loads, PODs, and invoices. |
| `public-w3.logistics_freight.portability.02` | needs_direct_review | `U · W3-LG01` | Replacing a custom ERP with SAP TM is a system transition, but export schema, API ownership, and exit rights are not shown; `sync_handoff`. | Migration success is not portability proof. | Validate synthetic shipment, carrier, contract, and audit export/re-import. |
| `public-w3.logistics_freight.maintenance.02` | needs_direct_review | `U · W3-LG01` | Modernization is described as improving visibility and reducing manual work, but ongoing patch/support ownership is absent; `monitor_alert`. | No longitudinal maintenance receipt or support denominator. | Require post-go-live maintenance/SLA evidence and a synthetic support drill. |

### 4.12 marketing_social_media_agencies

| slot_id | status | marker/source | receipt (surface; atom) | boundary / contradiction / rights | falsifier / next gate |
|---|---|---|---|---|---|
| `public-w3.marketing_social_media_agencies.production.02` | observed | `E/D · W3-MK02` | A stalled Marketo migration rescue is described as preserving business continuity during agency delivery; `sync_handoff`, `triage_route`. | Agency case; no independent client pipeline or revenue data. | Run synthetic lead/campaign migration with approval and attribution read-back. |
| `public-w3.marketing_social_media_agencies.failure.02` | observed | `E/D · W3-MK01` | Merger integration case identifies stalled migration, validation, and training risk; `reconcile_audit`, `sync_handoff`. | Provider claim; stated waste is not independently verified. | Sample failed campaign migrations and classify data, ownership, and timing causes. |
| `public-w3.marketing_social_media_agencies.migration.02` | observed | `E/D · W3-MK01` | Migration waves, parallel validation, training, and rollback are directly described for RevOps integration; `sync_handoff`. | Commercial case, no customer artifacts. | Reconcile contacts, consent, attribution, and campaign states across synthetic systems. |
| `public-w3.marketing_social_media_agencies.cost.02` | needs_direct_review | `U · W3-MK02` | Rescue timeline is visible, but agency cost, license, labor, and counterfactual are absent; `report_digest`. | No cost denominator or ROI normalization. | Obtain public scope/price and preserve labor, platform, and incident units separately. |
| `public-w3.marketing_social_media_agencies.security.02` | needs_direct_review | `U · W3-MK01` | Parallel validation and ownership controls are described, but consent/security controls are not directly evidenced; `reconcile_audit`. | Data migration governance is not a security audit. | Test consent, role, API-token, and deletion propagation with synthetic contacts. |
| `public-w3.marketing_social_media_agencies.rollback.02` | needs_direct_review | `U · W3-MK02` | Rescue and continuity imply reversibility, but an executed campaign-platform rollback is not documented; `monitor_alert`. | “Rescue” is not proof of rollback. | Require a dated pre-cutover snapshot, traffic reversal, and attribution reconciliation. |
| `public-w3.marketing_social_media_agencies.portability.02` | observed | `E/D · W3-MK01` | Multi-system migration and integration mapping are direct portability/integration receipts; `sync_handoff`, `extract_structure`. | Provider does not publish export schema or vendor exit terms. | Test campaign/contact/export packages and re-import into a neutral fixture. |
| `public-w3.marketing_social_media_agencies.maintenance.02` | observed | `E/D · W3-MK02` | Six-week rescue framing and phased continuity describe post-migration agency support work; `monitor_alert`, `report_digest`. | No longitudinal maintenance or retention evidence. | Track campaign schema drift, connector failures, and support ownership over 90 days. |

### 4.13 mortgage_brokers

| slot_id | status | marker/source | receipt (surface; atom) | boundary / contradiction / rights | falsifier / next gate |
|---|---|---|---|---|---|
| `public-w3.mortgage_brokers.production.02` | observed | `E/D · W3-MO02` | Mortgage-servicing platform sunset migration is described around 65 recurring compliance tasks; `triage_route`, `approval_publish`. | Vendor customer story; task count is self-reported and not adoption prevalence. | Run synthetic loan/compliance task lifecycle with deadline alerts and audit. |
| `public-w3.mortgage_brokers.failure.02` | observed | `E/D · W3-MO01` | Stalled transformation, underdeveloped tests, and weak governance are reported in a mortgage SaaS program; `reconcile_audit`, `monitor_alert`. | Consultancy case; no independent incident or cost data. | Test migration gates with negative loan/status/approval fixtures. |
| `public-w3.mortgage_brokers.migration.02` | observed | `E/D · W3-MO02` | A forced sunset drove migration of recurring mortgage-servicing/compliance work; `sync_handoff`, `extract_structure`. | Scope is workflow migration, not proof of policy/loan data parity. | Reconcile synthetic loan, document, payment, and compliance histories. |
| `public-w3.mortgage_brokers.cost.02` | needs_direct_review | `U · W3-MO01` | Stabilization and reset are described without public implementation or run-rate cost; `report_digest`. | Cost unit and counterfactual absent; no client-data claim. | Find a public budget/change-order record or keep cost unobserved. |
| `public-w3.mortgage_brokers.security.02` | observed | `E/D · W3-MO02` | Compliance deadline, recurring controls, and evidence migration are named security/governance surfaces; `approval_publish`, `reconcile_audit`. | Vendor claim; no independent compliance audit. | Test role separation, evidence immutability, and overdue-task escalation. |
| `public-w3.mortgage_brokers.rollback.02` | observed | `E/D · W3-MO01` | Program stabilization/reset is a public recovery signal and explicitly motivates stronger tests/governance; `monitor_alert`. | Reset is not necessarily technical rollback; consultancy narrative. | Require reversible cutover plan with loan-state reconciliation and kill criteria. |
| `public-w3.mortgage_brokers.portability.02` | needs_direct_review | `U · W3-MO02` | Platform-sunset migration proves exit pressure, but export format/API/ownership is not public; `sync_handoff`. | Forced migration is not successful portability. | Inspect public export contract and re-import synthetic task/evidence bundle. |
| `public-w3.mortgage_brokers.maintenance.02` | needs_direct_review | `U · W3-MO01` | Governance and test weakness indicate maintenance burden, but no owner or cadence is measured; `monitor_alert`. | Consultancy diagnosis, no longitudinal operator evidence. | Collect public maintenance/SLA evidence and run 90-day synthetic support drill. |

### 4.14 property_management

| slot_id | status | marker/source | receipt (surface; atom) | boundary / contradiction / rights | falsifier / next gate |
|---|---|---|---|---|---|
| `public-w3.property_management.production.02` | observed | `E/D · W3-PM01` | Access-database replacement is described for multi-user property/contractor operations with backup and shared workflows; `intake_normalize`, `reconcile_audit`. | Vendor case; named production metrics and retention are limited. | Run synthetic property, work-order, vendor, and backup workflows. |
| `public-w3.property_management.failure.02` | observed | `E/D · W3-PM01` | Multi-user failure and legacy database limitations are reported as operational risks; `monitor_alert`, `reconcile_audit`. | Provider narrative; no incident denominator. | Reproduce concurrency, lock, duplicate, and restore failures. |
| `public-w3.property_management.migration.02` | observed | `E/D · W3-PM02` | Property platform transition is described with data-accuracy and onboarding work; `sync_handoff`, `intake_normalize`. | Vendor case; no field map or source export published. | Reconcile synthetic units, leases, work orders, and vendor relationships. |
| `public-w3.property_management.cost.02` | needs_direct_review | `U · W3-PM01` | Database replacement benefits are described without implementation or operating cost units; `report_digest`. | No comparable denominator; no ROI inference. | Obtain public scope/cost or keep as qualitative signal only. |
| `public-w3.property_management.security.02` | observed | `E/D · W3-PM02` | Data-accuracy and platform transition controls are described, with security implications for property records; `reconcile_audit`. | No explicit access-control or security audit on the page. | Test tenant/owner/vendor role boundaries and export restrictions. |
| `public-w3.property_management.rollback.02` | needs_direct_review | `U · W3-PM02` | Transition is reported without a cutback or restore result; `monitor_alert`. | Data accuracy is not rollback evidence. | Require backup restore plus lease/billing reconciliation before cutover. |
| `public-w3.property_management.portability.02` | observed | `E/D · W3-PM01` | Replacing Access with a new system is a direct source/target transition receipt; `extract_structure`, `sync_handoff`. | Does not prove export rights or portability after replacement. | Verify schema/document export and neutral re-import. |
| `public-w3.property_management.maintenance.02` | observed | `E/D · W3-PM02` | Onboarding and ongoing property-platform operation are described as continuing workflow ownership; `monitor_alert`, `triage_route`. | Provider case, no support-volume or retention measure. | Track recurring lease, vendor, repair, and backup maintenance tasks. |

### 4.15 real_estate

| slot_id | status | marker/source | receipt (surface; atom) | boundary / contradiction / rights | falsifier / next gate |
|---|---|---|---|---|---|
| `public-w3.real_estate.production.02` | observed | `E/D · W3-RE01` | Propertybase brokerage CRM is described with MLS/IDX, listings, transactions, compliance, and phased rollout; `triage_route`, `sync_handoff`. | Salesforce partner case; no independent brokerage adoption denominator. | Run synthetic lead/listing/transaction workflow with human approval. |
| `public-w3.real_estate.failure.02` | observed | `E/D · W3-RE02` | Brokerage records spread across CRM, Mailchimp, listing feeds, and transaction tooling with no segmentation; `reconcile_audit`. | Vendor success story; described pain is not a measured failure rate. | Sample public brokerage postmortems and classify duplicate/lead-loss causes. |
| `public-w3.real_estate.migration.02` | observed | `E/D · W3-RE02` | CRM unification/cleanup across Zillow, MLS feeds, forms, and referrals is directly described; `intake_normalize`, `sync_handoff`. | Full playbook is gated/download-oriented; no client data accessed. | Reconcile synthetic contact/source/consent/lifecycle migrations. |
| `public-w3.real_estate.cost.02` | needs_direct_review | `U · W3-RE01` | Partner describes 8–14 week implementation, but no labor/license/support cost unit; `report_digest`. | Timeline is not spend and cannot be normalized. | Obtain public proposal with scope and declared units. |
| `public-w3.real_estate.security.02` | needs_direct_review | `U · W3-RE02` | Cross-platform contact cleanup raises consent/access concerns, but no explicit security control is public; `reconcile_audit`. | CRM hygiene is not security assurance. | Test consent, agent/manager roles, MLS data boundaries, and deletion propagation. |
| `public-w3.real_estate.rollback.02` | needs_direct_review | `U · W3-RE01` | Phased rollout and salvage/rebuild language support reversibility planning, not executed rollback; `monitor_alert`. | Partner narrative; no cutback evidence. | Require phase rollback criteria and lead/listing/transaction reconciliation. |
| `public-w3.real_estate.portability.02` | observed | `E/D · W3-RE01` | Salesforce/AppExchange flexibility and MLS/IDX integration are direct API/integration portability signals; `sync_handoff`. | Platform flexibility is not export rights or neutral portability. | Export/re-import synthetic contacts, listings, notes, and audit history. |
| `public-w3.real_estate.maintenance.02` | observed | `E/D · W3-RE02` | Ongoing data cleanup, segmentation, and integration upkeep are described as operating work; `reconcile_audit`, `monitor_alert`. | Download-oriented case lacks longitudinal workload/retention measures. | Measure connector drift, duplicate repair, and owner time over 90 days. |

### 4.16 recruiting_staffing

| slot_id | status | marker/source | receipt (surface; atom) | boundary / contradiction / rights | falsifier / next gate |
|---|---|---|---|---|---|
| `public-w3.recruiting_staffing.production.02` | observed | `E/D · W3-RC01` | Eight-system HRIS/recruitment consolidation is described as an operating recruitment workflow with post-support; `sync_handoff`, `triage_route`. | Vendor case; no independent placement or retention evidence. | Run synthetic candidate, client, consent, and placement handoff. |
| `public-w3.recruiting_staffing.failure.02` | observed | `E · W3-RC02` | Enterprise data-migration study records architecture and operational tradeoffs that can create migration failure risk; `reconcile_audit`. | Cross-industry and older; not a recruiting incident-rate claim. | Locate recruiting-specific public postmortems and compare failure classes. |
| `public-w3.recruiting_staffing.migration.02` | observed | `E/D · W3-RC01` | HRIS/recruitment operation migrated and consolidated eight systems; `sync_handoff`, `extract_structure`. | Provider-authored; field maps and customer artifacts unavailable. | Reconcile candidate history, consent, stage, and client ownership fields. |
| `public-w3.recruiting_staffing.cost.02` | observed | `E/D · W3-RC01` | The case reports £24,520/year saving; unit is stated annual saving for one case, not normalized ROI; `report_digest`. | Self-reported sponsor claim; baseline and labor assumptions are unknown. | Verify invoice/payroll denominator and separate license from labor saving. |
| `public-w3.recruiting_staffing.security.02` | needs_direct_review | `U · W3-RC02` | Migration architecture study supports data-governance attention but no recruiting security control; `reconcile_audit`. | Indirect empirical source; no candidate data accessed. | Test consent, role, retention, redaction, and export boundaries with synthetic candidates. |
| `public-w3.recruiting_staffing.rollback.02` | needs_direct_review | `U · W3-RC01` | Consolidation is reported but no candidate-system cutback or restore drill; `monitor_alert`. | Completion does not prove rollback. | Require staged cutover snapshots and candidate/status reconciliation. |
| `public-w3.recruiting_staffing.portability.02` | observed | `E · W3-RC02` | Enterprise migration study directly supports schema/data movement and architecture tradeoffs; `extract_structure`, `sync_handoff`. | Older cross-industry evidence; no recruiter-specific export format. | Compare ATS exports, API mapping, and re-import loss on synthetic data. |
| `public-w3.recruiting_staffing.maintenance.02` | observed | `E/D · W3-RC01` | Post-implementation support is named after HRIS consolidation; `monitor_alert`, `triage_route`. | Provider case; support volume and retention remain unknown. | Track integration drift, candidate-record repair, and support ownership. |

### 4.17 saas

| slot_id | status | marker/source | receipt (surface; atom) | boundary / contradiction / rights | falsifier / next gate |
|---|---|---|---|---|---|
| `public-w3.saas.production.02` | observed | `E/D · W3-SA01` | A 12-person SaaS with 150 customers is reported live after monolith-to-PaaS modernization; `monitor_alert`, `sync_handoff`. | Vendor case; customer and production metrics are self-reported, not adoption evidence. | Run synthetic multi-tenant production smoke with tenant-isolation assertions. |
| `public-w3.saas.failure.02` | observed | `E/D · W3-SA01` | The case reports incident reduction after a legacy monolith migration; legacy incidents and cost claims remain sponsor-reported; `monitor_alert`. | Reduction is not a prevalence estimate and lacks independent incident logs. | Compare pre/post incident definitions and reproduce failure injection. |
| `public-w3.saas.migration.02` | observed | `E/D · W3-SA02` | Live multi-tenant platform rebuild with tenant feature flags and staged change is described; `sync_handoff`, `approval_publish`. | Provider case; no schema/tenant data migration artifact is public. | Test tenant-by-tenant dual-run, isolation, and data parity with synthetic fixtures. |
| `public-w3.saas.cost.02` | observed | `E/D · W3-SA01` | Infra cost increase of 11% and founder-time reduction are reported as separate units; no normalization; `report_digest`. | Marketing metrics and baseline definitions are unverified. | Reconcile cloud bills, labor time, traffic, and feature scope before comparison. |
| `public-w3.saas.security.02` | needs_direct_review | `U · W3-SA02` | Tenant feature flags and live rebuild imply isolation risk, but no independent security control evidence is shown; `approval_publish`. | Multi-tenant architecture is not a security audit. | Test cross-tenant authorization, secrets, logging, backup, and deletion boundaries. |
| `public-w3.saas.rollback.02` | observed | `E/D · W3-SA02` | Per-tenant feature flags and rollback are explicitly described for a live rebuild; `monitor_alert`, `approval_publish`. | Stated rollback capability is not an executed incident rollback. | Run tenant-scoped rollback with side-effect, schema, and audit reconciliation. |
| `public-w3.saas.portability.02` | observed | `E/D · W3-SA02` | Multi-tenant rebuild and feature flags expose architecture-level replaceability/rollback surfaces; `sync_handoff`. | No customer export contract or neutral re-import is shown. | Require tenant export manifest, API schema, and restore into an isolated fixture. |
| `public-w3.saas.maintenance.02` | observed | `E/D · W3-SA01` | Modernization case reports incident reduction and ongoing PaaS operation; `monitor_alert`, `report_digest`. | Provider case; no retention cohort, support queue, or ownership audit. | Measure patch/deploy/alert toil and customer-impact recovery over 90 days. |

## 5. Adversarial checks and smoke contract

### What can be claimed

- There are 17 exact industry IDs and 8 exact signal types, with one new
  `public-w3.<industry>.<signal>.02` row for each pair.
- Each new row points to a W3 source identity that is distinct from the 110
  Wave 2 URL identities, while the preserved Wave 2 artifact remains the
  comparison floor.
- Source class, evidence marker, sponsorship, access limit, contradiction or
  qualification, rights boundary, and falsifier are explicit in the source
  table and row contract.
- Public pages document workflows, incidents, migrations, cost units, named
  controls, recovery plans, portability surfaces, and maintenance burdens in
  bounded cases.

### What cannot be claimed

- No authenticated adoption, representative prevalence, market size, client
  data, private contract, willingness-to-pay, retention cohort, product
  readiness, safety certification, or implementation result is claimed.
- “Customer,” “live,” “production,” “shipped,” “saving,” and “retention” are
  not interchangeable. Vendor/consultant/press claims remain self-reported
  unless the public source is explicitly a public agency or empirical record.
- A source URL being public does not imply unlimited rights, stable access,
  data export rights, or permission to copy its contents. Only narrow
  attribution and paraphrase are used here.

### Reproducible artifact smoke

From the repository root, the following checks are the completion gate for
this lane:

```sh
W3=research/actionmodel-builder-research-2026-08-26/expansion/wave-3/outputs/public-signals-wave-3.md
W2=research/actionmodel-builder-research-2026-08-26/expansion/wave-2/outputs/public-signals-wave-2.md
test -s "$W3"
test "$(rg -c '^\| `public-w3\.' "$W3")" -eq 136
test "$(rg -o '^\| `public-w3\.[^.]+\.[^.]+\.02`' "$W3" | sed -E 's/^\| `public-w3\.([^.]+)\.([^.]+)\.02`/\1.\2/' | sort -u | wc -l | tr -d ' ')" -eq 136
test "$(rg -o 'https?://[^ )>]+' "$W2" | sort -u | wc -l | tr -d ' ')" -eq 110
test "$(rg -c 'public-w2\.' "$W2")" -eq 136
test "$(rg -o '^\| `public-w3\.[^.]+\.[^.]+\.02`' "$W3" | sed -E 's/^\| `public-w3\.([^.]+)\.([^.]+)\.02`/\1|\2/' | cut -d'|' -f1 | sort -u | wc -l | tr -d ' ')" -eq 17
test "$(rg -o '^\| `public-w3\.[^.]+\.[^.]+\.02`' "$W3" | sed -E 's/^\| `public-w3\.([^.]+)\.([^.]+)\.02`/\1|\2/' | cut -d'|' -f2 | sort -u | wc -l | tr -d ' ')" -eq 8
test "$(rg -c '^\| `W3-' "$W3")" -eq 34
! rg -ni '(claims?|evidence|observed|measured|verified|supports?)[: ]{0,12}(authenticated adoption|private adoption|client data|market size|representative adoption)' "$W3"
```

The smoke is intentionally mechanical: counts, exact naming, preserved floor,
new-source count, and prohibited-claim scan. It does not turn vendor claims
into facts. A failure is a lane blocker, not permission to silently edit the
counts.

## 6. Falsifiers and next gates

| Hypothesis / signal | Falsifier | Next bounded gate |
|---|---|---|
| Public transition evidence clusters around mapping, reconciliation, approval, and recovery | Controlled public/empirical samples show these are not recurring constraints, or show that generic builders preserve them without expert review | Code a source-stratified sample with denominators and independent adjudication. |
| A second public receipt increases confidence in industry×signal coverage | W3 sources collapse to the same sponsor, describe adjacent rather than exact workflows, or fail URL/source identity checks | Require two unrelated source families for high-impact cells and downgrade sponsor clusters. |
| Rollback is a meaningful capability | Runbooks exist but synthetic rollback loses side effects, audit history, tenant isolation, or data lineage | Execute read-only rollback drills with explicit kill criteria and post-condition read-back. |
| Portability is more than a vendor label | Export/import fixtures lose permissions, versions, relations, or audit history | Require schema, export manifest, checksum, re-import, and ownership evidence. |
| Public cost receipts can inform scope | Units, baselines, or denominators cannot be reconciled even within a vertical | Keep cost qualitative and collect itemized public or synthetic benchmark units. |
| Low-signal/regulated verticals can support safe narrow atoms | Healthcare, education, insurance, or mortgage fixtures fail authorization, privacy, recovery, or audit gates | Do not use client data; run synthetic regulated-like fixtures with named reviewer. |
| Maintenance ownership is a material signal | Repeated deployments show no measurable alert, patch, support, or repair burden | Run a 90-day synthetic maintenance ledger with owner, SLA, and escalation evidence. |

## 7. Coordinator callback receipt

This lane must callback only after the artifact smoke passes. The required
message is a fresh Herdr-resolved, transcript-verified receipt to `CENA`:

```text
[from: RCH-PUBLIC-W3] @CENA: DONE RCH-PUBLIC-W3. Report written at research/actionmodel-builder-research-2026-08-26/expansion/wave-3/outputs/public-signals-wave-3.md. Preserved the Wave 2 110-URL floor and added 34 new public source identities plus 136 second-receipt slots across 17 industries × 8 signal types (272 combined public slots). Source quality, sponsorship, access limits, contradictions, falsifiers, and explicit gaps are recorded; no authenticated adoption, client-data, private, implementation, or admission claim. 0 blockers; parent long-run goal remains active.
```

Parent goal status remains **active**. Wave-3 lane completion does not close
the overall wave gate or authorize implementation.
