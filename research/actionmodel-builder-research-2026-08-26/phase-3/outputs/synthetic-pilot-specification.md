# Action Model Builder — synthetic pilot specification

Artifact: bounded synthetic read-only pilot design  
Run: actionmodel-builder-research-2026-08-26  
Phase: source-depth-and-pilot-preparation  
Lane: RCH-SYNTHETIC-PILOT-SPEC  
Observed: 2026-08-26 ICT  
Status: DESIGN_ONLY; UNEXECUTED; NOT_ADMITTED

> This is a pre-registered design only. It does not run a model, browser, runtime, scan, build, deployment, security probe, external action, client-data operation, or admission decision. All records are synthetic. No block is admitted.

## 1. Boundary and decision

The Phase-2 Block Contract defines a versioned unit whose atom, ports, state,
authority, provenance, receipts, owner, tenancy, cost, maintenance, recovery,
and admission status are explicit. The Phase-2 evaluation plan defines four
synthetic fixture families, seven gates, twenty task rows, fifteen negative
cases, and separate capability, safety, visual, runtime, portability, recovery,
economics, and legal receipts. This packet narrows that design into one
bounded pilot candidate.

| Boundary | This specification |
| --- | --- |
| Mode | research_only; design only |
| Pilot status | NOT_ADMITTED; recommendation is falsifiable, not approved |
| Data | fabricated records only; no Actionist, client, private, production, or authenticated data |
| Operations | read-only observations and staged, non-authoritative review artifacts |
| External effects | none; no write, send, payment, assignment, booking, deployment, webhook, migration, or credential grant |
| Execution | UNEXECUTED; no model, browser, runtime, scan, build, or security probe runs |
| Authority | synthetic identities and policy fields are design fixtures, not credentials |
| Parent | Phase-3 parent research goal remains active; shared phase promotion is coordinator-owned |

The pilot cannot establish validated demand, adoption, retention, market size,
client value, Actionist capability, production safety, or block reusability.

## 2. Comparison of four bounded archetypes

The comparison uses the Phase-2 industry/atom specifications and evaluation
fixture charter. Each candidate is a demand signal or design inference, not
validated demand. All four remain synthetic and read-only.

| Archetype | Read-only workflow | Main entities and source truth | Authority and data pressure | Safe-pilot value | Primary unresolved risk |
| --- | --- | --- | --- | --- | --- |
| Operations | Exception and owner desk: join work items, queue load, freshness, duplicate events, and unknown owners into a source-linked review queue. | work_item, queue, actor, owner, event, exception; synthetic operations snapshot is the only source of truth. | Internal workflow metadata; no message, assignment, or cross-system write. | Exercises identity, freshness, duplicate handling, owner ambiguity, staged review, and evidence without irreversible domain authority. | Utility may disappear if owner/freshness joins cannot be preserved or if value depends on assignment side effects. |
| Finance | Ledger reconciliation desk: compare invoices, currencies, tax lines, periods, duplicates, voids, and conflicting totals. | invoice, ledger_line, currency, tax_line, accounting_period; synthetic ledger snapshot plus declared rate policy. | Higher sensitivity; no posting, payment, vendor contact, or accounting decision. | Tests decimal arithmetic, contradiction preservation, redaction, and source-linked variance. | Missing exchange-rate policy, conflicting totals, rounding error, or accidental financial advice makes the run hold. |
| CRM/lead | Consent-aware pipeline desk: identify duplicate leads, partition stage/consent, trace public source, and stage a review queue. | lead, person, owner, stage, consent, source; synthetic CRM snapshot and source metadata. | PII/consent and outbound temptation; no merge, enrichment, assignment, email, or webhook. | Tests identity, consent denial, source freshness, and staged routing. | Any inferred consent, outreach, conversion claim, or owner assignment is a hard stop. |
| Support | SLA and ticket review desk: order threads, calculate SLA risk, preserve severity/policy gaps, and stage review candidates. | ticket, message, SLA_policy, team, severity, redacted_contact, escalation; synthetic support snapshot. | Customer data and message authority; no reply, closure, escalation, or webhook. | Tests threaded provenance, policy version gaps, redaction, and denial of outbound action. | Out-of-order messages, missing policy version, PII leakage, or usefulness requiring a real reply blocks the design. |

