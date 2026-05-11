# Stage60 Mobile Floating Ghost QA

Last updated: 2026-05-11

Stage60 verifies and tunes the mobile floating ghost decoration after the 500
motif registry milestone. It does not change registry data, extraction logic,
scoring, result generation, drink recommendation, API behavior, or routing.

## Preconditions Checked

- `AGENTS.md` was checked first.
- `node_modules/next/dist/docs/index.md` was checked before making any judgment in
  this Next.js project.
- This stage is UI decoration QA only.

## Implementation Summary

The mobile floating ghost layer previously showed only one visible ghost at the
`max-width: 640px` breakpoint. Stage60 keeps the desktop tone mostly unchanged
and adjusts the mobile breakpoint so that iPhone-width screens show four small
ghosts around the edges of the viewport.

Changed files:

- `components/FloatingGhostLayer.tsx`
- `app/globals.css`

## Mobile Behavior

At approximately 390px viewport width:

- `floating-ghost--a` appears near the upper right.
- `floating-ghost--b` appears near the upper left / side background.
- `floating-ghost--c` appears near the lower right background.
- `floating-ghost--d` appears near the lower left background.

The mobile ghosts are intentionally small and low-opacity. Their movement uses
slow CSS-only keyframes and fixed delays; no JavaScript timers or randomness are
used.

## Interaction Safety

The existing safety constraints remain in place:

- `.floating-ghost-layer` keeps `pointer-events: none`.
- `.floating-ghost-layer` keeps `user-select: none`.
- The content wrapper remains above the decoration layer.
- `prefers-reduced-motion: reduce` still hides the floating ghost layer.

Browser QA at 390px confirmed:

- textarea can be filled.
- `モチーフを確定し占いへ進む` can be clicked.
- `1件で質問へ進む` can be clicked.
- `結果を見る` can be clicked.
- `この結果をAIでさらに読む` can be clicked.
- AI prompt page shows the copy button and external AI links.
- Four floating ghost elements are present and visible on the input and AI prompt
  screens.

## Stage61 Recommendation

Stage61 should return to registry planning, not UI:

1. Review the large `object-record`, `emotion-action`, `relationship`, and
   `home-place` clusters.
2. Create a candidate pool for the next 20 motifs after 500.
3. Avoid another place-heavy batch until `home-place` density is reviewed.
4. Keep `warning-fix-soon <= 184`, `general count = 0`, and `stale-relation = 0`.
