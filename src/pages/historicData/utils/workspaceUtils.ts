import type { SerializableWorkspaceData, SerializableChartConfig, InverterSelectionKeyword } from '../types';

/**
 * Chart configuration with runtime state (Maps and Sets)
 */
interface ChartData {
  id: string;
  selectedPoints: Map<string, Set<string>>;
  row: number;
  col: number;
}

/**
 * Inverter information for keyword resolution
 */
export interface InverterInfo {
  id: string;
  isPrimary?: boolean;
}

/**
 * Try to convert inverter IDs to a keyword using heuristics
 * This is used when the full inverter list is not available
 */
function inferKeywordFromIds(inverterIds: string[]): InverterSelectionKeyword | null {
  if (inverterIds.length === 0) {
    return null;
  }

  // If all points in a chart have the same single inverter, assume it's "first"
  if (inverterIds.length === 1) {
    return 'first';
  }

  return null;
}

/**
 * Serialize chart data for storage/export
 * Converts Maps and Sets to plain objects and arrays
 * Attempts to convert inverter IDs back to keywords for portability
 */
export function serializeChartData(
  charts: ChartData[],
  availableInverters?: InverterInfo[]
): SerializableChartConfig[] {
  return charts.map((chart) => ({
    id: chart.id,
    row: chart.row,
    col: chart.col,
    selectedPoints: Object.fromEntries(
      Array.from(chart.selectedPoints.entries()).map(([key, set]) => {
        const inverterIds = Array.from(set);

        // If inverter info is provided, try to convert IDs to keywords
        if (availableInverters && availableInverters.length > 0) {
          const allInverterIds = availableInverters.map(inv => inv.id);
          const primaryInverterId = availableInverters.find(inv => inv.isPrimary)?.id;
          const keyword = getKeywordForInverterIds(inverterIds, allInverterIds, primaryInverterId);

          // If we can map to a keyword, use it
          if (keyword) {
            return [key, [keyword]];
          }
        } else {
          // No inverter info provided, try heuristic-based conversion
          const keyword = inferKeywordFromIds(inverterIds);
          if (keyword) {
            return [key, [keyword]];
          }
        }

        // Keep the IDs as-is (will fail validation if exported as built-in)
        return [key, inverterIds];
      })
    ),
  }));
}

/**
 * Resolve inverter selection keywords to actual inverter IDs
 */
export function resolveInverterKeywords(
  keywords: InverterSelectionKeyword[],
  availableInverters: InverterInfo[]
): string[] {
  const resolvedIds = new Set<string>();

  for (const keyword of keywords) {
    switch (keyword) {
      case 'all':
        availableInverters.forEach((inv) => resolvedIds.add(inv.id));
        break;
      case 'first':
        if (availableInverters.length > 0) {
          resolvedIds.add(availableInverters[0].id);
        }
        break;
      case 'primary':
        const primary = availableInverters.find((inv) => inv.isPrimary);
        if (primary) {
          resolvedIds.add(primary.id);
        }
        break;
    }
  }

  return Array.from(resolvedIds);
}

/**
 * Check if a value is a keyword
 */
function isKeyword(value: string): value is InverterSelectionKeyword {
  return value === 'first' || value === 'primary' || value === 'all';
}

/**
 * Deserialize chart data from storage/import
 * Converts plain objects and arrays back to Maps and Sets
 * Optionally resolves keywords to actual inverter IDs
 * Handles both legacy format (IDs) and new format (keywords)
 */
export function deserializeChartData(
  serializedCharts: SerializableChartConfig[],
  availableInverters?: InverterInfo[]
): ChartData[] {
  return serializedCharts.map((chart) => ({
    id: chart.id,
    row: chart.row,
    col: chart.col,
    selectedPoints: new Map(
      Object.entries(chart.selectedPoints).map(([key, values]) => {
        // Check if values are keywords that need resolution
        const hasKeywords = Array.isArray(values) && values.some(isKeyword);

        if (hasKeywords && availableInverters) {
          // Resolve keywords to IDs
          const keywords = values.filter(isKeyword) as InverterSelectionKeyword[];
          const resolvedIds = resolveInverterKeywords(keywords, availableInverters);
          return [key, new Set(resolvedIds)];
        } else {
          // Use values as-is (either already IDs, or no inverter info to resolve)
          return [key, new Set(values)];
        }
      })
    ),
  }));
}

