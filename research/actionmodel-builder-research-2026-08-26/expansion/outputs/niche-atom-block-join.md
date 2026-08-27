# Action Model Builder — niche → atom → block join

**Lane:** `RCH-NICHE-BLOCK-JOIN`  
**Run:** `actionmodel-builder-research-2026-08-26`  
**Phase:** `expansion-2026-08-26`  
**Mode:** research and ideation only; no product implementation, repository copying, client data, or block admission  
**Observed:** 2026-08-26 (ICT)  
**Baseline rule:** first-pass artifacts under `research/actionmodel-builder-research-2026-08-26/outputs/` are immutable evidence. This packet extends and reconciles them; it does not rewrite their counts or promote their candidates.

**Evidence classes:** `E` = directly inspected local artifact, repository record, or first-party source; `D` = documented first-party claim not independently authenticated; `I` = inference or prioritization derived from multiple sources; `U` = unknown/unverified. Every join in this packet is a research mapping, not an implementation decision.

## Executive result

The full local demand catalogue is broad but shallowly evidenced: 17 industries, 12 teams, 66 use-case cards, and 72 business-idea cards. Only six use cases have linked detail sources; 60 are marked `coming_soon`. The catalogue is therefore a demand index, not a live capability map (`E`: `research/actionmodel-long-run/outputs/verticals/catalogue.json`, observed 2026-08-26).

The first-pass 284-record corpus is useful for capability discovery but is not yet a niche-specific library. It contains structured `vertical_atom_relevance` annotations on every record, but the annotations use broad families such as `operations`, `finance`, `commerce`, `healthcare`, and `knowledge-work operations`, not the 17 catalogue industry IDs. The join below treats those as candidate evidence edges with `I` confidence and a required direct-source gate. Baseline dispositions are 156 `candidate`, 108 `hold`, 15 `reference`, 4 `reject`, and 1 `unknown`; none is an admitted block (`E`: `research/actionmodel-builder-research-2026-08-26/outputs/github-corpus.jsonl` and `github-corpus-report.md`).

### Strategic conclusion

The highest-reuse path is not “one block per industry.” It is a small set of cross-vertical atoms with different authority and data contracts:

```text
catalogue demand
  → solution atom
    → capability bundle
      → candidate primitives / platform references
        → Block Contract candidate
          → host/data/UI/action/evidence binding
            → bounded workflow
              → measured client outcome
```

The strongest current wedge is a synthetic, read-only operations/read-model workflow. Finance has the strongest control-contract evidence but the highest authority, legal, and data risk. CRM/lead has high reuse and clear external primitives but introduces outbound communication and system-of-record writes. Support has a strong repeated pattern but needs message authority and SLA semantics. These are prioritization inferences, not authenticated Actionist capability claims.

## 1. Task ledger and evidence posture

| Slot | RCH-NICHE-BLOCK-JOIN task | Result in this packet | Evidence status / limitation |
|---:|---|---|---|
| 1 | Reconcile industry/team/use-case/idea catalogue and contradictions | §2 records canonical 17/12/66/72 counts, 6 linked/60 coming-soon use cases, and the 39/24 crosswalk metadata contradiction | `E` for local catalogue; crosswalk joins remain `I/U` |
| 2 | Deep-dive all catalogue industries at job/trigger/outcome level | §3 covers all 17 industries | Demand summaries are catalogue evidence; no authenticated workflow execution |
| 3 | Normalize solution-atom schema | §4 adopts the 9-field atom contract plus evidence/status fields | Atom set is local research structure; live capability remains unproven |
| 4 | Map priority atoms to capabilities and contracts | §5 maps 12 atoms to capability families and Block Contract families | `I` until contracts are exercised in fixtures |
| 5 | Join atoms to baseline GitHub candidates | §6 uses 284 structured records and coverage counters | Candidate relevance is content-backed but broad; no admission |
| 6 | Join atoms to commercial/private primitives and public signals | §7 uses first-party Actionist, Retool, Appsmith, Frappe CRM, ERPNext, and NocoBase sources plus the first-pass public-signals packet | Vendor documentation/case studies are `D`; adoption denominators remain `U` |
| 7 | Inventory local assets and SISO precedents | §8 records finance, CRM, AutoSaaS, siso-ui-base, Great Library, and payment-event precedents | Local assets are references/process evidence, not automatically reusable blocks |
| 8 | Name negative space | §9 identifies missing vertical, contract, rights, data, and runtime edges | “No candidate found” is never treated as “no solution exists” |
| 9 | Score urgency, repeatability, risk, evidence burden, reuse | §10 provides a transparent prioritization rubric and archetype scores | Scores are `I`; they are not market measurements |
| 10 | Compare finance, operations, CRM/lead, support, and other archetypes | §10–§11 compare five archetypes and the remaining industry families | Priority is provisional and must be tested with synthetic fixtures |
| 11 | Define smallest falsifiable synthetic pilot and kill criteria | §12 defines `P0-NICHE-JOIN-001` and hard stop rules | Specification only; not executed and not client-authorized |
| 12 | Produce, verify, and callback | §13 contains verification; §14 contains callback payload | Callback is a required external handoff after file validation |

### 1.1 Non-goals enforced

- The 284 baseline records are not changed or copied into a new block library.
- No source repository is cloned, built, transformed, or admitted here.
- No Action Model client data or private contract is used.
- No platform claim is upgraded from documented to authenticated/live.
- No industry mapping is called an implementation, product capability, or legal clearance.

## 2. Catalogue reconciliation

### 2.1 Canonical populations

| Surface | Canonical local count | Current state | What the count means | What it does not mean |
|---|---:|---|---|---|
| Industries | 17 | `catalog`, observed | Vertical demand surfaces | 17 validated vertical products |
| Teams | 12 | `catalog`, observed | Owners/departments of work | Authenticated Actionist tenant roles |
| Use cases | 66 | 6 `linked`, 60 `coming_soon` | Named jobs/cards | 66 implemented workflows |
| Ideas | 72 | `catalog`, observed | Business/offer surfaces | 72 validated businesses or product requirements |
| Use-case categories | 9 in the source description | Partially populated in the local JSON | Taxonomy labels for the linked examples | Relational coverage of every use case |
| Baseline GitHub records | 284 | Content-backed corpus | Candidate/reference/hold/reject discovery set | 284 blocks or 284 vertical matches |

The canonical catalogue counts come from `research/actionmodel-long-run/outputs/verticals/catalogue.json`. The local status file reports the same 17 industries, 12 teams, 66 use cases, and 72 ideas, while noting that only six examples have first-party detail and 60 are “Coming soon” (`E`: `research/actionmodel-long-run/outputs/verticals/CURRENT.md`).

### 2.2 Contradictions retained, not flattened

