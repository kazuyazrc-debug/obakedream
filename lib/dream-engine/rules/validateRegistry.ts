import { motifRegistry } from "@/data/motifs";
import type {
  FollowUpQuestion,
  InterpretationSection,
  MotifBlockEntry,
  MotifDefinition,
  MotifLexiconEntry,
} from "@/types/dream";
import { scoreAxes } from "@/types/dream";
import { normalizeDreamText } from "../extract/normalize";

export type RegistryIssueSeverity = "error" | "warning-fix-soon" | "warning-review-ok" | "info";

export type RegistryIssueType =
  | "alias-duplicate"
  | "block-quality"
  | "dangerous-short-alias"
  | "duplicate-id"
  | "missing-data"
  | "one-way-relation"
  | "score-impact"
  | "unknown-reference"
  | "unused-data"
  | "weak-term-risk";

export type RegistryIssue = {
  severity: RegistryIssueSeverity;
  type: RegistryIssueType;
  message: string;
  motifId?: string;
  referenceId?: string;
  term?: string;
};

export type RegistryIssueSummary = Record<RegistryIssueSeverity, number>;

export type RegistryValidationTarget = {
  motifs: MotifDefinition[];
  aliases: MotifLexiconEntry[];
  questions: FollowUpQuestion[];
  blocks: MotifBlockEntry[];
};

export type RegistryValidationOptions = {
  target?: RegistryValidationTarget;
  includeInformational?: boolean;
};

const blockSections: InterpretationSection[] = [
  "summary",
  "symbolMeaning",
  "psychology",
  "fortune",
  "caution",
  "actionHint",
];

const decisiveTerms = ["絶対", "必ず", "確実に", "断言"];

function addIssue(issues: RegistryIssue[], issue: RegistryIssue) {
  issues.push(issue);
}

function findDuplicates(values: string[]): string[] {
  const counts = new Map<string, number>();

  for (const value of values) {
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }

  return [...counts.entries()].filter(([, count]) => count > 1).map(([value]) => value);
}

function validateDuplicateIds(target: RegistryValidationTarget, issues: RegistryIssue[]) {
  const groups = [
    { label: "motif", values: target.motifs.map((motif) => motif.id) },
    { label: "question", values: target.questions.map((question) => question.id) },
    { label: "alias entry", values: target.aliases.map((entry) => entry.motifId) },
    { label: "block entry", values: target.blocks.map((entry) => entry.motifId) },
  ];

  for (const group of groups) {
    for (const duplicate of findDuplicates(group.values)) {
      addIssue(issues, {
        severity: "error",
        type: "duplicate-id",
        message: `Duplicate ${group.label} id: ${duplicate}.`,
        motifId: duplicate,
      });
    }
  }
}

function validateMotifCoverage(
  target: RegistryValidationTarget,
  motifIds: Set<string>,
  issues: RegistryIssue[],
) {
  for (const motif of target.motifs) {
    const hasAlias = target.aliases.some((entry) => entry.motifId === motif.id);
    const hasQuestions = target.questions.some((question) => question.motifId === motif.id);
    const hasBlocks = target.blocks.some((entry) => entry.motifId === motif.id);

    if (!hasAlias || !hasQuestions || !hasBlocks) {
      addIssue(issues, {
        severity: "error",
        type: "missing-data",
        message: `${motif.id} is missing aliases, questions, or blocks.`,
        motifId: motif.id,
      });
    }

    for (const relation of [...(motif.conflicts ?? []), ...(motif.neighbors ?? [])]) {
      if (!motifIds.has(relation.motifId)) {
        addIssue(issues, {
          severity: "error",
          type: "unknown-reference",
          message: `${motif.id} references unknown motif ${relation.motifId}.`,
          motifId: motif.id,
          referenceId: relation.motifId,
        });
      }
    }
  }
}

function validateUnusedProductionData(
  target: RegistryValidationTarget,
  motifIds: Set<string>,
  issues: RegistryIssue[],
) {
  const entries = [
    ...target.aliases.map((entry) => ({ kind: "alias", motifId: entry.motifId })),
    ...target.questions.map((entry) => ({ kind: "question", motifId: entry.motifId })),
    ...target.blocks.map((entry) => ({ kind: "block", motifId: entry.motifId })),
  ];

  for (const entry of entries) {
    if (!motifIds.has(entry.motifId)) {
      addIssue(issues, {
        severity: "error",
        type: "unused-data",
        message: `Production ${entry.kind} references no registered motif: ${entry.motifId}.`,
        motifId: entry.motifId,
      });
    }
  }
}

function validateAliases(target: RegistryValidationTarget, issues: RegistryIssue[]) {
  const termOwners = new Map<string, string[]>();

  for (const entry of target.aliases) {
    const terms = [...entry.aliases, ...entry.priorityKeywords, ...entry.secondaryKeywords];

    for (const term of terms) {
      const normalized = normalizeDreamText(term);
      termOwners.set(normalized, [...(termOwners.get(normalized) ?? []), entry.motifId]);

      if ([...normalized].length <= 1) {
        addIssue(issues, {
          severity: "warning-fix-soon",
          type: "dangerous-short-alias",
          message: `"${term}" is very short and can cause broad matches.`,
          motifId: entry.motifId,
          term,
        });
      }
    }
  }

  for (const [term, owners] of termOwners.entries()) {
    const uniqueOwners = [...new Set(owners)];

    if (uniqueOwners.length > 1) {
      addIssue(issues, {
        severity: "warning-review-ok",
        type: "alias-duplicate",
        message: `"${term}" is used by multiple motifs: ${uniqueOwners.join(", ")}.`,
        term,
      });
    } else if (owners.length > 1) {
      addIssue(issues, {
        severity: "info",
        type: "alias-duplicate",
        message: `"${term}" appears multiple times for ${uniqueOwners[0]}.`,
        motifId: uniqueOwners[0],
        term,
      });
    }
  }
}

