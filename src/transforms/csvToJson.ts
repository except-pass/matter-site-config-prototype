#!/usr/bin/env node

import * as fs from "fs";
import * as path from "path";

interface MatterProtocol {
  MEP?: string;
  Cluster?: string;
  Element?: string;
}

interface CsvRow {
  [key: string]: string;
}

interface Entry {
  name?: string;
  arg?: string;
  dtype?: string;
  description?: string;
  longdescription?: string;
  unit?: string;
  value?: string | number;
  range?: { min?: number; max?: number };
  less_than?: string;
  greater_than?: string;
  meanings?: Record<string, unknown>;
  friendly_meanings?: Record<string, unknown>;
  protocol?: { matter?: MatterProtocol };
}

interface Point {
  uuid: string;
  order: number;
  title: string;
  help: string;
  element_type: string;
  access: string;
  readOnly: boolean;
  invokeButtonText?: string;
  widget?: string;
  protocol: { matter: MatterProtocol };
  entries: Array<{ order: number; data: Entry }>;
}

interface Subsection {
  title: string | null;
  order: number;
  visibility: string;
  collapsedByDefault: boolean;
  points: Map<string, Point>;
}

interface Section {
  sectionTitle: string;
  order: number;
  subsections: Map<string, Subsection>;
}

interface Theme {
  themeName: string;
  order: number;
  sections: Map<string, Section>;
}

interface ThemeFile {
  pageName: string;
  themes: Array<{
    themeName: string;
    sections: Array<{
      sectionTitle: string;
      subsections: Array<{
        title: string | null;
        visibility: string;
        collapsedByDefault: boolean;
        points: Array<{
          title: string;
          help: string;
          element_type: string;
          access: string;
          readOnly: boolean;
          invokeButtonText?: string;
          widget?: string;
          entries: Entry[];
          protocol: { matter: MatterProtocol };
          uuid: string;
        }>;
      }>;
    }>;
  }>;
}

const DEFAULT_INPUT = path.resolve(process.cwd(), "master.csv");
const DEFAULT_OUTPUT = path.resolve(process.cwd(), "src/themes/demo.json");

const inputPath = process.argv[2] ? path.resolve(process.cwd(), process.argv[2]) : DEFAULT_INPUT;
const outputPath = process.argv[3] ? path.resolve(process.cwd(), process.argv[3]) : DEFAULT_OUTPUT;

if (!fs.existsSync(inputPath)) {
  console.error(`CSV file not found: ${inputPath}`);
  process.exit(1);
}

const csvContent = fs.readFileSync(inputPath, "utf-8");
const rows = parseCsv(csvContent);
if (rows.length === 0) {
  console.error("CSV appears to be empty.");
  process.exit(1);
}

const pageName = rows[0].pageName ?? "";

const sortedRows = rows
  .map((row, index) => ({ row, index }))
  .sort((a, b) =>
    compareByOrder(a.row.theme_order, b.row.theme_order) ||
    compareByOrder(a.row.section_order, b.row.section_order) ||
    compareByOrder(a.row.subsection_order, b.row.subsection_order) ||
    compareByOrder(a.row.point_order, b.row.point_order) ||
    compareByOrder(a.row.entry_order, b.row.entry_order) ||
    a.index - b.index
  )
  .map(({ row }) => row);

const themeMap = new Map<string, Theme>();

