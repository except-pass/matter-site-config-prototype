/**
 * Workspace API Interface
 *
 * This file defines the contract for workspace data operations.
 * Any implementation (mock, REST API, GraphQL, etc.) must conform to this interface.
 *
 * When converting from prototype to production:
 * 1. Keep this interface unchanged
 * 2. Create a new implementation file (e.g., workspaceApi.rest.ts)
 * 3. Update the export in workspaceApi.ts to use the new implementation
 */

import type {
  Workspace,
  WorkspaceListItem,
  SerializableWorkspaceData,
} from '../types';

/**
 * Request types for workspace operations
 */
export interface GetWorkspacesRequest {
  /** Optional limit on number of results */
  limit?: number;
  // Future: Add pagination, filtering, sorting
  // offset?: number;
  // filter?: WorkspaceFilter;
}

export interface GetWorkspaceRequest {
  id: string;
}

export interface CreateWorkspaceRequest {
  name: string;
  data: SerializableWorkspaceData;
  isDefault?: boolean;
}

export interface UpdateWorkspaceRequest {
  id: string;
  name?: string;
  data?: SerializableWorkspaceData;
}

export interface DeleteWorkspaceRequest {
  id: string;
}

export interface SetDefaultWorkspaceRequest {
  id: string;
}

/**
 * Response types for workspace operations
 */
export interface GetWorkspacesResponse {
  workspaces: WorkspaceListItem[];
}

export interface GetWorkspaceResponse {
  workspace: Workspace;
}

export interface CreateWorkspaceResponse {
  workspace: Workspace;
}

export interface UpdateWorkspaceResponse {
  workspace: Workspace;
}

export interface DeleteWorkspaceResponse {
  success: boolean;
}

export interface SetDefaultWorkspaceResponse {
  success: boolean;
}

export interface GetDefaultWorkspaceResponse {
  workspace: Workspace | null;
}

/**
 * Core Workspace API Interface
 *
 * All methods return Promises to support async operations.
 * Implementations should throw errors for failure cases.
 */
export interface IWorkspaceApi {
  /**
   * Retrieve all workspaces for the current user
   *
   * Production considerations:
   * - Add user authentication/authorization
   * - Implement pagination for large datasets
   * - Add filtering and sorting capabilities
   */
  getWorkspaces(request: GetWorkspacesRequest): Promise<GetWorkspacesResponse>;

  /**
   * Retrieve a single workspace by ID
   *
   * Production considerations:
   * - Verify user has permission to access this workspace
   * - Handle workspace not found errors
   * - Consider caching strategy
   */
  getWorkspace(request: GetWorkspaceRequest): Promise<GetWorkspaceResponse>;

  /**
   * Create a new workspace
   *
   * Production considerations:
   * - Validate workspace data structure
   * - Check user quota/limits
   * - Generate server-side IDs instead of client-side
   * - Handle duplicate names
   */
  createWorkspace(request: CreateWorkspaceRequest): Promise<CreateWorkspaceResponse>;

  /**
   * Update an existing workspace
   *
   * Production considerations:
   * - Verify user owns/can edit this workspace
   * - Implement optimistic locking (version/timestamp)
   * - Validate data structure
   * - Handle concurrent updates
   */
  updateWorkspace(request: UpdateWorkspaceRequest): Promise<UpdateWorkspaceResponse>;

  /**
   * Delete a workspace
   *
   * Production considerations:
   * - Verify user owns/can delete this workspace
   * - Prevent deletion of built-in workspaces
   * - Handle cascade deletes if applicable
   * - Consider soft delete for recovery
   */
  deleteWorkspace(request: DeleteWorkspaceRequest): Promise<DeleteWorkspaceResponse>;

  /**
   * Set a workspace as the default
   *
   * Production considerations:
   * - Ensure only one default per user
   * - Atomic operation to prevent race conditions
   */
  setDefaultWorkspace(request: SetDefaultWorkspaceRequest): Promise<SetDefaultWorkspaceResponse>;

  /**
   * Get the default workspace for the current user
   *
   * Production considerations:
   * - Cache this value client-side
   * - Handle case where no default is set
   */
  getDefaultWorkspace(): Promise<GetDefaultWorkspaceResponse>;
}

/**
 * Error types that implementations should use
 */
export class WorkspaceApiError extends Error {
  constructor(
    message: string,
    public code: WorkspaceErrorCode,
    public details?: unknown
  ) {
    super(message);
    this.name = 'WorkspaceApiError';
  }
}

export enum WorkspaceErrorCode {
  NOT_FOUND = 'NOT_FOUND',
  UNAUTHORIZED = 'UNAUTHORIZED',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  CONFLICT = 'CONFLICT',
  SERVER_ERROR = 'SERVER_ERROR',
  NETWORK_ERROR = 'NETWORK_ERROR',
}
