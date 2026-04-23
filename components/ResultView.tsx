"use client";

import { ArrowLeft, RotateCcw } from "lucide-react";
import { axisLabels } from "@/data/rules/scoring";
import type { InterpretationResult, ScoreAxis } from "@/types/dream";

type ResultViewProps = {
  result: InterpretationResult;
  onBack: () => void;
  onRestart: () => void;
};

function AxisMeter({ axis, value }: { axis: ScoreAxis; value: number }) {
  const width = `${Math.min(100, Math.round((value / 12) * 100))}%`;

  return (
    <div className="space-y-1.5">
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
  const scoreEntries = Object.entries(result.scores) as [ScoreAxis, number][];
  const combinedSections = [
    {
      title: "総合解釈",
      paragraphs: [
        ...result.sections.summary,
        ...result.sections.symbolMeaning,
        ...result.sections.psychology,
      ],
    },
    {
      title: "占い面の読み",
      paragraphs: result.sections.fortune,
    },
    {
      title: "注意点",
      paragraphs: result.sections.caution.slice(0, 1),
    },
    {
      title: "今のあなたへのヒント",
      paragraphs: result.sections.actionHint.slice(0, 1),
    },
  ];

  return (
    <section className="space-y-6 md:space-y-8">
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
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={onBack} className="ghost-button">
            <ArrowLeft size={18} aria-hidden="true" />
            回答を修正する
          </button>
          <button type="button" onClick={onRestart} className="ghost-button">
            <RotateCcw size={18} aria-hidden="true" />
            もう一度読む
          </button>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_18.5rem] lg:gap-6">
        <div className="space-y-4 md:space-y-[1.15rem]">
          {combinedSections.map((section) => (
            <article
              key={section.title}
              className="result-paper rounded-[1.45rem] p-5 text-ink-950 md:p-6"
            >
              <h3 className="result-heading mb-3.5 md:mb-4">{section.title}</h3>
              <div className="result-prose">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <aside className="space-y-4 md:space-y-[1.15rem]">
          <div className="result-sidepanel rounded-[1.32rem] p-4 md:p-[1.15rem]">
            <h3 className="mb-3 text-[0.98rem] font-semibold text-mist-50">選ばれた象徴</h3>
            <div className="flex flex-wrap gap-2">
              {result.selectedMotifs.length > 0 ? (
                result.selectedMotifs.map((motif) => (
                  <span
                    key={motif.id}
                    className="rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.08)] px-3 py-1 text-[0.84rem] text-mist-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
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
            <h3 className="mb-3 text-[0.98rem] font-semibold text-mist-50">解釈軸スコア</h3>
            <div className="space-y-3">
              {scoreEntries.map(([axis, value]) => (
                <AxisMeter key={axis} axis={axis} value={value} />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
