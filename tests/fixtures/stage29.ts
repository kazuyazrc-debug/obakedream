import type { DreamInput } from "@/types/dream";

export type Stage29Fixture = {
  id: string;
  text: string;
  expectedMotifIds: string[];
  expectedTopSixMotifIds?: string[];
  expectedFirstMotifId?: string;
  unexpectedMotifIds?: string[];
  note: string;
};

export type Stage29RepresentativeDream = {
  id: string;
  input: DreamInput;
  expectedMotifIds: string[];
  selectedMotifIds: string[];
  expectedQuestionIds: string[];
};

export const stage29FrontHalfIds = [
  "twig",
  "moss",
  "petal",
  "raindrop",
  "eraser",
  "ruler",
  "paperclip",
  "coaster",
  "handkerchief",
  "bell",
] as const;

export const stage29BackHalfIds = [
  "backpack",
  "ink",
  "torn_paper",
  "dust",
  "stain",
  "answer_sheet",
  "keyboard",
  "monitor",
  "footsteps",
  "dead_end",
] as const;

export const stage29ExtractionAuditCases: Stage29Fixture[] = [
  {
    id: "stage29-nature-small-signs",
    text: "森で小枝を拾い、苔むした石を見て、花びらが舞う夢だった。",
    expectedMotifIds: ["twig", "moss", "petal"],
    note: "自然の小さな手がかりをhome-placeへ寄せず、nature-sky / generic-specificとして拾えるか確認する。",
  },
  {
    id: "stage29-raindrop-handkerchief-care",
    text: "窓に雨粒がつき、ハンカチで涙を拭く夢だった。",
    expectedMotifIds: ["raindrop", "handkerchief", "tears"],
    unexpectedMotifIds: ["hiding"],
    note: "雨粒とハンカチを感情ケアとして扱い、concealing / hidingへ寄せすぎない。",
  },
  {
    id: "stage29-eraser-ruler-paperclip-record",
    text: "消しゴムで文字を消し、定規で線を引き、クリップで紙をまとめる夢だった。",
    expectedMotifIds: ["eraser", "ruler", "paperclip"],
    note: "修正・測定・仮止めのobject-recordをwriting / notebookの補助として拾えるか確認する。",
  },
  {
    id: "stage29-coaster-bell-object",
    text: "コースターにカップを置くと、小さな鈴が鳴る夢だった。",
    expectedMotifIds: ["coaster", "bell"],
    note: "日用品の受け皿と小さな合図をcommunication本体へ寄せすぎず扱う。",
  },
  {
    id: "stage29-backpack-ink-torn-paper",
    text: "リュックを背負い、インクがにじみ、破れた紙を拾う夢だった。",
    expectedMotifIds: ["backpack", "ink", "torn_paper"],
    note: "荷物・記録・破れた紙の主役差を維持し、travel / writingへ補助接続する。",
  },
  {
    id: "stage29-dust-stain-cleanup",
    text: "机のほこりを払い、服のしみを洗う夢だった。",
    expectedMotifIds: ["dust", "stain"],
    note: "ほこりとしみを掃除・洗濯の対象として拾い、医療・診断寄りへずらさない。",
  },
  {
    id: "stage29-answer-sheet-keyboard-monitor",
    text: "答案用紙の回答欄に書き、モニターを見ながらキーボードで入力する夢だった。",
    expectedMotifIds: ["answer_sheet", "keyboard", "monitor"],
    note: "試験文脈と仕事入力文脈を混ぜすぎず、道具単位で拾えるか確認する。",
  },
  {
    id: "stage29-footsteps-dead-end-chase",
    text: "後ろから足音がついてきて、角を曲がると行き止まりだった。",
    expectedMotifIds: ["footsteps", "dead_end", "being_chased"],
    note: "追跡夢の見えない気配と閉じた進路を、being_chasedの補助として拾えるか確認する。",
  },
];

