import type { FollowUpQuestion } from "@/types/dream";

export const batch07Questions: FollowUpQuestion[] = [
  {
    id: "hand-action",
    motifId: "hand",
    prompt: "夢の中で手はどんな状態でしたか？",
    type: "single",
    priority: 82,
    options: [
      { id: "reaching-out", label: "誰かに手を伸ばしていた", scoreImpact: { relationships: 2, desire: 1 } },
      { id: "handing-over", label: "何かを手渡していた", scoreImpact: { relationships: 1, change: 1 } },
      { id: "could-not-reach", label: "手が届かなかった", scoreImpact: { unresolved: 2, loss: 1 } },
    ],
  },
  {
    id: "foot-state",
    motifId: "foot",
    prompt: "夢の中で足はどんな状態でしたか？",
    type: "single",
    priority: 81,
    options: [
      { id: "stepping-forward", label: "前へ踏み出していた", scoreImpact: { change: 2 } },
      { id: "stopped", label: "足が止まって動けなかった", scoreImpact: { unresolved: 2, anxiety: 1 } },
      { id: "unstable", label: "足元がふらついていた", scoreImpact: { anxiety: 1, selfDefense: 1 } },
    ],
  },
  {
    id: "voice-condition",
    motifId: "voice",
    prompt: "夢の中で声はどんな状態でしたか？",
    type: "single",
    priority: 80,
    options: [
      { id: "voice-not-heard", label: "声が届かなかった・聞こえなかった", scoreImpact: { unresolved: 2, relationships: 1 } },
      { id: "calling-someone", label: "誰かを呼んでいた", scoreImpact: { relationships: 2, desire: 1 } },
      { id: "could-not-speak", label: "声が出なかった", scoreImpact: { anxiety: 2, unresolved: 1 } },
    ],
  },
  {
    id: "horse-relationship",
    motifId: "horse",
    prompt: "馬との関係はどんな感じでしたか？",
    type: "single",
    priority: 77,
    options: [
      { id: "riding-smoothly", label: "うまく乗りこなしていた", scoreImpact: { change: 2, desire: 1 } },
      { id: "chased-by-horse", label: "馬に追われていた", scoreImpact: { anxiety: 2, selfDefense: 1 } },
      { id: "watching-horse", label: "馬を遠くから見ていた", scoreImpact: { desire: 1, unresolved: 1 } },
    ],
  },
  {
    id: "sand-feeling",
    motifId: "sand",
    prompt: "砂の夢ではどんな感覚がありましたか？",
    type: "single",
    priority: 76,
    options: [
      { id: "slipping-away", label: "砂がどんどんこぼれていく感じ", scoreImpact: { loss: 2, unresolved: 1 } },
      { id: "walking-on-sand", label: "広い砂浜や砂漠を歩いていた", scoreImpact: { change: 1, unresolved: 1 } },
      { id: "being-buried", label: "砂に埋まりそうだった", scoreImpact: { anxiety: 2, selfDefense: 1 } },
    ],
  },
  {
    id: "embracing-who",
    motifId: "embracing",
    prompt: "抱きしめる夢では誰と？",
    type: "single",
    priority: 79,
    options: [
      { id: "family-member", label: "家族や身近な人", scoreImpact: { relationships: 2, recovery: 1 } },
      { id: "someone-missed", label: "会いたかった人・遠ざかっていた人", scoreImpact: { desire: 2, loss: 1 } },
      { id: "unknown-person", label: "誰かわからなかった", scoreImpact: { unresolved: 2, recovery: 1 } },
    ],
  },
  {
    id: "news-content",
    motifId: "news",
    prompt: "夢のニュースはどんな内容でしたか？",
    type: "single",
    priority: 75,
    options: [
      { id: "bad-news", label: "悪い出来事の報道だった", scoreImpact: { anxiety: 2, unresolved: 1 } },
      { id: "surprising-news", label: "驚くような内容だった", scoreImpact: { change: 1, unresolved: 2 } },
      { id: "unrelated-news", label: "自分と関係ない出来事だった", scoreImpact: { unresolved: 1, selfDefense: 1 } },
    ],
  },
  {
    id: "past-scene",
    motifId: "past",
    prompt: "過去の夢ではどんな場面でしたか？",
    type: "single",
    priority: 76,
    options: [
      { id: "nostalgic-place", label: "懐かしい場所や人がいた", scoreImpact: { loss: 1, recovery: 1 } },
      { id: "regretful-moment", label: "やり直したい出来事だった", scoreImpact: { loss: 2, unresolved: 1 } },
      { id: "watching-past", label: "過去の自分を遠くから見ていた", scoreImpact: { unresolved: 2, change: 1 } },
    ],
  },
  {
    id: "boss-situation",
    motifId: "boss",
    prompt: "上司との夢はどんな状況でしたか？",
    type: "single",
    priority: 80,
    options: [
      { id: "being-scolded", label: "怒られたり叱られたりした", scoreImpact: { anxiety: 2, selfDefense: 1 } },
      { id: "being-evaluated", label: "評価・判断される場面だった", scoreImpact: { anxiety: 1, unresolved: 2 } },
      { id: "normal-conversation", label: "普通に話していた", scoreImpact: { relationships: 1, recovery: 1 } },
    ],
  },
  {
    id: "glasses-visibility",
    motifId: "glasses",
    prompt: "眼鏡の夢では、見え方はどう変わりましたか？",
    type: "single",
    priority: 78,
    options: [
      { id: "clear-view", label: "かけるとはっきり見えた", scoreImpact: { recovery: 2, selfDefense: 1 } },
      { id: "blurred-view", label: "曇ったりぼやけたりした", scoreImpact: { unresolved: 2, anxiety: 1 } },
      { id: "lost-or-broken", label: "探していた・壊れていた", scoreImpact: { loss: 1, selfDefense: 1 } },
    ],
  },
];
