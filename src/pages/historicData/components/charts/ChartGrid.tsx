import React, { useState } from "react";
import type { ProtocolPoint } from "../../types";
import FakeChart from "./FakeChart";
import ChartTutorialModal from "../modals/ChartTutorialModal";
import {
  RowDivider,
  ColumnDivider,
  CornerHandle,
  type DividerButtonSegment,
  ROW_DIVIDER_TRACK,
  COLUMN_DIVIDER_TRACK,
} from "./GridDividers";

const MIN_ROW_HEIGHT = 280;
const MIN_COLUMN_WIDTH = 360;
const DEFAULT_ROW_HEIGHT = 520;
const DEFAULT_COLUMN_WIDTH = 780;
export const DEFAULT_INVERTER_SELECTION = ['001'];

const PRECONFIGURED_CHARTS: Array<{ id: string; row: number; col: number; points: string[] }> = [
  {
    id: 'chart-0',
    row: 0,
    col: 0,
    points: [
      '40101:pPvTotal',
      '40101:pGridImpTot',
      '40101:pGridExpTot',
      '40101:pBatChg',
      '40101:pBatDischg',
    ],
  },
  {
    id: 'chart-1',
    row: 0,
    col: 1,
    points: ['lifecycle_events:is_online', '40101:gridStat'],
  },
  {
    id: 'chart-2',
    row: 1,
    col: 0,
    points: ['40101:socBat'],
  },
  {
    id: 'chart-3',
    row: 1,
    col: 1,
    points: [],
  },
];

const createDefaultPointSelections = (pointKeys: string[]): Map<string, Set<string>> => {
  return new Map(pointKeys.map((key) => [key, new Set(DEFAULT_INVERTER_SELECTION)]));
};

interface ChartData {
  id: string;
  selectedPoints: Map<string, Set<string>>;
  row: number;
  col: number;
}

export interface ChartGridCallbacks {
  getActiveChartSelectedPoints: () => Map<string, Set<string>>;
  togglePointForActiveChart: (pointKey: string) => void;
  updateInvertersForActiveChart: (pointKey: string, inverters: Set<string>) => void;
}

interface ChartGridProps {
  protocols: ProtocolPoint[];
  onUpdateInverters: (chartId: string, pointKey: string, inverters: Set<string>) => void;
  onScrollToPoint: (pointKey: string) => void;
  onRemoveInverter: (chartId: string, pointKey: string, inverterSN: string) => void;
  onSelectPointsToggle: (open: boolean) => void;
  selectPointsOpen: boolean;
  callbacksRef: React.MutableRefObject<ChartGridCallbacks | null>;
  onActiveChartSelectedPointsChange: (points: Map<string, Set<string>>) => void;
  onActiveChartPositionChange: (rect: DOMRect | null) => void;
}

