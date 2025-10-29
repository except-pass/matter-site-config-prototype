// generatePointTheme.ts
//
// Run like:
//   npx tsx generatePointTheme.ts ./Envy_48V_Matter_V2.1.6_Doc.xlsx > src/themes/demo.json
//
// Requires: npm i xlsx
//
// NOTE:
// - Parses Envy 48V Matter documentation Excel format
// - Each Excel row represents one Matter Element (point)
// - The Para column contains JSON with parameter definitions (entries)
// - Creates 3-level hierarchy: Page -> Themes -> Sections -> Subsections -> Points
// - Clusters are grouped into themes (e.g., BatteryBase -> Battery theme)
// - Each section has one subsection for now
// - Handles merged cells by carrying forward the last non-empty Cluster value

import XLSX from "xlsx";
import * as path from "path";

// ------------------- Schema types from your spec -------------------

interface PageDef {
  pageName: string;
  themes: ThemeDef[];
}

interface ThemeDef {
  themeName: string;
  sections: SectionDef[];
}

interface EntryDef {
  name: string;
  arg: string;
  dtype: "enum" | "String" | "Number";
  value?: string | number;
  unit?: string;
  description?: string;
  longdescription?: string;
  range?: { min: number; max: number };
  meanings?: Record<string, string>;
  friendly_meanings?: Record<string, string>;
}

interface PointDef {
  title: string;
  help?: string;
  element_type: string;
  access: string;
  readOnly?: boolean;
  entries: EntryDef[];
  protocol: any;
  uuid: string;
}

interface SubsectionDef {
  title: string | null;
  visibility: string;
  collapsedByDefault: boolean;
  points: PointDef[];
}

interface SectionDef {
  sectionTitle: string;
  subsections: SubsectionDef[];
}

// ------------------- Helpers -------------------

// Convert camelCase to Regular Case (e.g., "ACCharge" -> "AC Charge", "BatteryBase" -> "Battery Base")
function camelToRegularCase(str: string): string {
  if (!str) return str;

  // Insert space before uppercase letters, but handle consecutive uppercase specially
  // "ACCharge" -> "AC Charge", "BatteryBase" -> "Battery Base"
  const result = str.replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')  // Handle acronyms: "ACCharge" -> "AC Charge"
                    .replace(/([a-z\d])([A-Z])/g, '$1 $2')      // Handle normal camelCase: "batteryBase" -> "battery Base"
                    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2'); // Additional pass for edge cases

  // Capitalize first letter if not already
  return result.charAt(0).toUpperCase() + result.slice(1);
}

// Map spreadsheet "para" into one of our allowed dtypes
function normalizeDType(rawPara: any): "enum" | "String" | "Number" {
  const txt = String(rawPara ?? "").toLowerCase();
  if (txt.includes("enum") || txt.includes("choice") || txt.includes("dropdown") || txt.includes("bool")) {
    return "enum";
  }
  if (txt.includes("number") || txt.includes("int") || txt.includes("uint") || txt.includes("float")) {
    return "Number";
  }
  return "String";
}

// parse "0:RSD;1:GenStart;2:LoadShed" -> { "0": "RSD", "1": "GenStart", "2": "LoadShed" }
function parseKeyValueList(raw: any): Record<string,string> | undefined {
  if (!raw || !String(raw).trim()) return undefined;
  const out: Record<string,string> = {};
  String(raw)
    .split(";")
    .map(seg => seg.trim())
    .filter(Boolean)
    .forEach(pair => {
      const [k,v] = pair.split(":");
      if (!k) return;
      out[k.trim()] = (v ?? "").trim();
    });
  return Object.keys(out).length ? out : undefined;
}

// small helper for numeric parse
function numOrUndefined(v: any): number | undefined {
  if (v === undefined || v === null || v === "") return undefined;
  const n = Number(v);
  if (Number.isNaN(n)) return undefined;
  return n;
}

// ------------------- Parse Para JSON and convert to entries -------------------

