import type { FollowUpQuestion } from "@/types/dream";

const q = (
  id: string,
  motifId: string,
  prompt: string,
  priority: number,
  options: FollowUpQuestion["options"],
): FollowUpQuestion => ({ id, motifId, prompt, type: "single", priority, options });

export const batch14Questions: FollowUpQuestion[] = [
  q("postcard-message", "postcard", "絵はがきには、どんな印象がありましたか？", 73, [
    { id: "sent", label: "誰かへ送ろうとしていた", scoreImpact: { relationships: 1, change: 1 } },
    { id: "received", label: "遠くから届いた", scoreImpact: { recovery: 1, unresolved: 1 } },
    { id: "kept", label: "記念としてしまっていた", scoreImpact: { recovery: 1, selfDefense: 1 } },
  ]),
  q("basket-content", "basket", "かごには、何が入っていましたか？", 73, [
    { id: "full", label: "大切なものがまとまっていた", scoreImpact: { recovery: 1, desire: 1 } },
    { id: "empty", label: "空っぽで気になった", scoreImpact: { unresolved: 1, anxiety: 1 } },
    { id: "carried", label: "運ぶために持っていた", scoreImpact: { selfDefense: 1, change: 1 } },
  ]),
  q("jar-content", "jar", "ガラス瓶の中身は、どのように見えましたか？", 73, [
    { id: "clear", label: "中身がはっきり見えた", scoreImpact: { recovery: 1, selfDefense: 1 } },
    { id: "sealed", label: "ふたをして保っていた", scoreImpact: { selfDefense: 2 } },
    { id: "missing", label: "中身がなくて不思議だった", scoreImpact: { unresolved: 1, anxiety: 1 } },
  ]),
  q("bench-pause", "bench", "ベンチでは、何をしていましたか？", 73, [
    { id: "rest", label: "少し休んでいた", scoreImpact: { recovery: 2 } },
    { id: "wait", label: "誰かや何かを待っていた", scoreImpact: { unresolved: 1, relationships: 1 } },
    { id: "watch", label: "外の景色を眺めていた", scoreImpact: { recovery: 1, desire: 1 } },
  ]),
  q("curtain-boundary", "curtain", "カーテンは、開いていましたか？", 73, [
    { id: "open", label: "開いて明るくなった", scoreImpact: { change: 1, recovery: 1 } },
    { id: "closed", label: "閉じて守られていた", scoreImpact: { selfDefense: 2 } },
    { id: "moving", label: "揺れて気になった", scoreImpact: { anxiety: 1, unresolved: 1 } },
  ]),
  q("nest-state", "nest", "巣には、どんな様子がありましたか？", 73, [
    { id: "safe", label: "守られて安心した", scoreImpact: { recovery: 2 } },
    { id: "empty", label: "空の巣が印象的だった", scoreImpact: { unresolved: 1, change: 1 } },
    { id: "growing", label: "育っているものがいた", scoreImpact: { desire: 1, recovery: 1 } },
  ]),
  q("chalk-writing", "chalk", "チョークで書いたものは、どんな印象でしたか？", 73, [
    { id: "clear", label: "見える形で整理できた", scoreImpact: { recovery: 1, change: 1 } },
    { id: "erased", label: "消せることが安心だった", scoreImpact: { selfDefense: 1, recovery: 1 } },
    { id: "broken", label: "折れて書きにくかった", scoreImpact: { unresolved: 1, anxiety: 1 } },
  ]),
  q("pebble-feel", "pebble", "小石は、どのように印象に残りましたか？", 73, [
    { id: "picked", label: "拾って手元に置いた", scoreImpact: { recovery: 1, selfDefense: 1 } },
    { id: "stepped", label: "踏んで気になった", scoreImpact: { anxiety: 1, unresolved: 1 } },
    { id: "collected", label: "いくつか集めていた", scoreImpact: { desire: 1, recovery: 1 } },
  ]),
  q("maple-leaf-change", "maple_leaf", "もみじは、どんな状態でしたか？", 73, [
    { id: "red", label: "きれいに色づいていた", scoreImpact: { recovery: 1, change: 1 } },
    { id: "falling", label: "風に舞っていた", scoreImpact: { change: 1, unresolved: 1 } },
    { id: "kept", label: "拾って大切にした", scoreImpact: { recovery: 1, selfDefense: 1 } },
  ]),
  q("tray-use", "tray", "トレーは、何のために使っていましたか？", 73, [
    { id: "carry", label: "まとめて運んでいた", scoreImpact: { change: 1, selfDefense: 1 } },
    { id: "serve", label: "誰かに渡すためだった", scoreImpact: { relationships: 1, desire: 1 } },
    { id: "arrange", label: "並べて整理していた", scoreImpact: { recovery: 1, selfDefense: 1 } },
  ]),
  q("needle-repair", "needle", "縫い針は、何をするために出てきましたか？", 74, [
    { id: "repair", label: "ほつれを直していた", scoreImpact: { recovery: 2 } },
    { id: "thread", label: "糸を通して準備していた", scoreImpact: { selfDefense: 1, change: 1 } },
    { id: "careful", label: "慎重にしまっていた", scoreImpact: { selfDefense: 2 } },
  ]),
  q("paintbrush-expression", "paintbrush", "絵筆では、どんなことをしていましたか？", 74, [
    { id: "paint", label: "色を塗っていた", scoreImpact: { desire: 1, recovery: 1 } },
    { id: "detail", label: "細部を描き足していた", scoreImpact: { change: 1, desire: 1 } },
    { id: "clean", label: "絵筆を洗っていた", scoreImpact: { recovery: 1, selfDefense: 1 } },
  ]),
  q("ladder-step", "ladder", "はしごでは、どんな動きが印象的でしたか？", 74, [
    { id: "up", label: "慎重に登っていた", scoreImpact: { change: 2 } },
    { id: "down", label: "ゆっくり降りていた", scoreImpact: { recovery: 1, selfDefense: 1 } },
    { id: "unstable", label: "不安定で気になった", scoreImpact: { anxiety: 1, unresolved: 1 } },
  ]),
  q("glove-distance", "glove", "手袋には、どんな役割がありましたか？", 74, [
    { id: "protect", label: "手を守ってくれた", scoreImpact: { selfDefense: 2 } },
    { id: "remove", label: "外して直接触れた", scoreImpact: { change: 1, relationships: 1 } },
    { id: "missing", label: "片方を探していた", scoreImpact: { unresolved: 1, anxiety: 1 } },
  ]),
  q("plate-serving", "plate", "皿には、何が載っていましたか？", 73, [
    { id: "food", label: "食べ物が置かれていた", scoreImpact: { recovery: 1, desire: 1 } },
    { id: "empty", label: "空で気になった", scoreImpact: { unresolved: 1, anxiety: 1 } },
    { id: "arranged", label: "きれいに並べていた", scoreImpact: { recovery: 1, selfDefense: 1 } },
  ]),
  q("lamp-light", "lamp", "ランプの光は、どんな印象でしたか？", 74, [
    { id: "warm", label: "手元が落ち着いた", scoreImpact: { recovery: 2 } },
    { id: "dim", label: "少し暗くて不安だった", scoreImpact: { anxiety: 1, unresolved: 1 } },
    { id: "switch", label: "灯したり消したりした", scoreImpact: { change: 1, selfDefense: 1 } },
  ]),
  q("string-knot", "string", "ひもは、どのように扱っていましたか？", 74, [
    { id: "tie", label: "結んでまとめていた", scoreImpact: { selfDefense: 1, relationships: 1 } },
    { id: "untie", label: "ほどいてゆるめていた", scoreImpact: { recovery: 1, change: 1 } },
    { id: "pull", label: "引っぱって確かめていた", scoreImpact: { unresolved: 1, anxiety: 1 } },
  ]),
  q("marble-motion", "marble", "ビー玉は、どんな動きをしていましたか？", 73, [
    { id: "roll", label: "ころころ転がっていた", scoreImpact: { change: 1, recovery: 1 } },
    { id: "collect", label: "集めて大切にしていた", scoreImpact: { desire: 1, selfDefense: 1 } },
    { id: "drop", label: "落として探していた", scoreImpact: { unresolved: 1, anxiety: 1 } },
  ]),
  q("bucket-container", "bucket", "バケツは、何を受け止めていましたか？", 73, [
    { id: "water", label: "水を入れて運んでいた", scoreImpact: { recovery: 1, selfDefense: 1 } },
    { id: "cleaning", label: "掃除に使っていた", scoreImpact: { recovery: 2 } },
    { id: "empty", label: "空で置かれていた", scoreImpact: { unresolved: 1, anxiety: 1 } },
  ]),
  q("comb-care", "comb", "くしで、何を整えていましたか？", 74, [
    { id: "hair", label: "髪をとかしていた", scoreImpact: { recovery: 1, selfDefense: 1 } },
    { id: "tangle", label: "絡まりをほどいていた", scoreImpact: { recovery: 1, unresolved: 1 } },
    { id: "mirror", label: "鏡の前で確認していた", scoreImpact: { selfDefense: 1, relationships: 1 } },
  ]),
];
