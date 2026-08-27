# Lovable-clone census — Phase-8 external Opus input

Produced: 2026-08-27 · Owner: LOVABLE (external Opus lane) · Requested by: CENA

Status: **PARTIAL — see Completeness boundary.** Research-only. `NOT_ADMITTED`.


## Completeness boundary (read first)

The dispatch described a *completed* investigation. It is not complete, and this
packet does not claim otherwise.

- **DONE and verified here:** all 38 builder-class repos, re-derived from the corpus,
  with exact source paths, licenses, dispositions, and reuse gates.
- **NOT DONE:** the per-repo *capability* scoring — which repo does which builder
  feature best. That lane (13 capability lanes over the full 500-repo pool) was still
  running when this was written. Every `block_contribution` field is therefore
  `PENDING`, not a value.

Consequently **no repo here contributes a block yet.** Under Block Contract v0
(`design/block-contract.schema.json`) a candidate needs `provenance` *and* `eval`
evidence to become a block. This packet supplies provenance only. `eval` is absent for
all 38. Phase-8's own invariant — 'repositories are not blocks' — is what this packet
is deliberately respecting.


## Provenance of the 38

Re-derived in-session, not copied from a prior summary. All 38 originate from a single
corpus file:

```
source corpus : research/actionmodel-builder-research-2026-08-26/expansion/outputs/github-expansion.jsonl
pool          : 500 unique repos (that file + research/actionmodel-builder-research-2026-08-26/outputs/github-corpus.jsonl)
filter        : builder-class regex over name/description/source_query/capability_tags/reason/source_lane
match count   : 38
```
Classification counts (from the JSONL, re-counted at write time):

| Axis | Counts |
|---|---|
| Corpus disposition | candidate 20 · hold 14 · reject 4 |
| Reuse gate | LIFT 20 · STUDY 18 |
| License state | declared_permissive 20 · no_declared_license 16 · nonstandard_or_other 1 · copyleft_or_reciprocal 1 |

**The load-bearing finding: 18 of 38 cannot be code sources.** 16 carry no declared
license (default copyright), 1 is copyleft, 1 nonstandard. Only the 20
`declared_permissive` repos are LIFT. This inverts the naive read of the list — the
most famous entries are the least usable.


## LIFT — permissive, code may be reused (20)

