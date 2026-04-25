import type { MotifBatch } from "@/data/batches/types";
import { batch26Aliases } from "./aliases";
import { batch26Blocks } from "./blocks";
import { batch26Motifs } from "./motifs";
import { batch26Questions } from "./questions";

export const batch26: MotifBatch = {
  id: "batch-26",
  label: "Stage49 batch-26",
  description:
    "Stage49 additions. High-frequency life events adding funeral, accident, flood, wedding, argument, graduation, surgery, moving_house, reunion, and promotion.",
  motifs: batch26Motifs,
  aliases: batch26Aliases,
  questions: batch26Questions,
  blocks: batch26Blocks,
};

export { batch26Aliases } from "./aliases";
export { batch26Blocks } from "./blocks";
export { batch26MotifIds, batch26Motifs } from "./motifs";
export { batch26Questions } from "./questions";
