import { PointDef, EquipmentOption } from '../../../types/schema';
import { usePointFormWithApi } from '../../../../../hooks/usePointFormWithApi';
import { useModalState } from '../../../hooks/useModalState';
import { PointCardHeader } from './PointCardHeader';
import { PointCardBody } from './PointCardBody';
import { HelpModal } from '../../modals/HelpModal';
import { TelemetryHistoryModal } from '../../modals/TelemetryHistoryModal';
import { CommandPreviewModal } from '../../modals/CommandPreviewModal';

interface PointCardProps {
  point: PointDef;
  helpTextMatch?: boolean;
  equipment: EquipmentOption;
}

export function PointCard({
  point,
  helpTextMatch = false,
  equipment,
}: PointCardProps) {
  // Use custom hooks for form state and modal management
  const {
    formState,
    handleFieldChange,
    handleRefresh,
    handleSet,
    handleInvoke,
  } = usePointFormWithApi(point, equipment);

  const helpModal = useModalState();
  const telemetryModal = useModalState();
  const commandModal = useModalState<{ payload: any; gatewaySn?: string }>();
  const refreshModal = useModalState<{ payload: any; gatewaySn?: string }>();

  // Handle button clicks
  const onHelpClick = () => helpModal.open();
  const onHistoryClick = () => telemetryModal.open();

  const onRefreshClick = async () => {
    const result = await handleRefresh();
    if (result?.payload) {
      refreshModal.open({ payload: result.payload, gatewaySn: result.gatewaySn });
    }
  };

  const onSetClick = async () => {
    const result = await handleSet();
    if (result?.payload) {
      commandModal.open({ payload: result.payload, gatewaySn: result.gatewaySn });
    }
  };

  const onInvokeClick = async () => {
    const result = await handleInvoke();
    if (result?.payload) {
      commandModal.open({ payload: result.payload, gatewaySn: result.gatewaySn });
    }
  };

  // Compute UI state
  const normalizedAccess = typeof point.access === "string"
    ? point.access.trim().toLowerCase()
    : "";
  const isInvoke = normalizedAccess === "invoke" || point.element_type === "service";

  // readOnly is set in JSON:
  // - Always true for access === "R" (protocol read-only)
  // - Can be true for RW/Invoke points if specified in hierarchy.yaml (UI-only override)
  const readOnly = point.readOnly || point.access === "R";
  const setButtonAppearance = readOnly
    ? "border-slate-300 bg-slate-100 text-slate-400 cursor-not-allowed"
    : "border-slate-400 bg-white text-slate-700 hover:bg-slate-50";

  // Check if this point has any linked telemetry points
  const hasTelemetry = point.entries.some(entry =>
    entry.telemetry?.model && entry.telemetry?.point
  );

  // For invoke commands, hide history, refresh, and set buttons by default (can be overridden in hierarchy.yaml)
  // Also hide history button if there's no linked telemetry data
  const shouldShowHistory = point.showHistory !== undefined
    ? point.showHistory
    : (hasTelemetry && !isInvoke);
  const shouldShowRefresh = isInvoke ? (point.showRefresh === true) : (point.showRefresh !== false);
  const shouldShowSetButton = point.showSetButton !== undefined
    ? point.showSetButton
    : !isInvoke;

  return (
    <div className="rounded-xl border border-slate-300 bg-white p-4 shadow-sm">
      <PointCardHeader
        point={point}
        readOnly={readOnly}
        helpTextMatch={helpTextMatch}
        shouldShowHistory={shouldShowHistory}
        shouldShowRefresh={shouldShowRefresh}
        shouldShowSetButton={shouldShowSetButton}
        setButtonAppearance={setButtonAppearance}
        onHelpClick={onHelpClick}
        onHistoryClick={onHistoryClick}
        onRefreshClick={onRefreshClick}
        onSetClick={onSetClick}
      />

      <PointCardBody
        point={point}
        formState={formState}
        readOnly={readOnly}
        isInvoke={isInvoke}
        setButtonAppearance={setButtonAppearance}
        onChange={handleFieldChange}
        onInvokeClick={onInvokeClick}
        equipment={equipment}
      />

      {/* Modals */}
      <HelpModal
        title={point.title}
        content={point.help || ''}
        isOpen={helpModal.isOpen}
        onClose={helpModal.close}
      />

      <TelemetryHistoryModal
        point={point}
        isOpen={telemetryModal.isOpen}
        onClose={telemetryModal.close}
      />

      <CommandPreviewModal
        title="Command Preview"
        payload={commandModal.data?.payload}
        gatewaySn={commandModal.data?.gatewaySn}
        isOpen={commandModal.isOpen}
        onClose={commandModal.close}
      />

      <CommandPreviewModal
        title="Read Command Preview"
        payload={refreshModal.data?.payload}
        gatewaySn={refreshModal.data?.gatewaySn}
        isOpen={refreshModal.isOpen}
        onClose={refreshModal.close}
        type="refresh"
      />
    </div>
  );
}
