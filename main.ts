import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  // One line, setup first, punchline last.
  "We held a meeting about having too many meetings, and it ran so long we had to schedule a follow-up to discuss it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke + "\n", "utf8");
