# Lane-owner finding — archetype coverage of the 17 industries

Lane: S1-L3. Run: 2026-08-27-sprint-1-fable. Computed by the lane owner: 2026-08-27.
Evidence class: **observed** (arithmetic re-run from a transcribed source table).
Source table: `research/actionmodel-builder-research-2026-08-26/phase-8/lanes/03-b2b-template-shelf/outputs/b2b-template-shelf-report.md` §3 (17 industry rows, each with a primary and secondary archetype).

This answers P08 open question "Which archetypes cover 80% of the first 17 industries?" and
corrects a reading of the shelf report that the lane considers a live trap.

## The trap

The shelf report states `case_workflow` is primary for 6/17 and `portal` is secondary for 6/17,
and concludes those two archetypes "carry the majority of catalogue demand." That is true as
stated, but it is easy to over-read into *"build case_workflow + portal and you cover most of
the 17 industries."* Recomputed, that is false.

## Recomputed distribution

Primary archetype frequency across the 17 industries:

| archetype | industries as PRIMARY |
|---|---:|
| case_workflow | 6 |
| field_operations | 2 |
| learning_content | 2 |
| scheduling | 2 |
| crm | 2 |
| finance_ops | 1 |
| inventory | 1 |
| support_desk | 1 |
| portal | 0 |
| marketplace | 0 |

Secondary archetype frequency: portal 6, case_workflow 3, finance_ops 2, support_desk 2,
scheduling 2, field_operations 1, inventory 1, crm 0, learning_content 0, marketplace 0.

## The two results that matter

1. **`case_workflow` OR `portal`, counting either role, reaches 11/17 industries = 65%.**
   Not 80%. A two-archetype programme leaves a third of the denominator uncovered.

2. **Reaching the 80% threshold (14/17) requires five primary archetypes:**
   `case_workflow` (6) + `field_operations` (2) + `learning_content` (2) + `scheduling` (2) +
   `crm` (2) = 14/17. Greedy cover; the last four each contribute equally, so the specific
   tail set is not unique — but the *count* of five is the load-bearing number.

`portal` is primary for zero industries while being secondary for six. That is a real
structural signal, not noise: portal behaves as a **cross-cutting access surface layered onto
another spine**, not as a standalone application archetype. This is consistent with the shelf
report's own definition of portal as "an authorization product before it is a UI."

## Consequences for the lane

- P08's shell option matrix must not be scored against a two-archetype world. Five primary
  spines is the honest planning denominator for 80% coverage.
- Portal being 0-primary/6-secondary supports treating portal as a **host-shell capability**
  (untrusted external identity + scoped read) that composes over other archetypes, rather than
  as its own shell topology. This is a hypothesis, not a conclusion, and P08 should test it.
- `marketplace` remains 0-primary/0-secondary — the shelf report's "no demand anchor" holds
  under recomputation. Do not build speculatively.

## Falsifier

If a built `case_workflow` spine cannot be re-skinned across law firms, insurance, mortgage,
property management, recruiting and marketing retainers without rewriting its state machine,
then even the 6/17 primary figure overstates reusable coverage and the archetype layer is an
illusion — the shelf report's own §3 falsifier, inherited here unchanged.

## Limitation

This is arithmetic over an `I`-class (inferred) assignment table. The shelf report is explicit
that archetype assignment is judgement and industry fit values are hypotheses, not validated
demand. Recomputing the table does not upgrade its inputs: the *percentages are observed*, the
*industry→archetype mapping underneath them is inferred*.
