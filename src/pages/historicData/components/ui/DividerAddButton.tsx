interface DividerAddButtonProps {
  onAdd: () => void;
  ariaLabel: string;
}

export default function DividerAddButton({ onAdd, ariaLabel }: DividerAddButtonProps) {
  return (
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
}
