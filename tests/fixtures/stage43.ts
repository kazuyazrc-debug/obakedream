import type { DreamInput } from "@/types/dream";

export type Stage43Fixture = {
  id: string;
  text: string;
  expectedMotifIds: string[];
  expectedTopSixMotifIds?: string[];
  unexpectedMotifIds?: string[];
  note: string;
};

export type Stage43RepresentativeDream = {
  id: string;
  input: DreamInput;
  expectedMotifIds: string[];
  selectedMotifIds: string[];
  expectedQuestionIds: string[];
};

export const batch23MotifIds = [
  "teammate",
  "bully",
  "client",
  "old_friend",
  "childhood_friend",
  "leader",
  "subordinate",
  "shop_clerk",
  "guest",
  "rescuer",
] as const;

export const stage43ExtractionAuditCases: Stage43Fixture[] = [
  {
    id: "stage43-teammate",
    text: "チームメイトと協力していた。同じチームの仲間がいた。",
    expectedMotifIds: ["teammate"],
    unexpectedMotifIds: ["rival"],
    note: "teammate の基本抽出を確認する。",
  },
  {
    id: "stage43-bully",
    text: "いじめっ子が出てきた。嫌がらせされて追い詰められた。",
    expectedMotifIds: ["bully"],
    unexpectedMotifIds: ["rival"],
    note: "bully の基本抽出を確認し rival と区別できることを確認する。",
  },
  {
    id: "stage43-client",
    text: "取引先と話していた。クライアントに対応していた。",
    expectedMotifIds: ["client"],
    unexpectedMotifIds: ["customer"],
    note: "client の基本抽出を確認し customer と区別できることを確認する。",
  },
  {
    id: "stage43-old-friend",
    text: "旧友に会った。昔の友達と再会した。",
    expectedMotifIds: ["old_friend"],
    note: "old_friend の基本抽出を確認する。",
  },
  {
    id: "stage43-childhood-friend",
    text: "幼なじみと遊んでいた。幼馴染に会った。",
    expectedMotifIds: ["childhood_friend"],
    note: "childhood_friend の基本抽出を確認する。",
  },
  {
    id: "stage43-leader",
    text: "リーダーについていった。まとめ役が指示を出していた。",
    expectedMotifIds: ["leader"],
    unexpectedMotifIds: ["senior", "mentor"],
    note: "leader の基本抽出を確認する。",
  },
  {
    id: "stage43-subordinate",
    text: "部下に仕事を任せていた。部下から頼られた。",
    expectedMotifIds: ["subordinate"],
    unexpectedMotifIds: ["junior"],
    note: "subordinate の基本抽出を確認し junior と区別できることを確認する。",
  },
  {
    id: "stage43-shop-clerk",
    text: "店員さんに話しかけられた。お店の人に勧められた。",
    expectedMotifIds: ["shop_clerk"],
    unexpectedMotifIds: ["customer"],
    note: "shop_clerk の基本抽出を確認し customer と逆方向の役割を持つことを確認する。",
  },
  {
    id: "stage43-guest",
    text: "家に来客があった。誰かが家を訪ねてきた。",
    expectedMotifIds: ["guest"],
    note: "guest の基本抽出を確認する。",
  },
  {
    id: "stage43-rescuer",
    text: "誰かに助けてもらった。危ないところを救われた。",
    expectedMotifIds: ["rescuer"],
    note: "rescuer の基本抽出を確認する。",
  },
];

export const stage43RealDreamAuditCases: Stage43Fixture[] = [
  {
    id: "stage43-real-bully",
    text: "いじめっ子に追い詰められて逃げ場がなかった夢だった。",
    expectedMotifIds: ["bully"],
    expectedTopSixMotifIds: ["bully"],
    note: "いじめ夢の抽出精度を確認する。",
  },
  {
    id: "stage43-real-old-friend",
    text: "旧友に会った。昔の友人が出てきて久しぶりで少し気まずかった夢だった。",
    expectedMotifIds: ["old_friend"],
    expectedTopSixMotifIds: ["old_friend"],
    note: "旧友夢の抽出精度を確認する。",
  },
  {
    id: "stage43-real-rescuer",
    text: "危ない場所で誰かに助けてもらった夢だった。",
    expectedMotifIds: ["rescuer"],
    expectedTopSixMotifIds: ["rescuer"],
    note: "助けてくれる人夢の抽出精度を確認する。",
  },
  {
    id: "stage43-real-being-chased-regression",
    text: "夜道を歩いていると後ろから足音がついてきて逃げ続けた夢だった。",
    expectedMotifIds: ["being_chased"],
    expectedTopSixMotifIds: ["being_chased"],
    unexpectedMotifIds: ["bully", "teammate", "leader"],
    note: "追跡夢への batch-23 干渉がないことを確認する。",
  },
  {
    id: "stage43-real-school-regression",
    text: "卒業したはずなのに学校にいた夢だった。",
    expectedMotifIds: ["school"],
    expectedTopSixMotifIds: ["school"],
    unexpectedMotifIds: ["leader", "subordinate", "childhood_friend"],
    note: "学校夢への batch-23 干渉がないことを確認する。",
  },
];

export const stage43RepresentativeDreams: Stage43RepresentativeDream[] = [
  {
    id: "stage43-bully-dream",
    input: {
      text: "いじめっ子に意地悪をされて追い詰められた夢だった。",
      impression: "scary",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["bully"],
    selectedMotifIds: ["bully"],
    expectedQuestionIds: ["bully-impact"],
  },
  {
    id: "stage43-old-friend-dream",
    input: {
      text: "昔の友達と再会したが懐かしさの中に少し気まずさもあった。",
      impression: "nostalgic",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["old_friend"],
    selectedMotifIds: ["old_friend"],
    expectedQuestionIds: ["old-friend-tone"],
  },
  {
    id: "stage43-leader-teammate-dream",
    input: {
      text: "リーダーについていってチームメイトと協力して動いていた。",
      impression: "uneasy",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["leader", "teammate"],
    selectedMotifIds: ["teammate", "leader"],
    expectedQuestionIds: ["leader-pressure", "teammate-balance"],
  },
];
