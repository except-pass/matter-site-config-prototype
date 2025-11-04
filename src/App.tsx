import { useEffect, useMemo, useRef, useState } from "react";
import { getWidgetConfig } from "./transforms/widgetConfig.js";

// Declare global variable injected by Vite
declare const __THEME_FILE__: string | undefined;

// -----------------------------------------------------------------------------
// Point Theme Schema (3-level hierarchy)
// Page -> themes[] -> sections[] -> subsections[] -> points[]
// Sidebar shows themes and their sections for navigation.
// Each subsection controls layout of its points and whether it's collapsed.
// -----------------------------------------------------------------------------


// -----------------------------------------------------------------------------
// Types (TS-style interfaces for clarity / dev ergonomics)
// -----------------------------------------------------------------------------

interface PageDef {
  pageName: string;
  themes: ThemeDef[];
}

interface ThemeDef {
  themeName: string;
  sections: SectionDef[];
}

interface EntryValue {
  [key: string]: any;
}

interface EntryDef {
  name: string;
  arg: string; // protocol argument key
  dtype: 'enum' | 'String' | 'Number';
  value?: string | number;
  unit?: string;
  description?: string;
  longdescription?: string;
  range?: { min: number; max: number };
  meanings?: Record<string, string>; // enum wire -> semantic key
  friendly_meanings?: Record<string, string>; // semantic key -> UI label
  greater_than?: string; // This entry must be > the named entry
  less_than?: string; // This entry must be < the named entry
  protocol?: {
    matter?: {
      MEP?: string;
      Cluster?: string;
      Element?: string;
    };
  };
}

interface PointDef {
  title: string;
  help?: string;
  element_type: string; // Attribute | Service | GeneratorExercise
  access: string; // R | RW | Invoke
  readOnly?: boolean;
  entries: EntryDef[];
  protocol: {
    matter?: any;
    modbus?: {
      address: number;
      register_type: number;
      size: number;
      scale_factor?: number;
    };
    cgi?: {
      MEP: string;
      Cluster: string;
      Element: string;
    };
  };
  uuid: string;
  widget?: "datetime" | "time" | "timerange" | "timerange-multi" | "default";
  invokeButtonText?: string; // Custom text for invoke button (defaults to "Invoke")
}

interface SubsectionDef {
  title: string | null;
  visibility: string; // "default" | "advanced" | future values
  collapsedByDefault: boolean;
  points: PointDef[];
}

interface SectionDef {
  sectionTitle: string;
  subsections: SubsectionDef[];
}

interface EquipmentOption {
  id: string;
  label: string;
  thingId: {
    Type: string;
    Mn: string;
    Md: string;
    SN: string;
  };
  modbusSlaveId: number;
}


// -----------------------------------------------------------------------------
// Page catalogue loaded from JSON files under src/themes
// -----------------------------------------------------------------------------

// Check if a specific theme file is specified via CLI
const THEME_FILE = typeof __THEME_FILE__ !== 'undefined' ? __THEME_FILE__ : undefined;

type PageRegistryEntry = {
  id: string;
  label: string;
  filename: string;
  data: PageDef;
};

// Load pages - either from specific file or glob pattern
let pageModules: Record<string, PageDef>;

if (THEME_FILE) {
  // For CLI-specified files, we'll load them dynamically in the component
  // Set empty modules here, will be populated via fetch
  pageModules = {};
} else {
  // Default: load all JSON files from themes directory
  pageModules = import.meta.glob<PageDef>("./themes/*.json", {
    eager: true,
    import: "default"
  });
}

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

const equipmentOptions: EquipmentOption[] = [
  {
    id: "envy-04237218B0",
    label: "⭐ Envy - 04237218B0",
    thingId: {
      Type: "Inverter",
      Mn: "fortress",
      Md: "FP-ENVY-Inverter",
      SN: "04237218B0"
    },
    modbusSlaveId: 1
  },
  {
    id: "envy-04237219C3",
    label: "Envy - 04237219C3",
    thingId: {
      Type: "Inverter",
      Mn: "fortress",
      Md: "FP-ENVY-Inverter",
      SN: "04237219C3"
    },
    modbusSlaveId: 2
  }
];


// -----------------------------------------------------------------------------
// Helper: build initial editable state for a point
// -----------------------------------------------------------------------------
function buildInitialPointState(point: PointDef): EntryValue {
  const obj: EntryValue = {};

  // Special handling for GeneratorExercise - start with empty values
  if (point.element_type === "GeneratorExercise") {
    point.entries.forEach((entry) => {
      if (entry.dtype === 'enum') {
        obj[entry.arg] = '';
      } else {
        obj[entry.arg] = '';
      }
    });
    return obj;
  }

  // Detect if this point has multiple Number entries with ranges (dual slider case)
  const rangedNumberEntries = point.entries.filter(
    (e) => e.dtype === 'Number' && e.range !== undefined
  );
  const isDualSlider = rangedNumberEntries.length >= 2;

  point.entries.forEach((entry, idx) => {
    if (entry.value !== undefined) {
      obj[entry.arg] = entry.dtype === 'Number' && entry.value !== ''
        ? Number(entry.value)
        : entry.value;
      return;
    }

    if (entry.dtype === 'Number') {
      const range = entry.range;
      if (!range) {
        obj[entry.arg] = 0;
        return;
      }

      // For dual sliders, spread initial values to avoid overlap
      if (isDualSlider) {
        const rangeSpan = range.max - range.min;
        const position = idx / Math.max(rangedNumberEntries.length - 1, 1);

        // Use constraints if present, otherwise distribute evenly
        if (entry.less_than) {
          // This is a "low" value (like StartSOC) - default to 30% of range
          obj[entry.arg] = Math.round(range.min + rangeSpan * 0.3);
        } else if (entry.greater_than) {
          // This is a "high" value (like StopSOC) - default to 70% of range
          obj[entry.arg] = Math.round(range.min + rangeSpan * 0.7);
        } else {
          // No constraints, distribute evenly
          obj[entry.arg] = Math.round(range.min + rangeSpan * position);
        }
      } else {
        // Single value, use min
        obj[entry.arg] = range.min;
      }
      return;
    }

    if (entry.dtype === 'enum') {
      // Use the first friendly string value, not the wire value
      const firstWireVal = Object.keys(entry.meanings ?? {})[0];
      if (firstWireVal) {
        // Prefer friendly_meanings, fall back to meanings
        const firstFriendlyVal = entry.friendly_meanings?.[firstWireVal] ?? entry.meanings?.[firstWireVal] ?? '';
        obj[entry.arg] = firstFriendlyVal;
      } else {
        obj[entry.arg] = '';
      }
      return;
    }

    // Handle bitfield types (bitfield8, bitfield16, bitfield32)
    if (entry.dtype && entry.dtype.startsWith('bitfield')) {
      // Initialize as an object mapping bit positions to boolean states
      // Start with all bits unchecked
      const bitStates: Record<string, boolean> = {};
      if (entry.meanings) {
        Object.keys(entry.meanings).forEach(bitPos => {
          bitStates[bitPos] = false;
        });
      }
      obj[entry.arg] = bitStates;
      return;
    }

    obj[entry.arg] = '';
  });
  return obj;
}

// -----------------------------------------------------------------------------
// Small UI atoms
// -----------------------------------------------------------------------------

