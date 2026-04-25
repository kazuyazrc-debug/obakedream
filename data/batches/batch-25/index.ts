import type { MotifBatch } from "@/data/batches/types";
import { batch25Aliases } from "./aliases";
import { batch25Blocks } from "./blocks";
import { batch25Motifs } from "./motifs";
import { batch25Questions } from "./questions";

export const batch25: MotifBatch = {
  id: "batch-25",
  label: "Stage47 batch-25",
  description:
    "Stage47 additions. Natural disaster, life event, and body sensation motifs adding earthquake, tsunami, storm, being_trapped, paralysis, being_fired, resignation, pregnancy, transformation, and power_outage.",
  motifs: batch25Motifs,
  aliases: batch25Aliases,
  questions: batch25Questions,
  blocks: batch25Blocks,
};

export { batch25Aliases } from "./aliases";
export { batch25Blocks } from "./blocks";
export { batch25MotifIds, batch25Motifs } from "./motifs";
export { batch25Questions } from "./questions";
