import type { MotifBlockEntry } from "@/types/dream";

const sections = (motifId: string, label: string): MotifBlockEntry => ({
  motifId,
  blocks: {
    summary: [`${label}の夢は、見えているものの細部や扱い方を通じて、今の気持ちの向きや整え方を映し出すことがあります。`],
    symbolMeaning: [`${label}は、派手な結論よりも、その場でどう受け止めたか、どう距離を取ったかを読み解くための手がかりになりやすいモチーフです。`],
    psychology: [`大きな問題よりも、小さな気配や手元の感覚に意識が向いている時ほど、${label}のような具体的な印象が夢に残ることがあります。`],
    fortune: [`${label}が印象に残る夢は、急いで動くよりも、今の状態を見直してから進むほうが流れを整えやすい時を示します。`],
    caution: [`${label}だけで意味を決めつけず、夢の中で一緒に出た場所や行動との組み合わせを見ておくと読み違えを減らしやすくなります。`],
    actionHint: [`今日は${label}が示す小さな違和感や整えどころを一つだけ拾い、手元で調整できる範囲から扱ってみてください。`],
  },
});

export const batch20Blocks: MotifBlockEntry[] = [
  sections("willow", "柳"),
  sections("lotus", "蓮"),
  sections("butterfly", "蝶"),
  sections("dragonfly", "トンボ"),
  sections("owl", "フクロウ"),
  sections("paper_bag", "紙袋"),
  sections("coin_purse", "小銭入れ"),
  sections("corkboard", "コルクボード"),
  sections("measuring_tape", "巻き尺"),
  sections("ink_pad", "インク台"),
  sections("ticket_machine", "券売機"),
  sections("departure_board", "発車案内板"),
  sections("platform_clock", "ホームの時計"),
  sections("cursor", "カーソル"),
  sections("battery_icon", "バッテリー表示"),
  sections("mute_button", "ミュートボタン"),
  sections("nape", "うなじ"),
  sections("eyelid", "まぶた"),
  sections("hesitating", "ためらう"),
  sections("backing_away", "後ずさる"),
];
