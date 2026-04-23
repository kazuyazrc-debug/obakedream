import { describe, expect, it } from "vitest";
import {
  getBlockingRegistryIssues,
  summarizeRegistryIssues,
  validateMotifRegistry,
} from "@/lib/dream-engine/rules/validateRegistry";
import {
  classifyWarningReviewOkIssue,
  summarizeInfoIssueTypes,
  summarizeWarningReviewOkCategories,
} from "@/lib/dream-engine/rules/warningReview";

describe("registry validation", () => {
  it("has no production blocking issues", () => {
    const issues = validateMotifRegistry();

    expect(getBlockingRegistryIssues(issues)).toEqual([]);
  });

  it("reports warning and info diagnostics without making them blocking", () => {
    const issues = validateMotifRegistry();
    const severities = new Set(issues.map((issue) => issue.severity));
    const summary = summarizeRegistryIssues(issues);

    expect(severities.has("error")).toBe(false);
    expect(summary.error).toBe(0);
    expect(summary["warning-fix-soon"]).toBeGreaterThan(0);
    expect(summary["warning-fix-soon"]).toBeLessThanOrEqual(188);
    expect(
      [...severities].every((severity) =>
        ["warning-fix-soon", "warning-review-ok", "info"].includes(severity),
      ),
    ).toBe(true);
  });

  it("classifies short weak terms as warning-fix-soon", () => {
    const issues = validateMotifRegistry();

    expect(issues).toContainEqual(
      expect.objectContaining({
        severity: "warning-fix-soon",
        type: "weak-term-risk",
      }),
    );
  });

  it("keeps every warning-review-ok issue assigned to a review reason category", () => {
    const issues = validateMotifRegistry();
    const summary = summarizeRegistryIssues(issues);
    const warningReviewOkIssues = issues.filter((issue) => issue.severity === "warning-review-ok");
    const categorySummary = summarizeWarningReviewOkCategories(issues);

    expect(warningReviewOkIssues).toHaveLength(summary["warning-review-ok"]);
    expect(warningReviewOkIssues.every((issue) => classifyWarningReviewOkIssue(issue) !== null)).toBe(true);
    expect(categorySummary["known-alias-overlap"]).toBeGreaterThan(0);
    expect(categorySummary["generic-specific-review-ok"]).toBeGreaterThan(0);
  });

  it("separates relation info from alias info for review visibility", () => {
    const infoSummary = summarizeInfoIssueTypes(validateMotifRegistry());

    expect(infoSummary.relationInfo).toBeGreaterThan(0);
    expect(infoSummary.aliasInfo).toBeGreaterThan(0);
    expect(infoSummary.otherInfo).toBe(0);
  });

  it("treats production data that references no motif as an error", () => {
    const issues = validateMotifRegistry({
      target: {
        motifs: [],
        aliases: [{ motifId: "sample", aliases: ["sample"], priorityKeywords: [], secondaryKeywords: [] }],
        questions: [],
        blocks: [],
      },
    });

    expect(issues).toContainEqual(
      expect.objectContaining({
        severity: "error",
        type: "unused-data",
        motifId: "sample",
      }),
    );
  });
});
