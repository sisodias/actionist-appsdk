# P9-L22 pair-dimension direct evidence report

- Scope: deterministic first 80 resolved assignments in input order (`target-identity-assignments.jsonl`), 10 dimensions each.
- Counts: 800 pair-dimension rows and 800 matching source receipts.
- Dispositions: direct=461, inference=0, unknown=279, blocked=60.
- L20 comparison: L20 baseline was all-unknown for the same 10 dimensions; movement is direct +461, inference +0, blocked +60, unknown -521 versus the 800-row selected baseline.
- Per-dimension counts: {"agent_authority": {"blocked": 6, "direct": 25, "inference": 0, "unknown": 49}, "data_model": {"blocked": 6, "direct": 54, "inference": 0, "unknown": 20}, "demand_atom_fit": {"blocked": 6, "direct": 54, "inference": 0, "unknown": 20}, "economics_maintenance": {"blocked": 6, "direct": 51, "inference": 0, "unknown": 23}, "integration_surface": {"blocked": 6, "direct": 53, "inference": 0, "unknown": 21}, "provenance_rights": {"blocked": 6, "direct": 23, "inference": 0, "unknown": 51}, "runtime_deployment": {"blocked": 6, "direct": 55, "inference": 0, "unknown": 19}, "ui_assembly": {"blocked": 6, "direct": 43, "inference": 0, "unknown": 31}, "verification_eval": {"blocked": 6, "direct": 43, "inference": 0, "unknown": 31}, "workflow_behavior": {"blocked": 6, "direct": 60, "inference": 0, "unknown": 14}}
- Rights/SBOM: every row carries rights_unknown and sbom_unknown plus notes. Public license text, where observed, is not a legal clearance; no license scan or SBOM generation/execution occurred.
- Boundary: research_only=true; execution_status=UNEXECUTED; admission_status=NOT_ADMITTED; admitted_blocks=0; promotion_allowed=false. No client data, vendor login, clone, source copy, source execution, install, build, deploy, benchmark, scan, admission, or promotion.
- Direct evidence is limited to quoted/paraphrased content fetched by HTTP from public immutable revision URLs. Inference is unused; absent evidence stays unknown; HTTP-without-readable candidate content is blocked.
- Input: `/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/Actionist-AppSDK/SISO/research/actionmodel-builder-research-2026-08-26/phase-9/wave-8/lanes/17-target-identity-backfill/outputs/target-identity-assignments.jsonl`
- Outputs: `pair-dimension-evidence.jsonl`, `source-receipts.jsonl`
