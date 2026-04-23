import type { MotifLexiconEntry } from "@/types/dream";

export const batch05Aliases: MotifLexiconEntry[] = [
  {
    motifId: "shop",
    aliases: ["お店", "商店", "売り場", "店舗", "店内"],
    priorityKeywords: ["店にいる", "店で買い物をする", "店で選ぶ", "レジで支払う", "店で商品を選んだ", "店で服を選んだ"],
    secondaryKeywords: ["買い物中", "陳列棚", "商品選び", "会計待ち"],
  },
  {
    motifId: "library",
    aliases: ["図書館", "書庫", "閲覧室", "本棚の部屋"],
    priorityKeywords: ["図書館にいる", "図書館で本を探す", "図書館で調べる", "静かな図書館"],
    secondaryKeywords: ["貸出手続き", "読書席", "資料探し", "静かな棚"],
  },
  {
    motifId: "park",
    aliases: ["公園", "広場", "遊歩道", "緑地"],
    priorityKeywords: ["公園を歩く", "公園で遊ぶ", "公園のベンチにいる", "公園で待つ"],
    secondaryKeywords: ["遊具の前", "木陰の席", "散歩道", "芝生広場"],
  },
  {
    motifId: "parking_lot",
    aliases: ["駐車場", "車置き場", "立体駐車場", "駐車スペース"],
    priorityKeywords: ["駐車場で車を探す", "駐車場に車を停める", "駐車場から出る", "駐車場所がわからない"],
    secondaryKeywords: ["駐車券", "車止め", "空き区画", "停車位置"],
  },
  {
    motifId: "book",
    aliases: ["書籍", "本棚", "古い本", "分厚い本"],
    priorityKeywords: ["本を読む", "本を探す", "本を開く", "本を借りる"],
    secondaryKeywords: ["読書中", "ページをめくる", "物語の続き", "知識の記録"],
  },
  {
    motifId: "notebook",
    aliases: ["ノート", "手帳", "メモ帳", "学習ノート"],
    priorityKeywords: ["ノートを書く", "ノートを開く", "ノートをなくす", "ノートを読み返す"],
    secondaryKeywords: ["書き込み", "下書き欄", "授業メモ", "記録整理"],
  },
  {
    motifId: "box",
    aliases: ["箱入り", "段ボール箱", "小箱", "収納箱"],
    priorityKeywords: ["箱を開ける", "箱をしまう", "箱の中を見る", "箱を探す", "閉じた箱", "箱がある"],
    secondaryKeywords: ["中身確認", "しまい込む", "包装された物", "隠したもの"],
  },
  {
    motifId: "door",
    aliases: ["ドア", "玄関ドア", "開き戸", "部屋の入口"],
    priorityKeywords: ["ドアを開ける", "ドアを閉める", "ドアの前に立つ", "知らないドア"],
    secondaryKeywords: ["入口の前", "閉じた扉", "向こう側", "境界線"],
  },
  {
    motifId: "picking_up",
    aliases: ["拾い物", "拾得物", "拾った物", "落とし物を拾う"],
    priorityKeywords: ["何かを拾う", "財布を拾う", "財布を拾った", "鍵を拾う", "鍵を拾った", "落とし物を拾う", "財布を拾い"],
    secondaryKeywords: ["見つけた物", "道端の物", "拾い上げる", "持ち帰る"],
  },
  {
    motifId: "choosing",
    aliases: ["選択", "選び直し", "比較中", "候補選び"],
    priorityKeywords: ["何かを選ぶ", "服を選ぶ", "道を選ぶ", "店で商品を選ぶ"],
    secondaryKeywords: ["迷いながら決める", "比べている", "候補が多い", "決めきれない"],
  },
  {
    motifId: "opening",
    aliases: ["開封", "開錠", "ふたを開ける", "中を開く"],
    priorityKeywords: ["ドアを開ける", "ドアを開いた", "箱を開ける", "扉を開く", "扉が開いた", "鍵で開ける"],
    secondaryKeywords: ["中を確かめる", "閉じたものを開く", "入口を開く", "封を切る"],
  },
  {
    motifId: "screaming",
    aliases: ["叫び声", "大声で叫ぶ", "助けを呼ぶ", "声を上げる"],
    priorityKeywords: ["夢の中で叫ぶ", "助けてと叫ぶ", "助けてと叫んだ", "大声を出す", "叫んでも届かない"],
    secondaryKeywords: ["訴える声", "感情があふれる", "声が響く", "必死に呼ぶ"],
  },
  {
    motifId: "forgetting",
    aliases: ["忘れ物", "予定を忘れる", "約束を忘れる", "思い出せない"],
    priorityKeywords: ["大事なことを忘れる", "持ち物を忘れる", "持ち物を忘れた", "約束を忘れていた", "約束を忘れて", "約束を忘れた", "名前を思い出せない"],
    secondaryKeywords: ["抜け落ちている", "確認し忘れ", "記憶が曖昧", "思い出そうとする"],
  },
  {
    motifId: "eye",
    aliases: ["目元", "視線", "まなざし", "見開いた目"],
    priorityKeywords: ["目を見つめる", "誰かに見られる", "視線を感じる", "目が合う"],
    secondaryKeywords: ["見られている感じ", "まなざしが残る", "目をそらす", "じっと見る"],
  },
  {
    motifId: "trembling",
    aliases: ["震え", "手が震える", "体が震える", "小刻みに震える"],
    priorityKeywords: ["怖くて震える", "手が震えている", "手が震えた", "体が震える", "震えが止まらない"],
    secondaryKeywords: ["緊張で固まる", "足がすくむ", "こらえている", "身体が反応する"],
  },
  {
    motifId: "flower",
    aliases: ["花束", "花びら", "咲いた花", "白い花"],
    priorityKeywords: ["花が咲く", "花が咲き", "花束をもらう", "花を渡す", "花びらが散る"],
    secondaryKeywords: ["咲き始める", "飾られた花", "花の香り", "枯れかけた花"],
  },
  {
    motifId: "tree",
    aliases: ["木々", "大木", "並木道", "木の根"],
    priorityKeywords: ["木に登る", "大きな木を見る", "木の下で休む", "木が倒れる"],
    secondaryKeywords: ["枝が伸びる", "根が張る", "木陰にいる", "幹に触れる"],
  },
  {
    motifId: "fish",
    aliases: ["魚影", "金魚", "小魚", "魚の群れ"],
    priorityKeywords: ["魚が泳ぐ", "魚を捕まえる", "魚を逃がす", "水槽の魚を見る"],
    secondaryKeywords: ["水中の動き", "うろこが光る", "群れで泳ぐ", "釣り上げる"],
  },
  {
    motifId: "password",
    aliases: ["暗証番号", "ログイン情報", "認証コード", "合言葉"],
    priorityKeywords: ["パスワードを忘れる", "パスワードを入力する", "暗証番号が違う", "ログインできない"],
    secondaryKeywords: ["認証に失敗する", "秘密の番号", "アクセスできない", "鍵のような文字"],
  },
  {
    motifId: "chat",
    aliases: ["チャット", "チャット欄", "メッセージ画面", "既読表示", "トーク画面"],
    priorityKeywords: ["チャットを送る", "チャットの返事を待つ", "チャットの返事を待ち", "既読がつく", "メッセージを読み返す"],
    secondaryKeywords: ["短いやりとり", "返信が来ない", "通知の会話", "未読のまま"],
  },
];
