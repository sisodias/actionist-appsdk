# AM-VERTICALS current state

**As of:** 2026-08-26  
**Latest checkpoint:** `checkpoint-003.md`  
**Inventory:** `catalogue.json` — 17 industries / 12 teams / 66 use cases / 72 ideas; machine-checked.  
**Crosswalk:** scored batches `E001`–`E062` cover all 17 industries, all 12 teams, all 66 use cases, and all 72 ideas; mappings are `inferred`.  
**Atoms:** 12 reusable atoms defined in `atoms-001.json` from the outcome/trigger/state/decision/side-effect/authority/verification/recovery/audit contract.  
**Pilots:** finance `28/35`, operations `27/35`, CRM/lead `28/35`; all composite pilot offers remain `unverified`.  
**Offers:** 10 candidate offers with required job/metric/trigger/entities/next-gate fields in `pilot-offers-001.json`.  

## Evidence posture

- Public catalogue is demand evidence, not proof of live capability.
- Six use cases have first-party linked recipes; 60 are explicitly “Coming soon”.
- No authenticated Actionist run or implementation was available to this lane.
- Local OSS entries are candidate blocks only; no repo has been admitted here.

## Strongest signal

The same low-level loop repeats across high-value cards: intake → extract/classify
→ follow up or schedule → sync/exception → approval → report/audit. Finance and
CRM have the strongest urgency/value but require the strictest approval and
read-back gates. Operations has slightly lower score but the widest reusable
coverage and a safer first sandbox.

## Current gate

`direct_source_review`: obtain one disposable client/test environment per pilot,
confirm source-of-truth and allowed writes, then run synthetic fixtures through
the atom contract with idempotency, approval, verification, and recovery evidence.

## Blockers / non-claims

1. Actionist API/SDK and authenticated/live product contract are not public in the local evidence.
2. Industry/team/idea joins are inferred from card copy; they are not first-party relational data.
3. Candidate repo licensing/provenance/build proof is incomplete.
4. Checkpoint-003 callback is pending: the latest live workspace map has no root mailbox pane and `ACTIONMODEL-ORCHESTRATOR` is not a registered Herdr target; checkpoint-001 callback was delivered and read back successfully.

## Next item

The four-axis catalogue crosswalk is complete at the inferred/catalogue layer.
Continue with Q4/Q5/Q6 target-specific direct-source reviews; no inferred join
has been promoted to authenticated/live or implemented. Machine batches are
`crosswalk-batch-001.json`, `crosswalk-batch-002.json`, and
`crosswalk-batch-003.json`.
