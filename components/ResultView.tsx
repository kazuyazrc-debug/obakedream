"use client";

import { ArrowLeft, RotateCcw, Sparkles } from "lucide-react";
import { axisLabels } from "@/data/rules/scoring";
import { buildBalancedSummaryLines } from "@/lib/dream-engine/compose/buildSummaryLines";
import { selectDrinkRecommendation } from "@/lib/dream-engine/drinks/selectDrinkRecommendation";
import type { AiDreamPromptInput } from "@/lib/dream-engine/prompt/buildAiDreamPrompt";
import { AI_DREAM_PROMPT_STORAGE_KEY } from "@/lib/dream-engine/prompt/storage";
import type { DreamInput, InterpretationResult, ScoreAxis } from "@/types/dream";

type ResultViewProps = {
  input: DreamInput;
  result: InterpretationResult;
  onBack: () => void;
  onRestart: () => void;
};

function persistAiPromptContext(context: AiDreamPromptInput) {
  const payload = JSON.stringify(context);

  try {
    window.sessionStorage.setItem(AI_DREAM_PROMPT_STORAGE_KEY, payload);
    return;
  } catch {
    // Continue to the next local-only fallback.
  }

  try {
    window.localStorage.setItem(AI_DREAM_PROMPT_STORAGE_KEY, payload);
    return;
  } catch {
    // Continue to the dream-text-only fallback below.
  }

  window.name = JSON.stringify({ dreamText: context.dreamText, source: "result" });
}

function AxisMeter({
  axis,
  value,
  rank,
}: {
  axis: ScoreAxis;
  value: number;
  rank: number;
}) {
  const width = `${Math.min(100, Math.round((value / 12) * 100))}%`;
  const isTop = rank < 3;

  return (
    <div className={`result-axis-meter ${isTop ? "result-axis-meter--top" : ""}`}>
      <div className="flex items-center justify-between text-[0.84rem]">
        <span className="font-medium text-mist-200">{axisLabels[axis]}</span>
        <span className="text-mist-400">{value}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.08)]">
        <div
          className="h-full rounded-full bg-[linear-gradient(90deg,rgba(191,239,255,0.9),rgba(167,141,255,0.72))]"
          style={{ width }}
        />
      </div>
    </div>
  );
}

