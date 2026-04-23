import type { DreamInput } from "@/types/dream";

export type Stage33Fixture = {
  id: string;
  text: string;
  expectedMotifIds: string[];
  expectedTopSixMotifIds?: string[];
  expectedFirstMotifId?: string;
  unexpectedMotifIds?: string[];
  note: string;
};

export type Stage33RepresentativeDream = {
  id: string;
  input: DreamInput;
  expectedMotifIds: string[];
  selectedMotifIds: string[];
  expectedQuestionIds: string[];
};

export const stage33FrontHalfIds = [
  "root",
  "bud",
  "wildflower",
  "lichen",
  "reed",
  "rubber_band",
  "binder",
  "index_card",
  "coupon",
  "pencil_case",
] as const;

export const stage33BackHalfIds = [
  "sidewalk",
  "escalator",
  "platform_edge",
  "lost_ticket",
  "checklist",
  "progress_bar",
  "loading_icon",
  "eyebrow",
  "chin",
  "wristwatch",
] as const;

export const stage33ExtractionAuditCases: Stage33Fixture[] = [
  {
    id: "stage33-front-root-bud-wildflower",
    text: "木の根っこをたどっていると、つぼみと道端の野花を見つける夢だった。",
    expectedMotifIds: ["root", "bud", "wildflower"],
    note: "nature-skyを前半で補強しつつ、home-placeへ寄せずに小さな自然物として拾えるか確認する。",
  },
  {
    id: "stage33-front-lichen-reed-boundary",
    text: "苔むした石に地衣類がついていて、水辺の葦が揺れる夢だった。",
    expectedMotifIds: ["lichen", "reed", "moss"],
    note: "moss / stone / waterと近いが、地衣類と葦の主役差をgeneric-specificとして説明できるか確認する。",
  },
  {
    id: "stage33-front-record-tools",
    text: "輪ゴムで紙を束ね、バインダーに挟み、単語カードをめくる夢だった。",
    expectedMotifIds: ["rubber_band", "binder", "index_card"],
    note: "object-recordの補強として、一時固定、順序整理、小分け記憶の差を確認する。",
  },
  {
    id: "stage33-front-coupon-pencil-case",
    text: "クーポンを財布に入れ、筆箱から鉛筆と消しゴムを出す夢だった。",
    expectedMotifIds: ["coupon", "pencil_case", "pencil", "eraser"],
    note: "買い物の紙片と文具準備を、communicationやhome-placeへ寄せずobject-recordとして拾う。",
  },
  {
    id: "stage33-back-movement-platform",
    text: "歩道を歩き、エスカレーターで上がり、ホームの端で電車を待つ夢だった。",
    expectedMotifIds: ["sidewalk", "escalator", "platform_edge", "train"],
    unexpectedMotifIds: ["car"],
    note: "movement追加がtraffic_light / crosswalk / dead_end境界と、電車 -> car抑制を壊さないか確認する。",
  },
  {
    id: "stage33-back-lost-ticket-checklist",
    text: "なくした切符を探しながら、チェックリストで持ち物を確認する夢だった。",
    expectedMotifIds: ["lost_ticket", "checklist", "train"],
    note: "lost_ticketを追加候補として扱い、実夢文改善候補のbeing_lateとは混ぜすぎない。",
  },
  {
    id: "stage33-back-digital-waiting",
    text: "モニターの進捗バーが止まり、読み込み中の表示を待つ夢だった。",
    expectedMotifIds: ["progress_bar", "loading_icon", "monitor"],
    unexpectedMotifIds: ["comment", "sns", "chat"],
    note: "monitorに近いがcommunication本体へ寄りすぎないことを確認する。",
  },
  {
    id: "stage33-back-body-appearance",
    text: "鏡で眉毛とあごを見て、手元の腕時計を確認する夢だった。",
    expectedMotifIds: ["eyebrow", "chin", "wristwatch", "mirror"],
    unexpectedMotifIds: ["injury", "scar"],
    note: "body-appearanceは非診断・非断定を維持し、scar系へ寄せない。",
  },
];

