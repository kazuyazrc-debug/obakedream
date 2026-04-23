import type { MotifBlockEntry } from "@/types/dream";

const sections = (motifId: string, label: string): MotifBlockEntry => ({
  motifId,
  blocks: {
    summary: [`${label}の夢は、目立ちすぎないのに印象が残る気配や、今の流れを整えるための小さな手がかりを映しやすいです。`],
    symbolMeaning: [`${label}は、その場の雰囲気や扱い方によって意味の向きが変わりやすく、急いで断定するより周辺の文脈と合わせて読むのが大切です。`],
    psychology: [`${label}が印象に残る時は、気持ちをまとめたい、確かめたい、静かに整えたいという意識が背景で強まっていることがあります。`],
    fortune: [`${label}にまつわる夢は、順序や扱い方を丁寧にするほど流れが安定しやすいことを示す場合があります。`],
    caution: [`${label}だけで意味を決めつけず、夢の中で何と並んでいたか、どんな感情だったかを一緒に見ると読み違いを減らしやすいです。`],
    actionHint: [`${label}が気になった日は、急いで結論を出すより、今ある材料を一度整えてから次の一歩を決めるのが向いています。`],
  },
});

export const batch21Blocks: MotifBlockEntry[] = [
  sections("camellia", "椿"),
  sections("ivy", "つた"),
  sections("firefly", "蛍"),
  sections("lily_pad", "睡蓮の葉"),
  sections("sparrow", "雀"),
  sections("binder_clip", "バインダークリップ"),
  sections("sketchbook", "スケッチブック"),
  sections("stamp_sheet", "切手シート"),
  sections("hourglass", "砂時計"),
  sections("paperweight", "文鎮"),
  sections("station_map", "駅案内図"),
  sections("route_sign", "案内標識"),
  sections("search_bar", "検索バー"),
  sections("signal_bar", "電波表示"),
  sections("volume_slider", "音量スライダー"),
  sections("collarbone", "鎖骨"),
  sections("flinching", "ひるむ"),
  sections("tiptoeing", "つま先歩き"),
  sections("holding_back", "踏みとどまる"),
  sections("double_checking", "確認し直す"),
];
