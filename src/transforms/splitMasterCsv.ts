import fs from 'fs';
import { parse } from 'csv-parse/sync';
import { stringify } from 'csv-stringify/sync';

interface MasterRow {
  pageName: string;
  theme: string;
  theme_order: string;
  section: string;
  section_order: string;
  subsection: string;
  subsection_order: string;
  subsection_visibility: string;
  subsection_collapsedByDefault: string;
  point_uuid: string;
  point_order: string;
  point_title: string;
  point_help: string;
  point_element_type: string;
  point_access: string;
  point_readOnly: string;
  point_invokeButtonText: string;
  point_widget: string;
  point_protocol_MEP: string;
  point_protocol_Cluster: string;
  point_protocol_Element: string;
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
  entry_protocol_MEP: string;
  entry_protocol_Cluster: string;
  entry_protocol_Element: string;
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
  entry_protocol_MEP: string;
  entry_protocol_Cluster: string;
  entry_protocol_Element: string;
}

interface PointRow {
  theme: string;
  section: string;
  subsection: string;
  point_uuid: string;
  point_title: string;
  point_help: string;
  point_element_type: string;
  point_access: string;
  point_readOnly: string;
  point_invokeButtonText: string;
  point_widget: string;
  point_protocol_MEP: string;
  point_protocol_Cluster: string;
  point_protocol_Element: string;
  entries: string; // JSON stringified array of entries
}

// Read master.csv
const masterCsvContent = fs.readFileSync('master.csv', 'utf-8');
const masterRows: MasterRow[] = parse(masterCsvContent, {
  columns: true,
  skip_empty_lines: true,
});

console.log(`Loaded ${masterRows.length} rows from master.csv`);

// Group by different levels
const themes = new Map<string, { theme: string; theme_order: string }>();
const sections = new Map<string, { pageName: string; theme: string; section: string; section_order: string }>();
const subsections = new Map<string, {
  pageName: string;
  theme: string;
  section: string;
  subsection: string;
  subsection_order: string;
  subsection_visibility: string;
  subsection_collapsedByDefault: string;
}>();
const pointOrders = new Map<string, {
  pageName: string;
  theme: string;
  section: string;
  subsection: string;
  point_uuid: string;
  point_order: string;
}>();
const points = new Map<string, PointRow>();

// Process each row
for (const row of masterRows) {
  // Theme order
  const themeKey = `${row.pageName}|${row.theme}`;
  if (!themes.has(themeKey)) {
    themes.set(themeKey, {
      theme: row.theme,
      theme_order: row.theme_order,
    });
  }

  // Section order
  const sectionKey = `${row.theme}|${row.section}`;
  if (!sections.has(sectionKey)) {
    sections.set(sectionKey, {
      theme: row.theme,
      section: row.section,
      section_order: row.section_order,
    });
  }

  // Subsection order
  const subsectionKey = `${row.theme}|${row.section}|${row.subsection}`;
  if (!subsections.has(subsectionKey)) {
    subsections.set(subsectionKey, {
      theme: row.theme,
      section: row.section,
      subsection: row.subsection,
      subsection_order: row.subsection_order,
      subsection_visibility: row.subsection_visibility,
      subsection_collapsedByDefault: row.subsection_collapsedByDefault,
    });
  }

  // Point order
  const pointOrderKey = `${row.theme}|${row.section}|${row.subsection}|${row.point_uuid}`;
  if (!pointOrders.has(pointOrderKey)) {
    pointOrders.set(pointOrderKey, {
      theme: row.theme,
      section: row.section,
      subsection: row.subsection,
      point_uuid: row.point_uuid,
      point_order: row.point_order,
    });
  }

  // Points with entries
  const pointKey = `${row.theme}|${row.section}|${row.subsection}|${row.point_uuid}`;
  if (!points.has(pointKey)) {
    points.set(pointKey, {
      theme: row.theme,
      section: row.section,
      subsection: row.subsection,
      point_uuid: row.point_uuid,
      point_title: row.point_title,
      point_help: row.point_help,
      point_element_type: row.point_element_type,
      point_access: row.point_access,
      point_readOnly: row.point_readOnly,
      point_invokeButtonText: row.point_invokeButtonText,
      point_widget: row.point_widget,
      point_protocol_MEP: row.point_protocol_MEP,
      point_protocol_Cluster: row.point_protocol_Cluster,
      point_protocol_Element: row.point_protocol_Element,
      entries: '[]', // Will be populated below
    });
  }

  // Add entry to point if entry data exists
  if (row.entry_order || row.entry_name) {
    const point = points.get(pointKey)!;
    const entries: PointEntry[] = JSON.parse(point.entries);
    entries.push({
      entry_order: row.entry_order,
      entry_name: row.entry_name,
      entry_arg: row.entry_arg,
      entry_dtype: row.entry_dtype,
      entry_description: row.entry_description,
      entry_longdescription: row.entry_longdescription,
      entry_unit: row.entry_unit,
      entry_value: row.entry_value,
      entry_range_min: row.entry_range_min,
      entry_range_max: row.entry_range_max,
      entry_less_than: row.entry_less_than,
      entry_greater_than: row.entry_greater_than,
      entry_meanings: row.entry_meanings,
      entry_friendly_meanings: row.entry_friendly_meanings,
      entry_protocol_MEP: row.entry_protocol_MEP,
      entry_protocol_Cluster: row.entry_protocol_Cluster,
      entry_protocol_Element: row.entry_protocol_Element,
    });
    point.entries = JSON.stringify(entries);
  }
}

// Write theme_order.csv
const themeOrderCsv = stringify(
  Array.from(themes.values()),
  {
    header: true,
    columns: ['theme', 'theme_order'],
  }
);
fs.writeFileSync('theme_order.csv', themeOrderCsv);
console.log(`Wrote ${themes.size} themes to theme_order.csv`);

// Write section_order.csv
const sectionOrderCsv = stringify(
  Array.from(sections.values()),
  {
    header: true,
    columns: ['theme', 'section', 'section_order'],
  }
);
fs.writeFileSync('section_order.csv', sectionOrderCsv);
console.log(`Wrote ${sections.size} sections to section_order.csv`);

// Write subsection_order.csv
const subsectionOrderCsv = stringify(
  Array.from(subsections.values()),
  {
    header: true,
    columns: ['theme', 'section', 'subsection', 'subsection_order', 'subsection_visibility', 'subsection_collapsedByDefault'],
  }
);
fs.writeFileSync('subsection_order.csv', subsectionOrderCsv);
console.log(`Wrote ${subsections.size} subsections to subsection_order.csv`);

// Write point_order.csv
const pointOrderCsv = stringify(
  Array.from(pointOrders.values()),
  {
    header: true,
    columns: ['theme', 'section', 'subsection', 'point_uuid', 'point_order'],
  }
);
fs.writeFileSync('point_order.csv', pointOrderCsv);
console.log(`Wrote ${pointOrders.size} point orders to point_order.csv`);

// Write points.csv
const pointsCsv = stringify(
  Array.from(points.values()),
  {
    header: true,
    columns: [
      'theme',
      'section',
      'subsection',
      'point_uuid',
      'point_title',
      'point_help',
      'point_element_type',
      'point_access',
      'point_readOnly',
      'point_invokeButtonText',
      'point_widget',
      'point_protocol_MEP',
      'point_protocol_Cluster',
      'point_protocol_Element',
      'entries',
    ],
  }
);
fs.writeFileSync('points.csv', pointsCsv);
console.log(`Wrote ${points.size} points to points.csv`);

console.log('Split complete!');
