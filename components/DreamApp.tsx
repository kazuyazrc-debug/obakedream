"use client";

import { useMemo, useState } from "react";
import { CandidateTags } from "@/components/CandidateTags";
import { DreamInputForm } from "@/components/DreamInputForm";
import { FollowUpQuestions } from "@/components/FollowUpQuestions";
import { ResultView } from "@/components/ResultView";
import { composeInterpretation, extractMotifs, findMotifsByIds, selectFollowUpQuestions } from "@/lib/dream-engine";
import type { DreamInput, ExtractedMotif, InterpretationResult, QuestionAnswer } from "@/types/dream";

type Step = "input" | "tags" | "questions" | "result";

const initialInput: DreamInput = {
  text: "",
  impression: "uneasy",
  clarity: "partial",
  recurring: false,
};

export function DreamApp() {
  const [step, setStep] = useState<Step>("input");
  const [input, setInput] = useState<DreamInput>(initialInput);
  const [candidates, setCandidates] = useState<ExtractedMotif[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [answers, setAnswers] = useState<QuestionAnswer[]>([]);
  const [result, setResult] = useState<InterpretationResult | null>(null);

  const selectedMotifs = useMemo(() => findMotifsByIds(selectedIds), [selectedIds]);
  const invalidIds = useMemo(
    () => selectedIds.filter((id) => !selectedMotifs.some((m) => m.id === id)),
    [selectedIds, selectedMotifs],
  );
  const questions = useMemo(() => selectFollowUpQuestions(selectedMotifs, 5), [selectedMotifs]);

  function analyzeText() {
    const extracted = extractMotifs(input.text);
    setCandidates(extracted);
    setSelectedIds(extracted.slice(0, 6).map((candidate) => candidate.motif.id));
    setAnswers([]);
    setResult(null);
    setStep("tags");
  }

  function toggleMotif(motifId: string) {
    setSelectedIds((current) =>
      current.includes(motifId) ? current.filter((id) => id !== motifId) : [...current, motifId],
    );
  }

  function goToQuestions() {
    // Strip any stale IDs that are no longer in the registry before advancing
    if (invalidIds.length > 0) {
      setSelectedIds(selectedIds.filter((id) => !invalidIds.includes(id)));
    }
    setAnswers([]);

    if (questions.length === 0) {
      setResult(composeInterpretation(input, selectedMotifs, []));
      setStep("result");
      return;
    }

    setStep("questions");
  }

  function answerQuestion(answer: QuestionAnswer) {
    setAnswers((current) => [
      ...current.filter((item) => item.questionId !== answer.questionId),
      answer,
    ]);
  }

  function completeReading() {
    setResult(composeInterpretation(input, selectedMotifs, answers));
    setStep("result");
  }

  function goBackFromResult() {
    setResult(null);
    setStep(questions.length > 0 ? "questions" : "tags");
  }

  function restart() {
    setStep("input");
    setResult(null);
  }

  return (
    <div className="min-h-screen text-mist-50">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_28%),radial-gradient(circle_at_center,transparent_0%,rgba(5,7,12,0.24)_100%)]" />
      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <header className={`app-hero mb-6 px-1 py-2 md:mb-8 ${step === "result" ? "result-hero-compact" : ""}`}>
          <div className="app-hero-inner max-w-3xl">
            <p className="app-hero-kicker text-xs tracking-[0.28em] text-spirit-200/90 sm:text-sm">
              Dreaming of spirits/ghosts meaning
            </p>
            <h1 className="app-hero-title mt-3 text-3xl font-semibold tracking-[0.02em] text-mist-50 sm:text-5xl">
              おばけの夢占い🔮
            </h1>
            <p className="app-hero-description mt-4 max-w-2xl text-sm leading-7 text-mist-200 sm:text-base">
              夢の中で出てきたキーとなるモチーフを元にあなたの夢と状態を占います。
            </p>
            <div className="app-hero-notice mt-5 max-w-2xl rounded-2xl border border-lavender-300/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.04))] px-4 py-3 text-sm leading-6 text-mist-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              ※医学的な診断や診察、経済的な責任を取れるものではありません。
              <br />
              遊びとしてご活用ください👻
            </div>
          </div>
        </header>

        <div className="px-1">
          {step === "input" && (
            <DreamInputForm value={input} onChange={setInput} onAnalyze={analyzeText} />
          )}

          {step === "tags" && (
            <>
              {invalidIds.length > 0 && (
                <div
                  role="alert"
                  className="mb-4 rounded-lg border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-sm text-amber-200"
                >
                  {invalidIds.length}件のモチーフがデータベースに見つかりませんでした。次へ進むと自動的に除外されます。
                </div>
              )}
              <CandidateTags
                candidates={candidates}
                selectedIds={selectedIds}
                onToggle={toggleMotif}
                onBack={() => setStep("input")}
                onNext={goToQuestions}
              />
            </>
          )}

          {step === "questions" && (
            <FollowUpQuestions
              questions={questions}
              answers={answers}
              onAnswer={answerQuestion}
              onBack={() => setStep("tags")}
              onComplete={completeReading}
            />
          )}

          {step === "result" && result && (
            <ResultView result={result} onBack={goBackFromResult} onRestart={restart} />
          )}
        </div>
      </main>
    </div>
  );
}
