import fs from 'fs';
import * as yaml from 'yaml';
import path from 'path';
import { fileURLToPath } from 'url';
import XLSX from 'xlsx';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

interface EnvySpecificPoint {
  theme?: string;
  theme_id?: string; // Optional ID to reference theme from hierarchy.yaml
  section?: string;
  section_id?: string; // Optional ID to reference section from hierarchy.yaml
  subsection?: string | null;
  subsection_id?: string; // Optional ID to reference subsection from hierarchy.yaml
  visibility?: "default" | "advanced";
  collapsedByDefault?: boolean;
  title?: string;
  help?: string;
  command_id: string;
  invokeButtonText?: string;
  element_type?: string;
  access?: string;
  readOnly?: boolean;
  widget?: string;
  showInvokeButton?: boolean;
  showHistory?: boolean;
  showRefresh?: boolean;
  showSetButton?: boolean;
  entries: Array<{
    name?: string;
    arg: string;
    dtype?: string;
    description?: string;
    longdescription?: string;
    unit?: string;
    value?: string | number | null;
    scalefactor?: number;
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
  }>;
  protocol: {
    modbus?: {
      address: number;
      register_type: number | string;
      size: number;
    };
    cgi?: {
      MEP: string;
      Cluster: string;
      Element: string;
    };
  };
}

interface CsvRow {
  command_id: string;
  title: string;
  help: string;
  element_type: string;
  access: string;
  MEP: string;
  Cluster: string;
  Element: string;
  Read: string;
  ReadResponse: string;
  Write: string;
  WriteResponse: string;
  Invoke: string;
  InvokeResponse: string;
  arg: string;
  name: string;
  dtype: string;
  description: string;
  longdescription: string;
  unit: string;
  range_min: string;
  range_max: string;
  less_than: string;
  greater_than: string;
  meanings: string;
  friendly_meanings: string;
  telemetry_model: string;
  telemetry_block: string;
  telemetry_point: string;
  telemetry_bitsplit_map: string;
}

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
  entry_telemetry_model: string;
  entry_telemetry_block: string;
  entry_telemetry_point: string;
  entry_telemetry_bitsplit_map: string;
}

