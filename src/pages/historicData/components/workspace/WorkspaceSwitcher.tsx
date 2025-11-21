import React, { useState, useRef, useEffect } from 'react';
import type { WorkspaceListItem } from '../../types';

interface WorkspaceSwitcherProps {
  currentWorkspace: WorkspaceListItem | null;
  recentWorkspaces: WorkspaceListItem[];
  onSwitch: (workspaceId: string) => void;
  onManage: () => void;
  disabled?: boolean;
  hasUnsavedChanges?: boolean;
}

const WorkspaceSwitcher: React.FC<WorkspaceSwitcherProps> = ({
  currentWorkspace,
  recentWorkspaces,
  onSwitch,
  onManage,
  disabled = false,
  hasUnsavedChanges = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const handleSelect = (workspaceId: string) => {
    setIsOpen(false);
    onSwitch(workspaceId);
  };

  const handleManage = () => {
    setIsOpen(false);
    onManage();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={disabled}
        className={`
          px-3 py-1.5 text-sm font-medium rounded-md
          flex items-center gap-2 min-w-[180px]
          ${disabled
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
          }
          transition-colors duration-150
        `}
      >
        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
        <span className="flex-1 truncate text-left">
          {currentWorkspace?.name || 'No Workspace'}
        </span>
        {hasUnsavedChanges && (
          <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" title="Unsaved changes" />
        )}
        <svg
          className={`w-4 h-4 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto">
          <div className="py-1">
            <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Recent Workspaces
            </div>

            {recentWorkspaces.length === 0 ? (
              <div className="px-4 py-3 text-sm text-gray-500 italic">
                No workspaces available
              </div>
            ) : (
              recentWorkspaces.map((workspace) => (
                <button
                  key={workspace.id}
                  onClick={() => handleSelect(workspace.id)}
                  className={`
                    w-full text-left px-4 py-2 text-sm
                    hover:bg-gray-100 transition-colors
                    ${workspace.id === currentWorkspace?.id
                      ? 'bg-blue-50 text-blue-700 font-medium'
                      : 'text-gray-700'
                    }
                  `}
                >
                  <div className="flex items-center gap-2">
                    {workspace.id === currentWorkspace?.id && (
                      <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="truncate">{workspace.name}</div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {workspace.chartCount} {workspace.chartCount === 1 ? 'chart' : 'charts'}
                        {workspace.tags && workspace.tags.length > 0 && (
                          <span className="ml-2">
                            {workspace.tags.map((tag) => (
                              <span key={tag} className="inline-block px-1.5 py-0.5 mr-1 text-xs bg-gray-200 text-gray-600 rounded">
                                {tag}
                              </span>
                            ))}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              ))
            )}

            <hr className="my-1 border-gray-200" />

            <button
              onClick={handleManage}
              className="w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-gray-100 flex items-center gap-2 font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              All Workspaces...
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkspaceSwitcher;
