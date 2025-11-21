/**
 * API Request and Response Types
 *
 * This file defines all API interfaces for the site configuration system.
 * These types represent the contract between the frontend and backend.
 */

import { PageDef } from '../pages/siteConfig/types/schema';

// ============================================================================
// Site Configuration API
// ============================================================================

/**
 * Request to fetch site configuration definitions
 */
export interface FetchSiteConfigRequest {
  /** Optional page ID to fetch specific page, if omitted returns all pages */
  pageId?: string;
  /** Optional equipment ID to filter configuration for specific equipment */
  equipmentId?: string;
}

/**
 * Response containing site configuration definitions
 */
export interface FetchSiteConfigResponse {
  /** List of available pages with their themes, sections, and points */
  pages: PageDef[];
  /** Timestamp when this configuration was last modified */
  lastModified: string;
  /** Version identifier for the configuration */
  version: string;
}

// ============================================================================
// Point Values API
// ============================================================================

/**
 * Request to fetch current values for points
 */
export interface FetchPointValuesRequest {
  /** Optional list of point IDs to fetch. If omitted, returns all points */
  pointIds?: string[];
  /** Equipment ID to fetch values from */
  equipmentId: string;
  /** Optional page ID to limit scope */
  pageId?: string;
}

/**
 * Response containing current point values
 */
export interface FetchPointValuesResponse {
  /** Map of point ID to its current values */
  values: Record<string, PointValue>;
  /** Timestamp when these values were read */
  timestamp: string;
}

/**
 * Represents the current value(s) of a point
 */
export interface PointValue {
  /** Point's unique identifier */
  pointId: string;
  /** Map of entry arg name to its current value */
  entries: Record<string, EntryValue>;
  /** Timestamp when this point was last read */
  lastRead: string;
  /** Whether the read was successful */
  success: boolean;
  /** Error message if read failed */
  error?: string;
}

/**
 * Value of a single entry within a point
 */
export type EntryValue = string | number | boolean | Record<string, boolean>;

// ============================================================================
// Gateway Status API
// ============================================================================

/**
 * Request to get gateway online/offline status
 */
export interface GetGatewayStatusRequest {
  /** Gateway serial number */
  gatewaySn: string;
}

/**
 * Response containing gateway status
 */
export interface GetGatewayStatusResponse {
  /** Whether the gateway is currently online */
  isOnline: boolean;
  /** Timestamp of the status check */
  timestamp: string;
}

// ============================================================================
// Equipment Linkage API
// ============================================================================

/**
 * Firmware information for equipment
 */
export interface Firmware {
  name?: string;
  version?: string;
}

/**
 * Equipment information
 */
export interface Equipment {
  /** Equipment ID */
  id: string;
  /** Serial number */
  sn: string;
  /** Model code */
  md: string;
  /** Model name */
  md_name: string;
  /** Site ID */
  site_id: number;
  /** Whether this is the primary equipment */
  is_primary: boolean;
  /** Product type */
  product_type: string;
  /** Sub-product type */
  sub_product_type?: string;
  /** Software version */
  software_version?: string;
  /** ARM sub-product type */
  arm_sub_product_type?: string;
  /** ARM software version */
  arm_software_version?: string;
  /** DSP sub-product type */
  dsp_sub_product_type?: string;
  /** DSP software version */
  dsp_software_version?: string;
  /** List of firmwares */
  firmwares?: Firmware[];
}

/**
 * Equipment map entry linking gateway to equipment
 */
export interface EquipmentMapEntry {
  /** Gateway serial number */
  gateway_sn: string;
  /** List of equipment attached to this gateway */
  equipments: Equipment[];
}

/**
 * Request to get equipment at a site
 */
export interface GetEquipmentsAtSiteRequest {
  /** Request ID for tracking */
  request_id?: string;
  /** Site ID */
  site_id: number;
}

/**
 * Response containing equipment at site
 */
export interface GetEquipmentsAtSiteResponse {
  /** List of equipment mappings by gateway */
  items: EquipmentMapEntry[];
  /** Whether the request was successful */
  success: boolean;
  /** Message describing the result */
  message: string;
  /** Request ID for tracking */
  request_id?: string;
  /** Response code */
  code: number;
}

// ============================================================================
// Point Themes API
// ============================================================================

/**
 * Request to get point themes for a site
 */
