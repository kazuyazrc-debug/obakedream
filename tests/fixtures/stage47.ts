import type { DreamInput } from "@/types/dream";

export type Stage47Fixture = {
  id: string;
  text: string;
  expectedMotifIds: string[];
  expectedTopSixMotifIds?: string[];
  unexpectedMotifIds?: string[];
  note: string;
};

export type Stage47RepresentativeDream = {
  id: string;
  input: DreamInput;
  expectedMotifIds: string[];
  selectedMotifIds: string[];
  expectedQuestionIds: string[];
};

export const batch25MotifIds = [
  "earthquake",
  "tsunami",
  "storm",
  "being_trapped",
  "paralysis",
  "being_fired",
  "resignation",
  "pregnancy",
  "transformation",
  "power_outage",
] as const;

export const stage47ExtractionAuditCases: Stage47Fixture[] = [
  {
    id: "stage47-earthquake",
    text: "地震が来た。地面が揺れて建物が揺れた。",
    expectedMotifIds: ["earthquake"],
    note: "earthquake の基本抽出を確認する。",
  },
  {
    id: "stage47-tsunami",
    text: "津波が来た。巨大な波が押し寄せてきた。",
    expectedMotifIds: ["tsunami"],
    note: "tsunami の基本抽出を確認する。",
  },
  {
    id: "stage47-storm",
    text: "嵐が来た。台風で暴風雨になった。",
    expectedMotifIds: ["storm"],
    note: "storm の基本抽出を確認する。",
  },
  {
    id: "stage47-being-trapped",
    text: "閉じ込められた。逃げられない出口のない部屋にいた。",
    expectedMotifIds: ["being_trapped"],
    unexpectedMotifIds: ["hiding"],
    note: "being_trapped の基本抽出を確認し hiding と区別できることを確認する。",
  },
  {
    id: "stage47-paralysis",
    text: "金縛りにあった。体が動かない状態になった。",
    expectedMotifIds: ["paralysis"],
    note: "paralysis の基本抽出を確認する。",
  },
  {
    id: "stage47-being-fired",
    text: "クビになった。解雇されて職場を追い出された。",
    expectedMotifIds: ["being_fired"],
    note: "being_fired の基本抽出を確認する。",
  },
  {
    id: "stage47-resignation",
    text: "退職した。会社を辞めて退職届を出した。",
    expectedMotifIds: ["resignation"],
    note: "resignation の基本抽出を確認する。",
  },
  {
    id: "stage47-pregnancy",
    text: "妊娠した。赤ちゃんができたことがわかった。",
    expectedMotifIds: ["pregnancy"],
    note: "pregnancy の基本抽出を確認する。",
  },
  {
    id: "stage47-transformation",
    text: "変身した。自分の姿が変わって別の何かになった。",
    expectedMotifIds: ["transformation"],
    note: "transformation の基本抽出を確認する。",
  },
  {
    id: "stage47-power-outage",
    text: "停電した。電気が消えて真っ暗になった。",
    expectedMotifIds: ["power_outage"],
    note: "power_outage の基本抽出を確認する。",
  },
];

export const stage47RealDreamAuditCases: Stage47Fixture[] = [
  {
    id: "stage47-real-earthquake",
    text: "大きな地震が来て地面が揺れ、建物が崩れそうで逃げた夢だった。",
    expectedMotifIds: ["earthquake"],
    expectedTopSixMotifIds: ["earthquake"],
    note: "地震夢の抽出精度を確認する。",
  },
  {
    id: "stage47-real-tsunami",
    text: "津波が押し寄せてきて高台に逃げようとした夢だった。",
    expectedMotifIds: ["tsunami"],
    expectedTopSixMotifIds: ["tsunami"],
    note: "津波夢の抽出精度を確認する。",
  },
  {
    id: "stage47-real-paralysis",
    text: "金縛りにあって体が動かなくて焦ったけど声も出なかった夢だった。",
    expectedMotifIds: ["paralysis"],
    expectedTopSixMotifIds: ["paralysis"],
    note: "金縛り夢の抽出精度を確認する。",
  },
  {
    id: "stage47-real-being-fired",
    text: "突然クビを告げられて解雇されて職場を追い出された夢だった。",
    expectedMotifIds: ["being_fired"],
    expectedTopSixMotifIds: ["being_fired"],
    note: "解雇夢の抽出精度を確認する。",
  },
  {
    id: "stage47-real-being-chased-regression",
    text: "夜道を歩いていると後ろから足音がついてきて逃げ続けた夢だった。",
    expectedMotifIds: ["being_chased"],
    expectedTopSixMotifIds: ["being_chased"],
    unexpectedMotifIds: ["earthquake", "tsunami", "storm", "being_fired"],
    note: "追跡夢への batch-25 干渉がないことを確認する。",
  },
  {
    id: "stage47-real-workplace-regression",
    text: "職場で仕事のミスをして怒られた夢だった。",
    expectedMotifIds: ["workplace"],
    unexpectedMotifIds: ["earthquake", "tsunami", "being_fired"],
    note: "職場夢への batch-25 干渉がないことを確認する。",
  },
];

export const stage47RepresentativeDreams: Stage47RepresentativeDream[] = [
  {
    id: "stage47-earthquake-dream",
    input: {
      text: "大きな地震が来て地面が揺れて足元が崩れそうだった。",
      impression: "scary",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["earthquake"],
    selectedMotifIds: ["earthquake"],
    expectedQuestionIds: ["earthquake-scale"],
  },
  {
    id: "stage47-paralysis-dream",
    input: {
      text: "金縛りにあって体が動かない状態になって焦った夢だった。",
      impression: "scary",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["paralysis"],
    selectedMotifIds: ["paralysis"],
    expectedQuestionIds: ["paralysis-feeling"],
  },
  {
    id: "stage47-resignation-being-fired-dream",
    input: {
      text: "退職届を出したと思ったら解雇されたと言われた夢だった。",
      impression: "uneasy",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["being_fired", "resignation"],
    selectedMotifIds: ["being_fired", "resignation"],
    expectedQuestionIds: ["resignation-feeling", "fired-reaction"],
  },
];
