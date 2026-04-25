import type { MotifBatch } from "@/data/batches/types";
import { batch24Aliases } from "./aliases";
import { batch24Blocks } from "./blocks";
import { batch24Motifs } from "./motifs";
import { batch24Questions } from "./questions";

export const batch24: MotifBatch = {
  id: "batch-24",
  label: "Stage45 batch-24",
  description:
    "Stage45 additions. Third relationship-cluster batch adding judge, witness, captain, former_classmate, former_coworker, online_friend, police_officer, admirer, driver, landlord, and mediator.",
  motifs: batch24Motifs,
  aliases: batch24Aliases,
  questions: batch24Questions,
  blocks: batch24Blocks,
};

export { batch24Aliases } from "./aliases";
export { batch24Blocks } from "./blocks";
export { batch24MotifIds, batch24Motifs } from "./motifs";
export { batch24Questions } from "./questions";