function parseParaToEntries(paraJson: string): EntryDef[] {
  if (!paraJson || !paraJson.trim()) return [];

  try {
    const parsed = JSON.parse(paraJson);
    const entries: EntryDef[] = [];

    for (const [argName, argDef] of Object.entries(parsed)) {
      const def = argDef as any;

      // Determine dtype - if Enum array exists, treat as enum regardless of type field
      let dtype: "enum" | "String" | "Number";
      if (def.Enum && Array.isArray(def.Enum)) {
        dtype = "enum";
      } else {
        dtype = normalizeDType(def.type);
      }

      // Extract range if present
      let range: { min: number; max: number } | undefined;
      if (def.Range) {
        const minVal = numOrUndefined(def.Range.Min);
        const maxVal = numOrUndefined(def.Range.Max);
        if (minVal !== undefined || maxVal !== undefined) {
          range = {
            min: minVal ?? Number.MIN_SAFE_INTEGER,
            max: maxVal ?? Number.MAX_SAFE_INTEGER,
          };
        }
      }

      // Parse enum/choice values if present
      let meanings: Record<string, string> | undefined;
      let friendly_meanings: Record<string, string> | undefined;

      if (def.Enum && Array.isArray(def.Enum)) {
        // Convert array enum to indexed meanings: ["Disable", "Enable"] -> {"0": "Disable", "1": "Enable"}
        meanings = {};
        friendly_meanings = {};
        def.Enum.forEach((value: string, index: number) => {
          meanings![index.toString()] = value;
          friendly_meanings![index.toString()] = value;
        });
      } else if (def.Choice) {
        meanings = parseKeyValueList(def.Choice);
        friendly_meanings = meanings; // Use same for now
      }

      entries.push({
        name: argName,
        arg: argName,
        dtype,
        value: def.Default,
        unit: def.Unit,
        description: def.Description || "",
        longdescription: def.LongDescription || "",
        range,
        meanings,
        friendly_meanings,
      });
    }

    return entries;
  } catch (e) {
    console.error(`Failed to parse Para JSON: ${e}`);
    return [];
  }
}

// ------------------- Extract theme name from cluster/section name -------------------

function extractThemeName(clusterName: string): string {
  // Inverter theme contains basic system sections
  const inverterSections = [
    "Basic",
    "LimitActivePower",
    "Measurement",
    "Parallel",
    "FeedInGrid",
    "ACCharge",
  ];

  if (clusterName === "LoadShedding") {
    return "SmartLoad";
  }

  if (inverterSections.includes(clusterName)) {
    return "Inverter";
  }

  // Extract theme prefix from cluster names like "BatteryBase" -> "Battery"
  const prefixes = ["Battery", "Grid"];

  for (const prefix of prefixes) {
    if (clusterName.startsWith(prefix)) {
      return prefix;
    }
  }

  // Handle mode-based clusters - they all belong to Grid theme
  const gridModes = [
    "ConstantPowerFactorMode",
    "ConstantReactivePowerMode",
    "VoltageReactivePowerMode",
    "ActivePowerReactivePowerMode",
    "VoltageActivePowerMode",
    "FrequencyActivePowerMode"
  ];

  if (gridModes.includes(clusterName)) {
    return "Grid";
  }

  // Everything else is its own theme for now
  return clusterName;
}

// ------------------- Build page object -------------------

