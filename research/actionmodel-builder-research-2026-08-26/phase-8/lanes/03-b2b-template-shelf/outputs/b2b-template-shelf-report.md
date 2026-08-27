# Phase-8 Lane 03 — B2B template shelf

**Lane:** `P8-B2B-TEMPLATE-SHELF` · **Run:** `actionmodel-builder-research-2026-08-26` · **Observed:** 2026-08-27  
**Mode:** research-only · `UNEXECUTED` · `NOT_ADMITTED` · no clone, no source copy, no execution, no license scan, no build, no deployment  
**Owned output dir:** `phase-8/lanes/03-b2b-template-shelf/outputs/`

## 1. What this lane adds, and what it deliberately does not repeat

The prior template-gap sweep (`research/template-shelf-sweep-2026-08-27/`) already answered the *discovery* question: 1,394 unique repositories funnelled to 196 metadata-gated rows and 70 on a JS/TS stack, bucketed by 29 lexical query lanes. It explicitly recorded that its categorisation is lexical and that star/freshness/license gates are metadata proxies, not proof.

This lane does not re-run that sweep and does not re-count it. It builds the layer the sweep said was missing: an **archetype taxonomy**, a **template contract** one level above the Block Contract, an **industry variant map**, and a **prioritized shelf whose dispositions are driven by re-verified first-party facts rather than inherited lexical lanes**. It also does not touch connector/OAuth work (Connector Opus) or builder-class repository extraction (Lovable-clone Opus).

The central reframe: **a repository is not a template, and a template is not a block.** A block is a capability slice with a contract. A template is a *composition envelope* — an archetype, a data spine, a tenancy/auth posture, and a set of blocks it supplies or demands. Most of what the sweep found are scaffolds (auth+billing+admin with no domain model) or frameworks (composition substrate), not app-level B2B templates. That distinction is the shelf's main organising result.

## 2. Archetype taxonomy (10)

Archetypes are defined by their **data spine and authority model**, not by their UI or industry label. Two products in different industries that share a spine share an archetype.

| archetype | spine | core entities | atoms hostable | what actually differentiates it |
|---|---|---|---|---|
| `crm` | party + pipeline stage + activity timeline | contact, organization, pipeline, deal, activity | 5 | Stage semantics and the definition of a qualified party. |
| `case_workflow` | typed case + state machine + deadline clock + document set | case, party, stage, task, document | 6 | The state machine and who may advance it; deadlines are often statutory. |
| `portal` | untrusted external identity + scoped read + request submission | external_user, account, request, document, message | 4 | The trust boundary. A portal is an authorization product before it is a UI. |
| `finance_ops` | money amount + period + reconciliation match + audit trail | customer, invoice, line_item, payment, ledger_entry | 5 | Correctness is adversarial: rounding, currency, immutability, audit. |
| `inventory` | quantity at location over time + movement ledger | item, sku, location, stock_level, movement | 4 | Physical-world drift; the record is always a lagging claim. |
| `scheduling` | resource availability + booked interval + confirmation loop | resource, availability, appointment, participant, reminder | 4 | Concurrency and timezone correctness; double-booking is the failure mode. |
| `support_desk` | ticket + queue + SLA clock + threaded conversation | ticket, requester, queue, sla_clock, reply | 5 | SLA clock semantics (pause, business hours) and reply authority. |
| `field_operations` | job at a site + assigned crew + on-site evidence capture | job, site, crew, visit, checklist | 5 | Offline capture and evidence (photo, signature) as first-class data. |
| `learning_content` | learner enrollment + sequenced content + progress state | learner, course, module, enrollment, progress | 4 | Progress/completion semantics and drip sequencing. |
| `marketplace` | two-sided identity + listing + matched order + settlement | supply_party, demand_party, listing, order, fulfilment | 4 | Two-sided trust, payout settlement, and dispute handling. |

## 3. The 17 industries mapped to archetype variants

Every industry maps to a primary and a secondary archetype. `variant_delta` is what must change — entities, states, terminology, or compliance regime.

