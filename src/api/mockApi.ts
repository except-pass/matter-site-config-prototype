/**
 * Mock API Implementation
 *
 * This file provides mock API functions that simulate backend endpoints.
 * In production, these would be replaced with actual HTTP calls to a backend service.
 *
 * Each function has clearly defined request/response types and includes
 * simulated network delay to mimic real API behavior.
 */

import { PageDef, PointDef } from '../pages/siteConfig/types/schema';
import {
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
  GetPointThemesRequest,
  GetPointThemesResponse,
  GetPointValuesByPsnRequest,
  GetPointValuesByPsnResponse,
  SendCGICommandRequest,
  SendCGICommandResponse,
  GetWorkspacesRequest,
  GetWorkspacesResponse,
  GetWorkspaceRequest,
  GetWorkspaceResponse,
  CreateWorkspaceRequest,
  CreateWorkspaceResponse,
  UpdateWorkspaceRequest,
  UpdateWorkspaceResponse,
  DeleteWorkspaceRequest,
  DeleteWorkspaceResponse,
  SetDefaultWorkspaceRequest,
  SetDefaultWorkspaceResponse,
} from './types';
import type { Workspace, WorkspaceListItem } from '../pages/historicData/types';

// Import theme data (in production, this would come from the backend)
import envyThemeData from '../pages/siteConfig/themes/envy_themes.json';
import matterThemeData from '../pages/siteConfig/themes/matter_themes.json';

/**
 * Merge two theme files by combining themes, sections, and subsections
 */
function mergeThemeData(envyData: { themes: any[] }, matterData: { themes: any[] }): { themes: any[] } {
  const mergedThemes: any[] = [];

  // Create a map of themes by name for quick lookup
  const themeMap = new Map<string, any>();

  // First, add all matter themes (base themes)
  matterData.themes.forEach((theme) => {
    const themeKey = theme.themeName || theme.theme_id || '';
    const themeCopy = {
      ...theme,
      sections: theme.sections.map((section: any) => ({
        ...section,
        subsections: [...section.subsections],
      })),
    };
    themeMap.set(themeKey, themeCopy);
    mergedThemes.push(themeCopy);
  });

  // Then, merge envy themes into matter themes
  envyData.themes.forEach((envyTheme) => {
    const themeKey = envyTheme.themeName || envyTheme.theme_id || '';
    let matterTheme = themeMap.get(themeKey);

    if (!matterTheme) {
      // Theme doesn't exist in matter, add it
      matterTheme = {
        ...envyTheme,
        sections: envyTheme.sections.map((section: any) => ({
          ...section,
          subsections: [...section.subsections],
        })),
      };
      themeMap.set(themeKey, matterTheme);
      mergedThemes.push(matterTheme);
      return;
    }

    // Merge sections
    envyTheme.sections.forEach((envySection: any) => {
      const sectionKey = envySection.section_id || envySection.sectionTitle || '';
      let matterSection = matterTheme.sections.find(
        (s: any) => (s.section_id || s.sectionTitle) === sectionKey
      );

      if (!matterSection) {
        // Section doesn't exist in matter, add it
        matterTheme.sections.push({
          ...envySection,
          subsections: [...envySection.subsections],
        });
      } else {
        // Section exists, append envy subsections to matter subsections
        matterSection.subsections.push(...envySection.subsections);
      }
    });
  });

  return { themes: mergedThemes };
}

// Merge the split theme files
const demoThemeData = mergeThemeData(envyThemeData, matterThemeData);

// ============================================================================
// Mock Data Store
// ============================================================================

/**
 * In-memory storage for current point values
 * In production, this would be stored in a database or device memory
 */
const mockPointValues: Map<string, PointValue> = new Map();

/**
 * Configuration version tracking
 */
const MOCK_CONFIG_VERSION = '1.0.0';

/**
 * Simulated network delay (in ms)
 */
const NETWORK_DELAY = 100;

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Simulate network delay
 */
const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Generate a mock initial value for an entry based on its definition
 */
