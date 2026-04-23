import type { MotifBlockEntry } from "@/types/dream";

const sections = (motifId: string, label: string): MotifBlockEntry => ({
  motifId,
  blocks: {
    summary: [`${label}の夢は、今の状況を小さな手がかりとして見直す流れを表しているかもしれません。`],
    symbolMeaning: [`${label}は、目立ちすぎないけれど意味のある調整、記録、気づきの象徴として扱います。`],
    psychology: [`大きく決める前に、身近な違和感や準備を確かめたい気持ちが表れている可能性があります。`],
    fortune: [`細かな確認を一つ済ませることで、次の行動が少し軽くなりやすい流れです。`],
    caution: [`細部だけに集中しすぎると全体の目的を見失いやすいので、必要な範囲を決めて扱うとよさそうです。`],
    actionHint: [`今日は${label}が示す小さな確認を一つだけ現実でも整えてみてください。`],
  },
});

export const batch16Blocks: MotifBlockEntry[] = [
  sections("twig", "小枝"),
  sections("moss", "苔"),
  sections("petal", "花びら"),
  sections("raindrop", "雨粒"),
  sections("eraser", "消しゴム"),
  sections("ruler", "定規"),
  sections("paperclip", "クリップ"),
  sections("coaster", "コースター"),
  sections("handkerchief", "ハンカチ"),
  sections("bell", "鈴"),
  sections("backpack", "リュック"),
  sections("ink", "インク"),
  sections("torn_paper", "破れた紙"),
  sections("dust", "ほこり"),
  sections("stain", "しみ"),
  sections("answer_sheet", "答案用紙"),
  sections("keyboard", "キーボード"),
  sections("monitor", "モニター"),
  sections("footsteps", "足音"),
  sections("dead_end", "行き止まり"),
];
