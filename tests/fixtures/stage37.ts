import type { DreamInput } from "@/types/dream";

export type Stage37Fixture = {
  id: string;
  text: string;
  expectedMotifIds: string[];
  expectedTopSixMotifIds?: string[];
  expectedFirstMotifId?: string;
  unexpectedMotifIds?: string[];
  note: string;
};

export type Stage37RepresentativeDream = {
  id: string;
  input: DreamInput;
  expectedMotifIds: string[];
  selectedMotifIds: string[];
  expectedQuestionIds: string[];
};

export const stage37FrontHalfIds = [
  "willow",
  "lotus",
  "butterfly",
  "dragonfly",
  "owl",
  "paper_bag",
  "coin_purse",
  "corkboard",
  "measuring_tape",
  "ink_pad",
] as const;

export const stage37BackHalfIds = [
  "ticket_machine",
  "departure_board",
  "platform_clock",
  "cursor",
  "battery_icon",
  "mute_button",
  "nape",
  "eyelid",
  "hesitating",
  "backing_away",
] as const;

export const stage37ExtractionAuditCases: Stage37Fixture[] = [
  {
    id: "stage37-front-nature-birds-and-water",
    text: "柳の木が風に揺れ、池の蓮の花の上を蝶々とトンボが飛んでいて、木の上にはフクロウが止まっていた。",
    expectedMotifIds: ["willow", "lotus", "butterfly", "dragonfly", "owl"],
    note: "nature中心の前半候補が home-place や relationship に寄らず抽出できることを確認する。",
  },
  {
    id: "stage37-front-paper-tools",
    text: "紙袋を持ちながら小銭入れを探し、コルクボードにメモを貼って、巻き尺を引き出し、最後にインク台を開いた。",
    expectedMotifIds: ["paper_bag", "coin_purse", "corkboard", "measuring_tape", "ink_pad"],
    note: "object-record中心の前半候補が communication 本体へ寄りすぎないことを確認する。",
  },
  {
    id: "stage37-back-station-boundary",
    text: "駅の券売機で切符を買い、発車案内板を見上げると、ホームの時計ばかり気になっていた。",
    expectedMotifIds: ["ticket_machine", "departure_board", "platform_clock", "station", "train"],
    unexpectedMotifIds: ["car"],
    note: "ticket_gate / platform_sign / platform_edge / train / being_late の movement 境界を壊さないことを確認する。",
  },
  {
    id: "stage37-back-digital-boundary",
    text: "モニター画面でカーソルが端に止まり、バッテリー表示が減っていて、ミュートボタンを押すか迷う夢だった。",
    expectedMotifIds: ["cursor", "battery_icon", "mute_button", "monitor"],
    unexpectedMotifIds: ["comment", "sns", "chat"],
    note: "digital object 候補が communication 本体へ寄りすぎないことを確認する。",
  },
  {
    id: "stage37-back-body-action",
    text: "鏡でうなじとまぶたを気にしながら、その場でためらって進めないまま、最後は相手が怖くて後ずさる夢だった。",
    expectedMotifIds: ["nape", "eyelid", "hesitating", "backing_away"],
    unexpectedMotifIds: ["injury", "scar"],
    note: "body-appearance の非診断性と action 側の主役差を確認する。",
  },
];