function generateMockEntryValue(
  entry: any,
  _idx: number,
  _allEntries: any[]
): EntryValue {
  // If a default value is specified, use it
  if (entry.value !== undefined) {
    return entry.dtype === 'Number' && entry.value !== ''
      ? Number(entry.value)
      : entry.value;
  }

  // Generate value based on data type
  switch (entry.dtype) {
    case 'Number': {
      const range = entry.range;
      if (!range) return 0;

      // For ranged values, generate a realistic value
      const rangeSpan = range.max - range.min;

      // Check for constraints to generate sensible defaults
      if (entry.less_than) {
        // This is a "low" value - use 30% of range
        return Math.round(range.min + rangeSpan * 0.3);
      } else if (entry.greater_than) {
        // This is a "high" value - use 70% of range
        return Math.round(range.min + rangeSpan * 0.7);
      }

      // For time-related fields, generate current time values
      if (entry.arg === 'Year') return new Date().getFullYear() % 100;
      if (entry.arg === 'Mon') return new Date().getMonth() + 1;
      if (entry.arg === 'Day') return new Date().getDate();
      if (entry.arg === 'Hour') return new Date().getHours();
      if (entry.arg === 'Min') return new Date().getMinutes();
      if (entry.arg === 'Sec') return new Date().getSeconds();

      // Default to middle of range
      return Math.round(range.min + rangeSpan * 0.5);
    }

    case 'enum': {
      // Return the first friendly value
      const firstWireVal = Object.keys(entry.meanings ?? {})[0];
      if (!firstWireVal) return '';

      const friendlyValue =
        entry.friendly_meanings?.[firstWireVal] ??
        entry.meanings?.[firstWireVal] ??
        '';
      return friendlyValue;
    }

    case 'String':
      return entry.arg === 'Name' ? 'Inverter 1' : '';

    default:
      // Handle bitfield types
      if (entry.dtype && entry.dtype.startsWith('bitfield')) {
        const bitStates: Record<string, boolean> = {};
        if (entry.meanings) {
          Object.keys(entry.meanings).forEach((bitPos) => {
            // Randomly set some bits for demo purposes
            bitStates[bitPos] = Math.random() > 0.7;
          });
        }
        return bitStates;
      }

      return '';
  }
}

/**
 * Generate mock values for a point
 */
function generateMockPointValue(point: PointDef): PointValue {
  const entries: Record<string, EntryValue> = {};

  // Special handling for generator-exercise widget
  if (point.widget === 'generator-exercise') {
    point.entries.forEach((entry: any) => {
      entries[entry.arg] = '';
    });
  } else {
    point.entries.forEach((entry: any, idx: number) => {
      entries[entry.arg] = generateMockEntryValue(
        entry,
        idx,
        point.entries
      );
    });
  }

  return {
    pointId: point.command_id,
    entries,
    lastRead: new Date().toISOString(),
    success: true,
  };
}

/**
 * Initialize mock values for all points in a page
 */
function initializeMockValues(page: PageDef): void {
  page.themes.forEach((theme: any) => {
    theme.sections.forEach((section: any) => {
      section.subsections.forEach((subsection: any) => {
        subsection.points.forEach((point: any) => {
          if (!mockPointValues.has(point.command_id)) {
            mockPointValues.set(
              point.command_id,
              generateMockPointValue(point)
            );
          }
        });
      });
    });
  });
}

// ============================================================================
// Mock API Functions
// ============================================================================

/**
 * Fetch site configuration definitions
 *
 * This would typically query a backend service that stores the device
 * configuration schema (commands, their structure, protocol details, etc.)
 *
 * @param request - Optional filters for page and equipment
 * @returns Site configuration with all page definitions
 */
export async function fetchSiteConfig(
  request: FetchSiteConfigRequest = {}
): Promise<FetchSiteConfigResponse> {
  await delay(NETWORK_DELAY);

  // Load theme data (in production, this comes from the backend)
  const pages: PageDef[] = [
    {
      pageName: 'Inverter Configuration',
      themes: demoThemeData.themes,
    } as any,
  ];

  // Initialize mock values for all points on first load
  pages.forEach((page) => initializeMockValues(page));

  // Filter by pageId if provided
  let filteredPages = pages;
  if (request.pageId) {
    filteredPages = pages.filter(
      (p) => p.pageName.toLowerCase().replace(/\s+/g, '-') === request.pageId
    );
  }

  return {
    pages: filteredPages,
    lastModified: new Date().toISOString(),
    version: MOCK_CONFIG_VERSION,
  };
}

