import type { InterpretationResult } from "@/types/dream";

export function uniqueParagraphs(paragraphs: Array<string | undefined>, limit: number): string[] {
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

export function buildBalancedSummaryLines(result: InterpretationResult): string[] {
  const { summary, symbolMeaning, psychology, fortune } = result.sections;
  const n = result.selectedMotifs.length;

  if (n <= 1) {
    return uniqueParagraphs(
      [summary[0], summary[1], symbolMeaning[0], psychology[0], fortune[0], summary[2]],
      5,
    );
  }

  if (n === 2) {
    // sym[0]=m0, sym[1]=m1 → both motifs get symbolMeaning depth after their summary opener
    // psy[0] = pair block if one exists (pair blocks are prepended before motif blocks)
    return uniqueParagraphs(
      [summary[0], summary[1], symbolMeaning[0], symbolMeaning[1], psychology[0], fortune[0]],
      5,
    );
  }

  // 3+ motifs: summary limit=3 gives one opener per motif; then draw the first two
  // psychology slots — psy[0] surfaces pair blocks when defined, psy[1] covers the
  // second motif's psychology block in the interleaved order.
  return uniqueParagraphs(
    [summary[0], summary[1], summary[2], psychology[0], psychology[1]],
    5,
  );
}
