import type { ScoreAxis } from "@/types/dream";

export type DrinkTime = "morning" | "afternoon";
export type ReadingAxis = ScoreAxis;

export type Drink = {
  id: string;
  name: string;
  axis: ReadingAxis;
  time: DrinkTime;
  caffeine: "yes" | "no";
  tags?: string[];
};

export type DrinkRecommendation = {
  morning: Drink;
  afternoon: Drink;
};

// 256 candidates: base 192 + 64 expansion candidates.
// Afternoon: caffeine "no" only, banned terms excluded
const baseDrinkCandidates: Drink[] = [
  // ===== ANXIETY (calm, gentle, soft aroma, relaxing) =====
  // Morning (12)
  { id: "anxiety-morning-1",  name: "カモミールティー",         axis: "anxiety", time: "morning",   caffeine: "no",  tags: ["calm", "floral"] },
  { id: "anxiety-morning-2",  name: "ラベンダーハニーティー",   axis: "anxiety", time: "morning",   caffeine: "no",  tags: ["floral", "relaxing"] },
  { id: "anxiety-morning-3",  name: "ほうじ茶",                 axis: "anxiety", time: "morning",   caffeine: "yes", tags: ["warm", "gentle"] },
  { id: "anxiety-morning-4",  name: "白湯",                     axis: "anxiety", time: "morning",   caffeine: "no",  tags: ["simple", "grounding"] },
  { id: "anxiety-morning-5",  name: "アールグレイ",             axis: "anxiety", time: "morning",   caffeine: "yes", tags: ["floral", "gentle"] },
  { id: "anxiety-morning-6",  name: "カモミールラテ",           axis: "anxiety", time: "morning",   caffeine: "no",  tags: ["soft", "warm"] },
  { id: "anxiety-morning-7",  name: "そば茶",                   axis: "anxiety", time: "morning",   caffeine: "no",  tags: ["earthy", "soothing"] },
  { id: "anxiety-morning-8",  name: "ハニーミルク",             axis: "anxiety", time: "morning",   caffeine: "no",  tags: ["sweet", "soft"] },
  { id: "anxiety-morning-9",  name: "バレリアンルイボス",       axis: "anxiety", time: "morning",   caffeine: "no",  tags: ["relaxing", "herbal"] },
  { id: "anxiety-morning-10", name: "レモンバームティー",       axis: "anxiety", time: "morning",   caffeine: "no",  tags: ["calm", "citrus"] },
  { id: "anxiety-morning-11", name: "ロズヒップティー",         axis: "anxiety", time: "morning",   caffeine: "no",  tags: ["soft", "fruity"] },
  { id: "anxiety-morning-12", name: "緑茶",                     axis: "anxiety", time: "morning",   caffeine: "yes", tags: ["calm", "clear"] },
  // Afternoon (12)
  { id: "anxiety-afternoon-1",  name: "カモミールティー",       axis: "anxiety", time: "afternoon", caffeine: "no",  tags: ["calm", "floral"] },
  { id: "anxiety-afternoon-2",  name: "ラベンダーティー",       axis: "anxiety", time: "afternoon", caffeine: "no",  tags: ["floral", "relaxing"] },
  { id: "anxiety-afternoon-3",  name: "ルイボスミルクティー",   axis: "anxiety", time: "afternoon", caffeine: "no",  tags: ["warm", "soft"] },
  { id: "anxiety-afternoon-4",  name: "カモミールミルク",       axis: "anxiety", time: "afternoon", caffeine: "no",  tags: ["gentle", "soothing"] },
  { id: "anxiety-afternoon-5",  name: "白湯",                   axis: "anxiety", time: "afternoon", caffeine: "no",  tags: ["simple", "grounding"] },
  { id: "anxiety-afternoon-6",  name: "そば茶",                 axis: "anxiety", time: "afternoon", caffeine: "no",  tags: ["earthy", "soothing"] },
  { id: "anxiety-afternoon-7",  name: "麦茶",                   axis: "anxiety", time: "afternoon", caffeine: "no",  tags: ["gentle", "familiar"] },
  { id: "anxiety-afternoon-8",  name: "レモンバームティー",     axis: "anxiety", time: "afternoon", caffeine: "no",  tags: ["calm", "citrus"] },
  { id: "anxiety-afternoon-9",  name: "ハニーミルク",           axis: "anxiety", time: "afternoon", caffeine: "no",  tags: ["sweet", "soft"] },
  { id: "anxiety-afternoon-10", name: "ルイボスティー",         axis: "anxiety", time: "afternoon", caffeine: "no",  tags: ["relaxing", "warm"] },
  { id: "anxiety-afternoon-11", name: "ロズヒップティー",       axis: "anxiety", time: "afternoon", caffeine: "no",  tags: ["soft", "fruity"] },
  { id: "anxiety-afternoon-12", name: "ぬるめの豆乳",           axis: "anxiety", time: "afternoon", caffeine: "no",  tags: ["gentle", "nourishing"] },

  // ===== CHANGE (citrus, sparkling, spice, bright, refreshing) =====
  // Morning (12)
  { id: "change-morning-1",  name: "レモングラスティー",       axis: "change", time: "morning",   caffeine: "no",  tags: ["citrus", "bright"] },
  { id: "change-morning-2",  name: "ジンジャーティー",         axis: "change", time: "morning",   caffeine: "no",  tags: ["spice", "warming"] },
  { id: "change-morning-3",  name: "スパークリングレモン水",   axis: "change", time: "morning",   caffeine: "no",  tags: ["sparkling", "citrus"] },
  { id: "change-morning-4",  name: "ゆず茶",                   axis: "change", time: "morning",   caffeine: "no",  tags: ["citrus", "refreshing"] },
  { id: "change-morning-5",  name: "シトラスルイボス",         axis: "change", time: "morning",   caffeine: "no",  tags: ["citrus", "bright"] },
  { id: "change-morning-6",  name: "ペパーミントティー",       axis: "change", time: "morning",   caffeine: "no",  tags: ["mint", "refreshing"] },
  { id: "change-morning-7",  name: "アールグレイ",             axis: "change", time: "morning",   caffeine: "yes", tags: ["bergamot", "bright"] },
  { id: "change-morning-8",  name: "ジンジャーハーブティー",   axis: "change", time: "morning",   caffeine: "no",  tags: ["spice", "herbal"] },
  { id: "change-morning-9",  name: "レモン炭酸水",             axis: "change", time: "morning",   caffeine: "no",  tags: ["sparkling", "citrus"] },
  { id: "change-morning-10", name: "シトラスハーブティー",     axis: "change", time: "morning",   caffeine: "no",  tags: ["citrus", "fresh"] },
  { id: "change-morning-11", name: "レモンティー",             axis: "change", time: "morning",   caffeine: "yes", tags: ["citrus", "bright"] },
  { id: "change-morning-12", name: "ライム炭酸水",             axis: "change", time: "morning",   caffeine: "no",  tags: ["sparkling", "citrus"] },
  // Afternoon (12)
  { id: "change-afternoon-1",  name: "スパークリングレモン水", axis: "change", time: "afternoon", caffeine: "no",  tags: ["sparkling", "citrus"] },
  { id: "change-afternoon-2",  name: "レモングラスティー",     axis: "change", time: "afternoon", caffeine: "no",  tags: ["citrus", "bright"] },
  { id: "change-afternoon-3",  name: "シトラスルイボス",       axis: "change", time: "afternoon", caffeine: "no",  tags: ["citrus", "bright"] },
  { id: "change-afternoon-4",  name: "ジンジャーティー",       axis: "change", time: "afternoon", caffeine: "no",  tags: ["spice", "warming"] },
  { id: "change-afternoon-5",  name: "ゆず茶",                 axis: "change", time: "afternoon", caffeine: "no",  tags: ["citrus", "refreshing"] },
  { id: "change-afternoon-6",  name: "ペパーミントティー",     axis: "change", time: "afternoon", caffeine: "no",  tags: ["mint", "refreshing"] },
  { id: "change-afternoon-7",  name: "ライム炭酸水",           axis: "change", time: "afternoon", caffeine: "no",  tags: ["sparkling", "citrus"] },
  { id: "change-afternoon-8",  name: "シトラスハーブティー",   axis: "change", time: "afternoon", caffeine: "no",  tags: ["citrus", "fresh"] },
  { id: "change-afternoon-9",  name: "レモンハーブウォーター", axis: "change", time: "afternoon", caffeine: "no",  tags: ["citrus", "herbal"] },
  { id: "change-afternoon-10", name: "ジンジャーソーダ",       axis: "change", time: "afternoon", caffeine: "no",  tags: ["spice", "sparkling"] },
  { id: "change-afternoon-11", name: "桃炭酸水",               axis: "change", time: "afternoon", caffeine: "no",  tags: ["fruity", "sparkling"] },
  { id: "change-afternoon-12", name: "シトラス豆乳",           axis: "change", time: "afternoon", caffeine: "no",  tags: ["citrus", "nourishing"] },

  // ===== RELATIONSHIPS (milk-based, floral, round sweetness, softening distance) =====
  // Morning (12)
  { id: "relationships-morning-1",  name: "ハニーミルクティー",       axis: "relationships", time: "morning",   caffeine: "yes", tags: ["sweet", "warm"] },
  { id: "relationships-morning-2",  name: "ローズティー",             axis: "relationships", time: "morning",   caffeine: "no",  tags: ["floral", "gentle"] },
  { id: "relationships-morning-3",  name: "バニラミルク",             axis: "relationships", time: "morning",   caffeine: "no",  tags: ["sweet", "soft"] },
  { id: "relationships-morning-4",  name: "チャイ",                   axis: "relationships", time: "morning",   caffeine: "yes", tags: ["spice", "warming"] },
  { id: "relationships-morning-5",  name: "ローズヒップミルクティー", axis: "relationships", time: "morning",   caffeine: "no",  tags: ["floral", "soft"] },
  { id: "relationships-morning-6",  name: "豆乳ラテ",                 axis: "relationships", time: "morning",   caffeine: "no",  tags: ["soft", "nourishing"] },
  { id: "relationships-morning-7",  name: "ラベンダーラテ",           axis: "relationships", time: "morning",   caffeine: "no",  tags: ["floral", "calming"] },
  { id: "relationships-morning-8",  name: "甘酒",                     axis: "relationships", time: "morning",   caffeine: "no",  tags: ["sweet", "warming"] },
  { id: "relationships-morning-9",  name: "カモミールハニーティー",   axis: "relationships", time: "morning",   caffeine: "no",  tags: ["floral", "soft"] },
  { id: "relationships-morning-10", name: "ミルクティー",             axis: "relationships", time: "morning",   caffeine: "yes", tags: ["sweet", "warm"] },
  { id: "relationships-morning-11", name: "フルーツハーブティー",     axis: "relationships", time: "morning",   caffeine: "no",  tags: ["fruity", "soft"] },
  { id: "relationships-morning-12", name: "フローラルルイボス",       axis: "relationships", time: "morning",   caffeine: "no",  tags: ["floral", "gentle"] },
  // Afternoon (12)
  { id: "relationships-afternoon-1",  name: "ハニーミルク",           axis: "relationships", time: "afternoon", caffeine: "no",  tags: ["sweet", "soft"] },
  { id: "relationships-afternoon-2",  name: "ローズティー",           axis: "relationships", time: "afternoon", caffeine: "no",  tags: ["floral", "gentle"] },
  { id: "relationships-afternoon-3",  name: "豆乳",                   axis: "relationships", time: "afternoon", caffeine: "no",  tags: ["soft", "nourishing"] },
  { id: "relationships-afternoon-4",  name: "バニラ豆乳",             axis: "relationships", time: "afternoon", caffeine: "no",  tags: ["sweet", "soft"] },
  { id: "relationships-afternoon-5",  name: "ルイボスミルクティー",   axis: "relationships", time: "afternoon", caffeine: "no",  tags: ["warm", "soft"] },
  { id: "relationships-afternoon-6",  name: "ローズヒップティー",     axis: "relationships", time: "afternoon", caffeine: "no",  tags: ["floral", "fruity"] },
  { id: "relationships-afternoon-7",  name: "フローラルハーブティー", axis: "relationships", time: "afternoon", caffeine: "no",  tags: ["floral", "soft"] },
  { id: "relationships-afternoon-8",  name: "甘酒",                   axis: "relationships", time: "afternoon", caffeine: "no",  tags: ["sweet", "warming"] },
  { id: "relationships-afternoon-9",  name: "カモミールミルク",       axis: "relationships", time: "afternoon", caffeine: "no",  tags: ["gentle", "soothing"] },
  { id: "relationships-afternoon-10", name: "いちご豆乳",             axis: "relationships", time: "afternoon", caffeine: "no",  tags: ["fruity", "soft"] },
  { id: "relationships-afternoon-11", name: "あたたかいミルク",       axis: "relationships", time: "afternoon", caffeine: "no",  tags: ["warm", "gentle"] },
  { id: "relationships-afternoon-12", name: "フルーツハーブティー",   axis: "relationships", time: "afternoon", caffeine: "no",  tags: ["fruity", "soft"] },

  // ===== SELFDEFENSE (mint, black soybean tea, burdock tea, sparkling water, clear edge) =====
  // Morning (12)
  { id: "selfDefense-morning-1",  name: "ペパーミントティー",     axis: "selfDefense", time: "morning",   caffeine: "no",  tags: ["mint", "clear"] },
  { id: "selfDefense-morning-2",  name: "黒豆茶",                 axis: "selfDefense", time: "morning",   caffeine: "no",  tags: ["earthy", "grounding"] },
  { id: "selfDefense-morning-3",  name: "ごぼう茶",               axis: "selfDefense", time: "morning",   caffeine: "no",  tags: ["earthy", "strong"] },
  { id: "selfDefense-morning-4",  name: "スペアミントティー",     axis: "selfDefense", time: "morning",   caffeine: "no",  tags: ["mint", "refreshing"] },
  { id: "selfDefense-morning-5",  name: "炭酸水",                 axis: "selfDefense", time: "morning",   caffeine: "no",  tags: ["sparkling", "clear"] },
  { id: "selfDefense-morning-6",  name: "緑茶",                   axis: "selfDefense", time: "morning",   caffeine: "yes", tags: ["clear", "focused"] },
  { id: "selfDefense-morning-7",  name: "コーヒー",               axis: "selfDefense", time: "morning",   caffeine: "yes", tags: ["bold", "grounding"] },
  { id: "selfDefense-morning-8",  name: "そば茶",                 axis: "selfDefense", time: "morning",   caffeine: "no",  tags: ["earthy", "grounding"] },
  { id: "selfDefense-morning-9",  name: "レモングラスティー",     axis: "selfDefense", time: "morning",   caffeine: "no",  tags: ["citrus", "clear"] },
  { id: "selfDefense-morning-10", name: "黒豆茶ブレンド",         axis: "selfDefense", time: "morning",   caffeine: "no",  tags: ["earthy", "grounding"] },
  { id: "selfDefense-morning-11", name: "ミントウォーター",       axis: "selfDefense", time: "morning",   caffeine: "no",  tags: ["mint", "clear"] },
  { id: "selfDefense-morning-12", name: "ごぼうそば茶ブレンド",   axis: "selfDefense", time: "morning",   caffeine: "no",  tags: ["earthy", "grounding"] },
  // Afternoon (12)
  { id: "selfDefense-afternoon-1",  name: "ペパーミントティー",   axis: "selfDefense", time: "afternoon", caffeine: "no",  tags: ["mint", "clear"] },
  { id: "selfDefense-afternoon-2",  name: "黒豆茶",               axis: "selfDefense", time: "afternoon", caffeine: "no",  tags: ["earthy", "grounding"] },
  { id: "selfDefense-afternoon-3",  name: "ごぼう茶",             axis: "selfDefense", time: "afternoon", caffeine: "no",  tags: ["earthy", "strong"] },
  { id: "selfDefense-afternoon-4",  name: "スペアミントティー",   axis: "selfDefense", time: "afternoon", caffeine: "no",  tags: ["mint", "refreshing"] },
  { id: "selfDefense-afternoon-5",  name: "炭酸水",               axis: "selfDefense", time: "afternoon", caffeine: "no",  tags: ["sparkling", "clear"] },
  { id: "selfDefense-afternoon-6",  name: "そば茶",               axis: "selfDefense", time: "afternoon", caffeine: "no",  tags: ["earthy", "grounding"] },
  { id: "selfDefense-afternoon-7",  name: "ミントハーブティー",   axis: "selfDefense", time: "afternoon", caffeine: "no",  tags: ["mint", "herbal"] },
  { id: "selfDefense-afternoon-8",  name: "レモングラスミント",   axis: "selfDefense", time: "afternoon", caffeine: "no",  tags: ["citrus", "mint"] },
  { id: "selfDefense-afternoon-9",  name: "黒豆茶ブレンド",       axis: "selfDefense", time: "afternoon", caffeine: "no",  tags: ["earthy", "grounding"] },
  { id: "selfDefense-afternoon-10", name: "ミント炭酸水",         axis: "selfDefense", time: "afternoon", caffeine: "no",  tags: ["mint", "sparkling"] },
  { id: "selfDefense-afternoon-11", name: "とうもろこし茶",       axis: "selfDefense", time: "afternoon", caffeine: "no",  tags: ["earthy", "clear"] },
  { id: "selfDefense-afternoon-12", name: "きゅうり炭酸水",       axis: "selfDefense", time: "afternoon", caffeine: "no",  tags: ["cool", "sparkling"] },

  // ===== LOSS (nostalgic, warm, earthy, grounding) =====
  // Morning (12)
  { id: "loss-morning-1",  name: "ほうじ茶",         axis: "loss", time: "morning",   caffeine: "yes", tags: ["warm", "nostalgic"] },
  { id: "loss-morning-2",  name: "麦茶",             axis: "loss", time: "morning",   caffeine: "no",  tags: ["nostalgic", "earthy"] },
  { id: "loss-morning-3",  name: "そば茶",           axis: "loss", time: "morning",   caffeine: "no",  tags: ["earthy", "grounding"] },
  { id: "loss-morning-4",  name: "黒豆茶",           axis: "loss", time: "morning",   caffeine: "no",  tags: ["earthy", "nostalgic"] },
  { id: "loss-morning-5",  name: "白湯",             axis: "loss", time: "morning",   caffeine: "no",  tags: ["simple", "warm"] },
  { id: "loss-morning-6",  name: "コーヒー",         axis: "loss", time: "morning",   caffeine: "yes", tags: ["warm", "grounding"] },
  { id: "loss-morning-7",  name: "ごぼう茶",         axis: "loss", time: "morning",   caffeine: "no",  tags: ["earthy", "grounding"] },
  { id: "loss-morning-8",  name: "とうもろこし茶",   axis: "loss", time: "morning",   caffeine: "no",  tags: ["earthy", "warm"] },
  { id: "loss-morning-9",  name: "玄米茶",           axis: "loss", time: "morning",   caffeine: "yes", tags: ["earthy", "warm"] },
  { id: "loss-morning-10", name: "炒り麦茶",         axis: "loss", time: "morning",   caffeine: "no",  tags: ["warm", "nostalgic"] },
  { id: "loss-morning-11", name: "ルイボスティー",   axis: "loss", time: "morning",   caffeine: "no",  tags: ["warm", "grounding"] },
  { id: "loss-morning-12", name: "番茶",             axis: "loss", time: "morning",   caffeine: "yes", tags: ["simple", "nostalgic"] },
  // Afternoon (12)
  { id: "loss-afternoon-1",  name: "麦茶",                   axis: "loss", time: "afternoon", caffeine: "no",  tags: ["nostalgic", "earthy"] },
  { id: "loss-afternoon-2",  name: "そば茶",                 axis: "loss", time: "afternoon", caffeine: "no",  tags: ["earthy", "grounding"] },
  { id: "loss-afternoon-3",  name: "黒豆茶",                 axis: "loss", time: "afternoon", caffeine: "no",  tags: ["earthy", "nostalgic"] },
  { id: "loss-afternoon-4",  name: "白湯",                   axis: "loss", time: "afternoon", caffeine: "no",  tags: ["simple", "warm"] },
  { id: "loss-afternoon-5",  name: "ごぼう茶",               axis: "loss", time: "afternoon", caffeine: "no",  tags: ["earthy", "grounding"] },
  { id: "loss-afternoon-6",  name: "とうもろこし茶",         axis: "loss", time: "afternoon", caffeine: "no",  tags: ["earthy", "warm"] },
  { id: "loss-afternoon-7",  name: "炒り麦茶",               axis: "loss", time: "afternoon", caffeine: "no",  tags: ["warm", "nostalgic"] },
  { id: "loss-afternoon-8",  name: "ルイボスティー",         axis: "loss", time: "afternoon", caffeine: "no",  tags: ["warm", "grounding"] },
  { id: "loss-afternoon-9",  name: "ぬるめの豆乳",           axis: "loss", time: "afternoon", caffeine: "no",  tags: ["warm", "soft"] },
  { id: "loss-afternoon-10", name: "マロウブルーハーブティー", axis: "loss", time: "afternoon", caffeine: "no",  tags: ["floral", "grounding"] },
  { id: "loss-afternoon-11", name: "ゆず白湯",               axis: "loss", time: "afternoon", caffeine: "no",  tags: ["warm", "citrus"] },
  { id: "loss-afternoon-12", name: "甘酒",                   axis: "loss", time: "afternoon", caffeine: "no",  tags: ["sweet", "nourishing"] },

  // ===== RECOVERY (rooibos, amazake, soy milk, kuzuyu, ginger, rebuilding) =====
  // Morning (12)
  { id: "recovery-morning-1",  name: "ルイボスティー",       axis: "recovery", time: "morning",   caffeine: "no",  tags: ["rebuilding", "warm"] },
  { id: "recovery-morning-2",  name: "甘酒",                 axis: "recovery", time: "morning",   caffeine: "no",  tags: ["nourishing", "rebuilding"] },
  { id: "recovery-morning-3",  name: "豆乳",                 axis: "recovery", time: "morning",   caffeine: "no",  tags: ["nourishing", "soft"] },
  { id: "recovery-morning-4",  name: "くず湯",               axis: "recovery", time: "morning",   caffeine: "no",  tags: ["warm", "grounding"] },
  { id: "recovery-morning-5",  name: "ジンジャーティー",     axis: "recovery", time: "morning",   caffeine: "no",  tags: ["ginger", "warming"] },
  { id: "recovery-morning-6",  name: "ルイボスラテ",         axis: "recovery", time: "morning",   caffeine: "no",  tags: ["warm", "soft"] },
  { id: "recovery-morning-7",  name: "ショウガ豆乳",         axis: "recovery", time: "morning",   caffeine: "no",  tags: ["ginger", "nourishing"] },
  { id: "recovery-morning-8",  name: "ターメリックラテ",     axis: "recovery", time: "morning",   caffeine: "no",  tags: ["spice", "rebuilding"] },
  { id: "recovery-morning-9",  name: "豆乳甘酒",             axis: "recovery", time: "morning",   caffeine: "no",  tags: ["nourishing", "rebuilding"] },
  { id: "recovery-morning-10", name: "ジンジャーハニーティー", axis: "recovery", time: "morning",   caffeine: "no",  tags: ["ginger", "sweet"] },
  { id: "recovery-morning-11", name: "ルイボスジンジャー",   axis: "recovery", time: "morning",   caffeine: "no",  tags: ["warm", "ginger"] },
  { id: "recovery-morning-12", name: "発酵レモン水",         axis: "recovery", time: "morning",   caffeine: "no",  tags: ["fermented", "citrus"] },
  // Afternoon (12)
  { id: "recovery-afternoon-1",  name: "ルイボスティー",       axis: "recovery", time: "afternoon", caffeine: "no",  tags: ["rebuilding", "warm"] },
  { id: "recovery-afternoon-2",  name: "甘酒",                 axis: "recovery", time: "afternoon", caffeine: "no",  tags: ["nourishing", "rebuilding"] },
  { id: "recovery-afternoon-3",  name: "豆乳",                 axis: "recovery", time: "afternoon", caffeine: "no",  tags: ["nourishing", "soft"] },
  { id: "recovery-afternoon-4",  name: "くず湯",               axis: "recovery", time: "afternoon", caffeine: "no",  tags: ["warm", "grounding"] },
  { id: "recovery-afternoon-5",  name: "ジンジャーティー",     axis: "recovery", time: "afternoon", caffeine: "no",  tags: ["ginger", "warming"] },
  { id: "recovery-afternoon-6",  name: "ルイボスジンジャー",   axis: "recovery", time: "afternoon", caffeine: "no",  tags: ["warm", "ginger"] },
  { id: "recovery-afternoon-7",  name: "ショウガ豆乳",         axis: "recovery", time: "afternoon", caffeine: "no",  tags: ["ginger", "nourishing"] },
  { id: "recovery-afternoon-8",  name: "ターメリックラテ",     axis: "recovery", time: "afternoon", caffeine: "no",  tags: ["spice", "rebuilding"] },
  { id: "recovery-afternoon-9",  name: "豆乳甘酒",             axis: "recovery", time: "afternoon", caffeine: "no",  tags: ["nourishing", "rebuilding"] },
  { id: "recovery-afternoon-10", name: "ルイボスミルクティー", axis: "recovery", time: "afternoon", caffeine: "no",  tags: ["warm", "soft"] },
  { id: "recovery-afternoon-11", name: "ジンジャーハニー白湯", axis: "recovery", time: "afternoon", caffeine: "no",  tags: ["ginger", "warm"] },
  { id: "recovery-afternoon-12", name: "米麹甘酒",             axis: "recovery", time: "afternoon", caffeine: "no",  tags: ["fermented", "nourishing"] },

  // ===== DESIRE (sweet, fruity, bright, soft indulgence) =====
  // Morning (12)
  { id: "desire-morning-1",  name: "フルーツティー",           axis: "desire", time: "morning",   caffeine: "yes", tags: ["fruity", "bright"] },
  { id: "desire-morning-2",  name: "ストロベリーティー",       axis: "desire", time: "morning",   caffeine: "yes", tags: ["fruity", "sweet"] },
  { id: "desire-morning-3",  name: "ピーチティー",             axis: "desire", time: "morning",   caffeine: "yes", tags: ["fruity", "soft"] },
  { id: "desire-morning-4",  name: "ラズベリーハーブティー",   axis: "desire", time: "morning",   caffeine: "no",  tags: ["fruity", "bright"] },
  { id: "desire-morning-5",  name: "いちご豆乳",               axis: "desire", time: "morning",   caffeine: "no",  tags: ["fruity", "sweet"] },
  { id: "desire-morning-6",  name: "マンゴーラッシー",         axis: "desire", time: "morning",   caffeine: "no",  tags: ["fruity", "rich"] },
  { id: "desire-morning-7",  name: "フルーツスムージー",       axis: "desire", time: "morning",   caffeine: "no",  tags: ["fruity", "bright"] },
  { id: "desire-morning-8",  name: "ローズヒップティー",       axis: "desire", time: "morning",   caffeine: "no",  tags: ["fruity", "soft"] },
  { id: "desire-morning-9",  name: "ハニーレモンティー",       axis: "desire", time: "morning",   caffeine: "yes", tags: ["sweet", "citrus"] },
  { id: "desire-morning-10", name: "パッションフルーツティー", axis: "desire", time: "morning",   caffeine: "no",  tags: ["fruity", "tropical"] },
  { id: "desire-morning-11", name: "バニラソイラテ",           axis: "desire", time: "morning",   caffeine: "no",  tags: ["sweet", "soft"] },
  { id: "desire-morning-12", name: "フルーツ甘酒",             axis: "desire", time: "morning",   caffeine: "no",  tags: ["fruity", "nourishing"] },
  // Afternoon (12)
  { id: "desire-afternoon-1",  name: "フルーツハーブティー",   axis: "desire", time: "afternoon", caffeine: "no",  tags: ["fruity", "soft"] },
  { id: "desire-afternoon-2",  name: "ラズベリーハーブティー", axis: "desire", time: "afternoon", caffeine: "no",  tags: ["fruity", "bright"] },
  { id: "desire-afternoon-3",  name: "いちご豆乳",             axis: "desire", time: "afternoon", caffeine: "no",  tags: ["fruity", "sweet"] },
  { id: "desire-afternoon-4",  name: "マンゴーラッシー",       axis: "desire", time: "afternoon", caffeine: "no",  tags: ["fruity", "rich"] },
  { id: "desire-afternoon-5",  name: "ピーチハーブウォーター", axis: "desire", time: "afternoon", caffeine: "no",  tags: ["fruity", "soft"] },
  { id: "desire-afternoon-6",  name: "ローズヒップティー",     axis: "desire", time: "afternoon", caffeine: "no",  tags: ["fruity", "soft"] },
  { id: "desire-afternoon-7",  name: "パッションフルーツティー", axis: "desire", time: "afternoon", caffeine: "no",  tags: ["fruity", "tropical"] },
  { id: "desire-afternoon-8",  name: "バニラ豆乳",             axis: "desire", time: "afternoon", caffeine: "no",  tags: ["sweet", "soft"] },
  { id: "desire-afternoon-9",  name: "フルーツ甘酒",           axis: "desire", time: "afternoon", caffeine: "no",  tags: ["fruity", "nourishing"] },
  { id: "desire-afternoon-10", name: "リンゴと桂皮ティー",     axis: "desire", time: "afternoon", caffeine: "no",  tags: ["fruity", "spice"] },
  { id: "desire-afternoon-11", name: "いちじく豆乳",           axis: "desire", time: "afternoon", caffeine: "no",  tags: ["fruity", "soft"] },
  { id: "desire-afternoon-12", name: "桃ハーブウォーター",     axis: "desire", time: "afternoon", caffeine: "no",  tags: ["fruity", "soft"] },

  // ===== UNRESOLVED (quiet, lingering, clear, low-stimulation) =====
  // Morning (12)
  { id: "unresolved-morning-1",  name: "そば茶",         axis: "unresolved", time: "morning",   caffeine: "no",  tags: ["quiet", "earthy"] },
  { id: "unresolved-morning-2",  name: "麦茶",           axis: "unresolved", time: "morning",   caffeine: "no",  tags: ["quiet", "familiar"] },
  { id: "unresolved-morning-3",  name: "白湯",           axis: "unresolved", time: "morning",   caffeine: "no",  tags: ["simple", "quiet"] },
  { id: "unresolved-morning-4",  name: "ルイボスティー", axis: "unresolved", time: "morning",   caffeine: "no",  tags: ["warm", "quiet"] },
  { id: "unresolved-morning-5",  name: "カモミールティー", axis: "unresolved", time: "morning",  caffeine: "no",  tags: ["calm", "soft"] },
  { id: "unresolved-morning-6",  name: "ほうじ茶",       axis: "unresolved", time: "morning",   caffeine: "yes", tags: ["warm", "lingering"] },
  { id: "unresolved-morning-7",  name: "黒豆茶",         axis: "unresolved", time: "morning",   caffeine: "no",  tags: ["quiet", "earthy"] },
  { id: "unresolved-morning-8",  name: "冷たい麦茶",     axis: "unresolved", time: "morning",   caffeine: "no",  tags: ["cool", "lingering"] },
  { id: "unresolved-morning-9",  name: "とうもろこし茶", axis: "unresolved", time: "morning",   caffeine: "no",  tags: ["earthy", "clear"] },
  { id: "unresolved-morning-10", name: "緑茶",           axis: "unresolved", time: "morning",   caffeine: "yes", tags: ["clear", "lingering"] },
  { id: "unresolved-morning-11", name: "レモンバームティー", axis: "unresolved", time: "morning", caffeine: "no", tags: ["soft", "quiet"] },
  { id: "unresolved-morning-12", name: "ごぼう茶",       axis: "unresolved", time: "morning",   caffeine: "no",  tags: ["earthy", "grounding"] },
  // Afternoon (12)
  { id: "unresolved-afternoon-1",  name: "そば茶",           axis: "unresolved", time: "afternoon", caffeine: "no",  tags: ["quiet", "earthy"] },
  { id: "unresolved-afternoon-2",  name: "麦茶",             axis: "unresolved", time: "afternoon", caffeine: "no",  tags: ["quiet", "familiar"] },
  { id: "unresolved-afternoon-3",  name: "白湯",             axis: "unresolved", time: "afternoon", caffeine: "no",  tags: ["simple", "quiet"] },
  { id: "unresolved-afternoon-4",  name: "ルイボスティー",   axis: "unresolved", time: "afternoon", caffeine: "no",  tags: ["warm", "quiet"] },
  { id: "unresolved-afternoon-5",  name: "カモミールティー", axis: "unresolved", time: "afternoon", caffeine: "no",  tags: ["calm", "soft"] },
  { id: "unresolved-afternoon-6",  name: "黒豆茶",           axis: "unresolved", time: "afternoon", caffeine: "no",  tags: ["quiet", "earthy"] },
  { id: "unresolved-afternoon-7",  name: "とうもろこし茶",   axis: "unresolved", time: "afternoon", caffeine: "no",  tags: ["earthy", "clear"] },
  { id: "unresolved-afternoon-8",  name: "レモンバームティー", axis: "unresolved", time: "afternoon", caffeine: "no", tags: ["soft", "quiet"] },
  { id: "unresolved-afternoon-9",  name: "ごぼう茶",         axis: "unresolved", time: "afternoon", caffeine: "no",  tags: ["earthy", "grounding"] },
  { id: "unresolved-afternoon-10", name: "炭酸水",           axis: "unresolved", time: "afternoon", caffeine: "no",  tags: ["clear", "light"] },
  { id: "unresolved-afternoon-11", name: "ぬるめの豆乳",     axis: "unresolved", time: "afternoon", caffeine: "no",  tags: ["soft", "quiet"] },
  { id: "unresolved-afternoon-12", name: "麦茶（ぬるめ）",   axis: "unresolved", time: "afternoon", caffeine: "no",  tags: ["quiet", "lingering"] },
];

