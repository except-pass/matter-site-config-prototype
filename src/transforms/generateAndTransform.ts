#!/usr/bin/env node
// generateAndTransform.ts
// Convenience script to generate theme JSON and apply transformations in one step

import { execSync } from "child_process";
import * as path from "path";
import * as fs from "fs";

async function main() {
  const args = process.argv.slice(2);

  if (args.length < 1) {
    console.error("Usage: npx tsx generateAndTransform.ts <input.xlsx> [output.json]");
    console.error("Example: npx tsx src/transforms/generateAndTransform.ts Envy_48V_Matter_V2.1.6_Doc.xlsx src/themes/demo.json");
    process.exit(1);
  }

  const inputXlsx = path.resolve(args[0]);
  const outputJson = args[1] ? path.resolve(args[1]) : path.resolve("src/themes/demo.json");

  if (!fs.existsSync(inputXlsx)) {
    console.error(`Error: Input Excel file not found: ${inputXlsx}`);
    process.exit(1);
  }

  console.log("=== Step 1: Generate theme JSON from Excel ===");
  console.log(`Input:  ${inputXlsx}`);
  console.log(`Output: ${outputJson}`);
  console.log();

  try {
    // Generate the JSON from Excel
    const generateCmd = `npx tsx generatePointTheme.ts "${inputXlsx}"`;
    const jsonOutput = execSync(generateCmd, { encoding: "utf-8" });
    fs.writeFileSync(outputJson, jsonOutput);
    console.log("✓ Generated theme JSON");
  } catch (error: any) {
    console.error("✗ Generation failed:", error.message);
    process.exit(1);
  }

  console.log();
  console.log("=== Step 2: Apply transformations ===");
  console.log();

  try {
    // Apply transformations
    const transformCmd = `npx tsx src/transforms/applyTransforms.ts "${outputJson}"`;
    const transformOutput = execSync(transformCmd, { encoding: "utf-8" });
    console.log(transformOutput);
    console.log("✓ Applied transformations");
  } catch (error: any) {
    console.error("✗ Transformation failed:", error.message);
    process.exit(1);
  }

  console.log();
  console.log("=== Complete! ===");
  console.log(`Final output: ${outputJson}`);
}

// Run if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error("Error:", error);
    process.exit(1);
  });
}
