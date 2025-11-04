import fs from 'fs';
import { parse } from 'csv-parse/sync';

interface ThemeOrder {
  theme: string;
  theme_order: string;
}

interface SectionOrder {
  pageName: string;
  theme: string;
  section: string;
  section_order: string;
}

interface SubsectionOrder {
  pageName: string;
  theme: string;
  section: string;
  subsection: string;
  subsection_order: string;
  subsection_visibility: string;
  subsection_collapsedByDefault: string;
}

interface PointOrder {
  pageName: string;
  theme: string;
  section: string;
  subsection: string;
  point_uuid: string;
  point_order: string;
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

// Read all CSV files
console.log('Reading CSV files...');
const themeOrders: ThemeOrder[] = parse(fs.readFileSync('theme_order.csv', 'utf-8'), {
  columns: true,
  skip_empty_lines: true,
});
const sectionOrders: SectionOrder[] = parse(fs.readFileSync('section_order.csv', 'utf-8'), {
  columns: true,
  skip_empty_lines: true,
});
const subsectionOrders: SubsectionOrder[] = parse(fs.readFileSync('subsection_order.csv', 'utf-8'), {
  columns: true,
  skip_empty_lines: true,
});
const pointOrders: PointOrder[] = parse(fs.readFileSync('point_order.csv', 'utf-8'), {
  columns: true,
  skip_empty_lines: true,
});
const points: Point[] = parse(fs.readFileSync('points.csv', 'utf-8'), {
  columns: true,
  skip_empty_lines: true,
});

console.log(`Loaded ${themeOrders.length} themes, ${sectionOrders.length} sections, ${subsectionOrders.length} subsections, ${pointOrders.length} point orders, ${points.length} points`);

// Assume single page for now - get pageName from first section order
const pageName = sectionOrders[0]?.pageName || 'Unknown';

// Build the JSON structure
const output: JsonOutput = {
  pageName,
  themes: [],
};

// Sort themes by theme_order
themeOrders.sort((a, b) => parseInt(a.theme_order) - parseInt(b.theme_order));

for (const themeOrder of themeOrders) {
  const theme: JsonTheme = {
    themeName: themeOrder.theme,
    sections: [],
  };

  // Get sections for this theme, sorted by section_order
  const themeSections = sectionOrders
    .filter((s) => s.theme === themeOrder.theme)
    .sort((a, b) => parseInt(a.section_order) - parseInt(b.section_order));

  for (const sectionOrder of themeSections) {
    const section: JsonSection = {
      sectionTitle: sectionOrder.section,
      subsections: [],
    };

    // Get subsections for this section, sorted by subsection_order
    const sectionSubsections = subsectionOrders
      .filter((ss) => ss.theme === themeOrder.theme && ss.section === sectionOrder.section)
      .sort((a, b) => parseInt(a.subsection_order) - parseInt(b.subsection_order));

    for (const subsectionOrder of sectionSubsections) {
      const subsection: JsonSubsection = {
        title: subsectionOrder.subsection || null,
        visibility: subsectionOrder.subsection_visibility,
        collapsedByDefault: subsectionOrder.subsection_collapsedByDefault === 'true' || subsectionOrder.subsection_collapsedByDefault === '1',
        points: [],
      };

      // Get points for this subsection, sorted by point_order
      const subsectionPointOrders = pointOrders
        .filter(
          (po) =>
            po.theme === themeOrder.theme &&
            po.section === sectionOrder.section &&
            po.subsection === subsectionOrder.subsection
        )
        .sort((a, b) => parseInt(a.point_order) - parseInt(b.point_order));

      for (const pointOrder of subsectionPointOrders) {
        // Find the point data
        const pointData = points.find(
          (p) =>
            p.theme === themeOrder.theme &&
            p.section === sectionOrder.section &&
            p.subsection === subsectionOrder.subsection &&
            p.point_uuid === pointOrder.point_uuid
        );

        if (!pointData) {
          console.warn(`Warning: Point ${pointOrder.point_uuid} not found in points.csv`);
          continue;
        }

        // Parse entries
        const entries: PointEntry[] = JSON.parse(pointData.entries);

        // Convert entries to JSON format
        const jsonEntries: JsonEntry[] = entries
          .sort((a, b) => parseInt(a.entry_order) - parseInt(b.entry_order))
          .map((entry) => {
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
          });

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

        subsection.points.push(jsonPoint);
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
