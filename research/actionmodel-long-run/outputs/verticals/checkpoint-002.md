# AM-VERTICALS checkpoint-002

**Recorded:** 2026-08-26 (Asia/Ho_Chi_Minh)  
**State:** use-case crosswalk complete; idea joins still partial  
**Owner:** AM-VERTICALS  
**Predecessor:** `checkpoint-001.md`  
**Machine artifacts:** `catalogue.json`, `atoms-001.json`, `crosswalk-batch-001.json`, `crosswalk-batch-002.json`, `pilot-offers-001.json`

## Batch result

The second batch adds the exact remaining 27 use-case cards as edges `E025`–
`E051`. All 66 catalogue use cases are now represented across the two scored
crosswalk files. Combined coverage is machine-verified as:

| Dimension | Combined coverage |
|---|---:|
| Industries | 17/17 |
| Teams | 12/12 |
| Use cases | 66/66 |
| Ideas | 31/72 |
| Reusable atoms | 12 |
| Edges | 51 |

The idea axis deliberately remains partial: the first-party page presents idea
cards and expertise tags, but it does not publish authoritative relationships to
every industry/team/use-case edge. The 31 ideas in the machine crosswalk are
explicit, useful hypotheses with `confidence: inferred`, not first-party joins.

## Exact edges covered in batch-002

Every row has the full `industry_ids × team_ids × use_case_ids × idea_ids`
shape, the reusable `atom_ids`, a seven-axis score, `next_gate`, evidence date,
and first-party source URL keys in `crosswalk-batch-002.json`.

| Edge | Use-case ID | Industry IDs | Team IDs | Idea IDs | Atom IDs |
|---|---|---|---|---|---|
| `E025` | `turning_emails_into_tickets` | ecommerce, healthcare, SaaS, IT services | support, operations, front office | chatbot setup, VA, knowledge base | intake, triage, handoff, approval |
| `E026` | `your_morning_briefing` | SaaS, marketing agencies, accounting | founders, operations, finance | personal concierge, VA, coaching | intake, triage, report, approval |
| `E027` | `weekly_kpi_reports` | SaaS, marketing agencies, ecommerce | founders, finance, marketing | automation agency, social manager, local SEO | monitor, report, approval |
| `E028` | `daily_sales_reports` | SaaS, real estate, insurance | sales, founders | lead generation, appointment setting, real-estate lead gen | monitor, chase, report |
| `E029` | `client_reporting` | marketing agencies, IT services, accounting | marketing, founders, support | social manager, VA, coaching | extract, report, approval |
| `E030` | `mrr_churn_reporting` | SaaS, course creators, ecommerce | founders, finance, sales | email marketing, chatbot, lead generation | monitor, reconcile, report, approval |
| `E031` | `daily_standup_digests` | SaaS, IT services, construction | engineering, product, operations | automation agency, VA, prompt library | extract, handoff, report, approval |
| `E032` | `investor_update_drafts` | SaaS | founders, finance, product | pitch deck, coaching, VA | extract, report, approval |
| `E033` | `subscription_billing_audits` | SaaS, ecommerce, course creators | finance, operations, support | bookkeeping, email marketing, VA | monitor, reconcile, report, approval |
| `E034` | `payment_dispute_tracking` | ecommerce, SaaS, healthcare | finance, support, legal | bookkeeping, VA, CRM setup | intake, triage, reconcile, chase, approval |
| `E035` | `social_listening_brand_mentions` | marketing agencies, ecommerce, SaaS | marketing, founders, product | social manager, reputation, local SEO | monitor, extract, report, approval |
| `E036` | `error_triage_alert_digests` | SaaS, IT services, ecommerce | engineering, IT, support | automation agency, VA, prompt library | monitor, triage, extract, handoff, report |
| `E037` | `low_stock_inventory_alerts` | ecommerce, hospitality, construction | operations, finance, support | dropshipping, Etsy, cleaning | monitor, triage, handoff, chase |
| `E038` | `deploy_failure_alerts` | SaaS, IT services | engineering, operations, product | automation agency, prompt library, VA | monitor, triage, handoff, approval |
| `E039` | `regulatory_terms_change_monitoring` | law, insurance, healthcare, IT services | legal, operations, marketing | knowledge base, VA, proposal/bid | monitor, extract, report, approval |
| `E040` | `nda_preparation` | law, SaaS, marketing agencies | legal, front office, sales | proposal/bid, copywriting, VA | intake, extract, approval, chase |
| `E041` | `ai_hr_policy_assistant` | SaaS, IT services, education | HR, front office, support | chatbot, knowledge base, VA | intake, extract, classify, approval |
| `E042` | `customer_feedback_analysis` | SaaS, ecommerce, course creators | product, marketing, support | chatbot, knowledge base, social manager | extract, classify, report, chase |
| `E043` | `sops_to_automated_playbooks` | construction, logistics, healthcare, IT services | operations, product, front office | automation agency, VA, prompt library | extract, classify, handoff, approval, browser |
| `E044` | `employee_offboarding` | SaaS, IT services, healthcare | HR, IT, legal | VA, automation agency, CRM setup | intake, triage, handoff, approval, browser |
| `E045` | `software_license_seat_audits` | SaaS, IT services, ecommerce | IT, finance, operations | automation agency, VA, CRM setup | monitor, reconcile, report, approval |
| `E046` | `release_notes` | SaaS, IT services, marketing agencies | product, engineering, marketing | copywriting, automation agency, prompt library | extract, report, approval, handoff |
| `E047` | `newsletter_drafting` | marketing agencies, SaaS, course creators | marketing, founders, product | paid newsletter, local newsletter, email marketing | extract, report, approval, chase |
| `E048` | `email_list_segment_updates` | ecommerce, SaaS, course creators | marketing, sales, operations | email marketing, CRM setup, social manager | classify, handoff, browser, approval |
| `E049` | `webinar_event_registration_flows` | education, course creators, marketing agencies | marketing, operations, front office | cohort workshops, online course, VA | intake, schedule, chase, handoff |
| `E050` | `ai_executive_assistant` | SaaS, marketing agencies, accounting | founders, front office, operations | personal concierge, VA, coaching | intake, triage, schedule, report, approval |
| `E051` | `ai_receptionist` | healthcare, hospitality, property management, IT services | front office, support, operations | AI receptionist, personal concierge, VA | intake, triage, schedule, chase, browser, approval |

