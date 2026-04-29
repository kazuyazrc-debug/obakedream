"use client";

import Link from "next/link";
import { useMemo, useRef, useState, useSyncExternalStore } from "react";
import { ArrowLeft, ChevronDown, ChevronUp, Copy, ExternalLink, Sparkles } from "lucide-react";
import {
  type AiDreamPromptInput,
  buildAiDreamPrompt,
} from "@/lib/dream-engine/prompt/buildAiDreamPrompt";
import { AI_DREAM_PROMPT_STORAGE_KEY } from "@/lib/dream-engine/prompt/storage";

export const aiServiceLinks = [
  {
    label: "ChatGPTで開く",
    description: "文章を整えて、読みやすく深掘りしたい時に",
    url: "https://chatgpt.com/",
    tone: "chat",
  },
  {
    label: "Geminiで開く",
    description: "軽く試したり、別視点の読みを見たい時に",
    url: "https://gemini.google.com/",
    tone: "sparkle",
  },
  {
    label: "Claudeで開く",
    description: "やさしい文章で、丁寧に読んでほしい時に",
    url: "https://claude.ai/",
    tone: "book",
  },
] as const;

export const AI_PROMPT_COPY_SUCCESS_MESSAGE =
  "コピーしました。次は開いたAI画面に貼り付けてください。";
export const AI_PROMPT_COPY_FAILURE_MESSAGE =
  "自動コピーできませんでした。夢読みメモ欄を長押し、または選択してコピーしてください。";

function parseStoredContext(value: string | null): AiDreamPromptInput | null {
  if (!value) {
    return null;
  }

  try {
    const parsed = JSON.parse(value) as Partial<AiDreamPromptInput>;
    if (typeof parsed.dreamText !== "string" || parsed.dreamText.trim().length === 0) {
      return null;
    }

    return {
      source: parsed.source === "result" ? "result" : "input",
      dreamText: parsed.dreamText,
      impression: typeof parsed.impression === "string" ? parsed.impression : undefined,
      extractedMotifs: Array.isArray(parsed.extractedMotifs) ? parsed.extractedMotifs : undefined,
      selectedMotifs: Array.isArray(parsed.selectedMotifs) ? parsed.selectedMotifs : undefined,
      topAxes: Array.isArray(parsed.topAxes) ? parsed.topAxes : undefined,
      summary: Array.isArray(parsed.summary) ? parsed.summary : undefined,
      symbolMeaning: Array.isArray(parsed.symbolMeaning) ? parsed.symbolMeaning : undefined,
      psychology: Array.isArray(parsed.psychology) ? parsed.psychology : undefined,
      fortune: Array.isArray(parsed.fortune) ? parsed.fortune : undefined,
      cautionAndAction: Array.isArray(parsed.cautionAndAction) ? parsed.cautionAndAction : undefined,
      encouragement: Array.isArray(parsed.encouragement) ? parsed.encouragement : undefined,
      drinkRecommendation:
        typeof parsed.drinkRecommendation === "object" && parsed.drinkRecommendation !== null
          ? parsed.drinkRecommendation
          : undefined,
    };
  } catch {
    return null;
  }
}

function readContextFromWindow(): AiDreamPromptInput | null {
  const sessionValue = window.sessionStorage.getItem(AI_DREAM_PROMPT_STORAGE_KEY);
  const sessionContext = parseStoredContext(sessionValue);
  if (sessionContext) {
    return sessionContext;
  }

  const localValue = window.localStorage.getItem(AI_DREAM_PROMPT_STORAGE_KEY);
  const localContext = parseStoredContext(localValue);
  if (localContext) {
    return localContext;
  }

  const namedContext = parseStoredContext(window.name);
  return namedContext ? { dreamText: namedContext.dreamText } : null;
}

