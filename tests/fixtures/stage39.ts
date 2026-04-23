import type { DreamInput } from "@/types/dream";

export type Stage39Fixture = {
  id: string;
  text: string;
  expectedMotifIds: string[];
  expectedTopSixMotifIds?: string[];
  expectedFirstMotifId?: string;
  unexpectedMotifIds?: string[];
  note: string;
};

export type Stage39RepresentativeDream = {
  id: string;
  input: DreamInput;
  expectedMotifIds: string[];
  selectedMotifIds: string[];
  expectedQuestionIds: string[];
};

export const stage39FrontHalfIds = [
  "camellia",
  "ivy",
  "firefly",
  "lily_pad",
  "sparrow",
  "binder_clip",
  "sketchbook",
  "stamp_sheet",
  "hourglass",
  "paperweight",
] as const;

export const stage39BackHalfIds = [
  "station_map",
  "route_sign",
  "search_bar",
  "signal_bar",
  "volume_slider",
  "collarbone",
  "flinching",
  "tiptoeing",
  "holding_back",
  "double_checking",
] as const;

export const stage39ExtractionAuditCases: Stage39Fixture[] = [
  {
    id: "stage39-front-nature",
    text: "庭の椿の花を見ていると、壁をのぼるつたが木にからまり、夜の蛍の光が池の睡蓮の葉の上で揺れていた。そこへ小さな雀が飛んできた。",
    expectedMotifIds: ["camellia", "ivy", "firefly", "lily_pad", "sparrow"],
    note: "front half の nature 群を restrained cluster のまま抽出できることを確認する。",
  },
  {
    id: "stage39-front-objects",
    text: "机の上で書類を留めるクリップを外し、描きかけのスケッチブックを開き、未使用の切手シートを眺めていた。落ちる砂時計の横に机の文鎮が置いてあった。",
    expectedMotifIds: ["binder_clip", "sketchbook", "stamp_sheet", "hourglass", "paperweight"],
    unexpectedMotifIds: ["comment", "sns", "chat"],
    note: "front half の object-record 群が communication に寄りすぎないことを確認する。",
  },
  {
    id: "stage39-back-station-boundary",
    text: "駅案内図を見るために立ち止まり、行き先の標識を探す。ホームへ向かう前に、どの電車に乗るか確かめていた。",
    expectedMotifIds: ["station_map", "route_sign", "train"],
    note: "駅系 movement 境界を崩さないことを確認する。",
  },
  {
    id: "stage39-back-digital-boundary",
    text: "モニターの画面で検索バーに文字を入れると、画面の電波表示が揺れながら、音量スライダーを上下していた。",
    expectedMotifIds: ["search_bar", "signal_bar", "volume_slider", "monitor"],
    unexpectedMotifIds: ["comment", "sns", "chat"],
    note: "digital object 境界を保ち、object-record として扱えることを確認する。",
  },
  {
    id: "stage39-back-body-action",
    text: "鏡の前で首元の鎖骨が見えるのに気づき、思わずひるむ。廊下で何かを避けるように迷いながら踏みとどまる。入った部屋の番号を確認し直す。足音を立てずに歩くようにして進んでいた。",
    expectedMotifIds: ["collarbone", "flinching", "tiptoeing", "holding_back", "double_checking"],
    unexpectedMotifIds: ["injury", "scar"],
    note: "body-appearance の非診断性と emotion-action の主役差を確認する。",
  },
];

