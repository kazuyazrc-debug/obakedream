import type { MotifLexiconEntry } from "@/types/dream";

export const batch04Aliases: MotifLexiconEntry[] = [
  {
    motifId: "station",
    aliases: ["駅前", "駅構内", "改札口", "乗り場"],
    priorityKeywords: ["駅にいる", "駅で迷う", "改札を通る", "駅のホームで待つ"],
    secondaryKeywords: ["乗り換え", "終電前", "発車案内", "改札前"],
  },
  {
    motifId: "airport",
    aliases: ["空港", "搭乗口", "出発ロビー", "到着ロビー"],
    priorityKeywords: ["空港にいる", "飛行機に乗る", "搭乗手続きをする", "空港で迷う"],
    secondaryKeywords: ["保安検査", "出発案内", "荷物預け", "見送り"],
  },
  {
    motifId: "hotel",
    aliases: ["ホテル", "宿泊先", "客室", "フロント"],
    priorityKeywords: ["ホテルに泊まる", "ホテルを探す", "チェックインする", "知らないホテル"],
    secondaryKeywords: ["ロビー", "部屋番号", "予約確認", "仮眠場所"],
  },
  {
    motifId: "shrine",
    aliases: ["神社", "鳥居", "境内", "お守り"],
    priorityKeywords: ["神社に行く", "神社で祈る", "鳥居をくぐる", "お参りする"],
    secondaryKeywords: ["参道を歩く", "おみくじ", "手水舎", "願い事"],
  },
  {
    motifId: "umbrella",
    aliases: ["雨傘", "日傘", "折りたたみ傘", "傘立て"],
    priorityKeywords: ["傘をさす", "傘をなくす", "傘を借りる", "傘が壊れる"],
    secondaryKeywords: ["雨よけ", "濡れ防止", "相合い傘", "傘忘れ"],
  },
  {
    motifId: "bag",
    aliases: ["かばん", "バッグ", "リュック", "手提げ袋"],
    priorityKeywords: ["かばんを探す", "かばんをなくす", "かばんを持つ", "荷物を整理する"],
    secondaryKeywords: ["荷物整理", "持ち物確認", "重たい荷物", "中身確認"],
  },
  {
    motifId: "shoes",
    aliases: ["スニーカー", "革靴", "靴紐", "履き物"],
    priorityKeywords: ["靴を履く", "靴を探す", "靴が合わない", "靴をなくす"],
    secondaryKeywords: ["歩き方", "足元確認", "玄関先", "靴ずれ"],
  },
  {
    motifId: "ring",
    aliases: ["指輪", "リング", "婚約指輪", "結婚指輪"],
    priorityKeywords: ["指輪をはめる", "指輪をなくす", "指輪を外す", "指輪をもらう"],
    secondaryKeywords: ["約束の印", "薬指にはめる", "宝石付き", "大切な約束"],
  },
  {
    motifId: "searching",
    aliases: ["探し物", "捜し物", "探索", "見つからない物"],
    priorityKeywords: ["何かを探す", "人を探す", "なくした物を探す", "探しても見つからない"],
    secondaryKeywords: ["手がかり探し", "見つけたい", "歩き回る", "確認作業"],
  },
  {
    motifId: "hiding",
    aliases: ["隠れ場所", "物陰", "身を隠す", "潜伏"],
    priorityKeywords: ["誰かから隠れる", "隠れて見つからない", "物陰に隠れる", "息をひそめる"],
    secondaryKeywords: ["見つかりそう", "安全確認", "暗がり", "避難場所"],
  },
  {
    motifId: "waiting",
    aliases: ["待機", "順番待ち", "返事待ち", "待合室"],
    priorityKeywords: ["誰かを待つ", "返事を待つ", "駅で待つ", "長く待たされる"],
    secondaryKeywords: ["待ち時間", "列に並ぶ", "呼ばれる前", "時間待ち"],
  },
  {
    motifId: "naked",
    aliases: ["裸の姿", "服がない", "肌が見える", "身一つ"],
    priorityKeywords: ["裸でいる", "服を着ていない", "人前で裸になる", "裸を隠す"],
    secondaryKeywords: ["無防備な姿", "隠したい", "見られたくない", "着る物がない"],
  },
  {
    motifId: "injury",
    aliases: ["怪我", "けが", "負傷", "傷だらけ"],
    priorityKeywords: ["怪我をする", "怪我を手当てする", "転んで怪我をする", "誰かが怪我をする"],
    secondaryKeywords: ["手当てする", "痛みがある", "保護が必要", "無理をした"],
  },
  {
    motifId: "voiceless",
    aliases: ["声が出ない", "声を失う", "話せない", "言葉が出ない"],
    priorityKeywords: ["声が出ない", "叫んでも声が出ない", "話したいのに話せない", "助けを呼べない"],
    secondaryKeywords: ["伝えられない", "喉が詰まる", "言い出せない", "黙ってしまう"],
  },
  {
    motifId: "bird",
    aliases: ["小鳥", "鳥の群れ", "鳥かご", "白い鳥"],
    priorityKeywords: ["鳥が飛ぶ", "鳥を見る", "鳥が鳴く", "鳥を逃がす"],
    secondaryKeywords: ["羽ばたき", "空を舞う", "さえずり", "窓辺の鳥"],
  },
  {
    motifId: "thunder",
    aliases: ["雷鳴", "稲妻", "雷雨", "落雷"],
    priorityKeywords: ["雷が鳴る", "稲妻が光る", "雷に驚く", "雷雨の中にいる"],
    secondaryKeywords: ["大きな音", "空が光る", "急な衝撃", "嵐の前"],
  },
  {
    motifId: "stars",
    aliases: ["星空", "流れ星", "星座", "夜の星"],
    priorityKeywords: ["星を見る", "星空を見上げる", "流れ星を見る", "星に願う"],
    secondaryKeywords: ["遠い光", "夜空の光", "小さな希望", "星明かり"],
  },
  {
    motifId: "sns",
    aliases: ["SNS", "ソーシャルメディア", "投稿画面", "タイムライン"],
    priorityKeywords: ["SNSを見る", "SNSに投稿する", "SNSの反応を待つ", "投稿を消す"],
    secondaryKeywords: ["いいね待ち", "コメント欄", "公開範囲", "フォロワー"],
  },
  {
    motifId: "email",
    aliases: ["メール", "電子メール", "受信箱", "下書きメール"],
    priorityKeywords: ["メールを送る", "メールを読む", "メールの返事を待つ", "メールが届かない"],
    secondaryKeywords: ["受信通知", "未送信", "返信待ち", "件名確認"],
  },
  {
    motifId: "lost",
    aliases: ["迷子", "道に迷った人", "迷った子", "帰れない状態"],
    priorityKeywords: ["迷子になる", "帰り道がわからない", "知らない場所で迷う", "家族とはぐれる"],
    secondaryKeywords: ["道順不明", "現在地不明", "助けを探す", "帰る場所"],
  },
];
