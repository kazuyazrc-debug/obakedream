import { describe, expect, it } from "vitest";
import { extractMotifs } from "@/lib/dream-engine";
import { extractionAuditCases } from "./fixtures/extraction-audit";

describe("extraction audit cases", () => {
  it.each(extractionAuditCases)("documents current extraction behavior for $id", (auditCase) => {
    const motifIds = extractMotifs(auditCase.text).map((candidate) => candidate.motif.id);

    expect(motifIds).toEqual(expect.arrayContaining(auditCase.expectedCurrentMotifIds));

    for (const unexpectedMotifId of auditCase.unexpectedMotifIds ?? []) {
      expect(motifIds).not.toContain(unexpectedMotifId);
    }
  });
});
