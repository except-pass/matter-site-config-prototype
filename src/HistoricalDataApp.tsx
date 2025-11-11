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
        const labels = (item.labels || item.entry?.labels || []) as Label[];
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
    const labels = it.labels || [];
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
    const labels = it.labels || [];
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
  ['info', 3],        // yellow
]);

function getLabelColor(family: string, _text: string): { bg: string; text: string; border: string } {
  // Use only family name for consistent coloring - all labels of same family get same color
  // Check if we have a pre-assigned color for this family
  if (FAMILY_COLOR_MAP.has(family)) {
    const index = FAMILY_COLOR_MAP.get(family)!;
    return COLOR_PALETTE[index];
  }

  // For unknown families, use hash but start from index 4 to avoid collisions
  const hash = family.split('').reduce((acc, char) => {
    return ((acc << 5) - acc) + char.charCodeAt(0);
  }, 0);
  const index = 4 + (Math.abs(hash) % (COLOR_PALETTE.length - 4));
  return COLOR_PALETTE[index];
}

interface ToolbarProps {
  selectedCount: number;
  onClear: () => void;
  total: number;
}

function Toolbar({ selectedCount, onClear, total }: ToolbarProps) {
  return (
    <div className="flex items-center justify-between gap-2 border-b pb-2">
      <div className="flex items-center gap-2 text-sm">
        <strong className="mr-1">Selected:</strong> {selectedCount}
        <span className="mx-2">•</span>
        <span>Available: {total.toLocaleString()}</span>
      </div>
      <button
        className="rounded-xl border px-3 py-1 text-sm hover:bg-gray-50"
        onClick={onClear}
      >
        Clear All
      </button>
    </div>
  );
}

interface SearchBoxProps {
  value: string;
  onChange: (next: string) => void;
}