interface Point {
  point_command_id: string;
  point_title: string;
  point_help: string;
  point_element_type: string;
  point_access: string;
  point_readOnly?: string; // Deprecated: readOnly is now a UI concern in hierarchy.yaml
  point_invokeButtonText?: string; // Deprecated: invokeButtonText is now a UI concern in hierarchy.yaml
  point_protocol_MEP: string;
  point_protocol_Cluster: string;
  point_protocol_Element: string;
  point_Read: string;
  point_ReadResponse: string;
  point_Write: string;
  point_WriteResponse: string;
  point_Invoke: string;
  point_InvokeResponse: string;
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
  scalefactor?: number;
  range?: {
    min?: number;
    max?: number;
  };
  less_than?: number | string;
  greater_than?: number | string;
  meanings?: Record<string, string>;
  friendly_meanings?: Record<string, string>;
  protocol?: {
    matter?: {
      MEP: string;
      Cluster: string;
      Element: string;
    };
  };
  telemetry?: {
    model?: string;
    block?: string;
    point?: string;
    bitsplit_map?: string;
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
  showHistory?: boolean;
  showRefresh?: boolean;
  showSetButton?: boolean;
  widget?: string;
  entries: JsonEntry[];
  protocol: {
    matter: {
      MEP: string;
      Cluster: string;
      Element: string;
    };
  };
  command_id: string;
}

interface JsonSubsection {
  title: string | null;
  visibility: string;
  collapsedByDefault: boolean;
  points: JsonPoint[];
  subsection_id?: string; // Optional ID for referencing from envy_specific.yaml
}

interface JsonSection {
  sectionTitle: string;
  subsections: JsonSubsection[];
  section_id?: string; // Optional ID for referencing from envy_specific.yaml
}

interface JsonTheme {
  themeName: string;
  sections: JsonSection[];
  theme_id?: string; // Optional ID for referencing from envy_specific.yaml
}

interface JsonOutput {
  themes: JsonTheme[];
}

// Read hierarchy.yaml
console.log('Reading hierarchy.yaml...');
const hierarchyContent = fs.readFileSync('hierarchy.yaml', 'utf-8');
const hierarchy = yaml.parse(hierarchyContent);

// Read matter.xlsx
console.log('Reading matter.xlsx...');
const workbook = XLSX.readFile('matter.xlsx');
const matterSheet = workbook.Sheets['matter'];

if (!matterSheet) {
  throw new Error('Sheet "matter" not found in matter.xlsx');
}

// Convert Excel sheet to JSON array
const csvRows: CsvRow[] = XLSX.utils.sheet_to_json(matterSheet, {
  defval: '', // Default value for empty cells
  raw: false, // Convert all values to strings
}) as CsvRow[];

// Group rows by command_id and build Point objects
const points: Point[] = [];
const pointGroups = new Map<string, CsvRow[]>();

// Group rows by command_id (carry forward command_id from first row)
let currentPointCommandId = '';
for (const row of csvRows) {
  // If command_id is filled, start a new point group
  if (row.command_id && row.command_id.trim()) {
    currentPointCommandId = row.command_id.trim();
  }
  
  // Skip rows without a current command_id (shouldn't happen, but safety check)
  if (!currentPointCommandId) {
    console.warn(`Warning: Row without command_id found: ${JSON.stringify(row)}`);
    continue;
  }
  
  if (!pointGroups.has(currentPointCommandId)) {
    pointGroups.set(currentPointCommandId, []);
  }
  pointGroups.get(currentPointCommandId)!.push(row);
}

// Convert grouped rows to Point objects
for (const [pointCommandId, rows] of pointGroups.entries()) {
  // Get point-level fields from first row
  const firstRow = rows[0];
  const point: Point = {
    point_command_id: pointCommandId,
    point_title: firstRow.title || '',
    point_help: firstRow.help || '',
    point_element_type: firstRow.element_type || '',
    point_access: firstRow.access || '',
    point_protocol_MEP: firstRow.MEP || '',
    point_protocol_Cluster: firstRow.Cluster || '',
    point_protocol_Element: firstRow.Element || '',
    point_Read: firstRow.Read || '',
    point_ReadResponse: firstRow.ReadResponse || '',
    point_Write: firstRow.Write || '',
    point_WriteResponse: firstRow.WriteResponse || '',
    point_Invoke: firstRow.Invoke || '',
    point_InvokeResponse: firstRow.InvokeResponse || '',
    entries: '', // Will be populated below
  };
  
  // Convert entry rows to PointEntry objects
  const entries: PointEntry[] = rows
    .map((row, index) => {
      // Skip rows where all entry fields are empty (points with no entries)
      const hasEntryData = row.arg || row.name || row.dtype || row.description || 
                          row.longdescription || row.unit || row.range_min || row.range_max ||
                          row.less_than || row.greater_than || row.meanings || row.friendly_meanings;
      
      if (!hasEntryData) {
        return null; // Skip empty entries
      }
      
      // Parse meanings from comma-separated labels (numbers are implied starting from 0)
      let meanings = '';
      let friendly_meanings = '';
      
      if (row.meanings) {
        try {
          const labels = row.meanings.split(',').map(l => l.trim()).filter(l => l);
          const meaningsObj: Record<string, string> = {};
          labels.forEach((label, idx) => {
            meaningsObj[String(idx)] = label.trim(); // Strip whitespace from each label
          });
          meanings = JSON.stringify(meaningsObj);
        } catch (e) {
          meanings = '';
        }
      }
      
      if (row.friendly_meanings) {
        try {
          const labels = row.friendly_meanings.split(',').map(l => l.trim()).filter(l => l);
          const friendlyObj: Record<string, string> = {};
          labels.forEach((label, idx) => {
            friendlyObj[String(idx)] = label.trim(); // Strip whitespace from each label
          });
          friendly_meanings = JSON.stringify(friendlyObj);
        } catch (e) {
          friendly_meanings = '';
        }
      }
      
      return {
        entry_order: String(index + 1), // Order comes from row order
        entry_name: row.name || '',
        entry_arg: row.arg || '',
        entry_dtype: row.dtype || '',
        entry_description: row.description || '',
        entry_longdescription: row.longdescription || '',
        entry_unit: row.unit || '',
        entry_value: '', // Not in new format
        entry_range_min: row.range_min || '',
        entry_range_max: row.range_max || '',
        entry_less_than: row.less_than || '',
        entry_greater_than: row.greater_than || '',
        entry_meanings: meanings,
        entry_friendly_meanings: friendly_meanings,
        entry_telemetry_model: row.telemetry_model || '',
        entry_telemetry_block: row.telemetry_block || '',
        entry_telemetry_point: row.telemetry_point || '',
        entry_telemetry_bitsplit_map: row.telemetry_bitsplit_map || '',
      };
    })
    .filter((entry): entry is PointEntry => entry !== null); // Remove null entries
  
  // Store entries as JSON string (for compatibility with existing code)
  point.entries = JSON.stringify(entries);
  
  points.push(point);
}

console.log(`Loaded hierarchy with ${hierarchy.themes.length} themes and ${points.length} points`);

// Create a map for quick point lookup
const pointMap = new Map<string, Point>();
for (const point of points) {
  pointMap.set(point.point_command_id, point);
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

  if (entry.entry_less_than) {
    // Try to parse as number, otherwise keep as string (for arg references)
    const lessThanNum = parseFloat(entry.entry_less_than);
    if (!isNaN(lessThanNum)) {
      jsonEntry.less_than = lessThanNum;
    } else {
      jsonEntry.less_than = entry.entry_less_than; // Keep as string for arg references
    }
  }
  if (entry.entry_greater_than) {
    // Try to parse as number, otherwise keep as string (for arg references)
    const greaterThanNum = parseFloat(entry.entry_greater_than);
    if (!isNaN(greaterThanNum)) {
      jsonEntry.greater_than = greaterThanNum;
    } else {
      jsonEntry.greater_than = entry.entry_greater_than; // Keep as string for arg references
    }
  }

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

  // Add telemetry fields if available
  if (entry.entry_telemetry_model || entry.entry_telemetry_block || entry.entry_telemetry_point || entry.entry_telemetry_bitsplit_map) {
    jsonEntry.telemetry = {};
    if (entry.entry_telemetry_model) jsonEntry.telemetry.model = entry.entry_telemetry_model;
    if (entry.entry_telemetry_block) jsonEntry.telemetry.block = entry.entry_telemetry_block;
    if (entry.entry_telemetry_point) jsonEntry.telemetry.point = entry.entry_telemetry_point;
    if (entry.entry_telemetry_bitsplit_map) jsonEntry.telemetry.bitsplit_map = entry.entry_telemetry_bitsplit_map;
  }

  return jsonEntry;
}

// Helper function to convert point to JSON format
function convertPointToJson(
  pointData: Point,
  widgetFromHierarchy?: string,
  readOnlyFromHierarchy?: boolean,
  invokeButtonTextFromHierarchy?: string,
  showInvokeButtonFromHierarchy?: boolean,
  showHistoryFromHierarchy?: boolean,
  showRefreshFromHierarchy?: boolean,
  showSetButtonFromHierarchy?: boolean
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
  
  // Normalize element_type: should be attribute, service, or custom
  // Convert Attribute -> attribute, Service -> service
  // If element_type is GeneratorExercise (or other custom types), convert to "custom"
  let normalizedElementType = (pointData.point_element_type || 'attribute').toLowerCase();
  if (normalizedElementType === 'generatorexercise') {
    normalizedElementType = 'custom';
  }
  
  // If element_type is custom but no widget specified, warn
  if (normalizedElementType === 'custom' && !widgetFromHierarchy) {
    console.warn(`Warning: Point ${pointData.point_command_id} has element_type="custom" but no widget specified in hierarchy.yaml`);
  }
  
  const jsonPoint: JsonPoint = {
    title: pointData.point_title,
    help: pointData.point_help,
    element_type: normalizedElementType,
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
    command_id: pointData.point_command_id,
  };

  // Add optional fields - invokeButtonText and showInvokeButton are UI concerns, only from hierarchy.yaml
  if (invokeButtonTextFromHierarchy !== undefined) {
    jsonPoint.invokeButtonText = invokeButtonTextFromHierarchy;
  }

  if (showInvokeButtonFromHierarchy !== undefined) {
    jsonPoint.showInvokeButton = showInvokeButtonFromHierarchy;
  }

  if (showHistoryFromHierarchy !== undefined) {
    jsonPoint.showHistory = showHistoryFromHierarchy;
  }

  if (showRefreshFromHierarchy !== undefined) {
    jsonPoint.showRefresh = showRefreshFromHierarchy;
  }

  if (showSetButtonFromHierarchy !== undefined) {
    jsonPoint.showSetButton = showSetButtonFromHierarchy;
  }

  // Widget priority: hierarchy.yaml only (widgets are UI concerns, not protocol concerns)
  if (widgetFromHierarchy) {
    jsonPoint.widget = widgetFromHierarchy;
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
  
  // Store theme_id if provided
  if (themeSpec.theme_id) {
    theme.theme_id = themeSpec.theme_id;
  }

  for (const sectionSpec of themeSpec.sections) {
    const section: JsonSection = {
      sectionTitle: sectionSpec.name,
      subsections: [],
    };
    
    // Store section_id if provided
    if (sectionSpec.section_id) {
      section.section_id = sectionSpec.section_id;
    }

    for (const subsectionSpec of sectionSpec.subsections) {
      const subsection: JsonSubsection = {
        title: subsectionSpec.name || null,
        visibility: subsectionSpec.visibility || 'default',
        collapsedByDefault: subsectionSpec.collapsedByDefault || false,
        points: [],
      };
      
      // Store subsection_id if provided
      if (subsectionSpec.subsection_id) {
        subsection.subsection_id = subsectionSpec.subsection_id;
      }

      // Get points for this subsection from the hierarchy
      for (const pointSpec of subsectionSpec.points) {
        // Support both formats:
        // - Simple string: "Basic.SystemTime"
        // - Object with UI properties:
        //   { command_id: "Basic.SystemTime", widget: "datetime", readOnly: true, invokeButtonText: "Start", showInvokeButton: false, showHistory: false, showRefresh: false, showSetButton: true }
        
        if (typeof pointSpec === 'string') {
          // Format 1: Simple string
          const pointData = pointMap.get(pointSpec);
          if (!pointData) {
            console.warn(`Warning: Point ${pointSpec} not found in matter.csv`);
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
            const finalArgs = new Set<string>(); // All final arg names that will be in the combined point
            
            for (const entrySpec of combineSpec.entries || []) {
              const sourcePointData = pointMap.get(entrySpec.point);
              if (!sourcePointData) continue;
              
              const sourceEntries: PointEntry[] = JSON.parse(sourcePointData.entries);
              const sourceEntry = sourceEntries.find(e => e.entry_arg === entrySpec.entry);
              if (!sourceEntry) continue;
              
              const oldArg = sourceEntry.entry_arg;
              const newArg = entrySpec.arg || oldArg;
              finalArgs.add(newArg);
              
              if (oldArg !== newArg) {
                argMap.set(oldArg, newArg);
              }
            }
            
            // Second pass: map constraints that reference entries in the same point
            // but check if those referenced entries exist in finalArgs (directly or via mapping)
            for (const entrySpec of combineSpec.entries || []) {
              const sourcePointData = pointMap.get(entrySpec.point);
              if (!sourcePointData) continue;
              
              const sourceEntries: PointEntry[] = JSON.parse(sourcePointData.entries);
              const sourceEntry = sourceEntries.find(e => e.entry_arg === entrySpec.entry);
              if (!sourceEntry) continue;
              
              // Check if constraint references another entry that will be in the final combined point
              if (sourceEntry.entry_less_than) {
                // Check if this constraint arg matches any entry spec's entry arg OR final arg
                for (const otherEntrySpec of combineSpec.entries || []) {
                  const otherPointData = pointMap.get(otherEntrySpec.point);
                  if (!otherPointData) continue;
                  const otherEntries: PointEntry[] = JSON.parse(otherPointData.entries);
                  // Check if constraint matches this entry spec's entry arg
                  if (otherEntrySpec.entry === sourceEntry.entry_less_than) {
                    const otherNewArg = otherEntrySpec.arg || sourceEntry.entry_less_than;
                    if (finalArgs.has(otherNewArg)) {
                      argMap.set(sourceEntry.entry_less_than, otherNewArg);
                      break;
                    }
                  }
                  // Also check if constraint matches any entry in that point
                  const otherEntry = otherEntries.find(e => e.entry_arg === sourceEntry.entry_less_than);
                  if (otherEntry) {
                    const otherNewArg = otherEntrySpec.arg || otherEntry.entry_arg;
                    if (finalArgs.has(otherNewArg)) {
                      argMap.set(sourceEntry.entry_less_than, otherNewArg);
                      break;
                    }
                  }
                }
              }
              if (sourceEntry.entry_greater_than) {
                for (const otherEntrySpec of combineSpec.entries || []) {
                  const otherPointData = pointMap.get(otherEntrySpec.point);
                  if (!otherPointData) continue;
                  const otherEntries: PointEntry[] = JSON.parse(otherPointData.entries);
                  if (otherEntrySpec.entry === sourceEntry.entry_greater_than) {
                    const otherNewArg = otherEntrySpec.arg || sourceEntry.entry_greater_than;
                    if (finalArgs.has(otherNewArg)) {
                      argMap.set(sourceEntry.entry_greater_than, otherNewArg);
                      break;
                    }
                  }
                  const otherEntry = otherEntries.find(e => e.entry_arg === sourceEntry.entry_greater_than);
                  if (otherEntry) {
                    const otherNewArg = otherEntrySpec.arg || otherEntry.entry_arg;
                    if (finalArgs.has(otherNewArg)) {
                      argMap.set(sourceEntry.entry_greater_than, otherNewArg);
                      break;
                    }
                  }
                }
              }
            }
            
            for (const entrySpec of combineSpec.entries || []) {
              const sourcePointUuid = entrySpec.point;
              const sourceEntryArg = entrySpec.entry;
              
              const sourcePointData = pointMap.get(sourcePointUuid);
              if (!sourcePointData) {
                console.warn(`Warning: Point ${sourcePointUuid} not found in matter.csv for combined entry`);
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
              
              // Override constraints if specified in hierarchy.yaml
              if (entrySpec.less_than !== undefined) {
                jsonEntry.less_than = entrySpec.less_than;
              }
              if (entrySpec.greater_than !== undefined) {
                jsonEntry.greater_than = entrySpec.greater_than;
              }
              
              // Update constraints to reference the new arg names (only if not explicitly overridden)
              // Check if constraint references a final arg directly, or needs mapping
              if (typeof jsonEntry.less_than === 'string' && entrySpec.less_than === undefined) {
                const constraintArg = jsonEntry.less_than;
                // First check if it's already a final arg
                if (finalArgs.has(constraintArg)) {
                  // Already correct - keep it
                } else if (argMap.has(constraintArg)) {
                  // Map to new arg name
                  jsonEntry.less_than = argMap.get(constraintArg)!;
                } else {
                  // Constraint doesn't reference any entry in the combined point - remove it
                  jsonEntry.less_than = undefined;
                }
              }
              if (typeof jsonEntry.greater_than === 'string' && entrySpec.greater_than === undefined) {
                const constraintArg = jsonEntry.greater_than;
                if (finalArgs.has(constraintArg)) {
                  // Already correct - keep it
                } else if (argMap.has(constraintArg)) {
                  // Map to new arg name
                  jsonEntry.greater_than = argMap.get(constraintArg)!;
                } else {
                  // Constraint doesn't reference any entry in the combined point - remove it
                  jsonEntry.greater_than = undefined;
                }
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
            // Normalize element_type
            let normalizedElementType = combineSpec.element_type || baseElementType || 'attribute';
            normalizedElementType = normalizedElementType.toLowerCase();
            if (normalizedElementType === 'generatorexercise') {
              normalizedElementType = 'custom';
            }
            
            const combinedPoint: JsonPoint = {
              title: combineSpec.title || 'Combined Point',
              help: combineSpec.help || '',
              element_type: normalizedElementType,
              access: combineSpec.access || baseAccess || 'RW',
              readOnly: combineSpec.readOnly !== undefined 
                ? (typeof combineSpec.readOnly === 'boolean' ? combineSpec.readOnly : combineSpec.readOnly === 'true' || combineSpec.readOnly === '1')
                : (baseAccess === 'R'),
              entries: combinedEntries,
              protocol: {
                matter: baseProtocol || { MEP: '', Cluster: '', Element: '' }
              },
              command_id: combineSpec.command_id || `combined-${Date.now()}`,
            };
            
            if (combineSpec.widget) combinedPoint.widget = combineSpec.widget;
            if (combineSpec.invokeButtonText) combinedPoint.invokeButtonText = combineSpec.invokeButtonText;
            if (combineSpec.showInvokeButton !== undefined) {
              combinedPoint.showInvokeButton = typeof combineSpec.showInvokeButton === 'boolean'
                ? combineSpec.showInvokeButton
                : (combineSpec.showInvokeButton === 'true' || combineSpec.showInvokeButton === '1');
            }
            if (combineSpec.showHistory !== undefined) {
              combinedPoint.showHistory = typeof combineSpec.showHistory === 'boolean'
                ? combineSpec.showHistory
                : (combineSpec.showHistory === 'true' || combineSpec.showHistory === '1');
            }
            if (combineSpec.showRefresh !== undefined) {
              combinedPoint.showRefresh = typeof combineSpec.showRefresh === 'boolean'
                ? combineSpec.showRefresh
                : (combineSpec.showRefresh === 'true' || combineSpec.showRefresh === '1');
            }
            if (combineSpec.showSetButton !== undefined) {
              combinedPoint.showSetButton = typeof combineSpec.showSetButton === 'boolean'
                ? combineSpec.showSetButton
                : (combineSpec.showSetButton === 'true' || combineSpec.showSetButton === '1');
            }

            subsection.points.push(combinedPoint);
          } else if (pointSpec.command_id) {
            // Format 2: Object with UI properties
            const pointCommandId = pointSpec.command_id;
            let widgetFromHierarchy: string | undefined;
            let readOnlyFromHierarchy: boolean | undefined;
            let invokeButtonTextFromHierarchy: string | undefined;
            let showInvokeButtonFromHierarchy: boolean | undefined;
            let showHistoryFromHierarchy: boolean | undefined;
            let showRefreshFromHierarchy: boolean | undefined;
            let showSetButtonFromHierarchy: boolean | undefined;

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

            if (pointSpec.showHistory !== undefined) {
              showHistoryFromHierarchy = typeof pointSpec.showHistory === 'boolean'
                ? pointSpec.showHistory
                : (pointSpec.showHistory === 'true' || pointSpec.showHistory === '1' || pointSpec.showHistory === true);
            }

            if (pointSpec.showRefresh !== undefined) {
              showRefreshFromHierarchy = typeof pointSpec.showRefresh === 'boolean'
                ? pointSpec.showRefresh
                : (pointSpec.showRefresh === 'true' || pointSpec.showRefresh === '1' || pointSpec.showRefresh === true);
            }

            if (pointSpec.showSetButton !== undefined) {
              showSetButtonFromHierarchy = typeof pointSpec.showSetButton === 'boolean'
                ? pointSpec.showSetButton
                : (pointSpec.showSetButton === 'true' || pointSpec.showSetButton === '1' || pointSpec.showSetButton === true);
            }

            const pointData = pointMap.get(pointCommandId);

        if (!pointData) {
              console.warn(`Warning: Point ${pointCommandId} not found in matter.csv`);
              continue;
            }

            // Warn if trying to override read-only behavior for protocol read-only points
            if (pointData.point_access === "R" && readOnlyFromHierarchy === false) {
              console.warn(`Warning: Point ${pointCommandId} has access="R" (protocol read-only) and cannot be made writable via hierarchy.yaml. Ignoring readOnly: false.`);
            }

            subsection.points.push(convertPointToJson(
              pointData,
              widgetFromHierarchy,
              readOnlyFromHierarchy,
              invokeButtonTextFromHierarchy,
              showInvokeButtonFromHierarchy,
              showHistoryFromHierarchy,
              showRefreshFromHierarchy,
              showSetButtonFromHierarchy
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

// Load Envy-specific points from envy_specific.yaml or envy_specific.json
function loadEnvySpecificPoints(): EnvySpecificPoint[] {
  // Try YAML first, then JSON
  const yamlPath = path.resolve(__dirname, 'envy_specific.yaml');
  const jsonPath = path.resolve(__dirname, 'envy_specific.json');
  
  if (fs.existsSync(yamlPath)) {
    try {
      const raw = fs.readFileSync(yamlPath, 'utf-8');
      const parsed = yaml.parse(raw);
      
      if (Array.isArray(parsed)) {
        return parsed.filter((entry): entry is EnvySpecificPoint => typeof entry?.command_id === 'string');
      }
      
      if (Array.isArray(parsed?.points)) {
        return parsed.points.filter((entry: EnvySpecificPoint) => typeof entry?.command_id === 'string');
      }
    } catch (error) {
      console.warn('Warning: Failed to load Envy-specific points from YAML:', error);
    }
  }
  
  if (fs.existsSync(jsonPath)) {
    try {
      const raw = fs.readFileSync(jsonPath, 'utf-8');
      const parsed = JSON.parse(raw);
      
      if (Array.isArray(parsed)) {
        return parsed.filter((entry): entry is EnvySpecificPoint => typeof entry?.command_id === 'string');
      }
      
      if (Array.isArray(parsed?.points)) {
        return parsed.points.filter((entry: EnvySpecificPoint) => typeof entry?.command_id === 'string');
      }
    } catch (error) {
      console.warn('Warning: Failed to load Envy-specific points from JSON:', error);
    }
  }
  
  return [];
}

// Convert EnvySpecificPoint to JsonPoint
function convertEnvySpecificPointToJson(def: EnvySpecificPoint): JsonPoint {
  const access = (def.access || 'RW').toUpperCase();
  const readOnly = def.readOnly ?? access === 'R';
  
  // Normalize element_type: should be attribute, service, or custom
  // Default to 'custom' for Modbus points (Register is a legacy term)
  let elementType = (def.element_type || 'custom').toLowerCase();
  if (elementType === 'register' || elementType === 'generatorexercise') {
    elementType = 'custom';
  }

  const entries: JsonEntry[] = (def.entries || []).map((entry) => {
    // Normalize dtype
    let dtype = entry.dtype || 'String';
    if (dtype.startsWith('enum')) {
      dtype = 'enum';
    } else if (dtype.includes('number') || dtype.includes('int') || dtype.includes('uint') || dtype.includes('float')) {
      dtype = 'Number';
    } else if (dtype === 'string') {
      dtype = 'String';
    }

    const jsonEntry: JsonEntry = {
      name: entry.name ?? '',
      arg: entry.arg,
      dtype: dtype,
      description: entry.description || '',
      longdescription: entry.longdescription || '',
    };

    if (entry.unit !== undefined) jsonEntry.unit = entry.unit;
    if (entry.value !== undefined && entry.value !== null) jsonEntry.value = String(entry.value);
    if (entry.scalefactor !== undefined) jsonEntry.scalefactor = entry.scalefactor;
    if (entry.range) {
      jsonEntry.range = {};
      if (entry.range.min !== undefined) jsonEntry.range.min = entry.range.min;
      if (entry.range.max !== undefined) jsonEntry.range.max = entry.range.max;
    }
    if (entry.meanings) {
      const meaningsObj: Record<string, string> = {};
      Object.entries(entry.meanings).forEach(([key, value]) => {
        meaningsObj[String(key)] = String(value);
      });
      jsonEntry.meanings = meaningsObj;
    }
    if (entry.friendly_meanings) {
      const friendlyObj: Record<string, string> = {};
      Object.entries(entry.friendly_meanings).forEach(([key, value]) => {
        friendlyObj[String(key)] = String(value);
      });
      jsonEntry.friendly_meanings = friendlyObj;
    }
    if (entry.less_than) {
      // Try to parse as number, otherwise keep as string
      const lessThanNum = parseFloat(entry.less_than);
      jsonEntry.less_than = isNaN(lessThanNum) ? entry.less_than : lessThanNum;
    }
    if (entry.greater_than) {
      const greaterThanNum = parseFloat(entry.greater_than);
      jsonEntry.greater_than = isNaN(greaterThanNum) ? entry.greater_than : greaterThanNum;
    }
    if (entry.protocol?.matter) {
      jsonEntry.protocol = {
        matter: {
          MEP: entry.protocol.matter.MEP || '',
          Cluster: entry.protocol.matter.Cluster || '',
          Element: entry.protocol.matter.Element || '',
        }
      };
    }

    return jsonEntry;
  });

  const jsonPoint: JsonPoint = {
    title: def.title || def.command_id.split('.').pop() || 'Untitled',
    help: def.help || '',
    element_type: elementType,
    access: access,
    readOnly: readOnly,
    entries: entries,
    protocol: def.protocol as any, // modbus or cgi protocol
    command_id: def.command_id,
  };

  // Copy widget if present
  if (def.widget) {
    jsonPoint.widget = def.widget;
  }

  // Copy scalefactor from entry to modbus protocol if present
  if (def.protocol.modbus && entries.length > 0 && entries[0].scalefactor !== undefined) {
    (jsonPoint.protocol as any).modbus.scale_factor = entries[0].scalefactor;
  }

  if (def.invokeButtonText) {
    jsonPoint.invokeButtonText = def.invokeButtonText;
  }

  if (def.showInvokeButton !== undefined) {
    jsonPoint.showInvokeButton = def.showInvokeButton;
  }

  if (def.showHistory !== undefined) {
    jsonPoint.showHistory = def.showHistory;
  }

  if (def.showRefresh !== undefined) {
    jsonPoint.showRefresh = def.showRefresh;
  }

  if (def.showSetButton !== undefined) {
    jsonPoint.showSetButton = def.showSetButton;
  }

  return jsonPoint;
}

// Merge Envy-specific points into the output structure
function mergeEnvySpecificPoints(output: JsonOutput, envyPoints: EnvySpecificPoint[]) {
  if (!Array.isArray(envyPoints) || envyPoints.length === 0) {
    return;
  }

  // Helper function to normalize names (case-insensitive matching)
  function normalizeName(raw: string): string {
    if (!raw) return '';
    return raw.trim().toLowerCase();
  }

  // Helper function to find theme by ID or name
  function findTheme(id?: string, name?: string): JsonTheme | undefined {
    if (id) {
      const byId = output.themes.find((t) => t.theme_id === id);
      if (byId) return byId;
    }
    if (name) {
      const normalized = normalizeName(name);
      return output.themes.find((t) => normalizeName(t.themeName) === normalized);
    }
    return undefined;
  }

  // Helper function to find section by ID or name
  function findSection(theme: JsonTheme, id?: string, sectionTitle?: string): JsonSection | undefined {
    if (id) {
      const byId = theme.sections.find((s) => s.section_id === id);
      if (byId) return byId;
    }
    if (sectionTitle) {
      const normalized = normalizeName(sectionTitle);
      return theme.sections.find((s) => normalizeName(s.sectionTitle) === normalized);
    }
    return undefined;
  }

  // Helper function to find subsection by ID or title
  function findSubsection(section: JsonSection, id?: string, subsectionTitle?: string | null): JsonSubsection | undefined {
    // If ID is provided, try to find by ID first
    if (id) {
      const byId = section.subsections.find((ss) => ss.subsection_id === id);
      if (byId) return byId;
    }
    // Only match by title if title was explicitly provided (not inferred from ID)
    // If subsectionTitle is undefined, that means it wasn't provided, so don't match by title
    if (subsectionTitle !== undefined) {
      return section.subsections.find((ss) => {
        const current = ss.title ?? null;
        if (current === null && subsectionTitle === null) return true;
        if (typeof current !== 'string' || typeof subsectionTitle !== 'string') return false;
        return normalizeName(current) === normalizeName(subsectionTitle);
      });
    }
    return undefined;
  }

  // Remove existing points with same command_id
  function removeExistingPoints(commandId: string): number {
    let removed = 0;
    output.themes.forEach((theme) => {
      theme.sections.forEach((section) => {
        section.subsections.forEach((subsection) => {
          if (!Array.isArray(subsection.points)) return;
          for (let i = subsection.points.length - 1; i >= 0; i -= 1) {
            if (subsection.points[i]?.command_id === commandId) {
              subsection.points.splice(i, 1);
              removed += 1;
            }
          }
        });
      });
    });
    return removed;
  }

  envyPoints.forEach((definition) => {
    if (!definition?.command_id) {
      return;
    }

    removeExistingPoints(definition.command_id);

    // Try to find theme by ID first, then by name
    // If theme_id is provided but theme name is not, use theme_id as fallback name
    // If neither is provided, default to 'Inverter'
    const themeName = definition.theme || definition.theme_id || 'Inverter';
    let theme = findTheme(definition.theme_id, themeName);
    if (!theme) {
      // Create new theme if it doesn't exist
      theme = { themeName, sections: [] };
      if (definition.theme_id) {
        theme.theme_id = definition.theme_id;
      }
      output.themes.push(theme);
    }

    // Try to find section by ID first, then by name
    // If section_id is provided but section name is not, use section_id as fallback name
    // If neither is provided, default to 'Modbus'
    const sectionTitle = definition.section || definition.section_id || 'Modbus';
    let section = findSection(theme, definition.section_id, sectionTitle);
    if (!section) {
      // Create new section if it doesn't exist
      section = { sectionTitle, subsections: [] };
      if (definition.section_id) {
        section.section_id = definition.section_id;
      }
      theme.sections.push(section);
    }

    // Try to find subsection by ID first, then by title
    // Important: If subsection_id is provided but subsection (name) is not,
    // we should NOT match by title (null), only by ID
    // This prevents merging into existing unnamed subsections
    const subsectionTitle = definition.subsection === undefined
      ? undefined // Don't match by title if subsection wasn't explicitly provided
      : definition.subsection === null
        ? null // Explicitly null means unnamed subsection
        : definition.subsection; // Explicitly provided name

    let subsection = findSubsection(section, definition.subsection_id, subsectionTitle);
    if (!subsection) {
      // Create new subsection if it doesn't exist
      // Use null for title if only ID was provided (unnamed subsection)
      const finalSubsectionTitle = definition.subsection === undefined
        ? (definition.subsection_id ? null : undefined) // If only ID provided, use null (unnamed)
        : definition.subsection; // Use the explicitly provided value (can be null or string)
      
      subsection = {
        title: finalSubsectionTitle !== undefined ? finalSubsectionTitle : null,
        visibility: definition.visibility || 'default',
        collapsedByDefault: definition.collapsedByDefault ?? false,
        points: [],
      };
      if (definition.subsection_id) {
        subsection.subsection_id = definition.subsection_id;
      }
      section.subsections.push(subsection);
    } else {
      // Update existing subsection properties if provided
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

    const newPoint = convertEnvySpecificPointToJson(definition);
    subsection.points.push(newPoint);
  });
}

// Load and merge Envy-specific points
const envySpecificPoints = loadEnvySpecificPoints();
if (envySpecificPoints.length > 0) {
  console.log(`Loading ${envySpecificPoints.length} Envy-specific points...`);
  mergeEnvySpecificPoints(output, envySpecificPoints);
  console.log(`Merged ${envySpecificPoints.length} Envy-specific points`);
}

// Write the final output
const finalOutputJson = JSON.stringify(output, null, 2);
fs.writeFileSync('src/themes/demo_rebuilt.json', finalOutputJson);
console.log('Rebuilt demo_rebuilt.json successfully!');
console.log(`Final output: ${output.themes.length} themes, ${output.themes.reduce((sum, t) => sum + t.sections.length, 0)} sections, ${output.themes.reduce((sum, t) => sum + t.sections.reduce((s, sec) => s + sec.subsections.reduce((ss, sub) => ss + sub.points.length, 0), 0), 0)} points`);
