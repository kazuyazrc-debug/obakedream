import type { FollowUpQuestion } from "@/types/dream";

const q = (
  id: string,
  motifId: string,
  prompt: string,
  options: FollowUpQuestion["options"],
  priority = 73,
): FollowUpQuestion => ({ id, motifId, prompt, type: "single", priority, options });

export const batch31Questions: FollowUpQuestion[] = [
  q("microwave-waiting", "microwave", "電子レンジの場面で印象に残ったことは？", [
    { id: "warm", label: "温めていた", scoreImpact: { recovery: 1, change: 1 } },
    { id: "wait", label: "待っていた", scoreImpact: { unresolved: 1, selfDefense: 1 } },
    { id: "empty", label: "中が空だった", scoreImpact: { desire: 1, unresolved: 1 } },
  ]),
  q("kettle-heat", "kettle", "やかんはどんな状態でしたか？", [
    { id: "boiling", label: "湯が沸いていた", scoreImpact: { change: 1, recovery: 1 } },
    { id: "quiet", label: "静かに置かれていた", scoreImpact: { selfDefense: 1, recovery: 1 } },
    { id: "overflow", label: "勢いが強かった", scoreImpact: { anxiety: 1, unresolved: 1 } },
  ]),
  q("laundry-basket-contents", "laundry_basket", "洗濯かごには何が入っていましたか？", [
    { id: "clothes", label: "衣類が入っていた", scoreImpact: { selfDefense: 1, recovery: 1 } },
    { id: "full", label: "いっぱいだった", scoreImpact: { unresolved: 1, anxiety: 1 } },
    { id: "empty", label: "空だった", scoreImpact: { change: 1, desire: 1 } },
  ]),
  q("charging-cable-connection", "charging_cable", "充電ケーブルはどうなっていましたか？", [
    { id: "connected", label: "つながっていた", scoreImpact: { recovery: 1, relationships: 1 } },
    { id: "missing", label: "探していた", scoreImpact: { unresolved: 1, anxiety: 1 } },
    { id: "unplugged", label: "抜けていた", scoreImpact: { selfDefense: 1, unresolved: 1 } },
  ]),
  q("shampoo-bottle-state", "shampoo_bottle", "シャンプーボトルの印象は？", [
    { id: "wash", label: "髪を洗っていた", scoreImpact: { recovery: 1, selfDefense: 1 } },
    { id: "empty", label: "中身がなかった", scoreImpact: { unresolved: 1, desire: 1 } },
    { id: "refill", label: "詰め替えていた", scoreImpact: { change: 1, recovery: 1 } },
  ]),
  q("bus-stop-wait", "bus_stop", "バス停では何をしていましたか？", [
    { id: "wait", label: "待っていた", scoreImpact: { unresolved: 1, selfDefense: 1 } },
    { id: "miss", label: "乗り遅れた", scoreImpact: { anxiety: 1, loss: 1 } },
    { id: "find", label: "見つけた", scoreImpact: { recovery: 1, change: 1 } },
  ]),
  q("bakery-choice", "bakery", "パン屋で印象に残ったことは？", [
    { id: "choose", label: "選んでいた", scoreImpact: { desire: 1, change: 1 } },
    { id: "warm", label: "温かかった", scoreImpact: { recovery: 1, relationships: 1 } },
    { id: "line", label: "並んでいた", scoreImpact: { unresolved: 1, relationships: 1 } },
  ]),
  q("deer-distance", "deer", "鹿との距離感はどうでしたか？", [
    { id: "near", label: "近くにいた", scoreImpact: { relationships: 1, recovery: 1 } },
    { id: "watch", label: "見ていた", scoreImpact: { selfDefense: 1, desire: 1 } },
    { id: "run", label: "逃げていった", scoreImpact: { anxiety: 1, selfDefense: 1 } },
  ]),
  q("squirrel-preparation", "squirrel", "リスは何をしていましたか？", [
    { id: "collect", label: "集めていた", scoreImpact: { selfDefense: 1, recovery: 1 } },
    { id: "hide", label: "隠していた", scoreImpact: { selfDefense: 1, unresolved: 1 } },
    { id: "run", label: "走っていた", scoreImpact: { change: 1, anxiety: 1 } },
  ]),
  q("returning-feeling", "returning", "返すときの気持ちは？", [
    { id: "relief", label: "ほっとした", scoreImpact: { recovery: 1, relationships: 1 } },
    { id: "pressure", label: "急いでいた", scoreImpact: { anxiety: 1, unresolved: 1 } },
    { id: "apology", label: "申し訳なかった", scoreImpact: { relationships: 1, unresolved: 1 } },
  ]),
  q("mirror-cabinet-self", "mirror_cabinet", "鏡台の前で何をしていましたか？", [
    { id: "makeup", label: "身支度をしていた", scoreImpact: { selfDefense: 1, relationships: 1 } },
    { id: "look", label: "自分を見ていた", scoreImpact: { desire: 1, unresolved: 1 } },
    { id: "store", label: "しまっていた", scoreImpact: { selfDefense: 1, recovery: 1 } },
  ]),
  q("post-office-purpose", "post_office", "郵便局では何をしていましたか？", [
    { id: "send", label: "送っていた", scoreImpact: { relationships: 1, change: 1 } },
    { id: "receive", label: "受け取っていた", scoreImpact: { relationships: 1, recovery: 1 } },
    { id: "wait", label: "待っていた", scoreImpact: { unresolved: 1, anxiety: 1 } },
  ]),
  q("playground-mood", "playground", "遊び場の雰囲気は？", [
    { id: "fun", label: "楽しかった", scoreImpact: { recovery: 1, desire: 1 } },
    { id: "watch", label: "見守っていた", scoreImpact: { relationships: 1, selfDefense: 1 } },
    { id: "empty", label: "誰もいなかった", scoreImpact: { unresolved: 1, loss: 1 } },
  ]),
  q("buying-choice", "buying", "買う場面で強かった印象は？", [
    { id: "need", label: "必要だった", scoreImpact: { selfDefense: 1, change: 1 } },
    { id: "want", label: "欲しかった", scoreImpact: { desire: 2 } },
    { id: "hesitate", label: "迷っていた", scoreImpact: { unresolved: 1, anxiety: 1 } },
  ]),
  q("paying-cost", "paying", "支払いの印象は？", [
    { id: "smooth", label: "すんなり払えた", scoreImpact: { recovery: 1, change: 1 } },
    { id: "heavy", label: "負担に感じた", scoreImpact: { anxiety: 1, selfDefense: 1 } },
    { id: "check", label: "金額を確認した", scoreImpact: { selfDefense: 1, unresolved: 1 } },
  ]),
  q("asking-target", "asking", "誰に尋ねていましたか？", [
    { id: "known", label: "知っている人", scoreImpact: { relationships: 1, recovery: 1 } },
    { id: "unknown", label: "知らない人", scoreImpact: { anxiety: 1, unresolved: 1 } },
    { id: "teacher", label: "教える立場の人", scoreImpact: { change: 1, selfDefense: 1 } },
  ]),
  q("answering-pressure", "answering", "答えるときの感覚は？", [
    { id: "clear", label: "はっきり答えた", scoreImpact: { change: 1, selfDefense: 1 } },
    { id: "stuck", label: "答えに詰まった", scoreImpact: { anxiety: 1, unresolved: 1 } },
    { id: "soft", label: "短く返事した", scoreImpact: { relationships: 1, recovery: 1 } },
  ]),
  q("bee-distance", "bee", "蜂との距離は？", [
    { id: "near", label: "近づいてきた", scoreImpact: { anxiety: 1, selfDefense: 1 } },
    { id: "flower", label: "花のそばにいた", scoreImpact: { desire: 1, change: 1 } },
    { id: "watch", label: "離れて見ていた", scoreImpact: { selfDefense: 1, recovery: 1 } },
  ]),
  q("cousin-memory", "cousin", "いとこの夢で強かった印象は？", [
    { id: "talk", label: "話していた", scoreImpact: { relationships: 1, recovery: 1 } },
    { id: "childhood", label: "昔を思い出した", scoreImpact: { recovery: 1, unresolved: 1 } },
    { id: "compare", label: "比べていた", scoreImpact: { anxiety: 1, relationships: 1 } },
  ]),
  q("coach-guidance", "coach", "コーチはどんな関わり方でしたか？", [
    { id: "teach", label: "教えてくれた", scoreImpact: { change: 1, recovery: 1 } },
    { id: "strict", label: "厳しかった", scoreImpact: { anxiety: 1, selfDefense: 1 } },
    { id: "encourage", label: "励ましてくれた", scoreImpact: { recovery: 1, relationships: 1 } },
  ]),
];
