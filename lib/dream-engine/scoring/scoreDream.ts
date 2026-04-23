import { contextKeywordRules } from "@/data/keywords/context";
import {
  clarityScoreImpact,
  impressionScoreImpact,
  recurringScoreImpact,
} from "@/data/rules/scoring";
import { motifRegistry } from "@/data/motifs";
import type { DreamInput, MotifDefinition, QuestionAnswer, ScoreVector } from "@/types/dream";
import { normalizeDreamText } from "../extract/normalize";
import { addScoreImpact, clampScoreVector, createScoreVector } from "./vector";

function scoreContextKeywords(text: string, scores: ScoreVector): ScoreVector {
  const normalizedText = normalizeDreamText(text);

  return contextKeywordRules.reduce((nextScores, rule) => {
    const matched = rule.terms.some((term) => normalizedText.includes(normalizeDreamText(term)));
    return matched ? addScoreImpact(nextScores, rule.scoreImpact) : nextScores;
  }, scores);
}

function scoreQuestionAnswers(scores: ScoreVector, answers: QuestionAnswer[]): ScoreVector {
  const questionById = new Map(motifRegistry.questions.map((question) => [question.id, question]));

  return answers.reduce((nextScores, answer) => {
    const question = questionById.get(answer.questionId);

    if (!question) {
      return nextScores;
    }

    return question.options
      .filter((option) => answer.optionIds.includes(option.id))
      .reduce((optionScores, option) => addScoreImpact(optionScores, option.scoreImpact), nextScores);
  }, scores);
}

export function scoreDream(
  input: DreamInput,
  selectedMotifs: MotifDefinition[],
  answers: QuestionAnswer[],
): ScoreVector {
  let scores = createScoreVector();

  scores = addScoreImpact(scores, impressionScoreImpact[input.impression]);
  scores = addScoreImpact(scores, clarityScoreImpact[input.clarity]);

  if (input.recurring) {
    scores = addScoreImpact(scores, recurringScoreImpact);
  }

  scores = selectedMotifs.reduce(
    (nextScores, motif) => addScoreImpact(nextScores, motif.scoreImpact),
    scores,
  );
  scores = scoreContextKeywords(input.text, scores);
  scores = scoreQuestionAnswers(scores, answers);

  return clampScoreVector(scores);
}