The 12 atom IDs covered are:

`intake_normalize`, `triage_route`, `extract_structure`, `classify_prioritize`,
`follow_up_chase`, `schedule_coordinate`, `reconcile_audit`, `report_digest`,
`monitor_alert`, `approval_publish`, `sync_handoff`, `browser_data_entry`.

## Evidence and status

External catalogue evidence was observed on 2026-08-26 from:

- https://actionist.ai/solutions/industries
- https://actionist.ai/solutions/teams
- https://actionist.ai/solutions/use-cases
- https://actionist.ai/solutions/ideas

Workflow and execution-plane evidence:

- https://docs.actionmodel.com/actionist/agents-and-workflows
- https://docs.actionmodel.com/actionist/triggers
- https://docs.actionmodel.com/actionist/agent-calendar-schedules
- https://docs.actionmodel.com/actionist/agent-history
- https://actionist.ai/

Local evidence:

- `research/actionist-solutions-sweep-spec-2026-08-26.md`
- `research/actionmodel-deep-dive/product-ecosystem.md`
- `research/actionmodel-deep-dive/docs-index.md`
- `research/actionist-teardown-2026-08-25.md`
- `research/github-sweep/SWEEP-MERGED.json`

All batch-002 edges are `capability_status: catalog`, `confidence: inferred`,
`authenticated_live: false`, and `implemented: false`, because every one of
these remaining cards is marked “Coming soon”. No detail URL has been invented
for those cards. A candidate repo or licence signal remains a held candidate,
not an admitted block or legal clearance.

## Pilot and offer implication

The pilot ranking is unchanged and remains recorded in `pilot-offers-001.json`:

1. **Document/finance-heavy — invoice-to-cash control:** 28/35; highest-value
   first sandbox if finance write/approval boundaries can be obtained.
2. **Operations-heavy — request-to-dispatch desk:** 27/35; safest broad
   operational sandbox and strongest atom reuse.
3. **CRM/lead-heavy — lead-to-meeting pipeline:** 28/35; high value/frequency,
   but requires consent, outbound-send, and CRM/calendar read-back controls.

The ten candidate offers are unchanged, all `unverified`, and each has a job,
outcome metric, trigger, data entities, candidate blocks, and next gate. The
best first three offers are AR chase/reconciliation, request intake/routing, and
lead response/booking because they exercise the shared atoms while producing a
measurable client result.

## Next gate

`direct_source_review`: turn the three pilots into target-specific test packets.
Collect source-of-truth, auth/session scope, allow-listed writes, idempotency
keys, approval owner, post-action read-back, rollback boundary, and audit event
requirements before any authenticated/live or implemented status is considered.
