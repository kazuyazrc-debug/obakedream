import type { MotifBatch } from "@/data/batches/types";
import { batch04Aliases } from "./aliases";
import { batch04Blocks } from "./blocks";
import { batch04Motifs } from "./motifs";
import { batch04Questions } from "./questions";

export const batch04: MotifBatch = {
  id: "batch-04",
  label: "Stage6追加20モチーフ",
  description: "場所、物、行動、身体状態、自然、現代コミュニケーションを広げるStage6の追加モチーフです。",
  motifs: batch04Motifs,
  aliases: batch04Aliases,
  questions: batch04Questions,
  blocks: batch04Blocks,
};

export { batch04Aliases } from "./aliases";
export { batch04Blocks } from "./blocks";
export { batch04MotifIds, batch04Motifs } from "./motifs";
export { batch04Questions } from "./questions";
