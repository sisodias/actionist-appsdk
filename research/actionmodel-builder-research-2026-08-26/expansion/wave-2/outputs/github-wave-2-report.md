# GitHub wave 2 — matrix evidence ledger report

**Wave:** `matrix-wave-2-industry-dimension-deepening`  
**Lane:** `RCH-GITHUB-W2`  
**Mode:** research and ideation only; no implementation, repository copying, client data, or admission  
**Observed:** 2026-08-26

## Verdict

**PASS for the RCH-GITHUB-W2 lane floor and artifact checks.** The delta adds **950** evidence-backed repository observations, bringing the parent ledger from 750 to **1700 observed slots**. All 170 industry×dimension cells now have exactly 10 observed rows in the combined view. The 100-per-cell / 17,000-slot parent goal remains active: **15300 slots remain unobserved** after this wave.

This is a ledger delta, not a rewritten parent ledger. The 500-row tranche and 17,000-slot ledger were read-only inputs; their hashes are unchanged.

## Immutable inputs

| Input | Rows | SHA-256 before | SHA-256 after | Result |
|---|---:|---|---|---|
| `expansion/outputs/github-expansion.jsonl` (500-row tranche) | 500 | `25fc2201c1f1f158993724f7f6abd1ddae0b1d5c82be8c8f60b9be2616959df8` | `25fc2201c1f1f158993724f7f6abd1ddae0b1d5c82be8c8f60b9be2616959df8` | PASS |
| `expansion/outputs/repo-matrix-observations.jsonl` (17,000-slot ledger) | 17000 | `1d4f56da0d54be7e8847ded834261a7faff3bb131b9c76ace9d5c66863b9e107` | `1d4f56da0d54be7e8847ded834261a7faff3bb131b9c76ace9d5c66863b9e107` | PASS |

The selected source pool is limited to 208 tranche records with README, API, top-level, and source-path receipts. The remaining 292 tranche records remain explicit non-selected/blocked inspection gaps; they were not upgraded by this wave.

## Twelve task slots

| Task | Result | Evidence |
|---:|---|---|
| 1 | PASS | All 170 cells were checked against observed rows; deficits were filled only into reserved indices 1–10. |
| 2 | PASS | Query plan covers all 17 catalogue industries × 10 dimensions, with 12 team lenses, 66 use-case cards, and 12 atoms retained from the catalogue-to-matrix join. |
| 3 | PASS | Authenticated bounded GitHub sweep ran 22 queries; all returned successfully; source query and inspection receipts are retained per observation. |
| 4 | PASS | 500-row tranche and canonical owner/name IDs were preserved; no baseline input file was rewritten. |
| 5 | PASS | Every selected observation carries README, API, top-level tree, and source-path receipts from the immutable tranche record. |
| 6 | PASS | Each row has one exact `industry_id` × `dimension_id` assignment; repeated repositories have independent dimension/cell notes. |
| 7 | PASS | Accounting Firms, Course Creators, and SaaS are included in the priority floor and each reaches 100 observed slots in the combined ledger. |
| 8 | PASS | Eval, provenance/rights, agent authority, and economics/maintenance cells are explicitly filled across all 17 industries. |
| 9 | PASS | No-license, copyleft, source-available, and other rights states remain on the source receipt; no empty slot was converted into negative evidence. |
| 10 | PASS | Raw delta, report, and per-cell matrix delta are emitted; no 100-per-cell completion claim is made. |
| 11 | PASS | JSONL parse, uniqueness, reserved-slot, count, floor, and immutable-hash checks passed (see commands below). |
| 12 | PASS | Artifact was written and verified; the DONE callback was sent to the freshly resolved CENA pane and confirmed after the swallowed-Enter retry. |

## Query plan and grounding

The plan was constructed from the exact 17 catalogue industries in the immutable ledger, all ten matrix dimensions, and the 12 solution atoms in `expansion/outputs/niche-atom-block-join.md`. The 12 team lenses are: Admin & Front Office, Customer Support, Engineering, Finance & Accounting, Founders & Executives, HR & People, IT, Legal, Marketing, Operations, Product, Sales. The 66 catalogue use-case IDs remain authoritative in that join; this wave preserves them as a grounding lens rather than treating them as repository evidence.

| Industry | Bounded query terms | Dimensions |
|---|---|---:|
| Accounting Firms | accounting software; bookkeeping; ledger; invoice automation | 10 |
| Construction | construction project management; contractor; RFI; change order | 10 |
| Course Creators | course creator; learning platform; LMS; cohort | 10 |
| Ecommerce | ecommerce inventory; order management; retail | 10 |
| Education & Training | education enrollment; learning management system; training | 10 |
| Healthcare & Medical Practices | healthcare appointment; clinic scheduling; patient | 10 |
| Hospitality | hospitality reservation; hotel guest; booking | 10 |
| Insurance Agencies | insurance claims; policy administration; broker | 10 |
| IT Services & MSPs | IT helpdesk ticketing; MSP; incident management | 10 |
| Law Firms | legal document management; case management; contract | 10 |
| Logistics & Freight | logistics freight; shipment; carrier; proof of delivery | 10 |
| Marketing & Social Media Agencies | marketing social media analytics; content scheduling; campaign | 10 |
| Mortgage Brokers | mortgage loan; lender; borrower; loan conditions | 10 |
| Property Management | property management work orders; tenant; lease | 10 |
| Real Estate | real estate CRM; listing; viewing; lead | 10 |
| Recruiting & Staffing | recruiting applicant tracking; staffing; resume | 10 |
| SaaS | SaaS starter; multi-tenant SaaS; subscription; internal tools | 10 |

