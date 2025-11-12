import { BaseModal } from './BaseModal';
import { PointDef } from '../../types/schema';

interface TelemetryHistoryModalProps {
  point: PointDef;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Modal for displaying telemetry point information.
 */
export function TelemetryHistoryModal({ point, isOpen, onClose }: TelemetryHistoryModalProps) {
  // Build telemetry point identifiers
  const telemetryPoints: string[] = [];

  point.entries.forEach((entry) => {
    if (entry.telemetry?.model && entry.telemetry?.point) {
      const pointId = `${entry.telemetry.model}.${entry.telemetry.point}`;
      if (!telemetryPoints.includes(pointId)) {
        telemetryPoints.push(pointId);
      }
    }
  });

  const icon = <span className="text-slate-500 text-xl">🕐</span>;

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Historical Data" icon={icon}>
      <div className="text-sm text-slate-700 leading-relaxed mb-4">
        In the real UI, this button would link you to the historical data page showing the last 24 hours of data for the following telemetry points:
      </div>

      {telemetryPoints.length > 0 ? (
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
          <div className="text-xs font-semibold text-slate-600 uppercase mb-2">
            Telemetry Points
          </div>
          <div className="flex flex-col gap-2">
            {telemetryPoints.map((pointId, idx) => (
              <div key={idx} className="font-mono text-sm text-emerald-600 bg-white border border-emerald-200 rounded px-3 py-2">
                {pointId}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
          No telemetry points configured for this setting.
        </div>
      )}
    </BaseModal>
  );
}
