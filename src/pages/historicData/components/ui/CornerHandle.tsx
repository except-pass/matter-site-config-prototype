interface CornerHandleProps {
  onResizeStart: (clientX: number, clientY: number) => void;
  isActive?: boolean;
}

export default function CornerHandle({ onResizeStart, isActive = false }: CornerHandleProps) {
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
}
