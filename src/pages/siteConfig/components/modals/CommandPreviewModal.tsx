import { BaseModal } from '../../../../shared/components/BaseModal';

interface CommandPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  payload: any;
  gatewaySn?: string;
  type?: 'refresh' | 'set';
}

/**
 * Modal for previewing command payloads.
 */
export function CommandPreviewModal({ isOpen, onClose, title, payload, gatewaySn, type = 'set' }: CommandPreviewModalProps) {
  const icon = type === 'refresh' ? <span>⟳</span> : <span>📤</span>;

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title={title} icon={icon} maxWidth="xl">
      {gatewaySn && (
        <div className="text-sm text-slate-700 mb-3 bg-blue-50 border border-blue-200 rounded-lg p-3">
          <span className="font-semibold">Gateway:</span> {gatewaySn}
        </div>
      )}
      <div className="text-sm text-slate-700 mb-3">
        This is a preview of the command that would be sent:
      </div>
      <pre className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-xs font-mono overflow-x-auto text-slate-800">
        {JSON.stringify(payload, null, 2)}
      </pre>
    </BaseModal>
  );
}
