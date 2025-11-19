import React from "react";

interface InverterSelectorProps {
  selectedInverters: Set<string>;
  onChange: (inverters: Set<string>) => void;
  availableInverters?: string[];
  getFullSerialNumber: (shortSN: string) => string;
}

export default function InverterSelector({
  selectedInverters,
  onChange,
  availableInverters = ['001', '002', '003'],
  getFullSerialNumber
}: InverterSelectorProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const isAllSelected = selectedInverters.size === availableInverters.length;
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
      onChange(new Set(availableInverters));
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
            {availableInverters.map((inv) => (
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
