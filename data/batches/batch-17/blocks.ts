import type { MotifBlockEntry } from "@/types/dream";

const sections = (motifId: string, label: string): MotifBlockEntry => ({
  motifId,
  blocks: {
    summary: [`${label}の夢は、今の状況を細かな手がかりとして整理し直す流れを表しているかもしれません。`],
    symbolMeaning: [`${label}は、小さな確認、分類、移動の区切り、身近な変化の象徴として扱います。`],
    psychology: [`大きな結論を出す前に、目の前の違和感や準備を一つずつ確かめたい気持ちが表れている可能性があります。`],
    fortune: [`細部を整えるほど、次の行動のタイミングや優先順位が少し見えやすくなりそうです。`],
    caution: [`細かい部分だけに集中しすぎると全体の目的を見失いやすいので、扱う範囲を決めておくとよさそうです。`],
    actionHint: [`今日は${label}が示す小さな確認を一つだけ現実でも整えてみてください。`],
  },
});

export const batch17Blocks: MotifBlockEntry[] = [
  sections("clover", "クローバー"),
  sections("dandelion", "タンポポ"),
  sections("sprout", "新芽"),
  sections("bark", "樹皮"),
  sections("vine", "つる草"),
  sections("glue", "のり"),
  sections("tape", "テープ"),
  sections("label", "ラベル"),
  sections("folder", "フォルダー"),
  sections("receipt", "レシート"),
  sections("magnifying_glass", "虫眼鏡"),
  sections("clipboard", "クリップボード"),
  sections("stapler", "ホチキス"),
  sections("calendar_page", "カレンダーのページ"),
  sections("traffic_light", "信号機"),
  sections("crosswalk", "横断歩道"),
  sections("detour", "回り道"),
  sections("turn_back", "引き返す"),
  sections("fingernail", "手の爪"),
  sections("cheek", "ほっぺ"),
];
