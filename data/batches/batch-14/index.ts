import type { MotifBatch } from "@/data/batches/types";
import { batch14Aliases } from "./aliases";
import { batch14Blocks } from "./blocks";
import { batch14Motifs } from "./motifs";
import { batch14Questions } from "./questions";

export const batch14: MotifBatch = {
  id: "batch-14",
  label: "Stage25追加20モチーフ",
  description:
    "260モチーフへの拡張。Stage24の軽監査 + 基盤整備メモを踏まえ、home-place / communication / relationship候補を採用せず、object-record / nature / body-appearance補助を中心に10+10で段階追加するStage25の追加モチーフです。",
  motifs: batch14Motifs,
  aliases: batch14Aliases,
  questions: batch14Questions,
  blocks: batch14Blocks,
};

export { batch14Aliases } from "./aliases";
export { batch14Blocks } from "./blocks";
export { batch14MotifIds, batch14Motifs } from "./motifs";
export { batch14Questions } from "./questions";
