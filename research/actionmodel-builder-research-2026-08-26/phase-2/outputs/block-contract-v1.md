# Actionist Block Contract v1

Artifact: canonical machine-checkable research contract and synthetic fixture  
Run: actionmodel-builder-research-2026-08-26  
Lane: RCH-BLOCK-CONTRACT  
Contract version: 1.0.0  
Observed: 2026-08-26 (Asia/Ho_Chi_Minh)  
Mode: research_only  

> This packet defines a contract shape. It does not implement runtime behavior, bind an Actionist host, use authenticated/client/private data, authorize deployment, or admit any block. The included fixture is synthetic and remains not_admitted.

## Decision and evidence boundary

The first-principles packet identifies the reusable unit as an outcome-bearing atom plus a versioned contract, not a repository or prompt. The standards packets show that identity, rights, interfaces, authority, evaluation, runtime, economics, and recovery are orthogonal evidence families. This v1 makes each family explicit and refuses to collapse a green schema check into admission.

| Boundary | v1 rule | Current artifact state |
| Boundary | v1 rule | Current artifact state |
| Implementation | Declarative contract only; no runtime code, adapter, build, deploy, or client-system operation. | implementation_authorized=false; no runtime receipt. |
| Admission | Every applicable gate, named owner, exact scope, recovery, and human decision are required; missing evidence holds. | admission.status=not_admitted; admitted_blocks=0. |
| Evidence classes | E direct artifact/source/test; D first-party documentation; I inference/design; U unknown/unexecuted. | Fixture separates classes and execution gaps. |
| Data | Synthetic fixture only; no Actionist database, tenant, client record, credential, or private source. | client_data_used=false; private_data_used=false. |
| Claim boundary | Standards and research motivate fields; citations do not prove local conformance, adoption, capability, or safety. | Authenticated and implementation claims remain absent. |

## 1. Contract object and block identity

The JSON artifact is a JSON Schema Draft 2020-12 document. Its root schema validates one block contract. The x-fixture property is a full synthetic instance validated against that root schema; x-source-basis and x-local-inputs preserve research provenance.
| Field | Required semantics |
| --- | --- |
| contract_version | Exact schema contract version; v1 is 1.0.0 and breaking changes require a new major version. |
| id | Namespaced, semver-like immutable block identity; identity is not a source digest. |
| kind | scaffold, feature, component, theme, integration, or schema-pattern. |
| status | Lifecycle status; not_admitted and held are valid research states and no automatic promotion exists. |
| description | Bounded purpose and explicit non-purpose. |
| research_boundary | Required false flags for implementation, admission, client/private data, authenticated behavior, deployment, and runtime claims. |

A repository is a provenance input, never automatically a block. A block identity joins source revision, source/artifact digest, exact file spans, transformation history, and evidence receipts.

## 2. Solution atom

The atom carries the smallest outcome-bearing workflow: actor, trigger, source-of-truth state, observation, decision, side effect, authority, verification, recovery, and audit. side_effect mode none or read_only is the default research posture; future writes and external effects need approval, idempotency, and compensation.
| Atom field | Contract requirement | Falsifier |
| --- | --- | --- |
| actor, trigger, outcome | Who asks, what starts the atom, and what accepted result means. | Missing fields prevent review. |
| source_of_truth, observation | Named entities, input schemas, expected state, and owner of truth. | Inferred or unknown source is not silently bound. |
| decision | Rules, model role, and human role are separate. | Model text cannot grant authority or invent policy. |
| side_effect | Explicit none/read-only/reversible/sensitive/irreversible class. | Undeclared write, message, migration, deploy, or browser effect holds. |
| verification, recovery, audit | Postconditions, receipt IDs, domain recovery, and minimum trace fields. | Green build without these is insufficient. |

## 3. Typed ports

