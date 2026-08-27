# GitHub wave 7 — matrix evidence ledger report

Wave: matrix-wave-7-industry-dimension-deepening  
Lane: RCH-GITHUB-W7  
Mode: research only; no implementation, client data, repository copying, deployment, production execution, or block admission  
Observed: 2026-08-26

## Verdict

PASS for the generated Wave 7 artifact floor, pending the required fresh CENA callback. This lane adds 1,700 fresh repository observations at indices 51–60, exactly one row for each index in each of the 170 industry×dimension cells. Parent + Waves 2–7 now totals 10,200 observed rows, exactly 60 per cell. The parent 17,000-slot objective remains active; 6,800 slots remain reserved or unobserved.

Wave 7 is a delta. The parent ledger, 500-row tranche, and Waves 2–6 files were read-only inputs; their hashes were captured before writing and checked unchanged after writing.

## Immutable input receipts

| Input | SHA-256 before write | SHA-256 after write | Result |
|---|---|---|---|
| outputs/repo-matrix-observations.jsonl | 1d4f56da0d54be7e8847ded834261a7faff3bb131b9c76ace9d5c66863b9e107 | 1d4f56da0d54be7e8847ded834261a7faff3bb131b9c76ace9d5c66863b9e107 | PASS |
| outputs/github-expansion.jsonl | 25fc2201c1f1f158993724f7f6abd1ddae0b1d5c82be8c8f60b9be2616959df8 | 25fc2201c1f1f158993724f7f6abd1ddae0b1d5c82be8c8f60b9be2616959df8 | PASS |
| wave-2/WAVE-2-PROGRAM.md | cd7d3d08c3ba23603e625bc51213d24c30fbcd128f65809d1db0588316da4af1 | cd7d3d08c3ba23603e625bc51213d24c30fbcd128f65809d1db0588316da4af1 | PASS |
| wave-2/generate-github-wave-2.mjs | 10094bf72c3dbb740587977277f5bdbed30736ad69ee06ba0d78f6bc140aed2d | 10094bf72c3dbb740587977277f5bdbed30736ad69ee06ba0d78f6bc140aed2d | PASS |
| wave-2/outputs/company-dossiers-wave-2.md | 3a7bcea666a8d2002041752914688c4102f22ae7ec390c57510938480c2a3081 | 3a7bcea666a8d2002041752914688c4102f22ae7ec390c57510938480c2a3081 | PASS |
| wave-2/outputs/github-wave-2-report.md | 3317a669f5ead9caa04b0c014a9ed45bd67c5ed6d85e2335eb26fb7d3de5fddc | 3317a669f5ead9caa04b0c014a9ed45bd67c5ed6d85e2335eb26fb7d3de5fddc | PASS |
| wave-2/outputs/github-wave-2.jsonl | b49ccb1a1ed3975e1f2eb912f2a88562c8286368052b5f6e8ada099ad1f47bc4 | b49ccb1a1ed3975e1f2eb912f2a88562c8286368052b5f6e8ada099ad1f47bc4 | PASS |
| wave-2/outputs/niche-matrix-join-wave-2.md | ee096e91be7820447339312a239221163a00f75b1679f6d3a1104eb472e92be3 | ee096e91be7820447339312a239221163a00f75b1679f6d3a1104eb472e92be3 | PASS |
| wave-2/outputs/public-signals-wave-2.md | 3f3070a7945c0029dc3dca7af1c1b32ef7d21c310b4cdeb4a2a68397e2741b29 | 3f3070a7945c0029dc3dca7af1c1b32ef7d21c310b4cdeb4a2a68397e2741b29 | PASS |
| wave-2/outputs/repo-matrix-wave-2.jsonl | 355ae6c9600960a314a93aa9d7550a691e15ad81fe4a8c8273839022821c2443 | 355ae6c9600960a314a93aa9d7550a691e15ad81fe4a8c8273839022821c2443 | PASS |
| wave-2/outputs/standards-applicability-wave-2.md | 6e02e43314bab63da025cf288d2270cd5d33dd30b58cfd4ed9b3e6135a365475 | 6e02e43314bab63da025cf288d2270cd5d33dd30b58cfd4ed9b3e6135a365475 | PASS |
| wave-2/wave-2-state.json | 44020b235bc173ca4cc4484dc52203c2888db6d5c4db03bf732175e335f11245 | 44020b235bc173ca4cc4484dc52203c2888db6d5c4db03bf732175e335f11245 | PASS |
| wave-3/WAVE-3-PROGRAM.md | f73a2d3d09149509d263d84478b229e0f1444d9ad4eacd3d839c2123bd7c1919 | f73a2d3d09149509d263d84478b229e0f1444d9ad4eacd3d839c2123bd7c1919 | PASS |
| wave-3/outputs/company-dossiers-wave-3.md | b087cccde79820b0ce29c5ce550870b4edaa2ef53a592156c1e56b249fe95635 | b087cccde79820b0ce29c5ce550870b4edaa2ef53a592156c1e56b249fe95635 | PASS |
| wave-3/outputs/github-wave-3-report.md | a7954fdfc393cd2a1c050955b09dec3768d973a66f5e0904b0eb5f5fa79e77d9 | a7954fdfc393cd2a1c050955b09dec3768d973a66f5e0904b0eb5f5fa79e77d9 | PASS |
| wave-3/outputs/github-wave-3.jsonl | 955b3c7c13c65e0b9ad1f26f32acded84ba57f11f8158c7a62e80a85f427940e | 955b3c7c13c65e0b9ad1f26f32acded84ba57f11f8158c7a62e80a85f427940e | PASS |
| wave-3/outputs/niche-matrix-join-wave-3.md | ff57973ee5cdb19ef90cd563252eadb79e09839d8da8c6e9f6bd8bafc4644a1a | ff57973ee5cdb19ef90cd563252eadb79e09839d8da8c6e9f6bd8bafc4644a1a | PASS |
| wave-3/outputs/public-signals-wave-3.md | 844114a142de98fe20ab65ab24d0c0fd0194b4ca1b264e169b0f160a8fc10a39 | 844114a142de98fe20ab65ab24d0c0fd0194b4ca1b264e169b0f160a8fc10a39 | PASS |
| wave-3/outputs/repo-matrix-wave-3.jsonl | ff01faebdf347b945209999ff548f3feea7588e7fbc49151b0aa21614d3b7b8f | ff01faebdf347b945209999ff548f3feea7588e7fbc49151b0aa21614d3b7b8f | PASS |
| wave-3/outputs/standards-applicability-wave-3.md | 98bc9657efa729334a0eac68d429223d5be8934847105e08a8ec98a81c2433f5 | 98bc9657efa729334a0eac68d429223d5be8934847105e08a8ec98a81c2433f5 | PASS |
| wave-3/wave-3-state.json | 9ad1388bbccf0508aa28ac8daa2cf83f295f394ee0ad225ab8034ae8b6a7857b | 9ad1388bbccf0508aa28ac8daa2cf83f295f394ee0ad225ab8034ae8b6a7857b | PASS |
| wave-4/WAVE-4-PROGRAM.md | 8a5f817b4825972c9d26777fc5bd36049942367cbb85b05bdef87d6be962de1e | 8a5f817b4825972c9d26777fc5bd36049942367cbb85b05bdef87d6be962de1e | PASS |
| wave-4/outputs/company-dossiers-wave-4.md | d05874109b4d301a9afe457fac54b3cb6a716e9d48f9255bb7eaf145a0b9658b | d05874109b4d301a9afe457fac54b3cb6a716e9d48f9255bb7eaf145a0b9658b | PASS |
| wave-4/outputs/github-wave-4-report.md | 9109095fc8970d7f81c738d74c7f222eb65e4581a80c6e0a71d11c465e2107f0 | 9109095fc8970d7f81c738d74c7f222eb65e4581a80c6e0a71d11c465e2107f0 | PASS |
| wave-4/outputs/github-wave-4.jsonl | 3a40ee25b72ecd0530ea866abeda2f68cf0231dca6965583022dfbcbd4355bc6 | 3a40ee25b72ecd0530ea866abeda2f68cf0231dca6965583022dfbcbd4355bc6 | PASS |
| wave-4/outputs/niche-matrix-join-wave-4.md | 2b1dce4d78ade0dedd8f63e1f0815b8bd0b5b4d929f50258eb2e95fd3218836b | 2b1dce4d78ade0dedd8f63e1f0815b8bd0b5b4d929f50258eb2e95fd3218836b | PASS |
| wave-4/outputs/public-signals-wave-4.md | 7fb8749e7f89d3d6c83b0bcdab3ededb7f00e56bd1caa3ac22acc1c40720877c | 7fb8749e7f89d3d6c83b0bcdab3ededb7f00e56bd1caa3ac22acc1c40720877c | PASS |
| wave-4/outputs/repo-matrix-wave-4.jsonl | 3ee4d164d78a75662d52f7a7254f55fb7b0d29073789b52a93f76f136a932333 | 3ee4d164d78a75662d52f7a7254f55fb7b0d29073789b52a93f76f136a932333 | PASS |
| wave-4/outputs/standards-applicability-wave-4.md | a545a6facb2d5ade9288a29d377f86760cdaef8a3c0d2fec25be17bb208df1f1 | a545a6facb2d5ade9288a29d377f86760cdaef8a3c0d2fec25be17bb208df1f1 | PASS |
| wave-4/wave-4-state.json | 2e5539e63eb73e6644dcf844ccc71e2d1bfb72633ff40cd0e2e02a9745d929a3 | 2e5539e63eb73e6644dcf844ccc71e2d1bfb72633ff40cd0e2e02a9745d929a3 | PASS |
| wave-5/WAVE-5-PROGRAM.md | f5a26443c44833a7617dfc4fd40140a315bf7539afaa09e8649bac75aba90831 | f5a26443c44833a7617dfc4fd40140a315bf7539afaa09e8649bac75aba90831 | PASS |
| wave-5/outputs/company-dossiers-wave-5.md | b27d9118201bd487489cf68745a1a0f411281f668217ee8f45d03d8e65ba2b54 | b27d9118201bd487489cf68745a1a0f411281f668217ee8f45d03d8e65ba2b54 | PASS |
| wave-5/outputs/github-wave-5-report.md | 63b371eb8eae3c5c7859d28d5f78d298a9c6adeabbf8239e9ae3d1379b4c88ec | 63b371eb8eae3c5c7859d28d5f78d298a9c6adeabbf8239e9ae3d1379b4c88ec | PASS |
| wave-5/outputs/github-wave-5.jsonl | f8dc59169090e3e4d7c22307c156bf231136a0c68c80c01adcb643f133b41fcb | f8dc59169090e3e4d7c22307c156bf231136a0c68c80c01adcb643f133b41fcb | PASS |
| wave-5/outputs/niche-matrix-join-wave-5.md | 1cd3d59a36b8fe0292fabc21710661597d3e1480715a62dc680e1024aac1ae6b | 1cd3d59a36b8fe0292fabc21710661597d3e1480715a62dc680e1024aac1ae6b | PASS |
| wave-5/outputs/public-signals-wave-5.md | 3fea0e613bec9955f8ce24281eb71a730878b5c6ebc475a8e942dd8c8fd70378 | 3fea0e613bec9955f8ce24281eb71a730878b5c6ebc475a8e942dd8c8fd70378 | PASS |
| wave-5/outputs/repo-matrix-wave-5.jsonl | 089a37301c5545670c18bad71d40201315cba7b01e337149b02ae737cd70d257 | 089a37301c5545670c18bad71d40201315cba7b01e337149b02ae737cd70d257 | PASS |
| wave-5/outputs/standards-applicability-wave-5.md | 2773a2f14442e65e62249f5484ddda05142b1ff5e5849309dfa208473fd3a4dc | 2773a2f14442e65e62249f5484ddda05142b1ff5e5849309dfa208473fd3a4dc | PASS |
| wave-5/wave-5-state.json | 12b95ceb6e8cfaab319a138a765ec89601daa9dcf759df2462f604062899df4d | 12b95ceb6e8cfaab319a138a765ec89601daa9dcf759df2462f604062899df4d | PASS |
| wave-6/WAVE-6-PROGRAM.md | 82cbd20803fa7e6035c4376cc21ab9baafccc240bfd637336c97e6f338b435c1 | 82cbd20803fa7e6035c4376cc21ab9baafccc240bfd637336c97e6f338b435c1 | PASS |
| wave-6/outputs/company-dossiers-wave-6.md | 887707e3945930ee6aca0fbd4d7ff43460f8bbcaca3dc996992451cba161f797 | 887707e3945930ee6aca0fbd4d7ff43460f8bbcaca3dc996992451cba161f797 | PASS |
| wave-6/outputs/github-wave-6-report.md | 7077fa67e96b5710f5b4c470c96f300dc4a9379b36c83f1e04242eeba2c473b8 | 7077fa67e96b5710f5b4c470c96f300dc4a9379b36c83f1e04242eeba2c473b8 | PASS |
| wave-6/outputs/github-wave-6.jsonl | b0f4ce8423e96855174501603959f5219f6e49bd695e185dcf1cfc7c5abf235a | b0f4ce8423e96855174501603959f5219f6e49bd695e185dcf1cfc7c5abf235a | PASS |
| wave-6/outputs/niche-matrix-join-wave-6.md | 0fc98e7f31dcd2349ee58cbb3012e64eea1451c0c14d601d5215500361c43b05 | 0fc98e7f31dcd2349ee58cbb3012e64eea1451c0c14d601d5215500361c43b05 | PASS |
| wave-6/outputs/public-signals-wave-6.md | 4817483efb825a7097b92644bdf17ffc619140295f465b4a62478a6ad9c4d261 | 4817483efb825a7097b92644bdf17ffc619140295f465b4a62478a6ad9c4d261 | PASS |
| wave-6/outputs/repo-matrix-wave-6.jsonl | 2cc111d73b124dd73422dc9b9538223206dccc010930c91f68886c0d9a6e26ce | 2cc111d73b124dd73422dc9b9538223206dccc010930c91f68886c0d9a6e26ce | PASS |
| wave-6/outputs/standards-applicability-wave-6.md | bf2fd9467c3b66b933b94a8df1bbb5ac8a723d711614991fe80ca770ff90e8c7 | bf2fd9467c3b66b933b94a8df1bbb5ac8a723d711614991fe80ca770ff90e8c7 | PASS |
| wave-6/wave-6-state.json | 4d533342200951950a37910733b4b647f30de377ec69c6eb5156bd6cc3ceb73e | 4d533342200951950a37910733b4b647f30de377ec69c6eb5156bd6cc3ceb73e | PASS |

