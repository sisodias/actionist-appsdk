# Action Model (Actionist / Cena) — project instructions

Paid client work for Sina "Cena" Yamani. Everything here is read by, or turns into,
something a client sees. Accuracy outranks throughput.

## Model routing — overrides the global default

**Opus only. No Haiku, no MiniMax, on any Action Model work.**

Set `model: "opus"` **explicitly** on every subagent dispatch. Do not let an agent
inherit a model, and do not let a skill choose one.

This is a deliberate override of the workspace/global model-policy, which names Haiku as
the approved cheap bulk-transport lane. That default does not apply here. Skills whose
descriptions advertise a Haiku/MiniMax lane — `code-search-campaign`, `haiku-dispatch`,
`async-dispatch`, `subagents`, `siso-routing`, `model-routing` — must be overridden when
invoked on this project. "It's only bulk extraction / recon / a sweep" is **not** an
exemption; that is exactly where the expensive mistakes hide.

Why: this is licence and catalog research feeding a client deliverable. A missed ELv2
hosting clause, a miscounted connector total, or an MIT badge taken at face value costs
real money and credibility with Cena. Two examples already caught on 27 Aug: Composio's
MIT covers only an SDK to a paid hosted API (no toolkits in the repo), and a headline
"728 connectors" was really 113 OAuth ones. Both needed someone actually reading the
directory and the LICENSE body.

Luna/Sol: Shaan directed Opus over Luna for this project on 26 Aug. `gpt-sol` remains
available as a deliberate cold-review gate at commitment boundaries, not as a work lane.

## Evidence standard

Verify from the live source and say what was checked. Distinguish observed from inferred.
A star count or a licence badge is a claim to investigate, never a verdict — read the
directory and the LICENSE text. Re-run counts from source immediately before quoting
them, and prefer the number that survives scrutiny over the number that sounds best
(quote 113 OAuth connectors, not 728 services).

## Filing

The canonical workspace is `clients/actionmodel/`. The upstream `Actionist-AppSDK/` clone
is separate and must never receive or push this work. Its old `SISO/` directory contains
compatibility symlinks only.

Current synthesis → `knowledge/`. Original research → `research/`. Design/contracts →
`architecture/`. Client-facing prep and communications → `client/`. Static views → `site/`.
The research pack is internal only: never publish or share without Shaan's explicit go.
