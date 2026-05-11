import type { DreamInput } from "@/types/dream";

export type Stage57Fixture = {
  id: string;
  text: string;
  expectedMotifIds: string[];
  expectedTopSixMotifIds?: string[];
  unexpectedMotifIds?: string[];
  note: string;
};

export type Stage57RepresentativeDream = {
  id: string;
  input: DreamInput;
  expectedMotifIds: string[];
  selectedMotifIds: string[];
  expectedQuestionIds: string[];
};

export const batch30MotifIds = [
  "remote_control",
  "water_bottle",
  "toothbrush",
  "keyhole",
  "doormat",
  "trash_can",
  "refrigerator",
  "living_room",
  "bedroom",
  "garage",
  "closet",
  "receiving",
  "borrowing",
  "lending",
  "throwing_away",
  "rabbit",
  "frog",
  "turtle",
  "nurse",
  "grandparent",
] as const;

export const stage57ExtractionAuditCases: Stage57Fixture[] = [
  {
    id: "stage57-remote-control-television",
    text: "リビングでリモコンを押した。リモコンでテレビをつけた夢だった。",
    expectedMotifIds: ["remote_control", "television"],
    expectedTopSixMotifIds: ["remote_control"],
    note: "remote_control should be primary for explicit remote operation scenes.",
  },
  {
    id: "stage57-water-bottle-travel",
    text: "旅先で水筒をかばんに入れた。水筒の水を飲んで安心した。",
    expectedMotifIds: ["water_bottle", "bag", "travel"],
    expectedTopSixMotifIds: ["water_bottle"],
    note: "water_bottle should be primary over generic water when the object is explicit.",
  },
  {
    id: "stage57-keyhole-entrance",
    text: "玄関の鍵穴を覗いていた。鍵穴に鍵を差したけれど少し迷った。",
    expectedMotifIds: ["keyhole", "key", "entrance"],
    expectedTopSixMotifIds: ["keyhole"],
    note: "keyhole should stay distinct from key/door/entrance.",
  },
  {
    id: "stage57-bedroom-rest",
    text: "寝室のベッドで休んだ。枕元を見て、やっと落ち着いた。",
    expectedMotifIds: ["bedroom", "pillow"],
    expectedTopSixMotifIds: ["bedroom"],
    note: "bedroom should represent the place, with pillow as context.",
  },
  {
    id: "stage57-closet-clothes-hiding",
    text: "クローゼットを開けて服を選んだあと、クローゼットの中に隠れた。",
    expectedMotifIds: ["closet", "clothes"],
    expectedTopSixMotifIds: ["closet"],
    note: "closet should coexist with clothes/hiding without suppressing them.",
  },
  {
    id: "stage57-receiving-gift",
    text: "誰かから贈り物を受け取った。手紙を受け取ったような感覚もあった。",
    expectedMotifIds: ["receiving", "gift", "letter"],
    expectedTopSixMotifIds: ["receiving"],
    note: "receiving should be primary for the action of accepting something.",
  },
  {
    id: "stage57-frog-rain-pond",
    text: "雨の中でカエルを見た。池でカエルが跳んでいた。",
    expectedMotifIds: ["frog", "water"],
    expectedTopSixMotifIds: ["frog"],
    note: "frog should be primary over rain/pond context.",
  },
  {
    id: "stage57-nurse-hospital",
    text: "病院で看護師に手当てされた。看護師がそばで見守っていた。",
    expectedMotifIds: ["nurse", "hospital"],
    expectedTopSixMotifIds: ["nurse"],
    note: "nurse should be a care role, not a diagnostic medical claim.",
  },
];

export const stage57RepresentativeDreams: Stage57RepresentativeDream[] = [
  {
    id: "stage57-throwing-away-trash",
    input: {
      text: "部屋の古い物を捨てた。ゴミ箱に捨てたあと、少しすっきりした。",
      impression: "calm",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["throwing_away", "trash_can"],
    selectedMotifIds: ["trash_can", "throwing_away"],
    expectedQuestionIds: ["throwing-away-choice", "trash-can-use"],
  },
  {
    id: "stage57-borrow-lend",
    input: {
      text: "友人から物を借りたあと、別の人に大切なものを貸した。返す約束が少し気になった。",
      impression: "uneasy",
      clarity: "partial",
      recurring: false,
    },
    expectedMotifIds: ["borrowing", "lending"],
    selectedMotifIds: ["borrowing", "lending"],
    expectedQuestionIds: ["borrowing-obligation", "lending-boundary"],
  },
  {
    id: "stage57-grandparent-home",
    input: {
      text: "昔の家で祖父母に会った。祖母と話して、見守られている感じがした。",
      impression: "nostalgic",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["grandparent", "family", "childhood_home"],
    selectedMotifIds: ["family", "grandparent"],
    expectedQuestionIds: ["grandparent-memory"],
  },
];
