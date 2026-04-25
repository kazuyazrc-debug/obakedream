import type { MotifBatch } from "@/data/batches/types";
import { batch22Aliases } from "./aliases";
import { batch22Blocks } from "./blocks";
import { batch22Motifs } from "./motifs";
import { batch22Questions } from "./questions";

export const batch22: MotifBatch = {
  id: "batch-22",
  label: "Stage41 batch-22",
  description:
    "Stage41 additions. Relationship-cluster person motifs covering partner, rival, senior, junior, relative, roommate, customer, guide, ancestor, and mentor — expanding interpersonal dream coverage.",
  motifs: batch22Motifs,
  aliases: batch22Aliases,
  questions: batch22Questions,
  blocks: batch22Blocks,
};

export { batch22Aliases } from "./aliases";
export { batch22Blocks } from "./blocks";
export { batch22MotifIds, batch22Motifs } from "./motifs";
export { batch22Questions } from "./questions";
