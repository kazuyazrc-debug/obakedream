import type { FollowUpQuestion } from "@/types/dream";

export const batch27Questions: FollowUpQuestion[] = [
  {
    id: "ghost-who",
    motifId: "ghost",
    prompt: "夢の中の幽霊は誰でしたか？",
    type: "single",
    priority: 77,
    options: [
      {
        id: "known-person",
        label: "知っている人・知り合いだった",
        scoreImpact: { unresolved: 2, relationships: 1 },
        interpretationHints: {
          fortune: "知っている人の霊が出る夢は、その人との関係でまだ伝えていないことや、想いが残っているサインかもしれません。",
        },
      },
      {
        id: "unknown",
        label: "知らない人・顔がはっきりしなかった",
        scoreImpact: { anxiety: 2, unresolved: 1 },
        interpretationHints: {
          fortune: "知らない霊の夢は、自分の中の未処理の感情が形を変えて現れていることがあります。",
        },
      },
      {
        id: "ancestor",
        label: "先祖・亡くなった身内だった",
        scoreImpact: { recovery: 1, relationships: 2 },
        interpretationHints: {
          fortune: "先祖の霊が出る夢は、守られているというサインや、大切な気づきを届けようとしているメッセージと読まれることがあります。",
        },
      },
    ],
  },
  {
    id: "interview-result",
    motifId: "interview",
    prompt: "面接の夢はどんな結果でしたか？",
    type: "single",
    priority: 76,
    options: [
      {
        id: "went-well",
        label: "うまくいった・手ごたえがあった",
        scoreImpact: { desire: 2, recovery: 1 },
        interpretationHints: {
          fortune: "うまくいった面接夢は、今の自分の力への自信が育ちつつあるサインかもしれません。",
        },
      },
      {
        id: "struggled",
        label: "うまく話せなかった・緊張した",
        scoreImpact: { anxiety: 2, unresolved: 1 },
        interpretationHints: {
          fortune: "緊張する夢は、重要な場面への真剣さが出ているサインです。準備を一つずつ積み重ねるほど安心感が増してきます。",
        },
      },
      {
        id: "not-reached",
        label: "辿り着けなかった・途中で終わった",
        scoreImpact: { anxiety: 3, change: 1 },
        interpretationHints: {
          fortune: "辿り着けない夢は、今の自分が次の一歩を踏み出すことへの不安を正直に感じているサインです。一歩ずつ確認して進みましょう。",
        },
      },
    ],
  },
  {
    id: "confession-outcome",
    motifId: "confession",
    prompt: "告白はどんな結果でしたか？",
    type: "single",
    priority: 75,
    options: [
      {
        id: "accepted",
        label: "受け入れてもらえた・両思いだった",
        scoreImpact: { desire: 3, relationships: 2 },
        interpretationHints: {
          fortune: "受け入れられる夢は、今の自分が誰かとの繋がりを深く望んでいるサインかもしれません。",
        },
      },
      {
        id: "rejected",
        label: "断られた・うまくいかなかった",
        scoreImpact: { loss: 2, unresolved: 1 },
        interpretationHints: {
          fortune: "断られる夢は、傷つくことへの恐れや、勇気を出すことへの葛藤を映していることがあります。気持ちを受け止めながら、次の一歩を考えてみましょう。",
        },
      },
      {
        id: "couldnt-say",
        label: "結局言えなかった・途中で終わった",
        scoreImpact: { unresolved: 3, desire: 1 },
        interpretationHints: {
          fortune: "言えなかった夢は、まだ伝えられていない気持ちが心の中にあるサインかもしれません。",
        },
      },
    ],
  },
  {
    id: "betrayal-who",
    motifId: "betrayal",
    prompt: "誰に裏切られましたか？",
    type: "single",
    priority: 74,
    options: [
      {
        id: "close-person",
        label: "親しい友人や家族に裏切られた",
        scoreImpact: { relationships: 3, loss: 2 },
        interpretationHints: {
          fortune: "親しい人への裏切り夢は、その関係への深い期待と、傷つくことへの恐れが出ているサインかもしれません。",
        },
      },
      {
        id: "colleague",
        label: "職場の同僚や上司に裏切られた",
        scoreImpact: { anxiety: 2, unresolved: 2 },
        interpretationHints: {
          fortune: "職場での裏切り夢は、今の仕事環境での信頼関係に何か気になることがあるサインかもしれません。",
        },
      },
      {
        id: "unknown",
        label: "知らない人・曖昧な存在に裏切られた",
        scoreImpact: { anxiety: 1, unresolved: 2 },
        interpretationHints: {
          fortune: "曖昧な存在への裏切り夢は、自分の内側で何かへの不信感が積み重なっているサインのことがあります。",
        },
      },
    ],
  },
  {
    id: "divorce-feeling",
    motifId: "divorce",
    prompt: "離婚の夢でどんな気持ちでしたか？",
    type: "single",
    priority: 73,
    options: [
      {
        id: "relieved",
        label: "ほっとした・解放された気持ちだった",
        scoreImpact: { change: 3, recovery: 1 },
        interpretationHints: {
          fortune: "解放感のある離婚夢は、今の状況を変えたいという気持ちや、何かを手放すことへの準備が整いつつあるサインかもしれません。",
        },
      },
      {
        id: "sad",
        label: "悲しかった・惜しかった",
        scoreImpact: { loss: 3, unresolved: 1 },
        interpretationHints: {
          fortune: "悲しい離婚夢は、今の大切な関係をしっかり守りたいという気持ちを映しています。",
        },
      },
      {
        id: "confused",
        label: "困惑していた・実感がなかった",
        scoreImpact: { unresolved: 2, change: 1 },
        interpretationHints: {
          fortune: "困惑する夢は、今の関係や状況に対してまだ整理できていない気持ちがあるサインかもしれません。",
        },
      },
    ],
  },
  {
    id: "presentation-result",
    motifId: "presentation",
    prompt: "発表・プレゼンはどうなりましたか？",
    type: "single",
    priority: 72,
    options: [
      {
        id: "success",
        label: "うまくいった・評価された",
        scoreImpact: { recovery: 2, desire: 2 },
        interpretationHints: {
          fortune: "成功した発表夢は、今の自分の準備や努力が実を結ぼうとしているサインかもしれません。",
        },
      },
      {
        id: "failed",
        label: "失敗した・言葉が出なかった",
        scoreImpact: { anxiety: 3, unresolved: 1 },
        interpretationHints: {
          fortune: "失敗する発表夢は、重要な場面への真剣さの裏返しです。丁寧に準備するほど、本番の流れが整いやすくなります。",
        },
      },
      {
        id: "unprepared",
        label: "準備できていなかった・途中で止まった",
        scoreImpact: { anxiety: 2, unresolved: 2 },
        interpretationHints: {
          fortune: "準備不足の夢は、今の自分が「もっと準備したい」という声を出しているサインかもしれません。今できることを一つ確認してみましょう。",
        },
      },
    ],
  },
  {
    id: "treasure-what",
    motifId: "treasure",
    prompt: "宝物はどんなものでしたか？",
    type: "single",
    priority: 71,
    options: [
      {
        id: "gold-jewel",
        label: "金・宝石・輝くものだった",
        scoreImpact: { desire: 3, recovery: 1 },
        interpretationHints: {
          fortune: "輝く宝の夢は、今の自分が求めているものへの強いエネルギーが出ているサインかもしれません。",
        },
      },
      {
        id: "meaningful-item",
        label: "大切な思い出の品・特別なものだった",
        scoreImpact: { recovery: 2, relationships: 1 },
        interpretationHints: {
          fortune: "思い出の品の夢は、過去の大切な体験や人との繋がりが今の自分を支えているサインかもしれません。",
        },
      },
      {
        id: "unknown",
        label: "何かわからないが大切なものだった",
        scoreImpact: { desire: 2, change: 1 },
        interpretationHints: {
          fortune: "正体不明の宝の夢は、まだ見つかっていない自分の中の可能性を映していることがあります。",
        },
      },
    ],
  },
  {
    id: "war-position",
    motifId: "war",
    prompt: "戦争の夢での立場はどうでしたか？",
    type: "single",
    priority: 70,
    options: [
      {
        id: "fleeing",
        label: "逃げていた・巻き込まれていた",
        scoreImpact: { anxiety: 3, selfDefense: 1 },
        interpretationHints: {
          fortune: "逃げる戦争夢は、今の状況に強い圧力を感じているサインかもしれません。安全な場所を確保することが今は大切です。",
        },
      },
      {
        id: "fighting",
        label: "戦っていた・誰かと戦った",
        scoreImpact: { selfDefense: 2, anxiety: 2 },
        interpretationHints: {
          fortune: "戦う夢は、今の状況に真剣に向き合おうとしているエネルギーが出ているサインかもしれません。",
        },
      },
      {
        id: "watching",
        label: "遠くから見ていた・傍観していた",
        scoreImpact: { unresolved: 2, anxiety: 1 },
        interpretationHints: {
          fortune: "傍観する夢は、今の状況に対して直接関わることへの迷いが出ているサインかもしれません。",
        },
      },
    ],
  },
  {
    id: "prison-reason",
    motifId: "prison",
    prompt: "牢屋に入れられた理由はわかりましたか？",
    type: "single",
    priority: 69,
    options: [
      {
        id: "unjust",
        label: "身に覚えがなかった・不当だった",
        scoreImpact: { anxiety: 3, unresolved: 2 },
        interpretationHints: {
          fortune: "不当に閉じ込められる夢は、今の状況で理不尽さを感じているサインかもしれません。自分の気持ちをしっかり確認してみましょう。",
        },
      },
      {
        id: "own-fault",
        label: "自分のせいだと感じていた",
        scoreImpact: { unresolved: 3, loss: 1 },
        interpretationHints: {
          fortune: "自責感のある牢屋夢は、罪悪感や後悔が形になって出ているサインかもしれません。自分を責めすぎず、一歩ずつ前に進みましょう。",
        },
      },
      {
        id: "unclear",
        label: "理由がわからなかった・曖昧だった",
        scoreImpact: { anxiety: 2, unresolved: 2 },
        interpretationHints: {
          fortune: "理由不明の牢屋夢は、今の状況でどこかに縛られている感覚があるサインかもしれません。",
        },
      },
    ],
  },
  {
    id: "apology-who",
    motifId: "apology",
    prompt: "誰に謝りましたか（あるいは謝られましたか）？",
    type: "single",
    priority: 68,
    options: [
      {
        id: "family-close",
        label: "家族・大切な人に謝った",
        scoreImpact: { relationships: 3, recovery: 1 },
        interpretationHints: {
          fortune: "大切な人への謝罪夢は、その関係をもっと大切にしたいという気持ちが出ているサインかもしれません。",
        },
      },
      {
        id: "being-apologized",
        label: "自分が謝られた・許した",
        scoreImpact: { recovery: 2, relationships: 2 },
        interpretationHints: {
          fortune: "謝られる夢は、関係の回復や和解への流れが近づいているサインかもしれません。",
        },
      },
      {
        id: "could-not-apologize",
        label: "謝りたかったが謝れなかった",
        scoreImpact: { unresolved: 3, relationships: 1 },
        interpretationHints: {
          fortune: "謝れない夢は、まだ言えていない気持ちが心の奥に残っているサインかもしれません。今できる形で少しずつ伝えてみましょう。",
        },
      },
    ],
  },
];
