import type { DreamImpression, MemoryClarity, ScoreVector } from "@/types/dream";

export const emptyScoreVector: ScoreVector = {
  anxiety: 0,
  change: 0,
  relationships: 0,
  selfDefense: 0,
  loss: 0,
  recovery: 0,
  desire: 0,
  unresolved: 0,
};

export const impressionScoreImpact: Record<DreamImpression, Partial<ScoreVector>> = {
  scary: { anxiety: 3, selfDefense: 1 },
  uneasy: { anxiety: 2, unresolved: 1 },
  happy: { desire: 2, recovery: 1 },
  nostalgic: { recovery: 1, unresolved: 2 },
  confused: { unresolved: 2, change: 1 },
  calm: { recovery: 2 },
};

export const clarityScoreImpact: Record<MemoryClarity, Partial<ScoreVector>> = {
  vague: { unresolved: 1 },
  partial: { change: 1 },
  clear: { selfDefense: 1, recovery: 1 },
};

export const recurringScoreImpact: Partial<ScoreVector> = {
  unresolved: 2,
  anxiety: 1,
};

export const axisLabels: Record<keyof ScoreVector, string> = {
  anxiety: "不安",
  change: "変化",
  relationships: "対人",
  selfDefense: "自己防衛",
  loss: "喪失",
  recovery: "回復",
  desire: "願望",
  unresolved: "未解決感",
};
