import {
  productionAliases,
  productionBlocks,
  productionMotifs,
  productionQuestions,
} from "@/data/batches";

export const motifRegistry = {
  motifs: productionMotifs,
  aliases: productionAliases,
  questions: productionQuestions,
  blocks: productionBlocks,
};

export const motifById = new Map(productionMotifs.map((motif) => [motif.id, motif]));
export const aliasesByMotifId = new Map(productionAliases.map((entry) => [entry.motifId, entry]));
export const blocksByMotifId = new Map(productionBlocks.map((entry) => [entry.motifId, entry.blocks]));

export function getMotifOrThrow(motifId: string) {
  const motif = motifById.get(motifId);

  if (!motif) {
    throw new Error(`Unknown motif id: ${motifId}`);
  }

  return motif;
}