export const stage37RealDreamAuditCases: Stage37Fixture[] = [
  {
    id: "stage37-real-being-late",
    text: "スマホを見ると始業時間を過ぎていて、電車に乗ろうとしても間に合わない夢だった。",
    expectedMotifIds: ["being_late"],
    expectedTopSixMotifIds: ["being_late"],
    note: "遅刻夢の比較対象を継続する。",
  },
  {
    id: "stage37-real-exam",
    text: "大学の教室で期末試験を受けているが、問題用紙の文字が全部読めない。周りの学生はスラスラ書いている。時計を見ると残り5分。鉛筆を持つ手が震えて、回答欄に書こうとしてもインクが出ない。",
    expectedMotifIds: ["exam"],
    expectedTopSixMotifIds: ["exam"],
    note: "試験夢の比較対象を継続する。",
  },
  {
    id: "stage37-real-ex-partner",
    text: "昔付き合っていた人と今の家で自然に話している夢だった。",
    expectedMotifIds: ["ex_partner"],
    expectedTopSixMotifIds: ["ex_partner"],
    note: "元恋人夢の比較対象を継続する。",
  },
  {
    id: "stage37-real-work-mistake",
    text: "チャットサポートのモニターに大量の未対応チケットが赤字で表示されている。一つ開くと顧客から長文のクレームが届いていて、返信しようとするとキーボードのキーが全部外れて落ちる。",
    expectedMotifIds: ["making_mistake", "monitor", "keyboard"],
    expectedTopSixMotifIds: ["making_mistake", "monitor", "keyboard"],
    note: "仕事ミス夢と digital object の比較対象を継続する。",
  },
  {
    id: "stage37-real-chased",
    text: "夜道で後ろから足音がついてきて、逃げた先が行き止まりになる夢だった。",
    expectedMotifIds: ["being_chased", "footsteps", "dead_end"],
    expectedTopSixMotifIds: ["being_chased", "footsteps", "dead_end"],
    unexpectedMotifIds: ["car", "school"],
    note: "追跡夢の主役差比較を継続する。",
  },
  {
    id: "stage37-real-train-not-car",
    text: "電車に乗ろうとしたのにホームで迷ってしまう夢だった。",
    expectedMotifIds: ["train"],
    expectedTopSixMotifIds: ["train"],
    unexpectedMotifIds: ["car"],
    note: "電車 -> car 抑制の比較対象を維持する。",
  },
  {
    id: "stage37-real-school-hallway",
    text: "学校の廊下を歩いていて、教室のドアが並んでいる夢だった。",
    expectedMotifIds: ["school", "hallway"],
    expectedTopSixMotifIds: ["school", "hallway"],
    note: "廊下 -> school 抑制の副作用確認を継続する。",
  },
  {
    id: "stage37-real-casual-anger",
    text: "誰かにキレ散らかして、最後にはブチギレる夢だった。",
    expectedMotifIds: ["fighting"],
    expectedTopSixMotifIds: ["fighting"],
    unexpectedMotifIds: ["comment", "sns", "chat"],
    note: "怒り口語は Stage37 でも fighting 比較対象として残す。",
  },
];

export const stage37RepresentativeDreams: Stage37RepresentativeDream[] = [
  {
    id: "stage37-front-nature",
    input: {
      text: "柳の木が風に揺れ、池には蓮の花が浮かび、その上を蝶々とトンボが飛び、遠くでフクロウが見ていた。",
      impression: "calm",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["willow", "lotus", "butterfly"],
    selectedMotifIds: ["willow", "lotus", "butterfly"],
    expectedQuestionIds: ["willow-scene", "lotus-water", "butterfly-motion"],
  },
  {
    id: "stage37-front-objects",
    input: {
      text: "紙袋を持って小銭入れを探し、コルクボードにメモを貼ってから、巻き尺を出してインク台を開く夢だった。",
      impression: "confused",
      clarity: "partial",
      recurring: false,
    },
    expectedMotifIds: ["paper_bag", "coin_purse", "corkboard"],
    selectedMotifIds: ["paper_bag", "coin_purse", "corkboard"],
    expectedQuestionIds: ["paper-bag-use", "coin-purse-state", "corkboard-arrange"],
  },
  {
    id: "stage37-back-station",
    input: {
      text: "駅の券売機で切符を買おうとして、発車案内板を見上げながらホームの時計を何度も確認する夢だった。",
      impression: "uneasy",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["ticket_machine", "departure_board", "platform_clock"],
    selectedMotifIds: ["ticket_machine", "departure_board", "platform_clock"],
    expectedQuestionIds: ["ticket-machine-use", "departure-board-info", "platform-clock-time"],
  },
  {
    id: "stage37-back-digital-body",
    input: {
      text: "カーソルが止まった画面でバッテリー表示が減り、ミュートボタンを押したまま、うなじとまぶたが妙に気になる夢だった。",
      impression: "uneasy",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["cursor", "battery_icon", "mute_button", "nape", "eyelid"],
    selectedMotifIds: ["cursor", "battery_icon", "mute_button"],
    expectedQuestionIds: ["cursor-move", "battery-icon-level", "mute-button-choice"],
  },
];
