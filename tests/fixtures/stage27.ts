import type { DreamInput } from "@/types/dream";

export type Stage27Fixture = {
  id: string;
  text: string;
  expectedMotifIds: string[];
  unexpectedMotifIds?: string[];
  note: string;
};

export type Stage27RepresentativeDream = {
  id: string;
  input: DreamInput;
  expectedMotifIds: string[];
  selectedMotifIds: string[];
  expectedQuestionIds: string[];
};

export const stage27FrontHalfIds = [
  "pinecone",
  "acorn",
  "mushroom",
  "fern",
  "dew",
  "broom",
  "bowl",
  "compass",
  "pencil",
  "bookmark",
] as const;

export const stage27BackHalfIds = [
  "shoelace",
  "zipper",
  "apron",
  "suitcase",
  "ticket_stub",
  "paint",
  "footprint",
  "eyelash",
  "keychain",
  "pocket",
] as const;

export const stage27ExtractionAuditCases: Stage27Fixture[] = [
  {
    id: "stage27-pinecone-acorn-nature",
    text: "森で松ぼっくりを拾い、公園でどんぐりを集める夢だった。",
    expectedMotifIds: ["pinecone", "acorn"],
    note: "自然系の小さな実をhome-placeへ寄せず、seed / tree周辺の補助として拾えるか確認する。",
  },
  {
    id: "stage27-mushroom-fern-dew-boundary",
    text: "雨上がりにきのこを見つけ、日陰のシダを眺め、草に朝露がつく夢だった。",
    expectedMotifIds: ["mushroom", "fern", "dew"],
    note: "湿度や草地の近縁をgeneric-specificとして説明でき、water-weatherへ過剰に寄らないか確認する。",
  },
  {
    id: "stage27-broom-bowl-object",
    text: "ほうきで掃き、ボウルで混ぜる夢だった。",
    expectedMotifIds: ["broom", "bowl"],
    unexpectedMotifIds: ["bathroom"],
    note: "掃除・調理の道具を場所そのものではなくobject-record寄りで扱えるか確認する。",
  },
  {
    id: "stage27-compass-pencil-bookmark-record",
    text: "方位磁石で向きを確かめ、鉛筆で書く。本にしおりを挟む夢だった。",
    expectedMotifIds: ["compass", "pencil", "bookmark"],
    note: "移動判断と記録補助の主役差を保ち、writing / reading / notebookの補助に留める。",
  },
  {
    id: "stage27-shoelace-zipper-boundary",
    text: "靴ひもを結び、ファスナーを閉める夢だった。",
    expectedMotifIds: ["shoelace", "zipper"],
    unexpectedMotifIds: ["concealing", "hiding"],
    note: "結ぶ・閉じる行為をconcealing / hidingへ寄せすぎず、身支度の境界として確認する。",
  },
  {
    id: "stage27-apron-suitcase-preparation",
    text: "エプロンをつける。スーツケースに詰める夢だった。",
    expectedMotifIds: ["apron", "suitcase"],
    unexpectedMotifIds: ["house"],
    note: "作業準備と移動準備をhome-placeではなく役割・荷物の整理として扱えるか確認する。",
  },
  {
    id: "stage27-ticket-stub-paint-memory-expression",
    text: "映画の半券を見る。絵の具を混ぜる夢だった。",
    expectedMotifIds: ["ticket_stub", "paint"],
    note: "半券はcommunicationではなく過去の記録、絵の具はpainting / brushと粒度差を保つ。",
  },
  {
    id: "stage27-footprint-eyelash-body-boundary",
    text: "足跡をたどる。鏡でまつげを見る夢だった。",
    expectedMotifIds: ["footprint", "eyelash"],
    unexpectedMotifIds: ["scar", "injury"],
    note: "足跡とまつげを非診断・非断定のbody-appearance周辺として拾えるか確認する。",
  },
  {
    id: "stage27-keychain-pocket-small-object",
    text: "キーホルダーを探し、ポケットから取り出す夢だった。",
    expectedMotifIds: ["keychain", "pocket"],
    unexpectedMotifIds: ["storage_room", "concealing"],
    note: "小物と身近な収納をstorage / hidingへ寄せすぎないか確認する。",
  },
];

export const stage27RealDreamAuditCases: Stage27Fixture[] = [
  {
    id: "stage27-real-airport-alone",
    text: "空港にいる夢だった。",
    expectedMotifIds: ["airport"],
    unexpectedMotifIds: ["sea", "ship"],
    note: "空港内の港だけでsea / shipが混ざらないことを確認する。",
  },
  {
    id: "stage27-real-port-alone",
    text: "港だけが見える夢だった。",
    expectedMotifIds: [],
    unexpectedMotifIds: ["airport", "sea", "ship"],
    note: "港単独はStage27では主役motif未確定として、部分一致誤抽出を起こさないことを確認する。",
  },
  {
    id: "stage27-real-airport-hurry",
    text: "空港に急ぐ夢だった。",
    expectedMotifIds: ["airport", "being_late"],
    unexpectedMotifIds: ["sea", "ship"],
    note: "空港 + 急ぐでairport / being_lateを拾い、港の部分一致を抑える。",
  },
  {
    id: "stage27-real-casual-anger",
    text: "誰かにキレ散らかす夢だった。",
    expectedMotifIds: ["fighting"],
    unexpectedMotifIds: ["comment", "sns", "chat"],
    note: "口語表現は大規模anger再設計ではなく、既存fightingの最小aliasで比較可能にする。",
  },
];

export const stage27RepresentativeDreams: Stage27RepresentativeDream[] = [
  {
    id: "stage27-front-nature-small-signs",
    input: {
      text: "森で松ぼっくりを拾い、どんぐりを集め、朝露を眺める夢だった。",
      impression: "calm",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["pinecone", "acorn", "dew"],
    selectedMotifIds: ["pinecone", "acorn", "dew"],
    expectedQuestionIds: ["pinecone-state", "acorn-feeling", "dew-moment"],
  },
  {
    id: "stage27-front-object-record",
    input: {
      text: "ほうきを持ち、方位磁石で向きを確かめ、本にしおりを挟む夢だった。",
      impression: "confused",
      clarity: "partial",
      recurring: false,
    },
    expectedMotifIds: ["broom", "compass", "bookmark"],
    selectedMotifIds: ["broom", "compass", "bookmark"],
    expectedQuestionIds: ["broom-cleanup", "compass-direction", "bookmark-place"],
  },
  {
    id: "stage27-back-boundary-small-storage",
    input: {
      text: "靴ひもを結び直し、ファスナーを閉めて、ポケットから小物を取り出す夢だった。",
      impression: "uneasy",
      clarity: "clear",
      recurring: false,
    },
    expectedMotifIds: ["shoelace", "zipper", "pocket"],
    selectedMotifIds: ["shoelace", "zipper", "pocket"],
    expectedQuestionIds: ["shoelace-knot", "zipper-boundary", "pocket-content"],
  },
  {
    id: "stage27-back-expression-body-trace",
    input: {
      text: "絵の具を混ぜ、足跡をたどり、鏡でまつげを見る夢だった。",
      impression: "nostalgic",
      clarity: "partial",
      recurring: false,
    },
    expectedMotifIds: ["paint", "footprint", "eyelash"],
    selectedMotifIds: ["paint", "footprint", "eyelash"],
    expectedQuestionIds: ["paint-color", "footprint-trace", "eyelash-detail"],
  },
];
