import { PointDef, EntryValue } from '../../types/schema';

export interface MatterPayload {
  version: string;
  timeout: number;
  requestId: number;
  endPoint: string;
  method: string;
  data: {
    Elements: Array<{
      MEP: string;
      Cluster: string;
      Element: string;
      arguments?: any;
    }>;
    thingId: any;
  };
}

/**
 * Builds a Matter Read payload for refreshing point values.
 */
export function buildMatterReadPayload(
  point: PointDef,
  thingId: any
): MatterPayload {
  // Check if entries have individual protocol definitions (for multi-element widgets)
  const hasEntryProtocols = point.entries.some(e => e.protocol?.matter);

  let elements;
  if (hasEntryProtocols) {
    // Build multiple Element objects, one per entry with protocol (no arguments for Read)
    elements = point.entries
      .filter(entry => entry.protocol?.matter)
      .map(entry => ({
        MEP: entry.protocol!.matter!.MEP || point.protocol.matter.MEP,
        Cluster: entry.protocol!.matter!.Cluster || point.protocol.matter.Cluster,
        Element: entry.protocol!.matter!.Element || point.protocol.matter.Element,
      }));
  } else {
    // Legacy single-element behavior (no arguments for Read)
    elements = [
      {
        MEP: point.protocol.matter.MEP,
        Cluster: point.protocol.matter.Cluster,
        Element: point.protocol.matter.Element,
      }
    ];
  }

  return {
    version: "1.0",
    timeout: 60,
    requestId: Date.now(),
    endPoint: "Matter",
    method: "Read",
    data: {
      Elements: elements,
      thingId
    }
  };
}

/**
 * Builds a Matter Write or Invoke payload for setting point values.
 */
export function buildMatterWritePayload(
  point: PointDef,
  normalizedArguments: EntryValue,
  thingId: any
): MatterPayload {
  // Check if entries have individual protocol definitions (for multi-element widgets)
  const hasEntryProtocols = point.entries.some(e => e.protocol?.matter);

  let elements;
  if (hasEntryProtocols) {
    // Build multiple Element objects, one per entry with protocol
    elements = point.entries
      .filter(entry => entry.protocol?.matter)
      .map(entry => ({
        MEP: entry.protocol!.matter!.MEP || point.protocol.matter.MEP,
        Cluster: entry.protocol!.matter!.Cluster || point.protocol.matter.Cluster,
        Element: entry.protocol!.matter!.Element || point.protocol.matter.Element,
        arguments: { [entry.arg]: normalizedArguments[entry.arg] }
      }));
  } else {
    // Legacy single-element behavior
    elements = [
      {
        MEP: point.protocol.matter.MEP,
        Cluster: point.protocol.matter.Cluster,
        Element: point.protocol.matter.Element,
        arguments: normalizedArguments
      }
    ];
  }

  return {
    version: "1.0",
    timeout: 60,
    requestId: Date.now(),
    endPoint: "Matter",
    method:
      point.element_type === "service" || point.access === "Invoke"
        ? "Invoke"
        : "Write",
    data: {
      Elements: elements,
      thingId
    }
  };
}
