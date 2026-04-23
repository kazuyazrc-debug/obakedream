import type { DreamInput } from "@/types/dream";

export type Stage35Fixture = {
  id: string;
  text: string;
  expectedMotifIds: string[];
  expectedTopSixMotifIds?: string[];
  expectedFirstMotifId?: string;
  unexpectedMotifIds?: string[];
  note: string;
};

export type Stage35RepresentativeDream = {
  id: string;
  input: DreamInput;
  expectedMotifIds: string[];
  selectedMotifIds: string[];
  expectedQuestionIds: string[];
};

export const stage35FrontHalfIds = [
  "pine_needle",
  "berry",
  "daisy",
  "waterweed",
  "driftwood",
  "rubber_stamp",
  "notepad",
  "sticky_note",
  "paper_cup",
  "file_tab",
] as const;

export const stage35BackHalfIds = [
  "pedestrian_bridge",
  "ticket_gate",
  "platform_sign",
  "pause_button",
  "status_light",
  "screen_corner",
  "name_tag",
  "paper_crane",
  "temple",
  "jawline",
] as const;

export const stage35ExtractionAuditCases: Stage35Fixture[] = [
  {
    id: "stage35-front-nature-small-details",
    text: "落ちた松葉を拾い、森のベリーを集め、白いデイジーを見る夢だった。",
    expectedMotifIds: ["pine_needle", "berry", "daisy"],
    note: "前半のnature候補をhome-placeへ寄せず、既存のtree / flower / seedとの差を確認する。",
  },
  {
    id: "stage35-front-water-nature-boundary",
    text: "川の水草が揺れていて、川辺に流木が流れてくる夢だった。",
    expectedMotifIds: ["waterweed", "driftwood", "water"],
    note: "water-weatherとnatureの境界を説明できるか確認する。",
  },
  {
    id: "stage35-front-office-record-tools",
    text: "ゴム印を押し、メモ帳に書き、黄色い付箋を貼る夢だった。",
    expectedMotifIds: ["rubber_stamp", "notepad", "sticky_note"],
    note: "object-recordを増やしつつ、communication本体へ寄せない。",
  },
  {
    id: "stage35-front-cup-file-tab",
    text: "紙コップで飲み、ファイルの見出しタブを色分けして分類する夢だった。",
    expectedMotifIds: ["paper_cup", "file_tab"],
    note: "一時的な器と分類目印の主役差を確認する。",
  },
  {
    id: "stage35-back-movement-station",
    text: "歩道橋を渡り、駅の改札口で止まり、ホーム案内表示を探す夢だった。",
    expectedMotifIds: ["pedestrian_bridge", "ticket_gate", "platform_sign", "station"],
    unexpectedMotifIds: ["car"],
    note: "movement候補がplatform_edge / lost_ticket / train / being_late / dead_endの境界を壊さないか確認する。",
  },
  {
    id: "stage35-back-digital-object",
    text: "一時停止ボタンを押し、状態ランプが点滅し、画面の隅に読み込みマークが出る夢だった。",
    expectedMotifIds: ["pause_button", "status_light", "screen_corner", "loading_icon"],
    unexpectedMotifIds: ["comment", "sns", "chat"],
    note: "progress_bar / loading_icon / monitorのdigital object境界を壊さないか確認する。",
  },
  {
    id: "stage35-back-name-paper-crane",
    text: "胸の名札を外し、机の上で白い折り鶴を折る夢だった。",
    expectedMotifIds: ["name_tag", "paper_crane"],
    note: "name_tagをrelationship拡張ではなくlabel寄り、paper_craneをfolding寄りのobjectとして扱う。",
  },
  {
    id: "stage35-back-body-appearance",
    text: "鏡に映るこめかみを見て、フェイスラインを整える夢だった。",
    expectedMotifIds: ["temple", "jawline", "mirror"],
    unexpectedMotifIds: ["injury", "scar"],
    note: "temple / jawlineを非診断・非断定のbody-appearanceとして扱う。",
  },
];

