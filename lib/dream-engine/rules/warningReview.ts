import {
  classifyRelationReviewKind,
  type RelationReviewKind,
} from "./relationReview";
import type { RegistryIssue } from "./validateRegistry";

export const warningReviewReasonCategories = [
  "known-alias-overlap",
  "accepted-near-neighbor",
  "intentional-one-way-conflict",
  "generic-specific-review-ok",
  "context-helper-review-ok",
] as const;

export type WarningReviewReasonCategory = (typeof warningReviewReasonCategories)[number];

export type WarningReviewSummary = Record<WarningReviewReasonCategory, number>;

function categoryFromRelationKind(kind: RelationReviewKind): WarningReviewReasonCategory {
  switch (kind) {
    case "generic-specific":
      return "generic-specific-review-ok";
    case "should-be-conflict":
      return "intentional-one-way-conflict";
    case "should-be-reciprocal":
    case "intentional-one-way":
      return "accepted-near-neighbor";
    case "context-helper":
    case "stale-relation":
      return "context-helper-review-ok";
  }
}

export function classifyWarningReviewOkIssue(issue: RegistryIssue): WarningReviewReasonCategory | null {
  if (issue.severity !== "warning-review-ok") {
    return null;
  }

  if (issue.type === "alias-duplicate") {
    return "known-alias-overlap";
  }

  if (issue.type === "one-way-relation" && issue.motifId && issue.referenceId) {
    return categoryFromRelationKind(
      classifyRelationReviewKind(issue.motifId, issue.referenceId, "conflict"),
    );
  }

  return "context-helper-review-ok";
}

export function summarizeWarningReviewOkCategories(issues: RegistryIssue[]): WarningReviewSummary {
  return issues.reduce<WarningReviewSummary>(
    (summary, issue) => {
      const category = classifyWarningReviewOkIssue(issue);

      if (!category) {
        return summary;
      }

      return {
        ...summary,
        [category]: summary[category] + 1,
      };
    },
    Object.fromEntries(warningReviewReasonCategories.map((category) => [category, 0])) as WarningReviewSummary,
  );
}

export function summarizeInfoIssueTypes(issues: RegistryIssue[]) {
  return issues.reduce(
    (summary, issue) => {
      if (issue.severity !== "info") {
        return summary;
      }

      if (issue.type === "one-way-relation") {
        return { ...summary, relationInfo: summary.relationInfo + 1 };
      }

      if (issue.type === "alias-duplicate") {
        return { ...summary, aliasInfo: summary.aliasInfo + 1 };
      }

      return { ...summary, otherInfo: summary.otherInfo + 1 };
    },
    { relationInfo: 0, aliasInfo: 0, otherInfo: 0 },
  );
}
