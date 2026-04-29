export type AiDreamPromptMotif = {
  id: string;
  label: string;
  score?: number;
};

export type AiDreamPromptAxis = {
  axis: string;
  label?: string;
  score?: number;
};

export type AiDreamPromptInput = {
  source?: "input" | "result";
  dreamText: string;
  impression?: string;
  extractedMotifs?: AiDreamPromptMotif[];
  selectedMotifs?: Array<{ id: string; label: string }>;
  topAxes?: AiDreamPromptAxis[];
  summary?: string[];
  symbolMeaning?: string[];
  psychology?: string[];
  fortune?: string[];
  cautionAndAction?: string[];
  encouragement?: string[];
  drinkRecommendation?: {
    morning?: string;
    afternoon?: string;
  };
};

function cleanText(value: unknown): string {
  return typeof value === "string" && value.trim().length > 0 ? value.trim() : "Not provided";
}

function formatMotifs(motifs: AiDreamPromptMotif[] | undefined): string {
  if (!motifs || motifs.length === 0) {
    return "Not provided";
  }

  return motifs
    .map((motif) => {
      const score = typeof motif.score === "number" ? `, score: ${Number(motif.score.toFixed(2))}` : "";
      return `- ${cleanText(motif.label)} (id: ${cleanText(motif.id)}${score})`;
    })
    .join("\n");
}

function formatAxes(axes: AiDreamPromptAxis[] | undefined): string {
  if (!axes || axes.length === 0) {
    return "Not provided";
  }

  return axes
    .map((axis) => {
      const label = axis.label ? `, label: ${cleanText(axis.label)}` : "";
      const score = typeof axis.score === "number" ? `, score: ${Number(axis.score.toFixed(2))}` : "";
      return `- ${cleanText(axis.axis)}${label}${score}`;
    })
    .join("\n");
}

function formatLines(lines: string[] | undefined): string {
  if (!lines || lines.length === 0) {
    return "Not provided";
  }

  return lines
    .map((line) => cleanText(line))
    .filter((line) => line !== "Not provided")
    .map((line) => `- ${line}`)
    .join("\n") || "Not provided";
}

function formatSelectedMotifs(motifs: Array<{ id: string; label: string }> | undefined): string {
  if (!motifs || motifs.length === 0) {
    return "Not provided";
  }

  return motifs.map((motif) => `- ${cleanText(motif.label)} (id: ${cleanText(motif.id)})`).join("\n");
}

function formatDrinkRecommendation(
  drinkRecommendation: AiDreamPromptInput["drinkRecommendation"],
): string {
  if (!drinkRecommendation?.morning && !drinkRecommendation?.afternoon) {
    return "Not provided";
  }

  return [
    drinkRecommendation.morning ? `- Morning: ${cleanText(drinkRecommendation.morning)}` : undefined,
    drinkRecommendation.afternoon ? `- Afternoon: ${cleanText(drinkRecommendation.afternoon)}` : undefined,
  ]
    .filter((line): line is string => Boolean(line))
    .join("\n");
}

function buildOutputFormatAndRules(hasResultContext: boolean): string {
  return `# Output format
Please write the result in Japanese using the following structure:

1. 夢全体の読み
2. 印象に残った象徴の意味
3. 今日できる小さな行動
4. 最後にやさしい一言
5. 夢を読み取った上で、相手に合わせておすすめの飲み物を「今日の飲み物」として提案

# Rules
- Output must be written in Japanese.
- Do not write it as a medical diagnosis.
- Do not write it as a psychological diagnosis.
- Do not create fear or anxiety.
- Write it as fortune-telling, self-reflection, and a gentle reading.
- Speak as if a kind little ghost is gently talking to a human.
- Keep the writing soft, kind, and slightly mystical.
${hasResultContext ? "- If an existing app reading is provided, use it as context and avoid contradicting it unnecessarily.\n" : ""}- Do not mention that you are an AI unless necessary.
- If the detected motifs seem incomplete, gently interpret the dream based on the dream text itself.`;
}

export function buildAiDreamPrompt(input: AiDreamPromptInput): string {
  const source = input.source ?? "input";
  const dreamText = cleanText(input.dreamText);
  const impression = cleanText(input.impression);
  const extractedMotifs = formatMotifs(input.extractedMotifs);
  const selectedMotifs = formatSelectedMotifs(input.selectedMotifs);
  const topAxes = formatAxes(input.topAxes);
  const hasResultContext = source === "result";

  if (hasResultContext) {
    return `You are a gentle and thoughtful dream-reading guide.
Please interpret the following dream as a piece of fortune-telling and self-reflection, not as a medical or psychological diagnosis.

This prompt includes an existing rule-based dream reading from the app.
Please use it as context.
Do not contradict it unnecessarily.
Add a gentle deeper reading based on the dream and the existing reading.

Do not make deterministic claims.
Do not create fear.
Write with a soft, slightly mystical tone, as if a kind little ghost is speaking gently to a human.

# Dream
${dreamText}

# Dream impression
${impression}

# Selected motifs
${selectedMotifs}

# Interpretation axis scores
${topAxes}

# Existing rule-based dream reading from the app

## Overall reading
${formatLines(input.summary)}

## Symbol meanings
${formatLines(input.symbolMeaning)}

## Psychological reading
${formatLines(input.psychology)}

## Fortune-like flow
${formatLines(input.fortune)}

## Things to be mindful of / small action
${formatLines(input.cautionAndAction)}

## Message for the dreamer
${formatLines(input.encouragement)}

## Drink recommendation
${formatDrinkRecommendation(input.drinkRecommendation)}

${buildOutputFormatAndRules(true)}`;
  }

  return `You are a gentle and thoughtful dream-reading guide.
Please interpret the following dream as a piece of fortune-telling and self-reflection, not as a medical or psychological diagnosis.

Do not make deterministic claims.
Do not create fear.
Write with a soft, slightly mystical tone, as if a kind little ghost is speaking gently to a human.

# Dream
${dreamText}

# Dream impression
${impression}

# Automatically detected dream motifs
${extractedMotifs}

# Possible interpretation axis scores
${topAxes}

${buildOutputFormatAndRules(false)}`;
}
