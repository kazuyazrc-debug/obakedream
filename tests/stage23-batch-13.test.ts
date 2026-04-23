import { describe, expect, it } from "vitest";
import { motifRegistry } from "@/data/motifs";
import { composeInterpretation, extractMotifs, findMotifsByIds, selectFollowUpQuestions } from "@/lib/dream-engine";
import { buildRelationReviewRecords, summarizeRelationReview } from "@/lib/dream-engine/rules/relationReview";
import { summarizeRegistryIssues, validateMotifRegistry } from "@/lib/dream-engine/rules/validateRegistry";
import {
  stage23BackHalfIds,
  stage23ExtractionAuditCases,
  stage23FrontHalfIds,
  stage23RepresentativeDreams,
} from "./fixtures/stage23";

const stage23Ids = [...stage23FrontHalfIds, ...stage23BackHalfIds];

describe("Stage23 batch-13", () => {
  it("keeps the 10 + 10 Stage23 motifs registered", () => {
    const motifIds = motifRegistry.motifs.map((motif) => motif.id);

    expect(motifIds).toEqual(expect.arrayContaining(stage23Ids));
    expect(stage23FrontHalfIds).toHaveLength(10);
    expect(stage23BackHalfIds).toHaveLength(10);
  });

  it("keeps registry warning gates stable after Stage23", () => {
    const summary = summarizeRegistryIssues(validateMotifRegistry());

    expect(summary.error).toBe(0);
    expect(summary["warning-fix-soon"]).toBeLessThanOrEqual(188);
  });

  it("keeps Stage23 relations classified outside general and stale buckets", () => {
    const records = buildRelationReviewRecords().filter(
      (record) => stage23Ids.includes(record.sourceId as (typeof stage23Ids)[number]) ||
        stage23Ids.includes(record.targetId as (typeof stage23Ids)[number]),
    );
    const summary = summarizeRelationReview(buildRelationReviewRecords());

    expect(records.length).toBeGreaterThan(0);
    expect(records.every((record) => record.cluster !== "general")).toBe(true);
    expect(records.every((record) => record.reviewKind !== "stale-relation")).toBe(true);
    expect(summary.byCluster.general).toBe(0);
    expect(summary.byKind["stale-relation"]).toBe(0);
  });

  it("keeps shoulder and ankle non-diagnostic in copy and aliases", () => {
    for (const motifId of ["shoulder", "ankle"] as const) {
      const block = motifRegistry.blocks.find((entry) => entry.motifId === motifId);
      const alias = motifRegistry.aliases.find((entry) => entry.motifId === motifId);
      const question = motifRegistry.questions.find((entry) => entry.motifId === motifId);
      const blockText = Object.values(block?.blocks ?? {}).flat().join("\n");
      const aliasText = [
        ...(alias?.aliases ?? []),
        ...(alias?.priorityKeywords ?? []),
        ...(alias?.secondaryKeywords ?? []),
      ].join("\n");

      expect(blockText).toContain("体調");
      expect(question?.prompt.length).toBeGreaterThan(0);
      expect(blockText).not.toContain("診断");
      expect(blockText).not.toContain("治療");
      expect(blockText).not.toContain("症状");
      expect(aliasText).not.toContain("診断");
      expect(aliasText).not.toContain("治療");
      expect(aliasText).not.toContain("症状");
    }
  });

  it.each(stage23ExtractionAuditCases)("extracts documented Stage23 audit case $id", (auditCase) => {
    const motifIds = extractMotifs(auditCase.text).map((candidate) => candidate.motif.id);

    expect(motifIds).toEqual(expect.arrayContaining(auditCase.expectedMotifIds));

    for (const unexpectedMotifId of auditCase.unexpectedMotifIds ?? []) {
      expect(motifIds).not.toContain(unexpectedMotifId);
    }
  });

  it.each(stage23RepresentativeDreams)("keeps Stage23 representative dream behavior for $id", (fixture) => {
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
