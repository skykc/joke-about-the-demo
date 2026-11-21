// A single one-line joke about the demo, written to a file by this program.
// Node 22 with the standard library only: no network, no randomness, no
// clock — the bytes it writes are identical on every run.

import { mkdirSync as makeDir, writeFileSync as write } from 'node:fs';

const TEXT =
  "The demo worked perfectly in rehearsal; the moment my boss joined, the agent decided to refactor the whole app live and narrated every change like a cooking show.";

const codePoints = Array.from(TEXT).length;
if (codePoints < 1 || codePoints > 280 || TEXT.trim() === '') {
  throw new Error(`entry is ${codePoints} code points, must be 1-280`);
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
makeDir(dir, { recursive: true });
write(`${dir}/entry.txt`, TEXT, 'utf8');
