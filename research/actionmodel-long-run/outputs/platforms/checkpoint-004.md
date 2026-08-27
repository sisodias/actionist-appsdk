# AM-PLATFORMS checkpoint-004 — image-to-design-token gap verification

**Run:** `actionmodel-long-run-2026-08-26`  
**Lane:** `AM-PLATFORMS`  
**Observed:** 2026-08-26 (Asia/Ho_Chi_Minh)  
**Scope:** local evidence for image/screenshot → design-token extraction and its Block Contract boundary  
**Status:** local gap verification; no new network lookup; no runtime code edits

## Verdict

The named gap is real at the level the campaign needs, with an important qualification:

> Local evidence shows no usable off-the-shelf OSS candidate that takes raster/image input and emits an approved, confidence-bearing token contract for the Actionist registry. General design-token libraries, Figma→token tools, website/DOM exporters, and screenshot→code tools exist, but they do not close the same image → token → registry-constrained build chain.

This is an evidence-backed **composition and admission gap**, not a universal proof that no private or newly released product anywhere can do it. The gap is differentiated only if Action Model proves the extractor, uncertainty handling, human approval, token application, and screenshot-diff loop end to end.

## Local probes and results

| Probe | Result on 2026-08-26 | Interpretation |
|---|---:|---|
| `jq 'length' research/github-sweep/lane4-screenshot-to-design-tokens.json` | `0` | The dedicated screenshot→design-token sweep has no candidate records. |
| `jq 'length' research/github-sweep/lane4-figma-tokens-extract.json` | `1` | One Figma/token-related candidate exists, but its license field is empty; it is not raster-image extraction or an admitted block. |
| `jq '[.[] | select((.description // "") | test("image|screenshot|raster"; "i"))] | length' research/github-sweep/lane2-design-system-tokens.json` | `0` | The general token-library lane contains token systems/exporters, not a described image/screenshot extractor. |
| `rg -n -i '(image.?to|design.?token|token extraction|tokens from image|figma.?token|screenshot.?to)' research design` | Matches internal spec, recon, Figma/token, and DOM/export references; no additional image-token implementation | The local corpus distinguishes image→token from Figma/DOM→token rather than silently merging them. |

The probes are file-backed and reproducible; they do not assert that a web search over all current private products would return zero.

## Evidence reviewed

### 1. Direct local recon receipt

`research/github-recon-2026-08-26.md:21-28` records:

- `abi/screenshot-to-code` as an active MIT screenshot→HTML/Tailwind/React/Vue building block;
- `d01000100/figma-token-engine` as an MIT Figma design-token→code transform;
- a direct search for “design tokens from image” returning zero usable repos.

The same file labels the image→design-token step as a genuine gap, but its GitHub search receipt is still a discovery artifact: no candidate commit was admitted, and no private/commercial product was live-tested in this checkpoint.

### 2. Dedicated sweep lanes

- `research/github-sweep/lane4-screenshot-to-design-tokens.json` is an empty JSON array.
- `research/github-sweep/lane4-figma-tokens-extract.json` contains one record (`ivanovilyavl/claude-dev-utils`) with an empty license key; its description is Figma→site tooling and Figma token extraction, not raster-image token inference.
- `research/github-sweep/lane2-design-system-tokens.json` contains general token libraries/exporters. The local probe found zero descriptions containing image, screenshot, or raster. One record (`kais-radwan/reverse-design`) says “any website,” which is a DOM/site direction, not evidence of screenshot inference.

These are local search records with per-result dates and license metadata; they are not legal clearance, build evidence, or product authentication.

### 3. P2 research and internal design contract

`research/principle-2-imagegen-design-2026-08-26.md:20-33` makes the model of the problem explicit: vision-to-IR rather than direct CSS from pixels; token JSON for colors/typography/spacing/radius/shadow/layout; confidence because font identity and exact spacing are underdetermined; quantization to allowed scales; human approval of tokens; and deterministic DOM exporters used after a prototype rather than on raster mockups.

The same file (`:48-71`) says the product landscape has image-first tools and exports in isolation, but none chains breadth images → token contract → registry-constrained build. Its recommended pipeline requires client approval, component IDs rather than new primitives, screenshot diff, and stored round artifacts.

