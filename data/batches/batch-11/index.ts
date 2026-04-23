import type { MotifBatch } from "@/data/batches/types";
import { batch11Aliases } from "./aliases";
import { batch11Blocks } from "./blocks";
import { batch11Motifs } from "./motifs";
import { batch11Questions } from "./questions";

export const batch11: MotifBatch = {
  id: "batch-11",
  label: "Stage19追加20モチーフ",
  description:
    "200モチーフへの拡張。Stage18監査結果を踏まえ、home-placeとcommunicationを増やしすぎず、object-record・自然・身体・行動を中心に10+10で段階追加するStage19の追加モチーフです。",
  motifs: batch11Motifs,
  aliases: batch11Aliases,
  questions: batch11Questions,
  blocks: batch11Blocks,
};

export { batch11Aliases } from "./aliases";
export { batch11Blocks } from "./blocks";
export { batch11MotifIds, batch11Motifs } from "./motifs";
export { batch11Questions } from "./questions";
