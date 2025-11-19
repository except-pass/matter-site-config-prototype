import React from "react";
import DividerAddButton from "./DividerAddButton";
import type { DividerButtonSegment } from "./RowDivider";

const COLUMN_DIVIDER_TRACK = 16;
const COLUMN_KEYBOARD_STEP = 12;

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

export default function ColumnDivider({
  onAdd,
  onResizeStart,
  onKeyboardNudge,
  onEdgeResizeStart,
  onEdgeKeyboardNudge,
  onAutoFit,
  percentLeft,
  isActive = false,
  buttonSegments,
}: ColumnDividerProps) {
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
}
