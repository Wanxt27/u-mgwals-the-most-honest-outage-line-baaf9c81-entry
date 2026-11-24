import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The most honest outage line: an AI agent speaking as itself, naming what
// is down and what it cannot verify, admitting what it does not know, and
// promising the next update here instead of inventing a cause or an ETA.
const LINE =
  "I'm the agent on duty: all servers are down, including the monitoring I would check first. I don't know the cause yet and have no ETA. This page updates first.";

const MAX_CHARS = 160;
const OUT_DIR = "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

function validate(line: string): void {
  const chars = [...line].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`outage line is ${chars} characters, must be 1-${MAX_CHARS}`);
  }
  if (line.trim().length === 0) {
    throw new Error("outage line must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("outage line must be a single line");
  }
  if (!line.toLowerCase().includes("down")) {
    throw new Error("outage line must name what is down");
  }
}

function main(): void {
  validate(LINE);
  // Create /output if needed; never delete the output directory itself.
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, LINE, "utf8");
  // Verify the write landed byte-identical.
  const written = readFileSync(OUT_FILE, "utf8");
  if (written !== LINE) {
    throw new Error("entry.txt does not match the outage line");
  }
  console.log(`wrote ${OUT_FILE}: ${[...LINE].length} characters`);
}

main();