| Contradiction | Observed values | Decision | Why |
|---|---|---|---|
| Four-axis crosswalk declarations | A batch declaration reports figures inconsistent with independent unique-ID counts; the synthesis retains 39 use cases and 24 ideas as the consistent figures | Keep `catalogue.json` 66/72 as the source catalogue; keep crosswalk metadata `PARTIAL` | A crosswalk is a derived join and cannot overwrite the source inventory without a repair receipt (`E`: `research/actionmodel-long-run/outputs/synthesis/decision-ledger.md`) |
| Use-case implementation depth | 6 linked/documented vs 60 coming soon | Treat linked cards as demand-plus-detail evidence; treat coming-soon cards as catalogue-only | Prevents a demand label from becoming a capability claim |
| Corpus vertical tags | 15 broad research families vs 17 catalogue industries | Use broad tags for candidate discovery and retain an explicit `catalogue_industry` edge with `I/U` status | The baseline corpus has no exact `industry` field; forcing one would fabricate precision |
| Baseline target | First pass 284 records; expansion target toward 500 | Retain all 284 and add only after expansion lane records land | The join lane does not silently count uninspected repositories as coverage |

### 2.3 Industry census: all 17 surfaces

The following table converts the catalogue demand summary into a normalized job/trigger/outcome shape. Atom and contract mappings are inferred from the demand text and the 12 local atoms; each row requires direct-source review before a product or block claim.

| Industry | Catalogue job | Normalized trigger | Outcome metric | Primary atoms (`I`) | Contract pressure |
|---|---|---|---|---|---|
| Accounting Firms | Chase client documents, reconcile bank feeds, close books | New document/payment, aging threshold, close schedule | Time to review/close; exception aging; matched rate | `intake_normalize`, `extract_structure`, `reconcile_audit`, `follow_up_chase`, `report_digest` | Finance authority, ledger source-of-truth, currency/tax, audit, no auto-posting |
| Construction | Track jobs, chase change orders, coordinate subcontractors, progress billing | Job/status change, change-order request, milestone/date | Change-order cycle time; on-time billing; unresolved job exceptions | `intake_normalize`, `triage_route`, `sync_handoff`, `follow_up_chase`, `report_digest` | Multi-party authority, document versioning, schedule, approval, payment/billing boundary |
| Course Creators | Onboard students, run lesson drips, manage community | Enrollment, lesson schedule, unanswered question, cohort event | Activation/completion; response time; attendance | `intake_normalize`, `schedule_coordinate`, `follow_up_chase`, `report_digest` | Consent, messaging, content access, learner identity, scheduling |
| Ecommerce | Recover carts, sync inventory, handle support tickets | Cart age, stock change, support request, order event | Cart recovery; stockout rate; ticket resolution/SLA | `monitor_alert`, `follow_up_chase`, `sync_handoff`, `triage_route`, `report_digest` | Commerce writes, inventory authority, payment/PII, duplicate order actions |
| Education & Training | Enrolments, attendance, learner communication, tuition administration | Enrollment/attendance event, due date, missing document | Enrollment completion; attendance; response/collection time | `intake_normalize`, `schedule_coordinate`, `follow_up_chase`, `reconcile_audit` | Learner privacy, guardian/role authority, tuition records, communication consent |
| Healthcare & Medical Practices | Confirm appointments, rescue no-shows, reminders, billing administration | Appointment, cancellation/no-show, billing aging | Confirmed appointment rate; no-show rate; unresolved billing | `schedule_coordinate`, `follow_up_chase`, `triage_route`, `reconcile_audit` | Regulated data, clinical boundary, consent, billing authority, audit/retention |
| Hospitality | Reservations, guest feedback, housekeeping coordination | Reservation/status change, guest message, room task | Occupancy/response; room turnaround; feedback resolution | `schedule_coordinate`, `triage_route`, `sync_handoff`, `monitor_alert` | Reservation authority, personal data, timing, external messaging |
| IT Services & MSPs | Triage tickets, monitor SLAs/backups, client onboarding | Ticket/alert, SLA threshold, backup result, client intake | Mean time to triage/resolve; SLA breach rate; onboarding time | `triage_route`, `monitor_alert`, `intake_normalize`, `report_digest`, `approval_publish` | Privileged access, incident authority, secrets, browser/API actions, audit |
| Insurance Agencies | Follow-up leads, renewals, issue certificates | Lead/renewal date, missing condition, certificate request | Renewal retention; condition aging; certificate turnaround | `follow_up_chase`, `extract_structure`, `approval_publish`, `report_digest` | Regulated/personal data, document accuracy, approval and outbound messaging |
| Law Firms | Client intake, conflict checks, document drafts, billing administration | Intake, new matter, document request, invoice aging | Intake-to-review time; conflict turnaround; billing aging | `intake_normalize`, `triage_route`, `extract_structure`, `approval_publish`, `follow_up_chase` | Privilege/confidentiality, lawyer approval, document provenance, billing authority |
| Logistics & Freight | Exceptions, carrier booking, proof of delivery, customer notices | Shipment/status event, delay, missing POD, booking request | Exception resolution; on-time delivery; POD completeness | `monitor_alert`, `triage_route`, `schedule_coordinate`, `sync_handoff`, `follow_up_chase` | External side effects, carrier authority, location/PII, idempotency |
| Marketing & Social Media Agencies | Schedule content, reporting decks, retainer-lead follow-up | Content calendar, reporting period, lead/event, approval | Publish-on-time; reporting cycle time; lead response | `approval_publish`, `schedule_coordinate`, `report_digest`, `follow_up_chase`, `extract_structure` | Brand approval, platform credentials, content rights, outbound publishing |
| Mortgage Brokers | Qualify borrowers, chase conditions, move loan files to close | Application, missing condition, lender/status event | Condition aging; application-to-close time; completeness | `intake_normalize`, `extract_structure`, `triage_route`, `follow_up_chase`, `report_digest` | Financial/identity data, regulated advice boundary, lender authority |
| Property Management | Tenant inquiries, rent chasing, work orders, lease filing | Tenant message, rent aging, maintenance request, lease event | Response time; rent aging; work-order turnaround | `intake_normalize`, `triage_route`, `follow_up_chase`, `sync_handoff`, `extract_structure` | Tenant privacy, payment authority, vendor dispatch, document retention |
| Real Estate | Portal leads, viewings, listing paperwork | Lead/event, viewing request, missing listing document | Lead response; viewing conversion; document completeness | `intake_normalize`, `follow_up_chase`, `schedule_coordinate`, `extract_structure`, `report_digest` | Consent, listing accuracy, calendar and CRM writes |
| Recruiting & Staffing | Screen candidates, schedule interviews, keep roles filled | Application, stage change, interview availability, offer condition | Time to screen/schedule/fill; candidate response | `extract_structure`, `triage_route`, `schedule_coordinate`, `follow_up_chase`, `report_digest` | Sensitive HR data, fairness, recruiter authority, outbound communication |
| SaaS | MQL-to-demo, churn reduction, faster shipping | Lead/product event, renewal/churn signal, CI/PR/release event | Conversion; churn/renewal; release cycle time | `triage_route`, `follow_up_chase`, `monitor_alert`, `sync_handoff`, `report_digest` | CRM/data source, email authority, deployment/release controls |

### 2.4 Team census: the owner lens

