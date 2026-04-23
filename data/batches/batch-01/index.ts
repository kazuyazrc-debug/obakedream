import type { MotifBatch } from "@/data/batches/types";
import { batch01Aliases } from "./aliases";
import { batch01Blocks } from "./blocks";
import { batch01Motifs } from "./motifs";
import { batch01Questions } from "./questions";

export const batch01: MotifBatch = {
  id: "batch-01",
  label: "初期20モチーフ",
  description: "頻出性と解釈の広がりを優先した、最初の核となる20モチーフです。",
  motifs: batch01Motifs,
  aliases: batch01Aliases,
  questions: batch01Questions,
  blocks: batch01Blocks,
};

export { batch01Aliases } from "./aliases";
export { batch01Blocks } from "./blocks";
export { batch01MotifIds, batch01Motifs } from "./motifs";
export { batch01Questions } from "./questions";
