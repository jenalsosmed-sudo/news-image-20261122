// News-image entry for Sunday 22 November 2026 (Node 22, standard
// library only): the program copies the finished newspaper front page
// drawn in this repository — entry.png — to the grader's output path.
// The poster sums up the day: the COP31 climate talks collapsing in
// Antalya with no deal, the Gulf escalation (mined tankers off Hormuz,
// Iran's strike on a US base in Bahrain), the Trump–Xi–Putin summit in
// Shenzhen, the ICJ's Rohingya genocide ruling, the Kryvyi Rih missile
// strike, the capture of 'El Chapo Isidro', and the US stock correction,
// plus a strip of the day's other headlines.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// The poster lives next to this script; the grader hands the output
// directory over through MAKEFUN_OUTPUT_DIR (default /output).
const here = dirname(fileURLToPath(import.meta.url));
const poster = join(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

if (!existsSync(poster)) throw new Error(`missing poster image: ${poster}`);
mkdirSync(outDir, { recursive: true });

// A byte-for-byte copy: both grader runs must produce identical bytes,
// so no re-encoding or resizing happens here.
copyFileSync(poster, join(outDir, 'entry.png'));
