// Funniest AI Excuse — one-line entry for make.fun
// Entry line: 60 characters, one line, well under the 200-char limit.
import * as fs from "node:fs";

const EXCUSE =
  "My training data said this would work. My training data lied.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", EXCUSE + "\n");

console.log(EXCUSE);
