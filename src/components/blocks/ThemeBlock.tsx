import { useState } from 'react';
import { SectionBlock } from './SectionBlock';
import { ThemeDef, SectionDef, PointDef, EquipmentOption } from '../../types/schema';

interface ThemeBlockProps {
  theme: ThemeDef;
  themeId: string;
  themeIndex: number;
  searchQuery: string;
  pointMatchesSearch: (point: PointDef, query: string) => { matches: boolean; helpTextMatch: boolean };
  equipment: EquipmentOption;
}

// Color palette for theme headers (background colors)
const themeColors = [
  { bg: 'bg-brand-green/10', border: 'border-brand-green/30', text: 'text-slate-900', hover: 'hover:bg-brand-green/20' },
  { bg: 'bg-brand-teal/10', border: 'border-brand-teal/30', text: 'text-slate-900', hover: 'hover:bg-brand-teal/20' },
  { bg: 'bg-brand-emerald/10', border: 'border-brand-emerald/30', text: 'text-slate-900', hover: 'hover:bg-brand-emerald/20' },
  { bg: 'bg-brand-cyan/10', border: 'border-brand-cyan/30', text: 'text-slate-900', hover: 'hover:bg-brand-cyan/20' },
  { bg: 'bg-brand-mint/10', border: 'border-brand-mint/30', text: 'text-slate-900', hover: 'hover:bg-brand-mint/20' },
  { bg: 'bg-brand-forest/10', border: 'border-brand-forest/30', text: 'text-slate-900', hover: 'hover:bg-brand-forest/20' },
  { bg: 'bg-brand-sage/10', border: 'border-brand-sage/30', text: 'text-slate-900', hover: 'hover:bg-brand-sage/20' },
];

export function ThemeBlock({
  theme,
  themeId,
  themeIndex,
  searchQuery,
  pointMatchesSearch,
  equipment,
}: ThemeBlockProps) {
  const [isOpen, setIsOpen] = useState(true);

  // Get color for this theme
  const colorScheme = themeColors[themeIndex % themeColors.length];

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
        className={`w-full flex items-center justify-between ${colorScheme.bg} ${colorScheme.text} text-2xl font-bold mb-6 border-b ${colorScheme.border} pb-3 px-4 py-2 rounded-lg ${colorScheme.hover} transition-all`}
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
