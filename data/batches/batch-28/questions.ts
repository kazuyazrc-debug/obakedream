import type { FollowUpQuestion } from "@/types/dream";

export const batch28Questions: FollowUpQuestion[] = [
  {
    id: "dragon-impression",
    motifId: "dragon",
    prompt: "龍の夢はどんな印象でしたか？",
    type: "single",
    priority: 67,
    options: [
      {
        id: "auspicious",
        label: "神秘的・荘厳で吉兆に感じた",
        scoreImpact: { recovery: 3, desire: 1 },
        interpretationHints: {
          fortune: "荘厳な龍の夢は、大きな幸運や転換の波が訪れているサインかもしれません。",
        },
      },
      {
        id: "threatening",
        label: "怖くて威圧的だった",
        scoreImpact: { anxiety: 2, selfDefense: 1 },
        interpretationHints: {
          fortune: "怖い龍の夢は、今の自分が対峙すべき大きな課題を映しているサインかもしれません。勇気を持って向き合うほど、流れが開きやすくなります。",
        },
      },
      {
        id: "flying",
        label: "龍が空を飛んでいた・自由に動いていた",
        scoreImpact: { change: 2, recovery: 1 },
        interpretationHints: {
          fortune: "龍が自由に飛ぶ夢は、今のあなたの可能性が広がりつつあるサインかもしれません。",
        },
      },
    ],
  },
  {
    id: "angel-feeling",
    motifId: "angel",
    prompt: "天使の夢でどんな気持ちになりましたか？",
    type: "single",
    priority: 66,
    options: [
      {
        id: "protected",
        label: "守られている・安心できた",
        scoreImpact: { recovery: 3, relationships: 1 },
        interpretationHints: {
          fortune: "守られる感覚の天使夢は、今の自分への加護や導きが近くにあるサインかもしれません。",
        },
      },
      {
        id: "message",
        label: "何かを伝えられた・メッセージがあった",
        scoreImpact: { change: 2, recovery: 1 },
        interpretationHints: {
          fortune: "メッセージをもらう天使夢は、今の自分に必要な気づきが届いているサインかもしれません。",
        },
      },
      {
        id: "distant",
        label: "遠くにいて届かなかった",
        scoreImpact: { loss: 2, unresolved: 1 },
        interpretationHints: {
          fortune: "届かない天使夢は、今の自分が助けや安心を強く求めているサインかもしれません。",
        },
      },
    ],
  },
  {
    id: "lion-behavior",
    motifId: "lion",
    prompt: "夢のライオンはどんな様子でしたか？",
    type: "single",
    priority: 65,
    options: [
      {
        id: "chasing",
        label: "追いかけられた・威嚇された",
        scoreImpact: { anxiety: 3, selfDefense: 1 },
        interpretationHints: {
          fortune: "追われるライオン夢は、今の自分に強いプレッシャーがかかっているサインかもしれません。",
        },
      },
      {
        id: "majestic",
        label: "堂々としていて威厳があった",
        scoreImpact: { desire: 2, recovery: 1 },
        interpretationHints: {
          fortune: "威厳あるライオン夢は、今の自分がリーダーシップや強さを求めているサインかもしれません。",
        },
      },
      {
        id: "friendly",
        label: "穏やかで近くにいた",
        scoreImpact: { recovery: 2, selfDefense: 1 },
        interpretationHints: {
          fortune: "穏やかなライオン夢は、内なる強さが自分を守ってくれているサインかもしれません。",
        },
      },
    ],
  },
  {
    id: "giving_birth-feeling",
    motifId: "giving_birth",
    prompt: "出産の夢でどんな気持ちでしたか？",
    type: "single",
    priority: 64,
    options: [
      {
        id: "joyful",
        label: "喜びや感動があった",
        scoreImpact: { change: 3, desire: 2 },
        interpretationHints: {
          fortune: "喜びの出産夢は、新しいステージへの準備が整いつつあるサインかもしれません。",
        },
      },
      {
        id: "painful",
        label: "痛くて苦しかった・不安だった",
        scoreImpact: { anxiety: 2, change: 1 },
        interpretationHints: {
          fortune: "苦しい出産夢も、何か大切なものが生まれつつあるサインです。変化には痛みが伴うこともありますが、その先に新しい世界が待っています。",
        },
      },
      {
        id: "witnessing",
        label: "自分ではなく誰かが産んでいた",
        scoreImpact: { relationships: 2, change: 1 },
        interpretationHints: {
          fortune: "立ち会う出産夢は、身近な人の大きな変化や新しい始まりとのつながりを映していることがあります。",
        },
      },
    ],
  },
  {
    id: "money-outcome",
    motifId: "money",
    prompt: "夢でお金はどうなりましたか？",
    type: "single",
    priority: 63,
    options: [
      {
        id: "increased",
        label: "増えた・たくさんあった",
        scoreImpact: { desire: 3, recovery: 1 },
        interpretationHints: {
          fortune: "お金が増える夢は、豊かさへの流れが近づいているサインかもしれません。今の努力が実を結ぶ時期が訪れつつあります。",
        },
      },
      {
        id: "lost",
        label: "なくなった・失った",
        scoreImpact: { anxiety: 2, loss: 2 },
        interpretationHints: {
          fortune: "お金を失う夢は、今の自分が何か大切なものを手放すことへの不安を映していることがあります。",
        },
      },
      {
        id: "found",
        label: "拾った・もらった",
        scoreImpact: { desire: 2, change: 1 },
        interpretationHints: {
          fortune: "お金を拾う夢は、思いがけないチャンスや豊かさとの出会いが近づいているサインかもしれません。",
        },
      },
    ],
  },
  {
    id: "spider-feeling",
    motifId: "spider",
    prompt: "蜘蛛の夢でどんな気持ちでしたか？",
    type: "single",
    priority: 62,
    options: [
      {
        id: "scared",
        label: "怖かった・逃げたかった",
        scoreImpact: { anxiety: 3, unresolved: 1 },
        interpretationHints: {
          fortune: "怖い蜘蛛の夢は、今の状況で何か絡み取られているような不安を映していることがあります。一つひとつほぐしていきましょう。",
        },
      },
      {
        id: "trapped",
        label: "蜘蛛の巣にかかった・動けなかった",
        scoreImpact: { unresolved: 3, selfDefense: 1 },
        interpretationHints: {
          fortune: "蜘蛛の巣にかかる夢は、今の状況から抜け出せない感覚が出ているサインかもしれません。",
        },
      },
      {
        id: "neutral",
        label: "特に怖くなかった・遠くで見ていた",
        scoreImpact: { unresolved: 1, change: 1 },
        interpretationHints: {
          fortune: "蜘蛛を遠くから見る夢は、複雑な状況を俯瞰して見る力が育っているサインかもしれません。",
        },
      },
    ],
  },
  {
    id: "bear-situation",
    motifId: "bear",
    prompt: "熊の夢でどんな状況でしたか？",
    type: "single",
    priority: 61,
    options: [
      {
        id: "chased",
        label: "追いかけられた・逃げた",
        scoreImpact: { anxiety: 3, selfDefense: 1 },
        interpretationHints: {
          fortune: "熊に追われる夢は、今の自分が強いプレッシャーや威圧感を感じているサインかもしれません。",
        },
      },
      {
        id: "confronting",
        label: "対峙した・向き合った",
        scoreImpact: { selfDefense: 2, recovery: 1 },
        interpretationHints: {
          fortune: "熊と向き合う夢は、内なる強さと向き合う時期が来ているサインかもしれません。勇気を持って立つほど、流れが変わっていきます。",
        },
      },
      {
        id: "peaceful",
        label: "穏やかだった・遠くにいた",
        scoreImpact: { recovery: 2, change: 1 },
        interpretationHints: {
          fortune: "穏やかな熊の夢は、力強い保護や安定が近くにあるサインかもしれません。",
        },
      },
    ],
  },
  {
    id: "wolf-situation",
    motifId: "wolf",
    prompt: "狼の夢でどんな状況でしたか？",
    type: "single",
    priority: 60,
    options: [
      {
        id: "chased",
        label: "追いかけられた・群れに囲まれた",
        scoreImpact: { anxiety: 3, relationships: 1 },
        interpretationHints: {
          fortune: "狼に追われる夢は、今の人間関係や状況で強いプレッシャーを感じているサインかもしれません。",
        },
      },
      {
        id: "lone",
        label: "一匹で遠くに見えた",
        scoreImpact: { relationships: 2, unresolved: 1 },
        interpretationHints: {
          fortune: "一匹狼の夢は、孤独感や自立への強い意識が出ているサインかもしれません。",
        },
      },
      {
        id: "howling",
        label: "遠吠えが聞こえた",
        scoreImpact: { unresolved: 2, change: 1 },
        interpretationHints: {
          fortune: "遠吠えを聞く夢は、どこかで心が叫んでいるサインかもしれません。自分の本音に耳を傾けてみましょう。",
        },
      },
    ],
  },
  {
    id: "god-message",
    motifId: "god",
    prompt: "神様の夢でどんなことがありましたか？",
    type: "single",
    priority: 59,
    options: [
      {
        id: "guided",
        label: "導かれた・言葉をもらった",
        scoreImpact: { recovery: 3, change: 1 },
        interpretationHints: {
          fortune: "神様に導かれる夢は、今の自分への深い加護やメッセージが届いているサインかもしれません。",
        },
      },
      {
        id: "protected",
        label: "守られた・安心を感じた",
        scoreImpact: { recovery: 2, relationships: 1 },
        interpretationHints: {
          fortune: "神様に守られる夢は、今のあなたへの祝福が近くにあることを映しているかもしれません。",
        },
      },
      {
        id: "distant",
        label: "遠くにいて届かなかった",
        scoreImpact: { loss: 2, unresolved: 1 },
        interpretationHints: {
          fortune: "遠い神様の夢は、今の自分が何か大きなものとの繋がりを求めているサインかもしれません。",
        },
      },
    ],
  },
  {
    id: "demon-reaction",
    motifId: "demon",
    prompt: "鬼・悪魔の夢でどう対応しましたか？",
    type: "single",
    priority: 58,
    options: [
      {
        id: "fled",
        label: "逃げた・追いかけられた",
        scoreImpact: { anxiety: 3, selfDefense: 1 },
        interpretationHints: {
          fortune: "鬼に追われる夢は、今の自分が強い恐怖やプレッシャーから逃げたいという気持ちを映していることがあります。",
        },
      },
      {
        id: "fought",
        label: "戦った・向き合った",
        scoreImpact: { selfDefense: 2, recovery: 1 },
        interpretationHints: {
          fortune: "鬼と戦う夢は、今の自分が恐怖や困難と正面から向き合おうとしているエネルギーが出ているサインかもしれません。",
        },
      },
      {
        id: "just-saw",
        label: "ただ見ていた・何もできなかった",
        scoreImpact: { unresolved: 2, anxiety: 1 },
        interpretationHints: {
          fortune: "見るだけの鬼の夢は、今の状況に対して何かできていないもどかしさが出ているサインかもしれません。",
        },
      },
    ],
  },
];