export function ResultView({ input, result, onBack, onRestart }: ResultViewProps) {
  const scoreEntries = (Object.entries(result.scores) as [ScoreAxis, number][])
    .sort((a, b) => b[1] - a[1]);
  const readingParagraphs = buildBalancedSummaryLines(result);
  const drinkSeed = result.selectedMotifs.map((m) => m.id).join("-");
  const drinkRecommendation = selectDrinkRecommendation({
    dominantAxis: result.dominantAxes[0],
    seed: drinkSeed,
  });
  const cautionParagraphs = result.sections.caution.slice(0, 1);
  const hintParagraphs = result.sections.actionHint.slice(0, 2);

  function openAiPromptWithResult() {
    const topAxes = scoreEntries
      .filter(([, value]) => value > 0)
      .slice(0, 3)
      .map(([axis, score]) => ({
        axis,
        label: axisLabels[axis],
        score,
      }));

    persistAiPromptContext({
      source: "result",
      dreamText: input.text,
      impression: input.impression,
      selectedMotifs: result.selectedMotifs.map((motif) => ({
        id: motif.id,
        label: motif.name,
      })),
      topAxes,
      summary: result.sections.summary,
      symbolMeaning: result.sections.symbolMeaning,
      psychology: result.sections.psychology,
      fortune: result.sections.fortune,
      cautionAndAction: [...result.sections.caution, ...result.sections.actionHint],
      encouragement: result.sections.encouragement,
      drinkRecommendation: {
        morning: drinkRecommendation.morning.name,
        afternoon: drinkRecommendation.afternoon.name,
      },
    });

    window.location.assign("/ai-prompt");
  }

  return (
    <section className="result-shell space-y-5 md:space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm tracking-[0.05em] text-mist-300">Result</p>
          <h2 className="text-2xl font-semibold tracking-[0.01em] text-mist-50 md:text-[1.95rem]">
            夢から届いたあなたへのメッセージ
          </h2>
          <p className="mt-3 max-w-2xl text-[0.95rem] leading-7 text-mist-300 md:leading-8">
            夢に残った印象を手がかりに、いまの心の流れをそっと映し出しています。
          </p>
        </div>
        <div className="result-action-bar flex flex-wrap gap-2">
          <button type="button" onClick={onBack} className="result-action-button">
            <ArrowLeft size={18} aria-hidden="true" />
            回答を修正する
          </button>
          <button type="button" onClick={onRestart} className="result-action-button">
            <RotateCcw size={18} aria-hidden="true" />
            もう一度読む
          </button>
        </div>
      </div>

      <div className="result-layout-grid grid gap-4 lg:grid-cols-[minmax(0,1.95fr)_minmax(16rem,0.9fr)] lg:gap-5">
        <div className="space-y-4 md:space-y-5">
          <article className="result-paper result-card-primary result-section rounded-[1.45rem] p-5 text-ink-950 md:p-6">
            <h3 className="result-heading mb-4 md:mb-[1.1rem]">総合解釈</h3>
            <div className="result-prose result-summary-compact">
              {readingParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <article className="result-paper result-card-secondary result-section rounded-[1.45rem] p-5 text-ink-950 md:p-6">
            <h3 className="result-heading mb-4 md:mb-[1.1rem]">今の流れで気をつけたいこと</h3>
            <div className="space-y-4 md:space-y-[1.05rem]">
              {cautionParagraphs.length > 0 && (
                <div className="result-subsection result-subsection-caution">
                  <p className="result-subheading">注意点</p>
                  <div className="result-prose result-guidance-prose">
                    {cautionParagraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              )}
              {hintParagraphs.length > 0 && (
                <div className="result-subsection result-subsection-hint">
                  <p className="result-subheading">まず始めてみるといいこと</p>
                  <div className="result-prose result-guidance-prose">
                    {hintParagraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </article>

          {result.sections.encouragement.length > 0 && (
            <article className="result-message-panel rounded-[1.45rem] p-5 md:p-6">
              <h3 className="result-heading result-heading-soft mb-4 md:mb-[1.1rem]">今のあなたへ</h3>
              <div className="result-encouragement-prose">
                {result.sections.encouragement.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          )}

          <article className="result-message-panel rounded-[1.45rem] p-5 md:p-6">
            <h3 className="result-heading result-heading-soft mb-4 md:mb-[1.1rem]">今日おすすめの一杯</h3>
            <div className="space-y-3">
              <div>
                <p className="text-[0.72rem] tracking-[0.07em] text-mist-400 mb-1">午前のあなたにおすすめの一杯</p>
                <p className="text-[0.96rem] font-medium text-mist-200">{drinkRecommendation.morning.name}</p>
              </div>
              <div>
                <p className="text-[0.72rem] tracking-[0.07em] text-mist-400 mb-1">午後も頑張るあなたにおすすめの一杯</p>
                <p className="text-[0.96rem] font-medium text-mist-200">{drinkRecommendation.afternoon.name}</p>
              </div>
            </div>
          </article>

          <div className="result-ai-cta rounded-[1.35rem] p-4 md:p-5">
            <div>
              <p className="text-sm font-semibold text-mist-100">もう少し深く読みたいときに</p>
              <p className="mt-1 text-sm leading-6 text-mist-300">
                この結果を含めた夢読みメモを作って、外部AIに貼り付けられます。API送信はしません。
              </p>
            </div>
            <button type="button" onClick={openAiPromptWithResult} className="ai-prompt-entry-button mt-3 w-full sm:w-auto">
              <Sparkles size={18} aria-hidden="true" />
              この結果をAIでさらに読む
            </button>
          </div>
        </div>

        <aside className="result-sidebar space-y-4 md:space-y-5 lg:sticky lg:top-6 lg:self-start">
          <div className="result-sidepanel rounded-[1.32rem] p-4 md:p-[1.15rem]">
            <h3 className="result-aside-heading mb-3">選ばれた象徴</h3>
            <div className="flex flex-wrap gap-3.5">
              {result.selectedMotifs.length > 0 ? (
                result.selectedMotifs.map((motif) => (
                  <span
                    key={motif.id}
                    className="result-chip"
                  >
                    {motif.name}
                  </span>
                ))
              ) : (
                <span className="text-sm text-mist-300">候補タグなし</span>
              )}
            </div>
          </div>

          <div className="result-sidepanel rounded-[1.32rem] p-4 md:p-[1.15rem]">
            <h3 className="result-aside-heading mb-3">解釈軸スコア</h3>
            <div className="space-y-2">
              {scoreEntries.map(([axis, value], index) => (
                <AxisMeter key={axis} axis={axis} value={value} rank={index} />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
