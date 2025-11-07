// -----------------------------------------------------------------------------
// Equipment Configuration Types
// -----------------------------------------------------------------------------

export interface EquipmentOption {
  id: string;
  label: string;
  thingId: {
    Type: string;
    Mn: string;
    Md: string;
    SN: string;
  };
  modbusSlaveId: number;
}

export const equipmentOptions: EquipmentOption[] = [
  {
    id: "envy-04237218B0",
    label: "⭐ Envy - 04237218B0",
    thingId: {
      Type: "Inverter",
      Mn: "fortress",
      Md: "FP-ENVY-Inverter",
      SN: "04237218B0"
    },
    modbusSlaveId: 1
  },
  {
    id: "envy-04237219C3",
    label: "Envy - 04237219C3",
    thingId: {
      Type: "Inverter",
      Mn: "fortress",
      Md: "FP-ENVY-Inverter",
      SN: "04237219C3"
    },
    modbusSlaveId: 2
  }
];