| industry | primary | secondary | variant delta |
|---|---|---|---|
| `accounting_firms` | `finance_ops` | `case_workflow` | Engagement/period as the case; close-checklist states; ledger is upstream source of truth, template must not own it. |
| `construction` | `field_operations` | `finance_ops` | Job costing + change-order (variation) approval chain; progress billing ties field evidence to money. |
| `course_creators` | `learning_content` | `portal` | Cohort vs evergreen drip; community surface; learner is a consumer identity, not an employee. |
| `ecommerce` | `inventory` | `support_desk` | Storefront is upstream; template owns exception desk (stock, cart recovery, order issues), not the catalogue. |
| `education_training` | `learning_content` | `case_workflow` | Enrolment/attendance/tuition as regulated records; guardian relationships; student-record privacy regime. |
| `healthcare_medical_practices` | `scheduling` | `case_workflow` | Appointment + no-show recovery; PHI regime forces isolation and consent gates before any template is usable. |
| `hospitality` | `scheduling` | `field_operations` | Reservation inventory (room-nights) + housekeeping task dispatch; channel manager is upstream. |
| `it_services_msps` | `support_desk` | `portal` | Per-client tenancy is the product; SLA/backup monitoring; privileged access makes authority the hard gate. |
| `insurance_agencies` | `case_workflow` | `finance_ops` | Policy/claim lifecycle + renewal clock + certificate issuance; regulated document authority. |
| `law_firms` | `case_workflow` | `portal` | Matter lifecycle, conflict check at intake, privilege boundary, statutory deadlines, trust accounting adjacency. |
| `logistics_freight` | `field_operations` | `inventory` | Shipment exception + POD capture; event ordering and carrier feeds; template mirrors carrier truth. |
| `marketing_social_media_agencies` | `case_workflow` | `portal` | Campaign/retainer as case; approval chains for content; client-facing reporting portal. |
| `mortgage_brokers` | `case_workflow` | `portal` | Loan file as case with condition checklist; document collection portal; underwriting authority is external. |
| `property_management` | `case_workflow` | `portal` | Work order lifecycle + rent ledger + lease documents; tenant portal is a distinct untrusted identity. |
| `real_estate` | `crm` | `scheduling` | Listing + portal lead intake + viewing booking; paperwork filing; agent-level ownership. |
| `recruiting_staffing` | `case_workflow` | `scheduling` | Candidate pipeline as ATS case; interview scheduling; fairness/audit constraints on screening. |
| `saas` | `crm` | `support_desk` | MQL->demo pipeline, churn monitoring; the most template-saturated industry and the weakest differentiation. |

**Concentration finding (`I`).** Across 34 industry×archetype variants, `case_workflow` is primary for 6/17 industries and `portal` is secondary for 6/17. Two archetypes therefore carry the majority of catalogue demand. `marketplace` is primary for none and secondary for none — it is defined here for completeness but has **no demand anchor in the 17-industry denominator**, and should not be built speculatively.

**Falsifier.** If a genuine build of the `case_workflow` spine cannot be re-skinned to law firms, insurance, mortgage, property management, recruiting, and marketing retainers without rewriting its state machine, then archetype-level reuse is an illusion and the shelf must be organised per-industry instead.

## 4. Template contract v1

`template-contract-v1.json` (`siso:actionist-builder:template-contract:v1`) sits above the Block Contract. It requires archetype, pinned identity, rights state, stack, tenancy, auth, data spine, included blocks, **required (absent) blocks**, industry variants, atom coverage, non-empty `missing_gates`, and a `candidate|reference|hold` disposition with a named blocking gate.

Three deliberate design decisions:

- **`admitted` is not a legal status.** The status enum omits it. No template can be admitted by this contract.
- **`missing_gates` has `minItems: 1`.** A template with no declared gaps is a bug, not a clean record.
- **`required_blocks` is mandatory.** Recording what a template *lacks* is the build-vs-borrow signal; a shelf that only lists what exists is a catalogue, not a decision tool.

