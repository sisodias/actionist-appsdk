# Action Model Builder — public signals wave 2

**Run:** `actionmodel-builder-research-2026-08-26`  
**Parent phase:** tranche 1 verified; long-run matrix active  
**Wave:** `matrix-wave-2-industry-dimension-deepening`  
**Lane:** `RCH-PUBLIC-W2`  
**Observed:** 2026-08-26 (ICT)  
**Mode:** research and ideation only; no authenticated accounts, client data, product implementation, private contract, repository copying, block admission, or adoption admission

## Executive read

This report preserves the verified 74-URL public packet from the expansion
tranche and adds a dated vertical ledger for all 17 catalogue industries. The
new ledger has **136 explicit signal slots**: 17 industries × 8 signal types
(`production`, `failure`, `migration`, `cost`, `security`, `rollback`,
`portability`, `maintenance`). A slot is not a demand claim: it records the
narrow public receipt, its evidence tier, its limitation, and the next gate.

The strongest cross-industry signal is not autonomous app generation. It is
bounded operating work followed by a production handoff: data ownership,
integration mapping, permissions, security controls, cost visibility,
maintenance ownership, and a tested recovery path. The new receipts reinforce
that the hard part is often the transition and the operating model, not the
first screen.

The public evidence is uneven by design:

| Ledger result | Count / state | What it means |
|---|---:|---|
| Baseline packet | 74 unique URLs, preserved byte-for-byte by source identity | The tranche packet remains the immutable public baseline; its URLs are reproduced in §6. |
| New public sources | 36 unique URLs in `N01`–`N36` | Mostly vendor-hosted case studies, public agencies, standards, and empirical papers; no authenticated use. |
| Vertical signal slots | 136 | Every industry×signal slot exists; `U` and `needs_direct_review` are explicit gaps, not negative evidence. |
| First evidence marker in ledger | `E` 72; `D` 21; `I` 29; `U` 14 | Mixed markers such as `E/D` are counted by their first marker; source type remains separate. |
| Slot status | `observed` 85; `needs_direct_review` 36; `unobserved` 12; `blocked` 3 | All 136 slots are explicit; gaps are not negative evidence. |
| Retention evidence | 0 audited cohorts | “Live,” “launched,” “customer,” and “retention” are kept separate; public retention remains mostly unknown. |

### Safe synthesis

1. **Production:** bounded workflows are publicly reported in accounting,
   education, healthcare-adjacent, hospitality, mortgage, property,
   recruiting, logistics, marketing, real estate, and SaaS contexts. A vendor
   case study is a documented claim, not a general success rate.
2. **Failure:** the recurring failure shapes are undocumented dependencies,
   data-model mismatch, integration drift, multi-tenant “noisy neighbor”
   effects, broken validation, runaway usage billing, weak permissions, and
   untested rollback. These are observed reports or cross-source patterns, not
   a measured prevalence estimate.
3. **Migration and portability:** successful transitions preserve source
   systems, use phased/parallel cutovers, and validate data and workflow
   parity. NIST’s SaaS guidance explicitly warns that data formats, business
   rules, UI settings, scripts, extensions, and add-ons may not transfer
   cleanly; “export” is therefore an exit object to verify, not a marketing
   label to accept.
4. **Cost and maintenance:** public numbers are incomparable unless the unit
   is declared. Examples range from a public freight pilot’s implementation
   and O&M estimate to per-record ATS migration cost, cloud run-rate models,
   platform credits, and dedicated-team fees. The ledger records the unit and
   refuses to normalize unlike measures.
5. **Governed assembly thesis:** the thesis is weakened if controlled,
   longitudinal studies show general builders routinely preserve auth/data/
   side-effect correctness, migration fidelity, cost ceilings, and rollback
   without expert intervention. The next gate is a synthetic, read-only,
   domain-owned comparison—not client data or a live product build.

## 1. Evidence and ledger contract

Evidence class and source type are separate axes:

| Code | Evidence class | Source type | Use |
|---|---|---|---|
| `E` | Directly inspected page, paper, or public agency record | `vendor`, `operator`, `community`, `empirical`, `normative` | The cited surface was opened or its public record was inspected. It does not mean independently audited. |
| `D` | Documented or self-reported claim | Any | Vendor case study, customer quote, survey, interview, or community report. |
| `I` | Inference across sources | `synthesis` | A bounded transfer of a pattern; never a product, demand, or adoption fact. |
| `U` | Unknown or access-limited | Any | Direct page was gated, contradictory, absent, stale, or too weak to support a claim. |

Every ledger line has a stable `slot_id`, `industry_id`,
`dimension_id=public_signal.<signal_type>`, `observation_index`, observed date,
source identity, inspected surface, relation/limitation, status, rights and
admission boundary, provenance, and a falsifier or next gate. `observed` means
the source-backed signal was found; `needs_direct_review` means the industry
relation or operating claim still needs a direct source; `unobserved` is a
research gap; `blocked` is an access limitation. No candidate is admitted.

Signal states are intentionally separate:

| State | Meaning | Not implied |
|---|---|---|
| `attention` | A public post, workshop, survey, or discussion exists | Adoption or value |
| `adoption` | A user/team says it is in use, or a pre-filtered adopter survey reports use | Representative prevalence |
| `shipped` | A public source reports a launched or production workflow | Safety, retention, or revenue |
| `maintenance` | A source describes ongoing patching, support, monitoring, or repair | Low support burden |
| `retention` | Continued use is explicitly evidenced over time | An audited cohort unless independently measured |

## 2. Dated source ledger — new W2 receipts

The sources below were selected to widen the vertical signal frame. Dates are
publication dates where the page exposed one; otherwise they are the local
observation date. “Vendor-hosted operator” means a customer story published by
the supplier and is retained as a vendor claim with a customer receipt, not as
an independent audit.

