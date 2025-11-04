import fs from 'fs';
import { parse } from 'csv-parse/sync';
import * as yaml from 'yaml';

interface PointEntry {
  entry_order: string;
  entry_name: string;
  entry_arg: string;
  entry_dtype: string;
  entry_description: string;
  entry_longdescription: string;
  entry_unit: string;
  entry_value: string;
  entry_range_min: string;
  entry_range_max: string;
  entry_less_than: string;
  entry_greater_than: string;
  entry_meanings: string;
  entry_friendly_meanings: string;
  entry_protocol_MEP?: string; // Deprecated: entry protocol is now specified in hierarchy.yaml when combining entries
  entry_protocol_Cluster?: string;
  entry_protocol_Element?: string;
}

interface Point {
  point_uuid: string;
  point_title: string;
  point_help: string;
  point_element_type: string;
  point_access: string;
  point_readOnly?: string; // Deprecated: readOnly is now a UI concern in hierarchy.yaml
  point_invokeButtonText?: string; // Deprecated: invokeButtonText is now a UI concern in hierarchy.yaml
  point_widget: string;
  point_protocol_MEP: string;
  point_protocol_Cluster: string;
  point_protocol_Element: string;
  entries: string;
}

interface JsonEntry {
  name: string;
  arg: string;
  dtype: string;
  description: string;
  longdescription: string;
  unit?: string;
  value?: string;
  range?: {
    min?: number;
    max?: number;
  };
  less_than?: number;
  greater_than?: number;
  meanings?: Record<string, string>;
  friendly_meanings?: Record<string, string>;
  protocol?: {
    matter?: {
      MEP: string;
      Cluster: string;
      Element: string;
    };
  };
}

interface JsonPoint {
  title: string;
  help: string;
  element_type: string;
  access: string;
  readOnly: boolean;
  invokeButtonText?: string;
  showInvokeButton?: boolean;
  widget?: string;
  entries: JsonEntry[];
  protocol: {
    matter: {
      MEP: string;
      Cluster: string;
      Element: string;
    };
  };
  uuid: string;
}

interface JsonSubsection {
  title: string | null;
  visibility: string;
  collapsedByDefault: boolean;
  points: JsonPoint[];
}

interface JsonSection {
  sectionTitle: string;
  subsections: JsonSubsection[];
}

interface JsonTheme {
  themeName: string;
  sections: JsonSection[];
}

interface JsonOutput {
  themes: JsonTheme[];
}

// Read hierarchy.yaml
console.log('Reading hierarchy.yaml...');
const hierarchyContent = fs.readFileSync('hierarchy.yaml', 'utf-8');
const hierarchy = yaml.parse(hierarchyContent);

// Read points.csv
console.log('Reading points.csv...');
const points: Point[] = parse(fs.readFileSync('points.csv', 'utf-8'), {
  columns: true,
  skip_empty_lines: true,
});

console.log(`Loaded hierarchy with ${hierarchy.themes.length} themes and ${points.length} points`);

// Create a map for quick point lookup
const pointMap = new Map<string, Point>();
for (const point of points) {
  pointMap.set(point.point_uuid, point);
}

// Helper function to convert point entry to JSON format
function convertEntryToJson(entry: PointEntry): JsonEntry {
  const jsonEntry: JsonEntry = {
    name: entry.entry_name,
    arg: entry.entry_arg,
    dtype: entry.entry_dtype,
    description: entry.entry_description,
    longdescription: entry.entry_longdescription,
  };

  // Add optional fields
  if (entry.entry_unit) jsonEntry.unit = entry.entry_unit;
  if (entry.entry_value) jsonEntry.value = entry.entry_value;

  // Add range
  if (entry.entry_range_min || entry.entry_range_max) {
    jsonEntry.range = {};
    if (entry.entry_range_min) jsonEntry.range.min = parseFloat(entry.entry_range_min);
    if (entry.entry_range_max) jsonEntry.range.max = parseFloat(entry.entry_range_max);
  }

  if (entry.entry_less_than) jsonEntry.less_than = parseFloat(entry.entry_less_than);
  if (entry.entry_greater_than) jsonEntry.greater_than = parseFloat(entry.entry_greater_than);

  // Parse meanings
  if (entry.entry_meanings) {
    try {
      jsonEntry.meanings = JSON.parse(entry.entry_meanings);
    } catch (e) {
      console.warn(`Warning: Failed to parse meanings for ${entry.entry_name}`);
    }
  }
  if (entry.entry_friendly_meanings) {
    try {
      jsonEntry.friendly_meanings = JSON.parse(entry.entry_friendly_meanings);
    } catch (e) {
      console.warn(`Warning: Failed to parse friendly_meanings for ${entry.entry_name}`);
    }
  }

  // Note: entry protocol is deprecated in CSV. It should be specified in hierarchy.yaml when combining entries.
  // For backward compatibility, still check CSV, but this will be removed.
  if (entry.entry_protocol_MEP && entry.entry_protocol_Cluster && entry.entry_protocol_Element) {
    jsonEntry.protocol = {
      matter: {
        MEP: entry.entry_protocol_MEP,
        Cluster: entry.entry_protocol_Cluster,
        Element: entry.entry_protocol_Element,
      },
    };
  }

  return jsonEntry;
}

