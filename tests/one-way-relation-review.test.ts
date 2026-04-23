import { describe, expect, it } from "vitest";
import { buildRelationReviewRecords } from "@/lib/dream-engine/rules/relationReview";

function findRecord(sourceId: string, targetId: string) {
  return buildRelationReviewRecords().find(
    (record) => record.sourceId === sourceId && record.targetId === targetId,
  );
}

describe("one-way relation review", () => {
  it("classifies generic/specific relations separately from near-neighbors", () => {
    expect(findRecord("water", "sea")).toEqual(
      expect.objectContaining({
        reviewKind: "generic-specific",
        relationType: "conflict",
      }),
    );
  });

  it("marks communication near-neighbors as reciprocal review candidates", () => {
    expect(findRecord("email", "letter")).toEqual(
      expect.objectContaining({
        cluster: "communication",
        reviewKind: "should-be-reciprocal",
      }),
    );
  });

  it("keeps context helper relations distinct from conflicts", () => {
    expect(findRecord("umbrella", "rain")).toEqual(
      expect.objectContaining({
        cluster: "water-weather",
        reviewKind: "context-helper",
        relationType: "neighbor",
      }),
    );
  });
});
