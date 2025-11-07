import { useState } from 'react';
import { SectionBlock } from './SectionBlock';
import { ThemeDef, SectionDef, PointDef, EquipmentOption } from '../../types/schema';

interface ThemeBlockProps {
  theme: ThemeDef;
  themeId: string;
  searchQuery: string;
  pointMatchesSearch: (point: PointDef, query: string) => { matches: boolean; helpTextMatch: boolean };
  equipment: EquipmentOption;
}

export function ThemeBlock({
  theme,
  themeId,
  searchQuery,
  pointMatchesSearch,
  equipment,
}: ThemeBlockProps) {
  const [isOpen, setIsOpen] = useState(true);

  // Check if any section has matching points
  const hasMatches = theme.sections.some(section =>
    section.subsections.some(sub =>
      sub.points.some(p => pointMatchesSearch(p, searchQuery).matches)
    )
  );

  // Don't render if no matches when searching
  if (searchQuery.trim() && !hasMatches) {
    return null;
  }

  return (
    <div className="bg-white/0" id={themeId}>
      <button
        className="w-full flex items-center justify-between text-slate-900 text-2xl font-bold mb-6 border-b border-slate-300 pb-3 hover:text-emerald-600 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{theme.themeName}</span>
        <span className="text-slate-500 text-lg">{isOpen ? "▾" : "▸"}</span>
      </button>

      {isOpen && (
        <div className="flex flex-col gap-10">
          {theme.sections.map((section: SectionDef, idx: number) => {
            const sectionId = `${themeId}-section-${idx}`;
            return (
              <SectionBlock
                key={`${section.sectionTitle}-${idx}`}
                section={section}
                sectionId={sectionId}
                searchQuery={searchQuery}
                pointMatchesSearch={pointMatchesSearch}
                equipment={equipment}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
