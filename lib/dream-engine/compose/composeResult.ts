import {
  axisCompositionBlocks,
  axisEncouragementBlocks,
  axisEncouragementVariants,
  fallbackBlocks,
  impressionEncouragementOpeners,
  motifEncouragementBlocks,
} from "@/data/rules/composition";
import { motifPairBlocks } from "@/data/rules/motifPairs";
import { blocksByMotifId, motifRegistry } from "@/data/motifs";
import type {
  DreamInput,
  InterpretationResult,
  InterpretationSection,
  MotifDefinition,
  QuestionAnswer,
  ScoreAxis,
} from "@/types/dream";
import { scoreDream } from "../scoring/scoreDream";
import { getDominantAxes } from "../scoring/vector";

const sections: InterpretationSection[] = [
  "summary",
  "symbolMeaning",
  "psychology",
  "fortune",
  "caution",
  "actionHint",
  "encouragement",
];

function uniqueSentences(sentences: string[], limit: number): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const s of sentences) {
    if (!seen.has(s)) {
      seen.add(s);
      result.push(s);
      if (result.length >= limit) break;
    }
  }
  return result;
}

function collectMotifBlocks(
  selectedMotifs: MotifDefinition[],
  section: InterpretationSection,
): string[] {
  if (selectedMotifs.length <= 1) {
    return selectedMotifs.flatMap((motif) => blocksByMotifId.get(motif.id)?.[section] ?? []);
  }

  // Interleave blocks by position so no single motif dominates the reading
  const perMotif = selectedMotifs.map((motif) => blocksByMotifId.get(motif.id)?.[section] ?? []);
  const maxLen = Math.max(...perMotif.map((b) => b.length));
  const result: string[] = [];
  for (let i = 0; i < maxLen; i++) {
    for (const blocks of perMotif) {
      if (i < blocks.length) {
        result.push(blocks[i]);
      }
    }
  }
  return result;
}

function collectAxisBlocks(
  dominantAxes: ScoreAxis[],
  section: InterpretationSection,
): string[] {
  return dominantAxes
    .map((axis) => axisCompositionBlocks[axis][section])
    .filter((block): block is string => Boolean(block));
}

function collectAnswerHintBlocks(
  answers: QuestionAnswer[],
  section: InterpretationSection,
): string[] {
  const questionById = new Map(motifRegistry.questions.map((question) => [question.id, question]));

  return answers.flatMap((answer) => {
    const question = questionById.get(answer.questionId);

    if (!question) {
      return [];
    }

    return question.options.flatMap((option) => {
      if (!answer.optionIds.includes(option.id)) {
        return [];
      }

      const hint = option.interpretationHints?.[section];
      return hint ? [hint] : [];
    });
  });
}

function collectPairBlocks(
  selectedMotifs: MotifDefinition[],
  section: InterpretationSection,
): string[] {
  const selectedIds = new Set(selectedMotifs.map((m) => m.id));

  return motifPairBlocks
    .filter(({ motifIds }) => motifIds.every((id) => selectedIds.has(id)))
    .flatMap(({ blocks }) => {
      const block = blocks[section];
      return block ? [block] : [];
    });
}

// Deterministic djb2-style hash — no Math.random(), no Date, no external state
function stableHash(s: string): number {
  let hash = 5381;
  for (let i = 0; i < s.length; i++) {
    hash = ((hash << 5) + hash + s.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

function pickMotifEncouragement(
  selectedMotifs: MotifDefinition[],
  seed: string,
): string | null {
  for (const motif of selectedMotifs) {
    const variants = motifEncouragementBlocks[motif.id];
    if (variants && variants.length > 0) {
      return variants[stableHash(seed + ":motif") % variants.length];
    }
  }
  return null;
}

function pickAxisEncouragement(axis: ScoreAxis | undefined, seed: string): string {
  if (!axis) return fallbackBlocks.encouragement[0];
  const variants = axisEncouragementVariants[axis];
  if (variants && variants.length > 0) {
    return variants[stableHash(seed + ":axis") % variants.length];
  }
  // Fallback to original long block if variants somehow absent
  return axisEncouragementBlocks[axis] ?? fallbackBlocks.encouragement[0];
}

function composeEncouragement(
  input: DreamInput,
  dominantAxes: ScoreAxis[],
  selectedMotifs: MotifDefinition[],
): string[] {
  // Stable seed: motif ids + dominant axis + impression — no randomness
  const seed = [
    selectedMotifs.map((m) => m.id).join("+"),
    dominantAxes[0] ?? "recovery",
    input.impression,
  ].join(":");

  // Layer A — impression opener (emotional reception, unchanged)
  const opener = impressionEncouragementOpeners[input.impression];
  // Layer B — motif-specific closing sentence (first matching motif wins)
  const motifText = pickMotifEncouragement(selectedMotifs, seed);
  // Layer C — axis variant (one compact sentence, selected deterministically)
  const axisText = pickAxisEncouragement(dominantAxes[0], seed);

  const candidates = [opener, motifText, axisText].filter((s): s is string => Boolean(s));
  // 3 layers when a motif block exists; 2 otherwise — keeps section length stable
  return uniqueSentences(candidates, motifText ? 3 : 2);
}

function composeSections(
  input: DreamInput,
  selectedMotifs: MotifDefinition[],
  dominantAxes: ScoreAxis[],
  answers: QuestionAnswer[],
): InterpretationResult["sections"] {
  return sections.reduce((result, section) => {
    if (section === "encouragement") {
      return {
        ...result,
        encouragement: composeEncouragement(input, dominantAxes, selectedMotifs),
      };
    }

    const motifBlocks = collectMotifBlocks(selectedMotifs, section);
    const answerHintBlocks = collectAnswerHintBlocks(answers, section);
    const axisBlocks = collectAxisBlocks(dominantAxes, section);
    const pairBlocks = collectPairBlocks(selectedMotifs, section);
    const fallback = fallbackBlocks[section];

    return {
      ...result,
      [section]: uniqueSentences(
        [...answerHintBlocks, ...pairBlocks, ...motifBlocks, ...axisBlocks, ...fallback],
        section === "summary" ? 3 : 4,
      ),
    };
  }, {} as InterpretationResult["sections"]);
}

export function composeInterpretation(
  input: DreamInput,
  selectedMotifs: MotifDefinition[],
  answers: QuestionAnswer[],
): InterpretationResult {
  const scores = scoreDream(input, selectedMotifs, answers);
  const dominantAxes = getDominantAxes(scores);

  return {
    selectedMotifs,
    scores,
    dominantAxes,
    sections: composeSections(input, selectedMotifs, dominantAxes, answers),
  };
}
