import { describe, expect, it } from "vitest";
import { composeInterpretation, findMotifsByIds } from "@/lib/dream-engine";
import type { DreamInput } from "@/types/dream";

const UNEASY: DreamInput = {
  text: "夢を見た",
  impression: "uneasy",
  clarity: "clear",
  recurring: false,
};

const SCARY: DreamInput = {
  text: "怖い夢を見た",
  impression: "scary",
  clarity: "clear",
  recurring: false,
};

describe("encouragement composition — Stage 4", () => {
  it("same input produces identical encouragement (deterministic)", () => {
    const motifs = findMotifsByIds(["snake"]);
    const a = composeInterpretation(UNEASY, motifs, []);
    const b = composeInterpretation(UNEASY, motifs, []);

    expect(a.sections.encouragement).toEqual(b.sections.encouragement);
  });

  it("same result composed twice is identical (suggested: being_chased)", () => {
    const motifs = findMotifsByIds(["being_chased"]);
    const r1 = composeInterpretation(SCARY, motifs, []);
    const r2 = composeInterpretation(SCARY, motifs, []);

    expect(r1.sections.encouragement).toEqual(r2.sections.encouragement);
  });

  it("different supported motifs produce different encouragement — snake vs train", () => {
    const snakeResult = composeInterpretation(UNEASY, findMotifsByIds(["snake"]), []);
    const trainResult = composeInterpretation(UNEASY, findMotifsByIds(["train"]), []);

    // Motif-specific layers carry different text, so arrays must differ
    expect(snakeResult.sections.encouragement.join(" "))
      .not.toBe(trainResult.sections.encouragement.join(" "));
  });

  it("different supported motifs produce different encouragement — house vs exam", () => {
    const houseResult = composeInterpretation(UNEASY, findMotifsByIds(["house"]), []);
    const examResult = composeInterpretation(UNEASY, findMotifsByIds(["exam"]), []);

    expect(houseResult.sections.encouragement.join(" "))
      .not.toBe(examResult.sections.encouragement.join(" "));
  });

  it("motif without a specific block does not throw and returns non-empty encouragement", () => {
    // "fire" exists in registry but has no motifEncouragementBlock
    const motifs = findMotifsByIds(["fire"]);
    const result = composeInterpretation(SCARY, motifs, []);

    expect(result.sections.encouragement.length).toBeGreaterThan(0);
    expect(result.sections.encouragement.every((s) => s.length > 0)).toBe(true);
  });

  it("no motifs selected still returns valid encouragement (fallback path)", () => {
    const result = composeInterpretation(
      { text: "不思議な夢だった", impression: "confused", clarity: "vague", recurring: false },
      [],
      [],
    );

    expect(result.sections.encouragement.length).toBeGreaterThan(0);
    expect(result.sections.encouragement.every((s) => s.length > 0)).toBe(true);
  });

  it("encouragement with a supported motif contains 3 layers (opener + motif + axis)", () => {
    const motifs = findMotifsByIds(["ghost"]);
    const result = composeInterpretation(SCARY, motifs, []);

    // 3 unique non-empty sentences expected when motif block exists
    expect(result.sections.encouragement).toHaveLength(3);
    expect(result.sections.encouragement.every((s) => s.length > 0)).toBe(true);
  });

  it("encouragement without a supported motif stays at 2 layers (opener + axis)", () => {
    // "fire" has no motif block → 2 layers
    const motifs = findMotifsByIds(["fire"]);
    const result = composeInterpretation(UNEASY, motifs, []);

    expect(result.sections.encouragement).toHaveLength(2);
  });

  it("no duplicate sentences appear in encouragement", () => {
    for (const id of ["snake", "water", "exam", "family", "ghost", "fire"]) {
      const motifs = findMotifsByIds([id]);
      const result = composeInterpretation(UNEASY, motifs, []);
      const sentences = result.sections.encouragement;
      const unique = new Set(sentences);

      expect(unique.size, `duplicate found for motif ${id}`).toBe(sentences.length);
    }
  });

  it("encouragement contains no empty or undefined strings", () => {
    for (const id of ["snake", "water", "house", "being_chased", "exam", "ghost", "fire"]) {
      const motifs = findMotifsByIds([id]);
      const result = composeInterpretation(UNEASY, motifs, []);

      for (const s of result.sections.encouragement) {
        expect(typeof s).toBe("string");
        expect(s.length).toBeGreaterThan(0);
      }
    }
  });

  it("drink recommendation block still works alongside new encouragement", () => {
    // Confirm composeInterpretation does not interfere with the result shape
    // (drink recommendation is computed in ResultView from result.dominantAxes — just check axes are present)
    const motifs = findMotifsByIds(["snake"]);
    const result = composeInterpretation(UNEASY, motifs, []);

    expect(result.dominantAxes.length).toBeGreaterThan(0);
    expect(result.scores).toBeDefined();
  });
});
