export interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  lastUpdatedLabel: string;
  onRefresh: () => void;
  gatewayStatus?: GatewayStatusInfo;
}

interface GatewayStatusInfo {
  gatewaySn?: string;
  isOnline: boolean | null;
  isLoading: boolean;
  lastChecked?: string | null;
  error?: string | null;
}

export function Header({
  searchQuery,
  onSearchChange,
  lastUpdatedLabel,
  onRefresh,
  gatewayStatus
}: HeaderProps) {
  return (
    <>
      <div className="text-xs text-slate-500">
        Last Updated At: {lastUpdatedLabel}
      </div>
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-6">
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
            <button
              className="text-xs border border-slate-400 rounded px-2 py-1 bg-white hover:bg-slate-50 text-slate-700 flex items-center gap-1"
              onClick={onRefresh}
            >
              <span>⟳</span>
              <span>Refresh</span>
            </button>
          </div>
        </div>

        <GatewayStatusLight status={gatewayStatus} />
      </div>
    </>
  );
}

function GatewayStatusLight({ status }: { status?: GatewayStatusInfo }) {
  const isOnline = status?.isOnline ?? null;
  const isLoading = status?.isLoading ?? false;

  const colorClass = isLoading
    ? 'bg-amber-400 animate-pulse'
    : isOnline === true
    ? 'bg-green-500'
    : isOnline === false
    ? 'bg-red-500'
    : 'bg-slate-300';

  let label = 'Unknown';
  if (isLoading) label = 'Checking…';
  else if (isOnline === true) label = 'Online';
  else if (isOnline === false) label = 'Offline';

  return (
    <div className="flex flex-col items-end gap-1 text-right self-start min-w-[180px]">
      <div className="text-[11px] uppercase tracking-wide text-slate-500">Gateway Status</div>
      <div className="flex items-center gap-2">
        <span
          className={`h-3 w-3 rounded-full border border-slate-300 ${colorClass}`}
          aria-label={`Gateway ${label}`}
          role="status"
        />
        <span className="text-sm font-semibold text-slate-900">{label}</span>
      </div>
      {status?.gatewaySn && (
        <div className="text-xs text-slate-500 leading-tight">SN: {status.gatewaySn}</div>
      )}
      {!isLoading && status?.error && (
        <div className="text-xs text-red-500 leading-tight">
          {status.error}
        </div>
      )}
      {status?.lastChecked && !isLoading && (
        <div className="text-[11px] text-slate-400">
          Checked {new Date(status.lastChecked).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      )}
    </div>
  );
}
