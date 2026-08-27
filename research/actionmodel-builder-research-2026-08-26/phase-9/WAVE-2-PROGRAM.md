# Phase 9 Wave 2 — strict evidence backfill

Wave 1 proved that row volume was not closure: later dimension waves had zero overlap with the authoritative target identities, only 84 of 16,992 competitor cells were direct, and no local asset met strict Stage 0 identity.

Wave 2 owns three disjoint corrections.

## P9-L04 — target identity backfill

Own `phase-9/wave-2/lanes/04-target-identity-backfill/outputs/` only.

Take the first ten deficit target positions per industry from the verified 1,700-row pair ledger: exactly 170 positions. Resolve a real canonical repository URL and immutable public revision for each position from existing Phase 7 industry-join pages, GitHub candidate registers and recorded public metadata. Enforce uniqueness within each industry and record cross-industry reuse explicitly. No padding or invented identities. Every unresolved position remains a deficit. Emit assignment, identity-edge and source-receipt JSONL ledgers plus a report, lane state and verifier.

## P9-L05 — competitor direct-evidence tranche

Own `phase-9/wave-2/lanes/05-competitor-direct-evidence/outputs/` only.

Select a deterministic high-priority tranche of 30 product surfaces from the 118-surface universe. Re-evaluate all 144 canonical features for those surfaces using feature-specific first-party documentation only. Produce exactly 4,320 surface-feature dispositions, with direct claims carrying URL, evidence date and claim text. URL reachability is not capability evidence. Preserve unknown and blocked cells. Emit the tranche ledger, source receipts, report, lane state and verifier.

## P9-L06 — local Stage-0 identity receipts

Own `phase-9/wave-2/lanes/06-local-stage0-identity/outputs/` only.

Join the 70 template seeds and 17 B2B shelf rows, deduplicate canonical repositories, and use public GitHub metadata/API evidence to capture immutable commit SHAs, canonical URLs, declared license state and content-identity method without cloning or reading source. Emit one receipt per unique candidate and explicit gap records for anything unresolved. Report how many now satisfy strict Stage 0 identity; do not promote rights, shape, dependency closure or admission.

## Boundary and verification

Research-only; no client data, vendor login, clone/copy/source execution, build, deploy, benchmark, license scan, SBOM or admission. Compact outputs only. Each lane must provide stable schemas, exact denominators, evidence classes, hashes, no-bytecode smoke and canonical top-level state fields. Parent goal stays active and promotion stays false.