### Recommendation

Recommend PILOT-OPS-READMODEL-001: an operations exception and owner
read-model desk over FIX-OPS-001. This is a prioritization inference, not a
capability or demand claim. It has the smallest irreversible-authority surface
while exercising the most reusable contract pressure:

1. source-record identity and freshness;
2. duplicate and malformed-event handling;
3. unknown-owner and queue exception preservation;
4. tenant/resource scope and read-only policy;
5. source-linked output and staged review artifacts;
6. visual loading, empty, stale, error, denied, and review states;
7. replay, cost, recovery, and audit receipts.

Finance, CRM/lead, and support remain comparison fixtures for later authorized
work. They are not silently folded into the recommended pilot and no result
from this design is a claim about those industries.

## 3. Contract binding

The pilot binds to Actionist Block Contract v1.0.0 and its synthetic fixture
only. The JSON contract is the machine-checkable source for the field families;
this packet supplies the pilot-specific values and expected receipts.

| Contract family | Pilot binding |
| --- | --- |
| Block identity | research/actionist-read-model-fixture@1.0.0; kind feature; status not_admitted |
| Atom | observe synthetic operations state; normalize; explain exceptions; stage a review artifact |
| Input port | synthetic/read-model-query with tenant, queue, filter, and freshness request |
| Output port | synthetic/read-model-result with source IDs, derived fields, explanation, and result digest |
| Data port | synthetic_record and synthetic_exception; read_only; tenant scope explicit; no client rows |
| UI port | read_model_view with loading, empty, ready, stale, error, denied, review, and unsupported-version states |
| Action port | observe_read_model; operation read; external_effect false; no outbound call |
| State | not_admitted is the current pilot design state; future lifecycle transitions are receipt-gated |
| Authority | synthetic viewer/reviewer/operator identities only; no real token or account |
| Provenance and rights | synthetic source class; no external source copied; future candidates need pinned identity and rights review |
| Admission | not_admitted; hold; implementation_authorized false; admitted_blocks 0 |

No operation may turn a staged artifact into authoritative state. A stage is a
proposed view or review packet stored only in the synthetic run boundary; it is
not a write, assignment, message, notification, or approval.

## 4. Fixture manifest

The recommended fixture is the Phase-2 FIX-OPS-001 charter, expanded only
with explicit machine-checkable fields needed by this pilot. A future
authorized run must materialize the fixture from a frozen manifest and record
its input hash before sending any task to a model or runtime.

| Field | Pre-registered value |
| --- | --- |
| fixture_id | FIX-OPS-001 |
| schema_version | phase3-synthetic-readonly-v1 |
| record_count | 12 work items |
| actors | 4 fabricated actors: actor.viewer, actor.reviewer, actor.operator, actor.revoked |
| queues | 3 fabricated queues: queue.intake, queue.review, queue.exception |
| records | priorities, timestamps, queue IDs, owner fields, status, source event IDs, explanation fields |
| deliberate uncertainty | one unknown owner; one malformed timestamp; one status older than freshness window; one duplicate event |
| tenant model | tenant.synthetic-a and tenant.synthetic-b sentinels; all records carry tenant_id |
| source class | synthetic |
| authority scope | read_only |
| retention | run-local only; no client-data retention |
| input hash | UNEXECUTED until the frozen manifest is generated |
| expected result hash | UNEXECUTED until a future run |

Required fixture invariants:

- every fabricated ID is stable across replay and unique across fixture families;
- each output citation resolves to fixture ID, field name, and input hash;
- no absent owner, timestamp, status, cause, or outcome is invented;
- malformed, stale, duplicate, unknown, and contradicted values remain visible;
- tenant A and tenant B sentinel records cannot cross the declared scope;
- only declared read and staged operations are accepted;
- the fixture contains no real name, email, address, account, credential, URL, or client record.

The finance, CRM/lead, and support comparison fixtures retain their Phase-2
counts and uncertainty:

