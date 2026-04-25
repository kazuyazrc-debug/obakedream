import type { MotifBatch } from "@/data/batches/types";
import { batch27Aliases } from "./aliases";
import { batch27Blocks } from "./blocks";
import { batch27Motifs } from "./motifs";
import { batch27Questions } from "./questions";

export const batch27: MotifBatch = {
  id: "batch-27",
  label: "Stage51 batch-27",
  description:
    "Stage51 additions. High-frequency social and crisis motifs: ghost, interview, confession, betrayal, divorce, presentation, treasure, war, prison, and apology.",
  motifs: batch27Motifs,
  aliases: batch27Aliases,
  questions: batch27Questions,
  blocks: batch27Blocks,
};

export { batch27Aliases } from "./aliases";
export { batch27Blocks } from "./blocks";
export { batch27MotifIds, batch27Motifs } from "./motifs";
export { batch27Questions } from "./questions";
