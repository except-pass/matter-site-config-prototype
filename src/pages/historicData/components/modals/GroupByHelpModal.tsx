import React from "react";

interface GroupByHelpModalProps {
  onClose: () => void;
}

export default function GroupByHelpModal({ onClose }: GroupByHelpModalProps) {
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
