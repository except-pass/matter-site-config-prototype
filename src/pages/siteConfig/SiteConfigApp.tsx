import { useEffect, useMemo, useState } from "react";

// Types and equipment data
import { PageDef } from "./types/schema";
import { equipmentOptions } from "./types/equipment";

// Hooks
import { useSiteConfigLoader } from "./hooks/useSiteConfigLoader";
import { useScrollTracking } from "./hooks/useScrollTracking";
import { useSearch } from "./hooks/useSearch";

// Layout components
import { Sidebar } from "./components/layout/Sidebar";
import { Header } from "./components/layout/Header";
import { MainContent } from "./components/layout/MainContent";

// Utils
import { assertSchemaExpectations } from "./utils/validation";

// -----------------------------------------------------------------------------
// Main Application Component
// -----------------------------------------------------------------------------
export default function PointThemeDemoPage() {
  // Page and equipment selection
  const [selectedEquipmentId, setSelectedEquipmentId] = useState(
    equipmentOptions[0]?.id ?? ""
  );

  // Load site configuration from API
  const {
    pageRegistry: loadedPageRegistry,
    pageLookup: loadedPageLookup,
    isLoading,
    loadError,
    lastModified
  } = useSiteConfigLoader(selectedEquipmentId);

  // Page selection
  const defaultPageId = loadedPageRegistry[0]?.id ?? "";
  const [selectedPageId] = useState(defaultPageId);

  // Active section tracking for navigation highlighting
  const activeSection = useScrollTracking();

  // Search functionality
  const { searchQuery, setSearchQuery, pointMatchesSearch } = useSearch();

  // Last updated timestamp from API
  const lastUpdatedLabel = useMemo(() => {
    if (!lastModified) return 'Never';
    const date = new Date(lastModified);
    return date.toLocaleString(undefined, {
      dateStyle: "medium",
      timeStyle: "short"
    });
  }, [lastModified]);

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
          <div className="font-semibold mb-2">Error loading site configuration</div>
          <div>{loadError}</div>
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
