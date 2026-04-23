import type { ExtractedMotif } from "@/types/dream";

function extractionStrength(candidate: ExtractedMotif): number {
  return candidate.score * 10 + candidate.motif.extractionPriority;
}

export function shouldSuppressByConflict(
  candidate: ExtractedMotif,
  kept: ExtractedMotif[],
): boolean {
  const conflictingIds = new Set(candidate.motif.conflicts?.map((relation) => relation.motifId) ?? []);

  return kept.some((other) => {
    const reverseConflicts = new Set(other.motif.conflicts?.map((relation) => relation.motifId) ?? []);
    const related = conflictingIds.has(other.motif.id) || reverseConflicts.has(candidate.motif.id);

    return related && extractionStrength(other) >= extractionStrength(candidate);
  });
}

export function suppressConflictingMotifs(candidates: ExtractedMotif[]): ExtractedMotif[] {
  return candidates.reduce<ExtractedMotif[]>((kept, candidate) => {
    if (shouldSuppressByConflict(candidate, kept)) {
      return kept;
    }

    return [...kept, candidate];
  }, []);
}