function SearchBox({ value, onChange }: SearchBoxProps) {
  return (
    <input
      className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring"
      placeholder="Filter search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
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
  selected: Set<string>;
  toggle: (key: string) => void;
  showHelp: boolean;
}

function LabelGroup({ firstLevel, secondLevelMap, selected, toggle, showHelp }: LabelGroupProps) {
  return (
    <details className="group border-b py-2" open>
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
                  const labels = it.labels || [];
                  return (
                    <div key={key} className="rounded-md px-2 py-1 hover:bg-gray-50">
                      <label className="flex cursor-pointer items-center gap-2 flex-wrap">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggle(key)}
                          className="h-4 w-4"
                        />
                        <span className="text-sm">
                          {desc}
                          {unit}
                        </span>
                        {labels.length > 0 && (
                          <div className="ml-2 flex flex-wrap gap-1">
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
                      {showHelp && (
                        <div className="pl-6 text-xs text-gray-500">{long}</div>
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
                  const labels = it.labels || [];
                  return (
                    <div key={key} className="rounded-md px-2 py-1 hover:bg-gray-50">
                      <label className="flex cursor-pointer items-center gap-2 flex-wrap">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggle(key)}
                          className="h-4 w-4"
                        />
                        <span className="text-sm">
                          {desc}
                          {unit}
                        </span>
                        {labels.length > 0 && (
                          <div className="ml-2 flex flex-wrap gap-1">
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
                      {showHelp && (
                        <div className="pl-6 text-xs text-gray-500">{long}</div>
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
}

function LabelFilter({ allLabels, selectedLabels, onToggleLabel }: LabelFilterProps) {
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

  return (
    <div ref={containerRef} className="mb-3 rounded-lg border bg-gray-50 p-2">
      <div className="mb-2 flex items-center justify-between">
        <div className="text-xs font-semibold text-gray-700">Filter by Labels</div>
        <div className="text-xs text-gray-500">Drag bottom edge to resize</div>
      </div>
      <div 
        className="space-y-1 overflow-auto"
        style={{ height: `${height}px` }}
      >
        {[...allLabels.entries()].map(([family, texts]) => {
          const familyHelp = getLabelHelp(family);
          return (
            <div key={family} className="text-xs">
              <div className="flex items-center gap-1 font-medium text-gray-600">
                <span>{family}:</span>
                <button
                  onClick={() => setHelpModalFamily(family)}
                  className="flex items-center justify-center rounded p-0.5 text-gray-400 hover:bg-gray-200 hover:text-gray-600"
                  title={familyHelp || `View help for ${family} labels`}
                  aria-label={`Help for ${family}`}
                >
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
              <div className="ml-2 flex flex-wrap gap-1">
                {[...texts].sort().map((text) => {
                  const labelKey = `${family}:${text}`;
                  const isSelected = selectedLabels.has(labelKey);
                  const color = getLabelColor(family, text);
                  const labelHelp = getLabelHelp(family, text);
                  return (
                    <button
                      key={labelKey}
                      onClick={() => onToggleLabel(family, text)}
                      className={`rounded border px-2 py-0.5 text-xs transition-all ${
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
    </div>
  );
}

interface HierarchyConfigProps {
  availableFamilies: string[];
  hierarchy: string[];
  onChange: (hierarchy: string[]) => void;
}

function HierarchyConfig({ availableFamilies, hierarchy, onChange }: HierarchyConfigProps) {
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
    <div className="mb-3 rounded-lg border bg-gray-50 p-2">
      <div className="mb-2 text-xs font-semibold text-gray-700">Label Hierarchy</div>
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
  );
}

export default function App() {
  const [query, setQuery] = useState<string>("");
  const [selected, setSelected] = useState<Set<string>>(() => new Set());
  const [showHelp, setShowHelp] = useState<boolean>(true);
  const [selectedLabels, setSelectedLabels] = useState<Set<string>>(() => new Set());
  const [hierarchy, setHierarchy] = useState<string[]>(["component", "feature"]);

  // Extract all labels from protocols
  const allLabels = useMemo(() => extractAllLabels(protocols), []);
  const availableFamilies = useMemo(() => [...allLabels.keys()].sort(), [allLabels]);

  const filtered = useMemo<ProtocolPoint[]>(() => {
    let result = protocols;

    // Filter out points without labels
    result = result.filter((p) => {
      const labels = p.labels || [];
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
        const labels = p.labels || [];
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

  const toggle = (key: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
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

  const clearAll = () => setSelected(new Set<string>());
  const clearLabelFilters = () => setSelectedLabels(new Set<string>());
  const total = filtered.length;

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
      <div className="mx-auto max-w-4xl rounded-2xl border bg-white p-4 shadow-sm">
      <div className="mb-3 text-lg font-semibold">Select Points</div>
      <Toolbar selectedCount={selected.size} onClear={clearAll} total={total} />
      
      <HierarchyConfig
        availableFamilies={availableFamilies}
        hierarchy={hierarchy}
        onChange={setHierarchy}
      />
      
      <LabelFilter
        allLabels={allLabels}
        selectedLabels={selectedLabels}
        onToggleLabel={toggleLabel}
      />
      
      {selectedLabels.size > 0 && (
        <div className="mb-2 flex items-center gap-2">
          <button
            onClick={clearLabelFilters}
            className="rounded border bg-red-50 px-2 py-1 text-xs text-red-700 hover:bg-red-100"
          >
            Clear Label Filters ({selectedLabels.size})
          </button>
        </div>
      )}
      
      <SearchBox value={query} onChange={setQuery} />
      <div className="mt-2 flex justify-end">
        <HelpToggle show={showHelp} onToggle={setShowHelp} />
      </div>

      <div className="mt-3 max-h-[60vh] overflow-auto pr-1">
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
              />
            ))
        )}
      </div>

      {/* Footer / Debug selection */}
      <div className="mt-4 rounded-xl bg-gray-50 p-3 text-xs text-gray-600">
        <div className="mb-1 font-medium">Selected keys</div>
        <div className="break-words">{[...selected].join(", ") || "(none)"}</div>
      </div>
      </div>
    </div>
  );
}