| Team | Demand summary | Dominant atoms | Main contract risk |
|---|---|---|---|
| Admin & Front Office | Reception, filing, scheduling, shared inbox | intake, schedule, sync, browser | PII, calendar and filing authority |
| Customer Support | Triage, draft replies, SLA clocks | triage, follow-up, monitor, report | Customer data, outbound message approval |
| Engineering | CI failures, stale PRs, standups | triage, monitor, report, sync | Code/repository credentials and deployment actions |
| Finance & Accounting | Reconcile, chase invoices, receipts, numbers | extract, reconcile, follow-up, report | Ledger authority, financial posting, audit |
| Founders & Executives | Briefing, triage, scorecards | intake, classify, report, approval | High-value decisions and confidentiality |
| HR & People | CVs, interviews, onboarding, policy, reports | extract, schedule, follow-up, report | Sensitive data, fairness, employment decisions |
| IT | Access requests, alerts, software-license approvals | triage, monitor, approval, sync | Privileged access and secrets |
| Legal | Intake, NDAs, renewals, compliance | intake, extract, approval, follow-up | Privilege, legal review, document integrity |
| Marketing | Competitors, reviews, mentions, reports | monitor, extract, report, approval | Brand/content rights and platform credentials |
| Operations | Intake desk, record sync, morning digest | intake, triage, sync, report | Cross-system state and owner assignment |
| Product | Feedback, features, release notes, stakeholders | classify, triage, report, sync, approval | Product truth and release authority |
| Sales | Pipeline cleanliness, follow-ups, forecast | intake, triage, follow-up, sync, report | CRM source-of-truth and outbound messaging |

## 3. Solution-atom contract

### 3.1 Canonical atom shape

The baseline atom schema is retained from `research/actionmodel-long-run/outputs/verticals/atoms-001.json` (`E`, observed 2026-08-26):

```yaml
solution_atom:
  id: stable-slug
  label: human-readable job
  outcome: observable result
  trigger: event | schedule | threshold | human request
  state: source state, entities, freshness, missing fields
  decision: rule/model/human decision and confidence
  side_effect: read | stage | write | message | browser | deploy
  authority: actor, role, approval, allowed scope
  verification: post-condition, read-back, duplicate/idempotency check
  recovery: retry, quarantine, compensation, rollback, escalation
  audit: input, version, actor, timestamps, decision, result, receipt
  capability_status: catalog | documented | authenticated | implemented | unverified
  evidence_class: E | D | I | U
  evidence_urls: []
  candidate_blocks: []
  next_gate: discovery | direct_source_review | extract | build | smoke | reject
```

### 3.2 The 12 baseline atoms

| Atom | Outcome | Typical side effect | Priority contract families | Current evidence |
|---|---|---|---|---|
| `intake_normalize` | Typed work item from raw request/event/file | Stage/create work item or request missing data | identity, data, evidence, authority | `E/D`: documented in local atom file and Actionist docs; not live |
| `triage_route` | Category, urgency, owner, queue, SLA | Assignment/task/alert | identity, policy, action, audit | `E/I`: documented/inferred; direct owner policy needed |
| `extract_structure` | Validated fields/entities with provenance spans | Stage structured record | data, provenance, evidence, privacy | `E/I`: documented; extraction quality unproven |
| `classify_prioritize` | Labels, priority, risk, next action | Metadata/review task/draft | policy, model evidence, authority | `I/U`: unverified/inferred |
| `follow_up_chase` | Approved reminder/response moves item forward | Message/task/schedule | messaging, consent, approval, idempotency | `E/D`: documented; no live send proof |
| `schedule_coordinate` | Acceptable slot/window and participant alignment | Calendar/task/notification | calendar, identity, approval, read-back | `E/D`: documented; no live calendar contract |
| `reconcile_audit` | Match/mismatch queue with explanation | Stage record/exception/report | source-of-truth, finance/data, audit, recovery | `I/U`: high-risk unverified atom |
| `report_digest` | Source-linked decision-ready report | Dashboard/recap/publication | data freshness, evidence, approval | `E/D`: documented; no authenticated source |
| `monitor_alert` | Meaningful change reaches owner | Alert/task/incident | trigger, threshold, dedupe, escalation | `E/D`: documented; no runtime proof |
| `approval_publish` | Prepared artifact becomes controlled side effect | Send/post/publish/commit | authority, exact payload, audit, rollback | `E/D`: documented; approval semantics unverified |
| `sync_handoff` | State moves between systems without context loss | Target record/task/notification | integration, mapping, idempotency, read-back | `E/D/I`: documented pattern; no Actionist contract |
| `browser_data_entry` | Controlled operation in API-less software | Allow-listed UI write/upload/message | browser, session, approval, verification, recovery | `E/D`: documented; production operation unverified |

## 4. Atom → capability → contract join

### 4.1 Capability families

| Capability family | Atoms using it | Block Contract fields | Minimum evidence before reuse |
|---|---|---|---|
| Intake/identity | intake, triage, extract | actor, tenant, source, input schema | duplicate key, tenant identity, source link |
| Schema/data binding | intake, extract, reconcile, report, sync | data mode, tables/API, field mapping, sensitivity | read-only fixture and schema/contract receipt |
| Classification/decision | triage, classify, monitor, reconcile | rule/model version, confidence, policy | held-out cases, override path, explanation/audit |
| Scheduling/triggering | follow-up, schedule, monitor | trigger, timezone, schedule state | idempotent trigger and duplicate suppression |
| Messaging/publishing | follow-up, approval, sync | recipient, consent, approval, delivery receipt | draft-only or synthetic delivery; no unapproved send |
| CRUD/read model | triage, reconcile, report, sync | routes, components, read/write mode, owner | build, fixture read-back, empty/error states |
| Browser operation | browser, follow-up, sync | session scope, allowed actions, screenshot/DOM receipt | sandboxed canary and action trace |
| Verification/audit | all atoms | evidence receipts, trace IDs, before/after | deterministic replay and reviewer decision |
| Recovery/rollback | all non-trivial atoms | idempotency, compensation, rollback pointer | failure fixture, retry, recovery receipt |
| Governance/security | all atoms | auth, approval, egress, dependency/SBOM | adversarial injection/tenant/secret tests |

### 4.2 Contract families required by the join

1. **Demand contract:** atom ID, job, trigger, outcome metric, scope and stop condition.
2. **Identity/tenant contract:** actor, tenant key, role, source-of-truth owner, data sensitivity.
3. **Data contract:** read/write mode, schema/API, field mappings, ownership, freshness, idempotency.
4. **UI/token contract:** routes, component registry entries, token slots, accessibility and visual intent.
5. **Action/authority contract:** named capabilities, approval, allowed targets, external effects, read-back.
6. **Integration contract:** OpenAPI/JSON Schema/Pact/MCP-shaped boundary and provider test.
7. **Evidence contract:** source digest, license/copyright/SBOM, transform log, build/browser/security receipts.
8. **Release/recovery contract:** artifact digest, owner, deployment target, rollback/compensation objects, expiry/review date.

No atom-to-block edge is valid for release if any required contract family is absent. A UI candidate can satisfy only the UI portion; it cannot silently become a data, action, or authority block.

