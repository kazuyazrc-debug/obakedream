import type { DreamInput } from "@/types/dream";

export type Stage53Fixture = {
  id: string;
  text: string;
  expectedMotifIds: string[];
  expectedTopSixMotifIds?: string[];
  unexpectedMotifIds?: string[];
  note: string;
};

export type Stage53RepresentativeDream = {
  id: string;
  input: DreamInput;
  expectedMotifIds: string[];
  selectedMotifIds: string[];
  expectedQuestionIds: string[];
};

export const batch28MotifIds = [
  "dragon",
  "angel",
  "lion",
  "giving_birth",
  "money",
  "spider",
  "bear",
  "wolf",
  "god",
  "demon",
] as const;

export const stage53ExtractionAuditCases: Stage53Fixture[] = [
  {
    id: "stage53-dragon",
    text: "龍が出た。龍を見た夢だった。",
    expectedMotifIds: ["dragon"],
    note: "dragon の基本抽出を確認する。",
  },
  {
    id: "stage53-angel",
    text: "天使が現れた。天使の夢だった。",
    expectedMotifIds: ["angel"],
    note: "angel の基本抽出を確認する。",
  },
  {
    id: "stage53-lion",
    text: "ライオンが出た。ライオンに追われる夢だった。",
    expectedMotifIds: ["lion"],
    note: "lion の基本抽出を確認する。",
  },
  {
    id: "stage53-giving_birth",
    text: "出産した。赤ちゃんが生まれる夢だった。",
    expectedMotifIds: ["giving_birth"],
    note: "giving_birth の基本抽出を確認する。",
  },
  {
    id: "stage53-money",
    text: "お金が増えた。お金が増える夢だった。",
    expectedMotifIds: ["money"],
    note: "money の基本抽出を確認する。",
  },
  {
    id: "stage53-spider",
    text: "蜘蛛が出た。蜘蛛の巣にかかった夢だった。",
    expectedMotifIds: ["spider"],
    note: "spider の基本抽出を確認する。",
  },
  {
    id: "stage53-bear",
    text: "熊が出た。熊に追われる夢だった。",
    expectedMotifIds: ["bear"],
    note: "bear の基本抽出を確認する。",
  },
  {
    id: "stage53-wolf",
    text: "狼が出た。狼に追われる夢だった。",
    expectedMotifIds: ["wolf"],
    note: "wolf の基本抽出を確認する。",
  },
  {
    id: "stage53-god",
    text: "神様に会った。神様が現れる夢だった。",
    expectedMotifIds: ["god"],
    note: "god の基本抽出を確認する。",
  },
  {
    id: "stage53-demon",
    text: "鬼が出た。鬼に追われる夢だった。",
    expectedMotifIds: ["demon"],
    note: "demon の基本抽出を確認する。",
  },
];

export const stage53RealDreamAuditCases: Stage53Fixture[] = [
  {
    id: "stage53-real-dragon",
    text: "金色の龍が空を飛ぶ夢を見た。龍に守られている気がした。",
    expectedMotifIds: ["dragon"],
    expectedTopSixMotifIds: ["dragon"],
    note: "龍夢の抽出精度を確認する。",
  },
  {
    id: "stage53-real-angel",
    text: "天使の夢を見た。白い羽を持つ天使が現れて守ってくれた。",
    expectedMotifIds: ["angel"],
    expectedTopSixMotifIds: ["angel"],
    note: "天使夢の抽出精度を確認する。",
  },
  {
    id: "stage53-real-money",
    text: "お金が増える夢だった。財布からどんどんお金が溢れ出した。",
    expectedMotifIds: ["money"],
    expectedTopSixMotifIds: ["money"],
    note: "お金夢の抽出精度を確認する。",
  },
  {
    id: "stage53-real-wolf",
    text: "森の中で狼に追われた夢だった。狼が遠吠えしていた。",
    expectedMotifIds: ["wolf"],
    expectedTopSixMotifIds: ["wolf"],
    note: "狼夢の抽出精度を確認する。",
  },
  {
    id: "stage53-real-being-chased-regression",
    text: "逃げても追ってくる夢だった。追いかけられて怖い夢だった。",
    expectedMotifIds: ["being_chased"],
    expectedTopSixMotifIds: ["being_chased"],
    unexpectedMotifIds: ["dragon", "angel", "money"],
    note: "追跡夢への batch-28 干渉がないことを確認する。",
  },
  {
    id: "stage53-real-ghost-regression",
    text: "幽霊が出てきた夢を見た。暗い廊下で霊が現れた。",
    expectedMotifIds: ["ghost"],
    unexpectedMotifIds: ["demon", "angel", "god"],
    note: "幽霊夢への batch-28 干渉がないことを確認する。",
  },
];

export const stage53RepresentativeDreams: Stage53RepresentativeDream[] = [
  {
    id: "stage53-dragon-dream",
    input: {
      text: "龍が出た夢だった。金色の龍が空を飛んでいた。",
      impression: "happy",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["dragon"],
    selectedMotifIds: ["dragon"],
    expectedQuestionIds: ["dragon-impression"],
  },
  {
    id: "stage53-demon-dream",
    input: {
      text: "鬼に追われた夢だった。悪魔のような存在から逃げていた。",
      impression: "scary",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["demon"],
    selectedMotifIds: ["demon"],
    expectedQuestionIds: ["demon-reaction"],
  },
  {
    id: "stage53-money-god-dream",
    input: {
      text: "神様が出た夢だった。お金が増える夢だった。神様がお金を授けてくれた。",
      impression: "happy",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["god", "money"],
    selectedMotifIds: ["money", "god"],
    expectedQuestionIds: ["god-message", "money-outcome"],
  },
];
