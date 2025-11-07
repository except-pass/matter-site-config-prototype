import { PointDef, EntryValue, EntryDef } from '../types/schema';

/**
 * Converts enum values from friendly UI strings to wire values (for Modbus/CGI)
 * or semantic values (for Matter) based on the point's protocol.
 */
export function convertEnumValues(
  point: PointDef,
  formState: EntryValue
): EntryValue {
  const normalizedArguments: EntryValue = { ...formState };

  // Modbus: use wire values (keys like "0")
  // Matter: use semantic values (strings like "Meter")
  // CGI: use wire values (numbers like 0)
  const useWireValues = point.protocol.modbus !== undefined || point.protocol.cgi !== undefined;

  point.entries.forEach((entry) => {
    if (entry.dtype !== 'enum' || !entry.meanings) {
      return;
    }

    const rawValue = normalizedArguments[entry.arg];
    if (rawValue === undefined || rawValue === null || rawValue === '') {
      return;
    }

    const match = Object.entries(entry.meanings).find(([wireVal, semantic]) => {
      const friendly = entry.friendly_meanings?.[wireVal] ?? semantic;
      return rawValue === friendly || rawValue === semantic;
    });

    if (match) {
      // Modbus/CGI uses wire values as integers (e.g., 0), Matter uses semantic values (e.g., "Meter")
      normalizedArguments[entry.arg] = useWireValues ? parseInt(match[0], 10) : match[1];
    }
  });

  return normalizedArguments;
}

/**
 * Converts bitfield checkbox states to integer values.
 */
export function convertBitfieldValues(
  point: PointDef,
  formState: EntryValue
): EntryValue {
  const normalizedArguments: EntryValue = { ...formState };

  point.entries.forEach((entry) => {
    if (!entry.dtype || !entry.dtype.startsWith('bitfield')) {
      return;
    }

    const bitStates = normalizedArguments[entry.arg] || {};
    let intValue = 0;

    // Set each bit based on the checkbox state
    Object.entries(bitStates).forEach(([bitPos, isSet]) => {
      if (isSet) {
        intValue |= (1 << parseInt(bitPos, 10));
      }
    });

    normalizedArguments[entry.arg] = intValue;
  });

  return normalizedArguments;
}

/**
 * Gets the wire value (integer) for an enum friendly value.
 */
export function getEnumWireValue(entry: EntryDef, friendlyValue: string | number): number {
  if (!entry.meanings) {
    return typeof friendlyValue === 'number' ? friendlyValue : 0;
  }

  const match = Object.entries(entry.meanings).find(([wireVal, semantic]) => {
    const friendly = entry.friendly_meanings?.[wireVal] ?? semantic;
    return friendlyValue === friendly || friendlyValue === semantic;
  });

  return match ? parseInt(match[0], 10) : 0;
}
