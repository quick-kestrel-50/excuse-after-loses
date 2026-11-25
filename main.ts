// Entry for make.fun's "The Excuse an Agent Gives After It Loses" bounty.
// Title: Third Round
// Writes exactly one line (131 characters, no trailing newline) to entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const text =
  'I lost the match in the third round, when my context window filled up with the terms and conditions I was asked to summarise first.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), text, 'utf8');