export const stage29RealDreamAuditCases: Stage29Fixture[] = [
  {
    id: "stage29-real-being-late",
    text: "スマホを見ると始業時間を2時間過ぎていて、走ろうとしても足が重くて前に進まない夢だった。",
    expectedMotifIds: ["being_late"],
    expectedTopSixMotifIds: ["being_late"],
    note: "遅刻夢の実夢文でbeing_lateが上位6件に入るか確認する。",
  },
  {
    id: "stage29-real-exam",
    text: "期末試験で問題用紙の文字が読めず、回答欄に書こうとしてもインクが出ない夢だった。",
    expectedMotifIds: ["exam", "answer_sheet", "ink"],
    expectedTopSixMotifIds: ["exam", "answer_sheet"],
    note: "試験夢でexamとanswer_sheetが主役候補として残るか確認する。",
  },
  {
    id: "stage29-real-ex-partner",
    text: "学生時代に付き合っていた人と、なぜか今の家のリビングでコーヒーを飲む夢だった。",
    expectedMotifIds: ["ex_partner"],
    expectedTopSixMotifIds: ["ex_partner"],
    note: "元恋人夢の口語寄り表現をex_partnerで拾い、relationshipを広げすぎない。",
  },
  {
    id: "stage29-real-work-mistake",
    text: "モニターに大量の未対応チケットが赤字で表示され、長文のクレームに返信しようとするとキーボードのキーが全部外れる夢だった。",
    expectedMotifIds: ["making_mistake", "monitor", "keyboard"],
    expectedTopSixMotifIds: ["making_mistake", "monitor", "keyboard"],
    note: "仕事ミス夢は新規motif追加ではなくmaking_mistakeとStage29道具で比較可能にする。",
  },
  {
    id: "stage29-real-chased",
    text: "夜道で後ろから足音がついてきて、走って角を曲がると行き止まりだった。",
    expectedMotifIds: ["being_chased", "footsteps", "dead_end"],
    expectedTopSixMotifIds: ["being_chased", "footsteps", "dead_end"],
    unexpectedMotifIds: ["car", "school"],
    note: "追跡夢の未抽出をbeing_chased / footsteps / dead_endで比較可能にし、car / school誤反応を避ける。",
  },
  {
    id: "stage29-real-train-not-car",
    text: "電車に乗ろうとするとホームが伸び続けて改札にたどり着けない夢だった。",
    expectedMotifIds: ["train"],
    expectedTopSixMotifIds: ["train"],
    unexpectedMotifIds: ["car"],
    note: "電車の中の車だけでcarへ誤反応しないことを確認する。",
  },
  {
    id: "stage29-real-hallway-not-school",
    text: "廊下の奥に見覚えのないドアがあり、開けると知らない部屋が広がる夢だった。",
    expectedMotifIds: ["hallway", "door"],
    expectedTopSixMotifIds: ["hallway"],
    unexpectedMotifIds: ["school"],
    note: "廊下単独でschoolへ主役が入れ替わらないことを確認する。",
  },
  {
    id: "stage29-real-casual-anger",
    text: "誰かにブチギレる夢だった。",
    expectedMotifIds: ["fighting"],
    expectedTopSixMotifIds: ["fighting"],
    unexpectedMotifIds: ["comment", "sns", "chat"],
    note: "怒り口語はStage29ではanger新規motif化せず、既存fightingの最小aliasで比較する。",
  },
];

export const stage29RepresentativeDreams: Stage29RepresentativeDream[] = [
  {
    id: "stage29-front-nature",
    input: {
      text: "森で小枝を拾い、苔むした石を見て、花びらが舞う夢だった。",
      impression: "calm",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["twig", "moss", "petal"],
    selectedMotifIds: ["twig", "moss", "petal"],
    expectedQuestionIds: ["twig-state", "moss-surface", "petal-motion"],
  },
  {
    id: "stage29-front-record",
    input: {
      text: "消しゴムで消して、定規で線を引き、クリップで紙をまとめる夢だった。",
      impression: "confused",
      clarity: "partial",
      recurring: false,
    },
    expectedMotifIds: ["eraser", "ruler", "paperclip"],
    selectedMotifIds: ["eraser", "ruler", "paperclip"],
    expectedQuestionIds: ["eraser-use", "ruler-measure", "paperclip-bind"],
  },
  {
    id: "stage29-back-work-record",
    input: {
      text: "答案用紙に書こうとして、モニターを見ながらキーボードを打つ夢だった。",
      impression: "uneasy",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["answer_sheet", "keyboard", "monitor"],
    selectedMotifIds: ["answer_sheet", "keyboard", "monitor"],
    expectedQuestionIds: ["answer-sheet-blank", "keyboard-input", "monitor-display"],
  },
  {
    id: "stage29-back-chase-boundary",
    input: {
      text: "後ろから足音が聞こえ、走って角を曲がると行き止まりだった。",
      impression: "scary",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["footsteps", "dead_end"],
    selectedMotifIds: ["footsteps", "dead_end"],
    expectedQuestionIds: ["footsteps-distance", "dead-end-choice"],
  },
];
