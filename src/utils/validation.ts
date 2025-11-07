import { PageDef } from '../types/schema';

// -----------------------------------------------------------------------------
// Simple runtime sanity checks (dev-only console warnings)
// -----------------------------------------------------------------------------
export function assertSchemaExpectations(page: PageDef | null) {
  if (!page) {
    return;
  }

  if (!Array.isArray(page.themes)) {
    console.error("[SchemaTest] page.themes is missing or not an array");
    return;
  }

  page.themes.forEach((theme: any, tIdx: number) => {
    if (!Array.isArray(theme.sections)) {
      console.error(
        `[SchemaTest] theme ${tIdx} (${theme.themeName}) has no sections array`
      );
      return;
    }

    theme.sections.forEach((section: any, sIdx: number) => {
      if (!Array.isArray(section.subsections)) {
        console.error(
          `[SchemaTest] theme ${tIdx} / section ${sIdx} (${section.sectionTitle}) has no subsections array`
        );
      }
    });

    theme.sections.forEach((section: any, sIdx: number) => {
      section.subsections?.forEach((sub: any, subIdx: number) => {
        if (!Array.isArray(sub.points)) {
          console.error(
            `[SchemaTest] theme ${tIdx} / section ${sIdx} / subsection ${subIdx} (${sub.title}) has no points array`
          );
          return;
        }

        sub.points.forEach((point: any, pIdx: number) => {
          if (!Array.isArray(point.entries)) {
            console.error(
              `[SchemaTest] theme ${tIdx} / section ${sIdx} / subsection ${subIdx} / point ${pIdx} (${point.title}) has no entries array`
            );
            return;
          }

          point.entries.forEach((entry: any, eIdx: number) => {
            const allowed = ['enum', 'String', 'Number'];
            const isBitfield = entry.dtype && typeof entry.dtype === 'string' && entry.dtype.startsWith('bitfield');
            if (!allowed.includes(entry.dtype) && !isBitfield) {
              console.error(
                `[SchemaTest] entry ${entry.name ?? eIdx} in point ${point.title} has unsupported dtype ${entry.dtype}`
              );
            }
          });
        });
      });
    });
  });

  const firstPoint =
    page.themes?.[0]?.sections?.[0]?.subsections?.[0]?.points?.[0] || null;
  if (firstPoint) {
    if (!firstPoint.command_id) {
      console.error("[SchemaTest] firstPoint.command_id missing");
    }
    if (!firstPoint.protocol) {
      console.error("[SchemaTest] firstPoint.protocol missing");
    }
  }
}
