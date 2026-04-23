import { motifRegistry } from "@/data/motifs";
import type { FollowUpQuestion, MotifDefinition } from "@/types/dream";

export function selectFollowUpQuestions(
  selectedMotifs: MotifDefinition[],
  maxQuestions = 5,
): FollowUpQuestion[] {
  const selectedIds = new Set(selectedMotifs.map((motif) => motif.id));

  const byMotif = new Map<string, FollowUpQuestion[]>();
  for (const q of motifRegistry.questions.filter((q) => selectedIds.has(q.motifId))) {
    const list = byMotif.get(q.motifId) ?? [];
    list.push(q);
    byMotif.set(q.motifId, list);
  }
  for (const [id, list] of byMotif) {
    byMotif.set(id, [...list].sort((a, b) => b.priority - a.priority));
  }

  // Order motifs by their top question's priority so high-priority motifs lead each round
  const motifOrder = [...byMotif.keys()].sort(
    (a, b) => byMotif.get(b)![0].priority - byMotif.get(a)![0].priority,
  );

  // Round-robin: pick at most one question per motif per round for diversity
  const result: FollowUpQuestion[] = [];
  for (let round = 0; result.length < maxQuestions; round++) {
    let anyPicked = false;
    for (const motifId of motifOrder) {
      const q = byMotif.get(motifId)![round];
      if (q) {
        result.push(q);
        anyPicked = true;
        if (result.length >= maxQuestions) break;
      }
    }
    if (!anyPicked) break;
  }

  return result;
}
