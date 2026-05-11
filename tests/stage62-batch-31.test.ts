import { describe, expect, it } from "vitest";
import { motifRegistry } from "@/data/motifs";
import { composeInterpretation, extractMotifs, findMotifsByIds, selectFollowUpQuestions } from "@/lib/dream-engine";
import { buildRelationReviewRecords, summarizeRelationReview } from "@/lib/dream-engine/rules/relationReview";
import { summarizeRegistryIssues, validateMotifRegistry } from "@/lib/dream-engine/rules/validateRegistry";
import {
  batch31MotifIds,
  stage62ExtractionAuditCases,
  stage62RepresentativeDreams,
} from "./fixtures/stage62";

describe("Stage62 batch-31", () => {
  it("registers the Stage62 batch and reaches 520 production motifs", () => {
    const motifIds = motifRegistry.motifs.map((motif) => motif.id);

    expect(motifRegistry.motifs).toHaveLength(520);
    expect(motifIds).toEqual(expect.arrayContaining(batch31MotifIds));
    expect(batch31MotifIds).toHaveLength(20);
  });

  it("keeps registry warning gates stable after the 520 motif expansion", () => {
    const summary = summarizeRegistryIssues(validateMotifRegistry());

    expect(summary.error).toBe(0);
    expect(summary["warning-fix-soon"]).toBeLessThanOrEqual(184);
  });

  it("keeps batch-31 relations classified outside general and stale buckets", () => {
    const records = buildRelationReviewRecords();
    const stage62Records = records.filter(
      (record) =>
        batch31MotifIds.includes(record.sourceId as (typeof batch31MotifIds)[number]) ||
        batch31MotifIds.includes(record.targetId as (typeof batch31MotifIds)[number]),
    );
    const summary = summarizeRelationReview(records);

    expect(stage62Records.length).toBeGreaterThan(0);
    expect(stage62Records.every((record) => record.cluster !== "general")).toBe(true);
    expect(stage62Records.every((record) => record.reviewKind !== "stale-relation")).toBe(true);
    expect(summary.byCluster.general).toBe(0);
    expect(summary.byKind["stale-relation"]).toBe(0);
  });

  it.each(stage62ExtractionAuditCases)("extracts documented Stage62 audit case $id", (auditCase) => {
    const motifIds = extractMotifs(auditCase.text).map((candidate) => candidate.motif.id);
    const topSixMotifIds = motifIds.slice(0, 6);

    expect(motifIds).toEqual(expect.arrayContaining(auditCase.expectedMotifIds));

    for (const expectedTopSixMotifId of auditCase.expectedTopSixMotifIds ?? []) {
      expect(topSixMotifIds).toContain(expectedTopSixMotifId);
    }
  });

  it.each(stage62RepresentativeDreams)("keeps Stage62 representative dream behavior for $id", (fixture) => {
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