All 17 shelf records validate against this schema with 0 errors (`jsonschema` Draft 2020-12).

## 5. Verified-fact corrections to the prior sweep

Re-querying `gh api` first-party on 2026-08-27 changed dispositions that metadata inheritance would have gotten wrong:

| repo | prior/assumed | first-party observed | consequence |
|---|---|---|---|
| `documenso/documenso` | permissive-class starter | **AGPL-3.0** | forced to `hold`; copyleft reuse in a client deliverable is a legal decision |
| `frappe/hrms` | permissive-class starter | **GPL-3.0** | forced to `hold` |
| `twentyhq/twenty` | leading OSS CRM | **NOASSERTION** | license non-standard/dual; forced off `candidate` |
| `chatwoot/chatwoot` | leading OSS helpdesk | **NOASSERTION** | forced off `candidate` |
| `formbricks/formbricks` | permissive | **NOASSERTION** | forced off `candidate` |
| `calcom/cal.com` | canonical name | redirects to **`calcom/cal.diy`** | the swept identity string is stale; unpinned references would drift |

This is the lane's strongest operational finding: **`license.spdx_id` from a repo listing is not a rights answer.** Five of seventeen rows (29%) failed a permissive-license assumption on direct query, and one canonical identity had silently moved. Any shelf built by inheriting sweep metadata would have carried all six errors forward.

## 6. The shelf

17 records · dispositions: **4 candidate / 8 reference / 5 hold** · rights: 12 permissive-declared-unverified, 3 unknown, 2 copyleft · all pinned to an exact commit · 6 rows are new to this lane (not in the prior sweep).

