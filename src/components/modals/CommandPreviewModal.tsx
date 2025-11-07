import { BaseModal } from './BaseModal';

interface CommandPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  payload: any;
  type?: 'refresh' | 'set';
}

/**
 * Modal for previewing command payloads.
 */
export function CommandPreviewModal({ isOpen, onClose, title, payload, type = 'set' }: CommandPreviewModalProps) {
  const icon = type === 'refresh' ? <span>⟳</span> : <span>📤</span>;

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title={title} icon={icon} maxWidth="xl">
      <div className="text-sm text-slate-700 mb-3">
        This is a preview of the command that would be sent:
      </div>
      <pre className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-xs font-mono overflow-x-auto text-slate-800">
        {JSON.stringify(payload, null, 2)}
      </pre>
    </BaseModal>
  );
}