const InfoIcon = ({ onClick }: { onClick?: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className="text-xs text-slate-500 border border-slate-400 rounded-full w-4 h-4 flex items-center justify-center leading-none hover:bg-slate-100 hover:text-slate-700 hover:border-slate-500 transition-colors cursor-pointer"
  >
    i
  </button>
);

const RefreshIcon = () => (
  <span className="text-slate-500 text-xs">⟳</span>
);

const ReadOnlyBadge = () => (
  <span className="text-[10px] text-slate-600 border border-slate-300 bg-slate-100 rounded px-1 py-0.5 leading-none">Read Only</span>
);

// -----------------------------------------------------------------------------
// EntryField - renders a single input/checkbox/select based on entry.dtype
// -----------------------------------------------------------------------------
function EntryField({
  entry,
  value,
  onChange,
  readOnly
}: {
  entry: EntryDef;
  value: any;
  onChange: (next: any) => void;
  readOnly: boolean;
}) {
  const commonClasses =
    "w-full rounded border border-slate-300 bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500";
  const containerClasses =
    entry.dtype === 'enum' || (entry.dtype && entry.dtype.startsWith('bitfield'))
      ? 'col-span-full flex flex-col gap-1 text-sm'
      : 'flex flex-col gap-1 text-sm';

  // Handle bitfield types
  if (entry.dtype && entry.dtype.startsWith('bitfield') && entry.meanings) {
    const bitStates = value || {};

    const handleBitToggle = (bitPos: string) => {
      const newStates = { ...bitStates, [bitPos]: !bitStates[bitPos] };
      onChange(newStates);
    };

    return (
      <div className={containerClasses}>
        <div className="text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between">
          <span>{entry.name}</span>
          {entry.unit && (
            <span className="text-[10px] text-slate-400 uppercase">{entry.unit}</span>
          )}
        </div>
        <div className="flex flex-col gap-2 py-1">
          {Object.entries(entry.meanings).map(([bitPos, description]) => (
            <label
              key={bitPos}
              className={`flex items-center gap-2 cursor-pointer ${readOnly ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <input
                type="checkbox"
                className="w-4 h-4 text-emerald-600 border-slate-300 rounded focus:ring-emerald-500 disabled:cursor-not-allowed"
                disabled={readOnly}
                checked={bitStates[bitPos] || false}
                onChange={() => handleBitToggle(bitPos)}
              />
              <span className="text-sm text-slate-800">{description}</span>
            </label>
          ))}
        </div>
        {entry.description && (
          <div className="text-xs text-slate-500 leading-snug">{entry.description}</div>
        )}
        {entry.longdescription && (
          <div className="text-xs text-slate-400 leading-snug">{entry.longdescription}</div>
        )}
      </div>
    );
  }

  if (entry.dtype === 'enum' && entry.meanings) {
    const options = Object.entries(entry.meanings).map(([wireVal, semantic]) => {
      const friendly = entry.friendly_meanings?.[wireVal] ?? semantic;
      return { wireVal, friendly };
    });

    // Use radio buttons for 3 or fewer options
    if (options.length <= 3) {
      return (
        <div className={containerClasses}>
          <div className="text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between">
            <span>{entry.name}</span>
            {entry.unit && (
              <span className="text-[10px] text-slate-400 uppercase">{entry.unit}</span>
            )}
          </div>
          <div className="flex flex-col gap-2 py-1">
            {options.map((opt) => (
              <label
                key={opt.wireVal}
                className={`flex items-center gap-2 cursor-pointer ${readOnly ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <input
                  type="radio"
                  name={entry.arg}
                  className="w-4 h-4 text-emerald-600 border-slate-300 focus:ring-emerald-500 disabled:cursor-not-allowed"
                  disabled={readOnly}
                  checked={value === opt.friendly}
                  onChange={() => onChange(opt.friendly)}
                />
                <span className="text-sm text-slate-800">{opt.friendly}</span>
              </label>
            ))}
          </div>
          {entry.description && (
            <div className="text-xs text-slate-500 leading-snug">{entry.description}</div>
          )}
          {entry.longdescription && (
            <div className="text-xs text-slate-400 leading-snug">{entry.longdescription}</div>
          )}
        </div>
      );
    }

    // Use dropdown for 4+ options with dynamic width
    const longestOption = options.reduce((max, opt) =>
      opt.friendly.length > max.length ? opt.friendly : max,
      ''
    );
    // Calculate width based on content to ensure comfortable minimum width
    const estimatedWidth = Math.min(Math.max(longestOption.length * 8.5 + 50, 220), 480);

    return (
      <div className={containerClasses}>
        <div className="text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between">
          <span>{entry.name}</span>
          {entry.unit && (
            <span className="text-[10px] text-slate-400 uppercase">{entry.unit}</span>
          )}
        </div>
        <select
          className="w-full rounded border border-slate-300 bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500"
          style={{ minWidth: `${estimatedWidth}px`, maxWidth: '100%' }}
          disabled={readOnly}
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((opt) => (
            <option key={opt.wireVal} value={opt.friendly}>
              {opt.friendly}
            </option>
          ))}
        </select>
        {entry.description && (
          <div className="text-xs text-slate-500 leading-snug">{entry.description}</div>
        )}
        {entry.longdescription && (
          <div className="text-xs text-slate-400 leading-snug">{entry.longdescription}</div>
        )}
      </div>
    );
  }

  const isNumber = entry.dtype === 'Number';
  const hasRange = isNumber && entry.range !== undefined;

  return (
    <div className={containerClasses}>
      <div className="text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between">
        <span>{entry.name}</span>
        {entry.unit && (
          <span className="text-[10px] text-slate-400 uppercase">{entry.unit}</span>
        )}
      </div>
      <div className="flex items-center gap-2">
        <input
          type={isNumber ? 'number' : 'text'}
          className={hasRange ? "w-20 rounded border border-slate-300 bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500" : commonClasses}
          disabled={readOnly}
          value={value ?? ''}
          min={entry.range?.min}
          max={entry.range?.max}
          onChange={(e) => {
            const raw = e.target.value;
            if (isNumber) {
              onChange(raw === '' ? '' : Number(raw));
            } else {
              onChange(raw);
            }
          }}
        />
        {hasRange && (
          <div className="flex-1 flex items-center gap-2">
            <span className="text-[10px] text-slate-400 font-mono">{entry.range!.min}</span>
            <input
              type="range"
              className="flex-1"
              disabled={readOnly}
              value={value ?? entry.range!.min}
              min={entry.range!.min}
              max={entry.range!.max}
              onChange={(e) => onChange(Number(e.target.value))}
            />
            <span className="text-[10px] text-slate-400 font-mono">{entry.range!.max}</span>
          </div>
        )}
      </div>
      {entry.description && (
        <div className="text-xs text-slate-500 leading-snug">{entry.description}</div>
      )}
      {entry.longdescription && (
        <div className="text-xs text-slate-400 leading-snug">{entry.longdescription}</div>
      )}
    </div>
  );
}

// -----------------------------------------------------------------------------
// DualHandleSlider - for points with multiple related range values
// -----------------------------------------------------------------------------
function DualHandleSlider({
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

// -----------------------------------------------------------------------------
// Time encoding/decoding utilities
// -----------------------------------------------------------------------------

/**
 * Pack hour and minute into int16 (high byte = hour, low byte = minute)
 * Example: packTime(14, 30) => 0x0E1E => 3614
 */
function packTime(hour: number, minute: number): number {
  return (hour << 8) | minute;
}

/**
 * Unpack int16 into hour and minute (high byte = hour, low byte = minute)
 * Example: unpackTime(3614) => { hour: 14, minute: 30 }
 */
function unpackTime(packedValue: number): { hour: number; minute: number } {
  const hour = (packedValue >> 8) & 0xFF;
  const minute = packedValue & 0xFF;
  return { hour, minute };
}

const ZERO_TIME = '00:00';

function TimeInputField({
  label,
  value,
  readOnly,
  onChange,
  onClear,
}: {
  label: string;
  value: string;
  readOnly: boolean;
  onChange: (value: string) => void;
  onClear: () => void;
}) {
  const showClear = !readOnly && value !== ZERO_TIME;

  return (
    <div className="w-[150px] flex-shrink-0 flex flex-col gap-1">
      <label className="text-slate-600 text-xs font-medium">{label}</label>
      <div className="relative">
        <input
          type="time"
          className="w-full rounded border border-slate-300 bg-white px-3 pr-8 py-2 text-sm text-slate-800 disabled:bg-slate-100"
          disabled={readOnly}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {showClear && (
          <button
            type="button"
            className="absolute inset-y-0 right-1 flex items-center px-1 text-slate-400 hover:text-slate-700"
            onClick={onClear}
            aria-label={`Clear ${label.toLowerCase()}`}
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Widget Components for special point types
// -----------------------------------------------------------------------------

// DateTime Widget - for date and time selection
function DateTimeWidget({
  point,
  formState,
  readOnly,
  onChange,
}: {
  point: PointDef;
  formState: EntryValue;
  readOnly: boolean;
  onChange: (argName: string, value: any) => void;
}) {
  const widgetConfig = getWidgetConfig(point.uuid);
  const isPacked = widgetConfig?.encoding === "packed_hm";
  const secEntry = point.entries.find(e => e.arg === "Sec");

  // Convert to/from datetime-local input format
  const toDateTimeLocal = () => {
    let hour = 0;
    let min = 0;

    if (isPacked && widgetConfig?.packedTimeEntry) {
      // Unpack from single int16 entry
      const packedValue = formState[widgetConfig.packedTimeEntry] ?? 0;
      const unpacked = unpackTime(packedValue);
      hour = unpacked.hour;
      min = unpacked.minute;
    } else {
      // Read from separate entries
      hour = formState.Hour ?? 0;
      min = formState.Min ?? 0;
    }

    const year = (formState.Year ?? 0) + 2000; // Convert 2-digit to 4-digit
    const month = String(formState.Mon ?? 1).padStart(2, '0');
    const day = String(formState.Day ?? 1).padStart(2, '0');
    const hourStr = String(hour).padStart(2, '0');
    const minStr = String(min).padStart(2, '0');
    return `${year}-${month}-${day}T${hourStr}:${minStr}`;
  };

  const fromDateTimeLocal = (value: string) => {
    const dt = new Date(value);
    const hour = dt.getHours();
    const min = dt.getMinutes();

    onChange("Year", dt.getFullYear() - 2000);
    onChange("Mon", dt.getMonth() + 1);
    onChange("Day", dt.getDate());

    if (isPacked && widgetConfig?.packedTimeEntry) {
      // Pack into single int16 entry
      const packed = packTime(hour, min);
      onChange(widgetConfig.packedTimeEntry, packed);
    } else {
      // Write to separate entries
      onChange("Hour", hour);
      onChange("Min", min);
      if (secEntry) onChange("Sec", 0);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <input
        type="datetime-local"
        className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 disabled:bg-slate-100"
        disabled={readOnly}
        value={toDateTimeLocal()}
        onChange={(e) => fromDateTimeLocal(e.target.value)}
      />
    </div>
  );
}

// TimeRange Widget - for start and end time selection
function TimeRangeWidget({
  point,
  formState,
  readOnly,
  onChange,
}: {
  point: PointDef;
  formState: EntryValue;
  readOnly: boolean;
  onChange: (argName: string, value: any) => void;
}) {
  const widgetConfig = getWidgetConfig(point.uuid);
  const isPacked = widgetConfig?.encoding === "packed_hm";

  // Find start and end time entries (for separate encoding)
  const startHourEntry = point.entries.find(e => e.arg.includes("StartHour") || e.arg.includes("Start_hour") || e.arg.includes("StartTime_h"));
  const startMinEntry = point.entries.find(e => e.arg.includes("StartMin") || e.arg.includes("Start_minute") || e.arg.includes("StartTime_m"));
  const endHourEntry = point.entries.find(e => e.arg.includes("EndHour") || e.arg.includes("End_hour") || e.arg.includes("EndTime_h"));
  const endMinEntry = point.entries.find(e => e.arg.includes("EndMin") || e.arg.includes("End_minute") || e.arg.includes("EndTime_m"));

  const getStartTime = (): string => {
    if (isPacked && widgetConfig?.packedStartEntry) {
      const packedValue = formState[widgetConfig.packedStartEntry] ?? 0;
      const { hour, minute } = unpackTime(packedValue);
      return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
    } else if (startHourEntry && startMinEntry) {
      const hour = String(formState[startHourEntry.arg] ?? 0).padStart(2, '0');
      const min = String(formState[startMinEntry.arg] ?? 0).padStart(2, '0');
      return `${hour}:${min}`;
    }
    return ZERO_TIME;
  };

  const getEndTime = (): string => {
    if (isPacked && widgetConfig?.packedEndEntry) {
      const packedValue = formState[widgetConfig.packedEndEntry] ?? 0;
      const { hour, minute } = unpackTime(packedValue);
      return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
    } else if (endHourEntry && endMinEntry) {
      const hour = String(formState[endHourEntry.arg] ?? 0).padStart(2, '0');
      const min = String(formState[endMinEntry.arg] ?? 0).padStart(2, '0');
      return `${hour}:${min}`;
    }
    return ZERO_TIME;
  };

  const setStartTime = (value: string) => {
    const [hourStr, minStr] = value.split(':');
    const hour = parseInt(hourStr, 10);
    const min = parseInt(minStr, 10);

    if (isPacked && widgetConfig?.packedStartEntry) {
      const packed = packTime(hour, min);
      onChange(widgetConfig.packedStartEntry, packed);
    } else if (startHourEntry && startMinEntry) {
      onChange(startHourEntry.arg, hour);
      onChange(startMinEntry.arg, min);
    }
  };

  const setEndTime = (value: string) => {
    const [hourStr, minStr] = value.split(':');
    const hour = parseInt(hourStr, 10);
    const min = parseInt(minStr, 10);

    if (isPacked && widgetConfig?.packedEndEntry) {
      const packed = packTime(hour, min);
      onChange(widgetConfig.packedEndEntry, packed);
    } else if (endHourEntry && endMinEntry) {
      onChange(endHourEntry.arg, hour);
      onChange(endMinEntry.arg, min);
    }
  };

  const clearTimes = () => {
    if (readOnly) return;
    setStartTime(ZERO_TIME);
    setEndTime(ZERO_TIME);
  };

  const startTime = getStartTime();
  const endTime = getEndTime();

  return (
    <div className="flex items-end gap-4">
      <TimeInputField
        label="Start Time"
        value={startTime}
        readOnly={readOnly}
        onChange={setStartTime}
        onClear={clearTimes}
      />
      <TimeInputField
        label="End Time"
        value={endTime}
        readOnly={readOnly}
        onChange={setEndTime}
        onClear={clearTimes}
      />
    </div>
  );
}

function MultiTimeRangeWidget({
  point,
  formState,
  readOnly,
  onChange,
}: {
  point: PointDef;
  formState: EntryValue;
  readOnly: boolean;
  onChange: (argName: string, value: any) => void;
}) {
  const widgetConfig = getWidgetConfig(point.uuid);
  const isPacked = widgetConfig?.encoding === "packed_hm";

  if (isPacked) {
    // Packed multi-range encoding is not supported yet; fall back to single widget
    return (
      <TimeRangeWidget
        point={point}
        formState={formState}
        readOnly={readOnly}
        onChange={onChange}
      />
    );
  }

  type WindowConfig = {
    id: number;
    startHourArg?: string;
    startMinArg?: string;
    endHourArg?: string;
    endMinArg?: string;
  };

  const windowMap = new Map<number, WindowConfig>();

  point.entries.forEach((entry) => {
    const match = entry.arg.match(/^(StartTime|EndTime)(\d+)_([hm])$/i);
    if (!match) {
      return;
    }

    const [, type, indexStr, part] = match;
    const index = parseInt(indexStr, 10);
    if (!windowMap.has(index)) {
      windowMap.set(index, { id: index });
    }

    const config = windowMap.get(index)!;
    const lowerPart = part.toLowerCase();

    if (type.toLowerCase() === 'starttime') {
      if (lowerPart === 'h') {
        config.startHourArg = entry.arg;
      } else {
        config.startMinArg = entry.arg;
      }
    } else {
      if (lowerPart === 'h') {
        config.endHourArg = entry.arg;
      } else {
        config.endMinArg = entry.arg;
      }
    }
  });

  const windows = Array.from(windowMap.values()).sort((a, b) => a.id - b.id);

  if (windows.length === 0) {
    return (
      <TimeRangeWidget
        point={point}
        formState={formState}
        readOnly={readOnly}
        onChange={onChange}
      />
    );
  }

  const getTimeString = (hourArg?: string, minArg?: string) => {
    const hourVal = hourArg !== undefined ? formState[hourArg] : 0;
    const minVal = minArg !== undefined ? formState[minArg] : 0;

    const hour = typeof hourVal === 'number' ? hourVal : parseInt(hourVal ?? 0, 10) || 0;
    const minute = typeof minVal === 'number' ? minVal : parseInt(minVal ?? 0, 10) || 0;

    return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
  };

  const setTimeForWindow = (
    windowConfig: WindowConfig,
    which: 'start' | 'end',
    value: string
  ) => {
    const [hourStr, minuteStr] = value.split(':');
    const hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);

    if (which === 'start') {
      if (windowConfig.startHourArg) onChange(windowConfig.startHourArg, hour);
      if (windowConfig.startMinArg) onChange(windowConfig.startMinArg, minute);
    } else {
      if (windowConfig.endHourArg) onChange(windowConfig.endHourArg, hour);
      if (windowConfig.endMinArg) onChange(windowConfig.endMinArg, minute);
    }
  };

  const clearWindow = (windowConfig: WindowConfig) => {
    if (readOnly) return;
    if (windowConfig.startHourArg) onChange(windowConfig.startHourArg, 0);
    if (windowConfig.startMinArg) onChange(windowConfig.startMinArg, 0);
    if (windowConfig.endHourArg) onChange(windowConfig.endHourArg, 0);
    if (windowConfig.endMinArg) onChange(windowConfig.endMinArg, 0);
  };

  return (
    <div className="flex flex-col gap-4">
      {windows.map((windowConfig) => {
        const startValue = getTimeString(windowConfig.startHourArg, windowConfig.startMinArg);
        const endValue = getTimeString(windowConfig.endHourArg, windowConfig.endMinArg);
        const handleClear = () => clearWindow(windowConfig);

        return (
          <div
            key={windowConfig.id}
            className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-slate-50/60 p-3"
          >
            <div className="text-xs font-semibold uppercase text-slate-600">
              Grid Charge Window {windowConfig.id}
            </div>
            <div className="flex items-end gap-4">
              <TimeInputField
                label="Start Time"
                value={startValue}
                readOnly={readOnly}
                onChange={(val) => setTimeForWindow(windowConfig, 'start', val)}
                onClear={handleClear}
              />
              <TimeInputField
                label="End Time"
                value={endValue}
                readOnly={readOnly}
                onChange={(val) => setTimeForWindow(windowConfig, 'end', val)}
                onClear={handleClear}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// GeneratorExercise Widget - for scheduling recurring generator exercise
function GeneratorExerciseWidget({
  formState,
  readOnly,
  onChange,
}: {
  formState: EntryValue;
  readOnly: boolean;
  onChange: (argName: string, value: any) => void;
}) {
  const dayOfWeek = formState.DayOfWeek !== '' ? formState.DayOfWeek : null;
  const hour = formState.Hour !== '' ? formState.Hour : null;
  const minute = formState.Minute !== '' ? formState.Minute : null;

  // Convert hour and minute to time string for the time picker
  const getTimeString = (): string => {
    if (hour === null || minute === null) return '';
    return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
  };

  // Parse time string and update hour and minute
  const setTimeString = (value: string) => {
    if (!value) {
      onChange("Hour", '');
      onChange("Minute", '');
      return;
    }
    const [hourStr, minStr] = value.split(':');
    onChange("Hour", parseInt(hourStr, 10));
    onChange("Minute", parseInt(minStr, 10));
  };

  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Generate schedule preview only if values are set
  let schedulePreview = "No schedule configured";
  if (dayOfWeek !== null && hour !== null && minute !== null) {
    schedulePreview = `Every ${dayNames[dayOfWeek]} at ${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-slate-600 text-xs font-medium">Day of Week</label>
          <select
            className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 disabled:bg-slate-100"
            disabled={readOnly}
            value={dayOfWeek !== null ? dayOfWeek : ''}
            onChange={(e) => onChange("DayOfWeek", e.target.value === '' ? '' : Number(e.target.value))}
          >
            <option value="">Select day...</option>
            {dayNames.map((day, idx) => (
              <option key={idx} value={idx}>{day}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-slate-600 text-xs font-medium">Time</label>
          <input
            type="time"
            className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 disabled:bg-slate-100"
            disabled={readOnly}
            value={getTimeString()}
            onChange={(e) => setTimeString(e.target.value)}
          />
        </div>
      </div>

      {/* Schedule preview */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
        <div className="text-xs text-slate-600 font-medium mb-1">Schedule Preview</div>
        <div className="text-sm text-slate-800">{schedulePreview}</div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// HelpModal - displays help text in a modal
// -----------------------------------------------------------------------------
function HelpModal({
  title,
  content,
  isOpen,
  onClose
}: {
  title: string;
  content: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Simple markdown-like rendering for bold text
  const renderContent = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={idx} className="font-semibold text-slate-900">{part.slice(2, -2)}</strong>;
      }
      return <span key={idx}>{part}</span>;
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/10  p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-lg border border-slate-300 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-5 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <div className="text-slate-500 border border-slate-400 rounded-full w-5 h-5 flex items-center justify-center leading-none text-xs font-medium">
              i
            </div>
            <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
          </div>
          <button
            type="button"
            className="text-slate-400 hover:text-slate-600 transition-colors text-xl leading-none -mt-1"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-5 max-h-[60vh] overflow-y-auto">
          <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
            {renderContent(content)}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-4 border-t border-slate-200 bg-slate-50">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// PointCard - card for a single logical point ("DATE & TIME", etc.)
// -----------------------------------------------------------------------------
function PointCard({
  point,
  helpTextMatch = false,
  equipment,
}: {
  point: PointDef;
  helpTextMatch?: boolean;
  equipment: EquipmentOption;
}) {
  const [formState, setFormState] = useState<EntryValue>(
    buildInitialPointState(point)
  );

  const [showDialog, setShowDialog] = useState(false);
  const [dialogPayload, setDialogPayload] = useState<any>(null);
  const [showHelpModal, setShowHelpModal] = useState(false);

  const fallbackThingId = equipmentOptions[0]?.thingId ?? {
    Type: "Inverter",
    Mn: "fortress",
    Md: "FP-ENVY-Inverter",
    SN: ""
  };
  const activeThingId = equipment?.thingId ?? fallbackThingId;
  const activeSlaveId = equipment?.modbusSlaveId ?? equipmentOptions[0]?.modbusSlaveId ?? 1;

  const handleFieldChange = (argName: string, nextVal: any) => {
    setFormState((prev) => ({ ...prev, [argName]: nextVal }));
  };

  // Build a mock command payload for preview when clicking "Set"
  const handleSet = () => {
    const normalizedArguments: EntryValue = { ...formState };

    // Convert enum friendly values based on protocol
    // Modbus: use wire values (keys like "0")
    // Matter: use semantic values (strings like "Meter")
    const useWireValues = point.protocol.modbus !== undefined;

    point.entries.forEach((entry) => {
      if (entry.dtype !== 'enum' || !entry.meanings) {
        return;
      }

      const rawValue = normalizedArguments[entry.arg];
      if (rawValue === undefined || rawValue === null || rawValue === '') {
        return;
      }

      const match = Object.entries(entry.meanings).find(([wireVal, semantic]) => {
        const friendly = entry.friendly_meanings?.[wireVal] ?? semantic;
        return rawValue === friendly || rawValue === semantic;
      });

      if (match) {
        // Modbus uses wire values as integers (e.g., 0), Matter uses semantic values (e.g., "Meter")
        normalizedArguments[entry.arg] = useWireValues ? parseInt(match[0], 10) : match[1];
      }
    });

    // Convert bitfield states to integers
    point.entries.forEach((entry) => {
      if (!entry.dtype || !entry.dtype.startsWith('bitfield')) {
        return;
      }

      const bitStates = normalizedArguments[entry.arg] || {};
      let intValue = 0;

      // Set each bit based on the checkbox state
      Object.entries(bitStates).forEach(([bitPos, isSet]) => {
        if (isSet) {
          intValue |= (1 << parseInt(bitPos, 10));
        }
      });

      normalizedArguments[entry.arg] = intValue;
    });

    let payload: any = {};

    if (point.protocol.matter) {
      // Check if entries have individual protocol definitions (for multi-element widgets)
      const hasEntryProtocols = point.entries.some(e => e.protocol?.matter);

      let elements;
      if (hasEntryProtocols) {
        // Build multiple Element objects, one per entry with protocol
        elements = point.entries
          .filter(entry => entry.protocol?.matter)
          .map(entry => ({
            MEP: entry.protocol!.matter!.MEP || point.protocol.matter.MEP,
            Cluster: entry.protocol!.matter!.Cluster || point.protocol.matter.Cluster,
            Element: entry.protocol!.matter!.Element || point.protocol.matter.Element,
            arguments: { [entry.arg]: normalizedArguments[entry.arg] }
          }));
      } else {
        // Legacy single-element behavior
        elements = [
          {
            MEP: point.protocol.matter.MEP,
            Cluster: point.protocol.matter.Cluster,
            Element: point.protocol.matter.Element,
            arguments: normalizedArguments
          }
        ];
      }

      payload = {
        version: "1.0",
        timeout: 60,
        requestId: Date.now(),
        endPoint: "Matter",
        method:
          point.element_type === "Service" || point.access === "Invoke"
            ? "Invoke"
            : "Write",
        data: {
          Elements: elements,
          thingId: activeThingId
        }
      };
    } else if (point.protocol.modbus) {
      const isWrite = point.access !== "R";
      const registerType = point.protocol.modbus.register_type;

      // Map register type to Modbus function code
      // For reading: 3 = read holding registers, 4 = read input registers
      // For writing: 6 = write single register, 16 = write multiple registers
      let functionCode: number;
      if (isWrite) {
        // For write operations: use function 6 for single register, 16 for multiple
        functionCode = point.protocol.modbus.size > 1 ? 16 : 6;
      } else {
        // For read operations: use function based on register type
        functionCode = registerType === 3 ? 3 : 4;
      }

      if (isWrite) {
        // Get the first value from normalizedArguments (for write operations)
        const firstEntryArg = point.entries[0]?.arg;
        let writeValue = firstEntryArg ? normalizedArguments[firstEntryArg] : 0;

        // Apply scale factor if present
        // If scale_factor is 0.1, a display value of 50 becomes 500 (50 / 0.1)
        if (point.protocol.modbus.scale_factor && typeof writeValue === 'number') {
          writeValue = Math.round(writeValue / point.protocol.modbus.scale_factor);
        }

        payload = {
          version: "1.0",
          requestId: Date.now(),
          endPoint: "Modbus",
          method: "Write",
          timeout: 5,
          data: {
            type: "RTU",
            uartPort: 1,
            slaveId: activeSlaveId,
            address: point.protocol.modbus.address,
            function: functionCode,
            value: writeValue
          }
        };
      } else {
        // Read operation
        payload = {
          version: "1.0",
          requestId: Date.now(),
          endPoint: "Modbus",
          method: "Read",
          timeout: 5,
          data: {
            type: "RTU",
            uartPort: 1,
            slaveId: activeSlaveId,
            address: point.protocol.modbus.address,
            function: functionCode,
            registerNumber: point.protocol.modbus.size
          }
        };
      }
    } else if (point.element_type === "GeneratorExercise" && point.protocol.cgi) {
      // Special handling for GeneratorExercise element type (CGI protocol)
      const dayOfWeek = normalizedArguments.DayOfWeek !== '' ? normalizedArguments.DayOfWeek : 0;
      const hour = normalizedArguments.Hour !== '' ? normalizedArguments.Hour : 0;
      const minute = normalizedArguments.Minute !== '' ? normalizedArguments.Minute : 0;

      // Generate cron expression
      const cronTimer = `${minute} ${hour} * * ${dayOfWeek}`;

      payload = {
        version: "1.0",
        requestId: Date.now(),
        method: "Invoke",
        endPoint: "LuaPlugin",
        timeout: 5,
        data: {
          Cluster: point.protocol.cgi.Cluster,
          MEP: point.protocol.cgi.MEP,
          cronTimer: cronTimer,
          Element: point.protocol.cgi.Element,
          thingId: activeThingId
        }
      };
    }

    setDialogPayload(payload);
    setShowDialog(true);
  };

  const normalizedAccess = typeof point.access === "string"
    ? point.access.trim().toLowerCase()
    : "";
  const isInvoke = normalizedAccess === "invoke";

  const readOnly = point.readOnly || point.access === "R";
  const setButtonAppearance = readOnly
    ? "border-slate-300 bg-slate-100 text-slate-400 cursor-not-allowed"
    : "border-slate-400 bg-white text-slate-700 hover:bg-slate-50";

  // Detect if this point should use a multi-handle slider
  const rangedNumberEntries = point.entries.filter(
    (e) => e.dtype === 'Number' && e.range !== undefined
  );
  const shouldUseDualSlider =
    !point.widget &&
    rangedNumberEntries.length >= 2 &&
    rangedNumberEntries.length === point.entries.length;

  return (
    <div className="rounded-xl border border-slate-300 bg-white p-4 shadow-sm">
      {/* header row */}
      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
        <div className="flex items-start gap-2">
          <div className="text-slate-800 text-sm font-semibold leading-tight">
            {point.title}
          </div>
          {point.help && (
            <div className="mt-0.5 relative">
              <InfoIcon onClick={() => setShowHelpModal(true)} />
              {helpTextMatch && (
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              )}
            </div>
          )}
          {readOnly && <ReadOnlyBadge />}
        </div>

        <div className="flex items-center gap-2 text-xs">
          <button
            className="flex items-center gap-1 text-slate-600 hover:text-slate-900"
            title="Refresh from device"
            onClick={() => {
              console.log("refresh", point.uuid);

              // Mock read behavior for GeneratorExercise
              if (point.element_type === "GeneratorExercise") {
                // Populate with sensible mock data: Wednesday at 10:00 AM
                setFormState({
                  DayOfWeek: 3,  // Wednesday
                  Hour: 10,
                  Minute: 0
                });
              }
            }}
          >
            <RefreshIcon />
          </button>

          <button
            className={`border text-xs font-medium rounded px-2 py-1 leading-none transition ${setButtonAppearance}`}
            disabled={readOnly}
            onClick={handleSet}
          >
            Set
          </button>
        </div>
      </div>

      {/* fields grid or custom widget */}
      {point.widget === "datetime" ? (
        <DateTimeWidget
          point={point}
          formState={formState}
          readOnly={readOnly}
          onChange={handleFieldChange}
        />
      ) : point.widget === "timerange-multi" ? (
        <MultiTimeRangeWidget
          point={point}
          formState={formState}
          readOnly={readOnly}
          onChange={handleFieldChange}
        />
      ) : point.widget === "timerange" ? (
        <TimeRangeWidget
          point={point}
          formState={formState}
          readOnly={readOnly}
          onChange={handleFieldChange}
        />
      ) : point.element_type === "GeneratorExercise" ? (
        <GeneratorExerciseWidget
          formState={formState}
          readOnly={readOnly}
          onChange={handleFieldChange}
        />
      ) : shouldUseDualSlider ? (
        <DualHandleSlider
          entries={rangedNumberEntries}
          formState={formState}
          readOnly={readOnly}
          onChange={handleFieldChange}
        />
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
          {point.entries.map((entry) => (
            <EntryField
              key={entry.arg}
              entry={entry}
              value={formState[entry.arg]}
              readOnly={readOnly}
              onChange={(val) => handleFieldChange(entry.arg, val)}
            />
          ))}
        </div>
      )}

      {isInvoke && point.element_type !== "GeneratorExercise" && (
        <div className="mt-4 flex items-center gap-2">
          <button
            type="button"
            className={`border text-xs font-medium rounded px-2 py-1 leading-none transition ${setButtonAppearance}`}
            disabled={readOnly}
            onClick={handleSet}
          >
            {point.invokeButtonText || "Invoke"}
          </button>
        </div>
      )}

      {/* dialog modal */}
      {showDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-4 border border-slate-300">
            <div className="flex items-start justify-between mb-3">
              <div className="text-slate-800 font-semibold text-sm">
                Command Preview
              </div>
              <button
                className="text-slate-500 hover:text-slate-800 text-sm"
                onClick={() => setShowDialog(false)}
              >
                ✕
              </button>
            </div>

            <div className="text-[11px] text-slate-600 mb-2 leading-relaxed">
              This is the payload that would be sent to the device for
              <span className="font-medium"> {point.title}</span>.
            </div>

            <pre className="text-[11px] leading-snug bg-slate-50 border border-slate-200 rounded p-2 overflow-x-auto text-slate-700 whitespace-pre-wrap">{JSON.stringify(dialogPayload, null, 2)}</pre>

            <div className="mt-4 flex justify-end">
              <button
                className="text-xs border border-slate-400 rounded px-3 py-1 bg-white hover:bg-slate-50 text-slate-700"
                onClick={() => setShowDialog(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* help modal */}
      <HelpModal
        title={point.title}
        content={point.help || ''}
        isOpen={showHelpModal}
        onClose={() => setShowHelpModal(false)}
      />
    </div>
  );
}

// -----------------------------------------------------------------------------
// SubsectionBlock - renders one subsection, possibly collapsible (Advanced)
// -----------------------------------------------------------------------------
function SubsectionBlock({
  subsection,
  searchQuery,
  pointMatchesSearch,
  equipment,
}: {
  subsection: SubsectionDef;
  searchQuery: string;
  pointMatchesSearch: (point: PointDef, query: string) => { matches: boolean; helpTextMatch: boolean };
  equipment: EquipmentOption;
}) {
  const [open, setOpen] = useState(!subsection.collapsedByDefault);

  // Filter points based on search
  const filteredPoints = subsection.points
    .map(p => ({ point: p, searchResult: pointMatchesSearch(p, searchQuery) }))
    .filter(({ searchResult }) => searchResult.matches);

  // Don't render if no points match search
  if (filteredPoints.length === 0) {
    return null;
  }

  // Auto-expand if searching and has matches
  const shouldBeOpen = searchQuery.trim() ? true : open;

  // always-open subsection (normal/default)
  if (!subsection.collapsedByDefault) {
    return (
      <div className="mb-6">
        {subsection.title && (
          <div className="text-slate-700 text-sm font-semibold mb-2 flex items-center gap-2">
            <span>{subsection.title}</span>
          </div>
        )}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredPoints.map(({ point, searchResult }) => (
            <PointCard
              key={point.uuid}
              point={point}
              helpTextMatch={searchResult.helpTextMatch}
              equipment={equipment}
            />
          ))}
        </div>
      </div>
    );
  }

  // collapsed-by-default subsection (Advanced)
  return (
    <div className="border border-slate-300 bg-white rounded-xl shadow-sm mb-8">
      <button
        className="w-full flex items-center justify-between px-4 py-2 text-left"
        onClick={() => setOpen((s) => !s)}
      >
        <span className="text-slate-800 text-sm font-semibold uppercase tracking-wide">
          {subsection.title || "Advanced"}
        </span>
        <span className="text-slate-500 text-xs">{shouldBeOpen ? "▾" : "▸"}</span>
      </button>

      {shouldBeOpen && (
        <div className="p-4 border-t border-slate-200 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredPoints.map(({ point, searchResult }) => (
            <PointCard
              key={point.uuid}
              point={point}
              helpTextMatch={searchResult.helpTextMatch}
              equipment={equipment}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// -----------------------------------------------------------------------------
// SectionBlock - renders a full section with all its subsections in order
// -----------------------------------------------------------------------------
function SectionBlock({
  section,
  sectionId,
  searchQuery,
  pointMatchesSearch,
  equipment,
}: {
  section: SectionDef;
  sectionId: string;
  searchQuery: string;
  pointMatchesSearch: (point: PointDef, query: string) => { matches: boolean; helpTextMatch: boolean };
  equipment: EquipmentOption;
}) {
  const [isOpen, setIsOpen] = useState(true);

  // Check if any subsection has matching points
  const hasMatches = section.subsections.some(sub =>
    sub.points.some(p => pointMatchesSearch(p, searchQuery).matches)
  );

  // Don't render if no matches when searching
  if (searchQuery.trim() && !hasMatches) {
    return null;
  }

  return (
    <section className="bg-white/0" id={sectionId}>
      <button
        className="w-full flex items-center justify-between text-slate-900 text-lg font-semibold mb-3 hover:text-emerald-600 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{section.sectionTitle}</span>
        <span className="text-slate-500 text-sm">{isOpen ? "▾" : "▸"}</span>
      </button>

      {isOpen && (
        <div>
          {section.subsections.map((sub, i) => (
            <SubsectionBlock
              key={i}
              subsection={sub}
              searchQuery={searchQuery}
              pointMatchesSearch={pointMatchesSearch}
              equipment={equipment}
            />
          ))}
        </div>
      )}
    </section>
  );
}

// -----------------------------------------------------------------------------
// ThemeBlock - renders a full theme with all its sections
// -----------------------------------------------------------------------------
function ThemeBlock({
  theme,
  themeId,
  searchQuery,
  pointMatchesSearch,
  equipment,
}: {
  theme: ThemeDef;
  themeId: string;
  searchQuery: string;
  pointMatchesSearch: (point: PointDef, query: string) => { matches: boolean; helpTextMatch: boolean };
  equipment: EquipmentOption;
}) {
  const [isOpen, setIsOpen] = useState(true);

  // Check if any section has matching points
  const hasMatches = theme.sections.some(section =>
    section.subsections.some(sub =>
      sub.points.some(p => pointMatchesSearch(p, searchQuery).matches)
    )
  );

  // Don't render if no matches when searching
  if (searchQuery.trim() && !hasMatches) {
    return null;
  }

  return (
    <div className="bg-white/0" id={themeId}>
      <button
        className="w-full flex items-center justify-between text-slate-900 text-2xl font-bold mb-6 border-b border-slate-300 pb-3 hover:text-emerald-600 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{theme.themeName}</span>
        <span className="text-slate-500 text-lg">{isOpen ? "▾" : "▸"}</span>
      </button>

      {isOpen && (
        <div className="flex flex-col gap-10">
          {theme.sections.map((section: SectionDef, idx: number) => {
            const sectionId = `${themeId}-section-${idx}`;
            return (
              <SectionBlock
                key={`${section.sectionTitle}-${idx}`}
                section={section}
                sectionId={sectionId}
                searchQuery={searchQuery}
                pointMatchesSearch={pointMatchesSearch}
                equipment={equipment}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

// -----------------------------------------------------------------------------
// Page Layout
// -----------------------------------------------------------------------------
export default function PointThemeDemoPage() {
  const [loadedPageRegistry, setLoadedPageRegistry] = useState<PageRegistryEntry[]>(pageRegistry);
  const [loadedPageLookup, setLoadedPageLookup] = useState<Record<string, PageDef>>(pageLookup);
  const [isLoading, setIsLoading] = useState<boolean>(!!THEME_FILE);
  const [loadError, setLoadError] = useState<string | null>(null);

  // Load theme file dynamically if specified via CLI
  useEffect(() => {
    if (!THEME_FILE) return;

    const loadThemeFile = async () => {
      try {
        setIsLoading(true);
        setLoadError(null);
        
        // Normalize the file path for fetch
        // Account for Vite's base path
        const basePath = '/matter-site-config-prototype';
        let fetchPath = THEME_FILE;
        
        // Remove base path if user included it
        if (fetchPath.startsWith(basePath)) {
          fetchPath = fetchPath.substring(basePath.length);
        }
        
        // Handle relative paths
        if (fetchPath.startsWith('./') || fetchPath.startsWith('../')) {
          // Relative path - convert to absolute URL path
          // Remove leading ./ or ../ and ensure it starts with /
          fetchPath = fetchPath.replace(/^\.\.?\//, '/');
          if (!fetchPath.startsWith('/')) {
            fetchPath = '/' + fetchPath;
          }
        } else if (!fetchPath.startsWith('/') && !fetchPath.startsWith('http://') && !fetchPath.startsWith('https://')) {
          // Assume it's a relative path without ./ prefix
          fetchPath = '/' + fetchPath;
        }
        
        // Prepend base path for fetch
        fetchPath = basePath + fetchPath;
        
        console.log('Fetching theme file from:', fetchPath);
        
        // Fetch the JSON file
        const response = await fetch(fetchPath);
        if (!response.ok) {
          const text = await response.text();
          console.error('Failed to fetch theme file. Response:', text.substring(0, 200));
          throw new Error(`Failed to load theme file: ${response.statusText} (${response.status})`);
        }
        
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          const text = await response.text();
          console.error('Response is not JSON. Content-Type:', contentType);
          console.error('Response body (first 200 chars):', text.substring(0, 200));
          throw new Error(`Expected JSON but got ${contentType || 'unknown content type'}`);
        }
        
        const data: PageDef = await response.json();
        
        // Extract filename from path
        const filename = THEME_FILE.split("/").pop() ?? THEME_FILE.split("\\").pop() ?? "theme";
        const id = filename.replace(/\.json$/i, "");
        const label = data.pageName?.trim() || id;
        
        // Create registry entry
        const entry: PageRegistryEntry = {
          id,
          label,
          filename,
          data
        };
        
        // Update state
        setLoadedPageRegistry([entry]);
        setLoadedPageLookup({ [id]: data });
      } catch (error) {
        console.error('Error loading theme file:', error);
        setLoadError(error instanceof Error ? error.message : 'Failed to load theme file');
      } finally {
        setIsLoading(false);
      }
    };

    loadThemeFile();
  }, []);

  const defaultPageId = loadedPageRegistry[0]?.id ?? "";
  const [selectedPageId] = useState(defaultPageId);
  const [selectedEquipmentId, setSelectedEquipmentId] = useState(
    equipmentOptions[0]?.id ?? ""
  );
  const [activeSection, setActiveSection] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const lastUpdatedAt = useMemo(() => new Date(Date.now() - 15 * 60 * 1000), []);
  const lastUpdatedLabel = useMemo(
    () =>
      lastUpdatedAt.toLocaleString(undefined, {
        dateStyle: "medium",
        timeStyle: "short"
      }),
    [lastUpdatedAt]
  );

  const activePage: PageDef | null =
    (selectedPageId && loadedPageLookup[selectedPageId]) ||
    (defaultPageId && loadedPageLookup[defaultPageId]) ||
    null;

  const activeEquipment = useMemo(() => {
    return equipmentOptions.find((eq) => eq.id === selectedEquipmentId) || equipmentOptions[0];
  }, [selectedEquipmentId]);

  useEffect(() => {
    assertSchemaExpectations(activePage);
  }, [activePage]);

  // Search filtering function
  const pointMatchesSearch = (point: PointDef, query: string): { matches: boolean; helpTextMatch: boolean } => {
    if (!query.trim()) {
      return { matches: true, helpTextMatch: false };
    }

    const lowerQuery = query.toLowerCase();

    // Check title
    if (point.title?.toLowerCase().includes(lowerQuery)) {
      return { matches: true, helpTextMatch: false };
    }

    // Check help text
    if (point.help?.toLowerCase().includes(lowerQuery)) {
      return { matches: true, helpTextMatch: true };
    }

    // Check entries - names and friendly meanings
    for (const entry of point.entries) {
      if (entry.name?.toLowerCase().includes(lowerQuery)) {
        return { matches: true, helpTextMatch: false };
      }

      // Check friendly meanings
      if (entry.friendly_meanings) {
        for (const meaning of Object.values(entry.friendly_meanings)) {
          if (meaning.toLowerCase().includes(lowerQuery)) {
            return { matches: true, helpTextMatch: false };
          }
        }
      }

      // Check description
      if (entry.description?.toLowerCase().includes(lowerQuery)) {
        return { matches: true, helpTextMatch: false };
      }
    }

    return { matches: false, helpTextMatch: false };
  };

  // Track scroll position to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      // Get all section elements
      const sections = document.querySelectorAll('[id^="theme-"]');
      let currentSection = "";

      // Find which section is currently in view
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Section is considered active if its top is within the top 30% of viewport
        if (rect.top <= window.innerHeight * 0.3 && rect.bottom > 0) {
          currentSection = section.id;
        }
      });

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    // Set initial active section
    handleScroll();

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-100 text-slate-900 p-4 md:p-6">
        <div className="max-w-xl mx-auto bg-white border border-slate-300 rounded-xl shadow-sm p-6 text-sm text-slate-700">
          Loading theme file...
        </div>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="min-h-screen bg-slate-100 text-slate-900 p-4 md:p-6">
        <div className="max-w-xl mx-auto bg-white border border-red-300 rounded-xl shadow-sm p-6 text-sm text-red-700">
          <div className="font-semibold mb-2">Error loading theme file</div>
          <div>{loadError}</div>
          <div className="mt-4 text-xs text-slate-500">
            File path: <code className="rounded bg-slate-100 px-1 py-0.5">{THEME_FILE}</code>
          </div>
        </div>
      </div>
    );
  }

  if (!activePage) {
    return (
      <div className="min-h-screen bg-slate-100 text-slate-900 p-4 md:p-6">
        <div className="max-w-xl mx-auto bg-white border border-slate-300 rounded-xl shadow-sm p-6 text-sm text-slate-700">
          No pages found in <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">src/themes</code>. Add a JSON page file to get started.
        </div>
      </div>
    );
  }

  const themes = activePage.themes ?? [];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 p-4 md:p-6">
      <div className="max-w-[1400px] mx-auto flex gap-4">
        {/* Left sidebar / nav - sticky table of contents */}
        <aside className="w-64 shrink-0 rounded-xl border border-slate-300 bg-white shadow-sm p-4 flex flex-col gap-4 h-screen sticky top-0 overflow-y-auto">
          {/* Equipment selector */}
          <div>
            <label className="text-[11px] text-slate-500 uppercase font-medium mb-1 block">
              Equipment
            </label>
            <select
              className="w-full rounded border border-slate-300 bg-white px-2 py-2 text-sm text-slate-800"
              value={selectedEquipmentId}
              onChange={(event) => setSelectedEquipmentId(event.target.value)}
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

        {/* Main content */}
        <main className="flex-1 flex flex-col gap-6">
          <div className="text-xs text-slate-500">
            Last Updated At: {lastUpdatedLabel}
          </div>
          {/* Header bar */}
          <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-4">
            <div className="flex-1 flex flex-col gap-2">
              <div className="text-xl font-semibold text-slate-900 leading-tight">
                {activePage.pageName} – Site Config
              </div>
              <div className="flex items-center gap-2">
                <div className="relative flex-1 max-w-md">
                  <input
                    className="w-full rounded border border-slate-300 bg-white px-2 py-1 pr-8 text-sm text-slate-800"
                    placeholder="Search…"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                      onClick={() => setSearchQuery("")}
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

          {/* Render each theme with its sections */}
          <div className="flex flex-col gap-16">
            {themes.map((theme: ThemeDef, idx: number) => {
              const themeId = `theme-${idx}`;
              return (
                <ThemeBlock
                  key={`${theme.themeName}-${idx}`}
                  theme={theme}
                  themeId={themeId}
                  searchQuery={searchQuery}
                  pointMatchesSearch={pointMatchesSearch}
                  equipment={activeEquipment}
                />
              );
            })}
            {!themes.length && (
              <div className="text-sm text-slate-600 border border-dashed border-slate-300 rounded-lg p-6 bg-white/60">
                This page does not define any themes yet.
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}


// -----------------------------------------------------------------------------
// Simple runtime sanity checks (dev-only console warnings)
// -----------------------------------------------------------------------------
function assertSchemaExpectations(page: PageDef | null) {
  if (!page) {
    return;
  }

  if (!Array.isArray(page.themes)) {
    console.error("[SchemaTest] page.themes is missing or not an array");
    return;
  }

  page.themes.forEach((theme: any, tIdx: number) => {
    if (!Array.isArray(theme.sections)) {
      console.error(
        `[SchemaTest] theme ${tIdx} (${theme.themeName}) has no sections array`
      );
      return;
    }

    theme.sections.forEach((section: any, sIdx: number) => {
      if (!Array.isArray(section.subsections)) {
        console.error(
          `[SchemaTest] theme ${tIdx} / section ${sIdx} (${section.sectionTitle}) has no subsections array`
        );
      }
    });

    theme.sections.forEach((section: any, sIdx: number) => {
      section.subsections?.forEach((sub: any, subIdx: number) => {
        if (!Array.isArray(sub.points)) {
          console.error(
            `[SchemaTest] theme ${tIdx} / section ${sIdx} / subsection ${subIdx} (${sub.title}) has no points array`
          );
          return;
        }

        sub.points.forEach((point: any, pIdx: number) => {
          if (!Array.isArray(point.entries)) {
            console.error(
              `[SchemaTest] theme ${tIdx} / section ${sIdx} / subsection ${subIdx} / point ${pIdx} (${point.title}) has no entries array`
            );
            return;
          }

          point.entries.forEach((entry: any, eIdx: number) => {
            if (!entry.name) {
              console.error(
                `[SchemaTest] entry ${eIdx} in point ${point.title} is missing a name`
              );
            }

            const allowed = ['enum', 'String', 'Number'];
            if (!allowed.includes(entry.dtype)) {
              console.error(
                `[SchemaTest] entry ${entry.name ?? eIdx} in point ${point.title} has unsupported dtype ${entry.dtype}`
              );
            }
          });
        });
      });
    });
  });

  const firstPoint =
    page.themes?.[0]?.sections?.[0]?.subsections?.[0]?.points?.[0] || null;
  if (firstPoint) {
    if (!firstPoint.uuid) {
      console.error("[SchemaTest] firstPoint.uuid missing");
    }
    if (!firstPoint.protocol) {
      console.error("[SchemaTest] firstPoint.protocol missing");
    }
  }
}
