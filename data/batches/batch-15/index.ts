import type { MotifBatch } from "@/data/batches/types";
import { batch15Aliases } from "./aliases";
import { batch15Blocks } from "./blocks";
import { batch15Motifs } from "./motifs";
import { batch15Questions } from "./questions";

export const batch15: MotifBatch = {
  id: "batch-15",
  label: "Stage27追加20モチーフ",
  description:
    "280モチーフへの拡張。Stage26の軽監査を踏まえ、home-place / communication / relationshipを抑制しながら、object-record / nature / body-appearanceを中心に10+10で段階追加するStage27の追加モチーフです。",
  motifs: batch15Motifs,
  aliases: batch15Aliases,
  questions: batch15Questions,
  blocks: batch15Blocks,
};

export { batch15Aliases } from "./aliases";
export { batch15Blocks } from "./blocks";
export { batch15MotifIds, batch15Motifs } from "./motifs";
export { batch15Questions } from "./questions";
