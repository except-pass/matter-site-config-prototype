import React from "react";
import GroupByHelpModal from "../modals/GroupByHelpModal";

interface HierarchyConfigProps {
  availableFamilies: string[];
  hierarchy: string[];
  onChange: (hierarchy: string[]) => void;
  scrollContainerRef?: React.RefObject<HTMLDivElement>;
  getLabelColor: (family: string, text: string) => { bg: string; text: string; border: string };
}

export default function HierarchyConfig({
  availableFamilies,
  hierarchy,
  onChange,
  scrollContainerRef,
  getLabelColor
}: HierarchyConfigProps) {
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