/**
 * Fetch current values for multiple points
 *
 * This would typically read the current state from the device or a cache
 *
 * @param request - Filter for specific points and equipment
 * @returns Current values for requested points
 */
export async function fetchPointValues(
  request: FetchPointValuesRequest
): Promise<FetchPointValuesResponse> {
  await delay(NETWORK_DELAY);

  const values: Record<string, PointValue> = {};

  // If specific point IDs requested, only return those
  if (request.pointIds && request.pointIds.length > 0) {
    request.pointIds.forEach((pointId) => {
      const value = mockPointValues.get(pointId);
      if (value) {
        values[pointId] = value;
      }
    });
  } else {
    // Return all values
    mockPointValues.forEach((value, pointId) => {
      values[pointId] = value;
    });
  }

  return {
    values,
    timestamp: new Date().toISOString(),
  };
}

// ============================================================================
// New API Functions
// ============================================================================

/**
 * Get gateway online/offline status
 *
 * Mock implementation that always returns online.
 * In a real implementation, this should query ra-telemetry latest values for:
 * - model=lifecycle_events
 * - gsn=<gateway SN>
 * - fields=["is_online"]
 * A value of 1 means the gateway is currently online, 0 means offline.
 *
 * @param request - Gateway serial number
 * @returns Gateway online status
 */
export async function getGatewayStatus(
  _request: GetGatewayStatusRequest
): Promise<GetGatewayStatusResponse> {
  await delay(NETWORK_DELAY);

  // Mock: always return online
  // TODO: In real implementation, query ra-telemetry:
  // SELECT is_online FROM lifecycle_events WHERE gsn = _request.gatewaySn ORDER BY timestamp DESC LIMIT 1
  return {
    isOnline: true,
    timestamp: new Date().toISOString(),
  };
}

/**
 * Get equipment to guardian linkage
 *
 * Patterns after RA-Physical method GetEquipmentsAtSite.
 * Shows the list of serial numbers and which inverter SN is attached to which gateway.
 *
 * @param request - Site ID to query
 * @returns Equipment mappings by gateway
 */
export async function getEquipmentsAtSite(
  request: GetEquipmentsAtSiteRequest
): Promise<GetEquipmentsAtSiteResponse> {
  await delay(NETWORK_DELAY);

  // Mock data: return sample equipment mappings - 1 gateway per inverter
  // Using serial numbers that match the equipmentOptions in types/equipment.ts
  return {
    items: [
      {
        gateway_sn: 'GW001234567890',
        equipments: [
          {
            id: 'envy-04237218B0',
            sn: '04237218B0',
            md: 'FP-ENVY-Inverter',
            md_name: 'Fortress Power ENVY Inverter',
            site_id: request.site_id,
            is_primary: true,
            product_type: 'Inverter',
            sub_product_type: 'Hybrid',
            software_version: '1.2.3',
            arm_sub_product_type: 'ARM-V1',
            arm_software_version: '1.2.3',
            dsp_sub_product_type: 'DSP-V1',
            dsp_software_version: '2.3.4',
            firmwares: [
              { name: 'ARM', version: '1.2.3' },
              { name: 'DSP', version: '2.3.4' },
            ],
          },
        ],
      },
      {
        gateway_sn: 'GW002234567890',
        equipments: [
          {
            id: 'envy-04237219C3',
            sn: '04237219C3',
            md: 'FP-ENVY-Inverter',
            md_name: 'Fortress Power ENVY Inverter',
            site_id: request.site_id,
            is_primary: false,
            product_type: 'Inverter',
            sub_product_type: 'Hybrid',
            software_version: '1.2.3',
            arm_sub_product_type: 'ARM-V1',
            arm_software_version: '1.2.3',
            dsp_sub_product_type: 'DSP-V1',
            dsp_software_version: '2.3.4',
            firmwares: [
              { name: 'ARM', version: '1.2.3' },
              { name: 'DSP', version: '2.3.4' },
            ],
          },
        ],
      },
    ],
    success: true,
    message: 'Equipment retrieved successfully',
    request_id: request.request_id,
    code: 200,
  };
}

