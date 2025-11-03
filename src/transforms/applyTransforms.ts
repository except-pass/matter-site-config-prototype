#!/usr/bin/env node
// applyTransforms.ts
// Apply cosmetic transformations to the generated theme JSON

import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import jq from "node-jq";
import { transformPoint, getAllPointTransforms } from "./pointTransforms.js";
import { getWidgetType } from "./widgetConfig.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

interface TransformStats {
  totalPoints: number;
  pointsTransformed: number;
  transformDetails: Array<{
    uuid: string;
    title: string;
    changes: string[];
  }>;
}

type ManualDtype = "enum" | "Number" | "String";

interface ManualEntryDefinition {
  arg: string;
  name?: string;
  dtype?: string;
  description?: string;
  longdescription?: string;
  unit?: string;
  value?: string | number | null;
  range?: { min?: number; max?: number };
  meanings?: Record<string, string | number>;
  friendly_meanings?: Record<string, string | number>;
  greater_than?: string;
  less_than?: string;
  protocol?: {
    matter?: {
      MEP?: string;
      Cluster?: string;
      Element?: string;
    };
  };
}

interface ManualModbusDefinition {
  theme?: string;
  section?: string;
  subsection?: string | null;
  visibility?: "default" | "advanced";
  collapsedByDefault?: boolean;
  title?: string;
  help?: string;
  uuid: string;
  invokeButtonText?: string;
  element_type?: string;
  access?: string;
  readOnly?: boolean;
  entries: ManualEntryDefinition[];
  protocol: {
    modbus: {
      address: number;
      register_type: number | string;
      size: number;
      [key: string]: any;
    };
    [key: string]: any;
  };
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

  const additionalModbusPoints = loadAdditionalModbusPoints();

  // Apply transformations
  const transformedData = transformPoints(inputData, stats, additionalModbusPoints);

  // Write the output JSON
  fs.writeFileSync(outputPath, JSON.stringify(transformedData, null, 2));

  return stats;
}

function transformPoints(
  data: any,
  stats: TransformStats,
  additionalPoints: ManualModbusDefinition[]
): any {
  // Deep clone to avoid mutation
  const result = JSON.parse(JSON.stringify(data));

  const delta = injectAdditionalModbusPoints(result, additionalPoints);
  stats.totalPoints += delta;

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
      // Check if the transform specifies collapsedByDefault for the subsection
      const allTransforms = getAllPointTransforms();
      const transform = allTransforms.find((t) => t.uuid === point.uuid);
      const collapsedByDefault = transform?.subsection?.collapsedByDefault ?? false;

      targetSubsection = {
        title: targetSubsectionTitle,
        points: [],
        collapsedByDefault: collapsedByDefault,
        visibility: "default"
      };
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

      // Sort subsections: empty/null titles first, then others in original order
      if (section.subsections) {
        section.subsections.sort((a: any, b: any) => {
          const aEmpty = !a.title || a.title === '';
          const bEmpty = !b.title || b.title === '';
          if (aEmpty && !bEmpty) return -1;
          if (!aEmpty && bEmpty) return 1;
          return 0;
        });
      }

      // Keep section only if it has subsections
      return section.subsections && section.subsections.length > 0;
    });
  });

  return result;
}

function loadAdditionalModbusPoints(): ManualModbusDefinition[] {
  const filePath = path.resolve(__dirname, "additional_modbus.json");
  if (!fs.existsSync(filePath)) {
    return [];
  }

  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const parsed = JSON.parse(raw);

    if (Array.isArray(parsed)) {
      return parsed.filter((entry): entry is ManualModbusDefinition => typeof entry?.uuid === "string");
    }

    if (Array.isArray(parsed?.points)) {
      return parsed.points.filter((entry: ManualModbusDefinition) => typeof entry?.uuid === "string");
    }
  } catch (error) {
    console.warn("Warning: Failed to load additional Modbus points:", error);
  }

  return [];
}

function injectAdditionalModbusPoints(root: any, additionalPoints: ManualModbusDefinition[]): number {
  if (!Array.isArray(additionalPoints) || additionalPoints.length === 0) {
    return 0;
  }

  if (!Array.isArray(root.themes)) {
    root.themes = [];
  }

  let delta = 0;

  additionalPoints.forEach((definition) => {
    if (!definition?.uuid) {
      return;
    }

    const removed = removeExistingPoints(root, definition.uuid);

    const themeName = definition.theme ? normalizeName(definition.theme) : "Inverter";
    let theme = findByNameInsensitive(root.themes, themeName, "themeName");
    if (!theme) {
      theme = { themeName, sections: [] };
      root.themes.push(theme);
    }

    if (!Array.isArray(theme.sections)) {
      theme.sections = [];
    }

    const sectionTitle = definition.section ? normalizeName(definition.section) : "Modbus";
    let section = findByNameInsensitive(theme.sections, sectionTitle, "sectionTitle");
    if (!section) {
      section = { sectionTitle, subsections: [] };
      theme.sections.push(section);
    }

    if (!Array.isArray(section.subsections)) {
      section.subsections = [];
    }

    const subsectionTitle = definition.subsection === undefined
      ? null
      : definition.subsection === null
        ? null
        : normalizeName(definition.subsection);

    let subsection = findSubsection(section.subsections, subsectionTitle);
    if (!subsection) {
      subsection = {
        title: subsectionTitle,
        visibility: definition.visibility || "default",
        collapsedByDefault: definition.collapsedByDefault ?? false,
        points: [],
      };
      section.subsections.push(subsection);
    } else {
      if (definition.visibility) {
        subsection.visibility = definition.visibility;
      }
      if (definition.collapsedByDefault !== undefined) {
        subsection.collapsedByDefault = definition.collapsedByDefault;
      }
      if (!Array.isArray(subsection.points)) {
        subsection.points = [];
      }
    }

    const newPoint = buildManualPoint(definition);
    subsection.points.push(newPoint);

    delta += 1 - removed;
  });

  return delta;
}

