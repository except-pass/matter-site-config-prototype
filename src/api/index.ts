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
  readPoint,
  writePoint,
  invokeCommand,
  getGatewayStatus,
  getEquipmentsAtSite,
  getPointThemes,
  getPointValuesByPsn,
  sendCGICommandToGateway,
  batchRead,
  batchWrite,
  clearMockData,
  getAllMockValues,
} from './mockApi';