/**
 * Get point themes for a site
 *
 * Given a siteID, returns the point themes JSON from the mock backend.
 *
 * @param request - Site ID to query
 * @returns Point themes configuration
 */
export async function getPointThemes(
  _request: GetPointThemesRequest
): Promise<GetPointThemesResponse> {
  await delay(NETWORK_DELAY);

  // Return the demo theme data
  // In production, this would filter by _request.siteId
  return {
    themes: demoThemeData.themes,
    timestamp: new Date().toISOString(),
  };
}

/**
 * Get point values by product serial number
 *
 * Given a siteID and product serial number (PSN), loads the latest values
 * from 40104 model for the given PSN.
 *
 * @param request - Site ID and product serial number
 * @returns Point values for the specified equipment
 */
export async function getPointValuesByPsn(
  request: GetPointValuesByPsnRequest
): Promise<GetPointValuesByPsnResponse> {
  await delay(NETWORK_DELAY);

  // For mock purposes, return all cached point values
  // In real implementation, this would query 40104 model filtered by PSN
  const values: Record<string, PointValue> = {};
  mockPointValues.forEach((value, pointId) => {
    values[pointId] = value;
  });

  return {
    values,
    timestamp: new Date().toISOString(),
    psn: request.psn,
  };
}

/**
 * Send CGI command to gateway
 *
 * Unified endpoint that replaces ReadPointRequest, WritePointRequest, and InvokeCommandRequest.
 * The frontend constructs the CGI command payload and sends it to this endpoint.
 *
 * @param request - Gateway SN and CGI command payload
 * @returns Response from the gateway
 */
export async function sendCGICommandToGateway(
  request: SendCGICommandRequest
): Promise<SendCGICommandResponse> {
  await delay(NETWORK_DELAY);

  try {
    // Parse the payload to determine the operation type
    const { payload } = request;

    if (!payload || !payload.method) {
      return {
        success: false,
        error: 'Invalid payload: missing method',
        timestamp: new Date().toISOString(),
      };
    }

    // Handle different methods
    switch (payload.method) {
      case 'Read': {
        // Extract point information from payload
        const elements = payload.data?.Elements;
        if (!elements || elements.length === 0) {
          return {
            success: false,
            error: 'No elements specified for read operation',
            timestamp: new Date().toISOString(),
          };
        }

        // For mock purposes, find and return the point value
        // In real implementation, this would send the CGI command to the gateway
        const element = elements[0];
        const pointId = `${element.Cluster}.${element.Element}`;
        const value = mockPointValues.get(pointId);

        return {
          success: true,
          data: value || { entries: {} },
          timestamp: new Date().toISOString(),
        };
      }

      case 'Write': {
        // Extract point information and values from payload
        const elements = payload.data?.Elements;
        if (!elements || elements.length === 0) {
          return {
            success: false,
            error: 'No elements specified for write operation',
            timestamp: new Date().toISOString(),
          };
        }

        const element = elements[0];
        const pointId = `${element.Cluster}.${element.Element}`;

        // Update the mock value
        let currentValue = mockPointValues.get(pointId);
        if (currentValue) {
          currentValue = {
            ...currentValue,
            entries: {
              ...currentValue.entries,
              ...element.arguments,
            },
            lastRead: new Date().toISOString(),
          };
          mockPointValues.set(pointId, currentValue);
        }

        return {
          success: true,
          data: currentValue,
          timestamp: new Date().toISOString(),
        };
      }

      case 'Invoke': {
        // Handle invoke command
        const elements = payload.data?.Elements;
        if (!elements || elements.length === 0) {
          return {
            success: false,
            error: 'No elements specified for invoke operation',
            timestamp: new Date().toISOString(),
          };
        }

        return {
          success: true,
          data: { status: 'Command executed successfully' },
          timestamp: new Date().toISOString(),
        };
      }

      default:
        return {
          success: false,
          error: `Unknown method: ${payload.method}`,
          timestamp: new Date().toISOString(),
        };
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    };
  }
}

/**
 * Clear all mock data (useful for testing)
 */
