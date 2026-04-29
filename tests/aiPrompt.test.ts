import { describe, expect, it } from "vitest";
import {
  AI_PROMPT_COPY_SUCCESS_MESSAGE,
  aiServiceLinks,
} from "@/components/AiPromptPanel";
import { buildAiDreamPrompt } from "@/lib/dream-engine/prompt/buildAiDreamPrompt";

describe("buildAiDreamPrompt", () => {
  it("builds a non-empty prompt with dream text, motifs, and axis scores", () => {
    const prompt = buildAiDreamPrompt({
      dreamText: "駅で電車に乗り遅れそうで焦っていた",
      impression: "uneasy",
      extractedMotifs: [
        { id: "train", label: "電車", score: 4.23 },
        { id: "being_late", label: "遅刻", score: 3.8 },
      ],
      topAxes: [
        { axis: "anxiety", label: "不安", score: 8 },
        { axis: "change", label: "変化", score: 6 },
      ],
    });

    expect(prompt.length).toBeGreaterThan(0);
    expect(prompt).toContain("駅で電車に乗り遅れそうで焦っていた");
    expect(prompt).toContain("train");
    expect(prompt).toContain("電車");
    expect(prompt).toContain("anxiety");
    expect(prompt).toContain("不安");
    expect(prompt).toContain("Output must be written in Japanese");
    expect(prompt).toContain("Do not write it as a medical diagnosis");
    expect(prompt).toContain("Do not write it as a psychological diagnosis");
    expect(prompt).not.toContain("undefined");
    expect(prompt).not.toContain("null");
  });

  it("uses Not provided for optional context without leaking undefined or null", () => {
    const prompt = buildAiDreamPrompt({
      dreamText: "なんとなく変な感じの夢だった",
    });

    expect(prompt).toContain("なんとなく変な感じの夢だった");
    expect(prompt.match(/Not provided/g)?.length).toBeGreaterThanOrEqual(3);
    expect(prompt).not.toContain("undefined");
    expect(prompt).not.toContain("null");
  });

  it("builds a result prompt with existing app reading context", () => {
    const prompt = buildAiDreamPrompt({
      source: "result",
      dreamText: "元恋人と再会する夢を見た",
      impression: "nostalgic",
      selectedMotifs: [
        { id: "ex_partner", label: "元恋人" },
        { id: "station", label: "駅" },
      ],
      topAxes: [{ axis: "relationships", label: "対人", score: 7 }],
      summary: ["過去との距離を静かに見直している夢として読めます。"],
      symbolMeaning: ["元恋人は、終わった関係そのものより、心に残った感情を映すことがあります。"],
      psychology: ["懐かしさと整理したい気持ちが同じ場所にあるのかもしれません。"],
      fortune: ["昔の流れを閉じることで、新しい運気が入りやすくなります。"],
      cautionAndAction: ["過去の意味を急いで決めなくても大丈夫です。"],
      encouragement: ["今のあなたは、自分の心を丁寧に扱えるところにいます。"],
      drinkRecommendation: {
        morning: "白湯",
        afternoon: "カモミールティー",
      },
    });

    expect(prompt).toContain("This prompt includes an existing rule-based dream reading from the app.");
    expect(prompt).toContain("Do not contradict it unnecessarily.");
    expect(prompt).toContain("Existing rule-based dream reading from the app");
    expect(prompt).toContain("過去との距離を静かに見直している夢として読めます。");
    expect(prompt).toContain("過去の意味を急いで決めなくても大丈夫です。");
    expect(prompt).toContain("今のあなたは、自分の心を丁寧に扱えるところにいます。");
    expect(prompt).toContain("カモミールティー");
    expect(prompt).toContain("Output must be written in Japanese");
    expect(prompt).not.toContain("undefined");
    expect(prompt).not.toContain("null");
  });

  it("defines three external AI links with gentle descriptions and copy guidance", () => {
    expect(aiServiceLinks).toHaveLength(3);
    expect(aiServiceLinks.map((link) => link.url)).toEqual([
      "https://chatgpt.com/",
      "https://gemini.google.com/",
      "https://claude.ai/",
    ]);
    expect(aiServiceLinks.every((link) => link.description.length > 0)).toBe(true);
    expect(AI_PROMPT_COPY_SUCCESS_MESSAGE).toContain("次は開いたAI画面に貼り付けてください");
  });
});
