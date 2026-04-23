export const scoreAxes = [
  "anxiety",
  "change",
  "relationships",
  "selfDefense",
  "loss",
  "recovery",
  "desire",
  "unresolved",
] as const;

export type ScoreAxis = (typeof scoreAxes)[number];

export type ScoreVector = Record<ScoreAxis, number>;

export type MotifCategory =
  | "animal"
  | "element"
  | "place"
  | "person"
  | "action"
  | "body"
  | "object"
  | "vehicle"
  | "life-event"
  | "time";

export type DreamImpression =
  | "scary"
  | "uneasy"
  | "happy"
  | "nostalgic"
  | "confused"
  | "calm";

export type MemoryClarity = "vague" | "partial" | "clear";

export type QuestionType = "single" | "multi";

export type QuestionOption = {
  id: string;
  label: string;
  scoreImpact: Partial<ScoreVector>;
  interpretationHints?: Partial<Record<InterpretationSection, string>>;
};

export type FollowUpQuestion = {
  id: string;
  motifId: string;
  prompt: string;
  type: QuestionType;
  priority: number;
  options: QuestionOption[];
};

export type InterpretationSection =
  | "summary"
  | "symbolMeaning"
  | "psychology"
  | "fortune"
  | "caution"
  | "actionHint";

export type InterpretationBlocks = Record<InterpretationSection, string[]>;

export type MotifRelation = {
  motifId: string;
  reason: string;
};

export type MotifDefinition = {
  id: string;
  name: string;
  category: MotifCategory;
  basicMeaning: string;
  psychologicalMeaning: string;
  fortuneMeaning: string;
  relatedEmotions: DreamImpression[];
  relatedActions: string[];
  relatedPlaces: string[];
  scoreImpact: Partial<ScoreVector>;
  conflicts?: MotifRelation[];
  neighbors?: MotifRelation[];
  extractionPriority: number;
};

export type MotifLexiconEntry = {
  motifId: string;
  aliases: string[];
  priorityKeywords: string[];
  secondaryKeywords: string[];
};

export type MotifBlockEntry = {
  motifId: string;
  blocks: InterpretationBlocks;
};

export type ExtractedMotif = {
  motif: MotifDefinition;
  score: number;
  matchedTerms: string[];
  source: "text" | "supporting-input";
};

export type DreamInput = {
  text: string;
  impression: DreamImpression;
  clarity: MemoryClarity;
  recurring: boolean;
};

export type QuestionAnswer = {
  questionId: string;
  optionIds: string[];
};

export type InterpretationResult = {
  selectedMotifs: MotifDefinition[];
  scores: ScoreVector;
  dominantAxes: ScoreAxis[];
  sections: Record<InterpretationSection, string[]>;
};
