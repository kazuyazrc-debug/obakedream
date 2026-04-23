import { describe, expect, it } from "vitest";
import { motifRegistry } from "@/data/motifs";
import { composeInterpretation, extractMotifs, findMotifsByIds, selectFollowUpQuestions } from "@/lib/dream-engine";
import { buildRelationReviewRecords, summarizeRelationReview } from "@/lib/dream-engine/rules/relationReview";
import { summarizeRegistryIssues, validateMotifRegistry } from "@/lib/dream-engine/rules/validateRegistry";
import {
  stage21BackHalfIds,
  stage21ExtractionAuditCases,
  stage21FrontHalfIds,
  stage21RepresentativeDreams,
} from "./fixtures/stage21";

const stage21Ids = [...stage21FrontHalfIds, ...stage21BackHalfIds];

describe("Stage21 batch-12", () => {
  it("keeps the 10 + 10 Stage21 motifs registered", () => {
    const motifIds = motifRegistry.motifs.map((motif) => motif.id);

    expect(motifIds).toEqual(expect.arrayContaining(stage21Ids));
    expect(stage21FrontHalfIds).toHaveLength(10);
    expect(stage21BackHalfIds).toHaveLength(10);
  });

  it("keeps registry warning gates stable after Stage21", () => {
    const summary = summarizeRegistryIssues(validateMotifRegistry());

    expect(summary.error).toBe(0);
    expect(summary["warning-fix-soon"]).toBeLessThanOrEqual(188);
  });

  it("keeps Stage21 relations classified outside general and stale buckets", () => {
    const records = buildRelationReviewRecords().filter(
      (record) => stage21Ids.includes(record.sourceId as (typeof stage21Ids)[number]) ||
        stage21Ids.includes(record.targetId as (typeof stage21Ids)[number]),
    );
    const summary = summarizeRelationReview(buildRelationReviewRecords());

    expect(records.length).toBeGreaterThan(0);
    expect(records.every((record) => record.cluster !== "general")).toBe(true);
    expect(records.every((record) => record.reviewKind !== "stale-relation")).toBe(true);
    expect(summary.byCluster.general).toBe(0);
    expect(summary.byKind["stale-relation"]).toBe(0);
  });

  it("keeps scar non-diagnostic and distinct from active injury interpretation", () => {
    const scar = motifRegistry.motifs.find((motif) => motif.id === "scar");
    const scarBlock = motifRegistry.blocks.find((entry) => entry.motifId === "scar");
    const scarQuestion = motifRegistry.questions.find((question) => question.motifId === "scar");
    const scarAlias = motifRegistry.aliases.find((entry) => entry.motifId === "scar");
    const joinedBlockText = Object.values(scarBlock?.blocks ?? {}).flat().join("\n");
    const joinedAliasText = [
      ...(scarAlias?.aliases ?? []),
      ...(scarAlias?.priorityKeywords ?? []),
      ...(scarAlias?.secondaryKeywords ?? []),
    ].join("\n");

    expect(scar?.basicMeaning).toContain("過去");
    expect(scar?.psychologicalMeaning).toContain("断定");
    expect(joinedBlockText).toContain("体調や怪我を判断するものではありません");
    expect(scarQuestion?.prompt).toContain("受け止め方");
    expect(joinedAliasText).not.toContain("治療");
    expect(joinedAliasText).not.toContain("病気");
  });

  it.each(stage21ExtractionAuditCases)("extracts documented Stage21 audit case $id", (auditCase) => {
    const motifIds = extractMotifs(auditCase.text).map((candidate) => candidate.motif.id);

    expect(motifIds).toEqual(expect.arrayContaining(auditCase.expectedMotifIds));

    for (const unexpectedMotifId of auditCase.unexpectedMotifIds ?? []) {
      expect(motifIds).not.toContain(unexpectedMotifId);
    }
  });

  it.each(stage21RepresentativeDreams)("keeps Stage21 representative dream behavior for $id", (fixture) => {
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
