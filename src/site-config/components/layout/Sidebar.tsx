import { ThemeDef, SectionDef } from "../../types/schema";
import { EquipmentOption } from "../../types/equipment";

export interface SidebarProps {
  themes: ThemeDef[];
  activeSection: string;
  selectedEquipmentId: string;
  onEquipmentChange: (equipmentId: string) => void;
  equipmentOptions: EquipmentOption[];
}

export function Sidebar({
  themes,
  activeSection,
  selectedEquipmentId,
  onEquipmentChange,
  equipmentOptions,
}: SidebarProps) {
  return (
    <aside className="w-64 shrink-0 rounded-xl border border-slate-300 bg-white shadow-sm p-4 flex flex-col gap-4 h-screen sticky top-0 overflow-y-auto">
      {/* Equipment selector */}
      <div>
        <label className="text-[11px] text-slate-500 uppercase font-medium mb-1 block">
          Equipment
        </label>
        <select
          className="w-full rounded border border-slate-300 bg-white px-2 py-2 text-sm text-slate-800"
          value={selectedEquipmentId}
          onChange={(event) => onEquipmentChange(event.target.value)}
        >
          {equipmentOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Procedural nav from themes and sections */}
      <nav className="text-sm text-slate-800">
        <div className="text-emerald-600 font-semibold mb-2">Navigation</div>
        <div className="flex flex-col gap-3">
          {themes.map((theme: ThemeDef, themeIdx: number) => {
            const themeId = `theme-${themeIdx}`;
            const isThemeActive = activeSection === themeId || activeSection.startsWith(`${themeId}-section`);

            return (
              <div key={`${theme.themeName}-${themeIdx}`}>
                <div className="relative">
                  {/* Active indicator bar */}
                  {isThemeActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 rounded-r" />
                  )}
                  <button
                    className={`font-semibold text-xs uppercase tracking-wide mb-1 px-2 hover:text-emerald-600 transition-colors w-full text-left ${
                      isThemeActive ? 'text-emerald-600' : 'text-slate-900'
                    }`}
                    onClick={() => {
                      document.getElementById(themeId)?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }}
                  >
                    {theme.themeName}
                  </button>
                </div>
                <ul className="pl-2 flex flex-col gap-1 text-slate-700">
                  {theme.sections.map((section: SectionDef, sectionIdx: number) => {
                    const sectionId = `${themeId}-section-${sectionIdx}`;
                    const isSectionActive = activeSection === sectionId;

                    return (
                      <li key={`${section.sectionTitle}-${sectionIdx}`} className="relative">
                        {/* Active indicator bar */}
                        {isSectionActive && (
                          <div className="absolute left-0 top-1 bottom-1 w-1 bg-blue-500 rounded-r" />
                        )}
                        <button
                          className={`px-2 py-1 hover:bg-slate-50 rounded text-xs w-full text-left transition-colors ${
                            isSectionActive ? 'text-blue-600 font-medium bg-blue-50' : 'text-slate-700'
                          }`}
                          onClick={() => {
                            document.getElementById(sectionId)?.scrollIntoView({
                              behavior: 'smooth',
                              block: 'start'
                            });
                          }}
                        >
                          {section.sectionTitle}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          {!themes.length && (
            <div className="text-xs text-slate-500">No themes defined.</div>
          )}
        </div>
      </nav>
    </aside>
  );
}
