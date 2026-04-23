import type { MotifBatch } from "@/data/batches/types";
import { batch08Aliases } from "./aliases";
import { batch08Blocks } from "./blocks";
import { batch08Motifs } from "./motifs";
import { batch08Questions } from "./questions";

export const batch08: MotifBatch = {
  id: "batch-08",
  label: "Stage12追加20モチーフ（後半10件）",
  description: "139モチーフへの拡張。子ども・石・屋上・温泉・ゲーム・イヤホン・暗闇・痛み・眠り・壊れるを追加するStage12後半の追加モチーフです。",
  motifs: batch08Motifs,
  aliases: batch08Aliases,
  questions: batch08Questions,
  blocks: batch08Blocks,
};

export { batch08Aliases } from "./aliases";
export { batch08Blocks } from "./blocks";
export { batch08MotifIds, batch08Motifs } from "./motifs";
export { batch08Questions } from "./questions";
