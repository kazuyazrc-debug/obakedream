import type { MotifBatch } from "@/data/batches/types";
import { batch07Aliases } from "./aliases";
import { batch07Blocks } from "./blocks";
import { batch07Motifs } from "./motifs";
import { batch07Questions } from "./questions";

export const batch07: MotifBatch = {
  id: "batch-07",
  label: "Stage12/13追加モチーフ（前半補完10件）",
  description: "130モチーフへの拡張。Stage12前半の9件にStage13の眼鏡補完を加えた、身体・感覚・関係・行動・現代生活の追加モチーフです。",
  motifs: batch07Motifs,
  aliases: batch07Aliases,
  questions: batch07Questions,
  blocks: batch07Blocks,
};

export { batch07Aliases } from "./aliases";
export { batch07Blocks } from "./blocks";
export { batch07MotifIds, batch07Motifs } from "./motifs";
export { batch07Questions } from "./questions";
