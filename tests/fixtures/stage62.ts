import type { DreamInput } from "@/types/dream";

export type Stage62ExtractionAuditCase = {
  id: string;
  text: string;
  expectedMotifIds: string[];
  expectedTopSixMotifIds?: string[];
  note: string;
};

export type Stage62RepresentativeDream = {
  id: string;
  input: DreamInput;
  expectedMotifIds: string[];
  selectedMotifIds: string[];
  expectedQuestionIds: string[];
};

export const batch31MotifIds = [
  "microwave",
  "kettle",
  "laundry_basket",
  "charging_cable",
  "shampoo_bottle",
  "bus_stop",
  "bakery",
  "deer",
  "squirrel",
  "returning",
  "mirror_cabinet",
  "post_office",
  "playground",
  "buying",
  "paying",
  "asking",
  "answering",
  "bee",
  "cousin",
  "coach",
] as const;

export const stage62ExtractionAuditCases: Stage62ExtractionAuditCase[] = [
  {
    id: "stage62-microwave-kitchen",
    text: "台所で電子レンジを開けて、料理を温めて待っていた。",
    expectedMotifIds: ["microwave", "kitchen"],
    expectedTopSixMotifIds: ["microwave"],
    note: "microwave should be extracted for explicit electronic range scenes.",
  },
  {
    id: "stage62-kettle-water",
    text: "やかんで湯を沸かし、台所で水を注いだ。",
    expectedMotifIds: ["kettle", "water"],
    expectedTopSixMotifIds: ["kettle"],
    note: "kettle should coexist with water/kitchen without becoming generic water.",
  },
  {
    id: "stage62-laundry-basket-clothes",
    text: "洗濯かごに服を入れて、洗濯物を片付けていた。",
    expectedMotifIds: ["laundry_basket", "clothes"],
    expectedTopSixMotifIds: ["laundry_basket"],
    note: "laundry_basket should cover the container before generic tidying.",
  },
  {
    id: "stage62-charging-cable-smartphone",
    text: "スマホに充電ケーブルをつないだが、充電コードを探していた。",
    expectedMotifIds: ["charging_cable", "smartphone"],
    expectedTopSixMotifIds: ["charging_cable"],
    note: "charging_cable should remain distinct from smartphone/charging.",
  },
  {
    id: "stage62-bus-stop-waiting",
    text: "雨のバス停でバスを待っていた。道沿いの停留所だった。",
    expectedMotifIds: ["bus_stop", "bus"],
    expectedTopSixMotifIds: ["bus_stop"],
    note: "bus_stop should be visible for explicit waiting-at-stop scenes.",
  },
  {
    id: "stage62-mirror-cabinet-makeup",
    text: "鏡台の前で化粧して、髪を整えていた。",
    expectedMotifIds: ["mirror_cabinet", "makeup", "mirror", "hair"],
    expectedTopSixMotifIds: ["mirror_cabinet"],
    note: "mirror_cabinet should be primary over mirror/makeup context.",
  },
  {
    id: "stage62-buying-paying",
    text: "店で欲しいものを買い、財布から支払った。",
    expectedMotifIds: ["buying", "paying", "wallet"],
    expectedTopSixMotifIds: ["buying", "paying"],
    note: "buying and paying should coexist as separate action steps.",
  },
  {
    id: "stage62-cousin-coach",
    text: "昔の家でいとこと話し、その後コーチに練習を教わった。",
    expectedMotifIds: ["cousin", "coach"],
    expectedTopSixMotifIds: ["cousin", "coach"],
    note: "cousin and coach should remain narrow person-role motifs.",
  },
];

export const stage62RepresentativeDreams: Stage62RepresentativeDream[] = [
  {
    id: "stage62-post-office-letter",
    input: {
      text: "郵便局で手紙を出し、窓口で返事を待っていた。",
      impression: "uneasy",
      clarity: "partial",
      recurring: false,
    },
    expectedMotifIds: ["post_office", "letter"],
    selectedMotifIds: ["letter", "post_office"],
    expectedQuestionIds: ["letter-message", "post-office-purpose"],
  },
  {
    id: "stage62-playground-family",
    input: {
      text: "公園の遊び場で子どもを見守っていた。少し懐かしい気持ちだった。",
      impression: "nostalgic",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["playground", "park", "child"],
    selectedMotifIds: ["park", "playground"],
    expectedQuestionIds: ["park-mood", "playground-mood"],
  },
  {
    id: "stage62-bee-flower",
    input: {
      text: "庭の花のそばで蜂が飛んでいた。近づきすぎないように見ていた。",
      impression: "uneasy",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["bee"],
    selectedMotifIds: ["bee"],
    expectedQuestionIds: ["bee-distance"],
  },
];
