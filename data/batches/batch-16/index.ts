import type { MotifBatch } from "@/data/batches/types";
import { batch16Aliases } from "./aliases";
import { batch16Blocks } from "./blocks";
import { batch16Motifs } from "./motifs";
import { batch16Questions } from "./questions";

export const batch16: MotifBatch = {
  id: "batch-16",
  label: "Stage29追加20モチーフ",
  description:
    "300モチーフへの拡張。Stage28の軽監査を踏まえ、home-place / communication / relationshipを抑制しながら、object-record / nature / body-appearance と実夢文監査に関わる補助motifを10+10で段階追加するStage29の追加モチーフです。",
  motifs: batch16Motifs,
  aliases: batch16Aliases,
  questions: batch16Questions,
  blocks: batch16Blocks,
};

export { batch16Aliases } from "./aliases";
export { batch16Blocks } from "./blocks";
export { batch16MotifIds, batch16Motifs } from "./motifs";
export { batch16Questions } from "./questions";
