# AM-VERTICALS checkpoint-001

**Recorded:** 2026-08-26 (Asia/Ho_Chi_Minh)  
**State:** checkpointed; first atom/pilot batch landed  
**Owner:** AM-VERTICALS  
**Boundary:** only `research/actionmodel-long-run/outputs/verticals/`

## What is now durable

`catalogue.json` is the complete first-party inventory captured on 2026-08-26:

| Surface | Count | Catalogue status | Evidence status |
|---|---:|---|---|
| Industries | 17 | all `catalog` | observed card labels and summaries |
| Teams | 12 | all `catalog` | observed card labels and summaries |
| Use cases | 66 | 6 `documented`/linked; 60 `catalog`/`coming_soon` | no authenticated/live assertion |
| Ideas | 72 | all `catalog` | observed card labels |

The inventory is machine-checked with:

```sh
jq -e '(.industries|length)==17 and (.teams|length)==12 and (.use_cases|length)==66 and (.ideas|length)==72' \
  research/actionmodel-long-run/outputs/verticals/catalogue.json
```

It passed (`true`). The public catalogue is treated as demand evidence. The six
linked use-case routes are `documented`, not `authenticated` or `implemented`.

Primary external evidence, fetched/observed 2026-08-26:

- https://actionist.ai/solutions/industries — 17 industry cards.
- https://actionist.ai/solutions/teams — 12 team cards.
- https://actionist.ai/solutions/use-cases — 66 cards, six linked examples and 60 cards marked “Coming soon”.
- https://actionist.ai/solutions/ideas — 72 idea cards.
- https://docs.actionmodel.com/actionist/agents-and-workflows — documented workflow/editor concepts.
- https://docs.actionmodel.com/actionist/triggers — documented trigger families.
- https://docs.actionmodel.com/actionist/agent-calendar-schedules — documented schedules.

Local corroboration:

- `research/actionist-solutions-sweep-spec-2026-08-26.md`
- `research/actionmodel-deep-dive/product-ecosystem.md`
- `research/actionmodel-deep-dive/docs-index.md`
- `research/actionist-teardown-2026-08-25.md`
- `research/github-sweep/SWEEP-MERGED.json`

## Status discipline

This checkpoint keeps five states separate:

| State | Meaning in this lane |
|---|---|
| `catalog` | First-party card exists; it proves demand surface only. |
| `documented` | A linked recipe or first-party docs describe the capability. |
| `authenticated` | Not claimed: no authenticated Actionist run was available to this lane. |
| `implemented` | Not claimed: no runtime code or client workflow was built here. |
| `unverified` | Inferred mapping or candidate block requiring a direct gate. |

The specific crosswalk edges below are `inferred` mappings. Their Actionist
capability status is inherited from the strongest source card (`catalog` or
`documented`); `authenticated_live=false` and `implemented=false` for every
edge and pilot in this checkpoint.

## Reusable atom contract

Every atom is recorded as:

`outcome + trigger + state + decision + side effect + authority + verification + recovery + audit`

The first reusable map is:

