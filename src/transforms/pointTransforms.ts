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
  /** Whether this subsection should be collapsed by default */
  collapsedByDefault?: boolean;
}

interface MoveToTransform {
  /** Target theme name (optional - defaults to current theme) */
  theme?: string;
  /** Target section title */
  section: string;
  /** Target subsection title (optional - defaults to first subsection or creates one) */
  subsection?: string;
}

interface PointTransform {
  /** Identify the point by UUID (e.g., "BatteryBase.ChaDisChaCtrlType") */
  uuid: string;
  /** New title for the point */
  title?: string;
  /** New help text for the point */
  help?: string;
  /** Custom text for invoke button (only applies to points with access: "INVOKE") */
  invokeButtonText?: string;
  /** Transformations for specific entries within the point */
  entries?: Record<string, EntryTransform>;
  /** Optional section-level overrides */
  section?: SectionTransform;
  /** Optional subsection-level overrides */
  subsection?: SubsectionTransform;
  /** Move this point to a different section/theme */
  move_to?: MoveToTransform;
}

/**
 * Array of point transformations to apply.
 * Each transformation targets a specific point by UUID and can modify
 * the point's title, help text, and individual entry properties.
 *
 * Example of moving a point to a different section:
 * {
 *   uuid: "Basic.PowerControl",
 *   move_to: {
 *     section: "Power Management",           // Target section title (required)
 *     subsection: "Control",                 // Target subsection title (optional)
 *     theme: "Advanced"                      // Target theme name (optional, defaults to current theme)
 *   }
 * }
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
    invokeButtonText: "Reset Now",
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
      title: "Basic Setup",
    },
  },
  {
    uuid: "Basic.OperatingMode",
    title: "Grid Interaction",
    help: "Select whether the inverter operates independently of the grid, or is connected to the grid. If off-grid, you should also ignore grid-loss warnings.",
    entries: {
      Mode: {
        name: "Mode",
        friendly_meanings: {
          "0": "Off-Grid.  There is no available power grid",
          "1": "Grid-Tied. Grid power is available."
        }
      }
  }
},
{
  uuid: "Basic.WorkMode",
  title: "Operating Mode",
  help: "Select how solar power is prioritized. Self-consumption: PV powers the home first, then charges the battery, and exports last (if allowed). Export first: PV powers the home, then exports to grid, and charges the battery last. Backup power: PV charges the battery first to build reserve, then powers the home, and exports last (if allowed). If a battery schedule is running (PV Charge Only, Discharge Only, or Grid Charge), the inverter will follow that schedule during those times instead of this operating mode. When the scheduled period ends, the inverter will return to the selected operating mode.",
  entries: {
    Mode: {
      name: "Mode",
      friendly_meanings: {
        "0": "Self-consumption",
        "1": "Export first",
        "2": "Backup power"
      }
    }
  }
},
{
  uuid: "Basic.PowerStatus",
  title: "Power Status",
  help: "Put the inverter into standby mode to stop operation or make configuration changes. While in standby, the inverter will not generate PV power or charge/discharge the battery. If grid power is available, it be used to supply the loads. If the grid is unavailable, the building will not have power.",
  entries: {
    State: {
      name: "State",
      friendly_meanings: {
        "0": "Standby",
        "1": "Running"
      }
    }
  }
},
  {
    uuid: "LimitActivePower.LimitActivePowerStatus",
    section: {
      title: "Power Limits",
    },
    title: "Limit Power Output",
    help: "Shows whether power output limiting is currently active. When not limited, the inverter can deliver its full available power (subject only to natural hardware limits). When limited, an external or configured cap is applied to restrict inverter output to the specified Power Limit.",
    entries: {
      Mode: {
        name: "Mode",
        friendly_meanings: {
          "0": "Not limited - full output",
          "1": "Limit output power"
        }
      }
    }
  },
  {
    uuid: "LimitActivePower.ActivePowerPercent",
    title: "Power Limit",
    help: "The inverter's present active-power output limit as a percentage of its rated capacity. If power limiting is active, the inverter will limit its output power to this percentage of its rated capacity.",
    entries: {
      Power: {
        name: "Power Limit (%)",
        range: { min: 0, max: 100 }
      }
    }
  },
  {
    uuid: "Basic.GridLossWarningClear",
    title: "Ignore Grid-Loss Warning",
    help: "When enabled, the inverter will not treat the absence of grid power as an alarm. Use this mode for permanently off-grid systems where grid connection is unavailable.",
    entries: {
      Mode: {
        name: "Grid-Loss Behavior",
        friendly_meanings: {
          "0": "Treat as Alarm",
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
    help: "Determines Smart Load behavior while the system is connected to the grid. When enabled, the Smart Load remains powered even if normal control conditions are not met. (AKA: **On-Grid Always On**.)",
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
      name: "Start When Battery SOC Is Above (%)",
      less_than: "OffSOC",
    },
    OffSOC: {
      name: "Stop When Battery SOC Is Below (%)",
      greater_than: "OnSOC",
    }
  }
},
{
    uuid: "Parallel.ModbusAddr",
    title: "Parallel unit ID",
    help: "The Unit ID (also known as the unit ID, slave ID, or node ID) for this inverter. The primary inverter should use address 1, and any secondary inverters should use 2 or higher. This sets the modbus address that inverters use to communicate with each other. Each inverter that communicates on the same Modbus communication line must have a unique address, but addresses do not need to be globally unique across separate, unconnected systems.",
    entries: {
      Addr: {
        name: "Address",
        range: { min: 1, max: 255 }
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
    title: "Inverters in parallel",
    help: "Total number of inverters detected in this parallel system.",
    entries: {
      Num:{
        dtype: "Number"
      }
    }
  },
  {
    uuid: "Parallel.ClearDetectedPhases",
    title: "Clear Detected Phases",
    help: "Clears the detected phases for this inverter.",
  },  
  {
    uuid: "Parallel.Role",
    title: "Inverter Role",
    help: "Reports whether this inverter is acting as Primary (sometimes called the Master) or Secondary in the current parallel configuration.",
    entries: {
      Role: {
        name: "Role",
        friendly_meanings: {
          "0": "Primary",
          "1": "Secondary"
        }
      }
    }
  },
  {
    uuid: "Parallel.ParallelPhase",
    title: "Reported Phase",
    help: "Reports which phase (R / S / T) this inverter is currently serving in the parallel system.",
  },
  {
    uuid: "Measurement.CTSampleRatio",
    section: {
      title: "Current Transformer (CT) Settings",
    },
    title: "CT Ratio",
    help: "Select the current transformer (CT) ratio used for metering electric current on the grid port connection. This must match the CT hardware rating so that current and power readings are accurate.",
    entries: {
      Direction: {
        name: "CT Ratio",
      }
    }
  },
  {
    uuid: "Measurement.CTDirection",
    title: "CT Direction",
    help: "Sets the CT installation direction. You may choose to reverse this if your inverter is reading import when power is actually flowing out to the grid (export) or vice versa.",
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
    section: {
      title: "Selling Power",
    },
    title: "Allow Selling Power to Grid",
    help: "Allows the inverter to sell/export power back to the utility grid. Enable this only if local regulations and interconnect agreements permit grid export.",
    entries: {
      Mode: {
        name: " ",
        friendly_meanings: {
          "0": "Not allowed",
          "1": "Allowed"
        }
      }
    }
  },
  {
    uuid: "FeedInGrid.FeedInGridMaxPower",
    title: "Max Power Sold to Grid",
    help: "Sets the maximum power the inverter is allowed to sell/export to the grid. Use this to meet utility export limits or site commissioning requirements.",
    entries: {
      Power: {
        name: "Power (kW)"
      }
    }
  },
  {
    uuid: "FeedInGrid.FastZeroExportStatus",
    title: "Prevent Grid Export: Strict Mode",
    help: "Keeps power export at or near zero by adjusting inverter output in real time. When enabled, the inverter supplies only local (on-site) loads and will not send power back to the grid. This mode is required when grid export is not allowed. Ensure the CTs are installed on the grid connection point and  not on the inverter's load side, so the inverter can correctly detect and prevent export.",

    entries: {
      Mode: {
        name: "Fast Zero Export",
        friendly_meanings: {
          "0": "Disable strict mode",
          "1": "Enable strict mode"
        }
      }
    }
  },
    {
      uuid: "ACCharge.ACChargeStatus",
      move_to: {
        theme: "Battery",
        section: "Grid Charge"
      },
      section: {
        title: "Grid Charge",
      },
      title: "Allow Battery Charging from Grid",
      help: "Enables the battery to charge from the utility grid.",
      entries: {
        Mode: {
          name: "Grid Charge",
          friendly_meanings: {
            "0": "Do not charge the battery from grid power",
            "1": "Allowed"
          }
        }
      }
    },
    {
      "uuid": "ACCharge.ACChargePower",
      "move_to": {
        "theme": "Battery",
        "section": "Grid Charge"
      },
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
      "move_to": {
        "theme": "Battery",
        "section": "Grid Charge"
      },
      "title": "Grid Charge Starting SOC",
      "help": "Defines when grid charging starts based on battery state of charge (SOC). Charging starts when SOC falls below Starting SOC.",
      "entries": {
        "SOC": {
          "name": "Start SOC (%)",
          "range": { "min": 0, "max": 90 }
        },
      }
    },
    {
      "uuid": "ACCharge.ACChgStopSOC",
      "move_to": {
        "theme": "Battery",
        "section": "Grid Charge"
      },
      "title": "Grid Charge Stop SOC",
      "help": "Defines when grid charging stops based on battery state of charge (SOC). Charging stops when SOC reaches Stop SOC.",
      "entries": {
        "StopSOC": {
          "name": "Stop SOC (%)",
          "range": { "min": 0, "max": 90 }
        }
      }
    },    
    {
      "uuid": "ACCharge.ACChargeType",
      "move_to": {
        "theme": "Battery",
        "section": "Grid Charge"
      },
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
      "move_to": {
        "theme": "Battery",
        "section": "Grid Charge"
      },
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
        name: "SOC (%)",
        description: "Recommended: between 21-90%.  Must be higher than the Off-Grid Battery Cutoff SOC."
      }
    }
  },
  {
    uuid: "BatteryBase.OffGridCutOffSoc",
    title: "Off-Grid Battery Cutoff SOC",
    help: "Sets the minimum state of charge (SOC) the battery will discharge to when operating off-grid. Once the battery reaches this level, the inverter stops discharging to prevent deep discharge and maintain battery health.",
    entries: {
      SOC: {
        name: "SOC (%)",
        description: "Recommended: between 20-89%.  Must be lower than the On-Grid Battery Cutoff SOC."
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
    help: "This is a special scheduling mode designed for certain time-of-use (TOU) utility rates or other custom situations. In most circumstances, we recomment allowing your system to  manage charging and discharging automatically without setting a schedule.  You don't need to set a schedule unless you have a specific reason to charge or discharge at exact times.",
    entries: {
      Mode: {
        name: "Scheduling",
        friendly_meanings: {
          "0": "Disable Scheduling",
          "1": "Enable the 'PV Charge Only' and 'Discharge Only' scheduling modes"
        }
      }
    }
  },
    {
      uuid: "BatteryTOUCharge.TOUMaximumChargingPower",
      move_to: {
        theme: "Battery",
        section: "Battery Scheduling",
        subsection: "PV Charge Only"
      },
      subsection: {
        title: "PV Charge Only",
        collapsedByDefault: false
      },
      title: "Max Battery Charge Power During 'PV Charge Only' Periods",
      help: "Sets the maximum charging power during scheduled Time-of-Use (TOU) charge periods in kW. Set this limit to control the power level at which the battery will charge from the grid during PV charge only periods",
      entries: {
        Power: {
          name: "Power (kW)",
          description: "Should not exceed the inverter's rated power"
        }
      }
    },
    {
      uuid: "BatteryTOUCharge.TOUChargingPlan1",
      move_to: {
        theme: "Battery",
        section: "Battery Scheduling",
        subsection: "PV Charge Only"
      },
      subsection: {
        title: "PV Charge Only",
        collapsedByDefault: false
      },
      title: "Schedule Window 1 for PV Charge Only",
      help: "During these times your battery will charge from solar power and not discharge to power your home unless there is a grid power outage",
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
      move_to: {
        theme: "Battery",
        section: "Battery Scheduling",
        subsection: "PV Charge Only"
      },
      subsection: {
        title: "PV Charge Only",
        collapsedByDefault: false
      },
      title: "Schedule Window 2 for PV Charge Only",
      help: "During these times your battery will charge from solar power and not discharge to power your home unless there is a grid power outage",
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
      move_to: {
        theme: "Battery",
        section: "Battery Scheduling",
        subsection: "PV Charge Only"
      },
      subsection: {
        title: "PV Charge Only",
        collapsedByDefault: false
      },
      title: "Schedule Window 3 for PV Charge Only",
      help: "During these times your battery will charge from solar power and not discharge to power your home unless there is a grid power outage",
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
      move_to: {
        theme: "Battery",
        section: "Battery Scheduling",
        subsection: "Discharge Only"
      },
      subsection: {
        title: "Discharge Only",
        collapsedByDefault: false
      },
      title: "Max Inverter Output Power During 'Discharge Only' Periods",
      help: "Sets the maximum discharging power during scheduled Time-of-Use (TOU) discharge periods in kW. Limit this to control how much battery power is exported to loads or grid during those windows.",
      entries: {
        Power: {
          name: "Power (kW)",
          description: "Should not exceed the inverter's rated power"
        }
      }
    },
    {
      uuid: "BatteryTOUDischarge.DischargingStopSoc",
      move_to: {
        theme: "Battery",
        section: "Battery Scheduling",
        subsection: "Discharge Only"
      },
      subsection: {
        title: "Discharge Only",
        collapsedByDefault: false
      },
      title: "TOU Discharge Stop SOC",
      help: "Sets the minimum state of charge (SOC) that the battery will discharge to during 'Discharge Only' operation. Once this level is reached, discharging stops to preserve reserve capacity for later use or backup.",
      entries: {
        SOC: {
          name: "SOC (%)"
        }
      }
    },
    {
      uuid: "BatteryTOUDischarge.TOUDischargingPlan1",
      move_to: {
        theme: "Battery",
        section: "Battery Scheduling",
        subsection: "Discharge Only"
      },
      subsection: {
        title: "Discharge Only",
        collapsedByDefault: false
      },
      title: "Schedule Window 1 for Discharge Only",
      help: "During these times, your battery will discharge at a steady rate and not charge from solar power.  Solar power will be used in your home and sold to the grid as allowed",
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
      move_to: {
        theme: "Battery",
        section: "Battery Scheduling",
        subsection: "Discharge Only"
      },
      subsection: {
        title: "Discharge Only",
        collapsedByDefault: false
      },
      title: "Schedule Window 2 for Discharge Only",
      help: "During these times, your battery will discharge at a steady rate and not charge from solar power.  Solar power will be used in your home and sold to the grid as allowed",
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
      move_to: {
        theme: "Battery",
        section: "Battery Scheduling",
        subsection: "Discharge Only"
      },
      subsection: {
        title: "Discharge Only",
        collapsedByDefault: false
      },
      title: "Schedule Window 3 for Discharge Only",
      help: "During these times, your battery will discharge at a steady rate and not charge from solar power.  Solar power will be used in your home and sold to the grid as allowed",
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
      subsection: {
        title: "Grid Protection Parameters",
        collapsedByDefault: true
      },
      title: "Grid Voltage Limits (Stage 1)",
      help: "Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect from the grid.",
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
      help: "Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect from the grid.",
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
      help: "Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect from the grid.",
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
      help: "Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect from the grid to protect the system and comply with grid safety standards.",
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
      help: "Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect from the grid to protect the system and comply with grid safety standards.",
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
      help: "Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect from the grid to protect the system and comply with grid safety standards.",
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
        "help": "Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 1) before the inverter disconnects from the grid.",
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
        "help": "Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 2) before the inverter disconnects from the grid.",
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
        "help": "Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 3) before the inverter disconnects from the grid.",
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
        "help": "Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 1) before the inverter disconnects from the grid.",
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
        "help": "Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 2) before the inverter disconnects from the grid.",
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
        "help": "Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 3) before the inverter disconnects from the grid.",
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
          "uuid": "GridConnection.PermitServiceStatus",
          "title": "Permit to Operate",
          "help": "Shows whether the inverter is permitted to operate in grid-connected mode.",
          "entries": {
            "Mode": {
              "name": "Permit Status",
              "friendly_meanings": {
                "0": "Not Permitted",
                "1": "Permitted"
              }
            }
          }
        },
        {
          "uuid": "GridConnection.RampRate",
          "title": "Ramp Rate",
          "help": "How quickly inverter output is allowed to increase.",
          "entries": {
            "Rate": {
              "name": "Ramp Rate (%/sec)"
            }
          }
        },
        {
          "uuid": "GridConnection.ApplicableVoltage",
          "title": "Applicable Grid Voltage Range",
          "help": "Voltage window within which grid connection is permitted. Outside this range the inverter will not connect or will disconnect.",
          "entries": {
            "ApplicableVoltageLow": {
              "name": "Lower Limit (Vac)"
            },
            "ApplicableVoltageHigh": {
              "name": "Upper Limit (Vac)"
            }
          }
        },
        {
          "uuid": "GridConnection.ApplicableFrequency",
          "title": "Applicable Grid Frequency Range",
          "help": "Frequency window within which grid connection is permitted. Outside this range the inverter will not connect or will disconnect.",
          "entries": {
            "ApplicableFrequencyLow": {
              "name": "Lower Limit (Hz)"
            },
            "ApplicableFrequencyHigh": {
              "name": "Upper Limit (Hz)"
            }
          }
        },
        {
          "uuid": "GridConnection.DelayTime",
          "title": "Connection Delay Times",
          "help": "Delays applied before initial grid connection and after a grid disturbance clears (reconnection). These timers help meet interconnection standards.  The connection delay is how long the inverter will wait after first being powered on.  Reconnection delay is how long the inverter will wait after a grid disturbance or outage clears.",
          "entries": {
            "ConnectionDelayTime": {
              "name": "Connection Delay (s)"
            },
            "ReconnectionDelayTime": {
              "name": "Reconnection Delay (s)"
            }
          }
        },
          {
            "uuid": "ConstantPowerFactorMode.ConstantPowerFactorModeStatus",
            "move_to": {
              "theme": "Grid",
              "section": "Grid Support",
              "subsection": "Constant Power Factor"
            },
            "subsection": {
              "title": "Constant Power Factor",
              "collapsedByDefault": true
            },
            "title": "Power Factor Mode",
            "help": "Shows whether constant power-factor control is active.",
            "entries": {
              "Mode": {
                "name": "Status",
                "friendly_meanings": {
                  "0": "Inactive — No PF control",
                  "1": "Active — Constant PF"
                }
              }
            }
          },
          {
            "uuid": "ConstantPowerFactorMode.ConstantPowerFactor",
            "move_to": {
              "theme": "Grid",
              "section": "Grid Support",
              "subsection": "Constant Power Factor"
            },
            "subsection": {
              "title": "Constant Power Factor",
              "collapsedByDefault": true
            },
            "title": "Power Factor Setpoint",
            "help": "The target power factor and excitation. Under-excited = lagging (absorbing vars); Over-excited = leading (supplying vars).",
            "entries": {
              "Excited": {
                "name": "Excitation"
              },
              "PowerFactor": {
                "name": "Power Factor (PF)"
              }
            }
          },
          {
            "uuid": "ConstantReactivePowerMode.ConstantReactivePowerModeStatus",
            "move_to": {
              "theme": "Grid",
              "section": "Grid Support",
              "subsection": "Constant Reactive Power"
            },
            "subsection": {
              "title": "Constant Reactive Power",
              "collapsedByDefault": true
            },
            "title": "Reactive Power Mode",
            "help": "Shows whether constant reactive-power control is active.",
            "entries": {
              "Excited": {
                "name": "Excitation"
              },
              "Status": {
                "name": "Status",
                "friendly_meanings": {
                  "0": "Inactive - no reactive power control",
                  "1": "Active - reactive power control"
                }
              }
            }
          },
          {
            "uuid": "ConstantReactivePowerMode.ReactivePowerPercentCMD",
            "move_to": {
              "theme": "Grid",
              "section": "Grid Support",
              "subsection": "Constant Reactive Power"
            },
            "subsection": {
              "title": "Constant Reactive Power",
              "collapsedByDefault": true
            },
            "title": "Reactive Power Setpoint",
            "help": "Displays the reactive-power target as a percentage of rated power (vars). Excitation determines whether vars are supplied (leading) or absorbed (lagging).",
            "entries": {
              "Power": {
                "name": "Reactive Power (%)"
              }
            }
          },
          {
            "uuid": "VoltageReactivePowerMode.VoltageReactivePowerMode",
            "move_to": {
              "theme": "Grid",
              "section": "Grid Support",
              "subsection": "Volt-VAR (Voltage-Reactive Power)"
            },
            "subsection": {
              "title": "Volt-VAR (Voltage-Reactive Power)",
              "collapsedByDefault": true
            },
            "title": "Volt-VAR Mode",
            "help": "Shows whether Volt-VAR (voltage-reactive power) control is active. This value is read-only and reflects the current configuration or utility command.",
            "entries": {
              "Mode": {
                "name": "Mode",
                "friendly_meanings": {
                  "0": "Inactive - no Volt-VAR control",
                  "1": "Active - Volt-VAR control"
                }
              }
            }
          },
          {
            "uuid": "VoltageReactivePowerMode.AutonomousVrefAdjustment",
            "move_to": {
              "theme": "Grid",
              "section": "Grid Support",
              "subsection": "Volt-VAR (Voltage-Reactive Power)"
            },
            "subsection": {
              "title": "Volt-VAR (Voltage-Reactive Power)",
              "collapsedByDefault": true
            },
            "title": "Autonomous Vref Adjustment",
            "help": "Indicates whether the inverter autonomously adjusts its reference voltage (Vref).",
            "entries": {
              "Mode": {
                "name": "Autonomous Adjustment",
                "friendly_meanings": {
                  "0": "Disable",
                  "1": "Enable"
                }
              }
            }
          },
          {
            "uuid": "VoltageReactivePowerMode.Verf",
            "move_to": {
              "theme": "Grid",
              "section": "Grid Support",
              "subsection": "Volt-VAR (Voltage-Reactive Power)"
            },
            "subsection": {
              "title": "Volt-VAR (Voltage-Reactive Power)",
              "collapsedByDefault": true
            },
            "title": "Reference Voltage (Vref)",
            "help": "Voltage reference used for Volt-VAR calculations.",
            "entries": {
              "Verf": { "name": "Vref" }
            }
          },
          {
            "uuid": "VoltageReactivePowerMode.VrefAdjustmentTimeConstant",
            "move_to": {
              "theme": "Grid",
              "section": "Grid Support",
              "subsection": "Volt-VAR (Voltage-Reactive Power)"
            },
            "subsection": {
              "title": "Volt-VAR (Voltage-Reactive Power)",
              "collapsedByDefault": true
            },
            "title": "Vref Adjustment Time Constant",
            "help": "Time constant applied when adjusting Vref.",
            "entries": {
              "Time": { "name": "Time Constant" }
            }
          },
          {
            "uuid": "VoltageReactivePowerMode.UnderOverVoltage",
            "move_to": {
              "theme": "Grid",
              "section": "Grid Support",
              "subsection": "Volt-VAR (Voltage-Reactive Power)"
            },
            "subsection": {
              "title": "Volt-VAR (Voltage-Reactive Power)",
              "collapsedByDefault": true
            },
            "title": "Volt-VAR Voltage Breakpoints",
            "help": "Voltage points (V1-V4) that define the Volt-VAR curve breakpoints.",
            "entries": {
              "V1": { "name": "V1 (Voltage Point 1)" },
              "V2": { "name": "V2 (Voltage Point 2)" },
              "V3": { "name": "V3 (Voltage Point 3)" },
              "V4": { "name": "V4 (Voltage Point 4)" }
            }
          },
          {
            "uuid": "VoltageReactivePowerMode.Q1",
            "move_to": {
              "theme": "Grid",
              "section": "Grid Support",
              "subsection": "Volt-VAR (Voltage-Reactive Power)"
            },
            "subsection": {
              "title": "Volt-VAR (Voltage-Reactive Power)",
              "collapsedByDefault": true
            },
            "title": "Reactive Power Setpoint Q1",
            "help": "Reactive power at voltage point V1 on the Volt-VAR curve.",
            "entries": {
              "Q1": { "name": "Q1 (Reactive Setpoint 1)" }
            }
          },
          {
            "uuid": "VoltageReactivePowerMode.Q2",
            "move_to": {
              "theme": "Grid",
              "section": "Grid Support",
              "subsection": "Volt-VAR (Voltage-Reactive Power)"
            },
            "subsection": {
              "title": "Volt-VAR (Voltage-Reactive Power)",
              "collapsedByDefault": true
            },
            "title": "Reactive Power Setpoint Q2",
            "help": "Reactive power at voltage point V2 on the Volt-VAR curve.",
            "entries": {
              "Q2": { "name": "Q2 (Reactive Setpoint 2)" }
            }
          },
          {
            "uuid": "VoltageReactivePowerMode.Q3",
            "move_to": {
              "theme": "Grid",
              "section": "Grid Support",
              "subsection": "Volt-VAR (Voltage-Reactive Power)"
            },
            "subsection": {
              "title": "Volt-VAR (Voltage-Reactive Power)",
              "collapsedByDefault": true
            },
            "title": "Reactive Power Setpoint Q3",
            "help": "Reactive power at voltage point V3 on the Volt-VAR curve.",
            "entries": {
              "Q3": { "name": "Q3 (Reactive Setpoint 3)" }
            }
          },
          {
            "uuid": "VoltageReactivePowerMode.Q4",
            "move_to": {
              "theme": "Grid",
              "section": "Grid Support",
              "subsection": "Volt-VAR (Voltage-Reactive Power)"
            },
            "subsection": {
              "title": "Volt-VAR (Voltage-Reactive Power)",
              "collapsedByDefault": true
            },
            "title": "Reactive Power Setpoint Q4",
            "help": "Reactive power at voltage point V4 on the Volt-VAR curve.",
            "entries": {
              "Q4": { "name": "Q4 (Reactive Setpoint 4)" }
            }
          },
          {
            "uuid": "VoltageReactivePowerMode.OpenLoopResponseTime",
            "move_to": {
              "theme": "Grid",
              "section": "Grid Support",
              "subsection": "Volt-VAR (Voltage-Reactive Power)"
            },
            "subsection": {
              "title": "Volt-VAR (Voltage-Reactive Power)",
              "collapsedByDefault": true
            },
            "title": "Open-Loop Response Time",
            "help": "Response time used for open-loop Volt-VAR changes.",
            "entries": {
              "Time": { "name": "Response Time" }
            }
          },
          {
            "uuid": "ActivePowerReactivePowerMode.PQModeStatus",
            "move_to": {
              "theme": "Grid",
              "section": "Grid Support",
              "subsection": "P-Q Mode (Active-Reactive Power)"
            },
            "subsection": {
              "title": "P-Q Mode (Active-Reactive Power)",
              "collapsedByDefault": true
            },
            "title": "P-Q Mode Status",
            "help": "Shows whether Active/Reactive Power (P-Q) control mode is enabled.",
            "entries": {
              "Mode": {
                "name": "Mode",
                "friendly_meanings": { "0": "Inactive - no P-Q control", "1": "Active - P-Q control" }
              }
            }
          },
          {
            "uuid": "ActivePowerReactivePowerMode.P_QP",
            "move_to": {
              "theme": "Grid",
              "section": "Grid Support",
              "subsection": "P-Q Mode (Active-Reactive Power)"
            },
            "subsection": {
              "title": "P-Q Mode (Active-Reactive Power)",
              "collapsedByDefault": true
            },
            "title": "P-Q Curve Points",
            "help": "Breakpoint setpoints for the Active/Reactive Power (P-Q) characteristic.",
            "entries": {
              "P1": { "name": "P1 Setpoint" },
              "P2": { "name": "P2 Setpoint" },
              "P3": { "name": "P3 Setpoint" }
            }
          },
          {
            "uuid": "VoltageActivePowerMode.VoltageActivePowerMode",
            "move_to": {
              "theme": "Grid",
              "section": "Grid Support",
              "subsection": "Volt-Watt (Voltage-Active Power)"
            },
            "subsection": {
              "title": "Volt-Watt (Voltage-Active Power)",
              "collapsedByDefault": true
            },
            "title": "Volt-Watt Mode",
            "help": "Shows whether Volt-Watt (voltage-active power) control is enabled.",
            "entries": {
              "Mode": {
                "name": "Mode",
                "friendly_meanings": { "0": "Inactive - no Volt-Watt control", "1": "Active - Volt-Watt control" }
              }
            }
          },
          {
            "uuid": "VoltageActivePowerMode.VoltWattV",
            "move_to": {
              "theme": "Grid",
              "section": "Grid Support",
              "subsection": "Volt-Watt (Voltage-Active Power)"
            },
            "subsection": {
              "title": "Volt-Watt (Voltage-Active Power)",
              "collapsedByDefault": true
            },
            "title": "Volt-Watt Voltage Breakpoints",
            "help": "Voltage points that define the Volt-Watt curve.",
            "entries": {
              "VoltWattV1": { "name": "V1 (Voltage Point 1)" },
              "VoltWattV2": { "name": "V2 (Voltage Point 2)" }
            }
          },
          {
            "uuid": "VoltageActivePowerMode.VoltWattP2",
            "move_to": {
              "theme": "Grid",
              "section": "Grid Support",
              "subsection": "Volt-Watt (Voltage-Active Power)"
            },
            "subsection": {
              "title": "Volt-Watt (Voltage-Active Power)",
              "collapsedByDefault": true
            },
            "title": "Volt-Watt Power Setpoint",
            "help": "Power setpoint at voltage breakpoint V2 on the Volt-Watt curve.",
            "entries": {
              "VoltWattP2": { "name": "P2 Setpoint" }
            }
          },
          {
            "uuid": "VoltageActivePowerMode.OpenLoopResponseTime",
            "move_to": {
              "theme": "Grid",
              "section": "Grid Support",
              "subsection": "Volt-Watt (Voltage-Active Power)"
            },
            "subsection": {
              "title": "Volt-Watt (Voltage-Active Power)",
              "collapsedByDefault": true
            },
            "title": "Open-Loop Response Time",
            "help": "Response time used for open-loop Volt-Watt changes.",
            "entries": {
              "Time": { "name": "Response Time" }
            }
          },
          {
            "uuid": "FrequencyActivePowerMode.FrequencyActivePowerModeStatus",
            "move_to": {
              "theme": "Grid",
              "section": "Grid Support",
              "subsection": "Freq-Watt (Frequency-Active Power)"
            },
            "subsection": {
              "title": "Freq-Watt (Frequency-Active Power)",
              "collapsedByDefault": true
            },
            "title": "Frequency-Active Power Mode",
            "help": "Indicates whether frequency-power (Freq-Watt) control is currently enabled.",
            "entries": {
              "Mode": {
                "name": "Mode",
                "friendly_meanings": { "0": "Disable", "1": "Enable" }
              }
            }
          },
          {
            "uuid": "FrequencyActivePowerMode.OpenLoopResponseTime",
            "move_to": {
              "theme": "Grid",
              "section": "Grid Support",
              "subsection": "Freq-Watt (Frequency-Active Power)"
            },
            "subsection": {
              "title": "Freq-Watt (Frequency-Active Power)",
              "collapsedByDefault": true
            },
            "title": "Open-Loop Response Time",
            "help": "Response time applied to open-loop frequency-power adjustments.",
            "entries": {
              "Time": { "name": "Response Time" }
            }
          },
          {
            "uuid": "FrequencyActivePowerMode.OverFrequencyDroop_dbOF",
            "move_to": {
              "theme": "Grid",
              "section": "Grid Support",
              "subsection": "Freq-Watt (Frequency-Active Power)"
            },
            "subsection": {
              "title": "Freq-Watt (Frequency-Active Power)",
              "collapsedByDefault": true
            },
            "title": "Over-Frequency Droop: Deadband",
            "help": "Over Frequency Droop dbOF — Deadband around nominal frequency before active power reduction begins.",
            "entries": {
              "Frequency": { "name": "Deadband (Hz)" }
            }
          },
          {
            "uuid": "FrequencyActivePowerMode.OverFrequencyDroop_kOF",
            "move_to": {
              "theme": "Grid",
              "section": "Grid Support",
              "subsection": "Freq-Watt (Frequency-Active Power)"
            },
            "subsection": {
              "title": "Freq-Watt (Frequency-Active Power)",
              "collapsedByDefault": true
            },
            "title": "Over-Frequency Droop: Gain (k)",
            "help": "Over Frequency Droop kOF — Slope (gain k) of active power reduction versus frequency rise above nominal.",
            "entries": {
              "Frequency": { "name": "Gain k (slope)" }
            }
          },
          {
            "uuid": "FrequencyActivePowerMode.UnderFrequencyDroop_dbUF",
            "move_to": {
              "theme": "Grid",
              "section": "Grid Support",
              "subsection": "Freq-Watt (Frequency-Active Power)"
            },
            "subsection": {
              "title": "Freq-Watt (Frequency-Active Power)",
              "collapsedByDefault": true
            },
            "title": "Under-Frequency Droop: Deadband",
            "help": "Under Frequency Droop dbUF — Deadband around nominal frequency before active power increase/response begins.",
            "entries": {
              "Frequency": { "name": "Deadband (Hz)" }
            }
          },
          {
            "uuid": "FrequencyActivePowerMode.UnderFrequencyDroop_kUF",
            "move_to": {
              "theme": "Grid",
              "section": "Grid Support",
              "subsection": "Freq-Watt (Frequency-Active Power)"
            },
            "subsection": {
              "title": "Freq-Watt (Frequency-Active Power)",
              "collapsedByDefault": true
            },
            "title": "Under-Frequency Droop: Gain (k)",
            "help": "Under Frequency Droop kUF — Slope (gain k) of active power response versus frequency drop below nominal.",
            "entries": {
              "Frequency": { "name": "Gain k (slope)" }
            }
          },          
      {
        "uuid": "ACCoupledPV.ACCouplePVSOC",
        "title": "AC Coupled PV SOC Limits",
        "help": "Defines the battery state-of-charge thresholds that control when the inverter allows AC Coupled PV charging to start and stop.",
        "entries": {
          "StartSOC": {
            "name": "Start SOC (%)",
            "description": "AC Coupled PV begins charging when SOC drops to this level",
            "less_than": "StopSOC",
            "range": {
              "min": 0,
              "max": 100
            }
          },
          "StopSOC": {
            "name": "Stop SOC (%)",
            "description": "AC Coupled PV stops charging when SOC reaches this level",
            "greater_than": "StartSOC",
            "range": {
              "min": 0,
              "max": 100
            }
          }
        }
      },
      {
        "uuid": "GridBase.GridRegulation",
        "title": "Grid Parameters",
        "help": "This setting changes the conditions under which the inverter will connect or disconnect from the utility grid. Different areas have different rules about when this equipment is allowed to disconnect and when it must ride through. Choose the code required by the local utility or AHJ.",
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
        "help": "Choose wiring configuration of the site.  This helps configure the system to match the power service at the site.  Note the voltage you enter here must match the EPS Voltage.",
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
          "help": "Sets the maximum DC current the inverter will send to the battery when charging from the generator.",
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
          "title": "Battery Quick Charge with Generator",
          "help": "Start the generator to charge the battery.",
          "entries": {
            "Mode": {
              "name": " ",
              "friendly_meanings": {
                "0": "Stop quick charge",
                "1": "Start quick charge"
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
          "title": "AC Coupled PV",
          "help": "Enable this option when connecting a grid-tied solar inverter (AC Coupled PV) to the system. Disable when no AC Coupled PV is present.",
          "entries": {
            "Mode": {
              "name": "AC Coupled PV Mode",
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
  if (transform.invokeButtonText !== undefined) {
    point.invokeButtonText = transform.invokeButtonText;
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
        if (entryTransform.range !== undefined) {
          entry.range = {
            ...entryTransform.range,
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
    if (transform.subsection.collapsedByDefault !== undefined) {
      subsection.collapsedByDefault = transform.subsection.collapsedByDefault;
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
