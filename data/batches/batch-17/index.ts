import type { MotifBatch } from "@/data/batches/types";
import { batch17Aliases } from "./aliases";
import { batch17Blocks } from "./blocks";
import { batch17Motifs } from "./motifs";
import { batch17Questions } from "./questions";

export const batch17: MotifBatch = {
  id: "batch-17",
  label: "Stage31追加20モチーフ",
  description:
    "320モチーフへの拡張。Stage30の軽監査を踏まえ、home-place / communication / relationshipを抑制しながら、object-record / nature と実夢文監査に関わる補助motifを10+10で段階追加するStage31の追加モチーフです。",
  motifs: batch17Motifs,
  aliases: batch17Aliases,
  questions: batch17Questions,
  blocks: batch17Blocks,
};

export { batch17Aliases } from "./aliases";
export { batch17Blocks } from "./blocks";
export { batch17MotifIds, batch17Motifs } from "./motifs";
export { batch17Questions } from "./questions";
