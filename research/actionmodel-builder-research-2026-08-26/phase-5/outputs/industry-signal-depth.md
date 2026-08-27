# Action Model Builder — Phase-5 industry signal depth

Run: `actionmodel-builder-research-2026-08-26`  
Phase: `p1-depth-and-evidence-coverage`  
Lane: `RCH-INDUSTRY-SIGNAL-DEPTH`  
Observed: `2026-08-27 ICT`  
Status: `RESEARCH_ONLY; EXECUTION_UNEXECUTED; ADMISSION_NOT_ADMITTED`

> This is a normalized evidence map, not a market census, customer study, or
> capability result. Catalogue entries are demand hypotheses. No client/private
> data, login, credential, model, runtime, benchmark, build, deployment,
> license/security scan, or admission action was used. Current markers are
> binding: `implementation_authorized=false`, `execution_status=UNEXECUTED`,
> `admission_status=NOT_ADMITTED`, `admitted_blocks=0`, and
> `parent_goal_status=active`.

## 1. Method and evidence classes

The exact sources are [the Phase-5 program](../PHASE-5-PROGRAM.md), [the
Phase-5 state](../phase-5-state.json), [the Phase-2 industry and atom
specifications](../../phase-2/outputs/industry-atom-specifications.md), [the
public-signal expansion](../../outputs/public-signals-expansion.md), and [the
latest public-signal Wave 11](../../expansion/wave-11/outputs/public-signals-wave-11.md).

The Phase-2 catalogue contains 17 industries, 12 teams, 66 use cases, 72 ideas,
12 atoms, and a 17×10 matrix floor of 17,000 observations. The latest public
wave contains 136 `.10` slots across the same 17 industries and eight signal
types, with 34 disjoint public identities. Its row-derived status is 68
`observed`, 56 `needs_direct_review`, 8 `unobserved`, and 4 `blocked`. These
counts are evidence structure only.

Evidence classes are kept separate:

- `E` — directly observed page, paper, transcript, or packet content;
- `D` — documented, self-reported, sponsored, survey, or vendor claim;
- `I` — inference from a catalogue, atom join, or cross-source synthesis;
- `U` — unknown, inaccessible, contradictory, unmeasured, or unexecuted.

Wave-11 source classes add a quality layer: `A` is academic/institutional or
professional evidence; `B` is operator, consultant, agency, or vendor customer
case material with sponsorship/self-report limits; `C` is a commercial survey,
directional guide, or gated case brief. A `B` source is not automatically
first-party proof, and an `E` page observation is not authenticated behavior.

Every industry section uses the same normalized fields: catalogue signal and
validation status, atom/workflow inference, authority and source-of-truth
boundary, two exact Wave-11 source identities with dates/classes/URLs, eight
latest-wave statuses, four evidence partitions, contradictions/access limits,
falsifier, evidence gaps, and the next gate before client validation.

## 2. Cross-industry public evidence boundary

The expansion packet reports 74 unique URLs, with a local probe of 47 `200`, 26
403/login-gated, and one timeout. X, HFS, some Reddit pages, course pages, and
gated case materials retain their access limits. The expansion also records
public failure/cost/rollback signals (Replit billing and repair loops,
FlutterFlow validation changes, portability differences, and independent
prompt-to-app benchmarks), but those cross-industry signals are not silently
assigned to every industry below.

The latest Wave-11 identities are overwhelmingly sponsored customer stories:
one Class-A academic source (`W11-HC01`), 30 Class-B sources, and three Class-C
sources. Its `failure` slot is a request for a dated contradiction or synthetic
reproduction; it is not itself a verified incident. Its `cost` and `rollback`
gaps are preserved as `unobserved` or `blocked`, not converted to negative
evidence.

Common gap domains for every industry are: `demand`, `capability`, `quality`,
`rights`, `authority`, `eval`, `runtime`, `cost`, `portability`, and
`maintenance`. No industry has validated demand in this artifact.

## 3. Normalized 17-industry evidence map

### 3.1 `accounting_firms` — Accounting Firms

