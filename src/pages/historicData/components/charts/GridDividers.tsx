import React from "react";

export const ROW_DIVIDER_TRACK = 16;
export const COLUMN_DIVIDER_TRACK = 16;
export const ROW_KEYBOARD_STEP = 12;
export const COLUMN_KEYBOARD_STEP = 12;

export interface DividerButtonSegment {
  key: string;
  onAdd: () => void;
  size?: number;
}

interface DividerAddButtonProps {
  onAdd: () => void;
  ariaLabel: string;
}

export const DividerAddButton: React.FC<DividerAddButtonProps> = ({ onAdd, ariaLabel }) => (
  <button
    type="button"
    onClick={(event) => {
      event.stopPropagation();
      onAdd();
    }}
    className="relative z-10 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-base font-semibold text-gray-600 opacity-70 shadow-sm transition-all duration-150 ease-out hover:bg-white group-hover:scale-105 group-hover:opacity-100 group-focus-within:opacity-100 focus:scale-105 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
    aria-label={ariaLabel}
  >
    <span className="leading-none">+</span>
  </button>
);

interface RowDividerProps {
  onAdd: () => void;
  onResizeStart?: (clientY: number) => void;
  onEdgeResizeStart?: (clientY: number) => void;
  onKeyboardNudge?: (delta: number) => void;
  onEdgeKeyboardNudge?: (delta: number) => void;
  onAutoFit?: () => void;
  percentAbove?: number;
  isActive?: boolean;
  buttonSegments?: DividerButtonSegment[];
}

export const RowDivider: React.FC<RowDividerProps> = ({
  onAdd,
  onResizeStart,
  onKeyboardNudge,
  onEdgeResizeStart,
  onEdgeKeyboardNudge,
  onAutoFit,
  percentAbove,
  isActive = false,
  buttonSegments,
}) => {
  const isBetweenResizable =
    typeof onResizeStart === 'function' &&
    typeof onKeyboardNudge === 'function' &&
    typeof onAutoFit === 'function' &&
    typeof percentAbove === 'number';
  const isEdgeResizable = typeof onEdgeResizeStart === 'function';
  const isResizable = isBetweenResizable || isEdgeResizable;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onAdd();
    } else if (event.key === 'ArrowUp' && isBetweenResizable && onKeyboardNudge) {
      event.preventDefault();
      onKeyboardNudge(ROW_KEYBOARD_STEP);
    } else if (event.key === 'ArrowDown' && isBetweenResizable && onKeyboardNudge) {
      event.preventDefault();
      onKeyboardNudge(-ROW_KEYBOARD_STEP);
    } else if (event.key === 'ArrowUp' && isEdgeResizable && onEdgeKeyboardNudge) {
      event.preventDefault();
      onEdgeKeyboardNudge(ROW_KEYBOARD_STEP);
    } else if (event.key === 'ArrowDown' && isEdgeResizable && onEdgeKeyboardNudge) {
      event.preventDefault();
      onEdgeKeyboardNudge(-ROW_KEYBOARD_STEP);
    }
  };

  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      {...(isBetweenResizable
        ? {
            'aria-valuenow': Math.round(percentAbove!),
            'aria-valuemin': 0,
            'aria-valuemax': 100,
            'aria-label': 'Resize charts',
          }
        : isEdgeResizable
          ? {
              'aria-label': 'Resize row height',
              'aria-valuetext': `${Math.round(percentAbove ?? 100)}%`,
            }
          : {
              'aria-label': 'Add chart below',
              'aria-disabled': true,
            })}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onClick={(event) => {
        if (isResizable || (event.target as HTMLElement).closest('button')) {
          return;
        }
        event.preventDefault();
        onAdd();
      }}
      onDoubleClick={(event) => {
        if ((event.target as HTMLElement).closest('button')) {
          return;
        }
        event.preventDefault();
        if (isBetweenResizable && onAutoFit) {
          onAutoFit();
        } else {
          onAdd();
        }
      }}
      onMouseDown={(event) => {
        if ((event.target as HTMLElement).closest('button')) {
          return;
        }
        if (event.button !== 0) {
          return;
        }
        event.preventDefault();
        if (isBetweenResizable && onResizeStart) {
          onResizeStart(event.clientY);
        } else if (isEdgeResizable && onEdgeResizeStart) {
          onEdgeResizeStart(event.clientY);
        }
      }}
      className={`group relative flex items-center justify-center ${
        isResizable ? 'cursor-row-resize' : 'cursor-pointer'
      } select-none outline-none transition-shadow duration-150 focus-visible:ring-2 focus-visible:ring-blue-300/60 ${
        isActive ? 'ring-2 ring-blue-300/60' : ''
      }`}
      style={{
        height: ROW_DIVIDER_TRACK,
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem',
      }}
    >
      <div className="pointer-events-none absolute inset-0 flex items-center px-4">
        <div
          className={`flex-1 h-1 rounded-full transition-colors duration-150 ${
            isActive ? 'bg-[#CBD1DB]' : 'bg-[#E4E6EA]'
          } group-hover:bg-[#CBD1DB] group-focus-within:bg-[#CBD1DB]`}
        />
      </div>
      <div
        className={`${
          buttonSegments && buttonSegments.length > 0 ? 'grid w-full' : 'flex w-full'
        } items-center justify-center`}
        style={
          buttonSegments && buttonSegments.length > 0
            ? {
                gridTemplateColumns: buttonSegments
                  .map((segment) => (segment.size ? `${segment.size}px` : '1fr'))
                  .join(' '),
              }
            : undefined
        }
      >
        {buttonSegments && buttonSegments.length > 0 ? (
          buttonSegments.map((segment) => (
            <div key={segment.key} className="flex justify-center py-0.5">
              <DividerAddButton onAdd={segment.onAdd} ariaLabel="Add chart below" />
            </div>
          ))
        ) : (
          <DividerAddButton onAdd={onAdd} ariaLabel="Add chart below" />
        )}
      </div>
    </div>
  );
};