export function clearMockData(): void {
  mockPointValues.clear();
}

/**
 * Get all mock values (useful for debugging)
 */
export function getAllMockValues(): Map<string, PointValue> {
  return new Map(mockPointValues);
}

// ============================================================================
// Workspace Management Mock API
// ============================================================================

const WORKSPACES_STORAGE_KEY = 'historicalData_workspaces';
const WORKSPACE_COUNTER_KEY = 'historicalData_workspaceCounter';

/**
 * In-memory storage for workspaces
 * In production, this would be stored in a database
 */
const mockWorkspaces = new Map<string, Workspace>();

/**
 * Counter for generating unique workspace IDs
 */
let workspaceIdCounter = 0;

/**
 * Save workspaces to localStorage
 */
function saveWorkspacesToStorage(): void {
  try {
    const workspacesArray = Array.from(mockWorkspaces.values());
    localStorage.setItem(WORKSPACES_STORAGE_KEY, JSON.stringify(workspacesArray));
    localStorage.setItem(WORKSPACE_COUNTER_KEY, String(workspaceIdCounter));
  } catch (error) {
    console.error('Failed to save workspaces to localStorage:', error);
  }
}

/**
 * Load workspaces from localStorage
 */
function loadWorkspacesFromStorage(): void {
  try {
    const stored = localStorage.getItem(WORKSPACES_STORAGE_KEY);
    const counterStored = localStorage.getItem(WORKSPACE_COUNTER_KEY);

    if (stored) {
      const workspacesArray = JSON.parse(stored) as Workspace[];
      mockWorkspaces.clear();
      workspacesArray.forEach(workspace => {
        mockWorkspaces.set(workspace.id, workspace);
      });
    }

    if (counterStored) {
      workspaceIdCounter = parseInt(counterStored, 10);
    }
  } catch (error) {
    console.error('Failed to load workspaces from localStorage:', error);
  }
}

/**
 * Initialize with a default workspace if none exist
 */
function initializeDefaultWorkspace(): void {
  // First try to load from storage
  loadWorkspacesFromStorage();

  // If no workspaces exist, create built-in workspace
  if (mockWorkspaces.size === 0) {
    const powerFlowsWorkspace: Workspace = {
      id: 'ws-builtin-power-flows',
      name: 'Power Flows',
      type: 'builtin',
      isDefault: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      data: {
        charts: [
          {
            id: 'chart-0',
            row: 0,
            col: 0,
            selectedPoints: {
              '40101:pPvTotal': ['001'],
              '40101:pGridImpTot': ['001'],
              '40101:pGridExpTot': ['001'],
              '40101:pBatChg': ['001'],
              '40101:pBatDischg': ['001'],
            },
          },
          {
            id: 'chart-1',
            row: 0,
            col: 1,
            selectedPoints: {
              'lifecycle_events:is_online': ['001'],
              '40101:gridStat': ['001'],
            },
          },
          {
            id: 'chart-2',
            row: 1,
            col: 0,
            selectedPoints: {
              '40101:socBat': ['001'],
            },
          },
          {
            id: 'chart-3',
            row: 1,
            col: 1,
            selectedPoints: {},
          },
        ],
        rowHeights: { 0: 520, 1: 520 },
        columnWidths: { 0: 780, 1: 780 },
        nextChartId: 4,
        activeChartId: 'chart-0',
      },
    };
    mockWorkspaces.set(powerFlowsWorkspace.id, powerFlowsWorkspace);
    workspaceIdCounter = 1;
    saveWorkspacesToStorage();
  }
}

// Initialize workspaces on module load
initializeDefaultWorkspace();

/**
 * Get all workspaces
 */
export async function getWorkspaces(
  request: GetWorkspacesRequest
): Promise<GetWorkspacesResponse> {
  await delay(100);

  let workspaces = Array.from(mockWorkspaces.values());

  // Apply limit if provided
  if (request.limit && request.limit > 0) {
    workspaces = workspaces.slice(0, request.limit);
  }

  // Convert to list items
  const workspaceList: WorkspaceListItem[] = workspaces.map((ws) => ({
    id: ws.id,
    name: ws.name,
    type: ws.type,
    isDefault: ws.isDefault,
    createdAt: ws.createdAt,
    updatedAt: ws.updatedAt,
    chartCount: ws.data.charts.length,
  }));

  return {
    workspaces: workspaceList,
    total: workspaceList.length,
  };
}

