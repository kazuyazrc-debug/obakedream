import type { MotifBatch } from "@/data/batches/types";
import { batch05Aliases } from "./aliases";
import { batch05Blocks } from "./blocks";
import { batch05Motifs } from "./motifs";
import { batch05Questions } from "./questions";

export const batch05: MotifBatch = {
  id: "batch-05",
  label: "Stage8追加20モチーフ",
  description: "場所、物、行動、身体状態、自然、現代生活を100モチーフ到達へ向けて広げるStage8の追加モチーフです。",
  motifs: batch05Motifs,
  aliases: batch05Aliases,
  questions: batch05Questions,
  blocks: batch05Blocks,
};

export { batch05Aliases } from "./aliases";
export { batch05Blocks } from "./blocks";
export { batch05MotifIds, batch05Motifs } from "./motifs";
export { batch05Questions } from "./questions";
