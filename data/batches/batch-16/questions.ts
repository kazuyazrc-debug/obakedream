import type { FollowUpQuestion } from "@/types/dream";

const q = (
  id: string,
  motifId: string,
  prompt: string,
  priority: number,
  options: FollowUpQuestion["options"],
): FollowUpQuestion => ({ id, motifId, prompt, type: "single", priority, options });

export const batch16Questions: FollowUpQuestion[] = [
  q("twig-state", "twig", "小枝はどんな状態でしたか？", 74, [
    { id: "picked", label: "拾っていた", scoreImpact: { recovery: 1, change: 1 } },
    { id: "broken", label: "折れていた", scoreImpact: { unresolved: 1, loss: 1 } },
    { id: "held", label: "手に持っていた", scoreImpact: { selfDefense: 1, recovery: 1 } },
  ]),
  q("moss-surface", "moss", "苔はどこにありましたか？", 74, [
    { id: "stone", label: "石の上にあった", scoreImpact: { unresolved: 1, recovery: 1 } },
    { id: "forest", label: "森に広がっていた", scoreImpact: { recovery: 1, change: 1 } },
    { id: "wet", label: "湿っていた", scoreImpact: { selfDefense: 1, unresolved: 1 } },
  ]),
  q("petal-motion", "petal", "花びらはどう動いていましたか？", 74, [
    { id: "falling", label: "散っていた", scoreImpact: { loss: 1, change: 1 } },
    { id: "floating", label: "舞っていた", scoreImpact: { recovery: 1, change: 1 } },
    { id: "kept", label: "大切に持っていた", scoreImpact: { unresolved: 1, recovery: 1 } },
  ]),
  q("raindrop-detail", "raindrop", "雨粒はどんな印象でしたか？", 74, [
    { id: "clear", label: "透明だった", scoreImpact: { recovery: 1, change: 1 } },
    { id: "cold", label: "冷たかった", scoreImpact: { anxiety: 1, selfDefense: 1 } },
    { id: "many", label: "たくさん落ちていた", scoreImpact: { unresolved: 1, anxiety: 1 } },
  ]),
  q("eraser-use", "eraser", "消しゴムで何をしていましたか？", 74, [
    { id: "erase", label: "消していた", scoreImpact: { recovery: 1, change: 1 } },
    { id: "lost", label: "探していた", scoreImpact: { anxiety: 1, unresolved: 1 } },
    { id: "dirty", label: "汚れていた", scoreImpact: { selfDefense: 1, unresolved: 1 } },
  ]),
  q("ruler-measure", "ruler", "定規は何に使っていましたか？", 74, [
    { id: "measure", label: "測っていた", scoreImpact: { selfDefense: 1, change: 1 } },
    { id: "line", label: "線を引いていた", scoreImpact: { recovery: 1, change: 1 } },
    { id: "compare", label: "比べていた", scoreImpact: { anxiety: 1, unresolved: 1 } },
  ]),
  q("paperclip-bind", "paperclip", "クリップは何を留めていましたか？", 74, [
    { id: "papers", label: "紙をまとめていた", scoreImpact: { recovery: 1, selfDefense: 1 } },
    { id: "loose", label: "外れそうだった", scoreImpact: { anxiety: 1, unresolved: 1 } },
    { id: "found", label: "あとから見つけた", scoreImpact: { unresolved: 1, recovery: 1 } },
  ]),
  q("coaster-role", "coaster", "コースターはどんな役割でしたか？", 74, [
    { id: "support", label: "カップを受けていた", scoreImpact: { recovery: 1, relationships: 1 } },
    { id: "wet", label: "濡れていた", scoreImpact: { unresolved: 1, selfDefense: 1 } },
    { id: "missing", label: "見つからなかった", scoreImpact: { anxiety: 1, unresolved: 1 } },
  ]),
  q("handkerchief-care", "handkerchief", "ハンカチは何に使っていましたか？", 74, [
    { id: "wipe", label: "拭いていた", scoreImpact: { recovery: 1, selfDefense: 1 } },
    { id: "give", label: "誰かに渡した", scoreImpact: { relationships: 1, recovery: 1 } },
    { id: "fold", label: "たたんでいた", scoreImpact: { selfDefense: 1, unresolved: 1 } },
  ]),
  q("bell-sound", "bell", "鈴はどんな音でしたか？", 74, [
    { id: "clear", label: "澄んでいた", scoreImpact: { recovery: 1, change: 1 } },
    { id: "distant", label: "遠くで聞こえた", scoreImpact: { unresolved: 1, anxiety: 1 } },
    { id: "small", label: "小さく鳴った", scoreImpact: { relationships: 1, recovery: 1 } },
  ]),
  q("backpack-load", "backpack", "リュックはどんな重さでしたか？", 75, [
    { id: "heavy", label: "重かった", scoreImpact: { anxiety: 1, unresolved: 1 } },
    { id: "ready", label: "必要なものが入っていた", scoreImpact: { selfDefense: 1, change: 1 } },
    { id: "empty", label: "空だった", scoreImpact: { unresolved: 1, recovery: 1 } },
  ]),
  q("ink-state", "ink", "インクはどんな状態でしたか？", 75, [
    { id: "dry", label: "出なかった", scoreImpact: { anxiety: 1, unresolved: 1 } },
    { id: "spread", label: "にじんでいた", scoreImpact: { unresolved: 1, change: 1 } },
    { id: "clear", label: "はっきり書けた", scoreImpact: { recovery: 1, desire: 1 } },
  ]),
  q("torn-paper-content", "torn_paper", "破れた紙には何が残っていましたか？", 75, [
    { id: "words", label: "文字が残っていた", scoreImpact: { unresolved: 1, recovery: 1 } },
    { id: "blank", label: "何も読めなかった", scoreImpact: { anxiety: 1, loss: 1 } },
    { id: "fixed", label: "貼り合わせていた", scoreImpact: { recovery: 1, change: 1 } },
  ]),
  q("dust-action", "dust", "ほこりに対して何をしていましたか？", 75, [
    { id: "clean", label: "払っていた", scoreImpact: { recovery: 2 } },
    { id: "notice", label: "気づいただけだった", scoreImpact: { unresolved: 1, selfDefense: 1 } },
    { id: "float", label: "舞っていた", scoreImpact: { anxiety: 1, unresolved: 1 } },
  ]),
  q("stain-mark", "stain", "しみはどう見えましたか？", 75, [
    { id: "small", label: "小さかった", scoreImpact: { recovery: 1, selfDefense: 1 } },
    { id: "spread", label: "広がっていた", scoreImpact: { anxiety: 1, unresolved: 1 } },
    { id: "washed", label: "洗っていた", scoreImpact: { recovery: 1, change: 1 } },
  ]),
  q("answer-sheet-blank", "answer_sheet", "答案用紙はどんな状態でしたか？", 75, [
    { id: "blank", label: "空欄が多かった", scoreImpact: { anxiety: 1, unresolved: 1 } },
    { id: "written", label: "答えを書いていた", scoreImpact: { change: 1, recovery: 1 } },
    { id: "submit", label: "提出しようとしていた", scoreImpact: { selfDefense: 1, change: 1 } },
  ]),
  q("keyboard-input", "keyboard", "キーボードはどうなっていましたか？", 75, [
    { id: "type", label: "入力できた", scoreImpact: { recovery: 1, change: 1 } },
    { id: "broken", label: "キーが外れた", scoreImpact: { anxiety: 1, unresolved: 1 } },
    { id: "missing", label: "必要なキーがなかった", scoreImpact: { selfDefense: 1, unresolved: 1 } },
  ]),
  q("monitor-display", "monitor", "モニターには何が映っていましたか？", 75, [
    { id: "tasks", label: "対応すべきものが多かった", scoreImpact: { anxiety: 1, unresolved: 1 } },
    { id: "clear", label: "はっきり見えた", scoreImpact: { recovery: 1, change: 1 } },
    { id: "bright", label: "明るすぎた", scoreImpact: { selfDefense: 1, anxiety: 1 } },
  ]),
  q("footsteps-distance", "footsteps", "足音はどのくらい近く感じましたか？", 75, [
    { id: "near", label: "すぐ後ろに感じた", scoreImpact: { anxiety: 2 } },
    { id: "far", label: "遠くから聞こえた", scoreImpact: { unresolved: 1, selfDefense: 1 } },
    { id: "stop", label: "途中で止まった", scoreImpact: { recovery: 1, change: 1 } },
  ]),
  q("dead-end-choice", "dead_end", "行き止まりでどうしましたか？", 75, [
    { id: "turn", label: "引き返した", scoreImpact: { recovery: 1, change: 1 } },
    { id: "panic", label: "焦っていた", scoreImpact: { anxiety: 2 } },
    { id: "look", label: "別の道を探した", scoreImpact: { selfDefense: 1, change: 1 } },
  ]),
];
