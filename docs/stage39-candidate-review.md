# Stage39 candidate review

## Preconditions
- AGENTS.md checked.
- `node_modules/next/dist/docs/index.md` checked.
- Stage39 is not a Next.js UI change.
- Stage39 is the last planned addition batch before polish / UI confirmation / provisional release checks.

## Selection policy
Stage39 keeps `home-place`, `communication`, and `relationship` in the restrained lane.
The front half stays centered on `nature` and `object-record`, while the back half carries the
more audit-sensitive `movement`, `digital object`, `body-appearance`, and `emotion-action` work.

The goal is to reach 400 motifs without making these Stage38 audit areas meaningfully worse:
- `generic-specific = 713`
- `object-record = 175`
- `movement = 120`
- `body-appearance = 138`
- `emotion-action = 150`
- `home-place = 118`

## Adopted front 10
- `camellia`
- `ivy`
- `firefly`
- `lily_pad`
- `sparrow`
- `binder_clip`
- `sketchbook`
- `stamp_sheet`
- `hourglass`
- `paperweight`

Why these fit the front half:
- They extend existing `nature-sky` and `object-record` lanes cleanly.
- They do not thicken `home-place`, `communication`, or `relationship`.
- They are explainable with nearby motifs that already exist in the registry.
- They keep `body-appearance` growth at zero in the front half.

## Adopted back 10
- `station_map`
- `route_sign`
- `search_bar`
- `signal_bar`
- `volume_slider`
- `collarbone`
- `flinching`
- `tiptoeing`
- `holding_back`
- `double_checking`

Why these stay in the back half:
- `station_map / route_sign` sit close to the station-side movement boundary around
  `ticket_machine / departure_board / platform_clock / ticket_gate / platform_sign / platform_edge / train / being_late`.
- `search_bar / signal_bar / volume_slider` sit close to the digital-object boundary around
  `cursor / battery_icon / mute_button / pause_button / status_light / screen_corner / monitor`.
- `collarbone` needs explicit non-diagnostic checks next to
  `nape / eyelid / temple / jawline / chin / face / cheek`.
- `flinching / tiptoeing / holding_back / double_checking` grow `emotion-action`, so they belong
  after the safer front-half gate passes.

## Explicitly not adopted
- `anger`
- `whispering`
- `wound`
- `secret`
- home-place-heavy additions
- communication-heavy additions
- relationship-heavy additions

Reasons:
- they would thicken restrained clusters,
- they would mix extraction-improvement work into the final addition batch,
- or they would push interpretation toward diagnostic or over-specific copy.

## Real-dream audit handling
Stage39 keeps these as comparison targets rather than addition work:
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