| Atom | Outcome | Trigger / state | Decision / side effect | Authority / verification / recovery / audit |
|---|---|---|---|---|
| `intake_normalize` | Turn a message/file/event into a typed work item. | New inbound item; raw payload, tenant, requester, missing fields. | Complete/duplicate/safe? Create item or request missing data. | Owner approves consequential writes; required fields/source/duplicate checks; preserve original and route exceptions; log payload/version/actor/timestamps. |
| `triage_route` | Assign category, owner, queue, and SLA. | New item or state change; classification and confidence. | Route, escalate, or human-review; create assignment/alert. | Allow-listed routing; confidence/owner/SLA checks; return to unassigned queue; log rationale and override. |
| `extract_structure` | Convert documents/transcripts/emails to validated fields. | New artifact; raw source plus extracted values/confidence. | Continue or review low-confidence/missing fields; stage structured data. | Data owner approves record writes; schema/totals/source-span checks; quarantine/retry by artifact key; log hash/model/fields/reviewer. |
| `classify_prioritize` | Apply labels, urgency, risk, and next action. | Structured item or rule change; labels/confidence/policy flags. | Allow-listed action, approval, or exception; update queue/create review. | Advisory unless policy approved; rule trace/confidence/policy checks; reclassify from preserved input; log rule/model/override. |
| `follow_up_chase` | Move a stalled/time-sensitive item forward. | Aging, renewal, missing document, lead, or SLA threshold. | Draft/send/escalate/stop; message/task/follow-up. | Approval for first contact, money, legal, or non-allow-listed sends; recipient/template/consent/receipt; cancel/retry by key; log draft/approval/receipt. |
| `schedule_coordinate` | Keep people, slots, tasks, and reminders aligned. | Request, stage change, cancellation/no-show, or recurrence. | Select compliant slot and book/hold/remind. | Owner approves sensitive bookings/cancellations; calendar read-back/timezone/receipt; release hold/rebook; log availability/approval/event. |
| `reconcile_audit` | Compare records and explain matches/mismatches. | New payment/receipt/statement or close run; match/exception state. | Safe post/close or human exception; stage write/query. | Finance/data owner approves posting/write-off/dispute; totals/tolerance/read-back; preserve snapshots/reopen; log rules/before-after/approval. |
| `report_digest` | Produce a source-linked decision-ready report. | Schedule, completed batch, or request; period/freshness/anomalies. | Publish or mark partial; dashboard/recap/channel post. | Owner approves client-facing numbers; recompute/freshness/delivery checks; supersede/rerun frozen period; log query/period/version. |
| `monitor_alert` | Detect meaningful threshold/state changes. | Schedule/event/threshold; baseline/last alert/ack state. | New actionable alert vs duplicate/recovery/noise; alert/task/incident. | Remediation allow-list only; source/dedup/threshold/ack checks; suppress/recover/escalate; log poll/event/calculation/delivery. |
| `approval_publish` | Move a prepared action through explicit approval. | Draft/diff ready; approver/expiry/policy state. | Approve/revise/reject/defer; send/post/commit/file/write. | Named approver; exact payload/diff and post-read-back; cancel/compensate/supersede; log versions/identity/receipt/recovery. |
| `sync_handoff` | Carry validated state between systems/owners. | Status/new record/closed-won event; source/target mapping state. | Accept mapping or resolve conflict; create/update task/ticket/CRM. | Allow-listed fields; target read-back/IDs/no-duplicate; retry/compensate/surface conflict; log mapping/payload/ack. |
| `browser_data_entry` | Operate an API-less app under control. | Approved work item; session/page/target checkpoint. | Expected target and authorized action? Perform UI action or pause. | Named owner/session scope; UI read-back/screenshot/receipt; stop/rollback/uncertain queue; log session/action/page/approval/evidence. |

Atom capability is `documented` where Actionist docs describe the corresponding
workflow, trigger, approval, history, or browser-operation plane. The finance
matching and generic classification details remain `unverified` until a real
client/source contract is tested.

## Exact crosswalk edges in this checkpoint

The edge format is explicit across `industry_ids × team_ids × use_case_ids ×
idea_ids`; multiple values in a cell are an intentional many-to-many join.
`catalogue.json` is the ID source of truth.

