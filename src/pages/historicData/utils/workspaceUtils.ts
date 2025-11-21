import type { SerializableWorkspaceData, SerializableChartConfig } from '../types';

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
 * Serialize chart data for storage/export
 * Converts Maps and Sets to plain objects and arrays
 */
export function serializeChartData(charts: ChartData[]): SerializableChartConfig[] {
  return charts.map((chart) => ({
    id: chart.id,
    row: chart.row,
    col: chart.col,
    selectedPoints: Object.fromEntries(
      Array.from(chart.selectedPoints.entries()).map(([key, set]) => [
        key,
        Array.from(set),
      ])
    ),
  }));
}

/**
 * Deserialize chart data from storage/import
 * Converts plain objects and arrays back to Maps and Sets
 */
export function deserializeChartData(
  serializedCharts: SerializableChartConfig[]
): ChartData[] {
  return serializedCharts.map((chart) => ({
    id: chart.id,
    row: chart.row,
    col: chart.col,
    selectedPoints: new Map(
      Object.entries(chart.selectedPoints).map(([key, arr]) => [key, new Set(arr)])
    ),
  }));
}

/**
 * Serialize workspace data for storage/export
 */
export function serializeWorkspaceData(
  charts: ChartData[],
  rowHeights: Map<number, number>,
  columnWidths: Map<number, number>,
  nextChartId: number,
  activeChartId?: string
): SerializableWorkspaceData {
  return {
    charts: serializeChartData(charts),
    rowHeights: Object.fromEntries(rowHeights),
    columnWidths: Object.fromEntries(columnWidths),
    nextChartId,
    activeChartId,
  };
}

/**
 * Deserialize workspace data from storage/import
 */
export function deserializeWorkspaceData(data: SerializableWorkspaceData): {
  charts: ChartData[];
  rowHeights: Map<number, number>;
  columnWidths: Map<number, number>;
  nextChartId: number;
  activeChartId?: string;
} {
  return {
    charts: deserializeChartData(data.charts),
    rowHeights: new Map(Object.entries(data.rowHeights).map(([k, v]) => [Number(k), v])),
    columnWidths: new Map(Object.entries(data.columnWidths).map(([k, v]) => [Number(k), v])),
    nextChartId: data.nextChartId,
    activeChartId: data.activeChartId,
  };
}

/**
 * Export workspace as JSON file
 */
export function exportWorkspaceAsJSON(
  workspaceName: string,
  data: SerializableWorkspaceData
): void {
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
