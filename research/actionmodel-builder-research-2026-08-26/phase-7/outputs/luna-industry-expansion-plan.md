# Luna 17-industry repository expansion plan

Lane: industry-specific repository expansion
Researcher: Luna explorer C / Linnaeus
Status: planning and discovery leads; parent source verification pending
Boundary: read-only research. No repository was cloned, source copied, executed, built, deployed, benchmarked, scanned, or admitted.

## Evidence baseline

The current corpus contains 17 industries, 10 dimensions, 170 exact cells, 17,000 merged observed slots, 216 distinct repository URLs, 3,346 industry-repository pairs, and only 270 pairs with all 10 dimensions. The closure target is 1,700 complete pairs, leaving 1,430.

The ten dimensions are demand_atom_fit, workflow_behavior, data_model, integration_surface, ui_assembly, agent_authority, verification_eval, provenance_rights, runtime_deployment, and economics_maintenance.

A repository is not complete because it appears in a cell. It counts only when all ten dimensions have repository-specific evidence, a source identity/date, limitation, and falsifier or next gate.

## Industry discovery buckets

Each industry gets five independent discovery buckets with a working quota of 20 defensible identities per bucket. Underfilled buckets remain explicit gaps; weak or duplicate repositories are not used to pad a quota.

| Industry | Read-only wedge | Five discovery buckets |
|---|---|---|
| Accounting firms | Close-exception desk: transactions, ledgers, invoices, documents | accounting software/GL; invoice OCR/AR; bank feed/payment reconciliation; finance dashboard/close checklist; audit trail/provenance/evaluation |
| Construction | Project-exception desk: jobs, schedules, change orders, subcontractors, progress claims | construction PM/job costing; change orders/subcontractors; schedules/site risk; construction CRM/dashboard; construction agent/audit/evaluation |
| Course creators | Learner-progress desk: enrollments, lessons, attendance, questions, cohorts | course/cohort platforms; learning progress/lesson drip; LMS/enrollment APIs; education dashboard/scaffold; learning evaluation/provenance |
| Ecommerce | Commerce-exception desk: orders, inventory, carts, payments, tickets | ecommerce/store admin; inventory/cart/order exceptions; Shopify/Magento/payments; commerce dashboard; observability/fraud/provenance |
| Education and training | Enrollment-and-attendance desk: registrations, sessions, attendance, tuition | education enrollment/SIS; attendance/registration/tuition; LMS/student-record APIs; school dashboard; privacy/evaluation/tenant isolation |
| Healthcare and medical practices | Synthetic administrative read model: appointments, consent, attendance, billing exceptions | clinic/practice management; no-show/scheduling/billing; FHIR/HL7/healthcare APIs; clinic dashboard; privacy/consent/evaluation |
| Hospitality | Stay-operations desk: reservations, rooms, housekeeping, maintenance, feedback | reservation/hotel management; housekeeping/room status; booking APIs; hotel dashboard; reservation audit/data privacy |
| IT services and MSPs | Service-health desk: tickets, SLA clocks, backups, onboarding, alerts | helpdesk/MSP/ITSM; SLA/backup/incident monitoring; ITSM/asset APIs; service dashboard/tenant management; privileged access/security/rollback |
| Insurance agencies | Renewal-and-document desk: policies, renewals, conditions, certificates, leads | claims/policy administration; renewals/certificates; claims/document APIs; insurance CRM/dashboard; regulated data/evaluation/provenance |
| Law firms | Matter-intake desk: intake, conflicts, document index, billing age | legal practice/matter management; conflict checks/legal intake; document/case/billing APIs; legal CRM/dashboard; privilege/security/evaluation |
| Logistics and freight | Shipment-exception desk: tracking, bookings, delivery windows, proof of delivery | logistics/TMS/freight; shipment exceptions/POD; carrier/tracking/EDI APIs; logistics dashboard; event ordering/risk/provenance |
| Marketing and social-media agencies | Campaign/reporting desk: calendars, approvals, metrics, leads, asset rights | social analytics/agency platforms; calendars/approvals; social/ads/reporting APIs; marketing dashboard; brand rights/content provenance/evaluation |
| Mortgage brokers | Loan-condition desk: applications, documents, lender status, aging | mortgage/LOS/broker platforms; loan conditions/documents; mortgage/credit APIs; loan dashboard/broker CRM; privacy/underwriting/approval authority |
| Property management | Property-exception desk: tenant inquiries, rent aging, work orders, leases | property/rental management; work orders/rent/leases; property/maintenance/payment APIs; property dashboard/tenant CRM; privacy/dispatch/evaluation |
| Real estate | Listing-and-lead desk: portal leads, properties, viewings, listing documents | real-estate CRM/listings; leads/viewings/paperwork; MLS/property APIs; listing portal/dashboard; freshness/routing/consent/provenance |
| Recruiting and staffing | Recruiting pipeline desk: candidates, roles, stages, availability, interviews | ATS/staffing platforms; resume parsing/interviews; recruiting/calendar APIs; recruiting dashboard/portal; fairness/consent/retention/provenance |
| SaaS | Operating desk: CRM pipeline, usage/renewal, support, CI/release events | SaaS starters/CRM/multi-tenancy; churn/usage/renewal; billing/CRM/CI APIs; SaaS dashboards/admin; evaluation/SBOM/deployment/rollback |