const expansionDrinkCandidates: Drink[] = [
  // ===== EXPANSION: ANXIETY =====
  { id: "anxiety-morning-13", name: "リンデンフラワーティー", axis: "anxiety", time: "morning", caffeine: "no", tags: ["floral", "calm"] },
  { id: "anxiety-morning-14", name: "白桃ルイボス", axis: "anxiety", time: "morning", caffeine: "no", tags: ["soft", "fruity"] },
  { id: "anxiety-morning-15", name: "はちみつ白湯", axis: "anxiety", time: "morning", caffeine: "no", tags: ["warm", "gentle"] },
  { id: "anxiety-morning-16", name: "オートミルクティー", axis: "anxiety", time: "morning", caffeine: "no", tags: ["soft", "nourishing"] },
  { id: "anxiety-afternoon-13", name: "リンデンフラワーティー", axis: "anxiety", time: "afternoon", caffeine: "no", tags: ["floral", "calm"] },
  { id: "anxiety-afternoon-14", name: "白桃ルイボス", axis: "anxiety", time: "afternoon", caffeine: "no", tags: ["soft", "fruity"] },
  { id: "anxiety-afternoon-15", name: "はちみつ白湯", axis: "anxiety", time: "afternoon", caffeine: "no", tags: ["warm", "gentle"] },
  { id: "anxiety-afternoon-16", name: "オートミルク", axis: "anxiety", time: "afternoon", caffeine: "no", tags: ["soft", "nourishing"] },

  // ===== EXPANSION: CHANGE =====
  { id: "change-morning-13", name: "オレンジルイボス", axis: "change", time: "morning", caffeine: "no", tags: ["citrus", "bright"] },
  { id: "change-morning-14", name: "グレープフルーツ炭酸水", axis: "change", time: "morning", caffeine: "no", tags: ["sparkling", "citrus"] },
  { id: "change-morning-15", name: "ミントレモンウォーター", axis: "change", time: "morning", caffeine: "no", tags: ["mint", "fresh"] },
  { id: "change-morning-16", name: "ゆずジンジャー", axis: "change", time: "morning", caffeine: "no", tags: ["citrus", "warming"] },
  { id: "change-afternoon-13", name: "オレンジルイボス", axis: "change", time: "afternoon", caffeine: "no", tags: ["citrus", "bright"] },
  { id: "change-afternoon-14", name: "グレープフルーツ炭酸水", axis: "change", time: "afternoon", caffeine: "no", tags: ["sparkling", "citrus"] },
  { id: "change-afternoon-15", name: "ミントレモンウォーター", axis: "change", time: "afternoon", caffeine: "no", tags: ["mint", "fresh"] },
  { id: "change-afternoon-16", name: "ゆずジンジャー", axis: "change", time: "afternoon", caffeine: "no", tags: ["citrus", "warming"] },

  // ===== EXPANSION: RELATIONSHIPS =====
  { id: "relationships-morning-13", name: "カカオルイボス", axis: "relationships", time: "morning", caffeine: "no", tags: ["sweet", "warm"] },
  { id: "relationships-morning-14", name: "シナモン豆乳", axis: "relationships", time: "morning", caffeine: "no", tags: ["spice", "soft"] },
  { id: "relationships-morning-15", name: "白桃ハーブティー", axis: "relationships", time: "morning", caffeine: "no", tags: ["fruity", "gentle"] },
  { id: "relationships-morning-16", name: "ローズルイボス", axis: "relationships", time: "morning", caffeine: "no", tags: ["floral", "warm"] },
  { id: "relationships-afternoon-13", name: "キャラメルルイボス", axis: "relationships", time: "afternoon", caffeine: "no", tags: ["sweet", "warm"] },
  { id: "relationships-afternoon-14", name: "シナモン豆乳", axis: "relationships", time: "afternoon", caffeine: "no", tags: ["spice", "soft"] },
  { id: "relationships-afternoon-15", name: "白桃ハーブティー", axis: "relationships", time: "afternoon", caffeine: "no", tags: ["fruity", "gentle"] },
  { id: "relationships-afternoon-16", name: "ローズルイボス", axis: "relationships", time: "afternoon", caffeine: "no", tags: ["floral", "warm"] },

  // ===== EXPANSION: SELF DEFENSE =====
  { id: "selfDefense-morning-13", name: "セージハーブティー", axis: "selfDefense", time: "morning", caffeine: "no", tags: ["herbal", "clear"] },
  { id: "selfDefense-morning-14", name: "レモンミント炭酸水", axis: "selfDefense", time: "morning", caffeine: "no", tags: ["mint", "sparkling"] },
  { id: "selfDefense-morning-15", name: "玄米茶", axis: "selfDefense", time: "morning", caffeine: "yes", tags: ["earthy", "focused"] },
  { id: "selfDefense-morning-16", name: "すだち白湯", axis: "selfDefense", time: "morning", caffeine: "no", tags: ["clear", "citrus"] },
  { id: "selfDefense-afternoon-13", name: "セージハーブティー", axis: "selfDefense", time: "afternoon", caffeine: "no", tags: ["herbal", "clear"] },
  { id: "selfDefense-afternoon-14", name: "レモンミント炭酸水", axis: "selfDefense", time: "afternoon", caffeine: "no", tags: ["mint", "sparkling"] },
  { id: "selfDefense-afternoon-15", name: "すだち白湯", axis: "selfDefense", time: "afternoon", caffeine: "no", tags: ["clear", "citrus"] },
  { id: "selfDefense-afternoon-16", name: "冷たい黒豆茶", axis: "selfDefense", time: "afternoon", caffeine: "no", tags: ["earthy", "clear"] },

  // ===== EXPANSION: LOSS =====
  { id: "loss-morning-13", name: "玄米ルイボス", axis: "loss", time: "morning", caffeine: "no", tags: ["earthy", "warm"] },
  { id: "loss-morning-14", name: "焼きりんごティー", axis: "loss", time: "morning", caffeine: "no", tags: ["nostalgic", "fruity"] },
  { id: "loss-morning-15", name: "きなこ豆乳", axis: "loss", time: "morning", caffeine: "no", tags: ["nourishing", "grounding"] },
  { id: "loss-morning-16", name: "生姜ほうじ茶", axis: "loss", time: "morning", caffeine: "yes", tags: ["warm", "ginger"] },
  { id: "loss-afternoon-13", name: "玄米ルイボス", axis: "loss", time: "afternoon", caffeine: "no", tags: ["earthy", "warm"] },
  { id: "loss-afternoon-14", name: "焼きりんごティー", axis: "loss", time: "afternoon", caffeine: "no", tags: ["nostalgic", "fruity"] },
  { id: "loss-afternoon-15", name: "きなこ豆乳", axis: "loss", time: "afternoon", caffeine: "no", tags: ["nourishing", "grounding"] },
  { id: "loss-afternoon-16", name: "生姜麦茶", axis: "loss", time: "afternoon", caffeine: "no", tags: ["warm", "ginger"] },

  // ===== EXPANSION: RECOVERY =====
  { id: "recovery-morning-13", name: "なつめ茶", axis: "recovery", time: "morning", caffeine: "no", tags: ["nourishing", "warm"] },
  { id: "recovery-morning-14", name: "黒糖しょうが湯", axis: "recovery", time: "morning", caffeine: "no", tags: ["ginger", "sweet"] },
  { id: "recovery-morning-15", name: "オーツミルクラテ", axis: "recovery", time: "morning", caffeine: "no", tags: ["soft", "rebuilding"] },
  { id: "recovery-morning-16", name: "はちみつルイボス", axis: "recovery", time: "morning", caffeine: "no", tags: ["warm", "soft"] },
  { id: "recovery-afternoon-13", name: "なつめ茶", axis: "recovery", time: "afternoon", caffeine: "no", tags: ["nourishing", "warm"] },
  { id: "recovery-afternoon-14", name: "黒糖しょうが湯", axis: "recovery", time: "afternoon", caffeine: "no", tags: ["ginger", "sweet"] },
  { id: "recovery-afternoon-15", name: "オーツミルク", axis: "recovery", time: "afternoon", caffeine: "no", tags: ["soft", "rebuilding"] },
  { id: "recovery-afternoon-16", name: "はちみつルイボス", axis: "recovery", time: "afternoon", caffeine: "no", tags: ["warm", "soft"] },

  // ===== EXPANSION: DESIRE =====
  { id: "desire-morning-13", name: "ベリールイボス", axis: "desire", time: "morning", caffeine: "no", tags: ["fruity", "bright"] },
  { id: "desire-morning-14", name: "白桃ソーダ", axis: "desire", time: "morning", caffeine: "no", tags: ["fruity", "sparkling"] },
  { id: "desire-morning-15", name: "シナモンアップルティー", axis: "desire", time: "morning", caffeine: "no", tags: ["fruity", "spice"] },
  { id: "desire-morning-16", name: "ココナッツミルク", axis: "desire", time: "morning", caffeine: "no", tags: ["sweet", "soft"] },
  { id: "desire-afternoon-13", name: "ベリールイボス", axis: "desire", time: "afternoon", caffeine: "no", tags: ["fruity", "bright"] },
  { id: "desire-afternoon-14", name: "白桃ソーダ", axis: "desire", time: "afternoon", caffeine: "no", tags: ["fruity", "sparkling"] },
  { id: "desire-afternoon-15", name: "シナモンアップルティー", axis: "desire", time: "afternoon", caffeine: "no", tags: ["fruity", "spice"] },
  { id: "desire-afternoon-16", name: "ココナッツミルク", axis: "desire", time: "afternoon", caffeine: "no", tags: ["sweet", "soft"] },

  // ===== EXPANSION: UNRESOLVED =====
  { id: "unresolved-morning-13", name: "月桃茶", axis: "unresolved", time: "morning", caffeine: "no", tags: ["herbal", "quiet"] },
  { id: "unresolved-morning-14", name: "白ぶどうハーブ水", axis: "unresolved", time: "morning", caffeine: "no", tags: ["soft", "clear"] },
  { id: "unresolved-morning-15", name: "薄荷ルイボス", axis: "unresolved", time: "morning", caffeine: "no", tags: ["mint", "quiet"] },
  { id: "unresolved-morning-16", name: "温かい水出し麦茶", axis: "unresolved", time: "morning", caffeine: "no", tags: ["quiet", "familiar"] },
  { id: "unresolved-afternoon-13", name: "月桃茶", axis: "unresolved", time: "afternoon", caffeine: "no", tags: ["herbal", "quiet"] },
  { id: "unresolved-afternoon-14", name: "白ぶどうハーブ水", axis: "unresolved", time: "afternoon", caffeine: "no", tags: ["soft", "clear"] },
  { id: "unresolved-afternoon-15", name: "薄荷ルイボス", axis: "unresolved", time: "afternoon", caffeine: "no", tags: ["mint", "quiet"] },
  { id: "unresolved-afternoon-16", name: "温かい水出し麦茶", axis: "unresolved", time: "afternoon", caffeine: "no", tags: ["quiet", "familiar"] },
];

export const drinkCandidates: Drink[] = [
  ...baseDrinkCandidates,
  ...expansionDrinkCandidates,
];
