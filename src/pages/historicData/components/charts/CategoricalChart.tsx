import React from "react";
import { CATEGORICAL_COLORS, type CategoricalChartData } from "./chartTypes";

interface CategoricalChartProps {
  data: CategoricalChartData;
  onRemove?: () => void;
  crosshairX?: number | null;
  onCrosshairChange?: (x: number | null) => void;
  onDragStart?: () => void;
  onDragEnd?: () => void;
  isDragActive?: boolean;
}

export default function CategoricalChart({
  data,
  onRemove,
  crosshairX,
  onCrosshairChange,
  onDragStart,
  onDragEnd,
  isDragActive
}: CategoricalChartProps) {
  const [hideEmptyBars, setHideEmptyBars] = React.useState(true);
  const visibleRows = hideEmptyBars ? data.rows.filter((row) => row.activeSlots.some(Boolean)) : data.rows;
  const hiddenCount = data.rows.length - visibleRows.length;

  // Get colors based on colorIndex
  const colors = CATEGORICAL_COLORS[data.colorIndex % CATEGORICAL_COLORS.length];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!onCrosshairChange) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    onCrosshairChange(Math.max(0, Math.min(100, x)));
  };

  const handleMouseLeave = () => {
    if (onCrosshairChange) {
      onCrosshairChange(null);
    }
  };

  return (
    <div
      draggable={true}
      onDragStart={(e) => {
        e.stopPropagation();
        if (onDragStart) {
          onDragStart();
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
      className={`rounded-lg border ${colors.border200} bg-white shadow-sm ${
        isDragActive ? 'cursor-grab active:cursor-grabbing' : ''
      }`}
    >
      <div className={`flex items-center justify-between gap-2 border-b ${colors.border200} ${colors.bg50} px-4 py-1.5`}>
        <div className="flex items-center gap-3 text-xs">
          <span className={`font-semibold ${colors.text700}`}>{data.title}</span>
          <span className={colors.text600}>{data.subtitle}</span>
        </div>
        <div className={`flex items-center gap-3 text-xs ${colors.text700}`}>
          <label className="flex items-center gap-1.5 font-medium">
            <input
              type="checkbox"
              checked={hideEmptyBars}
              onChange={(e) => setHideEmptyBars(e.target.checked)}
              className={`h-3 w-3 rounded ${colors.border400} ${colors.text600} ${colors.ring}`}
            />
            Hide empty bars
          </label>
          <span className={`text-[11px] ${colors.text600}`}>{hiddenCount} values hidden</span>
          {onRemove && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onRemove();
              }}
              className="text-[11px] px-2 py-1 rounded border border-transparent text-gray-500 hover:text-red-600 hover:border-red-200 transition-colors"
              title="Remove this point"
              aria-label="Remove categorical point"
            >
              ×
            </button>
          )}
        </div>
      </div>
      <div
        className="px-4 py-3 relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="space-y-1">
          {visibleRows.length === 0 ? (
            <div className="text-xs text-gray-500 italic">
              No categorical data is visible. Disable "Hide empty bars" to view all meanings.
            </div>
          ) : (
            visibleRows.map((row) => (
              <div key={row.meaningKey} className="flex flex-col">
                <div className="text-[10px] font-medium text-gray-600 mb-0.5">
                  {row.label}
                </div>
                <div className={`relative h-3 rounded ${colors.bg100} overflow-hidden`}>
                  <div className="absolute inset-0 flex">
                    {row.activeSlots.map((active, index) => (
                      <div
                        key={`${row.meaningKey}-${index}`}
                        className={`flex-1 ${
                          index < row.activeSlots.length - 1 ? `border-r ${colors.border200}` : ''
                        } ${active ? colors.bg500 : 'bg-transparent'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {crosshairX !== null && crosshairX !== undefined && (
          <div
            className="absolute top-0 bottom-0 w-px bg-gray-700 pointer-events-none opacity-70"
            style={{
              left: `calc(1rem + ${crosshairX}%)`,
            }}
          />
        )}
      </div>
    </div>
  );
}
