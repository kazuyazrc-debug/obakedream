import type { MotifBlockEntry } from "@/types/dream";

const sections = (motifId: string, label: string): MotifBlockEntry => ({
  motifId,
  blocks: {
    summary: [`${label}の夢は、目の前の状況を細かな単位で確かめながら、次の動き方を整えようとしている流れを表しているのかもしれません。`],
    symbolMeaning: [`${label}は、記録、境界、確認、身近な自然や見た目の細部など、今の状態を読み取る小さな手がかりとして扱います。`],
    psychology: [`大きな変化よりも、細部の違いや一時的な印を使って、自分のペースを保ちたい気持ちが出ている可能性があります。`],
    fortune: [`小さな確認を重ねるほど、次に進む方向や手放してよいものが少し見えやすくなりそうです。`],
    caution: [`細部だけに集中しすぎると全体の目的を見失いやすいので、どこまで確認したら動くかを決めておくとよさそうです。`],
    actionHint: [`今日は${label}が示す小さな合図をひとつだけ現実でも整理してみてください。`],
  },
});

export const batch19Blocks: MotifBlockEntry[] = [
  sections("pine_needle", "松葉"),
  sections("berry", "ベリー"),
  sections("daisy", "デイジー"),
  sections("waterweed", "水草"),
  sections("driftwood", "流木"),
  sections("rubber_stamp", "ゴム印"),
  sections("notepad", "メモ帳"),
  sections("sticky_note", "付箋"),
  sections("paper_cup", "紙コップ"),
  sections("file_tab", "見出しタブ"),
  sections("pedestrian_bridge", "歩道橋"),
  sections("ticket_gate", "改札口"),
  sections("platform_sign", "ホーム案内表示"),
  sections("pause_button", "一時停止ボタン"),
  sections("status_light", "状態ランプ"),
  sections("screen_corner", "画面の隅"),
  sections("name_tag", "名札"),
  sections("paper_crane", "折り鶴"),
  sections("temple", "こめかみ"),
  sections("jawline", "フェイスライン"),
];