| Edge | Industry IDs | Team IDs | Use-case IDs | Idea IDs | Atoms |
|---|---|---|---|---|---|
| `E001` | `accounting_firms`, `ecommerce`, `construction` | `finance_accounting` | `invoice_follow_ups_ar_chasing` | `bookkeeping_service`, `virtual_assistant_agency` | extract, chase, reconcile, approval |
| `E002` | `accounting_firms`, `construction`, `ecommerce` | `finance_accounting` | `invoice_data_extraction` | `bookkeeping_service`, `virtual_assistant_agency` | intake, extract, classify, approval |
| `E003` | `accounting_firms`, `ecommerce` | `finance_accounting` | `payment_reconciliation` | `bookkeeping_service` | extract, reconcile, approval, report |
| `E004` | `accounting_firms`, `construction`, `ecommerce`, `healthcare_medical_practices` | `finance_accounting`, `admin_front_office` | `expense_receipt_tracking` | `bookkeeping_service`, `virtual_assistant_agency` | intake, extract, reconcile, filing |
| `E005` | `accounting_firms`, `ecommerce`, `saas` | `finance_accounting`, `founders_executives` | `month_end_close_checklists`, `budget_vs_actuals_alerts` | `bookkeeping_service`, `virtual_assistant_agency` | triage, reconcile, monitor, report, approval |
| `E006` | `construction`, `property_management`, `hospitality`, `education_training` | `operations`, `admin_front_office`, `customer_support` | `request_intake_triage_across_teams`, `shared_inbox_sorting_routing` | `virtual_assistant_agency`, `cleaning_service`, `airbnb_cohosting` | intake, triage, classify, handoff, report |
| `E007` | `property_management`, `construction`, `hospitality`, `it_services_msps` | `operations`, `it`, `admin_front_office` | `data_entry_into_any_app`, `document_filing_naming` | `virtual_assistant_agency`, `airbnb_cohosting`, `cleaning_service` | extract, handoff, browser, approval |
| `E008` | `logistics_freight`, `ecommerce`, `construction` | `operations`, `customer_support` | `shipment_exception_alerts` | `virtual_assistant_agency`, `web_data_products` | monitor, triage, chase, handoff, report |
| `E009` | `property_management`, `hospitality`, `healthcare_medical_practices` | `operations`, `customer_support`, `admin_front_office` | `request_intake_triage_across_teams`, `meeting_scheduling`, `no_show_cancellation_rescue` | `airbnb_cohosting`, `cleaning_service`, `personal_concierge` | intake, triage, schedule, chase, browser |
| `E010` | `real_estate`, `insurance_agencies`, `saas` | `sales` | `lead_qualification_first_response`, `sales_follow_up_emails`, `meeting_scheduling` | `real_estate_lead_gen`, `lead_generation_agency`, `appointment_setting` | intake, extract, classify, chase, schedule, handoff, approval |
| `E011` | `insurance_agencies`, `real_estate`, `recruiting_staffing` | `sales`, `customer_support` | `lead_qualification_first_response`, `prospect_account_research` | `lead_generation_agency`, `appointment_setting`, `lead_list_service` | intake, extract, classify, chase, handoff |
| `E012` | `mortgage_brokers`, `insurance_agencies` | `sales`, `legal`, `finance_accounting` | `lead_qualification_first_response`, `document_filing_naming`, `contract_renewal_reminders` | `appointment_setting`, `lead_generation_agency`, `virtual_assistant_agency` | intake, extract, classify, chase, approval, browser |

Evidence for every edge: the relevant first-party index/detail URL in the
inventory plus `research/actionmodel-deep-dive/product-ecosystem.md` and
`research/actionist-solutions-sweep-spec-2026-08-26.md`. The six linked detail
URLs are recorded in `catalogue.json`; coming-soon cards intentionally point to
the index page only.

## Pilot archetypes scored

### 1. Document/finance-heavy — invoice-to-cash control

- **Job:** collect invoice/receipt evidence, extract fields, reconcile payments, and prepare approved follow-ups or posting exceptions.
- **Outcome metric:** invoice-to-review time, matched rate, exception aging, and close-cycle duration; baseline a 20-item sample before promising lift.
- **Trigger:** new approved inbox/drive artifact, payment arrival, aging threshold, or close schedule.
- **Data entities:** invoice, receipt, vendor, customer, payment, ledger entry, currency, exception, approval, message.
- **State/decision:** raw artifact → extracted fields → match/exception → approval; safe match/post/draft versus owner review.
- **Side effect/authority:** stage ledger/queue updates and draft chase; finance owner approves posting, write-off, dispute, and external financial messages.
- **Verification/recovery/audit:** hash/source link, schema/totals/currency/duplicate/tolerance checks and read-back; quarantine/retry by key, preserve snapshots, reopen exceptions; append extraction/match/approval/receipt events.
- **Score:** urgency 5, frequency 5, data availability 4, browser-only difficulty 3, approval risk 4, reusable coverage 4, client value 5; priority index **28/35**.
- **Capability status:** `unverified` composite; underlying cards are `catalog`, adjacent Actionist workflow/approval behavior is `documented`; authenticated/live and implemented are false.
- **Next gate:** `direct_source_review` — secure a disposable sandbox and prove 20 mixed cases end-to-end without production posting.

