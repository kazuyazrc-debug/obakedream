# Motif Duplicate And Neighbor Review

Last updated: 2026-05-10

This document records known duplicate, overlapping, and near-neighbor motifs.
It is not a deletion list. Many overlaps are intentional and should be handled
with relation, phrase, weak-term, or pair-block design.

Priority categories:

- A: fix soon
- B: acceptable coexistence
- C: clarify with alias / relation / pair blocks
- D: hold for later review

## Exact Production Duplicate Summary

| check | result |
|---|---|
| motif id duplicates | none found |
| display name duplicates | none after Stage57 clarification |

## Motif Pair Review

| motif pair | current issue | recommended action | risk | priority |
|---|---|---|---|---|
| `dish` / `plate` | Stage57 separated the display labels: `dish` remains broad `皿`, while `plate` is now specific `平皿`. Some tableware phrase overlap still exists by design. | Keep both. Audit tableware extraction before adding new dish/tableware motifs. | Low to medium; generic tableware scenes may still need review. | C |
| `comment` / `sns` | `コメント欄` overlaps with SNS context. | Keep both. `comment` should be the unit of response/text; `sns` should be publicness, reaction, and social surface. | Medium; communication cluster can over-trigger. | C |
| `notebook` / `planner` | `手帳` and `メモ帳` overlap with notebook/planner concepts. | Keep both if planner is schedule/intent and notebook is record/memo. Use phrase-level terms for schedule-specific cases. | Medium; alias overlap can choose wrong primary. | C |
| `house` / `entrance` | `玄関` appears as house/key weak context and entrance alias. | Keep as context-helper. Entrance should be threshold/arrival; house remains whole private space. | Medium; home-place cluster is already large. | C |
| `station` / `train` | Station is place/transition; train is vehicle/route. | Keep both as near-neighbor. Use specific priority for train-riding phrases and station-lost/waiting phrases. | Low to medium. | B |
| `sea` / `water` / `river` | Generic water overlaps with specific bodies of water. | Keep generic-specific ordering. Specific motifs should rank above `water` when strong phrase/alias exists. | Medium; generic suppression can hide water context if too aggressive. | C |
| `hallway` / `school` | Hallway can be a school place or a general transition corridor. | Keep hallway as place/context; school remains institution/evaluation/memory cluster. | Low to medium. | B |
| `fighting` / anger-related motifs | Action conflict, anger, shouting, and attack imagery can cluster. | Avoid over-suppression. Use questions and scoreImpact to separate confrontation from emotion. | Medium; high-emotion dreams can over-stack. | C |
| `child` / `family` / `baby` | Family relation, child self-image, and baby/new beginning can overlap. | Keep all. Clarify with relation and questions: role, age, care, and whether the child is known. | Medium. | C |
| `teacher` / `boss` / `workplace` | Authority/evaluation overlaps across school and work. | Keep all. Teacher = learning/evaluation memory; boss = authority/work responsibility; workplace = environment. | Medium; authority cluster can mis-rank. | C |
| `airplane` / `airport` / `travel` | Stage55 added airplane as a vehicle motif. Airport and travel can appear as strong context. | Keep as generic-specific / near-neighbor. Airplane should be primary for explicit flight scenes; airport/travel remain context. | Low to medium. | B |
| `cave` / `dark` / `forest` / `mountain` | Cave can borrow dark/nature-place language from existing motifs. | Keep as context-helper. Cave should mean interior/hidden depth, not just any dark or forest scene. | Medium. | C |
| `whale` / `sea` / `water` / `fish` | Whale is a water animal and can overlap with generic sea/water/fish motifs. | Keep whale as a specific animal. Sea/water/fish should support the setting unless directly dominant. | Low to medium. | B |
| `fox` / `shrine` / `forest` / `dark` | Fox can appear as animal, shrine messenger, or night/forest figure. | Keep as near-neighbor/context-helper. Avoid broad one-character fox aliases beyond reviewed phrases. | Medium. | C |
| `desert` / `sand` / `road` / `sun` | Desert can overlap with sand and road when the scene is a dry path. | Keep desert primary for explicit desert scenes; sand/road/sun remain environmental helpers. | Low to medium. | B |

## Alias / Phrase / Weak Overlap Watchlist

The following repeated terms were found across multiple motifs. Review before
adding nearby motifs:

| repeated term | current motifs | review note |
|---|---|---|
| `同僚` | `friend` weak, `workplace` weak, `coworker` alias | Acceptable only if coworker has strong primary phrases. Avoid adding more broad coworker weak terms. |
| `玄関` | `house` weak, `key` weak, `entrance` alias | Context-helper overlap. Keep entrance specific. |
| `皿を洗う` | `kitchen` weak, `dish` phrase, `plate` phrase | Stage57 clarified `plate` as flat-plate-specific. Keep watching broad washing/tableware scenes. |
| `コメント欄` | `sns` weak, `comment` alias | Keep if comment is specific and SNS remains context. Add fixture if false positives appear. |
| `手帳` | `notebook` alias, `planner` alias | Clarify planner vs notebook before adding more record/planning motifs. |
| `メモ帳` | `notebook` alias, `notepad` alias | Near-duplicate object terms. Hold unless extraction regressions appear. |
| `本を読む` | `book` phrase, `reading` alias/phrase | Acceptable generic-specific/action overlap. |
| `手紙を書く` | `letter` phrase, `writing` alias/phrase | Acceptable if writing action is not over-promoted. |
| `テレビ画面` | `news` weak, `television` alias | Keep media role split: television = passive viewing, news = reported events. |
| `先輩` | `boss` alias, `senior` alias | Authority/person overlap. Needs care before adding more role motifs. |
| `横断歩道` | `crossroad` alias, `crosswalk` alias | Potential display/extraction overlap. Hold unless both become user-visible confusion. |
| `叫び声` | `screaming` alias, `voice` alias | High-emotion/audio overlap. Use context and questions. |
| `箱を開ける` | `box` phrase, `opening` phrase | Acceptable object/action overlap. |
| `ドアを開ける` | `door` phrase, `opening` phrase | Acceptable object/action overlap. |
| `音楽を聴く` | `earphone` phrase, `music` phrase | Acceptable object/media overlap. |

## Immediate Recommendations

1. Treat `dish` / `plate` as clarified but still watch tableware extraction before adding more tableware.
2. Do not add more generic aliases to communication motifs until `comment` / `sns`
   behavior is checked with extraction fixtures.
3. Treat deferred `cemetery` as a future reviewed candidate, not as part of
   production batch-29.
4. Keep display-name duplicates visible in review rather than silently deleting one.

## Stage56 Addendum

- `dish` / `plate` was resolved in Stage57 by display-name and alias-intent
  clarification:
  - `dish`: broad dishes/tableware, washing and meal context.
  - `plate`: flat plate, serving and presentation context, displayed as `平皿`.
- `batch-29` relation audit found no `general` or `stale-relation` records.
- `cemetery` remains deferred because it is high-stimulus and should not be used
  as a routine count-filling motif.
- Stage58 should verify no unexpected tableware regression after the display
  clarification.

## Deferred Cleanup

These are not part of the current cleanup phase:

- mass alias rewrites
- motif id renames
- broad extraction algorithm changes
- automatic relation reciprocal generation
- converting all batch notation to one style
