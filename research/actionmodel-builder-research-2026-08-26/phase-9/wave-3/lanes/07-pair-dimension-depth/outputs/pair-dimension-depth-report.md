# P9-L07 pair-dimension depth

Observed: 2026-08-27. Scope is exactly the 166 resolved Wave2 L04 assignments. The four unresolved L04 positions are excluded; they are not padded, substituted, or emitted as pairs.

## Completion rule

A pair is **dimension-complete** only when all ten canonical cells have evidence class `direct` or `inferred`. `inherited` does not satisfy the threshold; `unknown` and `blocked` fail it. This is falsifiable: any one cell that is not `direct`/`inferred`, or whose source URL does not bind to the pair's exact canonical URL and 40-hex revision, makes the pair incomplete.

Result: 0 of 166 pairs newly meet all ten dimensions.

## Exact counters

- Cells: 1,660 expected; 1,660 emitted; 1,660 unique pair×dimension keys.
- Pairs: 166; canonical repository URLs represented: 165 (one repository is reused across two industries, preserving both pair identities).
- Evidence classes: direct 683; inherited 0; inferred 0; unknown 977; blocked 0.
- Completion: 0 complete; 166 incomplete.
- Unresolved positions deliberately omitted: 4 (`it_services_msps` position 22; `mortgage_brokers` position 16; `recruiting_staffing` positions 29 and 32).

| Dimension | Direct | Inherited | Inferred | Unknown | Blocked |
|---|---:|---:|---:|---:|---:|
| demand_atom_fit | 127 | 0 | 0 | 39 | 0 |
| workflow_behavior | 110 | 0 | 0 | 56 | 0 |
| data_model | 81 | 0 | 0 | 85 | 0 |
| integration_surface | 94 | 0 | 0 | 72 | 0 |
| ui_assembly | 70 | 0 | 0 | 96 | 0 |
| agent_authority | 89 | 0 | 0 | 77 | 0 |
| verification_eval | 31 | 0 | 0 | 135 | 0 |
| provenance_rights | 0 | 0 | 0 | 166 | 0 |
| runtime_deployment | 81 | 0 | 0 | 85 | 0 |
| economics_maintenance | 0 | 0 | 0 | 166 | 0 |

## Evidence boundary and blockers

Every direct cell is tied to the pair's canonical GitHub URL, its Wave2 immutable 40-hex revision, and a revision-pinned first-party raw README or manifest URL. Claims are concise structural observations with a falsifier. No target source was cloned, copied, executed, installed, built, deployed, benchmarked, license-scanned, or admitted.

The initial GitHub API metadata/tree/readme pass was blocked by unauthenticated core API exhaustion (HTTP 403, remaining 0). The completed pass therefore used only allowed revision-pinned raw README/manifest reads; unavailable metadata was not converted into evidence. Provenance/rights is unknown because rights metadata is not clearance and no license scan was authorized. Economics/maintenance is unknown because no explicit qualifying evidence was available within the allowed reads.

## Smoke result

PASS after verification: JSONL parses; exact 1,660 row count; exact 166×10 key set; no duplicate keys; every cell has canonical URL, immutable revision, source URL, observed claim, and falsifier; all resolved revisions are 40-hex; receipts count is 166; lane state contains the required research-only/unexecuted/not-admitted boundary; no bytecode artifacts are present.
