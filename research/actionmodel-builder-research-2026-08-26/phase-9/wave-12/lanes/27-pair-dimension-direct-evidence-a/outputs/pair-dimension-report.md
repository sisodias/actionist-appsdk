# P9-L27 pair-dimension direct evidence report

- Scope: deterministic first 83 resolved assignments in input order, with 10 canonical dimensions each.
- Counts: 830 pair-dimension rows and 830 matching source receipts.
- Dispositions: direct=676, inference=0, unknown=84, blocked=70.
- Direct-count distribution by pair: 0 direct=7 pairs; 1 direct=2; 8 direct=16; 9 direct=34; 10 direct=24. All-ten-direct pair count: 24.
- Per-dimension counts: `agent_authority` 40 direct / 0 inference / 36 unknown / 7 blocked; `data_model` 74 / 0 / 2 / 7; `demand_atom_fit` 74 / 0 / 2 / 7; `economics_maintenance` 74 / 0 / 2 / 7; `integration_surface` 74 / 0 / 2 / 7; `provenance_rights` 44 / 0 / 32 / 7; `runtime_deployment` 74 / 0 / 2 / 7; `ui_assembly` 74 / 0 / 2 / 7; `verification_eval` 74 / 0 / 2 / 7; `workflow_behavior` 74 / 0 / 2 / 7.
- Evidence quality: direct rows contain a substantive body excerpt and pinned raw URL plus commit URL and observed date. Inference is unused. Absent evidence stays unknown. Real HTTP access failures are blocked.
- Rights/SBOM: every evidence and receipt row carries `rights_unknown=true` and `sbom_unknown=true` with notes. No license scan or SBOM generation/execution occurred.
- Boundary: research_only=true; execution_status=UNEXECUTED; admission_status=NOT_ADMITTED; admitted_blocks=0; promotion_allowed=false. No client data, vendor login, clone, source copy, source execution, install, build, deploy, benchmark, scan, admission, or promotion.
- Verification: `no-bytecode-verifier.sh` passed 83x10 cardinality, dimension balance, parity, uniqueness, evidence quality, and boundary checks.
- Input: `/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/Actionist-AppSDK/SISO/research/actionmodel-builder-research-2026-08-26/phase-9/wave-9/lanes/19-target-identity-backfill/outputs/target-identity-assignments.jsonl`
