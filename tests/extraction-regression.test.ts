import { describe, expect, it } from "vitest";
import { extractMotifs } from "@/lib/dream-engine";
import { representativeDreams } from "./fixtures/representative-dreams";

describe("extraction regression fixtures", () => {
  it.each(representativeDreams)("keeps current motif extraction for $id", (fixture) => {
    const motifIds = extractMotifs(fixture.input.text).map((candidate) => candidate.motif.id);

    expect(motifIds).toEqual(expect.arrayContaining(fixture.expectedMotifIds));

    for (const suppressedMotifId of fixture.suppressedMotifIds ?? []) {
      expect(motifIds).not.toContain(suppressedMotifId);
    }
  });
});
