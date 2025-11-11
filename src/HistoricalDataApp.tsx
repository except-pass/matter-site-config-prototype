import React, { useEffect, useMemo, useState } from "react";
import YAML from "yaml";
import rawYaml from "./definitions/telemetry/ss40k_inverter.yaml?raw";
import rawLabelHelp from "./definitions/telemetry/label_help.yaml?raw";

type Meanings = Record<string | number, string>;

interface Label {
  label_family: string;
  label_text: string;
}

interface ProtocolEntry {
  description?: string;
  longdescription?: string;
  dtype?: string;
  meanings?: Meanings;
  name: string;
  value?: unknown;
  unit?: string | null;
  scalefactor?: number | null;
  category?: string;
  labels?: Label[];
}

interface ProtocolPoint {
  block: string;
  entry: ProtocolEntry;
  model: string;
  point: string;
  labels: Label[];
}

type LabelHierarchy = Map<string, Map<string, ProtocolPoint[]>>;

interface RawProtocolPoint {
  block?: string;
  entry?: ProtocolEntry;
  model?: number | string;
  point?: string;
  labels?: Label[];
}

interface Ss40kFile {
  protocols?: RawProtocolPoint[];
}

function normalizeModel(value: unknown): string {
  if (value === null || value === undefined) return "";
  if (typeof value === "number") return String(Math.trunc(value));
  return String(value).trim();
}

function normalizePoint(value: unknown): string {
  if (value === null || value === undefined) return "";
  return String(value).trim();
}

function loadProtocols(): ProtocolPoint[] {
  try {
    const parsed = YAML.parse(rawYaml) as Ss40kFile;
    const raw = parsed?.protocols ?? [];
    return raw
      .map((item) => {
        if (!item.entry) return null;
        const pointName = normalizePoint(item.point ?? item.entry.name);
        const modelName = normalizeModel(item.model);
        if (!pointName || !modelName) return null;
        // Labels can be at the protocol level or entry level
        const labels = (Array.isArray(item.labels) ? item.labels : Array.isArray(item.entry?.labels) ? item.entry.labels : []) as Label[];
        return {
          block: String(item.block ?? "fixed"),
          entry: item.entry,
          model: modelName,
          point: pointName,
          labels: labels,
        } satisfies ProtocolPoint;
      })
      .filter((item): item is ProtocolPoint => Boolean(item));
  } catch (error) {
    console.error("Failed to parse ss40k_inverter.yaml", error);
    return [];
  }
}

const protocols: ProtocolPoint[] = loadProtocols();

// Load label help data
interface LabelHelpData {
  label_families: {
    [family: string]: {
      help: string;
      labels: {
        [labelText: string]: {
          help: string;
        };
      };
    };
  };
}

let labelHelpData: LabelHelpData | null = null;
try {
  labelHelpData = YAML.parse(rawLabelHelp) as LabelHelpData;
} catch (error) {
  console.error("Failed to parse label_help.yaml", error);
}

function getLabelHelp(family: string, labelText?: string): string | null {
  if (!labelHelpData) return null;
  const familyData = labelHelpData.label_families[family];
  if (!familyData) return null;
  
  if (labelText) {
    const labelData = familyData.labels[labelText];
    return labelData?.help || null;
  }
  
  return familyData.help || null;
}

// Helper to group by label hierarchy (supports multiple levels)
function groupByLabelHierarchy(
  items: ProtocolPoint[],
  hierarchy: string[]
): LabelHierarchy {
  const map: LabelHierarchy = new Map();
  
  items.forEach((it) => {
    const labels = Array.isArray(it.labels) ? it.labels : [];
    // Skip points without labels (should already be filtered, but double-check)
    if (labels.length === 0) {
      return;
    }

    // If no hierarchy configured, use first available label
    if (hierarchy.length === 0) {
      const firstLabel = labels[0];
      if (firstLabel) {
        const key = firstLabel.label_text;
        if (!map.has(key)) {
          map.set(key, new Map());
        }
        const innerMap = map.get(key)!;
        if (!innerMap.has("")) {
          innerMap.set("", []);
        }
        innerMap.get("")!.push(it);
      }
      return;
    }

    // Group by first level of hierarchy
    const firstLevelFamily = hierarchy[0];
    const firstLevelLabel = labels.find((l) => l.label_family === firstLevelFamily);
    // Skip if no matching label for first level
    if (!firstLevelLabel) {
      return;
    }
    const firstLevelKey = firstLevelLabel.label_text;

    if (!map.has(firstLevelKey)) {
      map.set(firstLevelKey, new Map());
    }
    const innerMap = map.get(firstLevelKey)!;

    // Handle remaining hierarchy levels recursively
    if (hierarchy.length > 1) {
      const remainingHierarchy = hierarchy.slice(1);
      const secondLevelFamily = remainingHierarchy[0];
      const secondLevelLabel = labels.find((l) => l.label_family === secondLevelFamily);
      // Use second level label if found, otherwise use empty string (no second level grouping)
      const secondLevelKey = secondLevelLabel?.label_text || "";
      if (!innerMap.has(secondLevelKey)) {
        innerMap.set(secondLevelKey, []);
      }
      innerMap.get(secondLevelKey)!.push(it);
    } else {
      // No second level, put directly under first level
      if (!innerMap.has("")) {
        innerMap.set("", []);
      }
      innerMap.get("")!.push(it);
    }
  });

  return map;
}

// Extract all unique labels from points
function extractAllLabels(items: ProtocolPoint[]): Map<string, Set<string>> {
  const labelMap = new Map<string, Set<string>>();
  items.forEach((it) => {
    const labels = Array.isArray(it.labels) ? it.labels : [];
    labels.forEach((label) => {
      if (!labelMap.has(label.label_family)) {
        labelMap.set(label.label_family, new Set());
      }
      labelMap.get(label.label_family)!.add(label.label_text);
    });
  });
  return labelMap;
}

