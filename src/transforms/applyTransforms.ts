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

  // First pass: Apply transformations and collect points to move
  const pointsToMove: Array<{
    point: any;
    moveTo: any;
    originalLocation: { themeName: string; sectionTitle: string; subsectionTitle: string };
  }> = [];

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

          // Check if point should be moved
          const allTransforms = getAllPointTransforms();
          const transform = allTransforms.find((t) => t.uuid === point.uuid);
          if (transform?.move_to) {
            pointsToMove.push({
              point,
              moveTo: transform.move_to,
              originalLocation: {
                themeName: theme.themeName,
                sectionTitle: section.sectionTitle,
                subsectionTitle: subsection?.title,
              },
            });
            changes.push(
              `Move: → ${transform.move_to.theme || theme.themeName} / ${transform.move_to.section}${
                transform.move_to.subsection ? ` / ${transform.move_to.subsection}` : ""
              }`
            );
          }

          // Assign widget type
          const widgetType = getWidgetType(point.uuid);
          if (widgetType !== "default") {
            point.widget = widgetType;
            changes.push(`Widget: ${widgetType}`);
          }

          if (wasTransformed || widgetType !== "default" || transform?.move_to) {
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

  // Second pass: Move points to their target locations
  pointsToMove.forEach(({ point, moveTo, originalLocation }) => {
    // Remove from original location
    result.themes?.forEach((theme: any) => {
      if (theme.themeName === originalLocation.themeName) {
        theme.sections?.forEach((section: any) => {
          if (section.sectionTitle === originalLocation.sectionTitle) {
            section.subsections?.forEach((subsection: any) => {
              if (subsection.title === originalLocation.subsectionTitle) {
                const pointIndex = subsection.points?.findIndex((p: any) => p.uuid === point.uuid);
                if (pointIndex !== undefined && pointIndex !== -1) {
                  subsection.points.splice(pointIndex, 1);
                }
              }
            });
          }
        });
      }
    });

    // Add to target location
    const targetThemeName = moveTo.theme || originalLocation.themeName;
    let targetTheme = result.themes?.find((t: any) => t.themeName === targetThemeName);

    if (!targetTheme) {
      // Create theme if it doesn't exist
      targetTheme = { themeName: targetThemeName, sections: [] };
      if (!result.themes) result.themes = [];
      result.themes.push(targetTheme);
    }

    // Find or create target section
    let targetSection = targetTheme.sections?.find((s: any) => s.sectionTitle === moveTo.section);
    if (!targetSection) {
      targetSection = { sectionTitle: moveTo.section, subsections: [] };
      if (!targetTheme.sections) targetTheme.sections = [];
      targetTheme.sections.push(targetSection);
    }

    // Find or create target subsection
    const targetSubsectionTitle = moveTo.subsection || "";
    let targetSubsection = targetSection.subsections?.find((ss: any) => ss.title === targetSubsectionTitle);
    if (!targetSubsection) {
      targetSubsection = { title: targetSubsectionTitle, points: [] };
      if (!targetSection.subsections) targetSection.subsections = [];
      targetSection.subsections.push(targetSubsection);
    }

    // Add point to target
    if (!targetSubsection.points) targetSubsection.points = [];
    targetSubsection.points.push(point);
  });

  // Third pass: Clean up empty subsections and sections
  result.themes?.forEach((theme: any) => {
    theme.sections = theme.sections?.filter((section: any) => {
      // Remove empty subsections
      section.subsections = section.subsections?.filter((subsection: any) => {
        return subsection.points && subsection.points.length > 0;
      });
      // Keep section only if it has subsections
      return section.subsections && section.subsections.length > 0;
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
