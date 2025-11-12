import { useState } from 'react';
import { PointCard } from '../point/PointCard';
import { SubsectionDef, PointDef, EquipmentOption } from '../../types/schema';

interface SubsectionBlockProps {
  subsection: SubsectionDef;
  searchQuery: string;
  pointMatchesSearch: (point: PointDef, query: string) => { matches: boolean; helpTextMatch: boolean };
  equipment: EquipmentOption;
}

export function SubsectionBlock({
  subsection,
  searchQuery,
  pointMatchesSearch,
  equipment,
}: SubsectionBlockProps) {
  const [open, setOpen] = useState(!subsection.collapsedByDefault);

  // Filter points based on search
  const filteredPoints = subsection.points
    .map(p => ({ point: p, searchResult: pointMatchesSearch(p, searchQuery) }))
    .filter(({ searchResult }) => searchResult.matches);

  // Don't render if no points match search
  if (filteredPoints.length === 0) {
    return null;
  }

  // Auto-expand if searching and has matches
  const shouldBeOpen = searchQuery.trim() ? true : open;

  // always-open subsection (normal/default)
  if (!subsection.collapsedByDefault) {
    return (
      <div className="mb-6">
        {subsection.title && (
          <div className="text-slate-700 text-sm font-semibold mb-2 flex items-center gap-2">
            <span>{subsection.title}</span>
          </div>
        )}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredPoints.map(({ point, searchResult }) => (
            <PointCard
              key={point.command_id}
              point={point}
              helpTextMatch={searchResult.helpTextMatch}
              equipment={equipment}
            />
          ))}
        </div>
      </div>
    );
  }

  // collapsed-by-default subsection (Advanced)
  return (
    <div className="border border-slate-300 bg-white rounded-xl shadow-sm mb-8">
      <button
        className="w-full flex items-center justify-between px-4 py-2 text-left"
        onClick={() => setOpen((s) => !s)}
      >
        <span className="text-slate-800 text-sm font-semibold uppercase tracking-wide">
          {subsection.title || "Advanced"}
        </span>
        <span className="text-slate-500 text-xs">{shouldBeOpen ? "▾" : "▸"}</span>
      </button>

      {shouldBeOpen && (
        <div className="p-4 border-t border-slate-200 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredPoints.map(({ point, searchResult }) => (
            <PointCard
              key={point.command_id}
              point={point}
              helpTextMatch={searchResult.helpTextMatch}
              equipment={equipment}
            />
          ))}
        </div>
      )}
    </div>
  );
}