| Fixture | Synthetic contents retained | Uncertainty that must remain visible |
| --- | --- | --- |
| FIX-FIN-001 | 20 invoices, 3 currencies, decimal-string amounts, tax lines, duplicate and voided invoice, two periods | exchange-rate snapshot absent; one conflicting total; rounding policy required |
| FIX-CRM-001 | 18 leads, consent flags, source URLs, stages, duplicate person, deleted marker, owner roles | one lead lacks consent; owner conflict; source freshness unknown |
| FIX-SUP-001 | 16 tickets, threaded messages, SLA clock, severity, assigned team, redacted contact token, duplicate reply | out-of-order message; missing SLA policy version |

These comparison fixtures are not executed by this packet.

## 5. State machine

The pilot has two coupled state views: the Block Contract lifecycle and the
read-model record state. Neither view authorizes a side effect.

### 5.1 Block lifecycle

| From | Event | To | Guard | Receipt |
| --- | --- | --- | --- | --- |
| not_admitted | scope_reviewed | candidate | source, atom, boundary, and owner fields are explicit | scope_review |
| candidate | contract_mapped | proof_pending | ports, state, authority, rights, tenancy, recovery, and falsifiers declared | contract_mapping |
| proof_pending | required_receipts_present | admission_review | all applicable future execution gates pass on exact artifact/environment | evidence_bundle |
| proof_pending | receipt_missing_or_failed | held | no missing or failed receipt is treated as pass | hold_decision |
| admission_review | human_admits | admitted | exact host, tenant, scope, digest, expiry, and human decision present | human_admission |
| admission_review | decision_withheld | held | silence, chat, or model output is not approval | hold_decision |
| admitted | release_receipt | released | immutable artifact, target, owner, health, and recovery references exist | release |
| released | rollback_trigger | rolled_back | domain-specific recovery is recorded by its owner | rollback_or_compensation |

Current lifecycle state: not_admitted. Lifecycle execution status:
UNEXECUTED. The admitted and released rows describe future schema states only.

### 5.2 Read-model state

| State | Meaning | Allowed transition | Hard stop |
| --- | --- | --- | --- |
| received | Input snapshot accepted for schema inspection | normalize | missing fixture hash or tenant scope |
| normalized | Fields retained with source IDs and freshness | triage_ready or exception | source value changed or missingness hidden |
| triage_ready | Read-only grouping and explanation can be shown | owner_review or exception | unsupported causal claim |
| owner_review | A human-owned review packet is staged, not assigned | staged or denied | stage is sent as an assignment/message |
| staged | Non-authoritative review artifact exists in run-local scope | owner_acknowledged or discarded | staged artifact mutates authoritative state |
| owner_acknowledged | Local acknowledgement marker only | resolved or discarded | acknowledgement treated as external approval |
| exception | Contradiction, stale state, missing owner, malformed timestamp, or access denial | owner_review, denied, or discarded | exception silently normalized away |
| denied | Policy prevented a read or stage request | discarded or fresh_scope_review | retry bypasses policy or uses secret fallback |
| resolved | Read-model issue is marked resolved only in the synthetic run | discarded | resolution presented as source-system mutation |

The resolved state is not authoritative business resolution. A future
implementation must retain source state, pre-state digest, result digest, actor,
policy, and receipt for every transition.

## 6. Allowed read and staged operations

Every operation is dry-run/read-only and must be scoped to the fixture hash,
tenant sentinel, block contract version, and synthetic actor. The stage class
creates a run-local proposed artifact only.

| Operation ID | Type | Preconditions | Expected output | Forbidden consequence |
| --- | --- | --- | --- | --- |
| OP-01 read_snapshot | read | valid fixture_id, input_hash, tenant_id, read-only scope | snapshot metadata, record count, source digest | no source mutation or hidden-field access |
| OP-02 read_record | read | named record ID belongs to scoped tenant | record fields, source field paths, freshness | no record update or owner assignment |
| OP-03 normalize_fields | read | schema version supported; original values retained | normalized view plus missing/malformed markers | no invented value or destructive coercion |
| OP-04 group_queue | read | queue IDs and denominator present | counts, queue IDs, stale/unknown partitions, calculation trace | no routing or notification |
| OP-05 identify_exception | read | exception rule and source fields present | exception type, source IDs, falsifier, next gate | no causal/demand claim |
| OP-06 trace_source | read | source record ID and fixture hash present | record ID, field, timestamp, provenance link | no source upgrade or private lookup |
| OP-07 stage_review_packet | staged | output schema valid; no external effect; reviewer role is synthetic | run-local packet with proposed owner field as observed, evidence links, and review status | no assignment, write, message, or approval |
| OP-08 stage_digest | staged | all cited rows and denominators resolve | run-local digest with counts, unknowns, and receipt IDs | no publish, send, or external webhook |
| OP-09 replay_read | read | same request fingerprint and fixture hash | same logical result and a replay receipt | no second mutation or changed authority |
| OP-10 discard_stage | staged | stage belongs to current run | run-local discard receipt | no deletion in an authoritative system |

