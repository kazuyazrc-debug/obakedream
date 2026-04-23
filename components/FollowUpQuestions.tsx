"use client";

import { ArrowLeft, Wand2 } from "lucide-react";
import type { FollowUpQuestion, QuestionAnswer } from "@/types/dream";

type FollowUpQuestionsProps = {
  questions: FollowUpQuestion[];
  answers: QuestionAnswer[];
  onAnswer: (answer: QuestionAnswer) => void;
  onBack: () => void;
  onComplete: () => void;
};

function getAnswer(answers: QuestionAnswer[], questionId: string): QuestionAnswer | undefined {
  return answers.find((answer) => answer.questionId === questionId);
}

export function FollowUpQuestions({
  questions,
  answers,
  onAnswer,
  onBack,
  onComplete,
}: FollowUpQuestionsProps) {
  return (
    <section className="space-y-6 md:space-y-7">
      <div className="flex items-center gap-3 text-mist-100">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-lavender-100 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
          <Wand2 size={20} aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm text-mist-300">Step 3</p>
          <h2 className="text-xl font-semibold tracking-[0.01em]">追加で少しだけ確認</h2>
        </div>
      </div>

      <div className="space-y-4 md:space-y-5">
        {questions.map((question, index) => {
          const current = getAnswer(answers, question.id);

          return (
            <fieldset
              key={question.id}
              className="ritual-subpanel rounded-[1.4rem] p-4 md:p-5"
            >
              <legend className="px-1 text-sm text-mist-300">質問 {index + 1}</legend>
              <p className="mb-4 font-medium leading-7 text-mist-50">{question.prompt}</p>
              <div className="grid gap-2.5 sm:grid-cols-3">
                {question.options.map((option) => (
                  <label key={option.id} className="choice-pill justify-start">
                    <input
                      type="radio"
                      name={question.id}
                      checked={current?.optionIds.includes(option.id) ?? false}
                      onChange={() => onAnswer({ questionId: question.id, optionIds: [option.id] })}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          );
        })}
      </div>

      <div className="pt-1 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        <button type="button" onClick={onBack} className="ghost-button">
          <ArrowLeft size={18} aria-hidden="true" />
          タグ確認へ戻る
        </button>
        <button
          type="button"
          onClick={onComplete}
          className="primary-button"
        >
          結果を見る
        </button>
      </div>
    </section>
  );
}
