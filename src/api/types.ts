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
// Read Point API
// ============================================================================

/**
 * Request to read a specific point's current value
 */
export interface ReadPointRequest {
  /** Unique identifier of the point to read */
  pointId: string;
  /** Equipment ID to read from */
  equipmentId: string;
  /** Optional list of specific entry args to read */
  entryArgs?: string[];
}

/**
 * Response containing the read point value
 */
export interface ReadPointResponse {
  /** The point's current value */
  value: PointValue;
  /** Protocol payload that was sent (for debugging) */
  payload?: any;
}

// ============================================================================
// Write Point API
// ============================================================================

/**
 * Request to write values to a point
 */
export interface WritePointRequest {
  /** Unique identifier of the point to write */
  pointId: string;
  /** Equipment ID to write to */
  equipmentId: string;
  /** Map of entry arg name to value to write */
  values: Record<string, EntryValue>;
}

/**
 * Response after writing to a point
 */
export interface WritePointResponse {
  /** Whether the write was successful */
  success: boolean;
  /** Error message if write failed */
  error?: string;
  /** Protocol payload that was sent (for debugging) */
  payload?: any;
  /** Timestamp when the write occurred */
  timestamp: string;
  /** The new value after writing (if read-back is supported) */
  newValue?: PointValue;
}

// ============================================================================
// Invoke Command API
// ============================================================================

/**
 * Request to invoke a service/command point
 */
export interface InvokeCommandRequest {
  /** Unique identifier of the command to invoke */
  pointId: string;
  /** Equipment ID to invoke command on */
  equipmentId: string;
  /** Map of entry arg name to parameter value */
  parameters?: Record<string, EntryValue>;
}

/**
 * Response after invoking a command
 */
export interface InvokeCommandResponse {
  /** Whether the invocation was successful */
  success: boolean;
  /** Error message if invocation failed */
  error?: string;
  /** Protocol payload that was sent (for debugging) */
  payload?: any;
  /** Timestamp when the invocation occurred */
  timestamp: string;
  /** Optional result data returned by the command */
  result?: any;
}

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
