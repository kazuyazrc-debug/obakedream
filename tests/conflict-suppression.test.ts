import { describe, expect, it } from "vitest";
import { extractMotifs } from "@/lib/dream-engine";

describe("conflict suppression", () => {
  it("preserves the current childhood_home over generic house behavior", () => {
    const motifIds = extractMotifs("実家の玄関に帰る夢").map((candidate) => candidate.motif.id);

    expect(motifIds).toContain("childhood_home");
    expect(motifIds).not.toContain("house");
  });

  it("does not suppress non-conflicting nearby motifs", () => {
    const motifIds = extractMotifs("海の上を飛ぶ夢で、赤ちゃんを抱いていた").map(
      (candidate) => candidate.motif.id,
    );

    expect(motifIds).toEqual(expect.arrayContaining(["sea", "flying", "baby"]));
  });
  it("keeps smartphone and notification as separate neighbor motifs", () => {
    const motifIds = extractMotifs("スマホに通知が来る夢").map((candidate) => candidate.motif.id);

    expect(motifIds).toEqual(expect.arrayContaining(["smartphone", "notification"]));
  });

  it("keeps ship and sea together when both are explicit", () => {
    const motifIds = extractMotifs("船で海を渡る夢").map((candidate) => candidate.motif.id);

    expect(motifIds).toEqual(expect.arrayContaining(["ship", "sea"]));
  });

  it("keeps clock and being_late together for deadline anxiety dreams", () => {
    const motifIds = extractMotifs("時計を見ると遅刻しそうだった").map((candidate) => candidate.motif.id);

    expect(motifIds).toEqual(expect.arrayContaining(["clock", "being_late"]));
  });
  it("keeps station and train together around transit dreams", () => {
    const motifIds = extractMotifs("駅にいる夢で電車に乗る").map((candidate) => candidate.motif.id);

    expect(motifIds).toEqual(expect.arrayContaining(["station", "train"]));
  });

  it("keeps injury and blood together without treating them as conflicts", () => {
    const motifIds = extractMotifs("怪我をして血を見る夢だった").map((candidate) => candidate.motif.id);

    expect(motifIds).toEqual(expect.arrayContaining(["injury", "blood"]));
  });

  it("keeps door, key, and opening together around boundary dreams", () => {
    const motifIds = extractMotifs("鍵でドアを開ける夢だった").map((candidate) => candidate.motif.id);

    expect(motifIds).toEqual(expect.arrayContaining(["door", "key", "opening"]));
  });

  it("keeps fish and sea together while specific sea suppresses generic water", () => {
    const motifIds = extractMotifs("海の水の中で魚が泳ぐ夢だった").map((candidate) => candidate.motif.id);

    expect(motifIds).toEqual(expect.arrayContaining(["sea", "fish"]));
    expect(motifIds).not.toContain("water");
  });

  it("keeps childhood home specific while allowing door context when explicit", () => {
    const motifIds = extractMotifs("実家の玄関のドアを開ける夢だった").map((candidate) => candidate.motif.id);

    expect(motifIds).toEqual(expect.arrayContaining(["childhood_home", "door", "opening"]));
  });

  it("keeps library and book without forcing generic school context", () => {
    const motifIds = extractMotifs("図書館で本を探す夢だった").map((candidate) => candidate.motif.id);

    expect(motifIds).toEqual(expect.arrayContaining(["library", "book"]));
    expect(motifIds).not.toContain("school");
  });

  it("keeps losing together with the concrete lost object", () => {
    const motifIds = extractMotifs("財布を失くして探しても見つからない夢だった").map(
      (candidate) => candidate.motif.id,
    );

    expect(motifIds).toEqual(expect.arrayContaining(["losing", "wallet", "searching"]));
  });

  it("keeps ticket, train, and losing visible around transit preparation dreams", () => {
    const motifIds = extractMotifs("切符を失くして改札の前で困る夢だった").map((candidate) => candidate.motif.id);

    expect(motifIds).toEqual(expect.arrayContaining(["losing", "ticket", "train"]));
  });
});
