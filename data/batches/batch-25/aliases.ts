import type { MotifLexiconEntry } from "@/types/dream";

export const batch25Aliases: MotifLexiconEntry[] = [
  {
    motifId: "earthquake",
    aliases: ["地震", "大きな地震", "地面が揺れる", "揺れが来る"],
    priorityKeywords: [
      "地震が来た",
      "地面が揺れた",
      "大きな揺れだった",
      "地震で建物が揺れた",
      "震度が大きかった",
    ],
    secondaryKeywords: ["震災の夢", "地面が崩れる", "足元が揺れる", "建物が崩れる"],
  },
  {
    motifId: "tsunami",
    aliases: ["津波", "巨大な波", "大波", "波に飲み込まれる"],
    priorityKeywords: [
      "津波が来た",
      "巨大な波が押し寄せた",
      "波に飲み込まれた",
      "津波から逃げた",
      "高台に逃げた",
    ],
    secondaryKeywords: ["波が押し寄せる", "海が迫ってくる", "逃げ場がない波", "濁流に飲まれる"],
  },
  {
    motifId: "storm",
    aliases: ["嵐の中", "台風", "暴風雨", "嵐が来る"],
    priorityKeywords: [
      "嵐が来た",
      "台風が来た",
      "暴風雨になった",
      "嵐の中にいた",
      "激しい風雨だった",
    ],
    secondaryKeywords: ["暴風の中にいた", "強風に打たれる", "激しい雨風", "嵐に飛ばされる"],
  },
  {
    motifId: "being_trapped",
    aliases: ["閉じ込められる", "逃げられない", "出口がない", "閉じ込められた"],
    priorityKeywords: [
      "閉じ込められた",
      "逃げられない場所にいた",
      "出口がない部屋にいた",
      "脱出できなかった",
      "逃げ場がなかった",
    ],
    secondaryKeywords: ["囚われる", "出られない", "鍵がかかって出られない", "閉塞感がある"],
  },
  {
    motifId: "paralysis",
    aliases: ["金縛り", "体が動かない", "動けない", "金縛りにあう"],
    priorityKeywords: [
      "金縛りにあった",
      "体が動かなかった",
      "動けなかった",
      "声が出なかった",
      "手足が動かない状態だった",
    ],
    secondaryKeywords: ["体が固まる", "動こうとしても動けない", "麻痺する", "体が重くて動けない"],
  },
  {
    motifId: "being_fired",
    aliases: ["クビになる", "解雇される", "リストラされる", "解雇"],
    priorityKeywords: [
      "クビになった",
      "解雇された",
      "突然クビを告げられた",
      "リストラされた",
      "仕事を失った",
    ],
    secondaryKeywords: ["首になる", "職を失う", "強制退職させられる", "職場を追い出される"],
  },
  {
    motifId: "resignation",
    aliases: ["退職する", "仕事を辞める", "会社を辞める", "退職"],
    priorityKeywords: [
      "退職した",
      "仕事を辞めた",
      "会社を辞めた",
      "退職届を出した",
      "辞表を出した",
    ],
    secondaryKeywords: ["離職する", "転職する", "仕事を去る", "退職を決めた"],
  },
  {
    motifId: "pregnancy",
    aliases: ["妊娠する", "出産する", "妊娠した", "赤ちゃんができる"],
    priorityKeywords: [
      "妊娠した",
      "出産した",
      "赤ちゃんができた",
      "子供ができた",
      "妊娠がわかった",
    ],
    secondaryKeywords: ["子を産む", "子供を産む", "出産の夢だった", "生む体験をした"],
  },
  {
    motifId: "transformation",
    aliases: ["変身する", "姿が変わる", "別の何かになる", "変身"],
    priorityKeywords: [
      "変身した",
      "姿が変わった",
      "別の何かになった",
      "自分が変身していた",
      "形が変わった",
    ],
    secondaryKeywords: ["別の姿になる", "変化する", "変容する", "別の存在になる"],
  },
  {
    motifId: "power_outage",
    aliases: ["停電する", "電気が消える", "暗くなる", "停電"],
    priorityKeywords: [
      "停電した",
      "電気が消えた",
      "真っ暗になった",
      "明かりが消えた",
      "ブレーカーが落ちた",
    ],
    secondaryKeywords: ["電気が切れる", "暗闇になる", "灯りが消える", "停電で見えなくなる"],
  },
];