// Helper function to convert entry with optional protocol override
function convertEntryToJsonWithProtocol(
  entry: PointEntry,
  protocolOverride?: { MEP?: string; Cluster?: string; Element?: string }
): JsonEntry {
  const jsonEntry = convertEntryToJson(entry);
  
  // Override protocol if specified in hierarchy.yaml
  if (protocolOverride) {
    jsonEntry.protocol = {
      matter: {
        MEP: protocolOverride.MEP || '',
        Cluster: protocolOverride.Cluster || '',
        Element: protocolOverride.Element || '',
      },
    };
  }
  
  return jsonEntry;
}

// Helper function to convert point to JSON format
function convertPointToJson(
  pointData: Point,
  widgetFromHierarchy?: string,
  readOnlyFromHierarchy?: boolean,
  invokeButtonTextFromHierarchy?: string,
  showInvokeButtonFromHierarchy?: boolean
): JsonPoint {
  // Parse entries
  const entries: PointEntry[] = JSON.parse(pointData.entries);

  // Convert entries to JSON format
  const jsonEntries: JsonEntry[] = entries
    .sort((a, b) => parseInt(a.entry_order) - parseInt(b.entry_order))
    .map(convertEntryToJson);

  // Create the point
  // Note: readOnly behavior:
  // - If access === "R" (protocol read-only), it's ALWAYS read-only (can't override)
  // - If access === "RW" or "Invoke", can optionally set readOnly: true in hierarchy.yaml for UI-only override
  const isProtocolReadOnly = pointData.point_access === "R";
  const readOnly = isProtocolReadOnly 
    ? true  // Protocol read-only is always read-only
    : (readOnlyFromHierarchy !== undefined ? readOnlyFromHierarchy : false);  // RW points can be overridden
  
  const jsonPoint: JsonPoint = {
    title: pointData.point_title,
    help: pointData.point_help,
    element_type: pointData.point_element_type,
    access: pointData.point_access,
    readOnly: readOnly,
    entries: jsonEntries,
    protocol: {
      matter: {
        MEP: pointData.point_protocol_MEP,
        Cluster: pointData.point_protocol_Cluster,
        Element: pointData.point_protocol_Element,
      },
    },
    uuid: pointData.point_uuid,
  };

  // Add optional fields - invokeButtonText and showInvokeButton are UI concerns, only from hierarchy.yaml
  if (invokeButtonTextFromHierarchy !== undefined) {
    jsonPoint.invokeButtonText = invokeButtonTextFromHierarchy;
  }
  
  if (showInvokeButtonFromHierarchy !== undefined) {
    jsonPoint.showInvokeButton = showInvokeButtonFromHierarchy;
  }
  
  // Widget priority: hierarchy.yaml > points.csv
  if (widgetFromHierarchy) {
    jsonPoint.widget = widgetFromHierarchy;
  } else if (pointData.point_widget) {
    jsonPoint.widget = pointData.point_widget;
  }

  return jsonPoint;
}

// Build the JSON structure from hierarchy
const output: JsonOutput = {
  themes: [],
};

