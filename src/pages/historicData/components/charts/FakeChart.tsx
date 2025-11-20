import React from "react";
import type { ProtocolPoint } from "../../types";
import LineChartPreview from "./LineChartPreview";
import CategoricalChart from "./CategoricalChart";
import { LEGEND_COLORS, type LegendEntry, type CategoricalChartData } from "./chartTypes";
import {
  AVAILABLE_INVERTERS,
  getFullSerialNumber,
  generateSmoothLineSeries,
  buildCategoricalChartData,
} from "./chartUtils";

interface FakeChartProps {
  selectedPoints: Map<string, Set<string>>;
  protocols: ProtocolPoint[];
  onUpdateInverters: (pointKey: string, inverters: Set<string>) => void;
  onScrollToPoint?: (pointKey: string) => void;
  onRemoveInverter?: (pointKey: string, inverterSN: string) => void;
  onSelectPointsToggle?: (open: boolean) => void;
  selectPointsOpen?: boolean;
  onDeleteChart?: () => void;
  onShowTutorial?: () => void;
  crosshairX?: number | null;
  onCrosshairChange?: (x: number | null) => void;
  onDragStart?: (pointKey: string, inverters: Set<string>) => void;
  onDragEnd?: () => void;
  isDragActive?: boolean;
  isDropTarget?: boolean;
}

