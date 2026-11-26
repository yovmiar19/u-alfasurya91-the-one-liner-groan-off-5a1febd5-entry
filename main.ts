// The One-Liner Groan-Off — make.fun entry
// Writes the picked one-line dad joke to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Dad, why is the fridge running? Because it heard the leftovers talking behind its back.";

mkdirSync("/output", { recursive: true });

// Gate: one line, 1-140 chars.
if (LINE.length < 1 || LINE.length > 140 || LINE.includes("\n")) {
  throw new Error(`Line fails the 1-140 char gate (got ${LINE.length} chars).`);
}

writeFileSync("/output/entry.txt", LINE, "utf8");
