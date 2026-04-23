import { emptyScoreVector } from "@/data/rules/scoring";
import type { ScoreAxis, ScoreVector } from "@/types/dream";

export function createScoreVector(): ScoreVector {
  return { ...emptyScoreVector };
}

export function addScoreImpact(
  base: ScoreVector,
  impact: Partial<ScoreVector>,
  multiplier = 1,
): ScoreVector {
  const next = { ...base };

  for (const [axis, value] of Object.entries(impact) as [ScoreAxis, number][]) {
    next[axis] += value * multiplier;
  }

  return next;
}

export function clampScoreVector(scores: ScoreVector, min = 0, max = 12): ScoreVector {
  const next = { ...scores };

  for (const axis of Object.keys(next) as ScoreAxis[]) {
    next[axis] = Math.max(min, Math.min(max, Math.round(next[axis])));
  }

  return next;
}

export function getDominantAxes(scores: ScoreVector, count = 3): ScoreAxis[] {
  return (Object.entries(scores) as [ScoreAxis, number][])
    .sort((a, b) => b[1] - a[1])
    .slice(0, count)
    .filter(([, score]) => score > 0)
    .map(([axis]) => axis);
}
