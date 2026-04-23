"use client";

import { Moon, Search } from "lucide-react";
import type { DreamImpression, DreamInput, MemoryClarity } from "@/types/dream";

const impressionOptions: { value: DreamImpression; label: string }[] = [
  { value: "scary", label: "怖い" },
  { value: "uneasy", label: "不安" },
  { value: "happy", label: "嬉しい" },
  { value: "nostalgic", label: "懐かしい" },
  { value: "confused", label: "混乱" },
  { value: "calm", label: "平静" },
];

const clarityOptions: { value: MemoryClarity; label: string }[] = [
  { value: "vague", label: "ぼんやり" },
  { value: "partial", label: "一部はっきり" },
  { value: "clear", label: "かなり鮮明" },
];

type DreamInputFormProps = {
  value: DreamInput;
  onChange: (input: DreamInput) => void;
  onAnalyze: () => void;
};

export function DreamInputForm({ value, onChange, onAnalyze }: DreamInputFormProps) {
  const canAnalyze = value.text.trim().length >= 4;

  return (
    <section className="space-y-6 md:space-y-7">
      <div className="flex items-center gap-3 text-mist-100">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-lavender-100 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
          <Moon size={20} aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm text-mist-300">Step 1</p>
          <h2 className="text-xl font-semibold tracking-[0.01em]">夢の内容を聞かせてください</h2>
        </div>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-mist-200">自由記入：内容やキーワードを記載してください</span>
        <textarea
          value={value.text}
          onChange={(event) => onChange({ ...value, text: event.target.value })}
          rows={8}
          className="min-h-56 w-full resize-y rounded-[1.4rem] border border-white/18 bg-[linear-gradient(180deg,rgba(198,205,224,0.24),rgba(164,173,198,0.2)),radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_58%)] px-5 py-5 text-base leading-8 text-mist-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_40px_rgba(0,0,0,0.16)] outline-none transition placeholder:text-mist-300/60 focus:border-lavender-300/60 focus:ring-4 focus:ring-lavender-300/12"
          placeholder="例：実家の近くで白い蛇に追われ、海の方へ逃げた夢を見ました。怖かったけれど、最後は朝焼けが見えました。"
        />
        <span className="mt-3 block text-sm leading-6 text-mist-300">
          短く書いてもOK / 長く書いてもOKです。場所・相手・気持ちのどれか一つ入ると読み取りやすくなります。
        </span>
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        <fieldset className="ritual-soft-card space-y-3 rounded-[1.35rem] px-4 py-4 md:px-5 md:py-5">
          <legend className="px-1 text-sm font-medium text-mist-200">夢の印象</legend>
          <div className="grid grid-cols-3 gap-2">
            {impressionOptions.map((option) => (
              <label key={option.value} className="choice-pill">
                <input
                  type="radio"
                  name="impression"
                  value={option.value}
                  checked={value.impression === option.value}
                  onChange={() => onChange({ ...value, impression: option.value })}
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="ritual-soft-card space-y-3 rounded-[1.35rem] px-4 py-4 md:px-5 md:py-5">
          <legend className="px-1 text-sm font-medium text-mist-200">覚えている度合い</legend>
          <div className="grid gap-2">
            {clarityOptions.map((option) => (
              <label key={option.value} className="choice-pill justify-start">
                <input
                  type="radio"
                  name="clarity"
                  value={option.value}
                  checked={value.clarity === option.value}
                  onChange={() => onChange({ ...value, clarity: option.value })}
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <label className="ritual-soft-card flex items-start gap-3 rounded-[1.35rem] px-4 py-3.5 text-mist-100">
        <input
          type="checkbox"
          checked={value.recurring}
          onChange={(event) => onChange({ ...value, recurring: event.target.checked })}
          className="mt-1 h-5 w-5 shrink-0 accent-lavender-300"
        />
        <span>
          <span className="block text-sm font-medium">繰り返し見る夢ですか？</span>
          <span className="mt-1 block text-sm leading-6 text-mist-300">
            繰り返す夢は未解決感の軸を少し強めます。
          </span>
        </span>
      </label>

      <button
        type="button"
        onClick={onAnalyze}
        disabled={!canAnalyze}
        className="primary-button w-full md:w-auto"
      >
        <Search size={18} aria-hidden="true" />
        モチーフを確定し占いへ進む
      </button>
    </section>
  );
}
