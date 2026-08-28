# S1-L2 coordinator verification receipt

Lane: `S1-L2` — P03 curated capability shelf

Verdict: `VERIFIED_WITH_HOLDS`

Promotion: false

Sprint 1 completion: not claimed

## Structural verification

- Required packet exists.
- Lane smoke passes with zero failures when run from its declared run directory.
- The smoke is load-bearing according to the lane's recorded negative test; coordinator did not rewrite the packet to repeat that destructive fixture.
- The smoke has a portability weakness: invoking it from the project root by absolute path reports eight missing files because paths are cwd-relative.
- Exact data rows, excluding summary records: 200 OSS repositories, 100 commercial vendors, 100 innovations and 23 source records.
- Derived graph counters reconcile after the lane's independent taxonomy repair: 446 supply edges, 28 kinds and 27 sources supplying at least three kinds.
- The completed product-versus-primitive split classifies all 200 OSS rows as 134 products, 20 frameworks and 46 primitives. Product-basis capability classification is 13 commodity / 6 scarce / 3 product-layer-missing / 2 underdetermined. The older 17 / 4 / 1 / 6 row-basis result is retained only as historical discovery breadth.
- Ten decisions and four checkpoints exist.
- The latest lane smoke binds the new split and passes with zero failures and zero warnings.
- Coordinator content review caught stale prose after the SignServer product-to-primitive correction. The lane regenerated all per-kind notes from counters and added a negative-tested prose-versus-counter gate; the exact `6 products` defect now fails the smoke.

## Claim verification and narrowing

1. **Portal:** the repaired 200-row shelf contains two portal-tagged repositories and zero rows that are both permissive and candidate. The remaining rows are `open-formulieren/open-forms` and `nextcloud/server`, both copyleft references. Accept only the scoped claim: `zero clean portal candidate in this curated shelf under the strict external-user portal archetype`. Do not promote the universal claim that no clean OSS portal exists anywhere.
2. **Case/workflow:** the completed tier pass corrects the earlier full-product framing. Flowable and jBPM are permissive workflow-engine primitives, not complete case products; Camunda's open engine and separately licensed UI reinforce the split. Across the 13 case/workflow rows, seven runnable products exist but zero are clean permissive products. The scoped decision is `borrow the engine; build the Actionist case surface`, not build the state-machine core from scratch.
3. **Large corpus interface:** the local Foundry client and SKILL exist, and the exact read-only status command currently reports the remote engine unreachable. Corpus contents and all 1.3M/1.36M/850k-80k counts remain unverified.
4. **Foundry exit-code defect:** retracted. A fresh coordinator run of `~/.claude/skills/foundry-corpus/foundry status --json` returned `ENGINE UNREACHABLE` with exit code 4, matching the documented contract. The lane independently confirmed that its earlier probe captured `head`'s pipeline status rather than Foundry's status and corrected D-09/SRC-018/report/lane-state. There is no current Foundry exit-code defect.
5. **Commercial shelf:** exactly 17 vendor rows are direct (`D`) and 83 are inference/recall (`I`). The 83 rows may inform search and comparison queues but cannot support client-facing pricing, white-label, embed or procurement claims until re-read first-party.
6. **Product versus primitive:** raw clean-candidate counts overstate shippable supply. E-sign has eleven rows and three permissive candidates, but the permissive rows are signing libraries without the product workflow, signer identity or audit trail; the full products found are copyleft. Scheduling shows the same split, with `calcom/cal.diy` the only permissive full booking product in the fifteen-row shelf. All 23 kinds require this split before commodity counts are treated as settled.
7. **Two-counter rule:** `rows` measures discovery breadth; `supply_under_usable_terms` must require a runnable product that actually serves the capability. Only the second counter can inform build-versus-borrow. The portal repair, e-sign/scheduling split and prior connector correction all demonstrate this distinction.

## Holds carried into convergence

- `H-S1L2-01`: Foundry corpus is unreachable; no live corpus count or search result enters the handoff.
- `H-S1L2-02`: user-provided SaaS/repository lane is empty because no client list was found; do not substitute internal surveys.
- `H-S1L2-03`: 83/100 commercial rows require first-party verification before quotation or promotion.
- `H-S1L2-04`: no dependency-tree or SBOM evidence exists; no repository is admitted.
- `H-S1L2-05`: Foundry exit-code defect is non-reproduced and excluded from current decisions.
- `H-S1L2-06`: tiering is based on the lane's metadata and targeted source reads, not executed product qualification; no row is admitted.

## Convergence disposition

P03 may feed S1 convergence as evidence with the above scope and holds. It is not promoted to the knowledge spine, does not unlock Sprint 2 by itself, and does not establish a reusable or admitted block.
