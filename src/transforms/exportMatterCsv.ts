#!/usr/bin/env node

import * as fs from "fs";
import * as path from "path";

interface MatterProtocol {
  MEP?: string;
  Cluster?: string;
  Element?: string;
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
  title?: string;
  help?: string;
  element_type?: string;
  access?: string;
  readOnly?: boolean;
  invokeButtonText?: string;
  widget?: string;
  uuid?: string;
  entries?: Entry[];
  protocol?: { matter?: MatterProtocol; [key: string]: unknown };
}

interface Subsection {
  title?: string | null;
  visibility?: string;
  collapsedByDefault?: boolean;
  points?: Point[];
}

interface Section {
  sectionTitle?: string;
  subsections?: Subsection[];
}

interface Theme {
  themeName?: string;
  sections?: Section[];
}

interface ThemeFile {
  pageName?: string;
  themes?: Theme[];
}

const DEFAULT_INPUT = path.resolve(process.cwd(), "src/themes/demo.json");
const DEFAULT_OUTPUT = path.resolve(process.cwd(), "master.csv");

const inputPath = process.argv[2] ? path.resolve(process.cwd(), process.argv[2]) : DEFAULT_INPUT;
const outputPath = process.argv[3] ? path.resolve(process.cwd(), process.argv[3]) : DEFAULT_OUTPUT;

if (!fs.existsSync(inputPath)) {
  console.error(`Input file not found: ${inputPath}`);
  process.exit(1);
}

const raw = fs.readFileSync(inputPath, "utf-8");
const data: ThemeFile = JSON.parse(raw);

const headers = [
  "pageName",
  "theme",
  "theme_order",
  "section",
  "section_order",
  "subsection",
  "subsection_order",
  "subsection_visibility",
  "subsection_collapsedByDefault",
  "point_uuid",
  "point_order",
  "point_title",
  "point_help",
  "point_element_type",
  "point_access",
  "point_readOnly",
  "point_invokeButtonText",
  "point_widget",
  "point_protocol_MEP",
  "point_protocol_Cluster",
  "point_protocol_Element",
  "entry_order",
  "entry_name",
  "entry_arg",
  "entry_dtype",
  "entry_description",
  "entry_longdescription",
  "entry_unit",
  "entry_value",
  "entry_range_min",
  "entry_range_max",
  "entry_less_than",
  "entry_greater_than",
  "entry_meanings",
  "entry_friendly_meanings",
  "entry_protocol_MEP",
  "entry_protocol_Cluster",
  "entry_protocol_Element"
];

const rows: Record<string, string>[] = [];
const pageName = data.pageName ?? "";

const themes = Array.isArray(data.themes) ? data.themes : [];
themes.forEach((theme, themeIdx) => {
  const themeName = theme?.themeName ?? "";
  const sections = Array.isArray(theme?.sections) ? theme.sections : [];

  sections.forEach((section, sectionIdx) => {
    const sectionTitle = section?.sectionTitle ?? "";
    const subsections = Array.isArray(section?.subsections) ? section.subsections : [];

    subsections.forEach((subsection, subsectionIdx) => {
      const subsectionTitle = subsection?.title ?? "";
      const visibility = subsection?.visibility ?? "default";
      const collapsedByDefault = subsection?.collapsedByDefault ? "true" : "";
      const points = Array.isArray(subsection?.points) ? subsection.points : [];

      points.forEach((point, pointIdx) => {
        const protocolMatter = point?.protocol?.matter;
        if (!protocolMatter) {
          return; // Skip non-Matter points (e.g., Modbus)
        }

        const entries = Array.isArray(point?.entries) && point.entries.length > 0 ? point.entries : [undefined];

        entries.forEach((entry, entryIdx) => {
          const entryProtocolMatter = entry?.protocol?.matter;
          const range = entry?.range ?? {};

          const row: Record<string, string> = {
            pageName,
            theme: themeName,
            theme_order: String(themeIdx + 1),
            section: sectionTitle,
            section_order: String(sectionIdx + 1),
            subsection: subsectionTitle ?? "",
            subsection_order: String(subsectionIdx + 1),
            subsection_visibility: visibility,
            subsection_collapsedByDefault: collapsedByDefault,
            point_uuid: point?.uuid ?? "",
            point_order: String(pointIdx + 1),
            point_title: point?.title ?? "",
            point_help: point?.help ?? "",
            point_element_type: point?.element_type ?? "",
            point_access: point?.access ?? "",
            point_readOnly: point?.readOnly ? "true" : "",
            point_invokeButtonText: point?.invokeButtonText ?? "",
            point_widget: point?.widget ?? "",
            point_protocol_MEP: protocolMatter?.MEP ?? "",
            point_protocol_Cluster: protocolMatter?.Cluster ?? "",
            point_protocol_Element: protocolMatter?.Element ?? "",
            entry_order: entry ? String(entryIdx + 1) : "",
            entry_name: entry?.name ?? "",
            entry_arg: entry?.arg ?? "",
            entry_dtype: entry?.dtype ?? "",
            entry_description: entry?.description ?? "",
            entry_longdescription: entry?.longdescription ?? "",
            entry_unit: entry?.unit ?? "",
            entry_value: entry?.value !== undefined ? String(entry.value) : "",
            entry_range_min:
              range?.min !== undefined && range.min !== null ? String(range.min) : "",
            entry_range_max:
              range?.max !== undefined && range.max !== null ? String(range.max) : "",
            entry_less_than: entry?.less_than ?? "",
            entry_greater_than: entry?.greater_than ?? "",
            entry_meanings: entry?.meanings ? JSON.stringify(entry.meanings) : "",
            entry_friendly_meanings: entry?.friendly_meanings
              ? JSON.stringify(entry.friendly_meanings)
              : "",
            entry_protocol_MEP: entryProtocolMatter?.MEP ?? "",
            entry_protocol_Cluster: entryProtocolMatter?.Cluster ?? "",
            entry_protocol_Element: entryProtocolMatter?.Element ?? ""
          };

          rows.push(row);
        });
      });
    });
  });
});

function escapeCsvField(value: string): string {
  if (value === undefined || value === null) {
    return "";
  }

  const needsQuotes = /[",\n\r]/.test(value);
  let escaped = value.replace(/"/g, '""');

  return needsQuotes ? `"${escaped}"` : escaped;
}

const csvLines: string[] = [];
csvLines.push(headers.join(","));
rows.forEach((row) => {
  const line = headers.map((header) => escapeCsvField(row[header] ?? "")).join(",");
  csvLines.push(line);
});

fs.writeFileSync(outputPath, csvLines.join("\n"));

console.log(`Exported ${rows.length} Matter entry rows to ${outputPath}`);