## Selection and dedupe contract

1. Run each bucket independently and retain query, date, result count, and rate-limit events.
2. Normalize identity by owner/name plus canonical GitHub URL.
3. Prefer direct industry evidence and capability diversity over star count.
4. Require public metadata plus README or an allowlisted repository path for a strong row.
5. Exclude forks, mirrors, archived repositories, empty repositories, and duplicates; retain weak results only as explicit hold or unknown.
6. A generic CRUD or starter repository cannot satisfy an industry dimension without an explicit niche join.
7. Cross-industry reuse is allowed for discovery, but a complete pair requires distinct defensible evidence for that industry.
8. Record underfilled buckets and inaccessible sources instead of inventing rows.
9. A candidate remains reference-only until rights, provenance, SBOM state, falsifier, and all ten evidence dimensions are separately recorded.

## Initial discovery leads

These are parent-verification leads surfaced by the Luna pass. They are not admitted candidates and must not be treated as verified facts until source URLs, revisions, rights, and industry joins are checked in a later receipt.

| Lead | URL | Proposed first dimensions |
|---|---|---|
| tastyeffectco/sandboxd | https://github.com/tastyeffectco/sandboxd | sandbox, runtime, deployment, tenancy |
| get-convex/chef | https://github.com/get-convex/chef | builder, data, integration |
| OpenAPITools/openapi-generator | https://github.com/OpenAPITools/openapi-generator | schema, integration, generated artifacts |
| comet-ml/opik | https://github.com/comet-ml/opik | tracing, evaluation, monitoring, cost |
| AgentEvalHQ/AgentEval | https://github.com/AgentEvalHQ/AgentEval | tool-use evaluation and verification |
| mlflow/mlflow | https://github.com/mlflow/mlflow | model/agent evaluation, monitoring, economics |
| boxyhq/saas-starter-kit | https://github.com/boxyhq/saas-starter-kit | identity, tenancy, admin UI |
| imbhargav5/nextbase-nextjs-supabase-starter | https://github.com/imbhargav5/nextbase-nextjs-supabase-starter | UI, schema, testing, runtime |
| amanraj74/hirepilot | https://github.com/amanraj74/hirepilot | recruiting workflow and data model |

## Falsifiers and stop rules

Hold or reject when README claims cannot be tied to a stable source path; the workflow is generic rather than industry-specific; state, owner, or source-of-truth identity is lost; value depends on an unbounded privileged action; a held-out synthetic case cannot reproduce the claimed transition; duplicate/retry/denial/recovery behavior is undefined; runtime, tenancy, rollback, or portability is unverified; or cost cannot be reconstructed.

Industry safety boundaries remain strict: no clinical decisions or patient contact; no legal advice or privilege crossing; no underwriting or mortgage advice; no automated hiring judgment; no payment, booking, issuance, or other unbounded side effect.

## Next receipt

The next lane should emit one immutable repository-selection record per selected industry-repository pair, one repository-specific evidence record for each of the ten dimensions, separate source and rights receipts, explicit observed/not_found/gated/contradicted/unknown states, and a per-industry count proving 100 complete pairs or recording the remaining deficit.

Until that receipt exists, this artifact is a plan and a transparent gap register, not completion.
