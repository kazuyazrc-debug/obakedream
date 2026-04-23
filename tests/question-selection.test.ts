import { describe, expect, it } from "vitest";
import { findMotifsByIds, selectFollowUpQuestions } from "@/lib/dream-engine";
import { representativeDreams } from "./fixtures/representative-dreams";

describe("question selection", () => {
  it.each(representativeDreams)("keeps current question selection for $id", (fixture) => {
    const motifs = findMotifsByIds(fixture.selectedMotifIds);
    const questions = selectFollowUpQuestions(motifs, 5);

    expect(questions.map((question) => question.id)).toEqual(fixture.expectedQuestionIds);
  });

  it("keeps the hard cap for follow-up questions", () => {
    const motifs = findMotifsByIds(["snake", "water", "sea", "train", "being_late", "fighting"]);
    const questions = selectFollowUpQuestions(motifs, 5);

    expect(questions).toHaveLength(5);
  });
});