function validateWeakTerms(target: RegistryValidationTarget, issues: RegistryIssue[]) {
  for (const entry of target.aliases) {
    for (const term of entry.secondaryKeywords) {
      const normalized = normalizeDreamText(term);
      const termLength = [...normalized].length;

      if (termLength <= 2) {
        addIssue(issues, {
          severity: "warning-fix-soon",
          type: "weak-term-risk",
          message: `"${term}" is a short weak term and may overmatch when used alone.`,
          motifId: entry.motifId,
          term,
        });
      }
    }
  }
}

function validateRelationSymmetry(target: RegistryValidationTarget, issues: RegistryIssue[]) {
  const motifById = new Map(target.motifs.map((motif) => [motif.id, motif]));

  for (const motif of target.motifs) {
    for (const relation of motif.conflicts ?? []) {
      const other = motifById.get(relation.motifId);
      const reciprocal = other?.conflicts?.some((candidate) => candidate.motifId === motif.id);

      if (other && !reciprocal) {
        addIssue(issues, {
          severity: "warning-review-ok",
          type: "one-way-relation",
          message: `${motif.id} conflicts with ${other.id}, but the reverse conflict is not declared.`,
          motifId: motif.id,
          referenceId: other.id,
        });
      }
    }

    for (const relation of motif.neighbors ?? []) {
      const other = motifById.get(relation.motifId);
      const reciprocal = other?.neighbors?.some((candidate) => candidate.motifId === motif.id);

      if (other && !reciprocal) {
        addIssue(issues, {
          severity: "info",
          type: "one-way-relation",
          message: `${motif.id} neighbors ${other.id}, but the reverse neighbor is not declared.`,
          motifId: motif.id,
          referenceId: other.id,
        });
      }
    }
  }
}

function validateScoreImpact(target: RegistryValidationTarget, issues: RegistryIssue[]) {
  for (const motif of target.motifs) {
    const axes = Object.keys(motif.scoreImpact);

    if (axes.length === 0) {
      addIssue(issues, {
        severity: "warning-fix-soon",
        type: "score-impact",
        message: `${motif.id} has no motif scoreImpact.`,
        motifId: motif.id,
      });
    }

    for (const axis of axes) {
      if (!scoreAxes.includes(axis as (typeof scoreAxes)[number])) {
        addIssue(issues, {
          severity: "error",
          type: "score-impact",
          message: `${motif.id} uses unknown score axis: ${axis}.`,
          motifId: motif.id,
        });
      }
    }
  }

  for (const question of target.questions) {
    for (const option of question.options) {
      if (Object.keys(option.scoreImpact).length === 0) {
        addIssue(issues, {
          severity: "warning-fix-soon",
          type: "score-impact",
          message: `${question.id}/${option.id} has no scoreImpact.`,
          motifId: question.motifId,
          referenceId: option.id,
        });
      }
    }
  }
}

function validateBlocks(target: RegistryValidationTarget, issues: RegistryIssue[]) {
  for (const entry of target.blocks) {
    for (const section of blockSections) {
      const blocks = entry.blocks[section] ?? [];

      if (blocks.length === 0) {
        addIssue(issues, {
          severity: "error",
          type: "block-quality",
          message: `${entry.motifId} is missing ${section} blocks.`,
          motifId: entry.motifId,
        });
        continue;
      }

      for (const block of blocks) {
        if (block.trim().length < 18) {
          addIssue(issues, {
            severity: "warning-fix-soon",
            type: "block-quality",
            message: `${entry.motifId}/${section} has a very short block.`,
            motifId: entry.motifId,
          });
        }

        if (decisiveTerms.some((term) => block.includes(term))) {
          addIssue(issues, {
            severity: "warning-fix-soon",
            type: "block-quality",
            message: `${entry.motifId}/${section} contains overly decisive wording.`,
            motifId: entry.motifId,
          });
        }
      }
    }
  }
}

export function validateMotifRegistry(options: RegistryValidationOptions = {}): RegistryIssue[] {
  const target = options.target ?? motifRegistry;
  const motifIds = new Set(target.motifs.map((motif) => motif.id));
  const issues: RegistryIssue[] = [];

  validateDuplicateIds(target, issues);
  validateMotifCoverage(target, motifIds, issues);
  validateUnusedProductionData(target, motifIds, issues);
  validateAliases(target, issues);
  validateWeakTerms(target, issues);
  validateRelationSymmetry(target, issues);
  validateScoreImpact(target, issues);
  validateBlocks(target, issues);

  return options.includeInformational === false
    ? issues.filter((issue) => issue.severity !== "info")
    : issues;
}

export function getBlockingRegistryIssues(issues: RegistryIssue[]): RegistryIssue[] {
  return issues.filter((issue) => issue.severity === "error");
}

export function summarizeRegistryIssues(issues: RegistryIssue[]): RegistryIssueSummary {
  return issues.reduce<RegistryIssueSummary>(
    (summary, issue) => ({
      ...summary,
      [issue.severity]: summary[issue.severity] + 1,
    }),
    {
      error: 0,
      "warning-fix-soon": 0,
      "warning-review-ok": 0,
      info: 0,
    },
  );
}