export default 
function ChartGrid({ protocols, onUpdateInverters, onScrollToPoint, onRemoveInverter, onSelectPointsToggle, selectPointsOpen, callbacksRef, onActiveChartSelectedPointsChange, onActiveChartPositionChange }: ChartGridProps) {
  const [charts, setCharts] = useState<ChartData[]>(() =>
    PRECONFIGURED_CHARTS.map(({ id, row, col, points }) => ({
      id,
      row,
      col,
      selectedPoints: createDefaultPointSelections(points),
    }))
  );
  const [nextChartId, setNextChartId] = useState(PRECONFIGURED_CHARTS.length);
  const [activeChartId, setActiveChartId] = useState<string>('chart-0');
  const [columnWidths, setColumnWidths] = useState<Map<number, number>>(
    () => new Map([
      [0, DEFAULT_COLUMN_WIDTH],
      [1, DEFAULT_COLUMN_WIDTH],
    ])
  );
  const [rowHeights, setRowHeights] = useState<Map<number, number>>(
    () => new Map([
      [0, DEFAULT_ROW_HEIGHT],
      [1, DEFAULT_ROW_HEIGHT],
    ])
  );
  const [activeRowSeparator, setActiveRowSeparator] = useState<number | null>(null);
  const [activeColSeparator, setActiveColSeparator] = useState<number | null>(null);
  const [activeCorner, setActiveCorner] = useState<{row: number, col: number} | null>(null);
  const [showTutorialModal, setShowTutorialModal] = useState<boolean>(false);
  type RowResizeState =
    | {
        mode: 'between';
        startY: number;
        aboveRow: number;
        belowRow: number;
        initialAbove: number;
        initialBelow: number;
        total: number;
      }
    | {
        mode: 'edge';
        startY: number;
        row: number;
        initialHeight: number;
      };

  type ColumnResizeState =
    | {
        mode: 'between';
        startX: number;
        leftCol: number;
        rightCol: number;
        initialLeft: number;
        initialRight: number;
        total: number;
      }
    | {
        mode: 'edge';
        startX: number;
        col: number;
        initialWidth: number;
      };

  type CornerResizeState = {
    startX: number;
    startY: number;
    aboveRow: number;
    belowRow: number;
    leftCol: number;
    rightCol: number;
    initialAboveHeight: number;
    initialBelowHeight: number;
    initialLeftWidth: number;
    initialRightWidth: number;
    totalHeight: number;
    totalWidth: number;
  };

  const rowResizeStartRef = React.useRef<RowResizeState | null>(null);
  const columnResizeStartRef = React.useRef<ColumnResizeState | null>(null);
  const cornerResizeStartRef = React.useRef<CornerResizeState | null>(null);
  const [justAddedChartId, setJustAddedChartId] = useState<string | null>(null);
  const addAnimationTimeoutRef = React.useRef<number | null>(null);
  const chartRefsMap = React.useRef<Map<string, HTMLDivElement>>(new Map());

  // Crosshair state - shared across all charts (null when not hovering)
  const [crosshairX, setCrosshairX] = useState<number | null>(null);

  // Drag-and-drop state for moving data points between charts
  const [draggedData, setDraggedData] = useState<{
    type: 'legend' | 'categorical';
    pointKey: string;
    sourceChartId: string;
    inverters: Set<string>;
  } | null>(null);
  const [dropTargetChartId, setDropTargetChartId] = useState<string | null>(null);

  // Notify parent whenever active chart's selection changes
  React.useEffect(() => {
    const activeChart = charts.find(c => c.id === activeChartId);
    if (activeChart) {
      onActiveChartSelectedPointsChange(new Map(activeChart.selectedPoints));
    }
  }, [charts, activeChartId, onActiveChartSelectedPointsChange]);

  // Notify parent of active chart position
  React.useEffect(() => {
    const updateActiveChartPosition = () => {
      const activeChartElement = chartRefsMap.current.get(activeChartId);
      if (activeChartElement) {
        const rect = activeChartElement.getBoundingClientRect();
        onActiveChartPositionChange(rect);
      } else {
        onActiveChartPositionChange(null);
      }
    };

    updateActiveChartPosition();

    // Also update on scroll and resize
    window.addEventListener('scroll', updateActiveChartPosition, true);
    window.addEventListener('resize', updateActiveChartPosition);

    return () => {
      window.removeEventListener('scroll', updateActiveChartPosition, true);
      window.removeEventListener('resize', updateActiveChartPosition);
    };
  }, [activeChartId, charts, columnWidths, rowHeights, onActiveChartPositionChange]);

  // Initialize callbacks ref synchronously before paint
  React.useLayoutEffect(() => {
    callbacksRef.current = {
      getActiveChartSelectedPoints: () => {
        const activeChart = charts.find(c => c.id === activeChartId);
        return activeChart ? new Map(activeChart.selectedPoints) : new Map();
      },
      togglePointForActiveChart: (pointKey: string) => {
        console.log('togglePointForActiveChart called, activeChartId:', activeChartId);
        setCharts(prev => {
          const result = prev.map(c => {
            if (c.id === activeChartId) {
              const newSelected = new Map(c.selectedPoints);
              console.log('Current selected points:', newSelected.size);
              if (newSelected.has(pointKey)) {
                newSelected.delete(pointKey);
                console.log('Deleted point, new size:', newSelected.size);
              } else {
                const defaultInverters = new Set(['001']);
                newSelected.set(pointKey, defaultInverters);
                console.log('Added point, new size:', newSelected.size);
              }
              return { ...c, selectedPoints: newSelected };
            }
            return c;
          });
          return result;
        });
      },
      updateInvertersForActiveChart: (pointKey: string, inverters: Set<string>) => {
        console.log('updateInvertersForActiveChart called, activeChartId:', activeChartId, 'inverters:', inverters);
        setCharts(prev => {
          const result = prev.map(c => {
            if (c.id === activeChartId) {
              const newSelected = new Map(c.selectedPoints);
              if (inverters.size === 0) {
                newSelected.delete(pointKey);
              } else {
                newSelected.set(pointKey, inverters);
              }
              console.log('Updated chart, selected points size:', newSelected.size);
              return { ...c, selectedPoints: newSelected };
            }
            return c;
          });
          return result;
        });
      }
    };
  }, [charts, activeChartId, callbacksRef]);

  React.useEffect(() => {
    if (typeof ResizeObserver === 'undefined') {
      return undefined;
    }

    const observer = new ResizeObserver((entries) => {
      const updates = new Map<number, number>();
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        const chartId = target.getAttribute('data-chart-id');
        if (!chartId) {
          return;
        }
        const chart = charts.find((c) => c.id === chartId);
        if (!chart) {
          return;
        }
        const categoricalStack = target.querySelector<HTMLElement>('[data-categorical-stack]');
        const catHeight = categoricalStack ? categoricalStack.scrollHeight : 0;
        if (catHeight <= 0) {
          return;
        }
        const desiredHeight = Math.max(DEFAULT_ROW_HEIGHT + catHeight + 24, MIN_ROW_HEIGHT);
        updates.set(chart.row, Math.max(desiredHeight, updates.get(chart.row) ?? 0));
      });

      if (updates.size === 0) {
        return;
      }

      setRowHeights((prev) => {
        let changed = false;
        const next = new Map(prev);
        updates.forEach((height, row) => {
          const current = next.get(row) ?? DEFAULT_ROW_HEIGHT;
          if (height > current + 1) {
            next.set(row, height);
            changed = true;
          }
        });
        return changed ? next : prev;
      });
    });

    chartRefsMap.current.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [charts, setRowHeights]);

  const getRowHeight = React.useCallback(
    (row: number) => rowHeights.get(row) ?? DEFAULT_ROW_HEIGHT,
    [rowHeights]
  );

  const getColumnWidth = React.useCallback(
    (col: number) => columnWidths.get(col) ?? DEFAULT_COLUMN_WIDTH,
    [columnWidths]
  );

  const setSingleRowHeight = React.useCallback((row: number, newHeight: number) => {
    const clamped = Math.max(MIN_ROW_HEIGHT, newHeight);
    setRowHeights(prev => {
      const next = new Map(prev);
      next.set(row, clamped);
      return next;
    });
  }, []);

  const setSingleColumnWidth = React.useCallback((col: number, newWidth: number) => {
    const clamped = Math.max(MIN_COLUMN_WIDTH, newWidth);
    setColumnWidths(prev => {
      const next = new Map(prev);
      next.set(col, clamped);
      return next;
    });
  }, []);

  const triggerAddAnimation = React.useCallback((chartId: string) => {
    if (addAnimationTimeoutRef.current !== null) {
      window.clearTimeout(addAnimationTimeoutRef.current);
    }
    setJustAddedChartId(chartId);
    addAnimationTimeoutRef.current = window.setTimeout(() => {
      setJustAddedChartId(null);
      addAnimationTimeoutRef.current = null;
    }, 400);
  }, []);

  React.useEffect(() => {
    return () => {
      if (addAnimationTimeoutRef.current !== null) {
        window.clearTimeout(addAnimationTimeoutRef.current);
      }
    };
  }, []);

  const applyRowHeights = React.useCallback((aboveRow: number, belowRow: number, newAbove: number, total: number) => {
    if (total <= MIN_ROW_HEIGHT * 2) {
      const equalSplit = total / 2;
      setRowHeights(prev => {
        const next = new Map(prev);
        next.set(aboveRow, equalSplit);
        next.set(belowRow, total - equalSplit);
        return next;
      });
      return;
    }

    const minAbove = MIN_ROW_HEIGHT;
    const maxAbove = total - MIN_ROW_HEIGHT;
    const clampedAbove = Math.min(Math.max(newAbove, minAbove), maxAbove);
    const clampedBelow = total - clampedAbove;
    setRowHeights(prev => {
      const next = new Map(prev);
      next.set(aboveRow, clampedAbove);
      next.set(belowRow, clampedBelow);
      return next;
    });
  }, []);

  const applyColumnWidths = React.useCallback((leftCol: number, rightCol: number, newLeft: number, total: number) => {
    if (total <= MIN_COLUMN_WIDTH * 2) {
      const equalSplit = total / 2;
      setColumnWidths(prev => {
        const next = new Map(prev);
        next.set(leftCol, equalSplit);
        next.set(rightCol, total - equalSplit);
        return next;
      });
      return;
    }

    const minLeft = MIN_COLUMN_WIDTH;
    const maxLeft = total - MIN_COLUMN_WIDTH;
    const clampedLeft = Math.min(Math.max(newLeft, minLeft), maxLeft);
    const clampedRight = total - clampedLeft;
    setColumnWidths(prev => {
      const next = new Map(prev);
      next.set(leftCol, clampedLeft);
      next.set(rightCol, clampedRight);
      return next;
    });
  }, []);

  const handleRowResizeStart = (aboveRow: number, belowRow: number, clientY: number) => {
    if (belowRow === undefined) return;
    const initialAbove = getRowHeight(aboveRow);
    const initialBelow = getRowHeight(belowRow);
    rowResizeStartRef.current = {
      mode: 'between',
      startY: clientY,
      aboveRow,
      belowRow,
      initialAbove,
      initialBelow,
      total: initialAbove + initialBelow
    };
    setActiveRowSeparator(aboveRow);
  };

  const handleRowEdgeResizeStart = (row: number, clientY: number) => {
    rowResizeStartRef.current = {
      mode: 'edge',
      startY: clientY,
      row,
      initialHeight: getRowHeight(row),
    };
    setActiveRowSeparator(row);
  };

  React.useEffect(() => {
    if (activeRowSeparator === null || !rowResizeStartRef.current) return;

    const startData = rowResizeStartRef.current;

    const handleMouseMove = (event: MouseEvent) => {
      const delta = event.clientY - startData.startY;
      if (startData.mode === 'between') {
        const proposedAbove = startData.initialAbove + delta;
        applyRowHeights(startData.aboveRow, startData.belowRow, proposedAbove, startData.total);
      } else {
        setSingleRowHeight(startData.row, startData.initialHeight + delta);
      }
    };

    const handleMouseUp = () => {
      setActiveRowSeparator(null);
      rowResizeStartRef.current = null;
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [activeRowSeparator, applyRowHeights, setSingleRowHeight]);

  const handleColumnResizeStart = (leftCol: number, rightCol: number, clientX: number) => {
    if (rightCol === undefined) return;
    const initialLeft = getColumnWidth(leftCol);
    const initialRight = getColumnWidth(rightCol);
    columnResizeStartRef.current = {
      mode: 'between',
      startX: clientX,
      leftCol,
      rightCol,
      initialLeft,
      initialRight,
      total: initialLeft + initialRight,
    };
    setActiveColSeparator(leftCol);
  };

  const handleColumnEdgeResizeStart = (col: number, clientX: number) => {
    columnResizeStartRef.current = {
      mode: 'edge',
      startX: clientX,
      col,
      initialWidth: getColumnWidth(col),
    };
    setActiveColSeparator(col);
  };

  React.useEffect(() => {
    if (activeColSeparator === null || !columnResizeStartRef.current) return;

    const startData = columnResizeStartRef.current;

    const handleMouseMove = (event: MouseEvent) => {
      const delta = event.clientX - startData.startX;
      if (startData.mode === 'between') {
        const proposedLeft = startData.initialLeft + delta;
        applyColumnWidths(startData.leftCol, startData.rightCol, proposedLeft, startData.total);
      } else {
        setSingleColumnWidth(startData.col, startData.initialWidth + delta);
      }
    };

    const handleMouseUp = () => {
      setActiveColSeparator(null);
      columnResizeStartRef.current = null;
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [activeColSeparator, applyColumnWidths, setSingleColumnWidth]);

  // Handler for corner resize (both row and column simultaneously)
  const handleCornerResizeStart = (aboveRow: number, belowRow: number, leftCol: number, rightCol: number, clientX: number, clientY: number) => {
    const initialAboveHeight = getRowHeight(aboveRow);
    const initialBelowHeight = getRowHeight(belowRow);
    const initialLeftWidth = getColumnWidth(leftCol);
    const initialRightWidth = getColumnWidth(rightCol);

    cornerResizeStartRef.current = {
      startX: clientX,
      startY: clientY,
      aboveRow,
      belowRow,
      leftCol,
      rightCol,
      initialAboveHeight,
      initialBelowHeight,
      initialLeftWidth,
      initialRightWidth,
      totalHeight: initialAboveHeight + initialBelowHeight,
      totalWidth: initialLeftWidth + initialRightWidth,
    };

    setActiveCorner({ row: aboveRow, col: leftCol });
  };

  // Handler for edge corner resize (one edge, one between)
  const handleCornerEdgeResizeStart = (
    edgeType: 'row' | 'col',
    rowOrRowAbove: number,
    colOrColLeft: number,
    rowBelowOrColRight: number,
    clientX: number,
    clientY: number
  ) => {
    if (edgeType === 'row') {
      // Row is between two rows, column is at edge
      const aboveRow = rowOrRowAbove;
      const belowRow = rowBelowOrColRight;
      const col = colOrColLeft;

      cornerResizeStartRef.current = {
        startX: clientX,
        startY: clientY,
        aboveRow,
        belowRow,
        leftCol: col,
        rightCol: col, // Same col for edge
        initialAboveHeight: getRowHeight(aboveRow),
        initialBelowHeight: getRowHeight(belowRow),
        initialLeftWidth: getColumnWidth(col),
        initialRightWidth: 0, // No right col
        totalHeight: getRowHeight(aboveRow) + getRowHeight(belowRow),
        totalWidth: 0, // Not used for edge
      };
      setActiveCorner({ row: aboveRow, col });
    } else {
      // Column is between two cols, row is at edge
      const row = rowOrRowAbove;
      const leftCol = colOrColLeft;
      const rightCol = rowBelowOrColRight;

      cornerResizeStartRef.current = {
        startX: clientX,
        startY: clientY,
        aboveRow: row,
        belowRow: row, // Same row for edge
        leftCol,
        rightCol,
        initialAboveHeight: getRowHeight(row),
        initialBelowHeight: 0, // No below row
        initialLeftWidth: getColumnWidth(leftCol),
        initialRightWidth: getColumnWidth(rightCol),
        totalHeight: 0, // Not used for edge
        totalWidth: getColumnWidth(leftCol) + getColumnWidth(rightCol),
      };
      setActiveCorner({ row, col: leftCol });
    }
  };

  // Handler for terminal corner resize (both dimensions are edges)
  const handleCornerTerminalResizeStart = (row: number, col: number, clientX: number, clientY: number) => {
    cornerResizeStartRef.current = {
      startX: clientX,
      startY: clientY,
      aboveRow: row,
      belowRow: row, // Same for edge
      leftCol: col,
      rightCol: col, // Same for edge
      initialAboveHeight: getRowHeight(row),
      initialBelowHeight: 0,
      initialLeftWidth: getColumnWidth(col),
      initialRightWidth: 0,
      totalHeight: 0,
      totalWidth: 0,
    };
    setActiveCorner({ row, col });
  };

  // Update the corner resize effect to handle edge cases
  React.useEffect(() => {
    if (activeCorner === null || !cornerResizeStartRef.current) return;

    const startData = cornerResizeStartRef.current;

    const handleMouseMove = (event: MouseEvent) => {
      const deltaX = event.clientX - startData.startX;
      const deltaY = event.clientY - startData.startY;

      // Resize row (either between or edge)
      if (startData.totalHeight > 0) {
        // Between two rows
        const proposedAboveHeight = startData.initialAboveHeight + deltaY;
        applyRowHeights(startData.aboveRow, startData.belowRow, proposedAboveHeight, startData.totalHeight);
      } else {
        // Edge row
        setSingleRowHeight(startData.aboveRow, startData.initialAboveHeight + deltaY);
      }

      // Resize column (either between or edge)
      if (startData.totalWidth > 0) {
        // Between two columns
        const proposedLeftWidth = startData.initialLeftWidth + deltaX;
        applyColumnWidths(startData.leftCol, startData.rightCol, proposedLeftWidth, startData.totalWidth);
      } else {
        // Edge column
        setSingleColumnWidth(startData.leftCol, startData.initialLeftWidth + deltaX);
      }
    };

    const handleMouseUp = () => {
      setActiveCorner(null);
      cornerResizeStartRef.current = null;
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [activeCorner, applyRowHeights, applyColumnWidths, setSingleRowHeight, setSingleColumnWidth]);

  const handleRowKeyboardAdjust = (aboveRow: number, belowRow: number, delta: number) => {
    const currentAbove = getRowHeight(aboveRow);
    const currentBelow = getRowHeight(belowRow);
    const total = currentAbove + currentBelow;
    applyRowHeights(aboveRow, belowRow, currentAbove + delta, total);
  };

  const handleRowAutoFit = (aboveRow: number, belowRow: number) => {
    const currentAbove = getRowHeight(aboveRow);
    const currentBelow = getRowHeight(belowRow);
    const total = currentAbove + currentBelow;
    const half = total / 2;
    applyRowHeights(aboveRow, belowRow, half, total);
  };

  const handleRowEdgeKeyboardAdjust = (row: number, delta: number) => {
    const current = getRowHeight(row);
    setSingleRowHeight(row, current + delta);
  };

  const handleColumnKeyboardAdjust = (leftCol: number, rightCol: number, delta: number) => {
    const currentLeft = getColumnWidth(leftCol);
    const currentRight = getColumnWidth(rightCol);
    const total = currentLeft + currentRight;
    applyColumnWidths(leftCol, rightCol, currentLeft + delta, total);
  };

  const handleColumnAutoFit = (leftCol: number, rightCol: number) => {
    const currentLeft = getColumnWidth(leftCol);
    const currentRight = getColumnWidth(rightCol);
    const total = currentLeft + currentRight;
    const half = total / 2;
    applyColumnWidths(leftCol, rightCol, half, total);
  };

  const handleColumnEdgeKeyboardAdjust = (col: number, delta: number) => {
    const current = getColumnWidth(col);
    setSingleColumnWidth(col, current + delta);
  };

  const handleAddChart = (chartId: string, direction: 'top' | 'bottom' | 'left' | 'right') => {
    const chart = charts.find(c => c.id === chartId);
    if (!chart) return;

    let newRow = chart.row;
    let newCol = chart.col;

    // Check if target position is already occupied
    const isPositionOccupied = (row: number, col: number) => {
      return charts.some(c => c.row === row && c.col === col);
    };

    switch (direction) {
      case 'top':
        newRow = chart.row - 1;
        // Check if target position is occupied
        if (isPositionOccupied(newRow, chart.col)) {
          // First, try to find an empty spot in existing rows of this column
          const allRows = new Set(charts.map(c => c.row));
          const sortedRows = Array.from(allRows).sort((a, b) => a - b);
          let foundEmpty = false;
          for (const row of sortedRows) {
            if (row < chart.row && !isPositionOccupied(row, chart.col)) {
              newRow = row;
              foundEmpty = true;
              break;
            }
          }
          if (!foundEmpty) {
            // No empty row found, shift all charts up
            setCharts(prev => prev.map(c => 
              c.row < chart.row ? { ...c, row: c.row - 1 } : c
            ));
            newRow = chart.row - 1;
          }
        }
        break;
      case 'bottom':
        newRow = chart.row + 1;
        // Check if target position is occupied
        if (isPositionOccupied(newRow, chart.col)) {
          // First, try to find an empty spot in existing rows of this column
          const allRows = new Set(charts.map(c => c.row));
          const sortedRows = Array.from(allRows).sort((a, b) => a - b);
          let foundEmpty = false;
          for (const row of sortedRows) {
            if (row > chart.row && !isPositionOccupied(row, chart.col)) {
              newRow = row;
              foundEmpty = true;
              break;
            }
          }
          if (!foundEmpty) {
            // Find the next empty row (may be beyond existing rows)
            let emptyRow = newRow;
            while (isPositionOccupied(emptyRow, chart.col)) {
              emptyRow++;
            }
            newRow = emptyRow;
          }
        }
        break;
      case 'left':
        newCol = chart.col - 1;
        // Check if target position is occupied
        if (isPositionOccupied(chart.row, newCol)) {
          // First, try to find an empty spot in existing columns of this row
          const allCols = new Set(charts.map(c => c.col));
          const sortedCols = Array.from(allCols).sort((a, b) => a - b);
          let foundEmpty = false;
          for (const col of sortedCols) {
            if (col < chart.col && !isPositionOccupied(chart.row, col)) {
              newCol = col;
              foundEmpty = true;
              break;
            }
          }
          if (!foundEmpty) {
            // No empty column found, shift all charts left
            setCharts(prev => prev.map(c => 
              c.col < chart.col ? { ...c, col: c.col - 1 } : c
            ));
            newCol = chart.col - 1;
          }
        }
        break;
      case 'right':
        newCol = chart.col + 1;
        // Check if target position is occupied
        if (isPositionOccupied(chart.row, newCol)) {
          // First, try to find an empty spot in existing columns of this row
          const allCols = new Set(charts.map(c => c.col));
          const sortedCols = Array.from(allCols).sort((a, b) => a - b);
          let foundEmpty = false;
          for (const col of sortedCols) {
            if (col > chart.col && !isPositionOccupied(chart.row, col)) {
              newCol = col;
              foundEmpty = true;
              break;
            }
          }
          if (!foundEmpty) {
            // Find the next empty column (may be beyond existing columns)
            let emptyCol = newCol;
            while (isPositionOccupied(chart.row, emptyCol)) {
              emptyCol++;
            }
            newCol = emptyCol;
          }
        }
        break;
    }

    const newChartId = `chart-${nextChartId}`;
    const newChart: ChartData = {
      id: newChartId,
      selectedPoints: new Map(),
      row: newRow,
      col: newCol
    };

    // Initialize column width and row height if they don't exist
    if (!columnWidths.has(newCol)) {
      setColumnWidths(prev => new Map(prev).set(newCol, DEFAULT_COLUMN_WIDTH));
    }
    if (!rowHeights.has(newRow)) {
      setRowHeights(prev => new Map(prev).set(newRow, DEFAULT_ROW_HEIGHT));
    }

    setCharts(prev => [...prev, newChart]);
    setNextChartId(prev => prev + 1);
    // Make the newly added chart active
    setActiveChartId(newChartId);
    triggerAddAnimation(newChartId);
  };

  const handleAddChartBelowRow = (row: number, col?: number) => {
    const chartsInRow = charts.filter(c => c.row === row);
    if (chartsInRow.length === 0) {
      return;
    }
    let target: ChartData | undefined;
    if (typeof col === 'number') {
      target = chartsInRow.find(c => c.col === col);
    }
    if (!target) {
      target = chartsInRow.find(c => c.id === activeChartId) ?? chartsInRow[0];
    }
    handleAddChart(target.id, 'bottom');
  };

  const handleAddChartRightOfColumn = (col: number, row?: number) => {
    const chartsInColumn = charts.filter(c => c.col === col);
    if (chartsInColumn.length === 0) {
      return;
    }
    let target: ChartData | undefined;
    if (typeof row === 'number') {
      target = chartsInColumn.find(c => c.row === row);
    }
    if (!target) {
      target = chartsInColumn.find(c => c.id === activeChartId) ?? chartsInColumn[0];
    }
    handleAddChart(target.id, 'right');
  };

  const handleDeleteChart = (chartId: string) => {
    setCharts(prev => {
      const filtered = prev.filter(c => c.id !== chartId);
      
      // If this was the last chart, create a new blank one
      if (filtered.length === 0) {
        setActiveChartId('chart-0');
        setColumnWidths(new Map([[0, DEFAULT_COLUMN_WIDTH]]));
        setRowHeights(new Map([[0, DEFAULT_ROW_HEIGHT]]));
        return [{ id: 'chart-0', selectedPoints: new Map(), row: 0, col: 0 }];
      }
      
      // If we deleted the active chart, switch to the first remaining chart
      if (chartId === activeChartId) {
        setActiveChartId(filtered[0].id);
      }
      
      // Compact the grid: renormalize positions to remove gaps
      const rows = new Set(filtered.map(c => c.row));
      const cols = new Set(filtered.map(c => c.col));
      const sortedRows = Array.from(rows).sort((a, b) => a - b);
      const sortedCols = Array.from(cols).sort((a, b) => a - b);
      
      // Create mapping from old positions to new compacted positions
      const rowMap = new Map(sortedRows.map((row, idx) => [row, idx]));
      const colMap = new Map(sortedCols.map((col, idx) => [col, idx]));
      
      // Apply compaction
      return filtered.map(c => ({
        ...c,
        row: rowMap.get(c.row) ?? c.row,
        col: colMap.get(c.col) ?? c.col
      }));
    });
  };

  const handleUpdateInverters = (chartId: string, pointKey: string, inverters: Set<string>) => {
    setCharts(prev => prev.map(c => 
      c.id === chartId 
        ? { ...c, selectedPoints: new Map(c.selectedPoints).set(pointKey, inverters) }
        : c
    ));
    onUpdateInverters(chartId, pointKey, inverters);
  };



  const handleRemoveInverter = (chartId: string, pointKey: string, inverterSN: string) => {
    setCharts(prev => prev.map(c => {
      if (c.id === chartId) {
        const newSelected = new Map(c.selectedPoints);
        const inverters = newSelected.get(pointKey);
        if (inverters) {
          const newInverters = new Set(inverters);
          newInverters.delete(inverterSN);
          if (newInverters.size === 0) {
            newSelected.delete(pointKey);
          } else {
            newSelected.set(pointKey, newInverters);
          }
          return { ...c, selectedPoints: newSelected };
        }
      }
      return c;
    }));
    onRemoveInverter(chartId, pointKey, inverterSN);
  };

  // Drag-and-drop handlers for moving data points between charts
  const handleDragStart = (chartId: string, pointKey: string, inverters: Set<string>) => {
    setDraggedData({
      type: 'legend', // Can be 'legend' or 'categorical'
      pointKey,
      sourceChartId: chartId,
      inverters
    });
  };

  const handleDragEnd = () => {
    setDraggedData(null);
    setDropTargetChartId(null);
  };

  const handleDragOver = (e: React.DragEvent, chartId: string) => {
    if (!draggedData) return;

    e.preventDefault();
    e.stopPropagation();
    setDropTargetChartId(chartId);
  };

  const handleDragLeave = (e: React.DragEvent, chartId: string) => {
    // Only clear if leaving the chart entirely
    const relatedTarget = e.relatedTarget as HTMLElement;
    const chartElement = chartRefsMap.current.get(chartId);
    if (chartElement && !chartElement.contains(relatedTarget)) {
      setDropTargetChartId(null);
    }
  };

  const handleDrop = (e: React.DragEvent, targetChartId: string) => {
    e.preventDefault();
    e.stopPropagation();

    if (!draggedData) return;

    const { pointKey, sourceChartId, inverters } = draggedData;

    // Don't do anything if dropping on the same chart
    if (sourceChartId === targetChartId) {
      handleDragEnd();
      return;
    }

    // Move the data point from source to target chart
    setCharts(prev => prev.map(c => {
      if (c.id === sourceChartId) {
        // Remove from source chart
        const newSelected = new Map(c.selectedPoints);
        newSelected.delete(pointKey);
        return { ...c, selectedPoints: newSelected };
      } else if (c.id === targetChartId) {
        // Add to target chart
        const newSelected = new Map(c.selectedPoints);
        newSelected.set(pointKey, new Set(inverters));
        return { ...c, selectedPoints: newSelected };
      }
      return c;
    }));

    handleDragEnd();
  };

  // Calculate grid dimensions
  const minRow = Math.min(...charts.map(c => c.row), 0);
  const minCol = Math.min(...charts.map(c => c.col), 0);

  // Normalize to start at 0,0
  const normalizedCharts = charts.map(c => ({
    ...c,
    row: c.row - minRow,
    col: c.col - minCol
  }));

  const chartPositionMap = React.useMemo(() => {
    const map = new Map<string, ChartData>();
    charts.forEach(chart => {
      map.set(`${chart.row}:${chart.col}`, chart);
    });
    return map;
  }, [charts]);

  // Get all unique normalized rows and columns
  const uniqueRows = Array.from(new Set(normalizedCharts.map(c => c.row))).sort((a, b) => a - b);
  const uniqueCols = Array.from(new Set(normalizedCharts.map(c => c.col))).sort((a, b) => a - b);

  const rowIndexMap = new Map<number, number>();
  const rowTracks: string[] = [];
  uniqueRows.forEach((normalizedRow, index) => {
    rowIndexMap.set(normalizedRow, index);
    const originalRow = normalizedRow + minRow;
    rowTracks.push(`${getRowHeight(originalRow)}px`);
    if (index < uniqueRows.length - 1) {
      rowTracks.push(`${ROW_DIVIDER_TRACK}px`);
    }
  });
  if (uniqueRows.length > 0) {
    rowTracks.push(`${ROW_DIVIDER_TRACK}px`);
  }
  const gridTemplateRows = rowTracks.length > 0 ? rowTracks.join(' ') : '1fr';

  const colIndexMap = new Map<number, number>();
  const colTracks: string[] = [];
  uniqueCols.forEach((normalizedCol, index) => {
    colIndexMap.set(normalizedCol, index);
    const originalCol = normalizedCol + minCol;
    colTracks.push(`${getColumnWidth(originalCol)}px`);
    if (index < uniqueCols.length - 1) {
      colTracks.push(`${COLUMN_DIVIDER_TRACK}px`);
    }
  });
  if (uniqueCols.length > 0) {
    colTracks.push(`${COLUMN_DIVIDER_TRACK}px`);
  }
  const gridTemplateCols = colTracks.length > 0 ? colTracks.join(' ') : '1fr';

  return (
    <div className="w-full h-full overflow-auto">
      <div
        className="grid p-4"
        style={{
          gridTemplateRows,
          gridTemplateColumns: gridTemplateCols,
          rowGap: 0,
          columnGap: 0,
        }}
      >
        {normalizedCharts.map(chart => {
          const isDropTarget = dropTargetChartId === chart.id;
          const isEmpty = chart.selectedPoints.size === 0;

          return (
          <div
            key={chart.id}
            ref={(el) => {
              if (el) {
                chartRefsMap.current.set(chart.id, el);
              } else {
                chartRefsMap.current.delete(chart.id);
              }
            }}
            className={`relative border rounded-lg bg-white shadow-sm overflow-visible transition-all cursor-pointer ${
              activeChartId === chart.id ? 'border-blue-500 border-2 ring-2 ring-blue-200' : 'border-gray-300'
            } ${justAddedChartId === chart.id ? 'animate-chart-expand' : ''} ${
              isDropTarget ? 'ring-4 ring-green-300 border-green-500' : ''
            } ${isEmpty && draggedData ? 'bg-green-50' : ''}`}
            style={{
              gridRow: (rowIndexMap.get(chart.row) ?? 0) * 2 + 1,
              gridColumn: (colIndexMap.get(chart.col) ?? 0) * 2 + 1
            }}
            data-chart-id={chart.id}
            onClick={(e) => {
              // Don't activate if clicking on buttons
              if ((e.target as HTMLElement).closest('button')) {
                return;
              }
              setActiveChartId(chart.id);
            }}
            onDragOver={(e) => handleDragOver(e, chart.id)}
            onDragLeave={(e) => handleDragLeave(e, chart.id)}
            onDrop={(e) => handleDrop(e, chart.id)}
          >
            <div className="chart-content h-full flex flex-col">
              <FakeChart
                selectedPoints={chart.selectedPoints}
                protocols={protocols}
                onUpdateInverters={(pointKey, inverters) => handleUpdateInverters(chart.id, pointKey, inverters)}
                onScrollToPoint={onScrollToPoint}
                onRemoveInverter={(pointKey, inverterSN) => handleRemoveInverter(chart.id, pointKey, inverterSN)}
                onSelectPointsToggle={onSelectPointsToggle}
                selectPointsOpen={selectPointsOpen}
                onDeleteChart={() => handleDeleteChart(chart.id)}
                onShowTutorial={() => setShowTutorialModal(true)}
                crosshairX={crosshairX}
                onCrosshairChange={setCrosshairX}
                onDragStart={(pointKey, inverters) => handleDragStart(chart.id, pointKey, inverters)}
                onDragEnd={handleDragEnd}
                isDragActive={draggedData !== null}
                isDropTarget={isDropTarget}
              />
            </div>
          </div>
          );
        })}
        {uniqueCols.slice(0, -1).map((normalizedCol, index) => {
          const leftOriginal = normalizedCol + minCol;
          const nextCol = uniqueCols[index + 1];
          const rightOriginal = nextCol + minCol;
          const leftWidth = getColumnWidth(leftOriginal);
          const rightWidth = getColumnWidth(rightOriginal);
          const totalWidth = leftWidth + rightWidth || 1;
          const columnButtonSegments: DividerButtonSegment[] = uniqueRows.reduce<DividerButtonSegment[]>((acc, normalizedRow) => {
            const originalRow = normalizedRow + minRow;
            if (chartPositionMap.has(`${originalRow}:${leftOriginal}`)) {
              acc.push({
                key: `col-btn-${originalRow}-${leftOriginal}`,
                onAdd: () => handleAddChartRightOfColumn(leftOriginal, originalRow),
                size: getRowHeight(originalRow),
              });
            }
            return acc;
          }, []);
          return (
            <div
              key={`col-divider-${leftOriginal}`}
              style={{
                gridRow: '1 / -1',
                gridColumn: index * 2 + 2,
                alignSelf: 'stretch',
                justifySelf: 'center'
              }}
            >
              <ColumnDivider
                onAdd={() => handleAddChartRightOfColumn(leftOriginal)}
                onResizeStart={(clientX) => handleColumnResizeStart(leftOriginal, rightOriginal, clientX)}
                onKeyboardNudge={(delta) => handleColumnKeyboardAdjust(leftOriginal, rightOriginal, delta)}
                onAutoFit={() => handleColumnAutoFit(leftOriginal, rightOriginal)}
                percentLeft={(leftWidth / totalWidth) * 100}
                isActive={activeColSeparator === leftOriginal}
                buttonSegments={columnButtonSegments}
              />
            </div>
          );
        })}
        {uniqueCols.length > 0 && (
          (() => {
            const lastNormalizedCol = uniqueCols[uniqueCols.length - 1];
            const lastOriginalCol = lastNormalizedCol + minCol;
            const terminalColumnButtonSegments: DividerButtonSegment[] = uniqueRows.reduce<DividerButtonSegment[]>((acc, normalizedRow) => {
              const originalRow = normalizedRow + minRow;
              if (chartPositionMap.has(`${originalRow}:${lastOriginalCol}`)) {
                acc.push({
                  key: `terminal-col-btn-${originalRow}-${lastOriginalCol}`,
                  onAdd: () => handleAddChartRightOfColumn(lastOriginalCol, originalRow),
                  size: getRowHeight(originalRow),
                });
              }
              return acc;
            }, []);

            return (
              <div
                key={`col-divider-${lastOriginalCol}-terminal`}
                style={{
                  gridRow: '1 / -1',
                  gridColumn: uniqueCols.length * 2,
                  alignSelf: 'stretch',
                  justifySelf: 'center'
                }}
              >
                <ColumnDivider
                  onAdd={() => handleAddChartRightOfColumn(lastOriginalCol)}
                  onEdgeResizeStart={(clientX) => handleColumnEdgeResizeStart(lastOriginalCol, clientX)}
                  onEdgeKeyboardNudge={(delta) => handleColumnEdgeKeyboardAdjust(lastOriginalCol, delta)}
                  isActive={activeColSeparator === lastOriginalCol}
                  buttonSegments={terminalColumnButtonSegments}
                />
              </div>
            );
          })()
        )}
        {uniqueRows.slice(0, -1).map((normalizedRow, index) => {
          const nextRow = uniqueRows[index + 1];
          const aboveOriginal = normalizedRow + minRow;
          const belowOriginal = nextRow + minRow;
          const aboveHeight = getRowHeight(aboveOriginal);
          const belowHeight = getRowHeight(belowOriginal);
          const total = aboveHeight + belowHeight || 1;
          const rowButtonSegments: DividerButtonSegment[] = uniqueCols.reduce<DividerButtonSegment[]>((acc, normalizedCol) => {
            const originalCol = normalizedCol + minCol;
            if (chartPositionMap.has(`${aboveOriginal}:${originalCol}`)) {
              acc.push({
                key: `row-btn-${aboveOriginal}-${originalCol}`,
                onAdd: () => handleAddChartBelowRow(aboveOriginal, originalCol),
                size: getColumnWidth(originalCol),
              });
            }
            return acc;
          }, []);
          return (
            <div
              key={`divider-${aboveOriginal}`}
              style={{
                gridColumn: '1 / -1',
                gridRow: index * 2 + 2,
                alignSelf: 'center',
                justifySelf: 'stretch'
              }}
            >
              <RowDivider
                onAdd={() => handleAddChartBelowRow(aboveOriginal)}
                onResizeStart={(clientY) => handleRowResizeStart(aboveOriginal, belowOriginal, clientY)}
                onKeyboardNudge={(delta) => handleRowKeyboardAdjust(aboveOriginal, belowOriginal, delta)}
                onAutoFit={() => handleRowAutoFit(aboveOriginal, belowOriginal)}
                percentAbove={(aboveHeight / total) * 100}
                isActive={activeRowSeparator === aboveOriginal}
                buttonSegments={rowButtonSegments}
              />
            </div>
          );
        })}
        {uniqueRows.length > 0 && (
          (() => {
            const lastNormalizedRow = uniqueRows[uniqueRows.length - 1];
            const lastOriginalRow = lastNormalizedRow + minRow;
            const terminalRowButtonSegments: DividerButtonSegment[] = uniqueCols.reduce<DividerButtonSegment[]>((acc, normalizedCol) => {
              const originalCol = normalizedCol + minCol;
              if (chartPositionMap.has(`${lastOriginalRow}:${originalCol}`)) {
                acc.push({
                  key: `terminal-row-btn-${lastOriginalRow}-${originalCol}`,
                  onAdd: () => handleAddChartBelowRow(lastOriginalRow, originalCol),
                  size: getColumnWidth(originalCol),
                });
              }
              return acc;
            }, []);

            return (
              <div
                key={`divider-${lastOriginalRow}-terminal`}
                style={{
                  gridColumn: '1 / -1',
                  gridRow: uniqueRows.length * 2,
                  alignSelf: 'center',
                  justifySelf: 'stretch'
                }}
              >
                <RowDivider
                  onAdd={() => handleAddChartBelowRow(lastOriginalRow)}
                  onEdgeResizeStart={(clientY) => handleRowEdgeResizeStart(lastOriginalRow, clientY)}
                  onEdgeKeyboardNudge={(delta) => handleRowEdgeKeyboardAdjust(lastOriginalRow, delta)}
                  isActive={activeRowSeparator === lastOriginalRow}
                  buttonSegments={terminalRowButtonSegments}
                />
              </div>
            );
          })()
        )}
        {/* Corner handles for diagonal resizing - Internal corners */}
        {uniqueRows.slice(0, -1).flatMap((normalizedRow, rowIndex) => {
          const aboveOriginal = normalizedRow + minRow;
          const nextRow = uniqueRows[rowIndex + 1];
          const belowOriginal = nextRow + minRow;

          return uniqueCols.slice(0, -1).map((normalizedCol, colIndex) => {
            const leftOriginal = normalizedCol + minCol;
            const nextCol = uniqueCols[colIndex + 1];
            const rightOriginal = nextCol + minCol;

            return (
              <div
                key={`corner-${aboveOriginal}-${leftOriginal}`}
                style={{
                  gridRow: rowIndex * 2 + 2,
                  gridColumn: colIndex * 2 + 2,
                  width: '16px',
                  height: '16px',
                  zIndex: 10,
                  pointerEvents: 'auto',
                }}
              >
                <CornerHandle
                  onResizeStart={(clientX, clientY) =>
                    handleCornerResizeStart(aboveOriginal, belowOriginal, leftOriginal, rightOriginal, clientX, clientY)
                  }
                  isActive={activeCorner?.row === aboveOriginal && activeCorner?.col === leftOriginal}
                />
              </div>
            );
          });
        })}
        {/* Corner handles for edge positions - Bottom-right corners of each row */}
        {uniqueRows.slice(0, -1).map((normalizedRow, rowIndex) => {
          const aboveOriginal = normalizedRow + minRow;
          const nextRow = uniqueRows[rowIndex + 1];
          const belowOriginal = nextRow + minRow;

          if (uniqueCols.length > 0) {
            const lastNormalizedCol = uniqueCols[uniqueCols.length - 1];
            const lastOriginalCol = lastNormalizedCol + minCol;

            return (
              <div
                key={`corner-edge-row-${aboveOriginal}-${lastOriginalCol}`}
                style={{
                  gridRow: rowIndex * 2 + 2,
                  gridColumn: uniqueCols.length * 2,
                  width: '16px',
                  height: '16px',
                  zIndex: 10,
                  pointerEvents: 'auto',
                }}
              >
                <CornerHandle
                  onResizeStart={(clientX, clientY) =>
                    handleCornerEdgeResizeStart('row', aboveOriginal, belowOriginal, lastOriginalCol, clientX, clientY)
                  }
                  isActive={activeCorner?.row === aboveOriginal && activeCorner?.col === lastOriginalCol}
                />
              </div>
            );
          }
          return null;
        })}
        {/* Corner handles for edge positions - Right-bottom corners of each column */}
        {uniqueCols.slice(0, -1).map((normalizedCol, colIndex) => {
          const leftOriginal = normalizedCol + minCol;
          const nextCol = uniqueCols[colIndex + 1];
          const rightOriginal = nextCol + minCol;

          if (uniqueRows.length > 0) {
            const lastNormalizedRow = uniqueRows[uniqueRows.length - 1];
            const lastOriginalRow = lastNormalizedRow + minRow;

            return (
              <div
                key={`corner-edge-col-${lastOriginalRow}-${leftOriginal}`}
                style={{
                  gridRow: uniqueRows.length * 2,
                  gridColumn: colIndex * 2 + 2,
                  width: '16px',
                  height: '16px',
                  zIndex: 10,
                  pointerEvents: 'auto',
                }}
              >
                <CornerHandle
                  onResizeStart={(clientX, clientY) =>
                    handleCornerEdgeResizeStart('col', lastOriginalRow, leftOriginal, rightOriginal, clientX, clientY)
                  }
                  isActive={activeCorner?.row === lastOriginalRow && activeCorner?.col === leftOriginal}
                />
              </div>
            );
          }
          return null;
        })}
        {/* Corner handle for the very bottom-right (terminal) corner */}
        {uniqueRows.length > 0 && uniqueCols.length > 0 && (
          (() => {
            const lastNormalizedRow = uniqueRows[uniqueRows.length - 1];
            const lastOriginalRow = lastNormalizedRow + minRow;
            const lastNormalizedCol = uniqueCols[uniqueCols.length - 1];
            const lastOriginalCol = lastNormalizedCol + minCol;

            return (
              <div
                key={`corner-terminal-${lastOriginalRow}-${lastOriginalCol}`}
                style={{
                  gridRow: uniqueRows.length * 2,
                  gridColumn: uniqueCols.length * 2,
                  width: '16px',
                  height: '16px',
                  zIndex: 10,
                  pointerEvents: 'auto',
                }}
              >
                <CornerHandle
                  onResizeStart={(clientX, clientY) =>
                    handleCornerTerminalResizeStart(lastOriginalRow, lastOriginalCol, clientX, clientY)
                  }
                  isActive={activeCorner?.row === lastOriginalRow && activeCorner?.col === lastOriginalCol}
                />
              </div>
            );
          })()
        )}
      </div>
      <ChartTutorialModal
        isOpen={showTutorialModal}
        onClose={() => setShowTutorialModal(false)}
      />
    </div>
  );
}
