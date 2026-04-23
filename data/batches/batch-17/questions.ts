import type { FollowUpQuestion } from "@/types/dream";

const q = (
  id: string,
  motifId: string,
  prompt: string,
  priority: number,
  options: FollowUpQuestion["options"],
): FollowUpQuestion => ({ id, motifId, prompt, type: "single", priority, options });

export const batch17Questions: FollowUpQuestion[] = [
  q("clover-find", "clover", "クローバーはどう見つかりましたか？", 74, [
    { id: "four", label: "四つ葉だった", scoreImpact: { desire: 1, recovery: 1 } },
    { id: "many", label: "たくさんあった", scoreImpact: { recovery: 1, relationships: 1 } },
    { id: "searched", label: "探していた", scoreImpact: { unresolved: 1, change: 1 } },
  ]),
  q("dandelion-state", "dandelion", "タンポポはどんな状態でしたか？", 74, [
    { id: "bloom", label: "咲いていた", scoreImpact: { recovery: 1, change: 1 } },
    { id: "fluff", label: "綿毛だった", scoreImpact: { change: 1, loss: 1 } },
    { id: "picked", label: "摘んでいた", scoreImpact: { desire: 1, recovery: 1 } },
  ]),
  q("sprout-growth", "sprout", "新芽はどう見えましたか？", 74, [
    { id: "small", label: "小さかった", scoreImpact: { recovery: 1, desire: 1 } },
    { id: "fragile", label: "折れそうだった", scoreImpact: { anxiety: 1, selfDefense: 1 } },
    { id: "growing", label: "伸びていた", scoreImpact: { change: 2 } },
  ]),
  q("bark-touch", "bark", "樹皮にはどんな印象がありましたか？", 74, [
    { id: "thick", label: "厚かった", scoreImpact: { selfDefense: 1, recovery: 1 } },
    { id: "peeling", label: "剥がれていた", scoreImpact: { unresolved: 1, change: 1 } },
    { id: "rough", label: "ざらざらしていた", scoreImpact: { anxiety: 1, selfDefense: 1 } },
  ]),
  q("vine-tangle", "vine", "つる草はどう伸びていましたか？", 74, [
    { id: "tangled", label: "絡まっていた", scoreImpact: { unresolved: 2 } },
    { id: "upward", label: "上へ伸びていた", scoreImpact: { change: 1, recovery: 1 } },
    { id: "untied", label: "ほどいていた", scoreImpact: { recovery: 1, selfDefense: 1 } },
  ]),
  q("glue-use", "glue", "のりで何をしていましたか？", 74, [
    { id: "repair", label: "貼り直していた", scoreImpact: { recovery: 2 } },
    { id: "dry", label: "乾かしていた", scoreImpact: { selfDefense: 1, unresolved: 1 } },
    { id: "messy", label: "べたついていた", scoreImpact: { anxiety: 1, unresolved: 1 } },
  ]),
  q("tape-role", "tape", "テープはどんな役割でしたか？", 74, [
    { id: "hold", label: "留めていた", scoreImpact: { selfDefense: 1, recovery: 1 } },
    { id: "peel", label: "はがしていた", scoreImpact: { change: 1, unresolved: 1 } },
    { id: "seal", label: "ふさいでいた", scoreImpact: { selfDefense: 2 } },
  ]),
  q("label-name", "label", "ラベルには何が書かれていましたか？", 74, [
    { id: "name", label: "名前があった", scoreImpact: { selfDefense: 1, recovery: 1 } },
    { id: "blank", label: "空白だった", scoreImpact: { unresolved: 1, anxiety: 1 } },
    { id: "wrong", label: "違う名前だった", scoreImpact: { anxiety: 1, change: 1 } },
  ]),
  q("folder-content", "folder", "フォルダーには何が入っていましたか？", 74, [
    { id: "papers", label: "書類が入っていた", scoreImpact: { recovery: 1, selfDefense: 1 } },
    { id: "empty", label: "空だった", scoreImpact: { unresolved: 1, loss: 1 } },
    { id: "mixed", label: "混ざっていた", scoreImpact: { anxiety: 1, unresolved: 1 } },
  ]),
  q("receipt-action", "receipt", "レシートをどうしていましたか？", 74, [
    { id: "check", label: "見返していた", scoreImpact: { selfDefense: 1, unresolved: 1 } },
    { id: "throw", label: "捨てていた", scoreImpact: { change: 1, recovery: 1 } },
    { id: "keep", label: "しまっていた", scoreImpact: { unresolved: 1, recovery: 1 } },
  ]),
  q("magnifying-glass-focus", "magnifying_glass", "虫眼鏡で何を見ていましたか？", 75, [
    { id: "letters", label: "細かい文字", scoreImpact: { selfDefense: 1, recovery: 1 } },
    { id: "trace", label: "小さな跡", scoreImpact: { unresolved: 1, anxiety: 1 } },
    { id: "object", label: "小物の細部", scoreImpact: { change: 1, selfDefense: 1 } },
  ]),
  q("clipboard-check", "clipboard", "クリップボードで何を確認していましたか？", 75, [
    { id: "list", label: "確認リスト", scoreImpact: { selfDefense: 1, recovery: 1 } },
    { id: "blank", label: "空白の紙", scoreImpact: { unresolved: 1, anxiety: 1 } },
    { id: "tasks", label: "対応事項", scoreImpact: { anxiety: 1, change: 1 } },
  ]),
  q("stapler-bind", "stapler", "ホチキスは何を留めていましたか？", 75, [
    { id: "documents", label: "書類", scoreImpact: { recovery: 1, selfDefense: 1 } },
    { id: "wrong", label: "違う順番の紙", scoreImpact: { anxiety: 1, unresolved: 1 } },
    { id: "remove", label: "針を外していた", scoreImpact: { change: 1, recovery: 1 } },
  ]),
  q("calendar-page-date", "calendar_page", "カレンダーの日付はどう見えましたか？", 75, [
    { id: "marked", label: "印がついていた", scoreImpact: { selfDefense: 1, anxiety: 1 } },
    { id: "past", label: "過ぎた日だった", scoreImpact: { unresolved: 1, loss: 1 } },
    { id: "next", label: "近い予定だった", scoreImpact: { change: 1, anxiety: 1 } },
  ]),
  q("traffic-light-color", "traffic_light", "信号は何色でしたか？", 75, [
    { id: "red", label: "赤だった", scoreImpact: { selfDefense: 1, anxiety: 1 } },
    { id: "green", label: "青だった", scoreImpact: { change: 1, recovery: 1 } },
    { id: "blink", label: "点滅していた", scoreImpact: { anxiety: 1, unresolved: 1 } },
  ]),
  q("crosswalk-timing", "crosswalk", "横断歩道ではどうしていましたか？", 75, [
    { id: "cross", label: "渡っていた", scoreImpact: { change: 1, recovery: 1 } },
    { id: "wait", label: "待っていた", scoreImpact: { selfDefense: 1, unresolved: 1 } },
    { id: "hesitate", label: "迷っていた", scoreImpact: { anxiety: 1, unresolved: 1 } },
  ]),
  q("detour-reason", "detour", "なぜ回り道をしていましたか？", 75, [
    { id: "blocked", label: "道が塞がっていた", scoreImpact: { anxiety: 1, unresolved: 1 } },
    { id: "safe", label: "安全そうだった", scoreImpact: { selfDefense: 2 } },
    { id: "found", label: "別の景色を見つけた", scoreImpact: { recovery: 1, change: 1 } },
  ]),
  q("turn-back-choice", "turn_back", "引き返す時の気持ちは？", 75, [
    { id: "relief", label: "ほっとした", scoreImpact: { recovery: 1, selfDefense: 1 } },
    { id: "panic", label: "焦っていた", scoreImpact: { anxiety: 2 } },
    { id: "check", label: "確認したかった", scoreImpact: { selfDefense: 1, unresolved: 1 } },
  ]),
  q("fingernail-state", "fingernail", "手の爪はどんな状態でしたか？", 75, [
    { id: "trimmed", label: "整っていた", scoreImpact: { recovery: 1, selfDefense: 1 } },
    { id: "long", label: "伸びていた", scoreImpact: { unresolved: 1, anxiety: 1 } },
    { id: "cut", label: "切っていた", scoreImpact: { change: 1, recovery: 1 } },
  ]),
  q("cheek-expression", "cheek", "ほっぺはどんな印象でしたか？", 75, [
    { id: "red", label: "赤くなっていた", scoreImpact: { relationships: 1, anxiety: 1 } },
    { id: "soft", label: "柔らかかった", scoreImpact: { recovery: 1, relationships: 1 } },
    { id: "hidden", label: "隠していた", scoreImpact: { selfDefense: 1, unresolved: 1 } },
  ]),
];
