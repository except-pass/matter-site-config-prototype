/**
 * Workspace API Service Layer
 *
 * This is the main entry point for workspace API operations.
 * All components should import from this file, not directly from implementation files.
 *
 * ARCHITECTURE:
 * - workspaceApi.interface.ts: Defines the contract (IWorkspaceApi)
 * - workspaceApi.mock.ts: Mock implementation (current - localStorage-backed)
 * - workspaceApi.ts: This file - exports the active implementation
 *
 * TO CONVERT FROM PROTOTYPE TO PRODUCTION:
 *
 * 1. Create your real API implementation:
 *    - Create workspaceApi.rest.ts (for REST API) or
 *    - Create workspaceApi.graphql.ts (for GraphQL) or
 *    - Create workspaceApi.grpc.ts (for gRPC)
 *    - Implement the IWorkspaceApi interface
 *
 * 2. Update the import below:
 *    Change: import { mockWorkspaceApi } from './workspaceApi.mock';
 *    To:     import { restWorkspaceApi } from './workspaceApi.rest';
 *
 * 3. Update the export below:
 *    Change: export const workspaceApi = mockWorkspaceApi;
 *    To:     export const workspaceApi = restWorkspaceApi;
 *
 * 4. Done! All components will now use the real API without any changes.
 *
 * EXAMPLE REST IMPLEMENTATION:
 *
 * ```typescript
 * // workspaceApi.rest.ts
 * import type { IWorkspaceApi, GetWorkspacesRequest, GetWorkspacesResponse } from './workspaceApi.interface';
 *
 * class RestWorkspaceApi implements IWorkspaceApi {
 *   private baseUrl = '/api/v1/workspaces';
 *
 *   async getWorkspaces(request: GetWorkspacesRequest): Promise<GetWorkspacesResponse> {
 *     const response = await fetch(this.baseUrl, {
 *       method: 'GET',
 *       headers: { 'Content-Type': 'application/json' },
 *       credentials: 'include', // Send cookies for auth
 *     });
 *
 *     if (!response.ok) {
 *       throw new WorkspaceApiError('Failed to fetch workspaces', WorkspaceErrorCode.SERVER_ERROR);
 *     }
 *
 *     return await response.json();
 *   }
 *
 *   async createWorkspace(request: CreateWorkspaceRequest): Promise<CreateWorkspaceResponse> {
 *     const response = await fetch(this.baseUrl, {
 *       method: 'POST',
 *       headers: { 'Content-Type': 'application/json' },
 *       credentials: 'include',
 *       body: JSON.stringify(request),
 *     });
 *
 *     if (!response.ok) {
 *       throw new WorkspaceApiError('Failed to create workspace', WorkspaceErrorCode.SERVER_ERROR);
 *     }
 *
 *     return await response.json();
 *   }
 *
 *   // ... implement other methods
 * }
 *
 * export const restWorkspaceApi = new RestWorkspaceApi();
 * ```
 */

// ============================================================================
// CURRENT IMPLEMENTATION (Mock)
// ============================================================================

import { mockWorkspaceApi } from './workspaceApi.mock';

/**
 * Active workspace API implementation
 *
 * CURRENT: Mock implementation using localStorage
 * PRODUCTION: Replace with real API client
 *
 * TO SWITCH IMPLEMENTATIONS:
 * 1. Import your real implementation above
 * 2. Change the assignment below
 * 3. All code using workspaceApi will automatically use the new implementation
 */
export const workspaceApi = mockWorkspaceApi;

// ============================================================================
// RE-EXPORT TYPES
// ============================================================================

/**
 * Re-export types for convenience
 * This allows consumers to import everything from one place:
 *   import { workspaceApi, type GetWorkspacesRequest } from './api/workspaceApi';
 */
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
} from './workspaceApi.interface';

// ============================================================================
// FEATURE FLAGS (Optional)
// ============================================================================

/**
 * Feature flags for API behavior
 * Useful for gradual rollout or A/B testing
 */
export const API_CONFIG = {
  /**
   * Whether to use the mock API (for development/testing)
   * PRODUCTION: Control this via environment variable
   */
  USE_MOCK_API: true,

  /**
   * API base URL
   * PRODUCTION: Set from environment variable (e.g., process.env.REACT_APP_API_URL)
   */
  API_BASE_URL: '/api/v1',

  /**
   * Request timeout in milliseconds
   */
  REQUEST_TIMEOUT: 30000,

  /**
   * Enable request/response logging
   * PRODUCTION: Set from environment variable
   */
  ENABLE_LOGGING: false, // Set to true for development, or read from environment
};

/**
 * Example: Conditional API implementation based on feature flag
 *
 * ```typescript
 * export const workspaceApi = API_CONFIG.USE_MOCK_API
 *   ? mockWorkspaceApi
 *   : restWorkspaceApi;
 * ```
 */
