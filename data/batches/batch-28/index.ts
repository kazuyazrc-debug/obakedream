import type { MotifBatch } from "@/data/batches/types";
import { batch28Aliases } from "./aliases";
import { batch28Blocks } from "./blocks";
import { batch28Motifs } from "./motifs";
import { batch28Questions } from "./questions";

export const batch28: MotifBatch = {
  id: "batch-28",
  label: "Stage53 batch-28",
  description:
    "Stage53 additions. High-frequency mythic and symbolic dream motifs: dragon, angel, lion, giving_birth, money, spider, bear, wolf, god, and demon.",
  motifs: batch28Motifs,
  aliases: batch28Aliases,
  questions: batch28Questions,
  blocks: batch28Blocks,
};

export { batch28Aliases } from "./aliases";
export { batch28Blocks } from "./blocks";
export { batch28MotifIds, batch28Motifs } from "./motifs";
export { batch28Questions } from "./questions";
