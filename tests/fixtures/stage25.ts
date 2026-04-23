import type { DreamInput } from "@/types/dream";

export type Stage25Fixture = {
  id: string;
  text: string;
  expectedMotifIds: string[];
  unexpectedMotifIds?: string[];
  note: string;
};

export type Stage25RepresentativeDream = {
  id: string;
  input: DreamInput;
  expectedMotifIds: string[];
  selectedMotifIds: string[];
  expectedQuestionIds: string[];
};

export const stage25FrontHalfIds = [
  "postcard",
  "basket",
  "jar",
  "bench",
  "curtain",
  "nest",
  "chalk",
  "pebble",
  "maple_leaf",
  "tray",
] as const;

export const stage25BackHalfIds = [
  "needle",
  "paintbrush",
  "ladder",
  "glove",
  "plate",
  "lamp",
  "string",
  "marble",
  "bucket",
  "comb",
] as const;

export const stage25ExtractionAuditCases: Stage25Fixture[] = [
  {
    id: "stage25-postcard-public-object",
    text: "旅先の絵はがきを見て、絵はがきに切手を貼る。あとで写真を見る夢だった。",
    expectedMotifIds: ["postcard", "stamp", "photo"],
    note: "postcardをcommunication本体へ寄せず、短い記録と届ける object-record として確認する。",
  },
  {
    id: "stage25-bench-public-waiting",
    text: "駅前のベンチに座り、ベンチで休んでから道を歩く夢だった。",
    expectedMotifIds: ["bench", "road"],
    unexpectedMotifIds: ["house", "storage_room"],
    note: "benchはhouse / room / storageへ寄せず、public-place / waiting-place的な一時停止として扱う。",
  },
  {
    id: "stage25-curtain-shadow-boundary",
    text: "白いカーテンを開けると、影を見る。さらに箱を開ける夢だった。",
    expectedMotifIds: ["curtain", "shadow", "opening"],
    unexpectedMotifIds: ["hiding", "concealing"],
    note: "curtainは隠す行動ではなく、見せる範囲を調整する境界として扱う。",
  },
  {
    id: "stage25-nest-nature-care",
    text: "木の上の鳥の巣を見つけ、鳥を見る。大きな木を見る夢だった。",
    expectedMotifIds: ["nest", "bird", "tree"],
    note: "nestはhome-placeではなく、nature-sky上の保護と育成の小さな場として確認する。",
  },
  {
    id: "stage25-chalk-writing",
    text: "黒板にチョークで書く。文字を書くあとで消せる夢だった。",
    expectedMotifIds: ["chalk", "writing"],
    note: "chalkは恒久的な記録ではなく、仮に見える形へ出す道具として扱う。",
  },
  {
    id: "stage25-needle-string-knot-thread",
    text: "縫い針に糸を通す。糸をほどくあとで、ひもを結ぶ。固い結び目を見る夢だった。",
    expectedMotifIds: ["needle", "thread", "string", "knot"],
    unexpectedMotifIds: ["injury", "pain", "wound"],
    note: "needle / string / knot / threadを修復と結び目の境界で確認し、医療断定へ寄せない。",
  },
  {
    id: "stage25-paintbrush-brush-painting",
    text: "絵筆で描く。絵を描くあとで、ブラシで整える夢だった。",
    expectedMotifIds: ["paintbrush", "painting", "brush"],
    note: "paintbrushはbrushの手入れ道具ではなく、paintingへ細部を足す表現道具として確認する。",
  },
  {
    id: "stage25-ladder-stairs-climbing",
    text: "はしごを登る。階段を登るけれど、一時的な支えだと感じる夢だった。",
    expectedMotifIds: ["ladder", "stairs", "climbing"],
    note: "ladderはmovement補助だが、固定されたhome-place設備へ寄せない。",
  },
  {
    id: "stage25-lamp-lantern-candle",
    text: "机のランプを見る。ランプを灯すあとで、ランタンで照らす。ろうそくを灯す夢だった。",
    expectedMotifIds: ["lamp", "lantern", "candle"],
    note: "lamp / lantern / candleの粒度差を、日常の手元灯りと移動灯りと火の灯りで確認する。",
  },
  {
    id: "stage25-glove-comb-body-object",
    text: "手袋をはめる。手袋で手を守るあとで、鏡の前でくしで髪をとかす夢だった。",
    expectedMotifIds: ["glove", "comb", "hair"],
    unexpectedMotifIds: ["shoulder", "ankle"],
    note: "glove / combはbody-appearance補助のobjectとして扱い、shoulder / ankleへ近づけない。",
  },
];

export const stage25RepresentativeDreams: Stage25RepresentativeDream[] = [
  {
    id: "stage25-front-public-boundary",
    input: {
      text: "絵はがきを送る。駅前のベンチで休んでから、カーテンを開ける夢だった。",
      impression: "calm",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["postcard", "bench", "curtain"],
    selectedMotifIds: ["postcard", "bench", "curtain"],
    expectedQuestionIds: ["postcard-message", "bench-pause", "curtain-boundary"],
  },
  {
    id: "stage25-front-nature-small-object",
    input: {
      text: "鳥の巣を守り、道端の小石を拾って、赤いもみじを眺める夢だった。",
      impression: "nostalgic",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["nest", "pebble", "maple_leaf"],
    selectedMotifIds: ["nest", "pebble", "maple_leaf"],
    expectedQuestionIds: ["nest-state", "pebble-feel", "maple-leaf-change"],
  },
  {
    id: "stage25-back-repair-expression",
    input: {
      text: "縫い針に糸を通す。糸をほどく。絵筆で描くあとで、ひもを結ぶ。固い結び目を見る夢だった。",
      impression: "confused",
      clarity: "partial",
      recurring: false,
    },
    expectedMotifIds: ["needle", "thread", "paintbrush", "string", "knot"],
    selectedMotifIds: ["needle", "paintbrush", "string"],
    expectedQuestionIds: ["needle-repair", "paintbrush-expression", "string-knot"],
  },
  {
    id: "stage25-back-light-care",
    input: {
      text: "手袋をはめる。ランプを灯すあとで、鏡の前でくしをしまう夢だった。",
      impression: "uneasy",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["glove", "lamp", "comb", "mirror"],
    selectedMotifIds: ["glove", "lamp", "comb"],
    expectedQuestionIds: ["glove-distance", "lamp-light", "comb-care"],
  },
];
