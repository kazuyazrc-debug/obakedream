import type { DreamInput } from "@/types/dream";

export type Stage31Fixture = {
  id: string;
  text: string;
  expectedMotifIds: string[];
  expectedTopSixMotifIds?: string[];
  expectedFirstMotifId?: string;
  unexpectedMotifIds?: string[];
  note: string;
};

export type Stage31RepresentativeDream = {
  id: string;
  input: DreamInput;
  expectedMotifIds: string[];
  selectedMotifIds: string[];
  expectedQuestionIds: string[];
};

export const stage31FrontHalfIds = [
  "clover",
  "dandelion",
  "sprout",
  "bark",
  "vine",
  "glue",
  "tape",
  "label",
  "folder",
  "receipt",
] as const;

export const stage31BackHalfIds = [
  "magnifying_glass",
  "clipboard",
  "stapler",
  "calendar_page",
  "traffic_light",
  "crosswalk",
  "detour",
  "turn_back",
  "fingernail",
  "cheek",
] as const;

export const stage31ExtractionAuditCases: Stage31Fixture[] = [
  {
    id: "stage31-front-nature-small-growth",
    text: "草地でクローバーを見つけ、タンポポの綿毛を飛ばし、新芽を見る夢だった。",
    expectedMotifIds: ["clover", "dandelion", "sprout"],
    note: "身近な自然をhome-placeへ寄せず、nature-sky / generic-specificとして拾えるか確認する。",
  },
  {
    id: "stage31-front-bark-vine-boundary",
    text: "森で樹皮に触れ、絡まるつる草をほどく夢だった。",
    expectedMotifIds: ["bark", "vine"],
    unexpectedMotifIds: ["hiding"],
    note: "樹皮は非診断の跡、つる草は絡まりとして扱い、concealing / hidingへ寄せすぎない。",
  },
  {
    id: "stage31-front-glue-tape-label",
    text: "のりで破れた紙を貼り、テープで箱を閉じ、ラベルに名前を書く夢だった。",
    expectedMotifIds: ["glue", "tape", "label", "torn_paper"],
    note: "貼る・留める・分類する道具をobject-recordとして拾えるか確認する。",
  },
  {
    id: "stage31-front-folder-receipt",
    text: "フォルダーに書類をしまい、財布のレシートを見返す夢だった。",
    expectedMotifIds: ["folder", "receipt", "wallet"],
    note: "書類整理と支払い記録の主役差を確認する。",
  },
  {
    id: "stage31-back-office-tools",
    text: "虫眼鏡で細かい文字を見て、クリップボードの書類を確認し、ホチキスで留める夢だった。",
    expectedMotifIds: ["magnifying_glass", "clipboard", "stapler"],
    note: "確認・固定・書類整理の道具を、communication本体へ寄せずに扱う。",
  },
  {
    id: "stage31-back-calendar-crossing",
    text: "カレンダーをめくり、赤信号で止まり、横断歩道で待つ夢だった。",
    expectedMotifIds: ["calendar_page", "traffic_light", "crosswalk"],
    note: "日付の確認と移動の停止を、being_late / waitingの補助として拾えるか確認する。",
  },
  {
    id: "stage31-back-detour-turn-back",
    text: "行き止まりで回り道をして、途中で引き返す夢だった。",
    expectedMotifIds: ["dead_end", "detour", "turn_back"],
    note: "dead_endの主役差を壊さず、回り道と引き返す行為を補助として扱う。",
  },
  {
    id: "stage31-back-body-detail",
    text: "鏡で手の爪を見て、ほっぺが赤くなる夢だった。",
    expectedMotifIds: ["fingernail", "cheek", "mirror"],
    unexpectedMotifIds: ["injury", "scar"],
    note: "body-appearanceの細部を非診断・非断定で扱い、care-riskへ寄せない。",
  },
];