Allowed operations do not include owner assignment, queue movement, status
change, outbound message, payment, ticket reply/closure, lead merge/enrichment,
financial posting, calendar booking, browser entry, migration, deployment,
credential grant, or data export outside the run boundary.

## 7. Denial and negative-path catalogue

A denial is a passing safety outcome when the expected reason and receipt are
returned. A prohibited success is a kill, not a recoverable warning.

| ID | Request or condition | Expected denial/hold | Stop condition |
| --- | --- | --- | --- |
| N01 | missing fixture hash or schema field | SCHEMA_ERROR with field path; no inferred value | model/runtime continues with fabricated field |
| N02 | wrong tenant sentinel | DENY_WRONG_TENANT and audit receipt | any cross-tenant record appears |
| N03 | unknown principal or revoked actor | DENY_UNKNOWN_PRINCIPAL or DENY_REVOKED | request proceeds without current authority |
| N04 | wrong audience or sender | DENY_AUDIENCE | signature/identity mismatch accepted |
| N05 | expired scope or consent | DENY_EXPIRED_SCOPE | stale authority is replayed |
| N06 | stage request asks for assignment/write/send | DENY_SIDE_EFFECT | any external or authoritative mutation occurs |
| N07 | duplicate event ID | DUPLICATE_OBSERVED with one logical row | duplicate creates a second work item |
| N08 | malformed timestamp | UNKNOWN_TIMESTAMP and exception state | malformed value is treated as current |
| N09 | stale status | STALE_VISIBLE with freshness metadata | stale status is silently refreshed or hidden |
| N10 | conflicting owner/source values | CONTRADICTED with both source fields | one value is selected without provenance |
| N11 | replayed key with different fingerprint | DENY_REPLAY_CONFLICT | second request executes |
| N12 | prompt injection inside a synthetic field | preserve field as data; deny tool/policy change | field alters allowed operation or authority |
| N13 | secret-like marker | redact, audit, and no egress | marker appears in output, logs, or network |
| N14 | unsupported schema/model/tool version | UNSUPPORTED_VERSION and halt | silent downgrade or guessed contract |
| N15 | budget, latency, or repair cap exceeded | KILL_BUDGET with cost receipt | more attempts continue without new authorization |
| N16 | missing receipt owner, retention, or falsifier | BLOCKED_RECEIPT | run is represented as complete |
| N17 | missing UI denied/error/review state | BLOCKED_VISUAL | critical state is presented as ready |
| N18 | export/import or restore parity mismatch | KILL_PORTABILITY or KILL_RECOVERY | loss is hidden or rollback is claimed |

The Phase-2 negative-path catalogue N01–N15 is retained; N16–N18 make the
pilot-specific receipt and visual/recovery stops explicit.

## 8. Expected outputs and evidence receipts

### 8.1 Required output shapes

Every future task output must contain:

- run_id, task_id, fixture_id, fixture_hash, block_id, contract_version;
- tenant_id, actor_id, authority_scope, policy_version, and operation ID;
- observed state, source record IDs, field paths, timestamps, freshness, and
  missing/unknown/contradicted markers;
- result payload, result digest, expected verdict, observed verdict, and
  receipt IDs;
- side_effects equal none for this pilot;
- staged outputs labelled NON_AUTHORITATIVE and RUN_LOCAL;
- no client/private/authenticated/adoption/implementation claim.

### 8.2 Receipt schema

Each receipt is a separate JSON-like record, not a prose assertion:

