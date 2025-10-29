#!/usr/bin/env node
// applyTransforms.ts
// Apply cosmetic transformations to the generated theme JSON

import * as fs from "fs";
import * as path from "path";
import jq from "node-jq";
import { transformPoint, getAllPointTransforms } from "./pointTransforms.js";
import { getWidgetType } from "./widgetConfig.js";

interface TransformStats {
  totalPoints: number;
  pointsTransformed: number;
  transformDetails: Array<{
    uuid: string;
    title: string;
    changes: string[];
  }>;
}

async function applyTransforms(inputPath: string, outputPath: string): Promise<TransformStats> {
  const stats: TransformStats = {
    totalPoints: 0,
    pointsTransformed: 0,
    transformDetails: [],
  };

  // Read the input JSON
  const inputData = JSON.parse(fs.readFileSync(inputPath, "utf-8"));

  // Count total points using jq
  const pointCountFilter = '[.themes[].sections[].subsections[].points[]] | length';
  const pointCount = await jq.run(pointCountFilter, inputPath, { output: "json" });
  stats.totalPoints = typeof pointCount === 'number' ? pointCount : 0;

  // Apply transformations
  const transformedData = transformPoints(inputData, stats);

  // Write the output JSON
  fs.writeFileSync(outputPath, JSON.stringify(transformedData, null, 2));

  return stats;
}

function transformPoints(data: any, stats: TransformStats): any {
  // Deep clone to avoid mutation
  const result = JSON.parse(JSON.stringify(data));

  // Traverse themes -> sections -> subsections -> points
  result.themes?.forEach((theme: any) => {
    theme.sections?.forEach((section: any) => {
      section.subsections?.forEach((subsection: any) => {
        subsection.points?.forEach((point: any) => {
          const changes: string[] = [];
          const originalTitle = point.title;
          const originalHelp = point.help;
          const originalSectionTitle = section.sectionTitle;
          const originalSubsectionTitle = subsection?.title;

          // Capture original entry names for comparison
          const originalEntryNames: Record<string, string> = {};
          point.entries?.forEach((entry: any) => {
            originalEntryNames[entry.arg] = entry.name;
          });

          // Apply transformation
          const wasTransformed = transformPoint(point, {
            section,
            subsection,
          });

          // Assign widget type
          const widgetType = getWidgetType(point.uuid);
          if (widgetType !== "default") {
            point.widget = widgetType;
            changes.push(`Widget: ${widgetType}`);
          }

          if (wasTransformed || widgetType !== "default") {
            // Track what changed
            if (point.title !== originalTitle) {
              changes.push(`Title: "${originalTitle}" → "${point.title}"`);
            }
            if (point.help !== originalHelp) {
              const helpPreview = point.help ? point.help.substring(0, 50) + "..." : "";
              changes.push(`Help: Added/modified (${helpPreview})`);
            }

            // Check entry changes (both modifications and injections)
            point.entries?.forEach((entry: any) => {
              const originalName = originalEntryNames[entry.arg];
              if (originalName === undefined) {
                // This is a newly injected entry
                changes.push(`Entry "${entry.arg}": Injected as "${entry.name}"`);
              } else if (entry.name !== originalName) {
                // This is a modified existing entry
                changes.push(`Entry "${entry.arg}": "${originalName}" → "${entry.name}"`);
              }
            });

            if (section.sectionTitle !== originalSectionTitle) {
              changes.push(
                `Section Title: "${originalSectionTitle}" → "${section.sectionTitle}"`
              );
            }

            const newSubsectionTitle = subsection?.title;
            if (newSubsectionTitle !== originalSubsectionTitle) {
              const prev = originalSubsectionTitle ?? "(untitled)";
              const next = newSubsectionTitle ?? "(untitled)";
              changes.push(`Subsection Title: "${prev}" → "${next}"`);
            }

            if (changes.length > 0) {
              stats.pointsTransformed++;
              stats.transformDetails.push({
                uuid: point.uuid,
                title: point.title,
                changes,
              });
            }
          }
        });
      });
    });
  });

  return result;
}

// CLI usage
async function main() {
  const args = process.argv.slice(2);

  if (args.length < 1) {
    console.error("Usage: npx tsx applyTransforms.ts <input.json> [output.json]");
    console.error("Example: npx tsx applyTransforms.ts ../themes/demo.json ../themes/demo.json");
    process.exit(1);
  }

  const inputPath = path.resolve(args[0]);
  const outputPath = args[1] ? path.resolve(args[1]) : inputPath;

  if (!fs.existsSync(inputPath)) {
    console.error(`Error: Input file not found: ${inputPath}`);
    process.exit(1);
  }

  console.log(`Applying transformations...`);
  console.log(`Input:  ${inputPath}`);
  console.log(`Output: ${outputPath}`);
  console.log();

  const stats = await applyTransforms(inputPath, outputPath);

  console.log(`✓ Processed ${stats.totalPoints} points`);

  if (stats.pointsTransformed > 0) {
    console.log(`✓ Transformed ${stats.pointsTransformed} points:`);
    console.log();
    stats.transformDetails.forEach(({ uuid, title, changes }) => {
      console.log(`  ${title} (${uuid})`);
      changes.forEach((change) => {
        console.log(`    • ${change}`);
      });
      console.log();
    });
  } else {
    console.log(`✓ No transformations applied`);
  }

  console.log(`Available transformations in pointTransforms.ts:`);
  const allTransforms = getAllPointTransforms();
  console.log(`  ${allTransforms.length} point transformation(s) configured`);
}

// Run if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error("Error:", error);
    process.exit(1);
  });
}

export { applyTransforms, transformPoints };
