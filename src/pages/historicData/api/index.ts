/**
 * Historical Data Workspace API
 *
 * This module provides a clean, production-ready API layer for workspace management.
 *
 * Quick Start:
 * ```typescript
 * import { workspaceApi } from './api';
 *
 * // Get all workspaces
 * const { workspaces } = await workspaceApi.getWorkspaces({});
 *
 * // Create a new workspace
 * const { workspace } = await workspaceApi.createWorkspace({
 *   name: 'My Workspace',
 *   data: myWorkspaceData
 * });
 * ```
 *
 * For migration guide and documentation, see: ./README.md
 */

// Export the active API implementation
export { workspaceApi } from './workspaceApi';

// Export all types for convenience
export type {
  // Interface
  IWorkspaceApi,
  // Request types
  GetWorkspacesRequest,
  GetWorkspaceRequest,
  CreateWorkspaceRequest,
  UpdateWorkspaceRequest,
  DeleteWorkspaceRequest,
  SetDefaultWorkspaceRequest,
  // Response types
  GetWorkspacesResponse,
  GetWorkspaceResponse,
  CreateWorkspaceResponse,
  UpdateWorkspaceResponse,
  DeleteWorkspaceResponse,
  SetDefaultWorkspaceResponse,
  GetDefaultWorkspaceResponse,
  // Error types
  WorkspaceApiError,
  WorkspaceErrorCode,
} from './workspaceApi';
