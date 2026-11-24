// Time Machine Warning Label — entry for the make.fun bounty
// "Funniest Time Machine Warning Label" (u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
// Writes one deadpan safety-notice label to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const label =
  "WARNING: Do not strand ancestors in the past. They will claim lodging, back rent, and child support.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", label, "utf8");
