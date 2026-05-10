import type { DreamInput } from "@/types/dream";

export type Stage55Fixture = {
  id: string;
  text: string;
  expectedMotifIds: string[];
  expectedTopSixMotifIds?: string[];
  unexpectedMotifIds?: string[];
  note: string;
};

export type Stage55RepresentativeDream = {
  id: string;
  input: DreamInput;
  expectedMotifIds: string[];
  selectedMotifIds: string[];
  expectedQuestionIds: string[];
};

export const batch29MotifIds = [
  "airplane",
  "sword",
  "cave",
  "island",
  "volcano",
  "crowd",
  "whale",
  "fox",
  "desert",
] as const;

export const batch29DeferredMotifIds = ["cemetery"] as const;

export const stage55ExtractionAuditCases: Stage55Fixture[] = [
  {
    id: "stage55-airplane-airport",
    text: "空港で飛行機を待ったあと、飛行機が離陸する夢を見た。",
    expectedMotifIds: ["airplane", "airport"],
    expectedTopSixMotifIds: ["airplane"],
    note: "airplane should be the primary motif when a flight scene is explicit.",
  },
  {
    id: "stage55-cave-dark",
    text: "暗い洞窟の中を歩いて、出口を探している夢だった。",
    expectedMotifIds: ["cave"],
    expectedTopSixMotifIds: ["cave"],
    note: "cave should be extracted with dark as a supporting motif.",
  },
  {
    id: "stage55-whale-sea",
    text: "海で大きなクジラと泳いだ。怖いよりも不思議に落ち着いた。",
    expectedMotifIds: ["whale", "sea"],
    expectedTopSixMotifIds: ["whale"],
    note: "whale should coexist with sea instead of being treated as generic fish only.",
  },
  {
    id: "stage55-fox-shrine",
    text: "神社で白いキツネに会った。狐に導かれたような夢だった。",
    expectedMotifIds: ["fox", "shrine"],
    expectedTopSixMotifIds: ["fox"],
    note: "fox should be distinct from shrine while keeping the relation visible.",
  },
  {
    id: "stage55-desert-road",
    text: "広い砂漠で迷った。砂だらけの道を歩き続けていた。",
    expectedMotifIds: ["desert"],
    expectedTopSixMotifIds: ["desert"],
    note: "desert should be primary over sand/road context.",
  },
];

export const stage55RepresentativeDreams: Stage55RepresentativeDream[] = [
  {
    id: "stage55-volcano-pressure",
    input: {
      text: "火山が噴火して、溶岩が流れていた。遠くから見ているだけなのに胸がざわざわした。",
      impression: "uneasy",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["volcano"],
    selectedMotifIds: ["fire", "volcano"],
    expectedQuestionIds: ["volcano-pressure"],
  },
  {
    id: "stage55-crowd-distance",
    input: {
      text: "大勢の人に囲まれて、人混みを歩いていた。途中で群衆から離れようとしていた。",
      impression: "confused",
      clarity: "partial",
      recurring: false,
    },
    expectedMotifIds: ["crowd"],
    selectedMotifIds: ["crowd"],
    expectedQuestionIds: ["crowd-position"],
  },
  {
    id: "stage55-sword-boundary",
    input: {
      text: "剣を持っていたけれど、戦うよりも自分を守るために刀をしまっていた夢だった。",
      impression: "calm",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["sword"],
    selectedMotifIds: ["sword"],
    expectedQuestionIds: ["sword-use"],
  },
];
