import type { FollowUpQuestion } from "@/types/dream";

export const batch02Questions: FollowUpQuestion[] = [
  {
    id: "fire-control",
    motifId: "fire",
    prompt: "火はどのような状態でしたか？",
    type: "single",
    priority: 84,
    options: [
      { id: "warming", label: "暖かかった", scoreImpact: { recovery: 1, desire: 1 } },
      { id: "spreading", label: "燃え広がった", scoreImpact: { anxiety: 2, change: 1 } },
      { id: "put-out", label: "消せた", scoreImpact: { selfDefense: 1, recovery: 1 } },
    ],
  },
  {
    id: "rain-intensity",
    motifId: "rain",
    prompt: "雨の強さはどれに近かったですか？",
    type: "single",
    priority: 76,
    options: [
      { id: "gentle", label: "静かな雨", scoreImpact: { recovery: 2 } },
      { id: "heavy", label: "激しい雨", scoreImpact: { anxiety: 2, unresolved: 1 } },
      { id: "stopped", label: "途中で止んだ", scoreImpact: { recovery: 1, change: 1 } },
    ],
  },
  {
    id: "sky-view",
    motifId: "sky",
    prompt: "空はどんな印象でしたか？",
    type: "single",
    priority: 72,
    options: [
      { id: "clear", label: "晴れていた", scoreImpact: { recovery: 2, desire: 1 } },
      { id: "cloudy", label: "曇っていた", scoreImpact: { unresolved: 1, anxiety: 1 } },
      { id: "wide", label: "広く感じた", scoreImpact: { desire: 2, change: 1 } },
    ],
  },
  {
    id: "moon-phase",
    motifId: "moon",
    prompt: "月はどのように見えましたか？",
    type: "single",
    priority: 71,
    options: [
      { id: "full", label: "満ちていた", scoreImpact: { recovery: 1, desire: 1 } },
      { id: "thin", label: "細かった", scoreImpact: { unresolved: 1, change: 1 } },
      { id: "hidden", label: "隠れていた", scoreImpact: { anxiety: 1, unresolved: 2 } },
    ],
  },
  {
    id: "forest-direction",
    motifId: "forest",
    prompt: "森の中で方向は分かりましたか？",
    type: "single",
    priority: 79,
    options: [
      { id: "found-path", label: "道が見えた", scoreImpact: { recovery: 1, change: 1 } },
      { id: "lost", label: "迷っていた", scoreImpact: { anxiety: 1, unresolved: 2 } },
      { id: "rested", label: "休んでいた", scoreImpact: { recovery: 2 } },
    ],
  },
  {
    id: "mountain-progress",
    motifId: "mountain",
    prompt: "山ではどこにいましたか？",
    type: "single",
    priority: 80,
    options: [
      { id: "climbing", label: "登っていた", scoreImpact: { desire: 2, change: 1 } },
      { id: "summit", label: "頂上にいた", scoreImpact: { recovery: 1, desire: 1 } },
      { id: "stuck", label: "進めなかった", scoreImpact: { unresolved: 2, anxiety: 1 } },
    ],
  },
  {
    id: "river-crossing",
    motifId: "river",
    prompt: "川とはどう関わりましたか？",
    type: "single",
    priority: 83,
    options: [
      {
        id: "crossed",
        label: "渡った",
        scoreImpact: { change: 2, recovery: 1 },
        interpretationHints: {
          summary:
            "川を渡れた夢には、揺れのある状況の中でも境目を越えて次の段階へ移ろうとしている気持ちが映ることがあります。",
          fortune:
            "流れに押されすぎず渡れた感覚が残る時期なので、変化は急がずとも着実に形になりやすいでしょう。",
          actionHint:
            "今日は越えたい境目を一つだけ言葉にして、小さく渡るための動きを選んでみてください。",
        },
      },
      {
        id: "swept",
        label: "流された",
        scoreImpact: { anxiety: 2, unresolved: 1 },
        interpretationHints: {
          summary:
            "川に流される印象には、いまの感情や状況の流速が思っているより強く、自分の足場を探し直している揺れがにじむことがあります。",
          fortune:
            "流れはまだ強めですが、何に巻き込まれやすいのかを見極めるほど次の対処は整いやすくなります。",
          actionHint:
            "今日は流れを止めようとせず、のまれやすい話題や予定を一つだけ減らしてみてください。",
        },
      },
      {
        id: "watched",
        label: "眺めていた",
        scoreImpact: { recovery: 1, unresolved: 1 },
        interpretationHints: {
          summary:
            "川を眺めている夢は、すぐに渡るよりも、いま流れている感情や状況の向きを静かに読み取ろうとしている時に現れやすいです。",
          fortune:
            "急いで動かない選択がかえって役立つ時期なので、流れを観察するほど進むべき瞬間が見えやすくなるでしょう。",
          actionHint:
            "今日は結論を急がず、変わりつつある空気を一つだけ見届けるつもりで過ごしてみてください。",
        },
      },
    ],
  },
  {
    id: "bridge-state",
    motifId: "bridge",
    prompt: "橋は安全に渡れそうでしたか？",
    type: "single",
    priority: 82,
    options: [
      {
        id: "stable",
        label: "安定していた",
        scoreImpact: { recovery: 1, change: 1 },
        interpretationHints: {
          summary:
            "安定した橋を渡る夢は、離れていたものをつなぎ直しながら、無理のない形で次へ移ろうとしている気配を映します。",
          fortune:
            "いまは境目を越える流れが静かに整っており、慎重に進めるほど次の景色へ入りやすくなります。",
          actionHint:
            "今日はつなぎたい相手や場所を一つ思い浮かべて、短い橋渡しのような動きを試してみてください。",
        },
      },
      {
        id: "shaking",
        label: "揺れていた",
        scoreImpact: { anxiety: 2 },
        interpretationHints: {
          summary:
            "揺れる橋の印象には、渡りたい気持ちはあるのに、足元の確かさがまだ足りないという迷いがにじむことがあります。",
          fortune:
            "渡る流れ自体は来ていますが、急ぎすぎるほど不安定さが増すので、足場を確かめるほど道筋は見えやすくなるでしょう。",
          actionHint:
            "今日は向こう岸だけを見るより、今立っている足場を一段ぶん整えることを優先してみてください。",
        },
      },
      {
        id: "broken",
        label: "壊れていた",
        scoreImpact: { loss: 1, unresolved: 2 },
        interpretationHints: {
          summary:
            "壊れた橋の夢には、つながっていたはずのものが途切れ、渡り方そのものを見直す必要が出てきている感覚が映ることがあります。",
          fortune:
            "無理に同じ渡り方へ戻るより、新しい渡し方を探すほど次の移行は現実的に整いやすくなっていきます。",
          actionHint:
            "今日は失った通路を責めるより、別の渡り方がないかを一つだけ探してみてください。",
        },
      },
    ],
  },
  {
    id: "road-choice",
    motifId: "road",
    prompt: "道では何が印象的でしたか？",
    type: "single",
    priority: 70,
    options: [
      {
        id: "straight",
        label: "まっすぐな道",
        scoreImpact: { recovery: 1, desire: 1 },
        interpretationHints: {
          summary:
            "まっすぐな道が出る夢は、迷いを減らして進みたい方向が少しずつ見え始めている時の象徴です。",
          fortune:
            "見通しのある流れが戻りつつあり、寄り道を減らすほど次の一歩は軽くなっていくでしょう。",
          actionHint:
            "今日は選択肢を増やすより、いま進みたい道筋を一つだけ素直に選んでみてください。",
        },
      },
      {
        id: "fork",
        label: "分かれ道",
        scoreImpact: { change: 2, unresolved: 1 },
        interpretationHints: {
          summary:
            "分かれ道の夢には、今の方向性そのものよりも、どの選び方が自分に合うのかを見極めたい気持ちが映りやすいです。",
          fortune:
            "流れは二つ以上に開いていますが、比べながら選ぶ時間そのものが次の判断を整えてくれるでしょう。",
          actionHint:
            "今日は正解探しより、『どちらが今の自分に近いか』を基準に一つだけ選んでみてください。",
        },
      },
      {
        id: "lost-road",
        label: "迷った",
        scoreImpact: { unresolved: 2, anxiety: 1 },
        interpretationHints: {
          summary:
            "道に迷う印象には、進みたい気持ちはありながらも、今は見通しより手探りが先に立っている揺れがにじむことがあります。",
          fortune:
            "答えはまだ散らばりやすい時期ですが、どこで迷うのかをはっきりさせるほど方向は静かに戻ってきます。",
          actionHint:
            "今日はゴールを急がず、次の目印になる小さな方向だけ決めてみてください。",
        },
      },
    ],
  },
  {
    id: "stairs-direction",
    motifId: "stairs",
    prompt: "階段は上っていましたか、下りていましたか？",
    type: "single",
    priority: 81,
    options: [
      {
        id: "up",
        label: "上っていた",
        scoreImpact: { desire: 2, change: 1 },
        interpretationHints: {
          summary:
            "階段を上る夢は、急に跳ぶのではなく、一段ずつ状態を引き上げようとする前向きな変化の象徴として現れやすいです。",
          fortune:
            "上向く流れは来ていますが、段階を飛ばさないほど今の上昇は安定したものになりやすいでしょう。",
          actionHint:
            "今日は大きな到達点より、一段分だけ進む行動を選んでみてください。",
        },
      },
      {
        id: "down",
        label: "下りていた",
        scoreImpact: { unresolved: 1, recovery: 1 },
        interpretationHints: {
          summary:
            "階段を下る印象には、表面から少し離れて、自分の内側や見落としていた層へ降りていく流れが映ることがあります。",
          fortune:
            "いまは深いところを見直す流れに入りやすく、急いで戻るより丁寧に降りるほど整いやすくなります。",
          actionHint:
            "今日は気分を上げようと急ぐより、静かに見直したいことを一つだけ下りて確かめてみてください。",
        },
      },
      {
        id: "fell",
        label: "落ちた",
        scoreImpact: { anxiety: 2, loss: 1 },
        interpretationHints: {
          summary:
            "階段で足を滑らせる夢は、段階を踏むはずの流れの中で、少し無理を重ねていた感覚や足元の不安を映すことがあります。",
          fortune:
            "急ぎや負荷が強まりやすい時期ですが、足元を整えるほど流れは落ち着きを取り戻しやすくなるでしょう。",
          actionHint:
            "今日は先へ急ぐより、つまずきやすい一段を見つけて整えることを優先してみてください。",
        },
      },
    ],
  },
  {
    id: "elevator-motion",
    motifId: "elevator",
    prompt: "エレベーターはどう動いていましたか？",
    type: "single",
    priority: 83,
    options: [
      {
        id: "up",
        label: "上がっていた",
        scoreImpact: { change: 2, desire: 1 },
        interpretationHints: {
          summary:
            "エレベーターが上がる夢には、変化が自力以上の速さで進み始め、今の自分がその上昇にどう乗るかを見ている気配があります。",
          fortune:
            "上向く流れはすでに動いているので、勢いに振り回されず目的地を意識するほど変化を味方にしやすいでしょう。",
          actionHint:
            "今日は上がっていく流れを止めるより、どこへ向かいたいのかを短く言葉にしてみてください。",
        },
      },
      {
        id: "down",
        label: "下がっていた",
        scoreImpact: { anxiety: 1, unresolved: 1 },
        interpretationHints: {
          summary:
            "エレベーターが下がる夢は、気持ちや状況を一段深いところまで見直す流れや、いったん落ち着くための下降を映すことがあります。",
          fortune:
            "今は表面を急いで整えるより、少し下りて現状を確かめるほど次の動きは安定しやすくなるでしょう。",
          actionHint:
            "今日は上向きに見せることより、ひとつ深呼吸して今の位置を確かめる時間を取ってみてください。",
        },
      },
      {
        id: "stuck",
        label: "閉じ込められた",
        scoreImpact: { anxiety: 2, selfDefense: 1 },
        interpretationHints: {
          summary:
            "閉じ込められたように止まるエレベーターの夢には、変化したい気持ちはあるのに、自分で動かせない感覚への息苦しさがにじむことがあります。",
          fortune:
            "いまは無理に動かそうとするほど詰まりやすい時期ですが、コントロールできる範囲を見直すほど抜け道は見えやすくなります。",
          actionHint:
            "今日は全部を動かそうとせず、自分で押せるボタンが何かを一つだけ確かめてみてください。",
        },
      },
    ],
  },
  {
    id: "car-control",
    motifId: "car",
    prompt: "車は自分で操作できていましたか？",
    type: "single",
    priority: 85,
    options: [
      { id: "driving", label: "運転できた", scoreImpact: { desire: 1, selfDefense: 1 } },
      { id: "out-of-control", label: "制御できなかった", scoreImpact: { anxiety: 2, unresolved: 1 } },
      { id: "passenger", label: "乗せられていた", scoreImpact: { change: 1, unresolved: 1 } },
    ],
  },
    {
      id: "workplace-pressure",
      motifId: "workplace",
      prompt: "職場では何が印象的でしたか？",
      type: "single",
      priority: 87,
      options: [
        {
          id: "praised",
          label: "認められた",
          scoreImpact: { desire: 1, recovery: 1 },
          interpretationHints: {
            summary:
              "職場で認められる夢には、役割に応えられた手応えや、自分の力をきちんと見てほしい気持ちが映ることがあります。",
            fortune:
              "評価や成果の流れは少しずつ実りやすく、素直に受け取るほど次の動きも軽くなりやすいでしょう。",
            actionHint:
              "今日はうまくできたことを小さくてもひとつ認めて、次へつなぐ視点を持ってみてください。",
          },
        },
        {
          id: "blamed",
          label: "責められた",
          scoreImpact: { anxiety: 2, relationships: 1 },
          interpretationHints: {
            summary:
              "責められる職場の夢には、役割や期待に応えられているかを強く気にしている時の緊張や、評価への敏感さが表れやすいです。",
            fortune:
              "いまは萎縮しやすい流れでも、受け取る言葉と背負いすぎる責任を分けるほど整いやすくなっていきます。",
            actionHint:
              "すべて自分の問題として抱え込まず、今日は事実と気持ちをいったん分けて見直してみてください。",
          },
        },
        {
          id: "unfinished",
          label: "仕事が終わらない",
          scoreImpact: { unresolved: 2, anxiety: 1 },
          interpretationHints: {
            summary:
              "仕事が終わらない夢には、責任感の強さと同時に、やるべきことの終わりが見えにくくなっている疲れがにじむことがあります。",
            fortune:
              "いまは量に押されやすい時期ですが、区切りを自分で作るほど流れも現実的に整いやすくなるでしょう。",
            actionHint:
              "今日は全部を終わらせるより、終わりの線をひとつだけ自分で引くことを意識してみてください。",
          },
        },
      ],
    },
  {
    id: "hospital-role",
    motifId: "hospital",
    prompt: "病院ではどんな立場でしたか？",
    type: "single",
    priority: 88,
    options: [
      { id: "patient", label: "診てもらう側", scoreImpact: { recovery: 2, anxiety: 1 } },
      { id: "visitor", label: "見舞う側", scoreImpact: { relationships: 1, selfDefense: 1 } },
      { id: "waiting", label: "待っていた", scoreImpact: { unresolved: 2, anxiety: 1 } },
    ],
  },
    {
      id: "exam-readiness",
      motifId: "exam",
      prompt: "試験の準備はできていましたか？",
      type: "single",
      priority: 90,
      options: [
        {
          id: "prepared",
          label: "準備できていた",
          scoreImpact: { recovery: 1, desire: 1 },
          interpretationHints: {
            summary:
              "準備できていた試験の夢には、緊張の中にも自分なりに備えてきた手応えを確かめたい気持ちが映ることがあります。",
            fortune:
              "積み重ねてきたものが少しずつ形になりやすい時期で、落ち着いて出せば流れも整いやすいでしょう。",
            actionHint:
              "いま手元にある準備を信じて、増やすことより整えて出すことを意識してみてください。",
          },
        },
        {
          id: "unprepared",
          label: "準備不足だった",
          scoreImpact: { anxiety: 2, unresolved: 1 },
          interpretationHints: {
            summary:
              "準備不足の試験は、評価そのものより『まだ間に合っていない』という焦りが心に強く残っている時に現れやすい象徴です。",
            fortune:
              "いまは不足ばかりが目につきやすい流れですが、何が足りないのかを絞るほど立て直しやすくなっていきます。",
            actionHint:
              "全部を埋めようとせず、まずは不安の大きい一点だけに備えを集めてみてください。",
          },
        },
        {
          id: "late",
          label: "遅れそうだった",
          scoreImpact: { anxiety: 2, unresolved: 1 },
          interpretationHints: {
            summary:
              "試験に遅れそうな夢には、試される場へ間に合わせたい気持ちと、取り残されたくない焦りが重なって表れることがあります。",
            fortune:
              "流れは急ぎ足ですが、順番を整えるだけでも焦りの圧は少し軽くなりやすい時期です。",
            actionHint:
              "急いでいる感覚が強い日は、最初の一歩だけを決めてから動くと気持ちが散りにくくなります。",
          },
        },
      ],
    },
  {
    id: "toilet-state",
    motifId: "toilet",
    prompt: "トイレは使えそうでしたか？",
    type: "single",
    priority: 86,
    options: [
      { id: "clean", label: "清潔だった", scoreImpact: { recovery: 2 } },
      { id: "dirty", label: "汚れていた", scoreImpact: { unresolved: 2, anxiety: 1 } },
      { id: "not-found", label: "見つからなかった", scoreImpact: { anxiety: 1, unresolved: 2 } },
    ],
  },
  {
    id: "mirror-image",
    motifId: "mirror",
    prompt: "鏡には何が映っていましたか？",
    type: "single",
    priority: 84,
    options: [
      { id: "self", label: "自分の姿", scoreImpact: { recovery: 1, unresolved: 1 } },
      { id: "changed", label: "違う姿", scoreImpact: { change: 1, anxiety: 1 } },
      { id: "broken", label: "割れていた", scoreImpact: { loss: 1, unresolved: 2 } },
    ],
  },
  {
    id: "key-result",
    motifId: "key",
    prompt: "鍵は使えましたか？",
    type: "single",
    priority: 83,
    options: [
      { id: "opened", label: "開けられた", scoreImpact: { change: 2, recovery: 1 } },
      { id: "lost", label: "なくした", scoreImpact: { anxiety: 2, loss: 1 } },
      { id: "locked", label: "開かなかった", scoreImpact: { unresolved: 2, selfDefense: 1 } },
    ],
  },
  {
    id: "wallet-condition",
    motifId: "wallet",
    prompt: "財布はどうなっていましたか？",
    type: "single",
    priority: 82,
    options: [
      { id: "lost", label: "なくした", scoreImpact: { anxiety: 2, loss: 2 } },
      { id: "found", label: "見つかった", scoreImpact: { recovery: 2 } },
      { id: "empty", label: "空だった", scoreImpact: { anxiety: 1, unresolved: 1 } },
    ],
  },
    {
      id: "ex-partner-distance",
      motifId: "ex_partner",
      prompt: "元恋人との距離感はどうでしたか？",
      type: "single",
      priority: 89,
      options: [
        {
          id: "calm-talk",
          label: "落ち着いて話した",
          scoreImpact: { recovery: 2, relationships: 1 },
          interpretationHints: {
            summary:
              "落ち着いて話せた夢には、過去の関係を必要以上に恐れず、静かに整理し直そうとする気持ちが表れることがあります。",
            fortune:
              "過去の出来事をやわらかく見直せる時期に入りつつあり、気持ちの流れにも余白が戻りやすいでしょう。",
            actionHint:
              "昔の記憶が浮かんだ日は、良し悪しを急いで決めず、いまの自分に残っている意味だけを受け取ってみてください。",
          },
        },
        {
          id: "painful",
          label: "つらかった",
          scoreImpact: { unresolved: 2, loss: 1 },
          interpretationHints: {
            summary:
              "つらさが強く残る夢は、区切ったはずの感情の中に、まだやわらかく触れ直したい部分があることを示す場合があります。",
            fortune:
              "無理に忘れようとするより、痛みの輪郭を少し認めることで流れが静まりやすくなります。",
            actionHint:
              "心がざわつく日は、過去を裁くよりも、今の自分が何に傷つきやすいのかを優しく確かめてみてください。",
          },
        },
        {
          id: "chasing",
          label: "追いかけた",
          scoreImpact: { desire: 1, unresolved: 2 },
          interpretationHints: {
            summary:
              "追いかける夢には、相手そのものというより、置いてきた気持ちや確かめ直したい時間への未練が混ざることがあります。",
            fortune:
              "答えを外に探しすぎるより、自分の中に残った願いを見つめるほど流れが落ち着きやすい兆しです。",
            actionHint:
              "取り戻したいものが浮かぶ日は、相手ではなく自分の願いの名前を先に見つけてみると読みが深まります。",
          },
        },
      ],
    },
];
