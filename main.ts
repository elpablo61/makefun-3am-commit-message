import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "fix: removed the console.log that just said 'please' 400 times";

// Gate: the entry must be 1-139 characters, a single line.
if (line.length < 1 || line.length > 139 || line.includes("\n")) {
  throw new Error(`entry is ${line.length} chars, must be 1-139, one line`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
