// pointTransforms.ts
// Comprehensive point-level transformations for cosmetic improvements

interface EntryTransform {
  /** New name for the entry */
  name?: string;
  /** New description */
  description?: string;
  /** New long description */
  longdescription?: string;
  /** Override friendly display labels for enum options */
  friendly_meanings?: Record<string, string>;

  // Fields for injecting new entries (if entry doesn't exist)
  /** Data type for new entry */
  dtype?: 'enum' | 'String' | 'Number';
  /** Unit for new entry */
  unit?: string;
  /** Range for new entry */
  range?: { min: number; max: number };
  /** Default value for new entry */
  value?: string | number;
  /** Enum meanings for new entry */
  meanings?: Record<string, string>;

  // Constraints for slider widgets
  /** This entry's value must be greater than the specified entry */
  greater_than?: string;
  /** This entry's value must be less than the specified entry */
  less_than?: string;
}

interface SectionTransform {
  /** New title for the section */
  title?: string;
}

interface SubsectionTransform {
  /** New title for the subsection */
  title?: string | null;
}

interface PointTransform {
  /** Identify the point by UUID (e.g., "BatteryBase.ChaDisChaCtrlType") */
  uuid: string;
  /** New title for the point */
  title?: string;
  /** New help text for the point */
  help?: string;
  /** Transformations for specific entries within the point */
  entries?: Record<string, EntryTransform>;
  /** Optional section-level overrides */
  section?: SectionTransform;
  /** Optional subsection-level overrides */
  subsection?: SubsectionTransform;
}

/**
 * Array of point transformations to apply.
 * Each transformation targets a specific point by UUID and can modify
 * the point's title, help text, and individual entry properties.
 */
