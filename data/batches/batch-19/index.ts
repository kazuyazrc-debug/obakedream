import type { MotifBatch } from "@/data/batches/types";
import { batch19Aliases } from "./aliases";
import { batch19Blocks } from "./blocks";
import { batch19Motifs } from "./motifs";
import { batch19Questions } from "./questions";

export const batch19: MotifBatch = {
  id: "batch-19",
  label: "Stage35追加20モチーフ",
  description:
    "360モチーフへ向けたStage35の追加バッチです。Stage34監査を踏まえ、home-place / communication / relationshipを抑制しながら、前半はobject-record / natureを中心に、後半はmovement / digital object / body-appearanceの境界確認を伴う候補を扱います。",
  motifs: batch19Motifs,
  aliases: batch19Aliases,
  questions: batch19Questions,
  blocks: batch19Blocks,
};

export { batch19Aliases } from "./aliases";
export { batch19Blocks } from "./blocks";
export { batch19MotifIds, batch19Motifs } from "./motifs";
export { batch19Questions } from "./questions";
