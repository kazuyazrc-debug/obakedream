import type { MotifBatch } from "@/data/batches/types";
import { batch03Aliases } from "./aliases";
import { batch03Blocks } from "./blocks";
import { batch03Motifs } from "./motifs";
import { batch03Questions } from "./questions";

export const batch03: MotifBatch = {
  id: "batch-03",
  label: "Stage4追加20モチーフ",
  description: "連絡、感情行動、関係、移動、自然、身体、記録を広げるStage4の追加モチーフです。",
  motifs: batch03Motifs,
  aliases: batch03Aliases,
  questions: batch03Questions,
  blocks: batch03Blocks,
};

export { batch03Aliases } from "./aliases";
export { batch03Blocks } from "./blocks";
export { batch03MotifIds, batch03Motifs } from "./motifs";
export { batch03Questions } from "./questions";
