import { describe, expect, it } from "vitest";
import { motifRegistry } from "@/data/motifs";
import { composeInterpretation, extractMotifs, findMotifsByIds, selectFollowUpQuestions } from "@/lib/dream-engine";
import { buildRelationReviewRecords, summarizeRelationReview } from "@/lib/dream-engine/rules/relationReview";
import { summarizeRegistryIssues, validateMotifRegistry } from "@/lib/dream-engine/rules/validateRegistry";
import {
  stage19BackHalfIds,
  stage19ExtractionAuditCases,
  stage19FrontHalfIds,
  stage19RepresentativeDreams,
} from "./fixtures/stage19";

const stage19Ids = [...stage19FrontHalfIds, ...stage19BackHalfIds];

describe("Stage19 batch-11", () => {
  it("keeps the 10 + 10 Stage19 motifs registered", () => {
    const motifIds = motifRegistry.motifs.map((motif) => motif.id);

    expect(motifIds).toEqual(expect.arrayContaining(stage19Ids));
    expect(stage19FrontHalfIds).toHaveLength(10);
    expect(stage19BackHalfIds).toHaveLength(10);
  });

  it("keeps registry warning gates stable after Stage19", () => {
    const summary = summarizeRegistryIssues(validateMotifRegistry());

    expect(summary.error).toBe(0);
    expect(summary["warning-fix-soon"]).toBeLessThanOrEqual(188);
  });

  it("keeps Stage19 relations classified outside general and stale buckets", () => {
    const records = buildRelationReviewRecords().filter(
      (record) => stage19Ids.includes(record.sourceId as (typeof stage19Ids)[number]) ||
        stage19Ids.includes(record.targetId as (typeof stage19Ids)[number]),
    );
    const summary = summarizeRelationReview(buildRelationReviewRecords());

    expect(records.length).toBeGreaterThan(0);
    expect(records.every((record) => record.cluster !== "general")).toBe(true);
    expect(records.every((record) => record.reviewKind !== "stale-relation")).toBe(true);
    expect(summary.byCluster.general).toBe(0);
    expect(summary.byKind["stale-relation"]).toBe(0);
  });

  it.each(stage19ExtractionAuditCases)("extracts documented Stage19 audit case $id", (auditCase) => {
    const motifIds = extractMotifs(auditCase.text).map((candidate) => candidate.motif.id);

    expect(motifIds).toEqual(expect.arrayContaining(auditCase.expectedMotifIds));

    for (const unexpectedMotifId of auditCase.unexpectedMotifIds ?? []) {
      expect(motifIds).not.toContain(unexpectedMotifId);
    }
  });

  it.each(stage19RepresentativeDreams)("keeps Stage19 representative dream behavior for $id", (fixture) => {
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