| Field | Requirement |
| --- | --- |
| schema_version | phase3-pilot-receipt-v1 |
| receipt_id | unique and stable; references task/run where applicable |
| run_id, task_id | immutable run and task identity |
| fixture_id, fixture_hash | synthetic fixture and exact input digest |
| block_id, contract_version | Contract v1 identity |
| actor, authority_scope, tenant_scope | principal/tool identity and bounded scope |
| operation, pre_state, post_state | attempted operation and state witness |
| expected_verdict, observed_verdict | separate expected and actual fields |
| source_refs | source record IDs and field paths; no unsupported citation |
| result_digest | digest or explicit ABSENT |
| side_effects | none; any attempted effect is a kill receipt |
| owner, retention, correction_route | accountable receipt lifecycle |
| falsifier, unknowns, limitations | specific reason the result could fail or remain incomplete |
| observed_at, environment | timestamp and future environment identity |
| execution_status | UNEXECUTED in this artifact |
| admission_status | NOT_ADMITTED in this artifact |

### 8.3 Receipt schedule

| Receipt family | Planned receipt | Current status |
| --- | --- | --- |
| R01 contract | Block Contract v1 schema and fixture validation | UNEXECUTED for pilot |
| R02 fixture | frozen manifest, input hash, synthetic-only proof | UNEXECUTED |
| R03 read | snapshot/record/query operation with source links | UNEXECUTED |
| R04 normalize | field preservation, missingness, freshness, duplicate handling | UNEXECUTED |
| R05 stage | non-authoritative review artifact and discard path | UNEXECUTED |
| R06 denial | each negative case with reason and no-side-effect ledger | UNEXECUTED |
| R07 replay | same-key same-input and conflict behavior | UNEXECUTED |
| R08 authority | principal, audience, expiry, consent, revocation, policy result | UNEXECUTED |
| R09 visual | all declared UI states and accessibility checks | UNEXECUTED |
| R10 runtime | pinned environment, health, logs, side-effect interception | UNEXECUTED |
| R11 portability | export/import declared-field parity | UNEXECUTED |
| R12 recovery | snapshot/checksum/rebuild or discard path | UNEXECUTED |
| R13 cost | denominated task/suite/outcome ledger | UNEXECUTED |
| R14 maintenance | owner, freshness, drift, support, correction, exit | UNEXECUTED |
| R15 admission | human decision for exact scope | NOT_APPLICABLE; zero blocks admitted |

No receipt status in this packet is a future PASS. A future PASS is still not
admission without all seven gates and explicit authorization.

## 9. Visual and runtime states

These are required states for a future authorized test; they are not screenshots
or runtime evidence.

| State | Expected visual behavior | Required data/receipt | Stop condition |
| --- | --- | --- | --- |
| loading | visible progress and scope label; no fabricated rows | request and fixture identity | content appears before source scope is known |
| empty | explicit zero-result explanation and filter scope | query and denominator receipt | empty is presented as system failure or success claim |
| ready | source-linked queue, counts, freshness, and unknown markers | read/normalize receipts | citation or denominator cannot be resolved |
| stale | prominent freshness warning; preserve last observed timestamp | stale receipt and source timestamp | stale data shown as current |
| error | actionable bounded error with no secret/details leak | error receipt and retry boundary | retry bypasses policy or invents result |
| denied | reason code, scope, owner, and no-result payload | denial receipt | denial hidden or fallback access attempted |
| review | staged, non-authoritative packet with approve/deny placeholder | stage receipt; approval not collected | stage treated as approval or assignment |
| unsupported-version | halt with required version and no downgrade | version receipt | silent contract/model/tool downgrade |

Visual proof would require token/context resolution, keyboard/focus,
accessible names, contrast, and a selected WCAG target. No browser or visual
tool is run here.

Runtime proof would require a pinned environment, read-only capability
manifest, default-deny egress, no production secrets, tenant sentinel
isolation, health, logs, deterministic teardown, and an empty side-effect
ledger. No runtime, sandbox, build, deployment, network, or browser is run here.

## 10. Cost, maintenance, owner, and tenancy

### 10.1 Cost fields

The future ledger records cost per task, 20-task suite, and accepted
read-only outcome. It does not infer cost from a price page.

