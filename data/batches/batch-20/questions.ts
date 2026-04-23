import type { FollowUpQuestion } from "@/types/dream";

const q = (
  id: string,
  motifId: string,
  prompt: string,
  priority: number,
  options: FollowUpQuestion["options"],
): FollowUpQuestion => ({ id, motifId, prompt, type: "single", priority, options });

export const batch20Questions: FollowUpQuestion[] = [
  q("willow-scene", "willow", "柳はどんな様子で出てきましたか？", 75, [
    { id: "swaying", label: "風に揺れていた", scoreImpact: { recovery: 1, change: 1 } },
    { id: "still", label: "静かに立っていた", scoreImpact: { selfDefense: 1, recovery: 1 } },
    { id: "watching", label: "ただ見上げていた", scoreImpact: { unresolved: 1, recovery: 1 } },
  ]),
  q("lotus-water", "lotus", "蓮はどんな見え方でしたか？", 75, [
    { id: "floating", label: "水に浮かんでいた", scoreImpact: { recovery: 1, selfDefense: 1 } },
    { id: "blooming", label: "きれいに咲いていた", scoreImpact: { relationships: 1, recovery: 1 } },
    { id: "distant", label: "近づけなかった", scoreImpact: { unresolved: 1, anxiety: 1 } },
  ]),
  q("butterfly-motion", "butterfly", "蝶はどんな動きをしていましたか？", 75, [
    { id: "flutter", label: "ひらひら舞っていた", scoreImpact: { change: 1, recovery: 1 } },
    { id: "follow", label: "追いかけた", scoreImpact: { desire: 1, relationships: 1 } },
    { id: "vanish", label: "すぐ見失った", scoreImpact: { unresolved: 1, loss: 1 } },
  ]),
  q("dragonfly-speed", "dragonfly", "トンボはどんな印象でしたか？", 75, [
    { id: "quick", label: "すばやく飛んでいた", scoreImpact: { selfDefense: 1, change: 1 } },
    { id: "hover", label: "近くで止まりそうだった", scoreImpact: { recovery: 1, unresolved: 1 } },
    { id: "hard", label: "追いきれなかった", scoreImpact: { anxiety: 1, unresolved: 1 } },
  ]),
  q("owl-gaze", "owl", "フクロウはどう見えましたか？", 75, [
    { id: "watching", label: "じっと見ていた", scoreImpact: { selfDefense: 1, unresolved: 1 } },
    { id: "quiet", label: "静かに止まっていた", scoreImpact: { recovery: 1, selfDefense: 1 } },
    { id: "night", label: "暗い中で目立っていた", scoreImpact: { anxiety: 1, selfDefense: 1 } },
  ]),
  q("paper-bag-use", "paper_bag", "紙袋はどう扱っていましたか？", 75, [
    { id: "carry", label: "持ち歩いていた", scoreImpact: { selfDefense: 1, unresolved: 1 } },
    { id: "peek", label: "中をのぞいた", scoreImpact: { desire: 1, recovery: 1 } },
    { id: "receive", label: "受け取った", scoreImpact: { relationships: 1, change: 1 } },
  ]),
  q("coin-purse-state", "coin_purse", "小銭入れはどんな状態でしたか？", 75, [
    { id: "open", label: "開けていた", scoreImpact: { selfDefense: 1, recovery: 1 } },
    { id: "search", label: "探していた", scoreImpact: { unresolved: 1, anxiety: 1 } },
    { id: "count", label: "中身を数えていた", scoreImpact: { selfDefense: 1, loss: 1 } },
  ]),
  q("corkboard-arrange", "corkboard", "コルクボードでは何をしていましたか？", 75, [
    { id: "pin", label: "貼っていた", scoreImpact: { selfDefense: 1, recovery: 1 } },
    { id: "look", label: "並びを眺めていた", scoreImpact: { recovery: 1, unresolved: 1 } },
    { id: "remove", label: "外していた", scoreImpact: { change: 1, loss: 1 } },
  ]),
  q("measuring-tape-use", "measuring_tape", "巻き尺はどう使っていましたか？", 75, [
    { id: "measure", label: "長さを測っていた", scoreImpact: { selfDefense: 2 } },
    { id: "compare", label: "比べていた", scoreImpact: { unresolved: 1, change: 1 } },
    { id: "fold", label: "しまっていた", scoreImpact: { recovery: 1, selfDefense: 1 } },
  ]),
  q("ink-pad-mark", "ink_pad", "インク台はどんな場面でしたか？", 75, [
    { id: "prepare", label: "押す前の準備だった", scoreImpact: { selfDefense: 1, recovery: 1 } },
    { id: "stamp", label: "印をつけていた", scoreImpact: { change: 1, selfDefense: 1 } },
    { id: "smudge", label: "色がにじんでいた", scoreImpact: { unresolved: 1, anxiety: 1 } },
  ]),
  q("ticket-machine-use", "ticket_machine", "券売機では何をしていましたか？", 75, [
    { id: "buy", label: "切符を買っていた", scoreImpact: { change: 1, selfDefense: 1 } },
    { id: "search", label: "行き先を探していた", scoreImpact: { anxiety: 1, unresolved: 1 } },
    { id: "wait", label: "前で止まっていた", scoreImpact: { unresolved: 1, selfDefense: 1 } },
  ]),
  q("departure-board-info", "departure_board", "発車案内板はどんな印象でしたか？", 75, [
    { id: "clear", label: "情報がはっきり見えた", scoreImpact: { selfDefense: 1, recovery: 1 } },
    { id: "crowded", label: "情報が多すぎた", scoreImpact: { anxiety: 1, unresolved: 1 } },
    { id: "missed", label: "見逃した気がした", scoreImpact: { anxiety: 1, loss: 1 } },
  ]),
  q("platform-clock-time", "platform_clock", "ホームの時計はどう見えましたか？", 75, [
    { id: "urgent", label: "時間が迫っていた", scoreImpact: { anxiety: 2 } },
    { id: "check", label: "何度も確認していた", scoreImpact: { selfDefense: 1, unresolved: 1 } },
    { id: "calm", label: "落ち着いて見ていた", scoreImpact: { recovery: 1, selfDefense: 1 } },
  ]),
  q("cursor-move", "cursor", "カーソルはどんな動きでしたか？", 75, [
    { id: "moving", label: "動かしていた", scoreImpact: { change: 1, selfDefense: 1 } },
    { id: "stuck", label: "止まっていた", scoreImpact: { unresolved: 1, anxiety: 1 } },
    { id: "search", label: "どこに置くか迷っていた", scoreImpact: { unresolved: 1, selfDefense: 1 } },
  ]),
  q("battery-icon-level", "battery_icon", "バッテリー表示はどんな状態でしたか？", 75, [
    { id: "low", label: "残量が少なかった", scoreImpact: { anxiety: 1, selfDefense: 1 } },
    { id: "charging", label: "充電していた", scoreImpact: { recovery: 1, change: 1 } },
    { id: "stable", label: "十分残っていた", scoreImpact: { recovery: 1, selfDefense: 1 } },
  ]),
  q("mute-button-choice", "mute_button", "ミュートボタンでは何をしていましたか？", 75, [
    { id: "press", label: "押して静かにした", scoreImpact: { selfDefense: 1, recovery: 1 } },
    { id: "release", label: "戻して話した", scoreImpact: { change: 1, relationships: 1 } },
    { id: "worry", label: "押したまま不安だった", scoreImpact: { anxiety: 1, unresolved: 1 } },
  ]),
  q("nape-feeling", "nape", "うなじはどんな気になり方でしたか？", 75, [
    { id: "touch", label: "触れていた", scoreImpact: { selfDefense: 1, unresolved: 1 } },
    { id: "mirror", label: "鏡で見ていた", scoreImpact: { recovery: 1, selfDefense: 1 } },
    { id: "hide", label: "隠したかった", scoreImpact: { selfDefense: 1, anxiety: 1 } },
  ]),
  q("eyelid-state", "eyelid", "まぶたはどんな様子でしたか？", 75, [
    { id: "closed", label: "閉じていた", scoreImpact: { recovery: 1, unresolved: 1 } },
    { id: "heavy", label: "重たかった", scoreImpact: { anxiety: 1, recovery: 1 } },
    { id: "rub", label: "こすっていた", scoreImpact: { selfDefense: 1, unresolved: 1 } },
  ]),
  q("hesitating-scene", "hesitating", "どんなためらい方でしたか？", 75, [
    { id: "before-step", label: "進む前で止まった", scoreImpact: { unresolved: 1, anxiety: 1 } },
    { id: "compare", label: "見比べて決められなかった", scoreImpact: { unresolved: 1, selfDefense: 1 } },
    { id: "wait", label: "様子を見ていた", scoreImpact: { selfDefense: 1, recovery: 1 } },
  ]),
  q("backing-away-scene", "backing_away", "後ずさる時の気持ちはどれに近かったですか？", 75, [
    { id: "fear", label: "怖くて下がった", scoreImpact: { anxiety: 1, selfDefense: 1 } },
    { id: "avoid", label: "距離を取りたかった", scoreImpact: { selfDefense: 2 } },
    { id: "confused", label: "とっさに下がってしまった", scoreImpact: { unresolved: 1, anxiety: 1 } },
  ]),
];