Every contract declares five distinct port families. Ports carry schema references, ownership, sensitivity, and contract references; each family adds its own boundary fields.
| Family | Required fields | Boundary and examples |
| --- | --- | --- |
| inputs | port_id, schema_ref, required, source, owner, sensitivity. | Caller/user/host data, not hidden prompt context. |
| outputs | schema_ref, delivery, postcondition, owner, sensitivity. | Output is not proof until its postcondition receipt passes. |
| data | mode, entity, fields, tenant scope, source of truth, retention. | read_only is fixture default; data ownership and access model stay explicit. |
| ui | surface, loading/empty/ready/error/denied/review/stale states, token refs, accessibility checks. | Standards are targets; visual/accessibility receipts remain separate. |
| actions | operation, target, external-effect boolean, approval, idempotency, recovery, effect scope. | Tool annotation is not authority; writes/deploys/credentials need bound approval. |

JSON Schema, OpenAPI, AsyncAPI, CloudEvents, Pact, and MCP describe or test parts of a boundary; none proves business equivalence or tenant safety alone.

## 4. State machine

The lifecycle is explicit and receipt-gated:
```text
not_admitted -> candidate -> proof_pending -> admission_review -> admitted -> released
       \-> held; hard failure -> rejected; rights/security revocation -> revoked; release failure -> rolled_back
```
The JSON state_machine includes state entry/exit conditions, transition guards, receipt types, terminal states, and invariants. The synthetic fixture current_state is not_admitted. admitted is a future schema value only; no block in this packet occupies it.
Required invariants: no candidate enters production; missing evidence holds state; terminal states do not silently reopen; code/data/external-effect rollback remain separate; later green receipts bind a new artifact/environment.

## 5. Idempotency and replay

Action boundaries require an idempotency key or a documented reason it is not applicable. The request fingerprint includes tenant, block/contract identity, operation, input digest, and authority-scope digest. Same key plus same fingerprint may return the original receipt; same key plus a different fingerprint is denied and produces a replay-conflict receipt. Replay windows, checkpoint retention, dedupe storage, and deterministic behavior must be set before execution.
No external effect is declared in the fixture. That is a negative boundary, not proof that a future write is safe.

## 6. Authority and consent

Authority binds principal, actor/tool, tenant/resource scope, operation, policy version, audience, expiry, approval, and revocation. Consent is a separate user-facing record; a chat, model output, or silence is never approval. Sensitive operations require explicit approval bound to exact scope and digest, followed by a fresh commit-time check.
Negative paths: wrong tenant, wrong audience, expired approval, replayed key, scope escalation, missing approval, tool-definition drift, and unknown principal. The fixture declares these paths but does not execute them.

## 7. Provenance, rights, and transformation

provenance_rights joins source identity, rights, transformation, and lineage without treating them as one assertion.
| Sub-object | Required evidence | Current fixture |
| --- | --- | --- |
| source | Source class, URL/URI, immutable revision, digest, observed date, exact spans, access state, identity status, falsifier. | Synthetic URI; no external source. |
| rights | License expression/state, copyright notice, source-copy policy, attribution, legal review, correction owner, retention, access limits. | NOASSERTION; no legal clearance or copy permission. |
| transformation | Parser/tool versions, recipe, before/after digest, adaptation log, reviewer, verification status. | No extraction or transform executed. |
| lineage | Activities, agents, derivation relationship. | Research design lineage only. |

SPDX/REUSE/OpenChain, SWHID, SLSA/in-toto, OCI/TUF/Sigstore/SCITT, and PROV supply evidence joins. They do not decide legal ownership, semantic equivalence, or safe behavior. Ambiguous, missing, or incompatible rights remain quarantine/reference-only.

## 8. Evidence receipts

Each receipt is typed and must include method, expected and observed result, status, evidence class, artifact/source references, owner, retention, limitations, and a falsifier.
| Receipt family | Fixture status | What it would establish |
| --- | --- | --- |
| schema validity | pass; post-write smoke verified it. | JSON Schema shape and fixture consistency only. |
| source rights | not_run/unexecuted | Pinned source, rights, copyright, SBOM, and legal-review facts. |
| transform boundary | not_applicable | Exact bounded extraction/adaptation. |
| ports/state | not_run | Contract and lifecycle compatibility against fixtures. |
| authority/tenancy/security | not_run | Denial, identity, tenant, and egress behavior. |
| eval/UI/runtime | not_run/not_applicable | Separate capability, visual, accessibility, build, runtime, and deployment evidence. |
| recovery/cost/maintenance | not_run | Tested domain recovery and accepted-outcome economics/ownership. |
| human admission | not_applicable | Named decision for exact scope; absent because zero blocks are admitted. |

