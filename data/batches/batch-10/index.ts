import type { MotifBatch } from "@/data/batches/types";
import { batch10Aliases } from "./aliases";
import { batch10Blocks } from "./blocks";
import { batch10Motifs } from "./motifs";
import { batch10Questions } from "./questions";

export const batch10: MotifBatch = {
  id: "batch-10",
  label: "Stage17追加20モチーフ",
  description:
    "180モチーフへの拡張。Stage16監査結果を踏まえ、時間・関係・物・外見・通信反応・行動・場所を10+10で段階追加するStage17の追加モチーフです。",
  motifs: batch10Motifs,
  aliases: batch10Aliases,
  questions: batch10Questions,
  blocks: batch10Blocks,
};

export { batch10Aliases } from "./aliases";
export { batch10Blocks } from "./blocks";
export { batch10MotifIds, batch10Motifs } from "./motifs";
export { batch10Questions } from "./questions";
