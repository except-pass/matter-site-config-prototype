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
