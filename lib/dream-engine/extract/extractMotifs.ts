import { motifRegistry } from "@/data/motifs";
import type { ExtractedMotif, MotifDefinition, MotifLexiconEntry } from "@/types/dream";
import { shouldSuppressByConflict } from "./conflictSuppression";
import { normalizeDreamText, uniqueTerms } from "./normalize";
import { makeWeightedTerms, termWeights } from "./termWeights";

type ScoredEntry = {
  motif: MotifDefinition;
  score: number;
  strongScore: number;
  weakScore: number;
  matchedTerms: string[];
};

function scoreEntry(
  text: string,
  entry: MotifLexiconEntry,
): { score: number; strongScore: number; weakScore: number; matchedTerms: string[] } {
  return makeWeightedTerms(entry).reduce(
    (acc, weightedTerm) => {
      const normalizedTerm = normalizeDreamText(weightedTerm.term);

      if (!normalizedTerm || !text.includes(normalizedTerm)) {
        return acc;
      }

      const strongScore = weightedTerm.kind === "weak" ? acc.strongScore : acc.strongScore + weightedTerm.weight;
      const weakScore = weightedTerm.kind === "weak" ? acc.weakScore + weightedTerm.weight : acc.weakScore;

      return {
        score: acc.score + weightedTerm.weight,
        strongScore,
        weakScore,
        matchedTerms: [...acc.matchedTerms, weightedTerm.term],
      };
    },
    { score: 0, strongScore: 0, weakScore: 0, matchedTerms: [] as string[] },
  );
}

function hasNeighborRelation(motif: MotifDefinition, other: MotifDefinition): boolean {
  return Boolean(
    motif.neighbors?.some((relation) => relation.motifId === other.id) ||
      other.neighbors?.some((relation) => relation.motifId === motif.id),
  );
}

function hasStrongNeighborHit(motif: MotifDefinition, strongHitMotifs: MotifDefinition[]): boolean {
  return strongHitMotifs.some((other) => hasNeighborRelation(motif, other));
}

function relationScoreBonus(motif: MotifDefinition, strongHitMotifs: MotifDefinition[]): number {
  const relationCount = strongHitMotifs.filter((other) => other.id !== motif.id && hasNeighborRelation(motif, other)).length;

  return Math.min(relationCount * termWeights.relationBonus, termWeights.maxRelationBonus);
}

function applyWeakAndRelationPolicy(entries: ScoredEntry[]): ExtractedMotif[] {
  const strongHitMotifs = entries.filter((entry) => entry.strongScore > 0).map((entry) => entry.motif);

  return entries
    .map<ExtractedMotif | null>((entry) => {
      const weakOnly = entry.weakScore > 0 && entry.strongScore === 0;
      const hasStrongNeighbor = hasStrongNeighborHit(entry.motif, strongHitMotifs);

      if (weakOnly && !hasStrongNeighbor) {
        return null;
      }

      const policyScore = weakOnly
        ? termWeights.weakAuxiliary
        : entry.score + relationScoreBonus(entry.motif, strongHitMotifs);

      return {
        motif: entry.motif,
        score: policyScore + entry.motif.extractionPriority / 100,
        matchedTerms: uniqueTerms(entry.matchedTerms),
        source: "text",
      };
    })
    .filter((candidate): candidate is ExtractedMotif => Boolean(candidate));
}

export function extractMotifs(text: string): ExtractedMotif[] {
  const normalizedText = normalizeDreamText(text);

  const scoredEntries = motifRegistry.aliases
    .map<ScoredEntry | null>((entry) => {
      const motif = motifRegistry.motifs.find((item) => item.id === entry.motifId);
      const scored = scoreEntry(normalizedText, entry);

      if (!motif || scored.score <= 0) {
        return null;
      }

      return {
        motif,
        score: scored.score,
        strongScore: scored.strongScore,
        weakScore: scored.weakScore,
        matchedTerms: scored.matchedTerms,
      };
    })
    .filter((candidate): candidate is ScoredEntry => Boolean(candidate));

  const candidates = applyWeakAndRelationPolicy(scoredEntries)
    .sort((a, b) => b.score - a.score);

  return candidates.reduce<ExtractedMotif[]>((kept, candidate) => {
    if (shouldSuppressByConflict(candidate, kept)) {
      return kept;
    }

    return [...kept, candidate];
  }, []);
}

export function findMotifsByIds(ids: string[]): MotifDefinition[] {
  const idSet = new Set(ids);
  return motifRegistry.motifs.filter((motif) => idSet.has(motif.id));
}
