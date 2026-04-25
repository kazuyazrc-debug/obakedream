import type { FollowUpQuestion } from "@/types/dream";

export const batch22Questions: FollowUpQuestion[] = [
  {
    id: "partner-distance",
    motifId: "partner",
    prompt: "その相手との雰囲気はどうでしたか？",
    type: "single",
    priority: 88,
    options: [
      {
        id: "warm",
        label: "穏やかで安心できた",
        scoreImpact: { relationships: 2, recovery: 2, desire: 1 },
        interpretationHints: {
          summary:
            "穏やかな空気が残っていたなら、つながりの中で安心を確かめたい気持ちが育っているのかもしれません。",
          fortune:
            "関係の流れはやわらかく、急いで答えを出すより自然なやりとりを重ねるほど整いやすい時です。",
          actionHint:
            "大きな約束より、安心できる一言を丁寧に交わしてみてください。",
        },
      },
      {
        id: "distant",
        label: "距離があって少し冷たかった",
        scoreImpact: { anxiety: 1, relationships: 1, unresolved: 2 },
        interpretationHints: {
          summary:
            "距離のある恋人の姿は、近づきたい気持ちと様子を見たい気持ちが同時にある時に出やすいです。",
          fortune:
            "いまは詰めるほど固まりやすく、距離の意味を見つめるほど流れがほどけやすくなります。",
          actionHint:
            "相手の反応より先に、自分がどこで寂しさを感じているのかを一つ確かめてみてください。",
        },
      },
      {
        id: "conflict",
        label: "すれ違いや不安を感じた",
        scoreImpact: { anxiety: 2, relationships: 1, unresolved: 2 },
        interpretationHints: {
          summary:
            "すれ違いの印象が強いなら、言えないまま残っている期待や不安が夢に浮かび上がっているのかもしれません。",
          fortune:
            "結論を急ぐより、食い違っている部分を静かにほどくほど流れが整いやすい時です。",
          actionHint:
            "正しさを決める前に、ほんとうは何をわかってほしいのかを短く言葉にしてみてください。",
        },
      },
    ],
  },
  {
    id: "rival-feeling",
    motifId: "rival",
    prompt: "そのライバルをどう感じましたか？",
    type: "single",
    priority: 76,
    options: [
      {
        id: "motivating",
        label: "追いつきたい相手だった",
        scoreImpact: { desire: 2, change: 1 },
        interpretationHints: {
          summary:
            "追いつきたいライバルは、いまのあなたにとって前へ進むための刺激を映しているのかもしれません。",
          fortune:
            "比べることを苦しみにするより、方向の目印として使うほど流れは整いやすいです。",
          actionHint:
            "相手そのものではなく、自分が伸ばしたい一点を一つだけ選んでみてください。",
        },
      },
      {
        id: "hostile",
        label: "負けたくなくて張りつめた",
        scoreImpact: { anxiety: 1, selfDefense: 1, desire: 2, unresolved: 1 },
        interpretationHints: {
          summary:
            "張りつめたライバルの夢は、前に出たい気持ちと負けたくない緊張が重なっている時に出やすいです。",
          fortune:
            "力はあるものの、競争心を強く握りすぎると流れが固まりやすくなりそうです。",
          actionHint:
            "勝ち負けを一度脇に置いて、自分が本当に守りたい価値を一つだけ確かめてみてください。",
        },
      },
      {
        id: "painful",
        label: "比べるのがつらかった",
        scoreImpact: { anxiety: 1, loss: 1, unresolved: 2 },
        interpretationHints: {
          summary:
            "比べること自体がつらいライバルの夢は、自分の基準が他人に引っぱられすぎている時にも出やすいです。",
          fortune:
            "いまは競争を続けるより、自分の軸に戻るほど見通しが少しずつ整いやすいです。",
          actionHint:
            "誰かとの比較で曇っている基準を一つ外して、自分のペースを取り戻してみてください。",
        },
      },
    ],
  },
  {
    id: "senior-feeling",
    motifId: "senior",
    prompt: "その先輩をどう感じましたか？",
    type: "single",
    priority: 75,
    options: [
      {
        id: "admired",
        label: "頼もしくてついていきたかった",
        scoreImpact: { desire: 2, change: 1, relationships: 1 },
        interpretationHints: {
          summary:
            "頼もしい先輩の夢は、今のあなたが一歩先の姿を思い描いている時に出やすいです。",
          fortune:
            "流れは前向きで、参考にしたい相手から学ぶほど進みやすくなりそうです。",
          actionHint:
            "憧れを漠然と抱くより、真似したい点を一つだけ具体的にしてみてください。",
        },
      },
      {
        id: "pressured",
        label: "圧があって緊張した",
        scoreImpact: { anxiety: 2, selfDefense: 1, unresolved: 1 },
        interpretationHints: {
          summary:
            "圧のある先輩は、上から見られることへの緊張や、自分の未熟さへの意識を映すことがあります。",
          fortune:
            "無理に背伸びするより、自分の立ち位置を確かめるほど流れが落ち着きやすいです。",
          actionHint:
            "緊張の正体が相手そのものか、自分の不安かを一つだけ切り分けてみてください。",
        },
      },
      {
        id: "distant",
        label: "距離があって話しづらかった",
        scoreImpact: { relationships: 1, loss: 1, unresolved: 2 },
        interpretationHints: {
          summary:
            "距離のある先輩の夢は、近づきたい気持ちと踏み込みにくさが同時にある時に出やすいです。",
          fortune:
            "いまは無理に縮めるより、どの距離なら自然でいられるかを見るほど流れが整います。",
          actionHint:
            "相手との距離を一気に詰めず、まずは安心できる関わり方を一つだけ選んでみてください。",
        },
      },
    ],
  },
  {
    id: "junior-role",
    motifId: "junior",
    prompt: "その後輩との関わり方はどうでしたか？",
    type: "single",
    priority: 72,
    options: [
      {
        id: "relied-on",
        label: "頼られていた",
        scoreImpact: { relationships: 2, desire: 1, selfDefense: 1 },
        interpretationHints: {
          summary:
            "頼られる後輩の夢は、誰かを支える役割や、期待を受け止める感覚を映しやすいです。",
          fortune:
            "いまは負担だけでなく、信頼として受け取れるものが増えやすい流れです。",
          actionHint:
            "背負いすぎる前に、今できる支え方を一つだけ選んでみてください。",
        },
      },
      {
        id: "worrying",
        label: "ちゃんと見なきゃと心配だった",
        scoreImpact: { anxiety: 1, selfDefense: 1, unresolved: 2 },
        interpretationHints: {
          summary:
            "後輩を気にしすぎる夢は、責任感が強くなり、自分の余白まで狭めている時にも出やすいです。",
          fortune:
            "世話を全部抱えるより、境界を整えるほど流れが安定しやすくなります。",
          actionHint:
            "気にかけることと抱え込むことの境界を、一つだけ決めてみてください。",
        },
      },
      {
        id: "distant",
        label: "うまく関われなかった",
        scoreImpact: { relationships: 1, loss: 1, unresolved: 2 },
        interpretationHints: {
          summary:
            "後輩とうまく関われない夢は、支えたい気持ちと距離の取り方の迷いを映していることがあります。",
          fortune:
            "いまは教えることより、どこまで関わるのが自然かを見直すほど整いやすいです。",
          actionHint:
            "役割を果たすことと無理をしないことの両方を守れる線を、一つ考えてみてください。",
        },
      },
    ],
  },
  {
    id: "relative-air",
    motifId: "relative",
    prompt: "その親戚との空気はどうでしたか？",
    type: "single",
    priority: 72,
    options: [
      {
        id: "warm",
        label: "懐かしくて安心した",
        scoreImpact: { relationships: 2, recovery: 1, loss: 1 },
        interpretationHints: {
          summary:
            "懐かしく安心できる親戚の夢は、昔からつながる安心感や、自分の土台を見直す流れを映しやすいです。",
          fortune:
            "古い縁や記憶の中に、今の自分を落ち着かせる手がかりが見つかりやすい時です。",
          actionHint:
            "今の自分を支えてきたものを一つだけ思い出して、丁寧に受け取り直してみてください。",
        },
      },
      {
        id: "awkward",
        label: "気まずくて距離があった",
        scoreImpact: { anxiety: 1, relationships: 1, unresolved: 2 },
        interpretationHints: {
          summary:
            "気まずい親戚の夢は、近すぎないからこそ残りやすい遠慮や、昔からの引っかかりを映すことがあります。",
          fortune:
            "距離のある縁ほど、無理に縮めるより意味を見直す方が流れは整いやすいです。",
          actionHint:
            "その気まずさが今の問題なのか、昔の空気なのかを一つだけ切り分けてみてください。",
        },
      },
      {
        id: "pressured",
        label: "しがらみや圧を感じた",
        scoreImpact: { anxiety: 2, selfDefense: 1, unresolved: 2 },
        interpretationHints: {
          summary:
            "親戚に圧を感じる夢は、昔からの空気や、役割を押しつけられる感覚が強まっている時に出やすいです。",
          fortune:
            "今は合わせることより、自分の境界を整えるほど流れが落ち着きやすくなります。",
          actionHint:
            "引き受けすぎている期待を一つだけ見つけて、少し距離を置くことを考えてみてください。",
        },
      },
    ],
  },
  {
    id: "roommate-balance",
    motifId: "roommate",
    prompt: "その同居人との空気はどうでしたか？",
    type: "single",
    priority: 70,
    options: [
      {
        id: "harmonious",
        label: "気楽で暮らしやすかった",
        scoreImpact: { relationships: 2, recovery: 1 },
        interpretationHints: {
          summary:
            "気楽に暮らせる同居人の夢は、日常の距離感やリズムがうまく噛み合う感覚を映すことがあります。",
          fortune:
            "流れは安定寄りで、生活の細部を整えるほど心も落ち着きやすい時です。",
          actionHint:
            "毎日の中で無理なく続いている整いを、一つだけ意識して守ってみてください。",
        },
      },
      {
        id: "tense",
        label: "気を使って疲れた",
        scoreImpact: { anxiety: 1, relationships: 1, unresolved: 2 },
        interpretationHints: {
          summary:
            "気を使う同居人の夢は、近い距離での緊張や、日常で消耗している感覚を映すことがあります。",
          fortune:
            "いまは大きく変えるより、何に気を使いすぎているかを見つけるほど流れが整いやすいです。",
          actionHint:
            "生活の中でいちばん疲れる接点を一つだけ見つけて、軽くできないか考えてみてください。",
        },
      },
      {
        id: "boundary",
        label: "距離や境界が気になった",
        scoreImpact: { selfDefense: 1, relationships: 1, unresolved: 2 },
        interpretationHints: {
          summary:
            "境界が気になる同居人の夢は、近さの中で自分の領域を守りたい気持ちが強まっている時に出やすいです。",
          fortune:
            "はっきり拒むより、暮らしの線引きを整えるほど流れが静かに落ち着きやすくなります。",
          actionHint:
            "共有してよいことと守りたいことを、一つだけ具体的に分けてみてください。",
        },
      },
    ],
  },
  {
    id: "customer-tone",
    motifId: "customer",
    prompt: "そのお客さんはどんな様子でしたか？",
    type: "single",
    priority: 74,
    options: [
      {
        id: "satisfied",
        label: "落ち着いていて話しやすかった",
        scoreImpact: { relationships: 1, recovery: 1, desire: 1 },
        interpretationHints: {
          summary:
            "話しやすいお客さんの夢は、求められることを比較的穏やかに受け止められている状態を映すことがあります。",
          fortune:
            "やりとりの流れは整いやすく、丁寧さがそのまま安心につながりやすい時です。",
          actionHint:
            "うまく応じようとしすぎず、まずは相手の意図を静かに受け取ってみてください。",
        },
      },
      {
        id: "demanding",
        label: "要求が強くて疲れた",
        scoreImpact: { anxiety: 2, selfDefense: 1, unresolved: 1 },
        interpretationHints: {
          summary:
            "要求の強いお客さんは、期待に応えきれない不安や、消耗感を映している時にも出やすいです。",
          fortune:
            "すべてに応えようとするより、優先順位をつけるほど流れは扱いやすくなります。",
          actionHint:
            "まず一つだけ、応えるべきことと応えなくてよいことを分けてみてください。",
        },
      },
      {
        id: "upset",
        label: "怒っていた・責められた",
        scoreImpact: { anxiety: 2, loss: 1, unresolved: 2 },
        interpretationHints: {
          summary:
            "怒るお客さんの夢は、対人場面での失敗への恐れや、評価への緊張を強く映すことがあります。",
          fortune:
            "いまは相手の感情そのものより、自分が何を恐れているかを見分けるほど流れが整いやすいです。",
          actionHint:
            "責められる怖さを一つだけ言葉にして、自分の守る範囲を確かめてみてください。",
        },
      },
    ],
  },
  {
    id: "guide-trust",
    motifId: "guide",
    prompt: "その案内人をどれくらい信じられましたか？",
    type: "single",
    priority: 70,
    options: [
      {
        id: "trusted",
        label: "安心してついていけた",
        scoreImpact: { recovery: 1, change: 2, relationships: 1 },
        interpretationHints: {
          summary:
            "安心して従える案内人は、今のあなたが信頼できる方向感覚を取り戻しつつあるサインかもしれません。",
          fortune:
            "信頼できる流れについていくほど、迷いが少しずつ方向を持ちはじめる時期です。",
          actionHint:
            "今日は自分の直感が「これでいい」と感じる選択を一つだけ大切にしてみてください。",
        },
      },
      {
        id: "unsure",
        label: "ついていくか迷った",
        scoreImpact: { anxiety: 1, unresolved: 2, change: 1 },
        interpretationHints: {
          summary:
            "迷う案内人の夢は、進む方向が定まりきっていない今の状態を映すことがあります。",
          fortune:
            "すぐに決めなくていいです。迷いながら進むほど、自分に必要な道が見えやすくなります。",
          actionHint:
            "答えを急がず、今日は「どちらに進みたいか」だけを一つ確かめてみてください。",
        },
      },
      {
        id: "suspicious",
        label: "怪しくて信用できなかった",
        scoreImpact: { anxiety: 2, selfDefense: 1, unresolved: 1 },
        interpretationHints: {
          summary:
            "信用できない案内人の夢は、外からの情報や方向性を疑う気持ちが強まっている時に出やすいです。",
          fortune:
            "他者の声を全て信じる必要はないです。自分の内側で「違う」と感じたときはその感覚を大切に。",
          actionHint:
            "誰かの言葉に乗る前に、自分がどう感じているかを一つだけ確かめてみてください。",
        },
      },
    ],
  },
  {
    id: "ancestor-presence",
    motifId: "ancestor",
    prompt: "その先祖の気配をどう感じましたか？",
    type: "single",
    priority: 72,
    options: [
      {
        id: "protective",
        label: "見守られている感じがした",
        scoreImpact: { recovery: 2, relationships: 1, loss: 1 },
        interpretationHints: {
          summary:
            "見守られる先祖の夢は、今のあなたが背景にある力や縁を感じ取っているときに出やすいです。",
          fortune:
            "受け継いできたものに目を向けるほど、今の流れに静かな安心が戻りやすくなります。",
          actionHint:
            "今日は自分を支えてきたものを一つだけ思い出して、そこから力を借りてみてください。",
        },
      },
      {
        id: "heavy",
        label: "重たくて背負わされる感じがした",
        scoreImpact: { anxiety: 1, loss: 1, unresolved: 2 },
        interpretationHints: {
          summary:
            "重たい先祖の夢は、受け継いだものや役割への責任が重くのしかかっている時にも出やすいです。",
          fortune:
            "過去から来るものをすべて引き受ける必要はないです。今の自分に必要な形に選び直す視点が助けになります。",
          actionHint:
            "背負いすぎていると感じるものを一つだけ見つけて、少し置いてみることを考えてみてください。",
        },
      },
      {
        id: "distant",
        label: "遠くてよくわからない存在だった",
        scoreImpact: { change: 1, loss: 1, unresolved: 2 },
        interpretationHints: {
          summary:
            "遠い先祖の夢は、自分のルーツや背景への関心が、まだ整理しきれていないことを映すことがあります。",
          fortune:
            "わからなくていいです。関心を持ち始めること自体が、自分の土台を確かめる入り口になります。",
          actionHint:
            "今日は自分がどこから来たのかを、一つだけ小さく確かめてみてください。",
        },
      },
    ],
  },
  {
    id: "mentor-role",
    motifId: "mentor",
    prompt: "そのメンターはどんな存在でしたか？",
    type: "single",
    priority: 68,
    options: [
      {
        id: "supportive",
        label: "支えてくれる感じがした",
        scoreImpact: { recovery: 2, relationships: 1, change: 1 },
        interpretationHints: {
          summary:
            "支えてくれるメンターの夢は、今のあなたに必要な視点や助けが近くにある可能性を映すことがあります。",
          fortune:
            "信頼できる人や視点を受け入れるほど、今の流れが整いやすくなる兆しがあります。",
          actionHint:
            "今日は誰かの言葉や視点を一つだけ、素直に受け取る練習をしてみてください。",
        },
      },
      {
        id: "demanding",
        label: "期待が重く感じた",
        scoreImpact: { anxiety: 1, change: 1, unresolved: 2 },
        interpretationHints: {
          summary:
            "期待の重いメンターの夢は、応えなければというプレッシャーが積み重なっている時に出やすいです。",
          fortune:
            "すべての期待に応える必要はないです。今の自分にとって意味のあるものだけ選んで進めば十分です。",
          actionHint:
            "今日は期待を一つだけ「これは必要か」と見直して、余白を取り戻してみてください。",
        },
      },
      {
        id: "distant",
        label: "導いてくれるが遠かった",
        scoreImpact: { desire: 1, loss: 1, unresolved: 2 },
        interpretationHints: {
          summary:
            "遠いメンターの夢は、導きは感じながらも届きにくさを感じている状態を映すことがあります。",
          fortune:
            "完全につながれなくても、その方向への関心が流れを動かし始めています。",
          actionHint:
            "今日は遠い目標や人へ一歩だけ近づく、小さな行動を一つ選んでみてください。",
        },
      },
    ],
  },
];
