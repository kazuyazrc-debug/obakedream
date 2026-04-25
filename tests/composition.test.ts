import { describe, expect, it } from "vitest";
import { composeInterpretation, findMotifsByIds } from "@/lib/dream-engine";
import { representativeDreams } from "./fixtures/representative-dreams";

describe("interpretation composition", () => {
  it.each(representativeDreams)("builds structured interpretation sections for $id", (fixture) => {
    const motifs = findMotifsByIds(fixture.selectedMotifIds);
    const result = composeInterpretation(fixture.input, motifs, fixture.answers ?? []);

    expect(result.selectedMotifs.map((motif) => motif.id)).toEqual(
      expect.arrayContaining(fixture.selectedMotifIds),
    );
    expect(result.selectedMotifs).toHaveLength(fixture.selectedMotifIds.length);
    expect(result.sections.summary.length).toBeGreaterThan(0);
    expect(result.sections.symbolMeaning.length).toBeGreaterThan(0);
    expect(result.sections.psychology.length).toBeGreaterThan(0);
    expect(result.sections.fortune.length).toBeGreaterThan(0);
    expect(result.sections.caution.length).toBeGreaterThan(0);
    expect(result.sections.actionHint.length).toBeGreaterThan(0);
    expect(result.dominantAxes.length).toBeGreaterThan(0);
  });

  it("blends family follow-up hints into the reading when a relationship detail is chosen", () => {
    const motifs = findMotifsByIds(["family"]);
    const result = composeInterpretation(
      {
        text: "母と少し距離のあるまま話していた夢を見た",
        impression: "nostalgic",
        clarity: "clear",
        recurring: false,
      },
      motifs,
      [
        { questionId: "family-role", optionIds: ["distant"] },
        { questionId: "family-member", optionIds: ["mother"] },
      ],
    );

    expect(result.sections.summary).toContain(
      "母親の姿は、安心したい気持ちや受け止められたい思いに光を当てやすい象徴です。",
    );
    expect(result.sections.psychology).toContain(
      "家族とのあいだに言葉にしにくい距離や、整理しきれていない感情が残っているのかもしれません。",
    );
    expect(result.sections.actionHint).toContain(
      "安心できる相手や場所を思い出し、ひと息つける時間を少しだけ確保してみるのもよさそうです。",
    );
  });

  it("personalizes being_late text when a destination answer is chosen", () => {
    const motifs = findMotifsByIds(["being_late", "train"]);
    const base = composeInterpretation(
      {
        text: "駅で電車に乗り遅れそうで焦っていた",
        impression: "uneasy",
        clarity: "clear",
        recurring: false,
      },
      motifs,
      [],
    );
    const answered = composeInterpretation(
      {
        text: "駅で電車に乗り遅れそうで焦っていた",
        impression: "uneasy",
        clarity: "clear",
        recurring: false,
      },
      motifs,
      [{ questionId: "late-destination", optionIds: ["promise"] }],
    );

    expect(base.sections.summary).not.toContain(
      "約束に遅れそうな夢には、相手を待たせたくない気持ちや、関係を大切に守りたい思いがにじむことがあります。",
    );
    expect(answered.sections.summary).toContain(
      "約束に遅れそうな夢には、相手を待たせたくない気持ちや、関係を大切に守りたい思いがにじむことがあります。",
    );
    expect(answered.sections.fortune).toContain(
      "対人の流れは繊細ですが、ひとこと添えるだけでも空気をやわらげやすい兆しがあります。",
    );
    expect(answered.sections.actionHint).toContain(
      "気になる相手がいるなら、完璧な言葉でなくても今の気持ちを少しだけ丁寧に伝えてみてください。",
    );
  });

  it("personalizes making_mistake text when a context answer is chosen", () => {
    const motifs = findMotifsByIds(["making_mistake", "boss", "workplace"]);
    const base = composeInterpretation(
      {
        text: "仕事で大きなミスをして上司に謝っていた",
        impression: "uneasy",
        clarity: "clear",
        recurring: false,
      },
      motifs,
      [],
    );
    const answered = composeInterpretation(
      {
        text: "仕事で大きなミスをして上司に謝っていた",
        impression: "uneasy",
        clarity: "clear",
        recurring: false,
      },
      motifs,
      [{ questionId: "mistake-context", optionIds: ["corrected"] }],
    );

    expect(base.sections.summary).not.toContain(
      "途中で気づいて直せた夢は、失敗を恐れる気持ちがありながらも、立て直す力をちゃんと持っていることを映しています。",
    );
    expect(answered.sections.summary).toContain(
      "途中で気づいて直せた夢は、失敗を恐れる気持ちがありながらも、立て直す力をちゃんと持っていることを映しています。",
    );
    expect(answered.sections.fortune).toContain(
      "流れの中で修正が利きやすい時期なので、完璧な出発より途中で整える柔らかさが味方になります。",
    );
    expect(answered.sections.actionHint).toContain(
      "少し違うと感じた時点で止まり、やり直せる余白を自分に許してあげると安心感が戻りやすくなります。",
    );
  });

  it("personalizes ex_partner text when a distance answer is chosen", () => {
    const motifs = findMotifsByIds(["ex_partner"]);
    const answered = composeInterpretation(
      {
        text: "元恋人と再会する夢を見た",
        impression: "nostalgic",
        clarity: "clear",
        recurring: false,
      },
      motifs,
      [{ questionId: "ex-partner-distance", optionIds: ["calm-talk"] }],
    );

    expect(answered.sections.summary).toContain(
      "落ち着いて話せた夢には、過去の関係を必要以上に恐れず、静かに整理し直そうとする気持ちが表れることがあります。",
    );
    expect(answered.sections.fortune).toContain(
      "過去の出来事をやわらかく見直せる時期に入りつつあり、気持ちの流れにも余白が戻りやすいでしょう。",
    );
  });

  it("personalizes being_chased text when an ending answer is chosen", () => {
    const motifs = findMotifsByIds(["being_chased"]);
    const answered = composeInterpretation(
      {
        text: "誰かに追いかけられて走って逃げた",
        impression: "uneasy",
        clarity: "partial",
        recurring: false,
      },
      motifs,
      [{ questionId: "chased-ending", optionIds: ["escaped"] }],
    );

    expect(answered.sections.summary).toContain(
      "追われながらも逃げ切った流れは、今のあなたにまだ守り抜ける力が残っていることを映している場合があります。",
    );
    expect(answered.sections.actionHint).toContain(
      "急いで決着をつけるより、まずは安心できる距離を取り戻すことを優先してみてください。",
    );
  });

  it("personalizes exam text when a readiness answer is chosen", () => {
    const motifs = findMotifsByIds(["exam"]);
    const base = composeInterpretation(
      {
        text: "試験が始まるのに答えがわからず焦っていた",
        impression: "uneasy",
        clarity: "clear",
        recurring: false,
      },
      motifs,
      [],
    );
    const answered = composeInterpretation(
      {
        text: "試験が始まるのに答えがわからず焦っていた",
        impression: "uneasy",
        clarity: "clear",
        recurring: false,
      },
      motifs,
      [{ questionId: "exam-readiness", optionIds: ["unprepared"] }],
    );

    expect(base.sections.summary).not.toContain(
      "準備不足の試験は、評価そのものより『まだ間に合っていない』という焦りが心に強く残っている時に現れやすい象徴です。",
    );
    expect(answered.sections.summary).toContain(
      "準備不足の試験は、評価そのものより『まだ間に合っていない』という焦りが心に強く残っている時に現れやすい象徴です。",
    );
    expect(answered.sections.fortune).toContain(
      "いまは不足ばかりが目につきやすい流れですが、何が足りないのかを絞るほど立て直しやすくなっていきます。",
    );
    expect(answered.sections.actionHint).toContain(
      "全部を埋めようとせず、まずは不安の大きい一点だけに備えを集めてみてください。",
    );
  });

  it("personalizes house text when a condition answer is chosen", () => {
    const motifs = findMotifsByIds(["house"]);
    const base = composeInterpretation(
      {
        text: "知らない家の中を歩いていた",
        impression: "confused",
        clarity: "clear",
        recurring: false,
      },
      motifs,
      [],
    );
    const answered = composeInterpretation(
      {
        text: "知らない家の中を歩いていた",
        impression: "confused",
        clarity: "clear",
        recurring: false,
      },
      motifs,
      [{ questionId: "house-condition", optionIds: ["safe-house"] }],
    );

    expect(base.sections.summary).not.toContain(
      "落ち着く家の印象は、心のどこかで安心できる居場所や、自分を休ませる感覚を求めている時に現れやすい象徴です。",
    );
    expect(answered.sections.summary).toContain(
      "落ち着く家の印象は、心のどこかで安心できる居場所や、自分を休ませる感覚を求めている時に現れやすい象徴です。",
    );
    expect(answered.sections.fortune).toContain(
      "いまは土台を整えるほど流れが安定しやすく、焦って広げるより守りを固めることで良い兆しが育ちやすいでしょう。",
    );
    expect(answered.sections.actionHint).toContain(
      "まずは身の回りの一角だけでも、ほっとできる形に整えてみると今の流れに合いやすくなります。",
    );
  });

  it("personalizes water text when a water-state answer is chosen", () => {
    const motifs = findMotifsByIds(["water"]);
    const base = composeInterpretation(
      {
        text: "暗い水辺に立っていた",
        impression: "uneasy",
        clarity: "clear",
        recurring: false,
      },
      motifs,
      [],
    );
    const answered = composeInterpretation(
      {
        text: "暗い水辺に立っていた",
        impression: "uneasy",
        clarity: "clear",
        recurring: false,
      },
      motifs,
      [{ questionId: "water-state", optionIds: ["muddy"] }],
    );

    expect(base.sections.summary).not.toContain(
      "濁った水の夢には、気持ちが混ざり合って輪郭をつかみにくくなっている時の揺れが映ることがあります。",
    );
    expect(answered.sections.summary).toContain(
      "濁った水の夢には、気持ちが混ざり合って輪郭をつかみにくくなっている時の揺れが映ることがあります。",
    );
    expect(answered.sections.fortune).toContain(
      "答えを急がずにいるほど、いま濁って見えているものの中から大事な感情が見分けやすくなっていくでしょう。",
    );
    expect(answered.sections.actionHint).toContain(
      "いま抱えている気持ちを良い悪いで分けず、そのまま短い言葉で書き出してみると流れが整いやすくなります。",
    );
  });
  it("personalizes train text when a train-flow answer is chosen", () => {
    const motifs = findMotifsByIds(["train"]);
    const base = composeInterpretation(
      {
        text: "髮ｻ霆翫↓荵励ｊ驕・ｌ縺ｦ縺励∪縺｣縺・",
        impression: "uneasy",
        clarity: "clear",
        recurring: false,
      },
      motifs,
      [],
    );
    const answered = composeInterpretation(
      {
        text: "髮ｻ霆翫↓荵励ｊ驕・ｌ縺ｦ縺励∪縺｣縺・",
        impression: "uneasy",
        clarity: "clear",
        recurring: false,
      },
      motifs,
      [{ questionId: "train-flow", optionIds: ["wrong-train"] }],
    );

    expect(base.sections.summary.join(" ")).not.toContain("違う方向の電車");
    expect(answered.sections.summary.join(" ")).toContain("違う方向の電車");
    expect(answered.sections.fortune.join(" ")).toContain("遠回りに見える流れ");
    expect(answered.sections.actionHint.join(" ")).toContain("今の自分はどこへ向かいたいのか");
  });

  it("personalizes school text when a school-scene answer is chosen", () => {
    const motifs = findMotifsByIds(["school"]);
    const base = composeInterpretation(
      {
        text: "蟄ｦ譬｡縺ｧ霑ｷ縺｣縺ｦ謨吝ｮ､縺ｫ辿りｶ壹〒縺阪↑縺九▲縺・",
        impression: "confused",
        clarity: "clear",
        recurring: false,
      },
      motifs,
      [],
    );
    const answered = composeInterpretation(
      {
        text: "蟄ｦ譬｡縺ｧ霑ｷ縺｣縺ｦ謨吝ｮ､縺ｫ辿りｶ壹〒縺阪↑縺九▲縺・",
        impression: "confused",
        clarity: "clear",
        recurring: false,
      },
      motifs,
      [{ questionId: "school-scene", optionIds: ["lost-school"] }],
    );

    expect(base.sections.summary.join(" ")).not.toContain("学校で迷う夢");
    expect(answered.sections.summary.join(" ")).toContain("学校で迷う夢");
    expect(answered.sections.fortune.join(" ")).toContain("どこで迷いやすいのか");
    expect(answered.sections.actionHint.join(" ")).toContain("ここまでは進む");
  });

  it("personalizes stranger text when a stranger-distance answer is chosen", () => {
    const motifs = findMotifsByIds(["stranger"]);
    const base = composeInterpretation(
      {
        text: "遏･繧峨↑縺・ｺｺ縺梧戟縺ｿ縺､縺代※縺阪◆",
        impression: "uneasy",
        clarity: "clear",
        recurring: false,
      },
      motifs,
      [],
    );
    const answered = composeInterpretation(
      {
        text: "遏･繧峨↑縺・ｺｺ縺梧戟縺ｿ縺､縺代※縺阪◆",
        impression: "uneasy",
        clarity: "clear",
        recurring: false,
      },
      motifs,
      [{ questionId: "stranger-distance", optionIds: ["threatening"] }],
    );

    expect(base.sections.summary.join(" ")).not.toContain("怖い知らない人");
    expect(answered.sections.summary.join(" ")).toContain("怖い知らない人");
    expect(answered.sections.fortune.join(" ")).toContain("安全な距離を保ちながら");
    expect(answered.sections.actionHint.join(" ")).toContain("自分が安心できる条件");
  });

  it("personalizes workplace text when a workplace-pressure answer is chosen", () => {
    const motifs = findMotifsByIds(["workplace"]);
    const base = composeInterpretation(
      {
        text: "閨ｷ蝣ｴ縺ｧ雋ｬ繧√ｉ繧後※莉穂ｺ九′邨ゅｏ繧峨↑縺九▲縺・",
        impression: "uneasy",
        clarity: "clear",
        recurring: false,
      },
      motifs,
      [],
    );
    const answered = composeInterpretation(
      {
        text: "閨ｷ蝣ｴ縺ｧ雋ｬ繧√ｉ繧後※莉穂ｺ九′邨ゅｏ繧峨↑縺九▲縺・",
        impression: "uneasy",
        clarity: "clear",
        recurring: false,
      },
      motifs,
      [{ questionId: "workplace-pressure", optionIds: ["unfinished"] }],
    );

    expect(base.sections.summary.join(" ")).not.toContain("仕事が終わらない夢");
    expect(answered.sections.summary.join(" ")).toContain("仕事が終わらない夢");
    expect(answered.sections.fortune.join(" ")).toContain("量に押されやすい時期");
    expect(answered.sections.actionHint.join(" ")).toContain("終わりの線をひとつだけ自分で引く");
  });

  it("personalizes sea text when a sea-condition answer is chosen", () => {
    const motifs = findMotifsByIds(["sea"]);
    const base = composeInterpretation(
      {
        text: "闕偵ｌ縺滓豬ｷ繧定ａ縺ｾ縺壹※隕九※縺・◆",
        impression: "uneasy",
        clarity: "clear",
        recurring: false,
      },
      motifs,
      [],
    );
    const answered = composeInterpretation(
      {
        text: "闕偵ｌ縺滓豬ｷ繧定ａ縺ｾ縺壹※隕九※縺・◆",
        impression: "uneasy",
        clarity: "clear",
        recurring: false,
      },
      motifs,
      [{ questionId: "sea-condition", optionIds: ["rough-sea"] }],
    );

    expect(base.sections.summary.join(" ")).not.toContain("荒れた海の印象");
    expect(answered.sections.summary.join(" ")).toContain("荒れた海の印象");
    expect(answered.sections.fortune.join(" ")).toContain("流れは強いものの");
    expect(answered.sections.actionHint.join(" ")).toContain("波の強い話題や予定をひとつだけ静かに見直してみてください");
  });

  it("personalizes river text when a river-crossing answer is chosen", () => {
    const motifs = findMotifsByIds(["river"]);
    const base = composeInterpretation(
      {
        text: "川に流されそうになっていた",
        impression: "uneasy",
        clarity: "clear",
        recurring: false,
      },
      motifs,
      [],
    );
    const answered = composeInterpretation(
      {
        text: "川に流されそうになっていた",
        impression: "uneasy",
        clarity: "clear",
        recurring: false,
      },
      motifs,
      [{ questionId: "river-crossing", optionIds: ["swept"] }],
    );

    expect(base.sections.summary.join(" ")).not.toContain("川に流される印象");
    expect(answered.sections.summary.join(" ")).toContain("川に流される印象");
    expect(answered.sections.fortune.join(" ")).toContain("流れはまだ強め");
    expect(answered.sections.actionHint.join(" ")).toContain("のまれやすい話題や予定");
  });

  it("personalizes bridge text when a bridge-state answer is chosen", () => {
    const motifs = findMotifsByIds(["bridge"]);
    const base = composeInterpretation(
      {
        text: "壊れた橋の前で立ち止まっていた",
        impression: "uneasy",
        clarity: "clear",
        recurring: false,
      },
      motifs,
      [],
    );
    const answered = composeInterpretation(
      {
        text: "壊れた橋の前で立ち止まっていた",
        impression: "uneasy",
        clarity: "clear",
        recurring: false,
      },
      motifs,
      [{ questionId: "bridge-state", optionIds: ["broken"] }],
    );

    expect(base.sections.summary.join(" ")).not.toContain("壊れた橋の夢");
    expect(answered.sections.summary.join(" ")).toContain("壊れた橋の夢");
    expect(answered.sections.fortune.join(" ")).toContain("新しい渡し方を探すほど");
    expect(answered.sections.actionHint.join(" ")).toContain("別の渡り方");
  });

  it("personalizes road text when a road-choice answer is chosen", () => {
    const motifs = findMotifsByIds(["road"]);
    const base = composeInterpretation(
      {
        text: "分かれ道で迷っていた",
        impression: "confused",
        clarity: "clear",
        recurring: false,
      },
      motifs,
      [],
    );
    const answered = composeInterpretation(
      {
        text: "分かれ道で迷っていた",
        impression: "confused",
        clarity: "clear",
        recurring: false,
      },
      motifs,
      [{ questionId: "road-choice", optionIds: ["fork"] }],
    );

    expect(base.sections.summary.join(" ")).not.toContain("分かれ道の夢");
    expect(answered.sections.summary.join(" ")).toContain("分かれ道の夢");
    expect(answered.sections.fortune.join(" ")).toContain("流れは二つ以上に開いています");
    expect(answered.sections.actionHint.join(" ")).toContain("どちらが今の自分に近いか");
  });

  it("personalizes stairs text when a stairs-direction answer is chosen", () => {
    const motifs = findMotifsByIds(["stairs"]);
    const base = composeInterpretation(
      {
        text: "急な階段で足を滑らせた",
        impression: "uneasy",
        clarity: "clear",
        recurring: false,
      },
      motifs,
      [],
    );
    const answered = composeInterpretation(
      {
        text: "急な階段で足を滑らせた",
        impression: "uneasy",
        clarity: "clear",
        recurring: false,
      },
      motifs,
      [{ questionId: "stairs-direction", optionIds: ["fell"] }],
    );

    expect(base.sections.summary.join(" ")).not.toContain("階段で足を滑らせる夢");
    expect(answered.sections.summary.join(" ")).toContain("階段で足を滑らせる夢");
    expect(answered.sections.fortune.join(" ")).toContain("急ぎや負荷が強まりやすい時期");
    expect(answered.sections.actionHint.join(" ")).toContain("つまずきやすい一段");
  });

  it("puts being_chased+school pair block first in psychology when no answers are given", () => {
    const motifs = findMotifsByIds(["being_chased", "school"]);
    const result = composeInterpretation(
      {
        text: "学校で誰かに追いかけられた夢だった",
        impression: "uneasy",
        clarity: "clear",
        recurring: false,
      },
      motifs,
      [],
    );

    expect(result.sections.psychology[0]).toBe(
      "追いかけられながら学校にいる夢は、評価や期待に対するプレッシャーが積み重なっているサインです。誰かの目を意識して頑張り続けてきた疲れが、この組み合わせに表れることがあります。",
    );
  });

  it("interleaves symbolMeaning blocks from both motifs for being_late+train", () => {
    const lateSolo = composeInterpretation(
      { text: "電車に乗り遅れた夢だった", impression: "uneasy", clarity: "clear", recurring: false },
      findMotifsByIds(["being_late"]),
      [],
    );
    const trainSolo = composeInterpretation(
      { text: "電車に乗った夢だった", impression: "uneasy", clarity: "clear", recurring: false },
      findMotifsByIds(["train"]),
      [],
    );
    const combined = composeInterpretation(
      { text: "駅で電車に乗り遅れそうで焦っていた", impression: "uneasy", clarity: "clear", recurring: false },
      findMotifsByIds(["being_late", "train"]),
      [],
    );

    expect(combined.sections.symbolMeaning).toContain(lateSolo.sections.symbolMeaning[0]);
    expect(combined.sections.symbolMeaning).toContain(trainSolo.sections.symbolMeaning[0]);
  });

  it("personalizes elevator text when an elevator-motion answer is chosen", () => {
    const motifs = findMotifsByIds(["elevator"]);
    const base = composeInterpretation(
      {
        text: "エレベーターに閉じ込められていた",
        impression: "uneasy",
        clarity: "clear",
        recurring: false,
      },
      motifs,
      [],
    );
    const answered = composeInterpretation(
      {
        text: "エレベーターに閉じ込められていた",
        impression: "uneasy",
        clarity: "clear",
        recurring: false,
      },
      motifs,
      [{ questionId: "elevator-motion", optionIds: ["stuck"] }],
    );

    expect(base.sections.summary.join(" ")).not.toContain("閉じ込められたように止まるエレベーター");
    expect(answered.sections.summary.join(" ")).toContain("閉じ込められたように止まるエレベーター");
    expect(answered.sections.fortune.join(" ")).toContain("コントロールできる範囲を見直すほど");
    expect(answered.sections.actionHint.join(" ")).toContain("自分で押せるボタン");
  });
});
