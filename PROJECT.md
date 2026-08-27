# Actionist Builder — project groundwork

**Codename:** actionist-builder. **Status (26 Aug 2026):** first Cena call done; groundwork phase.

> **Home (reorganized, 27 Aug):** the canonical workspace is now
> `clients/actionmodel/`. The empty upstream clone remains at `Actionist-AppSDK/`, while
> its former `SISO/` workroom is a compatibility-symlink layer. Nothing in this workspace
> should be committed or pushed to Sina's upstream repo. Workroom: http://localhost:8741/.
> `design/block-contract.schema.json` v0 exists (probe-tested). v0 Platform API spike is
> BLOCKED on a v0/Vercel API key (none found in ~/.zshrc, ~/.zshenv, ~/.vercel) — ask Shaan.

**Voice key for the WhatsApp export:** "SISO" = Shaan (us). "Cena Colada" = the client,
Sina Yamani. Relationship: 18-month peer/friend dynamic, not vendor-prospect — Cena has
been converted by watching Shaan's infra work and is hiring the person, not running an RFP.
Posture on everything client-facing: trusted peer delivering, never agency pitching.
Current reasoning lives in `knowledge/`. Call context:
`client/call-prep/2026-08-25-call-brief.md`. Client background: `README.md` +
`research/actionmodel-deep-dive/`.

## The build, in one paragraph

A Lovable-style builder embedded in Actionist: user describes an app → agent asks clarifying
questions → confirms a spec → assembles a working app. The architectural bet (agreed with
Cena across 17 May–9 Jul chat) is **assembly over generation**: a curated library of vetted
scaffolds/components mined from GitHub does the heavy lifting, so cheap models
(MiniMax-class, his hard constraint) only orchestrate, adapt, and glue — they never
free-generate an app from scratch. Second moat: image-gen UI iteration (mockup rounds in
seconds with the client, then reverse the chosen mockup into code) instead of code-first
UI loops.

## Architecture skeleton (v0 hypothesis, to validate on call)

1. **Intake agent** — prompt → structured spec (app type, entities, integrations, auth,
   billing, pages). Cheap model + fixed question tree.
2. **Scaffold matcher** — spec → base template + component set from the library. This is
   retrieval/ranking, not generation. Powered by the categorized GitHub corpus distilled
   into a vetted sourcebank (Cena's 26 Jun insight: "Lovable has thousands of vetted
   templates… finds a nice base template and pieces components together").
3. **UI loop** — image-gen mockups for theme/wireframe/page picking before any code
   (9 Jul pitch: cuts iteration from ~10 min to ~30 s; "that's how you smoke lovable").
4. **Assembler** — glue code, config, schema wiring. Bounded diffs against a known-good
   scaffold = cheap-model-safe.
5. **Verify gate** — build + smoke tests + screenshot diff; human/dev QA only at the end
   (his 17 May structure: "devs as QA gates, 99% agents").

## Assets and where they live

| Asset | Location | State |
|---|---|---|
| Diligence pack | `research/actionmodel-deep-dive/` | **Complete** 25 Aug 22:40 — includes `index.html` dashboard (deployable static site, see `CLOUDFLARE.md`; keep internal, don't publish without Shaan's go) |
| WhatsApp history | `client/comms/whatsapp-export-2026-08-25/_chat.txt` | Full export, Sep 2024→25 Aug 2026 |
| GitHub corpus (~850k repos scraped, ~80k categorized, ~300 categories) | **NOT on this laptop.** Foundry data here is thin (`~/SISO_Foundry_Data/domains/github` = empty identity dir; `~/foundry-data` = 36M intents DB). Chat (25 Jun) says the corpus uses the home server's 5TB — i.e. the Mac Mini / home server. **Inventory attempt 26 Aug: BLOCKED at the Mini's end.** MacBook WARP tunnel verified healthy (handshake 28s, 0% loss) but 192.168.0.100 unreachable on ssh/ping/nc — the SISO-MINI cloudflared connector is down, the Mini is off/asleep, or the Zero Trust private route was removed. Legacy Tailscale fallback needs `tailscale switch eecc` (away from live `oracle-headscale` profile) — skill forbids unattended; needs Shaan's go or hands on the Mini. Scale claims remain UNVERIFIED. | **BLOCKED — needs Mini-side fix** |
| Prior art | Cloudflare vibesdk (they tried, failed), refine.dev (sent 29 May), lovable | Reference only |

## Open questions (call + after)

- Product surface: in-Actionist user-facing builder vs internal SaaS factory? (Both were
  described; pick one for phase 1.)
- Commercials: no number ever named; he thinks in £10-20k/service + rev-share ranges.
- Corpus state: is categorization still running? What did the value-miner step produce?
  Inventory the DB on the Mini before promising anything derived from it.
- Their side: which dev(s) touch this, what stack Actionist is built on, where it would
  run (they already use BrowserBase for cloud browsers), inference budget per build.
- DocSend deck link from Aug 2025 now 403s — ask him to re-share.

## Working agreements for agents in this folder

- This folder is the single home for Action Model work. Current synthesis belongs in
  `knowledge/`; original evidence stays in `research/`; private context stays in `client/`.
- The original research agent finished its run (final manifest 22:39) and the temporary
  `~/actionmodel-deep-dive` symlink has been removed. This folder is the only home.
- Nothing from the corpus or this folder gets shared with the client raw. Deliverables are
  curated outputs (scaffold library, pipeline, briefs), never the underlying asset.
