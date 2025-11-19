import React from "react";
import DividerAddButton from "./DividerAddButton";

const ROW_DIVIDER_TRACK = 16;
const ROW_KEYBOARD_STEP = 12;

export interface DividerButtonSegment {
  key: string;
  onAdd: () => void;
  size?: number;
}

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

export default function RowDivider({
  onAdd,
  onResizeStart,
  onKeyboardNudge,
  onEdgeResizeStart,
  onEdgeKeyboardNudge,
  onAutoFit,
  percentAbove,
  isActive = false,
  buttonSegments,
}: RowDividerProps) {
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
}
