import { describe, expect, it } from "vitest";
import { motifRegistry } from "@/data/motifs";
import { extractMotifs } from "@/lib/dream-engine";
import { buildRelationReviewRecords, summarizeRelationReview } from "@/lib/dream-engine/rules/relationReview";
import { summarizeRegistryIssues, validateMotifRegistry } from "@/lib/dream-engine/rules/validateRegistry";
import { stage57ExtractionAuditCases } from "./fixtures/stage57";

const stage57MotifIds = [
  "remote_control",
  "water_bottle",
  "toothbrush",
  "keyhole",
  "doormat",
  "trash_can",
  "refrigerator",
  "living_room",
  "bedroom",
  "garage",
  "closet",
  "receiving",
  "borrowing",
  "lending",
  "throwing_away",
  "rabbit",
  "frog",
  "turtle",
  "nurse",
  "grandparent",
];

describe("Stage58 500 motif audit", () => {
  it("keeps the Stage58 registry and warning gates stable", () => {
    const summary = summarizeRegistryIssues(validateMotifRegistry());

    expect(motifRegistry.motifs.length).toBeGreaterThanOrEqual(500);
    expect(summary.error).toBe(0);
    expect(summary["warning-fix-soon"]).toBeLessThanOrEqual(184);
  });

  it("keeps display names unique after dish and plate clarification", () => {
    const displayNameEntries = new Map<string, string[]>();

    for (const motif of motifRegistry.motifs) {
      displayNameEntries.set(motif.name, [...(displayNameEntries.get(motif.name) ?? []), motif.id]);
    }

    const duplicateDisplayNames = [...displayNameEntries.entries()].filter(([, ids]) => ids.length > 1);

    expect(duplicateDisplayNames).toEqual([]);
  });

  it("keeps Stage57 relation records classified for the 500 motif audit", () => {
    const records = buildRelationReviewRecords();
    const summary = summarizeRelationReview(records);
    const stage57Records = records.filter(
      (record) => stage57MotifIds.includes(record.sourceId) || stage57MotifIds.includes(record.targetId),
    );

    expect(stage57Records.length).toBeGreaterThan(0);
    expect(stage57Records.every((record) => record.cluster !== "general")).toBe(true);
    expect(stage57Records.every((record) => record.reviewKind !== "stale-relation")).toBe(true);
    expect(summary.byCluster.general).toBe(0);
    expect(summary.byKind["stale-relation"]).toBe(0);
  });

  it("keeps Stage57 extraction audit fixtures intact during Stage58", () => {
    for (const auditCase of stage57ExtractionAuditCases) {
      const motifIds = extractMotifs(auditCase.text).map((candidate) => candidate.motif.id);
      const topSixMotifIds = motifIds.slice(0, 6);

      expect(motifIds).toEqual(expect.arrayContaining(auditCase.expectedMotifIds));

      for (const expectedTopSixMotifId of auditCase.expectedTopSixMotifIds ?? []) {
        expect(topSixMotifIds).toContain(expectedTopSixMotifId);
      }

      for (const unexpectedMotifId of auditCase.unexpectedMotifIds ?? []) {
        expect(motifIds).not.toContain(unexpectedMotifId);
      }
    }
  });
});
