import type { DreamInput } from "@/types/dream";

export type Stage45Fixture = {
  id: string;
  text: string;
  expectedMotifIds: string[];
  expectedTopSixMotifIds?: string[];
  unexpectedMotifIds?: string[];
  note: string;
};

export type Stage45RepresentativeDream = {
  id: string;
  input: DreamInput;
  expectedMotifIds: string[];
  selectedMotifIds: string[];
  expectedQuestionIds: string[];
};

export const batch24MotifIds = [
  "judge",
  "witness",
  "captain",
  "former_classmate",
  "former_coworker",
  "online_friend",
  "police_officer",
  "admirer",
  "driver",
  "landlord",
  "mediator",
] as const;

export const stage45ExtractionAuditCases: Stage45Fixture[] = [
  {
    id: "stage45-judge",
    text: "審判者に判定された。誰かに判定される場にいた。",
    expectedMotifIds: ["judge"],
    unexpectedMotifIds: ["teacher"],
    note: "judge の基本抽出を確認する。",
  },
  {
    id: "stage45-witness",
    text: "目撃者がいた。黙って見ている人がいた。",
    expectedMotifIds: ["witness"],
    unexpectedMotifIds: ["stranger"],
    note: "witness の基本抽出を確認する。",
  },
  {
    id: "stage45-captain",
    text: "キャプテンについていった。主将が指示を出していた。",
    expectedMotifIds: ["captain"],
    unexpectedMotifIds: ["leader"],
    note: "captain の基本抽出を確認し leader と区別できることを確認する。",
  },
  {
    id: "stage45-former-classmate",
    text: "元同級生と再会した。昔のクラスメイトと比べていた。",
    expectedMotifIds: ["former_classmate"],
    note: "former_classmate の基本抽出を確認する。",
  },
  {
    id: "stage45-former-coworker",
    text: "元同僚と再会した。退職した同僚に会った。",
    expectedMotifIds: ["former_coworker"],
    note: "former_coworker の基本抽出を確認する。",
  },
  {
    id: "stage45-online-friend",
    text: "ネットで仲良くしている人が出てきた。オンラインの知人に会った。",
    expectedMotifIds: ["online_friend"],
    unexpectedMotifIds: ["stranger"],
    note: "online_friend の基本抽出を確認する。",
  },
  {
    id: "stage45-police-officer",
    text: "警察官に止められた。お巡りさんに声をかけられた。",
    expectedMotifIds: ["police_officer"],
    note: "police_officer の基本抽出を確認する。",
  },
  {
    id: "stage45-admirer",
    text: "好意を向けてくる人がいた。告白されて戸惑った。",
    expectedMotifIds: ["admirer"],
    unexpectedMotifIds: ["crush", "partner"],
    note: "admirer の基本抽出を確認し crush / partner と区別できることを確認する。",
  },
  {
    id: "stage45-driver",
    text: "誰かの運転する車に乗っていた。運転手に任せていた。",
    expectedMotifIds: ["driver"],
    note: "driver の基本抽出を確認する。",
  },
  {
    id: "stage45-landlord",
    text: "大家さんと話していた。大家に注意された。",
    expectedMotifIds: ["landlord"],
    note: "landlord の基本抽出を確認する。",
  },
  {
    id: "stage45-mediator",
    text: "仲介者が出てきた。誰かが間に入ってくれた。",
    expectedMotifIds: ["mediator"],
    unexpectedMotifIds: ["guide", "mentor"],
    note: "mediator の基本抽出を確認する。",
  },
];

export const stage45RealDreamAuditCases: Stage45Fixture[] = [
  {
    id: "stage45-real-police",
    text: "警察官に疑われていて取り締まられそうだった夢だった。",
    expectedMotifIds: ["police_officer"],
    expectedTopSixMotifIds: ["police_officer"],
    note: "警察官夢の抽出精度を確認する。",
  },
  {
    id: "stage45-real-admirer",
    text: "好意を向けてくる人がいて告白されて戸惑った夢だった。",
    expectedMotifIds: ["admirer"],
    expectedTopSixMotifIds: ["admirer"],
    unexpectedMotifIds: ["crush"],
    note: "好意を向けられる夢の抽出精度を確認する。",
  },
  {
    id: "stage45-real-driver-danger",
    text: "誰かの運転する車に乗っていたら危ない運転で怖かった夢だった。",
    expectedMotifIds: ["driver"],
    expectedTopSixMotifIds: ["driver"],
    note: "運転手夢の抽出精度を確認する。",
  },
  {
    id: "stage45-real-being-chased-regression",
    text: "夜道を歩いていると後ろから足音がついてきて逃げ続けた夢だった。",
    expectedMotifIds: ["being_chased"],
    expectedTopSixMotifIds: ["being_chased"],
    unexpectedMotifIds: ["judge", "witness", "police_officer"],
    note: "追跡夢への batch-24 干渉がないことを確認する。",
  },
  {
    id: "stage45-real-workplace-regression",
    text: "職場で仕事のミスをして怒られた夢だった。",
    expectedMotifIds: ["workplace"],
    unexpectedMotifIds: ["judge", "police_officer"],
    note: "職場夢への batch-24 干渉がないことを確認する。",
  },
];

export const stage45RepresentativeDreams: Stage45RepresentativeDream[] = [
  {
    id: "stage45-police-dream",
    input: {
      text: "警察官に疑われていた。警察官が厳しく管理している感じがした。",
      impression: "uneasy",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["police_officer"],
    selectedMotifIds: ["police_officer"],
    expectedQuestionIds: ["police-tone"],
  },
  {
    id: "stage45-admirer-dream",
    input: {
      text: "好意を向けてくる人がいて告白されて戸惑った夢だった。",
      impression: "confused",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["admirer"],
    selectedMotifIds: ["admirer"],
    expectedQuestionIds: ["admirer-reaction"],
  },
  {
    id: "stage45-former-classmate-coworker-dream",
    input: {
      text: "元同級生と元同僚の両方が出てきて、昔のことを振り返っていた夢だった。",
      impression: "nostalgic",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["former_classmate", "former_coworker"],
    selectedMotifIds: ["former_classmate", "former_coworker"],
    expectedQuestionIds: ["former-classmate-feeling", "former-coworker-tone"],
  },
];