export const pointTransforms: PointTransform[] = [
  {
    uuid: "BatteryBase.BatteryType",
    title: "Battery Type",
    help: "Specifies the chemistry or general type of connected battery. Choose **No Battery** for standalone PV or grid-tie operation, **Lead-acid** for flooded or AGM batteries, or **Lithium-ion** for managed BMS packs.",
    entries: {
      Type: {
        name: "Type",
        friendly_meanings: {
          "0": "No Battery",
          "1": "Lead-acid",
          "2": "Lithium-ion"
        }
      }
    }
  },
  {
    uuid: "BatteryBase.BatteryBrand",
    title: "Battery Brand",
    help: "Selects the manufacturer profile for the connected battery. This may pre-configure recommended voltage and SOC limits for optimal operation.",
    entries: {
      Brand: {
        name: "Brand",
        friendly_meanings: {
          "0": "Fortress"
        }
      }
    }
  },
  {
    uuid: "BatteryBase.AbsorbVoltage",
    title: "Absorb Voltage",
    help: "Sets the voltage used during the absorb (bulk-to-float transition) phase. Increasing this value raises the upper charge threshold for lead-acid batteries.",
    entries: {
      Volt: { name: "Voltage (Vdc)" }
    }
  },
  {
    uuid: "BatteryBase.FloatVoltage",
    title: "Float Voltage",
    help: "Defines the voltage maintained once the battery is fully charged. This helps prevent overcharging while keeping the battery topped off.",
    entries: {
      Volt: { name: "Voltage (Vdc)" }
    }
  },
  {
    uuid: "BatteryBase.VbatStartDerating",
    title: "Start Derating Voltage",
    help: "Voltage threshold where the inverter begins reducing charge or discharge current to protect the battery as it approaches full or low state.",
    entries: {
      Volt: { name: "Voltage (Vdc)" }
    }
  },  
  // Battery Control Type
  {
    uuid: "BatteryBase.ChaDisChaCtrlType",
    title: "Battery Control Type",
    help: "Determines how the inverter regulates both charging and discharging.\n\nSOC: Uses battery state of charge thresholds to start and stop charge/discharge.\n\nVolt: Uses DC voltage limits instead.",
    section: {
      title: "Setup",
    },
    entries: {
      ChargeCtrlType: {
        name: "Charge Control",
      },
      DisChargeCtrlType: {
        name: "Discharge Control",
      },
    },
  },
  {
    uuid: "BatteryBase.MaxChaDisChaCurrent",
    title: "Max Battery Current",
    help: "Sets the maximum charging and discharging current allowed for the connected inverter. Choose the preset that matches your inverter model to automatically apply the correct limits.",
    entries: {
      MaxChargingCurrent: {
        name: "Max Charge Preset",
      },
      MaxDischargingCurrent: {
        name: "Max Discharge Preset",
      },
    },
  },
  {
    uuid: "Basic.AllToDefault",
    title: "Reset to Factory Defaults",
    help: "Restores all inverter configuration parameters to their original factory values. Use with caution — this cannot be undone.",
  },
  {
    uuid: "Basic.PowerControl",
    title: "Inverter Power Control",
    help: "Turns the inverter output on or off.\n\n• **Standby:** AC output is disabled, but control circuits remain powered.\n• **Power On:** Enables AC output and normal inverter operation.",
    entries: {
      State: {
        name: "Power State",
        friendly_meanings: {
          "0": "Standby",
          "1": "Power On"
        }
      }
    },
  },
  {
    uuid: "Basic.SystemTime",
    section: {
      title: "Setup",
    },
  },
  {
    uuid: "LimitActivePower.LimitActivePowerStatus",
    section: {
      title: "Power Limits",
    },
    title: "Active Power Limiting Status",
    help: "Indicates whether inverter output power limiting is currently active. If active, the inverter will limit its output power to the 'Current Power Limit'.",
    entries: {}
  },
  {
    uuid: "LimitActivePower.ActivePowerPercent",
    title: "Current Power Limit",
    help: "The inverter's present active-power output limit as a percentage of its rated capacity. If power limiting is active, the inverter will limit its output power to this percentage of its rated capacity.",
    entries: {}
  },
  {
    uuid: "Basic.GridLossWarningClear",
    title: "Ignore Grid-Loss Warning",
    help: "When enabled, the inverter will not treat the absence of grid power as a fault. Use this mode for permanently off-grid systems where grid connection is intentionally unavailable.",
    entries: {
      Mode: {
        name: "Grid-Loss Behavior",
        friendly_meanings: {
          "0": "Treat as Fault",
          "1": "Ignore (Off-Grid Mode)"
        }
      }
    }
  },
  {
    uuid: "LoadShedding.SmartLoad",
    title: "Use Smart Load",
    help: "Powers non-essential loads only when excess solar or battery energy is available. Enable this to automatically use surplus energy for optional circuits.",
    entries: {
      Mode: {
        name: "",
        friendly_meanings: {
          "0": "Disabled",
          "1": "Enabled"
        }
      }
    }
  },
  {
    uuid: "LoadShedding.OnGridAlwaysOn",
    title: "Smart Load On-Grid Behavior",
    help: "Determines Smart Load behavior while the system is connected to the grid. When enabled, the Smart Load remains powered even if normal control conditions are not met. (AKA: **On Grid Always On**.)",
    entries: {
      Mode: {
        name: "On-Grid Always-On Mode",
        friendly_meanings: {
        "0": "Follow normal rules",
        "1": "Always On When Grid Present"
        }
      }
    }
  },
  {
  uuid: "LoadShedding.StartPVPower",
  title: "Smart Load Start Power",
  help: "Defines when the Smart Load turns on. The Smart Load port is energized once PV power exceeds this threshold **and** the battery SOC is above the start limit.",
  entries: {
    Power: {
      name: "PV Power Above (W)"
    }
  }
},
{
  uuid: "LoadShedding.SmartLoadSOC",
  title: "Smart Load SOC Limits",
  help: "Defines the battery state-of-charge limits that control the Smart Load. The Smart Load turns on when SOC rises above the start limit **and** PV power exceeds the start power limit.  Smart load turns off when SOC falls below the stop limit.",
  entries: {
    OnSOC: {
      name: "Start When Battery SOC Is Above (%)"
    },
    OffSOC: {
      name: "Stop When Battery SOC Is Below (%)"
    }
  }
},
{
    uuid: "Parallel.ModbusAddr",
    title: "Modbus Address",
    help: "Sets the Modbus address (slave ID) for this inverter on the parallel bus.",
    entries: {
      Addr: {
        name: "Address"
      }
    }
  },
  {
    uuid: "Parallel.SystemType",
    title: "System Type",
    help: "Defines how this inverter participates in a multi-inverter or multi-phase system.\n\n• No Parallel: Single inverter system.\n• Single-phase Parallel (Master / Secondary): Multiple inverters on one phase.\n• Three-phase Parallel (Master): Multiple inverters forming R/S/T phases.",
    entries: {
      Type: {
        name: "Parallel Role / Topology",
        // keeping meanings from firmware, but you can override friendlies if you want later
        friendly_meanings: {
          "0": "No Parallel (Single Inverter)",
          "1": "Single-Phase Parallel (Master)",
          "2": "Single-Phase Parallel (Secondary)",
          "3": "Three-Phase Parallel (Master)"
        }
      }
    }
  },
  {
    uuid: "Parallel.ComposedPhase",
    title: "Assigned Phase",
    help: "Selects which output phase this inverter is responsible for in a three-phase system. R, S, and T correspond to L1, L2, and L3.",
    entries: {
      Phase: {
        name: "Phase"
      }
    }
  },
  {
    uuid: "Parallel.ShareBatteryStatus",
    title: "Share Battery",
    help: "Allows inverters in a parallel group to use a common battery bank instead of keeping batteries isolated per inverter.",
    entries: {
      Mode: {
        name: "Installation Method",
        friendly_meanings: {
          "0": "Inverters have Separate Batteries",
          "1": "Inverters Share a Common Battery Bank"
        }
      }
    }
  },
  {
    uuid: "Parallel.ParallelNum",
    title: "Parallel Group Size",
    help: "Total number of inverters detected in this parallel system.",
  },
  {
    uuid: "Parallel.Role",
    title: "Inverter Role",
    help: "Reports whether this inverter is acting as Master or Secondary in the current parallel configuration.",
  },
  {
    uuid: "Parallel.ParallelPhase",
    title: "Reported Phase",
    help: "Reports which phase (R / S / T) this inverter is currently serving in the parallel system.",
  },
  {
    uuid: "Measurement.CTSampleRatio",
    title: "CT Ratio",
    help: "Select the current transformer (CT) ratio used for metering. This must match the CT hardware rating so that current and power readings are accurate.",
    entries: {
      Direction: {
        name: "CT Ratio",
      }
    }
  },
  {
    uuid: "Measurement.CTDirection",
    title: "CT Direction",
    help: "Sets the CT installation direction. Use Reversed if the CT arrow is facing the opposite way and the system is reading import/export backwards.",
    entries: {
      Direction: {
        name: "Direction",
        friendly_meanings: {
          "0": "Normal",
          "1": "Reversed"
        }
      }
    }
  },
  {
    uuid: "FeedInGrid.FeedInGridStatus",
    title: "Feed to Grid",
    help: "Allows the inverter to export power back to the utility grid. Enable this only if local regulations and interconnect agreements permit grid export.",
    entries: {
      Mode: {
        name: "Feed to Grid",
        friendly_meanings: {
          "0": "Disabled",
          "1": "Enabled"
        }
      }
    }
  },
  {
    uuid: "FeedInGrid.FeedInGridMaxPower",
    title: "Export Power Limit",
    help: "Sets the maximum power the inverter is allowed to send to the grid. Use this to meet utility export limits or site commissioning requirements.",
    entries: {
      Power: {
        name: "Max Export Power (W)"
      }
    }
  },
  {
    uuid: "FeedInGrid.FastZeroExportStatus",
    title: "Fast Zero Export",
    help: "Forces export power to the grid to stay at or near zero by rapidly adjusting inverter output. Use when export is not allowed or must be minimized.",
    entries: {
      Mode: {
        name: "Fast Zero Export",
        friendly_meanings: {
          "0": "Disabled",
          "1": "Enabled"
        }
      }
    }
  },
    {
      "uuid": "ACCharge.ACChargeStatus",
      "title": "Allow Charging from Grid",
      "help": "Enables charging the battery from the utility grid.",
      "entries": {
        "Mode": {
          "name": "Grid Charge",
          "friendly_meanings": {
            "0": "Disabled",
            "1": "Enabled"
            }
        }
      }
    },
    {
      "uuid": "ACCharge.ACChargePower",
      "title": "Grid Charge Power Limit",
      "help": "Sets the maximum power the inverter will draw from the grid for charging. This cap applies when Grid Charge is enabled (and within any configured time windows).",
      "entries": {
        "Power": {
          "name": "Max Grid Charge Power (W)"
        }
      }
    },
    {
      "uuid": "ACCharge.ACChgStartSOC",
      "title": "Grid Charge SOC Limits",
      "help": "Defines when grid charging starts and stops based on battery state of charge (SOC). Charging starts when SOC falls below Start, and stops when SOC reaches Stop.",
      "entries": {
        "SOC": {
          "name": "Start SOC (%)",
          "description": "Begin grid charging when battery SOC drops to this level (typical 20–40%)",
          "less_than": "StopSOC",
          "range": { "min": 10, "max": 60 }
        },
        "StopSOC": {
          "name": "Stop SOC (%)",
          "description": "Stop grid charging when battery SOC reaches this level (typical 80–95%)",
          "greater_than": "SOC",
          "range": { "min": 50, "max": 100 }
        }
      }
    },
    {
      "uuid": "ACCharge.ACChargeType",
      "title": "Grid Charge Control Type",
      "help": "Select whether grid charging follows a time schedule or SOC/voltage thresholds.",
      "entries": {
        "Type": {
          "name": "Control Type",
          "friendly_meanings": {
            "0": "By Time Schedule",
            "1": "By SOC/Voltage"
          }
        }
      }
    },
    {
      "uuid": "ACCharge.ACChargingPlan",
      "title": "Grid Charge Windows (Placeholder.  I'll break this up later.)",
      "help": "During these times, your battery will continue to charge from solar power normally, but will also use additional power from the grid to charge the battery.",
      "entries": {
        "StartTime1_h": { "name": "Window 1 Start Hour", "range": { "min": 0, "max": 23 } },
        "StartTime1_m": { "name": "Window 1 Start Minute", "range": { "min": 0, "max": 59 } },
        "EndTime1_h":   { "name": "Window 1 End Hour",   "range": { "min": 0, "max": 23 } },
        "EndTime1_m":   { "name": "Window 1 End Minute", "range": { "min": 0, "max": 59 } },
  
        "StartTime2_h": { "name": "Window 2 Start Hour", "range": { "min": 0, "max": 23 } },
        "StartTime2_m": { "name": "Window 2 Start Minute", "range": { "min": 0, "max": 59 } },
        "EndTime2_h":   { "name": "Window 2 End Hour",   "range": { "min": 0, "max": 23 } },
        "EndTime2_m":   { "name": "Window 2 End Minute", "range": { "min": 0, "max": 59 } },
  
        "StartTime3_h": { "name": "Window 3 Start Hour", "range": { "min": 0, "max": 23 } },
        "StartTime3_m": { "name": "Window 3 Start Minute", "range": { "min": 0, "max": 59 } },
        "EndTime3_h":   { "name": "Window 3 End Hour",   "range": { "min": 0, "max": 23 } },
        "EndTime3_m":   { "name": "Window 3 End Minute", "range": { "min": 0, "max": 59 } }
      }
    },  
  {
    uuid: "BatteryBase.ChargeLimitSoc",
    title: "Charge Limit (SOC)",
    help: "Sets the maximum state of charge (SOC) the battery will be charged to. Once the battery reaches this level, charging stops to prevent overcharging and extend lifespan.",
    entries: {
      SOC: {
        name: "SOC (%)"
      }
    }
  },
  {
    uuid: "BatteryBase.OnGridCutOffSoc",
    title: "On-Grid Battery Cutoff SOC",
    help: "Sets the minimum state of charge (SOC) the battery will discharge to while grid power is available. Below this level, the inverter will stop discharging and switch to grid power to protect battery capacity.",
    entries: {
      SOC: {
        name: "SOC (%)"
      }
    }
  },
  {
    uuid: "BatteryBase.OffGridCutOffSoc",
    title: "Off-Grid Battery Cutoff SOC",
    help: "Sets the minimum state of charge (SOC) the battery will discharge to when operating off-grid. Once the battery reaches this level, the inverter stops discharging to prevent deep discharge and maintain battery health.",
    entries: {
      SOC: {
        name: "SOC (%)"
      }
    }
  },
  {
    uuid: "BatteryBackup.BatteryBackupMode",
    title: "Battery Backup Mode",
    help: "Enables or disables battery-backup operation. When enabled, the inverter reserves part of the battery capacity to power critical loads during a grid outage.",
    entries: {
      Mode: {
        name: " ",
        friendly_meanings: {
          "0": "Disable Backup Mode",
          "1": "Enable Backup Mode"
        }
      }
    }
  },
  {
    uuid: "BatteryBackup.BatteryReserveSOC",
    title: "Battery Reserve SOC",
    help: "While Battery Backup Mode is enabled, the battery will stop discharging once it reaches this level. When Backup Mode is disabled, normal operation applies and discharge will continue down to the On-Grid or Off-Grid Battery Cutoff SOC.",
    entries: {
      SOC: {
        name: "SOC (%)"
      }
    }
  },
  {
    uuid: "BatteryScheduling.BatteryScheduling",
    title: "Battery Scheduling",
    help: "Enables the battery scheduling feature. This must be turned on for Time-of-Use (TOU) charge and discharge schedules to take effect. When disabled, all TOU settings are ignored and normal battery behavior applies.",
    entries: {
      Mode: {
        name: "Scheduling",
        friendly_meanings: {
          "0": "Disable Scheduling",
          "1": "Use Scheduling"
        }
      }
    }
  },
    {
      uuid: "BatteryTOUCharge.TOUMaximumChargingPower",
      title: "Max Power During Scheduled Charge",
      help: "Sets the maximum charging power during scheduled Time-of-Use (TOU) charge periods. Limit this to control how hard the battery charges from the grid in those windows.",
      entries: {
        Power: {
          name: "Max Charge Power (%)"
        }
      }
    },
    {
      uuid: "BatteryTOUCharge.TOUChargingPlan1",
      title: "TOU Charge Window 1",
      help: "Defines the first time window when the battery is allowed to charge according to TOU rules. The inverter may charge from grid during this window, subject to the TOU Max Charge Power limit.",
      entries: {
        StartTime_h: {
          name: "Start Hour (0-23)"
        },
        StartTime_m: {
          name: "Start Minute (0-59)"
        },
        EndTime_h: {
          name: "End Hour (0-23)"
        },
        EndTime_m: {
          name: "End Minute (0-59)"
        }
      }
    },
    {
      uuid: "BatteryTOUCharge.TOUChargingPlan2",
      title: "TOU Charge Window 2",
      help: "Defines the second allowed charging window for TOU operation.",
      entries: {
        StartTime_h: {
          name: "Start Hour (0-23)"
        },
        StartTime_m: {
          name: "Start Minute (0-59)"
        },
        EndTime_h: {
          name: "End Hour (0-23)"
        },
        EndTime_m: {
          name: "End Minute (0-59)"
        }
      }
    },
    {
      uuid: "BatteryTOUCharge.TOUChargingPlan3",
      title: "TOU Charge Window 3",
      help: "Defines the third allowed charging window for TOU operation.",
      entries: {
        StartTime_h: {
          name: "Start Hour (0-23)"
        },
        StartTime_m: {
          name: "Start Minute (0-59)"
        },
        EndTime_h: {
          name: "End Hour (0-23)"
        },
        EndTime_m: {
          name: "End Minute (0-59)"
        }
      }
    },
    {
      uuid: "BatteryTOUDischarge.TOUMaximumDischargingPower",
      title: "TOU Max Discharge Power",
      help: "Sets the maximum discharging power during scheduled Time-of-Use (TOU) discharge periods. Limit this to control how much battery power is exported to loads or grid during those windows.",
      entries: {
        Power: {
          name: "Max Discharge Power (%)"
        }
      }
    },
    {
      uuid: "BatteryTOUDischarge.DischargingStopSoc",
      title: "TOU Discharge Stop SOC",
      help: "Sets the minimum state of charge (SOC) that the battery will discharge to during TOU operation. Once this level is reached, discharging stops to preserve reserve capacity for later use or backup.",
      entries: {
        SOC: {
          name: "SOC (%)"
        }
      }
    },
    {
      uuid: "BatteryTOUDischarge.TOUDischargingPlan1",
      title: "TOU Discharge Window 1",
      help: "Defines the first time window when the battery is allowed to discharge during TOU operation. The inverter can supply loads or export power during this window, within the Max Discharge Power limit.",
      entries: {
        StartTime_h: {
          name: "Start Hour (0-23)"
        },
        StartTime_m: {
          name: "Start Minute (0-59)"
        },
        EndTime_h: {
          name: "End Hour (0-23)"
        },
        EndTime_m: {
          name: "End Minute (0-59)"
        }
      }
    },
    {
      uuid: "BatteryTOUDischarge.TOUDischargingPlan2",
      title: "TOU Discharge Window 2",
      help: "Defines the second allowed discharge window for TOU operation.",
      entries: {
        StartTime_h: {
          name: "Start Hour (0-23)"
        },
        StartTime_m: {
          name: "Start Minute (0-59)"
        },
        EndTime_h: {
          name: "End Hour (0-23)"
        },
        EndTime_m: {
          name: "End Minute (0-59)"
        }
      }
    },
    {
      uuid: "BatteryTOUDischarge.TOUDischargingPlan3",
      title: "TOU Discharge Window 3",
      help: "Defines the third allowed discharge window for TOU operation.",
      entries: {
        StartTime_h: {
          name: "Start Hour (0-23)"
        },
        StartTime_m: {
          name: "Start Minute (0-59)"
        },
        EndTime_h: {
          name: "End Hour (0-23)"
        },
        EndTime_m: {
          name: "End Minute (0-59)"
        }
      }
    },
    {
      uuid: "GridProtection.GridVoltLimit1",
      title: "Grid Voltage Limits (Stage 1)",
      help: "Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect.",
      entries: {
        GridVoltLimitHigh: {
          name: "Upper Limit (Vac)",
          dtype: "Number"
        },
        GridVoltLimitLow: {
          name: "Lower Limit (Vac)",
          dtype: "Number"
        }
      }
    },    
    {
      uuid: "GridProtection.GridVoltLimit2",
      title: "Grid Voltage Limits (Stage 2)",
      help: "Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect.",
      entries: {
        GridVoltLimitHigh: {
          name: "Upper Limit (Vac)",
          dtype: "Number"
        },
        GridVoltLimitLow: {
          name: "Lower Limit (Vac)",
          dtype: "Number"
        }
      }
    },
    {
      uuid: "GridProtection.GridVoltLimit3",
      title: "Grid Voltage Limits (Stage 3)",
      help: "Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect.",
      entries: {
        GridVoltLimitHigh: {
          name: "Upper Limit (Vac)",
          dtype: "Number"
        },
        GridVoltLimitLow: {
          name: "Lower Limit (Vac)",
          dtype: "Number"
        }
      }
    },
    {
      uuid: "GridProtection.GridFreqLimit1",
      title: "Grid Frequency Limits (Stage 1)",
      help: "Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect to protect the system and comply with grid safety standards.",
      entries: {
        GridFreqLimitHigh: {
          name: "Upper Limit (Hz)",
          dtype: "Number"
        },
        GridFreqLimitLow: {
          name: "Lower Limit (Hz)",
          dtype: "Number"
        }
      }
    },
    {
      uuid: "GridProtection.GridFreqLimit2",
      title: "Grid Frequency Limits (Stage 2)",
      help: "Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect to protect the system and comply with grid safety standards.",
      entries: {
        GridFreqLimitHigh: {
          name: "Upper Limit (Hz)",
          dtype: "Number"
        },
        GridFreqLimitLow: {
          name: "Lower Limit (Hz)",
          dtype: "Number"
        }
      }
    },
    {
      uuid: "GridProtection.GridFreqLimit3",
      title: "Grid Frequency Limits (Stage 3)",
      help: "Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect to protect the system and comply with grid safety standards.",
      entries: {
        GridFreqLimitHigh: {
          name: "Upper Limit (Hz)",
          dtype: "Number"
        },
        GridFreqLimitLow: {
          name: "Lower Limit (Hz)",
          dtype: "Number"
        }
      }
    },
      {
      uuid: "GridProtection.GridVoltLimit1Time",
        "title": "Grid Voltage Trip Time",
        "help": "Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 1) before the inverter disconnects.",
        "entries": {
          "GridVoltLimitLowTime": {
            "name": "Low Voltage Trip Delay (ms)",
            "dtype": "Number"
          },
          "GridVoltLimitHighTime": {
            "name": "High Voltage Trip Delay (ms)",
            "dtype": "Number"
          }
        }
      },
      {
        "uuid": "GridProtection.GridVoltLimit2Time",
        "title": "Grid Voltage Trip Time (Stage 2)",
        "help": "Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 2) before the inverter disconnects.",
        "entries": {
          "GridVoltLimitLowTime": {
            "name": "Low Voltage Trip Delay (ms)",
            "dtype": "Number"
          },
          "GridVoltLimitHighTime": {
            "name": "High Voltage Trip Delay (ms)",
            "dtype": "Number"
          }
        }
      },
      {
        "uuid": "GridProtection.GridVoltLimit3Time",
        "title": "Grid Voltage Trip Time (Stage 3)",
        "help": "Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 3) before the inverter disconnects.",
        "entries": {
          "GridVoltLimitLowTime": {
            "name": "Low Voltage Trip Delay (ms)",
            "dtype": "Number"
          },
          "GridVoltLimitHighTime": {
            "name": "High Voltage Trip Delay (ms)",
            "dtype": "Number"
          }
        }
      },
      {
        "uuid": "GridProtection.GridFreqLimit1Time",
        "title": "Grid Frequency Trip Time (Stage 1)",
        "help": "Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 1) before the inverter disconnects.",
        "entries": {
          "GridFreqLimitLowTime": {
            "name": "Low Frequency Trip Delay (ms)",
            "dtype": "Number"
          },
          "GridFreqLimitHighTime": {
            "name": "High Frequency Trip Delay (ms)",
            "dtype": "Number"
          }
        }
      },
      {
        "uuid": "GridProtection.GridFreqLimit2Time",
        "title": "Grid Frequency Trip Time (Stage 2)",
        "help": "Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 2) before the inverter disconnects.",
        "entries": {
          "GridFreqLimitLowTime": {
            "name": "Low Frequency Trip Delay (ms)",
            "dtype": "Number"
          },
          "GridFreqLimitHighTime": {
            "name": "High Frequency Trip Delay (ms)",
            "dtype": "Number" 
          }
        }
      },
      {
        "uuid": "GridProtection.GridFreqLimit3Time",
        "title": "Grid Frequency Trip Time (Stage 3)",
        "help": "Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 3) before the inverter disconnects.",
        "entries": {
          "GridFreqLimitLowTime": {
            "name": "Low Frequency Trip Delay (ms)",
            "dtype": "Number"
          },
          "GridFreqLimitHighTime": {
            "name": "High Frequency Trip Delay (ms)",
            "dtype": "Number"
          }
        }
      },
      {
        "uuid": "ACCharge.ACChgStartSOC",
        "title": "AC Charge SOC Limits",
        "help": "Defines when the inverter will start and stop AC charging based on battery state of charge (SOC). Charging starts when SOC falls below the Start value and stops once it reaches the Stop value.",
        "entries": {
          "SOC": {
            "name": "Start SOC (%)",
            "description": "AC charging begins when battery SOC drops to this level",
            "less_than": "StopSOC",
            "range": {
              "min": 0,
              "max": 90
            }
          },
          "StopSOC": {
            "name": "Stop SOC (%)",
            "description": "AC charging stops when battery SOC reaches this level",
            "greater_than": "SOC",
            "range": {
              "min": 10,
              "max": 100
            }
          }
        }
      },
      {
        "uuid": "ACCoupledPV.ACCouplePVSOC",
        "title": "AC-Coupled PV SOC Limits",
        "help": "Defines the battery state-of-charge thresholds that control when the inverter allows AC-coupled PV charging to start and stop.",
        "entries": {
          "StartSOC": {
            "name": "Start SOC (%)",
            "description": "AC-coupled PV begins charging when SOC drops to this level (typical 20-40%)",
            "less_than": "StopSOC",
            "range": {
              "min": 10,
              "max": 60
            }
          },
          "StopSOC": {
            "name": "Stop SOC (%)",
            "description": "AC-coupled PV stops charging when SOC reaches this level (typical 80-95%)",
            "greater_than": "StartSOC",
            "range": {
              "min": 50,
              "max": 100
            }
          }
        }
      },
      {
        "uuid": "GridBase.GridRegulation",
        "title": "Grid Parameters",
        "help": "This setting changes the conditions under which the inverter will trip off. Different areas have different rules about when this equipment is allowed to disconnect and when it must ride through. Choose the code required by the local utility or AHJ.",
        "section": {
          "title": "Setup"
        },
        "entries": {
          "Code": {
            "name": "Code",
            "friendly_meanings": {
              "0": "Default UL-1741 / IEEE 1547",
              "1": "California (Rule 21)",
              "2": "Hawaii (Rule 14)",
              "3": "Puerto Rico (LUMA)",
              "4": "KIUC"
            }
          }
        }
      },
      {
        "uuid": "GridBase.GridType",
        "title": "Grid Type",
        "help": "Choose the type of wriing the sites uses.  This helps configure the system to match the build's power setup.  Note the voltage you enter here must match the EPS Voltage.",
        "entries": {
          "Type": {
            "name": "Service Type",
            "friendly_meanings": {
              "0": "Split 240V / 120V",
              "1": "3-Phase 208V / 120V",
              "2": "Single 240V",
              "3": "Single 230V",
              "4": "Split 200V / 100V"
            }
          }
        }
      },
      {
        "uuid": "GridBase.GridFreq",
        "title": "Grid Frequency",
        "help": "Sets the nominal grid frequency for the installation. Use 60 Hz for North America and most split-phase installs; use 50 Hz for regions that operate at 230 V single-phase.",
        "entries": {
          "Freq": {
            "name": "Frequency (Hz)",
            "friendly_meanings": {
              "0": "50 Hz",
              "1": "60 Hz"
            }
          }
        }
      },
      {
        "uuid": "BackupPower.OffGridOutput",
        "title": "Off-Grid Output",
        "help": "Controls whether the inverter provides AC output when operating without the utility grid. Disable to prevent output in off-grid mode.",
        "entries": {
          "Mode": {
            "name": " ",
            "friendly_meanings": {
              "0": "Disable",
              "1": "Enable"
            }
          }
        }
      },
      {
        "uuid": "BackupPower.EPSVoltage",
        "title": "Backup (EPS) Output Voltage",
        "help": "Selects the AC output voltage when operating in backup (EPS) mode. Match this to your local service voltage for proper compatibility with connected loads.",
        "entries": {
          "Voltage": {
            "name": "Voltage (Vac)",
            "friendly_meanings": {
              "0": "208 V",
              "1": "220 V",
              "2": "230 V",
              "3": "240 V",
              "4": "277 V"
            }
          }
        }
      },
      {
        "uuid": "Generator.LinkedPort",
        "title": "Generator Port Connection",
        "help": "If using a generator, select which port it's connected to — either the GEN port or the Grid Input port (sometimes called microgrid mode). If no generator is installed, leave this setting on GEN port.",
        "entries": {
          "Port": {
            "name": "Generator connected to",
            "meanings": {
              "0": "GeneratorPort",
              "1": "GridPort",
            },            
            "friendly_meanings": {
              "0": "GEN port (also select if not using generator).",
              "1": "Grid port (aka microgrid mode)",
            }
          }
        }
      },
        {
          "uuid": "Generator.BatteryChargeCurrentLimit",
          "title": "Battery Charge Current Limit",
          "help": "Sets the maximum DC current the inverter will send to the battery from the generator.",
          "entries": {
            "Current": { "name": "Charge Current (Adc)" }
          }
        },
        {
          "uuid": "Generator.GeneratorRatedPower",
          "title": "Generator Rated Power",
          "help": "Specify the generator's continuous rated output power.",
          "entries": {
            "Power": {
              "name": "Rated Power (kW)",
              "range": { "min": 0, "max": 100 }
            }
          }
        },
        {
          "uuid": "Generator.GeneratorCoolDownTime",
          "title": "Generator Cool-Down Time",
          "help": "Sets the time the generator continues running after charging stops to allow for safe cooling.",
          "entries": {
            "Time": { "name": "Cool-Down Time (min)" }
          }
        },
        {
          "uuid": "Generator.GeneratorSOC",
          "title": "Generator Start/Stop SOC",
          "help": "Configures the battery state of charge thresholds for automatic generator control. The generator will start when battery SOC drops to StartSOC and stop when it reaches StopSOC.",
          "entries": {
            "StartSOC": {
              "name": "Start SOC (%)",
              "description": "Generator starts when battery drops to this level",
              "less_than": "StopSOC",
              "range": {
                "min": 0,
                "max": 90
              }
            },
            "StopSOC": {
              "name": "Stop SOC (%)",
              "description": "Generator stops when battery charges to this level",
              "greater_than": "StartSOC",
              "range": {
                "min": 5,
                "max": 100
              }
            }
          }
        },
        {
          "uuid": "Generator.GeneratorBoost",
          "title": "Generator Boost",
          "help": "Enables dynamic adjustment of generator charging power for faster battery recovery when needed.",
          "entries": {
            "Mode": {
              "name": " ",
              "friendly_meanings": {
                "0": "Disable",
                "1": "Enable"
              }
            }
          }
        },
        {
          "uuid": "Generator.StartGeneratorExercise",
          "title": "Generator Test",
          "help": "Start the generator for a test run.",
          "entries": {
            "Mode": {
              "name": " ",
              "friendly_meanings": {
                "0": "Stop test",
                "1": "Start test"
              }
            }
          }
        },
        {
          "uuid": "Generator.GenDryContact",
          "title": "Generator Contactor Status",
          "help": "Indicates the current state of the generator control contactor.",
          "entries": {
            "Mode": {
              "name": "Contactor State",
              "dtype": "enum",
              "meanings":{
                "0": "ON",
                "1": "OFF"
              },
              "friendly_meanings": {
                "0": "Closed / On",
                "1": "Open / Off"
              }
            }
          }
        },
        {
          "uuid": "ACCoupledPV.ACCoupledPV",
          "title": "AC-Coupled PV",
          "help": "Enable this option when connecting a grid-tied solar inverter (AC-coupled PV) to the system. Disable when no AC-coupled PV is present.",
          "entries": {
            "Mode": {
              "name": "AC-Coupled PV Mode",
              "friendly_meanings": {
                "0": "Disable",
                "1": "Enable"
              }
            }
          }
        }


];

