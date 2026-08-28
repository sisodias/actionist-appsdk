# Operator decisions and coordinator defaults

CENA’s 2026-08-28 decision update resolves all three previously surfaced choices as coordinator defaults. They remain recorded for provenance, but none is an outstanding user blocker. Routine lane coordination and evidence reconciliation do not require operator attention.

## OD-01 — resolved coordinator default: first bounded workflow

- **Decision:** Use the marketing/social-agency client approval and asset-delivery workflow for the first composed pilot.
- **Status:** `resolved_coordinator_default`.
- **Consequence:** `PD-006` no longer waits for a separate workflow-selection decision. An accessible client/test-data path is still a prerequisite for any future client-facing work; this packet does not authorize client-data access.
- **Next gate:** Satisfied by the verified Framework Registry, AFFiNE and Teable receipts; use this workflow in the now-open contract-only pilot. An accessible client/test-data path remains required for any future client-facing work.

## OD-02 — resolved coordinator default: automatic contract-only pilot authorization

- **Decision:** Automatically authorize the three-candidate contract-and-solver pilot after the Framework Registry, AFFiNE and Teable packets each verify.
- **Status:** `resolved_coordinator_default`.
- **Authorized scope:** Write the seven linked records, derive normalization-surgery sets and hand-run the deterministic composer.
- **Explicit exclusions:** This does **not** authorize cloning, source execution, staged binding, deployment, admission or client-data use. The mainline remains research-only and unadmitted.
- **Gate state:** `OPEN`; all three prerequisite packets are verified: Framework Registry `VERIFIED_RESEARCH_PACKET`, AFFiNE `VERIFIED_PROTOTYPE_WITH_HOLDS`, and Teable `verified_prototype_with_holds`.
- **Next gate:** `PD-007` may proceed without another operator prompt, within the authorized contract-only scope. The pilot has not been run in this update.

## OD-03 — resolved coordinator default: third reuse-shape candidate

- **Decision:** Use Chatwoot as the third materially different candidate, exercising the intact-service shape alongside the AFFiNE and Teable probes.
- **Status:** `resolved_coordinator_default`.
- **Consequence:** The three-candidate pilot has a fixed proposed candidate set: AFFiNE, Teable and Chatwoot. Chatwoot is still only a candidate; identity, tenancy, data, runtime, licensing, qualification and admission remain future gates.
- **Next gate:** Include Chatwoot’s seven records in the open `PD-007` contract-only pilot; do not clone or execute it under this update.

## No new decision requested

The unreachable Agent Brain service remains an infrastructure blocker, not a product decision. No request is made to restart it or mutate shared task state from this lane.
