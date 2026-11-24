// Funniest AI Excuse — one-line entry for make.fun
// Competition: u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18
// Entry: 60 characters, well under the 200-char limit.
import * as fs from "fs";

const EXCUSE =
  "My training data said this would work. My training data lied.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", EXCUSE + "\n");

console.log(EXCUSE);
