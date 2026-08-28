# S1-L3 checkpoint 3 — lane-owner independent verification

Lane: S1-L3 (P05, P06, P08). Run: 2026-08-27-sprint-1-fable. Written: 2026-08-27.
Model transition: lane owner moved Fable 5 [1m] → Opus 5 [1m] mid-run. All prior checkpoints,
files and completed teammate outputs preserved and consumed; nothing discarded for model change.

## Counts re-run from source by the lane owner (not inherited)

| Claim | Inherited receipt | Owner re-verification | Verdict |
|---|---|---|---|
| 21st bundle store harvest dirs | 7,949 (`local-corpus-join-report.md`, `21st-corpus-audit`) | `ls harvest \| wc -l` = **7949** | CONFIRMED |
| Legacy source store component dirs | 3,508 | shell dir-type loop = **3508 dirs + 1 non-dir (`catalog.json`)** | **SUPERSEDED — see correction below** |

### Correction (post-P05 callback): the legacy store holds 3,507 components, not 3,508

P05's packet reported `legacy_store_component_dirs: 3507`, contradicting my 3,508. I re-ran the
check testing for an actual component marker rather than counting directories:

```
dirs=3508  files=1 -> catalog.json
dirs with registry-item.json: 3507
dirs without:                    1 -> _utils
```

**P05 is right and my figure was wrong.** There are 3,508 directories, but `_utils` is a shared
utility directory, not a component. My count used directory-existence as a proxy for
component-existence; P05 read for a component marker. The correct supply figure is **3,507
components** (of which 3,506 carry real `.tsx` source, so exactly one component lacks source).

Recorded because it is a small instance of the project's own standard — classify by reading the
artifact, never by a proxy like a name or a directory listing. The inherited 3,508 in
`local-corpus-join-report.md` carries the same off-by-one and should be read as 3,507 going
forward. This does not change any downstream decision; it changes a quoted count.
| Both store paths live | asserted | both dirs exist on disk | CONFIRMED |

Note on method: `find` is blocked for agent navigation in this environment, so directory/file
separation was done with a `for` loop and `[ -d ]` test. Recorded because it changes how any
re-run of this check must be written.

Not re-verified by the owner this checkpoint (still inherited, still carrying their original
receipts): the 2,942 intersection / 8,515 union join, the 7,279 tagged figure, the de-theming
percentages, and the 3,506 source-bearing subset. These remain `observed` at the strength of
the cited reports, not of an owner re-run.

## Teammate audit (post-model-change)

Three Opus subagents were dispatched at checkpoint 2 (`s1l3-p05`, `s1l3-p06`, `s1l3-p08`).

Observed state at this checkpoint:

- `p05` run dir: `top-companies.jsonl` present — **105 records, 0 malformed, 55 observed / 50 unknown, 10 ranked with rationale**. Validated by JSON parse. Kept.
- `p06` run dir: empty.
- `p08` run dir: empty.

A grandchild agent ("Commercial surfaces slice B", spawned by `s1l3-p05`) reported hitting a
**Fable 5 quota limit** and returned with 8 surfaces verified / 42 not investigated. Two
consequences recorded honestly:

1. **Model-policy incident.** The sprint policy is Opus-only for subagents. A grandchild was
   running on Fable 5. Status probes have been sent to all three subagents instructing that any
   child must be Opus 5 and that no further non-Opus children may be spawned.
2. **Coverage degradation, not corruption.** The blocked grandchild explicitly refused to
   reconstruct vendor component lists from memory, on the grounds that a fabricated list would
   silently corrupt the exact naming-divergence measurement P05 needs. That is the correct call
   and matches the project evidence standard. The cost is denominator coverage, which must be
   reported as reduced rather than padded.

Useful transport notes surfaced by that grandchild and retained for any re-dispatch:
`component.gallery` and `mobbin.com` 403 plain WebFetch but clear via an `r.jina.ai` prefix;
`land-book.com` hits a CAPTCHA even through the proxy; `collectui.com` renders its category feed
client-side and returns only "Loading..." through both routes.

## Standing instruction to subagents

Do not fabricate, recall-from-memory, or pad any denominator to reach ~100. Unverified surfaces
stay `evidence_class: unknown`. A denominator that lands short with honest marking is a valid
result under the depth contract; a padded one is a defect.

## Next

Await probe replies; re-scope or re-dispatch blocked slices on Opus; then lane synthesis,
post-write structural smoke across all packet files, independent challenge of headline claims,
and the compact CENA callback (no Sprint-completion claim).
