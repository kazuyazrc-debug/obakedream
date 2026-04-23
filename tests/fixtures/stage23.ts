import type { DreamInput } from "@/types/dream";

export type Stage23Fixture = {
  id: string;
  text: string;
  expectedMotifIds: string[];
  unexpectedMotifIds?: string[];
  note: string;
};

export type Stage23RepresentativeDream = {
  id: string;
  input: DreamInput;
  expectedMotifIds: string[];
  selectedMotifIds: string[];
  expectedQuestionIds: string[];
};

export const stage23FrontHalfIds = [
  "feather",
  "ribbon",
  "lantern",
  "drawer",
  "thread",
  "stamp",
  "clay",
  "shell",
  "bead",
  "spoon",
] as const;

export const stage23BackHalfIds = [
  "blank_page",
  "necklace",
  "shoulder",
  "wiping",
  "wrapping",
  "unpacking",
  "knot",
  "sleeve",
  "ankle",
  "carving",
] as const;

export const stage23ExtractionAuditCases: Stage23Fixture[] = [
  {
    id: "stage23-feather-lantern-front",
    text: "白い羽根を拾い、ランタンで暗い道を照らす夢だった。",
    expectedMotifIds: ["feather", "lantern"],
    note: "feather / lanternをnature-object境界で抽出し、暗さのcontext helperも説明可能にする。",
  },
  {
    id: "stage23-drawer-stamp-front",
    text: "机の引き出しを開けて、古い切手を封筒に貼る夢だった。",
    expectedMotifIds: ["drawer", "stamp", "envelope"],
    unexpectedMotifIds: ["storage_room", "house"],
    note: "drawerをhome-place/storage本体ではなく、手元のobject-recordとして扱う。",
  },
  {
    id: "stage23-ribbon-thread-bead",
    text: "細い糸をたどってリボンを結び、小さなビーズを通す夢だった。",
    expectedMotifIds: ["thread", "ribbon", "bead"],
    unexpectedMotifIds: ["concealing", "hiding"],
    note: "ribbon / thread / beadをconcealing / hidingへ寄せず、結ぶ・飾る・小さな価値として扱う。",
  },
  {
    id: "stage23-shell-spoon-front",
    text: "海辺で貝殻を拾い、食卓のスプーンで少しずつすくう夢だった。",
    expectedMotifIds: ["shell", "spoon"],
    note: "shellは海辺の記憶、spoonは少量で受け取るobjectとして抽出する。",
  },
  {
    id: "stage23-blank-page-boundary",
    text: "白紙のノートを見てから、白紙に書く夢だった。",
    expectedMotifIds: ["blank_page", "notebook", "writing"],
    unexpectedMotifIds: ["reading"],
    note: "blank_pageをwriting / notebookと併走させつつ、reading主役へ寄せすぎない。",
  },
  {
    id: "stage23-shoulder-non-diagnostic",
    text: "肩に手を置かれて、荷物を肩で持つ夢だった。",
    expectedMotifIds: ["shoulder"],
    unexpectedMotifIds: ["injury", "pain", "wound"],
    note: "shoulderを非診断の役割・支えとして扱う。",
  },
  {
    id: "stage23-ankle-non-diagnostic",
    text: "足首を確かめてから、靴を履いて道を歩く夢だった。",
    expectedMotifIds: ["ankle"],
    unexpectedMotifIds: ["injury", "pain", "wound"],
    note: "ankleを非診断の足元・歩幅として扱う。",
  },
  {
    id: "stage23-wiping-sleeve-cleaning",
    text: "タオルで濡れたものを拭き、洗ったあとに袖を直す夢だった。",
    expectedMotifIds: ["wiping", "towel", "sleeve"],
    unexpectedMotifIds: ["bathroom"],
    note: "wiping / sleeveをbathroomやhome-placeへ寄せず、action/body-appearance補助として扱う。",
  },
  {
    id: "stage23-wrapping-knot-boundary",
    text: "贈り物を包み、リボンで包み直して結び目をほどく夢だった。",
    expectedMotifIds: ["wrapping", "gift", "ribbon", "knot"],
    unexpectedMotifIds: ["concealing", "hiding"],
    note: "wrapping / knotを隠す行動ではなく、渡す準備と結び目として確認する。",
  },
  {
    id: "stage23-unpacking-clay-carving",
    text: "旅先で荷ほどきをして、かばんから粘土を出して少し彫る夢だった。",
    expectedMotifIds: ["unpacking", "bag", "clay", "carving"],
    unexpectedMotifIds: ["home", "house"],
    note: "unpacking / clay / carvingを移動後の整理と形作りとして扱う。",
  },
];

export const stage23RepresentativeDreams: Stage23RepresentativeDream[] = [
  {
    id: "stage23-front-light-and-storage",
    input: {
      text: "白い羽根が舞い、ランタンで机の引き出しを照らす夢だった。",
      impression: "calm",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["feather", "lantern", "drawer"],
    selectedMotifIds: ["feather", "lantern", "drawer"],
    expectedQuestionIds: ["lantern-light", "drawer-content", "feather-motion"],
  },
  {
    id: "stage23-front-small-values",
    input: {
      text: "リボンを結び、細い糸をたどって、小さなビーズを集める夢だった。",
      impression: "happy",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["ribbon", "thread", "bead"],
    selectedMotifIds: ["ribbon", "thread", "bead"],
    expectedQuestionIds: ["ribbon-state", "thread-tension", "bead-pattern"],
  },
  {
    id: "stage23-back-blank-wrapping",
    input: {
      text: "白紙に書いてから、贈り物を包み、結び目をほどく夢だった。",
      impression: "confused",
      clarity: "partial",
      recurring: false,
    },
    expectedMotifIds: ["blank_page", "wrapping", "gift", "knot"],
    selectedMotifIds: ["blank_page", "wrapping", "knot"],
    expectedQuestionIds: ["blank-page-use", "wrapping-intent", "knot-state"],
  },
  {
    id: "stage23-back-body-action",
    input: {
      text: "肩に手を置かれて足首を確かめ、タオルで濡れた袖を拭く夢だった。",
      impression: "uneasy",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["shoulder", "ankle", "wiping", "sleeve"],
    selectedMotifIds: ["shoulder", "wiping", "ankle"],
    expectedQuestionIds: ["wiping-target", "shoulder-burden", "ankle-stability"],
  },
];
