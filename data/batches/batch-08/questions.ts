import type { FollowUpQuestion } from "@/types/dream";

export const batch08Questions: FollowUpQuestion[] = [
  {
    id: "child-feeling",
    motifId: "child",
    prompt: "子どもが出てくる夢ではどんな感じでしたか？",
    type: "single",
    priority: 73,
    options: [
      { id: "protecting", label: "守ったり世話をしていた", scoreImpact: { relationships: 2, selfDefense: 1 } },
      { id: "playing-together", label: "一緒に遊んでいた", scoreImpact: { recovery: 2, desire: 1 } },
      { id: "watching-from-afar", label: "遠くから見ていた", scoreImpact: { unresolved: 2, loss: 1 } },
    ],
  },
  {
    id: "stone-context",
    motifId: "stone",
    prompt: "石の夢ではどんな状況でしたか？",
    type: "single",
    priority: 72,
    options: [
      { id: "heavy-unmovable", label: "重くて動かせない石だった", scoreImpact: { unresolved: 2, anxiety: 1 } },
      { id: "picked-up", label: "石を拾ったり手に持った", scoreImpact: { selfDefense: 1, change: 1 } },
      { id: "smooth-natural", label: "きれいな石や自然の石だった", scoreImpact: { recovery: 1, selfDefense: 1 } },
    ],
  },
  {
    id: "rooftop-scene",
    motifId: "rooftop",
    prompt: "屋上の夢ではどんな状況でしたか？",
    type: "single",
    priority: 71,
    options: [
      { id: "overlooking", label: "高いところから見渡していた", scoreImpact: { change: 2, unresolved: 1 } },
      { id: "alone-on-edge", label: "端に近いところで一人でいた", scoreImpact: { anxiety: 2, unresolved: 1 } },
      { id: "open-sky", label: "空が広く解放的な感じだった", scoreImpact: { recovery: 1, desire: 1 } },
    ],
  },
  {
    id: "hot-spring-feeling",
    motifId: "hot_spring",
    prompt: "温泉の夢ではどんな感覚がありましたか？",
    type: "single",
    priority: 69,
    options: [
      { id: "relaxing", label: "ゆっくりリラックスしていた", scoreImpact: { recovery: 2, selfDefense: 1 } },
      { id: "traveling", label: "旅先での温泉だった", scoreImpact: { change: 2, desire: 1 } },
      { id: "could-not-enter", label: "入れなかったり邪魔が入った", scoreImpact: { unresolved: 2, anxiety: 1 } },
    ],
  },
  {
    id: "game-outcome",
    motifId: "game",
    prompt: "夢のゲームではどんな展開でしたか？",
    type: "single",
    priority: 68,
    options: [
      { id: "cannot-clear", label: "クリアできずに詰まっていた", scoreImpact: { unresolved: 2, anxiety: 1 } },
      { id: "winning", label: "順調に進んでいた・勝っていた", scoreImpact: { desire: 2, change: 1 } },
      { id: "rules-unclear", label: "ルールがわからなかった", scoreImpact: { anxiety: 1, unresolved: 2 } },
    ],
  },
  {
    id: "earphone-state",
    motifId: "earphone",
    prompt: "イヤホンの夢ではどんな状態でしたか？",
    type: "single",
    priority: 67,
    options: [
      { id: "immersed-in-sound", label: "音楽や音に没頭していた", scoreImpact: { recovery: 1, selfDefense: 1 } },
      { id: "blocking-out", label: "外の音を遮断していた", scoreImpact: { selfDefense: 2, unresolved: 1 } },
      { id: "fell-out", label: "イヤホンが外れたり聞こえなくなった", scoreImpact: { unresolved: 2, anxiety: 1 } },
    ],
  },
  {
    id: "dark-feeling",
    motifId: "dark",
    prompt: "暗闇の夢ではどんな感じでしたか？",
    type: "single",
    priority: 76,
    options: [
      { id: "frightening", label: "怖くて動けなかった", scoreImpact: { anxiety: 2, unresolved: 1 } },
      { id: "searching-in-dark", label: "暗の中で何かを探していた", scoreImpact: { unresolved: 2, desire: 1 } },
      { id: "quiet-alone", label: "静かで一人の感じだった", scoreImpact: { selfDefense: 1, recovery: 1 } },
    ],
  },
  {
    id: "pain-type",
    motifId: "pain",
    prompt: "夢の中の痛みはどんな感じでしたか？",
    type: "single",
    priority: 74,
    options: [
      { id: "sharp-sudden", label: "急に強い痛みが来た", scoreImpact: { anxiety: 2, selfDefense: 1 } },
      { id: "dull-persistent", label: "鈍く続く痛みだった", scoreImpact: { unresolved: 2, anxiety: 1 } },
      { id: "noticed-afterwards", label: "後から気づく感じだった", scoreImpact: { unresolved: 1, loss: 1 } },
    ],
  },
  {
    id: "sleep-state",
    motifId: "sleep",
    prompt: "眠りの夢ではどんな状況でしたか？",
    type: "single",
    priority: 70,
    options: [
      { id: "sleeping-within-dream", label: "夢の中でさらに眠っていた", scoreImpact: { unresolved: 2, anxiety: 1 } },
      { id: "could-not-sleep", label: "眠れないままでいた", scoreImpact: { anxiety: 2, unresolved: 1 } },
      { id: "deep-restful", label: "深くゆっくり眠れていた", scoreImpact: { recovery: 2, selfDefense: 1 } },
    ],
  },
  {
    id: "breaking-what",
    motifId: "breaking",
    prompt: "壊れる夢では何が壊れましたか？",
    type: "single",
    priority: 75,
    options: [
      { id: "object-broke", label: "物が壊れた・割れた", scoreImpact: { change: 1, loss: 1 } },
      { id: "structure-collapsed", label: "建物や構造物が崩れた", scoreImpact: { anxiety: 2, change: 1 } },
      { id: "broke-it-myself", label: "自分が壊してしまった", scoreImpact: { anxiety: 1, unresolved: 2 } },
    ],
  },
];
