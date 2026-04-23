import type { FollowUpQuestion } from "@/types/dream";

const q = (
  id: string,
  motifId: string,
  prompt: string,
  priority: number,
  options: FollowUpQuestion["options"],
): FollowUpQuestion => ({ id, motifId, prompt, type: "single", priority, options });

export const batch19Questions: FollowUpQuestion[] = [
  q("pine-needle-state", "pine_needle", "松葉はどんな状態でしたか？", 75, [
    { id: "fallen", label: "落ちていた", scoreImpact: { unresolved: 1, recovery: 1 } },
    { id: "bundle", label: "束ねていた", scoreImpact: { selfDefense: 1, recovery: 1 } },
    { id: "sharp", label: "細く硬かった", scoreImpact: { selfDefense: 2 } },
  ]),
  q("berry-action", "berry", "ベリーをどうしていましたか？", 75, [
    { id: "pick", label: "摘んでいた", scoreImpact: { desire: 1, recovery: 1 } },
    { id: "eat", label: "食べていた", scoreImpact: { recovery: 1, relationships: 1 } },
    { id: "collect", label: "集めていた", scoreImpact: { selfDefense: 1, desire: 1 } },
  ]),
  q("daisy-scene", "daisy", "デイジーはどう見えましたか？", 75, [
    { id: "white", label: "白く咲いていた", scoreImpact: { recovery: 1, relationships: 1 } },
    { id: "picked", label: "摘んでいた", scoreImpact: { desire: 1, change: 1 } },
    { id: "small", label: "小さく咲いていた", scoreImpact: { recovery: 2 } },
  ]),
  q("waterweed-flow", "waterweed", "水草はどんなふうに動いていましたか？", 75, [
    { id: "sway", label: "揺れていた", scoreImpact: { recovery: 1, change: 1 } },
    { id: "sink", label: "沈んでいた", scoreImpact: { unresolved: 1, anxiety: 1 } },
    { id: "clear", label: "透明な水にあった", scoreImpact: { recovery: 1, selfDefense: 1 } },
  ]),
  q("driftwood-place", "driftwood", "流木はどこにありましたか？", 75, [
    { id: "sea", label: "海辺にあった", scoreImpact: { unresolved: 1, recovery: 1 } },
    { id: "river", label: "川辺にあった", scoreImpact: { change: 1, recovery: 1 } },
    { id: "picked", label: "拾っていた", scoreImpact: { desire: 1, selfDefense: 1 } },
  ]),
  q("rubber-stamp-mark", "rubber_stamp", "ゴム印をどうしていましたか？", 75, [
    { id: "press", label: "押していた", scoreImpact: { selfDefense: 1, recovery: 1 } },
    { id: "dry", label: "乾かしていた", scoreImpact: { unresolved: 1, selfDefense: 1 } },
    { id: "repeat", label: "何度も押していた", scoreImpact: { anxiety: 1, unresolved: 1 } },
  ]),
  q("notepad-use", "notepad", "メモ帳をどう使っていましたか？", 75, [
    { id: "write", label: "書いていた", scoreImpact: { recovery: 1, selfDefense: 1 } },
    { id: "look-back", label: "見返していた", scoreImpact: { unresolved: 1, recovery: 1 } },
    { id: "tear", label: "破っていた", scoreImpact: { change: 1, anxiety: 1 } },
  ]),
  q("sticky-note-role", "sticky_note", "付箋はどんな役割でしたか？", 75, [
    { id: "reminder", label: "忘れない目印だった", scoreImpact: { selfDefense: 2 } },
    { id: "many", label: "たくさん貼ってあった", scoreImpact: { anxiety: 1, unresolved: 1 } },
    { id: "peel", label: "はがしていた", scoreImpact: { change: 1, recovery: 1 } },
  ]),
  q("paper-cup-state", "paper_cup", "紙コップはどんな状態でしたか？", 75, [
    { id: "full", label: "飲み物が入っていた", scoreImpact: { recovery: 1, desire: 1 } },
    { id: "empty", label: "空だった", scoreImpact: { unresolved: 1, loss: 1 } },
    { id: "throw", label: "捨てていた", scoreImpact: { change: 1, selfDefense: 1 } },
  ]),
  q("file-tab-sort", "file_tab", "見出しタブはどう使われていましたか？", 75, [
    { id: "sort", label: "分類していた", scoreImpact: { selfDefense: 2 } },
    { id: "search", label: "探していた", scoreImpact: { unresolved: 1, anxiety: 1 } },
    { id: "colored", label: "色分けされていた", scoreImpact: { recovery: 1, change: 1 } },
  ]),
  q("pedestrian-bridge-cross", "pedestrian_bridge", "歩道橋ではどうしていましたか？", 75, [
    { id: "cross", label: "渡っていた", scoreImpact: { change: 1, recovery: 1 } },
    { id: "look", label: "見下ろしていた", scoreImpact: { selfDefense: 1, unresolved: 1 } },
    { id: "hesitate", label: "渡る前に迷った", scoreImpact: { anxiety: 1, selfDefense: 1 } },
  ]),
  q("ticket-gate-state", "ticket_gate", "改札口では何が起きましたか？", 75, [
    { id: "pass", label: "通れた", scoreImpact: { recovery: 1, change: 1 } },
    { id: "stop", label: "止められた", scoreImpact: { anxiety: 2 } },
    { id: "search", label: "切符を探した", scoreImpact: { unresolved: 1, selfDefense: 1 } },
  ]),
  q("platform-sign-info", "platform_sign", "ホーム案内表示で何を見ましたか？", 75, [
    { id: "number", label: "ホーム番号", scoreImpact: { selfDefense: 1, recovery: 1 } },
    { id: "wrong", label: "違う行き先", scoreImpact: { anxiety: 1, unresolved: 1 } },
    { id: "unclear", label: "読みにくい表示", scoreImpact: { anxiety: 1, selfDefense: 1 } },
  ]),
  q("pause-button-choice", "pause_button", "一時停止ボタンを押した時の感じは？", 75, [
    { id: "relief", label: "ほっとした", scoreImpact: { recovery: 2 } },
    { id: "worry", label: "止まって不安だった", scoreImpact: { anxiety: 1, unresolved: 1 } },
    { id: "resume", label: "再開を待った", scoreImpact: { change: 1, selfDefense: 1 } },
  ]),
  q("status-light-color", "status_light", "状態ランプはどんな光でしたか？", 75, [
    { id: "green", label: "緑色だった", scoreImpact: { recovery: 1, change: 1 } },
    { id: "red", label: "赤色だった", scoreImpact: { anxiety: 1, selfDefense: 1 } },
    { id: "blink", label: "点滅していた", scoreImpact: { anxiety: 1, unresolved: 1 } },
  ]),
  q("screen-corner-notice", "screen_corner", "画面の隅には何がありましたか？", 75, [
    { id: "small", label: "小さな表示", scoreImpact: { selfDefense: 1, unresolved: 1 } },
    { id: "hidden", label: "見えにくかった", scoreImpact: { anxiety: 1, selfDefense: 1 } },
    { id: "important", label: "大事そうだった", scoreImpact: { anxiety: 1, change: 1 } },
  ]),
  q("name-tag-label", "name_tag", "名札には何が書かれていましたか？", 75, [
    { id: "own", label: "自分の名前", scoreImpact: { selfDefense: 1, recovery: 1 } },
    { id: "wrong", label: "違う名前", scoreImpact: { anxiety: 1, unresolved: 1 } },
    { id: "blank", label: "空白だった", scoreImpact: { loss: 1, unresolved: 1 } },
  ]),
  q("paper-crane-feeling", "paper_crane", "折り鶴にはどんな印象がありましたか？", 75, [
    { id: "careful", label: "丁寧に折られていた", scoreImpact: { recovery: 1, selfDefense: 1 } },
    { id: "many", label: "たくさん並んでいた", scoreImpact: { desire: 1, relationships: 1 } },
    { id: "give", label: "誰かに渡した", scoreImpact: { relationships: 1, recovery: 1 } },
  ]),
  q("temple-touch", "temple", "こめかみはどう意識されましたか？", 75, [
    { id: "touch", label: "触れていた", scoreImpact: { selfDefense: 1, anxiety: 1 } },
    { id: "mirror", label: "鏡で見ていた", scoreImpact: { recovery: 1, selfDefense: 1 } },
    { id: "tight", label: "緊張していた", scoreImpact: { anxiety: 2 } },
  ]),
  q("jawline-look", "jawline", "フェイスラインはどう見えましたか？", 75, [
    { id: "clear", label: "はっきり見えた", scoreImpact: { recovery: 1, selfDefense: 1 } },
    { id: "touch", label: "触れていた", scoreImpact: { unresolved: 1, selfDefense: 1 } },
    { id: "adjust", label: "整えていた", scoreImpact: { change: 1, relationships: 1 } },
  ]),
];
