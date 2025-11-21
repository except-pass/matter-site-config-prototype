import React from "react";
import type { ProtocolPoint } from "../../types";
import LabelHelpModal from "../modals/LabelHelpModal";
import FilterHelpModal from "../modals/FilterHelpModal";

interface LabelFilterProps {
  allLabels: Map<string, Set<string>>;
  selectedLabels: Set<string>;
  onToggleLabel: (family: string, text: string) => void;
  onClearFilters: () => void;
  protocols: ProtocolPoint[];
  detailLevel: string;
  filterStructure: 'freeform' | 'sequential';
  getLabelColor: (family: string, text: string) => { bg: string; text: string; border: string };
  getLabelHelp: (family: string, labelText?: string) => string | null;
}

export default function LabelFilter({
  allLabels,
  selectedLabels,
  onToggleLabel,
  onClearFilters,
  protocols,
  detailLevel,
  filterStructure,
  getLabelColor,
  getLabelHelp
}: LabelFilterProps) {
  const [height, setHeight] = React.useState(200);
  const [isResizing, setIsResizing] = React.useState(false);
  const [helpModalFamily, setHelpModalFamily] = React.useState<string | null>(null);
  const [showFilterHelpModal, setShowFilterHelpModal] = React.useState(false);
  // Start collapsed by default
  const [isExpanded, setIsExpanded] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const detailsRef = React.useRef<HTMLDetailsElement>(null);

  // Sequential filter order - defines the order in which filters unlock
  const SEQUENTIAL_ORDER = React.useMemo(() => {
    const order: string[] = [];
    // Define preferred order, but only include families that exist in the data
    const preferredOrder = ['Equipment', 'Component', 'Type of Data', 'Unit'];
    preferredOrder.forEach(family => {
      if (allLabels.has(family)) {
        order.push(family);
      }
    });
    // Add any remaining families that weren't in the preferred order
    allLabels.forEach((_, family) => {
      if (family !== 'Level of Detail' && !order.includes(family)) {
        order.push(family);
      }
    });
    return order;
  }, [allLabels]);

  // Determine which families have selections in sequential mode
  const getFamilySelections = (family: string): string[] => {
    return Array.from(selectedLabels)
      .filter(key => key.startsWith(`${family}:`))
      .map(key => key.split(':', 2)[1]);
  };

  // Determine if a family is locked in sequential mode
  const isFamilyLocked = (family: string): boolean => {
    if (filterStructure !== 'sequential') return false;

    const index = SEQUENTIAL_ORDER.indexOf(family);
    if (index === 0) return false; // First family is always unlocked

    // Check if previous family has selections
    const prevFamily = SEQUENTIAL_ORDER[index - 1];
    const prevSelections = getFamilySelections(prevFamily);
    return prevSelections.length === 0;
  };

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
          <div className="mb-1 flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 flex-1 min-w-0">
              {/* Filter icon and label */}
              <svg className="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span className="flex-shrink-0">Filters</span>
              {activeFilters.length > 0 && (
                <span className="text-gray-500">({activeFilters.length} active)</span>
              )}
            </div>
            
            {/* When collapsed, show Add Filter button and help text */}
            {!isExpanded && (
              <div className="flex items-center gap-3 flex-wrap">
                {otherLabels.size > 0 && (
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
            )}
          </div>
          
          {/* Active filter badges - show when collapsed */}
          {!isExpanded && activeFilters.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 min-w-0 mt-1">
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
            </div>
          )}
        </summary>
        <div className="mb-2 flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            {/* Active filter badges - show when expanded */}
            {isExpanded && activeFilters.length > 0 && (
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

            {/* Clear all button - show when expanded */}
            {isExpanded && activeFilters.length > 0 && (
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

          {/* Help text on far right - show when expanded */}
          {isExpanded && (
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
          )}
        </div>
        <div
          className="space-y-0.5 overflow-auto mt-2"
          style={{ height: `${height}px` }}
        >
        {filterStructure === 'sequential' ? (
          // Sequential mode rendering
          <>
            {SEQUENTIAL_ORDER.map((family, index) => {
              const texts = otherLabels.get(family);
              if (!texts) return null;

              const selections = getFamilySelections(family);
              const isLocked = isFamilyLocked(family);
              const hasSelection = selections.length > 0;
              const isActive = !isLocked;
              const familyHelp = getLabelHelp(family);
              const familyColor = getLabelColor(family, '');

              // Hide locked families that have no selections
              if (isLocked && !hasSelection) return null;

              return (
                <div key={family}>
                  {index > 0 && (
                    <div className="border-t border-gray-200 my-1"></div>
                  )}
                  <div className="flex items-center gap-1.5 text-xs py-1 px-1 rounded bg-gray-50/30">
                    <button
                      onClick={() => setHelpModalFamily(family)}
                      className={`flex items-center gap-1 rounded-md border px-2 py-0.5 font-semibold transition-colors flex-shrink-0 w-28 justify-between ${
                        hasSelection
                          ? `${familyColor.bg} ${familyColor.text} ${familyColor.border} border-2`
                          : isLocked
                          ? 'bg-slate-50 text-slate-400 border-slate-200 border'
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
                        const isSelected = selections.includes(text);
                        const count = isActive ? computeCountForChip(family, text) : 0;
                        const isDisabled = !isActive || (!isSelected && count === 0);
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
                              isLocked
                                ? "Pick something above to unlock this step"
                                : isDisabled
                                ? "No points available with this combination of filters"
                                : labelHelp || `${family}: ${text}`
                            }
                            aria-disabled={isDisabled}
                            tabIndex={isDisabled ? -1 : 0}
                          >
                            <span>{text}</span>
                            {!isSelected && isActive && (
                              <span className={`ml-1 ${isDisabled ? 'text-gray-400' : 'text-gray-500'}`}>
                                ({count})
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          // Freeform mode rendering (uses the same family ordering as sequential)
          <>
          {SEQUENTIAL_ORDER.map((family, index) => {
            const texts = otherLabels.get(family);
            if (!texts) return null;
            const familyHelp = getLabelHelp(family);
            const familyColor = getLabelColor(family, '');
            // Check if any label in this family is selected
            const hasSelectedLabel = Array.from(texts).some(text => selectedLabels.has(`${family}:${text}`));
            return (
              <div key={family}>
                {index > 0 && (
                  <div className="border-t border-gray-200 my-1"></div>
                )}
                <div className="flex items-center gap-1.5 text-xs py-1 px-1 rounded bg-gray-50/30">
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
            </div>
          );
          })}
          </>
        )}
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
          getLabelHelp={getLabelHelp}
        />
      )}
      {showFilterHelpModal && (
        <FilterHelpModal onClose={() => setShowFilterHelpModal(false)} />
      )}
    </div>
  );
}