/**
 * Get a specific workspace by ID
 */
export async function getWorkspace(
  request: GetWorkspaceRequest
): Promise<GetWorkspaceResponse> {
  await delay(100);

  const workspace = mockWorkspaces.get(request.id);

  if (!workspace) {
    throw new Error(`Workspace not found: ${request.id}`);
  }

  return {
    workspace,
  };
}

/**
 * Create a new workspace
 */
export async function createWorkspace(
  request: CreateWorkspaceRequest
): Promise<CreateWorkspaceResponse> {
  await delay(150);

  const now = new Date().toISOString();
  const workspace: Workspace = {
    id: `ws-${workspaceIdCounter++}`,
    name: request.name,
    type: 'user',
    isDefault: false,
    createdAt: now,
    updatedAt: now,
    data: request.data,
  };

  mockWorkspaces.set(workspace.id, workspace);
  saveWorkspacesToStorage();

  return {
    workspace,
    message: 'Workspace created successfully',
  };
}

/**
 * Update an existing workspace
 */
export async function updateWorkspace(
  request: UpdateWorkspaceRequest
): Promise<UpdateWorkspaceResponse> {
  await delay(150);

  const workspace = mockWorkspaces.get(request.id);

  if (!workspace) {
    throw new Error(`Workspace not found: ${request.id}`);
  }

  // Prevent renaming of built-in workspaces
  if (workspace.type === 'builtin' && request.name && request.name !== workspace.name) {
    throw new Error('Cannot rename built-in workspaces');
  }

  const now = new Date().toISOString();
  const updatedWorkspace: Workspace = {
    ...workspace,
    name: request.name ?? workspace.name,
    data: request.data ?? workspace.data,
    updatedAt: now,
  };

  mockWorkspaces.set(request.id, updatedWorkspace);
  saveWorkspacesToStorage();

  return {
    workspace: updatedWorkspace,
    message: 'Workspace updated successfully',
  };
}

/**
 * Delete a workspace
 */
export async function deleteWorkspace(
  request: DeleteWorkspaceRequest
): Promise<DeleteWorkspaceResponse> {
  await delay(100);

  const workspace = mockWorkspaces.get(request.id);

  if (!workspace) {
    throw new Error(`Workspace not found: ${request.id}`);
  }

  // Prevent deletion of built-in workspaces
  if (workspace.type === 'builtin') {
    throw new Error('Cannot delete built-in workspaces');
  }

  mockWorkspaces.delete(request.id);
  saveWorkspacesToStorage();

  return {
    success: true,
    message: 'Workspace deleted successfully',
  };
}

/**
 * Set a workspace as default
 */
export async function setDefaultWorkspace(
  request: SetDefaultWorkspaceRequest
): Promise<SetDefaultWorkspaceResponse> {
  await delay(100);

  const workspace = mockWorkspaces.get(request.id);

  if (!workspace) {
    throw new Error(`Workspace not found: ${request.id}`);
  }

  // Unset all other workspaces as default
  mockWorkspaces.forEach((ws) => {
    ws.isDefault = false;
  });

  // Set the requested workspace as default
  workspace.isDefault = true;
  mockWorkspaces.set(workspace.id, workspace);
  saveWorkspacesToStorage();

  return {
    workspace,
    message: 'Default workspace updated successfully',
  };
}

/**
 * Get the default workspace
 */
export async function getDefaultWorkspace(): Promise<GetWorkspaceResponse | null> {
  await delay(100);

  const defaultWorkspace = Array.from(mockWorkspaces.values()).find(
    (ws) => ws.isDefault
  );

  if (!defaultWorkspace) {
    return null;
  }

  return {
    workspace: defaultWorkspace,
  };
}

/**
 * Clear all workspaces (useful for testing)
 */
export function clearWorkspaces(): void {
  mockWorkspaces.clear();
  workspaceIdCounter = 0;
  initializeDefaultWorkspace();
}
