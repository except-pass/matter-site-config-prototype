import React, { useState, useEffect } from 'react';
import type { WorkspaceListItem } from '../../types';
import ConfirmDialog from './ConfirmDialog';

interface ManageWorkspacesModalProps {
  isOpen: boolean;
  workspaces: WorkspaceListItem[];
  currentWorkspaceId: string | null;
  onClose: () => void;
  onSwitch: (workspaceId: string) => void;
  onRename: (workspaceId: string, newName: string) => void;
  onDuplicate: (workspaceId: string) => void;
  onDelete: (workspaceId: string) => void;
  onExport: (workspaceId: string) => void;
}

const ManageWorkspacesModal: React.FC<ManageWorkspacesModalProps> = ({
  isOpen,
  workspaces,
  currentWorkspaceId,
  onClose,
  onSwitch,
  onRename,
  onDuplicate,
  onDelete,
  onExport,
}) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState<{
    workspaceId: string;
    workspaceName: string;
  } | null>(null);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setEditingId(null);
      setEditingName('');
    }
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && !deleteConfirm) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, deleteConfirm, onClose]);

  if (!isOpen) return null;

  const sortedWorkspaces = [...workspaces].sort((a, b) => {
    // Current workspace first
    if (a.id === currentWorkspaceId) return -1;
    if (b.id === currentWorkspaceId) return 1;
    // Then by last modified
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
  });

  const handleStartEdit = (workspace: WorkspaceListItem) => {
    setEditingId(workspace.id);
    setEditingName(workspace.name);
  };

  const handleSaveEdit = () => {
    if (editingId && editingName.trim()) {
      onRename(editingId, editingName.trim());
      setEditingId(null);
      setEditingName('');
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditingName('');
  };

  const handleDeleteClick = (workspace: WorkspaceListItem) => {
    setDeleteConfirm({
      workspaceId: workspace.id,
      workspaceName: workspace.name,
    });
  };

  const handleConfirmDelete = () => {
    if (deleteConfirm) {
      onDelete(deleteConfirm.workspaceId);
      setDeleteConfirm(null);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[80vh] flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Manage Workspaces</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Workspace List */}
          <div className="flex-1 overflow-y-auto p-4">
            {sortedWorkspaces.length === 0 ? (
              <div className="text-center py-12">
                <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
                <p className="text-gray-500">No workspaces available</p>
              </div>
            ) : (
              <div className="space-y-2">
                {sortedWorkspaces.map((workspace) => (
                  <div
                    key={workspace.id}
                    className={`
                      border rounded-lg p-4 transition-all
                      ${workspace.id === currentWorkspaceId
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                      }
                    `}
                  >
                    <div className="flex items-start gap-4">
                      {/* Workspace Info */}
                      <div className="flex-1 min-w-0">
                        {editingId === workspace.id ? (
                          <input
                            type="text"
                            value={editingName}
                            onChange={(e) => setEditingName(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') handleSaveEdit();
                              if (e.key === 'Escape') handleCancelEdit();
                            }}
                            className="w-full px-2 py-1 border border-blue-500 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            autoFocus
                          />
                        ) : (
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-medium text-gray-900 truncate">
                              {workspace.name}
                            </h3>
                            {workspace.id === currentWorkspaceId && (
                              <span className="px-2 py-0.5 text-xs font-medium bg-blue-600 text-white rounded">
                                Current
                              </span>
                            )}
                          </div>
                        )}

                        <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                          <span>{workspace.chartCount} {workspace.chartCount === 1 ? 'chart' : 'charts'}</span>
                          <span>•</span>
                          <span>Updated {formatDate(workspace.updatedAt)}</span>
                        </div>

                        {workspace.tags && workspace.tags.length > 0 && (
                          <div className="flex gap-2 mt-2">
                            {workspace.tags.map((tag) => (
                              <span key={tag} className="px-2 py-1 text-xs bg-gray-200 text-gray-700 rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2">
                        {editingId === workspace.id ? (
                          <>
                            <button
                              onClick={handleSaveEdit}
                              className="p-2 text-green-600 hover:bg-green-50 rounded transition-colors"
                              title="Save"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </button>
                            <button
                              onClick={handleCancelEdit}
                              className="p-2 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                              title="Cancel"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </>
                        ) : (
                          <>
                            {workspace.id !== currentWorkspaceId && (
                              <button
                                onClick={() => onSwitch(workspace.id)}
                                className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                                title="Switch to this workspace"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                                </svg>
                              </button>
                            )}
                            <button
                              onClick={() => handleStartEdit(workspace)}
                              className="p-2 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                              title="Rename"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </button>
                            <button
                              onClick={() => onDuplicate(workspace.id)}
                              className="p-2 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                              title="Duplicate"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                              </svg>
                            </button>
                            <button
                              onClick={() => onExport(workspace.id)}
                              className="p-2 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                              title="Export JSON"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3v-12" />
                              </svg>
                            </button>
                            <button
                              onClick={() => handleDeleteClick(workspace)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                              title="Delete"
                              disabled={workspace.id === 'ws-default'}
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600">
                {sortedWorkspaces.length} {sortedWorkspaces.length === 1 ? 'workspace' : 'workspaces'}
              </p>
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        isOpen={deleteConfirm !== null}
        title="Delete Workspace"
        message={`Are you sure you want to delete "${deleteConfirm?.workspaceName}"? This action cannot be undone.`}
        confirmLabel="Delete"
        cancelLabel="Cancel"
        confirmVariant="danger"
        onConfirm={handleConfirmDelete}
        onCancel={() => setDeleteConfirm(null)}
      />
    </>
  );
};

export default ManageWorkspacesModal;
