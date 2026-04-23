import type { MotifBlockEntry } from "@/types/dream";

const sections = (motifId: string, label: string): MotifBlockEntry => ({
  motifId,
  blocks: {
    summary: [`${label}の夢は、今の状況を小さな手がかりとして見直す流れを表します。`],
    symbolMeaning: [`${label}は、目立ちすぎないけれど意味のある準備や調整の象徴です。`],
    psychology: [`大きく決める前に、身近な部分を確かめたい気持ちが表れているのかもしれません。`],
    fortune: [`小さな違和感や目印を整えることで、次の行動が少し軽くなりそうです。`],
    caution: [`細部だけに集中しすぎると、全体の流れを見落としやすくなる点には注意してください。`],
    actionHint: [`今日は${label}が示す小さな確認を一つだけ済ませて、次に進みやすくしてみてください。`],
  },
});

export const batch15Blocks: MotifBlockEntry[] = [
  sections("pinecone", "松ぼっくり"),
  sections("acorn", "どんぐり"),
  sections("mushroom", "きのこ"),
  sections("fern", "シダ"),
  sections("dew", "露"),
  sections("broom", "ほうき"),
  sections("bowl", "ボウル"),
  sections("compass", "方位磁石"),
  sections("pencil", "鉛筆"),
  sections("bookmark", "しおり"),
  sections("shoelace", "靴ひも"),
  sections("zipper", "ファスナー"),
  sections("apron", "エプロン"),
  sections("suitcase", "スーツケース"),
  sections("ticket_stub", "半券"),
  sections("paint", "絵の具"),
  sections("footprint", "足跡"),
  sections("eyelash", "まつげ"),
  sections("keychain", "キーホルダー"),
  sections("pocket", "ポケット"),
];
