import { describe, expect, it } from "vitest";
import { composeInterpretation, findMotifsByIds } from "@/lib/dream-engine";
import { buildBalancedSummaryLines } from "@/lib/dream-engine/compose/buildSummaryLines";
import type { DreamInput } from "@/types/dream";

const baseInput: DreamInput = {
  text: "",
  impression: "happy",
  clarity: "clear",
  recurring: false,
};

describe("buildBalancedSummaryLines", () => {
  it("single motif: unchanged cadence — summary[0], symbolMeaning[0], psychology[0] all present", () => {
    const motifs = findMotifsByIds(["sea"]);
    const result = composeInterpretation({ ...baseInput, text: "海の夢を見た" }, motifs, []);
    const lines = buildBalancedSummaryLines(result);

    expect(lines).toContain(result.sections.summary[0]);
    expect(lines).toContain(result.sections.symbolMeaning[0]);
    expect(lines).toContain(result.sections.psychology[0]);
    expect(lines.length).toBeGreaterThanOrEqual(1);
    expect(lines.length).toBeLessThanOrEqual(5);
  });

  // Confirmation case: 海 / 飛ぶ / 馬 (3 motifs)
  it("3 motifs 海/飛ぶ/馬: all three summary openers are surfaced", () => {
    const motifs = findMotifsByIds(["sea", "flying", "horse"]);
    const result = composeInterpretation({ ...baseInput, text: "海で馬に乗りながら空を飛ぶ夢だった" }, motifs, []);
    const lines = buildBalancedSummaryLines(result);

    expect(lines).toContain(result.sections.summary[0]);
    expect(lines).toContain(result.sections.summary[1]);
    expect(lines).toContain(result.sections.summary[2]);
    expect(lines.length).toBeGreaterThanOrEqual(3);
    expect(lines.length).toBeLessThanOrEqual(5);
  });

  it("3 motifs 海/飛ぶ/馬: psychology[0] and psychology[1] are both surfaced", () => {
    const motifs = findMotifsByIds(["sea", "flying", "horse"]);
    const result = composeInterpretation({ ...baseInput, text: "海で馬に乗りながら空を飛ぶ夢だった" }, motifs, []);
    const lines = buildBalancedSummaryLines(result);

    // psy[0] = pair block or m0.psy; psy[1] = next in interleaved order (m1.psy when no pair)
    expect(lines).toContain(result.sections.psychology[0]);
    expect(lines).toContain(result.sections.psychology[1]);
  });

  // Confirmation case: 元恋人 / 駅 / 電車 (3 motifs)
  it("3 motifs 元恋人/駅/電車: all three summary openers are surfaced", () => {
    const motifs = findMotifsByIds(["ex_partner", "station", "train"]);
    const result = composeInterpretation({ ...baseInput, impression: "nostalgic", text: "元恋人と駅で電車を待つ夢だった" }, motifs, []);
    const lines = buildBalancedSummaryLines(result);

    expect(lines).toContain(result.sections.summary[0]);
    expect(lines).toContain(result.sections.summary[1]);
    expect(lines).toContain(result.sections.summary[2]);
    expect(lines.length).toBeGreaterThanOrEqual(3);
    expect(lines.length).toBeLessThanOrEqual(5);
  });

  // Confirmation case: 学校 / 廊下 (2 motifs)
  it("2 motifs 学校/廊下: both symbolMeaning slots are surfaced (sym[0]=school, sym[1]=hallway)", () => {
    const motifs = findMotifsByIds(["school", "hallway"]);
    const result = composeInterpretation({ ...baseInput, impression: "confused", text: "学校の廊下を歩く夢だった" }, motifs, []);
    const lines = buildBalancedSummaryLines(result);

    expect(lines).toContain(result.sections.summary[0]);
    expect(lines).toContain(result.sections.summary[1]);
    expect(lines).toContain(result.sections.symbolMeaning[0]);
    expect(lines).toContain(result.sections.symbolMeaning[1]);
    expect(lines.length).toBeGreaterThanOrEqual(2);
    expect(lines.length).toBeLessThanOrEqual(5);
  });

  // Confirmation case: 家族 / 家 (2 motifs)
  it("2 motifs 家族/家: both symbolMeaning slots are surfaced (sym[0]=family, sym[1]=house)", () => {
    const motifs = findMotifsByIds(["family", "house"]);
    const result = composeInterpretation({ ...baseInput, impression: "nostalgic", text: "家族みんなで家にいた夢だった" }, motifs, []);
    const lines = buildBalancedSummaryLines(result);

    expect(lines).toContain(result.sections.summary[0]);
    expect(lines).toContain(result.sections.summary[1]);
    expect(lines).toContain(result.sections.symbolMeaning[0]);
    expect(lines).toContain(result.sections.symbolMeaning[1]);
    expect(lines.length).toBeGreaterThanOrEqual(2);
    expect(lines.length).toBeLessThanOrEqual(5);
  });

  // Confirmation case: 追われる / 知らない人 (2 motifs)
  it("2 motifs 追われる/知らない人: both symbolMeaning slots are surfaced", () => {
    const motifs = findMotifsByIds(["being_chased", "stranger"]);
    const result = composeInterpretation({ ...baseInput, impression: "uneasy", text: "知らない人に追いかけられる夢だった" }, motifs, []);
    const lines = buildBalancedSummaryLines(result);

    expect(lines).toContain(result.sections.summary[0]);
    expect(lines).toContain(result.sections.summary[1]);
    expect(lines).toContain(result.sections.symbolMeaning[0]);
    expect(lines).toContain(result.sections.symbolMeaning[1]);
    expect(lines.length).toBeGreaterThanOrEqual(2);
    expect(lines.length).toBeLessThanOrEqual(5);
  });

  it("2 motifs: psychology[0] (pair block when defined) is included", () => {
    // being_chased+school has a known pair block in psychology
    const motifs = findMotifsByIds(["being_chased", "school"]);
    const result = composeInterpretation({ ...baseInput, impression: "uneasy", text: "学校で誰かに追いかけられた夢だった" }, motifs, []);
    const lines = buildBalancedSummaryLines(result);

    expect(lines).toContain(result.sections.psychology[0]);
  });

  it("output has no duplicate lines", () => {
    const motifs = findMotifsByIds(["family", "house"]);
    const result = composeInterpretation({ ...baseInput, impression: "nostalgic", text: "家族と家にいた夢" }, motifs, []);
    const lines = buildBalancedSummaryLines(result);

    expect(lines).toEqual([...new Set(lines)]);
  });
});
