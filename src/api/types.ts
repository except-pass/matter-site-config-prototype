/**
 * API Request and Response Types
 *
 * This file defines all API interfaces for the site configuration system.
 * These types represent the contract between the frontend and backend.
 */

import { PageDef, PointDef } from '../types/schema';

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
// Batch Operations
// ============================================================================

/**
 * Request to read multiple points at once
 */
export interface BatchReadRequest {
  /** List of point IDs to read */
  pointIds: string[];
  /** Equipment ID to read from */
  equipmentId: string;
}

/**
 * Response containing multiple point values
 */
export interface BatchReadResponse {
  /** Map of point ID to its value */
  values: Record<string, PointValue>;
  /** Overall success status */
  success: boolean;
  /** Number of successful reads */
  successCount: number;
  /** Number of failed reads */
  failureCount: number;
}

/**
 * Request to write to multiple points at once
 */
export interface BatchWriteRequest {
  /** List of write operations */
  writes: Array<{
    pointId: string;
    values: Record<string, EntryValue>;
  }>;
  /** Equipment ID to write to */
  equipmentId: string;
}

/**
 * Response after batch write operation
 */
export interface BatchWriteResponse {
  /** Map of point ID to write result */
  results: Record<string, WritePointResponse>;
  /** Overall success status */
  success: boolean;
  /** Number of successful writes */
  successCount: number;
  /** Number of failed writes */
  failureCount: number;
}
