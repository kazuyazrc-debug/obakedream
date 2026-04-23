import type { FollowUpQuestion } from "@/types/dream";

const q = (
  id: string,
  motifId: string,
  prompt: string,
  priority: number,
  options: FollowUpQuestion["options"],
): FollowUpQuestion => ({ id, motifId, prompt, type: "single", priority, options });

export const batch21Questions: FollowUpQuestion[] = [
  q("camellia-scene", "camellia", "椿はどんな様子で印象に残りましたか。", 75, [
    { id: "bloom", label: "きれいに咲いていた", scoreImpact: { recovery: 1, relationships: 1 } },
    { id: "fall", label: "花びらが落ちていた", scoreImpact: { loss: 1, unresolved: 1 } },
    { id: "watch", label: "静かに見つめていた", scoreImpact: { selfDefense: 1, recovery: 1 } },
  ]),
  q("ivy-motion", "ivy", "つたはどんな広がり方をしていましたか。", 75, [
    { id: "climb", label: "上へ伸びていた", scoreImpact: { change: 1, unresolved: 1 } },
    { id: "wrap", label: "何かに絡みついていた", scoreImpact: { unresolved: 1, selfDefense: 1 } },
    { id: "trim", label: "ほどいたり整えたりした", scoreImpact: { recovery: 1, selfDefense: 1 } },
  ]),
  q("firefly-light", "firefly", "蛍の光はどう見えましたか。", 75, [
    { id: "small", label: "小さく静かに光った", scoreImpact: { recovery: 1, unresolved: 1 } },
    { id: "many", label: "たくさん飛んでいた", scoreImpact: { change: 1, relationships: 1 } },
    { id: "chase", label: "追いかけた", scoreImpact: { desire: 1, change: 1 } },
  ]),
  q("lily-pad-scene", "lily_pad", "睡蓮の葉はどんな場所にありましたか。", 75, [
    { id: "float", label: "静かな水面に浮かんでいた", scoreImpact: { recovery: 1, selfDefense: 1 } },
    { id: "cross", label: "渡れそうに見えた", scoreImpact: { change: 1, unresolved: 1 } },
    { id: "touch", label: "触れたり眺めたりした", scoreImpact: { recovery: 1, unresolved: 1 } },
  ]),
  q("sparrow-group", "sparrow", "雀はどんな動きをしていましたか。", 75, [
    { id: "gather", label: "群れていた", scoreImpact: { relationships: 1, recovery: 1 } },
    { id: "fly", label: "一斉に飛んだ", scoreImpact: { change: 1, selfDefense: 1 } },
    { id: "watch", label: "近くで見ていた", scoreImpact: { recovery: 1, unresolved: 1 } },
  ]),
  q("binder-clip-use", "binder_clip", "クリップは何のために使っていましたか。", 75, [
    { id: "bind", label: "書類をまとめていた", scoreImpact: { selfDefense: 1, recovery: 1 } },
    { id: "search", label: "必要なものを探していた", scoreImpact: { unresolved: 1, anxiety: 1 } },
    { id: "remove", label: "外して並べ替えていた", scoreImpact: { change: 1, unresolved: 1 } },
  ]),
  q("sketchbook-state", "sketchbook", "スケッチブックはどんな状態でしたか。", 75, [
    { id: "blank", label: "まだ白かった", scoreImpact: { unresolved: 1, change: 1 } },
    { id: "drawing", label: "描きかけだった", scoreImpact: { change: 1, recovery: 1 } },
    { id: "carry", label: "持ち歩いていた", scoreImpact: { selfDefense: 1, desire: 1 } },
  ]),
  q("stamp-sheet-use", "stamp_sheet", "切手シートはどう扱っていましたか。", 75, [
    { id: "choose", label: "どれを使うか選んだ", scoreImpact: { selfDefense: 1, unresolved: 1 } },
    { id: "keep", label: "しまったままにした", scoreImpact: { recovery: 1, unresolved: 1 } },
    { id: "tear", label: "切り離して使った", scoreImpact: { change: 1, selfDefense: 1 } },
  ]),
  q("hourglass-time", "hourglass", "砂時計の時間はどう感じましたか。", 75, [
    { id: "slow", label: "ゆっくり落ちていた", scoreImpact: { recovery: 1, selfDefense: 1 } },
    { id: "fast", label: "早く減っていった", scoreImpact: { anxiety: 1, loss: 1 } },
    { id: "turn", label: "ひっくり返した", scoreImpact: { change: 1, recovery: 1 } },
  ]),
  q("paperweight-use", "paperweight", "文鎮はどんなふうに使っていましたか。", 75, [
    { id: "press", label: "紙を押さえていた", scoreImpact: { selfDefense: 1, recovery: 1 } },
    { id: "lift", label: "持ち上げて重さを感じた", scoreImpact: { unresolved: 1, selfDefense: 1 } },
    { id: "place", label: "静かに置いた", scoreImpact: { recovery: 1, selfDefense: 1 } },
  ]),
  q("station-map-scene", "station_map", "駅案内図はどんなふうに見ていましたか。", 75, [
    { id: "search", label: "行き先を探していた", scoreImpact: { unresolved: 1, selfDefense: 1 } },
    { id: "confirm", label: "位置を確認していた", scoreImpact: { selfDefense: 1, recovery: 1 } },
    { id: "lost", label: "見ても迷っていた", scoreImpact: { anxiety: 1, unresolved: 1 } },
  ]),
  q("route-sign-scene", "route_sign", "案内標識はどんな役割でしたか。", 75, [
    { id: "follow", label: "従って進んだ", scoreImpact: { change: 1, selfDefense: 1 } },
    { id: "compare", label: "複数の方向を見比べた", scoreImpact: { unresolved: 1, selfDefense: 1 } },
    { id: "doubt", label: "見ても決めきれなかった", scoreImpact: { anxiety: 1, unresolved: 1 } },
  ]),
  q("search-bar-scene", "search_bar", "検索バーはどう使っていましたか。", 75, [
    { id: "type", label: "文字を入れて探した", scoreImpact: { change: 1, unresolved: 1 } },
    { id: "pause", label: "入力前に止まった", scoreImpact: { selfDefense: 1, unresolved: 1 } },
    { id: "erase", label: "入れて消した", scoreImpact: { anxiety: 1, unresolved: 1 } },
  ]),
  q("signal-bar-state", "signal_bar", "電波表示はどんな状態でしたか。", 75, [
    { id: "weak", label: "弱かった", scoreImpact: { anxiety: 1, unresolved: 1 } },
    { id: "stable", label: "安定していた", scoreImpact: { recovery: 1, selfDefense: 1 } },
    { id: "changing", label: "上下していた", scoreImpact: { unresolved: 1, change: 1 } },
  ]),
  q("volume-slider-scene", "volume_slider", "音量スライダーはどう動かしていましたか。", 75, [
    { id: "lower", label: "下げていた", scoreImpact: { selfDefense: 1, recovery: 1 } },
    { id: "raise", label: "上げていた", scoreImpact: { change: 1, desire: 1 } },
    { id: "adjust", label: "少しずつ調整していた", scoreImpact: { selfDefense: 1, unresolved: 1 } },
  ]),
  q("collarbone-scene", "collarbone", "鎖骨はどんな見え方でしたか。", 75, [
    { id: "mirror", label: "鏡で見えていた", scoreImpact: { selfDefense: 1, unresolved: 1 } },
    { id: "necklace", label: "首元の飾りと一緒に見えた", scoreImpact: { relationships: 1, recovery: 1 } },
    { id: "notice", label: "ふと気づいた", scoreImpact: { unresolved: 1, recovery: 1 } },
  ]),
  q("flinching-scene", "flinching", "ひるんだのはどんな瞬間でしたか。", 75, [
    { id: "pressure", label: "圧を感じた瞬間", scoreImpact: { anxiety: 1, selfDefense: 1 } },
    { id: "conflict", label: "ぶつかりそうな場面", scoreImpact: { selfDefense: 1, unresolved: 1 } },
    { id: "pause", label: "一瞬止まっただけ", scoreImpact: { recovery: 1, unresolved: 1 } },
  ]),
  q("tiptoeing-scene", "tiptoeing", "つま先歩きはどんな場面でしたか。", 75, [
    { id: "quiet", label: "音を立てないようにしていた", scoreImpact: { selfDefense: 1, unresolved: 1 } },
    { id: "hide", label: "隠れるように進んだ", scoreImpact: { anxiety: 1, selfDefense: 1 } },
    { id: "hallway", label: "廊下や通路を進んだ", scoreImpact: { change: 1, unresolved: 1 } },
  ]),
  q("holding-back-scene", "holding_back", "踏みとどまったのはどんな理由でしたか。", 75, [
    { id: "avoid", label: "ぶつかるのを避けたかった", scoreImpact: { selfDefense: 1, recovery: 1 } },
    { id: "hesitate", label: "決めきれなかった", scoreImpact: { unresolved: 1, anxiety: 1 } },
    { id: "wait", label: "少し様子を見たかった", scoreImpact: { selfDefense: 1, unresolved: 1 } },
  ]),
  q("double-checking-scene", "double_checking", "何を確認し直していましたか。", 75, [
    { id: "mistake", label: "間違いがないか見直した", scoreImpact: { selfDefense: 1, recovery: 1 } },
    { id: "choice", label: "選んだ内容を確かめた", scoreImpact: { unresolved: 1, selfDefense: 1 } },
    { id: "send", label: "送る前に確認した", scoreImpact: { anxiety: 1, unresolved: 1 } },
  ]),
];
