export interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  lastUpdatedLabel: string;
}

export function Header({
  searchQuery,
  onSearchChange,
  lastUpdatedLabel,
}: HeaderProps) {
  return (
    <>
      <div className="text-xs text-slate-500">
        Last Updated At: {lastUpdatedLabel}
      </div>
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-4">
        <div className="flex-1 flex flex-col gap-2">
          <div className="text-xl font-semibold text-slate-900 leading-tight">
            Site Configuration
          </div>
          <div className="flex items-center gap-2">
            <div className="relative flex-1 max-w-md">
              <input
                className="w-full rounded border border-slate-300 bg-white px-2 py-1 pr-8 text-sm text-slate-800"
                placeholder="Search…"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
              />
              {searchQuery && (
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  onClick={() => onSearchChange("")}
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
            <button className="text-xs border border-slate-400 rounded px-2 py-1 bg-white hover:bg-slate-50 text-slate-700 flex items-center gap-1">
              <span>⟳</span>
              <span>Refresh</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
