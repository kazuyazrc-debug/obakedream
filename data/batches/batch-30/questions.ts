import type { FollowUpQuestion } from "@/types/dream";

const q = (
  id: string,
  motifId: string,
  prompt: string,
  options: FollowUpQuestion["options"],
  priority = 73,
): FollowUpQuestion => ({ id, motifId, prompt, type: "single", priority, options });

export const batch30Questions: FollowUpQuestion[] = [
  q("remote-control-action", "remote_control", "リモコンで何をしていましたか？", [
    { id: "change", label: "切り替えていた", scoreImpact: { change: 1, selfDefense: 1 } },
    { id: "search", label: "探していた", scoreImpact: { unresolved: 1, anxiety: 1 } },
    { id: "hold", label: "持っていただけ", scoreImpact: { selfDefense: 1, recovery: 1 } },
  ]),
  q("water-bottle-state", "water_bottle", "水筒はどんな状態でしたか？", [
    { id: "full", label: "中身が入っていた", scoreImpact: { recovery: 1, selfDefense: 1 } },
    { id: "empty", label: "空だった", scoreImpact: { desire: 1, unresolved: 1 } },
    { id: "carry", label: "持ち歩いていた", scoreImpact: { selfDefense: 1, change: 1 } },
  ]),
  q("toothbrush-care", "toothbrush", "歯ブラシで印象的だったことは？", [
    { id: "brush", label: "歯を磨いた", scoreImpact: { recovery: 1, selfDefense: 1 } },
    { id: "new", label: "新しかった", scoreImpact: { change: 1, recovery: 1 } },
    { id: "missing", label: "見つからなかった", scoreImpact: { anxiety: 1, unresolved: 1 } },
  ]),
  q("keyhole-access", "keyhole", "鍵穴はどう見えましたか？", [
    { id: "fit", label: "鍵が合った", scoreImpact: { recovery: 1, change: 1 } },
    { id: "peek", label: "覗いていた", scoreImpact: { unresolved: 1, desire: 1 } },
    { id: "blocked", label: "合わなかった", scoreImpact: { anxiety: 1, selfDefense: 1 } },
  ]),
  q("doormat-threshold", "doormat", "玄関マットはどんな印象でしたか？", [
    { id: "clean", label: "きれいだった", scoreImpact: { recovery: 1, relationships: 1 } },
    { id: "dirty", label: "汚れていた", scoreImpact: { unresolved: 1, selfDefense: 1 } },
    { id: "step", label: "踏んで入った", scoreImpact: { change: 1, selfDefense: 1 } },
  ]),
  q("trash-can-use", "trash_can", "ゴミ箱とどう関わりましたか？", [
    { id: "throw", label: "捨てた", scoreImpact: { recovery: 1, change: 1 } },
    { id: "full", label: "いっぱいだった", scoreImpact: { unresolved: 1, anxiety: 1 } },
    { id: "sort", label: "分けていた", scoreImpact: { selfDefense: 1, recovery: 1 } },
  ]),
  q("refrigerator-inside", "refrigerator", "冷蔵庫の中はどうでしたか？", [
    { id: "stored", label: "物が入っていた", scoreImpact: { selfDefense: 1, recovery: 1 } },
    { id: "empty", label: "空っぽだった", scoreImpact: { desire: 1, unresolved: 1 } },
    { id: "search", label: "探していた", scoreImpact: { unresolved: 1, change: 1 } },
  ]),
  q("living-room-mood", "living_room", "リビングはどんな雰囲気でしたか？", [
    { id: "family", label: "人が集まっていた", scoreImpact: { relationships: 1, recovery: 1 } },
    { id: "quiet", label: "静かだった", scoreImpact: { selfDefense: 1, recovery: 1 } },
    { id: "messy", label: "散らかっていた", scoreImpact: { unresolved: 1, anxiety: 1 } },
  ]),
  q("bedroom-rest", "bedroom", "寝室では何をしていましたか？", [
    { id: "rest", label: "休んでいた", scoreImpact: { recovery: 2 } },
    { id: "wake", label: "目が覚めた", scoreImpact: { change: 1, unresolved: 1 } },
    { id: "uneasy", label: "落ち着かなかった", scoreImpact: { anxiety: 1, selfDefense: 1 } },
  ]),
  q("garage-readiness", "garage", "ガレージで印象的だったことは？", [
    { id: "take-out", label: "車を出した", scoreImpact: { change: 1, desire: 1 } },
    { id: "store", label: "しまっていた", scoreImpact: { selfDefense: 1, unresolved: 1 } },
    { id: "tidy", label: "片付けていた", scoreImpact: { recovery: 1, selfDefense: 1 } },
  ]),
  q("closet-open", "closet", "クローゼットでは何をしていましたか？", [
    { id: "choose", label: "服を選んだ", scoreImpact: { change: 1, desire: 1 } },
    { id: "hide", label: "隠れていた", scoreImpact: { selfDefense: 1, anxiety: 1 } },
    { id: "search", label: "探していた", scoreImpact: { unresolved: 1, recovery: 1 } },
  ]),
  q("receiving-item", "receiving", "何を受け取った印象でしたか？", [
    { id: "gift", label: "贈り物", scoreImpact: { relationships: 1, recovery: 1 } },
    { id: "message", label: "言葉や返事", scoreImpact: { unresolved: 1, relationships: 1 } },
    { id: "load", label: "重い荷物", scoreImpact: { anxiety: 1, selfDefense: 1 } },
  ]),
  q("borrowing-obligation", "borrowing", "借りた時の気持ちは？", [
    { id: "relief", label: "助かった", scoreImpact: { recovery: 1, relationships: 1 } },
    { id: "pressure", label: "返すのが気になった", scoreImpact: { unresolved: 1, anxiety: 1 } },
    { id: "casual", label: "自然に借りた", scoreImpact: { relationships: 1, selfDefense: 1 } },
  ]),
  q("lending-boundary", "lending", "貸した時の気持ちは？", [
    { id: "trust", label: "信頼していた", scoreImpact: { relationships: 1, recovery: 1 } },
    { id: "worry", label: "少し不安だった", scoreImpact: { anxiety: 1, selfDefense: 1 } },
    { id: "limit", label: "範囲を決めていた", scoreImpact: { selfDefense: 1, unresolved: 1 } },
  ]),
  q("throwing-away-choice", "throwing_away", "捨てる時の印象は？", [
    { id: "relief", label: "すっきりした", scoreImpact: { recovery: 1, change: 1 } },
    { id: "hesitate", label: "迷っていた", scoreImpact: { unresolved: 1, loss: 1 } },
    { id: "sort", label: "選別していた", scoreImpact: { selfDefense: 1, recovery: 1 } },
  ]),
  q("rabbit-distance", "rabbit", "うさぎとの距離感は？", [
    { id: "hold", label: "抱いていた", scoreImpact: { recovery: 1, relationships: 1 } },
    { id: "run", label: "逃げていった", scoreImpact: { anxiety: 1, selfDefense: 1 } },
    { id: "watch", label: "見ていた", scoreImpact: { desire: 1, recovery: 1 } },
  ]),
  q("frog-motion", "frog", "カエルはどうしていましたか？", [
    { id: "jump", label: "跳ねていた", scoreImpact: { change: 1, recovery: 1 } },
    { id: "rain", label: "雨の中にいた", scoreImpact: { recovery: 1, unresolved: 1 } },
    { id: "voice", label: "鳴いていた", scoreImpact: { relationships: 1, desire: 1 } },
  ]),
  q("turtle-pace", "turtle", "亀の動きはどんな印象でしたか？", [
    { id: "slow", label: "ゆっくり進んだ", scoreImpact: { recovery: 1, selfDefense: 1 } },
    { id: "hide", label: "甲羅に隠れた", scoreImpact: { selfDefense: 2 } },
    { id: "water", label: "水に入った", scoreImpact: { recovery: 1, change: 1 } },
  ]),
  q("nurse-care", "nurse", "看護師はどんな関わり方でしたか？", [
    { id: "care", label: "手当てしてくれた", scoreImpact: { recovery: 2 } },
    { id: "talk", label: "話を聞いてくれた", scoreImpact: { relationships: 1, recovery: 1 } },
    { id: "watch", label: "見守っていた", scoreImpact: { selfDefense: 1, recovery: 1 } },
  ]),
  q("grandparent-memory", "grandparent", "祖父母の夢で強かった印象は？", [
    { id: "talk", label: "話していた", scoreImpact: { relationships: 1, recovery: 1 } },
    { id: "home", label: "懐かしい場所にいた", scoreImpact: { recovery: 1, unresolved: 1 } },
    { id: "watch", label: "見守られていた", scoreImpact: { selfDefense: 1, relationships: 1 } },
  ]),
];
