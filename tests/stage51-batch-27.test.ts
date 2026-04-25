import { describe, expect, it } from "vitest";
import { motifRegistry } from "@/data/motifs";
import { composeInterpretation, extractMotifs, findMotifsByIds, selectFollowUpQuestions } from "@/lib/dream-engine";
import { buildRelationReviewRecords, summarizeRelationReview } from "@/lib/dream-engine/rules/relationReview";
import { summarizeRegistryIssues, validateMotifRegistry } from "@/lib/dream-engine/rules/validateRegistry";
import {
  batch27MotifIds,
  stage51ExtractionAuditCases,
  stage51RealDreamAuditCases,
  stage51RepresentativeDreams,
} from "./fixtures/stage51";

describe("Stage51 batch-27", () => {
  it("registers all batch-27 motifs", () => {
    const motifIds = motifRegistry.motifs.map((motif) => motif.id);

    expect(motifIds).toEqual(expect.arrayContaining(batch27MotifIds));
    expect(batch27MotifIds).toHaveLength(10);
  });

  it("keeps registry warning gates stable after batch-27 addition", () => {
    const summary = summarizeRegistryIssues(validateMotifRegistry());

    expect(summary.error).toBe(0);
    expect(summary["warning-fix-soon"]).toBeLessThanOrEqual(184);
  });

  it("keeps batch-27 relations classified outside general and stale buckets", () => {
    const records = buildRelationReviewRecords().filter(
      (record) =>
        batch27MotifIds.includes(record.sourceId as (typeof batch27MotifIds)[number]) ||
        batch27MotifIds.includes(record.targetId as (typeof batch27MotifIds)[number]),
    );
    const summary = summarizeRelationReview(buildRelationReviewRecords());

    expect(records.length).toBeGreaterThan(0);
    expect(records.every((record) => record.cluster !== "general")).toBe(true);
    expect(records.every((record) => record.reviewKind !== "stale-relation")).toBe(true);
    expect(summary.byCluster.general).toBe(0);
    expect(summary.byKind["stale-relation"]).toBe(0);
  });

  it("keeps batch-27 copy non-deterministic (no 絶対/必ず/断言/確実に)", () => {
    const forbiddenPhrases = ["絶対", "必ず", "断言", "確実に"];

    for (const motifId of batch27MotifIds) {
      const block = motifRegistry.blocks.find((entry) => entry.motifId === motifId);
      const blockText = Object.values(block?.blocks ?? {}).flat().join("\n");

      for (const phrase of forbiddenPhrases) {
        expect(blockText, `${motifId} contains forbidden phrase: ${phrase}`).not.toContain(phrase);
      }
    }
  });

  it.each(stage51ExtractionAuditCases)("extracts documented Stage51 audit case $id", (auditCase) => {
    const motifIds = extractMotifs(auditCase.text).map((candidate) => candidate.motif.id);

    expect(motifIds).toEqual(expect.arrayContaining(auditCase.expectedMotifIds));

    for (const unexpectedMotifId of auditCase.unexpectedMotifIds ?? []) {
      expect(motifIds).not.toContain(unexpectedMotifId);
    }
  });

  it.each(stage51RealDreamAuditCases)("keeps Stage51 real-dream extraction audit comparable for $id", (auditCase) => {
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

  it.each(stage51RepresentativeDreams)("keeps Stage51 representative dream behavior for $id", (fixture) => {
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