| template_id | repo | archetype | license | disposition | blocking gate |
|---|---|---|---|---|---|
| `tpl/case-workflow/production-saas-starter@1.0.0` | [moasq/production-saas-starter](https://github.com/moasq/production-saas-starter) | `case_workflow` | MIT | **candidate** | `runtime_behavior` |
| `tpl/crm/atomic-crm@1.0.0` | [marmelab/atomic-crm](https://github.com/marmelab/atomic-crm) | `crm` | MIT | **candidate** | `rights_dependency_tree` |
| `tpl/crm/open-saas@1.0.0` | [wasp-lang/open-saas](https://github.com/wasp-lang/open-saas) | `crm` | MIT | **candidate** | `rights_dependency_tree` |
| `tpl/crm/saas-boilerplate@1.0.0` | [ixartz/SaaS-Boilerplate](https://github.com/ixartz/SaaS-Boilerplate) | `crm` | MIT | **candidate** | `rights_dependency_tree` |
| `tpl/crm/twenty@1.0.0` | [twentyhq/twenty](https://github.com/twentyhq/twenty) | `crm` | NOASSERTION | **reference** | `license_scan` |
| `tpl/finance-ops/invoify@1.0.0` | [al1abb/invoify](https://github.com/al1abb/invoify) | `finance_ops` | MIT | **reference** | `runtime_behavior` |
| `tpl/inventory/spree@1.0.0` | [spree/spree](https://github.com/spree/spree) | `inventory` | BSD-3-Clause | **reference** | `visual_pipeline_fit` |
| `tpl/portal/formbricks@1.0.0` | [formbricks/formbricks](https://github.com/formbricks/formbricks) | `portal` | NOASSERTION | **reference** | `license_scan` |
| `tpl/portal/refine@1.0.0` | [refinedev/refine](https://github.com/refinedev/refine) | `portal` | MIT | **reference** | `runtime_behavior` |
| `tpl/portal/react-admin@1.0.0` | [marmelab/react-admin](https://github.com/marmelab/react-admin) | `portal` | MIT | **reference** | `runtime_behavior` |
| `tpl/scheduling/cal-com@1.0.0` | [calcom/cal.com](https://github.com/calcom/cal.com) | `scheduling` | MIT | **reference** | `license_scan` |
| `tpl/support-desk/chatwoot@1.0.0` | [chatwoot/chatwoot](https://github.com/chatwoot/chatwoot) | `support_desk` | NOASSERTION | **reference** | `license_scan` |
| `tpl/case-workflow/documenso@1.0.0` | [documenso/documenso](https://github.com/documenso/documenso) | `case_workflow` | AGPL-3.0 | **hold** | `license_scan` |
| `tpl/case-workflow/hrms@1.0.0` | [frappe/hrms](https://github.com/frappe/hrms) | `case_workflow` | GPL-3.0 | **hold** | `license_scan` |
| `tpl/crm/nextcrm-app@1.0.0` | [pdovhomilja/nextcrm-app](https://github.com/pdovhomilja/nextcrm-app) | `crm` | MIT | **hold** | `maintenance_owner` |
| `tpl/finance-ops/miru-web@1.0.0` | [saeloun/miru-web](https://github.com/saeloun/miru-web) | `finance_ops` | MIT | **hold** | `visual_pipeline_fit` |
| `tpl/inventory/open-mercato@1.0.0` | [open-mercato/open-mercato](https://github.com/open-mercato/open-mercato) | `inventory` | MIT | **hold** | `maintenance_owner` |

### Disposition meanings

- **candidate** — pinned, permissive-declared, worth a rights + runtime gate next. Not approved for use.
- **reference** — read the design, do not take the code. Either the license is unresolved, the stack diverges from the JS/TS spine, or it is a framework rather than a template.
- **hold** — an identity, rights, or archetype-fit question blocks even reference use.

## 7. Coverage and honest gaps

| archetype | shelf rows | industries reachable at direct/adaptable |
|---|---:|---:|
| `crm` | 5 | 4 |
| `case_workflow` | 3 | 7 |
| `portal` | 3 | 7 |
| `finance_ops` | 2 | 3 |
| `inventory` | 2 | 2 |
| `scheduling` | 1 | 4 |
| `support_desk` | 1 | 4 |
| `field_operations` | 0 | 0 |
| `learning_content` | 0 | 0 |
| `marketplace` | 0 | 0 |

**Industries with no direct/adaptable shelf row: 2/17** — `construction`, `course_creators`.

Confirmed and extended from the prior sweep's own gap note: no credible permissive JS/TS candidate cleared the gates for **booking/scheduling as a clinical product, client portal, HR/ATS, or contract management**. This lane sharpens why: the two archetypes with the *highest* demand concentration (`case_workflow` at 6/17 primary, `portal` at 6/17 secondary) have the *thinnest* clean-license supply. `documenso` and `frappe/hrms` — the two closest fits — are both copyleft.

**That inversion is the shelf's most decision-relevant result:** supply is concentrated in `crm`/scaffold rows that the 17-industry denominator needs least, and absent where it needs most. Buying or borrowing will not close the `case_workflow` + `portal` gap; that spine is the build case.

## 8. What is NOT established

- No template is admitted, cleared, or approved. `NOT_ADMITTED`, `UNEXECUTED`.
- No dependency tree, SBOM, or license scan was performed. Every `permissive_declared_unverified` is a top-level declaration only.
- No tenancy isolation, auth authority, runtime behavior, build reproducibility, or accessibility claim is observed. Tenancy and auth are `U` on all 17 rows.
- No economics, maintenance-owner, rollback, or eval-suite evidence.
- `included_blocks` are `D`-class claims about what a template appears to ship, not admitted blocks.
- Archetype assignment is `I`-class judgement; industry `fit` values are hypotheses, not validated demand. The catalogue's 17/12/66/72 remain demand *signals*.
- No client, legal, or security review.

## 9. Next gates (unexecuted, in order)

1. Rights: dependency-tree + SBOM on the 4 `candidate` rows before any further work.
2. Resolve the 3 `NOASSERTION` licenses by reading the actual LICENSE file.
3. Build-vs-borrow decision on the `case_workflow` + `portal` spine, given confirmed thin clean-license supply.
4. Tenancy isolation and auth authority proof — currently `U` on every row.
5. Eval suite and economics denominator.


---
*Research-only artifact. No implementation, deployment, admission, or client/legal clearance is claimed or authorized.*
