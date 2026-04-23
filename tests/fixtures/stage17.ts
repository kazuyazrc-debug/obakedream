import type { DreamInput } from "@/types/dream";

export type Stage17Fixture = {
  id: string;
  text: string;
  expectedMotifIds: string[];
  unexpectedMotifIds?: string[];
  note: string;
};

export type Stage17RepresentativeDream = {
  id: string;
  input: DreamInput;
  expectedMotifIds: string[];
  selectedMotifIds: string[];
  expectedQuestionIds: string[];
};

export const stage17FrontHalfIds = [
  "morning",
  "evening",
  "neighbor",
  "shelf",
  "gift",
  "entrance",
  "makeup",
  "inviting",
  "planner",
  "music",
] as const;

export const stage17BackHalfIds = [
  "comment",
  "streaming",
  "coworker",
  "tears",
  "concealing",
  "cooking",
  "shadow",
  "storage_room",
  "festival",
  "maze",
] as const;

export const stage17ExtractionAuditCases: Stage17Fixture[] = [
  {
    id: "stage17-morning-evening-time-boundary",
    text: "朝日を見る夢のあと、夕方に帰る場面もあった。",
    expectedMotifIds: ["morning", "evening", "sun"],
    note: "朝と夕方は時間帯として併存し、太陽とのrelationも確認する。",
  },
  {
    id: "stage17-neighbor-entrance-house",
    text: "玄関で隣人に挨拶する夢だった。",
    expectedMotifIds: ["entrance", "neighbor"],
    note: "玄関はhome-place、隣人はrelationshipとしてgeneralへ落ちないことを確認する。",
  },
  {
    id: "stage17-shelf-planner-music-front",
    text: "棚の中から手帳を探し、部屋で音楽を聴く夢だった。",
    expectedMotifIds: ["shelf", "planner", "music"],
    note: "前半のobject/communication寄りmotifを低リスクに抽出する。",
  },
  {
    id: "stage17-gift-inviting-makeup",
    text: "化粧をしてから友人を誘い、プレゼントを渡す夢だった。",
    expectedMotifIds: ["makeup", "inviting", "gift", "friend"],
    note: "外見・行動・贈与関係を併存させる。",
  },
  {
    id: "stage17-comment-streaming-video-sns",
    text: "配信をしているとSNSでコメントが来て、動画を見返す夢だった。",
    expectedMotifIds: ["streaming", "comment", "sns", "video"],
    note: "コメント/配信を既存のSNS/videoと過剰抑制せず併存させる。",
  },
  {
    id: "stage17-coworker-workplace-boss",
    text: "職場の同僚と働いていると上司が来る夢だった。",
    expectedMotifIds: ["coworker", "workplace", "boss"],
    note: "同僚は上司/職場と切り分けながら併存する。",
  },
  {
    id: "stage17-tears-not-crying-weak",
    text: "目に涙が浮かぶ夢だった。",
    expectedMotifIds: ["tears"],
    note: "涙の状態表現をtearsとして固定し、cryingとの近縁レビューに残す。",
  },
  {
    id: "stage17-concealing-box-hiding-boundary",
    text: "箱に大切な物を隠す夢だった。",
    expectedMotifIds: ["concealing"],
    note: "隠すは物や気持ちをしまう行動として、hidingと混同しすぎない。",
  },
  {
    id: "stage17-cooking-kitchen-dish",
    text: "台所で料理を作って皿に盛る夢だった。",
    expectedMotifIds: ["cooking", "kitchen"],
    note: "料理する行動をkitchen/dishと併存させる。",
  },
  {
    id: "stage17-shadow-dark-mirror",
    text: "鏡の前で自分の影が伸びる夢だった。",
    expectedMotifIds: ["shadow", "mirror"],
    note: "影はdark/mirror周辺のrelationに入るが、明示phraseで主役化する。",
  },
  {
    id: "stage17-storage-shelf-past",
    text: "古い倉庫で棚から昔の物を取り出す夢だった。",
    expectedMotifIds: ["storage_room", "shelf"],
    note: "倉庫はhome-place肥大に注意しつつ、保管された過去として扱う。",
  },
  {
    id: "stage17-festival-maze",
    text: "祭りに行く途中で迷路の出口を探す夢だった。",
    expectedMotifIds: ["festival", "maze"],
    note: "祭りと迷路は後半慎重候補として、行動・移動系の監査に残す。",
  },
];

export const stage17RepresentativeDreams: Stage17RepresentativeDream[] = [
  {
    id: "stage17-front-calm-room",
    input: {
      text: "朝日を見る夢で、棚の中から手帳を探し、音楽を聴いて落ち着いていた。",
      impression: "calm",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["morning", "shelf", "planner", "music", "sun"],
    selectedMotifIds: ["morning", "planner", "music"],
    expectedQuestionIds: ["music-tone", "planner-focus", "morning-start"],
  },
  {
    id: "stage17-entrance-neighbor-gift",
    input: {
      text: "玄関で隣人に挨拶し、プレゼントを受け取る夢だった。",
      impression: "confused",
      clarity: "partial",
      recurring: false,
    },
    expectedMotifIds: ["entrance", "neighbor", "gift"],
    selectedMotifIds: ["neighbor", "gift", "entrance"],
    expectedQuestionIds: ["entrance-boundary", "neighbor-distance", "gift-feeling"],
  },
  {
    id: "stage17-streaming-comment",
    input: {
      text: "配信をしているとコメント欄に返信が来て、SNSの反応を見ていた。",
      impression: "uneasy",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["streaming", "comment", "sns"],
    selectedMotifIds: ["sns", "comment", "streaming"],
    expectedQuestionIds: ["sns-reaction", "streaming-exposure", "comment-reaction"],
  },
  {
    id: "stage17-coworker-cooking-maze",
    input: {
      text: "同僚と料理を作ったあと、祭りの会場で迷路の出口を探す夢だった。",
      impression: "confused",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["coworker", "cooking", "festival", "maze"],
    selectedMotifIds: ["coworker", "cooking", "maze"],
    expectedQuestionIds: ["cooking-for", "coworker-role", "maze-exit"],
  },
];
