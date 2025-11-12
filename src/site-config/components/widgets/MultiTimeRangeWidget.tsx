import { TimeInputField } from '../forms/TimeInputField';
import { TimeRangeWidget } from './TimeRangeWidget';
import { EntryValue, PointDef } from '../../types/schema';

export function MultiTimeRangeWidget({
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

  type WindowConfig = {
    id: number;
    startHourArg?: string;
    startMinArg?: string;
    endHourArg?: string;
    endMinArg?: string;
  };

  const windowMap = new Map<number, WindowConfig>();

  point.entries.forEach((entry) => {
    const match = entry.arg.match(/^(StartTime|EndTime)(\d+)_([hm])$/i);
    if (!match) {
      return;
    }

    const [, type, indexStr, part] = match;
    const index = parseInt(indexStr, 10);
    if (!windowMap.has(index)) {
      windowMap.set(index, { id: index });
    }

    const config = windowMap.get(index)!;
    const lowerPart = part.toLowerCase();

    if (type.toLowerCase() === 'starttime') {
      if (lowerPart === 'h') {
        config.startHourArg = entry.arg;
      } else {
        config.startMinArg = entry.arg;
      }
    } else {
      if (lowerPart === 'h') {
        config.endHourArg = entry.arg;
      } else {
        config.endMinArg = entry.arg;
      }
    }
  });

  const windows = Array.from(windowMap.values()).sort((a, b) => a.id - b.id);

  if (windows.length === 0) {
    return (
      <TimeRangeWidget
        point={point}
        formState={formState}
        readOnly={readOnly}
        onChange={onChange}
      />
    );
  }

  const getTimeString = (hourArg?: string, minArg?: string) => {
    const hourVal = hourArg !== undefined ? formState[hourArg] : 0;
    const minVal = minArg !== undefined ? formState[minArg] : 0;

    const hour = typeof hourVal === 'number' ? hourVal : parseInt(hourVal ?? 0, 10) || 0;
    const minute = typeof minVal === 'number' ? minVal : parseInt(minVal ?? 0, 10) || 0;

    return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
  };

  const setTimeForWindow = (
    windowConfig: WindowConfig,
    which: 'start' | 'end',
    value: string
  ) => {
    const [hourStr, minuteStr] = value.split(':');
    const hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);

    if (which === 'start') {
      if (windowConfig.startHourArg) onChange(windowConfig.startHourArg, hour);
      if (windowConfig.startMinArg) onChange(windowConfig.startMinArg, minute);
    } else {
      if (windowConfig.endHourArg) onChange(windowConfig.endHourArg, hour);
      if (windowConfig.endMinArg) onChange(windowConfig.endMinArg, minute);
    }
  };

  const clearWindow = (windowConfig: WindowConfig) => {
    if (readOnly) return;
    if (windowConfig.startHourArg) onChange(windowConfig.startHourArg, 0);
    if (windowConfig.startMinArg) onChange(windowConfig.startMinArg, 0);
    if (windowConfig.endHourArg) onChange(windowConfig.endHourArg, 0);
    if (windowConfig.endMinArg) onChange(windowConfig.endMinArg, 0);
  };

  return (
    <div className="flex flex-col gap-4">
      {windows.map((windowConfig) => {
        const startValue = getTimeString(windowConfig.startHourArg, windowConfig.startMinArg);
        const endValue = getTimeString(windowConfig.endHourArg, windowConfig.endMinArg);
        const handleClear = () => clearWindow(windowConfig);

        return (
          <div
            key={windowConfig.id}
            className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-slate-50/60 p-3"
          >
            <div className="text-xs font-semibold uppercase text-slate-600">
              Grid Charge Window {windowConfig.id}
            </div>
            <div className="flex items-end gap-4">
              <TimeInputField
                label="Start Time"
                value={startValue}
                readOnly={readOnly}
                onChange={(val) => setTimeForWindow(windowConfig, 'start', val)}
                onClear={handleClear}
              />
              <TimeInputField
                label="End Time"
                value={endValue}
                readOnly={readOnly}
                onChange={(val) => setTimeForWindow(windowConfig, 'end', val)}
                onClear={handleClear}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