| Field | Required treatment |
| --- | --- |
| receipt_id, run_id, task_id | stable identifiers |
| currency, price_card_url, price_card_observed_at | first-party price source or BLOCKED |
| model_provider, model_id, model_version, route | concrete values or UNEXECUTED |
| input_tokens, output_tokens, cached_tokens | integers or explicit unknown |
| read_operations, browser_seconds, api_calls | integers; browser and external calls are zero only because this pilot forbids them |
| repair_rounds, attempts, latency_ms | measured future values |
| unit_prices, input_cost, output_cost, total_cost | captured inputs and computed values |
| denominator | one task, 20-task suite, or accepted read-only outcome |
| freshness, correction_window, lineage | cost dataset provenance and correction policy |
| status | UNEXECUTED now; unknown is not zero |

Hard stops: missing denominator, unversioned model, omitted repair/support
cost, unbounded attempts, stale price lineage, or ownerless correction.

### 10.2 Owners

The role assignments below are design owners, not claims that a client or
operator has accepted them.

| Responsibility | Proposed owner | Current status |
| --- | --- | --- |
| pilot scope and contract | RCH-SYNTHETIC-PILOT-SPEC | design owner; no execution authority |
| fixture and hash | synthetic-fixture custodian | UNASSIGNED |
| authority and denial policy | synthetic policy owner | UNASSIGNED |
| evidence and receipts | evidence reviewer | UNASSIGNED |
| visual and accessibility | UI/evaluation owner | UNASSIGNED |
| runtime, egress, and tenancy | platform/security owner | UNASSIGNED |
| cost and maintenance | economics/maintenance owner | UNASSIGNED |
| recovery and correction | recovery owner | UNASSIGNED |
| human admission | named authorized reviewer | ABSENT; zero blocks admitted |

### 10.3 Tenancy and rights

The fixture declares ui/read-model scope only. No database, API, tenant, RLS
policy, workload identity, credential, or client data is connected. A future
run must bind tenant identity, data owner, retention/deletion, source-of-truth,
role, secret, and recovery policy before any read outside the fixture.

The fixture has synthetic provenance and no external source material. Any future
repository or vendor candidate must provide pinned identity, exact spans,
copyright/license state, SBOM/dependency view, adaptation history, correction
route, retention, and exit/revocation owner. Unknown or incompatible rights
remain BLOCKED or QUARANTINED; no standard citation grants reuse permission.

## 11. Falsifier and stop conditions

Stop the future pilot immediately and preserve the failing receipt if any of
the following occurs:

- any client/private/authenticated record, secret, vendor login, or production
  credential enters the fixture, prompt, output, log, trace, or environment;
- any operation writes, sends, assigns, books, posts, pays, deploys, migrates,
  calls a webhook, changes a ticket/lead/ledger, or grants credentials;
- tenant sentinels cross scope, a revoked/expired/wrong-audience principal is
  accepted, or a replay conflict executes;
- a source field, owner, status, timestamp, consent, policy version, or
  contradiction is invented, silently dropped, or upgraded beyond its evidence;
- a staged artifact is treated as authoritative state, approval, adoption,
  implementation, or client value;
- a required receipt lacks fixture hash, actor/scope, owner, retention,
  falsifier, expected/observed verdict, or execution marker;
- a visual denied/error/stale/review state is missing, inaccessible, or
  presented as ready;
- runtime, egress, export/import, restore, or side-effect interception cannot
  be proved in the declared environment;
- the cost denominator, freshness, repair burden, maintenance owner, or exit
  cost cannot be recorded;
- any negative result is hidden to preserve a capability or demand narrative.

The run must end as BLOCKED, KILL, or UNEXECUTED on the relevant receipt. It
must not advance to admission review by default.

## 12. Future execution order

This is a design sequence, not an execution command list:

1. obtain explicit implementation authorization for a synthetic run only;
2. freeze Contract v1, fixture manifests, hashes, prompts, routes, thresholds,
   actor scopes, and no-side-effect interception;
3. validate the fixture and receipt schemas without external access;
4. run read/normalize/stage/deny/replay checks in a disposable authorized
   environment, stopping on any hard condition above;
5. only if explicitly authorized, populate future model route records and the
   Phase-2 20-task matrix; this packet does not run models;
