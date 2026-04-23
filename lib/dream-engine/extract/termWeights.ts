import type { MotifLexiconEntry } from "@/types/dream";

export type WeightedTerm = {
  term: string;
  weight: number;
  kind: AliasTermKind;
};

export type AliasTermKind = "phrase" | "alias" | "weak";

export const termWeights = {
  phrase: 7,
  alias: 4,
  shortAlias: 2,
  weak: 2,
  weakAuxiliary: 0.6,
  relationBonus: 0.75,
  maxRelationBonus: 1.5,
} as const;

export function makeWeightedTerms(entry: MotifLexiconEntry): WeightedTerm[] {
  return [
    ...entry.priorityKeywords.map((term) => ({
      term,
      weight: termWeights.phrase,
      kind: "phrase" as const,
    })),
    ...entry.aliases.map((term) => ({
      term,
      weight: [...term].length <= 1 ? termWeights.shortAlias : termWeights.alias,
      kind: "alias" as const,
    })),
    ...entry.secondaryKeywords.map((term) => ({
      term,
      weight: termWeights.weak,
      kind: "weak" as const,
    })),
  ];
}
