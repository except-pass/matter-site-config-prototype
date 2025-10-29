// widgetConfig.ts
// Widget configuration for points that need special UI components

export type WidgetType =
  | "datetime"      // Date and time picker
  | "time"          // Time-only picker
  | "timerange"     // Start and end time picker
  | "default";      // Default field-by-field UI

export type TimeEncoding =
  | "separate"      // Separate Hour/Minute entries (default)
  | "packed_hm";    // Packed int16: high byte = hour, low byte = minute

export interface WidgetConfig {
  uuid: string;
  widget: WidgetType;
  encoding?: TimeEncoding;        // How time values are encoded (default: "separate")
  packedTimeEntry?: string;       // Entry name for packed time (datetime/time widgets)
  packedStartEntry?: string;      // Entry name for packed start time (timerange widget)
  packedEndEntry?: string;        // Entry name for packed end time (timerange widget)
}

/**
 * Widget configurations for points.
 * Determines which special widget to use for rendering.
 */
export const widgetConfigs: WidgetConfig[] = [
  // System Time - full datetime picker
  {
    uuid: "Basic.SystemTime",
    widget: "datetime",
  },

  // Battery TOU Charge - time range pickers
  {
    uuid: "BatteryTOUCharge.TOUChargingPlan1",
    widget: "timerange",
  },
  {
    uuid: "BatteryTOUCharge.TOUChargingPlan2",
    widget: "timerange",
  },
  {
    uuid: "BatteryTOUCharge.TOUChargingPlan3",
    widget: "timerange",
  },

  // Battery TOU Discharge - time range pickers
  {
    uuid: "BatteryTOUDischarge.TOUDischargingPlan1",
    widget: "timerange",
  },
  {
    uuid: "BatteryTOUDischarge.TOUDischargingPlan2",
    widget: "timerange",
  },
  {
    uuid: "BatteryTOUDischarge.TOUDischargingPlan3",
    widget: "timerange",
  },

  // Add more widget configs as needed
];

/**
 * Get widget type for a point by UUID
 */
export function getWidgetType(uuid: string): WidgetType {
  const config = widgetConfigs.find(c => c.uuid === uuid);
  return config?.widget ?? "default";
}

/**
 * Get full widget configuration for a point by UUID
 */
export function getWidgetConfig(uuid: string): WidgetConfig | undefined {
  return widgetConfigs.find(c => c.uuid === uuid);
}
