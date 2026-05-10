import { describe, expect, it } from "vitest";
import { motifRegistry } from "@/data/motifs";
import { composeInterpretation, extractMotifs, findMotifsByIds, selectFollowUpQuestions } from "@/lib/dream-engine";
import { buildRelationReviewRecords, summarizeRelationReview } from "@/lib/dream-engine/rules/relationReview";
import { summarizeRegistryIssues, validateMotifRegistry } from "@/lib/dream-engine/rules/validateRegistry";
import {
  batch29DeferredMotifIds,
  batch29MotifIds,
  stage55ExtractionAuditCases,
  stage55RepresentativeDreams,
} from "./fixtures/stage55";

describe("Stage55 batch-29", () => {
  it("registers nine production motifs and keeps cemetery deferred", () => {
    const motifIds = motifRegistry.motifs.map((motif) => motif.id);

    expect(motifRegistry.motifs).toHaveLength(480);
    expect(motifIds).toEqual(expect.arrayContaining(batch29MotifIds));
    expect(batch29MotifIds).toHaveLength(9);

    for (const deferredMotifId of batch29DeferredMotifIds) {
      expect(motifIds).not.toContain(deferredMotifId);
    }
  });

  it("keeps registry warning gates stable after batch-29 addition", () => {
    const summary = summarizeRegistryIssues(validateMotifRegistry());

    expect(summary.error).toBe(0);
    expect(summary["warning-fix-soon"]).toBeLessThanOrEqual(188);
  });

  it("keeps batch-29 relations classified outside general and stale buckets", () => {
    const records = buildRelationReviewRecords().filter(
      (record) =>
        batch29MotifIds.includes(record.sourceId as (typeof batch29MotifIds)[number]) ||
        batch29MotifIds.includes(record.targetId as (typeof batch29MotifIds)[number]),
    );
    const summary = summarizeRelationReview(buildRelationReviewRecords());

    expect(records.length).toBeGreaterThan(0);
    expect(records.every((record) => record.cluster !== "general")).toBe(true);
    expect(records.every((record) => record.reviewKind !== "stale-relation")).toBe(true);
    expect(summary.byCluster.general).toBe(0);
    expect(summary.byKind["stale-relation"]).toBe(0);
  });

  it.each(stage55ExtractionAuditCases)("extracts documented Stage55 audit case $id", (auditCase) => {
    const motifIds = extractMotifs(auditCase.text).map((candidate) => candidate.motif.id);
    const topSixMotifIds = motifIds.slice(0, 6);

    expect(motifIds).toEqual(expect.arrayContaining(auditCase.expectedMotifIds));

    for (const expectedTopSixMotifId of auditCase.expectedTopSixMotifIds ?? []) {
      expect(topSixMotifIds).toContain(expectedTopSixMotifId);
    }

    for (const unexpectedMotifId of auditCase.unexpectedMotifIds ?? []) {
      expect(motifIds).not.toContain(unexpectedMotifId);
    }
  });

  it.each(stage55RepresentativeDreams)("keeps Stage55 representative dream behavior for $id", (fixture) => {
    const motifIds = extractMotifs(fixture.input.text).map((candidate) => candidate.motif.id);
    const motifs = findMotifsByIds(fixture.selectedMotifIds);
    const questions = selectFollowUpQuestions(motifs, 5);
    const result = composeInterpretation(fixture.input, motifs, []);

    expect(motifIds).toEqual(expect.arrayContaining(fixture.expectedMotifIds));
    expect(questions.map((question) => question.id)).toEqual(
      expect.arrayContaining(fixture.expectedQuestionIds),
    );
    expect(result.selectedMotifs.map((motif) => motif.id)).toEqual(fixture.selectedMotifIds);
    expect(result.sections.summary.length).toBeGreaterThan(0);
    expect(result.sections.symbolMeaning.length).toBeGreaterThan(0);
    expect(result.sections.psychology.length).toBeGreaterThan(0);
    expect(result.sections.fortune.length).toBeGreaterThan(0);
    expect(result.sections.caution.length).toBeGreaterThan(0);
    expect(result.sections.actionHint.length).toBeGreaterThan(0);
  });
});
