# Motif Maintenance Guide

Last updated: 2026-05-10

This guide is for Codex and future implementers working on motif additions or
registry cleanup. It intentionally favors predictable, low-risk operations over
large refactors.

## Source Of Truth

1. Read `AGENTS.md` first.
2. For Next.js-specific implementation decisions, read the relevant local docs in
   `node_modules/next/dist/docs/`.
3. For motif registry work, the production source of truth is `data/batches/index.ts`.
4. Only batches imported and listed in `data/batches/index.ts` are production.
5. Unregistered batch folders are draft, orphan, or pending data. They must not be
   counted as production.
6. The current production registry map is `docs/registry-map.md`.
7. Historical stage docs are useful context, but they are not the current source
   of truth for motif count.

## Before Adding Motifs

Check these files in this order:

1. `data/batches/index.ts`
2. `docs/registry-map.md`
3. `docs/motif-duplicate-review.md`
4. `docs/alias-design-rules.md`
5. `docs/relation-classification-guide.md`
6. `docs/review-checklist.md`
7. The most recent batch-specific test in `tests/`

Then inspect the candidate motifs against existing:

- exact motif id duplicates
- display name duplicates
- phrase / alias / weak duplicates
- near-neighbor motifs
- generic-specific relations
- context-helper relations
- conflict candidates

## Addition Size

- Prefer 5 to 10 motifs per implementation pass.
- Use 20 motifs only when the candidate set is already reviewed and relation risk
  is understood.
- Avoid creating a broad 20-item batch from mixed, unreviewed categories.
- If the registry map has a pending or orphan batch, do not assume it is the next
  production batch.

## Batch Contract

A production batch should have:

- `motifs.ts`
- `aliases.ts`
- `questions.ts`
- `blocks.ts`
- `index.ts`
- batch-specific tests when possible
- validation and regression coverage through the shared test suite

Do not register a batch in `data/batches/index.ts` until the contract is complete.

## Alias Rules

Use the current three-level model:

- `priorityKeywords` = phrase
- `aliases` = alias
- `secondaryKeywords` = weak

Operational rules:

- Keep phrase terms specific and context-rich.
- Do not add one-character aliases.
- Avoid two-character weak terms unless there is a strong reason and tests cover it.
- Do not add broad daily words as aliases when they can be phrases.
- Weak-only matches should not become strong candidates.
- Before adding an overlapping term, check whether relation or pair handling is a
  better fit.

## Relation Rules

Use the existing relation language:

- `generic-specific`: specific motif should usually rank above generic.
- `near-neighbor`: motifs may coexist; do not suppress by default.
- `context-helper`: one-way relation can be acceptable when one motif helps
  interpret another.
- `conflict`: use only when two motifs should not be simultaneously primary.

Do not mechanically make every relation reciprocal. The current registry contains
intentional one-way relations.

## Duplicate Review

Before adding or renaming motifs, review `docs/motif-duplicate-review.md`.

Current high-priority watch item:

- `dish` / `plate`: both display as `皿`, so this should be resolved or clearly
  separated before adding more tableware motifs.

## Existing Notation Differences

Earlier batches often define large literal objects. Some later batches use helper
functions such as `motif(...)`, `q(...)`, `makeBlocks(...)`, or `sections(...)`.
Both styles are currently accepted.

Do not normalize all batch notation during normal motif additions. As long as
production imports and tests pass, preserve the existing local style. A full style
unification should be a separate stage.

## Validation And Quality Gate

Run these after motif additions or registry-affecting cleanup:

```powershell
npm.cmd test
npm.cmd run lint
npm.cmd run build
```

Expected registry constraints:

- `validateMotifRegistry` blocking errors must be 0.
- `general` relation classification should remain 0 where reported.
- `stale-relation` should remain 0 where reported.
- New warning-fix-soon items need explicit review and a reason.

## Next Batch Guidance

Current state:

- Production registered through `batch-29`.
- `batch-29` was completed as a nine-motif production batch to reach 480 motifs.
- The earlier `cemetery` draft candidate from batch-29 remains deferred and is
  not production.

Recommended path:

- Do not silently revive deferred `cemetery` without a dedicated review.
- Start the next production expansion from a fresh reviewed candidate list or a
  deliberately named next batch.
- Whichever path is chosen, update `docs/registry-map.md` before and after the
  implementation.