for (const themeSpec of hierarchy.themes) {
  const theme: JsonTheme = {
    themeName: themeSpec.name,
    sections: [],
  };

  for (const sectionSpec of themeSpec.sections) {
    const section: JsonSection = {
      sectionTitle: sectionSpec.name,
      subsections: [],
    };

    for (const subsectionSpec of sectionSpec.subsections) {
      const subsection: JsonSubsection = {
        title: subsectionSpec.name || null,
        visibility: subsectionSpec.visibility || 'default',
        collapsedByDefault: subsectionSpec.collapsedByDefault || false,
        points: [],
      };

      // Get points for this subsection from the hierarchy
      for (const pointSpec of subsectionSpec.points) {
        // Support both formats:
        // - Simple string: "Basic.SystemTime"
        // - Object with UI properties: 
        //   { uuid: "Basic.SystemTime", widget: "datetime", readOnly: true, invokeButtonText: "Start", showInvokeButton: false }
        let pointUuid: string;
        let widgetFromHierarchy: string | undefined;
        let readOnlyFromHierarchy: boolean | undefined;
        let invokeButtonTextFromHierarchy: string | undefined;
        let showInvokeButtonFromHierarchy: boolean | undefined;
        
        if (typeof pointSpec === 'string') {
          // Format 1: Simple string
          const pointData = pointMap.get(pointSpec);
          if (!pointData) {
            console.warn(`Warning: Point ${pointSpec} not found in points.csv`);
            continue;
          }
          subsection.points.push(convertPointToJson(pointData));
        } else if (typeof pointSpec === 'object') {
          if (pointSpec.combine) {
            // Format 3: Combined entries from multiple points
            const combineSpec = pointSpec.combine;
            const combinedEntries: JsonEntry[] = [];
            let baseProtocol: { MEP: string; Cluster: string; Element: string } | undefined;
            let baseAccess: string | undefined;
            let baseElementType: string | undefined;
            
            // Collect entries from multiple points
            // First pass: build arg mapping for constraint updates
            const argMap = new Map<string, string>(); // old arg -> new arg
            for (const entrySpec of combineSpec.entries || []) {
              const sourcePointData = pointMap.get(entrySpec.point);
              if (!sourcePointData) continue;
              
              const sourceEntries: PointEntry[] = JSON.parse(sourcePointData.entries);
              const sourceEntry = sourceEntries.find(e => e.entry_arg === entrySpec.entry);
              if (!sourceEntry) continue;
              
              const oldArg = sourceEntry.entry_arg;
              const newArg = entrySpec.arg || oldArg;
              if (oldArg !== newArg) {
                argMap.set(oldArg, newArg);
              }
            }
            
            for (const entrySpec of combineSpec.entries || []) {
              const sourcePointUuid = entrySpec.point;
              const sourceEntryArg = entrySpec.entry;
              
              const sourcePointData = pointMap.get(sourcePointUuid);
              if (!sourcePointData) {
                console.warn(`Warning: Point ${sourcePointUuid} not found in points.csv for combined entry`);
                continue;
              }
              
              // Use first point's protocol/access/element_type as base
              if (!baseProtocol) {
                baseProtocol = {
                  MEP: sourcePointData.point_protocol_MEP,
                  Cluster: sourcePointData.point_protocol_Cluster,
                  Element: sourcePointData.point_protocol_Element,
                };
                baseAccess = sourcePointData.point_access;
                baseElementType = sourcePointData.point_element_type;
              }
              
              // Find the specific entry
              const sourceEntries: PointEntry[] = JSON.parse(sourcePointData.entries);
              const sourceEntry = sourceEntries.find(e => e.entry_arg === sourceEntryArg);
              
              if (!sourceEntry) {
                console.warn(`Warning: Entry ${sourceEntryArg} not found in point ${sourcePointUuid}`);
                continue;
              }
              
              // Convert entry to JSON format
              const jsonEntry = convertEntryToJson(sourceEntry);
              
              // Override arg if specified (for disambiguating entries with same arg name)
              if (entrySpec.arg) {
                jsonEntry.arg = entrySpec.arg;
              }
              
              // Update constraints to reference the new arg names
              if (typeof jsonEntry.less_than === 'string' && argMap.has(jsonEntry.less_than)) {
                jsonEntry.less_than = argMap.get(jsonEntry.less_than)!;
              }
              if (typeof jsonEntry.greater_than === 'string' && argMap.has(jsonEntry.greater_than)) {
                jsonEntry.greater_than = argMap.get(jsonEntry.greater_than)!;
              }
              
              // Use protocol from hierarchy.yaml if specified (supports shorthand 'element' or full 'protocol')
              const protocolOverride = entrySpec.protocol || (entrySpec.element ? { Element: entrySpec.element } : undefined);
              if (protocolOverride) {
                jsonEntry.protocol = {
                  matter: {
                    MEP: protocolOverride.MEP || baseProtocol?.MEP || '',
                    Cluster: protocolOverride.Cluster || baseProtocol?.Cluster || '',
                    Element: protocolOverride.Element || '',
                  },
                };
              }
              
              combinedEntries.push(jsonEntry);
            }
            
            if (combinedEntries.length === 0) {
              console.warn(`Warning: No valid entries found for combined point`);
              continue;
            }
            
            // Normalize ranges for dual sliders - find common range if all entries are Number type with ranges
            const numberEntriesWithRanges = combinedEntries.filter(e => e.dtype === 'Number' && e.range);
            if (numberEntriesWithRanges.length === combinedEntries.length && numberEntriesWithRanges.length >= 2) {
              // Find the intersection of all ranges (common min/max)
              const allMins = numberEntriesWithRanges.map(e => e.range!.min!);
              const allMaxs = numberEntriesWithRanges.map(e => e.range!.max!);
              const commonMin = Math.max(...allMins);
              const commonMax = Math.min(...allMaxs);
              
              // Only normalize if there's a valid intersection
              if (commonMin <= commonMax) {
                // Update all entries to use the common range
                combinedEntries.forEach(entry => {
                  if (entry.dtype === 'Number' && entry.range) {
                    entry.range = { min: commonMin, max: commonMax };
                  }
                });
              }
            }
            
            // Create combined point
            const combinedPoint: JsonPoint = {
              title: combineSpec.title || 'Combined Point',
              help: combineSpec.help || '',
              element_type: combineSpec.element_type || baseElementType || 'Attribute',
              access: combineSpec.access || baseAccess || 'RW',
              readOnly: combineSpec.readOnly !== undefined 
                ? (typeof combineSpec.readOnly === 'boolean' ? combineSpec.readOnly : combineSpec.readOnly === 'true' || combineSpec.readOnly === '1')
                : (baseAccess === 'R'),
              entries: combinedEntries,
              protocol: {
                matter: baseProtocol || { MEP: '', Cluster: '', Element: '' }
              },
              uuid: combineSpec.uuid || `combined-${Date.now()}`,
            };
            
            if (combineSpec.widget) combinedPoint.widget = combineSpec.widget;
            if (combineSpec.invokeButtonText) combinedPoint.invokeButtonText = combineSpec.invokeButtonText;
            if (combineSpec.showInvokeButton !== undefined) {
              combinedPoint.showInvokeButton = typeof combineSpec.showInvokeButton === 'boolean'
                ? combineSpec.showInvokeButton
                : (combineSpec.showInvokeButton === 'true' || combineSpec.showInvokeButton === '1');
            }
            
            subsection.points.push(combinedPoint);
          } else if (pointSpec.uuid) {
            // Format 2: Object with UI properties
            const pointUuid = pointSpec.uuid;
            let widgetFromHierarchy: string | undefined;
            let readOnlyFromHierarchy: boolean | undefined;
            let invokeButtonTextFromHierarchy: string | undefined;
            let showInvokeButtonFromHierarchy: boolean | undefined;
            
            widgetFromHierarchy = pointSpec.widget;
            
            // Handle readOnly - can be boolean or string
            if (pointSpec.readOnly !== undefined) {
              readOnlyFromHierarchy = typeof pointSpec.readOnly === 'boolean' 
                ? pointSpec.readOnly 
                : (pointSpec.readOnly === 'true' || pointSpec.readOnly === '1' || pointSpec.readOnly === true);
            }
            
            if (pointSpec.invokeButtonText !== undefined) {
              invokeButtonTextFromHierarchy = pointSpec.invokeButtonText;
            }
            
            if (pointSpec.showInvokeButton !== undefined) {
              showInvokeButtonFromHierarchy = typeof pointSpec.showInvokeButton === 'boolean'
                ? pointSpec.showInvokeButton
                : (pointSpec.showInvokeButton === 'true' || pointSpec.showInvokeButton === '1' || pointSpec.showInvokeButton === true);
            }

            const pointData = pointMap.get(pointUuid);

            if (!pointData) {
              console.warn(`Warning: Point ${pointUuid} not found in points.csv`);
              continue;
            }

            // Warn if trying to override read-only behavior for protocol read-only points
            if (pointData.point_access === "R" && readOnlyFromHierarchy === false) {
              console.warn(`Warning: Point ${pointUuid} has access="R" (protocol read-only) and cannot be made writable via hierarchy.yaml. Ignoring readOnly: false.`);
            }

            subsection.points.push(convertPointToJson(
              pointData,
              widgetFromHierarchy,
              readOnlyFromHierarchy,
              invokeButtonTextFromHierarchy,
              showInvokeButtonFromHierarchy
            ));
          } else {
            console.warn(`Warning: Invalid point spec format: ${JSON.stringify(pointSpec)}`);
            continue;
          }
        } else {
          console.warn(`Warning: Invalid point spec format: ${JSON.stringify(pointSpec)}`);
          continue;
        }
      }

      section.subsections.push(subsection);
    }

    theme.sections.push(section);
  }

  output.themes.push(theme);
}

// Write the output
const outputJson = JSON.stringify(output, null, 2);
fs.writeFileSync('src/themes/demo_rebuilt.json', outputJson);
console.log('Rebuilt demo_rebuilt.json successfully!');
console.log(`Output: ${output.themes.length} themes, ${output.themes.reduce((sum, t) => sum + t.sections.length, 0)} sections`);
