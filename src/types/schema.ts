// -----------------------------------------------------------------------------
// Point Theme Schema (3-level hierarchy)
// Page -> themes[] -> sections[] -> subsections[] -> points[]
// Sidebar shows themes and their sections for navigation.
// Each subsection controls layout of its points and whether it's collapsed.
// -----------------------------------------------------------------------------

export interface PageDef {
  pageName: string;
  themes: ThemeDef[];
}

export interface ThemeDef {
  themeName: string;
  sections: SectionDef[];
}

export interface EntryValue {
  [key: string]: any;
}

export interface EntryDef {
  name: string;
  arg: string; // protocol argument key
  dtype: 'enum' | 'String' | 'Number';
  value?: string | number;
  unit?: string;
  description?: string;
  longdescription?: string;
  range?: { min: number; max: number };
  meanings?: Record<string, string>; // enum wire -> semantic key
  friendly_meanings?: Record<string, string>; // semantic key -> UI label
  greater_than?: string; // This entry must be > the named entry
  less_than?: string; // This entry must be < the named entry
  protocol?: {
    matter?: {
      MEP?: string;
      Cluster?: string;
      Element?: string;
    };
  };
  telemetry?: {
    model?: string;
    block?: string;
    point?: string;
    bitsplit_map?: string;
  };
}

export interface PointDef {
  title: string;
  help?: string;
  element_type: string; // attribute | service | custom
  access: string; // R | RW | Invoke
  readOnly?: boolean;
  entries: EntryDef[];
  protocol: {
    matter?: any;
    modbus?: {
      address: number;
      register_type: number;
      size: number;
      scale_factor?: number;
    };
    cgi?: {
      MEP: string;
      Cluster: string;
      Element: string;
    };
  };
  command_id: string;
  widget?: "datetime" | "time" | "timerange" | "timerange-multi" | "generator-exercise" | "default";
  invokeButtonText?: string; // Custom text for invoke button (defaults to "Invoke")
  showInvokeButton?: boolean; // Set to false to hide the invoke button (default: true, UI-only override)
  showHistory?: boolean; // Set to false to hide the history button (default: true for points with telemetry)
  showRefresh?: boolean; // Set to false to hide the refresh button (default: true for non-invoke points)
  showSetButton?: boolean; // Set to true to show the set button on invoke commands (default: false for invoke, true for others)
}

export interface SubsectionDef {
  title: string | null;
  visibility: string; // "default" | "advanced" | future values
  collapsedByDefault: boolean;
  points: PointDef[];
}

export interface SectionDef {
  sectionTitle: string;
  subsections: SubsectionDef[];
}

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

export type PageRegistryEntry = {
  id: string;
  label: string;
  filename: string;
  data: PageDef;
};
