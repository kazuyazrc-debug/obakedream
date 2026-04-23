import { describe, expect, it } from "vitest";
import { motifRegistry } from "@/data/motifs";
import { composeInterpretation, extractMotifs, findMotifsByIds, selectFollowUpQuestions } from "@/lib/dream-engine";
import { buildRelationReviewRecords, summarizeRelationReview } from "@/lib/dream-engine/rules/relationReview";
import { summarizeRegistryIssues, validateMotifRegistry } from "@/lib/dream-engine/rules/validateRegistry";
import {
  stage25BackHalfIds,
  stage25ExtractionAuditCases,
  stage25FrontHalfIds,
  stage25RepresentativeDreams,
} from "./fixtures/stage25";

const stage25Ids = [...stage25FrontHalfIds, ...stage25BackHalfIds];
const forbiddenStage25Ids = [
  "whispering",
  "wound",
  "secret",
  "message",
  "bedroom",
  "bathroom",
  "medicine",
  "meeting",
  "office_room",
];

describe("Stage25 batch-14", () => {
  it("registers the 10 + 10 Stage25 motifs and keeps hold candidates out", () => {
    const motifIds = motifRegistry.motifs.map((motif) => motif.id);

    expect(motifIds).toEqual(expect.arrayContaining(stage25Ids));
    expect(stage25FrontHalfIds).toHaveLength(10);
    expect(stage25BackHalfIds).toHaveLength(10);

    for (const forbiddenId of forbiddenStage25Ids) {
      expect(motifIds).not.toContain(forbiddenId);
    }
  });

  it("keeps registry warning gates stable after Stage25", () => {
    const summary = summarizeRegistryIssues(validateMotifRegistry());

    expect(summary.error).toBe(0);
    expect(summary["warning-fix-soon"]).toBeLessThanOrEqual(188);
  });

  it("keeps Stage25 relations classified outside general and stale buckets", () => {
    const records = buildRelationReviewRecords().filter(
      (record) => stage25Ids.includes(record.sourceId as (typeof stage25Ids)[number]) ||
        stage25Ids.includes(record.targetId as (typeof stage25Ids)[number]),
    );
    const summary = summarizeRelationReview(buildRelationReviewRecords());

    expect(records.length).toBeGreaterThan(0);
    expect(records.every((record) => record.cluster !== "general")).toBe(true);
    expect(records.every((record) => record.reviewKind !== "stale-relation")).toBe(true);
    expect(summary.byCluster.general).toBe(0);
    expect(summary.byKind["stale-relation"]).toBe(0);
  });

  it("keeps Stage25 medical-adjacent copy non-diagnostic", () => {
    for (const motifId of ["needle", "glove", "comb"] as const) {
      const block = motifRegistry.blocks.find((entry) => entry.motifId === motifId);
      const alias = motifRegistry.aliases.find((entry) => entry.motifId === motifId);
      const blockText = Object.values(block?.blocks ?? {}).flat().join("\n");
      const aliasText = [
        ...(alias?.aliases ?? []),
        ...(alias?.priorityKeywords ?? []),
        ...(alias?.secondaryKeywords ?? []),
      ].join("\n");

      expect(blockText.length).toBeGreaterThan(0);
      expect(aliasText.length).toBeGreaterThan(0);
      expect(blockText).not.toContain("診断");
      expect(blockText).not.toContain("治療");
      expect(blockText).not.toContain("症状");
      expect(aliasText).not.toContain("診断");
      expect(aliasText).not.toContain("治療");
      expect(aliasText).not.toContain("症状");
    }
  });

  it.each(stage25ExtractionAuditCases)("extracts documented Stage25 audit case $id", (auditCase) => {
    const motifIds = extractMotifs(auditCase.text).map((candidate) => candidate.motif.id);

    expect(motifIds).toEqual(expect.arrayContaining(auditCase.expectedMotifIds));

    for (const unexpectedMotifId of auditCase.unexpectedMotifIds ?? []) {
      expect(motifIds).not.toContain(unexpectedMotifId);
    }
  });

  it.each(stage25RepresentativeDreams)("keeps Stage25 representative dream behavior for $id", (fixture) => {
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
