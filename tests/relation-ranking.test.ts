import { describe, expect, it } from "vitest";
import { extractMotifs } from "@/lib/dream-engine";

describe("relation-assisted extraction ranking", () => {
  it("suppresses weak-only terms when no strong same-motif or neighbor hit exists", () => {
    const motifIds = extractMotifs("同僚に注意された夢だった").map((candidate) => candidate.motif.id);

    expect(motifIds).not.toContain("workplace");
  });

  it("keeps weak terms when the same motif also has a strong alias hit", () => {
    const motifIds = extractMotifs("職場で上司と話す夢").map((candidate) => candidate.motif.id);

    expect(motifIds).toContain("workplace");
  });

  it("keeps weak-only neighbor motifs as auxiliary candidates", () => {
    const candidates = extractMotifs("雨に濡れる夢だった");
    const motifIds = candidates.map((candidate) => candidate.motif.id);
    const rain = candidates.find((candidate) => candidate.motif.id === "rain");
    const water = candidates.find((candidate) => candidate.motif.id === "water");

    expect(motifIds).toEqual(expect.arrayContaining(["rain", "water"]));
    expect(rain?.score).toBeGreaterThan(water?.score ?? 0);
  });

  it("does not over-suppress near-neighbor communication motifs", () => {
    const motifIds = extractMotifs("スマホに通知が来る夢").map((candidate) => candidate.motif.id);

    expect(motifIds).toEqual(expect.arrayContaining(["smartphone", "notification"]));
  });

  it("keeps SNS distinct from smartphone when both are explicit", () => {
    const motifIds = extractMotifs("スマホでSNSを見る夢だった").map((candidate) => candidate.motif.id);

    expect(motifIds).toEqual(expect.arrayContaining(["smartphone", "sns"]));
  });

  it("keeps email distinct from letter for written contact dreams", () => {
    const motifIds = extractMotifs("メールを読むと古い手紙も出てくる夢だった").map((candidate) => candidate.motif.id);

    expect(motifIds).toEqual(expect.arrayContaining(["email", "letter"]));
  });

  it("keeps weak-only SNS terms suppressed", () => {
    const motifIds = extractMotifs("コメント欄が気になる夢だった").map((candidate) => candidate.motif.id);

    expect(motifIds).not.toContain("sns");
  });

  it("keeps password distinct from smartphone and key when explicit", () => {
    const motifIds = extractMotifs("スマホでパスワードを入力して鍵のような文字を探す夢だった").map(
      (candidate) => candidate.motif.id,
    );

    expect(motifIds).toEqual(expect.arrayContaining(["smartphone", "password", "key"]));
  });

  it("keeps chat distinct from SNS and email contact dreams", () => {
    const motifIds = extractMotifs("SNSを見ながらチャットの返事を待ちメールも読む夢だった").map(
      (candidate) => candidate.motif.id,
    );

    expect(motifIds).toEqual(expect.arrayContaining(["sns", "chat", "email"]));
  });

  it("does not promote flower from weak-only scent wording", () => {
    const motifIds = extractMotifs("香りだけが気になる夢だった").map((candidate) => candidate.motif.id);

    expect(motifIds).not.toContain("flower");
  });

  it("keeps chat as the primary communication motif for short exchanges", () => {
    const candidates = extractMotifs("チャットの返事を待つ夢だった");
    const chat = candidates.find((candidate) => candidate.motif.id === "chat");
    const waiting = candidates.find((candidate) => candidate.motif.id === "waiting");

    expect(candidates.map((candidate) => candidate.motif.id)).toEqual(expect.arrayContaining(["chat", "waiting"]));
    expect(chat?.score).toBeGreaterThan(waiting?.score ?? 0);
  });

  it("keeps notification primary when reaction waiting is explicit on SNS", () => {
    const candidates = extractMotifs("SNSで反応を見て通知を待つ夢だった");
    const notification = candidates.find((candidate) => candidate.motif.id === "notification");
    const sns = candidates.find((candidate) => candidate.motif.id === "sns");

    expect(candidates.map((candidate) => candidate.motif.id)).toEqual(
      expect.arrayContaining(["notification", "sns"]),
    );
    expect(notification?.score).toBeGreaterThan(sns?.score ?? 0);
  });

  it("keeps phone separate from written communication motifs", () => {
    const motifIds = extractMotifs("電話で声を聞く夢だった").map((candidate) => candidate.motif.id);

    expect(motifIds).toContain("phone");
    expect(motifIds).not.toContain("chat");
    expect(motifIds).not.toContain("email");
  });

  it("keeps charging primary over smartphone for energy replenishment dreams", () => {
    const candidates = extractMotifs("スマホを充電するため充電器を探す夢だった");
    const charging = candidates.find((candidate) => candidate.motif.id === "charging");
    const smartphone = candidates.find((candidate) => candidate.motif.id === "smartphone");

    expect(candidates.map((candidate) => candidate.motif.id)).toEqual(
      expect.arrayContaining(["charging", "smartphone"]),
    );
    expect(charging?.score).toBeGreaterThan(smartphone?.score ?? 0);
  });

  it("keeps map and crossroad visible around route choice dreams", () => {
    const motifIds = extractMotifs("地図を見ながら交差点で道を選ぶ夢だった").map((candidate) => candidate.motif.id);

    expect(motifIds).toEqual(expect.arrayContaining(["map", "crossroad", "choosing"]));
  });

  it("keeps television as passive incoming information without promoting video", () => {
    const motifIds = extractMotifs("テレビでニュースを見る夢だった").map((candidate) => candidate.motif.id);

    expect(motifIds).toEqual(expect.arrayContaining(["television", "news"]));
    expect(motifIds).not.toContain("video");
  });

  it("keeps mobile app as an operated entry point on smartphone dreams", () => {
    const motifIds = extractMotifs("スマホでアプリを開く夢だった").map((candidate) => candidate.motif.id);

    expect(motifIds).toEqual(expect.arrayContaining(["mobile_app", "smartphone"]));
    expect(motifIds).not.toContain("sns");
  });

  it("keeps video distinct from television when playback is explicit", () => {
    const motifIds = extractMotifs("スマホで動画を再生する夢だった").map((candidate) => candidate.motif.id);

    expect(motifIds).toEqual(expect.arrayContaining(["video", "smartphone"]));
    expect(motifIds).not.toContain("television");
  });
});
