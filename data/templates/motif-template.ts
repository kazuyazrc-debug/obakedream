import type {
  FollowUpQuestion,
  MotifBlockEntry,
  MotifDefinition,
  MotifLexiconEntry,
} from "@/types/dream";

export const motifTemplate: MotifDefinition = {
  id: "sample_motif",
  name: "サンプル",
  category: "person",
  basicMeaning: "夢での基本的な象徴意味を、断定しすぎずに書きます。",
  psychologicalMeaning: "心理面で何を映しやすいかを具体的に書きます。",
  fortuneMeaning: "占い面の読みを、兆しや傾向として書きます。",
  relatedEmotions: ["uneasy"],
  relatedActions: ["見る"],
  relatedPlaces: ["家"],
  scoreImpact: { unresolved: 1 },
  conflicts: [],
  neighbors: [],
  extractionPriority: 70,
};

export const motifAliasTemplate: MotifLexiconEntry = {
  motifId: "sample_motif",
  aliases: ["サンプル"],
  priorityKeywords: ["サンプルが出る"],
  secondaryKeywords: ["例"],
};

export const motifQuestionTemplate: FollowUpQuestion = {
  id: "sample-motif-detail",
  motifId: "sample_motif",
  prompt: "サンプルはどのような印象でしたか？",
  type: "single",
  priority: 70,
  options: [
    { id: "calm", label: "穏やか", scoreImpact: { recovery: 1 } },
    { id: "uneasy", label: "不安", scoreImpact: { anxiety: 1 } },
    { id: "unclear", label: "よく分からない", scoreImpact: { unresolved: 1 } },
  ],
};

export const motifBlockTemplate: MotifBlockEntry = {
  motifId: "sample_motif",
  blocks: {
    summary: ["サンプルは、今の心の状態を映す象徴として現れている可能性があります。"],
    symbolMeaning: ["サンプルは、具体的な夢の文脈に応じて意味が変わりやすい象徴です。"],
    psychology: ["心理面では、まだ言葉になっていない感情を示しているかもしれません。"],
    fortune: ["占い面では、小さな気づきが次の流れを整える兆しとして読めます。"],
    caution: ["断定しすぎず、夢の印象と現実の状況を合わせて見ることが大切です。"],
    actionHint: ["今日は、気になったことを一つだけメモしておくとよさそうです。"],
  },
};
