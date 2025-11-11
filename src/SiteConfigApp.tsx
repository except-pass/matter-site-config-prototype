import { useEffect, useMemo, useState } from "react";

// Types and equipment data
import { PageDef, PageRegistryEntry } from "./types/schema";
import { equipmentOptions } from "./types/equipment";

// Hooks
import { useThemeLoader } from "./hooks/useThemeLoader";
import { useScrollTracking } from "./hooks/useScrollTracking";
import { useSearch } from "./hooks/useSearch";

// Layout components
import { Sidebar } from "./components/layout/Sidebar";
import { Header } from "./components/layout/Header";
import { MainContent } from "./components/layout/MainContent";

// Utils
import { assertSchemaExpectations } from "./utils/validation";

// -----------------------------------------------------------------------------
// Page catalogue loaded from JSON files under src/themes
// -----------------------------------------------------------------------------

// Load pages - either from specific file or glob pattern
const pageModules = import.meta.glob<PageDef>("./themes/*.json", {
  eager: true,
  import: "default"
});

const pageRegistry: PageRegistryEntry[] = Object.entries(pageModules)
  .map(([path, data]) => {
    const filename = path.split("/").pop() ?? path;
    const id = filename.replace(/\.json$/i, "");
    const label = data.pageName?.trim() || id;
    return {
      id,
      label,
      filename,
      data
    };
  })
  .sort((a, b) => a.label.localeCompare(b.label, undefined, { sensitivity: "base" }));

const pageLookup: Record<string, PageDef> = pageRegistry.reduce(
  (acc, entry) => {
    acc[entry.id] = entry.data;
    return acc;
  },
  {} as Record<string, PageDef>
);

// -----------------------------------------------------------------------------
// Main Application Component
// -----------------------------------------------------------------------------
export default function PointThemeDemoPage() {
  // Load theme files (handles both static and dynamic loading)
  const {
    pageRegistry: loadedPageRegistry,
    pageLookup: loadedPageLookup,
    isLoading,
    loadError,
    themeFile
  } = useThemeLoader(pageRegistry, pageLookup);

  // Page and equipment selection
  const defaultPageId = loadedPageRegistry[0]?.id ?? "";
  const [selectedPageId] = useState(defaultPageId);
  const [selectedEquipmentId, setSelectedEquipmentId] = useState(
    equipmentOptions[0]?.id ?? ""
  );

  // Active section tracking for navigation highlighting
  const activeSection = useScrollTracking();

  // Search functionality
  const { searchQuery, setSearchQuery, pointMatchesSearch } = useSearch();

  // Last updated timestamp
  const lastUpdatedAt = useMemo(() => new Date(Date.now() - 15 * 60 * 1000), []);
  const lastUpdatedLabel = useMemo(
    () =>
      lastUpdatedAt.toLocaleString(undefined, {
        dateStyle: "medium",
        timeStyle: "short"
      }),
    [lastUpdatedAt]
  );

  // Get active page and equipment
  const activePage: PageDef | null =
    (selectedPageId && loadedPageLookup[selectedPageId]) ||
    (defaultPageId && loadedPageLookup[defaultPageId]) ||
    null;

  const activeEquipment = useMemo(() => {
    return equipmentOptions.find((eq) => eq.id === selectedEquipmentId) || equipmentOptions[0];
  }, [selectedEquipmentId]);

  // Validate schema on page load
  useEffect(() => {
    assertSchemaExpectations(activePage);
  }, [activePage]);

  // Loading state
  if (isLoading) {
    return (
      <div className="h-full bg-slate-100 text-slate-900 p-4 md:p-6">
        <div className="max-w-xl mx-auto bg-white border border-slate-300 rounded-xl shadow-sm p-6 text-sm text-slate-700">
          Loading theme file...
        </div>
      </div>
    );
  }

  // Error state
  if (loadError) {
    return (
      <div className="h-full bg-slate-100 text-slate-900 p-4 md:p-6">
        <div className="max-w-xl mx-auto bg-white border border-red-300 rounded-xl shadow-sm p-6 text-sm text-red-700">
          <div className="font-semibold mb-2">Error loading theme file</div>
          <div>{loadError}</div>
          <div className="mt-4 text-xs text-slate-500">
            File path: <code className="rounded bg-slate-100 px-1 py-0.5">{themeFile}</code>
          </div>
        </div>
      </div>
    );
  }

  // No pages state
  if (!activePage) {
    return (
      <div className="h-full bg-slate-100 text-slate-900 p-4 md:p-6">
        <div className="max-w-xl mx-auto bg-white border border-slate-300 rounded-xl shadow-sm p-6 text-sm text-slate-700">
          No pages found in <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">src/themes</code>. Add a JSON page file to get started.
        </div>
      </div>
    );
  }

  const themes = activePage.themes ?? [];

  // Main application layout
  return (
    <div className="h-full bg-slate-100 text-slate-900 p-4 md:p-6">
      <div className="max-w-[1400px] mx-auto flex gap-4">
        {/* Left sidebar navigation */}
        <Sidebar
          themes={themes}
          activeSection={activeSection}
          selectedEquipmentId={selectedEquipmentId}
          onEquipmentChange={setSelectedEquipmentId}
          equipmentOptions={equipmentOptions}
        />

        {/* Main content area */}
        <main className="flex-1 flex flex-col gap-6">

          {/* Header with search and refresh */}
          <Header
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            lastUpdatedLabel={lastUpdatedLabel}
          />

          {/* Theme content */}
          <MainContent
            themes={themes}
            searchQuery={searchQuery}
            pointMatchesSearch={pointMatchesSearch}
            equipment={activeEquipment}
          />
        </main>
      </div>
    </div>
  );
}
