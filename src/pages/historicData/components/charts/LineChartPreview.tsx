import React from "react";
import { LINE_COLOR_CLASSES, LINE_CHART_VIEWBOX, type LegendEntry } from "./chartTypes";

interface LineChartPreviewProps {
  series: {
    entry: LegendEntry;
    values: number[];
  }[];
  crosshairX?: number | null;
  onCrosshairChange?: (x: number | null) => void;
}

export default function LineChartPreview({
  series,
  crosshairX,
  onCrosshairChange,
}: LineChartPreviewProps) {
  if (series.length === 0) {
    return null;
  }

  const allValues = series.flatMap((s) => s.values);
  const minValue = Math.min(...allValues, 0);
  const maxValue = Math.max(...allValues, 1);
  const span = maxValue - minValue || 1;

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
      className="h-full w-full relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        viewBox={`0 0 ${LINE_CHART_VIEWBOX.width} ${LINE_CHART_VIEWBOX.height}`}
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        {series.map(({ entry, values }) => {
          if (values.length < 2) {
            return null;
          }
          const pathD = values
            .map((value, index) => {
              const x = (index / (values.length - 1)) * LINE_CHART_VIEWBOX.width;
              const normalized = (value - minValue) / span;
              const y = LINE_CHART_VIEWBOX.height - normalized * LINE_CHART_VIEWBOX.height;
              const command = index === 0 ? 'M' : 'L';
              return `${command}${x.toFixed(2)},${y.toFixed(2)}`;
            })
            .join(' ');

          return (
            <path
              key={entry.pointKey}
              d={pathD}
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${LINE_COLOR_CLASSES[entry.colorIndex % LINE_COLOR_CLASSES.length]} drop-shadow-[0_1px_3px_rgba(0,0,0,0.25)]`}
              opacity={0.95}
            />
          );
        })}
        {crosshairX !== null && crosshairX !== undefined && (
          <line
            x1={(crosshairX / 100) * LINE_CHART_VIEWBOX.width}
            y1={0}
            x2={(crosshairX / 100) * LINE_CHART_VIEWBOX.width}
            y2={LINE_CHART_VIEWBOX.height}
            stroke="#374151"
            strokeWidth={1.5}
            strokeDasharray="4 2"
            opacity={0.7}
            pointerEvents="none"
          />
        )}
      </svg>
    </div>
  );
}