| Repo | ⭐ | SPDX | Disposition |
|---|---:|---|---|
| [get-convex/chef](https://github.com/get-convex/chef) | 4602 | Apache-2.0 | candidate |
| [tastyeffectco/sandboxd](https://github.com/tastyeffectco/sandboxd) | 915 | MIT | candidate |
| [giselles-ai/giselle](https://github.com/giselles-ai/giselle) | 553 | Apache-2.0 | candidate |
| [aws-solutions/generative-ai-application-builder-on-aws](https://github.com/aws-solutions/generative-ai-application-builder-on-aws) | 351 | Apache-2.0 | candidate |
| [codinit-dev/codinit-dev](https://github.com/codinit-dev/codinit-dev) | 262 | MIT | candidate |
| [Gerome-Elassaad/CodingIT](https://github.com/Gerome-Elassaad/CodingIT) | 174 | Apache-2.0 | candidate |
| [AndyY-Q/launchkit-ai](https://github.com/AndyY-Q/launchkit-ai) | 105 | MIT | candidate |
| [FreakStudioCN/micropythonos-ai-app-builder](https://github.com/FreakStudioCN/micropythonos-ai-app-builder) | 79 | Apache-2.0 | candidate |
| [SFARPak/AliFullStack](https://github.com/SFARPak/AliFullStack) | 75 | Apache-2.0 | candidate |
| [iBz-04/Devseeker](https://github.com/iBz-04/Devseeker) | 61 | MIT | candidate |
| [joylarkin/AI-Coding-Landscape](https://github.com/joylarkin/AI-Coding-Landscape) | 61 | MIT | candidate |
| [sammwyy/singulary](https://github.com/sammwyy/singulary) | 53 | MIT | candidate |
| [suntay44/buildable-plugin-skills](https://github.com/suntay44/buildable-plugin-skills) | 53 | MIT | candidate |
| [BernieTv/Lovable-Clone](https://github.com/BernieTv/Lovable-Clone) | 40 | MIT | candidate |
| [totalumlabs/ai-app-builder-open](https://github.com/totalumlabs/ai-app-builder-open) | 36 | MIT | candidate |
| [krystian-ai/ai-app-builder](https://github.com/krystian-ai/ai-app-builder) | 30 | MIT | candidate |
| [doable-me/Doable](https://github.com/doable-me/Doable) | 28 | MIT | candidate |
| [sanidhyy/lovable-clone](https://github.com/sanidhyy/lovable-clone) | 20 | MIT | candidate |
| [easonwang00/NativeBot](https://github.com/easonwang00/NativeBot) | 17 | MIT | candidate |
| [tomash-dev/V0-Lovable-OpenAI](https://github.com/tomash-dev/V0-Lovable-OpenAI) | 16 | Apache-2.0 | candidate |

## STUDY — architecture reference only, no code lifting (18)

| Repo | ⭐ | License state | Disposition | Why STUDY |
|---|---:|---|---|---|
| [dyad-sh/dyad](https://github.com/dyad-sh/dyad) | 21319 | nonstandard_or_other | hold | NOASSERTION (nonstandard_or_other) |
| [beam-cloud/lovable-clone](https://github.com/beam-cloud/lovable-clone) | 292 | no_declared_license | hold | no LICENSE file = default copyright |
| [kehanzhang/lovable-clone](https://github.com/kehanzhang/lovable-clone) | 197 | no_declared_license | reject | no LICENSE file = default copyright |
| [sa4hnd/vibra-code](https://github.com/sa4hnd/vibra-code) | 124 | copyleft_or_reciprocal | hold | AGPL-3.0 (copyleft_or_reciprocal) |
| [piyush-eon/ai-app-builder](https://github.com/piyush-eon/ai-app-builder) | 41 | no_declared_license | hold | no LICENSE file = default copyright |
| [vedantxn/nextly](https://github.com/vedantxn/nextly) | 41 | no_declared_license | hold | no LICENSE file = default copyright |
| [Jisap/next15-lovable-clone](https://github.com/Jisap/next15-lovable-clone) | 20 | no_declared_license | hold | no LICENSE file = default copyright |
| [koolkishan/lovable-clone-youtube-files](https://github.com/koolkishan/lovable-clone-youtube-files) | 16 | no_declared_license | reject | no LICENSE file = default copyright |
| [adityadeshlahre/elbavol](https://github.com/adityadeshlahre/elbavol) | 13 | no_declared_license | hold | no LICENSE file = default copyright |
| [abhayymishraa/webbuilder](https://github.com/abhayymishraa/webbuilder) | 12 | no_declared_license | hold | no LICENSE file = default copyright |
| [harrybaines/lovable-clone](https://github.com/harrybaines/lovable-clone) | 12 | no_declared_license | hold | no LICENSE file = default copyright |
| [sushant1408/lovable-clone](https://github.com/sushant1408/lovable-clone) | 11 | no_declared_license | hold | no LICENSE file = default copyright |
| [mirza9hsn/Lovable-Clone](https://github.com/mirza9hsn/Lovable-Clone) | 10 | no_declared_license | hold | no LICENSE file = default copyright |
| [Anuj-Kumar-Sharma/distributed-lovable](https://github.com/Anuj-Kumar-Sharma/distributed-lovable) | 8 | no_declared_license | reject | no LICENSE file = default copyright |
| [cyberraf/lovable-clone](https://github.com/cyberraf/lovable-clone) | 8 | no_declared_license | hold | no LICENSE file = default copyright |
| [neels22/lovable-clone](https://github.com/neels22/lovable-clone) | 7 | no_declared_license | hold | no LICENSE file = default copyright |
| [therajusah/Lovable](https://github.com/therajusah/Lovable) | 5 | no_declared_license | hold | no LICENSE file = default copyright |
| [Anuj-Kumar-Sharma/my-lovable-svc](https://github.com/Anuj-Kumar-Sharma/my-lovable-svc) | 3 | no_declared_license | reject | no LICENSE file = default copyright |

## Notable license traps

- **dyad-sh/dyad** — 21,319⭐, the largest by an order of magnitude and explicitly a
  'v0/Lovable/Replit/Bolt alternative'. License state `nonstandard_or_other`,
  SPDX `NOASSERTION`; prior intel records `src/pro` as FSL. STUDY, not LIFT.
- **beam-cloud/lovable-clone** — 292⭐, BAML + FastMCP + Beam, architecturally the
  closest to Actionist's MCP surface. **No license at all.** STUDY only.
- **sa4hnd/vibra-code** — AGPL-3.0, viral copyleft. STUDY only.
- **kehanzhang/lovable-clone** (197⭐, 'for rileys podcast') and 3 others are corpus
  `reject` — course/podcast artifacts, not engineering references.


## Gaps

1. **Capability scoring absent.** No repo is ranked for any feature. Blocking the
   `block_contribution` field for all 38.
2. **Two repos named in prior narrative reports are NOT in the 500-pool** and carry no
   license or disposition record: `somdipto/open-lovable` and `kuluruvineeth/codecapsule`.
   They must not be cited as classified until passed through the same gate.
3. **No `eval` evidence for any of the 38** — required by Block Contract v0.
4. **Star counts and licenses are observation-dated, not live.** Re-verify before any
   rights decision.


## Falsifiers

Each of these would overturn a claim in this packet:

- A LICENSE file existing at any of the 16 `no_declared_license` repos flips it
  STUDY → LIFT. Check before excluding a repo on license grounds.
- The regex filter is a *lexical* classifier over corpus metadata. A builder-class repo
  whose description avoids all 15 patterns is a **false negative** and would not appear
  here. 38 is a floor, not a ceiling.
- Conversely, a repo matching on the token `v0` or `bolt` incidentally is a false
  positive; the 4 `reject` rows are evidence this occurs.
- `dyad` resolving to a clean permissive license at root would make the single largest
  repo liftable and change the LIFT/STUDY balance materially.
- If the pending capability lane finds the best implementation of a feature sits in a
  STUDY repo, the rights position — not the engineering — becomes the binding constraint.


## Boundary

Research-only. No cloning, execution, build, deploy, benchmark, license scan, or block
admission was performed. `capability_proof: not_established` on every row.
`admission_status: NOT_ADMITTED`. Nothing here authorizes implementation.
