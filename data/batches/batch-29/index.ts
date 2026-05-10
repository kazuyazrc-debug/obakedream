import type { MotifBatch } from "@/data/batches/types";
import { batch29Aliases } from "./aliases";
import { batch29Blocks } from "./blocks";
import { batch29Motifs } from "./motifs";
import { batch29Questions } from "./questions";

export const batch29: MotifBatch = {
  id: "batch-29",
  label: "Stage55 batch-29",
  description:
    "Stage55 additions for reaching 480 production motifs. Adds nine low-to-mid risk motifs: airplane, sword, cave, island, volcano, crowd, whale, fox, and desert. cemetery stays deferred.",
  motifs: batch29Motifs,
  aliases: batch29Aliases,
  questions: batch29Questions,
  blocks: batch29Blocks,
};

export { batch29Aliases } from "./aliases";
export { batch29Blocks } from "./blocks";
export { batch29DeferredMotifIds, batch29MotifIds, batch29Motifs } from "./motifs";
export { batch29Questions } from "./questions";