// Color palette for labels - generates consistent colors based on label family and text
const COLOR_PALETTE = [
  { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-300' },
  { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-300' },
  { bg: 'bg-purple-100', text: 'text-purple-800', border: 'border-purple-300' },
  { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-300' },
  { bg: 'bg-pink-100', text: 'text-pink-800', border: 'border-pink-300' },
  { bg: 'bg-indigo-100', text: 'text-indigo-800', border: 'border-indigo-300' },
  { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-300' },
  { bg: 'bg-teal-100', text: 'text-teal-800', border: 'border-teal-300' },
  { bg: 'bg-orange-100', text: 'text-orange-800', border: 'border-orange-300' },
  { bg: 'bg-cyan-100', text: 'text-cyan-800', border: 'border-cyan-300' },
  { bg: 'bg-violet-100', text: 'text-violet-800', border: 'border-violet-300' },
  { bg: 'bg-amber-100', text: 'text-amber-800', border: 'border-amber-300' },
  { bg: 'bg-lime-100', text: 'text-lime-800', border: 'border-lime-300' },
  { bg: 'bg-emerald-100', text: 'text-emerald-800', border: 'border-emerald-300' },
  { bg: 'bg-sky-100', text: 'text-sky-800', border: 'border-sky-300' },
  { bg: 'bg-rose-100', text: 'text-rose-800', border: 'border-rose-300' },
  { bg: 'bg-fuchsia-100', text: 'text-fuchsia-800', border: 'border-fuchsia-300' },
  { bg: 'bg-slate-100', text: 'text-slate-800', border: 'border-slate-300' },
  { bg: 'bg-stone-100', text: 'text-stone-800', border: 'border-stone-300' },
  { bg: 'bg-zinc-100', text: 'text-zinc-800', border: 'border-zinc-300' },
];

// Pre-assign colors to known label families to avoid collisions
const FAMILY_COLOR_MAP: Map<string, number> = new Map([
  ['component', 0],   // blue
  ['feature', 1],     // green
  ['detail_level', 2], // purple
  ['level of detail', 2], // purple (alternative name)
  ['info', 3],        // yellow
  ['unit', 4],        // pink
]);

function getLabelColor(family: string, _text: string): { bg: string; text: string; border: string } {
  // Use only family name for consistent coloring - all labels of same family get same color
  // Normalize family name to lowercase for lookup
  const normalizedFamily = family.toLowerCase();
  // Check if we have a pre-assigned color for this family
  if (FAMILY_COLOR_MAP.has(normalizedFamily)) {
    const index = FAMILY_COLOR_MAP.get(normalizedFamily)!;
    return COLOR_PALETTE[index];
  }

  // For unknown families, use hash but start from index 4 to avoid collisions
  const hash = normalizedFamily.split('').reduce((acc, char) => {
    return ((acc << 5) - acc) + char.charCodeAt(0);
  }, 0);
  const index = 4 + (Math.abs(hash) % (COLOR_PALETTE.length - 4));
  return COLOR_PALETTE[index];
}

interface SearchBoxProps {
  value: string;
  onChange: (next: string) => void;
}

function SearchBox({ value, onChange }: SearchBoxProps) {
  return (
    <div className="relative">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input
        className="w-full rounded-xl border pl-10 pr-3 py-2 text-sm outline-none focus:ring"
        placeholder="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

interface HelpToggleProps {
  show: boolean;
  onToggle: (next: boolean) => void;
}

function HelpToggle({ show, onToggle }: HelpToggleProps) {
  return (
    <label className="inline-flex cursor-pointer items-center gap-2 text-sm">
      <input
        type="checkbox"
        className="h-4 w-4"
        checked={show}
        onChange={(e) => onToggle(e.target.checked)}
      />
      Show help text
    </label>
  );
}

interface LabelGroupProps {
  firstLevel: string;
  secondLevelMap: Map<string, ProtocolPoint[]>;
  selected: Map<string, Set<string>>;
  toggle: (key: string) => void;
  showHelp: boolean;
  onUpdateInverters: (pointKey: string, inverters: Set<string>) => void;
  groupsExpanded: boolean;
}

function LabelGroup({ firstLevel, secondLevelMap, selected, toggle, showHelp, onUpdateInverters, groupsExpanded }: LabelGroupProps) {
  const firstLevelId = `group-${firstLevel.replace(/\s+/g, '-')}`;
  
  return (
    <details id={firstLevelId} className="group border-b py-2" open={groupsExpanded}>
      <summary className="cursor-pointer list-none font-semibold">
        <span className="mr-1">▾</span>
        {firstLevel}
      </summary>
      <div className="mt-2 ml-1 space-y-2">
        {[...secondLevelMap.entries()].map(([secondLevel, items]) => {
          if (secondLevel === "") {
            // No second level grouping
            return (
              <div key="" className="ml-2 space-y-1">
                {items.map((it) => {
                  const key = `${it.model}:${it.point}`;
                  const desc = it.entry.description || key;
                  const long = it.entry.longdescription || desc;
                  const unit = it.entry.unit && it.entry.unit !== "N/A" ? ` (${it.entry.unit})` : "";
                  const checked = selected.has(key);
                  const selectedInverters = checked ? (selected.get(key) || new Set(['001'])) : new Set<string>();
                  const labels = Array.isArray(it.labels) ? it.labels : [];
                  return (
                    <div key={key} data-point-key={key} className="rounded-md px-2 py-1 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-2 flex-wrap">
                        <label className="flex cursor-pointer items-center gap-2 flex-wrap flex-1 min-w-0">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggle(key)}
                            className="h-4 w-4 flex-shrink-0"
                          />
                          <span className="text-sm">
                            {desc}
                            {unit}
                          </span>
                          {checked && (
                            <div className="ml-auto flex items-center gap-1 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                              <span className="text-xs text-gray-600">Inverter SN:</span>
                              <InverterSelector
                                selectedInverters={selectedInverters}
                                onChange={(newInverters) => onUpdateInverters(key, newInverters)}
                              />
                            </div>
                          )}
                          {showHelp && labels.length > 0 && (
                            <div className="ml-2 flex flex-wrap gap-1 w-full">
                              {labels.map((label, idx) => {
                                const color = getLabelColor(label.label_family, label.label_text);
                                const labelHelp = getLabelHelp(label.label_family, label.label_text);
                                const tooltipText = labelHelp || `${label.label_family}: ${label.label_text}`;
                                return (
                                  <span
                                    key={idx}
                                    className={`rounded border px-1.5 py-0.5 text-xs ${color.bg} ${color.text} ${color.border}`}
                                    title={tooltipText}
                                  >
                                    {label.label_text}
                                  </span>
                                );
                              })}
                            </div>
                          )}
                          {!showHelp && (
                            <span
                              className="ml-1 text-gray-400"
                              title={long}
                              aria-label="Help"
                            >
                              ⓘ
                            </span>
                          )}
                        </label>
                      </div>
                      {showHelp && (
                        <div className="pl-6 text-xs text-gray-500 whitespace-pre-wrap">{long}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          }
          // Has second level grouping
          return (
            <details key={secondLevel} className="ml-2 group border-l pl-2" open>
              <summary className="cursor-pointer list-none font-medium text-gray-700">
                <span className="mr-1">▾</span>
                {secondLevel}
              </summary>
              <div className="mt-1 ml-1 space-y-1">
                {items.map((it) => {
                  const key = `${it.model}:${it.point}`;
                  const desc = it.entry.description || key;
                  const long = it.entry.longdescription || desc;
                  const unit = it.entry.unit && it.entry.unit !== "N/A" ? ` (${it.entry.unit})` : "";
                  const checked = selected.has(key);
                  const selectedInverters = checked ? (selected.get(key) || new Set(['001'])) : new Set<string>();
                  const labels = Array.isArray(it.labels) ? it.labels : [];
                  return (
                    <div key={key} data-point-key={key} className="rounded-md px-2 py-1 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-2 flex-wrap">
                        <label className="flex cursor-pointer items-center gap-2 flex-wrap flex-1 min-w-0">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggle(key)}
                            className="h-4 w-4 flex-shrink-0"
                          />
                          <span className="text-sm">
                            {desc}
                            {unit}
                          </span>
                          {checked && (
                            <div className="ml-auto flex items-center gap-1 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                              <span className="text-xs text-gray-600">Inverter SN:</span>
                              <InverterSelector
                                selectedInverters={selectedInverters}
                                onChange={(newInverters) => onUpdateInverters(key, newInverters)}
                              />
                            </div>
                          )}
                          {showHelp && labels.length > 0 && (
                            <div className="ml-2 flex flex-wrap gap-1 w-full">
                              {labels.map((label, idx) => {
                                const color = getLabelColor(label.label_family, label.label_text);
                                const labelHelp = getLabelHelp(label.label_family, label.label_text);
                                const tooltipText = labelHelp || `${label.label_family}: ${label.label_text}`;
                                return (
                                  <span
                                    key={idx}
                                    className={`rounded border px-1.5 py-0.5 text-xs ${color.bg} ${color.text} ${color.border}`}
                                    title={tooltipText}
                                  >
                                    {label.label_text}
                                  </span>
                                );
                              })}
                            </div>
                          )}
                          {!showHelp && (
                            <span
                              className="ml-1 text-gray-400"
                              title={long}
                              aria-label="Help"
                            >
                              ⓘ
                            </span>
                          )}
                        </label>
                      </div>
                      {showHelp && (
                        <div className="pl-6 text-xs text-gray-500 whitespace-pre-wrap">{long}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </details>
          );
        })}
      </div>
    </details>
  );
}

interface LabelHelpModalProps {
  family: string;
  labels: Set<string>;
  onClose: () => void;
}

function LabelHelpModal({ family, labels, onClose }: LabelHelpModalProps) {
  const familyHelp = getLabelHelp(family);
  const sortedLabels = [...labels].sort();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
      <div className="relative max-h-[80vh] w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">{family} Labels</h2>
          <button
            onClick={onClose}
            className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            aria-label="Close"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {familyHelp && (
          <div className="mb-4 rounded-lg bg-blue-50 p-3 text-sm text-gray-700">
            <strong className="font-semibold">About {family}:</strong> {familyHelp}
          </div>
        )}
        
        <div className="max-h-[60vh] overflow-y-auto">
          <div className="space-y-4">
            {sortedLabels.map((labelText) => {
              const labelHelp = getLabelHelp(family, labelText);
              return (
                <div key={labelText} className="border-b border-gray-200 pb-3 last:border-b-0">
                  <div className="mb-1 font-medium text-gray-800">{labelText}</div>
                  {labelHelp ? (
                    <div className="text-sm text-gray-600">{labelHelp}</div>
                  ) : (
                    <div className="text-sm italic text-gray-400">No help text available</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

interface LabelFilterProps {
  allLabels: Map<string, Set<string>>;
  selectedLabels: Set<string>;
  onToggleLabel: (family: string, text: string) => void;
  onClearFilters: () => void;
}

function LabelFilter({ allLabels, selectedLabels, onToggleLabel, onClearFilters }: LabelFilterProps) {
  const [height, setHeight] = React.useState(200);
  const [isResizing, setIsResizing] = React.useState(false);
  const [helpModalFamily, setHelpModalFamily] = React.useState<string | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  };

  React.useEffect(() => {
    if (!isResizing) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const newHeight = e.clientY - rect.top;
        if (newHeight >= 100 && newHeight <= 600) {
          setHeight(newHeight);
        }
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  // Get active filter badges
  const activeFilters = Array.from(selectedLabels).map((labelKey) => {
    const [family, text] = labelKey.split(':', 2);
    return { family, text };
  });

  return (
    <div ref={containerRef} className="mb-3 rounded-lg border bg-gray-50 p-2">
      <details className="group">
        <summary className="cursor-pointer list-none">
          <div className="mb-1 flex items-start justify-between gap-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 flex-1 min-w-0">
              <svg className="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span className="flex-shrink-0">Filters</span>
              <span className="mr-1 group-open:rotate-90 transition-transform flex-shrink-0">▸</span>
              {activeFilters.length > 0 && (
                <>
                  <div className="flex flex-wrap items-center gap-1 ml-2 min-w-0">
                    {activeFilters.map(({ family, text }) => {
                      const color = getLabelColor(family, text);
                      return (
                        <span
                          key={`${family}:${text}`}
                          className={`rounded border px-1.5 py-0.5 text-xs ${color.bg} ${color.text} ${color.border} border-2 font-semibold flex-shrink-0`}
                        >
                          {text}
                        </span>
                      );
                    })}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onClearFilters();
                    }}
                    className="ml-2 flex-shrink-0 rounded p-1 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition-colors"
                    title="Clear all filters"
                    aria-label="Clear all filters"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </>
              )}
            </div>
          </div>
        </summary>
        <div 
          className="space-y-0.5 overflow-auto mt-2"
          style={{ height: `${height}px` }}
        >
        {[...allLabels.entries()].map(([family, texts]) => {
          const familyHelp = getLabelHelp(family);
          const familyColor = getLabelColor(family, '');
          // Check if any label in this family is selected
          const hasSelectedLabel = Array.from(texts).some(text => selectedLabels.has(`${family}:${text}`));
          return (
            <div key={family} className="flex items-center gap-1.5 text-xs py-0.5">
              <button
                onClick={() => setHelpModalFamily(family)}
                className={`flex items-center gap-1 rounded-md border px-2 py-0.5 font-semibold transition-colors flex-shrink-0 w-28 justify-between ${
                  hasSelectedLabel
                    ? `${familyColor.bg} ${familyColor.text} ${familyColor.border} border-2`
                    : `${familyColor.bg} ${familyColor.text} ${familyColor.border} border`
                }`}
                title={familyHelp || `View help for ${family} labels`}
                aria-label={`Help for ${family}`}
              >
                <span className="truncate">{family}</span>
                <svg className={`h-3 w-3 flex-shrink-0 ${familyColor.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              <div className="flex flex-wrap items-center gap-1 flex-1">
                {[...texts].sort().map((text) => {
                  const labelKey = `${family}:${text}`;
                  const isSelected = selectedLabels.has(labelKey);
                  const color = getLabelColor(family, text);
                  const labelHelp = getLabelHelp(family, text);
                  return (
                    <button
                      key={labelKey}
                      onClick={() => onToggleLabel(family, text)}
                      className={`rounded border px-1.5 py-0.5 text-xs transition-all ${
                        isSelected
                          ? `${color.bg} ${color.text} ${color.border} border-2 font-semibold`
                          : `bg-white ${color.text} ${color.border} hover:opacity-80`
                      }`}
                      style={!isSelected ? { borderColor: 'currentColor' } : undefined}
                      title={labelHelp || `${family}: ${text}`}
                    >
                      {text}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
        </div>
        {helpModalFamily && (
          <LabelHelpModal
            family={helpModalFamily}
            labels={allLabels.get(helpModalFamily) || new Set()}
            onClose={() => setHelpModalFamily(null)}
          />
        )}
        <div
          onMouseDown={handleMouseDown}
          className="mt-1 h-1 cursor-ns-resize rounded bg-gray-300 hover:bg-gray-400 transition-colors"
          title="Drag to resize"
        />
      </details>
    </div>
  );
}

interface FakeChartProps {
  selectedPoints: Map<string, Set<string>>;
  protocols: ProtocolPoint[];
  onUpdateInverters: (pointKey: string, inverters: Set<string>) => void;
  onScrollToPoint?: (pointKey: string) => void;
  onRemoveInverter?: (pointKey: string, inverterSN: string) => void;
}

// Available inverters (hardcoded for now, could come from props or API)
const AVAILABLE_INVERTERS = ['001', '002', '003'];

// Color palette for legend entries
const LEGEND_COLORS = [
  { bg: 'bg-purple-500', border: 'border-purple-600' },
  { bg: 'bg-green-500', border: 'border-green-600' },
  { bg: 'bg-teal-500', border: 'border-teal-600' },
  { bg: 'bg-blue-500', border: 'border-blue-600' },
  { bg: 'bg-pink-500', border: 'border-pink-600' },
  { bg: 'bg-orange-500', border: 'border-orange-600' },
  { bg: 'bg-indigo-500', border: 'border-indigo-600' },
  { bg: 'bg-red-500', border: 'border-red-600' },
];

interface InverterSelectorProps {
  selectedInverters: Set<string>;
  onChange: (inverters: Set<string>) => void;
}

function InverterSelector({ selectedInverters, onChange }: InverterSelectorProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const isAllSelected = selectedInverters.size === AVAILABLE_INVERTERS.length;
  const displayText = isAllSelected 
    ? 'All Inverters' 
    : Array.from(selectedInverters).sort().join(', ');

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleToggleAll = () => {
    if (isAllSelected) {
      onChange(new Set(['001'])); // Default to 001 if deselecting all
    } else {
      onChange(new Set(AVAILABLE_INVERTERS));
    }
  };

  const handleToggleInverter = (inverter: string) => {
    const next = new Set(selectedInverters);
    if (next.has(inverter)) {
      next.delete(inverter);
      // If no inverters selected, default to 001
      if (next.size === 0) {
        next.add('001');
      }
    } else {
      next.add(inverter);
    }
    onChange(next);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="text-xs border border-blue-300 rounded px-2 py-1 bg-white text-blue-800 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-1"
      >
        <span>{displayText}</span>
        <svg 
          className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded shadow-lg z-50 min-w-[120px]">
          <div className="py-1">
            <label className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 cursor-pointer">
              <input
                type="checkbox"
                checked={isAllSelected}
                onChange={handleToggleAll}
                className="h-3 w-3"
              />
              <span className="text-xs text-gray-700">All Inverters</span>
            </label>
            {AVAILABLE_INVERTERS.map((inv) => (
              <label
                key={inv}
                className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedInverters.has(inv)}
                  onChange={() => handleToggleInverter(inv)}
                  className="h-3 w-3"
                />
                <span className="text-xs text-gray-700">{inv}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function FakeChart({ selectedPoints, protocols, onUpdateInverters: _onUpdateInverters, onScrollToPoint: _onScrollToPoint, onRemoveInverter }: FakeChartProps) {
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
  const legendEntries = selectedPointInfo.flatMap(({ key, name, inverters }) => {
    const [model, point] = key.split(':');
    const protocol = protocols.find((p) => p.model === model && p.point === point);
    const unit = protocol?.entry?.unit && protocol.entry.unit !== "N/A" ? protocol.entry.unit : "N/A";
    
    return Array.from(inverters).sort().map((sn, index) => ({
      key,
      pointKey: `${key}:${sn}`, // Unique key for this SN+point combo
      name,
      sn,
      unit,
      colorIndex: (selectedPointInfo.findIndex(p => p.key === key) * AVAILABLE_INVERTERS.length + index) % LEGEND_COLORS.length,
    }));
  });

  // Group entries by unit
  const entriesByUnit = legendEntries.reduce((acc, entry) => {
    if (!acc.has(entry.unit)) {
      acc.set(entry.unit, []);
    }
    acc.get(entry.unit)!.push(entry);
    return acc;
  }, new Map<string, typeof legendEntries>());

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
    const visibleCount = legendEntries.filter(e => !hiddenEntries.has(e.pointKey)).length;
    const isOnlyVisible = visibleCount === 1 && !hiddenEntries.has(pointKey);
    
    if (isOnlyVisible) {
      // Show all entries
      setHiddenEntries(new Set());
    } else {
      // Hide all entries except the one clicked
      setHiddenEntries(new Set(legendEntries.filter(e => e.pointKey !== pointKey).map(e => e.pointKey)));
    }
  };

  const handleRemove = (pointKey: string, sn: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onRemoveInverter?.(pointKey, sn);
  };

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="mb-2 text-sm font-semibold text-gray-700">Chart</div>
      <div className="relative flex-1 border border-gray-400 bg-gray-50 min-h-0">
        {/* Y-axis */}
        <div className="absolute left-0 top-0 bottom-0 w-8 border-r border-gray-600 flex flex-col items-center justify-between py-2">
          <span className="text-xs text-gray-600 transform -rotate-90 whitespace-nowrap">Value</span>
          <div className="flex flex-col items-center gap-1">
            <div className="w-2 h-px bg-gray-600"></div>
            <div className="w-2 h-px bg-gray-600"></div>
            <div className="w-2 h-px bg-gray-600"></div>
            <div className="w-2 h-px bg-gray-600"></div>
            <div className="w-2 h-px bg-gray-600"></div>
          </div>
          <span className="text-xs text-gray-600">0</span>
        </div>
        
        {/* X-axis */}
        <div className="absolute bottom-0 left-8 right-0 h-8 border-t border-gray-600 flex items-center justify-between px-2">
          <span className="text-xs text-gray-600">0</span>
          <div className="flex gap-1">
            <div className="h-2 w-px bg-gray-600"></div>
            <div className="h-2 w-px bg-gray-600"></div>
            <div className="h-2 w-px bg-gray-600"></div>
            <div className="h-2 w-px bg-gray-600"></div>
            <div className="h-2 w-px bg-gray-600"></div>
          </div>
          <span className="text-xs text-gray-600">Time</span>
        </div>

        {/* Chart area */}
        <div className="absolute inset-0 left-8 bottom-8 p-4">
          {legendEntries.length === 0 ? (
            <div className="flex items-center justify-center h-full text-sm text-gray-400">
              Select points to display charts
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-sm text-gray-400">
              Chart visualization would appear here
            </div>
          )}
        </div>
      </div>
      
      {/* Legend/Point List */}
      {legendEntries.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {Array.from(entriesByUnit.entries()).map(([unit, entries]) => (
            <div key={unit} className="bg-white border border-gray-300 rounded p-3 flex-shrink-0">
              <div className="flex justify-end mb-2">
                <span className="text-xs text-gray-600 font-medium">{unit}</span>
              </div>
              <div className="space-y-1">
                {entries.map(({ pointKey, name, sn, colorIndex, key }) => {
                  const displayName = name.length > 50 ? `${name.substring(0, 47)}...` : name;
                  const color = LEGEND_COLORS[colorIndex];
                  const isHidden = hiddenEntries.has(pointKey);
                  return (
                    <div 
                      key={pointKey} 
                      className="flex items-center gap-2 text-sm group hover:bg-gray-50 rounded px-1 py-0.5 -mx-1 transition-colors cursor-pointer"
                      onClick={() => toggleVisibility(pointKey)}
                      onDoubleClick={(e) => {
                        e.stopPropagation();
                        showOnlyEntry(pointKey);
                      }}
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleVisibility(pointKey);
                        }}
                        onDoubleClick={(e) => {
                          e.stopPropagation();
                          showOnlyEntry(pointKey);
                        }}
                        className={`w-3 h-3 rounded border-2 ${color.border} flex-shrink-0 flex items-center justify-center transition-colors ${
                          isHidden ? 'bg-white' : color.bg
                        } hover:opacity-80`}
                        title={isHidden ? "Show in chart (double-click to show only this)" : "Hide in chart (double-click to show only this)"}
                      >
                        {isHidden && (
                          <svg className="w-2 h-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                          </svg>
                        )}
                      </button>
                      <span 
                        className={`text-gray-700 flex-1 ${isHidden ? 'opacity-50 line-through' : ''}`}
                        title="Click to toggle visibility (double-click to show only this)"
                      >
                        SN {sn} {displayName}
                      </span>
                      <span className="text-gray-400 text-xs font-mono min-w-[60px] text-right">
                        --
                      </span>
                      <button
                        onClick={(e) => handleRemove(key, sn, e)}
                        className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-600 transition-opacity flex-shrink-0 ml-1"
                        title="Remove this inverter SN"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

interface HierarchyConfigProps {
  availableFamilies: string[];
  hierarchy: string[];
  onChange: (hierarchy: string[]) => void;
}

function GroupByHelpModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
      <div className="relative max-w-lg rounded-lg bg-white p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">Group By</h2>
          <button
            onClick={onClose}
            className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            aria-label="Close"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="text-sm text-gray-700 space-y-3">
          <p>
            Reorder or add levels to control how points are grouped in the list.
          </p>
          <p>
            For example, grouping by Component → Feature will show each component first, with its features listed underneath.
          </p>
          <p className="text-gray-600">
            You can add or remove levels using the + button and × button next to each level.
          </p>
        </div>
      </div>
    </div>
  );
}

function HierarchyConfig({ availableFamilies, hierarchy, onChange }: HierarchyConfigProps) {
  const [showHelpModal, setShowHelpModal] = React.useState(false);

  const handleChange = (index: number, value: string) => {
    const newHierarchy = [...hierarchy];
    if (value === "") {
      newHierarchy.splice(index, 1);
    } else {
      newHierarchy[index] = value;
    }
    onChange(newHierarchy);
  };

  const handleAddLevel = () => {
    onChange([...hierarchy, ""]);
  };

  const handleRemoveLevel = (index: number) => {
    const newHierarchy = [...hierarchy];
    newHierarchy.splice(index, 1);
    onChange(newHierarchy);
  };

  const getAvailableFamiliesForLevel = (index: number): string[] => {
    // Get families that aren't already used in other levels
    const usedFamilies = hierarchy.filter((_, i) => i !== index && hierarchy[i]);
    return availableFamilies.filter((f) => !usedFamilies.includes(f));
  };

  return (
    <>
      <div className="mb-3 rounded-lg border bg-gray-50 p-2">
        <details className="group">
          <summary className="cursor-pointer list-none">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 flex-1 min-w-0">
                <span className="mr-1 group-open:rotate-90 transition-transform flex-shrink-0">▸</span>
                <span className="flex-shrink-0">Group by</span>
                {hierarchy.filter(level => level).length > 0 && (
                  <div className="flex flex-wrap items-center gap-1 ml-2 min-w-0">
                    {hierarchy.map((level, index) => {
                      if (!level) return null;
                      const color = getLabelColor(level, '');
                      return (
                        <span
                          key={index}
                          className={`rounded border px-1.5 py-0.5 text-xs ${color.bg} ${color.text} ${color.border} border font-semibold flex-shrink-0`}
                        >
                          {level}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </summary>
          <div className="mt-2">
            <button
              onClick={() => setShowHelpModal(true)}
              className="mb-2 text-xs text-blue-600 hover:text-blue-800 hover:underline"
            >
              What does this do?
            </button>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              {hierarchy.map((level, index) => (
                <div key={index} className="flex items-center gap-1">
                  <label className="text-gray-600">Level {index + 1}:</label>
                  <select
                    value={level || ""}
                    onChange={(e) => handleChange(index, e.target.value)}
                    className="rounded border px-2 py-1 text-xs"
                  >
                    <option value="">(None)</option>
                    {getAvailableFamiliesForLevel(index).map((f) => (
                      <option key={f} value={f}>
                        {f}
                      </option>
                    ))}
                  </select>
                  {hierarchy.length > 1 && (
                    <button
                      onClick={() => handleRemoveLevel(index)}
                      className="rounded border bg-white px-1.5 py-0.5 text-xs text-red-600 hover:bg-red-50"
                      title="Remove level"
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={handleAddLevel}
                className="rounded border bg-white px-2 py-1 text-xs text-gray-700 hover:bg-gray-100"
                title="Add hierarchy level"
              >
                +
              </button>
              {hierarchy.length === 0 && (
                <div className="text-gray-500 italic">No hierarchy levels configured</div>
              )}
            </div>
          </div>
        </details>
      </div>
      {showHelpModal && <GroupByHelpModal onClose={() => setShowHelpModal(false)} />}
    </>
  );
}

export default function App() {
  const [query, setQuery] = useState<string>("");
  // Map from point key (model:point) to Set of inverter serial numbers
  const [selected, setSelected] = useState<Map<string, Set<string>>>(() => new Map());
  const [showHelp, setShowHelp] = useState<boolean>(true);
  const [selectedLabels, setSelectedLabels] = useState<Set<string>>(() => new Set(["Level of Detail:Standard"]));
  const [hierarchy, setHierarchy] = useState<string[]>(["Component", "Feature"]);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [sidebarWidth, setSidebarWidth] = useState<number>(650);
  const [isResizing, setIsResizing] = React.useState(false);
  const sidebarRef = React.useRef<HTMLDivElement>(null);
  const sidebarContentRef = React.useRef<HTMLDivElement>(null);
  const [activeGroup, setActiveGroup] = React.useState<string>("");
  const [groupsExpanded, setGroupsExpanded] = React.useState<boolean>(true);

  // Track scroll position to highlight active group
  // Note: This effect queries the DOM directly, so it doesn't need grouped in dependencies
  React.useEffect(() => {
    if (!sidebarContentRef.current) return;

    const handleScroll = () => {
      if (!sidebarContentRef.current) return;
      
      const container = sidebarContentRef.current;
      const groups = container.querySelectorAll('[id^="group-"]');
      let currentGroup = "";

      // Find which group is currently in view
      groups.forEach((group) => {
        const rect = group.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        // Group is considered active if its top is within the top 30% of container
        const relativeTop = rect.top - containerRect.top;
        if (relativeTop <= containerRect.height * 0.3 && rect.bottom > containerRect.top) {
          currentGroup = group.id;
        }
      });

      if (currentGroup && currentGroup !== activeGroup) {
        setActiveGroup(currentGroup);
      }
    };

    // Set initial active group with a small delay to ensure DOM is ready
    const timeoutId = setTimeout(handleScroll, 100);

    // Listen to scroll events on the sidebar content
    const container = sidebarContentRef.current;
    container.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timeoutId);
      container.removeEventListener('scroll', handleScroll);
    };
  }, [activeGroup]);

  // Handle Escape key to close sidebar
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [sidebarOpen]);

  // Scroll to a point in the sidebar
  const scrollToPoint = (pointKey: string) => {
    if (!sidebarOpen) {
      // If sidebar is closed, open it first
      setSidebarOpen(true);
      // Wait for sidebar to open, then scroll
      setTimeout(() => {
        scrollToPointElement(pointKey);
      }, 300);
    } else {
      scrollToPointElement(pointKey);
    }
  };

  const scrollToPointElement = (pointKey: string) => {
    if (!sidebarContentRef.current) return;
    
    // Find the element with data-point-key attribute matching the pointKey
    const pointElement = sidebarContentRef.current.querySelector(`[data-point-key="${pointKey}"]`) as HTMLElement;
    if (pointElement) {
      pointElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Highlight briefly
      pointElement.classList.add('bg-blue-100');
      setTimeout(() => {
        pointElement.classList.remove('bg-blue-100');
      }, 1000);
    }
  };

  // Load last inverter selection from localStorage
  const getLastInverterSelection = (): Set<string> => {
    try {
      const stored = localStorage.getItem('matter-app-last-inverter-selection');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return new Set(parsed);
        }
      }
    } catch (e) {
      // Ignore errors, use default
    }
    return new Set(['001']); // Default to 001
  };

  // Store last inverter selection to localStorage
  const saveLastInverterSelection = (inverters: Set<string>) => {
    try {
      localStorage.setItem('matter-app-last-inverter-selection', JSON.stringify(Array.from(inverters)));
    } catch (e) {
      // Ignore errors
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  };

  React.useEffect(() => {
    if (!isResizing) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (sidebarRef.current) {
        const rect = sidebarRef.current.getBoundingClientRect();
        const newWidth = rect.right - e.clientX;
        if (newWidth >= 300 && newWidth <= 800) {
          setSidebarWidth(newWidth);
        }
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  // Extract all labels from protocols
  const allLabels = useMemo(() => extractAllLabels(protocols), []);
  const availableFamilies = useMemo(() => [...allLabels.keys()].sort(), [allLabels]);

  const filtered = useMemo<ProtocolPoint[]>(() => {
    let result = protocols;

    // Filter out points without labels
    result = result.filter((p) => {
      const labels = Array.isArray(p.labels) ? p.labels : [];
      return labels.length > 0;
    });

    // Filter by search query
    if (query) {
      const q = query.toLowerCase();
      result = result.filter(
        (p) =>
          (p.entry.description || "").toLowerCase().includes(q) ||
          (p.entry.longdescription || "").toLowerCase().includes(q) ||
          (p.entry.name || "").toLowerCase().includes(q)
      );
    }

    // Filter by selected labels
    // Logic: AND for different families, OR for same family
    if (selectedLabels.size > 0) {
      // Group selected labels by family
      const selectedByFamily = new Map<string, Set<string>>();
      selectedLabels.forEach((labelKey) => {
        const [family, text] = labelKey.split(':', 2);
        if (!selectedByFamily.has(family)) {
          selectedByFamily.set(family, new Set());
        }
        selectedByFamily.get(family)!.add(text);
      });

      result = result.filter((p) => {
        const labels = Array.isArray(p.labels) ? p.labels : [];
        if (labels.length === 0) return false;

        // Group point's labels by family
        const pointLabelsByFamily = new Map<string, Set<string>>();
        labels.forEach((label) => {
          if (!pointLabelsByFamily.has(label.label_family)) {
            pointLabelsByFamily.set(label.label_family, new Set());
          }
          pointLabelsByFamily.get(label.label_family)!.add(label.label_text);
        });

        // For each selected family, check if point has at least one matching value (OR)
        // All selected families must match (AND)
        for (const [selectedFamily, selectedTexts] of selectedByFamily.entries()) {
          const pointTexts = pointLabelsByFamily.get(selectedFamily);
          if (!pointTexts) {
            // Point doesn't have this family at all
            return false;
          }
          // Check if any selected text matches any point text (OR within family)
          const hasMatch = [...selectedTexts].some((selectedText) =>
            pointTexts.has(selectedText)
          );
          if (!hasMatch) {
            return false;
          }
        }

        return true;
      });
    }

    return result;
  }, [query, selectedLabels]);

  const grouped = useMemo<LabelHierarchy>(
    () => groupByLabelHierarchy(filtered, hierarchy),
    [filtered, hierarchy]
  );

  // Reset active group when grouped data changes
  React.useEffect(() => {
    setActiveGroup("");
    // Re-trigger scroll handler after a short delay to set new active group
    if (sidebarContentRef.current) {
      setTimeout(() => {
        const container = sidebarContentRef.current;
        if (container) {
          container.dispatchEvent(new Event('scroll'));
        }
      }, 150);
    }
  }, [grouped]);

  const toggle = (key: string) => {
    setSelected((prev) => {
      const next = new Map(prev);
      if (next.has(key)) {
        // Remove point
        next.delete(key);
      } else {
        // Add point with last used inverter selection (or default to 001)
        const lastSelection = getLastInverterSelection();
        next.set(key, new Set(lastSelection));
      }
      return next;
    });
  };

  const updateInverters = (pointKey: string, inverters: Set<string>) => {
    // Save this selection as the last used
    saveLastInverterSelection(inverters);
    
    setSelected((prev) => {
      const next = new Map(prev);
      if (inverters.size === 0) {
        // If no inverters selected, remove the point
        next.delete(pointKey);
      } else {
        next.set(pointKey, inverters);
      }
      return next;
    });
  };

  const removeInverter = (pointKey: string, inverterSN: string) => {
    setSelected((prev) => {
      const next = new Map(prev);
      const currentInverters = next.get(pointKey);
      if (!currentInverters) return next;
      
      const newInverters = new Set(currentInverters);
      newInverters.delete(inverterSN);
      
      if (newInverters.size === 0) {
        // If no inverters left, remove the entire point
        next.delete(pointKey);
      } else {
        // Otherwise, just update the inverters
        next.set(pointKey, newInverters);
      }
      
      return next;
    });
  };

  const toggleLabel = (family: string, text: string) => {
    setSelectedLabels((prev) => {
      const next = new Set(prev);
      const labelKey = `${family}:${text}`;
      if (next.has(labelKey)) next.delete(labelKey);
      else next.add(labelKey);
      return next;
    });
  };

  const clearLabelFilters = () => setSelectedLabels(new Set<string>());
  const visibleCount = filtered.length;
  // Total count should only include points with labels (points that can be shown in UI)
  const totalCount = useMemo(() => {
    return protocols.filter((p) => {
      const labels = Array.isArray(p.labels) ? p.labels : [];
      return labels.length > 0;
    }).length;
  }, []);

  // --- Lightweight runtime "tests" to sanity check data transforms ---
  useEffect(() => {
    try {
      console.assert(protocols.length > 0, "Expected sample data");
      const pnom = protocols.find((p) => p.entry.name === "pNom");
      if (pnom) {
        console.assert(pnom.entry.unit === "W", "pNom should have unit W");
      }
    } catch (e) {
      console.warn("Self-test failed:", e);
    }
  }, []);

  return (
    <div className="h-full bg-slate-100 p-4 md:p-6">
      <div className="mx-auto w-full max-w-[95vw] h-[calc(100vh-2rem)] rounded-2xl border bg-white shadow-sm relative">
        {/* Chart area - full width */}
        <FakeChart selectedPoints={selected} protocols={protocols} onUpdateInverters={updateInverters} onScrollToPoint={scrollToPoint} onRemoveInverter={removeInverter} />
        
        {/* Toggle button - always visible, positioned outside sidebar */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute top-4 z-30 rounded-md border border-gray-300 bg-white p-2 shadow-sm hover:bg-gray-50 transition-all duration-300"
          style={{ right: sidebarOpen ? `${sidebarWidth + 16}px` : '1rem' }}
          title={sidebarOpen ? "Hide sidebar" : "Show sidebar"}
        >
          <svg
            className={`h-5 w-5 text-gray-600 transition-transform ${sidebarOpen ? '' : 'rotate-180'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Point selector sidebar - overlays on top */}
        <div
          ref={sidebarRef}
          className={`absolute top-0 right-0 bottom-0 bg-white border-l border-gray-300 shadow-lg transition-transform duration-300 overflow-hidden ${
            sidebarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ 
            width: `${sidebarWidth}px`,
            maxHeight: '100%'
          }}
        >
          {/* Resize handle */}
          {sidebarOpen && (
            <div
              onMouseDown={handleMouseDown}
              className="absolute left-0 top-0 bottom-0 w-1 cursor-ew-resize bg-gray-300 hover:bg-gray-400 transition-colors z-10"
              title="Drag to resize"
            />
          )}
          
          {/* Sidebar content */}
          <div className="h-full overflow-hidden flex flex-row" style={{ paddingLeft: '0.25rem' }}>
            {/* Navigation bar - left side */}
            {grouped.size > 0 && (
              <div className="w-32 border-r border-gray-200 flex-shrink-0 overflow-y-auto">
                <nav className="p-3 text-sm text-gray-800">
                  <div className="text-emerald-600 font-semibold mb-2 text-xs">Navigation</div>
                  <div className="flex flex-col gap-1">
                    {[...grouped.entries()]
                      .filter(([firstLevel]) => firstLevel !== "(Unlabeled)")
                      .map(([firstLevel]) => {
                        const firstLevelId = `group-${firstLevel.replace(/\s+/g, '-')}`;
                        const isActive = activeGroup === firstLevelId;
                        return (
                          <div key={firstLevel} className="relative">
                            {/* Active indicator bar */}
                            {isActive && (
                              <div className="absolute left-0 top-1 bottom-1 w-1 bg-blue-500 rounded-r" />
                            )}
                            <button
                              className={`px-2 py-1 hover:bg-gray-50 rounded text-xs w-full text-left transition-colors ${
                                isActive ? 'text-blue-600 font-medium bg-blue-50' : 'text-gray-700'
                              }`}
                              onClick={() => {
                                const element = document.getElementById(firstLevelId);
                                if (element && sidebarContentRef.current) {
                                  // Scroll within the sidebar content area
                                  const containerRect = sidebarContentRef.current.getBoundingClientRect();
                                  const elementRect = element.getBoundingClientRect();
                                  const scrollTop = sidebarContentRef.current.scrollTop;
                                  const relativeTop = elementRect.top - containerRect.top + scrollTop;
                                  sidebarContentRef.current.scrollTo({
                                    top: relativeTop - 10, // 10px offset from top
                                    behavior: 'smooth'
                                  });
                                }
                              }}
                            >
                              {firstLevel}
                            </button>
                          </div>
                        );
                      })}
                  </div>
                </nav>
              </div>
            )}
            
            {/* Main content area */}
            <div className="flex-1 flex flex-col overflow-hidden">
              <div className="p-4 flex-shrink-0">
                <div className="mb-3 flex items-center justify-between">
                  <div className="text-lg font-semibold">Select Points</div>
                  <div className="text-sm">
                    <span>Available: {visibleCount.toLocaleString()} of {totalCount.toLocaleString()}</span>
                  </div>
                </div>
                
                <HierarchyConfig
                  availableFamilies={availableFamilies}
                  hierarchy={hierarchy}
                  onChange={setHierarchy}
                />
                
                <LabelFilter
                  allLabels={allLabels}
                  selectedLabels={selectedLabels}
                  onToggleLabel={toggleLabel}
                  onClearFilters={clearLabelFilters}
                />
                
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex-1">
                    <SearchBox value={query} onChange={setQuery} />
                  </div>
                  <HelpToggle show={showHelp} onToggle={setShowHelp} />
                </div>
                
                <div className="mt-2 flex items-center gap-2">
                  <button
                    onClick={() => {
                      setGroupsExpanded(true);
                      // Expand all details elements
                      if (sidebarContentRef.current) {
                        const detailsElements = sidebarContentRef.current.querySelectorAll('details');
                        detailsElements.forEach((details) => {
                          (details as HTMLDetailsElement).open = true;
                        });
                      }
                    }}
                    className="text-xs px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center gap-1"
                  >
                    <span>⤵</span>
                    <span>Expand all</span>
                  </button>
                  <button
                    onClick={() => {
                      setGroupsExpanded(false);
                      // Collapse all details elements
                      if (sidebarContentRef.current) {
                        const detailsElements = sidebarContentRef.current.querySelectorAll('details');
                        detailsElements.forEach((details) => {
                          (details as HTMLDetailsElement).open = false;
                        });
                      }
                    }}
                    className="text-xs px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center gap-1"
                  >
                    <span>⤴</span>
                    <span>Collapse all</span>
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-4 pb-4 pr-1" ref={sidebarContentRef}>
                {grouped.size === 0 ? (
                  <div className="py-4 text-center text-sm text-gray-500">
                    No points match the current filters
                  </div>
                ) : (
                  [...grouped.entries()]
                    .filter(([firstLevel]) => firstLevel !== "(Unlabeled)")
                    .map(([firstLevel, secondLevelMap]) => (
                      <LabelGroup
                        key={firstLevel}
                        firstLevel={firstLevel}
                        secondLevelMap={secondLevelMap}
                        selected={selected}
                        toggle={toggle}
                        showHelp={showHelp}
                        onUpdateInverters={updateInverters}
                        groupsExpanded={groupsExpanded}
                      />
                    ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
