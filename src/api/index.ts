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
  PointValue,
  EntryValue,
  GetGatewayStatusRequest,
  GetGatewayStatusResponse,
  GetEquipmentsAtSiteRequest,
  GetEquipmentsAtSiteResponse,
  Equipment,
  EquipmentMapEntry,
  Firmware,
  GetPointThemesRequest,
  GetPointThemesResponse,
  GetPointValuesByPsnRequest,
  GetPointValuesByPsnResponse,
  SendCGICommandRequest,
  SendCGICommandResponse,
} from './types';

// Export all API functions
export {
  fetchSiteConfig,
  fetchPointValues,
  getGatewayStatus,
  getEquipmentsAtSite,
  getPointThemes,
  getPointValuesByPsn,
  sendCGICommandToGateway,
  clearMockData,
  getAllMockValues,
} from './mockApi';

// Export CGI payload builders
export {
  buildReadPayload,
  buildWritePayload,
  buildInvokePayload,
} from './buildCgiPayload';
