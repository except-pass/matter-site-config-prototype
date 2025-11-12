import { ZERO_TIME } from '../../utils/timeFormatting';

export function TimeInputField({
  label,
  value,
  readOnly,
  onChange,
  onClear,
}: {
  label: string;
  value: string;
  readOnly: boolean;
  onChange: (value: string) => void;
  onClear: () => void;
}) {
  const showClear = !readOnly && value !== ZERO_TIME;

  return (
    <div className="w-[150px] flex-shrink-0 flex flex-col gap-1">
      <label className="text-slate-600 text-xs font-medium">{label}</label>
      <div className="relative">
        <input
          type="time"
          className="w-full rounded border border-slate-300 bg-white px-3 pr-8 py-2 text-sm text-slate-800 disabled:bg-slate-100"
          disabled={readOnly}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {showClear && (
          <button
            type="button"
            className="absolute inset-y-0 right-1 flex items-center px-1 text-slate-400 hover:text-slate-700"
            onClick={onClear}
            aria-label={`Clear ${label.toLowerCase()}`}
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
