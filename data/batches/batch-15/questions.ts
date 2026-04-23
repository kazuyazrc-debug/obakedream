import type { FollowUpQuestion } from "@/types/dream";

const q = (
  id: string,
  motifId: string,
  prompt: string,
  priority: number,
  options: FollowUpQuestion["options"],
): FollowUpQuestion => ({ id, motifId, prompt, type: "single", priority, options });

export const batch15Questions: FollowUpQuestion[] = [
  q("pinecone-state", "pinecone", "松ぼっくりはどんな状態でしたか？", 73, [
    { id: "closed", label: "閉じていた", scoreImpact: { selfDefense: 1, unresolved: 1 } },
    { id: "collected", label: "集めていた", scoreImpact: { desire: 1, recovery: 1 } },
    { id: "found", label: "偶然見つけた", scoreImpact: { change: 1, recovery: 1 } },
  ]),
  q("acorn-feeling", "acorn", "どんぐりにはどんな印象がありましたか？", 73, [
    { id: "small", label: "小さくて大切だった", scoreImpact: { recovery: 1, desire: 1 } },
    { id: "many", label: "たくさんあった", scoreImpact: { desire: 1, change: 1 } },
    { id: "lost", label: "なくしそうだった", scoreImpact: { anxiety: 1, unresolved: 1 } },
  ]),
  q("mushroom-discovery", "mushroom", "きのこを見たとき、どう感じましたか？", 73, [
    { id: "curious", label: "気になった", scoreImpact: { change: 1, unresolved: 1 } },
    { id: "avoid", label: "避けたい感じがした", scoreImpact: { selfDefense: 1, anxiety: 1 } },
    { id: "quiet", label: "静かで不思議だった", scoreImpact: { recovery: 1, unresolved: 1 } },
  ]),
  q("fern-growth", "fern", "シダはどんなふうに見えましたか？", 73, [
    { id: "spread", label: "静かに広がっていた", scoreImpact: { change: 1, recovery: 1 } },
    { id: "shade", label: "日陰にあった", scoreImpact: { selfDefense: 1, unresolved: 1 } },
    { id: "touched", label: "触れて確かめた", scoreImpact: { recovery: 1, selfDefense: 1 } },
  ]),
  q("dew-moment", "dew", "露はどんな印象でしたか？", 73, [
    { id: "shine", label: "光っていた", scoreImpact: { recovery: 1, change: 1 } },
    { id: "fade", label: "消えそうだった", scoreImpact: { unresolved: 1, anxiety: 1 } },
    { id: "wet", label: "濡れて気になった", scoreImpact: { selfDefense: 1, unresolved: 1 } },
  ]),
  q("broom-cleanup", "broom", "ほうきでは何をしていましたか？", 73, [
    { id: "sweep", label: "掃いていた", scoreImpact: { recovery: 2 } },
    { id: "gather", label: "集めていた", scoreImpact: { selfDefense: 1, recovery: 1 } },
    { id: "hold", label: "持ったままだった", scoreImpact: { unresolved: 1, change: 1 } },
  ]),
  q("bowl-content", "bowl", "ボウルの中はどうなっていましたか？", 73, [
    { id: "mixed", label: "混ざっていた", scoreImpact: { change: 1, recovery: 1 } },
    { id: "empty", label: "空だった", scoreImpact: { unresolved: 1, anxiety: 1 } },
    { id: "prepared", label: "材料が入っていた", scoreImpact: { desire: 1, selfDefense: 1 } },
  ]),
  q("compass-direction", "compass", "方位磁石は何を示していましたか？", 73, [
    { id: "clear", label: "進む向きがわかった", scoreImpact: { change: 2 } },
    { id: "spin", label: "針が定まらなかった", scoreImpact: { anxiety: 1, unresolved: 1 } },
    { id: "return", label: "戻る方向を示した", scoreImpact: { selfDefense: 1, recovery: 1 } },
  ]),
  q("pencil-writing", "pencil", "鉛筆では何をしていましたか？", 73, [
    { id: "write", label: "書いていた", scoreImpact: { change: 1, recovery: 1 } },
    { id: "erase", label: "書き直していた", scoreImpact: { recovery: 1, unresolved: 1 } },
    { id: "sharpen", label: "削っていた", scoreImpact: { selfDefense: 1, change: 1 } },
  ]),
  q("bookmark-place", "bookmark", "しおりはどこにありましたか？", 73, [
    { id: "book", label: "本に挟まっていた", scoreImpact: { recovery: 1, unresolved: 1 } },
    { id: "lost", label: "見つからなかった", scoreImpact: { anxiety: 1, unresolved: 1 } },
    { id: "return", label: "戻る場所を示していた", scoreImpact: { selfDefense: 1, recovery: 1 } },
  ]),
  q("shoelace-knot", "shoelace", "靴ひもはどんな状態でしたか？", 74, [
    { id: "tied", label: "結び直していた", scoreImpact: { selfDefense: 1, change: 1 } },
    { id: "loose", label: "ほどけていた", scoreImpact: { anxiety: 1, unresolved: 1 } },
    { id: "ready", label: "歩く準備ができた", scoreImpact: { recovery: 1, change: 1 } },
  ]),
  q("zipper-boundary", "zipper", "ファスナーはどう動いていましたか？", 74, [
    { id: "open", label: "開けていた", scoreImpact: { change: 1, relationships: 1 } },
    { id: "close", label: "閉めていた", scoreImpact: { selfDefense: 2 } },
    { id: "stuck", label: "引っかかっていた", scoreImpact: { unresolved: 1, anxiety: 1 } },
  ]),
  q("apron-role", "apron", "エプロンはどんな役割でしたか？", 73, [
    { id: "prepare", label: "作業の準備だった", scoreImpact: { recovery: 1, selfDefense: 1 } },
    { id: "protect", label: "汚れから守っていた", scoreImpact: { selfDefense: 2 } },
    { id: "care", label: "誰かのためにつけていた", scoreImpact: { relationships: 1, desire: 1 } },
  ]),
  q("suitcase-load", "suitcase", "スーツケースには何が入っていましたか？", 74, [
    { id: "packed", label: "必要なものが入っていた", scoreImpact: { selfDefense: 1, change: 1 } },
    { id: "heavy", label: "重かった", scoreImpact: { unresolved: 1, anxiety: 1 } },
    { id: "open", label: "開いて中を選んでいた", scoreImpact: { recovery: 1, change: 1 } },
  ]),
  q("ticket-stub-memory", "ticket_stub", "半券はどんな印象でしたか？", 73, [
    { id: "kept", label: "大切に残していた", scoreImpact: { recovery: 1, unresolved: 1 } },
    { id: "torn", label: "破れていた", scoreImpact: { loss: 1, change: 1 } },
    { id: "found", label: "あとから見つけた", scoreImpact: { unresolved: 1, recovery: 1 } },
  ]),
  q("paint-color", "paint", "絵の具はどんな状態でしたか？", 74, [
    { id: "bright", label: "明るい色だった", scoreImpact: { desire: 1, recovery: 1 } },
    { id: "mixed", label: "混ざっていた", scoreImpact: { unresolved: 1, anxiety: 1 } },
    { id: "chosen", label: "色を選んでいた", scoreImpact: { change: 1, desire: 1 } },
  ]),
  q("footprint-trace", "footprint", "足跡とはどう関わっていましたか？", 74, [
    { id: "follow", label: "たどっていた", scoreImpact: { unresolved: 1, change: 1 } },
    { id: "leave", label: "自分で残していた", scoreImpact: { desire: 1, selfDefense: 1 } },
    { id: "lost", label: "途中で消えていた", scoreImpact: { anxiety: 1, loss: 1 } },
  ]),
  q("eyelash-detail", "eyelash", "まつげはどんなふうに気になりましたか？", 74, [
    { id: "shape", label: "形を整えていた", scoreImpact: { selfDefense: 1, relationships: 1 } },
    { id: "fall", label: "抜けて気になった", scoreImpact: { anxiety: 1, unresolved: 1 } },
    { id: "mirror", label: "鏡で見ていた", scoreImpact: { selfDefense: 1, recovery: 1 } },
  ]),
  q("keychain-marker", "keychain", "キーホルダーは何の目印でしたか？", 73, [
    { id: "key", label: "鍵を見つける目印", scoreImpact: { selfDefense: 1, recovery: 1 } },
    { id: "gift", label: "誰かにもらった印", scoreImpact: { relationships: 1, unresolved: 1 } },
    { id: "lost", label: "なくしそうだった", scoreImpact: { anxiety: 1, unresolved: 1 } },
  ]),
  q("pocket-content", "pocket", "ポケットには何がありましたか？", 74, [
    { id: "small", label: "小さなものが入っていた", scoreImpact: { selfDefense: 1, recovery: 1 } },
    { id: "empty", label: "空だった", scoreImpact: { unresolved: 1, anxiety: 1 } },
    { id: "hidden", label: "すぐ取り出せるようにしていた", scoreImpact: { selfDefense: 1, change: 1 } },
  ]),
];
