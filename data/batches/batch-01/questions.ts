import type { FollowUpQuestion } from "@/types/dream";

export const batch01Questions: FollowUpQuestion[] = [
  {
    id: "snake-presence",
    motifId: "snake",
    prompt: "蛇はどのような色や様子でしたか？",
    type: "single",
    priority: 92,
    options: [
      { id: "large-scary", label: "大きくて怖い", scoreImpact: { anxiety: 2, selfDefense: 1 } },
      { id: "white-calm", label: "白く穏やか", scoreImpact: { recovery: 2, change: 1 } },
      { id: "attacking", label: "襲いかかってきた", scoreImpact: { anxiety: 2, selfDefense: 2 } },
    ],
  },
    {
      id: "water-state",
      motifId: "water",
      prompt: "水の状態はどれに近かったですか？",
      type: "single",
      priority: 88,
      options: [
        {
          id: "clear",
          label: "澄んでいた",
          scoreImpact: { recovery: 2 },
          interpretationHints: {
            summary:
              "澄んだ水の印象は、感情の流れが少しずつ整い、心の奥で静けさを取り戻そうとしている時に現れやすい象徴です。",
            fortune:
              "無理に急がなくても、自然に落ち着きを取り戻しやすい流れが近づいている兆しとして読めます。",
            actionHint:
              "心が静かだった場面をひとつ思い出し、その感覚を保てる時間を短くでも取ってみてください。",
          },
        },
        {
          id: "muddy",
          label: "濁っていた",
          scoreImpact: { unresolved: 2, anxiety: 1 },
          interpretationHints: {
            summary:
              "濁った水の夢には、気持ちが混ざり合って輪郭をつかみにくくなっている時の揺れが映ることがあります。",
            fortune:
              "答えを急がずにいるほど、いま濁って見えているものの中から大事な感情が見分けやすくなっていくでしょう。",
            actionHint:
              "いま抱えている気持ちを良い悪いで分けず、そのまま短い言葉で書き出してみると流れが整いやすくなります。",
          },
        },
        {
          id: "overflowing",
          label: "あふれていた",
          scoreImpact: { anxiety: 2, change: 1 },
          interpretationHints: {
            summary:
              "水があふれる夢は、感情や出来事の流れが一度に押し寄せてきて、心の器を超えそうになっている時に出やすい象徴です。",
            fortune:
              "いまは波が大きい時期ですが、流れを細かく分けるほど扱いやすさが戻ってきやすい兆しがあります。",
            actionHint:
              "抱えているものを一度に整えようとせず、今日はひとつだけ量を減らすつもりで動いてみてください。",
          },
        },
      ],
    },
    {
      id: "sea-condition",
      motifId: "sea",
      prompt: "海はどんな印象でしたか？",
      type: "single",
      priority: 86,
      options: [
        {
          id: "calm-sea",
          label: "穏やか",
          scoreImpact: { recovery: 2, desire: 1 },
          interpretationHints: {
            summary:
              "穏やかな海の夢は、大きな感情や可能性を前にしながらも、今のあなたが静かに受け止め直せる余白を持ち始めていることを映す場合があります。",
            fortune:
              "広がりのある流れが近づいていても、いまは無理に飛び込むより穏やかなまま見渡すことで運を整えやすいでしょう。",
            actionHint:
              "視界が開ける感覚を大切にして、今日は少し先のことを落ち着いて眺める時間を取ってみてください。",
          },
        },
        {
          id: "rough-sea",
          label: "荒れていた",
          scoreImpact: { anxiety: 2, change: 1 },
          interpretationHints: {
            summary:
              "荒れた海の印象には、感情や環境の波が大きく、いまは圧に飲まれない距離感を探している時の揺れがにじむことがあります。",
            fortune:
              "流れは強いものの、勢いに巻き込まれず足場を選ぶほど次の判断は安定しやすくなっていきます。",
            actionHint:
              "大きな決断を急がず、今日は波の強い話題や予定をひとつだけ静かに見直してみてください。",
          },
        },
        {
          id: "deep-sea",
          label: "深さが印象的",
          scoreImpact: { change: 2, unresolved: 1 },
          interpretationHints: {
            summary:
              "海の深さが残る夢は、まだ言葉にしきれない感情や、簡単には測れない広がりを心が感じ取っている時に出やすい象徴です。",
            fortune:
              "すぐに答えを出さないことで、今は見えにくい意味や選択肢がゆっくり浮かび上がりやすくなるでしょう。",
            actionHint:
              "結論を急ぐより、今日は気になった深い感覚だけをそのまま覚えておくつもりで過ごしてみてください。",
          },
        },
      ],
    },
    {
      id: "house-condition",
      motifId: "house",
      prompt: "家はどんな状態でしたか？",
      type: "single",
      priority: 80,
      options: [
        {
          id: "safe-house",
          label: "安全で落ち着く",
          scoreImpact: { recovery: 2 },
          interpretationHints: {
            summary:
              "落ち着く家の印象は、心のどこかで安心できる居場所や、自分を休ませる感覚を求めている時に現れやすい象徴です。",
            fortune:
              "いまは土台を整えるほど流れが安定しやすく、焦って広げるより守りを固めることで良い兆しが育ちやすいでしょう。",
            actionHint:
              "まずは身の回りの一角だけでも、ほっとできる形に整えてみると今の流れに合いやすくなります。",
          },
        },
        {
          id: "broken-house",
          label: "壊れていた",
          scoreImpact: { loss: 2, anxiety: 1 },
          interpretationHints: {
            summary:
              "壊れた家の夢には、安心の土台が揺らいでいる感覚や、整えたいのに追いついていない部分への気がかりがにじむことがあります。",
            fortune:
              "乱れをそのまま責めるより、直せる場所から少しずつ手を入れることで流れも静まりやすくなっていきます。",
            actionHint:
              "全部を立て直そうとせず、いま気になっているほころびをひとつだけ整えるところから始めてみてください。",
          },
        },
        {
          id: "unknown-house",
          label: "見慣れない家だった",
          scoreImpact: { change: 1, unresolved: 1 },
          interpretationHints: {
            summary:
              "見慣れない家は、まだ知らない自分の内側や、これから入っていく新しい環境の気配を映すことがあります。",
            fortune:
              "未知の流れに触れやすい時期ですが、怖がるだけでなく少しずつ輪郭を知ることで居心地も変わっていくでしょう。",
            actionHint:
              "新しく気になっている場所や役割があるなら、まずは入口だけ確かめるつもりで近づいてみるのがおすすめです。",
          },
        },
      ],
    },
  {
    id: "childhood-home-feeling",
    motifId: "childhood_home",
    prompt: "実家にいた時の気持ちは？",
    type: "single",
    priority: 90,
    options: [
      { id: "nostalgic", label: "懐かしい", scoreImpact: { recovery: 1, unresolved: 1 } },
      { id: "heavy", label: "重苦しい", scoreImpact: { unresolved: 2, relationships: 1 } },
      { id: "relieved", label: "ほっとした", scoreImpact: { recovery: 2 } },
    ],
  },
    {
      id: "school-scene",
      motifId: "school",
      prompt: "学校では何が強く目立っていましたか？",
      type: "single",
      priority: 84,
      options: [
        {
          id: "exam",
          label: "試験や課題",
          scoreImpact: { anxiety: 2, unresolved: 1 },
          interpretationHints: {
            summary:
              "学校で試験や課題が目立つ夢には、できるかどうかを測られる感覚や、期待に応えたい気持ちが強まっている時の緊張が映ることがあります。",
            fortune:
              "結果を急ぐより、基礎を整え直すほど流れが安定しやすい時期として読めます。",
            actionHint:
              "今日は評価を気にしすぎず、いま確認したい課題をひとつだけ小さく片づけてみてください。",
          },
        },
        {
          id: "classroom",
          label: "教室の空気",
          scoreImpact: { relationships: 1, unresolved: 1 },
          interpretationHints: {
            summary:
              "教室の空気が印象に残る夢は、その場にどう馴染むか、どんな立ち位置でいたいかを心が静かに確かめている時に現れやすい象徴です。",
            fortune:
              "所属や関係の流れは、目立つ行動よりも場の空気を整えることでやわらぎやすい兆しがあります。",
            actionHint:
              "今日は周囲に合わせることだけでなく、自分が落ち着ける距離感もひとつ意識してみてください。",
          },
        },
        {
          id: "lost-school",
          label: "学校で迷った",
          scoreImpact: { anxiety: 1, unresolved: 2 },
          interpretationHints: {
            summary:
              "学校で迷う夢には、以前の基準や役割に戻されるような感覚の中で、今の自分の居場所を探している気配がにじむことがあります。",
            fortune:
              "いまは答えを急がず、どこで迷いやすいのかを見極めるほど流れも落ち着きやすくなっていきます。",
            actionHint:
              "迷う感覚が強い日は、全部を決めるより『ここまでは進む』という小さな目印だけ置いてみてください。",
          },
        },
      ],
    },
  {
    id: "friend-tone",
    motifId: "friend",
    prompt: "友人との関係は夢の中でどう見えましたか？",
    type: "single",
    priority: 76,
    options: [
      { id: "warm", label: "温かい", scoreImpact: { relationships: 2, recovery: 1 } },
      { id: "awkward", label: "ぎこちない", scoreImpact: { unresolved: 2, relationships: 1 } },
      { id: "conflict", label: "衝突があった", scoreImpact: { selfDefense: 2, relationships: 1 } },
    ],
  },
  {
    id: "family-role",
    motifId: "family",
    prompt: "家族の中であなたはどんな立場でしたか？",
    type: "single",
    priority: 78,
    options: [
      {
        id: "protected",
        label: "守られていた",
        scoreImpact: { recovery: 2, relationships: 1 },
        interpretationHints: {
          psychology:
            "家族に受け止めてもらいたい気持ちや、安心できる居場所を確かめたい思いが映っているのかもしれません。",
        },
      },
      {
        id: "caretaker",
        label: "支えていた",
        scoreImpact: { selfDefense: 1, relationships: 2 },
        interpretationHints: {
          psychology:
            "家族のために気を張りすぎていないか、役割を背負い込みやすい時期であることをそっと示している場合があります。",
        },
      },
      {
        id: "distant",
        label: "距離があった",
        scoreImpact: { unresolved: 2, loss: 1 },
        interpretationHints: {
          psychology:
            "家族とのあいだに言葉にしにくい距離や、整理しきれていない感情が残っているのかもしれません。",
        },
      },
    ],
  },
  {
    id: "family-member",
    motifId: "family",
    prompt: "夢の中で、どの家族の印象がいちばん強く残っていましたか？",
    type: "single",
    priority: 72,
    options: [
      {
        id: "father",
        label: "父",
        scoreImpact: { relationships: 1, unresolved: 1 },
        interpretationHints: {
          summary: "父親の姿は、評価や責任との向き合い方を静かに映し出すことがあります。",
          actionHint:
            "責任や正しさが気になる日は、まず自分の本音を落ち着いて確かめる時間を取ってみてください。",
        },
      },
      {
        id: "mother",
        label: "母",
        scoreImpact: { relationships: 1, recovery: 1 },
        interpretationHints: {
          summary: "母親の姿は、安心したい気持ちや受け止められたい思いに光を当てやすい象徴です。",
          actionHint:
            "安心できる相手や場所を思い出し、ひと息つける時間を少しだけ確保してみるのもよさそうです。",
        },
      },
      {
        id: "grandparent",
        label: "祖父母",
        scoreImpact: { recovery: 1, loss: 1 },
        interpretationHints: {
          summary:
            "祖父母の姿は、懐かしさや受け継いできた感覚をそっと呼び戻す象徴になりやすいです。",
          actionHint:
            "懐かしい記憶や大切にしてきた習慣を、無理のない形で思い出してみるのも穏やかな助けになります。",
        },
      },
      {
        id: "siblings",
        label: "兄弟姉妹",
        scoreImpact: { relationships: 1, unresolved: 1 },
        interpretationHints: {
          summary: "兄弟姉妹の姿は、近さの中にある比較や役割意識を映すことがあります。",
          actionHint:
            "比べる気持ちが強まる日は、自分の歩幅や今のペースに意識を戻してみると少し楽になります。",
        },
      },
      {
        id: "child",
        label: "息子・娘",
        scoreImpact: { desire: 1, selfDefense: 1 },
        interpretationHints: {
          summary: "子どもの姿は、守りたい気持ちや未来へのまなざしを映しやすい象徴です。",
          actionHint:
            "守りたいものがはっきりしている時ほど、ひとりで抱え込まずに小さく助けを求めることも大切です。",
        },
      },
      {
        id: "unclear",
        label: "はっきりしない",
        scoreImpact: { relationships: 1 },
        interpretationHints: {
          summary:
            "誰だったか曖昧な家族の姿は、身近な関係全体にゆるく広がる気がかりやぬくもりを映していることがあります。",
        },
      },
    ],
  },
    {
      id: "stranger-distance",
      motifId: "stranger",
      prompt: "知らない人との距離感は？",
      type: "single",
      priority: 82,
      options: [
        {
          id: "friendly",
          label: "親しげだった",
          scoreImpact: { change: 1, relationships: 1 },
          interpretationHints: {
            summary:
              "親しげな知らない人の夢は、まだ自分で気づいていない一面や、新しい出会いの入り口をやわらかく受け取る準備が進んでいる時に現れやすい象徴です。",
            fortune:
              "未知のものに対しても、少し心を開くほど意外な助けや気づきが入ってきやすい流れがあります。",
            actionHint:
              "今日は小さな違和感より、小さな好意や興味のほうに一歩だけ近づいてみるとよさそうです。",
          },
        },
        {
          id: "watching",
          label: "見られていた",
          scoreImpact: { anxiety: 1, selfDefense: 1 },
          interpretationHints: {
            summary:
              "見られている感覚の夢には、他人の視線や評価を意識しすぎて、自分の振る舞いを強く調整している時の緊張が映ることがあります。",
            fortune:
              "周囲の反応に敏感になりやすい時期ですが、視線の意味を決めつけないほど気持ちは軽くなりやすいでしょう。",
            actionHint:
              "今日は人の目を読み切ろうとするより、自分がどう感じたかを先に確かめてみてください。",
          },
        },
        {
          id: "threatening",
          label: "怖かった",
          scoreImpact: { anxiety: 2, selfDefense: 1 },
          interpretationHints: {
            summary:
              "怖い知らない人の夢は、未知のものそのものより、まだ名前のつかない不安や警戒心が姿を借りて現れている場合があります。",
            fortune:
              "いまは無理に受け入れるより、安全な距離を保ちながら様子を見ることで流れを整えやすくなります。",
            actionHint:
              "不安を根性で越えようとせず、今日は自分が安心できる条件をひとつ明確にしてみてください。",
          },
        },
      ],
    },
    {
      id: "chased-ending",
      motifId: "being_chased",
      prompt: "追われた先はどう終わりましたか？",
      type: "single",
      priority: 96,
      options: [
        {
          id: "escaped",
          label: "逃げ切った",
          scoreImpact: { recovery: 2, selfDefense: 1 },
          interpretationHints: {
            summary:
              "追われながらも逃げ切った流れは、今のあなたにまだ守り抜ける力が残っていることを映している場合があります。",
            fortune:
              "張りつめていた流れが少しずつほどけ、出口の見え方が戻ってきやすい兆しとして読めます。",
            actionHint:
              "急いで決着をつけるより、まずは安心できる距離を取り戻すことを優先してみてください。",
          },
        },
        {
          id: "caught",
          label: "捕まった",
          scoreImpact: { anxiety: 2, unresolved: 2 },
          interpretationHints: {
            summary:
              "捕まる結末は、避けたいものが心の中で大きくなり、簡単には脇へ置けなくなっている合図かもしれません。",
            fortune:
              "いまは流れに押されやすい時期ですが、向き合い方を変えることで重さの質も変わっていきます。",
            actionHint:
              "ひとりで抱え込まず、何に追われている感覚なのかを言葉にしてみると流れが整いやすくなります。",
          },
        },
        {
          id: "woke-up",
          label: "途中で目が覚めた",
          scoreImpact: { anxiety: 1, unresolved: 2 },
          interpretationHints: {
            summary:
              "途中で目が覚めた流れには、まだ触れきれない緊張や、区切りきれない気配が残っていることがあります。",
            fortune:
              "結論を急がず様子を見ることで、ぼやけていた不安の輪郭が少しずつ見えやすくなる時期です。",
            actionHint:
              "答えを急ぐより、気になった場面だけを静かに振り返ってみると次の読みが深まりやすくなります。",
          },
        },
      ],
    },
  {
    id: "falling-ending",
    motifId: "falling",
    prompt: "落ちた後、どうなりましたか？",
    type: "single",
    priority: 88,
    options: [
      { id: "landed", label: "着地した", scoreImpact: { recovery: 2 } },
      { id: "kept-falling", label: "落ち続けた", scoreImpact: { anxiety: 2, unresolved: 1 } },
      { id: "impact", label: "ぶつかった", scoreImpact: { loss: 2, anxiety: 1 } },
    ],
  },
  {
    id: "flying-control",
    motifId: "flying",
    prompt: "飛ぶ感覚は自由に操れましたか？",
    type: "single",
    priority: 82,
    options: [
      { id: "controlled", label: "自由に飛べた", scoreImpact: { desire: 2, recovery: 1 } },
      { id: "unstable", label: "不安定だった", scoreImpact: { anxiety: 1, change: 1 } },
      { id: "could-not-land", label: "降りられなかった", scoreImpact: { unresolved: 2, anxiety: 1 } },
    ],
  },
  {
    id: "death-target",
    motifId: "death",
    prompt: "死に関わったのは誰でしたか？",
    type: "single",
    priority: 92,
    options: [
      { id: "self", label: "自分", scoreImpact: { change: 2, loss: 1 } },
      { id: "close-person", label: "身近な人", scoreImpact: { relationships: 2, loss: 2 } },
      { id: "unknown", label: "知らない人", scoreImpact: { change: 1, unresolved: 1 } },
    ],
  },
  {
    id: "teeth-condition",
    motifId: "teeth",
    prompt: "歯はどうなっていましたか？",
    type: "single",
    priority: 90,
    options: [
      { id: "fell-out", label: "抜けた", scoreImpact: { loss: 2, anxiety: 1 } },
      { id: "crumbled", label: "砕けた", scoreImpact: { anxiety: 2, unresolved: 1 } },
      { id: "cleaned", label: "磨いていた", scoreImpact: { recovery: 1, selfDefense: 1 } },
    ],
  },
  {
    id: "baby-care",
    motifId: "baby",
    prompt: "赤ちゃんとはどんな関わりでしたか？",
    type: "single",
    priority: 80,
    options: [
      { id: "holding", label: "抱いていた", scoreImpact: { recovery: 1, desire: 1 } },
      { id: "crying", label: "泣いていた", scoreImpact: { anxiety: 1, selfDefense: 1 } },
      { id: "lost-baby", label: "見失った", scoreImpact: { unresolved: 2, loss: 1 } },
    ],
  },
  {
    id: "cat-behavior",
    motifId: "cat",
    prompt: "猫はどんな様子でしたか？",
    type: "single",
    priority: 74,
    options: [
      { id: "relaxed-cat", label: "なついていた", scoreImpact: { recovery: 1, relationships: 1 } },
      { id: "scratched", label: "引っかいた", scoreImpact: { selfDefense: 2, anxiety: 1 } },
      { id: "ran-away", label: "逃げた", scoreImpact: { unresolved: 1, desire: 1 } },
    ],
  },
  {
    id: "dog-behavior",
    motifId: "dog",
    prompt: "犬はあなたにどんな反応をしていましたか？",
    type: "single",
    priority: 74,
    options: [
      { id: "friendly-dog", label: "寄り添っていた", scoreImpact: { recovery: 2, relationships: 1 } },
      { id: "barking", label: "吠えていた", scoreImpact: { selfDefense: 1, anxiety: 1 } },
      { id: "biting", label: "噛んできた", scoreImpact: { anxiety: 2, relationships: 1 } },
    ],
  },
    {
      id: "train-flow",
      motifId: "train",
      prompt: "電車の流れはどうでしたか？",
      type: "single",
      priority: 86,
      options: [
        {
          id: "on-time",
          label: "順調に進んだ",
          scoreImpact: { recovery: 1, change: 1 },
          interpretationHints: {
            summary:
              "電車が順調に進む夢は、今の流れにある程度乗れていて、切り替わりの中でも自分の足並みを保てている時に現れやすい象徴です。",
            fortune:
              "焦って先回りしすぎなくても、今のペースを保つことで自然に次の段階へ進みやすい時期でしょう。",
            actionHint:
              "今日は新しいことを増やすより、すでに動き出している流れを一つ丁寧に続けてみてください。",
          },
        },
        {
          id: "missed-train",
          label: "乗り遅れた",
          scoreImpact: { anxiety: 2, unresolved: 1 },
          interpretationHints: {
            summary:
              "電車に乗り遅れる夢には、流れに置いていかれたくない気持ちや、間に合わせたい焦りが強くにじむことがあります。",
            fortune:
              "いまは取り戻そうとして慌てるより、何を逃したように感じているのかを見直すほど流れが整いやすくなります。",
            actionHint:
              "今日は遅れを埋めることより、次に乗るための余白をひとつ作るつもりで予定を見直してみてください。",
          },
        },
        {
          id: "wrong-train",
          label: "違う方向へ向かった",
          scoreImpact: { change: 1, unresolved: 2 },
          interpretationHints: {
            summary:
              "違う方向の電車へ向かう夢は、進みたい気持ちはあるのに、いまの選び方が本音と少しずれている時に出やすい象徴です。",
            fortune:
              "遠回りに見える流れも、方向を見直すきっかけになれば次の判断はかえって整いやすくなるでしょう。",
            actionHint:
              "正しいかどうかを急ぐより、今日は『今の自分はどこへ向かいたいのか』を短く言葉にしてみてください。",
          },
        },
      ],
    },
    {
      id: "late-destination",
      motifId: "being_late",
      prompt: "どこに遅れそうでしたか？",
      type: "single",
      priority: 94,
      options: [
        {
          id: "school-work",
          label: "学校や仕事",
          scoreImpact: { anxiety: 2, unresolved: 1 },
          interpretationHints: {
            summary:
              "学校や仕事へ遅れそうな流れは、評価や責任にきちんと応えたい気持ちが強まっている時に現れやすい象徴です。",
            fortune:
              "焦りが先に立ちやすい一方で、段取りを整えるほど流れを立て直しやすい時期でもあります。",
            actionHint:
              "やることを一度小さく並べ直して、いま本当に急ぐものから順に手をつけてみてください。",
          },
        },
        {
          id: "promise",
          label: "約束",
          scoreImpact: { relationships: 2, anxiety: 1 },
          interpretationHints: {
            summary:
              "約束に遅れそうな夢には、相手を待たせたくない気持ちや、関係を大切に守りたい思いがにじむことがあります。",
            fortune:
              "対人の流れは繊細ですが、ひとこと添えるだけでも空気をやわらげやすい兆しがあります。",
            actionHint:
              "気になる相手がいるなら、完璧な言葉でなくても今の気持ちを少しだけ丁寧に伝えてみてください。",
          },
        },
        {
          id: "unknown-deadline",
          label: "何かわからない予定",
          scoreImpact: { unresolved: 2, anxiety: 1 },
          interpretationHints: {
            summary:
              "行き先の輪郭が曖昧なまま遅れそうになる夢は、名前のつかない焦りや、正体の見えない締め切りを抱えている時に出やすい流れです。",
            fortune:
              "見えにくかった予定ほど、輪郭を言葉にしていくことで重さがほどけやすくなっていきます。",
            actionHint:
              "急かされる感覚だけが残る日は、まず何に間に合わせたいのかを一つずつ書き出してみるのがおすすめです。",
          },
        },
      ],
    },
  {
    id: "fighting-result",
    motifId: "fighting",
    prompt: "戦いはどんな結末でしたか？",
    type: "single",
    priority: 88,
    options: [
      { id: "won", label: "勝った", scoreImpact: { selfDefense: 1, recovery: 1 } },
      { id: "lost", label: "負けた", scoreImpact: { loss: 1, anxiety: 1 } },
      { id: "no-resolution", label: "決着しなかった", scoreImpact: { unresolved: 2 } },
    ],
  },
];