function buildManualPoint(definition: ManualModbusDefinition) {
  const access = (definition.access || "RW").toUpperCase();
  const readOnly = definition.readOnly ?? access === "R";
  const elementType = definition.element_type || "Register";

  const entries = (definition.entries || []).map((entry) => buildManualEntry(entry));

  return {
    title: definition.title || deriveTitleFromUuid(definition.uuid),
    help: definition.help || "",
    element_type: elementType,
    access,
    readOnly,
    entries,
    protocol: definition.protocol,
    uuid: definition.uuid,
    invokeButtonText: definition.invokeButtonText,
  };
}

function buildManualEntry(entry: ManualEntryDefinition) {
  const dtype = normalizeDtype(entry.dtype);
  const meanings = normalizeDictionary(entry.meanings);
  const friendlyMeanings = entry.friendly_meanings
    ? normalizeDictionary(entry.friendly_meanings)
    : meanings;

  const normalized: any = {
    name: entry.name || normalizeName(entry.arg),
    arg: entry.arg,
    dtype,
    description: entry.description || "",
    longdescription: entry.longdescription || "",
  };

  if (entry.unit !== undefined) {
    normalized.unit = entry.unit;
  }
  if (entry.value !== undefined && entry.value !== null) {
    normalized.value = entry.value;
  }
  if (entry.range) {
    const { min, max } = entry.range;
    if (min !== undefined || max !== undefined) {
      normalized.range = {
        ...(min !== undefined ? { min } : {}),
        ...(max !== undefined ? { max } : {}),
      };
    }
  }
  if (meanings) {
    normalized.meanings = meanings;
  }
  if (friendlyMeanings) {
    normalized.friendly_meanings = friendlyMeanings;
  }
  if (entry.greater_than) {
    normalized.greater_than = entry.greater_than;
  }
  if (entry.less_than) {
    normalized.less_than = entry.less_than;
  }
  if (entry.protocol) {
    normalized.protocol = entry.protocol;
  }

  return normalized;
}

function normalizeDtype(raw?: string): ManualDtype {
  const value = (raw || "").toLowerCase();
  if (value.startsWith("enum")) {
    return "enum";
  }
  // Preserve bitfield types (bitfield8, bitfield16, bitfield32)
  if (value.startsWith("bitfield")) {
    return raw as ManualDtype;
  }
  if (value.includes("number") || value.includes("int") || value.includes("uint") || value.includes("float")) {
    return "Number";
  }
  if (value === "string") {
    return "String";
  }
  return "String";
}

function normalizeDictionary(dict?: Record<string, string | number>) {
  if (!dict) {
    return undefined;
  }

  const normalized: Record<string, string> = {};
  Object.entries(dict).forEach(([key, value]) => {
    normalized[String(key)] = String(value);
  });
  return normalized;
}

function normalizeName(raw: string): string {
  if (!raw) return "";
  const replaced = raw
    .replace(/[_\-]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2");
  return replaced
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => {
      if (word.length <= 3 && word.toUpperCase() === word) {
        return word.toUpperCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

function deriveTitleFromUuid(uuid: string): string {
  const segment = uuid.split(".").pop() || uuid;
  return normalizeName(segment);
}

function findByNameInsensitive(collection: any[], value: string, key: string) {
  const target = value.trim().toLowerCase();
  return collection.find((item) => String(item?.[key] || "").trim().toLowerCase() === target);
}

function findSubsection(subsections: any[], title: string | null) {
  return subsections.find((item: any) => {
    const current = item?.title ?? null;
    if (current === null && title === null) return true;
    if (typeof current !== "string" || typeof title !== "string") return false;
    return current.trim().toLowerCase() === title.trim().toLowerCase();
  });
}

function removeExistingPoints(root: any, uuid: string): number {
  let removed = 0;
  root.themes?.forEach((theme: any) => {
    theme.sections?.forEach((section: any) => {
      section.subsections?.forEach((subsection: any) => {
        if (!Array.isArray(subsection.points)) return;
        for (let i = subsection.points.length - 1; i >= 0; i -= 1) {
          if (subsection.points[i]?.uuid === uuid) {
            subsection.points.splice(i, 1);
            removed += 1;
          }
        }
      });
    });
  });
  return removed;
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
