import { axisCompositionBlocks, fallbackBlocks } from "@/data/rules/composition";
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

function composeSections(
  selectedMotifs: MotifDefinition[],
  dominantAxes: ScoreAxis[],
  answers: QuestionAnswer[],
): InterpretationResult["sections"] {
  return sections.reduce((result, section) => {
    const motifBlocks = collectMotifBlocks(selectedMotifs, section);
    const axisBlocks = collectAxisBlocks(dominantAxes, section);
    const answerHintBlocks = collectAnswerHintBlocks(answers, section);
    const fallback = fallbackBlocks[section];

    return {
      ...result,
      [section]: uniqueSentences(
        [...axisBlocks, ...answerHintBlocks, ...motifBlocks, ...fallback],
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
    sections: composeSections(selectedMotifs, dominantAxes, answers),
  };
}