| ID | Date / access | Type | Inspected surface and bounded receipt | Limitation |
|---|---|---|---|---|
| `N01` | 2026-08-26 | vendor-hosted operator | [Blueprint accounting/finance RPA migration](https://www.blueprintsys.com/casestudy/smb-rpa-migration), migration, pricing, three-week/21-bot claim, governance follow-on. | Vendor case study; malformed percentage fields on the page are not used. |
| `N02` | 2026-08-26 | vendor-hosted operator | [iCorps public accounting firm](https://www.icorps.com/client-case-study-boston-based-public-accounting-firm), private→public cloud, MFA/SSO, encryption, backup, RPO/RTO, recurring tax-software maintenance. | Vendor case study; no independent cost or recovery test. |
| `N03` | 2026-05-23; updated 2026-07-26 | vendor-hosted operator | [Otaris AFM Services](https://otaris.com.au/case-studies/revolutionising-afm-services-a-journey-to-cloud-excellence), MYOB→Xero, server decommission, security controls, maintenance burden. | Provider-authored case study; detailed customer telemetry is not public. |
| `N04` | observed 2026-08-26 | public agency / empirical | [INDOT change-order study](https://rosap.ntl.bts.gov/view/dot/78883/dot_78883_DS1.pdf), public construction change-order causes and project-management implications. | It is not an AI-builder trial or a direct app migration receipt. |
| `N05` | observed 2026-08-26 | vendor-hosted operator | [KnowledgeNow LMS migration](https://www.knowledgenow.ca/lms-course-migration-case-study), Sakai→Brightspace course migration and interactive assessment work. | Vendor case study; learner retention and independent cost are unknown. |
| `N06` | observed 2026-08-26 | vendor-hosted operator | [Vestval national training provider](https://www.vestval.com/case-studies/training-provider-lms-rebuild), phased learner cutover, read-only legacy, certification audit, SCORM/xAPI, native assessment rebuild. | Vendor case study; “zero data loss” is not independently audited. |
| `N07` | 2023-01-04 | vendor-hosted operator | [Catalyst/Navitas 40 Moodle sites](https://www.catalyst.net.nz/stories-and-studies/case-studies/catalyst-supports-the-upgrade-and-migration-of-40-moodle-lmss), patching, backups, CI/CD, Terraform, data sovereignty, peak-load support. | Provider case study; cost is described qualitatively. |
| `N08` | indexed as 2026; direct page 403 | empirical / access-limited | [Primary-care EMR migration case](https://www.sciencedirect.com/org/science/article/pii/S2561326X26006116), search-indexed abstract says migration changes frontline workflow and needs sustained coordination. | Direct page blocked; abstract only; no patient data or clinical deployment claim. |
| `N09` | observed 2026-08-26; PDF 403 | normative / access-limited | [WHO digital transformation handbook](https://iris.who.int/bitstream/handle/10665/379452/9789240093362-eng.pdf), search-indexed record references clinical logic tests, deployment scheduling, feedback, and maintenance. | Direct PDF blocked; normative guidance is not an implementation receipt. |
| `N10` | public 2014-10-30; source study 2012 | empirical / public agency | [U.S. DOT electronic freight management case](https://www.itskrs.its.dot.gov/2014-sc00304), web services, message schemas, mobile access, $13,440 implementation + $448 O&M estimate. | Small public pilot; cost assumptions are dated and partner labor was partly assumed zero. |
| `N11` | 2025 timeline; observed 2026-08-26 | operator case hosted by consultant | [Consilegy marketing-stack migration](https://consilegy.com/en/case-studies/marketing-data-integration-hubspot-migration-2/), Marketo→HubSpot, Salesforce/Sansan/GA4 integration, distributed ownership, phased cutover. | Consultant case study; no independent ROI or security audit. |
| `N12` | observed 2026-08-26 | vendor-hosted operator | [HCL mortgage broker portal](https://www.hcltech.com/case-study/mortgage-broker-portal-upgrade-creates-50-percent-increase-in-monthly-active-users), legacy migration, accessibility/performance/security testing, SSO/session timeout, broker self-service. | Marketing case study; its retention and usage metrics are unverified. |
| `N13` | observed 2026-08-26 | vendor-hosted operator | [7x regulated lender migration](https://www.7xtech.com/case-studies/cloud-migration-finedge-capital), blue-green cutover, warm DR, MFA, audit, Terraform, cost and RTO claims. | Provider-authored and no contract or independent audit is available. |
| `N14` | observed 2026-08-26 | vendor-hosted operator | [Red Canary staffing EDR migration](https://redcanary.com/resources/case-studies/edr-migration-staffing-company/), 11,000 endpoints, legacy OS incompatibility, security-team transition, coverage continuity. | Security supplier case study; full PDF is gated. |
| `N15` | observed 2026-08-26 | vendor-hosted operator | [StackOne/Popp ATS integration](https://www.stackone.com/case-studies/popp/), multi-ATS integration in 2–4 weeks, real-time sync, sensitive-data minimization, maintenance burden. | Vendor case study and forward-looking automation claim. |
| `N16` | last updated June 2026 | vendor case study with fictionalized client | [Siblings residential CRM](https://siblingssoftware.com/en/case-studies/canal-vista/), Zoho import, provenance, RBAC, server-side financial validation, human-approved agent summaries, stated price band. | Page explicitly says the client is fictional; use as design/vendor positioning, not operator evidence. |
| `N17` | observed 2026-08-26 | vendor-hosted operator | [EPerf commercial property operations](https://www.eperf.com/case_study.php?id=2), spreadsheet/inbox replacement, lease and vendor workflows, 12-week launch, data migration. | Vendor case study; security, rollback, and retention are not described. |
| `N18` | observed 2026-08-26 | normative | [NIST SP 800-146](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-146.pdf), SaaS portability, import/export compatibility, provider-specific rules/settings, multi-tenancy and cost/security tradeoffs. | Normative/technical guidance; not industry demand or product behavior. |
| `N19` | 2019-06-11 | empirical | [Microservices migration study](https://arxiv.org/abs/1906.04702), interviews across 14 systems/10 companies; maintainability/scalability drivers and decomposition/organizational challenges. | Cross-industry qualitative study; not an AI-builder benchmark. |
| `N20` | 2017-05-08 | empirical | [Hospitality cybersecurity study](https://arxiv.org/abs/1705.02749), qualitative interviews in five Reno hotels; reports weak security posture and vulnerability. | Small, dated, qualitative sample; no causal incident rate. |
| `N21` | production June 2025; observed 2026-08-26 | vendor-hosted operator | [VeUP/GoBubble SaaS migration](https://case-studies.veup.com/case-studies/gobubble), GCP→AWS, zero-downtime waves, IaC, tests, rollback path, projected run-rate. | Vendor case; projected $381,248/yr is not actual spend and the customer was acquired. |
| `N22` | observed 2026-08-26 | operator case hosted by studio | [Happy Software live SaaS replatform](https://happy.software/work/legacy-platform-migration/), parallel build, real-data validation, security gates, reversible DNS, failure write-ups. | Studio case study; customer identity and financial impact are limited. |
| `N23` | 2024-08-15 | vendor-hosted operator | [UCT insurance-system consolidation](https://www.uctcorp.com/insights/insurance/how-a-large-financial-services-organization-consolidated-their-agency-management-systems-through-data-migration), 12M+ records, agency/commission mapping, anomaly/audit reports, multi-phase conversion. | Historical case study; security and rollback details are incomplete. |
| `N24` | 2026-06-11 | vendor-hosted operator | [Cogent Blue/Louvre Hotels PMS→CRS](https://www.cogentblue.co.uk/case-studies/lhg), 544 hotels, 13 PMS, governance, risk tracking, direct integration, fixed deadline. | Supplier/PMO case; no public rollback test or financial figure. |
| `N25` | observed 2026-08-26 | vendor/public cloud case | [AWS/RMS Cloud hospitality migration](https://aws.amazon.com/solutions/case-studies/rms-cloud-case-study/), 4,300 databases, outage/noisy-neighbor failure, encryption, backups, cost monitoring, 20–30% performance claim. | AWS case study; customer spend and independent performance verification absent. |
| `N26` | observed 2026-08-26 | vendor-hosted operator | [Xperate legal DMS migration](https://www.xperate.com/news/modernising-document-management-with-confidence-wright-hassall-llp-case-study), 19M documents migrated, 10M retained securely behind, bespoke retrieval tool. | Vendor case; no public post-cutover audit or rollback receipt. |
| `N27` | observed 2026-08-26 | vendor-hosted operator | [ITECS law-firm cloud migration](https://itecsonline.com/white-papers-case-studies/mccraw-law-group-datacenter-decommission-cloud-migration), dependency discovery, parallel validation, staged rollback, sensitive legal data. | Vendor case; no independently measured cost or incident data. |
| `N28` | 2026-06-20 | vendor analysis | [SkillFuel ATS field-mapping failures](https://www.skillfuel.com/ats-data-migration-field-mapping-failures/), CSV/API/middleware tradeoffs, orphaned records, compliance gaps, cost ranges, parallel run. | Vendor analysis with precise figures; not a neutral cohort study. |
| `N29` | observed 2026-08-26 | vendor case | [QArea logistics modernization](https://qarea.com/projects/legacy-system-modernization-for-a-logistics-company), legacy maintenance/API limits, data-loss risk, tests, CI/CD and monitoring. | Vendor case; customer identity and measured outcomes are limited. |
| `N30` | observed 2026-08-26 | vendor case | [Acropolium TMS modernization](https://acropolium.com/portfolio/transportation-management-system-modernization/), API/data desync repair, in-house zipcode database, AWS and maintenance savings. | Vendor case with promotional outcomes; no independent audit. |
| `N31` | observed 2026-08-26 | vendor-hosted operator | [PGH Networks law-firm security case](https://pghnetworks.com/blog/pittsburgh-law-firm-it/), MFA, ethical walls, 1.6TB migration, incident-response tabletop, legacy DMS replacement. | Anonymized MSP case; full evidence and customer identity are not public. |
| `N32` | observed 2026-08-26; gated/blocked | vendor case | [Dufrain Towergate insurance migration](https://www.dufrain.co.uk/case-study/towergate-case-study/), search-indexed claim of 120+ policy systems consolidated. | Direct page challenged by verification wall; retained as `blocked`, not as a verified receipt. |
| `N33` | observed 2026-08-26 | vendor service record | [Practice42 legal migration](https://practice42.com/migration/), matter/document metadata, permissions, workflow and post-migration support boundary. | Service page and testimonial; no independent measurement. |
| `N34` | observed 2026-08-26 | vendor case | [ACT360 law-firm cloud migration](https://act360.ca/case_study/law-firm-cloud-migration-case-study/), vendor-lock-in, data bleed-through discovered during migration, Azure/security redesign. | Vendor case; customer identity and remediation evidence are limited. |
| `N35` | observed 2026-08-26 | consultant case | [Open Box property-management selection](https://openboxsoftware.com/ourwork/pmsselection), security-gap lift-and-shift, business continuity, later reimplementation. | Consultancy positioning; no operational metrics. |
| `N36` | observed 2026-08-26 | vendor case | [SANDIS insurance platform migration](https://sandis.io/use-cases/legacy-system-replacement), legacy insurance operations, migration and maintenance claims. | Marketing claim; exact customer and independent evidence are limited. |

## 3. Vertical signal ledger

The ledger is deliberately verbose enough to be audited. `source_type` is the
source family; `E/D/I/U` is evidence class; `status` is the state of the slot;
`relation` names the workflow/atom and the limitation; `rights` records the
admission boundary; `prov` points to the search/dossier receipt; and `gate` is
the falsifier or next direct-review step.

### `accounting_firms`

Workflow: client-document intake, bank-feed reconciliation, close scheduling,
and follow-up. Primary atoms: `intake_normalize`, `extract_structure`,
`reconcile_audit`, `follow_up_chase`, `report_digest`.

- `public-w2.accounting_firms.production.01` | `industry_id=accounting_firms` | `dimension_id=public_signal.production` | `observation_index=01` | `observed=2026-08-26` | `D/vendor-hosted-operator` | `N01`, §Benefits/Outcomes; `N02`, §Company | `observed`: public accounting/finance automation is reported as operating at 21-bot estate scale; relation is document/workflow automation, not app-builder adoption | `rights=source facts only; candidate, not admitted` | `prov=accounting migration query + N01/N02 dossier` | `gate=independent operator receipt with production error/acceptance logs`.
- `public-w2.accounting_firms.failure.02` | `industry_id=accounting_firms` | `dimension_id=public_signal.failure` | `observation_index=02` | `observed=2026-08-26` | `E/D/vendor-hosted-operator` | `N02`, §§Locked into Private Cloud/Compliance; `N03`, §What they were up against | `observed`: performance bottlenecks, provider control loss, server burden and weekly tax-season updates; no failure rate | `rights=customer story, no software admission` | `prov=accounting failure query + opened pages` | `gate=reproduce with synthetic close/document fixture and measure exception rate`.
- `public-w2.accounting_firms.migration.03` | `industry_id=accounting_firms` | `dimension_id=public_signal.migration` | `observation_index=03` | `observed=2026-08-26` | `E/D/vendor-hosted-operator` | `N03`, migration sections; `N02`, overnight migration | `observed`: MYOB/on-premise to Xero/cloud and private→public cloud are reported; mapping of tax, client, and ledger objects remains unverified | `rights=case-study facts only` | `prov=accounting migration query; page sections inspected` | `gate=export/import manifest plus reconciliation and no-auto-posting rule`.
- `public-w2.accounting_firms.cost.04` | `industry_id=accounting_firms` | `dimension_id=public_signal.cost` | `observation_index=04` | `observed=2026-08-26` | `D/vendor` | `N01`, §§Challenges/Solution; `N02`, §Future | `observed`: $32k avoided license/parallel-run claim and $3k/bot promotional price; units are vendor-specific and malformed page percentages are excluded | `rights=pricing claim, not a quote or contract` | `prov=accounting cost query + N01 opened lines 34–58` | `gate=compare total labor, license overlap, support, and reconciliation cost under a fixed synthetic budget`.
- `public-w2.accounting_firms.security.05` | `industry_id=accounting_firms` | `dimension_id=public_signal.security` | `observation_index=05` | `observed=2026-08-26` | `E/D/vendor-hosted-operator` | `N02`, §§MFA/SSO, encryption, IRS baseline, vulnerability scanning | `observed`: controls are described, including full-disk encryption, MFA/SSO, risk review and geo-redundant backup; not an audit | `rights=normative/customer boundary remains unknown` | `prov=opened N02 lines 31–42` | `gate=direct security review with synthetic PII, tenant isolation and recovery evidence`.
- `public-w2.accounting_firms.rollback.06` | `industry_id=accounting_firms` | `dimension_id=public_signal.rollback` | `observation_index=06` | `observed=2026-08-26` | `D/vendor-hosted-operator` | `N02`, §Compliance; `N03`, migration plan | `needs_direct_review`: backup, RPO/RTO and contingency are described, but an executed rollback is not shown | `rights=no deployment or recovery admission` | `prov=accounting rollback query + N02/N03` | `gate=restore a synthetic ledger/read-model and prove pre/post parity plus abort semantics`.
- `public-w2.accounting_firms.portability.07` | `industry_id=accounting_firms` | `dimension_id=public_signal.portability` | `observation_index=07` | `observed=2026-08-26` | `I/normative+operator` | `N03`, MYOB→Xero; `N18`, SaaS portability §§5.4.3 | `needs_direct_review`: cloud migration is reported, but business rules, tax settings, audit history and integrations are not shown as portable | `rights=do not infer ownership from migration success` | `prov=portability query + N03/N18` | `gate=request source/data/schema/secrets/jobs/audit export manifest and parity test`.
- `public-w2.accounting_firms.maintenance.08` | `industry_id=accounting_firms` | `dimension_id=public_signal.maintenance` | `observation_index=08` | `observed=2026-08-26` | `E/D/vendor-hosted-operator` | `N02`, weekly tax-software updates and annual review; `N03`, server maintenance removal | `observed`: maintenance is a recurring operating surface, not a one-time build; support owner and freshness must be named | `rights=maintenance claim only; no admitted block` | `prov=accounting maintenance query + opened pages` | `gate=90-day synthetic maintenance run with patch, schema, connector and owner receipts`.

### `construction`

Workflow: job status, change orders, subcontractor coordination, and progress
billing. Primary atoms: `intake_normalize`, `triage_route`, `sync_handoff`,
`follow_up_chase`, `report_digest`.

- `public-w2.construction.production.01` | `industry_id=construction` | `dimension_id=public_signal.production` | `observation_index=01` | `observed=2026-08-26` | `I/empirical+community` | `N04`, change-order study; `P70`, agency self-report | `needs_direct_review`: public evidence supports recurring digital job/change-order work, but not an app-builder production cohort | `rights=no candidate or safety admission` | `prov=construction vertical query + N04/P70` | `gate=direct operator receipt with live job, change-order and billing acceptance criteria`.
- `public-w2.construction.failure.02` | `industry_id=construction` | `dimension_id=public_signal.failure` | `observation_index=02` | `observed=2026-08-26` | `E/empirical` | `P74`, construction-safety code study | `observed`: code may compile while safety mathematics is wrong; this is a domain failure mode, not a defect prevalence claim | `rights=research evidence; no safety authority` | `prov=baseline empirical packet + construction failure query` | `gate=deterministic domain-expert tests with kill criteria for any safety-related automation`.
- `public-w2.construction.migration.03` | `industry_id=construction` | `dimension_id=public_signal.migration` | `observation_index=03` | `observed=2026-08-26` | `U/vendor` | `P70` mentions agency-built construction sites; `N04` is process research, not migration | `unobserved`: no sufficiently direct public construction workflow migration receipt in this sweep | `rights=gap, not negative evidence` | `prov=construction migration query; no direct receipt retained` | `gate=search Procore/ERP/change-order migrations and inspect source, permissions, approvals and reconciliation`.
- `public-w2.construction.cost.04` | `industry_id=construction` | `dimension_id=public_signal.cost` | `observation_index=04` | `observed=2026-08-26` | `I/empirical` | `N04`, change-order/cost-overrun findings | `needs_direct_review`: digital PM is associated with lower change-order/cost risk in the cited research context, but no builder TCO is measured | `rights=research inference only` | `prov=INDOT/public construction query` | `gate=measure change-order exception aging and total cost under a fixed synthetic project fixture`.
- `public-w2.construction.security.05` | `industry_id=construction` | `dimension_id=public_signal.security` | `observation_index=05` | `observed=2026-08-26` | `E/empirical` | `P74`, deterministic wrappers and strict governance for safety-critical code | `observed`: safety and cyber-physical boundaries require deterministic wrappers and review; not a construction platform security audit | `rights=no safety or client-data admission` | `prov=P74 empirical source` | `gate=domain expert, permission, provenance and offline-field security review`.
- `public-w2.construction.rollback.06` | `industry_id=construction` | `dimension_id=public_signal.rollback` | `observation_index=06` | `observed=2026-08-26` | `U` | No direct public construction rollback receipt found; `P25` and `N22` are generic deployment analogues | `unobserved`: generic rollback guidance is not vertical evidence | `rights=gap, not negative evidence` | `prov=construction rollback query + generic comparator exclusion` | `gate=simulate rejected change order and restore last approved job state without duplicate billing`.
- `public-w2.construction.portability.07` | `industry_id=construction` | `dimension_id=public_signal.portability` | `observation_index=07` | `observed=2026-08-26` | `U` | `N18`, generic SaaS portability warning; no direct construction receipt shows export of job, drawing, change-order, subcontractor and billing state together | `unobserved`: do not treat a PDF/CSV export as a portable workflow | `rights=gap, no candidate admission` | `prov=construction portability query + N18 comparator` | `gate=manifest entities, attachments, approvals, audit trail and external IDs; import into a second fixture`.
- `public-w2.construction.maintenance.08` | `industry_id=construction` | `dimension_id=public_signal.maintenance` | `observation_index=08` | `observed=2026-08-26` | `I/empirical` | `N04/P74`, change control and deterministic review implications | `needs_direct_review`: maintenance burden is inferable from project-specific rules, but no longitudinal operator receipt | `rights=inference only` | `prov=construction maintenance query` | `gate=90-day synthetic schedule/change-order drift run with named owner and expert review`.

### `course_creators`

Workflow: learner onboarding, lesson drip, community response, and cohort
events. Primary atoms: `intake_normalize`, `schedule_coordinate`,
`follow_up_chase`, `report_digest`.

- `public-w2.course_creators.production.01` | `industry_id=course_creators` | `dimension_id=public_signal.production` | `observation_index=01` | `observed=2026-08-26` | `D/community` | `P01`, education-platform self-report; `P02/P03`, linked app-store story | `observed`: one operator reports a live education platform and app; not a cohort or revenue audit | `rights=self-report only; no learner data` | `prov=baseline education searches` | `gate=independent product/usage receipt with learner privacy boundary`.
- `public-w2.course_creators.failure.02` | `industry_id=course_creators` | `dimension_id=public_signal.failure` | `observation_index=02` | `observed=2026-08-26` | `D/community` | `P01`, move from Lovable to owned stack for SEO/control; `N06`, brittle legacy assessment | `observed`: initial builder ceiling and brittle assessment are reported; no defect rate | `rights=no product implementation inference` | `prov=education production-cliff query` | `gate=compare generated vs native assessment under deterministic grading and content-version tests`.
- `public-w2.course_creators.migration.03` | `industry_id=course_creators` | `dimension_id=public_signal.migration` | `observation_index=03` | `observed=2026-08-26` | `E/D/vendor-hosted-operator` | `N05/N06`, phased LMS migration, read-only legacy, learner history and certification audit | `observed`: migration workflow is directly documented; learner completion/retention after cutover is unknown | `rights=case study only; no content copying` | `prov=LMS migration query + opened N05/N06` | `gate=checksum content, certification, enrollment, discussion and permission export/import`.
- `public-w2.course_creators.cost.04` | `industry_id=course_creators` | `dimension_id=public_signal.cost` | `observation_index=04` | `observed=2026-08-26` | `I/vendor` | `N07`, “cost-effective” managed network; `P01`, self-reported build cost context | `needs_direct_review`: no comparable creator-facing TCO or support unit | `rights=vendor positioning only` | `prov=course creator cost query` | `gate=declare cost per active learner, assessment, support hour and migration wave`.
- `public-w2.course_creators.security.05` | `industry_id=course_creators` | `dimension_id=public_signal.security` | `observation_index=05` | `observed=2026-08-26` | `E/D/vendor-hosted-operator` | `N07`, patching, backups, data sovereignty and peak-load support; `N06`, audit trail | `observed`: platform security/continuity controls are described; no independent audit | `rights=no learner-data admission` | `prov=opened N07 lines 162–215` | `gate=synthetic guardian/learner roles, consent, least privilege and backup restore`.
- `public-w2.course_creators.rollback.06` | `industry_id=course_creators` | `dimension_id=public_signal.rollback` | `observation_index=06` | `observed=2026-08-26` | `E/D/vendor` | `N06`, legacy read-only mode and phased cutover; `P13/P50`, generic version/rollback lessons | `observed`: fallback posture is explicit, but a rollback execution is not reported | `rights=no deploy or recovery admission` | `prov=opened N06 §§Certification audit/Phased cutover` | `gate=restore a cohort to pre-cutover state and prove no duplicate certificates/messages`.
- `public-w2.course_creators.portability.07` | `industry_id=course_creators` | `dimension_id=public_signal.portability` | `observation_index=07` | `observed=2026-08-26` | `E/D/vendor` | `N06`, SCORM/xAPI and immutable export; `N18`, provider-specific settings risk | `observed`: content/interoperability objects are named; workflow parity and external integrations remain open | `rights=format mention is not ownership proof` | `prov=opened N06 lines 74–99 + N18` | `gate=export/import content, grades, certificates, identities and integrations into a clean fixture`.
- `public-w2.course_creators.maintenance.08` | `industry_id=course_creators` | `dimension_id=public_signal.maintenance` | `observation_index=08` | `observed=2026-08-26` | `E/D/vendor-hosted-operator` | `N07`, patch/update/backup/load-test runbook and 24/7 support | `observed`: ongoing maintenance is a first-class cost and ownership surface | `rights=service claim only` | `prov=opened N07 lines 189–216` | `gate=90-day synthetic course/catalog freshness, plugin compatibility, peak-load and support run`.

### `ecommerce`

Workflow: cart recovery, inventory sync, order/support events. Primary atoms:
`monitor_alert`, `follow_up_chase`, `sync_handoff`, `triage_route`,
`report_digest`.

- `public-w2.ecommerce.production.01` | `industry_id=ecommerce` | `dimension_id=public_signal.production` | `observation_index=01` | `observed=2026-08-26` | `I/community/vendor` | `P67/P71`, marketplace requests and AppGild marketplace plumbing; `P06`, hosted product success claim | `needs_direct_review`: adjacent commerce receipts exist, but no clean ecommerce builder production cohort | `rights=adjacent signal only; no store admission` | `prov=ecommerce/marketplace query + baseline packet` | `gate=direct merchant receipt with order, inventory, refund and support acceptance logs`.
- `public-w2.ecommerce.failure.02` | `industry_id=ecommerce` | `dimension_id=public_signal.failure` | `observation_index=02` | `observed=2026-08-26` | `E/community` | `P71`, Stripe international issues, upload checkpoints and buyer/seller plumbing; `P67`, identity/payment complexity | `observed`: commerce failure modes are operational state-machine failures, not screen failures | `rights=community/founder report; no payment authority` | `prov=baseline marketplace source inspection` | `gate=synthetic order/refund/dispute injection with idempotency and reconciliation checks`.
- `public-w2.ecommerce.migration.03` | `industry_id=ecommerce` | `dimension_id=public_signal.migration` | `observation_index=03` | `observed=2026-08-26` | `U` | `N18`, generic SaaS portability warning; no direct public source in the bounded packet documents a merchant platform migration with orders, refunds, inventory and customer consent | `unobserved`: marketplace plumbing is not an ecommerce migration receipt | `rights=gap, not negative evidence` | `prov=ecommerce migration query + N18 comparator` | `gate=inspect Shopify/commerce migration receipts and require historical order/refund parity`.
- `public-w2.ecommerce.cost.04` | `industry_id=ecommerce` | `dimension_id=public_signal.cost` | `observation_index=04` | `observed=2026-08-26` | `I/community` | `P12/P15/P21`, generic builder cost/repair loops; `P71`, Stripe edge costs | `needs_direct_review`: cost pressure transfers plausibly to commerce, but no merchant denominator or unit economics | `rights=inference; no pricing claim` | `prov=ecommerce cost query + baseline cost packet` | `gate=measure cost per accepted order/refund/inventory sync with hard spend cap`.
- `public-w2.ecommerce.security.05` | `industry_id=ecommerce` | `dimension_id=public_signal.security` | `observation_index=05` | `observed=2026-08-26` | `I/community` | `P67/P71`, verified accounts, payments, messaging, partner funding and privacy concerns | `needs_direct_review`: security surface is clear, but no direct audit or incident dataset | `rights=no PCI/PII claim` | `prov=marketplace/security query` | `gate=synthetic least-privilege payment token, customer PII, webhook signature and tenant tests`.
- `public-w2.ecommerce.rollback.06` | `industry_id=ecommerce` | `dimension_id=public_signal.rollback` | `observation_index=06` | `observed=2026-08-26` | `U` | No direct merchant rollback receipt; `P13/P50` are generic builder version-control sources | `unobserved`: checkpoint rollback is not order/refund rollback | `rights=gap, not negative evidence` | `prov=ecommerce rollback query` | `gate=reverse a bad price/inventory/promotion release without duplicating orders or refunds`.
- `public-w2.ecommerce.portability.07` | `industry_id=ecommerce` | `dimension_id=public_signal.portability` | `observation_index=07` | `observed=2026-08-26` | `I/normative` | `N18`, SaaS export incompatibility; `P28–P40`, source/data export differences | `needs_direct_review`: product/data export does not prove orders, customer consent, fulfillment and payment history portability | `rights=exit object must be named; no vendor admission` | `prov=N18 plus baseline platform matrix` | `gate=merchant export manifest and clean re-import with order/refund/customer parity`.
- `public-w2.ecommerce.maintenance.08` | `industry_id=ecommerce` | `dimension_id=public_signal.maintenance` | `observation_index=08` | `observed=2026-08-26` | `I/community` | `P71`, 90% operational-plumbing framing; `P15`, regression/repair loops | `needs_direct_review`: maintenance burden is signaled but not measured for commerce | `rights=inference only` | `prov=marketplace maintenance query` | `gate=90-day synthetic catalog/webhook/refund/fulfillment drift run with owner and SLA`.

### `education_training`

Workflow: enrollment, attendance, learner communications, tuition records.
Primary atoms: `intake_normalize`, `schedule_coordinate`, `follow_up_chase`,
`reconcile_audit`.

- `public-w2.education_training.production.01` | `industry_id=education_training` | `dimension_id=public_signal.production` | `observation_index=01` | `observed=2026-08-26` | `E/D/vendor-hosted-operator` | `N07`, 40+ Moodle sites supporting 70,000 learners/600 staff; `N06`, national training provider | `observed`: shipped operating platforms are documented; not a builder success rate | `rights=source facts only; no learner/client data` | `prov=LMS query + opened N06/N07` | `gate=direct operator telemetry and retention cohort`.
- `public-w2.education_training.failure.02` | `industry_id=education_training` | `dimension_id=public_signal.failure` | `observation_index=02` | `observed=2026-08-26` | `E/D/vendor-hosted-operator` | `N06`, unreliable assessments/brittle certification workflow; `N07`, inconsistent performance/maintenance | `observed`: assessment and platform maintenance failures are named; not prevalence | `rights=no certification admission` | `prov=opened N06 lines 53–65 and N07 lines 162–172` | `gate=deterministic assessment/read-back test and peak-period failure injection`.
- `public-w2.education_training.migration.03` | `industry_id=education_training` | `dimension_id=public_signal.migration` | `observation_index=03` | `observed=2026-08-26` | `E/D/vendor-hosted-operator` | `N05/N07`, course/LMS migrations, cloud standardization and phased content move | `observed`: migration is well evidenced; outcome beyond case study remains unknown | `rights=no content copying or admission` | `prov=opened N05/N07` | `gate=course, enrollment, grade, certificate and role parity across wave cutover`.
- `public-w2.education_training.cost.04` | `industry_id=education_training` | `dimension_id=public_signal.cost` | `observation_index=04` | `observed=2026-08-26` | `D/vendor` | `N07`, escalating maintenance costs and “cost-effective” scalable network; `N05`, manual migration avoided | `observed`: cost pressure is documented qualitatively; no comparable TCO | `rights=vendor claim only` | `prov=opened N07 §§Challenge/Result` | `gate=cost per learner, course, exam peak and support hour under fixed fixture`.
- `public-w2.education_training.security.05` | `industry_id=education_training` | `dimension_id=public_signal.security` | `observation_index=05` | `observed=2026-08-26` | `E/D/vendor-hosted-operator` | `N07`, patching, backups, data sovereignty, high availability; `N06`, immutable certification export | `observed`: operational controls are described; no independent audit | `rights=no learner data or compliance admission` | `prov=opened N07 lines 191–215` | `gate=synthetic learner/guardian/admin roles and restore test`.
- `public-w2.education_training.rollback.06` | `industry_id=education_training` | `dimension_id=public_signal.rollback` | `observation_index=06` | `observed=2026-08-26` | `E/D/vendor` | `N06`, read-only legacy freeze and program waves; `N07`, managed upgrades/backups | `observed`: rollback posture is implied by preserved legacy, but execution is not shown | `rights=no deployment claim` | `prov=opened N06 lines 71–93` | `gate=abort a cohort wave and reconcile duplicate/late messages and certifications`.
- `public-w2.education_training.portability.07` | `industry_id=education_training` | `dimension_id=public_signal.portability` | `observation_index=07` | `observed=2026-08-26` | `E/D/vendor+normative` | `N06`, SCORM/xAPI/immutable export; `N18`, provider-specific settings | `observed`: standard content bridges exist; full operational portability is not proven | `rights=interoperability is not rights clearance` | `prov=N06/N18` | `gate=export/re-import identity, course, grade, certificate, discussion and integrations`.
- `public-w2.education_training.maintenance.08` | `industry_id=education_training` | `dimension_id=public_signal.maintenance` | `observation_index=08` | `observed=2026-08-26` | `E/D/vendor-hosted-operator` | `N07`, patch, backup, update, load testing and 24/7 support | `observed`: recurring maintenance is explicit and owner-shaped | `rights=service claim only` | `prov=opened N07 lines 189–216` | `gate=90-day course/plugin/peak-load freshness run`.

### `healthcare_medical_practices`

Workflow: appointment confirmation, no-show rescue, billing administration, and
legacy EMR overlay. Primary atoms: `schedule_coordinate`, `follow_up_chase`,
`triage_route`, `reconcile_audit`.

- `public-w2.healthcare_medical_practices.production.01` | `industry_id=healthcare_medical_practices` | `dimension_id=public_signal.production` | `observation_index=01` | `observed=2026-08-26` | `D/community+operator` | `P69`, clinical reasoning/browser-layer product report; `P68`, prototype demand explicitly separated from production | `observed`: public healthcare workflow demand exists; no clinical adoption or patient-data claim | `rights=no PHI/client-data admission` | `prov=baseline healthcare sources` | `gate=synthetic, read-only FHIR/EMR fixture with clinical owner and signoff`.
- `public-w2.healthcare_medical_practices.failure.02` | `industry_id=healthcare_medical_practices` | `dimension_id=public_signal.failure` | `observation_index=02` | `observed=2026-08-26` | `E/U/empirical` | `N08` abstract says EMR migration changes frontline workflow; direct page 403; `N19` maintenance/legacy complexity analogue | `blocked`: indexed abstract is usable as a bounded signal, not full evidence | `rights=no clinical claim` | `prov=healthcare migration query + access-limit receipt` | `gate=obtain accessible paper/data or run synthetic workflow-change study`.
- `public-w2.healthcare_medical_practices.migration.03` | `industry_id=healthcare_medical_practices` | `dimension_id=public_signal.migration` | `observation_index=03` | `observed=2026-08-26` | `U/empirical` | `N08`, search-indexed primary-care EMR migration; `N09`, WHO handbook direct PDF 403 | `blocked`: migration is signaled but source inspection is limited; no patient workflow executed | `rights=no PHI or authenticated system` | `prov=health migration query; direct HTTP 403 recorded` | `gate=review full paper/handbook and design read-only synthetic migration`.
- `public-w2.healthcare_medical_practices.cost.04` | `industry_id=healthcare_medical_practices` | `dimension_id=public_signal.cost` | `observation_index=04` | `observed=2026-08-26` | `U/I` | No direct cost receipt safely attributable to a medical-practice builder; `P69` shows legacy/API friction | `unobserved`: do not convert healthcare risk into a generic price estimate | `rights=gap, no healthcare pricing claim` | `prov=healthcare cost query` | `gate=synthetic TCO with integration, review, audit, support and downtime units`.
- `public-w2.healthcare_medical_practices.security.05` | `industry_id=healthcare_medical_practices` | `dimension_id=public_signal.security` | `observation_index=05` | `observed=2026-08-26` | `U/normative` | `N09`, WHO source access-limited; `P68/P69`, explicit PHI/EMR boundary in public discussions | `blocked`: security requirements are high, but no accessible direct implementation receipt | `rights=no HIPAA/compliance assertion` | `prov=WHO/healthcare source query + 403 receipt` | `gate=read-only PHI surrogate, consent, provenance, access audit and egress test`.
- `public-w2.healthcare_medical_practices.rollback.06` | `industry_id=healthcare_medical_practices` | `dimension_id=public_signal.rollback` | `observation_index=06` | `observed=2026-08-26` | `U` | No direct public clinical rollback receipt retained; generic `P25/N22` are excluded from vertical evidence | `unobserved`: clinical rollback requires explicit safety and signoff evidence | `rights=gap, no deployment or clinical authority` | `prov=health rollback query` | `gate=synthetic appointment/billing rollback with immutable audit and clinician approval`.
- `public-w2.healthcare_medical_practices.portability.07` | `industry_id=healthcare_medical_practices` | `dimension_id=public_signal.portability` | `observation_index=07` | `observed=2026-08-26` | `I/community+normative` | `P69`, legacy EMR resistance to APIs; `N18`, provider-specific rules and extensions | `needs_direct_review`: portability is a stated pain, not a verified migration manifest | `rights=no interoperability claim` | `prov=health portability query + P69/N18` | `gate=synthetic FHIR/CSV/API exit manifest and round-trip readback`.
- `public-w2.healthcare_medical_practices.maintenance.08` | `industry_id=healthcare_medical_practices` | `dimension_id=public_signal.maintenance` | `observation_index=08` | `observed=2026-08-26` | `I/empirical` | `N19`, maintainability/scalability and organizational complexity in migrations; `N09`, indexed maintenance guidance | `needs_direct_review`: maintenance burden is credible but not a medical-practice measurement | `rights=inference only` | `prov=health maintenance query` | `gate=90-day synthetic connector/version/consent/incident run with named clinical-ops owner`.

### `hospitality`

Workflow: reservation/status changes, guest messages, housekeeping and room
tasks. Primary atoms: `schedule_coordinate`, `triage_route`, `sync_handoff`,
`monitor_alert`.

- `public-w2.hospitality.production.01` | `industry_id=hospitality` | `dimension_id=public_signal.production` | `observation_index=01` | `observed=2026-08-26` | `E/D/vendor-hosted-operator` | `N24`, PMS→CRS across 544 hotels; `N25`, platform serving 7,000+ properties | `observed`: production operations are documented at network scale; case studies are not independent audits | `rights=no hotel/client admission` | `prov=hospitality production query + opened pages` | `gate=direct operator receipt with reservation/inventory/housekeeping acceptance metrics`.
- `public-w2.hospitality.failure.02` | `industry_id=hospitality` | `dimension_id=public_signal.failure` | `observation_index=02` | `observed=2026-08-26` | `E/D/vendor/public cloud` | `N25`, eight-hour outage and multi-tenant noisy-neighbor effects; `N20`, qualitative hotel security weakness | `observed`: outage and isolation failure are directly described; not an incident rate | `rights=case facts only; no resilience admission` | `prov=opened N25 lines 254–274; N20 abstract` | `gate=tenant-isolation, peak-load and failover probe on synthetic PMS`.
- `public-w2.hospitality.migration.03` | `industry_id=hospitality` | `dimension_id=public_signal.migration` | `observation_index=03` | `observed=2026-08-26` | `E/D/vendor-hosted-operator` | `N24`, 13 PMS to CRS, 14 pilots, governance and direct integration; `N25`, 4,300 databases | `observed`: phased migration/scale receipt; data parity and rollback evidence incomplete | `rights=no migration execution by us` | `prov=opened N24 lines 23–70 and N25 lines 259–266` | `gate=pilot hotel waves with reservation, rates, inventory, guest identity parity`.
- `public-w2.hospitality.cost.04` | `industry_id=hospitality` | `dimension_id=public_signal.cost` | `observation_index=04` | `observed=2026-08-26` | `D/vendor/public cloud` | `N25`, lower CPU utilization, smaller instances, Cost Explorer; `N24`, fixed deadline and scope expansion | `observed`: cost governance is described, but no customer spend or ROI is public | `rights=projected/claimed cost only` | `prov=opened N25 §§Outcome/Cost` | `gate=cost per property/reservation and peak event under bounded fixture`.
- `public-w2.hospitality.security.05` | `industry_id=hospitality` | `dimension_id=public_signal.security` | `observation_index=05` | `observed=2026-08-26` | `E/D/vendor+empirical` | `N25`, encryption, backups, Inspector and PII; `N20`, five-hotel qualitative study | `observed`: controls and a weak-security finding coexist; no audit certificate | `rights=no PCI/guest-data claim` | `prov=opened N25 lines 261–274 + N20` | `gate=synthetic guest PII, role, payment-token and noisy-neighbor tests`.
- `public-w2.hospitality.rollback.06` | `industry_id=hospitality` | `dimension_id=public_signal.rollback` | `observation_index=06` | `observed=2026-08-26` | `I/vendor` | `N24`, risk/decision governance and pilot hotels; `P25/N22`, generic reversible cutover analogue | `needs_direct_review`: no hotel rollback execution is shown | `rights=no deploy claim` | `prov=hospitality rollback query` | `gate=roll back one pilot property without losing reservations, rates or inventory updates`.
- `public-w2.hospitality.portability.07` | `industry_id=hospitality` | `dimension_id=public_signal.portability` | `observation_index=07` | `observed=2026-08-26` | `E/D/vendor` | `N24`, 13 PMS and direct CRS integration; `N18`, provider-specific extensions | `observed`: integration boundary is explicit; portable business rules/settings are not | `rights=integration is not ownership` | `prov=N24/N18` | `gate=manifest reservations, rates, inventory, room status, guest data and vendor mappings`.
- `public-w2.hospitality.maintenance.08` | `industry_id=hospitality` | `dimension_id=public_signal.maintenance` | `observation_index=08` | `observed=2026-08-26` | `E/D/vendor` | `N24`, maintained PMO/risk framework; `N25`, managed DB/support and 24/7 response | `observed`: maintenance/support is necessary for 24/7 operations; no staffing cost is public | `rights=service claim only` | `prov=opened N24 lines 29–47 and N25 lines 270–274` | `gate=90-day synthetic peak, patch, vendor API drift and incident-support run`.

### `it_services_msps`

Workflow: ticket/alert triage, SLA monitoring, backup result, privileged client
onboarding. Primary atoms: `triage_route`, `monitor_alert`,
`intake_normalize`, `report_digest`, `approval_publish`.

- `public-w2.it_services_msps.production.01` | `industry_id=it_services_msps` | `dimension_id=public_signal.production` | `observation_index=01` | `observed=2026-08-26` | `I/vendor+community` | `P09`, business users building reporting/workflow tools; `P18`, production Retool discussion | `needs_direct_review`: internal-tool production signal is strong, MSP-specific builder receipt is not | `rights=no privileged access or client claim` | `prov=MSP/internal-tools query + baseline packet` | `gate=direct MSP operator receipt with tenant/SLA/backup evidence`.
- `public-w2.it_services_msps.failure.02` | `industry_id=it_services_msps` | `dimension_id=public_signal.failure` | `observation_index=02` | `observed=2026-08-26` | `E/community` | `P18`, monitoring/performance/rollback/stability gaps behind Enterprise; `P22`, secrets and UI-only authorization cleanup | `observed`: internal operational systems hit production governance cliffs; not MSP failure prevalence | `rights=no vendor or client admission` | `prov=baseline Retool/production failure packet` | `gate=synthetic multi-tenant SLA/backup/privilege failure injection`.
- `public-w2.it_services_msps.migration.03` | `industry_id=it_services_msps` | `dimension_id=public_signal.migration` | `observation_index=03` | `observed=2026-08-26` | `D/community` | `P18`, anecdotal migration off Retool in about two weeks; `P49/P50`, import/version docs | `needs_direct_review`: public operator anecdote lacks scope and parity receipt | `rights=community anecdote only` | `prov=baseline Retool migration query` | `gate=MSP PSA/RMM migration with endpoint, ticket, billing and policy parity`.
- `public-w2.it_services_msps.cost.04` | `industry_id=it_services_msps` | `dimension_id=public_signal.cost` | `observation_index=04` | `observed=2026-08-26` | `D/community+vendor` | `P18/P19`, Enterprise/self-hosting cost concern; `P12/P15`, usage-credit repair loops | `observed`: cost/plan gates affect production choices; figures are not comparable | `rights=no price or contract claim` | `prov=MSP cost query + baseline packet` | `gate=cost per managed tenant, ticket, alert and human escalation with hard cap`.
- `public-w2.it_services_msps.security.05` | `industry_id=it_services_msps` | `dimension_id=public_signal.security` | `observation_index=05` | `observed=2026-08-26` | `I/vendor+normative` | `N14`, security transition across legacy endpoints; `N18`, SaaS isolation/cost tradeoff | `needs_direct_review`: security boundary is clear but not an MSP builder audit | `rights=no privileged action admission` | `prov=MSP security query + N14/N18` | `gate=synthetic tenant isolation, least privilege, secret rotation and approval tests`.
- `public-w2.it_services_msps.rollback.06` | `industry_id=it_services_msps` | `dimension_id=public_signal.rollback` | `observation_index=06` | `observed=2026-08-26` | `D/community` | `P13/P50`, checkpoint/GitHub rollback reports; `P18`, production versioning concern | `needs_direct_review`: generic app rollback is not endpoint/policy rollback | `rights=no operational admission` | `prov=baseline rollback packet` | `gate=rollback a synthetic policy/agent release and verify endpoint state/readback`.
- `public-w2.it_services_msps.portability.07` | `industry_id=it_services_msps` | `dimension_id=public_signal.portability` | `observation_index=07` | `observed=2026-08-26` | `I/normative+community` | `P18/P34/P39`, self-host/export differences; `N18`, provider-specific SaaS settings | `needs_direct_review`: code/data export does not prove credentials, tenants, runbooks or policies | `rights=exit manifest required` | `prov=baseline platform matrix + N18` | `gate=PSA/RMM export/import of tenants, assets, automations, secrets references and audit history`.
- `public-w2.it_services_msps.maintenance.08` | `industry_id=it_services_msps` | `dimension_id=public_signal.maintenance` | `observation_index=08` | `observed=2026-08-26` | `I/community` | `P22`, post-generation cleanup and recurring fixes; `P18`, ongoing monitoring/rollback burden | `needs_direct_review`: direct MSP maintenance receipt is missing | `rights=inference only` | `prov=MSP maintenance query` | `gate=90-day run with patch exceptions, vendor drift, SLA breach and support ownership`.

### `insurance_agencies`

Workflow: lead/renewal follow-up, condition chasing, certificate and policy
administration. Primary atoms: `follow_up_chase`, `extract_structure`,
`approval_publish`, `report_digest`.

- `public-w2.insurance_agencies.production.01` | `industry_id=insurance_agencies` | `dimension_id=public_signal.production` | `observation_index=01` | `observed=2026-08-26` | `D/vendor-hosted-operator` | `N23`, agency/policy/commission processing consolidated to one system; `N36`, legacy insurance replacement positioning | `observed`: production system consolidation is documented; not AI-builder adoption | `rights=no policy/client data` | `prov=insurance production query + N23` | `gate=direct agency operator receipt with renewal/commission acceptance data`.
- `public-w2.insurance_agencies.failure.02` | `industry_id=insurance_agencies` | `dimension_id=public_signal.failure` | `observation_index=02` | `observed=2026-08-26` | `E/D/vendor` | `N23`, discrepancies across agent records, contract dates and commission rules; `N32`, search-indexed 120-system claim blocked | `observed`: multi-system inconsistency is direct; N32 remains blocked | `rights=no policy-system admission` | `prov=opened N23 lines 68–79 and access-limited N32` | `gate=synthetic duplicate/commission/renewal reconciliation with audit report`.
- `public-w2.insurance_agencies.migration.03` | `industry_id=insurance_agencies` | `dimension_id=public_signal.migration` | `observation_index=03` | `observed=2026-08-26` | `E/D/vendor-hosted-operator` | `N23`, 12M+ records and multiple policy/admin sources into target systems; `N32`, gated additional signal | `observed`: structured conversion is documented; no direct rollback | `rights=case study only` | `prov=opened N23 lines 70–97` | `gate=map policy, agent, contract, commission and history objects with anomaly counts`.
- `public-w2.insurance_agencies.cost.04` | `industry_id=insurance_agencies` | `dimension_id=public_signal.cost` | `observation_index=04` | `observed=2026-08-26` | `I/vendor` | `N23`, cost savings and constrained staffing; `N36`, maintenance reduction claim | `needs_direct_review`: savings are qualitative and vendor-authored | `rights=no financial outcome claim` | `prov=insurance cost query + N23/N36` | `gate=cost per policy/agent/commission conversion and post-cutover support`.
- `public-w2.insurance_agencies.security.05` | `industry_id=insurance_agencies` | `dimension_id=public_signal.security` | `observation_index=05` | `observed=2026-08-26` | `I/vendor+normative` | `N23`, policy and license records; `N18`, multi-tenant isolation and portability tradeoffs | `needs_direct_review`: sensitivity is clear, but source lacks security control receipt | `rights=no regulatory compliance claim` | `prov=insurance security query` | `gate=role, tenant, retention, redaction and approval review on synthetic policy data`.
- `public-w2.insurance_agencies.rollback.06` | `industry_id=insurance_agencies` | `dimension_id=public_signal.rollback` | `observation_index=06` | `observed=2026-08-26` | `U` | `N23` has phased conversion but no executed rollback; `N32` is blocked | `unobserved`: no safe vertical rollback receipt | `rights=gap, not negative evidence` | `prov=insurance rollback query` | `gate=abort a policy/commission conversion wave and reconcile source/target totals`.
- `public-w2.insurance_agencies.portability.07` | `industry_id=insurance_agencies` | `dimension_id=public_signal.portability` | `observation_index=07` | `observed=2026-08-26` | `E/D/vendor+normative` | `N23`, extract/reformat/match historical records; `N18`, SaaS business rules/extensions may not transfer | `observed`: data movement is documented; portability of rules, integrations and audit remains open | `rights=conversion is not source ownership` | `prov=N23/N18` | `gate=export manifest includes policy, claim, commission, hierarchy, audit and external IDs`.
- `public-w2.insurance_agencies.maintenance.08` | `industry_id=insurance_agencies` | `dimension_id=public_signal.maintenance` | `observation_index=08` | `observed=2026-08-26` | `I/vendor` | `N23`, multiple-system staffing/nightly-cycle burden; `N36`, SaaS maintenance claim | `needs_direct_review`: maintenance is inferred from consolidation problem | `rights=inference only` | `prov=insurance maintenance query` | `gate=90-day synthetic renewal/rule/version run with compliance owner`.

### `law_firms`

Workflow: client intake, conflict checks, document drafting, matter filing, and
billing administration. Primary atoms: `intake_normalize`, `triage_route`,
`extract_structure`, `approval_publish`, `follow_up_chase`.

- `public-w2.law_firms.production.01` | `industry_id=law_firms` | `dimension_id=public_signal.production` | `observation_index=01` | `observed=2026-08-26` | `D/vendor-hosted-operator` | `N26/N31`, legal DMS/cloud environments supporting active matters and document work | `observed`: production legal operations are documented; no AI-builder adoption claim | `rights=no privileged/client data` | `prov=law production query + N26/N31` | `gate=direct firm operator receipt with matter-access and conflict-check evidence`.
- `public-w2.law_firms.failure.02` | `industry_id=law_firms` | `dimension_id=public_signal.failure` | `observation_index=02` | `observed=2026-08-26` | `E/D/vendor` | `N27/N34`, undocumented dependencies, performance degradation and data bleed-through discovered during migration | `observed`: confidentiality and dependency failures are direct case signals; no rate | `rights=no legal workflow admission` | `prov=opened/search-indexed legal cases` | `gate=synthetic ethical-wall and dependency discovery test before any side effect`.
- `public-w2.law_firms.migration.03` | `industry_id=law_firms` | `dimension_id=public_signal.migration` | `observation_index=03` | `observed=2026-08-26` | `E/D/vendor-hosted-operator` | `N26`, 19M documents moved and 10M retained behind retrieval tool; `N33`, NetDocuments→Clio service record | `observed`: document migration and preservation boundary are explicit | `rights=no document copying` | `prov=law migration query + N26/N33` | `gate=hash/metadata/matter/permission parity and retained-legacy retrieval`.
- `public-w2.law_firms.cost.04` | `industry_id=law_firms` | `dimension_id=public_signal.cost` | `observation_index=04` | `observed=2026-08-26` | `I/vendor` | `N26`, avoiding old licenses by retaining only needed documents; `N27`, infrastructure modernization | `needs_direct_review`: no comparable total cost or billable-hour measurement | `rights=no cost claim` | `prov=law cost query` | `gate=cost per matter/document/retention year and downtime hour`.
- `public-w2.law_firms.security.05` | `industry_id=law_firms` | `dimension_id=public_signal.security` | `observation_index=05` | `observed=2026-08-26` | `E/D/vendor-hosted-operator` | `N31`, MFA, ethical walls, incident response; `N34`, data bleed-through and Azure redesign | `observed`: security is client-facing legal work product; no independent certification | `rights=no privilege/compliance admission` | `prov=law security query + N31/N34` | `gate=synthetic matter ACL, ethical wall, audit, export-redaction and ransomware restore test`.
- `public-w2.law_firms.rollback.06` | `industry_id=law_firms` | `dimension_id=public_signal.rollback` | `observation_index=06` | `observed=2026-08-26` | `E/D/vendor` | `N27`, parallel validation and clean rollback path; `P25`, generic production handoff | `observed`: rollback is described as a migration control, not executed evidence | `rights=no deployment claim` | `prov=law rollback query + N27` | `gate=fail a staged matter migration and restore permissions, metadata and audit entries`.
- `public-w2.law_firms.portability.07` | `industry_id=law_firms` | `dimension_id=public_signal.portability` | `observation_index=07` | `observed=2026-08-26` | `E/D/vendor+normative` | `N26/N33`, documents and metadata; `N18`, provider-specific settings/extensions | `observed`: document transfer is possible; matter workflows, ethical walls and billing are not proven portable | `rights=export is not privilege clearance` | `prov=N26/N33/N18` | `gate=full matter export manifest and round-trip access-policy test`.
- `public-w2.law_firms.maintenance.08` | `industry_id=law_firms` | `dimension_id=public_signal.maintenance` | `observation_index=08` | `observed=2026-08-26` | `I/vendor` | `N27/N31`, support, security response and infrastructure upkeep; `N34`, legacy policy burden | `needs_direct_review`: ongoing maintenance is reported but not quantified | `rights=service claim only` | `prov=law maintenance query` | `gate=90-day patch, ethical-wall, retention and incident-response exercise`.

### `logistics_freight`

Workflow: shipment/status event, delay, missing proof of delivery, carrier
booking and customer notice. Primary atoms: `monitor_alert`, `triage_route`,
`schedule_coordinate`, `sync_handoff`, `follow_up_chase`.

- `public-w2.logistics_freight.production.01` | `industry_id=logistics_freight` | `dimension_id=public_signal.production` | `observation_index=01` | `observed=2026-08-26` | `E/empirical+public agency` | `N10`, public EFM web services/mobile/invoice pilot; `P07`, supply-chain operator news monitor | `observed`: bounded logistics workflows are publicly documented; no builder cohort | `rights=no carrier/client data` | `prov=FHWA/logistics query + N10` | `gate=direct shipper/carrier operator receipt with event and exception metrics`.
- `public-w2.logistics_freight.failure.02` | `industry_id=logistics_freight` | `dimension_id=public_signal.failure` | `observation_index=02` | `observed=2026-08-26` | `E/D/vendor` | `N29/N30`, legacy API limitations, data-loss risk and data desync requiring reindex/consistency service | `observed`: integration/data consistency failures are concrete; not prevalence | `rights=no logistics side-effect admission` | `prov=opened logistics cases` | `gate=duplicate/out-of-order shipment events and missing POD replay`.
- `public-w2.logistics_freight.migration.03` | `industry_id=logistics_freight` | `dimension_id=public_signal.migration` | `observation_index=03` | `observed=2026-08-26` | `E/D/vendor` | `N29/N30`, legacy logistics modernization and API/data-store changes | `observed`: migration is documented; customer cutover/rollback details incomplete | `rights=no source copying` | `prov=logistics migration query + N29/N30` | `gate=parallel event stream and order/billing/POD parity`.
- `public-w2.logistics_freight.cost.04` | `industry_id=logistics_freight` | `dimension_id=public_signal.cost` | `observation_index=04` | `observed=2026-08-26` | `E/empirical/public agency` | `N10`, $13,440 implementation + $448 annual O&M; unit assumptions are explicit | `observed`: strongest public cost receipt in this wave, but dated small pilot | `rights=public research cost only` | `prov=opened N10 lines 101–151` | `gate=repeat with current cloud/API/partner labor and accepted-outcome units`.
- `public-w2.logistics_freight.security.05` | `industry_id=logistics_freight` | `dimension_id=public_signal.security` | `observation_index=05` | `observed=2026-08-26` | `I/empirical+vendor` | `N10`, partner message schemas/web services; `N29`, monitoring/testing; security controls not fully reported | `needs_direct_review`: system boundary is clear, security evidence is thin | `rights=no carrier credentials or location data` | `prov=logistics security query` | `gate=synthetic carrier identity, webhook signing, location minimization and audit test`.
- `public-w2.logistics_freight.rollback.06` | `industry_id=logistics_freight` | `dimension_id=public_signal.rollback` | `observation_index=06` | `observed=2026-08-26` | `U/vendor` | `N29` mentions risk of data loss during updates; no executed rollback receipt | `unobserved`: failure risk is not rollback proof | `rights=gap, not negative evidence` | `prov=logistics rollback query` | `gate=rollback a carrier/status release with idempotent event replay and no duplicate notice`.
- `public-w2.logistics_freight.portability.07` | `industry_id=logistics_freight` | `dimension_id=public_signal.portability` | `observation_index=07` | `observed=2026-08-26` | `E/empirical` | `N10`, documented ecosystem/message schemas and web-service exchange; `N18`, SaaS export risk | `observed`: interface portability is clearer than workflow portability | `rights=schemas are not rights/admission` | `prov=N10/N18` | `gate=manifest shipments, events, carrier mappings, PODs, billing and audit`.
- `public-w2.logistics_freight.maintenance.08` | `industry_id=logistics_freight` | `dimension_id=public_signal.maintenance` | `observation_index=08` | `observed=2026-08-26` | `E/empirical+vendor` | `N10`, 16 hours/year O&M assumption; `N29/N30`, monitoring and consistency maintenance | `observed`: maintenance unit is explicit in the public pilot; not generalizable | `rights=public study only` | `prov=opened N10/N29/N30` | `gate=90-day event/API drift, carrier onboarding and reconciliation run`.

### `marketing_social_media_agencies`

Workflow: content calendar, reporting period, lead/event and approval. Primary
atoms: `approval_publish`, `schedule_coordinate`, `report_digest`,
`follow_up_chase`, `extract_structure`.

- `public-w2.marketing_social_media_agencies.production.01` | `industry_id=marketing_social_media_agencies` | `dimension_id=public_signal.production` | `observation_index=01` | `observed=2026-08-26` | `E/D/survey+operator` | `P08`, 302 existing adopters report workflow automation, integrations and enrichment; `N11`, connected marketing stack | `observed`: adoption and operating use are distinct from retention | `rights=no customer campaign data` | `prov=Chief Martech + marketing migration query` | `gate=direct agency production receipt with approval and publish logs`.
- `public-w2.marketing_social_media_agencies.failure.02` | `industry_id=marketing_social_media_agencies` | `dimension_id=public_signal.failure` | `observation_index=02` | `observed=2026-08-26` | `E/D/operator case` | `N11`, single-person knowledge, fragmented tools, slow operations and no revenue visibility | `observed`: maintenance/ownership failure is direct; no prevalence | `rights=consultant case only` | `prov=opened N11 lines 38–60` | `gate=synthetic attribution, duplicate lead and approval-rejection tests`.
- `public-w2.marketing_social_media_agencies.migration.03` | `industry_id=marketing_social_media_agencies` | `dimension_id=public_signal.migration` | `observation_index=03` | `observed=2026-08-26` | `E/D/operator case` | `N11`, Marketo→HubSpot with Salesforce/Sansan/GA4 and phased no-disruption transition | `observed`: architecture/data migration is explicit; no independent audit | `rights=no campaign export or credential use` | `prov=opened N11 §§Work/Result` | `gate=field/workflow/consent/attribution parity and dual-run`.
- `public-w2.marketing_social_media_agencies.cost.04` | `industry_id=marketing_social_media_agencies` | `dimension_id=public_signal.cost` | `observation_index=04` | `observed=2026-08-26` | `I/survey+operator` | `P08`, adoption use cases; `N11`, high maintenance cost/slow operations | `needs_direct_review`: no comparable accepted-outcome cost unit | `rights=no agency economics claim` | `prov=marketing cost query` | `gate=cost per approved/published asset, lead, report and repair loop`.
- `public-w2.marketing_social_media_agencies.security.05` | `industry_id=marketing_social_media_agencies` | `dimension_id=public_signal.security` | `observation_index=05` | `observed=2026-08-26` | `I/vendor+community` | `P08/P09`, enterprise workflow governance; `P26/P27`, public defaults/privacy incidents in builder context | `needs_direct_review`: marketing credentials/content rights are not directly audited here | `rights=no platform credential admission` | `prov=marketing security query + baseline risk packet` | `gate=synthetic OAuth scope, approval, content-rights and audit test`.
- `public-w2.marketing_social_media_agencies.rollback.06` | `industry_id=marketing_social_media_agencies` | `dimension_id=public_signal.rollback` | `observation_index=06` | `observed=2026-08-26` | `U` | No direct agency publish rollback receipt; `P25/N22` generic deployment analogues excluded from vertical proof | `unobserved`: reversing a code deploy is not retracting a public post or campaign | `rights=gap, no publishing authority` | `prov=marketing rollback query` | `gate=synthetic scheduled-post cancel/retract, approval log and idempotent resend`.
- `public-w2.marketing_social_media_agencies.portability.07` | `industry_id=marketing_social_media_agencies` | `dimension_id=public_signal.portability` | `observation_index=07` | `observed=2026-08-26` | `I/vendor+normative` | `N11`, shared data architecture; `N18`, provider-specific settings; `P34/P39`, export differences | `needs_direct_review`: assets, consent, attribution, schedules and credentials are not proven portable | `rights=content/licence boundary remains open` | `prov=N11/N18 + baseline platform matrix` | `gate=export/re-import content, approvals, audiences, attribution and audit`.
- `public-w2.marketing_social_media_agencies.maintenance.08` | `industry_id=marketing_social_media_agencies` | `dimension_id=public_signal.maintenance` | `observation_index=08` | `observed=2026-08-26` | `E/D/operator case` | `N11`, distributed ownership and future updates made easier; `P08`, ongoing adopter workflows | `observed`: maintenance and ownership are part of the outcome; retention remains unknown | `rights=case evidence only` | `prov=opened N11 lines 46–60` | `gate=90-day schema/API/content-calendar drift run with human owner`.

### `mortgage_brokers`

Workflow: borrower intake, missing conditions, lender status, and close. Primary
atoms: `intake_normalize`, `extract_structure`, `triage_route`,
`follow_up_chase`, `report_digest`.

- `public-w2.mortgage_brokers.production.01` | `industry_id=mortgage_brokers` | `dimension_id=public_signal.production` | `observation_index=01` | `observed=2026-08-26` | `E/D/vendor-hosted-operator` | `N12`, broker self-service portal and status/notification workflow; `N13`, loan origination/servicing production estate | `observed`: production workflow evidence exists; no broker adoption denominator | `rights=no borrower data or lending authority` | `prov=mortgage production query + opened N12/N13` | `gate=direct broker/operator receipt with application-state readback`.
- `public-w2.mortgage_brokers.failure.02` | `industry_id=mortgage_brokers` | `dimension_id=public_signal.failure` | `observation_index=02` | `observed=2026-08-26` | `E/D/vendor-hosted-operator` | `N13`, four-hour outage, untested tape restore and end-of-life hardware; `N12`, legacy portal/mobile limitation | `observed`: outage/recovery weakness is concrete; not a failure rate | `rights=no regulated lending claim` | `prov=opened N13 lines 27–35` | `gate=synthetic condition/decision state failure and restore`.
- `public-w2.mortgage_brokers.migration.03` | `industry_id=mortgage_brokers` | `dimension_id=public_signal.migration` | `observation_index=03` | `observed=2026-08-26` | `E/D/vendor-hosted-operator` | `N12`, legacy portal migration; `N13`, workload audit/replatform and three-weekend blue-green cutover | `observed`: migration path and controls are documented | `rights=no client or lender system access` | `prov=opened N12/N13` | `gate=application, borrower, lender, document and audit parity`.
- `public-w2.mortgage_brokers.cost.04` | `industry_id=mortgage_brokers` | `dimension_id=public_signal.cost` | `observation_index=04` | `observed=2026-08-26` | `D/vendor-hosted-operator` | `N13`, claimed -34% infrastructure cost; no normalized implementation/people cost | `observed`: unit is infrastructure cost only, not total cost | `rights=vendor claim, not financial advice` | `prov=opened N13 lines 14–26` | `gate=full TCO: licensing, people, integration, controls, downtime and support`.
- `public-w2.mortgage_brokers.security.05` | `industry_id=mortgage_brokers` | `dimension_id=public_signal.security` | `observation_index=05` | `observed=2026-08-26` | `E/D/vendor-hosted-operator` | `N12`, SSO/session timeout and security testing; `N13`, encryption, MFA, least privilege, audit trail, data residency | `observed`: strong control claims are explicit; not independently certified | `rights=no borrower/regulated-compliance admission` | `prov=opened N12 lines 47–62 and N13 lines 29–35` | `gate=synthetic borrower identity, role, lender egress and audit review`.
- `public-w2.mortgage_brokers.rollback.06` | `industry_id=mortgage_brokers` | `dimension_id=public_signal.rollback` | `observation_index=06` | `observed=2026-08-26` | `E/D/vendor-hosted-operator` | `N13`, blue-green legacy fallback and warm DR; `N12`, minimize disruption | `observed`: rollback posture is documented, but no rollback execution | `rights=no deployment admission` | `prov=opened N13 lines 31–35` | `gate=abort a synthetic lender-status wave and prove no duplicate messages/decisions`.
- `public-w2.mortgage_brokers.portability.07` | `industry_id=mortgage_brokers` | `dimension_id=public_signal.portability` | `observation_index=07` | `observed=2026-08-26` | `I/vendor+normative` | `N13`, Terraform/IaC and workload classifications; `N18`, provider-specific SaaS rules | `needs_direct_review`: infrastructure portability is not borrower/workflow portability | `rights=IaC mention is not source ownership` | `prov=N13/N18` | `gate=exit manifest for borrower, conditions, documents, rules, secrets references and audit`.
- `public-w2.mortgage_brokers.maintenance.08` | `industry_id=mortgage_brokers` | `dimension_id=public_signal.maintenance` | `observation_index=08` | `observed=2026-08-26` | `E/D/vendor-hosted-operator` | `N13`, configuration, audit and FinOps; `N12`, ongoing self-service/feedback loop | `observed`: maintenance/operating ownership is described; no longitudinal support data | `rights=no regulated maintenance admission` | `prov=opened N13 lines 33–35` | `gate=90-day synthetic lender API/rule/version and audit-retention run`.

### `property_management`

Workflow: tenant inquiry, rent aging, maintenance request, lease event and vendor
dispatch. Primary atoms: `intake_normalize`, `triage_route`, `follow_up_chase`,
`sync_handoff`, `extract_structure`.

- `public-w2.property_management.production.01` | `industry_id=property_management` | `dimension_id=public_signal.production` | `observation_index=01` | `observed=2026-08-26` | `E/D/vendor-hosted-operator` | `N17`, 80+ property operations portal in production; `N35`, PMS selection and lift-and-shift | `observed`: workflow platform receipt exists; not a builder adoption cohort | `rights=no tenant/property data` | `prov=opened N17 + N35` | `gate=direct operator receipt for lease/work-order/vendor outcomes`.
- `public-w2.property_management.failure.02` | `industry_id=property_management` | `dimension_id=public_signal.failure` | `observation_index=02` | `observed=2026-08-26` | `E/D/vendor case` | `N17`, missed lease events, expired COIs, inbox/spreadsheet institutional knowledge | `observed`: concrete operational misses; no failure prevalence | `rights=no property-management admission` | `prov=opened N17 lines 13–24` | `gate=synthetic lease/COI/work-order duplicate and escalation test`.
- `public-w2.property_management.migration.03` | `industry_id=property_management` | `dimension_id=public_signal.migration` | `observation_index=03` | `observed=2026-08-26` | `E/D/vendor/consultant` | `N17`, spreadsheet data migration in 12-week launch; `N35`, SaaS lift-and-shift before reimplementation | `observed`: migration and continuity are documented; detailed parity absent | `rights=no tenant data or hosting action` | `prov=opened N17/N35` | `gate=lease, tenant, vendor, attachment, permission and alert parity`.
- `public-w2.property_management.cost.04` | `industry_id=property_management` | `dimension_id=public_signal.cost` | `observation_index=04` | `observed=2026-08-26` | `D/vendor case` | `N17`, onboarding 2 weeks→3 days and 12 missed lease events→0; no total price | `observed`: labor/time outcome, not TCO | `rights=case claim only` | `prov=opened N17 lines 18–24` | `gate=cost per property, unit, work order and avoided exception`.
- `public-w2.property_management.security.05` | `industry_id=property_management` | `dimension_id=public_signal.security` | `observation_index=05` | `observed=2026-08-26` | `I/consultant+normative` | `N35`, security-gap lift-and-shift/business continuity; `N18`, multi-tenant isolation | `needs_direct_review`: controls are not enumerated for tenant/payment/PII | `rights=no privacy/compliance claim` | `prov=property security query` | `gate=tenant isolation, payment authority, vendor access, retention and audit test`.
- `public-w2.property_management.rollback.06` | `industry_id=property_management` | `dimension_id=public_signal.rollback` | `observation_index=06` | `observed=2026-08-26` | `U` | No direct property rollback receipt; `N35` says continuity but not executed reversal | `unobserved`: gap, not negative evidence | `rights=no deployment admission` | `prov=property rollback query` | `gate=reverse one property/work-order wave with no duplicate dispatch or rent state`.
- `public-w2.property_management.portability.07` | `industry_id=property_management` | `dimension_id=public_signal.portability` | `observation_index=07` | `observed=2026-08-26` | `E/D/vendor` | `N17`, migration from spreadsheets and “deploy anywhere you host”; `N18`, SaaS portability limits | `needs_direct_review`: deploy-anywhere is not a complete export manifest | `rights=no portability acceptance` | `prov=opened N17 + N18` | `gate=export lease/tenant/work-order/attachments/audit and clean import`.
- `public-w2.property_management.maintenance.08` | `industry_id=property_management` | `dimension_id=public_signal.maintenance` | `observation_index=08` | `observed=2026-08-26` | `D/vendor+consultant` | `N17`, real-time portfolio view; `N35`, later reimplementation and ongoing platform choice | `needs_direct_review`: operational maintenance is implied, not quantified | `rights=vendor/consultant evidence only` | `prov=property maintenance query` | `gate=90-day lease/COI/work-order freshness and support run`.

### `real_estate`

Workflow: portal lead, viewing request, listing paperwork and transaction stage.
Primary atoms: `intake_normalize`, `follow_up_chase`, `schedule_coordinate`,
`extract_structure`, `report_digest`.

- `public-w2.real_estate.production.01` | `industry_id=real_estate` | `dimension_id=public_signal.production` | `observation_index=01` | `observed=2026-08-26` | `D/vendor` | `N16`, stated CRM delivery shape for residential sales; `N17`, CRE portal production case | `needs_direct_review`: N16 explicitly fictional; N17 is property operations adjacent | `rights=vendor design signal, no client claim` | `prov=real estate production query + N16/N17` | `gate=independent brokerage/operator receipt`.
- `public-w2.real_estate.failure.02` | `industry_id=real_estate` | `dimension_id=public_signal.failure` | `observation_index=02` | `observed=2026-08-26` | `E/D/vendor fictionalized` | `N16`, proforma/contract mismatches and stage/RBAC confusion; page says fictional client | `needs_direct_review`: design case only, not operator evidence | `rights=no deal data or financial authority` | `prov=opened N16 lines 19–24, 70–92` | `gate=synthetic listing/proforma/contract mismatch test with legal approval`.
- `public-w2.real_estate.migration.03` | `industry_id=real_estate` | `dimension_id=public_signal.migration` | `observation_index=03` | `observed=2026-08-26` | `E/D/vendor fictionalized` | `N16`, Zoho import with provenance/reconciliation; `N17`, spreadsheet migration | `observed`: import pattern is directly described; operator outcome unverified | `rights=no CRM copying` | `prov=opened N16 lines 77–92` | `gate=lead/deal/stage/commission/document parity and provenance audit`.
- `public-w2.real_estate.cost.04` | `industry_id=real_estate` | `dimension_id=public_signal.cost` | `observation_index=04` | `observed=2026-08-26` | `D/vendor fictionalized` | `N16`, ~$32k/month five-person squad and project bands | `observed`: price band is vendor quote context, not market price or ROI | `rights=no procurement claim` | `prov=opened N16 lines 24–39, 128–140` | `gate=compare accepted outcome, maintenance and migration cost under fixed scope`.
- `public-w2.real_estate.security.05` | `industry_id=real_estate` | `dimension_id=public_signal.security` | `observation_index=05` | `observed=2026-08-26` | `E/D/vendor fictionalized` | `N16`, role gates, server validation, human-approved agent summaries and provenance | `observed`: governance design is explicit; fictional case is not an audit | `rights=no deal/client data` | `prov=opened N16 lines 48–51, 77–102` | `gate=synthetic role, escrow/proforma, approval, external-message and audit tests`.
- `public-w2.real_estate.rollback.06` | `industry_id=real_estate` | `dimension_id=public_signal.rollback` | `observation_index=06` | `observed=2026-08-26` | `U` | `P13/P50`, generic checkpoint/version-control comparators; no direct real-estate rollback receipt | `unobserved`: do not equate source-control rollback with deal-state reversal | `rights=gap, no transaction authority` | `prov=real estate rollback query + generic comparator` | `gate=reverse a stage/price rule release while preserving legally approved history`.
- `public-w2.real_estate.portability.07` | `industry_id=real_estate` | `dimension_id=public_signal.portability` | `observation_index=07` | `observed=2026-08-26` | `E/D/vendor fictionalized` | `N16`, Zoho import, provenance tags and reconciliation dashboards; `N18`, provider-specific rules | `observed`: CRM import shape is named; exit completeness is open | `rights=fictional design evidence only` | `prov=N16/N18` | `gate=export/import lead, deal, stage, document and audit graph`.
- `public-w2.real_estate.maintenance.08` | `industry_id=real_estate` | `dimension_id=public_signal.maintenance` | `observation_index=08` | `observed=2026-08-26` | `I/vendor` | `N16`, dedicated squad/team choice and domain-specific QA; `N17`, ongoing property operations | `needs_direct_review`: support burden is clear but not measured | `rights=inference only` | `prov=real estate maintenance query` | `gate=90-day listing/MLS/stage/commission rule drift run`.

### `recruiting_staffing`

Workflow: candidate screening, interview scheduling, offer conditions and
placement. Primary atoms: `extract_structure`, `triage_route`,
`schedule_coordinate`, `follow_up_chase`, `report_digest`.

- `public-w2.recruiting_staffing.production.01` | `industry_id=recruiting_staffing` | `dimension_id=public_signal.production` | `observation_index=01` | `observed=2026-08-26` | `E/D/vendor-hosted-operator` | `N15`, recruitment AI agent with multi-ATS workflow; `P71`, marketplace/operator demand adjacent | `observed`: public staffing workflow receipt; future “90%” claim kept separate | `rights=no candidate data or hiring authority` | `prov=opened N15 lines 104–173` | `gate=independent staffing operator receipt with candidate fairness and outcome metrics`.
- `public-w2.recruiting_staffing.failure.02` | `industry_id=recruiting_staffing` | `dimension_id=public_signal.failure` | `observation_index=02` | `observed=2026-08-26` | `E/D/vendor analysis` | `N28`, CSV orphan records, broken stage history, attachments and compliance gaps after cutover | `observed`: data-graph failure modes are concrete; not prevalence | `rights=no HR data or employment decision` | `prov=opened N28 lines 62–86` | `gate=synthetic candidate/application/job graph mutation and audit test`.
- `public-w2.recruiting_staffing.migration.03` | `industry_id=recruiting_staffing` | `dimension_id=public_signal.migration` | `observation_index=03` | `observed=2026-08-26` | `E/D/vendor-hosted-operator` | `N15`, multiple ATS integrations; `N28`, CSV/API/middleware migration paths and parallel run | `observed`: exact migration tradeoff is documented; no independent cohort | `rights=no ATS access or candidate data` | `prov=opened N15/N28` | `gate=object-by-object mapping, attachment retention and parallel source/target reconciliation`.
- `public-w2.recruiting_staffing.cost.04` | `industry_id=recruiting_staffing` | `dimension_id=public_signal.cost` | `observation_index=04` | `observed=2026-08-26` | `D/vendor analysis` | `N28`, $15k–$40k+ API engineering for 100K records and $5k–$10k middleware tooling | `observed`: units and tradeoffs are explicit, but vendor analysis is not neutral | `rights=no procurement claim` | `prov=opened N28 lines 101–110` | `gate=cost per candidate graph, attachment, compliance audit and API call`.
- `public-w2.recruiting_staffing.security.05` | `industry_id=recruiting_staffing` | `dimension_id=public_signal.security` | `observation_index=05` | `observed=2026-08-26` | `E/D/vendor-hosted-operator` | `N15`, avoid unnecessary storage and secure ATS handling; `N14`, EDR coverage during staffing security transition | `observed`: security is a stated integration requirement; no independent audit | `rights=no sensitive HR data` | `prov=opened N15 lines 139–148 and N14` | `gate=synthetic candidate minimization, role/fairness, retention and egress test`.
- `public-w2.recruiting_staffing.rollback.06` | `industry_id=recruiting_staffing` | `dimension_id=public_signal.rollback` | `observation_index=06` | `observed=2026-08-26` | `E/D/vendor analysis` | `N28`, recommends parallel operation before decommissioning; `N15`, real-time integration changes | `observed`: fallback principle is documented, not executed | `rights=no hiring/deployment admission` | `prov=opened N28 lines 97–109` | `gate=rollback a pipeline-stage mapping without duplicate outreach or lost disposition history`.
- `public-w2.recruiting_staffing.portability.07` | `industry_id=recruiting_staffing` | `dimension_id=public_signal.portability` | `observation_index=07` | `observed=2026-08-26` | `E/D/vendor analysis` | `N28`, CSV severs relations; API mapping preserves object graph; `N15`, connector abstraction | `observed`: portability is data-model-shaped, not file-shaped | `rights=connector coverage is not ownership` | `prov=opened N28 lines 68–86` | `gate=round-trip person/application/job/stage/scorecard/attachment export`.
- `public-w2.recruiting_staffing.maintenance.08` | `industry_id=recruiting_staffing` | `dimension_id=public_signal.maintenance` | `observation_index=08` | `observed=2026-08-26` | `E/D/vendor-hosted-operator` | `N15`, building integrations internally was unsustainable; `N14`, support during security-team transition | `observed`: connector and support maintenance are explicit burdens | `rights=no vendor continuity claim` | `prov=opened N15 lines 129–156 and N14` | `gate=90-day ATS schema/rate-limit/connector and support run`.

### `saas`

Workflow: MQL-to-demo, churn signal, CI/PR/release event, support and release
operations. Primary atoms: `triage_route`, `follow_up_chase`, `monitor_alert`,
`sync_handoff`, `report_digest`.

- `public-w2.saas.production.01` | `industry_id=saas` | `dimension_id=public_signal.production` | `observation_index=01` | `observed=2026-08-26` | `D/community+vendor` | `P01/P05/P06`, shipped or revenue claims; `P22/P25`, production handoff evidence | `observed`: bounded SaaS production is publicly reported; claims are not a cohort | `rights=no product/client admission` | `prov=baseline SaaS production packet` | `gate=independent 30/90-day cohort with users, incidents, maintenance and retention`.
- `public-w2.saas.failure.02` | `industry_id=saas` | `dimension_id=public_signal.failure` | `observation_index=02` | `observed=2026-08-26` | `E/D/community+operator` | `P12/P15`, runaway credits/repair loops; `P22`, secrets/auth/validation cleanup; `N22`, latent background/login faults | `observed`: cost, security and hidden-defect failures are directly reported | `rights=no platform-wide defect rate` | `prov=baseline failure packet + opened N22` | `gate=controlled multi-builder failure injection and repair-loop measurement`.
- `public-w2.saas.migration.03` | `industry_id=saas` | `dimension_id=public_signal.migration` | `observation_index=03` | `observed=2026-08-26` | `E/D/operator/vendor` | `N21`, GCP→AWS all-estate migration; `N22`, live replatform with no maintenance window | `observed`: strongest new SaaS migration receipts; customer spend remains private | `rights=no cloud account or implementation` | `prov=opened N21/N22` | `gate=synthetic multi-tenant migration with data parity and owner handoff`.
- `public-w2.saas.cost.04` | `industry_id=saas` | `dimension_id=public_signal.cost` | `observation_index=04` | `observed=2026-08-26` | `D/vendor+community` | `N21`, projected $381,248/yr AWS run-rate; `P12`, $1,982.37/24 days self-report; `N16`, dedicated-team band | `observed`: cost units are explicitly kept separate; none is a universal SaaS-builder price | `rights=no financial/admission claim` | `prov=opened N21 lines 22–47, 90–99 + baseline P12` | `gate=preflight estimate, hard cap, accepted outcome and provider-failure credit policy`.
- `public-w2.saas.security.05` | `industry_id=saas` | `dimension_id=public_signal.security` | `observation_index=05` | `observed=2026-08-26` | `E/D/vendor+normative` | `N21/N22`, IaC, least privilege, secrets, scanning, approval and immutable builds; `N18`, multi-tenancy tradeoff | `observed`: controls are described and failure examples are public; no independent audit | `rights=no SaaS security certification claim` | `prov=opened N21/N22/N18` | `gate=synthetic tenant/secret/egress/approval and supply-chain provenance probe`.
- `public-w2.saas.rollback.06` | `industry_id=saas` | `dimension_id=public_signal.rollback` | `observation_index=06` | `observed=2026-08-26` | `E/D/operator` | `N21`, IaC/image/config rollback path; `N22`, reversible DNS and warm old platform; `P13`, community checkpoint failure | `observed`: rollback is engineered in the case studies, while platform checkpoints are not uniformly trusted | `rights=no deployment claim` | `prov=opened N21 lines 61–70 and N22 lines 25–58` | `gate=run failed-release and tenant-scoped rollback with data/schema compatibility`.
- `public-w2.saas.portability.07` | `industry_id=saas` | `dimension_id=public_signal.portability` | `observation_index=07` | `observed=2026-08-26` | `E/D/normative+operator` | `N21`, GCP/AWS IaC and service map; `N22`, reproducible infrastructure/runbooks; `N18`, SaaS settings/rules portability risk | `observed`: infrastructure portability is strong in the receipts; app/data/business portability still needs proof | `rights=IaC is not full source/data exit` | `prov=opened N21/N22/N18` | `gate=exit manifest for source, schema, data, secrets, jobs, auth, integrations, audit and deployment`.
- `public-w2.saas.maintenance.08` | `industry_id=saas` | `dimension_id=public_signal.maintenance` | `observation_index=08` | `observed=2026-08-26` | `E/D/operator+empirical` | `N21`, autonomous handoff, runbooks, alarms and extended support; `N19`, maintainability/organizational complexity in migration | `observed`: maintenance ownership is a production outcome; no retention cohort | `rights=no vendor continuity claim` | `prov=opened N21 lines 54–70, 83–99 + N19` | `gate=90-day owner-run operation with patch, dependency, API, cost and incident receipts`.

## 4. Attention, adoption, shipped outcome, maintenance, and retention states

The state split prevents a popular post, a vendor case, and a retained customer
from becoming one headline. The table is a compact reconciliation of the
ledger; source IDs point to the detailed rows above or the preserved packet.

| Industry | Attention | Adoption | Shipped | Maintenance | Retention | Safe reading |
|---|---|---|---|---|---|---|
| Accounting Firms | `D` N01/N02 | `D` N01/N03 | `D` N01/N02 | `D` N02/N03 | `U` | Workflow automation and cloud migration receipts; no cohort. |
| Construction | `E/I` N04/P74 | `U` | `U/I` | `U/I` | `U` | Strong risk/need signal, weak direct builder outcome. |
| Course Creators | `D` P01/P02 | `D` P01 | `D` P01/N05/N06 | `D` N07 | `U` | One self-report plus vendor LMS cases; no retention denominator. |
| Ecommerce | `E/I` P67/P71 | `U/I` | `U/I` | `I` | `U` | Marketplace evidence is adjacent, not ecommerce proof. |
| Education & Training | `E/D` N05–N07 | `D` N07 | `D` N06/N07 | `E/D` N07 | `U` | Strong case-study operation; no independent learner cohort. |
| Healthcare & Medical Practices | `D` P68/P69 | `D/I` P69 | `U/D` P69 | `I` N19 | `U` | High demand/risk; direct sources are gated or prototype-level. |
| Hospitality | `E/D` N24/N25 | `D` N25 | `D` N24/N25 | `D` N25 | `U` | Network-scale operations and outage evidence; no independent retention. |
| IT Services & MSPs | `D/I` P09/P18 | `I` | `I` P18 | `I` P22 | `U` | Internal-tool pattern transfers only as inference. |
| Insurance Agencies | `D` N23/N36 | `D` N23 | `D` N23 | `I` N23 | `U` | Large migration receipt; security/rollback incomplete. |
| Law Firms | `D` N26/N31 | `D` N26/N31 | `D` N26/N27 | `D` N27/N31 | `U` | Legal DMS/cloud migration receipts; no independent audit. |
| Logistics & Freight | `E/D` N10/P07 | `D` N10 | `E/D` N10/N29 | `E/D` N10/N30 | `U` | Public pilot plus vendor cases; dated cost unit. |
| Marketing & Social Agencies | `E/D` P08/N11 | `E/D` P08 | `D` N11 | `D` N11 | `U` | Adopter survey and migration case; no retention cohort. |
| Mortgage Brokers | `E/D` N12/N13 | `D` N12 | `D` N12/N13 | `D` N13 | `U` | Strong regulated migration receipts; claims are vendor-hosted. |
| Property Management | `D` N17/N35 | `D` N17 | `D` N17 | `D/I` N17/N35 | `U` | Concrete portal outcomes; security/rollback gaps. |
| Real Estate | `D/I` N16/N17 | `U/I` | `I` N16, fictional | `I` N16/N17 | `U` | CRM shape is useful, but N16 explicitly is fictional. |
| Recruiting & Staffing | `E/D` N14/N15/N28 | `D` N15 | `D` N15 | `D` N15/N28 | `U` | ATS integration and migration risks are well described. |
| SaaS | `E/D` P01/P05/N21/N22 | `D` P01/P05 | `D` P05/N21/N22 | `E/D` N21/N22 | `U` | Production/migration/rollback receipts; no general retention claim. |

## 5. Cross-source comparisons and falsifiers

### Vendor claims versus operator receipts versus community anecdotes versus empirical evidence

| Claim family | Vendor claim / positioning | Operator receipt or community counter-signal | Empirical/normative anchor | Safe synthesis |
|---|---|---|---|---|
| Fast production | N01/N05/N06/N12/N15 present short timelines and shipped workflows. | P01/P05 report real builds; P12/P15 report expensive repair loops; N22 publishes latent defects discovered in parallel. | P72/P73 show visual/functional and production-readiness gaps; N19 identifies migration complexity. | Fast first delivery is plausible for bounded workflows; durability requires a separate gate. |
| Governance | P09/P42 and N13/N21 describe RBAC, audit, IaC, approvals and controls. | P18/P22 describe production stability, auth and maintenance boundaries discovered later. | N18 states SaaS isolation, network, portability and cost/security tradeoffs. | Governance must be observed in the workflow and exit artifacts, not inferred from a builder badge. |
| Portability | P28–P40 and N21/N22 expose code, data, IaC or platform export paths. | P17/P18/P19 and P34 show escape-hatch, plan, self-hosting and ownership concerns. | N18 explicitly separates data export from rules, settings, scripts and add-ons. | Export must name source, schema, data, secrets, jobs, auth, integrations, audit and deployment. |
| Cost/value | P12/P15 report usage-credit shocks; N10 and N28 expose explicit units; N16 exposes team pricing. | Community users ask for hard caps, repair-loop protection and fair billing. | N10’s public pilot and N19’s migration study keep labor/maintenance units visible. | Compare cost per accepted outcome, not credits, tokens, LOC or monthly price alone. |
| Rollback/recovery | N13/N21/N22 describe blue-green, warm fallback, IaC and reversible cutover. | P13 reports untrusted checkpoints and paid repair loops. | N18 and the standards packet separate portability and recovery; neither proves a product’s rollback. | A rollback receipt must include data/schema compatibility, side effects, audit and owner runbook. |
| Vertical fit | N24/N25/N13/N15 show specialized integration and operating constraints. | P67/P68/P70 show users asking for marketplaces, healthcare, construction and agency workflows. | P74 warns that domain logic can be wrong despite compiling. | Use narrow atoms with named authority and evidence ports; do not upgrade one result to demand. |

### Identity overlap, sponsorship, staleness, and gated-source checks

- **Identity overlap:** P01–P03 are one education operator story; P05/P06 are
  vendor/founder success stories; N16 is explicitly fictional; N21 is a
  vendor-hosted story whose customer was later acquired. They are not counted
  as independent cohorts.
- **Sponsorship/affiliate:** Base44, Retool, Softr, Bubble, AWS, StackOne,
  VeUP, and the new case-study suppliers have commercial incentives. Their
  receipts are retained as vendor evidence and never promoted to independent
  empirical evidence.
- **Community anecdotes:** P12–P20, P22, P43 and P65–P71 are useful for
  operator pain and demand framing. They are not audited invoices, security
  tests, adoption denominators, or retention cohorts.
- **Stale/blocked pages:** N08 and N09 returned 403 on direct open; N32 hit a
  verification wall. The baseline expansion packet recorded 47 `200`, 26
  `403`, and one timeout across its 74-URL HTTP probe. A gated page is a
  receipt of an access limit, not evidence of a positive or negative signal.
- **Attention metrics:** views, likes, followers, ranking, and search position
  are excluded from outcome scoring. X URLs P51–P56 remain search-indexed or
  access-limited per the baseline packet.

### Falsifiers for the governed-assembly thesis

The thesis should be weakened if any of the following are demonstrated with
public, controlled evidence:

1. General builders routinely preserve auth, tenancy, side-effect idempotency,
   domain rules and post-condition read-back across a representative set of
   the 17 industries without expert intervention.
2. Source/data/secret/job/auth/integration/audit/deployment export manifests
   round-trip into a second environment with equivalent behavior, not merely a
   ZIP or CSV download.
3. Failed generations and vendor regressions stay within a declared hard cost
   cap and provide a tested, data-compatible rollback without paid repair loops.
4. Multi-tool, 30/90-day public cohorts show durable maintenance ownership and
   retention rather than only launch attention or short-lived shipped outcomes.
5. Direct low-signal vertical receipts show the same control and portability
   behavior as generic web-app benchmarks, eliminating the need for industry
   atoms and domain-specific approval gates.

## 6. Preserved 74-URL public packet

This list is copied from the immutable tranche file
`research/actionmodel-builder-research-2026-08-26/outputs/public-signals-expansion.md`.
The IDs are stable source identities for this wave. No baseline URL is removed,
rewritten, or silently replaced.

| ID | URL |
|---|---|
| `P01` | https://www.reddit.com/r/vibecoding/comments/1ugc2h7/nontechnical_founder_i_built_an_education/ |
| `P02` | https://www.reddit.com/r/vibecoding/comments/1sif0rq/i_havent_written_production_code_in_years_i/ |
| `P03` | https://apps.apple.com/in/app/flick-mate/id6757723305 |
| `P04` | https://www.reddit.com/r/vibecoding/comments/1v2wgj5/i_vibe_coded_30_apps_in_2_years_6_are_still_in/ |
| `P05` | https://www.indiehackers.com/post/tech/launching-an-app-builder-in-2-weeks-and-hitting-10k-mrr-within-a-year-gRWT2S68TIQwMvb6Xxt4 |
| `P06` | https://base44.com/blog/base44-case-study-gift-my-book |
| `P07` | https://podscan.fm/podcasts/the-zero100-podcast/episodes/think-it-build-it-scale-it-vibe-coding-lessons-from-the-zero100-team |
| `P08` | https://newsletter.chiefmartec.com/p/vibe-coding-in-marketing-we-surveyed-300-marketing-leaders-on-its-adoption |
| `P09` | https://www.cio.com/article/4176062/cios-are-enlisting-business-users-to-vibe-code-their-own-apps.html |
| `P10` | https://www.reddit.com/r/nocode/comments/1riqyh7/whats_the_best_nocodeai_mobile_app_builder_in/ |
| `P11` | https://www.reddit.com/r/nocode/comments/1vws9ce/whats_the_best_ai_app_builder_with_a_builtin/ |
| `P12` | https://www.reddit.com/r/replit/comments/1ty0iti/replit_charged_me_1982_in_24_days_on_a_prelaunch/ |
| `P13` | https://www.reddit.com/r/replit/comments/1rw5be5/roll_back_your_replit_version/ |
| `P14` | https://www.reddit.com/r/replit/comments/1rfo6fo/your_teams_plan_is_moving_to_replit_pro/ |
| `P15` | https://www.reddit.com/r/replit/comments/1reua1i/ive_spent_700_this_month_on_replitheres_why_i/ |
| `P16` | https://www.reddit.com/r/FlutterFlow/comments/1vm5l5g/breaking_changes_again/ |
| `P17` | https://www.reddit.com/r/FlutterFlow/comments/1smz3zy/thank_you_and_goodbye_flutterflow/ |
| `P18` | https://www.reddit.com/r/Retool/comments/1td2mp5/retool_is_amazing_until_you_need_to_run_it_seriously_in_production/ |
| `P19` | https://www.reddit.com/r/lowcode/comments/1rehv2k/retool_silently_removes_selfhosted_plans/ |
| `P20` | https://www.reddit.com/r/Retool/comments/1u8dxs0/new_in_retool_the_new_app_building_experience_is/ |
| `P21` | https://www.techradar.com/pro/software-services/base44-no-code-review |
| `P22` | https://www.reddit.com/r/vibecoding/comments/1uypcye/ive_cleaned_up_a_dozen_vibe_coded_apps_this_year/ |
| `P23` | https://www.reddit.com/r/vibecoding/comments/1ruyb3p/senior_mobile_engineer_offering_help_to_turn/ |
| `P24` | https://www.reddit.com/r/vibecoding/comments/1uqd6xk/vibecoders_building_a_complex_app_takes_a_week/ |
| `P25` | https://www.techradar.com/pro/vibe-coding-guide-how-to-transition-from-ai-generation-to-live-deployment |
| `P26` | https://rafter.so/blog/incidents/vibe-coded-apps-public-by-default |
| `P27` | https://www.axios.com/2026/05/07/loveable-replit-vibe-coding-privacy |
| `P28` | https://docs.base44.com/Getting-Started/Quick-start-guide |
| `P29` | https://docs.base44.com/developers/app-code/local-development/github |
| `P30` | https://docs.base44.com/Building-your-app/Managing-your-app-data |
| `P31` | https://base44.com/developers |
| `P32` | https://base44.com/es/pricing |
| `P33` | https://docs.base44.com/Account-and-billing/Billing-and-plans |
| `P34` | https://manual.bubble.io/account-and-marketplace/application-and-data-ownership |
| `P35` | https://manual.bubble.io/account-and-marketplace/account-and-billing/pricing-plans |
| `P36` | https://manual.bubble.io/help-guides/getting-started/building-for.../native-ios-and-android/what-is-a-native-mobile-app |
| `P37` | https://manual.bubble.io/help-guides/publishing-your-app/native-mobile-app |
| `P38` | https://manual.bubble.io/beta-features/bubbles-ai-app-generator |
| `P39` | https://www.softr.io/blog/best-ai-app-generators |
| `P40` | https://www.softr.io/blog/best-ai-app-builders-with-database |
| `P41` | https://docs.retool.com/ |
| `P42` | https://retool.com/resources/enterprise-vibe-coding |
| `P43` | https://www.reddit.com/r/Retool/comments/1u8ehtv/retool_vs_vibecoding/ |
| `P44` | https://vercel.com/blog/introducing-the-new-v0-api |
| `P45` | https://v0.dev/docs/v0-model-api |
| `P46` | https://api2.v0.dev/docs |
| `P47` | https://www.reddit.com/r/replit/comments/1rf4ixb/replit_pro_is_here_and_core_now_offers_the_best/ |
| `P48` | https://docs.replit.com/billing/ai-billing |
| `P49` | https://docs.replit.com/build/import-from-providers |
| `P50` | https://docs.replit.com/learn/projects-and-artifacts/version-control |
| `P51` | https://x.com/meta_alchemist/status/2025293806141407259 |
| `P52` | https://x.com/aakashgupta/status/2015298307690783021 |
| `P53` | https://x.com/__mharrison__/status/2035117478196781522 |
| `P54` | https://x.com/DataChaz/status/2041648244040626563 |
| `P55` | https://x.com/meathill1/status/2036334114169823731 |
| `P56` | https://x.com/InfoQ/status/2026241451404017686 |
| `P57` | https://www.youtube.com/watch?v=5ptRNZddmOA |
| `P58` | https://www.youtube.com/watch?v=OZOokCf2R_4 |
| `P59` | https://maven.com/p/2b0bfe/from-idea-to-app-store-vibe-coding-mobile-apps |
| `P60` | https://maven.com/p/ab585d/end-to-end-production-vibe-coding-process |
| `P61` | https://aboard.com/podcast/yelling-at-vibe-coders/ |
| `P62` | https://www.stackfyi.com/guides/ai-app-builders-lovable-bolt-v0-replit-2026 |
| `P63` | https://bubble.io/blog/best-ai-app-builder/ |
| `P64` | https://www.hfsresearch.com/research/vibe-coding-uki-embracing-new-ways/ |
| `P65` | https://news.ycombinator.com/item?id=46227422 |
| `P66` | https://www.reddit.com/r/nocode/comments/1se1z6v/idea_for_a_new_ai_native_mobile_app_builder_for/ |
| `P67` | https://www.reddit.com/r/nocode/comments/1uy3l5d/best_no_code_app_builder_for_a_marketplace_app/ |
| `P68` | https://www.reddit.com/r/vibecoders_/comments/1s7ykaa/best_ai_tools_for_vibecoding_healthcare/ |
| `P69` | https://www.indiehackers.com/post/why-we-avoided-the-ai-scribe-wrapper-trap-to-build-a-dedicated-clinical-reasoning-engine-9acd9d8815 |
| `P70` | https://www.reddit.com/r/nocode/comments/1q9tjr2/how_i_built_25_business_websites_a_saas_platform/ |
| `P71` | https://www.indiehackers.com/post/building-a-marketplace-for-focused-apps-and-ai-agents-now-im-staring-at-the-cold-start-problem-caca9cd2ce |
| `P72` | https://arxiv.org/abs/2512.18080 |
| `P73` | https://arxiv.org/abs/2605.04637 |
| `P74` | https://arxiv.org/abs/2604.12311 |

## 7. Receipt checks and task ledger

### Machine checks to run after write

```text
baseline_unique_urls = 74
new_unique_urls = 36
verticals = 17
signal_types = 8
ledger_slots = 17 * 8 = 136
required_state_words = observed | blocked | unobserved | needs_direct_review
candidate_admission_terms = 0 claims of admitted/reusable/approved blocks
```

The local verification commands are recorded in the handoff receipt. The
baseline source file remains the source of truth for the original 74-URL packet;
this artifact reproduces the same 74 IDs and URLs before adding N-series
receipts.

### Current access-limit receipt

On 2026-08-26, a read-only concurrent `GET` probe of the 74 baseline URLs found
**70 `200`, 1 `307`, 1 `308`, and 2 `403`** responses. The two direct `403`
responses were the Podscan episode and Axios privacy article; redirects are
not treated as failures. The tranche’s earlier probe used a different request
path and recorded 47 `200`, 26 `403`, and one timeout, so the difference is an
access-method/anti-bot observation, not a claim that source content changed.
The two healthcare sources N08/N09 and the insurance source N32 were separately
opened through the research renderer/search index and remain marked
access-limited or blocked in the ledger.

The final local count audit returned: `baseline_urls=74`, `artifact_urls=110`,
`new_urls=36`, `source_ids=36`, `slot_lines=136`, `unique_slots=136`,
`industries=17`, `signals=8`, and state counts `observed=85`,
`needs_direct_review=36`, `unobserved=12`, `blocked=3`. The P01–P74 URL list
matches the source packet exactly after URL normalization.

| Slot | Status | Evidence / completion note |
|---|---|---|
| 1. Preserve 74-URL packet and identities | Complete | P01–P74 are reproduced from the verified expansion packet; no baseline URL is silently replaced. |
| 2. Build dated source ledger by industry/workflow/signal | Complete | N01–N36 source ledger plus 136 stable slot IDs with observed date, source, inspected surface, status, rights boundary, provenance and gate. |
| 3. Sample production signals for 17 industries | Complete with gaps | Every industry has a production slot; low-signal industries remain `U`/`needs_direct_review` where no direct receipt exists. |
| 4. Sample failure signals for 17 industries | Complete with gaps | Every industry has a failure slot; safety, integration, outage, data-model and cost-loop failure modes are separated from prevalence. |
| 5. Sample migration signals for 17 industries | Complete with gaps | Direct receipts cover accounting, education, hospitality, insurance, law, logistics, marketing, mortgage, property, recruiting and SaaS; other gaps are explicit. |
| 6. Sample cost signals for 17 industries | Complete with gaps | Units are preserved: bot/license, learner/platform, public pilot O&M, record/API, infrastructure, team band, usage credits; no false normalization. |
| 7. Sample security signals for 17 industries | Complete with gates | Direct controls appear in accounting, education, hospitality, law, mortgage, recruiting and SaaS; healthcare and low-signal gaps remain blocked/unobserved. |
| 8. Sample rollback signals for 17 industries | Complete with gaps | Explicit rollback receipts are strongest in mortgage/SaaS/legal/education; absent vertical receipts are not upgraded from generic analogues. |
| 9. Sample portability and maintenance signals | Complete with gaps | N18 plus source/data/IaC/matter/course/ATS examples; maintenance owner and export manifest gates are explicit. |
| 10. Separate vendor/operator/community/empirical evidence | Complete | Source type and evidence class are separate; vendor-hosted case studies are not treated as independent audits. |
| 11. Run adversarial identity/sponsorship/stale/gated checks | Complete | Overlap families, fictionalized source, affiliate/vendor incentives, 403s, timeout, and attention-metric exclusions are recorded. |
| 12. Validate counts and callback | Complete | URL/slot/state checks passed; CENA was fresh-resolved with `herdr pane list`, identity-checked from pane content, and the short callback was submitted and visible in the coordinator transcript after the queued Enter was verified. |

## 8. Research-only boundary and next gates

No authenticated account, paid-plan behavior, client data, Actionist contract,
private adoption denominator, product implementation, repository copy, security
scan, deployment, rollback execution, or block admission is claimed. The
artifact is a public-signal ledger and evidence map only.

The next controlled gate is a synthetic, read-only comparison for a small set
of atoms—`intake_normalize`, `reconcile_audit`, `triage_route`, and
`monitor_alert`—with deterministic fixtures, named authority, provenance,
post-condition read-back, cost ceiling, and recovery kill criteria. It should
not use live client or healthcare/financial data.

## 9. Coordinator callback receipt

Artifact-first and callback verification completed on 2026-08-26. Fresh
`/Users/shaansisodia/.local/bin/herdr pane list` resolved the `CENA` workspace
to pane `w659e02f80e5bb1-1`; the pane was read with `--source recent --lines
200` and its coordinator transcript positively identified before sending.
The first `pane run` left the message queued, so the required Enter-only retry
was sent and verified. The coordinator pane then displayed the submitted
`[from: RCH-PUBLIC-W2] @CENA: DONE RCH-PUBLIC-W2` message in its transcript and
remained `working` while registering the handoff.

Callback sent:

```text
[from: RCH-PUBLIC-W2] @CENA: DONE RCH-PUBLIC-W2. Report written at research/actionmodel-builder-research-2026-08-26/expansion/wave-2/outputs/public-signals-wave-2.md. Preserved P01–P74 and added 36 public sources plus a dated 136-slot ledger across all 17 industries and 8 signal types, with vendor/operator/community/empirical separation. Access limits, identity overlap, sponsorship, stale/gated sources, retention gaps, and falsifiers are explicit; no authenticated/client/private/implementation/admission claim. 0 blockers; parent long-run goal remains active.
```