export const stage35RealDreamAuditCases: Stage35Fixture[] = [
  {
    id: "stage35-real-being-late",
    text: "スマホを見ると始業時間を2時間過ぎていて、走ろうとしても足が重くて前に進まない夢だった。",
    expectedMotifIds: ["being_late"],
    expectedTopSixMotifIds: ["being_late"],
    note: "遅刻夢のbeing_lateを実夢文監査として継続する。",
  },
  {
    id: "stage35-real-exam",
    text: "大学の教室で期末試験を受けているが、問題用紙の文字が読めず、回答欄に書けない夢だった。",
    expectedMotifIds: ["exam"],
    expectedTopSixMotifIds: ["exam"],
    note: "試験夢のexamを継続監査する。",
  },
  {
    id: "stage35-real-ex-partner",
    text: "学生時代に付き合っていた人と、今の家のリビングでコーヒーを飲んでいる夢だった。",
    expectedMotifIds: ["ex_partner"],
    expectedTopSixMotifIds: ["ex_partner"],
    note: "ex_partnerはrelationship抑制枠として追加候補と分けて扱う。",
  },
  {
    id: "stage35-real-work-mistake",
    text: "モニターに大量の未対応チケットが赤字で表示され、返信しようとするとキーボードのキーが全部外れる夢だった。",
    expectedMotifIds: ["making_mistake", "monitor", "keyboard"],
    expectedTopSixMotifIds: ["making_mistake", "monitor", "keyboard"],
    note: "仕事ミス夢でdigital object追加がmonitor / keyboardの主役を奪わないか確認する。",
  },
  {
    id: "stage35-real-chased",
    text: "夜の住宅街で後ろから足音がついてきて、走って角を曲がると行き止まりだった夢だった。",
    expectedMotifIds: ["being_chased", "footsteps", "dead_end"],
    expectedTopSixMotifIds: ["being_chased", "footsteps", "dead_end"],
    unexpectedMotifIds: ["car", "school"],
    note: "追跡夢のbeing_chased / footsteps / dead_end主役差を維持する。",
  },
  {
    id: "stage35-real-train-not-car",
    text: "電車に乗ろうとするとホームが伸び続けて改札にたどり着けない夢だった。",
    expectedMotifIds: ["train"],
    expectedTopSixMotifIds: ["train"],
    unexpectedMotifIds: ["car"],
    note: "電車 -> car抑制の副作用が戻っていないか確認する。",
  },
  {
    id: "stage35-real-car-still-works",
    text: "車に乗る夢だった。",
    expectedMotifIds: ["car"],
    expectedTopSixMotifIds: ["car"],
    note: "通常のcar夢ではcarが拾えることを確認する。",
  },
  {
    id: "stage35-real-hallway-not-school",
    text: "廊下の奥に見覚えのないドアがあり、開けると知らない部屋が広がっていた夢だった。",
    expectedMotifIds: ["hallway", "door"],
    expectedTopSixMotifIds: ["hallway"],
    unexpectedMotifIds: ["school"],
    note: "廊下 -> school抑制の副作用が戻っていないか確認する。",
  },
  {
    id: "stage35-real-school-hallway-still-works",
    text: "学校の廊下を歩く夢だった。",
    expectedMotifIds: ["school", "hallway"],
    expectedTopSixMotifIds: ["school", "hallway"],
    note: "学校文脈ではschool / hallwayが併存できることを確認する。",
  },
  {
    id: "stage35-real-casual-anger",
    text: "誰かにキレ散らかして、最後にブチギレる夢だった。",
    expectedMotifIds: ["fighting"],
    expectedTopSixMotifIds: ["fighting"],
    unexpectedMotifIds: ["comment", "sns", "chat"],
    note: "怒り口語はanger新規motif化せず、fightingの比較対象として維持する。",
  },
];

export const stage35RepresentativeDreams: Stage35RepresentativeDream[] = [
  {
    id: "stage35-front-nature",
    input: {
      text: "落ちた松葉を拾い、赤いベリーと白いデイジーを見る夢だった。",
      impression: "calm",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["pine_needle", "berry", "daisy"],
    selectedMotifIds: ["pine_needle", "berry", "daisy"],
    expectedQuestionIds: ["pine-needle-state", "berry-action", "daisy-scene"],
  },
  {
    id: "stage35-front-record",
    input: {
      text: "ゴム印を押し、メモ帳に書き、付箋を貼る夢だった。",
      impression: "confused",
      clarity: "partial",
      recurring: false,
    },
    expectedMotifIds: ["rubber_stamp", "notepad", "sticky_note"],
    selectedMotifIds: ["rubber_stamp", "notepad", "sticky_note"],
    expectedQuestionIds: ["rubber-stamp-mark", "notepad-use", "sticky-note-role"],
  },
  {
    id: "stage35-back-movement",
    input: {
      text: "歩道橋を渡り、改札口で止まり、ホーム案内表示を確認する夢だった。",
      impression: "uneasy",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["pedestrian_bridge", "ticket_gate", "platform_sign"],
    selectedMotifIds: ["pedestrian_bridge", "ticket_gate", "platform_sign"],
    expectedQuestionIds: ["pedestrian-bridge-cross", "ticket-gate-state", "platform-sign-info"],
  },
  {
    id: "stage35-back-digital-body",
    input: {
      text: "一時停止ボタンと状態ランプを見たあと、鏡でこめかみを確認する夢だった。",
      impression: "uneasy",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["pause_button", "status_light", "temple"],
    selectedMotifIds: ["pause_button", "status_light", "temple"],
    expectedQuestionIds: ["pause-button-choice", "status-light-color", "temple-touch"],
  },
];
