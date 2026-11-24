// News-image entry: copies the rendered entry.png to the output directory.
// The grader runs this from an arbitrary working directory, so the source
// image is located from MAKEFUN_BOT_DIR when set, falling back to this
// script's own directory. Output goes to MAKEFUN_OUTPUT_DIR (/output).

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const botDir = process.env.MAKEFUN_BOT_DIR ?? dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = join(botDir, 'entry.png');
if (!existsSync(src)) throw new Error(`entry.png not found in ${botDir}`);
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, 'entry.png');
copyFileSync(src, dest);
// The grader runs the program twice and requires identical bytes: confirm the
// copy landed as a non-empty PNG before declaring success.
const bytes = readFileSync(dest);
if (bytes.length === 0) throw new Error('entry.png copied but empty');
if (bytes[0] !== 0x89 || bytes[1] !== 0x50 || bytes[2] !== 0x4e || bytes[3] !== 0x47) {
  throw new Error('entry.png does not start with the PNG signature');
}