export interface GetPointThemesRequest {
  /** Site ID */
  siteId: number;
}

/**
 * Response containing point themes JSON
 */
export interface GetPointThemesResponse {
  /** Point themes configuration */
  themes: any; // This would be the PageDef structure or themes array
  /** Timestamp of the data */
  timestamp: string;
}

// ============================================================================
// Point Values by PSN API
// ============================================================================

/**
 * Request to get point values for a specific product serial number
 */
export interface GetPointValuesByPsnRequest {
  /** Site ID */
  siteId: number;
  /** Product serial number */
  psn: string;
}

/**
 * Response containing point values from 40104 model
 */
export interface GetPointValuesByPsnResponse {
  /** Map of point ID to its current values */
  values: Record<string, PointValue>;
  /** Timestamp when these values were read */
  timestamp: string;
  /** Product serial number */
  psn: string;
}

// ============================================================================
// CGI Command API
// ============================================================================

/**
 * Request to send a CGI command to gateway
 */
export interface SendCGICommandRequest {
  /** Gateway serial number */
  gatewaySn: string;
  /** CGI command payload (Matter, Modbus, etc.) */
  payload: any;
}

/**
 * Response from CGI command execution
 */
export interface SendCGICommandResponse {
  /** Whether the command was successful */
  success: boolean;
  /** Error message if command failed */
  error?: string;
  /** Response data from the gateway */
  data?: any;
  /** Timestamp when the command was executed */
  timestamp: string;
}

// ============================================================================
// Workspace Management API
// ============================================================================

/**
 * ⚠️ WORKSPACE API TYPES HAVE MOVED ⚠️
 *
 * These types are kept here for backward compatibility, but the workspace API
 * has been refactored into a separate module structure.
 *
 * NEW LOCATION: src/pages/historicData/api/workspaceApi.interface.ts
 *
 * For new code, import from:
 * ```typescript
 * import { workspaceApi, type GetWorkspacesRequest } from '../pages/historicData/api/workspaceApi';
 * ```
 *
 * See: src/pages/historicData/api/README.md for migration guide
 */

import type { Workspace, WorkspaceListItem } from '../pages/historicData/types';

/**
 * Request to fetch all workspaces
 */
export interface GetWorkspacesRequest {
  /** Optional limit on number of results */
  limit?: number;
}

/**
 * Response containing list of workspaces
 */
export interface GetWorkspacesResponse {
  /** List of workspace metadata items */
  workspaces: WorkspaceListItem[];
  /** Total count of workspaces */
  total: number;
}

/**
 * Request to fetch a specific workspace
 */
export interface GetWorkspaceRequest {
  /** Workspace ID */
  id: string;
}

/**
 * Response containing workspace details
 */
export interface GetWorkspaceResponse {
  /** Full workspace data */
  workspace: Workspace;
}

/**
 * Request to create a new workspace
 */
export interface CreateWorkspaceRequest {
  /** Workspace name */
  name: string;
  /** Workspace data (chart configurations, layout) */
  data: Workspace['data'];
}

/**
 * Response after creating a workspace
 */
export interface CreateWorkspaceResponse {
  /** Created workspace */
  workspace: Workspace;
  /** Success message */
  message: string;
}

/**
 * Request to update an existing workspace
 */
export interface UpdateWorkspaceRequest {
  /** Workspace ID */
  id: string;
  /** Updated name (optional) */
  name?: string;
  /** Updated workspace data (optional) */
  data?: Workspace['data'];
}

/**
 * Response after updating a workspace
 */
export interface UpdateWorkspaceResponse {
  /** Updated workspace */
  workspace: Workspace;
  /** Success message */
  message: string;
}

/**
 * Request to delete a workspace
 */
export interface DeleteWorkspaceRequest {
  /** Workspace ID */
  id: string;
}

/**
 * Response after deleting a workspace
 */
export interface DeleteWorkspaceResponse {
  /** Whether the deletion was successful */
  success: boolean;
  /** Success message */
  message: string;
}

/**
 * Request to set a workspace as default
 */
export interface SetDefaultWorkspaceRequest {
  /** Workspace ID to set as default */
  id: string;
}

/**
 * Response after setting default workspace
 */
export interface SetDefaultWorkspaceResponse {
  /** Updated workspace */
  workspace: Workspace;
  /** Success message */
  message: string;
}