interface ColumnDividerProps {
  onAdd: () => void;
  onResizeStart?: (clientX: number) => void;
  onEdgeResizeStart?: (clientX: number) => void;
  onKeyboardNudge?: (delta: number) => void;
  onEdgeKeyboardNudge?: (delta: number) => void;
  onAutoFit?: () => void;
  percentLeft?: number;
  isActive?: boolean;
  buttonSegments?: DividerButtonSegment[];
}

// Corner handle for resizing both row and column simultaneously
interface CornerHandleProps {
  onResizeStart: (clientX: number, clientY: number) => void;
  isActive?: boolean;
}

export const CornerHandle: React.FC<CornerHandleProps> = ({ onResizeStart, isActive = false }) => {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      style={{ pointerEvents: 'auto' }}
    >
      <div
        className={`w-3 h-3 rounded-full cursor-nwse-resize transition-all ${
          isActive ? 'bg-blue-500 scale-125' : 'bg-gray-400 hover:bg-gray-500'
        }`}
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onResizeStart(e.clientX, e.clientY);
        }}
        title="Drag to resize both dimensions"
        role="separator"
        aria-label="Resize corner"
      />
    </div>
  );
};

export const ColumnDivider: React.FC<ColumnDividerProps> = ({
  onAdd,
  onResizeStart,
  onKeyboardNudge,
  onEdgeResizeStart,
  onEdgeKeyboardNudge,
  onAutoFit,
  percentLeft,
  isActive = false,
  buttonSegments,
}) => {
  const isBetweenResizable =
    typeof onResizeStart === 'function' &&
    typeof onKeyboardNudge === 'function' &&
    typeof onAutoFit === 'function' &&
    typeof percentLeft === 'number';
  const isEdgeResizable = typeof onEdgeResizeStart === 'function';
  const isResizable = isBetweenResizable || isEdgeResizable;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onAdd();
    } else if (event.key === 'ArrowRight' && isBetweenResizable && onKeyboardNudge) {
      event.preventDefault();
      onKeyboardNudge(COLUMN_KEYBOARD_STEP);
    } else if (event.key === 'ArrowLeft' && isBetweenResizable && onKeyboardNudge) {
      event.preventDefault();
      onKeyboardNudge(-COLUMN_KEYBOARD_STEP);
    } else if (event.key === 'ArrowRight' && isEdgeResizable && onEdgeKeyboardNudge) {
      event.preventDefault();
      onEdgeKeyboardNudge(COLUMN_KEYBOARD_STEP);
    } else if (event.key === 'ArrowLeft' && isEdgeResizable && onEdgeKeyboardNudge) {
      event.preventDefault();
      onEdgeKeyboardNudge(-COLUMN_KEYBOARD_STEP);
    }
  };

  return (
    <div
      role="separator"
      aria-orientation="vertical"
      {...(isBetweenResizable
        ? {
            'aria-valuenow': Math.round(percentLeft!),
            'aria-valuemin': 0,
            'aria-valuemax': 100,
            'aria-label': 'Resize charts horizontally',
          }
        : isEdgeResizable
          ? {
              'aria-label': 'Resize column width',
            }
          : {
              'aria-label': 'Add chart to the right',
              'aria-disabled': true,
            })}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onClick={(event) => {
        if (isResizable || (event.target as HTMLElement).closest('button')) {
          return;
        }
        event.preventDefault();
        onAdd();
      }}
      onDoubleClick={(event) => {
        if ((event.target as HTMLElement).closest('button')) {
          return;
        }
        event.preventDefault();
        if (isResizable && onAutoFit) {
          onAutoFit();
        } else {
          onAdd();
        }
      }}
      onMouseDown={(event) => {
        if ((event.target as HTMLElement).closest('button')) {
          return;
        }
        if (event.button !== 0) {
          return;
        }
        event.preventDefault();
        if (isBetweenResizable && onResizeStart) {
          onResizeStart(event.clientX);
        } else if (isEdgeResizable && onEdgeResizeStart) {
          onEdgeResizeStart(event.clientX);
        }
      }}
      className={`group relative flex h-full w-full ${
        isResizable ? 'cursor-col-resize' : 'cursor-pointer'
      } select-none flex-col items-center justify-center outline-none transition-shadow duration-150 focus-visible:ring-2 focus-visible:ring-blue-300/60 ${
        isActive ? 'ring-2 ring-blue-300/60' : ''
      }`}
      style={{
        width: COLUMN_DIVIDER_TRACK,
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
      }}
    >
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-center py-4">
        <div
          className={`mx-auto w-1 rounded-full transition-colors duration-150 ${
            isActive ? 'bg-[#CBD1DB]' : 'bg-[#E4E6EA]'
          } group-hover:bg-[#CBD1DB] group-focus-within:bg-[#CBD1DB]`}
          style={{ flex: 1 }}
        />
      </div>
      <div
        className={`${
          buttonSegments && buttonSegments.length > 0 ? 'grid h-full' : 'flex'
        } w-full flex-1 flex-col items-center justify-center`}
        style={
          buttonSegments && buttonSegments.length > 0
            ? {
                gridTemplateRows: buttonSegments
                  .map((segment) => (segment.size ? `${segment.size}px` : '1fr'))
                  .join(' '),
              }
            : undefined
        }
      >
        {buttonSegments && buttonSegments.length > 0 ? (
          buttonSegments.map((segment) => (
            <div key={segment.key} className="flex items-center justify-center px-0.5">
              <DividerAddButton onAdd={segment.onAdd} ariaLabel="Add chart to the right" />
            </div>
          ))
        ) : (
          <DividerAddButton onAdd={onAdd} ariaLabel="Add chart to the right" />
        )}
      </div>
    </div>
  );
};
