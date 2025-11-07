import { PointDef, EntryValue } from '../../types/schema';

export interface ModbusPayload {
  version: string;
  requestId: number;
  endPoint: string;
  method: string;
  timeout: number;
  data: {
    type: string;
    uartPort: number;
    slaveId: number;
    address: number;
    function: number;
    registerNumber?: number;
    value?: number;
  };
}

/**
 * Builds a Modbus Read payload for refreshing point values.
 */
export function buildModbusReadPayload(
  point: PointDef,
  slaveId: number
): ModbusPayload {
  const registerType = point.protocol.modbus!.register_type;
  // For read operations: use function based on register type
  const functionCode = registerType === 3 ? 3 : 4;

  return {
    version: "1.0",
    requestId: Date.now(),
    endPoint: "Modbus",
    method: "Read",
    timeout: 5,
    data: {
      type: "RTU",
      uartPort: 1,
      slaveId,
      address: point.protocol.modbus!.address,
      function: functionCode,
      registerNumber: point.protocol.modbus!.size
    }
  };
}

/**
 * Builds a Modbus Write payload for setting point values.
 */
export function buildModbusWritePayload(
  point: PointDef,
  normalizedArguments: EntryValue,
  slaveId: number
): ModbusPayload {
  const registerType = point.protocol.modbus!.register_type;

  // Map register type to Modbus function code
  // For writing: 6 = write single register, 16 = write multiple registers
  const functionCode = point.protocol.modbus!.size > 1 ? 16 : 6;

  // Get the first value from normalizedArguments (for write operations)
  // Note: normalizedArguments already contains wire values (integers) for modbus with scale_factor
  // because EntryField converts display values to wire values when editing
  const firstEntryArg = point.entries[0]?.arg;
  let writeValue = firstEntryArg ? normalizedArguments[firstEntryArg] : 0;

  // Scale factor conversion is already handled in EntryField when editing
  // The value in normalizedArguments is already the wire value (integer)
  // But we still need to ensure it's an integer for modbus
  if (point.protocol.modbus && typeof writeValue === 'number') {
    writeValue = Math.round(writeValue);
  }

  return {
    version: "1.0",
    requestId: Date.now(),
    endPoint: "Modbus",
    method: "Write",
    timeout: 5,
    data: {
      type: "RTU",
      uartPort: 1,
      slaveId,
      address: point.protocol.modbus!.address,
      function: functionCode,
      value: writeValue
    }
  };
}
