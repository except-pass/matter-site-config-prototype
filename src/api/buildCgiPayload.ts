/**
 * Utility functions to build CGI command payloads
 *
 * These helpers construct the proper CGI command payload structure
 * for different protocols (Matter, Modbus) based on point definitions.
 */

import { PointDef, EntryValue } from '../pages/siteConfig/types/schema';

/**
 * Build a CGI payload for reading a point
 */
export function buildReadPayload(
  point: PointDef,
  equipmentId: string
): any {
  if (!point.protocol) {
    throw new Error(`Point ${point.command_id} has no protocol definition`);
  }

  if (point.protocol.matter) {
    return {
      version: '1.0',
      timeout: 60,
      requestId: Date.now(),
      endPoint: 'Matter',
      method: 'Read',
      data: {
        Elements: [
          {
            MEP: point.protocol.matter.MEP,
            Cluster: point.protocol.matter.Cluster,
            Element: point.protocol.matter.Element,
          },
        ],
        thingId: {
          Type: 'Inverter',
          Mn: 'fortress',
          Md: 'FP-ENVY-Inverter',
          SN: equipmentId,
        },
      },
    };
  } else if (point.protocol.modbus) {
    const registerType = point.protocol.modbus.register_type;
    const functionCode = registerType === 3 ? 3 : 4;

    return {
      version: '1.0',
      requestId: Date.now(),
      endPoint: 'Modbus',
      method: 'Read',
      timeout: 5,
      data: {
        type: 'RTU',
        uartPort: 1,
        slaveId: 1,
        address: point.protocol.modbus.address,
        function: functionCode,
        registerNumber: point.protocol.modbus.size,
      },
    };
  }

  throw new Error(`Unsupported protocol for point ${point.command_id}`);
}

/**
 * Build a CGI payload for writing to a point
 */
export function buildWritePayload(
  point: PointDef,
  equipmentId: string,
  values: Record<string, EntryValue>
): any {
  if (!point.protocol) {
    throw new Error(`Point ${point.command_id} has no protocol definition`);
  }

  if (point.protocol.matter) {
    const method =
      point.element_type === 'Service' || point.access === 'Invoke'
        ? 'Invoke'
        : 'Write';

    return {
      version: '1.0',
      timeout: 60,
      requestId: Date.now(),
      endPoint: 'Matter',
      method,
      data: {
        Elements: [
          {
            MEP: point.protocol.matter.MEP,
            Cluster: point.protocol.matter.Cluster,
            Element: point.protocol.matter.Element,
            arguments: values,
          },
        ],
        thingId: {
          Type: 'Inverter',
          Mn: 'fortress',
          Md: 'FP-ENVY-Inverter',
          SN: equipmentId,
        },
      },
    };
  } else if (point.protocol.modbus) {
    const functionCode = point.protocol.modbus.size > 1 ? 16 : 6;

    // Get the first value from the request (Modbus writes single value)
    const firstEntryArg = point.entries[0]?.arg;
    let writeValue = firstEntryArg ? values[firstEntryArg] : 0;

    // Ensure it's an integer for Modbus
    if (typeof writeValue === 'number') {
      writeValue = Math.round(writeValue);
    } else if (typeof writeValue === 'string') {
      writeValue = parseInt(writeValue, 10) || 0;
    }

    return {
      version: '1.0',
      requestId: Date.now(),
      endPoint: 'Modbus',
      method: 'Write',
      timeout: 5,
      data: {
        type: 'RTU',
        uartPort: 1,
        slaveId: 1,
        address: point.protocol.modbus.address,
        function: functionCode,
        value: writeValue,
      },
    };
  }

  throw new Error(`Unsupported protocol for point ${point.command_id}`);
}

/**
 * Build a CGI payload for invoking a command
 */
export function buildInvokePayload(
  point: PointDef,
  equipmentId: string,
  parameters: Record<string, EntryValue>
): any {
  if (!point.protocol) {
    throw new Error(`Point ${point.command_id} has no protocol definition`);
  }

  if (point.protocol.matter) {
    return {
      version: '1.0',
      timeout: 60,
      requestId: Date.now(),
      endPoint: 'Matter',
      method: 'Invoke',
      data: {
        Elements: [
          {
            MEP: point.protocol.matter.MEP,
            Cluster: point.protocol.matter.Cluster,
            Element: point.protocol.matter.Element,
            arguments: parameters,
          },
        ],
        thingId: {
          Type: 'Inverter',
          Mn: 'fortress',
          Md: 'FP-ENVY-Inverter',
          SN: equipmentId,
        },
      },
    };
  } else if (point.protocol.modbus) {
    const functionCode = point.protocol.modbus.size > 1 ? 16 : 6;

    // Get the first value from the parameters
    const firstEntryArg = point.entries[0]?.arg;
    let writeValue = firstEntryArg && parameters ? parameters[firstEntryArg] : 0;

    // Ensure it's an integer for Modbus
    if (typeof writeValue === 'number') {
      writeValue = Math.round(writeValue);
    } else if (typeof writeValue === 'string') {
      writeValue = parseInt(writeValue, 10) || 0;
    }

    return {
      version: '1.0',
      requestId: Date.now(),
      endPoint: 'Modbus',
      method: 'Write',
      timeout: 5,
      data: {
        type: 'RTU',
        uartPort: 1,
        slaveId: 1,
        address: point.protocol.modbus.address,
        function: functionCode,
        value: writeValue,
      },
    };
  }

  throw new Error(`Unsupported protocol for point ${point.command_id}`);
}