### 2. Operations-heavy — request-to-dispatch desk

- **Job:** capture requests from inbox/form/chat, classify and assign them, update the operational system, and publish a morning exception digest.
- **Outcome metric:** first-response time, unowned-request count, SLA attainment, and handoff completeness; baseline one queue.
- **Trigger:** new request/message/file, state change, SLA threshold, or morning schedule.
- **Data entities:** request, requester, site, work order, task, owner, SLA, attachment, status, acknowledgement, exception.
- **State/decision:** normalized request → owner/SLA → target write → acknowledgement; complete/duplicate/urgent/authorized browser action versus human review.
- **Side effect/authority:** create/update task/work order and notify requester; operations lead controls fields/queues, while dispatch, refund, commitment, or sensitive writes require approval.
- **Verification/recovery/audit:** required fields, duplicate key, owner acknowledgement, target read-back, SLA timer, receipt; return uncertain items to exception queue and retry idempotently; retain source, route rationale, UI evidence, and final state.
- **Score:** urgency 4, frequency 5, data availability 3, browser-only difficulty 4, approval risk 3, reusable coverage 5, client value 5; priority index **27/35**.
- **Capability status:** `unverified` composite; underlying cards are `catalog`, Actionist triggers/browser/history are `documented`; authenticated/live and implemented are false.
- **Next gate:** `direct_source_review` — use a low-risk queue and prove ten synthetic requests through read-back and recovery.

### 3. CRM/lead-heavy — lead-to-meeting pipeline

- **Job:** detect/enrich a lead, score it against an approved rubric, draft/respond, book a meeting, and keep the CRM complete.
- **Outcome metric:** time-to-first-response, qualified-meeting rate, duplicate-send rate, and CRM completeness; establish a baseline before claiming lift.
- **Trigger:** new portal/form/email lead, stale-lead threshold, trial event, or pre-meeting schedule.
- **Data entities:** lead, contact, account, source, consent, qualification, activity, opportunity, calendar event, owner, message, handoff.
- **State/decision:** source event → identity/consent → qualification → approved response/slot → CRM handoff; qualify/nurture/disqualify and send/book/write versus review.
- **Side effect/authority:** update allow-listed CRM fields, draft/send approved first response, create calendar event, and create owner task; sales owner governs messaging/claims and high-value or regulated decisions.
- **Verification/recovery/audit:** identity/duplicate/consent/rubric/calendar/CRM read-back and delivery receipt; suppress duplicates, preserve history, undo staged writes, retry by lead/event key; log source/enrichment/score/approval/diffs/acknowledgement.
- **Score:** urgency 5, frequency 5, data availability 4, browser-only difficulty 4, approval risk 4, reusable coverage 5, client value 5; priority index **28/35**.
- **Capability status:** `unverified` composite; underlying cards are `catalog`, Actionist workflow/approval/browser operation is `documented`; authenticated/live and implemented are false.
- **Next gate:** `direct_source_review` — obtain sandbox CRM/calendar and synthetic leads; prove 20 duplicate-safe, opt-out-safe cases.

## Held claims and unresolved questions

- No Actionist authenticated session, API/SDK contract, or client database contract was available to this lane. `authenticated` and `implemented` remain unclaimed.
- Browser-only difficulty is scored as risk, not capability proof; direct UI read-back must be tested per target app.
- Candidate repositories in the local sweep are not admitted blocks. A GitHub license label is not legal clearance; pinned commit, source/license scan, build, smoke, and adaptation evidence are still required.
- The catalogue does not publish authoritative industry/team/use-case/idea joins. The edge mappings above are explicit, useful hypotheses with `inferred` confidence.
- The next batch must add the remaining use-case IDs to atoms before expanding the research universe.

## Next queue pointer

See `queue.md`. Immediate next item: finish the scored crosswalk artifact for the
remaining catalogue cards, then direct-source-review the highest-risk pilot
boundary (finance writes, CRM sends, and browser-only operations).