/**
 * Serialize workspace data for storage/export
 * Optionally converts inverter IDs back to keywords for portability
 */
export function serializeWorkspaceData(
  charts: ChartData[],
  rowHeights: Map<number, number>,
  columnWidths: Map<number, number>,
  nextChartId: number,
  activeChartId?: string,
  availableInverters?: InverterInfo[]
): SerializableWorkspaceData {
  return {
    charts: serializeChartData(charts, availableInverters),
    rowHeights: Object.fromEntries(rowHeights),
    columnWidths: Object.fromEntries(columnWidths),
    nextChartId,
    activeChartId,
  };
}

/**
 * Deserialize workspace data from storage/import
 * Optionally resolves keywords to actual inverter IDs
 */
export function deserializeWorkspaceData(
  data: SerializableWorkspaceData,
  availableInverters?: InverterInfo[]
): {
  charts: ChartData[];
  rowHeights: Map<number, number>;
  columnWidths: Map<number, number>;
  nextChartId: number;
  activeChartId?: string;
} {
  return {
    charts: deserializeChartData(data.charts, availableInverters),
    rowHeights: new Map(Object.entries(data.rowHeights).map(([k, v]) => [Number(k), v])),
    columnWidths: new Map(Object.entries(data.columnWidths).map(([k, v]) => [Number(k), v])),
    nextChartId: data.nextChartId,
    activeChartId: data.activeChartId,
  };
}

/**
 * Validate that all selectedPoints in workspace can be mapped to keywords
 * Returns error message if validation fails, undefined if successful
 */
export function validateWorkspaceForExport(
  data: SerializableWorkspaceData
): string | undefined {
  // Validate overall structure
  if (!validateWorkspaceData(data)) {
    return 'Invalid workspace structure';
  }

  const invalidPoints: Array<{ chartNum: number; pointId: string; values: string[] }> = [];

  // Validate that all selectedPoints use valid keywords
  for (let i = 0; i < data.charts.length; i++) {
    const chart = data.charts[i];

    // Check each point in the chart
    for (const [pointId, values] of Object.entries(chart.selectedPoints)) {
      if (!Array.isArray(values)) {
        return `Chart ${i + 1}: Invalid format for point '${pointId}'`;
      }

      // Find any invalid values
      const invalidValues = values.filter((v: any) => !isValidKeyword(v));
      if (invalidValues.length > 0) {
        invalidPoints.push({
          chartNum: i + 1,
          pointId,
          values: invalidValues,
        });
      }
    }
  }

  if (invalidPoints.length > 0) {
    const pointsList = invalidPoints
      .map(({ chartNum, pointId, values }) =>
        `  - Chart ${chartNum}, Point '${pointId}': ${values.map(v => `'${v}'`).join(', ')}`
      )
      .join('\n');

    return `Cannot save as workspace. The following points have invalid equipment selection:\n\n${pointsList}\n\nYou can select either 'primary', 'first', or 'all'. Please update these points to use one of these valid options.`;
  }

  return undefined;
}

/**
 * Export workspace as JSON file
 * Validates that workspace uses keyword-based selectedPoints before export
 */
export function exportWorkspaceAsJSON(
  workspaceName: string,
  data: SerializableWorkspaceData
): { success: boolean; error?: string } {
  // Validate before export
  const validationError = validateWorkspaceForExport(data);
  if (validationError) {
    return { success: false, error: validationError };
  }

  const jsonString = JSON.stringify(
    {
      version: '1.0',
      name: workspaceName,
      exportedAt: new Date().toISOString(),
      data,
    },
    null,
    2
  );

  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${workspaceName.replace(/\s+/g, '_')}_workspace.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  return { success: true };
}

/**
 * Import workspace from JSON file
 */
