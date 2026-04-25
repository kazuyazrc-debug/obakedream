import type { DreamInput } from "@/types/dream";

export type Stage41Fixture = {
  id: string;
  text: string;
  expectedMotifIds: string[];
  expectedTopSixMotifIds?: string[];
  expectedFirstMotifId?: string;
  unexpectedMotifIds?: string[];
  note: string;
};

export type Stage41RepresentativeDream = {
  id: string;
  input: DreamInput;
  expectedMotifIds: string[];
  selectedMotifIds: string[];
  expectedQuestionIds: string[];
};

export const batch22MotifIds = [
  "partner",
  "rival",
  "senior",
  "junior",
  "relative",
  "roommate",
  "customer",
  "guide",
  "ancestor",
  "mentor",
] as const;

export const stage41ExtractionAuditCases: Stage41Fixture[] = [
  {
    id: "stage41-partner-warm",
    text: "恋人と一緒に歩いていた。穏やかな空気が続いていた。",
    expectedMotifIds: ["partner"],
    unexpectedMotifIds: ["ex_partner"],
    note: "partner alias が ex_partner に引かれないことを確認する。",
  },
  {
    id: "stage41-rival-competing",
    text: "ライバルが現れて競争相手と競い合っていた。負けたくない気持ちが強かった。",
    expectedMotifIds: ["rival"],
    note: "rival の代表的なフレーズで抽出できることを確認する。",
  },
  {
    id: "stage41-senior-at-work",
    text: "職場の先輩に呼ばれて話しかけられた。先輩についていった。",
    expectedMotifIds: ["senior"],
    unexpectedMotifIds: ["teacher"],
    note: "senior が teacher に引かれないことを確認する。",
  },
  {
    id: "stage41-junior-care",
    text: "後輩に頼られてその面倒を見ていた。後輩が出てきて気にしていた。",
    expectedMotifIds: ["junior"],
    unexpectedMotifIds: ["child"],
    note: "junior が child に引かれないことを確認する。",
  },
  {
    id: "stage41-relative-gathering",
    text: "親戚と会っていた。いとこが出てきた。叔母と話していた。",
    expectedMotifIds: ["relative"],
    note: "relative の代表フレーズで抽出できることを確認する。",
  },
  {
    id: "stage41-ancestor-grave",
    text: "先祖が出てきた。ご先祖様に会ったような感覚があった。",
    expectedMotifIds: ["ancestor"],
    unexpectedMotifIds: ["death"],
    note: "ancestor が death に引かれないことを確認する。",
  },
  {
    id: "stage41-guide-unknown-place",
    text: "知らない場所へ案内されていた。誰かが道を示してくれて案内されていた。",
    expectedMotifIds: ["guide"],
    note: "guide の抽出を確認する。",
  },
  {
    id: "stage41-mentor-advice",
    text: "メンターのような人に会った。助言をくれる人がいて人生の先輩に教わった。",
    expectedMotifIds: ["mentor"],
    unexpectedMotifIds: ["teacher"],
    note: "mentor が teacher に引かれないことを確認する。",
  },
];

export const stage41RealDreamAuditCases: Stage41Fixture[] = [
  {
    id: "stage41-real-partner-distance",
    text: "彼氏と話していたのに距離があって冷たい感じがした夢だった。",
    expectedMotifIds: ["partner"],
    expectedTopSixMotifIds: ["partner"],
    unexpectedMotifIds: ["ex_partner"],
    note: "パートナー夢が ex_partner に引かれないことを確認する。",
  },
  {
    id: "stage41-real-rival-chase",
    text: "ライバルと争っていて競い合っていた夢だった。負けたくない気持ちが強く残った。",
    expectedMotifIds: ["rival"],
    expectedTopSixMotifIds: ["rival"],
    note: "ライバル夢の抽出精度を確認する。",
  },
  {
    id: "stage41-real-customer-angry",
    text: "お客さんが怒っていて客に怒られた夢だった。お客様の対応をしていた。",
    expectedMotifIds: ["customer"],
    expectedTopSixMotifIds: ["customer"],
    note: "クレーム対応夢の抽出を確認する。",
  },
  {
    id: "stage41-real-ancestor-presence",
    text: "先祖の気配を感じた夢だった。亡くなった先祖が現れたような感じだった。",
    expectedMotifIds: ["ancestor"],
    expectedTopSixMotifIds: ["ancestor"],
    note: "先祖夢の抽出を確認する。",
  },
  {
    id: "stage41-real-being-chased-regression",
    text: "夜道を歩いていると後ろから足音がついてきて逃げ続けた夢だった。",
    expectedMotifIds: ["being_chased"],
    expectedTopSixMotifIds: ["being_chased"],
    unexpectedMotifIds: ["partner", "rival", "senior"],
    note: "追跡夢への batch-22 干渉がないことを確認する。",
  },
  {
    id: "stage41-real-school-regression",
    text: "卒業したはずなのに学校にいた夢だった。",
    expectedMotifIds: ["school"],
    expectedTopSixMotifIds: ["school"],
    unexpectedMotifIds: ["senior", "junior"],
    note: "学校夢への batch-22 干渉がないことを確認する。",
  },
];

export const stage41RepresentativeDreams: Stage41RepresentativeDream[] = [
  {
    id: "stage41-partner-dream",
    input: {
      text: "恋人と一緒に歩いていたのに距離があった。",
      impression: "uneasy",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["partner"],
    selectedMotifIds: ["partner"],
    expectedQuestionIds: ["partner-distance"],
  },
  {
    id: "stage41-rival-dream",
    input: {
      text: "ライバルと競争していて負けたくない気持ちが強かった。",
      impression: "uneasy",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["rival"],
    selectedMotifIds: ["rival"],
    expectedQuestionIds: ["rival-feeling"],
  },
  {
    id: "stage41-ancestor-guide-dream",
    input: {
      text: "先祖が出てきた。知らない場所へ案内された。誰かが道を示してくれた。",
      impression: "calm",
      clarity: "partial",
      recurring: false,
    },
    expectedMotifIds: ["ancestor", "guide"],
    selectedMotifIds: ["guide", "ancestor"],
    expectedQuestionIds: ["ancestor-presence", "guide-trust"],
  },
];
