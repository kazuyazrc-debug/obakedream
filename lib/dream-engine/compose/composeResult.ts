import {
  axisCompositionBlocks,
  axisEncouragementBlocks,
  fallbackBlocks,
  impressionEncouragementOpeners,
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
  return selectedMotifs.flatMap((motif) => blocksByMotifId.get(motif.id)?.[section] ?? []);
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

function composeEncouragement(
  input: DreamInput,
  dominantAxes: ScoreAxis[],
): string[] {
  const opener = impressionEncouragementOpeners[input.impression];
  // 最支配軸1つだけ — 複数並べると説教的になるため絞る
  const axisMessage = dominantAxes[0] ? axisEncouragementBlocks[dominantAxes[0]] : null;
  const fallback = fallbackBlocks.encouragement[0];

  const candidates = [opener, axisMessage, fallback].filter((s): s is string => Boolean(s));
  return uniqueSentences(candidates, 2);
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
        encouragement: composeEncouragement(input, dominantAxes),
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
        [...answerHintBlocks, ...motifBlocks, ...pairBlocks, ...axisBlocks, ...fallback],
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