- **Priority / catalogue:** Finance and operations. `E` catalogue signal: chase client documents, reconcile bank feeds, and close books. `validated_demand=U`; atom join is inferred as `intake_normalize`, `extract_structure`, `reconcile_audit`, `follow_up_chase`, `report_digest`.
- **Bounded workflow:** Read-only close-exception desk joining synthetic bank transactions, ledger entries, and document indexes; source truth is the GL/bank/document view; controller or engagement bookkeeper owns review. No posting, write-off, reconciliation acceptance, or outbound chase.
- **Wave-11 sources:** `W11-A01`, Class B, 2026 observed 2026-08-26, [Sage Watson & Colhoun cloud-accounting story](https://www.sage.com/en-gb/-/media/files/sagedotcom/master/customer-stories/watsoncolhounsageaccountingwrittensuccessstoryaai06000000xojccas0321new.pdf); `W11-A02`, Class B, same date, [Annapolis Accounting Services Rightworks story](https://www.rightworks.com/customer-stories/annapolis-accounting-services-success-story/). Both are vendor-hosted/sponsored and contain no accounting records, independent audit, or retention cohort.
- **Latest statuses:** `production=observed`, `failure=needs_direct_review`, `migration=observed`, `cost=needs_direct_review`, `security=observed`, `rollback=needs_direct_review`, `portability=needs_direct_review`, `maintenance=observed`.
- **Evidence partitions:** First-party/sponsored `D/B` from A01/A02; operator/community `U` for an accounting-firm-specific receipt in these packets; empirical `U`; workflow/atom fit `I` from the Phase-2 catalogue. The public expansion’s generic finance/operations synthesis is not a firm-level denominator.
- **Contradictions and limits:** The failure slot is unresolved rather than proven failure; cost and portability are not independently denominated; source identity is public but client records, rights, authority, and retention remain absent.
- **Falsifier and next gate:** Falsify if a held-out synthetic set cannot identify mismatches and owners better than a keyed baseline, or no accountable ledger owner exists. Before client validation, obtain an independent operator artifact or mark demand `U`, then design a synthetic reconciliation trace with period/currency, duplicate, stale-feed, permission, and conflicting-timestamp receipts.

### 3.2 `construction` — Construction

- **Priority / catalogue:** Operations and safety-sensitive coordination. `E` signal: track jobs, change orders, subcontractors, and progress billing; `validated_demand=U`; inferred atoms `intake_normalize`, `triage_route`, `sync_handoff`, `follow_up_chase`, `report_digest`.
- **Bounded workflow:** Read-only project-exception desk joining job, schedule, change-order, subcontractor, and progress-claim views. Project or commercial manager owns review. No change-order approval, subcontractor instruction, billing submission, or customer notice.
- **Wave-11 sources:** `W11-C01`, Class B, 2026 observed 2026-08-26, [Skanska Oracle Fusion ERP/HCM transformation case](https://www.pwc.co.uk/services/alliances/insights/skanska.html); `W11-C02`, Class B, same date, [Samsung C&T RISE with SAP on Azure story](https://www.microsoft.com/en/customers/story/23265-samsung-c-and-t-power-bi). Both are consultant/cloud-vendor cases with sponsor-reported delivery, migration, security, and go-live framing; no project records or independent resilience audit.
- **Latest statuses:** `production=observed`, `failure=needs_direct_review`, `migration=observed`, `cost=needs_direct_review`, `security=observed`, `rollback=needs_direct_review`, `portability=needs_direct_review`, `maintenance=observed`.
- **Evidence partitions:** Sponsored `D/B`; operator/community `U` at construction-workflow level in the latest packet; empirical `D/E` only for the separate [construction-safety study](https://arxiv.org/abs/2604.12311), which is a safety-code risk signal, not adoption proof; atom/workflow fit `I`.
- **Contradictions and limits:** Sponsor claims do not prove safety, schedule reliability, migration parity, or retention. Construction safety evidence warns that code can compile while safety logic is wrong; no direct public operator denominator is present.
- **Falsifier and next gate:** Falsify if synthetic replay cannot preserve job/version identity or value requires an unbounded external instruction. Before client validation, run only a planned synthetic field-map and deterministic calculation review with domain-expert signoff requirements; keep all safety authority `U`.

### 3.3 `course_creators` — Course Creators

- **Priority / catalogue:** Education/content operations. `E` signal: onboard students, run lesson drips, manage community; `validated_demand=U`; inferred atoms `intake_normalize`, `schedule_coordinate`, `follow_up_chase`, `report_digest`.
- **Bounded workflow:** Read-only learner-progress desk joining enrollment, lesson, attendance, and unanswered-question views. Course operator or cohort lead owns review. No access grant, grade, message, refund, or learner-profile mutation.
- **Wave-11 sources:** `W11-CC01`, Class B, 2026 observed 2026-08-26, [Antoine van der Lee Teachable story](https://www.teachable.com/blog/antoine-van-der-lee-case-study); `W11-CC02`, Class B, same date, [John D. Saunders Podia story](https://www.podia.com/articles/john-d-saunders-case-study). Both are platform-hosted creator stories with sponsored/reported revenue and integration claims; no creator records, independent revenue audit, or retention cohort.
- **Latest statuses:** `production=observed`, `failure=needs_direct_review`, `migration=observed`, `cost=unobserved`, `security=observed`, `rollback=blocked`, `portability=needs_direct_review`, `maintenance=observed`.
- **Evidence partitions:** Sponsored `D/B`; operator/community `D/E` category support from the education-platform builder self-report in the expansion packet, but it is one operator and not a cohort; empirical `U` for course-creator outcomes; workflow fit `I`.
- **Contradictions and limits:** Revenue and course-launch claims are not audited; cost and rollback are explicit W11 gaps; education operator evidence includes a move from hosted builder to owned stack, which supports a handoff hypothesis rather than a platform-wide failure rate.
- **Falsifier and next gate:** Falsify if a held-out cohort cannot map to one source-of-truth state without invention or useful value requires sending/access changes. Before client validation, design a synthetic cohort replay with consent, content-version, timezone, attendance, and missing-question receipts.

### 3.4 `ecommerce` — Ecommerce

- **Priority / catalogue:** Operations and support. `E` signal: recover carts, sync inventory, handle tickets; `validated_demand=U`; inferred atoms `monitor_alert`, `follow_up_chase`, `sync_handoff`, `triage_route`, `report_digest`.
- **Bounded workflow:** Read-only commerce-exception desk joining order, inventory, cart, and ticket snapshots. Ecommerce operations or support lead owns review. No recovery message, order/payment change, fulfilment action, or refund.
- **Wave-11 sources:** `W11-EC01`, Class B, 2026 observed 2026-08-26, [The Conran Shop Magento-to-Shopify case](https://www.shopify.com/case-studies/the-conran-shop); `W11-EC02`, Class B, same date, [Rainbow Shops Salesforce-to-Shopify case](https://www.shopify.com/ca/case-studies/rainbow-shops). Both are first-party commerce-platform customer cases with sponsor-reported replatforming, fee, search, TCO, or conversion claims; no order records or independent conversion audit.
- **Latest statuses:** `production=observed`, `failure=needs_direct_review`, `migration=observed`, `cost=needs_direct_review`, `security=observed`, `rollback=needs_direct_review`, `portability=needs_direct_review`, `maintenance=observed`.
- **Evidence partitions:** Sponsored `D/B`; operator/community `U` for a direct ecommerce operator denominator in these inputs; empirical `U`; workflow fit `I`. The expansion’s AppGild marketplace receipt is adjacent operational evidence, not an ecommerce cohort.
- **Contradictions and limits:** Replatforming claims do not prove payment, inventory, or customer-data correctness. Cost, rollback, portability, and retention need direct artifacts; customer identifiers remain out of scope.
- **Falsifier and next gate:** Falsify if synthetic replay cannot distinguish stale inventory from current stock or value depends on outbound recovery. Before client validation, design order/inventory/ticket replay with payment-pending, duplicate-order, stale-stock, PII-denial, and ticket/order-mismatch receipts.

### 3.5 `education_training` — Education & Training

- **Priority / catalogue:** Education administration. `E` signal: enrolment, attendance, learner communication, tuition administration; `validated_demand=U`; inferred atoms `intake_normalize`, `schedule_coordinate`, `follow_up_chase`, `reconcile_audit`.
- **Bounded workflow:** Read-only enrolment-and-attendance desk reconciling synthetic registration, session, attendance, and tuition records. Program administrator or training coordinator owns review. No enrollment decision, grade, payment posting, or learner/guardian message.
- **Wave-11 sources:** `W11-ED01`, Class B, 2026 observed 2026-08-26, [University of Pretoria Anthology LMS migration case](https://www.anthology.com/sites/default/files/2025-04/UniversityofPretoria_CaseStudy_v3.pdf); `W11-ED02`, Class B, same date, [Aarhus University D2L migration story](https://www.d2l.com/en-eu/why-d2l/customers/aarhus-university/). Both are LMS-vendor customer stories with sponsored change-management/migration claims; no student records or independent learning-outcome audit.
- **Latest statuses:** `production=observed`, `failure=needs_direct_review`, `migration=observed`, `cost=unobserved`, `security=observed`, `rollback=blocked`, `portability=needs_direct_review`, `maintenance=observed`.
- **Evidence partitions:** Sponsored `D/B`; operator/community `D/E` only from the single education-platform builder story in the expansion packet, not a training-provider cohort; empirical `U`; workflow fit `I`.
- **Contradictions and limits:** Student outcomes, consent, guardian roles, retention, cost, and rollback are unverified. LMS migration language is not proof that learner identity, permissions, or attendance parity survived.
- **Falsifier and next gate:** Falsify if a held-out fixture cannot identify a stable enrollment/attendance owner without invention or useful output requires learner-record changes. Before client validation, design a synthetic registration/attendance/tuition reconciliation with role, consent, timezone, and retention receipts.

### 3.6 `healthcare_medical_practices` — Healthcare & Medical Practices

- **Priority / catalogue:** Support/administration with high authority risk. `E` signal: appointments, no-shows, reminders, billing administration; `validated_demand=U`; inferred atoms `schedule_coordinate`, `follow_up_chase`, `triage_route`, `reconcile_audit`.
- **Bounded workflow:** Synthetic appointment-administration read model only: appointment status, no-show inputs, and billing exceptions without clinical content. Practice administrator owns administrative review; clinician authority remains outside. No diagnosis, clinical triage, reminder send, or billing write.
- **Wave-11 sources:** `W11-HC01`, Class A, 2026 observed 2026-08-26, [open-access health information-system migration case](https://link.springer.com/article/10.1007/s44250-025-00186-x); `W11-HC02`, Class B, same date, [NexJ Health Azure modernization story](https://www.microsoft.com/en/customers/story/24412-nexj-health-azure-ai-foundry). HC01 is bounded academic evidence; HC02 is sponsor-reported cloud-vendor evidence. Neither supplies patient records, clinical-safety certification, independent replication, or retention cohort.
- **Latest statuses:** `production=observed`, `failure=needs_direct_review`, `migration=observed`, `cost=needs_direct_review`, `security=observed`, `rollback=needs_direct_review`, `portability=needs_direct_review`, `maintenance=observed`.
- **Evidence partitions:** First-party/sponsored `D/B`; operator/community `E` demand signals from the [healthcare prototype thread](https://www.reddit.com/r/vibecoders_/comments/1s7ykaa/best_ai_tools_for_vibecoding_healthcare/) and [Fownd interoperability report](https://www.indiehackers.com/post/why-we-avoided-the-ai-scribe-wrapper-trap-to-build-a-dedicated-clinical-reasoning-engine-9acd9d8815), both limited self-report; empirical `E/A` for the migration paper only, not clinical safety; workflow fit `I`.
- **Contradictions and limits:** Public healthcare demand is prototype/interoperability demand, not PHI authorization or clinical validation. Any clinical content, patient contact, consent ambiguity, or regulated-data path is a hard boundary.
- **Falsifier and next gate:** Falsify if a held-out administrative fixture cannot maintain identity/consent boundaries or value requires clinical data/patient contact. Before client validation, require a synthetic-only PHI-exclusion, consent/role, field-provenance, denial, and audit design; no patient-data pilot is authorized.

### 3.7 `hospitality` — Hospitality

- **Priority / catalogue:** Operations and support. `E` signal: reservations, guest feedback, housekeeping coordination; `validated_demand=U`; inferred atoms `schedule_coordinate`, `triage_route`, `sync_handoff`, `monitor_alert`.
- **Bounded workflow:** Read-only stay-operations desk joining reservation, room-status, housekeeping-task, and feedback views. Front-office or housekeeping manager owns review. No booking change, room assignment, guest message, refund, or vendor dispatch.
- **Wave-11 sources:** `W11-HO01`, Class B, 2026 observed 2026-08-26, [PPHE Hotel Group Oracle OPERA Cloud announcement](https://www.oracle.com/news/announcement/pphe-hotel-group-implements-oracle-cloud-to-improve-operations-and-drive-innovation-2025-11-04/); `W11-HO02`, Class B, same date, [Plaza Premium Group AWS operations case](https://aws.amazon.com/solutions/case-studies/plaza-premium/). These are vendor/customer announcements with sponsor-reported migration, managed operations, security, and rollback-process framing; no guest records or independent occupancy/service audit.
- **Latest statuses:** `production=observed`, `failure=needs_direct_review`, `migration=observed`, `cost=needs_direct_review`, `security=observed`, `rollback=needs_direct_review`, `portability=needs_direct_review`, `maintenance=observed`.
- **Evidence partitions:** Sponsored `D/B`; operator/community `U` for a hospitality-specific independent receipt; empirical `U`; workflow fit `I`.
- **Contradictions and limits:** Planned migration and managed-operations language does not prove reservation consistency, guest privacy, rollback, or occupancy impact. Feedback is evidence, not authority; no retention denominator is present.
- **Falsifier and next gate:** Falsify if synthetic events cannot produce a consistent room/reservation state or improvement requires guest/vendor action. Before client validation, design a synthetic stay replay with double-booking, late checkout, room disagreement, urgent maintenance, identity restriction, and missing-owner receipts.

### 3.8 `it_services_msps` — IT Services & MSPs

- **Priority / catalogue:** Operations/support and authority-sensitive infrastructure. `E` signal: ticket triage, SLA/backup monitoring, onboarding; `validated_demand=U`; inferred atoms `triage_route`, `monitor_alert`, `intake_normalize`, `report_digest`, `approval_publish`.
- **Bounded workflow:** Read-only service-health desk joining ticket, SLA, backup-result, and onboarding checklists. Service-desk lead or client-success owner reviews; secrets and production hosts are excluded. No privileged access, remediation, deployment, credential handling, or client notification.
- **Wave-11 sources:** `W11-IT01`, Class C, 2026 observed 2026-08-26, [CloudHesive AWS migration/managed-services case](https://www.cloudhesive.com/wp-content/uploads/2025/02/CloudHesive—Case-Study-AWS-Migration-and-Managed-Services.pdf); `W11-IT02`, Class B, same date, [Prolifics Azure integration case](https://prolifics.com/usa/resource-center/case-studies/azure-integration-modernization). IT01 is provider-hosted and commercially bounded; IT02 is consultancy-hosted; neither provides infrastructure logs, independent cost/resilience audit, or retention cohort.
- **Latest statuses:** `production=observed`, `failure=needs_direct_review`, `migration=observed`, `cost=needs_direct_review`, `security=observed`, `rollback=needs_direct_review`, `portability=needs_direct_review`, `maintenance=observed`.
- **Evidence partitions:** Sponsored `D/C+B`; operator/community `D/E` category signal from HN/internal-tool discussion, not an MSP customer denominator; empirical `U`; workflow fit `I`.
- **Contradictions and limits:** Managed-service case language does not prove tenant isolation, SLA clocks, backup recoverability, or secret handling. Privileged-action demand is a reason to preserve a hard stop, not to widen scope.
- **Falsifier and next gate:** Falsify if a canary fixture cannot maintain tenant isolation/SLA clocks or useful output needs privileged action. Before client validation, design tenant-sentinel, backup-freshness, alert-dedupe, secret-exclusion, and owner-acknowledgement receipts.

### 3.9 `insurance_agencies` — Insurance Agencies

- **Priority / catalogue:** Finance/CRM with regulated advice and document authority. `E` signal: lead follow-up, renewals, certificates; `validated_demand=U`; inferred atoms `follow_up_chase`, `extract_structure`, `approval_publish`, `report_digest`.
- **Bounded workflow:** Read-only renewal-and-document desk joining policy/renewal dates, conditions, lead status, and certificate queues. Licensed broker or agency operations lead owns review. No coverage advice, quote/bind, certificate issue, or outbound message.
- **Wave-11 sources:** `W11-IN01`, Class B, 2026 observed 2026-08-26, [Endava insurance aggregator modernization case](https://www.endava.com/case-studies/insurance-aggregator-streamlines-operations-and-improves-claims-success-rate-by-4x); `W11-IN02`, Class B, same date, [Sikich Insurity claims modernization case](https://www.sikich.com/insight/case-study-modernizing-insurance-claims-management-with-insurity-claimsxpress/). Both are consultancy-hosted sponsor-reported claims/workflow cases; no policyholder records, actuarial/compliance audit, or retention cohort.
- **Latest statuses:** `production=observed`, `failure=needs_direct_review`, `migration=observed`, `cost=needs_direct_review`, `security=observed`, `rollback=needs_direct_review`, `portability=needs_direct_review`, `maintenance=observed`.
- **Evidence partitions:** Sponsored `D/B`; operator/community `U`; empirical `U`; workflow fit `I`. Public success-rate language is not an actuarial or customer outcome proof.
- **Contradictions and limits:** Claims-success and modernization figures are sponsor-reported; licensing, coverage version, consent, document rights, and retention are unresolved. A certificate queue is not authorization to issue certificates.
- **Falsifier and next gate:** Falsify if synthetic policy/condition cases have no stable owner or value depends on coverage advice/certificate issuance. Before client validation, design licensed-role, policy-version, expiry, restricted-PII, provenance, and approval-needed receipts.

### 3.10 `law_firms` — Law Firms

- **Priority / catalogue:** Support/operations with privilege and legal authority risk. `E` signal: intake, conflicts, drafts, billing administration; `validated_demand=U`; inferred atoms `intake_normalize`, `triage_route`, `extract_structure`, `approval_publish`, `follow_up_chase`.
- **Bounded workflow:** Read-only synthetic matter-intake desk joining intake fields, conflict-search results, document index, and billing age. Responsible lawyer or conflicts manager owns review. No legal advice, conflict clearance, filing, draft release, billing write, or client contact.
- **Wave-11 sources:** `W11-L01`, Class B, 2026 observed 2026-08-26, [3Rive law-firm case-management consolidation](https://www.3rivetech.com/insights/achieving-seamless-case-management-consolidation-zero-disruption); `W11-L02`, Class B, same date, [Lewis, Longman & Walker NetDocuments story](https://www.netdocuments.com/customer-stories/lewis-longman-walker/). These consultant/document-vendor stories are sponsor-reported; no matter files, privileged records, independent audit, or retention cohort.
- **Latest statuses:** `production=observed`, `failure=needs_direct_review`, `migration=observed`, `cost=unobserved`, `security=observed`, `rollback=needs_direct_review`, `portability=needs_direct_review`, `maintenance=observed`.
- **Evidence partitions:** Sponsored `D/B`; operator/community `U`; empirical `U`; workflow fit `I`. Public document-management positioning is not privilege or conflict-check proof.
- **Contradictions and limits:** Cost is unobserved and rollback needs direct review. Privilege, version, deadline, and access-denial states must not be normalized away; anonymized case stories are not matter-level evidence.
- **Falsifier and next gate:** Falsify if a held-out conflict/document fixture cannot preserve privilege and version identity or value requires legal judgment/filing. Before client validation, design metadata-only synthetic conflict, provenance-span, privilege-label, reviewer, and retention receipts.

### 3.11 `logistics_freight` — Logistics & Freight

- **Priority / catalogue:** Operations/support. `E` signal: exceptions, carrier booking, POD, customer notification; `validated_demand=U`; inferred atoms `monitor_alert`, `triage_route`, `schedule_coordinate`, `sync_handoff`, `follow_up_chase`.
- **Bounded workflow:** Read-only shipment-exception desk joining tracking events, booking state, delivery windows, and POD indexes. Transport operations or logistics coordinator owns review. No booking, route change, customer notice, claim, or dispatch.
- **Wave-11 sources:** `W11-LG01`, Class B, 2026 observed 2026-08-26, [BXITech logistics platform transformation case](https://bxitech.com/case-study/digital-logistics-platform-transformation-case-study/); `W11-LG02`, Class C, same date, [Hupac intermodal transport-management case](https://lansa.com/casestudies/hupac/). LG02 is a vendor case brief with full-story access gated by a form; neither source supplies shipment records, independent service-level audit, or retention cohort.
- **Latest statuses:** `production=observed`, `failure=needs_direct_review`, `migration=observed`, `cost=needs_direct_review`, `security=observed`, `rollback=needs_direct_review`, `portability=needs_direct_review`, `maintenance=observed`.
- **Evidence partitions:** Sponsored `D/B+C`; operator/community `D/E` from the Zero100 supply-chain operator transcript in the expansion packet, but it is monitoring use and not a freight denominator; empirical `U`; workflow fit `I`.
- **Contradictions and limits:** Gated case content and sponsor claims leave event ordering, POD integrity, ETA accuracy, and recovery unknown. “Book carriers” is catalogued demand but outside this read-only boundary.
- **Falsifier and next gate:** Falsify if duplicate/out-of-order events cannot be handled deterministically or value requires carrier/customer side effects. Before client validation, design synthetic tracking/POD replay with event-order, duplicate, missing-POD, ETA-conflict, identity, and retention receipts.

### 3.12 `marketing_social_media_agencies` — Marketing & Social Media Agencies

- **Priority / catalogue:** CRM/lead and operations. `E` signal: schedule content, pull reporting, chase retainer leads; `validated_demand=U`; inferred atoms `approval_publish`, `schedule_coordinate`, `report_digest`, `follow_up_chase`, `extract_structure`.
- **Bounded workflow:** Read-only campaign/reporting desk joining content calendar, approval status, channel metrics, and lead queues. Client account lead and named client approver own review. No publish, ad spend, client message, or rights grant.
- **Wave-11 sources:** `W11-MK01`, Class B, 2026 observed 2026-08-26, [Precision Salesforce-to-HubSpot case](https://www.hubspot.com/case-studies/precision); `W11-MK02`, Class B, same date, [IMG HubSpot-to-Salesforce case](https://www.growwithimg.com/case-studies/navigating-change-with-zero-downtime-a-hubspot-to-salesforce-success-story/). Both are CRM-vendor/agency-sponsored migration stories; no campaign records, independent attribution audit, or retention cohort.
- **Latest statuses:** `production=observed`, `failure=needs_direct_review`, `migration=observed`, `cost=unobserved`, `security=observed`, `rollback=blocked`, `portability=needs_direct_review`, `maintenance=observed`.
- **Evidence partitions:** Sponsored `D/B`; operator/community `E` from the pre-filtered 302-adopter martech survey in the expansion packet, whose top uses include lead routing, data sync, integrations, and enrichment; empirical `U` for agency outcomes; workflow fit `I`.
- **Contradictions and limits:** Survey respondents are existing adopters and do not establish prevalence; cost/rollback are W11 gaps; approval and asset rights remain human-owned.
- **Falsifier and next gate:** Falsify if synthetic cases cannot distinguish approved from draft content or benefit appears only after publishing. Before client validation, design consent/approval, metric-window, rights-status, channel-freshness, dedupe, and no-publish receipts.

### 3.13 `mortgage_brokers` — Mortgage Brokers

- **Priority / catalogue:** Finance/CRM with regulated financial-data risk. `E` signal: borrower qualification, conditions, loan-file progress; `validated_demand=U`; inferred atoms `intake_normalize`, `extract_structure`, `triage_route`, `follow_up_chase`, `report_digest`.
- **Bounded workflow:** Read-only loan-condition desk joining application checklist, document index, lender status, and aging. Licensed broker or processor owns review. No underwriting, advice, lender submission, document request, or borrower message.
- **Wave-11 sources:** `W11-MO01`, Class B, 2026 observed 2026-08-26, [Bajaj Tech.AI secured-lending case](https://www.bajajtechai.com/casestudy/loan-origination-system-secured-lending); `W11-MO02`, Class B, same date, [InfoVision mortgage-services transformation case](https://www.infovision.com/wp-content/uploads/2025/03/A-digital-transformation-journey-in-mortgage-services.pdf). Both are technology-provider/consultancy cases with sponsor-reported KYC/origination or migration claims; no borrower records or independent compliance audit.
- **Latest statuses:** `production=observed`, `failure=needs_direct_review`, `migration=observed`, `cost=unobserved`, `security=observed`, `rollback=needs_direct_review`, `portability=needs_direct_review`, `maintenance=observed`.
- **Evidence partitions:** Sponsored `D/B`; operator/community `U`; empirical `U`; workflow fit `I`. KYC/origination language is not evidence of lawful client use or underwriting correctness.
- **Contradictions and limits:** Cost is unobserved; identity, document expiry, lender status, consent, retention, and sensitive-data restrictions remain unknown. No financial advice or credit decision is implied.
- **Falsifier and next gate:** Falsify if a held-out fixture cannot preserve applicant/document identity or useful output requires advice, underwriting, or borrower contact. Before client validation, design synthetic condition matching with consent/role, lender source, expiry, provenance, reviewer, and retention receipts.

### 3.14 `property_management` — Property Management

- **Priority / catalogue:** Operations/support and finance. `E` signal: tenant inquiries, rent aging, work orders, lease filing; `validated_demand=U`; inferred atoms `intake_normalize`, `triage_route`, `follow_up_chase`, `sync_handoff`, `extract_structure`.
- **Bounded workflow:** Read-only property-exception desk joining tenant inquiry, rent-aging, work-order, and lease-index views. Property manager or portfolio operations lead owns review. No rent collection, eviction action, tenant message, vendor dispatch, or lease change.
- **Wave-11 sources:** `W11-PM01`, Class C, 2026 observed 2026-08-26, [multifamily property-management CRM replacement case](https://appexchange.salesforce.com/partners/servlet/servlet.FileDownload?file=00PKX00000bAcha2AC); `W11-PM02`, Class B, same date, [Hearthside Realtors workflow story](https://www.workloopie.com/customer-stories/hearthside-realtors). PM01 is partner-hosted commercial PDF; PM02 is agency-hosted customer story; neither supplies tenant records, independent uptime/property-operations audit, or retention cohort.
- **Latest statuses:** `production=observed`, `failure=needs_direct_review`, `migration=observed`, `cost=unobserved`, `security=observed`, `rollback=needs_direct_review`, `portability=needs_direct_review`, `maintenance=observed`.
- **Evidence partitions:** Sponsored `D/C+B`; operator/community `U`; empirical `U`; workflow fit `I`. Adjacent real-estate/portal discussions do not establish property-management demand or permissions.
- **Contradictions and limits:** Tenant identity, lease version, emergency requests, payment state, and vendor authority remain unresolved; cost is unobserved. Emergency and legal paths cannot be represented as ordinary routing.
- **Falsifier and next gate:** Falsify if synthetic cases cannot preserve tenant/unit identity or distinguish payment pending from paid, or value depends on dispatch/message effects. Before client validation, design synthetic lease/payment/work-order replay with role, consent, freshness, escalation, and retention receipts.

### 3.15 `real_estate` — Real Estate

- **Priority / catalogue:** CRM/lead and scheduling. `E` signal: portal leads, viewings, listing paperwork; `validated_demand=U`; inferred atoms `intake_normalize`, `follow_up_chase`, `schedule_coordinate`, `extract_structure`, `report_digest`.
- **Bounded workflow:** Read-only listing-and-lead desk joining portal lead, property/listing, viewing calendar, and document index. Listing agent or brokerage operations lead owns review. No outreach, booking, listing edit, offer, or disclosure.
- **Wave-11 sources:** `W11-RE01`, Class B, 2026 observed 2026-08-26, [Knight Frank HubSpot migration case](https://huble.com/case-studies/knight-frank); `W11-RE02`, Class B, same date, [Expro Softech real-estate Salesforce case](https://exprosoftech.com/case-studies/real-estate-industry/). Both are agency/consultancy-sponsored CRM stories; no lead/listing/transaction records, independent attribution audit, or retention cohort.
- **Latest statuses:** `production=observed`, `failure=needs_direct_review`, `migration=observed`, `cost=unobserved`, `security=observed`, `rollback=needs_direct_review`, `portability=needs_direct_review`, `maintenance=observed`.
- **Evidence partitions:** Sponsored `D/B`; operator/community `E` category signals from portal/marketplace and CRM discussions in the expansion packet, without a real-estate denominator; empirical `U`; workflow fit `I`.
- **Contradictions and limits:** Lead and migration claims are not conversion or transaction proof; cost is unobserved; consent, listing freshness, document version, and calendar read-back remain gaps.
- **Falsifier and next gate:** Falsify if stale listings cannot be separated from current source state or demand depends on outreach/booking side effects. Before client validation, design synthetic lead/listing/calendar replay with consent, source timestamp, document version, calendar read-back, and no-outreach receipts.

### 3.16 `recruiting_staffing` — Recruiting & Staffing

- **Priority / catalogue:** CRM/lead and support operations with employment-decision risk. `E` signal: screen candidates, schedule interviews, fill roles; `validated_demand=U`; inferred atoms `extract_structure`, `triage_route`, `schedule_coordinate`, `follow_up_chase`, `report_digest`.
- **Bounded workflow:** Read-only recruiting pipeline desk joining candidate/application, role, stage, availability, and interview calendar. Recruiter or hiring manager owns review; employment decision remains human. No ranking decision, rejection, invite, offer, or candidate message.
- **Wave-11 sources:** `W11-RC01`, Class B, 2026 observed 2026-08-26, [Jardeg ATS migration/application-abandonment case](https://www.jobsync.com/resource/jardeg-case-study/); `W11-RC02`, Class B, same date, [Aurora Solar Ashby/Workday story](https://www.ashbyhq.com/customers/aurora-solar). Both are ATS/integration-vendor customer stories with sponsor-reported funnel/integration/time-saved figures; no candidate records, independent placement/hiring audit, or retention cohort.
- **Latest statuses:** `production=observed`, `failure=needs_direct_review`, `migration=observed`, `cost=needs_direct_review`, `security=observed`, `rollback=needs_direct_review`, `portability=needs_direct_review`, `maintenance=observed`.
- **Evidence partitions:** Sponsored `D/B`; operator/community `U`; empirical `U`; workflow fit `I`. Funnel metrics are not evidence of fair hiring, placement quality, or retention.
- **Contradictions and limits:** Consent/retention, resume provenance, timezone, fairness-sensitive attributes, and stage ownership remain unresolved. Any automated hiring judgment is outside this lane.
- **Falsifier and next gate:** Falsify if held-out candidate records cannot retain identity/stage provenance or useful output depends on automated hiring judgment. Before client validation, design synthetic pipeline/scheduling replay with fairness exclusion, consent/retention, source provenance, calendar read-back, and human-review receipts.

### 3.17 `saas` — SaaS

- **Priority / catalogue:** CRM/lead, support, and operations. `E` signal: MQLs/demos, churn, shipping; `validated_demand=U`; inferred atoms `triage_route`, `follow_up_chase`, `monitor_alert`, `sync_handoff`, `report_digest`.
- **Bounded workflow:** Read-only SaaS operating desk joining CRM pipeline, usage/renewal signals, support state, and CI/release summaries. Revenue-operations, customer-success, or engineering owner reviews the relevant exception. No outreach, entitlement change, production deploy, or customer-data mutation.
- **Wave-11 sources:** `W11-SA01`, Class B, 2026 observed 2026-08-26, [Bango AWS replatforming case](https://aws.amazon.com/isv/case-studies/bango/); `W11-SA02`, Class B, same date, [JusticeONE multi-tenant SaaS modernization case](https://sam-solutions.com/case-studies/cloud-based-saas-and-mobile-platform-modernization-project/). Both are cloud-vendor/consultancy-sponsored cases; no tenant records, independent reliability/security audit, or retention cohort.
- **Latest statuses:** `production=observed`, `failure=needs_direct_review`, `migration=observed`, `cost=unobserved`, `security=observed`, `rollback=blocked`, `portability=needs_direct_review`, `maintenance=observed`.
- **Evidence partitions:** Sponsored `D/B`; operator/community `D/E` from the expansion’s 30-app builder, internal-tool, and martech signals, but no SaaS-wide denominator; empirical `E` from general prompt-to-app benchmarks only, not SaaS retention; workflow fit `I`.
- **Contradictions and limits:** Multi-tenant and replatforming language does not prove tenant isolation, CI/release correctness, churn accuracy, cost, or rollback. Cost is unobserved and rollback blocked in W11.
- **Falsifier and next gate:** Falsify if the join cannot preserve source ownership across commercial and engineering states or value depends on outbound/deployment action. Before client validation, design synthetic account/tenant/usage/support/release replay with event lag, duplicate ticket, CI conflict, scope isolation, and owner receipts.

## 4. Priority archetype readout

The requested archetypes cut across the 17 industries rather than replacing
them:

| Archetype | Industries retained in this map | Public evidence class | What remains unproven | Next gate before client validation |
|---|---|---|---|---|
| Operations | accounting, construction, ecommerce, hospitality, IT/MSP, logistics, property management, SaaS | Mostly sponsored `D/B`; some operator category signals | Source-of-truth ownership, freshness, exception precision, tenancy, runtime, maintenance | Synthetic read-only exception replay with owner, freshness, duplicate, contradiction, and no-side-effect receipts; seek one independent operator artifact. |
| CRM/lead | marketing agencies, mortgage, real estate, recruiting, SaaS, insurance | Sponsored CRM cases plus pre-filtered adopter/category signals | Consent, role/authority, attribution, dedupe, fairness, outbound denial | Synthetic consent/identity/queue fixture and one direct independent public operator signal; no outreach. |
| Support | ecommerce, hospitality, IT/MSP, property management, SaaS, education/health administration | Sponsored customer cases; operator support signal is sparse | PII boundary, SLA source, escalation authority, reply/closure denial | Synthetic ticket/SLA/tenant replay with redaction, stale policy, and no-reply receipts. |
| Finance | accounting, ecommerce, education, healthcare administration, insurance, mortgage, property management, SaaS | Sponsored transformation cases; public finance synthesis and one fictionalized transcript are not cohorts | Decimal/rate policy, ledger authority, regulated data, cost denominator, recovery | Synthetic reconciliation with explicit currency/rounding/approval/rollback fields; no posting, payment, or advice. |

No archetype has a client-validation receipt. A client conversation or sample,
if later authorized, is a new evidence gate and cannot be inferred from these
public signals.

## 5. Evidence gaps, falsifiers, and stop rules

The following gaps are preserved for all 17 sections and all future client
validation decisions:

- **Demand:** no independent denominator, willingness-to-pay, retention, or
  repeated accepted outcome establishes validated demand.
- **Capability and quality:** public workflows and case studies do not prove
  source-grounded behavior, schema validity, negative-path handling, or repair
  cost on a held-out fixture.
- **Rights:** public URLs and customer stories do not establish reuse rights,
  license, SBOM, attribution, provenance, retention, correction, or exit.
- **Authority:** named roles in a catalogue are not authenticated principals,
  consent, revocation, least privilege, or client approval.
- **Eval/runtime:** no model, benchmark, browser, runtime, visual, portability,
  recovery, or security execution occurred in this lane.
- **Economics/maintenance:** W11 cost cells include eight `unobserved` rows;
  price, token, repair, support, drift, owner, and exit denominators remain
  unknown or sponsored.
- **Access and contradiction:** 403/gated/timeout material is not silently
  upgraded; a `needs_direct_review` slot is not a verified failure; a sponsor
  claim is not an independent audit.

### Stop / kill conditions for the next gate

Stop and preserve a `BLOCKED` or `KILL` receipt if a future bounded probe:

1. enters client/private/credential/authenticated data or a production account;
2. writes, sends, assigns, books, posts, pays, deploys, migrates, calls a
   webhook, or changes a source-of-truth record;
3. invents an owner, consent, timestamp, source, policy, amount, outcome, or
   citation, or hides a contradiction/stale/unknown field;
4. crosses a tenant/role boundary, accepts revoked/expired authority, leaks a
   secret, or permits prompt injection to change tools/policy;
5. treats a public case, catalogue row, valid schema, draft, or staged artifact
   as validated demand, production proof, legal clearance, or admission; or
6. cannot record an owner, source/input digest, expected/observed verdict,
   falsifier, correction/exit route, denominator, and current status.

Absence of an evidence field is `U` or `BLOCKED`, not a positive or negative
demand result. A future green public or synthetic receipt still cannot promote
the shared Phase-5 state or admit a block.

## 6. Current research-only receipt

```yaml
PLAN_RECEIPT: PH5-INDUSTRY-SIGNAL-DEPTH-READ-ONLY
industry_profiles: 17
normalized_sections: 17
phase2_catalogue_counts: 17 industries / 12 teams / 66 use cases / 72 ideas / 12 atoms
phase2_matrix_floor: 170 cells / 17000 observations / 100 per cell
latest_wave: W11
latest_wave_slots: 136
latest_wave_source_identities: 34
latest_wave_status: 68 observed / 56 needs_direct_review / 8 unobserved / 4 blocked
latest_wave_source_classes: 1 A / 30 B / 3 C
public_expansion_urls: 74 unique; 47 200 / 26 403-or-gated / 1 timeout
evidence_classes_preserved: E / D / I / U
client_data_used: false
private_data_used: false
authenticated_access_used: false
models_executed: false
runtime_executed: false
benchmark_executed: false
license_scan_executed: false
security_probe_executed: false
external_side_effects: none
implementation_authorized: false
execution_status: UNEXECUTED
admission_status: NOT_ADMITTED
admitted_blocks: 0
parent_goal_status: active
shared_phase_state_promotion: coordinator_owned_and_not_performed
```

This map is evidence depth, not validated demand, capability proof, legal
clearance, production readiness, client approval, implementation, or admission.

## Final callback receipt

```yaml
callback_status: sent_and_verified
observed: 2026-08-27 Asia/Ho_Chi_Minh
target: Herdr session herdr-2, CENA workspace w659e02f80e5bb1, pane w659e02f80e5bb1-1
message: "[from: RCH-P5-INDUSTRY-SIGNAL-DEPTH] @CENA: DONE RCH-P5-INDUSTRY-SIGNAL-DEPTH. Wrote industry-signal-depth.md with 17 normalized industry sections, 34 W11 source identities, 42 links, exact W11 status counts, evidence classes, contradictions/access limits, falsifiers, and pre-client-validation gates. Smoke PASS; execution UNEXECUTED, admission NOT_ADMITTED, implementation false, parent active, shared Phase-5 unpromoted. 0 blockers."
resolution: Fresh herdr-2 pane list and recent pane read matched the active CENA coordinator before delivery.
submission: pane_run_delivered_without_queued_text; no_Enter_retry
readback: visible pane read after sleep 2 confirmed the exact callback in the CENA transcript.
blockers: 0
parent_goal_status: active
shared_phase_state: coordinator_owned_and_unpromoted
execution_status: UNEXECUTED
implementation_authorized: false
admission_status: NOT_ADMITTED
admitted_blocks: 0
```
