import { composeInterpretation, findMotifsByIds } from '../lib/dream-engine/index.ts';

const input = { text: '鎖骨や傷跡が気になった夢', impression: 'uneasy', clarity: 'partial', recurring: false };
for (const id of ['scar', 'collarbone', 'temple', 'cheek']) {
  const motifs = findMotifsByIds([id]);
  const result = composeInterpretation(input, motifs, []);
  console.log('\n[' + id + ']');
  console.log(result.sections.summary.join(' '));
  console.log(result.sections.caution.slice(0,1).join(' '));
}
