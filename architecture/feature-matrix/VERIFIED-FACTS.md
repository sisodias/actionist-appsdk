# Main-thread verified facts — 27 Aug 2026

Facts I re-derived myself in the main session, for lanes to rely on rather than re-check.

## Sina's repo is still empty (DIRECT)
`git log --oneline` in clients/actionmodel/Actionist-AppSDK => single line `9f182b6 Initial commit`.
`git ls-files` => zero tracked files.
Consequence: there is NO client-side schema, design system, or SDK surface to design
against yet. Architecture must be specified against our own block contract, and every
"platform owns the schema" assumption stays INFERRED until Sina ships something.
Watch this repo — it is the dependency that unblocks Phase 0.

## Block contract v0 is sound and is the spine (DIRECT)
`design/block-contract.schema.json`, title "Block Contract v0", 8 top-level properties.
Required: id, kind, provenance, stack_contract, provides, eval.
Optional: requires, tokens_consumed.
Two properties matter most for this workstream:
- `provenance` REQUIRED, harvest-protocol rules (MIT/Apache/BSD/ISC) => the license gate
  is enforced by the schema itself, not by reviewer discipline. A STUDY-only repo
  physically cannot become a block.
- `eval` REQUIRED, "every block ships its own proof, no unproven blocks in the registry"
  => this is where the missing assembly-builder benchmark (white-space claim 3) has to live.
Do NOT invent a parallel contract. Extend this one.

## Repo pool license reality (DIRECT)
500 unique repos. lic_state counts:
  declared_permissive        302
  no_declared_license        137
  copyleft_or_reciprocal      23
  source_available_or_other   22
  nonstandard_or_other        16
137 no-license repos are default-copyright => STUDY only, never LIFT. This is why the
famous clones (beam-cloud/lovable-clone, kehanzhang/lovable-clone, dyad's NOASSERTION)
cannot be code sources.

## Prior Phase-7 census failed, and how (DIRECT)
lane 03-competitor-features: 144 keys / 18 domains, 118 product surfaces, 8 waves run.
Result: 192/192 rows status=unknown, every capability_proof.status=not_established,
admission=NOT_ADMITTED. It was a documentation-reachability pass, never a capability pass.
Taxonomy conflict: findings state 68 keys, dictionary enumerates 18x8=144, mapping
unresolved. USE 144. Never cite a 68 denominator.
