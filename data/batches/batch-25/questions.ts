import type { FollowUpQuestion } from "@/types/dream";

export const batch25Questions: FollowUpQuestion[] = [
  {
    id: "earthquake-scale",
    motifId: "earthquake",
    prompt: "夢の中の地震はどのくらいの規模でしたか？",
    type: "single",
    priority: 78,
    options: [
      {
        id: "small",
        label: "小さな揺れで気になった程度",
        scoreImpact: { anxiety: 1 },
        interpretationHints: {
          fortune: "小さな揺れは、変化のはじまりのサインかもしれません。今は一歩ずつ確かめて進むほど安定しやすいです。",
        },
      },
      {
        id: "large",
        label: "大きく揺れてとても怖かった",
        scoreImpact: { anxiety: 2 },
        interpretationHints: {
          fortune: "大きな揺れほど、変化のエネルギーも大きいかもしれません。焦らず足元を固め直す時期です。",
        },
      },
      {
        id: "destructive",
        label: "建物が崩れるほど激しかった",
        scoreImpact: { anxiety: 3, unresolved: 1 },
        interpretationHints: {
          fortune: "激しい揺れは、今抱えている不安が大きく出ているサインです。一つずつ安心の基盤を作り直しましょう。",
        },
      },
    ],
  },
  {
    id: "tsunami-escape",
    motifId: "tsunami",
    prompt: "津波から逃げることはできましたか？",
    type: "single",
    priority: 79,
    options: [
      {
        id: "escaped",
        label: "無事に高台に逃げられた",
        scoreImpact: { selfDefense: 2, recovery: 1 },
        interpretationHints: {
          fortune: "逃げきれた感覚は、どんな大きな波も乗り越えられるという内側の力を映しています。",
        },
      },
      {
        id: "barely",
        label: "ギリギリで助かった",
        scoreImpact: { selfDefense: 1, anxiety: 1 },
        interpretationHints: {
          fortune: "ギリギリでも助かった夢は、あなたに立ち向かう力があることを示しています。",
        },
      },
      {
        id: "overwhelmed",
        label: "波に飲み込まれてしまった",
        scoreImpact: { anxiety: 3, unresolved: 1 },
        interpretationHints: {
          fortune: "飲み込まれても夢から覚めました。今の圧迫感も、やがて引いていきます。安全な場所で休みましょう。",
        },
      },
    ],
  },
  {
    id: "storm-shelter",
    motifId: "storm",
    prompt: "嵐の中でどのようにしていましたか？",
    type: "single",
    priority: 76,
    options: [
      {
        id: "sheltered",
        label: "どこかに避難して嵐をやり過ごした",
        scoreImpact: { selfDefense: 1, recovery: 1 },
        interpretationHints: {
          fortune: "身を守る判断ができている夢は、今のあなたが自分を大切にする力を持っているサインです。",
        },
      },
      {
        id: "endured",
        label: "嵐の中でひたすら耐えていた",
        scoreImpact: { anxiety: 2 },
        interpretationHints: {
          fortune: "耐える夢は、今しんどい状況でも踏みとどまっていることを映しています。いつか嵐は過ぎます。",
        },
      },
      {
        id: "blown",
        label: "嵐に飛ばされそうになっていた",
        scoreImpact: { anxiety: 2, unresolved: 1 },
        interpretationHints: {
          fortune: "飛ばされそうな感覚は、今の状況に振り回されているサインかもしれません。まず安心できる場所を探しましょう。",
        },
      },
    ],
  },
  {
    id: "trapped-outcome",
    motifId: "being_trapped",
    prompt: "閉じ込められた状況はどうなりましたか？",
    type: "single",
    priority: 77,
    options: [
      {
        id: "escaped",
        label: "なんとか出口を見つけて脱出できた",
        scoreImpact: { selfDefense: 2, recovery: 1 },
        interpretationHints: {
          fortune: "出口を見つけた夢は、今の閉塞感にも必ず突破口があることを示しています。",
        },
      },
      {
        id: "stuck",
        label: "出口を探したが見つからなかった",
        scoreImpact: { anxiety: 2, unresolved: 2 },
        interpretationHints: {
          fortune: "出口が見えない夢は、今の状況を変えるヒントがまだ見えていないサインかもしれません。視点を変えてみましょう。",
        },
      },
      {
        id: "rescued",
        label: "誰かに助けてもらった",
        scoreImpact: { recovery: 1, selfDefense: 1 },
        interpretationHints: {
          fortune: "助けてもらえた夢は、今のあなたの周りにサポートがあることを映しているかもしれません。",
        },
      },
    ],
  },
  {
    id: "paralysis-feeling",
    motifId: "paralysis",
    prompt: "動けなかった時にどんな気持ちでしたか？",
    type: "single",
    priority: 78,
    options: [
      {
        id: "panic",
        label: "とにかく焦ってパニックだった",
        scoreImpact: { anxiety: 3 },
        interpretationHints: {
          fortune: "焦りが強い夢は、今の生活の中で何かに追い詰められているサインかもしれません。まず深呼吸を。",
        },
      },
      {
        id: "fighting",
        label: "怖いけれどなんとかしようとした",
        scoreImpact: { selfDefense: 1, anxiety: 1 },
        interpretationHints: {
          fortune: "動こうとする力がある夢は、今のあなたに粘り強さがあることを示しています。",
        },
      },
      {
        id: "gave-up",
        label: "あきらめてそのままにしていた",
        scoreImpact: { unresolved: 2, loss: 1 },
        interpretationHints: {
          fortune: "あきらめる夢は、今疲れていてエネルギーが不足しているサインかもしれません。まずゆっくり休みましょう。",
        },
      },
    ],
  },
  {
    id: "fired-reaction",
    motifId: "being_fired",
    prompt: "解雇されたことに対してどう感じましたか？",
    type: "single",
    priority: 76,
    options: [
      {
        id: "shocked",
        label: "ショックで何も言えなかった",
        scoreImpact: { anxiety: 2, unresolved: 1 },
        interpretationHints: {
          fortune: "ショックを受けた夢は、今職場での不安や評価への恐れが高まっているサインかもしれません。",
        },
      },
      {
        id: "accepted",
        label: "なんとなく納得していた",
        scoreImpact: { loss: 1, change: 1 },
        interpretationHints: {
          fortune: "納得できていた夢は、今の状況を変えたい気持ちが内側で整いつつあるサインかもしれません。",
        },
      },
      {
        id: "relieved",
        label: "むしろほっとした",
        scoreImpact: { change: 2, recovery: 1 },
        interpretationHints: {
          fortune: "ほっとした夢は、今の環境を変えることで新しい流れが生まれる準備ができているサインかもしれません。",
        },
      },
    ],
  },
  {
    id: "resignation-feeling",
    motifId: "resignation",
    prompt: "退職・辞める夢でどんな気持ちでしたか？",
    type: "single",
    priority: 74,
    options: [
      {
        id: "refreshed",
        label: "すっきりと清々しかった",
        scoreImpact: { change: 2, recovery: 1 },
        interpretationHints: {
          fortune: "清々しい夢は、変化への準備ができているサインかもしれません。新しい流れが動き出しやすい時期です。",
        },
      },
      {
        id: "reluctant",
        label: "後ろ髪を引かれる感じだった",
        scoreImpact: { loss: 2, unresolved: 1 },
        interpretationHints: {
          fortune: "名残惜しさが残る夢は、今の場所に大切なものがあることを映しています。焦らず、自分のペースで考えましょう。",
        },
      },
      {
        id: "anxious",
        label: "どこか不安や迷いがあった",
        scoreImpact: { anxiety: 1, unresolved: 2 },
        interpretationHints: {
          fortune: "迷いのある夢は、今の判断をもう少し丁寧に整理する時間が必要なサインかもしれません。",
        },
      },
    ],
  },
  {
    id: "pregnancy-tone",
    motifId: "pregnancy",
    prompt: "妊娠・出産の夢はどんな雰囲気でしたか？",
    type: "single",
    priority: 73,
    options: [
      {
        id: "joyful",
        label: "嬉しくて明るい感じだった",
        scoreImpact: { desire: 2, recovery: 1 },
        interpretationHints: {
          fortune: "明るい妊娠夢は、今の内側で何か新しいものが育っていることを映しているかもしれません。",
        },
      },
      {
        id: "uneasy",
        label: "戸惑いや不安があった",
        scoreImpact: { anxiety: 1, unresolved: 1 },
        interpretationHints: {
          fortune: "不安が混じる夢は、変化への準備と戸惑いが同時にある状態を映しています。焦らず一歩ずつ進みましょう。",
        },
      },
      {
        id: "surprised",
        label: "ただただ驚いていた",
        scoreImpact: { change: 1, unresolved: 1 },
        interpretationHints: {
          fortune: "驚きの夢は、自分でも気づいていない変化が近づいているサインかもしれません。",
        },
      },
    ],
  },
  {
    id: "transformation-direction",
    motifId: "transformation",
    prompt: "変身・姿が変わる夢はどんな感じでしたか？",
    type: "single",
    priority: 71,
    options: [
      {
        id: "empowered",
        label: "より強く自由になった感じがした",
        scoreImpact: { desire: 2, change: 1 },
        interpretationHints: {
          fortune: "力強くなる変身夢は、今の自分が新しいステージに向かっているサインかもしれません。",
        },
      },
      {
        id: "forced",
        label: "何かに変えられていく不安があった",
        scoreImpact: { anxiety: 2, unresolved: 1 },
        interpretationHints: {
          fortune: "変えられていく不安は、変化への抵抗感が強い時に出やすいです。自分のペースを大切にしましょう。",
        },
      },
      {
        id: "strange",
        label: "奇妙で不思議な感覚だった",
        scoreImpact: { change: 1, unresolved: 1 },
        interpretationHints: {
          fortune: "不思議な変身夢は、今の自分が変わりかけているという内側のサインかもしれません。",
        },
      },
    ],
  },
  {
    id: "power-outage-response",
    motifId: "power_outage",
    prompt: "停電・暗闇の夢でどう行動しましたか？",
    type: "single",
    priority: 74,
    options: [
      {
        id: "searched",
        label: "光を探して動き回った",
        scoreImpact: { selfDefense: 2 },
        interpretationHints: {
          fortune: "光を探した夢は、先が見えなくても動こうとする力がある証拠です。その行動力が道を開きます。",
        },
      },
      {
        id: "frozen",
        label: "その場で動けずにいた",
        scoreImpact: { anxiety: 2, unresolved: 1 },
        interpretationHints: {
          fortune: "動けない夢は、今エネルギーが不足しているサインかもしれません。まずゆっくり休むことが大切です。",
        },
      },
      {
        id: "adapted",
        label: "暗闇に慣れて少し落ち着いた",
        scoreImpact: { recovery: 1, change: 1 },
        interpretationHints: {
          fortune: "暗さに慣れた夢は、どんな状況にも適応できる柔軟さがあることを映しています。",
        },
      },
    ],
  },
];
