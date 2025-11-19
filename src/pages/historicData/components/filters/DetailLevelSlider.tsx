import React from "react";
import LabelHelpModal from "../modals/LabelHelpModal";

interface DetailLevelSliderProps {
  value: string; // 'Standard', 'Extended', or 'Complete'
  onChange: (value: string) => void;
  getLabelHelp: (family: string, labelText?: string) => string | null;
}

export default function DetailLevelSlider({ value, onChange, getLabelHelp }: DetailLevelSliderProps) {
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
          getLabelHelp={getLabelHelp}
        />
      )}
    </>
  );
}
