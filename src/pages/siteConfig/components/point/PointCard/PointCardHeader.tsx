import { PointDef } from '../../../types/schema';
import { InfoIcon, ClockIcon, RefreshIcon } from '../../../../../shared/components/Icons';
import { ReadOnlyBadge } from '../../ui/ReadOnlyBadge';

interface PointCardHeaderProps {
  point: PointDef;
  readOnly: boolean;
  helpTextMatch?: boolean;
  shouldShowHistory: boolean;
  shouldShowRefresh: boolean;
  shouldShowSetButton: boolean;
  setButtonAppearance: string;
  onHelpClick: () => void;
  onHistoryClick: () => void;
  onRefreshClick: () => void;
  onSetClick: () => void;
}

export function PointCardHeader({
  point,
  readOnly,
  helpTextMatch = false,
  shouldShowHistory,
  shouldShowRefresh,
  shouldShowSetButton,
  setButtonAppearance,
  onHelpClick,
  onHistoryClick,
  onRefreshClick,
  onSetClick,
}: PointCardHeaderProps) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
      <div className="flex items-start gap-2">
        <div className="text-slate-800 text-sm font-semibold leading-tight">
          {point.title}
        </div>
        {point.help && (
          <div className="mt-0.5 relative">
            <InfoIcon onClick={onHelpClick} />
            {helpTextMatch && (
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            )}
          </div>
        )}
        {readOnly && <ReadOnlyBadge />}
      </div>

      <div className="flex items-center gap-2 text-xs">
        {shouldShowHistory && (
          <button
            className="flex items-center gap-1 text-slate-600 hover:text-slate-900"
            title="View historical data"
            onClick={onHistoryClick}
          >
            <ClockIcon />
          </button>
        )}

        {shouldShowRefresh && (
          <button
            className="flex items-center gap-1 text-slate-600 hover:text-slate-900"
            title="Refresh from device"
            onClick={onRefreshClick}
          >
            <RefreshIcon />
          </button>
        )}

        {shouldShowSetButton && (
          <button
            className={`border text-xs font-medium rounded px-2 py-1 leading-none transition ${setButtonAppearance}`}
            disabled={readOnly}
            onClick={onSetClick}
          >
            Set
          </button>
        )}
      </div>
    </div>
  );
}
