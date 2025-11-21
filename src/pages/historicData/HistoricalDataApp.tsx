import React, { useEffect, useMemo, useState, useCallback } from "react";
import YAML from "yaml";
import rawYaml from "../siteConfig/definitions/telemetry/ss40k_inverter.yaml?raw";
import rawLifecycleEventsYaml from "../siteConfig/definitions/telemetry/lifecycle_events.yaml?raw";
import rawLabelHelp from "../siteConfig/definitions/telemetry/label_help.yaml?raw";
import LabelGroup from "./components/filters/LabelGroup";
import LabelFilter from "./components/filters/LabelFilter";
import ChartGrid, { type ChartGridCallbacks, DEFAULT_INVERTER_SELECTION } from "./components/charts/ChartGrid";
import SearchBox from "./components/filters/SearchBox";
import DetailLevelSlider from "./components/filters/DetailLevelSlider";
import HierarchyConfig from "./components/filters/HierarchyConfig";
import ChartTutorialModal from "./components/modals/ChartTutorialModal";
import WorkspaceMenu from "./components/workspace/WorkspaceMenu";
import WorkspaceSwitcher from "./components/workspace/WorkspaceSwitcher";
import ManageWorkspacesModal from "./components/workspace/ManageWorkspacesModal";
import SaveAsDialog from "./components/workspace/SaveAsDialog";
import UnsavedChangesDialog from "./components/workspace/UnsavedChangesDialog";
import { useWorkspaceManager } from "./hooks/useWorkspaceManager";
import { serializeWorkspaceData } from "./utils/workspaceUtils";
import { getDefaultWorkspaceId } from "./utils/userSettings";
import type { SerializableWorkspaceData, SerializableChartConfig } from "./types";

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

  // Workspace management
  const [workspaceState, workspaceActions] = useWorkspaceManager({
    onWorkspaceLoaded: useCallback((data: SerializableWorkspaceData) => {
      // Load workspace data into ChartGrid
      if (chartGridCallbacksRef.current) {
        const deserialized = {
          charts: data.charts.map((c: SerializableChartConfig) => ({
            ...c,
            selectedPoints: new Map(Object.entries(c.selectedPoints).map(([k, v]) => [k, new Set(v as string[])]))
          })),
          rowHeights: new Map(Object.entries(data.rowHeights).map(([k, v]) => [Number(k), v as number])),
          columnWidths: new Map(Object.entries(data.columnWidths).map(([k, v]) => [Number(k), v as number])),
          nextChartId: data.nextChartId,
          activeChartId: data.activeChartId
        };
        chartGridCallbacksRef.current.setChartGridState(deserialized);
      }
    }, [chartGridCallbacksRef])
  });
  const [showManageModal, setShowManageModal] = useState(false);
  const [showSaveAsDialog, setShowSaveAsDialog] = useState(false);
  const [showUnsavedDialog, setShowUnsavedDialog] = useState(false);
  const [pendingWorkspaceSwitch, setPendingWorkspaceSwitch] = useState<string | null>(null);
  const [pendingAction, setPendingAction] = useState<'new' | 'import' | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

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
  const [hierarchy, setHierarchy] = useState<string[]>(["Equipment", "Component", "Type of Data"]);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const sidebarRef = React.useRef<HTMLDivElement>(null);
  const sidebarContentRef = React.useRef<HTMLDivElement>(null);
  const [activeGroup, setActiveGroup] = React.useState<string>("");
  const [groupsExpanded, setGroupsExpanded] = React.useState<boolean>(true);
  const [topSectionCollapsed, setTopSectionCollapsed] = React.useState<boolean>(true);
  const [sortModalOpen, setSortModalOpen] = React.useState<boolean>(false);
  const [chartTutorialModalOpen, setChartTutorialModalOpen] = React.useState<boolean>(false);
  const [filterStructure, setFilterStructure] = React.useState<'freeform' | 'sequential'>('sequential');
  const topSectionScrollTop = React.useRef<number>(0);
  const lastManualToggleTime = React.useRef<number>(0);
  const isInitialLoad = React.useRef<boolean>(true);

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
      
      // Skip auto-expand on initial load to keep section collapsed by default
      if (isInitialLoad.current) {
        isInitialLoad.current = false;
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

  // Workspace action handlers
  const createBlankWorkspace = useCallback(() => {
    // Create a single empty chart at position (0, 0)
    const emptyChart = {
      id: 'chart-0',
      row: 0,
      col: 0,
      selectedPoints: new Map<string, Set<string>>()
    };

    if (chartGridCallbacksRef.current) {
      chartGridCallbacksRef.current.setChartGridState({
        charts: [emptyChart],
        rowHeights: new Map([[0, 520]]),
        columnWidths: new Map([[0, 780]]),
        nextChartId: 1,
        activeChartId: 'chart-0'
      });
    }

    // Create a new workspace with one empty chart
    const blankData = serializeWorkspaceData(
      [emptyChart],
      new Map([[0, 520]]),
      new Map([[0, 780]]),
      1,
      'chart-0'
    );

    workspaceActions.createNewWorkspace('Untitled Workspace', blankData)
      .then(() => {
        // Success - workspace is now loaded
      })
      .catch((error) => {
        console.error('Failed to create workspace:', error);
      });
  }, [chartGridCallbacksRef, workspaceActions]);

  const handleNewWorkspace = useCallback(() => {
    if (workspaceState.isDirty) {
      setPendingAction('new');
      setShowUnsavedDialog(true);
    } else {
      createBlankWorkspace();
    }
  }, [workspaceState.isDirty, createBlankWorkspace]);

  const handleSaveWorkspace = useCallback(async () => {
    if (!workspaceState.currentWorkspace) {
      // No workspace loaded, show save as dialog
      setShowSaveAsDialog(true);
      return;
    }

    // If workspace is named "Untitled Workspace", prompt for a new name
    if (workspaceState.currentWorkspace.name === 'Untitled Workspace') {
      setShowSaveAsDialog(true);
      return;
    }

    try {
      // Get actual chart data from ChartGrid
      if (chartGridCallbacksRef.current) {
        const gridState = chartGridCallbacksRef.current.getChartGridState();
        const data = serializeWorkspaceData(
          gridState.charts,
          gridState.rowHeights,
          gridState.columnWidths,
          gridState.nextChartId,
          gridState.activeChartId
        );
        workspaceActions.updateCurrentWorkspace(data);
      }
      await workspaceActions.saveCurrentWorkspace();
    } catch (error) {
      console.error('Failed to save workspace:', error);
    }
  }, [workspaceState.currentWorkspace, workspaceActions, chartGridCallbacksRef]);

  const handleSaveAs = useCallback((name: string) => {
    // Get actual chart data from ChartGrid
    let data = serializeWorkspaceData([], new Map(), new Map(), 0);
    if (chartGridCallbacksRef.current) {
      const gridState = chartGridCallbacksRef.current.getChartGridState();
      data = serializeWorkspaceData(
        gridState.charts,
        gridState.rowHeights,
        gridState.columnWidths,
        gridState.nextChartId,
        gridState.activeChartId
      );
    }

    workspaceActions.createNewWorkspace(name, data)
      .then(() => {
        setShowSaveAsDialog(false);
      })
      .catch((error) => {
        console.error('Failed to save workspace:', error);
      });
  }, [workspaceActions, chartGridCallbacksRef]);

  const handleSwitchWorkspace = useCallback((workspaceId: string) => {
    if (workspaceState.isDirty) {
      setPendingWorkspaceSwitch(workspaceId);
      setShowUnsavedDialog(true);
    } else {
      workspaceActions.loadWorkspace(workspaceId);
    }
  }, [workspaceState.isDirty, workspaceActions]);

  const handleImportWorkspace = useCallback(() => {
    if (workspaceState.isDirty) {
      setPendingAction('import');
      setShowUnsavedDialog(true);
    } else {
      fileInputRef.current?.click();
    }
  }, [workspaceState.isDirty]);

  const handleFileSelect = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const workspace = await workspaceActions.importWorkspace(file);
      // Load the imported workspace immediately
      await workspaceActions.loadWorkspace(workspace.id);
    } catch (error) {
      console.error('Failed to import workspace:', error);
    }

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, [workspaceActions]);

  const handleExportWorkspace = useCallback(() => {
    if (workspaceState.currentWorkspace) {
      workspaceActions.exportWorkspace(workspaceState.currentWorkspace.id);
    }
  }, [workspaceState.currentWorkspace, workspaceActions]);

  const handleUnsavedDialogSave = useCallback(async () => {
    try {
      await workspaceActions.saveCurrentWorkspace();
      setShowUnsavedDialog(false);

      // Execute pending action
      if (pendingWorkspaceSwitch) {
        workspaceActions.loadWorkspace(pendingWorkspaceSwitch);
        setPendingWorkspaceSwitch(null);
      } else if (pendingAction === 'new') {
        createBlankWorkspace();
        setPendingAction(null);
      } else if (pendingAction === 'import') {
        fileInputRef.current?.click();
        setPendingAction(null);
      }
    } catch (error) {
      console.error('Failed to save workspace:', error);
    }
  }, [workspaceActions, pendingWorkspaceSwitch, pendingAction, createBlankWorkspace]);

  const handleUnsavedDialogDiscard = useCallback(() => {
    setShowUnsavedDialog(false);
    workspaceActions.markClean();

    // Execute pending action
    if (pendingWorkspaceSwitch) {
      workspaceActions.loadWorkspace(pendingWorkspaceSwitch);
      setPendingWorkspaceSwitch(null);
    } else if (pendingAction === 'new') {
      createBlankWorkspace();
      setPendingAction(null);
    } else if (pendingAction === 'import') {
      fileInputRef.current?.click();
      setPendingAction(null);
    }
  }, [workspaceActions, pendingWorkspaceSwitch, pendingAction, createBlankWorkspace]);

  const handleUnsavedDialogCancel = useCallback(() => {
    setShowUnsavedDialog(false);
    setPendingWorkspaceSwitch(null);
    setPendingAction(null);
  }, []);

  return (
    <div className="h-full bg-slate-100 p-4 md:p-6">
      <div className="mx-auto w-full max-w-[95vw] h-[calc(100vh-2rem)] rounded-2xl border bg-white shadow-sm relative overflow-hidden flex flex-col">
        {/* Workspace Controls Top Bar */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-semibold text-gray-900">Historical Data</h1>
            <WorkspaceMenu
              onNew={handleNewWorkspace}
              onSave={handleSaveWorkspace}
              onSaveAs={() => setShowSaveAsDialog(true)}
              onImport={handleImportWorkspace}
              onExport={handleExportWorkspace}
              onManage={() => setShowManageModal(true)}
              hasUnsavedChanges={workspaceState.isDirty}
            />
            <WorkspaceSwitcher
              currentWorkspace={workspaceState.currentWorkspace ? {
                id: workspaceState.currentWorkspace.id,
                name: workspaceState.currentWorkspace.name,
                type: workspaceState.currentWorkspace.type,
                isDefault: workspaceState.currentWorkspace.id === getDefaultWorkspaceId(),
                createdAt: workspaceState.currentWorkspace.createdAt,
                updatedAt: workspaceState.currentWorkspace.updatedAt,
                chartCount: workspaceState.currentWorkspace.data.charts.length
              } : null}
              recentWorkspaces={workspaceState.workspaces.slice(0, 5)}
              onSwitch={handleSwitchWorkspace}
              onManage={() => setShowManageModal(true)}
              hasUnsavedChanges={workspaceState.isDirty}
            />
          </div>
          <div className="flex items-center gap-3">
            {workspaceState.error && (
              <span className="text-sm text-red-600">{workspaceState.error}</span>
            )}
          </div>
        </div>

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
                <div
                  onClick={() => {
                    lastManualToggleTime.current = Date.now();
                    setTopSectionCollapsed(!topSectionCollapsed);
                  }}
                  className="w-full p-2 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
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
                      className="px-2 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center gap-1"
                      title="Configure preferences"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Preferences
                    </button>
                  </div>
                </div>
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
                  filterStructure={filterStructure}
                  getLabelColor={getLabelColor}
                  getLabelHelp={getLabelHelp}
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
                  <DetailLevelSlider value={detailLevel} onChange={setDetailLevel} getLabelHelp={getLabelHelp} />
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
                        onOpenChartTutorial={() => setChartTutorialModalOpen(true)}
                        depth={0}
                        query={query}
                        hierarchy={hierarchy}
                        getLabelColor={getLabelColor}
                        getLabelHelp={getLabelHelp}
                      />
                    ))
                )}
              </div>
              <div className="border-t border-gray-200 bg-white/80 px-4 py-3">
                <p className="text-xs text-gray-600 mb-2">
                  {detailLevel !== 'Complete'
                    ? "Didn't find what you were looking for? Increase the Detail Level, remove filters, or clear your search terms to see more data points."
                    : "Didn't find what you were looking for? Try removing filters or clearing your search terms to see more data points."}
                </p>
                <DetailLevelSlider value={detailLevel} onChange={setDetailLevel} getLabelHelp={getLabelHelp} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preferences Modal */}
      {sortModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setSortModalOpen(false)}>
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Preferences
              </h2>
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
            <div className="p-4 overflow-y-auto max-h-[calc(80vh-140px)] space-y-6">
              {/* Filter Structure Section */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-800">Filter Structure</h3>
                <div className="space-y-3">
                  <label className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                    <input
                      type="radio"
                      name="filterStructure"
                      value="sequential"
                      checked={filterStructure === 'sequential'}
                      onChange={(e) => setFilterStructure(e.target.value as 'sequential')}
                      className="mt-0.5 h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">Sequential</div>
                      <div className="text-xs text-gray-600 mt-1">
                        Filters unlock in order. Start by selecting equipment, then component options unlock, followed by type of data, and finally unit filters. Each level requires at least one selection before the next unlocks. This guided approach helps narrow down options step-by-step.
                      </div>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                    <input
                      type="radio"
                      name="filterStructure"
                      value="freeform"
                      checked={filterStructure === 'freeform'}
                      onChange={(e) => setFilterStructure(e.target.value as 'freeform')}
                      className="mt-0.5 h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">Freeform</div>
                      <div className="text-xs text-gray-600 mt-1">
                        Select filters in any order you prefer. All filter categories are available simultaneously, allowing flexible combinations. Filters within a category use OR logic (any match), while filters across categories use AND logic (all must match).
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Sort Order Section */}
              <div className="space-y-3 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-800">Sort Order</h3>
                <HierarchyConfig
                  availableFamilies={availableFamilies}
                  hierarchy={hierarchy}
                  onChange={setHierarchy}
                  scrollContainerRef={sidebarContentRef}
                  getLabelColor={getLabelColor}
                />
              </div>
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

      {/* Chart Tutorial Modal */}
      <ChartTutorialModal
        isOpen={chartTutorialModalOpen}
        onClose={() => setChartTutorialModalOpen(false)}
        initialStep={7}
      />

      {/* Workspace Management Modals */}
      <ManageWorkspacesModal
        isOpen={showManageModal}
        workspaces={workspaceState.workspaces}
        currentWorkspaceId={workspaceState.currentWorkspace?.id || null}
        onClose={() => setShowManageModal(false)}
        onSwitch={(id) => {
          setShowManageModal(false);
          handleSwitchWorkspace(id);
        }}
        onRename={workspaceActions.renameWorkspace}
        onDuplicate={(id) => {
          workspaceActions.duplicateWorkspace(id)
            .catch((error) => console.error('Failed to duplicate workspace:', error));
        }}
        onDelete={(id) => {
          workspaceActions.deleteWorkspace(id)
            .catch((error) => console.error('Failed to delete workspace:', error));
        }}
        onExport={workspaceActions.exportWorkspace}
        onSetDefault={(id) => {
          workspaceActions.setDefaultWorkspace(id)
            .catch((error) => console.error('Failed to set default workspace:', error));
        }}
      />

      <SaveAsDialog
        isOpen={showSaveAsDialog}
        currentName={workspaceState.currentWorkspace?.name || 'New Workspace'}
        onSave={handleSaveAs}
        onCancel={() => setShowSaveAsDialog(false)}
      />

      <UnsavedChangesDialog
        isOpen={showUnsavedDialog}
        workspaceName={workspaceState.currentWorkspace?.name || 'Current Workspace'}
        onSave={handleUnsavedDialogSave}
        onDiscard={handleUnsavedDialogDiscard}
        onCancel={handleUnsavedDialogCancel}
      />

      {/* Hidden file input for import */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        onChange={handleFileSelect}
        style={{ display: 'none' }}
      />
    </div>
  );
}
