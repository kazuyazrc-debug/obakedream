import type { MotifBatch } from "@/data/batches/types";
import { batch09Aliases } from "./aliases";
import { batch09Blocks } from "./blocks";
import { batch09Motifs } from "./motifs";
import { batch09Questions } from "./questions";

export const batch09: MotifBatch = {
  id: "batch-09",
  label: "Stage15追加20モチーフ",
  description: "160モチーフへの拡張。next-20候補から、生活空間・道具・情報受信・外見・自然・行動・関係を段階追加するStage15の追加モチーフです。",
  motifs: batch09Motifs,
  aliases: batch09Aliases,
  questions: batch09Questions,
  blocks: batch09Blocks,
};

export { batch09Aliases } from "./aliases";
export { batch09Blocks } from "./blocks";
export { batch09MotifIds, batch09Motifs } from "./motifs";
export { batch09Questions } from "./questions";
