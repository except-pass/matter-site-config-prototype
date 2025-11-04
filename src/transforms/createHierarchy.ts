import fs from 'fs';
import { parse } from 'csv-parse/sync';
import * as yaml from 'yaml';

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

// Read CSV files
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

// Get page name
const pageName = sectionOrders[0]?.pageName || 'Unknown';

// Build hierarchy
const hierarchy: any = {
  pageName,
  themes: [],
};

// Sort themes by theme_order
themeOrders.sort((a, b) => parseInt(a.theme_order) - parseInt(b.theme_order));

for (const themeOrder of themeOrders) {
  const theme: any = {
    name: themeOrder.theme,
    sections: [],
  };

  // Get sections for this theme, sorted by section_order
  const themeSections = sectionOrders
    .filter((s) => s.theme === themeOrder.theme)
    .sort((a, b) => parseInt(a.section_order) - parseInt(b.section_order));

  for (const sectionOrder of themeSections) {
    const section: any = {
      name: sectionOrder.section,
      subsections: [],
    };

    // Get subsections for this section, sorted by subsection_order
    const sectionSubsections = subsectionOrders
      .filter((ss) => ss.theme === themeOrder.theme && ss.section === sectionOrder.section)
      .sort((a, b) => parseInt(a.subsection_order) - parseInt(b.subsection_order));

    for (const subsectionOrder of sectionSubsections) {
      const subsection: any = {
        points: [],
      };

      // Add name only if not empty
      if (subsectionOrder.subsection) {
        subsection.name = subsectionOrder.subsection;
      }

      // Add visibility if not default
      if (subsectionOrder.subsection_visibility && subsectionOrder.subsection_visibility !== 'default') {
        subsection.visibility = subsectionOrder.subsection_visibility;
      }

      // Add collapsedByDefault if true
      if (subsectionOrder.subsection_collapsedByDefault === 'true' || subsectionOrder.subsection_collapsedByDefault === '1') {
        subsection.collapsedByDefault = true;
      }

      // Get points for this subsection, sorted by point_order
      const subsectionPointOrders = pointOrders
        .filter(
          (po) =>
            po.theme === themeOrder.theme &&
            po.section === sectionOrder.section &&
            po.subsection === subsectionOrder.subsection
        )
        .sort((a, b) => parseInt(a.point_order) - parseInt(b.point_order));

      subsection.points = subsectionPointOrders.map((po) => po.point_uuid);

      section.subsections.push(subsection);
    }

    theme.sections.push(section);
  }

  hierarchy.themes.push(theme);
}

// Write YAML file
const yamlContent = yaml.stringify(hierarchy);
fs.writeFileSync('hierarchy.yaml', yamlContent);
console.log('Created hierarchy.yaml');
console.log(`Structure: ${hierarchy.themes.length} themes, ${hierarchy.themes.reduce((sum: number, t: any) => sum + t.sections.length, 0)} sections`);