The strict source pool contains 208 records with README, API, top-level, fetched source-path, license, activity, and repository-API issue metadata receipts. 292 tranche records remain excluded because a required receipt is missing or disposition is rejected; they remain explicit evidence gaps.

## Task slots

| Task | Result | Evidence |
|---:|---|---|
| 1 | PASS | Parent, tranche, and Waves 2–6 were read and hashed before writing. |
| 2 | PASS | The strict source-path-backed pool was filtered for repository API, README, top-level, license, activity, and issue metadata. |
| 3 | PASS | Every selected repository is fresh within its exact cell relative to parent + Waves 2–6. |
| 4 | PASS | All 170 cells received indices 51–60 with ten exact-cell observations. |
| 5 | PASS | GitHub and matrix slot IDs align one-to-one; every selected slot was parent-unobserved. |
| 6 | PASS | README/API/top-level/source-path and issue-signal receipts are carried on every row. |
| 7 | PASS | License and rights states, including no-license, copyleft, source-available, archived, and unknown boundaries, remain explicit. |
| 8 | PASS | Report counts are derived from the emitted rows and reconcile to the combined floor. |
| 9 | PASS | Post-write smoke passed; fresh CENA callback was submitted and verified in coordinator readback. |

## Floor and delta counts

| Metric | Count |
|---|---:|
| Parent ledger rows | 17,000 |
| Parent observed before expansion | 750 |
| Pre-Wave-7 combined observed floor | 8,500 |
| Wave-2 matrix delta | 950 |
| Wave-3 matrix delta | 1,700 |
| Wave-4 matrix delta | 1,700 |
| Wave-5 matrix delta | 1,700 |
| Wave-6 matrix delta | 1,700 |
| Wave-7 matrix delta | 1,700 |
| Combined observed after Wave 7 | 10,200 |
| Industry×dimension cells | 170 |
| Minimum/maximum W7 delta count | 10/10 |
| Minimum/maximum combined count | 60/60 |
| Unique repositories in Wave-7 delta | 142 |
| Freshness within every cell | PASS |
| Remaining parent slots | 6,800 |