export function AiPromptPanel() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [copyMessage, setCopyMessage] = useState<string | null>(null);
  const [isPromptOpen, setIsPromptOpen] = useState(false);
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  const context = useMemo(() => (mounted ? readContextFromWindow() : null), [mounted]);
  const prompt = useMemo(() => (context ? buildAiDreamPrompt(context) : ""), [context]);

  async function copyPrompt(): Promise<boolean> {
    if (!prompt) {
      return false;
    }

    try {
      await navigator.clipboard.writeText(prompt);
      setCopyMessage(AI_PROMPT_COPY_SUCCESS_MESSAGE);
      return true;
    } catch {
      const textarea = textareaRef.current;
      if (!textarea) {
        setIsPromptOpen(true);
        setCopyMessage(AI_PROMPT_COPY_FAILURE_MESSAGE);
        return false;
      }

      textarea.focus();
      textarea.select();
      try {
        const success = document.execCommand("copy");
        setCopyMessage(
          success
            ? AI_PROMPT_COPY_SUCCESS_MESSAGE
            : AI_PROMPT_COPY_FAILURE_MESSAGE,
        );
        return success;
      } catch {
        setCopyMessage(AI_PROMPT_COPY_FAILURE_MESSAGE);
        return false;
      }
    }
  }

  async function openAiService(url: string) {
    await copyPrompt();
    window.open(url, "_blank", "noopener,noreferrer");
  }

  if (mounted && !context) {
    return (
      <main className="relative mx-auto flex min-h-screen w-full max-w-4xl flex-col px-4 py-8 text-mist-50 sm:px-6 lg:px-8">
        <section className="ritual-panel rounded-[1.6rem] p-6 md:p-8">
          <p className="section-kicker">Dream note</p>
          <h1 className="mt-2 text-2xl font-semibold text-mist-50 md:text-3xl">
            夢の内容が見つかりませんでした
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-mist-200">
            前の画面に戻って、もう一度夢を入力してください。入力した内容を外部へ自動送信することはありません。
          </p>
          <Link href="/" className="ghost-button mt-6">
            <ArrowLeft size={18} aria-hidden="true" />
            前の画面へ戻る
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col px-4 py-6 text-mist-50 sm:px-6 lg:px-8">
      <section className="ai-prompt-shell rounded-[1.8rem] p-5 md:p-7">
        <div className="flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 text-lavender-100 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
            <Sparkles size={20} aria-hidden="true" />
          </span>
          <div>
            <p className="section-kicker">Dream note</p>
            <h1 className="mt-2 text-2xl font-semibold tracking-[0.01em] text-mist-50 md:text-3xl">
              AIに夢をもう少し深く読んでもらう
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-mist-200">
              この機能はAI APIを使用しません。夢読みメモをコピーして、ChatGPT / Gemini / Claude
              などに貼り付けて使うための補助機能です。
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <section className="ai-prompt-card rounded-[1.35rem] p-4 md:p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-mist-50">できあがった夢読みメモ</h2>
                <p className="mt-1 text-sm leading-6 text-mist-300">
                  コピーできない場合も、本文を選択して手動でコピーできます。
                </p>
              </div>
              <button type="button" onClick={copyPrompt} className="ai-copy-button">
                <Copy size={17} aria-hidden="true" />
                夢読みメモをコピー
              </button>
            </div>

            {copyMessage && (
              <div className="mt-3 rounded-2xl border border-spirit-200/18 bg-spirit-200/8 px-4 py-3 text-sm leading-6 text-spirit-100">
                {copyMessage}
              </div>
            )}

            <button
              type="button"
              onClick={() => setIsPromptOpen((current) => !current)}
              className="mt-4 flex w-full items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-left text-sm font-semibold text-mist-100 transition hover:border-white/20 hover:bg-white/9"
              aria-expanded={isPromptOpen}
            >
              <span>{isPromptOpen ? "夢読みメモを閉じる" : "夢読みメモの中身を見る"}</span>
              {isPromptOpen ? <ChevronUp size={18} aria-hidden="true" /> : <ChevronDown size={18} aria-hidden="true" />}
            </button>

            {isPromptOpen ? (
              <textarea
                ref={textareaRef}
                readOnly
                value={prompt}
                className="ai-prompt-textarea mt-4"
                aria-label="外部AIに貼り付ける夢読みメモ"
              />
            ) : (
              <div className="mt-4 rounded-[1.1rem] border border-white/8 bg-white/5 p-4 text-sm leading-6 text-mist-300">
                長い夢読みメモは閉じています。コピーはこのまま使えます。中身を確認したいときだけ開いてください。
              </div>
            )}
          </section>

          <aside className="ai-prompt-card rounded-[1.35rem] p-4 md:p-5">
            <h2 className="text-base font-semibold text-mist-50">AIリンク先</h2>
            <p className="mt-2 text-sm leading-6 text-mist-300">
              コピーした夢読みメモを、開いたAI画面に貼り付けてください。
            </p>
            <div className="mt-4 grid gap-3">
              {aiServiceLinks.map((service) => (
                <a
                  key={service.url}
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => {
                    event.preventDefault();
                    void openAiService(service.url);
                  }}
                  className={`ai-service-button ai-service-button--${service.tone}`}
                >
                  <span>
                    <span className="block">{service.label}</span>
                    <span className="mt-1 block text-xs font-normal leading-5 text-mist-300">
                      {service.description}
                    </span>
                  </span>
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-white/8 bg-white/5 p-4 text-xs leading-6 text-mist-300">
              このページは夢読みメモを作るだけです。夢の内容を外部AIへ自動送信したり、APIで解析したりすることはありません。
            </div>
          </aside>
        </div>

        <Link href="/" className="ghost-button mt-5">
          <ArrowLeft size={18} aria-hidden="true" />
          前の画面へ戻る
        </Link>
      </section>
    </main>
  );
}