## 5. Full catalogue → atom coverage

### 5.1 Linked versus coming-soon use cases

The six linked examples are `email_triage`, `customer_support_email_replies`, `sla_breach_alerts_clickup_slack`, `otter_transcripts_to_clickup_tasks`, `ci_failure_triage`, and `github_pr_review_reminders_slack`. The remaining 60 cards are explicitly `coming_soon` (`E`: `catalogue.json`). The mapping below covers all 66 IDs, but every row beyond the linked six is `I` until a direct source or synthetic fixture validates it.

### 5.2 Use-case ID → atom mapping

| Atom bucket | Catalogue use-case IDs |
|---|---|
| `intake_normalize` | `email_triage`, `shared_inbox_sorting_routing`, `turning_emails_into_tickets`, `lead_qualification_first_response`, `crm_data_entry_cleanup`, `pre_meeting_account_briefs`, `request_intake_triage_across_teams`, `ai_receptionist` |
| `triage_route` | `customer_support_email_replies`, `sla_breach_alerts_clickup_slack`, `ci_failure_triage`, `issue_triage_routing`, `low_stock_inventory_alerts`, `error_triage_alert_digests`, `lead_qualification_first_response` |
| `extract_structure` | `otter_transcripts_to_clickup_tasks`, `invoice_data_extraction`, `contract_review_summaries`, `resume_screening`, `meeting_notes_action_items`, `document_filing_naming`, `nda_preparation`, `ai_hr_policy_assistant`, `prospect_account_research` |
| `classify_prioritize` | `customer_feedback_analysis`, `social_listening_brand_mentions`, `competitor_monitoring`, `online_review_monitoring_responses`, `pre_meeting_account_briefs`, `qbr_renewal_prep_briefs`, `free_trial_conversion_tracking` |
| `follow_up_chase` | `sales_follow_up_emails`, `invoice_follow_ups_ar_chasing`, `failed_payment_recovery`, `contract_renewal_reminders`, `no_show_cancellation_rescue`, `payment_dispute_tracking`, `github_pr_review_reminders_slack`, `closed_won_deal_handoffs` |
| `schedule_coordinate` | `meeting_scheduling`, `interview_scheduling`, `webinar_event_registration_flows`, `no_show_cancellation_rescue`, `ai_receptionist` |
| `reconcile_audit` | `payment_reconciliation`, `expense_receipt_tracking`, `month_end_close_checklists`, `budget_vs_actuals_alerts`, `subscription_billing_audits`, `payment_dispute_tracking`, `software_license_seat_audits`, `crm_data_entry_cleanup` |
| `report_digest` | `your_morning_briefing`, `weekly_kpi_reports`, `daily_sales_reports`, `sales_pipeline_reports`, `client_reporting`, `mrr_churn_reporting`, `daily_standup_digests`, `investor_update_drafts`, `social_media_engagement_reports`, `qbr_renewal_prep_briefs`, `release_notes`, `ai_executive_assistant` |
| `monitor_alert` | `sla_breach_alerts_clickup_slack`, `competitor_monitoring`, `online_review_monitoring_responses`, `social_listening_brand_mentions`, `error_triage_alert_digests`, `low_stock_inventory_alerts`, `deploy_failure_alerts`, `shipment_exception_alerts`, `regulatory_terms_change_monitoring`, `failed_payment_recovery` |
| `approval_publish` | `newsletter_drafting`, `email_list_segment_updates`, `release_notes`, `investor_update_drafts`, `social_media_engagement_reports`, `customer_support_email_replies`, `nda_preparation` |
| `sync_handoff` | `closed_won_deal_handoffs`, `crm_data_entry_cleanup`, `email_list_segment_updates`, `data_entry_into_any_app`, `employee_onboarding`, `employee_offboarding`, `sops_to_automated_playbooks`, `turning_emails_into_tickets` |
| `browser_data_entry` | `data_entry_into_any_app`, `invoice_data_extraction`, `document_filing_naming`, `software_license_seat_audits`, `ai_receptionist` |

Some IDs appear in more than one bucket because the catalogue cards describe composite workflows. The join must preserve many-to-many edges; a card is not forced into one atom. The 66-card source list remains authoritative; this table is an inferred decomposition layer.

### 5.3 Idea catalogue: 72 cards are offers, not blocks

The 72 ideas cluster into repeatable offer families rather than unique technical architectures:

| Offer family | Examples | Reusable atoms | Boundary |
|---|---|---|---|
| Agency/managed service | AI automation, SEO, lead generation, copywriting, paid ads, bookkeeping, recruiting, VA, concierge | intake, triage, follow-up, report, approval | Needs business-loop and monetization evidence; an idea does not specify a data contract |
| Content/media production | Podcast, short-form video, YouTube, newsletter, branding, press release, headshots, product photos | extract, classify, approval, publish, report | Rights, review and channel credentials are unresolved |
| Local lead/service operations | Local website/SEO, reputation, appointment setting, GBP, pay-per-lead, cleaning, landscaping, handyman, detailing | intake, triage, schedule, follow-up, sync | Local CRM/calendar/dispatch contracts are missing |
| Commerce/digital products | Template shop, downloads, affiliate, print-on-demand, dropshipping, Etsy, reselling, stock assets, prompt library | catalogue, fulfilment, monitor, support, report | Payment, inventory, fulfilment and rights boundaries are not specified |
| Education/membership | Course creator, coaching, membership, cohort workshops, paid newsletter | intake, schedule, follow-up, report, publish | Learner identity, content access and payments require direct review |
| CRM/knowledge services | CRM setup, niche directory, web data products, knowledge-base/chatbot setup, transcription/translation | intake, extract, classify, sync, report | Source quality, consent, data rights and maintenance are unresolved |
| Real-estate/hospitality services | Real-estate lead gen, Airbnb cohosting, travel planning, relocation concierge | lead intake, schedule, follow-up, document filing | Availability, guest/tenant data, external booking authority |
| Other catalogue ideas | AI receptionist, website flipping, KDP children’s books, web data products | browser, publish, monitor, report | Still catalogue-only; no direct atom evidence |

These families are an `I` derived from the 72 IDs; they are useful for reuse analysis but are not market-size or product-validation claims.

## 6. Baseline candidate join

### 6.1 What the baseline records actually contain

The baseline JSONL has 284 unique records. Each record includes repository URL, observed date, source lane/query, README/top-level content inspection, activity metadata, license state, disposition, capability tags, evidence URLs, reason, and a structured `vertical_atom_relevance` object. It does **not** contain an exact catalogue-industry foreign key or a full Block Contract admission receipt.

### 6.2 Broad vertical coverage from `vertical_atom_relevance`

Counts below are overlapping: one repository may belong to multiple broad families. They are content-backed candidate annotations, not 17-industry coverage proof.

