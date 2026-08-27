# Sprint 1 convergence contract

Owner: CENA coordinator

Status: waiting for all five Sprint 1 lane callbacks

Sprint 2 is blocked until this contract passes. Research agents provide evidence and bounded recommendations; they do not independently promote cross-system architecture.

## Inputs

- S1-L1: P01 and P02 — client intelligence and ProductSpec evidence.
- S1-L2: P03 — capability shelf, overlap graph and industry joins.
- S1-L3: P05, P06 and P08 — component, preference and shell evidence.
- S1-L4: P09, P10 and P11 — data, host and connector evidence.
- S1-L5: P13, P14 and P15 — editor, runtime, release and learning evidence.

This is twelve Sprint 1 part packets, not fifteen independent Sprint 1 answers. P04, P07 and P12 are intentionally synthesized in Sprint 2.

## Required convergence artifacts

Write under `research/workstreams/2026-08-27-sprint-1/convergence/`:

1. `S1-CONVERGENCE.md` — readable cross-lane synthesis.
2. `s1-contract-handoff.json` — normalized candidate contracts and unresolved fields.
3. `cross-lane-dependency-matrix.json` — exact evidence and contract dependencies.
4. `s1-decision-gates.json` — decisions classified as resolved, provisional, contradictory, experiment-required, Shaan-required or pilot-deferred.

## Ownership and verification

1. CENA verifies packet counts, hashes, source identities, evidence classes and links.
2. CENA deduplicates claims and normalizes terminology without rewriting historical receipts.
3. Contradictions remain explicit; convergence is not majority voting.
4. A fresh-context Opus verifier attacks promoted claims but owns no product decision.
5. Shaan reviews decisions that materially alter product direction, scope or irreversible architecture.
6. The relevant knowledge pages link verified artifacts after the convergence gate passes.

## Sprint 2 handoff

- S2-L1 consumes P03, P09, P10 and P14 to produce P04.
- S2-L2 consumes P05 and P06 to produce P07.
- S2-L3 consumes P05, P06, P08 and P13 to formalize shell and editor contracts.
- S2-L4 consumes all twelve verified Sprint 1 part packets to produce P12.
- S2-L5 consumes P09, P10, P11, P14 and P15 to formalize runtime and learning contracts.

## Promotion gate

Sprint 2 remains blocked until all five callbacks exist, all twelve part packets pass structural and claim verification, all four convergence artifacts exist, contradictions are classified, and operator-required decisions have been reviewed.
