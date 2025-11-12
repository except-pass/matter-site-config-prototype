interface InfoIconProps {
  onClick?: () => void;
}

export const InfoIcon = ({ onClick }: InfoIconProps) => (
  <button
    type="button"
    onClick={onClick}
    className="text-xs text-slate-500 border border-slate-400 rounded-full w-4 h-4 flex items-center justify-center leading-none hover:bg-slate-100 hover:text-slate-700 hover:border-slate-500 transition-colors cursor-pointer"
  >
    i
  </button>
);

export const RefreshIcon = () => (
  <span className="text-base leading-none">⟳</span>
);

export const ClockIcon = () => (
  <span className="text-base leading-none">🕐</span>
);