## Delta rows by source lane

| Source lane | Rows |
|---|---:|
| ast | 6 |
| browser | 487 |
| builder | 169 |
| data | 577 |
| eval | 26 |
| provenance | 51 |
| registry | 152 |
| sandbox | 34 |
| scaffold | 198 |

## Delta rows by source disposition

| Source disposition | Rows |
|---|---:|
| candidate | 551 |
| hold | 1116 |
| reference | 33 |

## Delta rows by license state

| License state | Rows |
|---|---:|
| copyleft_or_reciprocal | 96 |
| declared_permissive | 849 |
| no_declared_license | 518 |
| source_available_or_other | 237 |

## Evidence and rights boundary

Every selected repository has README, API, top-level tree, fetched source-path, license, activity, and repository-API issue receipts. Every row has admission_status not_admitted. Issue and pull counts are bounded maintenance signals only; issue and PR page content was not independently reviewed. A declared license is not license clearance, and no-license, copyleft, source-available, archived, mixed-asset, and other states remain visible. No row claims execution, safety, portability, deployment, rollback, Actionist behavior, client value, adoption, or business outcome.

## Per-cell index proof

Every cell has the exact Wave 7 index set 51,52,53,54,55,56,57,58,59,60. Combined with parent + Waves 2–6 indices 1–50, every cell has 60 observed rows. Every Wave 7 slot was unobserved in the parent ledger and absent from Waves 2–6.