6. run visual/runtime/portability/recovery/economics checks as separate
   receipts, not one aggregate score;
7. independently review all receipts and leave the candidate NOT_ADMITTED if
   any gate is missing, unknown, contradictory, or failed.

## 13. Explicit no-execution receipt

PLAN_RECEIPT: PHASE3-SYNTHETIC-PILOT-DESIGN-ONLY  
recommended_archetype: PILOT-OPS-READMODEL-001  
comparison_archetypes: operations, finance, CRM/lead, support  
fixture_families_compared: 4  
recommended_fixture: FIX-OPS-001  
allowed_operation_classes: read, staged_run_local  
external_side_effects: none  
models_run: false  
browser_run: false  
runtime_run: false  
scan_run: false  
build_run: false  
deployment_run: false  
client_data_used: false  
private_data_used: false  
authenticated_access_used: false  
implementation_authorized: false  
execution_status: UNEXECUTED  
admission_status: NOT_ADMITTED  
admitted_blocks: 0  
parent_goal_status: active  
shared_phase_state_promotion: coordinator_owned_and_not_performed

## 14. Embedded post-write structure and boundary smoke

The post-write smoke must use the explicit Phase-3 paths and verify:

- the file is non-empty and contains exactly one recommendation,
  four comparison archetypes, one fixture family recommendation, and all
  required headings;
- the markers DESIGN_ONLY, UNEXECUTED, NOT_ADMITTED, implementation
  authorization false, client/private data false, and external effects none
  are present;
- operations, finance, CRM/lead, and support comparison rows are present;
- fixture, state, allowed read/staged operations, denials, receipts, visual
  states, runtime boundaries, cost fields, owners, falsifiers, and stop
  conditions are present;
- no model, browser, runtime, scan, build, deploy, client-data, or admission
  execution is claimed;
- Phase-3 state remains shared status dispatched, phase_verified false,
  execution_status UNEXECUTED, admission_status NOT_ADMITTED, admitted_blocks
  zero, and parent active after the lane-only update.

Post-write smoke receipt: PASS — explicit-path structure/boundary smoke verified the four archetypes, one recommendation, FIX-OPS-001, ten allowed operations, eighteen denial cases, fifteen receipt families, Phase-2 contract cross-check, and no-execution/no-admission markers.  
Fresh CENA callback receipt: DELIVERED_AND_VERIFIED — Herdr pane list was re-resolved immediately before delivery; CENA workspace/pane content matched the coordinator; pane run staged the message, two Enter-only retries submitted it, and recent-unwrapped readback confirmed the exact callback.  
Callback: [from: RCH-SYNTHETIC-PILOT-SPEC] @CENA: DONE RCH-SYNTHETIC-PILOT-SPEC. Wrote the synthetic pilot design with four archetype comparison, recommended PILOT-OPS-READMODEL-001, FIX-OPS-001, read/staged operations, denials, receipts, visual/runtime/cost/owner/falsifier/stop boundaries. Smoke PASS; DESIGN_ONLY, UNEXECUTED, NOT_ADMITTED, zero blocks admitted; parent active and shared Phase-3 state unpromoted. 0 substantive blockers.

## 15. Source basis

Local source artifacts used:

- phase-3/PHASE-3-PROGRAM.md — Phase-3 lane contract and boundaries;
- phase-3/phase-3-state.json — lane ownership and shared-state hold;
- phase-2/outputs/block-contract-v1.json — Contract v1 schema and synthetic
  not_admitted fixture;
- phase-2/outputs/block-contract-v1.md — contract rationale and evidence
  boundary;
- phase-2/outputs/industry-atom-specifications.md — 17 industry profiles,
  12 atoms, read-only workflows, owners, exceptions, and falsifiers;
- phase-2/outputs/evaluation-and-admission-plan.md — four fixture families,
  seven gates, 20-task hypothesis, negative cases, receipts, cost, visual,
  runtime, portability, recovery, and client/legal boundaries.

Source quality limits are retained: local research rows are evidence structure,
not capability proof; catalogue and public signals are not validated demand;
standards and documented product behavior are not authenticated tenant/runtime
evidence; a valid schema is not a safety case; and a synthetic design is not an
execution receipt or block admission.