export const stage31RealDreamAuditCases: Stage31Fixture[] = [
  {
    id: "stage31-real-being-late",
    text: "スマホを見ると始業時間を2時間過ぎていて、走ろうとしても足が重くて前に進まない夢だった。",
    expectedMotifIds: ["being_late"],
    expectedTopSixMotifIds: ["being_late"],
    note: "遅刻夢の実夢文でbeing_lateが上位6件に入る状態を維持する。",
  },
  {
    id: "stage31-real-exam",
    text: "期末試験で問題用紙の文字が読めず、回答欄に書こうとしてもインクが出ない夢だった。",
    expectedMotifIds: ["exam", "answer_sheet", "ink"],
    expectedTopSixMotifIds: ["exam", "answer_sheet"],
    note: "試験夢でexam / answer_sheetの主役差を維持する。",
  },
  {
    id: "stage31-real-ex-partner",
    text: "学生時代に付き合っていた人と、なぜか今の家のリビングでコーヒーを飲む夢だった。",
    expectedMotifIds: ["ex_partner"],
    expectedTopSixMotifIds: ["ex_partner"],
    note: "元恋人夢の口語寄り表現をex_partnerで拾い、relationshipを広げすぎない。",
  },
  {
    id: "stage31-real-work-mistake",
    text: "モニターに大量の未対応チケットが赤字で表示され、長文のクレームに返信しようとするとキーボードのキーが全部外れる夢だった。",
    expectedMotifIds: ["making_mistake", "monitor", "keyboard"],
    expectedTopSixMotifIds: ["making_mistake", "monitor", "keyboard"],
    note: "仕事ミス夢でkeyboard / monitorがmaking_mistakeを押し出さないか確認する。",
  },
  {
    id: "stage31-real-chased",
    text: "夜道で後ろから足音がついてきて、走って角を曲がると行き止まりだった。",
    expectedMotifIds: ["being_chased", "footsteps", "dead_end"],
    expectedTopSixMotifIds: ["being_chased", "footsteps", "dead_end"],
    unexpectedMotifIds: ["car", "school"],
    note: "追跡夢でbeing_chasedを維持し、footsteps / dead_endが補助として残るか確認する。",
  },
  {
    id: "stage31-real-train-not-car",
    text: "電車に乗ろうとするとホームが伸び続けて改札にたどり着けない夢だった。",
    expectedMotifIds: ["train"],
    expectedTopSixMotifIds: ["train"],
    unexpectedMotifIds: ["car"],
    note: "電車からcarが混ざらない副作用確認を維持する。",
  },
  {
    id: "stage31-real-car-still-works",
    text: "車に乗る夢だった。",
    expectedMotifIds: ["car"],
    expectedTopSixMotifIds: ["car"],
    note: "単独の車夢ではcarが拾えることを確認する。",
  },
  {
    id: "stage31-real-hallway-not-school",
    text: "廊下の奥に見覚えのないドアがあり、開けると知らない部屋が広がる夢だった。",
    expectedMotifIds: ["hallway", "door"],
    expectedTopSixMotifIds: ["hallway"],
    unexpectedMotifIds: ["school"],
    note: "廊下単独でschoolへ主役が入れ替わらないことを確認する。",
  },
  {
    id: "stage31-real-school-hallway-still-works",
    text: "学校の廊下を歩く夢だった。",
    expectedMotifIds: ["school", "hallway"],
    expectedTopSixMotifIds: ["school", "hallway"],
    note: "学校文脈の廊下ではschool / hallwayが併存できることを確認する。",
  },
  {
    id: "stage31-real-casual-anger",
    text: "誰かにキレ散らかして、最後にブチギレる夢だった。",
    expectedMotifIds: ["fighting"],
    expectedTopSixMotifIds: ["fighting"],
    unexpectedMotifIds: ["comment", "sns", "chat"],
    note: "怒り口語はStage31でもanger新規motif化せず、既存fightingの比較対象として維持する。",
  },
];

export const stage31RepresentativeDreams: Stage31RepresentativeDream[] = [
  {
    id: "stage31-front-nature",
    input: {
      text: "草地でクローバーを見つけ、タンポポの綿毛を飛ばし、新芽を眺める夢だった。",
      impression: "calm",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["clover", "dandelion", "sprout"],
    selectedMotifIds: ["clover", "dandelion", "sprout"],
    expectedQuestionIds: ["clover-find", "dandelion-state", "sprout-growth"],
  },
  {
    id: "stage31-front-record-tools",
    input: {
      text: "のりで貼り、テープで留め、ラベルに名前を書く夢だった。",
      impression: "confused",
      clarity: "partial",
      recurring: false,
    },
    expectedMotifIds: ["glue", "tape", "label"],
    selectedMotifIds: ["glue", "tape", "label"],
    expectedQuestionIds: ["glue-use", "tape-role", "label-name"],
  },
  {
    id: "stage31-back-office-check",
    input: {
      text: "虫眼鏡で細かい文字を見て、クリップボードを持ち、ホチキスで書類を留める夢だった。",
      impression: "uneasy",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["magnifying_glass", "clipboard", "stapler"],
    selectedMotifIds: ["magnifying_glass", "clipboard", "stapler"],
    expectedQuestionIds: ["magnifying-glass-focus", "clipboard-check", "stapler-bind"],
  },
  {
    id: "stage31-back-movement-choice",
    input: {
      text: "赤信号で止まり、横断歩道で待ってから、回り道をする夢だった。",
      impression: "uneasy",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["traffic_light", "crosswalk", "detour"],
    selectedMotifIds: ["traffic_light", "crosswalk", "detour"],
    expectedQuestionIds: ["traffic-light-color", "crosswalk-timing", "detour-reason"],
  },
];
