import { EntryValue } from '../../types/schema';

// GeneratorExercise Widget - for scheduling recurring generator exercise
export function GeneratorExerciseWidget({
  formState,
  readOnly,
  onChange,
}: {
  formState: EntryValue;
  readOnly: boolean;
  onChange: (argName: string, value: any) => void;
}) {
  const dayOfWeek = formState.DayOfWeek !== '' ? formState.DayOfWeek : null;
  const hour = formState.Hour !== '' ? formState.Hour : null;
  const minute = formState.Minute !== '' ? formState.Minute : null;

  // Convert hour and minute to time string for the time picker
  const getTimeString = (): string => {
    if (hour === null || minute === null) return '';
    return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
  };

  // Parse time string and update hour and minute
  const setTimeString = (value: string) => {
    if (!value) {
      onChange("Hour", '');
      onChange("Minute", '');
      return;
    }
    const [hourStr, minStr] = value.split(':');
    onChange("Hour", parseInt(hourStr, 10));
    onChange("Minute", parseInt(minStr, 10));
  };

  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Generate schedule preview only if values are set
  let schedulePreview = "No schedule configured";
  if (dayOfWeek !== null && hour !== null && minute !== null) {
    schedulePreview = `Every ${dayNames[dayOfWeek]} at ${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-slate-600 text-xs font-medium">Day of Week</label>
          <select
            className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 disabled:bg-slate-100"
            disabled={readOnly}
            value={dayOfWeek !== null ? dayOfWeek : ''}
            onChange={(e) => onChange("DayOfWeek", e.target.value === '' ? '' : Number(e.target.value))}
          >
            <option value="">Select day...</option>
            {dayNames.map((day, idx) => (
              <option key={idx} value={idx}>{day}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-slate-600 text-xs font-medium">Time</label>
          <input
            type="time"
            className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 disabled:bg-slate-100"
            disabled={readOnly}
            value={getTimeString()}
            onChange={(e) => setTimeString(e.target.value)}
          />
        </div>
      </div>

      {/* Schedule preview */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
        <div className="text-xs text-slate-600 font-medium mb-1">Schedule Preview</div>
        <div className="text-sm text-slate-800">{schedulePreview}</div>
      </div>
    </div>
  );
}
