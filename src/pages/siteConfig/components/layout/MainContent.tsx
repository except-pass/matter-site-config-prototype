import { ThemeDef, PointDef } from "../../types/schema";
import { EquipmentOption } from "../../types/equipment";
import { ThemeBlock } from "../blocks/ThemeBlock";

export interface MainContentProps {
  themes: ThemeDef[];
  searchQuery: string;
  pointMatchesSearch: (point: PointDef, query: string) => { matches: boolean; helpTextMatch: boolean };
  equipment: EquipmentOption;
}

export function MainContent({
  themes,
  searchQuery,
  pointMatchesSearch,
  equipment,
}: MainContentProps) {
  return (
    <div className="flex flex-col gap-16">
      {themes.map((theme: ThemeDef, idx: number) => {
        const themeId = `theme-${idx}`;
        return (
          <ThemeBlock
            key={`${theme.themeName}-${idx}`}
            theme={theme}
            themeId={themeId}
            themeIndex={idx}
            searchQuery={searchQuery}
            pointMatchesSearch={pointMatchesSearch}
            equipment={equipment}
          />
        );
      })}
      {!themes.length && (
        <div className="text-sm text-slate-600 border border-dashed border-slate-300 rounded-lg p-6 bg-white/60">
          This page does not define any themes yet.
        </div>
      )}
    </div>
  );
}