| Broad corpus family | Total records | Candidate | Hold | Reference | Reject/unknown |
|---|---:|---:|---:|---:|---:|
| Knowledge-work operations | 249 | 144 | 92 | 12 | 1 |
| Cross-vertical client software | 162 | 84 | 66 | 7 | 5 |
| Developer tooling | 100 | 39 | 51 | 6 | 4 |
| Commerce | 92 | 52 | 38 | 2 | 0 |
| SaaS/internal tools | 72 | 53 | 15 | 4 | 0 |
| Operations | 56 | 25 | 26 | 5 | 0 |
| CRM/lead operations | 41 | 23 | 16 | 2 | 0 |
| Software supply chain | 41 | 25 | 12 | 3 | 1 |
| Finance/data-heavy operations | 34 | 28 | 5 | 1 | 0 |
| Code transformation | 32 | 19 | 11 | 2 | 0 |
| Design systems | 32 | 24 | 8 | 0 | 0 |
| Finance | 23 | 16 | 6 | 1 | 0 |
| Agent operations | 21 | 15 | 6 | 0 | 0 |
| Healthcare | 21 | 19 | 2 | 0 | 0 |
| Browser-operated software | 18 | 0 | 16 | 2 | 0 |

The corpus is strongest for cross-vertical infrastructure, scaffolds, data/API contracts, verification, and software supply chain. It is weak as a domain-specific catalogue for construction, hospitality, logistics, property management, law, mortgage, education, recruiting, and other individual industries. This is the primary expansion whitespace.

### 6.3 Atom-level candidate coverage

| Atom/capability annotation | Total | Candidate | Hold | Reference/reject/unknown | Interpretation |
|---|---:|---:|---:|---:|---|
| `scaffold-selection` | 76 | 45 | 24 | 7 | Strong discovery surface; no admitted scaffold |
| `assembly` | 70 | 44 | 22 | 4 | Strong research signal; no execution proof |
| `schema-normalization` | 66 | 47 | 16 | 3 | Good data/API primitive coverage; business semantics unresolved |
| `deployment` | 68 | 25 | 36 | 7 | Many deployment mentions, weak rollback/tenant proof |
| `auth-interface` / `data-binding` | 38 each | 25 each | 10 each | 3 each | Candidate host seams; provider compatibility unverified |
| `api-contract` / `data-introspection` / `read-model` | 34 each | 28 each | 5 each | 1 each | Best fit for a read-only join pilot |
| `verification` | 39 | 15 | 22 | 2 | Useful verifier references, not end-to-end evidence |
| `license-gate` / `provenance-gate` / `SBOM` / `attestation` | 41 each | 25 each | 12 each | 4 each | Evidence tooling exists; no local scan has been run |
| `approval` / `browser-operation` / `recovery` | 18 each | 0 | 16 | 2 | The strongest gap is authority/recovery, not discovery |

### 6.4 Candidate families and required join gates

| Candidate family | Example baseline records | Potential atom fit | Disposition | Required next gate |
|---|---|---|---|---|
| Next.js/SaaS/admin scaffolds | `nextacular/nextacular`, `imbhargav5/nextbase-nextjs-supabase-starter`, `juicycleff/ultimate-backend`, `uasoft-indonesia/badaso`, `InfyOmLabs/laravel-generator` | scaffold, CRUD/read-model, auth/data binding, deployment | Candidate leads | Pin commit; inspect stack/data/license/dependency closure; build isolated fixture; no admission from metadata |
| App-builder/assembly runtimes | `get-convex/chef`, `tastyeffectco/sandboxd`, `abhayymishraa/webbuilder` | intent, scaffold selection, assembly, preview | Candidate/hold | Separate builder-plane behavior from reusable block; test scope, egress and license |
| API/data contract tools | `OpenAPITools/openapi-generator`, `OpenAPITools/openapi-generator-cli`, `apple/swift-openapi-generator` | data introspection, schema normalization, read-model, API contract | Candidate leads | Confirm target language/host; generate only against synthetic schema; contract-test output |
| Verification/eval | `comet-ml/opik`, `confident-ai/deepeval`, `langwatch/langwatch`, `TheAgentCompany/TheAgentCompany` | verification, traceability, regression gate, reproducibility | Candidate/reference leads | Define Actionist-specific tasks and privacy-safe traces; no generic score transfer |
| Provenance/SBOM | `aquasecurity/trivy`, `anchore/syft`, `oss-review-toolkit/ort`, `microsoft/sbom-tool`, `sigstore/rekor` | license/provenance/SBOM/attestation | Candidate leads | Run one fixture scan; reconcile false positives and legal review |
| Typed transformation | `dsherret/ts-morph`, Babel transform records, codemod references | typed transform, adaptation, schema normalization | Candidate/reference | Fixture-backed dry-run only; no semantic migration or cross-language extraction |
| Browser/operation | `microsoft/playwright`, `bytebot-ai/bytebot`, `hangwin/mcp-chrome`, `pinchtab/pinchtab` | browser operation, approval, verification, recovery | Hold/reference | Canary app, scoped identity, no production credentials, adversarial prompt/egress test |

The baseline’s generated broad tags often attach infrastructure records to many industries. That is useful for recall and deliberately weak for precision. A candidate becomes a niche join only when a source-read dossier links its actual behavior to an atom’s required contract.

## 7. Commercial/private primitives and public evidence

### 7.1 First-party Actionist evidence