A schema-valid fixture is a structural receipt, not T3/T4 technical admission. The evidence ladder remains T0 discovery -> T1 opened source -> T2 pinned/right-scoped candidate -> T3 isolated proof -> T4 owner/rollback/human release.

## 9. Owner and tenancy

owner requires an accountable principal, role, organization, assignment state, decision boundary, and continuity owner. Ownership of source, rights, data, policy, secrets, maintenance, recovery, and admission must not be inferred from a URL.
tenancy names the model, tenant key, isolation boundary, data owner, roles, secrets, retention, deletion, cross-tenant test, and recovery owner. Uses Postgres is not a tenancy proof. The fixture is ui_only; no tenant is bound and isolation is not_run.

## 10. Cost and maintenance

Cost is measured per successful accepted outcome, not only per model call: model/retry, retrieval, image, sandbox, build/deploy, storage/egress, review, support, repair, license, security, and recovery terms belong in the lineage. Cost rows require denomination, freshness, correction window, source lineage, and owner. No price, margin, adoption, retention, or client-value claim is made.
Maintenance requires an owner, review cadence, freshness source, dependency policy, drift triggers, correction path, support boundary, and end-of-life/successor/rollback plan.

## 11. Recovery and rollback

Recovery is domain-specific: immutable artifact repoint for code/UI, forward-fix or explicit restore for data, pause/replay from a checkpoint for workflows, revoke/rotate for credentials, prior-known-good or flag disable for deployment, and compensate/manual escalation for external effects. Each class has a target, owner, tested boolean, and falsifier. A Git revert is not a universal rollback.

## 12. Admission status

The admission object is fail-closed in meaning: status not_admitted, decision hold, implementation_authorized false, release_target none, human_decision not_run, and all seven program gates unexecuted or schema-only in the fixture. Future admitted values are representable for later authorized work, but this packet admits zero blocks and does not promote phase state.
The seven gates are canonical contract; provenance/rights; capability/model evaluation; authority/security; runtime/portability; economics/maintenance; and client/legal boundary. A public source, valid manifest, demo, star count, or case study cannot substitute for a missing gate.

## 13. Standards and local source basis

This contract is an applicability profile derived from the requested local packets. N is normative, P is primary research, D is first-party documentation, V is vendor/positioning, E is directly inspected evidence, I is inference, and U is unresolved. Direct reachability or a standards citation is not local conformance.

