import React, { useEffect, useMemo, useState } from "react";
import YAML from "yaml";
import rawYaml from "./definitions/telemetry/ss40k_inverter.yaml?raw";
import rawLifecycleEventsYaml from "./definitions/telemetry/lifecycle_events.yaml?raw";
import rawLabelHelp from "./definitions/telemetry/label_help.yaml?raw";
import ChartTutorialModal from "./components/modals/ChartTutorialModal";

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
  friendly_meanings?: Meanings;
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

// Recursive type for arbitrary depth hierarchy
type LabelHierarchy = Map<string, LabelHierarchy | ProtocolPoint[]>;

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

function parseProtocolFile(rawYaml: string, fileName: string): ProtocolPoint[] {
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
        const labels = (
          Array.isArray(item.labels)
            ? item.labels
            : Array.isArray(item.entry?.labels)
            ? item.entry.labels
            : []
        ) as Label[];
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
    console.error(`Failed to parse ${fileName}`, error);
    return [];
  }
}

function loadProtocols(): ProtocolPoint[] {
  const ss40kProtocols = parseProtocolFile(rawYaml, "ss40k_inverter.yaml");
  const lifecycleProtocols = parseProtocolFile(rawLifecycleEventsYaml, "lifecycle_events.yaml");
  return [...ss40kProtocols, ...lifecycleProtocols];
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

// Helper to group by label hierarchy (supports arbitrary depth)
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
          map.set(key, []);
        }
        const itemsList = map.get(key) as ProtocolPoint[];
        itemsList.push(it);
      }
      return;
    }

    // Recursively build the hierarchy
    // Place points at the deepest level they have labels for
    let currentMap = map;
    let lastValidLevel = -1;
    
    // Safety check - ensure currentMap is actually a Map
    if (!(currentMap instanceof Map)) {
      console.error('groupByLabelHierarchy: currentMap is not a Map', currentMap);
      return;
    }
    
    // First, find the deepest level this point has a label for
    for (let i = 0; i < hierarchy.length; i++) {
      const family = hierarchy[i];
      const label = labels.find((l) => l.label_family === family);
      if (label) {
        lastValidLevel = i;
      }
    }
    
    // If point has no labels for any hierarchy level, skip it
    if (lastValidLevel === -1) {
      return;
    }
    
    // Build the hierarchy up to the last valid level
    for (let i = 0; i <= lastValidLevel; i++) {
      // Safety check - ensure currentMap is still a Map
      if (!(currentMap instanceof Map)) {
        console.error('groupByLabelHierarchy: currentMap became non-Map at level', i, currentMap);
        return;
      }
      
      const family = hierarchy[i];
      const label = labels.find((l) => l.label_family === family);
      
      // This should always exist since we checked lastValidLevel
      if (!label) continue;
      
      const key = label.label_text;
      
      if (i === lastValidLevel) {
        // This is the deepest level the point has - store items here
        // Always use a Map structure with empty string key for items, to maintain consistency
        if (!currentMap.has(key)) {
          currentMap.set(key, new Map());
        }
        const levelMap = currentMap.get(key);
        
        // Ensure it's a Map (handle case where it might have been set as array previously)
        if (Array.isArray(levelMap)) {
          // Convert array to Map structure
          const itemsArray = levelMap as ProtocolPoint[];
          const newMap = new Map<string, ProtocolPoint[]>();
          newMap.set("", itemsArray);
          currentMap.set(key, newMap);
        }
        
        const finalMap = currentMap.get(key);
        if (!(finalMap instanceof Map)) {
          console.error('Expected Map for finalMap but got:', typeof finalMap, finalMap);
          return;
        }
        if (!finalMap.has("")) {
          finalMap.set("", []);
        }
        const itemsList = finalMap.get("") as ProtocolPoint[];
        if (!Array.isArray(itemsList)) {
          console.error('Expected array for itemsList but got:', typeof itemsList, itemsList);
          return;
        }
        itemsList.push(it);
      } else {
        // Intermediate level - ensure it's always a Map
        if (!currentMap.has(key)) {
          currentMap.set(key, new Map());
        } else {
          // Check if it's an array and convert to Map if needed
          const existing = currentMap.get(key);
          if (Array.isArray(existing)) {
            const itemsArray = existing as ProtocolPoint[];
            const newMap = new Map<string, ProtocolPoint[]>();
            newMap.set("", itemsArray);
            currentMap.set(key, newMap);
          }
        }
        const nestedMap = currentMap.get(key);
        // Safety check - ensure nestedMap is actually a Map
        if (!(nestedMap instanceof Map)) {
          console.error('Expected Map for nestedMap but got:', typeof nestedMap, nestedMap, 'at level', i, 'key', key);
          return;
        }
        currentMap = nestedMap as LabelHierarchy;
      }
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

interface DetailLevelSliderProps {
  value: string; // 'Standard', 'Extended', or 'Complete'
  onChange: (value: string) => void;
}

function DetailLevelSlider({ value, onChange }: DetailLevelSliderProps) {
  const options = ['Standard', 'Extended', 'Complete'];
  const currentIndex = options.indexOf(value);
  const sliderValue = currentIndex >= 0 ? currentIndex : 0;
  const [showHelpModal, setShowHelpModal] = React.useState(false);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = parseInt(e.target.value, 10);
    onChange(options[index]);
  };

  // Calculate the position percentage for the slider fill
  const fillPosition = (sliderValue / (options.length - 1)) * 100;

  // Get help text for Level of Detail family
  const levelOfDetailHelp = getLabelHelp('Level of Detail');
  const levelOfDetailLabels = new Set(options);

  return (
    <>
      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold text-gray-700">Detail Level</span>
        <button
          onClick={() => setShowHelpModal(true)}
          className="text-blue-500 hover:text-blue-700"
          title={levelOfDetailHelp || "Level of Detail help"}
        >
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
        <div className="flex flex-col items-center gap-0.5">
          <div className="relative w-40 flex items-center">
            <input
              type="range"
              min="0"
              max={options.length - 1}
              step="1"
              value={sliderValue}
              onChange={handleSliderChange}
              className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #10b981 0%, #10b981 ${fillPosition}%, #e5e7eb ${fillPosition}%, #e5e7eb 100%)`
              }}
            />
            <style>{`
              input[type="range"]::-webkit-slider-thumb {
                appearance: none;
                width: 14px;
                height: 14px;
                border-radius: 50%;
                background: #10b981;
                cursor: pointer;
                border: 2px solid white;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
              }
              input[type="range"]::-moz-range-thumb {
                width: 14px;
                height: 14px;
                border-radius: 50%;
                background: #10b981;
                cursor: pointer;
                border: 2px solid white;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
              }
            `}</style>
          </div>
          {/* Labels below slider */}
          <div className="relative w-40 flex justify-between text-xs">
            {options.map((option, index) => (
              <button
                key={option}
                type="button"
                onClick={() => onChange(option)}
                className={`cursor-pointer hover:opacity-70 transition-opacity ${
                  index === sliderValue ? 'font-semibold text-gray-900' : 'text-gray-500'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
      {showHelpModal && (
        <LabelHelpModal
          family="Level of Detail"
          labels={levelOfDetailLabels}
          onClose={() => setShowHelpModal(false)}
        />
      )}
    </>
  );
}

interface LabelGroupProps {
  levelName: string;
  levelData: LabelHierarchy | ProtocolPoint[];
  selected: Map<string, Set<string>>;
  toggle: (key: string) => void;
  showHelp: boolean;
  onUpdateInverters: (pointKey: string, inverters: Set<string>) => void;
  groupsExpanded: boolean;
  pointHelpEnabled: Set<string>;
  onTogglePointHelp: (pointKey: string) => void;
  depth?: number;
  query: string;
  parentPath?: string;
  hierarchy?: string[];
}

// Helper to check if search text appears in any tooltip
function searchMatchesInTooltip(point: ProtocolPoint, query: string): boolean {
  // Normalize query - handle null/undefined and trim whitespace
  // Use String() to ensure we always have a string, even for edge cases
  const queryStr = String(query || '').trim();
  if (!queryStr) return false;

  const q = queryStr.toLowerCase();

  // Check label help text (tooltips)
  const labels = Array.isArray(point.labels) ? point.labels : [];
  if (labels.length === 0) return false;
  
  // Check each label's help text
  for (const label of labels) {
    // Skip invalid labels
    if (!label || typeof label !== 'object') continue;
    if (!label.label_family || typeof label.label_family !== 'string') continue;
    
    try {
      const labelHelp = getLabelHelp(label.label_family, label.label_text);
      // Check if help text exists and contains the query
      if (labelHelp && typeof labelHelp === 'string' && labelHelp.length > 0) {
        if (labelHelp.toLowerCase().includes(q)) {
          return true;
        }
      }
    } catch (error) {
      // If getLabelHelp throws an error, skip this label silently
      continue;
    }
  }
  
  return false;
}

function LabelGroup({ levelName, levelData, selected, toggle, showHelp, onUpdateInverters, groupsExpanded, pointHelpEnabled, onTogglePointHelp, depth = 0, query, parentPath = '', hierarchy = [] }: LabelGroupProps) {
  // Generate unique ID based on full path to avoid conflicts with same-named categories
  const currentPath = parentPath ? `${parentPath}-${levelName.replace(/\s+/g, '-')}` : levelName.replace(/\s+/g, '-');
  const levelId = `group-${currentPath}-${depth}`;
  const isLeaf = Array.isArray(levelData);

  // Get the label family name for this depth level
  const labelFamily = hierarchy[depth] || '';
  
  // Safety check: ensure levelData is valid
  if (!levelData) {
    return null;
  }
  
  // Render a single point
  const renderPoint = (it: ProtocolPoint) => {
    const key = `${it.model}:${it.point}`;
    const desc = it.entry.description || key;
    const long = it.entry.longdescription || desc;
    const dtype = typeof it.entry.dtype === 'string' ? it.entry.dtype.toLowerCase() : '';
    const showsCategoricalIcon = dtype.includes('enum') || dtype.startsWith('bitfield');
    const unit = it.entry.unit && it.entry.unit !== "N/A" ? ` (${it.entry.unit})` : "";
    const checked = selected.has(key);
    const selectedInverters = checked ? (selected.get(key) || new Set(['001'])) : new Set<string>();
    const labels = Array.isArray(it.labels) ? it.labels : [];
    const pointHelpShown = showHelp || pointHelpEnabled.has(key);
    // Pass query directly - the function handles normalization
    const helpTextMatch = searchMatchesInTooltip(it, query);

    return (
      <div key={key} id={`point-${key.replace(/:/g, '-')}`} data-point-key={key} className="rounded-md px-2 py-1 hover:bg-gray-50 transition-colors">
        <div className="flex items-start gap-2 flex-wrap">
          <label className="flex cursor-pointer items-center gap-2 flex-wrap flex-1 min-w-0">
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => {
                e.stopPropagation();
                toggle(key);
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="h-4 w-4 flex-shrink-0"
            />
            <span className="text-sm flex items-center gap-1">
              <span>
                {desc}
                {unit}
              </span>
              {showsCategoricalIcon && (
                <span
                  className="text-base leading-none cursor-help"
                  title="Selecting this point shows named modes or states as colored bars instead of a line chart."
                  aria-label="Categorical visualization"
                >
                  📊
                </span>
              )}
            </span>
            <div className="relative ml-1 flex-shrink-0">
              <span
                className={`cursor-pointer ${
                  pointHelpShown
                    ? 'text-blue-600 hover:text-blue-700'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
                title={long}
                aria-label="Help"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onTogglePointHelp(key);
                }}
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                ⓘ
              </span>
              {helpTextMatch && (
                <span 
                  key={`red-dot-${key}`}
                  className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-pulse" 
                  aria-hidden="true"
                />
              )}
            </div>
            {checked && (
              <div className="ml-auto flex items-center gap-1 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                <span className="text-xs text-gray-600">Inverter SN:</span>
                <InverterSelector
                  selectedInverters={selectedInverters}
                  onChange={(newInverters) => onUpdateInverters(key, newInverters)}
                />
              </div>
            )}
            {pointHelpShown && labels.length > 0 && (
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
          </label>
        </div>
        {pointHelpShown && (
          <div className="pl-6 text-xs text-gray-500 whitespace-pre-wrap">{long}</div>
        )}
      </div>
    );
  };
  
  // If this is a leaf node (array of points), render them directly
  if (isLeaf) {
    const points = levelData as ProtocolPoint[];
    return (
      <div className="ml-2 space-y-1">
        {points.map(renderPoint)}
      </div>
    );
  }
  
  // Otherwise, render nested groups
  // Type guard: if it's not an array, it must be a Map (LabelHierarchy)
  if (!(levelData instanceof Map)) {
    console.error('LabelGroup: levelData is neither array nor Map', { levelName, depth, levelData, type: typeof levelData });
    return null;
  }
  const nestedMap = levelData as LabelHierarchy;
  const isTopLevel = depth === 0;
  
  return (
    <details id={levelId} className={`group border-b py-2 ${isTopLevel ? '' : 'ml-2 border-l pl-2'}`} open={groupsExpanded}>
      <summary className={`cursor-pointer list-none ${isTopLevel ? 'font-semibold' : 'font-medium text-gray-700'} flex items-center justify-between`}>
        <div className="flex items-center flex-1 min-w-0">
          <span className="mr-1">▾</span>
          <span className="truncate">{levelName}</span>
        </div>
        {labelFamily && (
          <span
            className="ml-2 px-2 py-0.5 text-[10px] font-normal uppercase tracking-wide text-gray-500 bg-gray-100 rounded-full flex-shrink-0 cursor-help"
            title={getLabelHelp(labelFamily) || labelFamily}
          >
            {labelFamily}
          </span>
        )}
      </summary>
      <div className="mt-2 ml-1 space-y-2">
        {[...nestedMap.entries()].map(([nextLevelName, nextLevelData]) => {
          // Skip empty string entries - they contain the actual items array
          if (nextLevelName === "") {
            // This is the items array at the deepest level
            if (Array.isArray(nextLevelData)) {
              return (
                <div key="" className="ml-2 space-y-1">
                  {(nextLevelData as ProtocolPoint[]).map(renderPoint)}
                </div>
              );
            }
            return null;
          }
          return (
            <LabelGroup
              key={nextLevelName}
              levelName={nextLevelName}
              levelData={nextLevelData}
              selected={selected}
              toggle={toggle}
              showHelp={showHelp}
              onUpdateInverters={onUpdateInverters}
              groupsExpanded={groupsExpanded}
              pointHelpEnabled={pointHelpEnabled}
              onTogglePointHelp={onTogglePointHelp}
              depth={depth + 1}
              query={query}
              parentPath={currentPath}
              hierarchy={hierarchy}
            />
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

function FilterHelpModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
      <div className="relative max-h-[80vh] w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">How do filters work?</h2>
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

        <div className="space-y-4 text-gray-700">
          <p>
            Use filters to quickly jump to the part of the system you're interested in—like just battery settings,
            inverter readings, or grid-related features—without needing to scroll through the full list.
          </p>
          <p>
            Select any combination of filters—such as component, type of data, unit, or feature—and the list will
            update instantly to show only points that match your selection. You can choose multiple filters at once
            to get more specific.
          </p>
          <p>
            As you refine the list, filters that no longer apply will dim, show a count of zero, and become unavailable,
            helping you see which combinations still have matching points.
          </p>
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
  protocols: ProtocolPoint[];
  detailLevel: string;
}

function LabelFilter({ allLabels, selectedLabels, onToggleLabel, onClearFilters, protocols, detailLevel }: LabelFilterProps) {
  const [height, setHeight] = React.useState(200);
  const [isResizing, setIsResizing] = React.useState(false);
  const [helpModalFamily, setHelpModalFamily] = React.useState<string | null>(null);
  const [showFilterHelpModal, setShowFilterHelpModal] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const detailsRef = React.useRef<HTMLDetailsElement>(null);

  // Compute count for a hypothetical filter combination
  const computeCountForChip = React.useCallback((family: string, text: string): number => {
    const labelKey = `${family}:${text}`;

    // Build hypothetical filter set
    // If this chip is from a family with existing selections, replace them with this chip only
    // Otherwise, keep all existing selections and add this chip
    const hypotheticalFilters = new Set<string>();
    selectedLabels.forEach((key) => {
      const [f] = key.split(':', 2);
      if (f !== family) {
        hypotheticalFilters.add(key);
      }
    });
    hypotheticalFilters.add(labelKey);

    // Group hypothetical filters by family
    const filtersByFamily = new Map<string, Set<string>>();
    hypotheticalFilters.forEach((key) => {
      const [f, t] = key.split(':', 2);
      if (!filtersByFamily.has(f)) {
        filtersByFamily.set(f, new Set());
      }
      filtersByFamily.get(f)!.add(t);
    });

    // Determine which detail levels to include
    const detailLevelFilter = (() => {
      switch (detailLevel) {
        case 'Standard':
          return ['Standard'];
        case 'Extended':
          return ['Standard', 'Extended'];
        case 'Complete':
          return ['Standard', 'Extended', 'Complete'];
        default:
          return ['Standard', 'Extended', 'Complete'];
      }
    })();

    // Count points that match all filters (AND across families, OR within family)
    return protocols.filter((point) => {
      const pointLabels = Array.isArray(point.labels) ? point.labels : [];

      // Apply detail level filter first
      const levelOfDetailLabels = pointLabels
        .filter((l) => l.label_family === 'Level of Detail')
        .map((l) => l.label_text);

      // If point has no Level of Detail label, include it (for backward compatibility)
      if (levelOfDetailLabels.length > 0) {
        // Check if point has at least one matching detail level
        const hasMatchingDetailLevel = levelOfDetailLabels.some((level) =>
          detailLevelFilter.includes(level)
        );
        if (!hasMatchingDetailLevel) {
          return false;
        }
      }

      // Group point's labels by family
      const pointLabelsByFamily = new Map<string, Set<string>>();
      pointLabels.forEach((label) => {
        if (!pointLabelsByFamily.has(label.label_family)) {
          pointLabelsByFamily.set(label.label_family, new Set());
        }
        pointLabelsByFamily.get(label.label_family)!.add(label.label_text);
      });

      // For each filter family, check if point has at least one matching value (OR)
      // All filter families must match (AND)
      for (const [filterFamily, filterTexts] of filtersByFamily.entries()) {
        const pointTexts = pointLabelsByFamily.get(filterFamily);
        if (!pointTexts) {
          return false;
        }
        const hasMatch = [...filterTexts].some((filterText) =>
          pointTexts.has(filterText)
        );
        if (!hasMatch) {
          return false;
        }
      }
      return true;
    }).length;
  }, [selectedLabels, protocols, detailLevel]);

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
  const activeFilters = Array.from(selectedLabels)
    .map((labelKey) => {
      const [family, text] = labelKey.split(':', 2);
      return { family, text };
    })
    .filter(({ family }) => family !== 'Level of Detail');

  const otherLabels = new Map(allLabels);
  otherLabels.delete('Level of Detail');

  return (
    <div ref={containerRef} className="mb-3 rounded-lg border bg-gray-50 p-2">
      <details 
        ref={detailsRef}
        className="group"
        open={isExpanded}
        onToggle={(e) => setIsExpanded((e.target as HTMLDetailsElement).open)}
      >
        <summary className="cursor-pointer list-none">
          <div className="mb-1 flex items-center gap-2 text-xs font-semibold text-gray-700">
            {/* Filter icon and label */}
            <svg className="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            <span className="flex-shrink-0">Filters</span>
            {activeFilters.length > 0 && (
              <span className="text-gray-500">({activeFilters.length} active)</span>
            )}
          </div>
        </summary>
        <div className="mb-2 flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            {/* Add Filter button when collapsed */}
            {!isExpanded && otherLabels.size > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (detailsRef.current) {
                    detailsRef.current.open = true;
                    setIsExpanded(true);
                  }
                }}
                className="rounded border border-gray-300 bg-white px-2 py-0.5 text-xs text-gray-600 hover:bg-gray-50 hover:border-gray-400 transition-colors flex-shrink-0"
              >
                + Add Filter
              </button>
            )}

            {/* Active filter badges */}
            {activeFilters.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 min-w-0">
                {activeFilters.map(({ family, text }) => {
                  const color = getLabelColor(family, text);
                  return (
                    <span
                      key={`${family}:${text}`}
                      className={`rounded border px-1.5 py-0.5 text-xs ${color.bg} ${color.text} ${color.border} border-2 font-semibold flex-shrink-0 flex items-center gap-1`}
                    >
                      <span>{text}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleLabel(family, text);
                        }}
                        className="hover:opacity-70 transition-opacity flex-shrink-0"
                        title={`Remove ${family}: ${text} filter`}
                        aria-label={`Remove ${family}: ${text} filter`}
                      >
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </span>
                  );
                })}
              </div>
            )}

            {/* Clear all button */}
            {activeFilters.length > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClearFilters();
                }}
                className="flex-shrink-0 text-xs text-gray-500 hover:text-gray-700 transition-colors"
                title="Clear all filters"
                aria-label="Clear all filters"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Help text on far right */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowFilterHelpModal(true);
            }}
            className="flex-shrink-0 text-xs text-blue-600 hover:text-blue-700 underline transition-colors"
          >
            How do I use filters?
          </button>
        </div>
        <div 
          className="space-y-0.5 overflow-auto mt-2"
          style={{ height: `${height}px` }}
        >
        {[...otherLabels.entries()].map(([family, texts]) => {
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
                  const count = computeCountForChip(family, text);
                  const isDisabled = !isSelected && count === 0;
                  const color = getLabelColor(family, text);
                  const labelHelp = getLabelHelp(family, text);

                  return (
                    <button
                      key={labelKey}
                      onClick={() => {
                        if (!isDisabled) {
                          onToggleLabel(family, text);
                        }
                      }}
                      className={`rounded border px-1.5 py-0.5 text-xs transition-all ${
                        isDisabled
                          ? 'opacity-40 cursor-not-allowed bg-white'
                          : isSelected
                          ? `${color.bg} ${color.text} ${color.border} border-2 font-semibold`
                          : `bg-white ${color.text} ${color.border} hover:opacity-80 cursor-pointer`
                      }`}
                      style={!isSelected && !isDisabled ? { borderColor: 'currentColor' } : undefined}
                      title={
                        isDisabled
                          ? "No points available with this combination of filters"
                          : labelHelp || `${family}: ${text}`
                      }
                      aria-disabled={isDisabled}
                      tabIndex={isDisabled ? -1 : 0}
                    >
                      <span>{text}</span>
                      {!isSelected && (
                        <span className={`ml-1 ${isDisabled ? 'text-gray-400' : 'text-gray-500'}`}>
                          ({count})
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
        </div>
        <div
          onMouseDown={handleMouseDown}
          className="mt-1 h-1 cursor-ns-resize rounded bg-gray-300 hover:bg-gray-400 transition-colors"
          title="Drag to resize"
        />
      </details>
      {helpModalFamily && (
        <LabelHelpModal
          family={helpModalFamily}
          labels={allLabels.get(helpModalFamily) || new Set()}
          onClose={() => setHelpModalFamily(null)}
        />
      )}
      {showFilterHelpModal && (
        <FilterHelpModal onClose={() => setShowFilterHelpModal(false)} />
      )}
    </div>
  );
}

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

// Available inverters (hardcoded for now, could come from props or API)
const AVAILABLE_INVERTERS = ['001', '002', '003'];

// Map short SN (last 3 digits) to full 10-digit SN
// Generate deterministic 10-digit SNs based on short SN
const getFullSerialNumber = (shortSN: string): string => {
  // Create a deterministic 10-digit number based on short SN
  // Use a simple hash-like approach: prefix with zeros and add a checksum-like suffix
  const shortNum = parseInt(shortSN, 10);
  const base = 1000000000; // Start with 1 billion
  const fullSN = base + (shortNum * 10000) + shortNum; // Creates a 10-digit number
  return fullSN.toString().padStart(10, '0');
};

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

const LINE_COLOR_CLASSES = [
  'text-purple-500',
  'text-green-500',
  'text-teal-500',
  'text-blue-500',
  'text-pink-500',
  'text-orange-500',
  'text-indigo-500',
  'text-red-500',
];

// Extended color palette for categorical charts with all shades
const CATEGORICAL_COLORS = [
  { bg50: 'bg-purple-50', bg100: 'bg-purple-100', border200: 'border-purple-200', border400: 'border-purple-400', bg500: 'bg-purple-500/80', text600: 'text-purple-600', text700: 'text-purple-700', ring: 'focus:ring-purple-500' },
  { bg50: 'bg-green-50', bg100: 'bg-green-100', border200: 'border-green-200', border400: 'border-green-400', bg500: 'bg-green-500/80', text600: 'text-green-600', text700: 'text-green-700', ring: 'focus:ring-green-500' },
  { bg50: 'bg-teal-50', bg100: 'bg-teal-100', border200: 'border-teal-200', border400: 'border-teal-400', bg500: 'bg-teal-500/80', text600: 'text-teal-600', text700: 'text-teal-700', ring: 'focus:ring-teal-500' },
  { bg50: 'bg-blue-50', bg100: 'bg-blue-100', border200: 'border-blue-200', border400: 'border-blue-400', bg500: 'bg-blue-500/80', text600: 'text-blue-600', text700: 'text-blue-700', ring: 'focus:ring-blue-500' },
  { bg50: 'bg-pink-50', bg100: 'bg-pink-100', border200: 'border-pink-200', border400: 'border-pink-400', bg500: 'bg-pink-500/80', text600: 'text-pink-600', text700: 'text-pink-700', ring: 'focus:ring-pink-500' },
  { bg50: 'bg-orange-50', bg100: 'bg-orange-100', border200: 'border-orange-200', border400: 'border-orange-400', bg500: 'bg-orange-500/80', text600: 'text-orange-600', text700: 'text-orange-700', ring: 'focus:ring-orange-500' },
  { bg50: 'bg-indigo-50', bg100: 'bg-indigo-100', border200: 'border-indigo-200', border400: 'border-indigo-400', bg500: 'bg-indigo-500/80', text600: 'text-indigo-600', text700: 'text-indigo-700', ring: 'focus:ring-indigo-500' },
  { bg50: 'bg-red-50', bg100: 'bg-red-100', border200: 'border-red-200', border400: 'border-red-400', bg500: 'bg-red-500/80', text600: 'text-red-600', text700: 'text-red-700', ring: 'focus:ring-red-500' },
];

interface LegendEntry {
  key: string;
  pointKey: string;
  name: string;
  shortSN: string;
  fullSN: string;
  unit: string;
  model: string;
  point: string;
  longDescription: string;
  colorIndex: number;
  dtype?: string;
  meanings?: Meanings;
  friendlyMeanings?: Meanings;
  meaningKeys: string[];
  isCategorical: boolean;
}

interface CategoricalSeriesRow {
  meaningKey: string;
  label: string;
  activeSlots: boolean[];
}

interface CategoricalChartData {
  id: string;
  title: string;
  subtitle: string;
  timeLabels: string[];
  rows: CategoricalSeriesRow[];
  colorIndex: number;
}

function createDeterministicRandom(seed: string) {
  let value = 0;
  for (let i = 0; i < seed.length; i += 1) {
    value = (value * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 2 ** 32;
  };
}

function generateTimeLabels(count: number) {
  const labels: string[] = [];
  const incrementMinutes = 10;
  const startMinutes = 12 * 60; // 12:00
  for (let i = 0; i < count; i += 1) {
    const totalMinutes = startMinutes + i * incrementMinutes;
    const hours = Math.floor(totalMinutes / 60) % 24;
    const minutes = totalMinutes % 60;
    labels.push(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`);
  }
  return labels;
}

const LINE_SERIES_LENGTH = 36;
const LINE_CHART_VIEWBOX = { width: 1000, height: 360 };

function generateSmoothLineSeries(seed: string, length = LINE_SERIES_LENGTH) {
  const rand = createDeterministicRandom(`line-${seed}`);
  const values: number[] = [];
  let current = rand() * 60 + 20;
  for (let i = 0; i < length; i += 1) {
    const direction = rand() - 0.5;
    const magnitude = 4 + rand() * 8;
    const target = current + direction * magnitude;
    current = values.length ? values[values.length - 1] * 0.7 + target * 0.3 : target;
    current = Math.max(0, Math.min(140, current));
    values.push(Number(current.toFixed(2)));
  }
  return values;
}

function LineChartPreview({
  series,
  crosshairX,
  onCrosshairChange,
}: {
  series: {
    entry: LegendEntry;
    values: number[];
  }[];
  crosshairX?: number | null;
  onCrosshairChange?: (x: number | null) => void;
}) {
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

function buildCategoricalChartData(entry: LegendEntry): CategoricalChartData | null {
  if (!entry.meaningKeys.length) {
    return null;
  }

  const allMeaningKeys = entry.meaningKeys;
  const rand = createDeterministicRandom(entry.pointKey);
  const keysWithData = allMeaningKeys.filter((_, index) => rand() > 0.35 || index === 0);
  if (keysWithData.length === 0) {
    keysWithData.push(allMeaningKeys[0]);
  }

  const slotCount = 12;
  const timeLabels = generateTimeLabels(slotCount);
  const normalizedDtype = typeof entry.dtype === 'string' ? entry.dtype.toLowerCase() : '';
  const isBitfield = normalizedDtype.startsWith('bitfield');

  const slotSets: Array<Set<string>> = Array.from({ length: slotCount }, () => new Set<string>());

  if (isBitfield) {
    for (let slot = 0; slot < slotCount; slot += 1) {
      let activated = false;
      keysWithData.forEach((key, idx) => {
        if (rand() > 0.55) {
          slotSets[slot].add(key);
          activated = true;
        }
        // Encourage early keys to show up occasionally
        if (!activated && idx === keysWithData.length - 1 && rand() > 0.7) {
          slotSets[slot].add(key);
          activated = true;
        }
      });
    }
  } else {
    let slot = 0;
    while (slot < slotCount) {
      if (!keysWithData.length) {
        break;
      }
      const keyIndex = Math.floor(rand() * keysWithData.length);
      const selectedKey = keysWithData[keyIndex];
      const runLength = 1 + Math.floor(rand() * 3);
      if (rand() > 0.2) {
        for (let offset = 0; offset < runLength && slot + offset < slotCount; offset += 1) {
          slotSets[slot + offset].add(selectedKey);
        }
      }
      slot += runLength;
    }
  }

  const rows: CategoricalSeriesRow[] = allMeaningKeys.map((meaningKey) => {
    const labelSourceKey = String(meaningKey);
    const friendly = entry.friendlyMeanings?.[labelSourceKey];
    const meaning = entry.meanings?.[labelSourceKey];
    const label = (friendly ?? meaning ?? labelSourceKey).trim() || `Value ${labelSourceKey}`;
    const activeSlots = slotSets.map((set) => set.has(meaningKey));
    return { meaningKey, label, activeSlots };
  });

  return {
    id: entry.pointKey,
    title: entry.name,
    subtitle: `SN ${entry.shortSN}`,
    timeLabels,
    rows,
    colorIndex: entry.colorIndex,
  };
}

function CategoricalChart({
  data,
  onRemove,
  crosshairX,
  onCrosshairChange,
  onDragStart,
  onDragEnd,
  isDragActive
}: {
  data: CategoricalChartData;
  onRemove?: () => void;
  crosshairX?: number | null;
  onCrosshairChange?: (x: number | null) => void;
  onDragStart?: () => void;
  onDragEnd?: () => void;
  isDragActive?: boolean;
}) {
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
    : Array.from(selectedInverters).sort().map(shortSN => getFullSerialNumber(shortSN)).join(', ');

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
                <span className="text-xs text-gray-700">{getFullSerialNumber(inv)}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function FakeChart({ selectedPoints, protocols, onUpdateInverters: _onUpdateInverters, onScrollToPoint: _onScrollToPoint, onRemoveInverter, onSelectPointsToggle, selectPointsOpen, onDeleteChart, onShowTutorial, crosshairX, onCrosshairChange, onDragStart, onDragEnd, isDragActive, isDropTarget }: FakeChartProps) {
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

interface HierarchyConfigProps {
  availableFamilies: string[];
  hierarchy: string[];
  onChange: (hierarchy: string[]) => void;
  scrollContainerRef?: React.RefObject<HTMLDivElement>;
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

function HierarchyConfig({ availableFamilies, hierarchy, onChange, scrollContainerRef }: HierarchyConfigProps) {
  const [showHelpModal, setShowHelpModal] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(true);
  const detailsRef = React.useRef<HTMLDetailsElement>(null);
  const lastScrollTop = React.useRef<number>(0);

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

  // Handle scroll detection to collapse when scrolling down
  React.useEffect(() => {
    const scrollContainer = scrollContainerRef?.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const currentScrollTop = scrollContainer.scrollTop;
      
      // Collapse when scrolling down, expand when scrolling to top
      if (currentScrollTop > lastScrollTop.current && currentScrollTop > 50) {
        // Scrolling down - collapse
        if (isExpanded && detailsRef.current) {
          detailsRef.current.open = false;
          setIsExpanded(false);
        }
      } else if (currentScrollTop < 50) {
        // Scrolled to top - expand
        if (!isExpanded && detailsRef.current) {
          detailsRef.current.open = true;
          setIsExpanded(true);
        }
      }
      
      lastScrollTop.current = currentScrollTop;
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [isExpanded, scrollContainerRef]);

  return (
    <>
      <div className="mb-3 rounded-lg border bg-gray-50 p-2 transition-all duration-300">
        <details 
          ref={detailsRef}
          className="group"
          open={isExpanded}
          onToggle={(e) => setIsExpanded((e.target as HTMLDetailsElement).open)}
        >
          <summary className="cursor-pointer list-none">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 flex-1 min-w-0">
                <span className="text-gray-500 flex-shrink-0">&gt;</span>
                <span className="flex-shrink-0">Group by</span>
                {hierarchy.filter(level => level).length > 0 && (
                  <div className="flex items-center gap-1 ml-1 min-w-0">
                    {hierarchy.map((level, index) => {
                      if (!level) return null;
                      const color = getLabelColor(level, '');
                      return (
                        <React.Fragment key={index}>
                          <span
                            className={`rounded px-2 py-0.5 text-xs font-semibold flex-shrink-0 ${
                              index === 0 
                                ? 'bg-blue-100 text-blue-700' 
                                : index === 1
                                ? 'bg-green-100 text-green-700'
                                : `${color.bg} ${color.text}`
                            }`}
                          >
                            {level}
                          </span>
                          {index < hierarchy.length - 1 && hierarchy[index + 1] && (
                            <span className="text-gray-500 flex-shrink-0">&gt;</span>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                )}
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowHelpModal(true);
                }}
                className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 hover:underline flex-shrink-0"
              >
                <span>What does this do?</span>
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </summary>
          <div className="mt-2">
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

interface ChartData {
  id: string;
  selectedPoints: Map<string, Set<string>>;
  row: number;
  col: number;
}

interface ChartGridCallbacks {
  getActiveChartSelectedPoints: () => Map<string, Set<string>>;
  togglePointForActiveChart: (pointKey: string) => void;
  updateInvertersForActiveChart: (pointKey: string, inverters: Set<string>) => void;
}

interface ChartGridProps {
  protocols: ProtocolPoint[];
  onUpdateInverters: (chartId: string, pointKey: string, inverters: Set<string>) => void;
  onScrollToPoint: (pointKey: string) => void;
  onRemoveInverter: (chartId: string, pointKey: string, inverterSN: string) => void;
  onSelectPointsToggle: (open: boolean) => void;
  selectPointsOpen: boolean;
  callbacksRef: React.MutableRefObject<ChartGridCallbacks | null>;
  onActiveChartSelectedPointsChange: (points: Map<string, Set<string>>) => void;
  onActiveChartPositionChange: (rect: DOMRect | null) => void;
}

const ROW_DIVIDER_TRACK = 16;
const COLUMN_DIVIDER_TRACK = 16;
const MIN_ROW_HEIGHT = 280;
const MIN_COLUMN_WIDTH = 360;
const ROW_KEYBOARD_STEP = 12;
const COLUMN_KEYBOARD_STEP = 12;
const DEFAULT_ROW_HEIGHT = 520;
const DEFAULT_COLUMN_WIDTH = 780;
const DEFAULT_INVERTER_SELECTION = ['001'];

interface DividerButtonSegment {
  key: string;
  onAdd: () => void;
  size?: number;
}

interface DividerAddButtonProps {
  onAdd: () => void;
  ariaLabel: string;
}

const DividerAddButton: React.FC<DividerAddButtonProps> = ({ onAdd, ariaLabel }) => (
  <button
    type="button"
    onClick={(event) => {
      event.stopPropagation();
      onAdd();
    }}
    className="relative z-10 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-base font-semibold text-gray-600 opacity-70 shadow-sm transition-all duration-150 ease-out hover:bg-white group-hover:scale-105 group-hover:opacity-100 group-focus-within:opacity-100 focus:scale-105 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
    aria-label={ariaLabel}
  >
    <span className="leading-none">+</span>
  </button>
);

interface RowDividerProps {
  onAdd: () => void;
  onResizeStart?: (clientY: number) => void;
  onEdgeResizeStart?: (clientY: number) => void;
  onKeyboardNudge?: (delta: number) => void;
  onEdgeKeyboardNudge?: (delta: number) => void;
  onAutoFit?: () => void;
  percentAbove?: number;
  isActive?: boolean;
  buttonSegments?: DividerButtonSegment[];
}

const RowDivider: React.FC<RowDividerProps> = ({
  onAdd,
  onResizeStart,
  onKeyboardNudge,
  onEdgeResizeStart,
  onEdgeKeyboardNudge,
  onAutoFit,
  percentAbove,
  isActive = false,
  buttonSegments,
}) => {
  const isBetweenResizable =
    typeof onResizeStart === 'function' &&
    typeof onKeyboardNudge === 'function' &&
    typeof onAutoFit === 'function' &&
    typeof percentAbove === 'number';
  const isEdgeResizable = typeof onEdgeResizeStart === 'function';
  const isResizable = isBetweenResizable || isEdgeResizable;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onAdd();
    } else if (event.key === 'ArrowUp' && isBetweenResizable && onKeyboardNudge) {
      event.preventDefault();
      onKeyboardNudge(ROW_KEYBOARD_STEP);
    } else if (event.key === 'ArrowDown' && isBetweenResizable && onKeyboardNudge) {
      event.preventDefault();
      onKeyboardNudge(-ROW_KEYBOARD_STEP);
    } else if (event.key === 'ArrowUp' && isEdgeResizable && onEdgeKeyboardNudge) {
      event.preventDefault();
      onEdgeKeyboardNudge(ROW_KEYBOARD_STEP);
    } else if (event.key === 'ArrowDown' && isEdgeResizable && onEdgeKeyboardNudge) {
      event.preventDefault();
      onEdgeKeyboardNudge(-ROW_KEYBOARD_STEP);
    }
  };

  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      {...(isBetweenResizable
        ? {
            'aria-valuenow': Math.round(percentAbove!),
            'aria-valuemin': 0,
            'aria-valuemax': 100,
            'aria-label': 'Resize charts',
          }
        : isEdgeResizable
          ? {
              'aria-label': 'Resize row height',
              'aria-valuetext': `${Math.round(percentAbove ?? 100)}%`,
            }
          : {
              'aria-label': 'Add chart below',
              'aria-disabled': true,
            })}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onClick={(event) => {
        if (isResizable || (event.target as HTMLElement).closest('button')) {
          return;
        }
        event.preventDefault();
        onAdd();
      }}
      onDoubleClick={(event) => {
        if ((event.target as HTMLElement).closest('button')) {
          return;
        }
        event.preventDefault();
        if (isBetweenResizable && onAutoFit) {
          onAutoFit();
        } else {
          onAdd();
        }
      }}
      onMouseDown={(event) => {
        if ((event.target as HTMLElement).closest('button')) {
          return;
        }
        if (event.button !== 0) {
          return;
        }
        event.preventDefault();
        if (isBetweenResizable && onResizeStart) {
          onResizeStart(event.clientY);
        } else if (isEdgeResizable && onEdgeResizeStart) {
          onEdgeResizeStart(event.clientY);
        }
      }}
      className={`group relative flex items-center justify-center ${
        isResizable ? 'cursor-row-resize' : 'cursor-pointer'
      } select-none outline-none transition-shadow duration-150 focus-visible:ring-2 focus-visible:ring-blue-300/60 ${
        isActive ? 'ring-2 ring-blue-300/60' : ''
      }`}
      style={{
        height: ROW_DIVIDER_TRACK,
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem',
      }}
    >
      <div className="pointer-events-none absolute inset-0 flex items-center px-4">
        <div
          className={`flex-1 h-1 rounded-full transition-colors duration-150 ${
            isActive ? 'bg-[#CBD1DB]' : 'bg-[#E4E6EA]'
          } group-hover:bg-[#CBD1DB] group-focus-within:bg-[#CBD1DB]`}
        />
      </div>
      <div
        className={`${
          buttonSegments && buttonSegments.length > 0 ? 'grid w-full' : 'flex w-full'
        } items-center justify-center`}
        style={
          buttonSegments && buttonSegments.length > 0
            ? {
                gridTemplateColumns: buttonSegments
                  .map((segment) => (segment.size ? `${segment.size}px` : '1fr'))
                  .join(' '),
              }
            : undefined
        }
      >
        {buttonSegments && buttonSegments.length > 0 ? (
          buttonSegments.map((segment) => (
            <div key={segment.key} className="flex justify-center py-0.5">
              <DividerAddButton onAdd={segment.onAdd} ariaLabel="Add chart below" />
            </div>
          ))
        ) : (
          <DividerAddButton onAdd={onAdd} ariaLabel="Add chart below" />
        )}
      </div>
    </div>
  );
};

interface ColumnDividerProps {
  onAdd: () => void;
  onResizeStart?: (clientX: number) => void;
  onEdgeResizeStart?: (clientX: number) => void;
  onKeyboardNudge?: (delta: number) => void;
  onEdgeKeyboardNudge?: (delta: number) => void;
  onAutoFit?: () => void;
  percentLeft?: number;
  isActive?: boolean;
  buttonSegments?: DividerButtonSegment[];
}

// Corner handle for resizing both row and column simultaneously
interface CornerHandleProps {
  onResizeStart: (clientX: number, clientY: number) => void;
  isActive?: boolean;
}

const CornerHandle: React.FC<CornerHandleProps> = ({ onResizeStart, isActive = false }) => {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      style={{ pointerEvents: 'auto' }}
    >
      <div
        className={`w-3 h-3 rounded-full cursor-nwse-resize transition-all ${
          isActive ? 'bg-blue-500 scale-125' : 'bg-gray-400 hover:bg-gray-500'
        }`}
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onResizeStart(e.clientX, e.clientY);
        }}
        title="Drag to resize both dimensions"
        role="separator"
        aria-label="Resize corner"
      />
    </div>
  );
};

const ColumnDivider: React.FC<ColumnDividerProps> = ({
  onAdd,
  onResizeStart,
  onKeyboardNudge,
  onEdgeResizeStart,
  onEdgeKeyboardNudge,
  onAutoFit,
  percentLeft,
  isActive = false,
  buttonSegments,
}) => {
  const isBetweenResizable =
    typeof onResizeStart === 'function' &&
    typeof onKeyboardNudge === 'function' &&
    typeof onAutoFit === 'function' &&
    typeof percentLeft === 'number';
  const isEdgeResizable = typeof onEdgeResizeStart === 'function';
  const isResizable = isBetweenResizable || isEdgeResizable;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onAdd();
    } else if (event.key === 'ArrowRight' && isBetweenResizable && onKeyboardNudge) {
      event.preventDefault();
      onKeyboardNudge(COLUMN_KEYBOARD_STEP);
    } else if (event.key === 'ArrowLeft' && isBetweenResizable && onKeyboardNudge) {
      event.preventDefault();
      onKeyboardNudge(-COLUMN_KEYBOARD_STEP);
    } else if (event.key === 'ArrowRight' && isEdgeResizable && onEdgeKeyboardNudge) {
      event.preventDefault();
      onEdgeKeyboardNudge(COLUMN_KEYBOARD_STEP);
    } else if (event.key === 'ArrowLeft' && isEdgeResizable && onEdgeKeyboardNudge) {
      event.preventDefault();
      onEdgeKeyboardNudge(-COLUMN_KEYBOARD_STEP);
    }
  };

  return (
    <div
      role="separator"
      aria-orientation="vertical"
      {...(isBetweenResizable
        ? {
            'aria-valuenow': Math.round(percentLeft!),
            'aria-valuemin': 0,
            'aria-valuemax': 100,
            'aria-label': 'Resize charts horizontally',
          }
        : isEdgeResizable
          ? {
              'aria-label': 'Resize column width',
            }
          : {
              'aria-label': 'Add chart to the right',
              'aria-disabled': true,
            })}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onClick={(event) => {
        if (isResizable || (event.target as HTMLElement).closest('button')) {
          return;
        }
        event.preventDefault();
        onAdd();
      }}
      onDoubleClick={(event) => {
        if ((event.target as HTMLElement).closest('button')) {
          return;
        }
        event.preventDefault();
        if (isResizable && onAutoFit) {
          onAutoFit();
        } else {
          onAdd();
        }
      }}
      onMouseDown={(event) => {
        if ((event.target as HTMLElement).closest('button')) {
          return;
        }
        if (event.button !== 0) {
          return;
        }
        event.preventDefault();
        if (isBetweenResizable && onResizeStart) {
          onResizeStart(event.clientX);
        } else if (isEdgeResizable && onEdgeResizeStart) {
          onEdgeResizeStart(event.clientX);
        }
      }}
      className={`group relative flex h-full w-full ${
        isResizable ? 'cursor-col-resize' : 'cursor-pointer'
      } select-none flex-col items-center justify-center outline-none transition-shadow duration-150 focus-visible:ring-2 focus-visible:ring-blue-300/60 ${
        isActive ? 'ring-2 ring-blue-300/60' : ''
      }`}
      style={{
        width: COLUMN_DIVIDER_TRACK,
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
      }}
    >
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-center py-4">
        <div
          className={`mx-auto w-1 rounded-full transition-colors duration-150 ${
            isActive ? 'bg-[#CBD1DB]' : 'bg-[#E4E6EA]'
          } group-hover:bg-[#CBD1DB] group-focus-within:bg-[#CBD1DB]`}
          style={{ flex: 1 }}
        />
      </div>
      <div
        className={`${
          buttonSegments && buttonSegments.length > 0 ? 'grid h-full' : 'flex'
        } w-full flex-1 flex-col items-center justify-center`}
        style={
          buttonSegments && buttonSegments.length > 0
            ? {
                gridTemplateRows: buttonSegments
                  .map((segment) => (segment.size ? `${segment.size}px` : '1fr'))
                  .join(' '),
              }
            : undefined
        }
      >
        {buttonSegments && buttonSegments.length > 0 ? (
          buttonSegments.map((segment) => (
            <div key={segment.key} className="flex items-center justify-center px-0.5">
              <DividerAddButton onAdd={segment.onAdd} ariaLabel="Add chart to the right" />
            </div>
          ))
        ) : (
          <DividerAddButton onAdd={onAdd} ariaLabel="Add chart to the right" />
        )}
      </div>
    </div>
  );
};

function ChartGrid({ protocols, onUpdateInverters, onScrollToPoint, onRemoveInverter, onSelectPointsToggle, selectPointsOpen, callbacksRef, onActiveChartSelectedPointsChange, onActiveChartPositionChange }: ChartGridProps) {
  const [charts, setCharts] = useState<ChartData[]>([
    { id: 'chart-0', selectedPoints: new Map(), row: 0, col: 0 }
  ]);
  const [nextChartId, setNextChartId] = useState(1);
  const [activeChartId, setActiveChartId] = useState<string>('chart-0');
  const [columnWidths, setColumnWidths] = useState<Map<number, number>>(new Map([[0, DEFAULT_COLUMN_WIDTH]]));
  const [rowHeights, setRowHeights] = useState<Map<number, number>>(new Map([[0, DEFAULT_ROW_HEIGHT]]));
  const [activeRowSeparator, setActiveRowSeparator] = useState<number | null>(null);
  const [activeColSeparator, setActiveColSeparator] = useState<number | null>(null);
  const [activeCorner, setActiveCorner] = useState<{row: number, col: number} | null>(null);
  const [showTutorialModal, setShowTutorialModal] = useState<boolean>(false);
  type RowResizeState =
    | {
        mode: 'between';
        startY: number;
        aboveRow: number;
        belowRow: number;
        initialAbove: number;
        initialBelow: number;
        total: number;
      }
    | {
        mode: 'edge';
        startY: number;
        row: number;
        initialHeight: number;
      };

  type ColumnResizeState =
    | {
        mode: 'between';
        startX: number;
        leftCol: number;
        rightCol: number;
        initialLeft: number;
        initialRight: number;
        total: number;
      }
    | {
        mode: 'edge';
        startX: number;
        col: number;
        initialWidth: number;
      };

  type CornerResizeState = {
    startX: number;
    startY: number;
    aboveRow: number;
    belowRow: number;
    leftCol: number;
    rightCol: number;
    initialAboveHeight: number;
    initialBelowHeight: number;
    initialLeftWidth: number;
    initialRightWidth: number;
    totalHeight: number;
    totalWidth: number;
  };

  const rowResizeStartRef = React.useRef<RowResizeState | null>(null);
  const columnResizeStartRef = React.useRef<ColumnResizeState | null>(null);
  const cornerResizeStartRef = React.useRef<CornerResizeState | null>(null);
  const [justAddedChartId, setJustAddedChartId] = useState<string | null>(null);
  const addAnimationTimeoutRef = React.useRef<number | null>(null);
  const chartRefsMap = React.useRef<Map<string, HTMLDivElement>>(new Map());

  // Crosshair state - shared across all charts (null when not hovering)
  const [crosshairX, setCrosshairX] = useState<number | null>(null);

  // Drag-and-drop state for moving data points between charts
  const [draggedData, setDraggedData] = useState<{
    type: 'legend' | 'categorical';
    pointKey: string;
    sourceChartId: string;
    inverters: Set<string>;
  } | null>(null);
  const [dropTargetChartId, setDropTargetChartId] = useState<string | null>(null);

  // Notify parent whenever active chart's selection changes
  React.useEffect(() => {
    const activeChart = charts.find(c => c.id === activeChartId);
    if (activeChart) {
      onActiveChartSelectedPointsChange(new Map(activeChart.selectedPoints));
    }
  }, [charts, activeChartId, onActiveChartSelectedPointsChange]);

  // Notify parent of active chart position
  React.useEffect(() => {
    const updateActiveChartPosition = () => {
      const activeChartElement = chartRefsMap.current.get(activeChartId);
      if (activeChartElement) {
        const rect = activeChartElement.getBoundingClientRect();
        onActiveChartPositionChange(rect);
      } else {
        onActiveChartPositionChange(null);
      }
    };

    updateActiveChartPosition();

    // Also update on scroll and resize
    window.addEventListener('scroll', updateActiveChartPosition, true);
    window.addEventListener('resize', updateActiveChartPosition);

    return () => {
      window.removeEventListener('scroll', updateActiveChartPosition, true);
      window.removeEventListener('resize', updateActiveChartPosition);
    };
  }, [activeChartId, charts, columnWidths, rowHeights, onActiveChartPositionChange]);

  // Initialize callbacks ref synchronously before paint
  React.useLayoutEffect(() => {
    callbacksRef.current = {
      getActiveChartSelectedPoints: () => {
        const activeChart = charts.find(c => c.id === activeChartId);
        return activeChart ? new Map(activeChart.selectedPoints) : new Map();
      },
      togglePointForActiveChart: (pointKey: string) => {
        console.log('togglePointForActiveChart called, activeChartId:', activeChartId);
        setCharts(prev => {
          const result = prev.map(c => {
            if (c.id === activeChartId) {
              const newSelected = new Map(c.selectedPoints);
              console.log('Current selected points:', newSelected.size);
              if (newSelected.has(pointKey)) {
                newSelected.delete(pointKey);
                console.log('Deleted point, new size:', newSelected.size);
              } else {
                const defaultInverters = new Set(['001']);
                newSelected.set(pointKey, defaultInverters);
                console.log('Added point, new size:', newSelected.size);
              }
              return { ...c, selectedPoints: newSelected };
            }
            return c;
          });
          return result;
        });
      },
      updateInvertersForActiveChart: (pointKey: string, inverters: Set<string>) => {
        console.log('updateInvertersForActiveChart called, activeChartId:', activeChartId, 'inverters:', inverters);
        setCharts(prev => {
          const result = prev.map(c => {
            if (c.id === activeChartId) {
              const newSelected = new Map(c.selectedPoints);
              if (inverters.size === 0) {
                newSelected.delete(pointKey);
              } else {
                newSelected.set(pointKey, inverters);
              }
              console.log('Updated chart, selected points size:', newSelected.size);
              return { ...c, selectedPoints: newSelected };
            }
            return c;
          });
          return result;
        });
      }
    };
  }, [charts, activeChartId, callbacksRef]);

  React.useEffect(() => {
    if (typeof ResizeObserver === 'undefined') {
      return undefined;
    }

    const observer = new ResizeObserver((entries) => {
      const updates = new Map<number, number>();
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        const chartId = target.getAttribute('data-chart-id');
        if (!chartId) {
          return;
        }
        const chart = charts.find((c) => c.id === chartId);
        if (!chart) {
          return;
        }
        const categoricalStack = target.querySelector<HTMLElement>('[data-categorical-stack]');
        const catHeight = categoricalStack ? categoricalStack.scrollHeight : 0;
        if (catHeight <= 0) {
          return;
        }
        const desiredHeight = Math.max(DEFAULT_ROW_HEIGHT + catHeight + 24, MIN_ROW_HEIGHT);
        updates.set(chart.row, Math.max(desiredHeight, updates.get(chart.row) ?? 0));
      });

      if (updates.size === 0) {
        return;
      }

      setRowHeights((prev) => {
        let changed = false;
        const next = new Map(prev);
        updates.forEach((height, row) => {
          const current = next.get(row) ?? DEFAULT_ROW_HEIGHT;
          if (height > current + 1) {
            next.set(row, height);
            changed = true;
          }
        });
        return changed ? next : prev;
      });
    });

    chartRefsMap.current.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [charts, setRowHeights]);

  const getRowHeight = React.useCallback(
    (row: number) => rowHeights.get(row) ?? DEFAULT_ROW_HEIGHT,
    [rowHeights]
  );

  const getColumnWidth = React.useCallback(
    (col: number) => columnWidths.get(col) ?? DEFAULT_COLUMN_WIDTH,
    [columnWidths]
  );

  const setSingleRowHeight = React.useCallback((row: number, newHeight: number) => {
    const clamped = Math.max(MIN_ROW_HEIGHT, newHeight);
    setRowHeights(prev => {
      const next = new Map(prev);
      next.set(row, clamped);
      return next;
    });
  }, []);

  const setSingleColumnWidth = React.useCallback((col: number, newWidth: number) => {
    const clamped = Math.max(MIN_COLUMN_WIDTH, newWidth);
    setColumnWidths(prev => {
      const next = new Map(prev);
      next.set(col, clamped);
      return next;
    });
  }, []);

  const triggerAddAnimation = React.useCallback((chartId: string) => {
    if (addAnimationTimeoutRef.current !== null) {
      window.clearTimeout(addAnimationTimeoutRef.current);
    }
    setJustAddedChartId(chartId);
    addAnimationTimeoutRef.current = window.setTimeout(() => {
      setJustAddedChartId(null);
      addAnimationTimeoutRef.current = null;
    }, 400);
  }, []);

  React.useEffect(() => {
    return () => {
      if (addAnimationTimeoutRef.current !== null) {
        window.clearTimeout(addAnimationTimeoutRef.current);
      }
    };
  }, []);

  const applyRowHeights = React.useCallback((aboveRow: number, belowRow: number, newAbove: number, total: number) => {
    if (total <= MIN_ROW_HEIGHT * 2) {
      const equalSplit = total / 2;
      setRowHeights(prev => {
        const next = new Map(prev);
        next.set(aboveRow, equalSplit);
        next.set(belowRow, total - equalSplit);
        return next;
      });
      return;
    }

    const minAbove = MIN_ROW_HEIGHT;
    const maxAbove = total - MIN_ROW_HEIGHT;
    const clampedAbove = Math.min(Math.max(newAbove, minAbove), maxAbove);
    const clampedBelow = total - clampedAbove;
    setRowHeights(prev => {
      const next = new Map(prev);
      next.set(aboveRow, clampedAbove);
      next.set(belowRow, clampedBelow);
      return next;
    });
  }, []);

  const applyColumnWidths = React.useCallback((leftCol: number, rightCol: number, newLeft: number, total: number) => {
    if (total <= MIN_COLUMN_WIDTH * 2) {
      const equalSplit = total / 2;
      setColumnWidths(prev => {
        const next = new Map(prev);
        next.set(leftCol, equalSplit);
        next.set(rightCol, total - equalSplit);
        return next;
      });
      return;
    }

    const minLeft = MIN_COLUMN_WIDTH;
    const maxLeft = total - MIN_COLUMN_WIDTH;
    const clampedLeft = Math.min(Math.max(newLeft, minLeft), maxLeft);
    const clampedRight = total - clampedLeft;
    setColumnWidths(prev => {
      const next = new Map(prev);
      next.set(leftCol, clampedLeft);
      next.set(rightCol, clampedRight);
      return next;
    });
  }, []);

  const handleRowResizeStart = (aboveRow: number, belowRow: number, clientY: number) => {
    if (belowRow === undefined) return;
    const initialAbove = getRowHeight(aboveRow);
    const initialBelow = getRowHeight(belowRow);
    rowResizeStartRef.current = {
      mode: 'between',
      startY: clientY,
      aboveRow,
      belowRow,
      initialAbove,
      initialBelow,
      total: initialAbove + initialBelow
    };
    setActiveRowSeparator(aboveRow);
  };

  const handleRowEdgeResizeStart = (row: number, clientY: number) => {
    rowResizeStartRef.current = {
      mode: 'edge',
      startY: clientY,
      row,
      initialHeight: getRowHeight(row),
    };
    setActiveRowSeparator(row);
  };

  React.useEffect(() => {
    if (activeRowSeparator === null || !rowResizeStartRef.current) return;

    const startData = rowResizeStartRef.current;

    const handleMouseMove = (event: MouseEvent) => {
      const delta = event.clientY - startData.startY;
      if (startData.mode === 'between') {
        const proposedAbove = startData.initialAbove + delta;
        applyRowHeights(startData.aboveRow, startData.belowRow, proposedAbove, startData.total);
      } else {
        setSingleRowHeight(startData.row, startData.initialHeight + delta);
      }
    };

    const handleMouseUp = () => {
      setActiveRowSeparator(null);
      rowResizeStartRef.current = null;
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [activeRowSeparator, applyRowHeights, setSingleRowHeight]);

  const handleColumnResizeStart = (leftCol: number, rightCol: number, clientX: number) => {
    if (rightCol === undefined) return;
    const initialLeft = getColumnWidth(leftCol);
    const initialRight = getColumnWidth(rightCol);
    columnResizeStartRef.current = {
      mode: 'between',
      startX: clientX,
      leftCol,
      rightCol,
      initialLeft,
      initialRight,
      total: initialLeft + initialRight,
    };
    setActiveColSeparator(leftCol);
  };

  const handleColumnEdgeResizeStart = (col: number, clientX: number) => {
    columnResizeStartRef.current = {
      mode: 'edge',
      startX: clientX,
      col,
      initialWidth: getColumnWidth(col),
    };
    setActiveColSeparator(col);
  };

  React.useEffect(() => {
    if (activeColSeparator === null || !columnResizeStartRef.current) return;

    const startData = columnResizeStartRef.current;

    const handleMouseMove = (event: MouseEvent) => {
      const delta = event.clientX - startData.startX;
      if (startData.mode === 'between') {
        const proposedLeft = startData.initialLeft + delta;
        applyColumnWidths(startData.leftCol, startData.rightCol, proposedLeft, startData.total);
      } else {
        setSingleColumnWidth(startData.col, startData.initialWidth + delta);
      }
    };

    const handleMouseUp = () => {
      setActiveColSeparator(null);
      columnResizeStartRef.current = null;
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [activeColSeparator, applyColumnWidths, setSingleColumnWidth]);

  // Handler for corner resize (both row and column simultaneously)
  const handleCornerResizeStart = (aboveRow: number, belowRow: number, leftCol: number, rightCol: number, clientX: number, clientY: number) => {
    const initialAboveHeight = getRowHeight(aboveRow);
    const initialBelowHeight = getRowHeight(belowRow);
    const initialLeftWidth = getColumnWidth(leftCol);
    const initialRightWidth = getColumnWidth(rightCol);

    cornerResizeStartRef.current = {
      startX: clientX,
      startY: clientY,
      aboveRow,
      belowRow,
      leftCol,
      rightCol,
      initialAboveHeight,
      initialBelowHeight,
      initialLeftWidth,
      initialRightWidth,
      totalHeight: initialAboveHeight + initialBelowHeight,
      totalWidth: initialLeftWidth + initialRightWidth,
    };

    setActiveCorner({ row: aboveRow, col: leftCol });
  };

  // Handler for edge corner resize (one edge, one between)
  const handleCornerEdgeResizeStart = (
    edgeType: 'row' | 'col',
    rowOrRowAbove: number,
    colOrColLeft: number,
    rowBelowOrColRight: number,
    clientX: number,
    clientY: number
  ) => {
    if (edgeType === 'row') {
      // Row is between two rows, column is at edge
      const aboveRow = rowOrRowAbove;
      const belowRow = rowBelowOrColRight;
      const col = colOrColLeft;

      cornerResizeStartRef.current = {
        startX: clientX,
        startY: clientY,
        aboveRow,
        belowRow,
        leftCol: col,
        rightCol: col, // Same col for edge
        initialAboveHeight: getRowHeight(aboveRow),
        initialBelowHeight: getRowHeight(belowRow),
        initialLeftWidth: getColumnWidth(col),
        initialRightWidth: 0, // No right col
        totalHeight: getRowHeight(aboveRow) + getRowHeight(belowRow),
        totalWidth: 0, // Not used for edge
      };
      setActiveCorner({ row: aboveRow, col });
    } else {
      // Column is between two cols, row is at edge
      const row = rowOrRowAbove;
      const leftCol = colOrColLeft;
      const rightCol = rowBelowOrColRight;

      cornerResizeStartRef.current = {
        startX: clientX,
        startY: clientY,
        aboveRow: row,
        belowRow: row, // Same row for edge
        leftCol,
        rightCol,
        initialAboveHeight: getRowHeight(row),
        initialBelowHeight: 0, // No below row
        initialLeftWidth: getColumnWidth(leftCol),
        initialRightWidth: getColumnWidth(rightCol),
        totalHeight: 0, // Not used for edge
        totalWidth: getColumnWidth(leftCol) + getColumnWidth(rightCol),
      };
      setActiveCorner({ row, col: leftCol });
    }
  };

  // Handler for terminal corner resize (both dimensions are edges)
  const handleCornerTerminalResizeStart = (row: number, col: number, clientX: number, clientY: number) => {
    cornerResizeStartRef.current = {
      startX: clientX,
      startY: clientY,
      aboveRow: row,
      belowRow: row, // Same for edge
      leftCol: col,
      rightCol: col, // Same for edge
      initialAboveHeight: getRowHeight(row),
      initialBelowHeight: 0,
      initialLeftWidth: getColumnWidth(col),
      initialRightWidth: 0,
      totalHeight: 0,
      totalWidth: 0,
    };
    setActiveCorner({ row, col });
  };

  // Update the corner resize effect to handle edge cases
  React.useEffect(() => {
    if (activeCorner === null || !cornerResizeStartRef.current) return;

    const startData = cornerResizeStartRef.current;

    const handleMouseMove = (event: MouseEvent) => {
      const deltaX = event.clientX - startData.startX;
      const deltaY = event.clientY - startData.startY;

      // Resize row (either between or edge)
      if (startData.totalHeight > 0) {
        // Between two rows
        const proposedAboveHeight = startData.initialAboveHeight + deltaY;
        applyRowHeights(startData.aboveRow, startData.belowRow, proposedAboveHeight, startData.totalHeight);
      } else {
        // Edge row
        setSingleRowHeight(startData.aboveRow, startData.initialAboveHeight + deltaY);
      }

      // Resize column (either between or edge)
      if (startData.totalWidth > 0) {
        // Between two columns
        const proposedLeftWidth = startData.initialLeftWidth + deltaX;
        applyColumnWidths(startData.leftCol, startData.rightCol, proposedLeftWidth, startData.totalWidth);
      } else {
        // Edge column
        setSingleColumnWidth(startData.leftCol, startData.initialLeftWidth + deltaX);
      }
    };

    const handleMouseUp = () => {
      setActiveCorner(null);
      cornerResizeStartRef.current = null;
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [activeCorner, applyRowHeights, applyColumnWidths, setSingleRowHeight, setSingleColumnWidth]);

  const handleRowKeyboardAdjust = (aboveRow: number, belowRow: number, delta: number) => {
    const currentAbove = getRowHeight(aboveRow);
    const currentBelow = getRowHeight(belowRow);
    const total = currentAbove + currentBelow;
    applyRowHeights(aboveRow, belowRow, currentAbove + delta, total);
  };

  const handleRowAutoFit = (aboveRow: number, belowRow: number) => {
    const currentAbove = getRowHeight(aboveRow);
    const currentBelow = getRowHeight(belowRow);
    const total = currentAbove + currentBelow;
    const half = total / 2;
    applyRowHeights(aboveRow, belowRow, half, total);
  };

  const handleRowEdgeKeyboardAdjust = (row: number, delta: number) => {
    const current = getRowHeight(row);
    setSingleRowHeight(row, current + delta);
  };

  const handleColumnKeyboardAdjust = (leftCol: number, rightCol: number, delta: number) => {
    const currentLeft = getColumnWidth(leftCol);
    const currentRight = getColumnWidth(rightCol);
    const total = currentLeft + currentRight;
    applyColumnWidths(leftCol, rightCol, currentLeft + delta, total);
  };

  const handleColumnAutoFit = (leftCol: number, rightCol: number) => {
    const currentLeft = getColumnWidth(leftCol);
    const currentRight = getColumnWidth(rightCol);
    const total = currentLeft + currentRight;
    const half = total / 2;
    applyColumnWidths(leftCol, rightCol, half, total);
  };

  const handleColumnEdgeKeyboardAdjust = (col: number, delta: number) => {
    const current = getColumnWidth(col);
    setSingleColumnWidth(col, current + delta);
  };

  const handleAddChart = (chartId: string, direction: 'top' | 'bottom' | 'left' | 'right') => {
    const chart = charts.find(c => c.id === chartId);
    if (!chart) return;

    let newRow = chart.row;
    let newCol = chart.col;

    // Check if target position is already occupied
    const isPositionOccupied = (row: number, col: number) => {
      return charts.some(c => c.row === row && c.col === col);
    };

    switch (direction) {
      case 'top':
        newRow = chart.row - 1;
        // Check if target position is occupied
        if (isPositionOccupied(newRow, chart.col)) {
          // First, try to find an empty spot in existing rows of this column
          const allRows = new Set(charts.map(c => c.row));
          const sortedRows = Array.from(allRows).sort((a, b) => a - b);
          let foundEmpty = false;
          for (const row of sortedRows) {
            if (row < chart.row && !isPositionOccupied(row, chart.col)) {
              newRow = row;
              foundEmpty = true;
              break;
            }
          }
          if (!foundEmpty) {
            // No empty row found, shift all charts up
            setCharts(prev => prev.map(c => 
              c.row < chart.row ? { ...c, row: c.row - 1 } : c
            ));
            newRow = chart.row - 1;
          }
        }
        break;
      case 'bottom':
        newRow = chart.row + 1;
        // Check if target position is occupied
        if (isPositionOccupied(newRow, chart.col)) {
          // First, try to find an empty spot in existing rows of this column
          const allRows = new Set(charts.map(c => c.row));
          const sortedRows = Array.from(allRows).sort((a, b) => a - b);
          let foundEmpty = false;
          for (const row of sortedRows) {
            if (row > chart.row && !isPositionOccupied(row, chart.col)) {
              newRow = row;
              foundEmpty = true;
              break;
            }
          }
          if (!foundEmpty) {
            // Find the next empty row (may be beyond existing rows)
            let emptyRow = newRow;
            while (isPositionOccupied(emptyRow, chart.col)) {
              emptyRow++;
            }
            newRow = emptyRow;
          }
        }
        break;
      case 'left':
        newCol = chart.col - 1;
        // Check if target position is occupied
        if (isPositionOccupied(chart.row, newCol)) {
          // First, try to find an empty spot in existing columns of this row
          const allCols = new Set(charts.map(c => c.col));
          const sortedCols = Array.from(allCols).sort((a, b) => a - b);
          let foundEmpty = false;
          for (const col of sortedCols) {
            if (col < chart.col && !isPositionOccupied(chart.row, col)) {
              newCol = col;
              foundEmpty = true;
              break;
            }
          }
          if (!foundEmpty) {
            // No empty column found, shift all charts left
            setCharts(prev => prev.map(c => 
              c.col < chart.col ? { ...c, col: c.col - 1 } : c
            ));
            newCol = chart.col - 1;
          }
        }
        break;
      case 'right':
        newCol = chart.col + 1;
        // Check if target position is occupied
        if (isPositionOccupied(chart.row, newCol)) {
          // First, try to find an empty spot in existing columns of this row
          const allCols = new Set(charts.map(c => c.col));
          const sortedCols = Array.from(allCols).sort((a, b) => a - b);
          let foundEmpty = false;
          for (const col of sortedCols) {
            if (col > chart.col && !isPositionOccupied(chart.row, col)) {
              newCol = col;
              foundEmpty = true;
              break;
            }
          }
          if (!foundEmpty) {
            // Find the next empty column (may be beyond existing columns)
            let emptyCol = newCol;
            while (isPositionOccupied(chart.row, emptyCol)) {
              emptyCol++;
            }
            newCol = emptyCol;
          }
        }
        break;
    }

    const newChartId = `chart-${nextChartId}`;
    const newChart: ChartData = {
      id: newChartId,
      selectedPoints: new Map(),
      row: newRow,
      col: newCol
    };

    // Initialize column width and row height if they don't exist
    if (!columnWidths.has(newCol)) {
      setColumnWidths(prev => new Map(prev).set(newCol, DEFAULT_COLUMN_WIDTH));
    }
    if (!rowHeights.has(newRow)) {
      setRowHeights(prev => new Map(prev).set(newRow, DEFAULT_ROW_HEIGHT));
    }

    setCharts(prev => [...prev, newChart]);
    setNextChartId(prev => prev + 1);
    // Make the newly added chart active
    setActiveChartId(newChartId);
    triggerAddAnimation(newChartId);
  };

  const handleAddChartBelowRow = (row: number, col?: number) => {
    const chartsInRow = charts.filter(c => c.row === row);
    if (chartsInRow.length === 0) {
      return;
    }
    let target: ChartData | undefined;
    if (typeof col === 'number') {
      target = chartsInRow.find(c => c.col === col);
    }
    if (!target) {
      target = chartsInRow.find(c => c.id === activeChartId) ?? chartsInRow[0];
    }
    handleAddChart(target.id, 'bottom');
  };

  const handleAddChartRightOfColumn = (col: number, row?: number) => {
    const chartsInColumn = charts.filter(c => c.col === col);
    if (chartsInColumn.length === 0) {
      return;
    }
    let target: ChartData | undefined;
    if (typeof row === 'number') {
      target = chartsInColumn.find(c => c.row === row);
    }
    if (!target) {
      target = chartsInColumn.find(c => c.id === activeChartId) ?? chartsInColumn[0];
    }
    handleAddChart(target.id, 'right');
  };

  const handleDeleteChart = (chartId: string) => {
    setCharts(prev => {
      const filtered = prev.filter(c => c.id !== chartId);
      
      // If this was the last chart, create a new blank one
      if (filtered.length === 0) {
        setActiveChartId('chart-0');
        setColumnWidths(new Map([[0, DEFAULT_COLUMN_WIDTH]]));
        setRowHeights(new Map([[0, DEFAULT_ROW_HEIGHT]]));
        return [{ id: 'chart-0', selectedPoints: new Map(), row: 0, col: 0 }];
      }
      
      // If we deleted the active chart, switch to the first remaining chart
      if (chartId === activeChartId) {
        setActiveChartId(filtered[0].id);
      }
      
      // Compact the grid: renormalize positions to remove gaps
      const rows = new Set(filtered.map(c => c.row));
      const cols = new Set(filtered.map(c => c.col));
      const sortedRows = Array.from(rows).sort((a, b) => a - b);
      const sortedCols = Array.from(cols).sort((a, b) => a - b);
      
      // Create mapping from old positions to new compacted positions
      const rowMap = new Map(sortedRows.map((row, idx) => [row, idx]));
      const colMap = new Map(sortedCols.map((col, idx) => [col, idx]));
      
      // Apply compaction
      return filtered.map(c => ({
        ...c,
        row: rowMap.get(c.row) ?? c.row,
        col: colMap.get(c.col) ?? c.col
      }));
    });
  };

  const handleUpdateInverters = (chartId: string, pointKey: string, inverters: Set<string>) => {
    setCharts(prev => prev.map(c => 
      c.id === chartId 
        ? { ...c, selectedPoints: new Map(c.selectedPoints).set(pointKey, inverters) }
        : c
    ));
    onUpdateInverters(chartId, pointKey, inverters);
  };



  const handleRemoveInverter = (chartId: string, pointKey: string, inverterSN: string) => {
    setCharts(prev => prev.map(c => {
      if (c.id === chartId) {
        const newSelected = new Map(c.selectedPoints);
        const inverters = newSelected.get(pointKey);
        if (inverters) {
          const newInverters = new Set(inverters);
          newInverters.delete(inverterSN);
          if (newInverters.size === 0) {
            newSelected.delete(pointKey);
          } else {
            newSelected.set(pointKey, newInverters);
          }
          return { ...c, selectedPoints: newSelected };
        }
      }
      return c;
    }));
    onRemoveInverter(chartId, pointKey, inverterSN);
  };

  // Drag-and-drop handlers for moving data points between charts
  const handleDragStart = (chartId: string, pointKey: string, inverters: Set<string>) => {
    setDraggedData({
      type: 'legend', // Can be 'legend' or 'categorical'
      pointKey,
      sourceChartId: chartId,
      inverters
    });
  };

  const handleDragEnd = () => {
    setDraggedData(null);
    setDropTargetChartId(null);
  };

  const handleDragOver = (e: React.DragEvent, chartId: string) => {
    if (!draggedData) return;

    e.preventDefault();
    e.stopPropagation();
    setDropTargetChartId(chartId);
  };

  const handleDragLeave = (e: React.DragEvent, chartId: string) => {
    // Only clear if leaving the chart entirely
    const relatedTarget = e.relatedTarget as HTMLElement;
    const chartElement = chartRefsMap.current.get(chartId);
    if (chartElement && !chartElement.contains(relatedTarget)) {
      setDropTargetChartId(null);
    }
  };

  const handleDrop = (e: React.DragEvent, targetChartId: string) => {
    e.preventDefault();
    e.stopPropagation();

    if (!draggedData) return;

    const { pointKey, sourceChartId, inverters } = draggedData;

    // Don't do anything if dropping on the same chart
    if (sourceChartId === targetChartId) {
      handleDragEnd();
      return;
    }

    // Move the data point from source to target chart
    setCharts(prev => prev.map(c => {
      if (c.id === sourceChartId) {
        // Remove from source chart
        const newSelected = new Map(c.selectedPoints);
        newSelected.delete(pointKey);
        return { ...c, selectedPoints: newSelected };
      } else if (c.id === targetChartId) {
        // Add to target chart
        const newSelected = new Map(c.selectedPoints);
        newSelected.set(pointKey, new Set(inverters));
        return { ...c, selectedPoints: newSelected };
      }
      return c;
    }));

    handleDragEnd();
  };

  // Calculate grid dimensions
  const minRow = Math.min(...charts.map(c => c.row), 0);
  const minCol = Math.min(...charts.map(c => c.col), 0);

  // Normalize to start at 0,0
  const normalizedCharts = charts.map(c => ({
    ...c,
    row: c.row - minRow,
    col: c.col - minCol
  }));

  const chartPositionMap = React.useMemo(() => {
    const map = new Map<string, ChartData>();
    charts.forEach(chart => {
      map.set(`${chart.row}:${chart.col}`, chart);
    });
    return map;
  }, [charts]);

  // Get all unique normalized rows and columns
  const uniqueRows = Array.from(new Set(normalizedCharts.map(c => c.row))).sort((a, b) => a - b);
  const uniqueCols = Array.from(new Set(normalizedCharts.map(c => c.col))).sort((a, b) => a - b);

  const rowIndexMap = new Map<number, number>();
  const rowTracks: string[] = [];
  uniqueRows.forEach((normalizedRow, index) => {
    rowIndexMap.set(normalizedRow, index);
    const originalRow = normalizedRow + minRow;
    rowTracks.push(`${getRowHeight(originalRow)}px`);
    if (index < uniqueRows.length - 1) {
      rowTracks.push(`${ROW_DIVIDER_TRACK}px`);
    }
  });
  if (uniqueRows.length > 0) {
    rowTracks.push(`${ROW_DIVIDER_TRACK}px`);
  }
  const gridTemplateRows = rowTracks.length > 0 ? rowTracks.join(' ') : '1fr';

  const colIndexMap = new Map<number, number>();
  const colTracks: string[] = [];
  uniqueCols.forEach((normalizedCol, index) => {
    colIndexMap.set(normalizedCol, index);
    const originalCol = normalizedCol + minCol;
    colTracks.push(`${getColumnWidth(originalCol)}px`);
    if (index < uniqueCols.length - 1) {
      colTracks.push(`${COLUMN_DIVIDER_TRACK}px`);
    }
  });
  if (uniqueCols.length > 0) {
    colTracks.push(`${COLUMN_DIVIDER_TRACK}px`);
  }
  const gridTemplateCols = colTracks.length > 0 ? colTracks.join(' ') : '1fr';

  return (
    <div className="w-full h-full overflow-auto">
      <div
        className="grid p-4"
        style={{
          gridTemplateRows,
          gridTemplateColumns: gridTemplateCols,
          rowGap: 0,
          columnGap: 0,
        }}
      >
        {normalizedCharts.map(chart => {
          const isDropTarget = dropTargetChartId === chart.id;
          const isEmpty = chart.selectedPoints.size === 0;

          return (
          <div
            key={chart.id}
            ref={(el) => {
              if (el) {
                chartRefsMap.current.set(chart.id, el);
              } else {
                chartRefsMap.current.delete(chart.id);
              }
            }}
            className={`relative border rounded-lg bg-white shadow-sm overflow-visible transition-all cursor-pointer ${
              activeChartId === chart.id ? 'border-blue-500 border-2 ring-2 ring-blue-200' : 'border-gray-300'
            } ${justAddedChartId === chart.id ? 'animate-chart-expand' : ''} ${
              isDropTarget ? 'ring-4 ring-green-300 border-green-500' : ''
            } ${isEmpty && draggedData ? 'bg-green-50' : ''}`}
            style={{
              gridRow: (rowIndexMap.get(chart.row) ?? 0) * 2 + 1,
              gridColumn: (colIndexMap.get(chart.col) ?? 0) * 2 + 1
            }}
            data-chart-id={chart.id}
            onClick={(e) => {
              // Don't activate if clicking on buttons
              if ((e.target as HTMLElement).closest('button')) {
                return;
              }
              setActiveChartId(chart.id);
            }}
            onDragOver={(e) => handleDragOver(e, chart.id)}
            onDragLeave={(e) => handleDragLeave(e, chart.id)}
            onDrop={(e) => handleDrop(e, chart.id)}
          >
            <div className="chart-content h-full flex flex-col">
              <FakeChart
                selectedPoints={chart.selectedPoints}
                protocols={protocols}
                onUpdateInverters={(pointKey, inverters) => handleUpdateInverters(chart.id, pointKey, inverters)}
                onScrollToPoint={onScrollToPoint}
                onRemoveInverter={(pointKey, inverterSN) => handleRemoveInverter(chart.id, pointKey, inverterSN)}
                onSelectPointsToggle={onSelectPointsToggle}
                selectPointsOpen={selectPointsOpen}
                onDeleteChart={() => handleDeleteChart(chart.id)}
                onShowTutorial={() => setShowTutorialModal(true)}
                crosshairX={crosshairX}
                onCrosshairChange={setCrosshairX}
                onDragStart={(pointKey, inverters) => handleDragStart(chart.id, pointKey, inverters)}
                onDragEnd={handleDragEnd}
                isDragActive={draggedData !== null}
                isDropTarget={isDropTarget}
              />
            </div>
          </div>
          );
        })}
        {uniqueCols.slice(0, -1).map((normalizedCol, index) => {
          const leftOriginal = normalizedCol + minCol;
          const nextCol = uniqueCols[index + 1];
          const rightOriginal = nextCol + minCol;
          const leftWidth = getColumnWidth(leftOriginal);
          const rightWidth = getColumnWidth(rightOriginal);
          const totalWidth = leftWidth + rightWidth || 1;
          const columnButtonSegments: DividerButtonSegment[] = uniqueRows.reduce<DividerButtonSegment[]>((acc, normalizedRow) => {
            const originalRow = normalizedRow + minRow;
            if (chartPositionMap.has(`${originalRow}:${leftOriginal}`)) {
              acc.push({
                key: `col-btn-${originalRow}-${leftOriginal}`,
                onAdd: () => handleAddChartRightOfColumn(leftOriginal, originalRow),
                size: getRowHeight(originalRow),
              });
            }
            return acc;
          }, []);
          return (
            <div
              key={`col-divider-${leftOriginal}`}
              style={{
                gridRow: '1 / -1',
                gridColumn: index * 2 + 2,
                alignSelf: 'stretch',
                justifySelf: 'center'
              }}
            >
              <ColumnDivider
                onAdd={() => handleAddChartRightOfColumn(leftOriginal)}
                onResizeStart={(clientX) => handleColumnResizeStart(leftOriginal, rightOriginal, clientX)}
                onKeyboardNudge={(delta) => handleColumnKeyboardAdjust(leftOriginal, rightOriginal, delta)}
                onAutoFit={() => handleColumnAutoFit(leftOriginal, rightOriginal)}
                percentLeft={(leftWidth / totalWidth) * 100}
                isActive={activeColSeparator === leftOriginal}
                buttonSegments={columnButtonSegments}
              />
            </div>
          );
        })}
        {uniqueCols.length > 0 && (
          (() => {
            const lastNormalizedCol = uniqueCols[uniqueCols.length - 1];
            const lastOriginalCol = lastNormalizedCol + minCol;
            const terminalColumnButtonSegments: DividerButtonSegment[] = uniqueRows.reduce<DividerButtonSegment[]>((acc, normalizedRow) => {
              const originalRow = normalizedRow + minRow;
              if (chartPositionMap.has(`${originalRow}:${lastOriginalCol}`)) {
                acc.push({
                  key: `terminal-col-btn-${originalRow}-${lastOriginalCol}`,
                  onAdd: () => handleAddChartRightOfColumn(lastOriginalCol, originalRow),
                  size: getRowHeight(originalRow),
                });
              }
              return acc;
            }, []);

            return (
              <div
                key={`col-divider-${lastOriginalCol}-terminal`}
                style={{
                  gridRow: '1 / -1',
                  gridColumn: uniqueCols.length * 2,
                  alignSelf: 'stretch',
                  justifySelf: 'center'
                }}
              >
                <ColumnDivider
                  onAdd={() => handleAddChartRightOfColumn(lastOriginalCol)}
                  onEdgeResizeStart={(clientX) => handleColumnEdgeResizeStart(lastOriginalCol, clientX)}
                  onEdgeKeyboardNudge={(delta) => handleColumnEdgeKeyboardAdjust(lastOriginalCol, delta)}
                  isActive={activeColSeparator === lastOriginalCol}
                  buttonSegments={terminalColumnButtonSegments}
                />
              </div>
            );
          })()
        )}
        {uniqueRows.slice(0, -1).map((normalizedRow, index) => {
          const nextRow = uniqueRows[index + 1];
          const aboveOriginal = normalizedRow + minRow;
          const belowOriginal = nextRow + minRow;
          const aboveHeight = getRowHeight(aboveOriginal);
          const belowHeight = getRowHeight(belowOriginal);
          const total = aboveHeight + belowHeight || 1;
          const rowButtonSegments: DividerButtonSegment[] = uniqueCols.reduce<DividerButtonSegment[]>((acc, normalizedCol) => {
            const originalCol = normalizedCol + minCol;
            if (chartPositionMap.has(`${aboveOriginal}:${originalCol}`)) {
              acc.push({
                key: `row-btn-${aboveOriginal}-${originalCol}`,
                onAdd: () => handleAddChartBelowRow(aboveOriginal, originalCol),
                size: getColumnWidth(originalCol),
              });
            }
            return acc;
          }, []);
          return (
            <div
              key={`divider-${aboveOriginal}`}
              style={{
                gridColumn: '1 / -1',
                gridRow: index * 2 + 2,
                alignSelf: 'center',
                justifySelf: 'stretch'
              }}
            >
              <RowDivider
                onAdd={() => handleAddChartBelowRow(aboveOriginal)}
                onResizeStart={(clientY) => handleRowResizeStart(aboveOriginal, belowOriginal, clientY)}
                onKeyboardNudge={(delta) => handleRowKeyboardAdjust(aboveOriginal, belowOriginal, delta)}
                onAutoFit={() => handleRowAutoFit(aboveOriginal, belowOriginal)}
                percentAbove={(aboveHeight / total) * 100}
                isActive={activeRowSeparator === aboveOriginal}
                buttonSegments={rowButtonSegments}
              />
            </div>
          );
        })}
        {uniqueRows.length > 0 && (
          (() => {
            const lastNormalizedRow = uniqueRows[uniqueRows.length - 1];
            const lastOriginalRow = lastNormalizedRow + minRow;
            const terminalRowButtonSegments: DividerButtonSegment[] = uniqueCols.reduce<DividerButtonSegment[]>((acc, normalizedCol) => {
              const originalCol = normalizedCol + minCol;
              if (chartPositionMap.has(`${lastOriginalRow}:${originalCol}`)) {
                acc.push({
                  key: `terminal-row-btn-${lastOriginalRow}-${originalCol}`,
                  onAdd: () => handleAddChartBelowRow(lastOriginalRow, originalCol),
                  size: getColumnWidth(originalCol),
                });
              }
              return acc;
            }, []);

            return (
              <div
                key={`divider-${lastOriginalRow}-terminal`}
                style={{
                  gridColumn: '1 / -1',
                  gridRow: uniqueRows.length * 2,
                  alignSelf: 'center',
                  justifySelf: 'stretch'
                }}
              >
                <RowDivider
                  onAdd={() => handleAddChartBelowRow(lastOriginalRow)}
                  onEdgeResizeStart={(clientY) => handleRowEdgeResizeStart(lastOriginalRow, clientY)}
                  onEdgeKeyboardNudge={(delta) => handleRowEdgeKeyboardAdjust(lastOriginalRow, delta)}
                  isActive={activeRowSeparator === lastOriginalRow}
                  buttonSegments={terminalRowButtonSegments}
                />
              </div>
            );
          })()
        )}
        {/* Corner handles for diagonal resizing - Internal corners */}
        {uniqueRows.slice(0, -1).flatMap((normalizedRow, rowIndex) => {
          const aboveOriginal = normalizedRow + minRow;
          const nextRow = uniqueRows[rowIndex + 1];
          const belowOriginal = nextRow + minRow;

          return uniqueCols.slice(0, -1).map((normalizedCol, colIndex) => {
            const leftOriginal = normalizedCol + minCol;
            const nextCol = uniqueCols[colIndex + 1];
            const rightOriginal = nextCol + minCol;

            return (
              <div
                key={`corner-${aboveOriginal}-${leftOriginal}`}
                style={{
                  gridRow: rowIndex * 2 + 2,
                  gridColumn: colIndex * 2 + 2,
                  width: '16px',
                  height: '16px',
                  zIndex: 10,
                  pointerEvents: 'auto',
                }}
              >
                <CornerHandle
                  onResizeStart={(clientX, clientY) =>
                    handleCornerResizeStart(aboveOriginal, belowOriginal, leftOriginal, rightOriginal, clientX, clientY)
                  }
                  isActive={activeCorner?.row === aboveOriginal && activeCorner?.col === leftOriginal}
                />
              </div>
            );
          });
        })}
        {/* Corner handles for edge positions - Bottom-right corners of each row */}
        {uniqueRows.slice(0, -1).map((normalizedRow, rowIndex) => {
          const aboveOriginal = normalizedRow + minRow;
          const nextRow = uniqueRows[rowIndex + 1];
          const belowOriginal = nextRow + minRow;

          if (uniqueCols.length > 0) {
            const lastNormalizedCol = uniqueCols[uniqueCols.length - 1];
            const lastOriginalCol = lastNormalizedCol + minCol;

            return (
              <div
                key={`corner-edge-row-${aboveOriginal}-${lastOriginalCol}`}
                style={{
                  gridRow: rowIndex * 2 + 2,
                  gridColumn: uniqueCols.length * 2,
                  width: '16px',
                  height: '16px',
                  zIndex: 10,
                  pointerEvents: 'auto',
                }}
              >
                <CornerHandle
                  onResizeStart={(clientX, clientY) =>
                    handleCornerEdgeResizeStart('row', aboveOriginal, belowOriginal, lastOriginalCol, clientX, clientY)
                  }
                  isActive={activeCorner?.row === aboveOriginal && activeCorner?.col === lastOriginalCol}
                />
              </div>
            );
          }
          return null;
        })}
        {/* Corner handles for edge positions - Right-bottom corners of each column */}
        {uniqueCols.slice(0, -1).map((normalizedCol, colIndex) => {
          const leftOriginal = normalizedCol + minCol;
          const nextCol = uniqueCols[colIndex + 1];
          const rightOriginal = nextCol + minCol;

          if (uniqueRows.length > 0) {
            const lastNormalizedRow = uniqueRows[uniqueRows.length - 1];
            const lastOriginalRow = lastNormalizedRow + minRow;

            return (
              <div
                key={`corner-edge-col-${lastOriginalRow}-${leftOriginal}`}
                style={{
                  gridRow: uniqueRows.length * 2,
                  gridColumn: colIndex * 2 + 2,
                  width: '16px',
                  height: '16px',
                  zIndex: 10,
                  pointerEvents: 'auto',
                }}
              >
                <CornerHandle
                  onResizeStart={(clientX, clientY) =>
                    handleCornerEdgeResizeStart('col', lastOriginalRow, leftOriginal, rightOriginal, clientX, clientY)
                  }
                  isActive={activeCorner?.row === lastOriginalRow && activeCorner?.col === leftOriginal}
                />
              </div>
            );
          }
          return null;
        })}
        {/* Corner handle for the very bottom-right (terminal) corner */}
        {uniqueRows.length > 0 && uniqueCols.length > 0 && (
          (() => {
            const lastNormalizedRow = uniqueRows[uniqueRows.length - 1];
            const lastOriginalRow = lastNormalizedRow + minRow;
            const lastNormalizedCol = uniqueCols[uniqueCols.length - 1];
            const lastOriginalCol = lastNormalizedCol + minCol;

            return (
              <div
                key={`corner-terminal-${lastOriginalRow}-${lastOriginalCol}`}
                style={{
                  gridRow: uniqueRows.length * 2,
                  gridColumn: uniqueCols.length * 2,
                  width: '16px',
                  height: '16px',
                  zIndex: 10,
                  pointerEvents: 'auto',
                }}
              >
                <CornerHandle
                  onResizeStart={(clientX, clientY) =>
                    handleCornerTerminalResizeStart(lastOriginalRow, lastOriginalCol, clientX, clientY)
                  }
                  isActive={activeCorner?.row === lastOriginalRow && activeCorner?.col === lastOriginalCol}
                />
              </div>
            );
          })()
        )}
      </div>
      <ChartTutorialModal
        isOpen={showTutorialModal}
        onClose={() => setShowTutorialModal(false)}
      />
    </div>
  );
}

export default function App() {
  const [query, setQuery] = useState<string>("");
  // Ref to access ChartGrid callbacks
  const chartGridCallbacksRef = React.useRef<ChartGridCallbacks | null>(null);
  // State to track active chart's selected points (synced from ChartGrid)
  const [activeChartSelectedPoints, setActiveChartSelectedPoints] = React.useState<Map<string, Set<string>>>(new Map());
  // State to track active chart's position
  const [activeChartPosition, setActiveChartPosition] = React.useState<DOMRect | null>(null);
  // State to remember last inverter selection
  const [lastInverterSelection, setLastInverterSelection] = React.useState<Set<string>>(new Set(DEFAULT_INVERTER_SELECTION));

  // Calculate sidebar position based on active chart position
  const sidebarPosition = React.useMemo(() => {
    if (!activeChartPosition) {
      return { top: '1rem', left: '1rem', showArrow: false, arrowOnLeft: true };
    }

    const sidebarWidth = 800;
    const gap = 8;
    const windowWidth = window.innerWidth;

    // Try to place on right first
    let left = activeChartPosition.right + gap;
    let arrowOnLeft = true;

    // If it would go off-screen on the right, try left side
    if (left + sidebarWidth > windowWidth - 20) {
      left = activeChartPosition.left - sidebarWidth - gap;
      arrowOnLeft = false;

      // If it would also go off-screen on the left, just place it with some margin
      if (left < 20) {
        left = 20;
        arrowOnLeft = true;
      }
    }

    return {
      top: `${activeChartPosition.top}px`,
      left: `${left}px`,
      showArrow: true,
      arrowOnLeft
    };
  }, [activeChartPosition]);

  const [showHelp, setShowHelp] = useState<boolean>(false);
  const [pointHelpEnabled, setPointHelpEnabled] = useState<Set<string>>(new Set());
  const [selectedLabels, setSelectedLabels] = useState<Set<string>>(() => new Set());
  const [detailLevel, setDetailLevel] = useState<string>("Standard");
  const [hierarchy, setHierarchy] = useState<string[]>(["Type of Data", "Component", "Feature"]);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const sidebarRef = React.useRef<HTMLDivElement>(null);
  const sidebarContentRef = React.useRef<HTMLDivElement>(null);
  const [activeGroup, setActiveGroup] = React.useState<string>("");
  const [groupsExpanded, setGroupsExpanded] = React.useState<boolean>(true);
  const [topSectionCollapsed, setTopSectionCollapsed] = React.useState<boolean>(false);
  const [sortModalOpen, setSortModalOpen] = React.useState<boolean>(false);
  const topSectionScrollTop = React.useRef<number>(0);
  const lastManualToggleTime = React.useRef<number>(0);

  // Track scroll position to highlight active group and collapse top section
  // Note: This effect queries the DOM directly, so it doesn't need grouped in dependencies
  React.useEffect(() => {
    if (!sidebarContentRef.current) return;

    const handleScroll = () => {
      if (!sidebarContentRef.current) return;
      
      const container = sidebarContentRef.current;
      const currentScrollTop = container.scrollTop;
      
      // Don't auto-collapse/expand if user manually toggled recently (within last 500ms)
      const timeSinceManualToggle = Date.now() - lastManualToggleTime.current;
      if (timeSinceManualToggle < 500) {
        topSectionScrollTop.current = currentScrollTop;
        return;
      }
      
      // Collapse top section when scrolling down, expand when scrolling to top
      if (currentScrollTop > topSectionScrollTop.current && currentScrollTop > 100) {
        // Scrolling down - collapse
        if (!topSectionCollapsed) {
          setTopSectionCollapsed(true);
        }
      } else if (currentScrollTop < 50) {
        // Scrolled to top - expand
        if (topSectionCollapsed) {
          setTopSectionCollapsed(false);
        }
      }
      
      topSectionScrollTop.current = currentScrollTop;
      
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
  }, [activeGroup, topSectionCollapsed]);

  // Handle Escape key to close sidebar or modal
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (sortModalOpen) {
          setSortModalOpen(false);
        } else if (sidebarOpen) {
          setSidebarOpen(false);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [sidebarOpen, sortModalOpen]);

  React.useEffect(() => {
    if (!sidebarOpen) {
      return undefined;
    }

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      if (sidebarRef.current && sidebarRef.current.contains(target)) {
        return;
      }
      if (target.closest('[data-role="sidebar-toggle"]')) {
        return;
      }
      setSidebarOpen(false);
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
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

  const getLastInverterSelection = (): Set<string> => new Set(lastInverterSelection);
  const saveLastInverterSelection = (inverters: Set<string>) => {
    setLastInverterSelection(new Set(inverters));
  };


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
      result = result.filter((p) => {
        // Check visible text
        const matchesVisible =
          (p.entry.description || "").toLowerCase().includes(q) ||
          (p.entry.longdescription || "").toLowerCase().includes(q) ||
          (p.entry.name || "").toLowerCase().includes(q);

        if (matchesVisible) return true;

        // Check label help text (tooltips)
        const labels = Array.isArray(p.labels) ? p.labels : [];
        return labels.some((label) => {
          const labelHelp = getLabelHelp(label.label_family, label.label_text);
          return labelHelp && labelHelp.toLowerCase().includes(q);
        });
      });
    }

    // Filter by detail level
    // Standard: show only Standard
    // Extended: show Standard and Extended
    // Complete: show Standard, Extended, and Complete
    const detailLevelFilter = (() => {
      switch (detailLevel) {
        case 'Standard':
          return ['Standard'];
        case 'Extended':
          return ['Standard', 'Extended'];
        case 'Complete':
          return ['Standard', 'Extended', 'Complete'];
        default:
          return ['Standard', 'Extended', 'Complete'];
      }
    })();

    result = result.filter((p) => {
      const labels = Array.isArray(p.labels) ? p.labels : [];
      const levelOfDetailLabels = labels
        .filter((l) => l.label_family === 'Level of Detail')
        .map((l) => l.label_text);
      
      // If point has no Level of Detail label, include it (for backward compatibility)
      if (levelOfDetailLabels.length === 0) {
        return true;
      }
      
      // Check if point has at least one matching detail level
      return levelOfDetailLabels.some((level) => detailLevelFilter.includes(level));
    });

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
  }, [query, selectedLabels, detailLevel]);

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
    console.log('toggle called for key:', key);
    if (!chartGridCallbacksRef.current) {
      console.warn('ChartGrid callbacks not available yet');
      return;
    }
    
    // Check if point is currently selected
    const activeSelected = chartGridCallbacksRef.current.getActiveChartSelectedPoints();
    const isCurrentlySelected = activeSelected.has(key);
    console.log('isCurrentlySelected:', isCurrentlySelected, 'activeSelected size:', activeSelected.size);
    
    if (isCurrentlySelected) {
      // Remove the point
      console.log('Removing point:', key);
      chartGridCallbacksRef.current.togglePointForActiveChart(key);
    } else {
      // Add the point with last inverter selection
      const lastSelection = getLastInverterSelection();
      console.log('Adding point:', key, 'with inverters:', lastSelection);
      chartGridCallbacksRef.current.updateInvertersForActiveChart(key, lastSelection);
      // Save this selection as the last used
      saveLastInverterSelection(lastSelection);
    }
  };

  const updateInverters = (pointKey: string, inverters: Set<string>) => {
    // Save this selection as the last used
    saveLastInverterSelection(inverters);
    if (chartGridCallbacksRef.current) {
      chartGridCallbacksRef.current.updateInvertersForActiveChart(pointKey, inverters);
    }
  };

  // Removed unused removeInverter function

  // activeChartSelectedPoints is now managed as state, synced from ChartGrid via onActiveChartSelectedPointsChange callback

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
  
  const togglePointHelp = (pointKey: string) => {
    setPointHelpEnabled((prev) => {
      const next = new Set(prev);
      if (next.has(pointKey)) {
        next.delete(pointKey);
      } else {
        next.add(pointKey);
      }
      return next;
    });
  };
  
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
      <div className="mx-auto w-full max-w-[95vw] h-[calc(100vh-2rem)] rounded-2xl border bg-white shadow-sm relative overflow-hidden flex flex-col">
        {/* Chart grid area */}
        <div className="flex-1 min-h-0 relative">
          <ChartGrid
            protocols={protocols}
            onUpdateInverters={() => {
              // Chart's internal state is already updated
            }}
            onScrollToPoint={scrollToPoint}
            onRemoveInverter={() => {
              // Chart's internal state is already updated
            }}
            onSelectPointsToggle={setSidebarOpen}
            selectPointsOpen={sidebarOpen}
            callbacksRef={chartGridCallbacksRef}
            onActiveChartSelectedPointsChange={setActiveChartSelectedPoints}
            onActiveChartPositionChange={setActiveChartPosition}
          />
        </div>
        
        {/* Point selector dropdown - positioned relative to active chart */}
        <div
          ref={sidebarRef}
          className={`fixed bg-white border-2 border-blue-400 shadow-xl transition-all duration-300 z-50 rounded-lg flex flex-row ${
            sidebarOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
          style={{
            top: sidebarPosition.top,
            left: sidebarPosition.left,
            width: '800px',
            height: sidebarOpen ? 'calc(100vh - 8rem)' : '0',
            maxHeight: 'calc(100vh - 8rem)',
            overflow: 'hidden'
          }}
        >
          {/* Arrow pointing to active chart */}
          {sidebarOpen && sidebarPosition.showArrow && (
            <div
              className={`absolute top-4 w-0 h-0 ${sidebarPosition.arrowOnLeft ? 'left-0' : 'right-0'}`}
              style={{
                borderTop: '8px solid transparent',
                borderBottom: '8px solid transparent',
                ...(sidebarPosition.arrowOnLeft ? {
                  borderRight: '8px solid rgb(96, 165, 250)',
                  transform: 'translateX(-8px)'
                } : {
                  borderLeft: '8px solid rgb(96, 165, 250)',
                  transform: 'translateX(8px)'
                })
              }}
            />
          )}
          {/* Dropdown content */}
          <div className="h-full flex flex-row w-full min-h-0">
            {/* Navigation bar - left side - Show first 2 levels */}
            <div className="w-40 border-r border-gray-200 flex-shrink-0 overflow-y-auto">
              <nav className="p-3 text-sm text-gray-800">
                <div className="text-emerald-600 font-semibold mb-2 text-xs">Navigation</div>
                <div className="flex flex-col gap-0.5">
                  {grouped.size > 0 && [...grouped.entries()]
                    .filter(([levelName]) => levelName !== "(Unlabeled)")
                    .map(([levelName, levelData]) => {
                        const level1Id = `group-${levelName.replace(/\s+/g, '-')}-0`;
                        const isLevel1Active = activeGroup === level1Id;

                        // Get second level items if they exist
                        const secondLevelItems: [string, any][] = [];
                        if (levelData instanceof Map) {
                          secondLevelItems.push(...[...levelData.entries()].filter(([name]) => name !== "(Unlabeled)"));
                        }

                        return (
                          <div key={levelName}>
                            {/* First level */}
                            <div className="relative">
                              {isLevel1Active && (
                                <div className="absolute left-0 top-1 bottom-1 w-1 bg-blue-500 rounded-r" />
                              )}
                              <button
                                className={`px-2 py-1 hover:bg-gray-50 rounded text-xs w-full text-left transition-colors font-medium ${
                                  isLevel1Active ? 'text-blue-600 bg-blue-50' : 'text-gray-800'
                                }`}
                                onClick={() => {
                                  const element = document.getElementById(level1Id);
                                  if (element && sidebarContentRef.current) {
                                    const containerRect = sidebarContentRef.current.getBoundingClientRect();
                                    const elementRect = element.getBoundingClientRect();
                                    const scrollTop = sidebarContentRef.current.scrollTop;
                                    const relativeTop = elementRect.top - containerRect.top + scrollTop;
                                    sidebarContentRef.current.scrollTo({
                                      top: relativeTop - 10,
                                      behavior: 'smooth'
                                    });
                                  }
                                }}
                              >
                                {levelName}
                              </button>
                            </div>

                            {/* Second level - nested items */}
                            {secondLevelItems.length > 0 && (
                              <div className="ml-2 mt-0.5 space-y-0.5">
                                {secondLevelItems.map(([level2Name]) => {
                                  // Generate ID with parent path to match actual element IDs
                                  const parentPath = levelName.replace(/\s+/g, '-');
                                  const level2Path = `${parentPath}-${level2Name.replace(/\s+/g, '-')}`;
                                  const level2Id = `group-${level2Path}-1`;
                                  const isLevel2Active = activeGroup === level2Id;

                                  return (
                                    <div key={level2Name} className="relative">
                                      {isLevel2Active && (
                                        <div className="absolute left-0 top-1 bottom-1 w-0.5 bg-blue-400 rounded-r" />
                                      )}
                                      <button
                                        className={`px-2 py-0.5 hover:bg-gray-50 rounded text-xs w-full text-left transition-colors ${
                                          isLevel2Active ? 'text-blue-600 bg-blue-50' : 'text-gray-600'
                                        }`}
                                        onClick={() => {
                                          const element = document.getElementById(level2Id);
                                          if (element && sidebarContentRef.current) {
                                            const containerRect = sidebarContentRef.current.getBoundingClientRect();
                                            const elementRect = element.getBoundingClientRect();
                                            const scrollTop = sidebarContentRef.current.scrollTop;
                                            const relativeTop = elementRect.top - containerRect.top + scrollTop;
                                            sidebarContentRef.current.scrollTo({
                                              top: relativeTop - 10,
                                              behavior: 'smooth'
                                            });
                                          }
                                        }}
                                      >
                                        {level2Name}
                                      </button>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        );
                      })}
                </div>
              </nav>
            </div>

            {/* Main content area */}
            <div className="flex-1 flex flex-col overflow-hidden min-h-0">
              {/* Collapsible top section */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => {
                    lastManualToggleTime.current = Date.now();
                    setTopSectionCollapsed(!topSectionCollapsed);
                  }}
                  className="w-full p-2 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <svg 
                      className={`h-4 w-4 text-gray-500 transition-transform ${topSectionCollapsed ? '' : 'rotate-90'}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <div className="text-lg font-semibold">Add Points</div>
                  </div>
                  <div className="text-sm text-gray-600 flex items-center gap-2">
                    <span>Available: {visibleCount.toLocaleString()} of {totalCount.toLocaleString()}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSortModalOpen(true);
                      }}
                      className="px-2 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                      title="Configure grouping and sorting"
                    >
                      Change Sort Order ⇅
                    </button>
                  </div>
                </button>
              </div>
              <div 
                className={`transition-all duration-300 overflow-hidden ${
                  topSectionCollapsed ? 'max-h-0' : 'max-h-[1000px]'
                }`}
              >
                <div className="p-4">

                <LabelFilter
                  allLabels={allLabels}
                  selectedLabels={selectedLabels}
                  onToggleLabel={toggleLabel}
                  onClearFilters={clearLabelFilters}
                  protocols={protocols}
                  detailLevel={detailLevel}
                />
                
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex-1">
                    <SearchBox value={query} onChange={setQuery} />
                  </div>
                  <HelpToggle show={showHelp} onToggle={setShowHelp} />
                </div>
                
                <div className="mt-2 flex items-center gap-4">
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
                  <DetailLevelSlider value={detailLevel} onChange={setDetailLevel} />
                </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-4 pb-4 pr-1" ref={sidebarContentRef} data-scroll-container>
                {grouped.size === 0 ? (
                  <div className="py-4 text-center text-sm text-gray-500">
                    No points match the current filters.<br /><b>Increase the Detail Level</b> or <b>remove filters</b> to see more data points.
                  </div>
                ) : (
                  [...grouped.entries()]
                    .filter(([levelName]) => levelName !== "(Unlabeled)")
                    .map(([levelName, levelData]) => (
                      <LabelGroup
                        key={levelName}
                        levelName={levelName}
                        levelData={levelData}
                        selected={activeChartSelectedPoints}
                        toggle={toggle}
                        showHelp={showHelp}
                        onUpdateInverters={updateInverters}
                        groupsExpanded={groupsExpanded}
                        pointHelpEnabled={pointHelpEnabled}
                        onTogglePointHelp={togglePointHelp}
                        depth={0}
                        query={query}
                        hierarchy={hierarchy}
                      />
                    ))
                )}
              </div>
              <div className="border-t border-gray-200 bg-white/80 px-4 py-3">
                <p className="text-xs text-gray-600 mb-2">
                  {detailLevel !== 'Complete'
                    ? "Didn't find what you were looking for? Increase the Detail Level, remove filters, or clearing your search terms to see more data points."
                    : "Didn't find what you were looking for? Try removing filters or clearing your search terms to see more data points."}
                </p>
                <DetailLevelSlider value={detailLevel} onChange={setDetailLevel} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sort/Group By Modal */}
      {sortModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setSortModalOpen(false)}>
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">Sort Order</h2>
              <button
                onClick={() => setSortModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4 overflow-y-auto max-h-[calc(80vh-140px)]">
              <HierarchyConfig
                availableFamilies={availableFamilies}
                hierarchy={hierarchy}
                onChange={setHierarchy}
                scrollContainerRef={sidebarContentRef}
              />
            </div>
            <div className="flex items-center justify-end gap-2 p-4 border-t border-gray-200">
              <button
                onClick={() => setSortModalOpen(false)}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