sortedRows.forEach((row) => {
  if ((row.pageName ?? "") !== pageName) {
    console.warn(`Warning: Mixed page names detected (\"${pageName}\" vs \"${row.pageName}\"). Using the first value.`);
  }

  const themeName = row.theme?.trim() ?? "";
  if (!themeName) {
    return;
  }

  const themeOrder = toNumber(row.theme_order, 0);
  let theme = themeMap.get(themeName);
  if (!theme) {
    theme = {
      themeName,
      order: themeOrder,
      sections: new Map<string, Section>(),
    };
    themeMap.set(themeName, theme);
  }

  const sectionTitle = row.section?.trim() ?? "";
  const sectionKey = `${sectionTitle}::${toNumber(row.section_order, 0)}`;
  let section = theme.sections.get(sectionKey);
  if (!section) {
    section = {
      sectionTitle,
      order: toNumber(row.section_order, 0),
      subsections: new Map<string, Subsection>(),
    };
    theme.sections.set(sectionKey, section);
  }

  const subsectionTitleRaw = row.subsection ?? "";
  const subsectionTitle = subsectionTitleRaw.trim() === "" ? null : subsectionTitleRaw;
  const subsectionKey = `${subsectionTitle ?? "__NULL__"}::${toNumber(row.subsection_order, 0)}`;
  let subsection = section.subsections.get(subsectionKey);
  if (!subsection) {
    subsection = {
      title: subsectionTitle,
      order: toNumber(row.subsection_order, 0),
      visibility: (row.subsection_visibility || "default").trim() || "default",
      collapsedByDefault: toBoolean(row.subsection_collapsedByDefault),
      points: new Map<string, Point>(),
    };
    section.subsections.set(subsectionKey, subsection);
  }

  const uuid = row.point_uuid?.trim();
  if (!uuid) {
    return;
  }

  const pointKey = `${uuid}::${toNumber(row.point_order, 0)}`;
  let point = subsection.points.get(pointKey);
  if (!point) {
    point = {
      uuid,
      order: toNumber(row.point_order, 0),
      title: row.point_title ?? "",
      help: row.point_help ?? "",
      element_type: row.point_element_type ?? "",
      access: row.point_access ?? "",
      readOnly: toBoolean(row.point_readOnly),
      invokeButtonText: cleanupString(row.point_invokeButtonText),
      widget: cleanupString(row.point_widget),
      protocol: {
        matter: {
          MEP: cleanupString(row.point_protocol_MEP),
          Cluster: cleanupString(row.point_protocol_Cluster),
          Element: cleanupString(row.point_protocol_Element),
        },
      },
      entries: [],
    };
    subsection.points.set(pointKey, point);
  }

  const entry = buildEntry(row);
  if (entry) {
    point.entries.push({ order: toNumber(row.entry_order, point.entries.length + 1), data: entry });
  }
});

const themes = Array.from(themeMap.values())
  .sort((a, b) => a.order - b.order || a.themeName.localeCompare(b.themeName))
  .map((theme) => ({
    themeName: theme.themeName,
    sections: Array.from(theme.sections.values())
      .sort((a, b) => a.order - b.order || a.sectionTitle.localeCompare(b.sectionTitle))
      .map((section) => ({
        sectionTitle: section.sectionTitle,
        subsections: Array.from(section.subsections.values())
          .sort((a, b) => a.order - b.order || compareNullable(a.title, b.title))
          .map((subsection) => ({
            title: subsection.title,
            visibility: subsection.visibility,
            collapsedByDefault: subsection.collapsedByDefault,
            points: Array.from(subsection.points.values())
              .sort((a, b) => a.order - b.order || a.uuid.localeCompare(b.uuid))
              .map((point) => ({
                title: point.title,
                help: point.help,
                element_type: point.element_type,
                access: point.access,
                readOnly: point.readOnly,
                ...(point.invokeButtonText ? { invokeButtonText: point.invokeButtonText } : {}),
                ...(point.widget ? { widget: point.widget } : {}),
                entries: point.entries
                  .sort((a, b) => a.order - b.order)
                  .map(({ data }) => data),
                protocol: point.protocol,
                uuid: point.uuid,
              })),
          })),
      })),
  }));

const output: ThemeFile = {
  pageName,
  themes,
};

fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
console.log(`Wrote JSON with ${themes.length} themes to ${outputPath}`);

function parseCsv(content: string): CsvRow[] {
  const rows: string[][] = [];
  let current: string[] = [];
  let value = "";
  let inQuotes = false;

  const pushValue = () => {
    current.push(value);
    value = "";
  };

  const pushRow = () => {
    if (current.length === 0) {
      return;
    }
    rows.push(current);
    current = [];
  };

  const text = content.replace(/\r\n/g, "\n");
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];

    if (inQuotes) {
      if (char === "\"") {
        if (text[i + 1] === "\"") {
          value += "\"";
          i += 1;
        } else {
          inQuotes = false;
        }
      } else {
        value += char;
      }
      continue;
    }

    switch (char) {
      case "\"":
        inQuotes = true;
        break;
      case ",":
        pushValue();
        break;
      case "\n":
        pushValue();
        pushRow();
        break;
      case "\r":
        break;
      default:
        value += char;
    }
  }

  if (inQuotes) {
    throw new Error("CSV parse error: Unterminated quoted field");
  }

  if (value !== "" || current.length > 0) {
    pushValue();
    pushRow();
  }

  if (rows.length === 0) {
    return [];
  }

  const [header, ...data] = rows;
  if (!header || header.length === 0) {
    return [];
  }

  header[0] = stripBom(header[0]);

  const objects = data
    .filter((row) => row.some((cell) => (cell ?? "").trim() !== ""))
    .map((row) => {
      const obj: CsvRow = {};
      header.forEach((key, index) => {
        obj[key] = row[index] ?? "";
      });
      return obj;
    });

  return objects;
}

function stripBom(value: string): string {
  return value && value.charCodeAt(0) === 0xfeff ? value.slice(1) : value;
}

