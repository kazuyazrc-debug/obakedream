import type { MotifLexiconEntry } from "@/types/dream";

export const batch01Aliases: MotifLexiconEntry[] = [
  {
    motifId: "snake",
    aliases: ["蛇", "へび", "ヘビ", "大蛇", "白蛇", "毒蛇"],
    priorityKeywords: ["蛇に噛まれる", "蛇が出る", "蛇から逃げる", "白い蛇"],
    secondaryKeywords: ["巻きつく", "にょろにょろ", "毒", "脱皮"],
  },
  {
    motifId: "water",
    aliases: ["水", "雨", "川", "池", "湖", "洪水", "水たまり"],
    priorityKeywords: ["水に入る", "水が濁る", "水があふれる", "水に流される"],
    secondaryKeywords: ["濡れる", "透明", "濁った", "流れ", "深い"],
  },
  {
    motifId: "sea",
    aliases: ["海", "海岸", "浜辺", "波"],
    priorityKeywords: ["海で泳ぐ", "海を見る", "波にのまれる", "海に沈む"],
    secondaryKeywords: ["砂浜", "潮", "沖", "水平線", "荒波"],
  },
  {
    motifId: "house",
    aliases: ["家", "部屋", "住まい", "自宅", "マンション", "アパート"],
    priorityKeywords: ["家に帰る", "家が壊れる", "知らない家", "家を探す"],
    secondaryKeywords: ["玄関", "屋根", "台所", "寝室", "窓"],
  },
  {
    motifId: "childhood_home",
    aliases: ["実家", "昔の家", "生家", "親の家"],
    priorityKeywords: ["実家に帰る", "昔の部屋", "実家が出てくる", "親の家", "幼い頃の家"],
    secondaryKeywords: ["帰省", "子どもの頃", "懐かしい家", "昔住んでいた"],
  },
  {
    motifId: "school",
    aliases: ["学校", "教室", "体育館", "校庭", "大学", "高校", "中学", "小学校"],
    priorityKeywords: ["学校に行く", "授業を受ける", "教室にいる"],
    secondaryKeywords: ["先生", "黒板", "宿題", "制服"],
  },
  {
    motifId: "friend",
    aliases: ["友人", "友達", "親友", "同級生", "知人"],
    priorityKeywords: ["友達と話す", "友人と会う", "友達と喧嘩", "友人に助けられる"],
    secondaryKeywords: ["仲間", "同僚", "昔の友達", "遊ぶ"],
  },
  {
    motifId: "family",
    aliases: ["家族", "母", "父", "兄", "姉", "弟", "妹", "祖母", "祖父", "親"],
    priorityKeywords: ["家族と話す", "母が出る", "父が出る", "家族に会う"],
    secondaryKeywords: ["親戚", "兄弟", "姉妹", "食卓", "身内"],
  },
  {
    motifId: "stranger",
    aliases: ["知らない人", "見知らぬ人", "知らない男", "知らない女", "他人"],
    priorityKeywords: ["知らない人に会う", "見知らぬ人に追われる", "知らない人と話す"],
    secondaryKeywords: ["誰か", "謎の人", "初対面", "知らない相手"],
  },
  {
    motifId: "being_chased",
    aliases: ["追われる", "追われ", "追いかけられる", "逃げる", "追跡される"],
    priorityKeywords: ["誰かに追われる", "逃げても追ってくる", "追いかけられて怖い", "足音がついてくる", "足音がついてきて", "後ろから足音がする", "誰かに追いかけられて走って逃げた", "追いかけられて走って逃げた"],
    secondaryKeywords: ["隠れる", "捕まる", "全力で走る", "逃亡"],
  },
  {
    motifId: "falling",
    aliases: ["落ちる", "落下", "転落", "滑り落ちる"],
    priorityKeywords: ["高い所から落ちる", "階段から落ちる", "穴に落ちる"],
    secondaryKeywords: ["崖", "踏み外す", "落ちそう", "急降下"],
  },
  {
    motifId: "flying",
    aliases: ["飛ぶ", "空を飛ぶ", "浮く", "宙に浮く"],
    priorityKeywords: ["空を飛ぶ", "自由に飛ぶ", "低く飛ぶ", "飛べなくなる"],
    secondaryKeywords: ["羽", "浮遊", "上昇", "空中"],
  },
  {
    motifId: "death",
    aliases: ["死ぬ", "死亡", "亡くなる", "葬式", "お墓", "生き返る"],
    priorityKeywords: ["自分が死ぬ", "誰かが死ぬ", "葬式に出る", "死んだ人"],
    secondaryKeywords: ["遺体", "墓", "別れ", "終わり"],
  },
  {
    motifId: "teeth",
    aliases: ["歯", "前歯", "奥歯", "歯茎", "虫歯"],
    priorityKeywords: ["歯が抜ける", "歯が欠ける", "歯がぐらぐら", "歯を磨く"],
    secondaryKeywords: ["口", "噛む", "歯医者", "痛い"],
  },
  {
    motifId: "baby",
    aliases: ["赤ちゃん", "赤ん坊", "乳児", "新生児", "子ども"],
    priorityKeywords: ["赤ちゃんを抱く", "赤ちゃんが泣く", "赤ちゃんを世話する"],
    secondaryKeywords: ["妊娠", "出産", "泣き声", "小さい子"],
  },
  {
    motifId: "cat",
    aliases: ["猫", "ねこ", "ネコ", "子猫", "黒猫", "白猫"],
    priorityKeywords: ["猫をなでる", "猫に引っかかれる", "猫が逃げる", "猫が鳴く"],
    secondaryKeywords: ["肉球", "しっぽ", "ひっかく", "鳴き声"],
  },
  {
    motifId: "dog",
    aliases: ["犬", "いぬ", "イヌ", "子犬", "大型犬", "白い犬"],
    priorityKeywords: ["犬と散歩", "犬に噛まれる", "犬が吠える", "犬に助けられる"],
    secondaryKeywords: ["しっぽ", "リード", "吠える", "忠実"],
  },
  {
    motifId: "train",
    aliases: ["電車", "列車", "地下鉄", "新幹線", "駅", "ホーム"],
    priorityKeywords: ["電車に乗る", "電車に乗り遅れる", "電車に乗り遅れ", "駅で迷う", "電車を降りる"],
    secondaryKeywords: ["線路", "切符", "改札", "車内"],
  },
  {
    motifId: "being_late",
    aliases: ["遅刻", "遅れる", "遅れ", "間に合わない", "寝坊"],
    priorityKeywords: ["学校に遅刻", "会社に遅刻", "電車に乗り遅れる", "電車に乗り遅れ", "約束に遅れる", "始業時間を過ぎる", "始業時間を過ぎて", "始業時間を2時間過ぎて", "時間を過ぎている"],
    secondaryKeywords: ["焦る", "急ぐ", "走る", "時間がない"],
  },
  {
    motifId: "fighting",
    aliases: ["戦う", "喧嘩", "けんか", "口論", "殴る", "争う"],
    priorityKeywords: ["誰かと戦う", "友達と喧嘩", "殴り合う", "敵と戦う", "キレる", "キレ散らかす", "ブチギレる", "相手にブチギレて怒鳴っていた"],
    secondaryKeywords: ["怒る", "怒鳴る", "言い返す", "勝つ", "負ける", "守る"],
  },
];
