import { scoreAxes } from "@/types/dream";
import type { ScoreAxis } from "@/types/dream";
import { drinkCandidates } from "@/data/rules/drinkRecommendations";
import type { Drink, DrinkRecommendation } from "@/data/rules/drinkRecommendations";

export type { Drink, DrinkRecommendation };

// Tie-breaking order for dominant axis selection (higher priority = earlier in list)
export const DRINK_TIE_ORDER: ScoreAxis[] = [
  "anxiety",
  "change",
  "relationships",
  "selfDefense",
  "loss",
  "recovery",
  "desire",
  "unresolved",
];

// Deterministic djb2-style hash — never uses Math.random()
function djb2Hash(s: string): number {
  let hash = 5381;
  for (let i = 0; i < s.length; i++) {
    hash = ((hash << 5) + hash + s.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

function resolveAxis(axis: ScoreAxis | undefined): ScoreAxis {
  if (axis !== undefined && (scoreAxes as readonly string[]).includes(axis)) {
    return axis;
  }
  return "recovery";
}

function pickFromPool(pool: Drink[], hashInput: string): Drink | undefined {
  if (pool.length === 0) return undefined;
  return pool[djb2Hash(hashInput) % pool.length];
}

/**
 * Selects one morning drink and one afternoon drink based on the dominant
 * interpretation axis and a deterministic seed string.
 *
 * - Invalid or missing dominantAxis falls back to "recovery".
 * - If the axis pool is somehow empty, falls back to "recovery", then "unresolved".
 * - Separate salts (":morning" / ":afternoon") prevent collapsing variation to
 *   12 fixed pairs per axis.
 * - Never returns an afternoon drink with caffeine: "yes".
 */
export function selectDrinkRecommendation(params: {
  dominantAxis?: ScoreAxis;
  seed?: string;
}): DrinkRecommendation {
  const axis = resolveAxis(params.dominantAxis);
  const seed = params.seed ?? "";

  const morningPool = drinkCandidates.filter(
    (d) => d.axis === axis && d.time === "morning",
  );
  // Defense-in-depth: filter afternoon to caffeine "no" even if data is correct
  const afternoonPool = drinkCandidates.filter(
    (d) => d.axis === axis && d.time === "afternoon" && d.caffeine === "no",
  );

  // Fallback chains if a pool is unexpectedly empty
  const effectiveMorningPool =
    morningPool.length > 0
      ? morningPool
      : drinkCandidates.filter((d) => d.axis === "recovery" && d.time === "morning");
  const effectiveAfternoonPool =
    afternoonPool.length > 0
      ? afternoonPool
      : drinkCandidates.filter(
          (d) => d.axis === "unresolved" && d.time === "afternoon" && d.caffeine === "no",
        );

  const morning =
    pickFromPool(effectiveMorningPool, seed + ":morning") ?? effectiveMorningPool[0];
  const afternoon =
    pickFromPool(effectiveAfternoonPool, seed + ":afternoon") ?? effectiveAfternoonPool[0];

  if (!morning || !afternoon) {
    throw new Error("selectDrinkRecommendation: no drink candidates available");
  }

  return { morning, afternoon };
}
