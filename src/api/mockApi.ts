/**
 * Mock API Implementation
 *
 * This file provides mock API functions that simulate backend endpoints.
 * In production, these would be replaced with actual HTTP calls to a backend service.
 *
 * Each function has clearly defined request/response types and includes
 * simulated network delay to mimic real API behavior.
 */

import { PageDef, PointDef } from '../types/schema';
import {
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

// Import theme data (in production, this would come from the backend)
import demoThemeData from '../themes/demo_rebuilt.json';

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
  idx: number,
  allEntries: any[]
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
    point.entries.forEach((entry) => {
      entries[entry.arg] = '';
    });
  } else {
    point.entries.forEach((entry, idx) => {
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
  page.themes.forEach((theme) => {
    theme.sections.forEach((section) => {
      section.subsections.forEach((subsection) => {
        subsection.points.forEach((point) => {
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

/**
 * Find a point by its command_id
 */
function findPointById(pointId: string): PointDef | null {
  const pages = demoThemeData as any as { themes: any[] }[];

  for (const page of pages as any) {
    if (!page.themes) continue;

    for (const theme of page.themes) {
      for (const section of theme.sections) {
        for (const subsection of section.subsections) {
          for (const point of subsection.points) {
            if (point.command_id === pointId) {
              return point;
            }
          }
        }
      }
    }
  }

  return null;
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

/**
 * Read a specific point's current value
 *
 * This would typically send a read command to the device via the
 * appropriate protocol (Matter, Modbus, CGI, etc.)
 *
 * @param request - Point to read and equipment context
 * @returns Current value of the point
 */
export async function readPoint(
  request: ReadPointRequest
): Promise<ReadPointResponse> {
  await delay(NETWORK_DELAY);

  // Get or generate the point value
  let value = mockPointValues.get(request.pointId);

  if (!value) {
    // If not in cache, generate from point definition
    const point = findPointById(request.pointId);
    if (!point) {
      throw new Error(`Point ${request.pointId} not found`);
    }

    value = generateMockPointValue(point);
    mockPointValues.set(request.pointId, value);
  }

  // Update lastRead timestamp
  value = {
    ...value,
    lastRead: new Date().toISOString(),
  };
  mockPointValues.set(request.pointId, value);

  // In production, would generate and send actual protocol payload
  const mockPayload = {
    protocol: 'matter',
    pointId: request.pointId,
    equipmentId: request.equipmentId,
    operation: 'read',
  };

  return {
    value,
    payload: mockPayload,
  };
}

/**
 * Write values to a point
 *
 * This would typically send a write command to the device via the
 * appropriate protocol
 *
 * @param request - Point to write and values to set
 * @returns Result of the write operation
 */
export async function writePoint(
  request: WritePointRequest
): Promise<WritePointResponse> {
  await delay(NETWORK_DELAY);

  // Get current value or create new one
  let currentValue = mockPointValues.get(request.pointId);

  if (!currentValue) {
    const point = findPointById(request.pointId);
    if (!point) {
      return {
        success: false,
        error: `Point ${request.pointId} not found`,
        timestamp: new Date().toISOString(),
      };
    }

    currentValue = generateMockPointValue(point);
  }

  // Update the values
  const newValue: PointValue = {
    ...currentValue,
    entries: {
      ...currentValue.entries,
      ...request.values,
    },
    lastRead: new Date().toISOString(),
    success: true,
  };

  // Store the new value
  mockPointValues.set(request.pointId, newValue);

  // In production, would generate and send actual protocol payload
  const mockPayload = {
    protocol: 'matter',
    pointId: request.pointId,
    equipmentId: request.equipmentId,
    operation: 'write',
    values: request.values,
  };

  return {
    success: true,
    timestamp: new Date().toISOString(),
    payload: mockPayload,
    newValue,
  };
}

/**
 * Invoke a service/command point
 *
 * This would typically send an invoke command to execute a service
 * on the device
 *
 * @param request - Command to invoke and parameters
 * @returns Result of the invocation
 */
export async function invokeCommand(
  request: InvokeCommandRequest
): Promise<InvokeCommandResponse> {
  await delay(NETWORK_DELAY);

  const point = findPointById(request.pointId);
  if (!point) {
    return {
      success: false,
      error: `Command ${request.pointId} not found`,
      timestamp: new Date().toISOString(),
    };
  }

  // In production, would generate and send actual protocol payload
  const mockPayload = {
    protocol: 'matter',
    pointId: request.pointId,
    equipmentId: request.equipmentId,
    operation: 'invoke',
    parameters: request.parameters,
  };

  return {
    success: true,
    timestamp: new Date().toISOString(),
    payload: mockPayload,
    result: { status: 'Command executed successfully' },
  };
}

/**
 * Read multiple points in a single batch operation
 *
 * This would typically optimize multiple reads into a single
 * network request or batch device operation
 *
 * @param request - List of points to read
 * @returns Values for all requested points
 */
export async function batchRead(
  request: BatchReadRequest
): Promise<BatchReadResponse> {
  await delay(NETWORK_DELAY);

  const values: Record<string, PointValue> = {};
  let successCount = 0;
  let failureCount = 0;

  for (const pointId of request.pointIds) {
    try {
      const response = await readPoint({
        pointId,
        equipmentId: request.equipmentId,
      });
      values[pointId] = response.value;
      successCount++;
    } catch (error) {
      failureCount++;
      values[pointId] = {
        pointId,
        entries: {},
        lastRead: new Date().toISOString(),
        success: false,
        error: error instanceof Error ? error.message : 'Read failed',
      };
    }
  }

  return {
    values,
    success: failureCount === 0,
    successCount,
    failureCount,
  };
}

/**
 * Write to multiple points in a single batch operation
 *
 * This would typically optimize multiple writes into a single
 * network request or batch device operation
 *
 * @param request - List of points to write
 * @returns Results for all write operations
 */
export async function batchWrite(
  request: BatchWriteRequest
): Promise<BatchWriteResponse> {
  await delay(NETWORK_DELAY);

  const results: Record<string, WritePointResponse> = {};
  let successCount = 0;
  let failureCount = 0;

  for (const write of request.writes) {
    const response = await writePoint({
      pointId: write.pointId,
      equipmentId: request.equipmentId,
      values: write.values,
    });

    results[write.pointId] = response;

    if (response.success) {
      successCount++;
    } else {
      failureCount++;
    }
  }

  return {
    results,
    success: failureCount === 0,
    successCount,
    failureCount,
  };
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
