import type { MotifBlockEntry } from "@/types/dream";

const sections = (motifId: string, label: string): MotifBlockEntry => ({
  motifId,
  blocks: {
    summary: [`${label}の夢は、今の状況を細かな手がかりとして整理し、次に進む前の確認をしている流れを表しているのかもしれません。`],
    symbolMeaning: [`${label}は、身近なものや場所の小さな差を通じて、準備、境界、見直し、待機の感覚を象徴します。`],
    psychology: [`大きな結論へ急ぐより、目の前の条件や手順をひとつずつ確かめたい気持ちが出ている可能性があります。`],
    fortune: [`細部を整えながら進むほど、次の選択や移動のタイミングが少し見えやすくなりそうです。`],
    caution: [`細かな不安だけに集中しすぎると全体の目的を見失いやすいので、どこまで確認すれば動けるかを決めておくとよさそうです。`],
    actionHint: [`今日は${label}が示す小さな確認を一つだけ現実でも整えてみてください。`],
  },
});

export const batch18Blocks: MotifBlockEntry[] = [
  sections("root", "根っこ"),
  sections("bud", "つぼみ"),
  sections("wildflower", "野花"),
  sections("lichen", "地衣類"),
  sections("reed", "葦"),
  sections("rubber_band", "輪ゴム"),
  sections("binder", "バインダー"),
  sections("index_card", "単語カード"),
  sections("coupon", "クーポン"),
  sections("pencil_case", "筆箱"),
  sections("sidewalk", "歩道"),
  sections("escalator", "エスカレーター"),
  sections("platform_edge", "ホームの端"),
  sections("lost_ticket", "なくした切符"),
  sections("checklist", "チェックリスト"),
  sections("progress_bar", "進捗バー"),
  sections("loading_icon", "読み込み中の表示"),
  sections("eyebrow", "眉毛"),
  sections("chin", "あご"),
  sections("wristwatch", "腕時計"),
];
