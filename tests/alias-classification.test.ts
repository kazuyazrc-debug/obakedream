import { describe, expect, it } from "vitest";
import type { MotifLexiconEntry } from "@/types/dream";
import { makeWeightedTerms, termWeights } from "@/lib/dream-engine/extract/termWeights";

describe("alias term classification", () => {
  it("maps existing lexicon fields to phrase, alias, and weak terms", () => {
    const entry: MotifLexiconEntry = {
      motifId: "sample",
      priorityKeywords: ["鍵をなくす"],
      aliases: ["鍵"],
      secondaryKeywords: ["扉"],
    };

    expect(makeWeightedTerms(entry)).toEqual([
      { term: "鍵をなくす", weight: termWeights.phrase, kind: "phrase" },
      { term: "鍵", weight: termWeights.shortAlias, kind: "alias" },
      { term: "扉", weight: termWeights.weak, kind: "weak" },
    ]);
  });
});
