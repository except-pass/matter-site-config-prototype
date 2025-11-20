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
import demoThemeData from '../pages/siteConfig/themes/demo_rebuilt.json';

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

/**
 * Find a point by its command_id
 */
function findPointById(pointId: string): PointDef | null {
  const page = demoThemeData as any;

  if (!page.themes) return null;

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

  // Find the point definition to build proper protocol payload
  const point = findPointById(request.pointId);
  let payload: any = {};

  if (point && point.protocol) {
    if (point.protocol.matter) {
      // Build Matter protocol payload for read
      payload = {
        version: "1.0",
        timeout: 60,
        requestId: Date.now(),
        endPoint: "Matter",
        method: "Read",
        data: {
          Elements: [
            {
              MEP: point.protocol.matter.MEP,
              Cluster: point.protocol.matter.Cluster,
              Element: point.protocol.matter.Element
            }
          ],
          thingId: {
            Type: "Inverter",
            Mn: "fortress",
            Md: "FP-ENVY-Inverter",
            SN: request.equipmentId
          }
        }
      };
    } else if (point.protocol.modbus) {
      // Build Modbus protocol payload for read
      const registerType = point.protocol.modbus.register_type;
      const functionCode = registerType === 3 ? 3 : 4;

      payload = {
        version: "1.0",
        requestId: Date.now(),
        endPoint: "Modbus",
        method: "Read",
        timeout: 5,
        data: {
          type: "RTU",
          uartPort: 1,
          slaveId: 1,
          address: point.protocol.modbus.address,
          function: functionCode,
          registerNumber: point.protocol.modbus.size
        }
      };
    }
  }

  return {
    value,
    payload: payload,
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

  // Find the point definition to build proper protocol payload
  const point = findPointById(request.pointId);
  let payload: any = {};

  if (point && point.protocol) {
    if (point.protocol.matter) {
      // Build Matter protocol payload
      payload = {
        version: "1.0",
        timeout: 60,
        requestId: Date.now(),
        endPoint: "Matter",
        method:
          point.element_type === "Service" || point.access === "Invoke"
            ? "Invoke"
            : "Write",
        data: {
          Elements: [
            {
              MEP: point.protocol.matter.MEP,
              Cluster: point.protocol.matter.Cluster,
              Element: point.protocol.matter.Element,
              arguments: request.values
            }
          ],
          thingId: {
            Type: "Inverter",
            Mn: "fortress",
            Md: "FP-ENVY-Inverter",
            SN: request.equipmentId
          }
        }
      };
    } else if (point.protocol.modbus) {
      // Build Modbus protocol payload for write
      const functionCode = point.protocol.modbus.size > 1 ? 16 : 6;

      // Get the first value from the request (Modbus writes single value)
      const firstEntryArg = point.entries[0]?.arg;
      let writeValue = firstEntryArg ? request.values[firstEntryArg] : 0;

      // Ensure it's an integer for Modbus
      if (typeof writeValue === 'number') {
        writeValue = Math.round(writeValue);
      } else if (typeof writeValue === 'string') {
        writeValue = parseInt(writeValue, 10) || 0;
      }

      payload = {
        version: "1.0",
        requestId: Date.now(),
        endPoint: "Modbus",
        method: "Write",
        timeout: 5,
        data: {
          type: "RTU",
          uartPort: 1,
          slaveId: 1,
          address: point.protocol.modbus.address,
          function: functionCode,
          value: writeValue
        }
      };
    }
  }

  return {
    success: true,
    timestamp: new Date().toISOString(),
    payload: payload,
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

  // Build proper protocol payload based on point definition
  let payload: any = {};

  if (point.protocol) {
    if (point.protocol.matter) {
      // Build Matter protocol payload for invoke
      payload = {
        version: "1.0",
        timeout: 60,
        requestId: Date.now(),
        endPoint: "Matter",
        method: "Invoke",
        data: {
          Elements: [
            {
              MEP: point.protocol.matter.MEP,
              Cluster: point.protocol.matter.Cluster,
              Element: point.protocol.matter.Element,
              arguments: request.parameters
            }
          ],
          thingId: {
            Type: "Inverter",
            Mn: "fortress",
            Md: "FP-ENVY-Inverter",
            SN: request.equipmentId
          }
        }
      };
    } else if (point.protocol.modbus) {
      // Build Modbus protocol payload for invoke (same as write)
      const functionCode = point.protocol.modbus.size > 1 ? 16 : 6;

      // Get the first value from the parameters
      const firstEntryArg = point.entries[0]?.arg;
      let writeValue = firstEntryArg && request.parameters ? request.parameters[firstEntryArg] : 0;

      // Ensure it's an integer for Modbus
      if (typeof writeValue === 'number') {
        writeValue = Math.round(writeValue);
      } else if (typeof writeValue === 'string') {
        writeValue = parseInt(writeValue, 10) || 0;
      }

      payload = {
        version: "1.0",
        requestId: Date.now(),
        endPoint: "Modbus",
        method: "Write",
        timeout: 5,
        data: {
          type: "RTU",
          uartPort: 1,
          slaveId: 1,
          address: point.protocol.modbus.address,
          function: functionCode,
          value: writeValue
        }
      };
    }
  }

  return {
    success: true,
    timestamp: new Date().toISOString(),
    payload: payload,
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
