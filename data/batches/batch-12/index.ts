import type { MotifBatch } from "@/data/batches/types";
import { batch12Aliases } from "./aliases";
import { batch12Blocks } from "./blocks";
import { batch12Motifs } from "./motifs";
import { batch12Questions } from "./questions";

export const batch12: MotifBatch = {
  id: "batch-12",
  label: "Stage21追加20モチーフ",
  description:
    "220モチーフへの拡張。Stage20軽監査を踏まえ、home-place / communication / relationship候補を採用せず、object-record・body-appearance・行動を中心に10+10で段階追加するStage21の追加モチーフです。",
  motifs: batch12Motifs,
  aliases: batch12Aliases,
  questions: batch12Questions,
  blocks: batch12Blocks,
};

export { batch12Aliases } from "./aliases";
export { batch12Blocks } from "./blocks";
export { batch12MotifIds, batch12Motifs } from "./motifs";
export { batch12Questions } from "./questions";
