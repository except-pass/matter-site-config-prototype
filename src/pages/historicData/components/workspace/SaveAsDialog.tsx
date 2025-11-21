import React, { useState, useEffect } from 'react';

interface SaveAsDialogProps {
  isOpen: boolean;
  currentName: string;
  onSave: (name: string, tags?: string[]) => void;
  onCancel: () => void;
}

const SaveAsDialog: React.FC<SaveAsDialogProps> = ({
  isOpen,
  currentName,
  onSave,
  onCancel,
}) => {
  const [name, setName] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      setName(`${currentName} (Copy)`);
      setTagsInput('');
      setError('');
    }
  }, [isOpen, currentName]);

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onCancel();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onCancel]);

  if (!isOpen) return null;

  const handleSave = () => {
    const trimmedName = name.trim();
    if (!trimmedName) {
      setError('Workspace name is required');
      return;
    }

    const tags = tagsInput
      .split(',')
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);

    onSave(trimmedName, tags.length > 0 ? tags : undefined);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Save Workspace As</h3>

          <div className="space-y-4">
            <div>
              <label htmlFor="workspace-name" className="block text-sm font-medium text-gray-700 mb-1">
                Workspace Name *
              </label>
              <input
                id="workspace-name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError('');
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSave();
                }}
                className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  error ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter workspace name"
                autoFocus
              />
              {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
            </div>

            <div>
              <label htmlFor="workspace-tags" className="block text-sm font-medium text-gray-700 mb-1">
                Tags (optional)
              </label>
              <input
                id="workspace-tags"
                type="text"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSave();
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="e.g., production, testing (comma-separated)"
              />
              <p className="mt-1 text-xs text-gray-500">Separate multiple tags with commas</p>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={onCancel}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveAsDialog;
