import type { DreamInput } from "@/types/dream";

export type Stage21Fixture = {
  id: string;
  text: string;
  expectedMotifIds: string[];
  unexpectedMotifIds?: string[];
  note: string;
};

export type Stage21RepresentativeDream = {
  id: string;
  input: DreamInput;
  expectedMotifIds: string[];
  selectedMotifIds: string[];
  expectedQuestionIds: string[];
};

export const stage21FrontHalfIds = [
  "seed",
  "soap",
  "pillow",
  "rope",
  "painting",
  "button",
  "towel",
  "coin",
  "folding",
  "climbing",
] as const;

export const stage21BackHalfIds = [
  "brush",
  "scarf",
  "forehead",
  "back",
  "scar",
  "carrying",
  "singing",
  "reading",
  "washing",
  "tying",
] as const;

export const stage21ExtractionAuditCases: Stage21Fixture[] = [
  {
    id: "stage21-seed-painting-front",
    text: "庭で小さな種を植えたあと、部屋で古い絵を見る夢だった。",
    expectedMotifIds: ["seed", "painting"],
    note: "前半nature/object候補が単独抽出されることを確認する。",
  },
  {
    id: "stage21-soap-towel-washing-boundary",
    text: "石けんで手を洗い、タオルで拭く夢だった。",
    expectedMotifIds: ["soap", "washing", "towel"],
    unexpectedMotifIds: ["bathroom"],
    note: "soap / towel / washingをbathroom候補ではなくobject/actionとして扱う。",
  },
  {
    id: "stage21-pillow-blanket-sleep",
    text: "柔らかい枕を抱えて、毛布にくるまって眠る夢だった。",
    expectedMotifIds: ["pillow", "blanket"],
    unexpectedMotifIds: ["bedroom"],
    note: "pillowはhome-placeではなく、休息のobjectとして扱う。",
  },
  {
    id: "stage21-rope-climbing-button",
    text: "ロープにつかまって階段を登り、最後にボタンを押す夢だった。",
    expectedMotifIds: ["rope", "climbing", "stairs", "button"],
    note: "rope / climbing / buttonをmovementとobjectの境界で確認する。",
  },
  {
    id: "stage21-coin-folding-front",
    text: "小銭を数えて財布にしまい、服をたたむ夢だった。",
    expectedMotifIds: ["coin", "wallet", "folding", "clothes"],
    note: "coinとfoldingをobject/actionとして抽出する。",
  },
  {
    id: "stage21-brush-scarf-body-object",
    text: "鏡の前でブラシで髪をとかし、風の中でマフラーを巻く夢だった。",
    expectedMotifIds: ["brush", "hair", "mirror", "scarf", "wind"],
    note: "brush / scarfはbody-appearanceを補助するobjectとして扱う。",
  },
  {
    id: "stage21-forehead-back-body",
    text: "額に手を当て、重い背中をさすってもらう夢だった。",
    expectedMotifIds: ["forehead", "back"],
    note: "forehead / backを非診断のbody-appearanceとして扱う。",
  },
  {
    id: "stage21-scar-injury-past-boundary",
    text: "昔の怪我の傷跡を見て、過去のことを思い出す夢だった。",
    expectedMotifIds: ["scar", "injury", "past"],
    note: "scarはinjuryそのものではなく、過去に残った印象として扱う。",
  },
  {
    id: "stage21-scar-body-appearance-main",
    text: "鏡で体の傷跡を見て、隠さずにそっと触れる夢だった。",
    expectedMotifIds: ["scar", "mirror"],
    unexpectedMotifIds: ["crying", "tears"],
    note: "scarのbody-appearance主役を確認し、涙や泣く行動へ寄せない。",
  },
  {
    id: "stage21-carrying-tying-boundary",
    text: "かばんを運び、ほどけたロープを結び直す夢だった。",
    expectedMotifIds: ["carrying", "bag", "rope", "tying"],
    unexpectedMotifIds: ["concealing", "hiding"],
    note: "carrying / tyingを隠す・隠れる行動へ寄せない。",
  },
  {
    id: "stage21-singing-not-communication",
    text: "口ずさみながら深呼吸し、踊るように歩く夢だった。",
    expectedMotifIds: ["singing", "breath"],
    unexpectedMotifIds: ["comment", "chat", "sns"],
    note: "singingはcommunication本体ではなく感情表現のactionとして扱う。",
  },
  {
    id: "stage21-reading-writing-book",
    text: "本を読み返し、ノートに大事なことを書く夢だった。",
    expectedMotifIds: ["reading", "notebook", "writing"],
    note: "reading / writingを記録と理解のactionとして確認する。",
  },
];

export const stage21RepresentativeDreams: Stage21RepresentativeDream[] = [
  {
    id: "stage21-front-small-start",
    input: {
      text: "小さな種を植えてから、古い絵を見て、硬貨を財布にしまう夢だった。",
      impression: "calm",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["seed", "painting", "coin", "wallet"],
    selectedMotifIds: ["seed", "painting", "coin"],
    expectedQuestionIds: ["coin-value", "seed-growth", "painting-impression"],
  },
  {
    id: "stage21-front-clean-rest",
    input: {
      text: "石けんで手を洗い、タオルで拭いてから、枕を整えて休む夢だった。",
      impression: "calm",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["soap", "washing", "towel", "pillow"],
    selectedMotifIds: ["soap", "pillow", "towel"],
    expectedQuestionIds: ["soap-use", "pillow-rest", "towel-feeling"],
  },
  {
    id: "stage21-back-body-scar",
    input: {
      text: "鏡で額と傷跡を見て、背中をさすってもらう夢だった。",
      impression: "uneasy",
      clarity: "partial",
      recurring: false,
    },
    expectedMotifIds: ["forehead", "scar", "mirror", "back"],
    selectedMotifIds: ["forehead", "back", "scar"],
    expectedQuestionIds: ["scar-memory", "forehead-sense", "back-burden"],
  },
  {
    id: "stage21-back-action-expression",
    input: {
      text: "荷物を運んで、ロープを結び直しながら、小さく歌って本を読む夢だった。",
      impression: "confused",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["carrying", "rope", "tying", "singing", "reading", "book"],
    selectedMotifIds: ["carrying", "reading", "tying"],
    expectedQuestionIds: ["reading-content", "carrying-load", "tying-knot"],
  },
];
