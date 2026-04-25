import type { FollowUpQuestion } from "@/types/dream";

export const batch26Questions: FollowUpQuestion[] = [
  {
    id: "funeral-role",
    motifId: "funeral",
    prompt: "葬式の夢で、あなたはどんな立場でしたか？",
    type: "single",
    priority: 78,
    options: [
      {
        id: "mourner",
        label: "参列者として見送っていた",
        scoreImpact: { loss: 2, relationships: 1 },
        interpretationHints: {
          fortune: "見送る夢は、誰かや何かとの別れをしっかり受け止めようとしているサインかもしれません。悲しみを感じることは、大切な証です。",
        },
      },
      {
        id: "unknown-funeral",
        label: "誰の葬式かわからなかった",
        scoreImpact: { unresolved: 2, change: 1 },
        interpretationHints: {
          fortune: "誰かわからない葬式の夢は、今の自分の中で何かが終わりかけていることへの気づきを映している場合があります。",
        },
      },
      {
        id: "own-funeral",
        label: "自分の葬式だった",
        scoreImpact: { change: 3, loss: 1 },
        interpretationHints: {
          fortune: "自分の葬式の夢は、大きな変化や再スタートへの準備を映していることがあります。終わりは次の始まりへの扉です。",
        },
      },
    ],
  },
  {
    id: "accident-type",
    motifId: "accident",
    prompt: "どんな事故でしたか？",
    type: "single",
    priority: 78,
    options: [
      {
        id: "vehicle",
        label: "車や乗り物の事故だった",
        scoreImpact: { anxiety: 2, unresolved: 1 },
        interpretationHints: {
          fortune: "乗り物の事故夢は、今の生活の「流れ」に危うさを感じているサインかもしれません。スピードを落として確認する時間を作りましょう。",
        },
      },
      {
        id: "fall",
        label: "転んだり落ちたりした",
        scoreImpact: { anxiety: 1, loss: 1 },
        interpretationHints: {
          fortune: "転ぶ夢は、今のペースを少し落として足元を確認することで、流れが整いやすくなります。",
        },
      },
      {
        id: "witnessed",
        label: "事故を目撃した",
        scoreImpact: { anxiety: 1, unresolved: 2 },
        interpretationHints: {
          fortune: "目撃する夢は、何か気になっていることを放置しているサインかもしれません。気になっていることを一つ整理してみましょう。",
        },
      },
    ],
  },
  {
    id: "flood-response",
    motifId: "flood",
    prompt: "洪水・浸水に対してどうしていましたか？",
    type: "single",
    priority: 76,
    options: [
      {
        id: "escaped",
        label: "なんとか逃げることができた",
        scoreImpact: { selfDefense: 2, recovery: 1 },
        interpretationHints: {
          fortune: "逃げられた夢は、今の状況にも対処できる力があることを映しています。",
        },
      },
      {
        id: "watching",
        label: "水が迫ってくるのを見ていた",
        scoreImpact: { anxiety: 2, unresolved: 1 },
        interpretationHints: {
          fortune: "状況を眺める夢は、今は動けないと感じているサインかもしれません。一つだけ行動してみると流れが変わります。",
        },
      },
      {
        id: "submerged",
        label: "水に飲み込まれてしまった",
        scoreImpact: { anxiety: 3, loss: 1 },
        interpretationHints: {
          fortune: "飲み込まれる夢は、今の状況の重さを正直に感じているサインです。一人で抱え込まず、誰かに話してみましょう。",
        },
      },
    ],
  },
  {
    id: "wedding-role",
    motifId: "wedding",
    prompt: "結婚式での夢での自分はどんな立場でしたか？",
    type: "single",
    priority: 78,
    options: [
      {
        id: "getting-married",
        label: "自分が結婚する側だった",
        scoreImpact: { desire: 2, change: 2 },
        interpretationHints: {
          fortune: "自分が主役の結婚夢は、人生の大切な変化への準備や期待が高まっているサインかもしれません。",
        },
      },
      {
        id: "guest",
        label: "参列者として見ていた",
        scoreImpact: { relationships: 1, recovery: 1 },
        interpretationHints: {
          fortune: "参列する夢は、誰かの幸せを純粋に応援したい気持ちや、自分の関係性を見つめ直す時期を示しているかもしれません。",
        },
      },
      {
        id: "anxious",
        label: "式がうまくいかなくて不安だった",
        scoreImpact: { anxiety: 2, unresolved: 2 },
        interpretationHints: {
          fortune: "うまくいかない結婚夢は、大切な決断への緊張感が出ているサインです。焦らず、準備を一つずつ整えましょう。",
        },
      },
    ],
  },
  {
    id: "argument-with",
    motifId: "argument",
    prompt: "誰と言い争いになりましたか？",
    type: "single",
    priority: 76,
    options: [
      {
        id: "family",
        label: "家族と言い争った",
        scoreImpact: { relationships: 2, unresolved: 2 },
        interpretationHints: {
          fortune: "家族との口論夢は、家族関係で言えていないことがあるサインかもしれません。まず自分の気持ちを整理してみましょう。",
        },
      },
      {
        id: "colleague",
        label: "職場の人や上司と言い争った",
        scoreImpact: { anxiety: 2, unresolved: 1 },
        interpretationHints: {
          fortune: "職場での口論夢は、仕事の中でまだ解決できていない緊張感が出ているサインかもしれません。",
        },
      },
      {
        id: "unknown",
        label: "知らない人や曖昧な相手と言い争った",
        scoreImpact: { anxiety: 1, unresolved: 2 },
        interpretationHints: {
          fortune: "曖昧な相手との口論夢は、自分の内側での葛藤が外に映し出されていることがあります。",
        },
      },
    ],
  },
  {
    id: "graduation-feeling",
    motifId: "graduation",
    prompt: "卒業夢での気持ちはどうでしたか？",
    type: "single",
    priority: 75,
    options: [
      {
        id: "proud",
        label: "達成感があって嬉しかった",
        scoreImpact: { recovery: 2, change: 1 },
        interpretationHints: {
          fortune: "達成感のある卒業夢は、今の自分がしっかりと歩んできた証です。次のステージも自信を持って進めます。",
        },
      },
      {
        id: "sad",
        label: "別れが惜しくて寂しかった",
        scoreImpact: { loss: 2, relationships: 1 },
        interpretationHints: {
          fortune: "別れを惜しむ夢は、過去の大切なものを心がしっかり覚えているサインです。懐かしさは次への力になります。",
        },
      },
      {
        id: "anxious",
        label: "次が不安で落ち着かなかった",
        scoreImpact: { anxiety: 2, unresolved: 1 },
        interpretationHints: {
          fortune: "次への不安は、それだけ真剣に向き合っている証拠です。一歩ずつ確かめながら進むほど安心が戻りやすいです。",
        },
      },
    ],
  },
  {
    id: "surgery-outcome",
    motifId: "surgery",
    prompt: "手術の夢はどうなりましたか？",
    type: "single",
    priority: 74,
    options: [
      {
        id: "successful",
        label: "無事に終わって回復していた",
        scoreImpact: { recovery: 2, change: 1 },
        interpretationHints: {
          fortune: "成功した手術夢は、今の問題も乗り越えられるという内側の確信を映しているかもしれません。",
        },
      },
      {
        id: "waiting",
        label: "手術を待っている状態だった",
        scoreImpact: { anxiety: 2, unresolved: 2 },
        interpretationHints: {
          fortune: "待つ夢は、今の状況の結果が出るまでの緊張感が出ているサインです。できることをしたら、あとは流れに任せてみましょう。",
        },
      },
      {
        id: "afraid",
        label: "怖くてパニックだった",
        scoreImpact: { anxiety: 3, selfDefense: 1 },
        interpretationHints: {
          fortune: "怖さが強い夢は、今何かに大きな不安を感じているサインです。信頼できる人に話してみることが助けになります。",
        },
      },
    ],
  },
  {
    id: "moving-feeling",
    motifId: "moving_house",
    prompt: "引越しの夢でどんな気持ちでしたか？",
    type: "single",
    priority: 74,
    options: [
      {
        id: "excited",
        label: "新しい場所に期待があった",
        scoreImpact: { desire: 2, change: 2 },
        interpretationHints: {
          fortune: "期待感のある引越し夢は、変化への準備が整っているサインです。新しい流れを素直に受け入れてみましょう。",
        },
      },
      {
        id: "reluctant",
        label: "今の場所を離れたくなかった",
        scoreImpact: { loss: 2, unresolved: 1 },
        interpretationHints: {
          fortune: "離れたくない気持ちは、今の場所や人への愛着の深さを映しています。変化と大切なものを両立する方法を探してみましょう。",
        },
      },
      {
        id: "chaotic",
        label: "荷物が多くて混乱していた",
        scoreImpact: { anxiety: 2, unresolved: 1 },
        interpretationHints: {
          fortune: "混乱した引越し夢は、今の生活で整理すべきものが多くなっているサインかもしれません。一つずつ片付けていきましょう。",
        },
      },
    ],
  },
  {
    id: "reunion-feeling",
    motifId: "reunion",
    prompt: "再会の夢でどんな気持ちでしたか？",
    type: "single",
    priority: 73,
    options: [
      {
        id: "warm",
        label: "懐かしくて温かい気持ちだった",
        scoreImpact: { recovery: 2, relationships: 1 },
        interpretationHints: {
          fortune: "温かい再会夢は、過去の大切な繋がりが今の自分を支えていることを映しています。",
        },
      },
      {
        id: "awkward",
        label: "何となく気まずかった",
        scoreImpact: { unresolved: 2, relationships: 1 },
        interpretationHints: {
          fortune: "気まずい再会夢は、過去の関係でまだ整理できていない気持ちがあるサインかもしれません。",
        },
      },
      {
        id: "surprised",
        label: "驚きが大きかった",
        scoreImpact: { change: 1, relationships: 1 },
        interpretationHints: {
          fortune: "驚きのある再会夢は、過去と現在の自分の変化を感じている時に出やすいです。",
        },
      },
    ],
  },
  {
    id: "promotion-feeling",
    motifId: "promotion",
    prompt: "昇進・出世の夢でどう感じましたか？",
    type: "single",
    priority: 72,
    options: [
      {
        id: "happy",
        label: "認められて嬉しかった",
        scoreImpact: { desire: 2, recovery: 1 },
        interpretationHints: {
          fortune: "嬉しい昇進夢は、今の努力が実を結ぶ流れが近づいているサインかもしれません。",
        },
      },
      {
        id: "pressured",
        label: "責任が重くてプレッシャーだった",
        scoreImpact: { anxiety: 2, unresolved: 1 },
        interpretationHints: {
          fortune: "プレッシャーを感じる昇進夢は、上に行くほどの責任感が高まっているサインです。まず今できることを一つ確かめましょう。",
        },
      },
      {
        id: "unreal",
        label: "なんか現実感がなかった",
        scoreImpact: { change: 1, desire: 1 },
        interpretationHints: {
          fortune: "現実感のない夢は、今の自分がそれを信じきれていないサインかもしれません。まず小さな成功を積み重ねてみましょう。",
        },
      },
    ],
  },
];
