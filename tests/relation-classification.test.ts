import { describe, expect, it } from "vitest";
import {
  buildRelationReviewRecords,
  relationPriorityClusters,
  relationReviewKinds,
  summarizeRelationReview,
} from "@/lib/dream-engine/rules/relationReview";
import {
  summarizeRegistryIssues,
  validateMotifRegistry,
} from "@/lib/dream-engine/rules/validateRegistry";

describe("relation classification", () => {
  it("classifies all one-way relation diagnostics into reviewable kinds", () => {
    const records = buildRelationReviewRecords();
    const summary = summarizeRelationReview(records);

    expect(summary.totalOneWayRelations).toBe(records.length);
    expect(summary.totalOneWayRelations).toBeGreaterThanOrEqual(127);
    expect(summary.oneWayInfoRelations + summary.oneWayWarningRelations).toBe(
      summary.totalOneWayRelations,
    );
    expect(summary.oneWayWarningRelations).toBeLessThanOrEqual(5);
    expect(
      records.every((record) => relationReviewKinds.includes(record.reviewKind)),
    ).toBe(true);
  });

  it("keeps registry warning gates stable while relation info is classified", () => {
    const summary = summarizeRegistryIssues(validateMotifRegistry());

    expect(summary.error).toBe(0);
    expect(summary["warning-fix-soon"]).toBeLessThanOrEqual(189);
    expect(summary.info).toBeGreaterThanOrEqual(125);
  });

  it("covers the priority relation clusters used for batch growth review", () => {
    const summary = summarizeRelationReview(buildRelationReviewRecords());

    for (const cluster of relationPriorityClusters) {
      expect(summary.byCluster[cluster]).toBeGreaterThanOrEqual(0);
    }

    expect(summary.byCluster.communication).toBeGreaterThan(0);
    expect(summary.byCluster.movement).toBeGreaterThan(0);
    expect(summary.byCluster["water-weather"]).toBeGreaterThan(0);
    expect(summary.byCluster.general).toBe(0);
    expect(summary.highPriorityCount).toBeGreaterThan(100);
  });

  it("keeps the Stage13 glasses complement out of the general relation bucket", () => {
    const glassesRecords = buildRelationReviewRecords().filter(
      (record) => record.sourceId === "glasses" || record.targetId === "glasses",
    );

    expect(glassesRecords.length).toBeGreaterThan(0);
    expect(glassesRecords.every((record) => record.cluster !== "general")).toBe(true);
    expect(glassesRecords.every((record) => record.reviewKind !== "stale-relation")).toBe(true);
  });

  it("keeps Stage15 batch-09 relations classified and non-stale", () => {
    const stage15Ids = new Set([
      "kitchen",
      "garden",
      "pen",
      "dish",
      "hallway",
      "balcony",
      "television",
      "radio",
      "hat",
      "lake",
      "mask",
      "making_mistake",
      "refusing",
      "lining_up",
      "tripping",
      "pond",
      "fog",
      "mobile_app",
      "video",
      "teacher",
    ]);
    const records = buildRelationReviewRecords().filter(
      (record) => stage15Ids.has(record.sourceId) || stage15Ids.has(record.targetId),
    );

    expect(records.length).toBeGreaterThan(0);
    expect(records.every((record) => record.cluster !== "general")).toBe(true);
    expect(records.every((record) => record.reviewKind !== "stale-relation")).toBe(true);
  });

  it("keeps communication relations visible as a priority review cluster", () => {
    const communicationRecords = buildRelationReviewRecords().filter(
      (record) => record.cluster === "communication",
    );

    expect(communicationRecords.length).toBeGreaterThanOrEqual(20);
    expect(
      communicationRecords.some(
        (record) =>
          (record.sourceId === "chat" && record.targetId === "sns") ||
          (record.sourceId === "sns" && record.targetId === "chat"),
      ),
    ).toBe(true);
    expect(
      communicationRecords.every((record) =>
        ["should-be-reciprocal", "generic-specific", "context-helper", "intentional-one-way"].includes(
          record.reviewKind,
        ),
      ),
    ).toBe(true);
  });
});
