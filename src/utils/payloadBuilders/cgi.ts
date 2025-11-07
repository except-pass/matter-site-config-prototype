import { PointDef, EntryValue } from '../../types/schema';

export interface CGIPayload {
  version: string;
  requestId: number;
  method: string;
  endPoint: string;
  timeout: number;
  data: {
    Cluster: string;
    MEP: string;
    Element: string;
    thingId: any;
    cronTimer?: string;
  };
}

/**
 * Builds a CGI Read payload for generator-exercise widget.
 */
export function buildCGIReadPayload(
  point: PointDef,
  thingId: any
): CGIPayload {
  return {
    version: "1.0",
    requestId: Date.now(),
    method: "Read",
    endPoint: "LuaPlugin",
    timeout: 5,
    data: {
      Cluster: point.protocol.cgi!.Cluster,
      MEP: point.protocol.cgi!.MEP,
      Element: point.protocol.cgi!.Element,
      thingId
    }
  };
}

/**
 * Builds a CGI Invoke payload for generator-exercise widget.
 * Converts day/hour/minute to cron expression.
 */
export function buildCGIInvokePayload(
  point: PointDef,
  normalizedArguments: EntryValue,
  thingId: any
): CGIPayload {
  // Enum conversion should have already converted DayOfWeek to wire value (number)
  const dayOfWeek = normalizedArguments.DayOfWeek !== '' && normalizedArguments.DayOfWeek !== null && normalizedArguments.DayOfWeek !== undefined
    ? (typeof normalizedArguments.DayOfWeek === 'number' ? normalizedArguments.DayOfWeek : parseInt(String(normalizedArguments.DayOfWeek), 10))
    : 0;
  const hour = normalizedArguments.Hour !== '' && normalizedArguments.Hour !== null && normalizedArguments.Hour !== undefined
    ? (typeof normalizedArguments.Hour === 'number' ? normalizedArguments.Hour : parseInt(String(normalizedArguments.Hour), 10))
    : 0;
  const minute = normalizedArguments.Minute !== '' && normalizedArguments.Minute !== null && normalizedArguments.Minute !== undefined
    ? (typeof normalizedArguments.Minute === 'number' ? normalizedArguments.Minute : parseInt(String(normalizedArguments.Minute), 10))
    : 0;

  // Generate cron expression (minute hour day-of-month month day-of-week)
  // Note: day-of-week in cron is 0-6 (Sunday=0), which matches our enum
  const cronTimer = `${minute} ${hour} * * ${dayOfWeek}`;

  return {
    version: "1.0",
    requestId: Date.now(),
    method: "Invoke",
    endPoint: "LuaPlugin",
    timeout: 5,
    data: {
      Cluster: point.protocol.cgi!.Cluster,
      MEP: point.protocol.cgi!.MEP,
      cronTimer,
      Element: point.protocol.cgi!.Element,
      thingId
    }
  };
}