The internal design contract independently carries the same boundary:

- `design/BUILDER-DESIGN.md:9-15` requires approved design to compile into a token contract before scaffold/registry assembly.
- `design/BUILDER-DESIGN.md:26-41` requires token JSON plus confidence, client approval, registry-constrained implementation, and validation/screenshot diff.
- `design/BUILDER-DESIGN.md:78-81` records the current “zero OSS for image→design-tokens” claim as a moat hypothesis, not implementation evidence.
- `design/BLOCK-FRAMEWORK.md:73-90` requires design→token extraction, CSS `var(--*)` normalization, registry registration, and standalone build/smoke proof before admission.
- `design/block-contract.schema.json:158-179` requires token slots from the fixed namespace `color|space|type|radius|shadow|layout`, build/smoke proof, optional screenshot baseline, and an admission-time license scan.

## Capability classification

| Candidate class | Local status | What it can support | What it does not prove |
|---|---|---|---|
| Screenshot→code (`abi/screenshot-to-code`) | `catalogue/candidate` | Image/mockup to HTML/Tailwind/React/Vue and a correction-loop reference. | A semantic token contract, uncertainty/confidence, registry IDs, or human-approved design system. |
| Figma→tokens (`d01000100/figma-token-engine`) | `candidate` | Structured design-file token transforms. | Raster-image inference or Actionist Block Contract admission. |
| General token libraries/exporters | `catalogue/candidate` | CSS variables, design-system tokens, Tailwind/DTCG-style outputs. | Vision inference from pixels and fidelity/recovery evidence. |
| DOM/site exporters (`reverse-design`, dembrandt/design-extract references) | `candidate/reference` | Deterministic extraction after a live DOM/prototype exists. | Direct raster-image extraction before implementation. |
| Internal P2 proposal | `inferred/design proposal` | A testable pipeline: image candidates → vision IR → confidence/quantization → approval → registry tokens → screenshot diff. | A working implementation, benchmark, or authenticated model performance. |

## What is genuinely differentiated

The differentiator is not “use a vision model to guess colors.” The defensible unit is a governed contract:

```text
reference images
  → candidate visual direction
  → token IR + confidence + unresolved questions
  → human approval of tokens
  → fixed token slots / component IDs
  → registry-constrained assembly
  → build + browser smoke + screenshot diff
  → stored prompt/refs/model/seed/token/mapping/decision evidence
```

The local corpus has separate pieces for most stages, but no proof that they compose. That makes the next work item a narrow admission experiment, not another landscape search.

## Held/rejected claims

- **Held:** “No one in the market can extract image design tokens.” Local evidence only establishes no usable local OSS candidate and no documented composition in the reviewed material.
- **Held:** “Figma token extraction solves image token extraction.” Figma has structured design semantics; a raster image underdetermines fonts, spacing, component intent, and interaction behavior.
- **Held:** “Screenshot-to-code is an admitted Actionist block.” It lacks a pinned commit, exact license/provenance receipt for the candidate commit, adaptation log, Block Contract, and build/smoke/visual evidence.
- **Held:** “The internal token pipeline is implemented.” The design docs and schema define the target contract; no runtime implementation or authenticated model benchmark was inspected.
- **Rejected:** direct pixel-to-CSS as the product contract. The local evidence supports a vision-to-IR step with confidence and human approval, then tokenized registry assembly.
- **Not claimed:** current private/commercial market coverage, model price/latency, visual fidelity, or live extraction success.

## Sources and dates

All local files and JSON probes above were read on **2026-08-26**. Source dates: `research/principle-2-imagegen-design-2026-08-26.md` and `research/github-recon-2026-08-26.md` are dated 2026-08-26; sweep result records carry their own `updatedAt` values. No network lookup was performed for this checkpoint.

## Next gate: P-010

Select one small candidate for a real Block Contract admission—prefer a permissively licensed, UI-visible primitive that can exercise token consumption and screenshot proof. The admission packet must include canonical URL, pinned commit, license/copyright evidence, adoption mode, stack contract, adaptation log, build command, smoke test, screenshot baseline, and a clear `clean`/`flagged` license verdict. Do not modify runtime application code while preparing the evidence packet.
