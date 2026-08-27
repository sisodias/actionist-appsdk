# Action Model Long-Run Research Campaign

Run ID: `actionmodel-long-run-2026-08-26`

This is the durable local control plane for the Action Model research effort.
It exists so the work continues across turns, context compactions, and worker
restarts without relying on chat history.

## Objective

Build an evidence-backed, repeatable path from an Actionist catalogue demand
card to a reusable solution atom, admitted Block Contract, semi-custom client
tool, and agent-operated workflow.

The campaign is deliberately broader than a Lovable comparison. It covers:

1. the commercial and open-source builder/agent landscape;
2. the local GitHub/OSS corpus and its admission pipeline;
3. the Actionist industry/team/use-case/idea crosswalk;
4. the validation, provenance, licensing, and client-value evidence needed to
   turn research into a product decision.

## Operating rules

- All durable outputs stay under this directory or the existing Action Model
  research/design directories.
- Workers own their lane output directory. They do not edit runtime application
  code, shared schemas, or another lane's files without a written handoff.
- Local evidence comes first: existing research, the 41 sweep lanes, the 389
  merged candidates, and mounted catalogues. Network research is used to close
  a named evidence gap, not to restart discovery from scratch.
- Marketing claims are recorded as claims until first-party behavior, source,
  docs, or a reproducible test supports them.
- Every meaningful work cycle writes a checkpoint before the worker reports
  status. A pane status is never completion evidence by itself.
- A lane is not complete until its output contains sources, confidence,
  rejected/held candidates, open questions, and a next queue.

## Success gates

The campaign is producing useful work when it can answer, with file-backed
evidence:

- What exact client outcome is being automated?
- Which reusable workflow atoms and blocks implement it?
- Which repository or platform proves each capability?
- What license, provenance, freshness, and adaptation work is required?
- What authority, approval, verification, rollback, and audit boundary exists?
- Which three vertical pilots should be built first, and why?

## Persistent lanes

| Lane | Mission | Durable output |
|---|---|---|
| `AM-PLATFORMS` | Deep-dive builders, agent operators, private platforms, and OSS alternatives | `outputs/platforms/` |
| `AM-CORPUS` | Turn the local GitHub/OSS/repo pile into an evidence-ranked candidate and block queue | `outputs/corpus/` |
| `AM-VERTICALS` | Build the Actionist taxonomy crosswalk and vertical workflow atoms | `outputs/verticals/` |
| `AM-SYNTHESIS` | Adversarially verify lane outputs and maintain the decision ledger | `outputs/synthesis/` |

Lane briefs live in `lanes/`. The machine-readable run state is `run.json`.

## Checkpoint protocol

Each lane maintains:

- `outputs/<lane>/CURRENT.md` — the latest compact state;
- `outputs/<lane>/checkpoint-NNN.md` — immutable evidence packets;
- `outputs/<lane>/queue.md` — the next bounded work items;
- `outputs/<lane>/status.json` — status, last checkpoint, blockers, and counts.

The orchestrator reads `CURRENT.md`, `status.json`, and named evidence files;
it does not ingest bulk pane transcripts.

## Run lifecycle

`provisioning → active → checkpointing → review → active → complete|blocked`

The initial wave should establish the queues and first evidence packets. Later
waves should deepen the highest-value gaps, not expand the scope indiscriminately.