export default function FakeChart({
  selectedPoints,
  protocols,
  onUpdateInverters: _onUpdateInverters,
  onScrollToPoint: _onScrollToPoint,
  onRemoveInverter,
  onSelectPointsToggle,
  selectPointsOpen,
  onDeleteChart,
  onShowTutorial,
  crosshairX,
  onCrosshairChange,
  onDragStart,
  onDragEnd,
  isDragActive,
  isDropTarget: _isDropTarget
}: FakeChartProps) {
  // Track visibility state for each legend entry
  const [hiddenEntries, setHiddenEntries] = React.useState<Set<string>>(new Set());

  // Get selected point info with their inverters
  const selectedPointInfo = Array.from(selectedPoints.entries())
    .map(([key, inverters]) => {
      const [model, point] = key.split(':');
      const protocol = protocols.find((p) => p.model === model && p.point === point);
      const name = protocol ? (protocol.entry.description || protocol.entry.name || point) : point;
      return { key, name, inverters };
    })
    .filter((info) => info.name);

  // Flatten to create one entry per SN+point combination
  const legendEntries: LegendEntry[] = selectedPointInfo.flatMap(({ key, name, inverters }) => {
    const [model, point] = key.split(':');
    const protocol = protocols.find((p) => p.model === model && p.point === point);
    const unit = protocol?.entry?.unit && protocol.entry.unit !== "N/A" ? protocol.entry.unit : "N/A";
    const longDescription = protocol?.entry?.longdescription || protocol?.entry?.description || '';
    const dtype = protocol?.entry?.dtype;
    const meanings = protocol?.entry?.meanings;
    const friendlyMeanings = protocol?.entry?.friendly_meanings;
    const meaningKeysSet = new Set<string>();
    if (meanings) {
      Object.keys(meanings).forEach((key) => meaningKeysSet.add(String(key)));
    }
    if (friendlyMeanings) {
      Object.keys(friendlyMeanings).forEach((key) => meaningKeysSet.add(String(key)));
    }
    const meaningKeys = Array.from(meaningKeysSet);
    const isCategorical = meaningKeys.length > 0;

    return Array.from(inverters).sort().map((shortSN, index) => {
      const fullSN = getFullSerialNumber(shortSN);
      return {
        key,
        pointKey: `${key}:${shortSN}`, // Unique key for this SN+point combo
        name,
        shortSN,
        fullSN,
        unit,
        model,
        point,
        longDescription,
        colorIndex: (selectedPointInfo.findIndex(p => p.key === key) * AVAILABLE_INVERTERS.length + index) % LEGEND_COLORS.length,
        dtype,
        meanings,
        friendlyMeanings,
        meaningKeys,
        isCategorical,
      };
    });
  });

  // No longer grouping by unit - just use legendEntries directly
  const visibleLegendEntries = legendEntries.filter((entry) => !hiddenEntries.has(entry.pointKey));
  const visibleCategoricalEntries = visibleLegendEntries.filter((entry) => entry.isCategorical);
  const visibleNumericEntries = visibleLegendEntries.filter((entry) => !entry.isCategorical);
  const numericLegendEntries = legendEntries.filter(entry => !entry.isCategorical);
  const categoricalCharts = React.useMemo(
    () =>
      visibleCategoricalEntries
        .map((entry) => buildCategoricalChartData(entry))
        .filter((chart): chart is CategoricalChartData => chart !== null),
    [visibleCategoricalEntries]
  );
  const hasNumericEntries = visibleNumericEntries.length > 0;
  const lineSeriesData = React.useMemo(
    () =>
      visibleNumericEntries.map((entry) => ({
        entry,
        values: generateSmoothLineSeries(entry.pointKey),
      })),
    [visibleNumericEntries]
  );

  const toggleVisibility = (pointKey: string) => {
    setHiddenEntries((prev) => {
      const next = new Set(prev);
      if (next.has(pointKey)) {
        next.delete(pointKey);
      } else {
        next.add(pointKey);
      }
      return next;
    });
  };

  const showOnlyEntry = (pointKey: string) => {
    // If this is the only visible entry, show all entries
    const numericKeys = numericLegendEntries.map(entry => entry.pointKey);
    const visibleCount = numericKeys.filter(key => !hiddenEntries.has(key)).length;
    const isOnlyVisible = visibleCount === 1 && !hiddenEntries.has(pointKey);

    if (isOnlyVisible) {
      // Show all entries
      setHiddenEntries(new Set());
    } else {
      // Hide all entries except the one clicked
      setHiddenEntries(new Set(numericKeys.filter(key => key !== pointKey)));
    }
  };

  const handleRemove = (pointKey: string, sn: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onRemoveInverter?.(pointKey, sn);
  };

  const isCategoricalOnly = !hasNumericEntries && categoricalCharts.length > 0 && selectedPoints.size > 0;
  const shouldShowLineArea = !isCategoricalOnly;

  return (
    <div className="w-full h-full flex flex-col relative">
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
        {onSelectPointsToggle && (
          <button
            onClick={() => onSelectPointsToggle(!selectPointsOpen)}
            className="text-xs px-3 py-1.5 border border-gray-300 rounded bg-white/90 backdrop-blur hover:bg-white transition-colors flex items-center gap-2 shadow-sm"
            title={selectPointsOpen ? "Hide Add Points" : "Show Add Points"}
            data-role="sidebar-toggle"
          >
            <span>Add Points</span>
            <svg
              className={`h-4 w-4 text-gray-600 transition-transform ${selectPointsOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
        {onDeleteChart && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDeleteChart();
            }}
            className="text-xs px-2 py-1.5 border border-gray-300 rounded bg-white/90 backdrop-blur hover:bg-white transition-colors flex items-center justify-center text-gray-600 hover:text-gray-800 opacity-80 hover:opacity-100 shadow-sm"
            title="Delete chart"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      <div className="p-4 flex flex-col h-full">
        <div className="flex flex-col gap-4 flex-1">
          {shouldShowLineArea && (
          <div className="relative flex-1 min-h-[320px] rounded-2xl border border-gray-300 bg-gradient-to-b from-white via-white to-gray-50 shadow-inner overflow-hidden">
            {/* Y-axis */}
            <div className="absolute left-0 top-0 bottom-10 w-12 border-r border-gray-200 flex flex-col items-center justify-between py-4 text-gray-600">
              <span className="text-[10px] uppercase tracking-widest leading-none transform -rotate-90">Value</span>
              <div className="flex flex-col items-center gap-3 text-gray-400">
                {[0, 1, 2, 3, 4].map((tick) => (
                  <div key={tick} className="w-3 h-px bg-gray-400/70" />
                ))}
              </div>
              <span className="text-[10px]">0</span>
            </div>

            {/* X-axis */}
            <div className="absolute left-12 right-6 bottom-6 h-10 border-t border-gray-200 flex items-center justify-between px-2 text-gray-500">
              <span className="text-[11px]">0</span>
              <div className="flex gap-2">
                {[0, 1, 2, 3, 4].map((tick) => (
                  <div key={tick} className="h-3 w-px bg-gray-400/60" />
                ))}
              </div>
              <span className="text-[11px] uppercase tracking-widest">Time</span>
            </div>

            {/* Chart area */}
            <div
              className={`absolute top-6 bottom-16 left-12 right-6 rounded-xl bg-white/40 backdrop-blur-sm ${
                selectedPoints.size === 0 ? 'cursor-pointer' : 'cursor-default'
              }`}
              onClick={(e) => {
                // Don't open point selector if clicking on the tutorial button
                if ((e.target as HTMLElement).closest('button')) {
                  return;
                }
                if (selectedPoints.size === 0 && onSelectPointsToggle) {
                  onSelectPointsToggle(true);
                }
              }}
            >
              {selectedPoints.size === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-2 text-center text-sm text-gray-500">
                  <div className="text-base font-medium text-gray-700">No points selected</div>
                  <div>Click anywhere in this area to select points</div>
                  <div className="mt-2 text-xs text-gray-500">
                    New to charts?{' '}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onShowTutorial?.();
                      }}
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      View quick tutorial
                    </button>
                  </div>
                </div>
              ) : legendEntries.length === 0 ? (
                <div className="flex h-full items-center justify-center text-sm text-gray-400">
                  Select points to display charts
                </div>
              ) : hasNumericEntries ? (
                <div className="relative h-full w-full">
                  <div className="pointer-events-none absolute inset-0 grid grid-rows-4 opacity-30">
                    {[0, 1, 2, 3].map((row) => (
                      <div key={row} className="border-b border-dashed border-gray-300" />
                    ))}
                  </div>
                  <LineChartPreview
                    series={lineSeriesData}
                    crosshairX={crosshairX}
                    onCrosshairChange={onCrosshairChange}
                  />
                </div>
              ) : (
                <div className="flex h-full items-center justify-center px-6 text-center text-sm text-gray-500">
                  All selected points are hidden. Use the legend controls to show a series.
                </div>
              )}
            </div>
          </div>
          )}

          {categoricalCharts.length > 0 && (
            <div className={`${shouldShowLineArea ? '' : 'pt-2'}`} data-categorical-stack>
              <div className="space-y-4">
                {categoricalCharts.map((chart) => {
                  const removeHandler = () => {
                    const parts = chart.id.split(':');
                    const shortSN = parts.pop() ?? '';
                    const pointKey = parts.join(':');
                    onRemoveInverter?.(pointKey, shortSN);
                  };
                  // Get the inverters for this categorical chart
                  const parts = chart.id.split(':');
                  const pointKey = parts.slice(0, -1).join(':');
                  const categoricalInverters = selectedPoints.get(pointKey) || new Set();

                  return (
                    <CategoricalChart
                      key={`${chart.id}:${chart.subtitle}`}
                      data={chart}
                      onRemove={removeHandler}
                      crosshairX={crosshairX}
                      onCrosshairChange={onCrosshairChange}
                      onDragStart={() => {
                        if (onDragStart) {
                          onDragStart(pointKey, categoricalInverters);
                        }
                      }}
                      onDragEnd={onDragEnd}
                      isDragActive={isDragActive}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>

      {/* Legend/Point List */}
      {numericLegendEntries.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {numericLegendEntries.map(({ pointKey, name, shortSN, fullSN, colorIndex, key, unit, point, longDescription }) => {
            const color = LEGEND_COLORS[colorIndex];
            const isHidden = hiddenEntries.has(pointKey);

            // Build comprehensive tooltip
            const tooltipParts = [
              "Click to toggle visibility (double-click to show only this)",
              "",
              `This is the point "${name}" (${point}) as read by inverter ${fullSN}.`
            ];
            if (longDescription) {
              tooltipParts.push("", longDescription);
            }
            const tooltipText = tooltipParts.join("\n");

            // Get the inverters for this point key
            const pointInverters = selectedPoints.get(key) || new Set();

            return (
              <div
                key={pointKey}
                draggable={true}
                onDragStart={(e) => {
                  e.stopPropagation();
                  if (onDragStart) {
                    onDragStart(key, pointInverters);
                  }
                  // Set drag image
                  const dragImage = e.currentTarget.cloneNode(true) as HTMLElement;
                  dragImage.style.position = 'absolute';
                  dragImage.style.top = '-1000px';
                  document.body.appendChild(dragImage);
                  e.dataTransfer.setDragImage(dragImage, 0, 0);
                  setTimeout(() => document.body.removeChild(dragImage), 0);
                }}
                onDragEnd={(e) => {
                  e.stopPropagation();
                  if (onDragEnd) {
                    onDragEnd();
                  }
                }}
                className={`flex items-center gap-2 text-xs group hover:bg-gray-50 rounded px-2 py-1 border border-gray-200 bg-white transition-colors flex-shrink-0 ${
                  isDragActive ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'
                }`}
                title={tooltipText}
              >
                <div
                  className={`w-3 h-3 rounded-sm flex-shrink-0 ${color.bg} ${color.border} border cursor-pointer`}
                  onClick={() => toggleVisibility(pointKey)}
                  onDoubleClick={(e) => {
                    e.stopPropagation();
                    showOnlyEntry(pointKey);
                  }}
                />
                <span
                  className={`font-medium text-gray-600 cursor-pointer ${isHidden ? 'opacity-50 line-through' : ''}`}
                  onClick={() => toggleVisibility(pointKey)}
                  onDoubleClick={(e) => {
                    e.stopPropagation();
                    showOnlyEntry(pointKey);
                  }}
                >
                  {name}
                </span>
                <span className="text-gray-400">
                  (SN {shortSN})
                </span>
                {unit !== "N/A" && (
                  <span className="text-gray-400">
                    [{unit}]
                  </span>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleVisibility(pointKey);
                  }}
                  onDoubleClick={(e) => {
                    e.stopPropagation();
                    showOnlyEntry(pointKey);
                  }}
                  className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-600 transition-opacity flex-shrink-0 ml-1"
                  title={isHidden ? "Show in chart (double-click to show only this)" : "Hide in chart (double-click to show only this)"}
                >
                  {isHidden ? (
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  )}
                </button>
                <button
                  onClick={(e) => handleRemove(key, shortSN, e)}
                  className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-600 transition-opacity flex-shrink-0 ml-1"
                  title="Remove this data point from the chart"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      )}
      </div>
    </div>
  );
}
