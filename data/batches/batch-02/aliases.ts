import type { MotifLexiconEntry } from "@/types/dream";

export const batch02Aliases: MotifLexiconEntry[] = [
  {
    motifId: "fire",
    aliases: ["火事", "焚き火", "炎上", "燃える火"],
    priorityKeywords: ["火が燃える", "火を消す", "火事になる", "炎に包まれる"],
    secondaryKeywords: ["燃えた", "熱い", "煙", "焦げる"],
  },
  {
    motifId: "rain",
    aliases: ["雨降り", "大雨", "小雨", "豪雨", "夕立"],
    priorityKeywords: ["雨が降る", "雨に濡れる", "雨宿りする", "傘をさす"],
    secondaryKeywords: ["濡れた", "傘", "雷雨", "しとしと"],
  },
  {
    motifId: "sky",
    aliases: ["青空", "夜空", "曇り空", "空模様"],
    priorityKeywords: ["空を見上げる", "空が明るい", "空が暗い", "雲が流れる"],
    secondaryKeywords: ["雲", "晴れ", "夕焼け", "朝焼け"],
  },
  {
    motifId: "moon",
    aliases: ["満月", "三日月", "月明かり", "月夜"],
    priorityKeywords: ["月を見る", "月が出る", "月に照らされる", "大きな月"],
    secondaryKeywords: ["夜", "月光", "満ち欠け", "青白い"],
  },
  {
    motifId: "forest",
    aliases: ["森林", "樹海", "林道", "木々"],
    priorityKeywords: ["森を歩く", "森で迷う", "森から出る", "森に隠れる"],
    secondaryKeywords: ["木", "茂み", "暗い森", "木漏れ日"],
  },
  {
    motifId: "mountain",
    aliases: ["山道", "登山", "山頂", "高い山"],
    priorityKeywords: ["山に登る", "山を下りる", "山の頂上", "山で迷う"],
    secondaryKeywords: ["崖", "坂", "頂上", "ふもと"],
  },
  {
    motifId: "river",
    aliases: ["河川", "小川", "渓流", "川岸"],
    priorityKeywords: ["川を渡る", "川に流される", "川を見る", "川で泳ぐ"],
    secondaryKeywords: ["流れ", "岸辺", "水音", "浅瀬"],
  },
  {
    motifId: "bridge",
    aliases: ["吊り橋", "歩道橋", "橋の上", "橋げた"],
    priorityKeywords: ["橋を渡る", "橋から落ちそう", "橋が壊れる", "橋を戻る"],
    secondaryKeywords: ["向こう岸", "渡れない", "つなぐ", "境目"],
  },
  {
    motifId: "road",
    aliases: ["道路", "一本道", "分かれ道", "帰り道", "知らない道"],
    priorityKeywords: ["道に迷う", "道を歩く", "分かれ道に立つ", "進む道を選ぶ"],
    secondaryKeywords: ["行き先", "曲がり角", "遠回り", "進路"],
  },
  {
    motifId: "stairs",
    aliases: ["階段", "段差", "非常階段", "長い階段"],
    priorityKeywords: ["階段を上る", "階段を下りる", "階段から落ちる", "階段を駆け上がる"],
    secondaryKeywords: ["踊り場", "踏み外す", "上の階", "下の階"],
  },
  {
    motifId: "elevator",
    aliases: ["エレベーター", "リフト", "昇降機"],
    priorityKeywords: ["エレベーターに乗る", "エレベーターが落ちる", "エレベーターに閉じ込められる"],
    secondaryKeywords: ["上がる", "下がる", "止まらない", "扉が閉まる"],
  },
  {
    motifId: "car",
    aliases: ["自動車", "車内", "運転席", "駐車場"],
    priorityKeywords: ["車を運転する", "車に乗る", "車がぶつかる", "車で迷う"],
    secondaryKeywords: ["運転", "ハンドル", "ブレーキ", "助手席"],
  },
  {
    motifId: "workplace",
    aliases: ["職場", "会社", "オフィス", "会議室", "仕事場"],
    priorityKeywords: ["職場にいる", "会社に行く", "職場で怒られる", "仕事に遅れる"],
    secondaryKeywords: ["上司", "同僚", "仕事", "会議", "デスク"],
  },
  {
    motifId: "hospital",
    aliases: ["病院", "病室", "待合室", "診察室", "救急車"],
    priorityKeywords: ["病院に行く", "病院で待つ", "入院する", "見舞いに行く"],
    secondaryKeywords: ["医者", "看護師", "診察", "治療", "薬"],
  },
  {
    motifId: "exam",
    aliases: ["試験", "テスト", "受験", "答案", "試験会場", "期末試験", "問題用紙", "回答欄"],
    priorityKeywords: ["試験を受ける", "テストに遅れる", "試験に落ちる", "問題を解く", "問題用紙の文字が読めない", "回答欄に書く"],
    secondaryKeywords: ["点数", "合格", "不合格", "勉強", "答案用紙"],
  },
  {
    motifId: "toilet",
    aliases: ["トイレ", "お手洗い", "便所", "化粧室"],
    priorityKeywords: ["トイレを探す", "トイレに入る", "トイレが汚い", "トイレが見つからない"],
    secondaryKeywords: ["流す", "個室", "用を足す", "水洗"],
  },
  {
    motifId: "mirror",
    aliases: ["鏡", "姿見", "手鏡", "洗面鏡"],
    priorityKeywords: ["鏡を見る", "鏡が割れる", "鏡に映らない", "鏡を磨く"],
    secondaryKeywords: ["映る", "反射", "洗面所", "自分の顔"],
  },
  {
    motifId: "key",
    aliases: ["鍵", "カギ", "鍵穴", "合鍵", "キーホルダー"],
    priorityKeywords: ["鍵を開ける", "鍵をなくす", "鍵を探す", "鍵がかからない"],
    secondaryKeywords: ["開ける", "閉める", "玄関", "扉"],
  },
  {
    motifId: "wallet",
    aliases: ["財布", "小銭入れ", "カードケース", "お金入れ"],
    priorityKeywords: ["財布をなくす", "財布を拾う", "財布を探す", "財布が空になる"],
    secondaryKeywords: ["お金", "カード", "現金", "支払い"],
  },
  {
    motifId: "ex_partner",
    aliases: ["元恋人", "元彼", "元カノ", "昔の恋人", "前の恋人", "付き合っていた人", "昔付き合っていた人"],
    priorityKeywords: ["元恋人に会う", "元彼と話す", "元カノが出る", "昔の恋人と再会する", "学生時代に付き合っていた人"],
    secondaryKeywords: ["別れた相手", "昔の恋", "未練", "再会"],
  },
];