The live GitHub query sweep used these priority and coverage families: accounting automation, course platforms, SaaS starters, agent/LLM evals, provenance/SBOM/license evidence, authority/policy, economics/maintenance, and the remaining vertical workflow queries. The source records retain their original query strings and inspected URLs; a search result alone was never used as an observation.

## Floor counts

### Combined observed rows by industry

| Industry | Observed rows after wave |
|---|---:|
| Accounting Firms | 100 |
| Construction | 100 |
| Course Creators | 100 |
| Ecommerce | 100 |
| Education & Training | 100 |
| Healthcare & Medical Practices | 100 |
| Hospitality | 100 |
| IT Services & MSPs | 100 |
| Insurance Agencies | 100 |
| Law Firms | 100 |
| Logistics & Freight | 100 |
| Marketing & Social Media Agencies | 100 |
| Mortgage Brokers | 100 |
| Property Management | 100 |
| Real Estate | 100 |
| Recruiting & Staffing | 100 |
| SaaS | 100 |

### Delta rows by source lane

| Source lane | Delta observations |
|---|---:|
| `ast` | 5 |
| `browser` | 277 |
| `builder` | 140 |
| `data` | 182 |
| `eval` | 26 |
| `provenance` | 1 |
| `registry` | 42 |
| `sandbox` | 4 |
| `scaffold` | 273 |

### Delta rows by source disposition

| Source disposition | Delta observations |
|---|---:|
| `candidate` | 365 |
| `hold` | 579 |
| `reference` | 6 |

Unique repositories selected for the delta: **157**. A repository can appear in multiple industry×dimension cells only when this file records an independent relation note. No row uses an admitted state; every row has `admission_status: not_admitted`.

Priority cells are not hidden behind aggregate counts:

- Accounting Firms, Course Creators, and SaaS each have 10 observed rows in every dimension after the wave.
- Every industry has 10 `verification_eval`, 10 `provenance_rights`, 10 `agent_authority`, and 10 `economics_maintenance` rows after the wave.
- The floor is an evidence-coverage milestone only; it does not establish market demand, production reliability, rights clearance, or economic viability.

## Rights, evidence, and limitations

The records preserve tranche license states, including no declared license, copyleft/reciprocal, source-available/other, nonstandard/other, and declared permissive. A source record's `candidate`, `hold`, `reference`, or `unknown` disposition is carried through as research classification only. It is never translated to admission.

Evidence class `E` means the repository record contains direct first-party inspection receipts. The industry/dimension relationship is marked `supported` for an exact industry label or industry query, and `inferred` for cross-vertical reuse. Economics/maintenance rows intentionally record activity/license/dependency signals without inventing cost or support claims. All rows include a falsifier/next gate requiring direct review, pinned digest, dependency/SBOM and license review, and a synthetic read-only probe with post-condition and rollback evidence.

## Machine checks

The generator checked immutable hashes while emitting the artifacts. The final audit also ran:

~~~text
jq -e . outputs/github-wave-2.jsonl >/dev/null
jq -e . outputs/repo-matrix-wave-2.jsonl >/dev/null
node -e 'parse JSONL; assert 950 delta rows; assert unique slot_id; assert every delta slot was unobserved in the parent ledger; assert combined cell counts are 10'
~~~

Expected results: delta rows **950**, delta slot IDs unique **true**, combined cells **170**, minimum/maximum cell count **10/10**, parent observed before/after **750/1700**, and parent target **17,000**.

## Remaining boundary

The parent long-run goal remains active at 17,000 slots and 100 observations per industry×dimension cell. This wave leaves 15300 reserved/unobserved slots in the immutable parent ledger. The next gate is direct review and stronger receipts for the most reusable candidates; no implementation, extraction, dependency admission, or client-data use is authorized by this research artifact.

**Outputs:**

- `outputs/github-wave-2.jsonl` — raw GitHub observation delta (950 rows)
- `outputs/repo-matrix-wave-2.jsonl` — matrix ledger delta (950 rows)
- `outputs/github-wave-2-report.md` — this report

## Callback receipt

The coordinator pane was freshly resolved with `/Users/shaansisodia/.local/bin/herdr pane list`, then verified by reading pane `w659e02f80e5bb1-1` as the CENA coordinator before sending. The first send remained queued in the Codex composer; one explicit Enter retry submitted it. A fresh pane readback showed the short DONE message rendered in the CENA pane, and the pane status remained `working`.
