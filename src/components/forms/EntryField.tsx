import { EntryDef, PointDef } from '../../types/schema';

// -----------------------------------------------------------------------------
// EntryField - renders a single input/checkbox/select based on entry.dtype
// -----------------------------------------------------------------------------
export function EntryField({
  entry,
  value,
  onChange,
  readOnly,
  point
}: {
  entry: EntryDef;
  value: any;
  onChange: (next: any) => void;
  readOnly: boolean;
  point?: PointDef;
}) {
  const commonClasses =
    "w-full rounded border border-slate-300 bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500";
  const containerClasses =
    entry.dtype === 'enum' || (entry.dtype && entry.dtype.startsWith('bitfield'))
      ? 'col-span-full flex flex-col gap-1 text-sm'
      : 'flex flex-col gap-1 text-sm';

  // Handle bitfield types
  if (entry.dtype && entry.dtype.startsWith('bitfield') && entry.meanings) {
    const bitStates = value || {};

    const handleBitToggle = (bitPos: string) => {
      const newStates = { ...bitStates, [bitPos]: !bitStates[bitPos] };
      onChange(newStates);
    };

    return (
      <div className={containerClasses}>
        <div className="text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between">
          <span>{entry.name ?? ''}</span>
          {entry.unit && (
            <span className="text-[10px] text-slate-400 uppercase">{entry.unit}</span>
          )}
        </div>
        <div className="flex flex-col gap-2 py-1">
          {Object.entries(entry.meanings).map(([bitPos, description]) => (
            <label
              key={bitPos}
              className={`flex items-center gap-2 cursor-pointer ${readOnly ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <input
                type="checkbox"
                className="w-4 h-4 text-emerald-600 border-slate-300 rounded focus:ring-emerald-500 disabled:cursor-not-allowed"
                disabled={readOnly}
                checked={bitStates[bitPos] || false}
                onChange={() => handleBitToggle(bitPos)}
              />
              <span className="text-sm text-slate-800">{description}</span>
            </label>
          ))}
        </div>
        {entry.description && (
          <div className="text-xs text-slate-500 leading-snug">{entry.description}</div>
        )}
        {entry.longdescription && (
          <div className="text-xs text-slate-400 leading-snug">{entry.longdescription}</div>
        )}
      </div>
    );
  }

  if (entry.dtype === 'enum' && entry.meanings) {
    const options = Object.entries(entry.meanings).map(([wireVal, semantic]) => {
      const friendly = entry.friendly_meanings?.[wireVal] ?? semantic;
      return { wireVal, friendly };
    });

    // Use radio buttons for 3 or fewer options
    if (options.length <= 3) {
      return (
        <div className={containerClasses}>
          <div className="text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between">
            <span>{entry.name}</span>
            {entry.unit && (
              <span className="text-[10px] text-slate-400 uppercase">{entry.unit}</span>
            )}
          </div>
          <div className="flex flex-col gap-2 py-1">
            {options.map((opt) => (
              <label
                key={opt.wireVal}
                className={`flex items-center gap-2 cursor-pointer ${readOnly ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <input
                  type="radio"
                  name={entry.arg}
                  className="w-4 h-4 text-emerald-600 border-slate-300 focus:ring-emerald-500 disabled:cursor-not-allowed"
                  disabled={readOnly}
                  checked={value === opt.friendly}
                  onChange={() => onChange(opt.friendly)}
                />
                <span className="text-sm text-slate-800">{opt.friendly}</span>
              </label>
            ))}
          </div>
          {entry.description && (
            <div className="text-xs text-slate-500 leading-snug">{entry.description}</div>
          )}
          {entry.longdescription && (
            <div className="text-xs text-slate-400 leading-snug">{entry.longdescription}</div>
          )}
        </div>
      );
    }

    // Use dropdown for 4+ options with dynamic width
    const longestOption = options.reduce((max, opt) =>
      opt.friendly.length > max.length ? opt.friendly : max,
      ''
    );
    // Calculate width based on content to ensure comfortable minimum width
    const estimatedWidth = Math.min(Math.max(longestOption.length * 8.5 + 50, 220), 480);

    return (
      <div className={containerClasses}>
        <div className="text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between">
          <span>{entry.name ?? ''}</span>
          {entry.unit && (
            <span className="text-[10px] text-slate-400 uppercase">{entry.unit}</span>
          )}
        </div>
        <select
          className="w-full rounded border border-slate-300 bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500"
          style={{ minWidth: `${estimatedWidth}px`, maxWidth: '100%' }}
          disabled={readOnly}
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((opt) => (
            <option key={opt.wireVal} value={opt.friendly}>
              {opt.friendly}
            </option>
          ))}
        </select>
        {entry.description && (
          <div className="text-xs text-slate-500 leading-snug">{entry.description}</div>
        )}
        {entry.longdescription && (
          <div className="text-xs text-slate-400 leading-snug">{entry.longdescription}</div>
        )}
      </div>
    );
  }

  const isNumber = entry.dtype === 'Number';
  const hasRange = isNumber && entry.range !== undefined;

  // For modbus points with scale_factor, convert between wire value (integer) and display value
  const isModbus = point?.protocol?.modbus !== undefined;
  const scaleFactor = point?.protocol?.modbus?.scale_factor;
  const needsScaleConversion = isModbus && scaleFactor !== undefined && isNumber;

  // Convert wire value to display value for display
  const displayValue = needsScaleConversion && value !== null && value !== undefined && value !== ''
    ? Number(value) * scaleFactor
    : value;

  // Convert display value back to wire value (integer) when editing
  const handleValueChange = (raw: string) => {
    if (isNumber) {
      const displayVal = raw === '' ? '' : Number(raw);
      if (needsScaleConversion && displayVal !== '') {
        // Convert display value to wire value: display / scale_factor, round to integer
        const wireValue = Math.round(displayVal / scaleFactor);
        onChange(wireValue);
      } else {
        onChange(displayVal);
      }
    } else {
      onChange(raw);
    }
  };

  return (
    <div className={containerClasses}>
      <div className="text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between">
        <span>{entry.name}</span>
        {entry.unit && (
          <span className="text-[10px] text-slate-400 uppercase">{entry.unit}</span>
        )}
      </div>
      <div className="flex items-center gap-2">
        <input
          type={isNumber ? 'number' : 'text'}
          className={hasRange ? "w-20 rounded border border-slate-300 bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500" : commonClasses}
          disabled={readOnly}
          value={displayValue ?? ''}
          min={entry.range?.min}
          max={entry.range?.max}
          onChange={(e) => handleValueChange(e.target.value)}
        />
        {hasRange && (
          <div className="flex-1 flex items-center gap-2">
            <span className="text-[10px] text-slate-400 font-mono">{entry.range!.min}</span>
            <input
              type="range"
              className="flex-1"
              disabled={readOnly}
              value={displayValue ?? entry.range!.min}
              min={entry.range?.min}
              max={entry.range?.max}
              onChange={(e) => {
                const val = Number(e.target.value);
                if (needsScaleConversion) {
                  const wireValue = Math.round(val / scaleFactor);
                  onChange(wireValue);
                } else {
                  onChange(val);
                }
              }}
            />
            <span className="text-[10px] text-slate-400 font-mono">{entry.range!.max}</span>
          </div>
        )}
      </div>
      {entry.description && (
        <div className="text-xs text-slate-500 leading-snug">{entry.description}</div>
      )}
      {entry.longdescription && (
        <div className="text-xs text-slate-400 leading-snug">{entry.longdescription}</div>
      )}
    </div>
  );
}
