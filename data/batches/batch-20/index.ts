import type { MotifBatch } from "@/data/batches/types";
import { batch20Aliases } from "./aliases";
import { batch20Blocks } from "./blocks";
import { batch20Motifs } from "./motifs";
import { batch20Questions } from "./questions";

export const batch20: MotifBatch = {
  id: "batch-20",
  label: "Stage37追加バッチ",
  description:
    "380モチーフへ向けたStage37の追加バッチ。前半はnature / object-recordを中心に置き、movementやbody-appearanceの過密化を前半では避けながら段階実装する。",
  motifs: batch20Motifs,
  aliases: batch20Aliases,
  questions: batch20Questions,
  blocks: batch20Blocks,
};

export { batch20Aliases } from "./aliases";
export { batch20Blocks } from "./blocks";
export { batch20MotifIds, batch20Motifs } from "./motifs";
export { batch20Questions } from "./questions";
