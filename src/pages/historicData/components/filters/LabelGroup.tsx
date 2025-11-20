import type { ProtocolPoint, LabelHierarchy } from "../../types";
import InverterSelector from "../ui/InverterSelector";
import { getFullSerialNumber } from "../charts/chartUtils";

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
  getLabelColor: (family: string, text: string) => { bg: string; text: string; border: string };
  getLabelHelp: (family: string, labelText?: string) => string | null;
}

// Helper to check if search text appears in any tooltip
function searchMatchesInTooltip(
  point: ProtocolPoint,
  query: string,
  getLabelHelp: (family: string, labelText?: string) => string | null
): boolean {
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

export default function LabelGroup({
  levelName,
  levelData,
  selected,
  toggle,
  showHelp,
  onUpdateInverters,
  groupsExpanded,
  pointHelpEnabled,
  onTogglePointHelp,
  depth = 0,
  query,
  parentPath = '',
  hierarchy = [],
  getLabelColor,
  getLabelHelp
}: LabelGroupProps) {
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
    const helpTextMatch = searchMatchesInTooltip(it, query, getLabelHelp);

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
                  getFullSerialNumber={getFullSerialNumber}
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
              getLabelColor={getLabelColor}
              getLabelHelp={getLabelHelp}
            />
          );
        })}
      </div>
    </details>
  );
}
