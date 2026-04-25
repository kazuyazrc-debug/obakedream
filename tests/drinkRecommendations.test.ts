import { describe, expect, it } from "vitest";
import { drinkCandidates } from "@/data/rules/drinkRecommendations";
import { selectDrinkRecommendation } from "@/lib/dream-engine/drinks/selectDrinkRecommendation";

const ALL_AXES = [
  "anxiety",
  "change",
  "relationships",
  "selfDefense",
  "loss",
  "recovery",
  "desire",
  "unresolved",
] as const;

// Banned substrings for afternoon drink names (from spec + data requirements)
const BANNED_AFTERNOON_TERMS = [
  "コーヒー",
  "デカフェ",
  "紅茶",
  "緑茶",
  "烏龍茶",
  "ジャスミン茶",
  "抹茶",
  "ほうじ茶",
  "ほうじ茶", // spec lists this twice — both kept for exact compliance
  "チョコ",
  "カカオ",
];

describe("drinkRecommendations", () => {
  it("returns one morning and one afternoon drink", () => {
    const result = selectDrinkRecommendation({ dominantAxis: "recovery", seed: "test" });

    expect(result.morning).toBeDefined();
    expect(result.afternoon).toBeDefined();
    expect(result.morning.time).toBe("morning");
    expect(result.afternoon.time).toBe("afternoon");
  });

  it("works for all 8 axes", () => {
    for (const axis of ALL_AXES) {
      const result = selectDrinkRecommendation({ dominantAxis: axis, seed: "test" });

      expect(result.morning.axis, `morning axis for ${axis}`).toBe(axis);
      expect(result.afternoon.axis, `afternoon axis for ${axis}`).toBe(axis);
    }
  });

  it("afternoon drinks are always caffeine: 'no'", () => {
    for (const axis of ALL_AXES) {
      // Sample multiple seeds to cover pool variation
      for (let i = 0; i < 12; i++) {
        const result = selectDrinkRecommendation({ dominantAxis: axis, seed: String(i) });

        expect(
          result.afternoon.caffeine,
          `afternoon caffeine for axis=${axis} seed=${i}`,
        ).toBe("no");
      }
    }
  });

  it("afternoon names do not include banned terms", () => {
    const uniqueTerms = [...new Set(BANNED_AFTERNOON_TERMS)];
    const afternoonDrinks = drinkCandidates.filter((d) => d.time === "afternoon");

    // Check every candidate in the dataset
    for (const drink of afternoonDrinks) {
      for (const term of uniqueTerms) {
        expect(
          drink.name,
          `drink "${drink.name}" (id=${drink.id}) contains banned term "${term}"`,
        ).not.toContain(term);
      }
    }
  });

  it("same axis and same seed returns the same recommendation", () => {
    const a = selectDrinkRecommendation({ dominantAxis: "anxiety", seed: "stable-seed" });
    const b = selectDrinkRecommendation({ dominantAxis: "anxiety", seed: "stable-seed" });

    expect(a.morning.id).toBe(b.morning.id);
    expect(a.afternoon.id).toBe(b.afternoon.id);
  });

  it("different seeds can produce different recommendations", () => {
    const seeds = Array.from({ length: 12 }, (_, i) => String(i));
    const morningNames = new Set(
      seeds.map((seed) =>
        selectDrinkRecommendation({ dominantAxis: "anxiety", seed }).morning.name,
      ),
    );

    // 12 candidates × 12 seeds — at least 2 distinct results expected
    expect(morningNames.size).toBeGreaterThan(1);
  });

  it("invalid/missing axis falls back safely", () => {
    const noAxis = selectDrinkRecommendation({ seed: "test" });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const invalidAxis = selectDrinkRecommendation({ dominantAxis: "invalid" as any, seed: "test" });

    for (const result of [noAxis, invalidAxis]) {
      expect(result.morning).toBeDefined();
      expect(result.afternoon).toBeDefined();
      expect(result.morning.time).toBe("morning");
      expect(result.afternoon.time).toBe("afternoon");
      expect(result.afternoon.caffeine).toBe("no");
    }
  });

  it("data has at least 96 morning, 96 afternoon, and 192 total candidates", () => {
    const morning = drinkCandidates.filter((d) => d.time === "morning");
    const afternoon = drinkCandidates.filter((d) => d.time === "afternoon");

    expect(morning.length).toBeGreaterThanOrEqual(96);
    expect(afternoon.length).toBeGreaterThanOrEqual(96);
    expect(drinkCandidates.length).toBeGreaterThanOrEqual(192);
  });
});
