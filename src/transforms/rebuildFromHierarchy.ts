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
  entry_protocol_MEP: string;
  entry_protocol_Cluster: string;
  entry_protocol_Element: string;
}

interface Point {
  pageName: string;
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
  pageName: string;
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
  const key = `${point.theme}|${point.section}|${point.subsection}|${point.point_uuid}`;
  pointMap.set(key, point);
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

  // Add protocol if present
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

// Helper function to convert point to JSON format
function convertPointToJson(pointData: Point): JsonPoint {
  // Parse entries
  const entries: PointEntry[] = JSON.parse(pointData.entries);

  // Convert entries to JSON format
  const jsonEntries: JsonEntry[] = entries
    .sort((a, b) => parseInt(a.entry_order) - parseInt(b.entry_order))
    .map(convertEntryToJson);

  // Create the point
  const jsonPoint: JsonPoint = {
    title: pointData.point_title,
    help: pointData.point_help,
    element_type: pointData.point_element_type,
    access: pointData.point_access,
    readOnly: pointData.point_readOnly === 'true' || pointData.point_readOnly === '1',
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

  // Add optional fields
  if (pointData.point_invokeButtonText) jsonPoint.invokeButtonText = pointData.point_invokeButtonText;
  if (pointData.point_widget) jsonPoint.widget = pointData.point_widget;

  return jsonPoint;
}

// Build the JSON structure from hierarchy
const output: JsonOutput = {
  pageName: hierarchy.pageName,
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
      for (const pointUuid of subsectionSpec.points) {
        const key = `${themeSpec.name}|${sectionSpec.name}|${subsectionSpec.name || ''}|${pointUuid}`;
        const pointData = pointMap.get(key);

        if (!pointData) {
          console.warn(`Warning: Point ${pointUuid} not found in points.csv (theme: ${themeSpec.name}, section: ${sectionSpec.name}, subsection: ${subsectionSpec.name || 'none'})`);
          continue;
        }

        subsection.points.push(convertPointToJson(pointData));
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
