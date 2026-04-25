import type { FollowUpQuestion } from "@/types/dream";

export const batch24Questions: FollowUpQuestion[] = [
  {
    id: "judge-outcome",
    motifId: "judge",
    prompt: "その審判者の存在をどう感じましたか？",
    type: "single",
    priority: 72,
    options: [
      {
        id: "fair",
        label: "公平で落ち着いていた",
        scoreImpact: { recovery: 1, change: 1, relationships: 1 },
        interpretationHints: {
          summary: "公平な審判者の夢は、今のあなたが正しく評価される流れにいることを映すかもしれません。",
          fortune: "公平な視点を持つほど、今の判断が整いやすくなります。",
          actionHint: "今日は、自分を正当に評価してくれる視点を一つ取り入れてみてください。",
        },
      },
      {
        id: "feared",
        label: "裁かれそうで怖かった",
        scoreImpact: { anxiety: 2, selfDefense: 1, unresolved: 2 },
        interpretationHints: {
          summary: "裁かれる怖さが残る夢は、評価や結果を恐れる気持ちが意識に上がっている時に出やすいです。",
          fortune: "結果を急いで恐れるより、今できることを丁寧に積み重ねるほど流れが整いやすいです。",
          actionHint: "今日は、評価を気にすることを一度横に置いて、プロセスを一つ丁寧に進めてみてください。",
        },
      },
      {
        id: "waiting",
        label: "判定を待つ感じがつらかった",
        scoreImpact: { anxiety: 1, unresolved: 2, loss: 1 },
        interpretationHints: {
          summary: "判定を待つつらさの夢は、結果が出るまでの不確かさに耐える状態を映していることがあります。",
          fortune: "待つことが続いているなら、自分でコントロールできる一点に集中するほど楽になりやすいです。",
          actionHint: "今日は、結果ではなく自分の行動を一つだけ選んで進めてみてください。",
        },
      },
    ],
  },
  {
    id: "witness-presence",
    motifId: "witness",
    prompt: "その目撃者の存在をどう感じましたか？",
    type: "single",
    priority: 70,
    options: [
      {
        id: "reassuring",
        label: "見ていてくれて安心した",
        scoreImpact: { relationships: 1, recovery: 1, desire: 1 },
        interpretationHints: {
          summary: "見守られて安心できる夢は、誰かに存在を認めてほしい気持ちが満たされている時に出やすいです。",
          fortune: "見届けてくれる存在がいることは、今の流れを支える力になっています。",
          actionHint: "今日は、自分を見守ってくれている誰かの存在を一つ思い浮かべてみてください。",
        },
      },
      {
        id: "exposed",
        label: "見られていて居心地が悪かった",
        scoreImpact: { anxiety: 2, selfDefense: 1, unresolved: 1 },
        interpretationHints: {
          summary: "居心地の悪い視線の夢は、評価されることへの緊張や、自分の内側を見られることへの抵抗を映すことがあります。",
          fortune: "見られることへの恐れより、自分の選択に正直であるほど流れが整いやすい時期です。",
          actionHint: "今日は、誰かに見せるためではなく、自分のための行動を一つだけ選んでみてください。",
        },
      },
      {
        id: "silent",
        label: "何も言わず見ているのが気になった",
        scoreImpact: { anxiety: 1, loss: 1, unresolved: 2 },
        interpretationHints: {
          summary: "黙って見ている人の夢は、反応がないことへの不安や、伝わっているかどうかの確信がない時に出やすいです。",
          fortune: "反応を待つより、自分から伝えてみる一歩が流れを動かしやすいです。",
          actionHint: "気になっていることを一つだけ、言葉にして誰かに伝えてみてください。",
        },
      },
    ],
  },
  {
    id: "captain-impression",
    motifId: "captain",
    prompt: "そのキャプテンはどんな印象でしたか？",
    type: "single",
    priority: 71,
    options: [
      {
        id: "inspiring",
        label: "頼もしくて引っ張っていた",
        scoreImpact: { recovery: 1, change: 1, desire: 2 },
        interpretationHints: {
          summary: "頼もしいキャプテンの夢は、今のあなたが信頼できる方向性を持って進める状態を映しているかもしれません。",
          fortune: "引っ張ってくれる力があるほど、今の流れは前に動きやすい時期です。",
          actionHint: "今日は、信頼できる誰かの判断に一つだけ乗ってみてください。",
        },
      },
      {
        id: "burdened",
        label: "責任が重そうで苦しそうだった",
        scoreImpact: { anxiety: 1, loss: 1, unresolved: 2 },
        interpretationHints: {
          summary: "苦しそうなキャプテンの夢は、先頭に立つ重さや、役割の負担への共感を映すことがあります。",
          fortune: "責任を一人で抱えるより、仲間と分かち合うほど流れが整いやすくなります。",
          actionHint: "今引き受けている責任を一つだけ確かめて、分担できるものを探してみてください。",
        },
      },
      {
        id: "unsteady",
        label: "先頭なのに不安定だった",
        scoreImpact: { anxiety: 1, unresolved: 2, relationships: 1 },
        interpretationHints: {
          summary: "不安定なキャプテンの夢は、頼りにしているものへの揺らぎや、方向性への迷いを映すことがあります。",
          fortune: "方向が定まらない時は、一つだけ確かめられることを先に固めるほど落ち着きやすいです。",
          actionHint: "今日は、迷っていることを一つだけ書き出して、小さく確かめる行動をしてみてください。",
        },
      },
    ],
  },
  {
    id: "former-classmate-feeling",
    motifId: "former_classmate",
    prompt: "その元同級生を見てどう感じましたか？",
    type: "single",
    priority: 73,
    options: [
      {
        id: "nostalgic",
        label: "懐かしくて安心した",
        scoreImpact: { recovery: 1, relationships: 1, loss: 1 },
        interpretationHints: {
          summary: "懐かしく安心できる元同級生の夢は、過去の自分の中にある温かさを今も大切にしている時に出やすいです。",
          fortune: "懐かしさの中にある安心は、今の自分を落ち着かせるものを含んでいることがあります。",
          actionHint: "昔の自分がよかった点を一つだけ思い出して、今に活かせる形で使ってみてください。",
        },
      },
      {
        id: "comparing",
        label: "今の自分と比べてしまった",
        scoreImpact: { anxiety: 1, desire: 1, unresolved: 2 },
        interpretationHints: {
          summary: "比べてしまう夢は、今の自分の立ち位置への不安や、もっと進みたい気持ちが高まっている時に出やすいです。",
          fortune: "比べることを苦しみにするより、自分の歩みの基準に戻るほど流れが整いやすいです。",
          actionHint: "他の人との比較を一度外して、今週の自分の一歩を一つだけ確かめてみてください。",
        },
      },
      {
        id: "distant",
        label: "昔ほど近く感じなかった",
        scoreImpact: { loss: 1, change: 1, unresolved: 2 },
        interpretationHints: {
          summary: "遠く感じる元同級生の夢は、自分が変わってきたことへの気づきや、価値観の変化を映すことがあります。",
          fortune: "遠くなることは変化のサインで、今の自分により合うつながりへ向かっている流れかもしれません。",
          actionHint: "今の自分が大切にしたい関係を一つだけ確かめて、そちらに少しエネルギーを向けてみてください。",
        },
      },
    ],
  },
  {
    id: "former-coworker-tone",
    motifId: "former_coworker",
    prompt: "その元同僚との空気はどうでしたか？",
    type: "single",
    priority: 73,
    options: [
      {
        id: "smooth",
        label: "昔のように自然だった",
        scoreImpact: { relationships: 1, recovery: 1, loss: 1 },
        interpretationHints: {
          summary: "自然につながれる元同僚の夢は、過去の仕事の記憶に安心感が残っていることを映すかもしれません。",
          fortune: "過去の仕事の経験が今の自分を支えている側面に目を向けるほど、前に進みやすくなります。",
          actionHint: "以前の仕事で身につけたことで今も活かしているものを一つ思い出してみてください。",
        },
      },
      {
        id: "unfinished",
        label: "まだ終わっていない感じがした",
        scoreImpact: { anxiety: 1, unresolved: 2, change: 1 },
        interpretationHints: {
          summary: "終わっていない感覚の夢は、以前の仕事や関係に整理しきれていない何かが残っているのかもしれません。",
          fortune: "終わっていないと感じるものを一つだけ確かめることで、今の流れが少し軽くなりやすいです。",
          actionHint: "以前の仕事の中で、今も引っかかっていることを一つだけ書き出してみてください。",
        },
      },
      {
        id: "detached",
        label: "もう別の人のように感じた",
        scoreImpact: { loss: 1, change: 1, unresolved: 1 },
        interpretationHints: {
          summary: "別の人のように感じる夢は、自分自身が変化したことや、以前の自分との距離を映すことがあります。",
          fortune: "変化を受け入れるほど、今の自分に合った流れが見えやすくなります。",
          actionHint: "今の自分が大切にしていることを一つだけ確かめて、それを中心に今日を過ごしてみてください。",
        },
      },
    ],
  },
  {
    id: "online-friend-distance",
    motifId: "online_friend",
    prompt: "そのネットの知人との距離感はどうでしたか？",
    type: "single",
    priority: 71,
    options: [
      {
        id: "close-online",
        label: "画面越しでも親しかった",
        scoreImpact: { relationships: 2, desire: 1, recovery: 1 },
        interpretationHints: {
          summary: "画面越しでも親しい夢は、形に関わらずつながりを感じられる力が今のあなたにあることを映しています。",
          fortune: "誠実に関わるほど、温かさは形を超えて育ちやすい流れです。",
          actionHint: "今日は、遠くにいる誰かに短い一言でも送ってみてください。",
        },
      },
      {
        id: "uncertain",
        label: "本当はどんな人かわからなかった",
        scoreImpact: { anxiety: 1, unresolved: 2, selfDefense: 1 },
        interpretationHints: {
          summary: "正体のわからない相手への不安の夢は、信頼していいかどうかを確かめたい気持ちが高まっている時に出やすいです。",
          fortune: "不確かな相手への慎重さは自分を守る力です。急いで判断せず、少しずつ確かめる姿勢が助けになります。",
          actionHint: "信頼できるかどうかを見極めるために、今日は一つだけ小さな確認を取ってみてください。",
        },
      },
      {
        id: "fading",
        label: "つながっているのに遠かった",
        scoreImpact: { loss: 1, relationships: 1, unresolved: 2 },
        interpretationHints: {
          summary: "遠く感じるネットのつながりの夢は、形はあっても実感が薄いつながりへの寂しさを映すことがあります。",
          fortune: "実感のある関係を一つ大切にするほど、今の流れが温かくなりやすいです。",
          actionHint: "今日は、画面越しではなく直接会えるつながりを一つ大切にしてみてください。",
        },
      },
    ],
  },
  {
    id: "police-tone",
    motifId: "police_officer",
    prompt: "その警察官はどんな存在でしたか？",
    type: "single",
    priority: 74,
    options: [
      {
        id: "protective",
        label: "守ってくれる感じだった",
        scoreImpact: { recovery: 1, selfDefense: 1, relationships: 1 },
        interpretationHints: {
          summary: "守ってくれる警察官の夢は、今のあなたが安全でいられる感覚を求めている時に出やすいです。",
          fortune: "守られる流れは整っており、信頼できる場所や関係に頼るほど安心が増しやすい時期です。",
          actionHint: "今日は、自分が安心できる場所か人を一つだけ意識して、そこに少し頼ってみてください。",
        },
      },
      {
        id: "suspicious",
        label: "疑われている感じがした",
        scoreImpact: { anxiety: 2, selfDefense: 1, unresolved: 2 },
        interpretationHints: {
          summary: "疑われる感覚の夢は、自分の行動や選択への正当性を確かめたい気持ちが高まっている時に出やすいです。",
          fortune: "疑われる感覚が強い時は、自分の正直さを一つだけ確かめることが流れを整えやすくします。",
          actionHint: "今日は、自分の行動で正しいと思えることを一つだけ丁寧に続けてみてください。",
        },
      },
      {
        id: "controlling",
        label: "厳しく管理されている感じだった",
        scoreImpact: { anxiety: 1, selfDefense: 2, unresolved: 1 },
        interpretationHints: {
          summary: "管理される感覚の夢は、自分の自由が制限されていると感じる時や、ルールへの息苦しさを映すことがあります。",
          fortune: "制限の中でも、自分でコントロールできる一点を見つけるほど流れが楽になりやすいです。",
          actionHint: "今日は、自分が自由に選べることを一つだけ確かめて、それを丁寧に選んでみてください。",
        },
      },
    ],
  },
  {
    id: "admirer-reaction",
    motifId: "admirer",
    prompt: "その相手からの好意をどう感じましたか？",
    type: "single",
    priority: 72,
    options: [
      {
        id: "happy",
        label: "嬉しかった",
        scoreImpact: { relationships: 2, desire: 1, recovery: 1 },
        interpretationHints: {
          summary: "好意を嬉しく感じる夢は、今のあなたが誰かとのつながりを求めている気持ちが満たされていることを映すかもしれません。",
          fortune: "受け取れる流れが整っており、つながりに素直に向かうほど関係が育ちやすい時期です。",
          actionHint: "今日は、誰かからの好意を素直に受け取る練習を一回してみてください。",
        },
      },
      {
        id: "confused",
        label: "戸惑ってしまった",
        scoreImpact: { anxiety: 1, unresolved: 2, relationships: 1 },
        interpretationHints: {
          summary: "好意に戸惑う夢は、受け取ることへの準備ができていないか、どう応えるかが定まっていない時に出やすいです。",
          fortune: "急いで答えを出さなくてよいです。少しずつ自分の気持ちを確かめながら進むほど流れが整いやすいです。",
          actionHint: "戸惑いの正体を一つだけ言葉にして、自分が何を迷っているのかを確かめてみてください。",
        },
      },
      {
        id: "uncomfortable",
        label: "重くて距離を取りたかった",
        scoreImpact: { anxiety: 1, selfDefense: 2, unresolved: 1 },
        interpretationHints: {
          summary: "距離を取りたい感覚の夢は、向けられる感情の重さや、境界を守りたい気持ちを映すことがあります。",
          fortune: "距離を置く選択は、自分を守る大切な行動です。その感覚を大切にするほど流れが整いやすいです。",
          actionHint: "今日は、重さを感じる関係に少し距離を置いて、自分のペースを取り戻してみてください。",
        },
      },
    ],
  },
  {
    id: "driver-trust",
    motifId: "driver",
    prompt: "その運転手にどれくらい安心して任せられましたか？",
    type: "single",
    priority: 71,
    options: [
      {
        id: "trusted",
        label: "安心して任せられた",
        scoreImpact: { recovery: 1, change: 1, relationships: 1 },
        interpretationHints: {
          summary: "安心して任せられる夢は、今のあなたが信頼できる流れに乗れている状態を映しているかもしれません。",
          fortune: "任せる流れは整っており、信頼して委ねるほど前に進みやすい時期です。",
          actionHint: "今日は、信頼できる人や流れに一つだけ任せてみる場面を作ってみてください。",
        },
      },
      {
        id: "uneasy",
        label: "少し不安だった",
        scoreImpact: { anxiety: 1, unresolved: 2, selfDefense: 1 },
        interpretationHints: {
          summary: "不安を感じながら任せる夢は、自分でコントロールできない状況への緊張が高まっている時に出やすいです。",
          fortune: "任せることへの不安があるなら、確かめられることを一つだけ先に確認するほど落ち着きやすいです。",
          actionHint: "不安の原因を一つだけ確かめて、自分でできることを一つ先に進めてみてください。",
        },
      },
      {
        id: "out-of-control",
        label: "危なくて任せられない感じだった",
        scoreImpact: { anxiety: 2, selfDefense: 2, unresolved: 1 },
        interpretationHints: {
          summary: "危ない運転の夢は、今の状況や流れへのコントロールを失いそうな感覚を映すことがあります。",
          fortune: "今すぐ止まって現状を確かめることが、流れを整える大切な一歩になりやすい時期です。",
          actionHint: "今日は、一つだけ立ち止まって、今の方向が合っているかを確かめてみてください。",
        },
      },
    ],
  },
  {
    id: "landlord-tone",
    motifId: "landlord",
    prompt: "その大家はどんな存在でしたか？",
    type: "single",
    priority: 70,
    options: [
      {
        id: "reliable",
        label: "しっかりしていて安心できた",
        scoreImpact: { recovery: 1, relationships: 1, selfDefense: 1 },
        interpretationHints: {
          summary: "頼れる大家の夢は、自分の居場所が守られている安心感を今のあなたが感じている時に出やすいです。",
          fortune: "基盤が整っている今は、安心を土台にして次の一歩を進めやすい時期です。",
          actionHint: "今日は、自分の居場所や基盤で安心できる部分を一つだけ確かめてみてください。",
        },
      },
      {
        id: "strict",
        label: "厳しくて息苦しかった",
        scoreImpact: { anxiety: 2, selfDefense: 1, unresolved: 1 },
        interpretationHints: {
          summary: "厳しい大家の夢は、自分の居場所や生活への圧や制限を感じている時に出やすいです。",
          fortune: "息苦しさを感じているなら、少しだけ自分のペースを取り戻せる時間を作るほど流れが整いやすいです。",
          actionHint: "今日は、制限の中でも自分が自由に選べることを一つだけ確かめてみてください。",
        },
      },
      {
        id: "watching",
        label: "監視されている感じがした",
        scoreImpact: { anxiety: 1, selfDefense: 2, unresolved: 2 },
        interpretationHints: {
          summary: "監視される感覚の夢は、自分の行動が誰かに見られているという意識や、居場所の不安定さを映すことがあります。",
          fortune: "見られることへの意識が強い時は、自分の安心できる空間を先に確保するほど落ち着きやすいです。",
          actionHint: "今日は、自分だけのプライベートな時間や空間を一つ確保してみてください。",
        },
      },
    ],
  },
  {
    id: "mediator-role",
    motifId: "mediator",
    prompt: "その仲介者はどんな働きをしていましたか？",
    type: "single",
    priority: 70,
    options: [
      {
        id: "calming",
        label: "関係を和らげてくれた",
        scoreImpact: { relationships: 2, recovery: 1, change: 1 },
        interpretationHints: {
          summary: "関係を和らげてくれる仲介者の夢は、今のあなたが対立や緊張を緩めたいと望んでいることを映すかもしれません。",
          fortune: "橋渡しをしてくれる存在が流れを整えてくれる時期で、つながりを丁寧に扱うほど安定しやすいです。",
          actionHint: "今日は、誰かとのすれ違いを一つだけ柔らかく調整してみてください。",
        },
      },
      {
        id: "unclear",
        label: "どっちつかずで頼りなかった",
        scoreImpact: { unresolved: 2, anxiety: 1, relationships: 1 },
        interpretationHints: {
          summary: "頼りない仲介者の夢は、間に入ってほしい誰かが機能していない感覚や、解決の手がかりが見えない時に出やすいです。",
          fortune: "外に頼るより、自分でできる一歩を先に動かすほど流れが前に向かいやすいです。",
          actionHint: "今日は、誰かを通さず自分から相手に一つだけ直接伝えてみてください。",
        },
      },
      {
        id: "controlling",
        label: "間に入ることで余計に苦しくなった",
        scoreImpact: { anxiety: 1, selfDefense: 1, unresolved: 2 },
        interpretationHints: {
          summary: "仲介が逆効果になる夢は、間に入ることで本音が届かなくなる苦しさを映すことがあります。",
          fortune: "仲介を通すより直接向き合うほど、今の流れが整いやすくなることがあります。",
          actionHint: "今日は、間を通さず自分の気持ちを一つだけ直接言葉にする練習をしてみてください。",
        },
      },
    ],
  },
];