function buildPointThemeFromRows(rows: any[]): PageDef {
  if (!rows.length) {
    throw new Error("No rows in spreadsheet.");
  }

  const pageName = "Envy 48V";

  // Step 1: Fill in missing Cluster values (handle merged cells in Excel)
  // When Cluster is empty, use the last non-empty Cluster value
  let lastCluster = "Uncategorized";
  for (const row of rows) {
    if (row.Cluster && row.Cluster.trim()) {
      lastCluster = row.Cluster.trim();
      row.Cluster = lastCluster;
    } else {
      row.Cluster = lastCluster;
    }
  }

  // Step 2: group rows by Cluster (section name)
  const sectionGroups: Record<string, any[]> = {};
  for (const row of rows) {
    const cluster = row.Cluster || "Uncategorized";
    if (!sectionGroups[cluster]) sectionGroups[cluster] = [];
    sectionGroups[cluster].push(row);
  }

  // Step 3: build sections (keep original titles for grouping)
  const builtSections: Array<{ originalTitle: string; section: SectionDef }> = Object.keys(sectionGroups).map(sectionTitle => {
    const rowsInSection = sectionGroups[sectionTitle];

    // Each row is one point with entries parsed from Para JSON
    const points: PointDef[] = rowsInSection.map(row => {
      const element = row.Element || "UnnamedElement";
      const elementType = row.ElementType || "Attribute";
      const access = normalizeAccess(row["Read/Write/Invoke"]);

      // Parse entries from Para JSON
      const entries = parseParaToEntries(row.Para);

      // Generate UUID from cluster and element
      const uuid = `${row.Cluster || "unknown"}.${element}`;

      // Build protocol - assume Matter for now
      const protocol = {
        matter: {
          MEP: "HybridInverter",
          Cluster: row.Cluster,
          Element: element,
        }
      };

      return {
        title: camelToRegularCase(element),
        help: `${elementType} in ${row.Cluster} cluster`,
        element_type: elementType,
        access: access,
        readOnly: parseReadOnly(undefined, access),
        entries,
        protocol,
        uuid,
      };
    });

    const subsection: SubsectionDef = {
      title: null,
      visibility: "default",
      collapsedByDefault: false,
      points,
    };

    const displayTitle = sectionTitle === "LoadShedding"
      ? "Smart Load"
      : camelToRegularCase(sectionTitle);

    return {
      originalTitle: sectionTitle,
      section: {
        sectionTitle: displayTitle,
        subsections: [subsection],
      }
    };
  });

  // Step 4: Group sections by theme (using original camelCase titles)
  const themeGroups: Record<string, SectionDef[]> = {};
  for (const { originalTitle, section } of builtSections) {
    const themeName = extractThemeName(originalTitle);
    if (!themeGroups[themeName]) themeGroups[themeName] = [];
    themeGroups[themeName].push(section);
  }

  // Step 5: Build themes
  const themes: ThemeDef[] = Object.keys(themeGroups).map(themeName => ({
    themeName: camelToRegularCase(themeName),
    sections: themeGroups[themeName],
  }));

  return {
    pageName,
    themes,
  };
}

// readOnly rule: explicit boolean if provided, otherwise infer from access === "R"
function parseReadOnly(readOnlyCell: any, access: any): boolean {
  if (typeof readOnlyCell === "boolean") return readOnlyCell;
  if (typeof readOnlyCell === "string") {
    const low = readOnlyCell.toLowerCase().trim();
    if (low === "true" || low === "yes" || low === "1") return true;
    if (low === "false" || low === "no" || low === "0") return false;
  }
  return String(access || "").toUpperCase() === "R";
}

function normalizeAccess(rawAccess: any): string {
  const text = String(rawAccess ?? "").trim();
  if (!text) return "R";

  const upper = text.toUpperCase().replace(/\s+/g, "");
  if (upper === "R/W" || upper === "RW") {
    return "RW";
  }

  return upper;
}

// ------------------- Main CLI entry -------------------

function main() {
  const inputPath = process.argv[2];
  if (!inputPath) {
    console.error("Usage: ts-node generatePointTheme.ts <spreadsheet.xlsx>");
    process.exit(1);
  }

  const abs = path.resolve(inputPath);
  const wb = XLSX.readFile(abs);
  // We'll just take the first sheet
  const firstSheetName = wb.SheetNames[0];
  const sheet = wb.Sheets[firstSheetName];

  // Convert to JSON rows
  const rows: any[] = XLSX.utils.sheet_to_json(sheet, { defval: "" });

  // Build our theme object
  const themeObj = buildPointThemeFromRows(rows);

  // Emit JSON to stdout
  process.stdout.write(JSON.stringify(themeObj, null, 2));
}

// Check if this is the main module (ES module equivalent of require.main === module)
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

// ------------------- Export for testability -------------------
export {
  buildPointThemeFromRows,
  normalizeDType,
  parseKeyValueList,
  parseParaToEntries,
  extractThemeName,
  camelToRegularCase,
};

export type {
  PageDef,
  ThemeDef,
  SectionDef,
  SubsectionDef,
  PointDef,
  EntryDef,
};
