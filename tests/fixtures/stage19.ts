import type { DreamInput } from "@/types/dream";

export type Stage19Fixture = {
  id: string;
  text: string;
  expectedMotifIds: string[];
  unexpectedMotifIds?: string[];
  note: string;
};

export type Stage19RepresentativeDream = {
  id: string;
  input: DreamInput;
  expectedMotifIds: string[];
  selectedMotifIds: string[];
  expectedQuestionIds: string[];
};

export const stage19FrontHalfIds = [
  "cup",
  "candle",
  "blanket",
  "envelope",
  "leaf",
  "wave",
  "ice",
  "face",
  "writing",
  "dancing",
] as const;

export const stage19BackHalfIds = [
  "scissors",
  "toy",
  "grass",
  "ear",
  "mouth",
  "breath",
  "swimming",
  "packing",
  "bicycle",
  "classmate",
] as const;

export const stage19ExtractionAuditCases: Stage19Fixture[] = [
  {
    id: "stage19-cup-candle-envelope-front",
    text: "コップで水を飲んでから、ろうそくを灯し、机の封筒を開ける夢だった。",
    expectedMotifIds: ["cup", "water", "candle", "envelope"],
    note: "前半object-record候補が単独抽出されることを確認する。",
  },
  {
    id: "stage19-blanket-sleep-baby",
    text: "赤ちゃんに毛布をかけて寝ようとする夢だった。",
    expectedMotifIds: ["blanket", "baby", "sleep"],
    note: "毛布はhome-placeではなく、安心と休息のobjectとして扱う。",
  },
  {
    id: "stage19-leaf-wave-ice-nature",
    text: "葉っぱが風に舞い、海の波を見たあと、氷が少しずつ溶ける夢だった。",
    expectedMotifIds: ["leaf", "wind", "wave", "sea", "ice"],
    note: "自然・水系の追加候補がgeneralへ落ちないことを確認する。",
  },
  {
    id: "stage19-face-writing-dancing",
    text: "鏡で顔を見ながらノートに文字を書き、音楽に合わせて踊る夢だった。",
    expectedMotifIds: ["face", "mirror", "writing", "notebook", "dancing", "music"],
    note: "顔・書く・踊るを身体/行動として併存させる。",
  },
  {
    id: "stage19-scissors-toy-grass",
    text: "はさみで髪を切り、古いおもちゃを片付けてから草の上を歩く夢だった。",
    expectedMotifIds: ["scissors", "hair", "toy", "grass"],
    note: "後半object/nature候補の境界を確認する。",
  },
  {
    id: "stage19-ear-mouth-breath",
    text: "耳で声を聞き、口を閉じたまま深呼吸をする夢だった。",
    expectedMotifIds: ["ear", "mouth", "breath"],
    unexpectedMotifIds: ["comment", "streaming"],
    note: "耳・口・呼吸はcommunicationではなくbodyとして扱う。",
  },
  {
    id: "stage19-swimming-wave-water",
    text: "海で泳ぐ夢で、波が強くて岸まで泳いで進む夢だった。",
    expectedMotifIds: ["swimming", "sea", "wave"],
    note: "泳ぐはwater-weatherと接続しつつ、行動として抽出する。",
  },
  {
    id: "stage19-packing-bicycle-travel",
    text: "旅行の準備で荷造りをしてから、自転車で知らない道を進む夢だった。",
    expectedMotifIds: ["packing", "travel", "bicycle", "road"],
    note: "packingとbicycleはmovementを補助しつつ、transit-placeにはしない。",
  },
  {
    id: "stage19-classmate-school-boundary",
    text: "学校の廊下でクラスメイトと話し、先生に呼ばれる夢だった。",
    expectedMotifIds: ["classmate", "school", "teacher"],
    unexpectedMotifIds: ["coworker", "workplace"],
    note: "relationship候補はclassmateのみで、coworker/workplaceへ寄せない。",
  },
  {
    id: "stage19-face-mask-makeup-boundary",
    text: "顔を隠すためにマスクをつけ、鏡の前で化粧を直す夢だった。",
    expectedMotifIds: ["face", "mask", "makeup", "mirror"],
    note: "faceはmakeup/maskと近いが、自己像として扱う。",
  },
  {
    id: "stage19-breath-running-sleep",
    text: "駅まで走って息が上がったあと、毛布にくるまって寝ようとする夢だった。",
    expectedMotifIds: ["running", "breath", "blanket", "sleep"],
    note: "breathは身体的緊張として扱い、医療断定に寄せない。",
  },
  {
    id: "stage19-packing-forgetting-bag",
    text: "かばんに荷物を詰める荷造りの途中で、忘れ物が気になる夢だった。",
    expectedMotifIds: ["packing", "bag", "forgetting"],
    note: "荷造りはbag/travel周辺の準備行動として固定する。",
  },
];

export const stage19RepresentativeDreams: Stage19RepresentativeDream[] = [
  {
    id: "stage19-front-object-light",
    input: {
      text: "コップで水を飲んでから、暗い部屋でろうそくを灯し、封筒を開ける夢だった。",
      impression: "calm",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["cup", "water", "candle", "envelope"],
    selectedMotifIds: ["cup", "candle", "envelope"],
    expectedQuestionIds: ["envelope-content", "cup-content", "candle-light"],
  },
  {
    id: "stage19-body-expression",
    input: {
      text: "鏡で顔を見ながらノートに文字を書き、音楽に合わせて踊る夢だった。",
      impression: "confused",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["face", "writing", "dancing", "mirror", "notebook", "music"],
    selectedMotifIds: ["face", "writing", "dancing"],
    expectedQuestionIds: ["writing-purpose", "face-appearance", "dancing-mood"],
  },
  {
    id: "stage19-back-object-nature",
    input: {
      text: "はさみで髪を切り、古いおもちゃを片付けて、草の上を歩く夢だった。",
      impression: "uneasy",
      clarity: "partial",
      recurring: false,
    },
    expectedMotifIds: ["scissors", "hair", "toy", "grass"],
    selectedMotifIds: ["scissors", "toy", "grass"],
    expectedQuestionIds: ["scissors-use", "toy-feeling", "grass-place"],
  },
  {
    id: "stage19-movement-classmate",
    input: {
      text: "旅行の準備で荷造りをして、自転車で学校へ行き、クラスメイトと話す夢だった。",
      impression: "nostalgic",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["packing", "bicycle", "school", "classmate", "travel"],
    selectedMotifIds: ["packing", "bicycle", "classmate"],
    expectedQuestionIds: ["packing-choice", "bicycle-balance", "classmate-distance"],
  },
];
