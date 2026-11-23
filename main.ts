// The Vacuum's Alibi: One Line, 200 Characters
// Writes a single deadpan excuse from a robot vacuum to /output/entry.txt.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

const entry =
  "I skipped that corner on purpose: my lidar scanned the crumb, ran the numbers, and decided it was paying rent in emotional support.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry + "\n", "utf8");