export function importWorkspaceFromJSON(file: File): Promise<{
  name: string;
  data: SerializableWorkspaceData;
}> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const parsed = JSON.parse(content);

        // Validate structure
        if (!parsed.data || !parsed.data.charts || !parsed.data.rowHeights || !parsed.data.columnWidths) {
          throw new Error('Invalid workspace file structure');
        }

        // Validate required fields
        if (typeof parsed.data.nextChartId !== 'number') {
          throw new Error('Invalid workspace file: missing nextChartId');
        }

        resolve({
          name: parsed.name || 'Imported Workspace',
          data: parsed.data,
        });
      } catch (error) {
        reject(new Error(`Failed to parse workspace file: ${error instanceof Error ? error.message : 'Unknown error'}`));
      }
    };

    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };

    reader.readAsText(file);
  });
}

/**
 * Validate that a value is a valid inverter selection keyword
 */
function isValidKeyword(value: any): value is InverterSelectionKeyword {
  return value === 'primary' || value === 'first' || value === 'all';
}

/**
 * Validate selectedPoints structure and values
 */
export function validateSelectedPoints(selectedPoints: any): {
  valid: boolean;
  error?: string;
} {
  if (typeof selectedPoints !== 'object' || selectedPoints === null) {
    return { valid: false, error: 'selectedPoints must be an object' };
  }

  for (const [pointId, keywords] of Object.entries(selectedPoints)) {
    if (!Array.isArray(keywords)) {
      return { valid: false, error: `selectedPoints['${pointId}'] must be an array` };
    }

    for (const keyword of keywords) {
      if (!isValidKeyword(keyword)) {
        return {
          valid: false,
          error: `Invalid keyword '${keyword}' for point '${pointId}'. Must be 'primary', 'first', or 'all'`,
        };
      }
    }
  }

  return { valid: true };
}

/**
 * Check if inverter IDs can be mapped to valid keywords
 * Returns the appropriate keyword or undefined if no clean mapping exists
 */
export function getKeywordForInverterIds(
  inverterIds: string[],
  allInverterIds: string[],
  primaryInverterId?: string
): InverterSelectionKeyword | undefined {
  if (inverterIds.length === 0) {
    return undefined;
  }

  // Check if it's 'all'
  if (inverterIds.length === allInverterIds.length) {
    const sortedSelected = [...inverterIds].sort();
    const sortedAll = [...allInverterIds].sort();
    if (sortedSelected.every((id, i) => id === sortedAll[i])) {
      return 'all';
    }
  }

  // Check if it's 'primary'
  if (primaryInverterId && inverterIds.length === 1 && inverterIds[0] === primaryInverterId) {
    return 'primary';
  }

  // Check if it's 'first'
  if (inverterIds.length === 1 && allInverterIds.length > 0 && inverterIds[0] === allInverterIds[0]) {
    return 'first';
  }

  return undefined;
}

/**
 * Validate workspace data structure
 */
export function validateWorkspaceData(data: any): data is SerializableWorkspaceData {
  if (!data || typeof data !== 'object') return false;
  if (!Array.isArray(data.charts)) return false;
  if (typeof data.rowHeights !== 'object') return false;
  if (typeof data.columnWidths !== 'object') return false;
  if (typeof data.nextChartId !== 'number') return false;

  // Validate each chart
  for (const chart of data.charts) {
    if (typeof chart.id !== 'string') return false;
    if (typeof chart.row !== 'number') return false;
    if (typeof chart.col !== 'number') return false;
    if (typeof chart.selectedPoints !== 'object') return false;

    // Validate selectedPoints contain valid keywords
    const validation = validateSelectedPoints(chart.selectedPoints);
    if (!validation.valid) return false;
  }

  return true;
}

/**
 * Compare two workspace data structures to detect changes
 */
export function hasWorkspaceChanged(
  original: SerializableWorkspaceData,
  current: SerializableWorkspaceData
): boolean {
  return JSON.stringify(original) !== JSON.stringify(current);
}

/**
 * Create a deep copy of workspace data
 */
export function cloneWorkspaceData(data: SerializableWorkspaceData): SerializableWorkspaceData {
  return JSON.parse(JSON.stringify(data));
}
