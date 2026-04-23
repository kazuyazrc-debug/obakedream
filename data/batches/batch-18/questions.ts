import type { FollowUpQuestion } from "@/types/dream";

const q = (
  id: string,
  motifId: string,
  prompt: string,
  priority: number,
  options: FollowUpQuestion["options"],
): FollowUpQuestion => ({ id, motifId, prompt, type: "single", priority, options });

export const batch18Questions: FollowUpQuestion[] = [
  q("root-support", "root", "根っこはどんな状態でしたか？", 75, [
    { id: "thick", label: "太く支えていた", scoreImpact: { recovery: 1, selfDefense: 1 } },
    { id: "exposed", label: "地上に出ていた", scoreImpact: { unresolved: 1, anxiety: 1 } },
    { id: "followed", label: "たどっていた", scoreImpact: { change: 1, desire: 1 } },
  ]),
  q("bud-opening", "bud", "つぼみはどう見えましたか？", 75, [
    { id: "closed", label: "まだ閉じていた", scoreImpact: { selfDefense: 1, desire: 1 } },
    { id: "opening", label: "開きかけていた", scoreImpact: { change: 2 } },
    { id: "protected", label: "守られていた", scoreImpact: { recovery: 1, selfDefense: 1 } },
  ]),
  q("wildflower-place", "wildflower", "野花はどこに咲いていましたか？", 75, [
    { id: "roadside", label: "道端に咲いていた", scoreImpact: { recovery: 1, change: 1 } },
    { id: "field", label: "草地に咲いていた", scoreImpact: { recovery: 2 } },
    { id: "picked", label: "摘んでいた", scoreImpact: { desire: 1, relationships: 1 } },
  ]),
  q("lichen-surface", "lichen", "地衣類は何についていましたか？", 75, [
    { id: "stone", label: "石についていた", scoreImpact: { unresolved: 1, recovery: 1 } },
    { id: "wall", label: "古い壁についていた", scoreImpact: { unresolved: 1, selfDefense: 1 } },
    { id: "forest", label: "森の中にあった", scoreImpact: { recovery: 1, selfDefense: 1 } },
  ]),
  q("reed-motion", "reed", "葦はどんなふうに見えましたか？", 75, [
    { id: "swaying", label: "風で揺れていた", scoreImpact: { change: 1, recovery: 1 } },
    { id: "dense", label: "茂っていた", scoreImpact: { selfDefense: 1, unresolved: 1 } },
    { id: "water", label: "水辺に立っていた", scoreImpact: { recovery: 1, selfDefense: 1 } },
  ]),
  q("rubber-band-use", "rubber_band", "輪ゴムをどうしていましたか？", 75, [
    { id: "bundle", label: "束ねていた", scoreImpact: { selfDefense: 1, recovery: 1 } },
    { id: "stretch", label: "伸ばしていた", scoreImpact: { anxiety: 1, change: 1 } },
    { id: "snap", label: "切れそうだった", scoreImpact: { anxiety: 2 } },
  ]),
  q("binder-content", "binder", "バインダーには何がありましたか？", 75, [
    { id: "papers", label: "書類が挟まっていた", scoreImpact: { recovery: 1, selfDefense: 1 } },
    { id: "blank", label: "空だった", scoreImpact: { unresolved: 1, loss: 1 } },
    { id: "ordered", label: "順番に並んでいた", scoreImpact: { recovery: 2 } },
  ]),
  q("index-card-study", "index_card", "単語カードをどうしていましたか？", 75, [
    { id: "flip", label: "めくっていた", scoreImpact: { selfDefense: 1, change: 1 } },
    { id: "write", label: "書き込んでいた", scoreImpact: { recovery: 1, desire: 1 } },
    { id: "forgot", label: "覚えられなかった", scoreImpact: { anxiety: 1, unresolved: 1 } },
  ]),
  q("coupon-timing", "coupon", "クーポンは使えそうでしたか？", 75, [
    { id: "usable", label: "使えそうだった", scoreImpact: { desire: 1, recovery: 1 } },
    { id: "expired", label: "期限が気になった", scoreImpact: { anxiety: 1, selfDefense: 1 } },
    { id: "saved", label: "財布にしまった", scoreImpact: { selfDefense: 1, unresolved: 1 } },
  ]),
  q("pencil-case-state", "pencil_case", "筆箱はどんな状態でしたか？", 75, [
    { id: "open", label: "開いていた", scoreImpact: { recovery: 1, change: 1 } },
    { id: "full", label: "文具がそろっていた", scoreImpact: { selfDefense: 2 } },
    { id: "search", label: "中を探していた", scoreImpact: { unresolved: 1, anxiety: 1 } },
  ]),
  q("sidewalk-route", "sidewalk", "歩道ではどうしていましたか？", 75, [
    { id: "walk", label: "歩いていた", scoreImpact: { change: 1, recovery: 1 } },
    { id: "stop", label: "立ち止まっていた", scoreImpact: { selfDefense: 1, unresolved: 1 } },
    { id: "edge", label: "端を歩いていた", scoreImpact: { anxiety: 1, selfDefense: 1 } },
  ]),
  q("escalator-direction", "escalator", "エスカレーターはどちらへ動いていましたか？", 75, [
    { id: "up", label: "上がっていた", scoreImpact: { change: 1, desire: 1 } },
    { id: "down", label: "下がっていた", scoreImpact: { unresolved: 1, anxiety: 1 } },
    { id: "stopped", label: "止まっていた", scoreImpact: { anxiety: 1, selfDefense: 1 } },
  ]),
  q("platform-edge-distance", "platform_edge", "ホームの端ではどんな距離感でしたか？", 75, [
    { id: "close", label: "端に近かった", scoreImpact: { anxiety: 2 } },
    { id: "step-back", label: "一歩下がった", scoreImpact: { selfDefense: 2 } },
    { id: "waiting", label: "電車を待っていた", scoreImpact: { unresolved: 1, change: 1 } },
  ]),
  q("lost-ticket-action", "lost_ticket", "なくした切符をどうしていましたか？", 75, [
    { id: "search", label: "探していた", scoreImpact: { unresolved: 1, anxiety: 1 } },
    { id: "rebuy", label: "買い直そうとしていた", scoreImpact: { recovery: 1, change: 1 } },
    { id: "gate", label: "改札で困っていた", scoreImpact: { anxiety: 2 } },
  ]),
  q("checklist-progress", "checklist", "チェックリストはどこまで進んでいましたか？", 75, [
    { id: "many", label: "たくさん残っていた", scoreImpact: { anxiety: 1, unresolved: 1 } },
    { id: "done", label: "ほとんど終わっていた", scoreImpact: { recovery: 2 } },
    { id: "miss", label: "抜けに気づいた", scoreImpact: { selfDefense: 1, change: 1 } },
  ]),
  q("progress-bar-state", "progress_bar", "進捗バーはどう動いていましたか？", 75, [
    { id: "moving", label: "少しずつ進んでいた", scoreImpact: { recovery: 1, change: 1 } },
    { id: "stopped", label: "止まっていた", scoreImpact: { anxiety: 1, unresolved: 1 } },
    { id: "almost", label: "もう少しで終わりそうだった", scoreImpact: { desire: 1, selfDefense: 1 } },
  ]),
  q("loading-icon-wait", "loading_icon", "読み込み中の表示を見てどう感じましたか？", 75, [
    { id: "wait", label: "待っていた", scoreImpact: { selfDefense: 1, unresolved: 1 } },
    { id: "panic", label: "焦っていた", scoreImpact: { anxiety: 2 } },
    { id: "resume", label: "再開を待っていた", scoreImpact: { recovery: 1, change: 1 } },
  ]),
  q("eyebrow-expression", "eyebrow", "眉毛はどんな印象でしたか？", 75, [
    { id: "neat", label: "整っていた", scoreImpact: { recovery: 1, selfDefense: 1 } },
    { id: "thick", label: "強く見えた", scoreImpact: { relationships: 1, selfDefense: 1 } },
    { id: "drawn", label: "描いていた", scoreImpact: { change: 1, desire: 1 } },
  ]),
  q("chin-posture", "chin", "あごはどんなふうに意識されましたか？", 75, [
    { id: "touch", label: "触っていた", scoreImpact: { selfDefense: 1, unresolved: 1 } },
    { id: "up", label: "上げていた", scoreImpact: { relationships: 1, change: 1 } },
    { id: "mirror", label: "鏡で見ていた", scoreImpact: { recovery: 1, selfDefense: 1 } },
  ]),
  q("wristwatch-time", "wristwatch", "腕時計の時間はどう見えましたか？", 75, [
    { id: "late", label: "遅れが気になった", scoreImpact: { anxiety: 2 } },
    { id: "adjust", label: "合わせていた", scoreImpact: { selfDefense: 1, recovery: 1 } },
    { id: "stopped", label: "止まっていた", scoreImpact: { unresolved: 1, loss: 1 } },
  ]),
];
