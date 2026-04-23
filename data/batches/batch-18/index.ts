import type { MotifBatch } from "@/data/batches/types";
import { batch18Aliases } from "./aliases";
import { batch18Blocks } from "./blocks";
import { batch18Motifs } from "./motifs";
import { batch18Questions } from "./questions";

export const batch18: MotifBatch = {
  id: "batch-18",
  label: "Stage33追加20モチーフ",
  description:
    "340モチーフへ向けたStage33の追加バッチです。Stage32監査を踏まえ、home-place / communication / relationshipを抑制しながら、object-record / natureを前半に寄せ、movementとbody-appearanceは境界を確認しつつ後半で扱います。",
  motifs: batch18Motifs,
  aliases: batch18Aliases,
  questions: batch18Questions,
  blocks: batch18Blocks,
};

export { batch18Aliases } from "./aliases";
export { batch18Blocks } from "./blocks";
export { batch18MotifIds, batch18Motifs } from "./motifs";
export { batch18Questions } from "./questions";
