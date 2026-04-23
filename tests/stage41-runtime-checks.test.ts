import { describe, expect, it } from "vitest";
import { extractMotifs } from "@/lib/dream-engine";

describe("Stage41 runtime phrase checks", () => {
  it("keeps the train late phrase on train / being_late without car", () => {
    const motifIds = extractMotifs("駅で電車に乗り遅れそうで焦っていた").map((candidate) => candidate.motif.id);

    expect(motifIds).toEqual(expect.arrayContaining(["train", "being_late"]));
    expect(motifIds).not.toContain("car");
  });

  it("keeps school hallway and hallway-only separated correctly", () => {
    const schoolHallway = extractMotifs("学校の廊下を歩いていた").map((candidate) => candidate.motif.id);
    const hallwayOnly = extractMotifs("廊下を歩いていた").map((candidate) => candidate.motif.id);

    expect(schoolHallway).toEqual(expect.arrayContaining(["school", "hallway"]));
    expect(hallwayOnly).toContain("hallway");
    expect(hallwayOnly).not.toContain("school");
  });

  it("supports observed runtime phrases for mistake, chased, and anger colloquial input", () => {
    const mistake = extractMotifs("仕事で大きなミスをして上司に謝っていた").map((candidate) => candidate.motif.id);
    const chased = extractMotifs("誰かに追いかけられて走って逃げた").map((candidate) => candidate.motif.id);
    const anger = extractMotifs("相手にブチギレて怒鳴っていた").map((candidate) => candidate.motif.id);

    expect(mistake).toContain("making_mistake");
    expect(chased).toContain("being_chased");
    expect(anger).toContain("fighting");
  });
});
