interface LabelHelpModalProps {
  family: string;
  labels: Set<string>;
  onClose: () => void;
  getLabelHelp: (family: string, labelText?: string) => string | null;
}

export default function LabelHelpModal({ family, labels, onClose, getLabelHelp }: LabelHelpModalProps) {
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