The Action Model documentation describes a documented workflow/agent plane: natural-language prompt to visual workflow, schedules/triggers, OS-level/browser actions, MCP/API/webhooks, history, and human confirmation patterns (`D`: [Actionist Overview](https://docs.actionmodel.com/actionist/actionist-overview), [Agents and Workflows](https://docs.actionmodel.com/actionist/agents-and-workflows), [Triggers](https://docs.actionmodel.com/actionist/triggers), observed 2026-08-26). The pages also contain marketing language and examples. They do not authenticate a client tenant, canonical SDK, database binding, subdomain deployment, or builder-to-app contract.

The useful join is therefore:

```text
Actionist documented primitives
  agents/workflows/schedules/history/tools/approval/browser
      → operations atoms: intake, triage, monitor, sync, report, browser
      → builder requirement: host authority, action contract, audit and recovery
```

This supports reuse of the authority/operation vocabulary, not a claim that the proposed app builder already exists.

### 7.2 Commercial/private reference primitives

| Source | Documented primitive | Atom join | Evidence limitation |
|---|---|---|---|
| Retool | Internal tools, operational dashboards, admin panels, CRM extensions, workflows, data/API connections | read-model, triage, reconcile, report, approval, sync | Vendor blog/case studies; claims about savings/adoption are not independent denominators (`D`: [internal tools](https://retool.com/blog/replace-internal-tools-with-retool), [enterprise patterns](https://retool.com/blog/enterprise-application-development-tools)) |
| Appsmith | Inventory dashboard with products, warehouses, suppliers, reorder points, POs, receipts, transfers | monitor, triage, sync, report | Template capability is documented; no Actionist binding, tenancy, or production proof (`D`: [inventory template](https://www.appsmith.com/template/inventory-management-dashboard)) |
| Frappe CRM | Lead capture, list/kanban, assignment, activity timeline, tasks, conversion to deal | intake, triage, follow-up, sync, report | Product/docs evidence; license, deployment and Actionist fit remain separate (`D`: [lead docs](https://docs.frappe.io/crm/lead), [Frappe CRM](https://frappe.io/crm)) |
| ERPNext | Payment reconciliation links existing payments/credits to invoices and supports review, allocation, reconcile, unreconcile and read-back | extract, reconcile, audit, report, recovery | Strong control-contract reference; not a safe copied block; jurisdiction/license/tenant/authority remain gates (`D`: [Payment Reconciliation](https://docs.frappe.io/erpnext/payment-reconciliation)) |
| NocoBase | CRM template file with SQL/backup restore flow | scaffold, CRUD, data binding, deployment | Template/restore is documented; edition/license/runtime and Actionist integration remain unverified (`D`: [NocoBase CRM](https://www.nocobase.com/en/solutions/crm)) |
| Plane | Project/issue workflows, imports, automation, planning and execution surface | intake, triage, sync, report, approval | Platform reference; no Actionist contract or block admission (`D`: [Plane](https://plane.so/)) |

### 7.3 Public demand and friction signals

The first-pass public-signals packet is retained as the bounded evidence base: it contains first-party sources, Reddit, X, YouTube, HN/Indie Hackers, blog and comparison signals with access and selection limitations (`E`: `research/actionmodel-builder-research-2026-08-26/outputs/public-signals.md`). This lane does not re-count that packet as adoption proof.

The recurring public/first-party pattern is:

- teams need internal operational tools, admin panels, dashboards, CRM/ERP extensions, review queues, and workflow-specific apps;
- system-of-record replacement is riskier than a governed read-model or workflow extension;
- portability, data access, approvals, auditability, maintenance and deployment boundaries recur more often than “generate a pretty screen”;
- public demos prove attention; they do not prove retention, production outcome, security or cost per accepted outcome.

The strongest independent falsifier for this lane is not a new vendor count. It is a held-out niche-to-candidate evaluation: if atom-level joins do not predict candidate fit better than broad category labels, the graph should remain an audit index rather than a retrieval matcher.

## 8. Local SISO precedents by priority vertical

### Finance

`research/packs/source-files/finance-ops-research.md` records the deepest local finance analysis (`E`): the finance atom requires invoice/receipt/vendor/customer/payment/ledger/exception/approval/message entities; ledger writes, write-offs, disputes, chase messages and close sign-off require finance authority; hash/source, totals/currency/duplicate/tolerance checks, post-write read-back and send receipts are required. The report explicitly keeps finance candidates as references/holds and says no candidate is admitted.

Useful local precedents:

- SISOCRM payment provider facts and webhook tests: event identity, unique external IDs, status, attempts, error visibility and retry handling; adapter reference, not a ledger.
- AutoSaaS finance process run: invoice capture, approval, reconciliation, receipt matching, close, tax export, audit trail; process/scaffold evidence with `build allowed false`.
- SISOCRM finance radar: candidate discovery and source-read matrix; not complete provenance or rollback evidence.

### Operations

Operations has the best first-pilot shape because a read-only exception/read-model can exercise intake, triage, report, data binding, verification, tenant boundaries and evidence without requiring external writes. The local synthesis explicitly identifies operations as the safer provisional sandbox (`E`: `outputs/research-synthesis.md`).

The join is:

```text
request/event → normalize → classify/route → read authoritative state
  → show exception/owner queue → report/digest → audit
```

Candidate families are Next.js/SaaS/admin scaffolds, API/data introspection tools, read-model contracts, and verification/trace tooling. The missing pieces are exact tenant/auth/data/deploy contracts and an executed fixture.

### CRM/lead

The CRM/RevOps packet identifies SISOCRM, Payload lead intake, Chatwoot, listmonk, Activepieces, Atomic CRM, Frappe CRM, Cal.diy, Hi.Events and ERPNext as validation targets, not admitted blocks (`E`: `research/packs/source-files/crm-revops-research.md`). CRM/lead has high reuse because lead intake, status, assignment, follow-up, scheduling and reporting recur across many industries. Its first join should be read-only pipeline visibility plus draft-only follow-up, not autonomous outbound messaging.

### Support

Support maps closely to intake → triage → SLA monitor → draft/approval → report. Public/product evidence supports the workflow shape, but the corpus has no strong support-specific domain family and no Actionist live contract. Support is a good second synthetic atom set if a message sandbox and approval semantics are available.

### Other verticals

Construction, hospitality, logistics, property, law, mortgage, recruiting, healthcare and education have clear catalogue jobs but insufficient domain-specific candidate edges in the baseline corpus. The correct status is `coverage_gap` or `reference_needed`, not “no solution.”

## 9. Negative space and unresolved joins

### 9.1 Coverage whitespace

| Gap | Evidence | Impact | Next gate |
|---|---|---|---|
| Exact 17-industry mapping | Baseline records use broad families, not catalogue IDs | Candidate ranking may over-generalize | Add explicit industry edges only after content/source review |
| Domain-core repositories | Corpus is heavy on builder/scaffold/infra/eval; few invoice/ticket/logistics/property/legal primitives | Reuse thesis may be mistaken for domain coverage | Expansion GitHub lane: vertical-specific source reads and negative-space report |
| Healthcare/legal/mortgage data | Catalogue has high-sensitivity jobs; no authenticated data/authority model | Risk and evidence burden are high | Keep reference-only; require privacy/authority contract before pilot |
| Logistics/construction/hospitality/property | Demand summaries exist; candidate joins are weak/absent | Cannot justify a niche block | Search bounded domain primitives; preserve unknown if no direct source |
| Support-specific data model | Action pattern is clear; ticket/SLA candidate edge is thin | Message and SLA contracts unproven | Direct-source review of support primitive plus synthetic fixture |
| Ideas → technical blocks | 72 ideas are offer surfaces, not normalized jobs | Business idea count can inflate perceived coverage | Decompose each offer into business loop + monetization event + atoms |

### 9.2 Contract whitespace

- Actionist API/auth/data/deployment/tenant/approval/token contract is still `U`.
- The baseline has no executed license/SBOM scan; license fields are evidence inputs, not clearance.
- No candidate has a complete source → adaptation → build → browser/visual → owner → rollback chain.
- Browser/approval/recovery records are overwhelmingly hold/reference, not candidates.
- A broad corpus relevance tag is not semantic domain equivalence.
- No client data or production database may be used to fill these gaps.

### 9.3 Candidate false-positive patterns

The baseline counter-review shows likely false-positive modes:

1. A repository is tagged for a vertical because it is a generic scaffold, not because it contains that domain behavior.
2. A README mention of “AI,” “dashboard,” or “workflow” inflates capability tags.
3. A permissive license declaration says nothing about transitive assets, generated files, or legal compatibility.
4. A complete app is not necessarily extractable as a block; its business invariants may be inseparable from its runtime.
5. A browser or sandbox reference does not provide a typed approval/recovery contract.

These are reasons to keep the join edges evidence-typed and to measure precision on held-out atoms.

## 10. Priority scoring and archetype comparison

### 10.1 Scoring rubric

Score each archetype from 0–5 on:

- **Urgency:** cost of delay or exception aging.
- **Repeatability:** frequency and regularity of the atom.
- **Reuse:** number of industries/teams that can share the capability bundle.
- **Evidence readiness:** source/fixture/contract evidence already available.
- **Risk:** data sensitivity and irreversibility; higher is worse.
- **Evidence burden:** difficulty of proving correctness, rights, authority and recovery; higher is worse.

The composite is intentionally transparent rather than pretending to be a market model:

```text
priority = urgency + repeatability + reuse + evidence_readiness
           - risk - evidence_burden
```

### 10.2 Leading archetypes

| Archetype | Urgency | Repeatability | Reuse | Evidence readiness | Risk | Evidence burden | Priority read | Recommended scope |
|---|---:|---:|---:|---:|---:|---:|---|---|
| Operations read-model/exception desk | 4 | 5 | 5 | 3 | 2 | 2 | Highest provisional | Synthetic/read-only; no writes |
| Support intake/SLA/draft queue | 4 | 5 | 5 | 3 | 3 | 2 | High provisional | Synthetic ticket data; draft-only messages |
| CRM/lead pipeline/read-model | 4 | 5 | 5 | 3 | 3 | 3 | High but authority-sensitive | Read-only pipeline + draft follow-up |
| Finance evidence/reconciliation | 5 | 5 | 4 | 4 | 5 | 5 | High value, high burden | Staged evidence and reconciliation; ledger authoritative |
| Engineering CI/PR/release desk | 4 | 4 | 4 | 3 | 4 | 3 | Medium-high | Read-only events and draft actions |
| Ecommerce inventory/support | 4 | 5 | 4 | 3 | 4 | 4 | Medium | Inventory read model; no order/payment writes |
| Logistics exception/POD desk | 5 | 4 | 4 | 2 | 4 | 4 | Medium/coverage gap | Synthetic shipment events; no carrier booking |
| Healthcare appointment/admin | 5 | 4 | 3 | 2 | 5 | 5 | Defer | Do not use sensitive data; contract first |
| Legal/mortgage/insurance document flows | 5 | 4 | 3 | 2 | 5 | 5 | Defer | Reference only until authority/privacy evidence |
| Construction/property/hospitality | 4 | 4 | 3 | 1 | 4 | 4 | Coverage expansion | Add domain source reads before pilot |

These values are `I` based on local demand summaries, atom reuse, existing local research, and documented primitives. They are not customer interviews, revenue data, or live outcome measurements.

## 11. Smallest falsifiable synthetic join pilot

### 11.1 Pilot definition: `P0-NICHE-JOIN-001`

**Question:** Does an atom-level join produce a more useful and more honest candidate set than broad “AI app builder” or industry-label retrieval, while preserving evidence and safety boundaries?

**Scope:** 12 synthetic scenarios across operations, support, CRM/lead, and finance; three scenarios per archetype. Each scenario is a structured solution atom with no client data:

- two read-only/reporting cases;
- one triage/exception case;
- one document/extraction or reconciliation case;
- one approval/draft case;
- one cross-system sync case;
- repeated variants with different surface language but the same underlying atom.

**Candidate pool:** the immutable 284-record baseline, plus any expansion-lane records that arrive with complete content-backed JSONL fields. Do not add a repository merely because it is mentioned in a search result.

**Join conditions:** compare three retrieval keys:

1. industry label only;
2. broad capability tags only;
3. atom + required contract families + capability tags.

### 11.2 Pre-registered outputs

| Output | Required evidence |
|---|---|
| Atom records | 12 valid records with outcome, trigger, state, decision, side effect, authority, verification, recovery, audit |
| Candidate edges | For each scenario, top-5 candidates with URL, observed date, disposition, license state, reason and next gate |
| Coverage/whitespace | Candidate or explicit gap for every atom; no silent empty result |
| Precision judgment | Independent reviewer marks whether each top-3 candidate actually supports the required capability/contract |
| Evidence quality | `E/D/I/U` and confidence for every edge; source limitations preserved |
| Safety classification | Read-only, staged, draft-only, or external-side-effect; no admitted or production state |
| Decision memo | Compare retrieval keys and record false positives/false negatives |

### 11.3 Proposed pass criteria

These thresholds must be frozen before running the pilot; they are not observed results.

- 100% of the 12 scenarios have a complete atom contract.
- 100% of candidate edges retain a source URL or local evidence path and an explicit disposition.
- At least 10/12 scenarios have a candidate or a defensible reference primitive; the remaining scenarios must have named whitespace and a next research gate.
- Atom+contract retrieval has at least 80% top-3 capability-fit precision under independent review and materially fewer false positives than industry-only retrieval.
- No unknown/unlicensed/copy-risk candidate is presented as reusable; such records remain hold/reference/reject.
- At least one candidate family per archetype has a stated data, UI, action, evidence and recovery boundary, even if the boundary is `not available`.
- The packet produces no “admitted block” verdict and uses no client data.

### 11.4 Kill criteria

Stop the join experiment and revise the graph if any of these occurs:

- atom+contract retrieval is no more precise than industry-only retrieval;
- broad corpus annotations are so generic that independent reviewers cannot distinguish capability fit from keyword overlap;
- more than 2/12 scenarios require invented data/authority assumptions;
- any candidate with unknown or incompatible rights is treated as reusable;
- candidate coverage is high only because generic scaffolds are counted as domain solutions;
- a scenario requires production credentials, client data, or an unauthorised side effect;
- the remaining evidence burden cannot be stated as a bounded next gate.

## 12. Decision matrix by atom and vertical

| Atom | Best initial verticals | Candidate primitive families | Evidence state | First safe mode | Hard stop |
|---|---|---|---|---|---|
| Intake/normalize | Operations, support, CRM, property, real estate | Forms/inbox/read-model/admin scaffolds | `E/I` | Synthetic read-only intake | Unknown identity/tenant or duplicate handling |
| Triage/route | Operations, support, IT, logistics, recruiting | CRUD queue, rule/policy, owner/SLA UI | `E/I` | Queue/read-only + simulated assignment | Unreviewed high-impact decisions |
| Extract/structure | Finance, mortgage, legal, recruiting, healthcare | Parser/OCR/reference, schema validation | `E/I/U` | Immutable synthetic documents + staged fields | Auto-posting, regulated/privileged data |
| Classify/prioritize | Support, sales, marketing, SaaS | Eval/trace, rule engine, review queue | `I/U` | Advisory labels and human review | Model decision treated as authority |
| Follow-up/chase | CRM, finance, insurance, property, real estate | CRM/activity, scheduler, draft messages | `E/I` | Draft-only | Unapproved outbound or financial/legal commitment |
| Schedule/coordinate | Healthcare, recruiting, education, hospitality | Calendar/schedule, forms, reminders | `E/D` | Synthetic calendars and notifications | Sensitive booking/cancellation without approval |
| Reconcile/audit | Finance, ecommerce, logistics, IT | Read-model, matching/report, audit/event | `I/U` | Synthetic records, no ledger writes | Source-of-truth or tolerance unknown |
| Report/digest | All teams; especially operations, finance, SaaS | Dashboard/report/read-model, trace | `E/D` | Read-only report with source links | Stale/unrecomputed numbers |
| Monitor/alert | IT, SaaS, ecommerce, logistics, marketing | Schedulers, webhook/events, alert queues | `E/D` | Synthetic events and dedupe | Unbounded polling or noisy alert loop |
| Approval/publish | Marketing, finance, legal, support, product | Draft/diff/approval UI, audit | `E/D/I` | Simulated approval, no external send | Silence treated as approval |
| Sync/handoff | CRM, sales, construction, property, HR | API/field mapping/event contracts | `E/D/I` | Mock provider + read-back | Duplicate or conflicting writes |
| Browser data entry | Any API-less vertical; IT/support/property | Browser runner, scoped session, evidence capture | `E/D/U` | Canary app with no production credentials | Secret egress, ambiguous action, missing recovery |

## 13. Verification and callback evidence

### 13.1 Artifact checks

Before callback, the following must pass:

```text
test -f research/actionmodel-builder-research-2026-08-26/outputs/niche-atom-block-join.md
grep/structured inspection confirms all 12 task slots are represented
structured inspection confirms 17 industry rows, 12 atom rows, 284 baseline records referenced
artifact contains explicit E/D/I/U posture, limitations, negative space, pilot, kill criteria
no product implementation, repository copy, client-data use, or admission claim is introduced
git diff --check passes for the artifact
```

The JSONL baseline was read-only validated during this lane: 284 unique owner/name records, every record has structured `vertical_atom_relevance`, and the disposition/capability counters in §6 reproduce from the file. The counts are evidence about the baseline file as observed; they are not a claim about the full GitHub universe.

### 13.2 Source register

#### Local baseline and first-pass evidence

- `research/actionmodel-builder-research-2026-08-26/expansion/EXPANSION-PROGRAM.md` — phase rules and lane tasks; observed 2026-08-26.
- `research/actionmodel-builder-research-2026-08-26/expansion/expansion-state.json` — expansion baseline/targets and lane status; observed 2026-08-26.
- `research/actionmodel-builder-research-2026-08-26/outputs/github-corpus.jsonl` and `github-corpus-report.md` — 284 content-inspected records and dispositions; observed 2026-08-26.
- `research/actionmodel-builder-research-2026-08-26/outputs/public-signals.md` — bounded public adoption/friction signals and limitations; observed 2026-08-26.
- `research/actionmodel-builder-research-2026-08-26/outputs/first-principles-framework.md` — atom/Block Contract/evidence/pilot baseline; observed 2026-08-26.
- `research/actionmodel-builder-research-2026-08-26/outputs/research-synthesis.md` — first-pass decision ledger and next gates; observed 2026-08-26.
- `research/actionmodel-long-run/outputs/verticals/catalogue.json`, `atoms-001.json`, `pilot-offers-001.json`, `CURRENT.md`, and `status.json` — catalogue, atoms, pilot priorities and contradictions; observed 2026-08-26.
- `research/packs/source-files/finance-ops-research.md` — finance control contract and local precedents; observed 2026-08-26.
- `research/packs/source-files/crm-revops-research.md` — CRM/lead candidate and atom research; observed 2026-08-26.
- `research/packs/source-files/reusable-block-framework-report.md` — block eligibility and staged adaptation boundaries; observed 2026-08-26.
- `design/BLOCK-FRAMEWORK.md`, `design/BUILDER-DESIGN.md`, `design/PRINCIPLES.md`, `design/block-contract.schema.json` — local contract/design hypotheses; observed 2026-08-26.

#### Dated first-party external sources

- [Actionist Overview](https://docs.actionmodel.com/actionist/actionist-overview), [Agents and Workflows](https://docs.actionmodel.com/actionist/agents-and-workflows), [Triggers](https://docs.actionmodel.com/actionist/triggers) — documented workflow, schedule, tool, history and approval primitives; observed 2026-08-26; `D`, not authenticated.
- [Retool internal tools](https://retool.com/blog/replace-internal-tools-with-retool) and [enterprise application patterns](https://retool.com/blog/enterprise-application-development-tools) — internal operations, CRM extension, dashboard and governance claims; observed 2026-08-26; vendor evidence.
- [Appsmith inventory dashboard](https://www.appsmith.com/template/inventory-management-dashboard) — inventory/supplier/warehouse/PO/transfer template capability; observed 2026-08-26; template documentation, not Actionist proof.
- [Frappe CRM lead docs](https://docs.frappe.io/crm/lead) and [Frappe CRM](https://frappe.io/crm) — lead capture, activity, assignment and conversion; observed 2026-08-26; product/docs evidence.
- [ERPNext payment reconciliation](https://docs.frappe.io/erpnext/payment-reconciliation) — payment/invoice matching, allocation, review, reconcile, unreconcile and read-back; observed 2026-08-26; control-contract reference, not reusable code admission.
- [NocoBase CRM template](https://www.nocobase.com/en/solutions/crm) — template-file/restore deployment shape; observed 2026-08-26; runtime/license/tenant boundary remains open.
- [Plane](https://plane.so/) — project/issue workflow and import/automation reference; observed 2026-08-26; platform reference only.

## 14. Lane return

**Completed slots:** RCH-NICHE-BLOCK-JOIN 1–12.  
**Artifact:** `research/actionmodel-builder-research-2026-08-26/expansion/outputs/niche-atom-block-join.md`  
**Coverage:** 17 industries, 12 teams, 66 use cases, 72 ideas, 12 atoms, 284 baseline repositories, 15 broad corpus vertical families, 30+ atom/capability families, 7 local asset groups, and 6 first-party commercial/product primitive families.  
**Top decisions:** preserve catalogue/crosswalk contradictions; use atom+contract edges instead of industry-only joins; operations read-model remains the safest synthetic pilot; finance has the deepest control evidence but highest burden; no baseline candidate is a block.  
**Evidence quality:** local corpus/vertical files are `E`; Actionist/vendor docs are `D`; niche-specific joins, scores, and pilot priority are `I`; authenticated Actionist contracts, expansion candidates, live capability, admission and client economics remain `U`.  
**Blockers:** expansion GitHub records have not yet landed; exact Actionist host/data/auth/deployment contract is unknown; no license/SBOM/build/admission receipt exists; domain-specific coverage is thin outside broad operations/finance/CRM/healthcare families; public adoption denominators remain unavailable.  
**Next research gates:** run `P0-NICHE-JOIN-001` on synthetic atoms; reconcile expansion candidate records; direct-source review of one candidate family per archetype; obtain Actionist contract facts; keep all edges non-admitted.  
**Commands/sources used:** project boot inspection, `preflight_lessons.py`, read-only JSONL/catalogue counters, local packet inspection, and built-in web research fallback after the Perplexity wrapper’s missing `OPENROUTER_API_KEY` condition; all sources are listed in §13.

**Research-only conclusion:** the join is useful enough to guide the next bounded evidence run, but it is not a production registry, not an exhaustive census, not a license decision, and not proof that Actionist can build or operate any of the mapped workflows.
