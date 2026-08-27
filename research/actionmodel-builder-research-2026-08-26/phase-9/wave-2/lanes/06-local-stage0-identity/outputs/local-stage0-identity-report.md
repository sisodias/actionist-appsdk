# P9-L06 local Stage-0 identity

Observed 2026-08-27. Research-only metadata join of 70 Phase 8 template seeds and 17 B2B shelf rows.

| Measure | Count |
|---|---:|
| Input rows | 87 |
| Unique canonical repositories | 76 |
| Duplicate input rows | 11 |
| Overlap groups | 11 |
| Identity receipts | 76 |
| Strict Stage-0 identities | 76 |
| Unresolved identities | 0 |

Identity was established from public Git ref metadata using `git ls-remote --symref URL.git HEAD`: the symbolic default branch and its 40-character commit SHA were captured. The digest domain is the Git commit SHA-1 object ID; the digest method is the returned 40-character hexadecimal `HEAD` value. No repository was cloned, checked out, or read for source contents.

Each receipt also carries a GitHub repository API URL and canonical web URL as identity evidence. Declared license values are copied as metadata-only observations; they are not rights clearance. No license scan, SBOM, dependency review, Stage 2/Stage 3 assessment, admission, or promotion was performed or authorized.

The required lane state remains active/research-only/UNEXECUTED/NOT_ADMITTED with zero admitted blocks and promotion disabled. The no-bytecode verifier is `verify-no-bytecode.py`.