export const stage39RealDreamAuditCases: Stage39Fixture[] = [
  {
    id: "stage39-real-being-late",
    text: "スマホを見ると始業時間を2時間過ぎていて、会社に遅刻しそうなのに急いで走ろうとしても足が重くて前に進めない夢だった。",
    expectedMotifIds: ["being_late"],
    expectedTopSixMotifIds: ["being_late"],
    note: "遅刻夢の比較対象を継続する。",
  },
  {
    id: "stage39-real-exam",
    text: "大学の試験で問題用紙を開いているが、回答欄の文字が全部読めない夢だった。",
    expectedMotifIds: ["exam"],
    expectedTopSixMotifIds: ["exam"],
    note: "試験夢の比較対象を継続する。",
  },
  {
    id: "stage39-real-ex-partner",
    text: "昔付き合っていた人と部屋で自然に話している夢だった。",
    expectedMotifIds: ["ex_partner"],
    expectedTopSixMotifIds: ["ex_partner"],
    note: "元恋人夢の比較対象を継続する。",
  },
  {
    id: "stage39-real-work-mistake",
    text: "チャットサポートのモニターに大量の未対応チケットが表示され、キーボードで返そうとしても操作がうまくいかない夢だった。",
    expectedMotifIds: ["making_mistake", "monitor", "keyboard"],
    expectedTopSixMotifIds: ["making_mistake", "monitor", "keyboard"],
    note: "仕事ミス夢と digital object の比較対象を継続する。",
  },
  {
    id: "stage39-real-being-chased",
    text: "夜道を歩いていると後ろから足音がついてきて、角を曲がると行き止まりだった夢だった。",
    expectedMotifIds: ["being_chased", "footsteps", "dead_end"],
    expectedTopSixMotifIds: ["being_chased", "footsteps", "dead_end"],
    unexpectedMotifIds: ["car", "school"],
    note: "追跡夢の比較対象を継続する。",
  },
  {
    id: "stage39-real-train-not-car",
    text: "電車に乗ろうとしたのにホームで迷ってしまう夢だった。",
    expectedMotifIds: ["train"],
    expectedTopSixMotifIds: ["train"],
    unexpectedMotifIds: ["car"],
    note: "電車 -> car 抑制の副作用確認を継続する。",
  },
  {
    id: "stage39-real-school-hallway",
    text: "学校の廊下を歩いていて、教室の気配が遠くにあった夢だった。",
    expectedMotifIds: ["school", "hallway"],
    expectedTopSixMotifIds: ["school", "hallway"],
    note: "廊下 -> school 抑制の副作用確認を継続する。",
  },
  {
    id: "stage39-real-casual-anger",
    text: "急にキレる夢だった。あとからキレ散らかした自分に言い返せず、ブチギレた声だけが残った。",
    expectedMotifIds: ["fighting"],
    expectedTopSixMotifIds: ["fighting"],
    unexpectedMotifIds: ["comment", "sns", "chat"],
    note: "怒り口語は Stage39 でも fighting 比較対象のまま維持する。",
  },
];

export const stage39RepresentativeDreams: Stage39RepresentativeDream[] = [
  {
    id: "stage39-front-nature",
    input: {
      text: "庭の椿の花を見ていると、壁をのぼるつたが木にからまり、夜の蛍の光が池の睡蓮の葉の上で揺れていた。",
      impression: "calm",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["camellia", "ivy", "firefly"],
    selectedMotifIds: ["camellia", "ivy", "firefly"],
    expectedQuestionIds: ["camellia-scene", "ivy-motion", "firefly-light"],
  },
  {
    id: "stage39-front-objects",
    input: {
      text: "机の上で書類を留めるクリップを外し、描きかけのスケッチブックを開き、未使用の切手シートを眺めていた。落ちる砂時計の横に机の文鎮が置いてあった。",
      impression: "confused",
      clarity: "partial",
      recurring: false,
    },
    expectedMotifIds: ["binder_clip", "sketchbook", "stamp_sheet"],
    selectedMotifIds: ["binder_clip", "sketchbook", "stamp_sheet"],
    expectedQuestionIds: ["binder-clip-use", "sketchbook-state", "stamp-sheet-use"],
  },
  {
    id: "stage39-back-station",
    input: {
      text: "駅案内図を見るために立ち止まり、行き先の標識を探しながら、どの電車へ向かうかを確かめていた。",
      impression: "uneasy",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["station_map", "route_sign"],
    selectedMotifIds: ["station_map", "route_sign"],
    expectedQuestionIds: ["station-map-scene", "route-sign-scene"],
  },
  {
    id: "stage39-back-digital-body",
    input: {
      text: "画面の検索バーを開いて電波表示を見直し、音量スライダーを上下していたあと、鏡の前で首元の鎖骨が見えるのに気づいた。",
      impression: "uneasy",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["search_bar", "signal_bar", "volume_slider", "collarbone"],
    selectedMotifIds: ["search_bar", "signal_bar", "volume_slider"],
    expectedQuestionIds: ["search-bar-scene", "signal-bar-state", "volume-slider-scene"],
  },
];
