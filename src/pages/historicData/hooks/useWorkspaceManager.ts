import { useState, useEffect, useCallback, useRef } from 'react';
import type { Workspace, WorkspaceListItem, SerializableWorkspaceData } from '../types';
import { workspaceApi } from '../api/workspaceApi';
import {
  hasWorkspaceChanged,
  cloneWorkspaceData,
  exportWorkspaceAsJSON,
  importWorkspaceFromJSON,
} from '../utils/workspaceUtils';

export interface WorkspaceManagerState {
  currentWorkspace: Workspace | null;
  workspaces: WorkspaceListItem[];
  isDirty: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface WorkspaceManagerActions {
  loadWorkspaces: () => Promise<void>;
  loadWorkspace: (workspaceId: string) => Promise<void>;
  createNewWorkspace: (name: string, data: SerializableWorkspaceData) => Promise<Workspace>;
  saveCurrentWorkspace: (data?: SerializableWorkspaceData) => Promise<void>;
  updateCurrentWorkspace: (data: SerializableWorkspaceData) => void;
  renameWorkspace: (workspaceId: string, newName: string) => Promise<void>;
  duplicateWorkspace: (workspaceId: string) => Promise<Workspace>;
  deleteWorkspace: (workspaceId: string) => Promise<void>;
  exportWorkspace: (workspaceId: string) => Promise<void>;
  importWorkspace: (file: File) => Promise<Workspace>;
  setDefaultWorkspace: (workspaceId: string) => Promise<void>;
  markClean: () => void;
}

interface UseWorkspaceManagerOptions {
  onWorkspaceLoaded?: (data: SerializableWorkspaceData) => void;
}

export function useWorkspaceManager(
  options?: UseWorkspaceManagerOptions
): [WorkspaceManagerState, WorkspaceManagerActions] {
  const [currentWorkspace, setCurrentWorkspace] = useState<Workspace | null>(null);
  const [workspaces, setWorkspaces] = useState<WorkspaceListItem[]>([]);
  const [isDirty, setIsDirty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Store the last saved version for dirty checking
  const lastSavedData = useRef<SerializableWorkspaceData | null>(null);

  // Load all workspaces
  const loadWorkspaces = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await workspaceApi.getWorkspaces({});
      setWorkspaces(response.workspaces);
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to load workspaces';
      setError(errorMsg);
      console.error('Failed to load workspaces:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Load a specific workspace
  const loadWorkspace = useCallback(
    async (workspaceId: string) => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await workspaceApi.getWorkspace({ id: workspaceId });
        setCurrentWorkspace(response.workspace);
        lastSavedData.current = cloneWorkspaceData(response.workspace.data);
        setIsDirty(false);

        // Notify parent component
        if (options?.onWorkspaceLoaded) {
          options.onWorkspaceLoaded(response.workspace.data);
        }
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : 'Failed to load workspace';
        setError(errorMsg);
        console.error('Failed to load workspace:', err);
      } finally {
        setIsLoading(false);
      }
    },
    [options]
  );

  // Create a new workspace
  const createNewWorkspace = useCallback(
    async (name: string, data: SerializableWorkspaceData) => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await workspaceApi.createWorkspace({ name, data });
        setCurrentWorkspace(response.workspace);
        lastSavedData.current = cloneWorkspaceData(response.workspace.data);
        setIsDirty(false);

        // Refresh workspace list
        await loadWorkspaces();

        return response.workspace;
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : 'Failed to create workspace';
        setError(errorMsg);
        console.error('Failed to create workspace:', err);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [loadWorkspaces]
  );

  // Save current workspace
  const saveCurrentWorkspace = useCallback(async (data?: SerializableWorkspaceData) => {
    if (!currentWorkspace) {
      throw new Error('No workspace is currently loaded');
    }

    // Use provided data or fall back to current workspace data
    const dataToSave = data || currentWorkspace.data;

    try {
      setIsLoading(true);
      setError(null);
      const response = await workspaceApi.updateWorkspace({
        id: currentWorkspace.id,
        data: dataToSave,
      });
      setCurrentWorkspace(response.workspace);
      lastSavedData.current = cloneWorkspaceData(response.workspace.data);
      setIsDirty(false);

      // Refresh workspace list
      await loadWorkspaces();
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to save workspace';
      setError(errorMsg);
      console.error('Failed to save workspace:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [currentWorkspace, loadWorkspaces]);

  // Update current workspace data (marks as dirty)
  const updateCurrentWorkspace = useCallback(
    (data: SerializableWorkspaceData) => {
      if (!currentWorkspace) return;

      const updatedWorkspace = {
        ...currentWorkspace,
        data,
      };
      setCurrentWorkspace(updatedWorkspace);

      // Check if dirty
      if (lastSavedData.current) {
        setIsDirty(hasWorkspaceChanged(lastSavedData.current, data));
      }
    },
    [currentWorkspace]
  );

  // Rename workspace
  const renameWorkspace = useCallback(
    async (workspaceId: string, newName: string) => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await workspaceApi.updateWorkspace({
          id: workspaceId,
          name: newName,
        });

        // Update current workspace if it's the one being renamed
        if (currentWorkspace?.id === workspaceId) {
          setCurrentWorkspace(response.workspace);
        }

        // Refresh workspace list
        await loadWorkspaces();
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : 'Failed to rename workspace';
        setError(errorMsg);
        console.error('Failed to rename workspace:', err);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [currentWorkspace, loadWorkspaces]
  );

  // Duplicate workspace
  const duplicateWorkspace = useCallback(
    async (workspaceId: string) => {
      try {
        setIsLoading(true);
        setError(null);

        // First, load the workspace to duplicate
        const response = await workspaceApi.getWorkspace({ id: workspaceId });
        const original = response.workspace;

        // Create a new workspace with the same data
        const newWorkspace = await createNewWorkspace(
          `${original.name} (Copy)`,
          original.data
        );

        return newWorkspace;
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : 'Failed to duplicate workspace';
        setError(errorMsg);
        console.error('Failed to duplicate workspace:', err);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [createNewWorkspace]
  );

  // Delete workspace
  const deleteWorkspaceHandler = useCallback(
    async (workspaceId: string) => {
      try {
        setIsLoading(true);
        setError(null);
        await workspaceApi.deleteWorkspace({ id: workspaceId });

        // If we deleted the current workspace, clear it
        if (currentWorkspace?.id === workspaceId) {
          setCurrentWorkspace(null);
          lastSavedData.current = null;
          setIsDirty(false);
        }

        // Refresh workspace list
        await loadWorkspaces();
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : 'Failed to delete workspace';
        setError(errorMsg);
        console.error('Failed to delete workspace:', err);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [currentWorkspace, loadWorkspaces]
  );

  // Export workspace
  const exportWorkspaceHandler = useCallback(async (workspaceId: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await workspaceApi.getWorkspace({ id: workspaceId });
      const result = exportWorkspaceAsJSON(response.workspace.name, response.workspace.data);
      if (!result.success) {
        throw new Error(result.error || 'Failed to export workspace');
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to export workspace';
      setError(errorMsg);
      console.error('Failed to export workspace:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Import workspace
  const importWorkspaceHandler = useCallback(
    async (file: File) => {
      try {
        setIsLoading(true);
        setError(null);
        const { name, data } = await importWorkspaceFromJSON(file);
        const newWorkspace = await createNewWorkspace(name, data);
        return newWorkspace;
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : 'Failed to import workspace';
        setError(errorMsg);
        console.error('Failed to import workspace:', err);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [createNewWorkspace]
  );

  // Set default workspace
  const setDefaultWorkspaceHandler = useCallback(
    async (workspaceId: string) => {
      try {
        setIsLoading(true);
        setError(null);
        await workspaceApi.setDefaultWorkspace({ id: workspaceId });

        // Refresh workspace list to show updated default status
        await loadWorkspaces();
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : 'Failed to set default workspace';
        setError(errorMsg);
        console.error('Failed to set default workspace:', err);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [loadWorkspaces]
  );

  // Mark as clean
  const markClean = useCallback(() => {
    if (currentWorkspace) {
      lastSavedData.current = cloneWorkspaceData(currentWorkspace.data);
      setIsDirty(false);
    }
  }, [currentWorkspace]);

  // Load workspaces on mount
  useEffect(() => {
    loadWorkspaces();
  }, [loadWorkspaces]);

  // Load default workspace on mount
  useEffect(() => {
    const loadDefault = async () => {
      try {
        const response = await workspaceApi.getDefaultWorkspace();
        if (response && response.workspace) {
          await loadWorkspace(response.workspace.id);
        }
      } catch (error) {
        console.error('Failed to load default workspace:', error);
      }
    };

    // Only load default if no workspace is currently loaded
    if (!currentWorkspace) {
      loadDefault();
    }
  }, []); // Empty deps array - only run on mount

  const state: WorkspaceManagerState = {
    currentWorkspace,
    workspaces,
    isDirty,
    isLoading,
    error,
  };

  const actions: WorkspaceManagerActions = {
    loadWorkspaces,
    loadWorkspace,
    createNewWorkspace,
    saveCurrentWorkspace,
    updateCurrentWorkspace,
    renameWorkspace,
    duplicateWorkspace: duplicateWorkspace,
    deleteWorkspace: deleteWorkspaceHandler,
    exportWorkspace: exportWorkspaceHandler,
    importWorkspace: importWorkspaceHandler,
    setDefaultWorkspace: setDefaultWorkspaceHandler,
    markClean,
  };

  return [state, actions];
}
