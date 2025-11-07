import { useState } from 'react';
import { SubsectionBlock } from './SubsectionBlock';
import { SectionDef, PointDef, EquipmentOption } from '../../types/schema';

interface SectionBlockProps {
  section: SectionDef;
  sectionId: string;
  searchQuery: string;
  pointMatchesSearch: (point: PointDef, query: string) => { matches: boolean; helpTextMatch: boolean };
  equipment: EquipmentOption;
}

export function SectionBlock({
  section,
  sectionId,
  searchQuery,
  pointMatchesSearch,
  equipment,
}: SectionBlockProps) {
  const [isOpen, setIsOpen] = useState(true);

  // Check if any subsection has matching points
  const hasMatches = section.subsections.some(sub =>
    sub.points.some(p => pointMatchesSearch(p, searchQuery).matches)
  );

  // Don't render if no matches when searching
  if (searchQuery.trim() && !hasMatches) {
    return null;
  }

  return (
    <section className="bg-white/0" id={sectionId}>
      <button
        className="w-full flex items-center justify-between text-slate-900 text-lg font-semibold mb-3 hover:text-emerald-600 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{section.sectionTitle}</span>
        <span className="text-slate-500 text-sm">{isOpen ? "▾" : "▸"}</span>
      </button>

      {isOpen && (
        <div>
          {section.subsections.map((sub, i) => (
            <SubsectionBlock
              key={i}
              subsection={sub}
              searchQuery={searchQuery}
              pointMatchesSearch={pointMatchesSearch}
              equipment={equipment}
            />
          ))}
        </div>
      )}
    </section>
  );
}
