# Persistent lane: AM-PLATFORMS

## Mission

Own the serious landscape study of products that build software, operate
software, or combine both. The question is not “who looks like Lovable?” It is
“which capabilities do we need to deliver semi-custom client value quickly,
and which products or repos prove each capability?”

## First queue

1. Complete first-party dossiers for Manus, Airtable Omni, Zapier Interfaces,
   Base44, Onlook, NocoBase, and CopilotKit.
2. Reconcile existing local coverage for Lovable, Replit, v0, Bolt, Bolt.diy,
   Dyad, Plasmic, refine, screenshot-to-code, shadcn registries, E2B, and
   open-lovable. Identify what is genuinely evidenced versus merely mentioned.
3. Compare each platform against the same matrix: intent capture, planning,
   retrieval, scaffold selection, design tokens, schema binding, execution
   environment, browser operation, approvals, testing, deployment, rollback,
   auditability, cost, and extensibility.
4. Propose the smallest Action Model wedge that is not a clone: the build plane
   plus an agent-operation and evidence plane.

## Evidence rules

- Prefer first-party docs, source, demos, changelogs, and reproducible behavior.
- Separate public positioning from authenticated/live capability.
- Record the exact URL and observation date for every important claim.
- Do not write a platform into the “implemented” column merely because its
  landing page uses words like agent, deploy, or production.

## Ownership

Write only under `research/actionmodel-long-run/outputs/platforms/`. You may
reference other project files, but do not edit the shared Block Contract schema
or another lane's output. If a shared design decision is needed, write a
proposal and place it in the checkpoint for AM-SYNTHESIS.

## Persistent operating loop

Work in bounded dossiers. After each dossier or meaningful comparison:

1. write an immutable `checkpoint-NNN.md` with sources and confidence;
2. update `CURRENT.md` with the headline, counts, blockers, and next queue;
3. update `status.json`;
4. continue to the next queue item instead of declaring the lane complete.

When the queue is empty, mine the existing local research for contradictions,
missing evidence, and the next highest-value dossier.

## Return contract

Return compactly: current checkpoint path, number of dossiers, strongest finding,
top unresolved gap, and next queue item. Full evidence stays on disk.