/**
 * Apply transformation to a single point if it matches
 */
export function transformPoint(
  point: any,
  context?: { section?: any; subsection?: any }
): boolean {
  const transform = pointTransforms.find((t) => t.uuid === point.uuid);
  if (!transform) return false;

  const section = context?.section;
  const subsection = context?.subsection;

  // Apply point-level changes
  if (transform.title !== undefined) {
    point.title = transform.title;
  }
  if (transform.help !== undefined) {
    point.help = transform.help;
  }

  // Apply entry-level changes
  if (transform.entries) {
    // Ensure point.entries array exists
    if (!point.entries) {
      point.entries = [];
    }

    // First, update existing entries
    point.entries.forEach((entry: any) => {
      const entryTransform = transform.entries![entry.arg];
      if (entryTransform) {
        if (entryTransform.name !== undefined) {
          entry.name = entryTransform.name;
        }
        if (entryTransform.description !== undefined) {
          entry.description = entryTransform.description;
        }
        if (entryTransform.longdescription !== undefined) {
          entry.longdescription = entryTransform.longdescription;
        }
        if (entryTransform.friendly_meanings !== undefined) {
          entry.friendly_meanings = {
            ...(entry.friendly_meanings ?? {}),
            ...entryTransform.friendly_meanings,
          };
        }
        // Apply constraints
        if (entryTransform.greater_than !== undefined) {
          entry.greater_than = entryTransform.greater_than;
        }
        if (entryTransform.less_than !== undefined) {
          entry.less_than = entryTransform.less_than;
        }
      }
    });

    // Then, inject missing entries
    const existingArgs = new Set(point.entries.map((e: any) => e.arg));
    Object.entries(transform.entries).forEach(([arg, entryTransform]) => {
      if (!existingArgs.has(arg) && entryTransform.dtype) {
        // This is a new entry to inject
        const newEntry: any = {
          name: entryTransform.name ?? arg,
          arg: arg,
          dtype: entryTransform.dtype,
          description: entryTransform.description ?? "",
          longdescription: entryTransform.longdescription ?? "",
        };

        // Add optional fields
        if (entryTransform.unit !== undefined) {
          newEntry.unit = entryTransform.unit;
        }
        if (entryTransform.range !== undefined) {
          newEntry.range = entryTransform.range;
        }
        if (entryTransform.value !== undefined) {
          newEntry.value = entryTransform.value;
        }
        if (entryTransform.meanings !== undefined) {
          newEntry.meanings = entryTransform.meanings;
        }
        if (entryTransform.friendly_meanings !== undefined) {
          newEntry.friendly_meanings = entryTransform.friendly_meanings;
        }
        // Add constraints
        if (entryTransform.greater_than !== undefined) {
          newEntry.greater_than = entryTransform.greater_than;
        }
        if (entryTransform.less_than !== undefined) {
          newEntry.less_than = entryTransform.less_than;
        }

        point.entries.push(newEntry);
      }
    });
  }

  // Apply section-level changes
  if (transform.section && section) {
    if (transform.section.title !== undefined) {
      section.sectionTitle = transform.section.title;
    }
  }

  // Apply subsection-level changes
  if (transform.subsection && subsection) {
    if (transform.subsection.title !== undefined) {
      subsection.title = transform.subsection.title;
    }
  }

  return true;
}

/**
 * Get all point transformations for reporting
 */
export function getAllPointTransforms(): PointTransform[] {
  return [...pointTransforms];
}
