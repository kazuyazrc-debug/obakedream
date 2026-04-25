import type { MotifBatch } from "@/data/batches/types";
import { batch23Aliases } from "./aliases";
import { batch23Blocks } from "./blocks";
import { batch23Motifs } from "./motifs";
import { batch23Questions } from "./questions";

export const batch23: MotifBatch = {
  id: "batch-23",
  label: "Stage43 batch-23",
  description:
    "Stage43 additions. Second relationship-cluster batch adding teammate, bully, client, old_friend, childhood_friend, leader, subordinate, shop_clerk, guest, and rescuer.",
  motifs: batch23Motifs,
  aliases: batch23Aliases,
  questions: batch23Questions,
  blocks: batch23Blocks,
};

export { batch23Aliases } from "./aliases";
export { batch23Blocks } from "./blocks";
export { batch23MotifIds, batch23Motifs } from "./motifs";
export { batch23Questions } from "./questions";
