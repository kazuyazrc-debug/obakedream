import type { MotifBatch } from "@/data/batches/types";
import { batch02Aliases } from "./aliases";
import { batch02Blocks } from "./blocks";
import { batch02Motifs } from "./motifs";
import { batch02Questions } from "./questions";

export const batch02: MotifBatch = {
  id: "batch-02",
  label: "Stage2追加20モチーフ",
  description: "自然、進路、移動、場所、持ち物を中心にしたStage2の追加モチーフです。",
  motifs: batch02Motifs,
  aliases: batch02Aliases,
  questions: batch02Questions,
  blocks: batch02Blocks,
};

export { batch02Aliases } from "./aliases";
export { batch02Blocks } from "./blocks";
export { batch02MotifIds, batch02Motifs } from "./motifs";
export { batch02Questions } from "./questions";
