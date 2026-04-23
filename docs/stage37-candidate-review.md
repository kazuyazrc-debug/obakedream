# Stage37 candidate review

## Preconditions
- AGENTS.md checked.
- `node_modules/next/dist/docs/index.md` checked.
- Stage37 is not a Next.js UI change.
- Stage37 adds `batch-20` only.

## Selection policy
Stage37 keeps `home-place`, `communication`, and `relationship` in the restrained lane.
The front half stays centered on `nature` and `object-record` so that we do not make the existing
`movement`, `digital object`, and `body-appearance` boundaries noisier too early.
The back half takes the more audit-sensitive motifs after the front-half gate passes.

## Adopted front 10
- `willow`
- `lotus`
- `butterfly`
- `dragonfly`
- `owl`
- `paper_bag`
- `coin_purse`
- `corkboard`
- `measuring_tape`
- `ink_pad`

Why these fit the front half:
- They are mostly `nature-sky` or `object-record`.
- They do not thicken `home-place`, `communication`, or `relationship`.
- They are explainable as existing-cluster extensions with clear nearby motifs.
- They keep `body-appearance` growth at zero in the front half.

## Adopted back 10
- `ticket_machine`
- `departure_board`
- `platform_clock`
- `cursor`
- `battery_icon`
- `mute_button`
- `nape`
- `eyelid`
- `hesitating`
- `backing_away`

Why these stay in the back half:
- `ticket_machine / departure_board / platform_clock` sit close to the existing
  `ticket_gate / platform_sign / platform_edge / train / being_late` boundary.
- `cursor / battery_icon / mute_button` sit close to the existing digital-object boundary around
  `pause_button / status_light / screen_corner / monitor`.
- `nape / eyelid` need explicit non-diagnostic copy checks next to
  `temple / jawline / chin / face / cheek`.
- `hesitating / backing_away` grow `emotion-action`, so they belong after the safer front half.

## Explicitly not adopted
- `anger`
- `whispering`
- `wound`
- `secret`
- `message`
- `bedroom`
- `bathroom`
- `medicine`
- `meeting`
- `office_room`

Reasons:
- would thicken restrained clusters,
- would push medical / diagnostic interpretation,
- or would mix real-dream extraction improvement work into the addition batch.

## Real-dream audit handling
Stage37 keeps these as comparison targets rather than new motif work:
- `being_late`
- `exam`
- `ex_partner`
- `making_mistake`
- `being_chased`
- `train -> car`
- `hallway -> school`
- anger colloquialisms routed to `fighting`

If extraction changes are made, they must stay minimal and be documented as alias / phrase tweaks
rather than a broader extraction redesign.
