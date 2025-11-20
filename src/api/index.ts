/**
 * API Module
 *
 * Central export point for all API-related functionality.
 * Import from this file to access API types and functions.
 */

// Export all API types
export type {
  FetchSiteConfigRequest,
  FetchSiteConfigResponse,
  FetchPointValuesRequest,
  FetchPointValuesResponse,
  ReadPointRequest,
  ReadPointResponse,
  WritePointRequest,
  WritePointResponse,
  InvokeCommandRequest,
  InvokeCommandResponse,
  BatchReadRequest,
  BatchReadResponse,
  BatchWriteRequest,
  BatchWriteResponse,
  PointValue,
  EntryValue,
} from './types';

// Export all API functions
export {
  fetchSiteConfig,
  fetchPointValues,
  readPoint,
  writePoint,
  invokeCommand,
  batchRead,
  batchWrite,
  clearMockData,
  getAllMockValues,
} from './mockApi';
