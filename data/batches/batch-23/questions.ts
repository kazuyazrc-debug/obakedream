import type { FollowUpQuestion } from "@/types/dream";

export const batch23Questions: FollowUpQuestion[] = [
  {
    id: "teammate-balance",
    motifId: "teammate",
    prompt: "そのチームメイトとの関係はどうでしたか？",
    type: "single",
    priority: 72,
    options: [
      {
        id: "coordinated",
        label: "息が合っていた",
        scoreImpact: { relationships: 2, recovery: 1, desire: 1 },
        interpretationHints: {
          summary: "息の合うチームメイトの夢は、協力できる流れが整っているサインかもしれません。",
          fortune: "連携がうまく取れている時期なので、信頼して任せるほど流れはよくなりやすいです。",
          actionHint: "今日は一緒に動ける相手の存在を意識して、一歩だけ協力を求めてみてください。",
        },
      },
      {
        id: "misaligned",
        label: "足並みが揃わなかった",
        scoreImpact: { anxiety: 1, relationships: 1, unresolved: 2 },
        interpretationHints: {
          summary: "足並みが揃わないチームメイトの夢は、期待とズレへの気づきを映していることがあります。",
          fortune: "急いで合わせるより、ズレの原因を一つだけ確かめるほど流れが整いやすいです。",
          actionHint: "相手を責める前に、自分が何を期待していたのかを一つだけ確かめてみてください。",
        },
      },
      {
        id: "carrying",
        label: "自分ばかり頑張っていた",
        scoreImpact: { anxiety: 1, selfDefense: 1, unresolved: 2 },
        interpretationHints: {
          summary: "自分だけ頑張っている夢は、負担の偏りへの気づきや、もっと助けてほしい気持ちを映すことがあります。",
          fortune: "全部を一人で抱え込む前に、分担できることを一つだけ渡してみると流れが楽になりやすいです。",
          actionHint: "何を誰かに渡せるかを一つだけ考えて、手放す練習を一回してみてください。",
        },
      },
    ],
  },
  {
    id: "bully-impact",
    motifId: "bully",
    prompt: "その相手の圧をどう感じましたか？",
    type: "single",
    priority: 74,
    options: [
      {
        id: "fear",
        label: "怖くて縮こまった",
        scoreImpact: { anxiety: 2, selfDefense: 2, unresolved: 1 },
        interpretationHints: {
          summary: "怖くて縮こまる夢は、今のあなたが圧力や攻撃から身を守る準備をしていることを映すかもしれません。",
          fortune: "逃げることは弱さではなく、自分を守る選択です。安全な距離を取るほど流れが整いやすいです。",
          actionHint: "怖いと感じた相手から、今日は少し距離を置くことを自分に許してみてください。",
        },
      },
      {
        id: "anger",
        label: "悔しくて反発した",
        scoreImpact: { anxiety: 1, selfDefense: 2, desire: 1 },
        interpretationHints: {
          summary: "悔しさが出る夢は、理不尽に負けたくない気持ちや、自分を守る力が動いていることを映します。",
          fortune: "反発するエネルギーは、正しい方向に向けるほど流れを整える力になりやすいです。",
          actionHint: "怒りの先にある「こうあってほしかった」を一つだけ言葉にしてみてください。",
        },
      },
      {
        id: "numb",
        label: "何も感じないようにしていた",
        scoreImpact: { loss: 1, unresolved: 2, selfDefense: 1 },
        interpretationHints: {
          summary: "感じないようにしていた夢は、自分を守るために感情を閉じている時に出やすいです。",
          fortune: "閉じることで守れているものがあります。少しずつでいいので、安全な場所で感じ直してみてください。",
          actionHint: "一人になれる時間を短くてもよいので確保して、止めていた感情を少しだけ出してみてください。",
        },
      },
    ],
  },
  {
    id: "client-tone",
    motifId: "client",
    prompt: "その相手とのやりとりはどうでしたか？",
    type: "single",
    priority: 70,
    options: [
      {
        id: "smooth",
        label: "落ち着いて進んでいた",
        scoreImpact: { recovery: 1, relationships: 1, desire: 1 },
        interpretationHints: {
          summary: "落ち着いた取引の夢は、外部とのやりとりが整ってきていることを映すかもしれません。",
          fortune: "流れは整いやすい時期で、誠実に積み重ねるほど信頼が育ちやすいです。",
          actionHint: "今日は一つだけ、丁寧に応答することを意識してみてください。",
        },
      },
      {
        id: "demanding",
        label: "要求が重く感じた",
        scoreImpact: { anxiety: 2, unresolved: 1, selfDefense: 1 },
        interpretationHints: {
          summary: "重い要求の夢は、外部の期待に応えることへの負担が意識に上がっている時に出やすいです。",
          fortune: "全部に応えようとする前に、今できることと待ってもらえることを一つずつ整理するほど楽になります。",
          actionHint: "要求の中で、本当に今必要なものを一つだけ絞って対処してみてください。",
        },
      },
      {
        id: "disappointing",
        label: "期待に応えられない感じがした",
        scoreImpact: { anxiety: 1, loss: 1, unresolved: 2 },
        interpretationHints: {
          summary: "期待に応えられない夢は、自分への評価への不安や、できなかった時の怖れが映っていることがあります。",
          fortune: "完璧に応えることより、誠実に伝えることが流れを整える近道になりやすい時です。",
          actionHint: "できないことを正直に一つだけ伝える練習を、安心できる相手から始めてみてください。",
        },
      },
    ],
  },
  {
    id: "old-friend-tone",
    motifId: "old_friend",
    prompt: "その旧友との空気はどうでしたか？",
    type: "single",
    priority: 69,
    options: [
      {
        id: "warm",
        label: "懐かしくて安心した",
        scoreImpact: { recovery: 2, relationships: 1, loss: 1 },
        interpretationHints: {
          summary: "懐かしく安心できる旧友の夢は、過去の自分とつながり直す穏やかな気持ちが浮かんでいるのかもしれません。",
          fortune: "懐かしさの中にある温かさは、今の自分を落ち着かせるものを含んでいることがあります。",
          actionHint: "昔の自分がよかった点を一つだけ思い出して、今も続けていることを確かめてみてください。",
        },
      },
      {
        id: "awkward",
        label: "久しぶりで少し気まずかった",
        scoreImpact: { anxiety: 1, unresolved: 2, relationships: 1 },
        interpretationHints: {
          summary: "気まずさを感じる旧友の夢は、過去の関係に整理しきれていない何かが残っているのかもしれません。",
          fortune: "無理に戻ろうとするより、今の自分に合った距離から始めるほど流れが整いやすいです。",
          actionHint: "気まずさの原因を一つだけ書き出して、それが今の自分に関係しているかを確かめてみてください。",
        },
      },
      {
        id: "distant",
        label: "昔ほど近く感じなかった",
        scoreImpact: { loss: 1, unresolved: 2, change: 1 },
        interpretationHints: {
          summary: "遠く感じる旧友の夢は、自分自身が変化したことへの気づきや、手放しつつある何かを映すことがあります。",
          fortune: "遠くなることは変化のサインで、今の自分により合うつながりへ向かっている流れかもしれません。",
          actionHint: "今の自分が大切にしたい関係を一つだけ確かめて、そちらに少しエネルギーを向けてみてください。",
        },
      },
    ],
  },
  {
    id: "childhood-friend-feeling",
    motifId: "childhood_friend",
    prompt: "その幼なじみをどう感じましたか？",
    type: "single",
    priority: 68,
    options: [
      {
        id: "natural",
        label: "昔のままで安心した",
        scoreImpact: { recovery: 2, relationships: 1, loss: 1 },
        interpretationHints: {
          summary: "昔のままの幼なじみの夢は、変わらない安心感や、自分の原点への温かさを映していることがあります。",
          fortune: "変わらないものへの信頼が、今の流れを支えてくれる時期かもしれません。",
          actionHint: "自分の中で変わらずにいる大切な価値を一つ、今日は丁寧に扱ってみてください。",
        },
      },
      {
        id: "changed",
        label: "変わっていて少し寂しかった",
        scoreImpact: { loss: 2, unresolved: 1, change: 1 },
        interpretationHints: {
          summary: "変わった幼なじみへの寂しさは、時間の流れと変化をどこかで受け入れようとしている時に出やすいです。",
          fortune: "失ったように見えても、変わることで新しいものが育つことがあります。",
          actionHint: "変わってしまったと感じるものを一つだけ認めて、今の自分にあるものを一つ確かめてみてください。",
        },
      },
      {
        id: "returning-self",
        label: "自分も昔に戻った気がした",
        scoreImpact: { recovery: 1, loss: 1, desire: 1, change: 1 },
        interpretationHints: {
          summary: "昔の自分に戻る感覚は、今の重さから少し離れたい気持ちや、原点の自分を取り戻したい時に出やすいです。",
          fortune: "昔の自分の中にある軽さや素直さは、今も使えるものが残っている場合があります。",
          actionHint: "子どもの頃に好きだったことを一つだけ思い出して、今日少しだけ触れてみてください。",
        },
      },
    ],
  },
  {
    id: "leader-pressure",
    motifId: "leader",
    prompt: "そのリーダーはどんな印象でしたか？",
    type: "single",
    priority: 73,
    options: [
      {
        id: "reliable",
        label: "頼れて安心できた",
        scoreImpact: { recovery: 1, relationships: 1, change: 1 },
        interpretationHints: {
          summary: "頼れるリーダーの夢は、いまのあなたが安心して方向に沿って進める状態にあることを映すかもしれません。",
          fortune: "信頼できる流れに乗るほど、今の迷いが少しずつ方向を持ちはじめやすい時期です。",
          actionHint: "今日は、信頼できる判断を一つだけ選んでその流れに乗ってみてください。",
        },
      },
      {
        id: "pressured",
        label: "指示や責任が重く感じた",
        scoreImpact: { anxiety: 2, selfDefense: 1, unresolved: 1 },
        interpretationHints: {
          summary: "重い指示のリーダーの夢は、現実でも役割の重さや期待が負担になっている時に出やすいです。",
          fortune: "今は引き受けすぎていないかを確かめるほど、少しずつ流れが楽になりやすいです。",
          actionHint: "今抱えている役割を一つだけ書き出して、本当にそれが自分のものかを確かめてみてください。",
        },
      },
      {
        id: "empty-role",
        label: "立場だけあって中身が伴っていない感じだった",
        scoreImpact: { anxiety: 1, unresolved: 2, loss: 1 },
        interpretationHints: {
          summary: "中身が伴わないリーダーの夢は、形だけ整っていて本質が欠けている何かへの違和感を映すことがあります。",
          fortune: "形より実質を見直すほど、今の流れが少し整いやすくなりそうです。",
          actionHint: "今の役割や関係で、実質が伴っているかを一つだけ確かめてみてください。",
        },
      },
    ],
  },
  {
    id: "subordinate-role",
    motifId: "subordinate",
    prompt: "その部下との関わり方はどうでしたか？",
    type: "single",
    priority: 71,
    options: [
      {
        id: "trusted",
        label: "任せられて安心だった",
        scoreImpact: { relationships: 2, recovery: 1, desire: 1 },
        interpretationHints: {
          summary: "安心して任せられた夢は、信頼関係が育っている感覚や、任せることへの安心を映しているのかもしれません。",
          fortune: "任せる流れは整いやすく、今の連携を大切にするほど一緒に進みやすくなります。",
          actionHint: "今日は、誰かに一つだけ任せてみて、その人の力を信じることを練習してみてください。",
        },
      },
      {
        id: "burdened",
        label: "抱え込んで疲れた",
        scoreImpact: { anxiety: 1, selfDefense: 1, unresolved: 2 },
        interpretationHints: {
          summary: "抱え込んで疲れる夢は、全部を一人で背負おうとしているか、任せることへの不安が大きい時に出やすいです。",
          fortune: "全部の責任を引き受けようとするより、分けられることを一つ見つけるほど流れが楽になります。",
          actionHint: "今引き受けているものを一つだけ書き出して、それを誰かと分けられるかを考えてみてください。",
        },
      },
      {
        id: "worried",
        label: "ちゃんと見なきゃと心配だった",
        scoreImpact: { anxiety: 1, relationships: 1, unresolved: 2 },
        interpretationHints: {
          summary: "心配で見守る夢は、誰かに対する責任感や、失敗させたくない気持ちが高まっている時に出やすいです。",
          fortune: "見守ることと手を放すことのバランスを取るほど、お互いが育ちやすい流れになります。",
          actionHint: "一歩下がって相手を見守る時間を今日は一つ作ってみてください。",
        },
      },
    ],
  },
  {
    id: "shop-clerk-tone",
    motifId: "shop_clerk",
    prompt: "その店員はどんな対応でしたか？",
    type: "single",
    priority: 66,
    options: [
      {
        id: "helpful",
        label: "親切で助かった",
        scoreImpact: { recovery: 1, relationships: 1, desire: 1 },
        interpretationHints: {
          summary: "親切な店員の夢は、外からの支援や配慮を受け取れている感覚を映していることがあります。",
          fortune: "助けを素直に受け取れる状態は、流れを整えやすい状態です。",
          actionHint: "今日は誰かの親切を素直に受け取る練習を一回してみてください。",
        },
      },
      {
        id: "cold",
        label: "冷たくて距離を感じた",
        scoreImpact: { anxiety: 1, loss: 1, unresolved: 2 },
        interpretationHints: {
          summary: "冷たい店員の夢は、日常で受け取りたい配慮が得られていない寂しさを映すことがあります。",
          fortune: "外からの反応が冷たく感じるなら、自分に温かい人や場を先に確保するほど流れが整いやすいです。",
          actionHint: "今日は、自分が安心できる場や人を一つだけ選んで過ごしてみてください。",
        },
      },
      {
        id: "pushy",
        label: "勧められすぎて疲れた",
        scoreImpact: { anxiety: 1, selfDefense: 1, unresolved: 2 },
        interpretationHints: {
          summary: "勧められすぎる夢は、外からの期待や圧に疲れて自分のペースを取り戻したい時に出やすいです。",
          fortune: "自分の選択を急かされず、自分のペースで決める時間を持つほど流れが整いやすいです。",
          actionHint: "今日は誰かに急かされたら、一回だけ「少し考えます」と言ってみてください。",
        },
      },
    ],
  },
  {
    id: "guest-feeling",
    motifId: "guest",
    prompt: "その来客をどう感じましたか？",
    type: "single",
    priority: 67,
    options: [
      {
        id: "welcome",
        label: "来てくれて嬉しかった",
        scoreImpact: { relationships: 2, recovery: 1, desire: 1 },
        interpretationHints: {
          summary: "来客を歓迎できる夢は、誰かを受け入れる心の余白が今はある状態を映しているのかもしれません。",
          fortune: "迎え入れる流れは整いやすく、つながりを大切にするほど関係が豊かになりやすい時期です。",
          actionHint: "今日は、会いたいと思っている人に短い一言でも連絡してみてください。",
        },
      },
      {
        id: "unprepared",
        label: "急で戸惑った",
        scoreImpact: { anxiety: 1, change: 1, unresolved: 2 },
        interpretationHints: {
          summary: "急な来客に戸惑う夢は、準備が追いつかない感覚や、変化に対応しきれていない時に出やすいです。",
          fortune: "急な変化に戸惑っても、少しずつ整えるほど流れは落ち着いてきます。",
          actionHint: "今日は一つだけ、いつ来てもいい状態に整えておきたいことを片づけてみてください。",
        },
      },
      {
        id: "intrusive",
        label: "入られたくない感じがした",
        scoreImpact: { anxiety: 1, selfDefense: 2, unresolved: 1 },
        interpretationHints: {
          summary: "入ってほしくない来客の夢は、自分の領域を守りたい気持ちや、境界を引きたい感覚を映すことがあります。",
          fortune: "自分の空間を守ることは健全な行動です。境界を意識するほど流れが整いやすくなります。",
          actionHint: "今日は、自分だけの時間や空間を少しでいいので確保してみてください。",
        },
      },
    ],
  },
  {
    id: "rescuer-effect",
    motifId: "rescuer",
    prompt: "その人に助けられてどう感じましたか？",
    type: "single",
    priority: 68,
    options: [
      {
        id: "relieved",
        label: "ほっとして救われた",
        scoreImpact: { recovery: 2, relationships: 1, loss: 1 },
        interpretationHints: {
          summary: "ほっと救われる夢は、今のあなたの心が助けを必要としていて、受け取ってもいいというサインかもしれません。",
          fortune: "助けを受け取れる流れは、今の重さが少しずつ軽くなっていく兆しを含んでいます。",
          actionHint: "誰かに助けを求めてもいいと思えることを一つ、今日は自分に許してみてください。",
        },
      },
      {
        id: "dependent",
        label: "助けがないと無理だと感じた",
        scoreImpact: { anxiety: 1, loss: 1, unresolved: 2 },
        interpretationHints: {
          summary: "助けがないと無理という感覚の夢は、今のあなたが疲れていて、一人で抱えすぎている時に出やすいです。",
          fortune: "頼ることは弱さではありません。今は頼れる相手を見つけることが流れを整える大切な一歩です。",
          actionHint: "今日は、誰かに少しだけ頼んでみる場面を一つ作ってみてください。",
        },
      },
      {
        id: "suspicious",
        label: "助けられても少し怖かった",
        scoreImpact: { anxiety: 2, selfDefense: 1, unresolved: 1 },
        interpretationHints: {
          summary: "助けられても怖い夢は、人の善意を受け取ることへの迷いや、信じることへの慎重さを映すことがあります。",
          fortune: "慎重さは自分を守る力ですが、信じてもいいと感じた時には少しずつ受け取る練習が助けになります。",
          actionHint: "信頼できると感じた人の一言だけを、今日は素直に受け取ってみてください。",
        },
      },
    ],
  },
];
