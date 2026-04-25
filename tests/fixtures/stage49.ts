import type { DreamInput } from "@/types/dream";

export type Stage49Fixture = {
  id: string;
  text: string;
  expectedMotifIds: string[];
  expectedTopSixMotifIds?: string[];
  unexpectedMotifIds?: string[];
  note: string;
};

export type Stage49RepresentativeDream = {
  id: string;
  input: DreamInput;
  expectedMotifIds: string[];
  selectedMotifIds: string[];
  expectedQuestionIds: string[];
};

export const batch26MotifIds = [
  "funeral",
  "accident",
  "flood",
  "wedding",
  "argument",
  "graduation",
  "surgery",
  "moving_house",
  "reunion",
  "promotion",
] as const;

export const stage49ExtractionAuditCases: Stage49Fixture[] = [
  {
    id: "stage49-funeral",
    text: "葬式だった。告別式に出て誰かを見送る夢だった。",
    expectedMotifIds: ["funeral"],
    note: "funeral の基本抽出を確認する。",
  },
  {
    id: "stage49-accident",
    text: "事故に遭った。交通事故の夢だった。",
    expectedMotifIds: ["accident"],
    note: "accident の基本抽出を確認する。",
  },
  {
    id: "stage49-flood",
    text: "洪水になった。浸水して水が溢れてきた。",
    expectedMotifIds: ["flood"],
    unexpectedMotifIds: ["tsunami"],
    note: "flood の基本抽出を確認し tsunami と区別できることを確認する。",
  },
  {
    id: "stage49-wedding",
    text: "結婚式に出た。式場にいて結婚式を挙げた。",
    expectedMotifIds: ["wedding"],
    note: "wedding の基本抽出を確認する。",
  },
  {
    id: "stage49-argument",
    text: "言い争いになった。口論して怒鳴り合っていた。",
    expectedMotifIds: ["argument"],
    note: "argument の基本抽出を確認する。",
  },
  {
    id: "stage49-graduation",
    text: "卒業式だった。証書をもらって卒業した夢だった。",
    expectedMotifIds: ["graduation"],
    note: "graduation の基本抽出を確認する。",
  },
  {
    id: "stage49-surgery",
    text: "手術を受けた。手術室にいて手術された夢だった。",
    expectedMotifIds: ["surgery"],
    note: "surgery の基本抽出を確認する。",
  },
  {
    id: "stage49-moving-house",
    text: "引越しした。荷物をまとめて新しい家に移った。",
    expectedMotifIds: ["moving_house"],
    note: "moving_house の基本抽出を確認する。",
  },
  {
    id: "stage49-reunion",
    text: "再会した。同窓会で久しぶりに懐かしい人に会った。",
    expectedMotifIds: ["reunion"],
    note: "reunion の基本抽出を確認する。",
  },
  {
    id: "stage49-promotion",
    text: "昇進した。出世して新しい役職についた夢だった。",
    expectedMotifIds: ["promotion"],
    note: "promotion の基本抽出を確認する。",
  },
];

export const stage49RealDreamAuditCases: Stage49Fixture[] = [
  {
    id: "stage49-real-funeral",
    text: "葬式の夢だった。葬式に参列して誰かを見送る場面がリアルだった。",
    expectedMotifIds: ["funeral"],
    expectedTopSixMotifIds: ["funeral"],
    note: "葬式夢の抽出精度を確認する。",
  },
  {
    id: "stage49-real-wedding",
    text: "結婚式を挙げる夢だった。式場にいて誰かと誓いを立てた。",
    expectedMotifIds: ["wedding"],
    expectedTopSixMotifIds: ["wedding"],
    note: "結婚式夢の抽出精度を確認する。",
  },
  {
    id: "stage49-real-argument",
    text: "家族と激しく言い争った夢だった。怒鳴り合って泣いていた。",
    expectedMotifIds: ["argument"],
    expectedTopSixMotifIds: ["argument"],
    note: "言い争い夢の抽出精度を確認する。",
  },
  {
    id: "stage49-real-being-chased-regression",
    text: "夜道を歩いていると後ろから足音がついてきて逃げ続けた夢だった。",
    expectedMotifIds: ["being_chased"],
    expectedTopSixMotifIds: ["being_chased"],
    unexpectedMotifIds: ["funeral", "accident", "flood", "argument"],
    note: "追跡夢への batch-26 干渉がないことを確認する。",
  },
  {
    id: "stage49-real-workplace-regression",
    text: "職場で仕事のミスをして怒られた夢だった。",
    expectedMotifIds: ["workplace"],
    unexpectedMotifIds: ["funeral", "accident", "promotion"],
    note: "職場夢への batch-26 干渉がないことを確認する。",
  },
];

export const stage49RepresentativeDreams: Stage49RepresentativeDream[] = [
  {
    id: "stage49-funeral-dream",
    input: {
      text: "葬式だった。告別式に出て大切な人を見送る夢だった。",
      impression: "uneasy",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["funeral"],
    selectedMotifIds: ["funeral"],
    expectedQuestionIds: ["funeral-role"],
  },
  {
    id: "stage49-wedding-dream",
    input: {
      text: "結婚式を挙げる夢だった。式場で誰かと指輪を交わした。",
      impression: "happy",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["wedding"],
    selectedMotifIds: ["wedding"],
    expectedQuestionIds: ["wedding-role"],
  },
  {
    id: "stage49-argument-graduation-dream",
    input: {
      text: "卒業式だった。卒業式に出た後、家族と言い争った夢だった。",
      impression: "uneasy",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["graduation", "argument"],
    selectedMotifIds: ["argument", "graduation"],
    expectedQuestionIds: ["graduation-feeling", "argument-with"],
  },
];
