import type { MotifBatch } from "@/data/batches/types";
import { batch13Aliases } from "./aliases";
import { batch13Blocks } from "./blocks";
import { batch13Motifs } from "./motifs";
import { batch13Questions } from "./questions";

export const batch13: MotifBatch = {
  id: "batch-13",
  label: "Stage23追加20モチーフ",
  description:
    "240モチーフへの拡張。Stage22軽監査を踏まえ、home-place / communication / relationship候補を採用せず、object-record / nature / body-appearance / actionを中心に10+10で段階追加するStage23の追加モチーフです。",
  motifs: batch13Motifs,
  aliases: batch13Aliases,
  questions: batch13Questions,
  blocks: batch13Blocks,
};

export { batch13Aliases } from "./aliases";
export { batch13Blocks } from "./blocks";
export { batch13MotifIds, batch13Motifs } from "./motifs";
export { batch13Questions } from "./questions";
