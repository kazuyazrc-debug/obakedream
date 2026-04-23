import type { ScoreVector } from "@/types/dream";

export type ContextKeywordRule = {
  id: string;
  label: string;
  terms: string[];
  scoreImpact: Partial<ScoreVector>;
};

export const contextKeywordRules: ContextKeywordRule[] = [
  {
    id: "escape",
    label: "逃げる・避ける",
    terms: ["逃げる", "逃げた", "避ける", "隠れる", "隠れた"],
    scoreImpact: { anxiety: 2, selfDefense: 2, unresolved: 1 },
  },
  {
    id: "help",
    label: "助ける・助けられる",
    terms: ["助ける", "助けられる", "救う", "救われる", "守る"],
    scoreImpact: { recovery: 2, relationships: 1, selfDefense: 1 },
  },
  {
    id: "break",
    label: "壊れる・失う",
    terms: ["壊れる", "壊れた", "なくす", "失う", "消える"],
    scoreImpact: { loss: 2, anxiety: 1, unresolved: 1 },
  },
  {
    id: "return",
    label: "戻る・帰る",
    terms: ["帰る", "戻る", "戻った", "帰ってきた"],
    scoreImpact: { recovery: 1, unresolved: 1 },
  },
  {
    id: "talk",
    label: "話す・伝える",
    terms: ["話す", "話した", "伝える", "伝えた", "謝る"],
    scoreImpact: { relationships: 2, recovery: 1 },
  },
  {
    id: "lost",
    label: "迷う",
    terms: ["迷う", "迷った", "道に迷う", "場所がわからない"],
    scoreImpact: { anxiety: 1, unresolved: 2, change: 1 },
  },
  {
    id: "chase",
    label: "追いかけられる",
    terms: ["追いかけられ", "追われ", "追跡", "逃げ切れ"],
    scoreImpact: { anxiety: 2, selfDefense: 2 },
  },
  {
    id: "cry",
    label: "泣く",
    terms: ["泣く", "泣いた", "泣いていた", "涙が出", "泣いて"],
    scoreImpact: { loss: 1, unresolved: 2 },
  },
  {
    id: "fly",
    label: "飛ぶ",
    terms: ["空を飛ぶ", "飛んでいた", "飛び上がる", "浮かぶ"],
    scoreImpact: { desire: 2, change: 2 },
  },
  {
    id: "late",
    label: "遅刻・間に合わない",
    terms: ["遅刻", "間に合わない", "間に合わなかった", "遅刻しそう"],
    scoreImpact: { anxiety: 2, unresolved: 2 },
  },
  {
    id: "fall",
    label: "落ちる",
    terms: ["落ちる", "落ちた", "落下", "転落", "落ちそう"],
    scoreImpact: { anxiety: 2, selfDefense: 1 },
  },
  {
    id: "forget",
    label: "忘れる",
    terms: ["忘れる", "忘れた", "忘れてしまった", "思い出せない"],
    scoreImpact: { unresolved: 2, anxiety: 1 },
  },
  {
    id: "meet",
    label: "再会・会う",
    terms: ["再会", "久しぶりに会", "また会えた", "会い直す"],
    scoreImpact: { relationships: 2, recovery: 1 },
  },
  {
    id: "scolded",
    label: "怒られる・責められる",
    terms: ["怒られる", "怒られた", "叱られ", "責められ"],
    scoreImpact: { anxiety: 2, relationships: 1 },
  },
  {
    id: "search",
    label: "探す",
    terms: ["探す", "探した", "探し続け", "見つからない", "見つけられない"],
    scoreImpact: { unresolved: 2, desire: 1 },
  },
  {
    id: "run",
    label: "走る",
    terms: ["走る", "走った", "走り続け", "全力で走"],
    scoreImpact: { anxiety: 1, change: 1, selfDefense: 1 },
  },
  {
    id: "alone",
    label: "一人でいる",
    terms: ["一人でいた", "孤独", "誰もいない", "一人きり"],
    scoreImpact: { loss: 2, unresolved: 1 },
  },
  {
    id: "laugh",
    label: "笑う・楽しむ",
    terms: ["笑う", "笑った", "楽しかった", "嬉しかった"],
    scoreImpact: { recovery: 2, desire: 1 },
  },
  {
    id: "unable",
    label: "できない・失敗",
    terms: ["できなかった", "うまくいかない", "失敗", "失敗した"],
    scoreImpact: { unresolved: 2, anxiety: 1 },
  },
  {
    id: "surprise",
    label: "驚く",
    terms: ["驚く", "驚いた", "びっくりした", "急に驚いた"],
    scoreImpact: { change: 1, anxiety: 1 },
  },
];
