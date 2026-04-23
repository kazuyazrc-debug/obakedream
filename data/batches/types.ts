import type {
  FollowUpQuestion,
  MotifBlockEntry,
  MotifDefinition,
  MotifLexiconEntry,
} from "@/types/dream";

export type MotifBatch = {
  id: string;
  label: string;
  description: string;
  motifs: MotifDefinition[];
  aliases: MotifLexiconEntry[];
  questions: FollowUpQuestion[];
  blocks: MotifBlockEntry[];
};
