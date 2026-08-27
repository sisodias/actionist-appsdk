# Builder design principles — from Shaan, 26 Aug 2026

Three principles set by Shaan before the Cena call. All research and architecture work
must be evaluated against these. Research reports land in `../research/` as
`principle-*-2026-08-26.md`.

## P1 — Assembly + interstitial retrieval

A nice UI might cost millions of high-quality tokens to generate from scratch — but if
the code already exists on GitHub, it's just integration. Therefore the corpus query is
not a one-shot template pick at the start: **the pipeline scrapes/queries the indexed
corpus between every step.** After spec → find scaffolds. After design → find component
implementations. Per feature → find reference implementations. At integration → find
glue/adapter code. The corpus grows daily ("cooler ones coming out every single day"),
so retrieval is a living step, not a static library lookup.

Assets: the ~850k-repo scrape (80k+ categorized, ~300 categories — location TBC, likely
Mac Mini/home server) and the Great Library registry structure
(`Great_Library_of_SISO/registry/{assemblies,works,source-inventories,...}`).
Note: the "couple million repos indexed" figure needs verification against the live DB
before it's used with the client — receipts first.

## P2 — Image-gen as the design front-end

Before any code: use image generation to iterate look-and-feel with the client.
Generate page concepts, moodboards, **design-token candidates** (palettes, type scales,
spacing), full mockups. Client reacts in seconds per round instead of minutes per code
iteration — "feeling vibes and feels from the client." Only approved mockups get
reversed into code, mapped onto the component library where possible rather than
pixel-perfect reproduction.

## P3 — Conversational/voice guide agent

The user is guided through the whole build by an agent they can message **or physically
talk to** (voice). It elicits requirements, presents design rounds, narrates progress,
collects approvals. Rationale: for non-technical users, guided conversation is the
easiest way to drive a build. (Note: Shaan sent Cena livekit/livekit in Mar 2026 —
prior art already in the relationship.)

## Pipeline ordering (working position, to pressure-test with research)

Design decides *what*; retrieval supplies *how*. So per build-phase the order is:

```text
guide conversation (P3, continuous spine)
  → spec (structured, confirmed)
  → design rounds via image-gen (P2) → tokens + approved mockups
  → interstitial retrieval (P1) against spec+design → scaffold & components
  → assemble → validate → preview (guide presents) → repair/iterate
  → per-feature loop: retrieve → adapt → validate (P1 again, every step)
```

Shaan's instinct ("probably after, because you need to know what we're building") holds
for the design→retrieval order; the refinement is that retrieval is *also* a pre-design
input in one narrow way: the component library constrains what design directions are
cheap, so the design round should be seeded with styles the library can actually honor.
Differentiation claim: P1's between-every-step retrieval and P2's image-first token
generation are things "people aren't doing" — the research lanes exist to confirm or
kill that claim with evidence.
