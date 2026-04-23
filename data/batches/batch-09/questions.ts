import type { FollowUpQuestion } from "@/types/dream";

export const batch09Questions: FollowUpQuestion[] = [
  {
    id: "kitchen-action",
    motifId: "kitchen",
    prompt: "台所では何をしていましたか？",
    type: "single",
    priority: 78,
    options: [
      { id: "cooking", label: "料理や準備をしていた", scoreImpact: { recovery: 1, relationships: 1 } },
      { id: "cleaning-sink", label: "洗ったり片付けたりしていた", scoreImpact: { selfDefense: 1, recovery: 1 } },
      { id: "messy-kitchen", label: "散らかって困っていた", scoreImpact: { unresolved: 2, anxiety: 1 } },
    ],
  },
  {
    id: "garden-state",
    motifId: "garden",
    prompt: "庭はどんな様子でしたか？",
    type: "single",
    priority: 77,
    options: [
      { id: "growing", label: "草花や木が育っていた", scoreImpact: { recovery: 2, change: 1 } },
      { id: "untended", label: "手入れされていなかった", scoreImpact: { unresolved: 2, selfDefense: 1 } },
      { id: "walking-calmly", label: "静かに歩いていた", scoreImpact: { recovery: 1, selfDefense: 1 } },
    ],
  },
  {
    id: "pen-use",
    motifId: "pen",
    prompt: "ペンはどのように使われていましたか？",
    type: "single",
    priority: 76,
    options: [
      { id: "writing-clearly", label: "はっきり書けていた", scoreImpact: { recovery: 1, selfDefense: 1 } },
      { id: "cannot-write", label: "書けなかった・インクが出なかった", scoreImpact: { unresolved: 2, anxiety: 1 } },
      { id: "searching-pen", label: "ペンを探していた", scoreImpact: { unresolved: 1, desire: 1 } },
    ],
  },
  {
    id: "dish-state",
    motifId: "dish",
    prompt: "皿はどんな状態でしたか？",
    type: "single",
    priority: 75,
    options: [
      { id: "clean-dish", label: "きれいに並んでいた", scoreImpact: { recovery: 2 } },
      { id: "washing-dish", label: "洗っていた", scoreImpact: { selfDefense: 1, recovery: 1 } },
      { id: "broken-dish", label: "割れたり欠けたりしていた", scoreImpact: { loss: 1, unresolved: 1 } },
    ],
  },
  {
    id: "hallway-direction",
    motifId: "hallway",
    prompt: "廊下ではどんな感じでしたか？",
    type: "single",
    priority: 77,
    options: [
      { id: "moving-forward", label: "先へ進んでいた", scoreImpact: { change: 2 } },
      { id: "lost-hallway", label: "迷っていた", scoreImpact: { unresolved: 2, anxiety: 1 } },
      { id: "waiting-hallway", label: "誰かや何かを待っていた", scoreImpact: { unresolved: 1, desire: 1 } },
    ],
  },
  {
    id: "balcony-view",
    motifId: "balcony",
    prompt: "ベランダでは何が印象的でしたか？",
    type: "single",
    priority: 76,
    options: [
      { id: "outside-air", label: "外の空気や風", scoreImpact: { recovery: 1, change: 1 } },
      { id: "looking-out", label: "外を眺めていた", scoreImpact: { desire: 1, selfDefense: 1 } },
      { id: "afraid-height", label: "高さや外側が不安だった", scoreImpact: { anxiety: 2, selfDefense: 1 } },
    ],
  },
  {
    id: "television-content",
    motifId: "television",
    prompt: "テレビでは何が流れていましたか？",
    type: "single",
    priority: 77,
    options: [
      { id: "news-program", label: "ニュースや情報番組", scoreImpact: { unresolved: 2, selfDefense: 1 } },
      { id: "unknown-program", label: "よくわからない映像", scoreImpact: { anxiety: 1, unresolved: 1 } },
      { id: "turning-off", label: "テレビを消していた", scoreImpact: { selfDefense: 2 } },
    ],
  },
  {
    id: "radio-sound",
    motifId: "radio",
    prompt: "ラジオの音はどう聞こえましたか？",
    type: "single",
    priority: 76,
    options: [
      { id: "clear-voice", label: "声や内容がはっきり聞こえた", scoreImpact: { relationships: 1, recovery: 1 } },
      { id: "noisy", label: "雑音が混じっていた", scoreImpact: { unresolved: 2, anxiety: 1 } },
      { id: "distant-sound", label: "遠くから聞こえていた", scoreImpact: { unresolved: 1, desire: 1 } },
    ],
  },
  {
    id: "hat-fit",
    motifId: "hat",
    prompt: "帽子は自分に合っていましたか？",
    type: "single",
    priority: 76,
    options: [
      { id: "fits-well", label: "自然に似合っていた", scoreImpact: { selfDefense: 1, recovery: 1 } },
      { id: "does-not-fit", label: "違和感があった", scoreImpact: { unresolved: 2, anxiety: 1 } },
      { id: "taking-off", label: "脱いだり探したりしていた", scoreImpact: { change: 1, selfDefense: 1 } },
    ],
  },
  {
    id: "lake-surface",
    motifId: "lake",
    prompt: "湖の水面はどんな様子でしたか？",
    type: "single",
    priority: 77,
    options: [
      { id: "still-surface", label: "静かで澄んでいた", scoreImpact: { recovery: 2 } },
      { id: "deep-dark", label: "深く暗く感じた", scoreImpact: { unresolved: 2, anxiety: 1 } },
      { id: "walking-lakeside", label: "湖畔を歩いていた", scoreImpact: { selfDefense: 1, change: 1 } },
    ],
  },
  {
    id: "mask-distance",
    motifId: "mask",
    prompt: "マスクはどんな印象でしたか？",
    type: "single",
    priority: 78,
    options: [
      { id: "protective", label: "守られている感じがした", scoreImpact: { selfDefense: 2 } },
      { id: "hard-to-speak", label: "声が届きにくかった", scoreImpact: { unresolved: 2, relationships: 1 } },
      { id: "removed-mask", label: "外して楽になった", scoreImpact: { recovery: 1, change: 1 } },
    ],
  },
    {
      id: "mistake-context",
      motifId: "making_mistake",
      prompt: "何を間違えた感じでしたか？",
      type: "single",
      priority: 80,
      options: [
        {
          id: "answer",
          label: "答えや文字を間違えた",
          scoreImpact: { anxiety: 1, unresolved: 2 },
          interpretationHints: {
            summary:
              "答えや文字を間違える夢には、正しく応えたい気持ちが強いぶん、自分の表現に慎重になっている流れがにじむことがあります。",
            fortune:
              "細部を気にしすぎて流れが固まりやすい時ですが、整え直す余地はまだ十分に残っています。",
            actionHint:
              "完璧さに引っ張られる日は、まず伝えたい芯だけを残して、細かな不安はいったん脇へ置いてみてください。",
          },
        },
        {
          id: "direction",
          label: "道や行き先を間違えた",
          scoreImpact: { change: 1, unresolved: 1 },
          interpretationHints: {
            summary:
              "道や行き先を間違える夢は、進む方向を決める場面で、今の自分に合う道筋を慎重に探している時に出やすい象徴です。",
            fortune:
              "遠回りに見える流れも、いまは必要な見直しを含んでいて、次の選び方を整える手助けになりやすいでしょう。",
            actionHint:
              "急いで正解を決めるより、まず違和感のある道をひとつ外してみると進みやすさが戻ってきます。",
          },
        },
        {
          id: "corrected",
          label: "途中で気づいて直した",
          scoreImpact: { recovery: 1, selfDefense: 1 },
          interpretationHints: {
            summary:
              "途中で気づいて直せた夢は、失敗を恐れる気持ちがありながらも、立て直す力をちゃんと持っていることを映しています。",
            fortune:
              "流れの中で修正が利きやすい時期なので、完璧な出発より途中で整える柔らかさが味方になります。",
            actionHint:
              "少し違うと感じた時点で止まり、やり直せる余白を自分に許してあげると安心感が戻りやすくなります。",
          },
        },
      ],
    },
  {
    id: "refusing-feeling",
    motifId: "refusing",
    prompt: "断ったときの感覚は？",
    type: "single",
    priority: 78,
    options: [
      { id: "relieved", label: "少しほっとした", scoreImpact: { selfDefense: 2, recovery: 1 } },
      { id: "guilty", label: "気まずさが残った", scoreImpact: { relationships: 1, unresolved: 1 } },
      { id: "could-not-refuse", label: "断れずに困った", scoreImpact: { anxiety: 1, selfDefense: 1 } },
    ],
  },
  {
    id: "lining-up-wait",
    motifId: "lining_up",
    prompt: "列に並ぶ夢では何を待っていましたか？",
    type: "single",
    priority: 77,
    options: [
      { id: "own-turn", label: "自分の番を待っていた", scoreImpact: { unresolved: 1, selfDefense: 1 } },
      { id: "line-moving", label: "少しずつ前に進んでいた", scoreImpact: { change: 1, recovery: 1 } },
      { id: "line-stuck", label: "列が進まなかった", scoreImpact: { unresolved: 2, anxiety: 1 } },
    ],
  },
  {
    id: "tripping-recovery",
    motifId: "tripping",
    prompt: "転んだあと、どうなりましたか？",
    type: "single",
    priority: 79,
    options: [
      { id: "stood-up", label: "起き上がれた", scoreImpact: { recovery: 2, selfDefense: 1 } },
      { id: "checked-feet", label: "足元を確かめていた", scoreImpact: { selfDefense: 2 } },
      { id: "felt-embarrassed", label: "焦りや恥ずかしさがあった", scoreImpact: { anxiety: 1, unresolved: 1 } },
    ],
  },
  {
    id: "pond-scene",
    motifId: "pond",
    prompt: "池では何が印象的でしたか？",
    type: "single",
    priority: 76,
    options: [
      { id: "fish-visible", label: "魚や水中が見えた", scoreImpact: { recovery: 1, desire: 1 } },
      { id: "still-pond", label: "静かな水面だった", scoreImpact: { recovery: 2 } },
      { id: "muddy-pond", label: "濁って見えにくかった", scoreImpact: { unresolved: 2, anxiety: 1 } },
    ],
  },
  {
    id: "fog-visibility",
    motifId: "fog",
    prompt: "霧の中ではどのくらい見えていましたか？",
    type: "single",
    priority: 79,
    options: [
      { id: "barely-visible", label: "ほとんど見えなかった", scoreImpact: { anxiety: 1, unresolved: 2 } },
      { id: "nearby-visible", label: "近くは見えていた", scoreImpact: { selfDefense: 1, recovery: 1 } },
      { id: "fog-cleared", label: "だんだん晴れてきた", scoreImpact: { recovery: 2, change: 1 } },
    ],
  },
  {
    id: "mobile-app-action",
    motifId: "mobile_app",
    prompt: "アプリでは何をしようとしていましたか？",
    type: "single",
    priority: 78,
    options: [
      { id: "opening-app", label: "アプリを開いていた", scoreImpact: { change: 1, selfDefense: 1 } },
      { id: "cannot-login", label: "ログインや操作で困った", scoreImpact: { unresolved: 2, anxiety: 1 } },
      { id: "finding-app", label: "必要なアプリを探していた", scoreImpact: { desire: 1, unresolved: 1 } },
    ],
  },
  {
    id: "video-viewing",
    motifId: "video",
    prompt: "動画はどんな見方でしたか？",
    type: "single",
    priority: 77,
    options: [
      { id: "replaying", label: "何度も見返していた", scoreImpact: { unresolved: 2, desire: 1 } },
      { id: "watching-calmly", label: "落ち着いて見ていた", scoreImpact: { recovery: 1, selfDefense: 1 } },
      { id: "could-not-stop", label: "止められず流れていた", scoreImpact: { anxiety: 1, unresolved: 1 } },
    ],
  },
  {
    id: "teacher-role",
    motifId: "teacher",
    prompt: "先生はどんな役割でしたか？",
    type: "single",
    priority: 80,
    options: [
      { id: "teaching", label: "教えてくれていた", scoreImpact: { recovery: 1, relationships: 1 } },
      { id: "evaluating", label: "評価している感じだった", scoreImpact: { anxiety: 1, unresolved: 2 } },
      { id: "asking-question", label: "質問していた", scoreImpact: { desire: 1, recovery: 1 } },
    ],
  },
];
