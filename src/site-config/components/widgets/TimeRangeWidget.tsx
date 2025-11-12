import { TimeInputField } from '../forms/TimeInputField';
import { ZERO_TIME } from '../../utils/timeFormatting';
import { EntryValue, PointDef } from '../../types/schema';

// TimeRange Widget - for start and end time selection
export function TimeRangeWidget({
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
  // Find start and end time entries (for separate encoding)
  const startHourEntry = point.entries.find(e => e.arg.includes("StartHour") || e.arg.includes("Start_hour") || e.arg.includes("StartTime_h"));
  const startMinEntry = point.entries.find(e => e.arg.includes("StartMin") || e.arg.includes("Start_minute") || e.arg.includes("StartTime_m"));
  const endHourEntry = point.entries.find(e => e.arg.includes("EndHour") || e.arg.includes("End_hour") || e.arg.includes("EndTime_h"));
  const endMinEntry = point.entries.find(e => e.arg.includes("EndMin") || e.arg.includes("End_minute") || e.arg.includes("EndTime_m"));

  const getStartTime = (): string => {
    if (startHourEntry && startMinEntry) {
      const hour = String(formState[startHourEntry.arg] ?? 0).padStart(2, '0');
      const min = String(formState[startMinEntry.arg] ?? 0).padStart(2, '0');
      return `${hour}:${min}`;
    }
    return ZERO_TIME;
  };

  const getEndTime = (): string => {
    if (endHourEntry && endMinEntry) {
      const hour = String(formState[endHourEntry.arg] ?? 0).padStart(2, '0');
      const min = String(formState[endMinEntry.arg] ?? 0).padStart(2, '0');
      return `${hour}:${min}`;
    }
    return ZERO_TIME;
  };

  const setStartTime = (value: string) => {
    const [hourStr, minStr] = value.split(':');
    const hour = parseInt(hourStr, 10);
    const min = parseInt(minStr, 10);

    if (startHourEntry && startMinEntry) {
      onChange(startHourEntry.arg, hour);
      onChange(startMinEntry.arg, min);
    }
  };

  const setEndTime = (value: string) => {
    const [hourStr, minStr] = value.split(':');
    const hour = parseInt(hourStr, 10);
    const min = parseInt(minStr, 10);

    if (endHourEntry && endMinEntry) {
      onChange(endHourEntry.arg, hour);
      onChange(endMinEntry.arg, min);
    }
  };

  const clearTimes = () => {
    if (readOnly) return;
    setStartTime(ZERO_TIME);
    setEndTime(ZERO_TIME);
  };

  const startTime = getStartTime();
  const endTime = getEndTime();

  return (
    <div className="flex items-end gap-4">
      <TimeInputField
        label="Start Time"
        value={startTime}
        readOnly={readOnly}
        onChange={setStartTime}
        onClear={clearTimes}
      />
      <TimeInputField
        label="End Time"
        value={endTime}
        readOnly={readOnly}
        onChange={setEndTime}
        onClear={clearTimes}
      />
    </div>
  );
}
