import { describe, expect, it } from "vitest";
import { motifRegistry } from "@/data/motifs";
import { composeInterpretation, extractMotifs, findMotifsByIds, selectFollowUpQuestions } from "@/lib/dream-engine";
import { buildRelationReviewRecords, summarizeRelationReview } from "@/lib/dream-engine/rules/relationReview";
import { summarizeRegistryIssues, validateMotifRegistry } from "@/lib/dream-engine/rules/validateRegistry";
import {
  stage17BackHalfIds,
  stage17ExtractionAuditCases,
  stage17FrontHalfIds,
  stage17RepresentativeDreams,
} from "./fixtures/stage17";

const stage17Ids = [...stage17FrontHalfIds, ...stage17BackHalfIds];

describe("Stage17 batch-10", () => {
  it("keeps the Stage17 10 + 10 motifs registered", () => {
    const motifIds = motifRegistry.motifs.map((motif) => motif.id);

    expect(motifIds).toEqual(expect.arrayContaining(stage17Ids));
    expect(stage17FrontHalfIds).toHaveLength(10);
    expect(stage17BackHalfIds).toHaveLength(10);
  });

  it("keeps registry warning gates stable after Stage17", () => {
    const summary = summarizeRegistryIssues(validateMotifRegistry());

    expect(summary.error).toBe(0);
    expect(summary["warning-fix-soon"]).toBeLessThanOrEqual(188);
  });

  it("keeps Stage17 relations classified outside general and stale buckets", () => {
    const records = buildRelationReviewRecords().filter(
      (record) => stage17Ids.includes(record.sourceId as (typeof stage17Ids)[number]) ||
        stage17Ids.includes(record.targetId as (typeof stage17Ids)[number]),
    );
    const summary = summarizeRelationReview(buildRelationReviewRecords());

    expect(records.length).toBeGreaterThan(0);
    expect(records.every((record) => record.cluster !== "general")).toBe(true);
    expect(records.every((record) => record.reviewKind !== "stale-relation")).toBe(true);
    expect(summary.byCluster.general).toBe(0);
    expect(summary.byKind["stale-relation"]).toBe(0);
  });

  it.each(stage17ExtractionAuditCases)("extracts documented Stage17 audit case $id", (auditCase) => {
    const motifIds = extractMotifs(auditCase.text).map((candidate) => candidate.motif.id);

    expect(motifIds).toEqual(expect.arrayContaining(auditCase.expectedMotifIds));

    for (const unexpectedMotifId of auditCase.unexpectedMotifIds ?? []) {
      expect(motifIds).not.toContain(unexpectedMotifId);
    }
  });

  it.each(stage17RepresentativeDreams)("keeps Stage17 representative dream behavior for $id", (fixture) => {
    const motifIds = extractMotifs(fixture.input.text).map((candidate) => candidate.motif.id);
    const motifs = findMotifsByIds(fixture.selectedMotifIds);
    const questions = selectFollowUpQuestions(motifs, 5);
    const result = composeInterpretation(fixture.input, motifs, []);

    expect(motifIds).toEqual(expect.arrayContaining(fixture.expectedMotifIds));
    expect(questions.map((question) => question.id)).toEqual(fixture.expectedQuestionIds);
    expect(result.selectedMotifs.map((motif) => motif.id)).toEqual(fixture.selectedMotifIds);
    expect(result.sections.summary.length).toBeGreaterThan(0);
    expect(result.sections.symbolMeaning.length).toBeGreaterThan(0);
    expect(result.sections.psychology.length).toBeGreaterThan(0);
    expect(result.sections.fortune.length).toBeGreaterThan(0);
    expect(result.sections.caution.length).toBeGreaterThan(0);
    expect(result.sections.actionHint.length).toBeGreaterThan(0);
  });
});