export const stage33RealDreamAuditCases: Stage33Fixture[] = [
  {
    id: "stage33-real-being-late",
    text: "スマホを見ると始業時間を2時間過ぎていて、走ろうとしても足が重くて前に進まない夢だった。",
    expectedMotifIds: ["being_late"],
    expectedTopSixMotifIds: ["being_late"],
    note: "遅刻夢のbeing_lateを、Stage33追加候補とは別枠の実夢文監査として比較可能に残す。",
  },
  {
    id: "stage33-real-exam",
    text: "大学の教室で期末試験を受けているが、問題用紙の文字が読めず、回答欄に書けない夢だった。",
    expectedMotifIds: ["exam"],
    expectedTopSixMotifIds: ["exam"],
    note: "試験夢のexam / answer_sheetを継続監査する。",
  },
  {
    id: "stage33-real-ex-partner",
    text: "学生時代に付き合っていた人と、今の家のリビングでコーヒーを飲んでいる夢だった。",
    expectedMotifIds: ["ex_partner"],
    expectedTopSixMotifIds: ["ex_partner"],
    note: "ex_partnerはrelationship抑制枠として、追加候補と混ぜずに監査する。",
  },
  {
    id: "stage33-real-work-mistake",
    text: "モニターに大量の未対応チケットが赤字で表示され、返信しようとするとキーボードのキーが全部外れる夢だった。",
    expectedMotifIds: ["making_mistake", "monitor", "keyboard"],
    expectedTopSixMotifIds: ["making_mistake", "monitor", "keyboard"],
    note: "仕事ミス夢でmonitor / keyboardがcommunication過密へ寄りすぎないか確認する。",
  },
  {
    id: "stage33-real-chased",
    text: "夜の住宅街で後ろから足音がついてきて、走って角を曲がると行き止まりだった夢だった。",
    expectedMotifIds: ["being_chased", "footsteps", "dead_end"],
    expectedTopSixMotifIds: ["being_chased", "footsteps", "dead_end"],
    unexpectedMotifIds: ["car", "school"],
    note: "追跡夢のbeing_chased / footsteps / dead_end主役差を維持する。",
  },
  {
    id: "stage33-real-train-not-car",
    text: "電車に乗ろうとするとホームが伸び続けて改札にたどり着けない夢だった。",
    expectedMotifIds: ["train"],
    expectedTopSixMotifIds: ["train"],
    unexpectedMotifIds: ["car"],
    note: "電車 -> car抑制の副作用が戻っていないか確認する。",
  },
  {
    id: "stage33-real-car-still-works",
    text: "車に乗る夢だった。",
    expectedMotifIds: ["car"],
    expectedTopSixMotifIds: ["car"],
    note: "通常のcar夢が壊れていないか確認する。",
  },
  {
    id: "stage33-real-hallway-not-school",
    text: "廊下の奥に見覚えのないドアがあり、開けると知らない部屋が広がっていた夢だった。",
    expectedMotifIds: ["hallway", "door"],
    expectedTopSixMotifIds: ["hallway"],
    unexpectedMotifIds: ["school"],
    note: "廊下 -> school抑制の副作用が戻っていないか確認する。",
  },
  {
    id: "stage33-real-school-hallway-still-works",
    text: "学校の廊下を歩く夢だった。",
    expectedMotifIds: ["school", "hallway"],
    expectedTopSixMotifIds: ["school", "hallway"],
    note: "学校文脈の廊下ではschool / hallwayが併存できることを確認する。",
  },
  {
    id: "stage33-real-casual-anger",
    text: "誰かにキレ散らかして、最後にブチギレる夢だった。",
    expectedMotifIds: ["fighting"],
    expectedTopSixMotifIds: ["fighting"],
    unexpectedMotifIds: ["comment", "sns", "chat"],
    note: "怒り口語はanger新規motif化せず、Stage33ではfighting最小対応の比較対象として残す。",
  },
];

export const stage33RepresentativeDreams: Stage33RepresentativeDream[] = [
  {
    id: "stage33-front-nature",
    input: {
      text: "木の根っこを見て、つぼみと野花を見つける夢だった。",
      impression: "calm",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["root", "bud", "wildflower"],
    selectedMotifIds: ["root", "bud", "wildflower"],
    expectedQuestionIds: ["root-support", "bud-opening", "wildflower-place"],
  },
  {
    id: "stage33-front-object-record",
    input: {
      text: "輪ゴムで束ね、バインダーを開き、単語カードをめくる夢だった。",
      impression: "confused",
      clarity: "partial",
      recurring: false,
    },
    expectedMotifIds: ["rubber_band", "binder", "index_card"],
    selectedMotifIds: ["rubber_band", "binder", "index_card"],
    expectedQuestionIds: ["rubber-band-use", "binder-content", "index-card-study"],
  },
  {
    id: "stage33-back-movement",
    input: {
      text: "歩道を歩いてエスカレーターに乗り、ホームの端で電車を待つ夢だった。",
      impression: "uneasy",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["sidewalk", "escalator", "platform_edge"],
    selectedMotifIds: ["sidewalk", "escalator", "platform_edge"],
    expectedQuestionIds: ["sidewalk-route", "escalator-direction", "platform-edge-distance"],
  },
  {
    id: "stage33-back-digital-body",
    input: {
      text: "進捗バーと読み込み中の表示を見たあと、鏡で眉毛を確認する夢だった。",
      impression: "uneasy",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["progress_bar", "loading_icon", "eyebrow"],
    selectedMotifIds: ["progress_bar", "loading_icon", "eyebrow"],
    expectedQuestionIds: ["progress-bar-state", "loading-icon-wait", "eyebrow-expression"],
  },
];
