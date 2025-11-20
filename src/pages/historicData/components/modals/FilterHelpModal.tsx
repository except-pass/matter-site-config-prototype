interface FilterHelpModalProps {
  onClose: () => void;
}

export default function FilterHelpModal({ onClose }: FilterHelpModalProps) {
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
