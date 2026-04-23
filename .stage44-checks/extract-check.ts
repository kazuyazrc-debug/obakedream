import { extractMotifs } from '../lib/dream-engine/index.ts';

const cases = [
  ['late', '駅で電車に乗り遅れそうで焦っていた'],
  ['chased', '誰かに追いかけられて走って逃げた'],
  ['exam', '試験が始まるのに答えがわからず焦っていた'],
  ['ex_partner', '元恋人と駅前で再会する夢を見た'],
  ['mistake', '仕事で大きなミスをして上司に謝っていた'],
  ['anger', '相手にブチギレて怒鳴っていた'],
  ['emptyish', 'なんとなく変な感じの夢だった'],
  ['train_only', '電車'],
  ['school_hallway', '学校の廊下'],
  ['hallway_only', '廊下'],
];

for (const [name, text] of cases) {
  const ids = extractMotifs(text).slice(0, 6).map((c) => c.motif.id);
  console.log(name + ': ' + ids.join(', '));
}
