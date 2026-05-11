import type { MotifBatch } from "@/data/batches/types";
import { batch31Aliases } from "./aliases";
import { batch31Blocks } from "./blocks";
import { batch31Motifs } from "./motifs";
import { batch31Questions } from "./questions";

export const batch31: MotifBatch = {
  id: "batch-31",
  label: "Stage62 batch-31",
  description:
    "Stage62 additions for expanding production from 500 to 520 motifs. Adds reviewed daily objects, actions, animals, movement places, and narrow person-role motifs.",
  motifs: batch31Motifs,
  aliases: batch31Aliases,
  questions: batch31Questions,
  blocks: batch31Blocks,
};

export { batch31Aliases } from "./aliases";
export { batch31Blocks } from "./blocks";
export { batch31MotifIds, batch31Motifs } from "./motifs";
export { batch31Questions } from "./questions";
