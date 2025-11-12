import { EntryValue, PointDef } from '../../types/schema';

// -----------------------------------------------------------------------------
// Widget Components for special point types
// -----------------------------------------------------------------------------

// DateTime Widget - for date and time selection
export function DateTimeWidget({
  point,
  formState,
  readOnly,
  onChange,
}: {
  point: PointDef;
  formState: EntryValue;
  readOnly: boolean;
  onChange: (argName: string, value: any) => void;
}) {
  const secEntry = point.entries.find(e => e.arg === "Sec");

  // Convert to/from datetime-local input format
  const toDateTimeLocal = () => {
    // Read from separate entries
    const hour = formState.Hour ?? 0;
    const min = formState.Min ?? 0;

    const year = (formState.Year ?? 0) + 2000; // Convert 2-digit to 4-digit
    const month = String(formState.Mon ?? 1).padStart(2, '0');
    const day = String(formState.Day ?? 1).padStart(2, '0');
    const hourStr = String(hour).padStart(2, '0');
    const minStr = String(min).padStart(2, '0');
    return `${year}-${month}-${day}T${hourStr}:${minStr}`;
  };

  const fromDateTimeLocal = (value: string) => {
    const dt = new Date(value);
    const hour = dt.getHours();
    const min = dt.getMinutes();

    onChange("Year", dt.getFullYear() - 2000);
    onChange("Mon", dt.getMonth() + 1);
    onChange("Day", dt.getDate());

    // Write to separate entries
    onChange("Hour", hour);
    onChange("Min", min);
    if (secEntry) onChange("Sec", 0);
  };

  return (
    <div className="flex flex-col gap-2">
      <input
        type="datetime-local"
        className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 disabled:bg-slate-100"
        disabled={readOnly}
        value={toDateTimeLocal()}
        onChange={(e) => fromDateTimeLocal(e.target.value)}
      />
    </div>
  );
}
