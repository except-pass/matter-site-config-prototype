export type Meanings = Record<string | number, string>;

export interface Label {
  label_family: string;
  label_text: string;
}

export interface ProtocolEntry {
  description?: string;
  longdescription?: string;
  dtype?: string;
  meanings?: Meanings;
  friendly_meanings?: Meanings;
  name: string;
  value?: unknown;
  unit?: string | null;
  scalefactor?: number | null;
  category?: string;
  labels?: Label[];
}

export interface ProtocolPoint {
  block: string;
  entry: ProtocolEntry;
  model: string;
  point: string;
  labels: Label[];
}

// Recursive type for arbitrary depth hierarchy
export type LabelHierarchy = Map<string, LabelHierarchy | ProtocolPoint[]>;

// Workspace Management Types

// Inverter selection keywords
export type InverterSelectionKeyword = 'primary' | 'first' | 'all';

export interface SerializableChartConfig {
  id: string;
  row: number;
  col: number;
  selectedPoints: Record<string, (InverterSelectionKeyword | string)[]>; // Maps point IDs to selection keywords (primary/first/all) or inverter IDs
}

export interface SerializableWorkspaceData {
  charts: SerializableChartConfig[];
  rowHeights: Record<number, number>; // Serializable version of Map<number, number>
  columnWidths: Record<number, number>; // Serializable version of Map<number, number>
  nextChartId: number;
  activeChartId?: string;
}

export interface WorkspaceMetadata {
  id: string;
  name: string;
  type: 'user' | 'builtin';
  createdAt: string;
  updatedAt: string;
  chartCount: number;
}

export interface Workspace {
  id: string;
  name: string;
  type: 'user' | 'builtin';
  createdAt: string;
  updatedAt: string;
  data: SerializableWorkspaceData;
}

export interface WorkspaceListItem extends WorkspaceMetadata {
  // Used in the management UI
  isDefault?: boolean;
}

// User settings for workspace preferences
export interface UserWorkspaceSettings {
  defaultWorkspaceId?: string;
}

// Time window context (for future enhancement)
export interface TimeWindow {
  type: 'relative' | 'absolute';
  start?: string;
  end?: string;
  duration?: string;
}
