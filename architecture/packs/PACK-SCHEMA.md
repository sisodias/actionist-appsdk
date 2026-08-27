# Pack schema v0 — the seven knobs

A pack is a **closed set of token values**. The assembler may reference token names; it
may never emit a literal. Authored 2026-08-27 from `ui-aesthetic-taxonomy-2026-08-27.md`
(the seven-knob matrix) and `token-pack-science-2026-08-27.md` (gates + DTCG posture).

## Why shadcn's variables are not enough

shadcn stock theming reaches **colours + `--radius` only** — no shadow, font, spacing,
or tracking tokens (https://ui.shadcn.com/docs/theming). A gallery built on that surface
can only vary colour, which is the *one* axis the market already saturates and the one
that provably fails to escape the AI-sameness signature. Every pack therefore extends
the shadcn surface with the knobs below.

## The seven knobs

| # | Knob | Token surface | Why it is load-bearing |
|---|---|---|---|
| 1 | Surface↔BG contrast | `--background`, `--card`, `--muted`, `--popover` | Sets whether the UI reads as layered or flat |
| 2 | Border weight | `--border-width-hairline/default/strong` | 0 / 1px / 2–4px is the brutalist↔swiss axis |
| 3 | Shadow character | `--shadow-style` discriminator + `--shadow-1..4` | `none·soft·hard-offset·dual·tonal·glass` — 7 mechanisms across the set |
| 4 | Radius scale | `--radius` (shadcn derives sm/md/lg/xl) | 0 / 2–6 / 8–12 / 16–24+ |
| 5 | Type family class | `--font-display/body/mono` | geometric·humanist·serif·mono·display-eccentric |
| 6 | Density | `--control-h-{sm,md,lg}`, `--pad-{x,y}`, `--row-h` | Compact/default/spacious; decides 200-row survivability |
| 7 | Chroma policy | `--primary`, `--accent`, chart roles | near-neutral+1 · mid-sat multi · max-sat flat · dark+glow |

**Redundancy rule:** two packs sharing a row of the knob matrix are one pack. A gallery
that varies only knob 7 is *one style with N themes*, not N packs.

## Required per pack

- Both `light` and `dark` modes, authored — never inverted. Dark is a corpus
  requirement, never a client choice at pick time.
- Every surface role has an explicit content/foreground pair.
- `meta`: id, name, vibe line, tier, and the knob values (for the redundancy check).

## Gates (a pack does not enter the gallery until it passes)

- **G1 contrast** — WCAG 2.2: body text ≥4.5:1, large ≥3:1, and **UI boundaries ≥3:1**
  (WCAG 1.4.11 — the one dense tables fail: `#ccc` on white is ~1.6:1).
- **G2 dark** — APCA for dark packs. WCAG 2.x overstates contrast near black and
  "cannot be used for guidance designing dark mode" (APCA in a Nutshell).
- **G3 completeness** — every required token resolves in **both** modes.
- **G4 no literals** — no raw colour/spacing/radius in any consuming code.
- **G5 distinctness** — knob vector differs from every shipped pack.

## Tier map (16-pack spanning set)

- **A — dense B2B (6):** Grid · Console · Ledger · Paper · Tonal · Slate
- **B — branded product (5):** Soft · Sharp · Signal · Editorial · Bento
- **C — marketing (3):** Bold · Aurora · Mono
- **D — bounded expressive (2):** Clay · Depth

Rejected and why: neumorphism (fights 1.4.11 by definition), glassmorphism as a pack
(needs a busy backdrop; a 200-row grid *is* the backdrop — kept as a bounded material),
neubrutalism for tables (3px × 200 rows), Corporate Memphis (illustration, not
tokenisable), Y2K (asset-dependent), full skeuomorphism (texture-dependent).
