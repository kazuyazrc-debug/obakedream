import type { MotifBatch } from "@/data/batches/types";
import { batch21Aliases } from "./aliases";
import { batch21Blocks } from "./blocks";
import { batch21Motifs } from "./motifs";
import { batch21Questions } from "./questions";

export const batch21: MotifBatch = {
  id: "batch-21",
  label: "Stage39 batch-21",
  description:
    "Stage39 additions. The front half stays centered on nature and object-record motifs, then the back half adds carefully bounded movement, digital-object, body, and action motifs to reach 400 motifs.",
  motifs: batch21Motifs,
  aliases: batch21Aliases,
  questions: batch21Questions,
  blocks: batch21Blocks,
};

export { batch21Aliases } from "./aliases";
export { batch21Blocks } from "./blocks";
export { batch21MotifIds, batch21Motifs } from "./motifs";
export { batch21Questions } from "./questions";
