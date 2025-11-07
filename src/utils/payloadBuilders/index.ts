// Barrel export for payload builders
export * from './matter';
export * from './modbus';
export * from './cgi';

import { PointDef, EntryValue, EquipmentOption } from '../../types/schema';
import { buildMatterReadPayload, buildMatterWritePayload } from './matter';
import { buildModbusReadPayload, buildModbusWritePayload } from './modbus';
import { buildCGIReadPayload, buildCGIInvokePayload } from './cgi';
import { convertEnumValues, convertBitfieldValues } from '../enumConversion';

/**
 * Builds a unified Read payload for any protocol.
 */
export function buildReadPayload(
  point: PointDef,
  equipment: EquipmentOption
): any {
  const thingId = equipment.thingId;
  const slaveId = equipment.modbusSlaveId;

  // Special handling for generator-exercise widget (CGI protocol)
  if (point.element_type === "custom" && point.widget === "generator-exercise" && point.protocol?.cgi) {
    return buildCGIReadPayload(point, thingId);
  }

  if (point.protocol?.matter) {
    return buildMatterReadPayload(point, thingId);
  }

  if (point.protocol.modbus) {
    return buildModbusReadPayload(point, slaveId);
  }

  return {};
}

/**
 * Builds a unified Write/Invoke payload for any protocol.
 */
export function buildWritePayload(
  point: PointDef,
  formState: EntryValue,
  equipment: EquipmentOption
): any {
  const thingId = equipment.thingId;
  const slaveId = equipment.modbusSlaveId;

  // First, convert enum and bitfield values
  let normalizedArguments = convertEnumValues(point, formState);
  normalizedArguments = convertBitfieldValues(point, normalizedArguments);

  // Special handling for generator-exercise widget (CGI protocol)
  if (point.element_type === "custom" && point.widget === "generator-exercise" && point.protocol?.cgi) {
    return buildCGIInvokePayload(point, normalizedArguments, thingId);
  }

  if (point.protocol?.matter) {
    return buildMatterWritePayload(point, normalizedArguments, thingId);
  }

  if (point.protocol.modbus) {
    return buildModbusWritePayload(point, normalizedArguments, slaveId);
  }

  return {};
}
