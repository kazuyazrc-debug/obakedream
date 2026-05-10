import { describe, expect, it } from "vitest";
import { motifRegistry } from "@/data/motifs";
import { composeInterpretation, extractMotifs, findMotifsByIds, selectFollowUpQuestions } from "@/lib/dream-engine";
import { buildRelationReviewRecords, summarizeRelationReview } from "@/lib/dream-engine/rules/relationReview";
import { summarizeRegistryIssues, validateMotifRegistry } from "@/lib/dream-engine/rules/validateRegistry";
import {
  batch28MotifIds,
  stage53ExtractionAuditCases,
  stage53RealDreamAuditCases,
  stage53RepresentativeDreams,
} from "./fixtures/stage53";

describe("Stage53 batch-28", () => {
  it("registers all batch-28 motifs", () => {
    const motifIds = motifRegistry.motifs.map((motif) => motif.id);

    expect(motifIds).toEqual(expect.arrayContaining(batch28MotifIds));
    expect(batch28MotifIds).toHaveLength(10);
  });

  it("keeps registry warning gates stable after batch-28 addition", () => {
    const summary = summarizeRegistryIssues(validateMotifRegistry());

    expect(summary.error).toBe(0);
    expect(summary["warning-fix-soon"]).toBeLessThanOrEqual(185);
  });

  it("keeps batch-28 relations classified outside general and stale buckets", () => {
    const records = buildRelationReviewRecords().filter(
      (record) =>
        batch28MotifIds.includes(record.sourceId as (typeof batch28MotifIds)[number]) ||
        batch28MotifIds.includes(record.targetId as (typeof batch28MotifIds)[number]),
    );
    const summary = summarizeRelationReview(buildRelationReviewRecords());

    expect(records.length).toBeGreaterThan(0);
    expect(records.every((record) => record.cluster !== "general")).toBe(true);
    expect(records.every((record) => record.reviewKind !== "stale-relation")).toBe(true);
    expect(summary.byCluster.general).toBe(0);
    expect(summary.byKind["stale-relation"]).toBe(0);
  });

  it("keeps batch-28 copy non-deterministic (no 絶対/必ず/断言/確実に)", () => {
    const forbiddenPhrases = ["絶対", "必ず", "断言", "確実に"];

    for (const motifId of batch28MotifIds) {
      const block = motifRegistry.blocks.find((entry) => entry.motifId === motifId);
      const blockText = Object.values(block?.blocks ?? {}).flat().join("\n");

      for (const phrase of forbiddenPhrases) {
        expect(blockText, `${motifId} contains forbidden phrase: ${phrase}`).not.toContain(phrase);
      }
    }
  });

  it.each(stage53ExtractionAuditCases)("extracts documented Stage53 audit case $id", (auditCase) => {
    const motifIds = extractMotifs(auditCase.text).map((candidate) => candidate.motif.id);

    expect(motifIds).toEqual(expect.arrayContaining(auditCase.expectedMotifIds));

    for (const unexpectedMotifId of auditCase.unexpectedMotifIds ?? []) {
      expect(motifIds).not.toContain(unexpectedMotifId);
    }
  });

  it.each(stage53RealDreamAuditCases)("keeps Stage53 real-dream extraction audit comparable for $id", (auditCase) => {
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

  it.each(stage53RepresentativeDreams)("keeps Stage53 representative dream behavior for $id", (fixture) => {
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
