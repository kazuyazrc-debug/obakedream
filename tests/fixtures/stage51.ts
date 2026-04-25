import type { DreamInput } from "@/types/dream";

export type Stage51Fixture = {
  id: string;
  text: string;
  expectedMotifIds: string[];
  expectedTopSixMotifIds?: string[];
  unexpectedMotifIds?: string[];
  note: string;
};

export type Stage51RepresentativeDream = {
  id: string;
  input: DreamInput;
  expectedMotifIds: string[];
  selectedMotifIds: string[];
  expectedQuestionIds: string[];
};

export const batch27MotifIds = [
  "ghost",
  "interview",
  "confession",
  "betrayal",
  "divorce",
  "presentation",
  "treasure",
  "war",
  "prison",
  "apology",
] as const;

export const stage51ExtractionAuditCases: Stage51Fixture[] = [
  {
    id: "stage51-ghost",
    text: "幽霊が出た。幽霊を見た夢だった。",
    expectedMotifIds: ["ghost"],
    note: "ghost の基本抽出を確認する。",
  },
  {
    id: "stage51-interview",
    text: "面接を受けた。就職の面接の夢だった。",
    expectedMotifIds: ["interview"],
    note: "interview の基本抽出を確認する。",
  },
  {
    id: "stage51-confession",
    text: "告白した。好きな人に気持ちを伝えた夢だった。",
    expectedMotifIds: ["confession"],
    note: "confession の基本抽出を確認する。",
  },
  {
    id: "stage51-betrayal",
    text: "裏切られた。信頼していた人に裏切られる夢だった。",
    expectedMotifIds: ["betrayal"],
    note: "betrayal の基本抽出を確認する。",
  },
  {
    id: "stage51-divorce",
    text: "離婚した。離婚する夢だった。",
    expectedMotifIds: ["divorce"],
    note: "divorce の基本抽出を確認する。",
  },
  {
    id: "stage51-presentation",
    text: "発表した。みんなの前でプレゼンした夢だった。",
    expectedMotifIds: ["presentation"],
    note: "presentation の基本抽出を確認する。",
  },
  {
    id: "stage51-treasure",
    text: "宝物を見つけた。宝を発見した夢だった。",
    expectedMotifIds: ["treasure"],
    note: "treasure の基本抽出を確認する。",
  },
  {
    id: "stage51-war",
    text: "戦争が起きた。戦場にいる夢だった。",
    expectedMotifIds: ["war"],
    note: "war の基本抽出を確認する。",
  },
  {
    id: "stage51-prison",
    text: "牢屋に入れられた。刑務所にいる夢だった。",
    expectedMotifIds: ["prison"],
    note: "prison の基本抽出を確認する。",
  },
  {
    id: "stage51-apology",
    text: "謝った。誰かに謝罪した夢だった。",
    expectedMotifIds: ["apology"],
    note: "apology の基本抽出を確認する。",
  },
];

export const stage51RealDreamAuditCases: Stage51Fixture[] = [
  {
    id: "stage51-real-ghost",
    text: "幽霊の夢だった。暗い廊下で霊が出てきた。",
    expectedMotifIds: ["ghost"],
    expectedTopSixMotifIds: ["ghost"],
    note: "幽霊夢の抽出精度を確認する。",
  },
  {
    id: "stage51-real-confession",
    text: "好きな人に告白した夢だった。告白する夢を見た。",
    expectedMotifIds: ["confession"],
    expectedTopSixMotifIds: ["confession"],
    note: "告白夢の抽出精度を確認する。",
  },
  {
    id: "stage51-real-war",
    text: "戦争の夢を見た。戦場にいた夢だった。逃げ続けていた。",
    expectedMotifIds: ["war"],
    expectedTopSixMotifIds: ["war"],
    note: "戦争夢の抽出精度を確認する。",
  },
  {
    id: "stage51-real-being-chased-regression",
    text: "夜道を歩いていると後ろから足音がついてきて逃げ続けた夢だった。",
    expectedMotifIds: ["being_chased"],
    expectedTopSixMotifIds: ["being_chased"],
    unexpectedMotifIds: ["ghost", "war", "prison", "betrayal"],
    note: "追跡夢への batch-27 干渉がないことを確認する。",
  },
  {
    id: "stage51-real-wedding-regression",
    text: "結婚式を挙げる夢だった。式場で誰かと誓いを立てた。",
    expectedMotifIds: ["wedding"],
    unexpectedMotifIds: ["divorce", "confession", "betrayal"],
    note: "結婚式夢への batch-27 干渉がないことを確認する。",
  },
];

export const stage51RepresentativeDreams: Stage51RepresentativeDream[] = [
  {
    id: "stage51-ghost-dream",
    input: {
      text: "幽霊が出た夢だった。暗い廊下で幽霊を見た。",
      impression: "scary",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["ghost"],
    selectedMotifIds: ["ghost"],
    expectedQuestionIds: ["ghost-who"],
  },
  {
    id: "stage51-interview-dream",
    input: {
      text: "面接の夢だった。面接を受けた。うまく話せなかった。",
      impression: "uneasy",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["interview"],
    selectedMotifIds: ["interview"],
    expectedQuestionIds: ["interview-result"],
  },
  {
    id: "stage51-confession-betrayal-dream",
    input: {
      text: "好きな人に告白した夢だった。でも裏切られた夢だった。",
      impression: "uneasy",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["confession", "betrayal"],
    selectedMotifIds: ["confession", "betrayal"],
    expectedQuestionIds: ["confession-outcome", "betrayal-who"],
  },
];
