import React, { useState } from 'react';

interface TutorialStep {
  title: string;
  content: React.ReactNode;
  image: string;
}

interface ChartTutorialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChartTutorialModal: React.FC<ChartTutorialModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const tutorialSteps: TutorialStep[] = [
    {
      title: '1. Adding Points to a Chart',
      image: '/src/tutorial/images/adding_points.png',
      content: (
        <div>
          <p className="mb-3">You can add data points to any chart in two ways:</p>
          <ul className="list-disc pl-5 mb-3 space-y-2">
            <li>
              <strong>Click anywhere inside an empty chart area</strong>
              <br />
              <span className="text-sm text-slate-600">This opens the point selector immediately.</span>
            </li>
            <li>
              <strong>Use the "Add Points" menu</strong> in the top-right corner of the chart.
            </li>
          </ul>
          <p className="text-sm text-slate-600">
            You can add as many points as you need—measurements or status values from any device at the site.
          </p>
        </div>
      ),
    },
    {
      title: '2. Resizing a Chart',
      image: '/src/tutorial/images/resizing_chart.png',
      content: (
        <div>
          <p className="mb-3">To change the size of a chart:</p>
          <ul className="list-disc pl-5 mb-3 space-y-2">
            <li>Grab the <strong>handle on the right edge</strong> to make it wider.</li>
            <li>Grab the <strong>handle on the bottom edge</strong> to make it taller.</li>
            <li>Drag both to resize the chart in both directions.</li>
          </ul>
          <p className="text-sm text-slate-600">
            Resize charts to give more room to important points.
          </p>
        </div>
      ),
    },
    {
      title: '3. Creating Additional Charts',
      image: '/src/tutorial/images/create_additional_charts.png',
      content: (
        <div>
          <p className="mb-3">
            Click the <strong>"+" button</strong> below any chart to create a new one.
          </p>
          <p className="mb-3">Each chart can have:</p>
          <ul className="list-disc pl-5 mb-3 space-y-1">
            <li>its own set of points</li>
            <li>its own size</li>
            <li>its own layout</li>
          </ul>
          <p className="text-sm text-slate-600">
            Use multiple charts to compare different devices or mix measurements and status views.
          </p>
        </div>
      ),
    },
    {
      title: '4. Removing a Chart',
      image: '/src/tutorial/images/remove_chart.png',
      content: (
        <div>
          <p className="mb-3">
            To delete a chart, click the <strong>"X"</strong> in the upper-right corner of the chart frame.
          </p>
          <p className="text-sm text-slate-600">
            Removing a chart does <strong>not</strong> delete any data points—you can always create a new chart and add them again.
          </p>
        </div>
      ),
    },
    {
      title: '5. Browsing and Finding Data Points',
      image: '/src/tutorial/images/browse_and_find_points.png',
      content: (
        <div>
          <p className="mb-3">Use the <strong>Add Points</strong> panel to find the data you want:</p>
          <ul className="list-disc pl-5 mb-3 space-y-2">
            <li>Scroll through the list</li>
            <li>Search by name</li>
            <li>Use filters to narrow results by <strong>component</strong>, <strong>type of data</strong>, <strong>unit</strong>, or <strong>feature</strong></li>
          </ul>
          <p className="text-sm text-slate-600">
            If you need more advanced or technical points, increase the <strong>Detail Level</strong> slider.
          </p>
        </div>
      ),
    },
    {
      title: '6. Selecting Devices for Each Point',
      image: '/src/tutorial/images/selecting_devices.png',
      content: (
        <div>
          <p className="mb-3">
            Many sites have multiple units of the same equipment (e.g., several inverters).
          </p>
          <p className="mb-3">For each point you select, choose whether it applies to:</p>
          <ul className="list-disc pl-5 mb-3 space-y-1">
            <li><strong>One device</strong></li>
            <li><strong>A selected group of devices</strong></li>
            <li><strong>All devices of that type</strong></li>
          </ul>
          <p className="text-sm text-slate-600">
            You can add the same point for different devices in any combination.
          </p>
        </div>
      ),
    },
    {
      title: '7. Troubleshooting Point Discovery',
      image: '/src/tutorial/images/troubleshooting_points.png',
      content: (
        <div>
          <p className="mb-3">If you don't see the point you expect:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Broaden your filters</li>
            <li>Adjust the <strong>Detail Level</strong></li>
            <li>Search for part of the name</li>
            <li>Make sure the correct device type is selected</li>
          </ul>
        </div>
      ),
    },
    {
      title: '8. Understanding Line vs. Status Charts',
      image: '/src/tutorial/images/lines_vs_status.png',
      content: (
        <div>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Line charts</h4>
            <p className="text-sm mb-2">
              Show measurements—numbers that rise and fall over time, such as:
            </p>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Power</li>
              <li>Voltage</li>
              <li>Current</li>
              <li>Temperature</li>
            </ul>
            <p className="text-sm text-slate-600 mt-2">
              These appear as a smooth line across the graph.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Status charts</h4>
            <p className="text-sm mb-2">
              Show what <em>state</em> the equipment was in over time, such as:
            </p>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Normal</li>
              <li>Failure</li>
              <li>On / Off</li>
              <li>Operating modes</li>
            </ul>
            <p className="text-sm text-slate-600 mt-2">
              Status points appear as colored bars instead of a line, showing when each state was active.
            </p>
          </div>
        </div>
      ),
    },
  ];

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClose = () => {
    setCurrentStep(0);
    onClose();
  };

  if (!isOpen) return null;

  const currentStepData = tutorialSteps[currentStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-3xl w-full mx-4 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📘</span>
            <h2 className="text-xl font-semibold text-slate-900">Chart Tutorial</h2>
          </div>
          <button
            onClick={handleClose}
            className="text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="Close"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            {currentStepData.title}
          </h3>

          {/* Image */}
          <div className="mb-4 rounded-lg overflow-hidden border border-slate-200">
            <img
              src={currentStepData.image}
              alt={currentStepData.title}
              className="w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="text-slate-700">
            {currentStepData.content}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200">
          <div className="text-sm text-slate-600">
            Step {currentStep + 1} of {tutorialSteps.length}
          </div>
          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 rounded hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            {currentStep < tutorialSteps.length - 1 ? (
              <button
                onClick={handleNext}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleClose}
                className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition-colors"
              >
                Finish
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartTutorialModal;
