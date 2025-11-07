import { useRef, useState } from 'react';
import { EntryDef, EntryValue } from '../../types/schema';

// -----------------------------------------------------------------------------
// DualHandleSlider - for points with multiple related range values
// -----------------------------------------------------------------------------
export function DualHandleSlider({
  entries,
  formState,
  readOnly,
  onChange,
}: {
  entries: EntryDef[];
  formState: EntryValue;
  readOnly: boolean;
  onChange: (argName: string, value: any) => void;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Colors for handles (expanded palette for many sliders)
  const colors = [
    { bg: 'bg-emerald-500', text: 'text-emerald-600', border: 'border-emerald-500' },
    { bg: 'bg-rose-500', text: 'text-rose-600', border: 'border-rose-500' },
    { bg: 'bg-blue-500', text: 'text-blue-600', border: 'border-blue-500' },
    { bg: 'bg-purple-500', text: 'text-purple-600', border: 'border-purple-500' },
    { bg: 'bg-orange-500', text: 'text-orange-600', border: 'border-orange-500' },
    { bg: 'bg-pink-500', text: 'text-pink-600', border: 'border-pink-500' },
    { bg: 'bg-indigo-500', text: 'text-indigo-600', border: 'border-indigo-500' },
    { bg: 'bg-teal-500', text: 'text-teal-600', border: 'border-teal-500' },
    { bg: 'bg-cyan-500', text: 'text-cyan-600', border: 'border-cyan-500' },
    { bg: 'bg-amber-500', text: 'text-amber-600', border: 'border-amber-500' },
    { bg: 'bg-lime-500', text: 'text-lime-600', border: 'border-lime-500' },
    { bg: 'bg-fuchsia-500', text: 'text-fuchsia-600', border: 'border-fuchsia-500' },
  ];

  // Assume all entries share the same range
  const commonRange = entries[0]?.range;
  if (!commonRange) return null;

  const { min: rangeMin, max: rangeMax } = commonRange;

  // Calculate effective min/max for an entry based on constraints
  const getEffectiveBounds = (entry: EntryDef) => {
    let effectiveMin = rangeMin;
    let effectiveMax = rangeMax;

    if (entry.greater_than) {
      const otherValue = formState[entry.greater_than];
      if (typeof otherValue === 'number') {
        effectiveMin = Math.max(effectiveMin, otherValue + 1);
      }
    }

    if (entry.less_than) {
      const otherValue = formState[entry.less_than];
      if (typeof otherValue === 'number') {
        effectiveMax = Math.min(effectiveMax, otherValue - 1);
      }
    }

    return { min: effectiveMin, max: effectiveMax };
  };

  const handleValueChange = (entry: EntryDef, newValue: number) => {
    const bounds = getEffectiveBounds(entry);
    const clamped = Math.max(bounds.min, Math.min(bounds.max, newValue));
    onChange(entry.arg, clamped);
  };

  const handleMouseDown = (idx: number, e: React.MouseEvent) => {
    if (readOnly) return;
    e.preventDefault();
    setActiveIndex(idx);

    const trackElement = trackRef.current;
    if (!trackElement) return;

    const handleMove = (moveEvent: MouseEvent) => {
      const rect = trackElement.getBoundingClientRect();
      const x = moveEvent.clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      const value = Math.round(rangeMin + (percentage / 100) * (rangeMax - rangeMin));
      handleValueChange(entries[idx], value);
    };

    const handleUp = () => {
      setActiveIndex(null);
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleUp);
    };

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleUp);
  };

  // Determine grid columns based on number of entries
  // For many sliders (8+), use 3-4 columns to keep compact
  const gridColsClass = entries.length >= 8
    ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
    : 'grid-cols-2';

  return (
    <div className="flex flex-col gap-3 text-sm">
      {/* Input fields with color-coded labels */}
      <div className={`grid ${gridColsClass} gap-3`}>
        {entries.map((entry, idx) => {
          const color = colors[idx % colors.length];
          const value = formState[entry.arg] ?? rangeMin;
          const bounds = getEffectiveBounds(entry);

          return (
            <div key={entry.arg} className="flex flex-col gap-1">
              <div className={`text-[11px] uppercase font-semibold flex items-center gap-1.5 ${color.text}`}>
                <span className={`w-2 h-2 rounded-full ${color.bg}`}></span>
                <span>{entry.name}</span>
                {entry.unit && (
                  <span className="text-[10px] text-slate-400 uppercase ml-auto">{entry.unit}</span>
                )}
              </div>
              <input
                type="number"
                className={`w-full rounded border ${color.border} bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500`}
                disabled={readOnly}
                value={value}
                min={bounds.min}
                max={bounds.max}
                onChange={(e) => {
                  const val = e.target.value === '' ? bounds.min : Number(e.target.value);
                  handleValueChange(entry, val);
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Multi-handle slider */}
      <div className="relative w-full pt-2 pb-3">
        {/* Min/Max labels */}
        <div className="flex justify-between text-[10px] text-slate-400 font-mono mb-2">
          <span>{rangeMin}</span>
          <span>{rangeMax}</span>
        </div>

        {/* Slider track and handles container */}
        <div className="relative overflow-hidden" ref={trackRef}>
          {/* Visual track bar */}
          <div className="absolute top-1/2 left-0 right-0 h-2 bg-slate-200 rounded-full -translate-y-1/2" />

          {/* Stack clickable handle zones and visual handles */}
          <div className="relative overflow-hidden" style={{ height: '24px' }}>
            {entries.map((entry, idx) => {
              const color = colors[idx % colors.length];
              const value = formState[entry.arg] ?? rangeMin;
              const percentage = ((value - rangeMin) / (rangeMax - rangeMin)) * 100;

              // Dynamic z-index: active slider goes to top, otherwise reverse order (first on top)
              const baseZIndex = entries.length - idx;
              const zIndex = activeIndex === idx ? 100 : baseZIndex;

              return (
                <div key={entry.arg}>
                  {/* Clickable handle zone - positioned at handle location */}
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 ${readOnly ? 'cursor-not-allowed' : 'cursor-grab active:cursor-grabbing'}`}
                    style={{
                      left: `${percentage}%`,
                      transform: 'translate(-50%, -50%)',
                      width: '40px',
                      height: '24px',
                      zIndex: zIndex,
                    }}
                    onMouseDown={(e) => handleMouseDown(idx, e)}
                  >
                    {/* Visible colored handle */}
                    <div
                      className={`absolute top-1/2 left-1/2 w-5 h-5 rounded-full ${color.bg} border-2 border-white shadow-lg pointer-events-none transition-shadow`}
                      style={{
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1,
                        boxShadow: activeIndex === idx ? '0 0 0 3px rgba(0,0,0,0.1)' : undefined,
                      }}
                      title={`${entry.name}: ${value}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
