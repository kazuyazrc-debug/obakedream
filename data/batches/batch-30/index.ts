import type { MotifBatch } from "@/data/batches/types";
import { batch30Aliases } from "./aliases";
import { batch30Blocks } from "./blocks";
import { batch30Motifs } from "./motifs";
import { batch30Questions } from "./questions";

export const batch30: MotifBatch = {
  id: "batch-30",
  label: "Stage57 batch-30",
  description:
    "Stage57 additions for reaching 500 production motifs. Adds low-to-mid risk daily objects, home places, actions, animals, and care/family roles.",
  motifs: batch30Motifs,
  aliases: batch30Aliases,
  questions: batch30Questions,
  blocks: batch30Blocks,
};

export { batch30Aliases } from "./aliases";
export { batch30Blocks } from "./blocks";
export { batch30MotifIds, batch30Motifs } from "./motifs";
export { batch30Questions } from "./questions";
