"use client";

import { ArrowLeft, RotateCcw } from "lucide-react";
import { axisLabels } from "@/data/rules/scoring";
import type { InterpretationResult, ScoreAxis } from "@/types/dream";

type ResultViewProps = {
  result: InterpretationResult;
  onBack: () => void;
  onRestart: () => void;
};

function uniqueParagraphs(paragraphs: Array<string | undefined>, limit: number): string[] {
  const seen = new Set<string>();
  const result: string[] = [];

  for (const paragraph of paragraphs) {
    if (!paragraph || seen.has(paragraph)) {
      continue;
    }

    seen.add(paragraph);
    result.push(paragraph);

    if (result.length >= limit) {
      break;
    }
  }

  return result;
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

export function ResultView({ result, onBack, onRestart }: ResultViewProps) {
  const scoreEntries = (Object.entries(result.scores) as [ScoreAxis, number][])
    .sort((a, b) => b[1] - a[1]);
  const readingParagraphs = uniqueParagraphs(
    [
      ...result.sections.summary.slice(0, 2),
      result.sections.symbolMeaning[0],
      result.sections.psychology[0],
      result.sections.fortune[0],
      result.sections.summary[2],
    ],
    5,
  );
  const cautionParagraphs = result.sections.caution.slice(0, 1);
  const hintParagraphs = result.sections.actionHint.slice(0, 2);

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
