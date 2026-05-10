import type { FollowUpQuestion } from "@/types/dream";

const q = (
  id: string,
  motifId: string,
  prompt: string,
  options: FollowUpQuestion["options"],
  priority = 73,
): FollowUpQuestion => ({ id, motifId, prompt, type: "single", priority, options });

export const batch29Questions: FollowUpQuestion[] = [
  q("airplane-motion", "airplane", "飛行機はどんな状態でしたか？", [
    { id: "takeoff", label: "離陸していた", scoreImpact: { change: 1, desire: 1 } },
    { id: "waiting", label: "待っていた", scoreImpact: { unresolved: 1, anxiety: 1 } },
    { id: "inside", label: "機内にいた", scoreImpact: { selfDefense: 1, change: 1 } },
  ]),
  q("sword-use", "sword", "剣はどのように出てきましたか？", [
    { id: "hold", label: "持っていた", scoreImpact: { selfDefense: 1, desire: 1 } },
    { id: "fight", label: "戦っていた", scoreImpact: { anxiety: 1, unresolved: 1 } },
    { id: "sheathe", label: "しまっていた", scoreImpact: { recovery: 1, selfDefense: 1 } },
  ]),
  q("cave-depth", "cave", "洞窟の中で印象的だったことは何ですか？", [
    { id: "dark", label: "暗かった", scoreImpact: { anxiety: 1, unresolved: 1 } },
    { id: "find", label: "何かを見つけた", scoreImpact: { recovery: 1, change: 1 } },
    { id: "exit", label: "出口を探した", scoreImpact: { desire: 1, unresolved: 1 } },
  ]),
  q("island-distance", "island", "島ではどんな感覚がありましたか？", [
    { id: "alone", label: "一人だった", scoreImpact: { selfDefense: 1, unresolved: 1 } },
    { id: "calm", label: "静かで落ち着いた", scoreImpact: { recovery: 1, selfDefense: 1 } },
    { id: "leave", label: "出ようとしていた", scoreImpact: { change: 1, desire: 1 } },
  ]),
  q("volcano-pressure", "volcano", "火山はどんな状態でしたか？", [
    { id: "erupting", label: "噴火していた", scoreImpact: { change: 1, anxiety: 1 } },
    { id: "smoking", label: "煙が出ていた", scoreImpact: { unresolved: 1, selfDefense: 1 } },
    { id: "watching", label: "遠くから見ていた", scoreImpact: { selfDefense: 1, recovery: 1 } },
  ]),
  q("crowd-position", "crowd", "群衆の中であなたはどうしていましたか？", [
    { id: "inside", label: "中にいた", scoreImpact: { relationships: 1, anxiety: 1 } },
    { id: "leave", label: "離れようとした", scoreImpact: { selfDefense: 1, desire: 1 } },
    { id: "watch", label: "眺めていた", scoreImpact: { recovery: 1, unresolved: 1 } },
  ]),
  q("whale-feeling", "whale", "クジラに対してどんな印象がありましたか？", [
    { id: "safe", label: "安心した", scoreImpact: { recovery: 1, desire: 1 } },
    { id: "overwhelmed", label: "圧倒された", scoreImpact: { anxiety: 1, unresolved: 1 } },
    { id: "swim", label: "一緒に泳いだ", scoreImpact: { change: 1, recovery: 1 } },
  ]),
  q("fox-distance", "fox", "キツネとはどんな距離感でしたか？", [
    { id: "guide", label: "導かれた", scoreImpact: { recovery: 1, desire: 1 } },
    { id: "watch", label: "見つめ合った", scoreImpact: { relationships: 1, unresolved: 1 } },
    { id: "run", label: "逃げていった", scoreImpact: { anxiety: 1, selfDefense: 1 } },
  ]),
  q("desert-need", "desert", "砂漠で一番強かった感覚はどれですか？", [
    { id: "thirsty", label: "水がほしかった", scoreImpact: { desire: 1, recovery: 1 } },
    { id: "lost", label: "迷っていた", scoreImpact: { anxiety: 1, unresolved: 1 } },
    { id: "keep-walking", label: "歩き続けていた", scoreImpact: { selfDefense: 1, change: 1 } },
  ]),
];
