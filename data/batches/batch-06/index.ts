import type { MotifBatch } from "@/data/batches/types";
import { batch06Aliases } from "./aliases";
import { batch06Blocks } from "./blocks";
import { batch06Motifs } from "./motifs";
import { batch06Questions } from "./questions";

export const batch06: MotifBatch = {
  id: "batch-06",
  label: "Stage10追加20モチーフ",
  description: "120モチーフ到達へ向け、場所、物、行動、自然、現代生活を段階追加するStage10の追加モチーフです。",
  motifs: batch06Motifs,
  aliases: batch06Aliases,
  questions: batch06Questions,
  blocks: batch06Blocks,
};

export { batch06Aliases } from "./aliases";
export { batch06Blocks } from "./blocks";
export { batch06MotifIds, batch06Motifs } from "./motifs";
export { batch06Questions } from "./questions";