| ID | Source | Class | Applicability | Limitation |
| --- | --- | --- | --- | --- |
| STD-JSON-SCHEMA | [https://json-schema.org/draft/2020-12](https://json-schema.org/draft/2020-12) | N/E | Structural manifest and fixture validation. | Does not prove semantics, authorization, tenancy, or legal clearance. |
| STD-SPDX | [https://spdx.dev/use/specifications/](https://spdx.dev/use/specifications/) | N/E | License, copyright, relationship, and SBOM facts. | Does not decide permission or legal meaning. |
| STD-REUSE | [https://reuse.software/spec-3.3/](https://reuse.software/spec-3.3/) | N/E | File-level copyright and license metadata. | Metadata is not legal clearance. |
| STD-SLSA | [https://slsa.dev/spec/v1.2/](https://slsa.dev/spec/v1.2/) | N/E | Source/build provenance and immutable inputs. | Does not prove behavior, rights, or safety. |
| STD-IN-TOTO | [https://github.com/in-toto/attestation](https://github.com/in-toto/attestation) | N/E | Signed stage statements and subjects/materials. | Strength depends on issuer, predicate, and verification. |
| STD-TUF | [https://github.com/theupdateframework/specification/blob/master/tuf-spec.md](https://github.com/theupdateframework/specification/blob/master/tuf-spec.md) | N/E | Trust roots, expiry, rotation, and rollback protection. | Does not assess code quality or policy correctness. |
| STD-OCI | [https://specs.opencontainers.org/image-spec/descriptor/](https://specs.opencontainers.org/image-spec/descriptor/) | N/E | Digest-addressed artifacts and referrers. | Identity and transport are not admission or runtime proof. |
| STD-PROV | [https://www.w3.org/TR/prov-overview/](https://www.w3.org/TR/prov-overview/) | N/E | Source to transform to artifact lineage. | A provenance graph cannot make an assertion true. |
| STD-OPENAPI | [https://spec.openapis.org/oas/v3.1.1.html](https://spec.openapis.org/oas/v3.1.1.html) | N/E | HTTP operations, schemas, and security schemes. | Does not prove live provider behavior. |
| STD-PACT | [https://docs.pact.io/implementation_guides/pact_specification](https://docs.pact.io/implementation_guides/pact_specification) | N/E | Concrete consumer/provider interactions. | Does not prove whole-system correctness. |
| STD-ASYNCAPI | [https://www.asyncapi.com/docs/reference/specification/v3.1.0](https://www.asyncapi.com/docs/reference/specification/v3.1.0) | N/E | Message channels and payload contracts. | Does not prove ordering or delivery. |
| STD-CLOUDEVENTS | [https://github.com/cloudevents/spec/releases/tag/ce%40v1.0.2](https://github.com/cloudevents/spec/releases/tag/ce%40v1.0.2) | N/E | Event identity and correlation envelope. | Does not prove domain semantics or idempotency. |
| STD-MCP | [https://modelcontextprotocol.io/specification/2025-11-25/basic](https://modelcontextprotocol.io/specification/2025-11-25/basic) | N/E | Typed tools/resources and protocol versioning. | Tool schemas and hints are not authority or rollback. |
| STD-RFC9396 | [https://www.rfc-editor.org/rfc/rfc9396.html](https://www.rfc-editor.org/rfc/rfc9396.html) | N/E | Structured rich authorization requests. | Does not prove user intent or execution safety. |
| STD-RFC8693 | [https://www.rfc-editor.org/rfc/rfc8693.html](https://www.rfc-editor.org/rfc/rfc8693.html) | N/E | Delegated subject, actor, and audience token relationships. | Does not enforce domain policy or consent. |
| STD-RFC9421 | [https://www.rfc-editor.org/rfc/rfc9421.html](https://www.rfc-editor.org/rfc/rfc9421.html) | N/E | Fresh signed HTTP components and replay fields. | Only useful when verifier policy checks the right fields. |
| STD-RFC9700 | [https://www.rfc-editor.org/info/rfc9700/](https://www.rfc-editor.org/info/rfc9700/) | N/E | OAuth security BCP anchor. | Not a local implementation receipt. |
| STD-CEDAR | [https://docs.cedarpolicy.com/](https://docs.cedarpolicy.com/) | D/E | Typed principal/action/resource/context decisions. | Cannot fix bad policy or human intent. |
| STD-OTEL | [https://opentelemetry.io/docs/specs/semconv/](https://opentelemetry.io/docs/specs/semconv/) | N/D/E | Trace and model/tool/retrieval vocabulary. | Telemetry does not prove truth or privacy-safe retention. |
| STD-DTCG | [https://www.w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/](https://www.w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/) | N/E | Portable typed design-token values. | Does not prove visual quality or accessibility. |
| STD-DTCG-RESOLVER | [https://www.w3.org/community/reports/design-tokens/CG-FINAL-resolver-20251028/](https://www.w3.org/community/reports/design-tokens/CG-FINAL-resolver-20251028/) | N/E | Context and deterministic token resolution. | Does not prove all components consume tokens. |
| STD-WCAG | [https://www.w3.org/TR/2024/REC-WCAG22-20241212/](https://www.w3.org/TR/2024/REC-WCAG22-20241212/) | N/E | Testable accessibility criteria. | Does not replace manual usability review. |
| STD-LSP | [https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/) | N/E | Symbols, references, rename, and source spans. | Navigation is not semantic safety. |
| STD-A2A | [https://a2a-protocol.org/latest/specification/](https://a2a-protocol.org/latest/specification/) | N/D/E | Delegated task, artifact, capability, and idempotency vocabulary. | Interoperability does not replace local authority. |
| STD-FOCUS | [https://focus.finops.org/focus-specification/v1-4/](https://focus.finops.org/focus-specification/v1-4/) | D/E | Cost lineage, correction, reconciliation, and freshness. | Does not supply local prices or margins. |
| STD-OPENFEATURE | [https://openfeature.dev/specification/](https://openfeature.dev/specification/) | D/E | Flag context, hooks, and kill-switch shape. | Flags can hide semantic regressions. |
| STD-ARGO | [https://argoproj.github.io/argo-rollouts/](https://argoproj.github.io/argo-rollouts/) | D/E | Progressive delivery and rollback patterns. | Metric rollback can miss data or external-effect failure. |
| STD-TEMPORAL | [https://docs.temporal.io/workflow-execution](https://docs.temporal.io/workflow-execution) | D/E | Durable history, pause, retry, and replay targets. | Replay does not undo outside effects. |
| STD-K8S-NETPOL | [https://kubernetes.io/docs/concepts/services-networking/network-policies/](https://kubernetes.io/docs/concepts/services-networking/network-policies/) | D/E | Default-deny and allowlisted network target. | Network policy alone is not tenant isolation. |
| STD-SCITT | [https://www.rfc-editor.org/rfc/rfc9943.html](https://www.rfc-editor.org/rfc/rfc9943.html) | N/E | Transparency receipts for signed statements. | Transparency does not make issuer claims true. |
| STD-SWHID | [https://www.swhid.org/specification/v1.1/](https://www.swhid.org/specification/v1.1/) | N/E | Intrinsic source artifact identity. | Identity does not imply availability or rights. |
| STD-SPIFFE | [https://spiffe.io/docs/latest/spiffe-specs/](https://spiffe.io/docs/latest/spiffe-specs/) | D/E | Workload identity and short-lived credentials. | Identity does not authorize every action. |

Local inputs read:

- research/actionmodel-builder-research-2026-08-26/phase-2/PHASE-2-PROGRAM.md
- research/actionmodel-builder-research-2026-08-26/phase-2/phase-2-state.json
- research/actionmodel-builder-research-2026-08-26/expansion/outputs/requirement-comparison.md
- research/actionmodel-builder-research-2026-08-26/outputs/first-principles-framework.md
- research/actionmodel-builder-research-2026-08-26/outputs/standards-and-science.md
- research/actionmodel-builder-research-2026-08-26/expansion/outputs/standards-expansion.md
- research/actionmodel-builder-research-2026-08-26/expansion/wave-11/outputs/standards-applicability-wave-11.md

## 14. Research-only quality gaps and falsifiers

- No Actionist host/API/auth/data/deployment/tenant/approval contract was authenticated or bound.
- No source conversion, license scan, SBOM, dependency review, build, runtime, browser, visual, security, tenant, authority, cost, maintenance, rollback, or admission run is claimed.
- No client/private records, credentials, authenticated account, deployment, external write, message, payment, migration, or browser side effect was used.
- Future candidates are held or quarantined on missing or ambiguous rights, undeclared ports/imports/env/tables, semantic transform uncertainty, cross-tenant access, secret egress, missing approval/idempotency/recovery, stale evidence, unowned support, or unverifiable cost.
- Falsifiers include altered source/artifact identity, missing spans, mixed-license fixtures, schema/provider incompatibility, invalid transitions, replay/scope escalation, tenant sentinel leakage, prompt/tool injection, token/state/accessibility failure, build drift, failed restore/compensation, cost correction gaps, and unowned deprecation.

## 15. Embedded post-write smoke

The smoke validates the JSON Schema itself, validates the embedded fixture, checks required families and cross-references, and rejects admission/implementation claims. It does not execute runtime behavior or external effects.

```sh
set -eu
ROOT=research/actionmodel-builder-research-2026-08-26
MD=$ROOT/phase-2/outputs/block-contract-v1.md
SCHEMA=$ROOT/phase-2/outputs/block-contract-v1.json
test -s "$MD"
test -s "$SCHEMA"
python3 - "$SCHEMA" "$MD" <<'PY'
import json, re, sys
from jsonschema import Draft202012Validator
schema = json.load(open(sys.argv[1], encoding='utf-8'))
assert schema['$schema'] == 'https://json-schema.org/draft/2020-12/schema'
assert schema['x-contract-version'] == '1.0.0'
assert schema['x-research-boundary']['mode'] == 'research_only'
assert schema['x-research-boundary']['implementation_authorized'] is False
assert schema['x-research-boundary']['admission_authorized'] is False
assert schema['x-research-boundary']['admitted_blocks'] == 0
Draft202012Validator.check_schema(schema)
fixture = schema['x-fixture']
Draft202012Validator(schema).validate(fixture)
assert fixture['contract_version'] == '1.0.0'
assert fixture['status'] == 'not_admitted'
assert fixture['research_boundary']['mode'] == 'research_only'
assert fixture['admission']['status'] == 'not_admitted'
assert fixture['admission']['decision'] == 'hold'
assert fixture['admission']['implementation_authorized'] is False
assert fixture['ports'].keys() == {'inputs','outputs','data','ui','actions'}
for family, direction in [('inputs','input'),('outputs','output'),('data','data'),('ui','ui'),('actions','action')]: assert fixture['ports'][family] and all(p['direction'] == direction for p in fixture['ports'][family])
state_ids = {s['id'] for s in fixture['state_machine']['states']}
assert fixture['state_machine']['initial_state'] in state_ids and fixture['state_machine']['current_state'] in state_ids
assert set(fixture['state_machine']['terminal_states']) <= state_ids
assert all(t['from'] in state_ids and t['to'] in state_ids for t in fixture['state_machine']['transitions'])
receipt_types = [r['receipt_type'] for r in fixture['evidence_receipts']]
required = {'schema_valid','source_rights','transform_boundary','ports_contract','state_machine','authority_consent','tenancy_isolation','eval_fixture','ui_accessibility','security_egress','build_runtime','recovery_rollback','cost_maintenance','human_admission'}
assert set(receipt_types) == required and len(receipt_types) == len(set(receipt_types))
doc = open(sys.argv[2], encoding='utf-8').read()
assert 'research_only' in doc and 'not_admitted' in doc and 'zero blocks' in doc
print('BLOCK_CONTRACT_SCHEMA=PASS')
print('BLOCK_CONTRACT_FIXTURE=PASS')
print('LIFECYCLE_NEGATIVE_BOUNDARY=PASS')
print('BLOCK_CONTRACT_SMOKE=PASS')
PY
```

## 16. Post-write receipt and callback

Post-write smoke and the fresh CENA delivery receipt are appended only after the artifact and its embedded smoke pass. The final lane state is updated separately and only inside RCH-BLOCK-CONTRACT.

- Post-write smoke: PASS — schema meta-check, fixture validation, ports, lifecycle, negative paths, receipt coverage, boundary, and Markdown checks.
- Fresh CENA callback: DELIVERED_AND_VERIFIED — CENA pane accepted the callback after fresh resolution and an Enter-only retry.
- Callback text: [from: RCH-BLOCK-CONTRACT] @CENA: DONE RCH-BLOCK-CONTRACT. Wrote the v1 Markdown and JSON schema/fixture; full smoke passed; no implementation or admission claim; parent remains active.
- Path-resolution note: the literal requested root /Users/shaansisodia/SISO is absent; the existing supplied checkout root was used, and no files outside its research Phase-2 lane were written.
- Shared phase state: remains dispatched; parent goal remains active; no promotion is made.

## 17. Return boundary

This artifact answers the contract-shape question and records the minimum evidence needed for later gates. It does not answer whether Actionist can host it, whether any repository is reusable, whether a model can implement it, whether a client wants it, or whether any block is safe or admitted.