function compareByOrder(a: string | undefined, b: string | undefined): number {
  const orderA = toNumber(a, 0);
  const orderB = toNumber(b, 0);
  return orderA - orderB;
}

function toNumber(value: string | undefined, fallback: number): number {
  if (value === undefined || value === null || value === "") {
    return fallback;
  }
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function toBoolean(value: string | undefined): boolean {
  if (!value) {
    return false;
  }
  const normalized = value.trim().toLowerCase();
  return normalized === "true" || normalized === "1" || normalized === "yes";
}

function cleanupString(value: string | undefined): string | undefined {
  if (!value) {
    return undefined;
  }
  const trimmed = value.trim();
  return trimmed === "" ? undefined : trimmed;
}

function compareNullable(a: string | null, b: string | null): number {
  if (a === null && b === null) {
    return 0;
  }
  if (a === null) {
    return -1;
  }
  if (b === null) {
    return 1;
  }
  return a.localeCompare(b);
}

function buildEntry(row: CsvRow): Entry | undefined {
  const hasData = [
    row.entry_name,
    row.entry_arg,
    row.entry_dtype,
    row.entry_description,
    row.entry_longdescription,
    row.entry_unit,
    row.entry_value,
    row.entry_range_min,
    row.entry_range_max,
    row.entry_less_than,
    row.entry_greater_than,
    row.entry_meanings,
    row.entry_friendly_meanings,
    row.entry_protocol_MEP,
    row.entry_protocol_Cluster,
    row.entry_protocol_Element,
  ].some((value) => (value ?? "").trim() !== "");

  if (!hasData) {
    const arg = row.entry_arg?.trim();
    if (!arg) {
      return undefined;
    }
  }

  const entry: Entry = {
    name: row.entry_name ?? "",
    arg: row.entry_arg ?? "",
    dtype: row.entry_dtype ?? "",
    description: row.entry_description ?? "",
    longdescription: row.entry_longdescription ?? "",
  };

  const unit = cleanupString(row.entry_unit);
  if (unit !== undefined) {
    entry.unit = unit;
  }

  const valueRaw = cleanupString(row.entry_value);
  if (valueRaw !== undefined) {
    entry.value = valueRaw;
  }

  const rangeMin = cleanupString(row.entry_range_min);
  const rangeMax = cleanupString(row.entry_range_max);
  if (rangeMin !== undefined || rangeMax !== undefined) {
    const range: { min?: number; max?: number } = {};
    if (rangeMin !== undefined) {
      const minNumber = Number(rangeMin);
      if (Number.isFinite(minNumber)) {
        range.min = minNumber;
      }
    }
    if (rangeMax !== undefined) {
      const maxNumber = Number(rangeMax);
      if (Number.isFinite(maxNumber)) {
        range.max = maxNumber;
      }
    }
    if (range.min !== undefined || range.max !== undefined) {
      entry.range = range;
    }
  }

  const lessThan = cleanupString(row.entry_less_than);
  if (lessThan !== undefined) {
    entry.less_than = lessThan;
  }

  const greaterThan = cleanupString(row.entry_greater_than);
  if (greaterThan !== undefined) {
    entry.greater_than = greaterThan;
  }

  if (cleanupString(row.entry_meanings)) {
    try {
      entry.meanings = JSON.parse(row.entry_meanings!);
    } catch (error) {
      throw new Error(`Failed to parse entry_meanings JSON for point ${row.point_uuid}: ${(error as Error).message}`);
    }
  }

  if (cleanupString(row.entry_friendly_meanings)) {
    try {
      entry.friendly_meanings = JSON.parse(row.entry_friendly_meanings!);
    } catch (error) {
      throw new Error(`Failed to parse entry_friendly_meanings JSON for point ${row.point_uuid}: ${(error as Error).message}`);
    }
  }

  const entryProtocol = buildMatterProtocol(
    row.entry_protocol_MEP,
    row.entry_protocol_Cluster,
    row.entry_protocol_Element
  );
  if (entryProtocol) {
    entry.protocol = { matter: entryProtocol };
  }

  return entry;
}

function buildMatterProtocol(
  mepRaw?: string,
  clusterRaw?: string,
  elementRaw?: string
): MatterProtocol | undefined {
  const MEP = cleanupString(mepRaw);
  const Cluster = cleanupString(clusterRaw);
  const Element = cleanupString(elementRaw);

  if (!MEP && !Cluster && !Element) {
    return undefined;
  }

  return {
    ...(MEP ? { MEP } : {}),
    ...(Cluster ? { Cluster } : {}),
    ...(Element ? { Element } : {}),
  };
}
