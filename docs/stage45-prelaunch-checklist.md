# Stage45 Prelaunch Checklist

Stage45 is the final confirmation pass before a provisional public release.
It does not add motifs or change large extraction logic. The goal is to make
sure the current 400-motif build is safe to show, readable on desktop and
mobile, and consistent with the non-diagnostic tone.

## Runtime and build gate

- `npm.cmd test` passes
- `npm.cmd run lint` passes
- `npm.cmd run build` passes
- Local dev server starts at `http://localhost:3000`

## Core flow

- Home screen loads without broken layout
- Dream input can advance to candidate tags
- Candidate tags can advance to follow-up questions
- Follow-up questions can advance to the result view
- Empty-match state does not dead-end
- “タグなしで進む” remains available
- Manual fallback grid remains available in empty-match state

## Representative dream checks

- Late dream:
  - `being_late / train` remain the main reading
- Chased dream:
  - `being_chased` remains the main reading
- Exam dream:
  - `exam` remains the main reading
- Ex-partner dream:
  - `ex_partner` does not get buried by surrounding station motifs
- Mistake dream:
  - `making_mistake` remains the main reading
- Anger colloquial input:
  - `fighting` remains the comparison target

## Regression checks

- `train` does not pull in `car`
- `学校の廊下` can show both `school / hallway`
- `廊下` alone does not pull in `school`

## Empty-match experience

- Empty-match copy does not blame the user
- Example prompts are visible and readable
- Manual fallback grid feels like rescue, not failure
- Result text after an empty-match path does not feel excessively generic

## Tone and safety

- Body-appearance / scar related output does not read as diagnosis
- Caution copy remains visible without becoming a warning box
- Result screen reads like a message, not a medical or clinical judgment

## Mobile checks

- Header does not feel overly heavy on first view
- Input area remains readable and not overly white
- CTA stays easy to tap
- Choice chips do not feel too dense
- Follow-up options stay easy to tap
- Result screen remains readable through the full scroll

## Release recommendation rule

Provisional release is reasonable when:

- all runtime/build gates pass
- no critical regression is found in the representative dreams
- empty-match remains usable
- body-appearance and scar outputs remain clearly non-diagnostic
- mobile result reading remains acceptable end-to-end