## Machine checks

- both JSONL outputs parse;
- each output contains 1,700 rows;
- GitHub and matrix slot sets are identical and unique;
- every cell has indices 51–60 exactly once;
- every Wave 7 slot was parent-reserved and absent from Waves 2–6;
- every Wave 7 repository is fresh within its exact cell relative to prior observed rows;
- parent + Waves 2–7 equals 10,200 rows with 60 in each of 170 cells;
- every selected row carries README/API/top-level/source-path and issue-signal receipts;
- all prior hashes are unchanged;
- no admission state is claimed.

## Remaining boundary

The parent 17,000-slot / 100-per-cell objective remains active. Wave 7 leaves 6,800 reserved or unobserved slots. This lane authorizes no implementation, repository extraction, dependency admission, client-data use, production deployment, or block admission.

## Outputs

- outputs/github-wave-7.jsonl — raw GitHub observation delta (1,700 rows)
- outputs/repo-matrix-wave-7.jsonl — matrix delta (1,700 rows)
- outputs/github-wave-7-report.md — this report

## Callback receipt

Fresh Herdr pane resolution identified the CENA coordinator pane `w659e02f80e5bb1-1`; the pane list and recent coordinator context were verified before dispatch. The DONE message was staged while the coordinator turn was busy, submitted with the required Enter-only retry after a bounded wait, and confirmed in the subsequent visible pane readback. CENA recorded the GitHub W7 lane as returned and verified: 1,700 fresh GitHub and matrix rows at indices 51–60, 10,200 combined observations at 60 per cell, and 6,800 parent slots remaining active. No blocker, admission, build, or implementation claim was made.
