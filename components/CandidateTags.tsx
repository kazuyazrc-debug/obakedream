"use client";

import { ArrowLeft, Sparkles } from "lucide-react";
import type { ExtractedMotif } from "@/types/dream";

const fallbackMotifOptions = [
  { motifId: "being_chased", label: "何かに追われた" },
  { motifId: "falling", label: "高いところから落ちた" },
  { motifId: "school", label: "学校や教室にいた" },
  { motifId: "water", label: "水辺や海が印象に残った" },
  { motifId: "being_late", label: "遅刻しそうで焦った" },
  { motifId: "teeth", label: "歯が抜けた・折れた" },
  { motifId: "stranger", label: "知らない人が出てきた" },
  { motifId: "house", label: "家や部屋にいた" },
  { motifId: "family", label: "家族が出てきた" },
  { motifId: "searching", label: "何かを探していた" },
] as const;

type CandidateTagsProps = {
  candidates: ExtractedMotif[];
  selectedIds: string[];
  onToggle: (motifId: string) => void;
  onBack: () => void;
  onNext: () => void;
};

export function CandidateTags({
  candidates,
  selectedIds,
  onToggle,
  onBack,
  onNext,
}: CandidateTagsProps) {
  const selectedCount = selectedIds.length;
  const selectedCardClass =
    "border-spirit-200/80 bg-[linear-gradient(180deg,rgba(191,239,255,0.18),rgba(167,141,255,0.11)),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] shadow-[0_0_0_1px_rgba(204,235,255,0.2),0_18px_40px_rgba(0,0,0,0.18)]";
  const unselectedCardClass =
    "border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.04)),linear-gradient(135deg,rgba(18,24,40,0.76),rgba(11,14,24,0.84))] shadow-[0_14px_36px_rgba(0,0,0,0.16)] hover:border-white/24 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.11),rgba(255,255,255,0.05)),linear-gradient(135deg,rgba(18,24,40,0.78),rgba(11,14,24,0.86))]";

  return (
    <section className="space-y-6 md:space-y-7">
      <div className="flex items-center gap-3 text-mist-100">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-lavender-100 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
          <Sparkles size={20} aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm text-mist-300">Step 2</p>
          <h2 className="text-xl font-semibold tracking-[0.01em]">夢に合う候補タグを確認</h2>
        </div>
      </div>

      {candidates.length > 0 ? (
        <div className="grid gap-3 md:grid-cols-2">
          {candidates.map((candidate) => {
            const selected = selectedIds.includes(candidate.motif.id);

            return (
              <button
                key={candidate.motif.id}
                type="button"
                onClick={() => onToggle(candidate.motif.id)}
                className={`rounded-[1.2rem] border p-4 text-left transition ${
                  selected ? selectedCardClass : unselectedCardClass
                }`}
              >
                <span className="mb-2 flex items-center justify-between gap-3">
                  <span className="text-lg font-semibold text-mist-50">{candidate.motif.name}</span>
                  <span className="rounded-full bg-white/10 px-2 py-1 text-xs text-mist-300">
                    {selected ? "選択中" : "候補"}
                  </span>
                </span>
                <span className="block text-sm leading-6 text-mist-200">
                  {candidate.motif.basicMeaning}
                </span>
                <span className="mt-3 block text-xs text-mist-400">
                  検出語: {candidate.matchedTerms.join(" / ")}
                </span>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="ritual-subpanel rounded-[1.4rem] p-5 text-mist-200 md:p-6">
          <p className="font-medium text-mist-100">夢の言葉をそのまま書いてくれれば、ちゃんと読み解けます。</p>
          <p className="mt-2 text-sm leading-6 text-mist-300">
            場面・登場したもの・感じた気持ちを一つ足して再入力すると、候補が出やすくなります。
          </p>

          <div className="mt-4 rounded-xl border border-white/8 bg-white/4 p-4">
            <p className="mb-3 text-xs font-medium tracking-wider text-mist-400">こんなキーワードがあると読みやすくなります</p>
            <div className="space-y-2.5">
              {[
                { label: "動物", examples: ["蛇", "犬", "猫", "魚", "鳥", "虫"] },
                { label: "場所", examples: ["学校", "家", "海", "山", "駅", "病院"] },
                { label: "人物", examples: ["家族", "友人", "恋人", "知らない人", "子供"] },
                { label: "行動", examples: ["逃げる", "飛ぶ", "落ちる", "探す", "追われる"] },
              ].map(({ label, examples }) => (
                <div key={label} className="flex items-start gap-2.5">
                  <span className="mt-0.5 shrink-0 rounded-md bg-white/8 px-2 py-0.5 text-xs text-mist-400">{label}</span>
                  <span className="text-xs leading-5 text-mist-300">{examples.join("・")}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs leading-5 text-mist-400">
              例: 「駅で電車に乗り遅れそうで焦った」「学校の廊下を歩いていた」「元恋人と駅前で再会した」
            </p>
          </div>

          <div className="mt-5">
            <p className="mb-1.5 text-sm font-medium text-mist-200">
              よくある夢のテーマから近いものを選ぶこともできます
            </p>
            <p className="mb-3 text-xs leading-5 text-mist-400">
              ぴったり一致していなくても大丈夫です。近い印象のものを複数選んで進んでください。
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {fallbackMotifOptions.map((option) => {
                const selected = selectedIds.includes(option.motifId);

                return (
                  <button
                    key={option.motifId}
                    type="button"
                    onClick={() => onToggle(option.motifId)}
                    className={`rounded-[1.2rem] border p-4 text-left transition ${
                      selected ? selectedCardClass : unselectedCardClass
                    }`}
                  >
                    <span className="mb-2 flex items-center justify-between gap-3">
                      <span className="text-sm font-semibold text-mist-50">{option.label}</span>
                      <span className="rounded-full bg-white/10 px-2 py-1 text-xs text-mist-300">
                        {selected ? "選択中" : "候補"}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div className="pt-1 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        <button type="button" onClick={onBack} className="ghost-button">
          <ArrowLeft size={18} aria-hidden="true" />
          入力へ戻る
        </button>
        <button
          type="button"
          onClick={onNext}
          className="primary-button"
        >
          {selectedCount > 0 ? `${selectedCount}件で質問へ進む` : "タグなしで進む"}
        </button>
      </div>
    </section>
  );
}
