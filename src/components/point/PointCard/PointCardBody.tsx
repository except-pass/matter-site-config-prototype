import { PointDef, EntryValue, EquipmentOption } from '../../../types/schema';
import { DateTimeWidget } from '../../widgets/DateTimeWidget';
import { TimeRangeWidget } from '../../widgets/TimeRangeWidget';
import { MultiTimeRangeWidget } from '../../widgets/MultiTimeRangeWidget';
import { GeneratorExerciseWidget } from '../../widgets/GeneratorExerciseWidget';
import { ULComplianceReportWidget } from '../../widgets/ULComplianceReportWidget';
import { DualHandleSlider } from '../../forms/DualHandleSlider';
import { EntryField } from '../../forms/EntryField';

interface PointCardBodyProps {
  point: PointDef;
  formState: EntryValue;
  readOnly: boolean;
  isInvoke: boolean;
  setButtonAppearance: string;
  onChange: (argName: string, nextVal: any) => void;
  onInvokeClick: () => void;
  equipment: EquipmentOption;
}

export function PointCardBody({
  point,
  formState,
  readOnly,
  isInvoke,
  setButtonAppearance,
  onChange,
  onInvokeClick,
  equipment,
}: PointCardBodyProps) {
  // Detect if this point should use a multi-handle slider
  const rangedNumberEntries = point.entries.filter(
    (e) => e.dtype === 'Number' && e.range !== undefined
  );
  const shouldUseDualSlider =
    !point.widget &&
    rangedNumberEntries.length >= 2 &&
    rangedNumberEntries.length === point.entries.length;

  return (
    <>
      {/* fields grid or custom widget */}
      {point.widget === "datetime" ? (
        <DateTimeWidget
          point={point}
          formState={formState}
          readOnly={readOnly}
          onChange={onChange}
        />
      ) : point.widget === "timerange-multi" ? (
        <MultiTimeRangeWidget
          point={point}
          formState={formState}
          readOnly={readOnly}
          onChange={onChange}
        />
      ) : point.widget === "timerange" ? (
        <TimeRangeWidget
          point={point}
          formState={formState}
          readOnly={readOnly}
          onChange={onChange}
        />
      ) : point.widget === "generator-exercise" ? (
        <GeneratorExerciseWidget
          formState={formState}
          readOnly={readOnly}
          onChange={onChange}
        />
      ) : point.widget === "ul-compliance-report" ? (
        <ULComplianceReportWidget
          point={point}
          equipment={equipment}
          readOnly={readOnly}
        />
      ) : shouldUseDualSlider ? (
        <DualHandleSlider
          entries={rangedNumberEntries}
          formState={formState}
          readOnly={readOnly}
          onChange={onChange}
        />
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
          {point.entries.map((entry) => (
            <EntryField
              key={entry.arg}
              entry={entry}
              value={formState[entry.arg]}
              readOnly={readOnly}
              point={point}
              onChange={(val) => onChange(entry.arg, val)}
            />
          ))}
        </div>
      )}

      {isInvoke && point.widget !== "generator-exercise" && point.widget !== "ul-compliance-report" && (point.showInvokeButton !== false) && (
        <div className="mt-4 flex items-center gap-2">
          <button
            type="button"
            className={`border text-xs font-medium rounded px-2 py-1 leading-none transition ${setButtonAppearance}`}
            disabled={readOnly}
            onClick={onInvokeClick}
          >
            {point.invokeButtonText || "Invoke"}
          </button>
        </div>
      )}
    </>
  );
}
