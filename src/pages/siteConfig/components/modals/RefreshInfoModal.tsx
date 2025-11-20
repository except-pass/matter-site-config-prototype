import { BaseModal } from '../../../../shared/components/BaseModal';

interface RefreshInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Simple modal explaining what the page-level refresh should do in production.
 */
export function RefreshInfoModal({ isOpen, onClose }: RefreshInfoModalProps) {
  const icon = (
    <span className="text-base text-slate-600" role="img" aria-label="refresh">
      ⟳
    </span>
  );

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="Refresh Site Values"
      icon={icon}
      maxWidth="md"
    >
      <div className="text-sm text-slate-700 space-y-3">
        <p>
          This button does not make any network calls in the prototype.
        </p>
        <p>
          In a real implementation this action should call{' '}
          <code className="mx-1 rounded bg-slate-100 px-1 py-0.5 text-xs">GetPointValues</code>
          {' '}with{' '}
          <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">force_refresh=true</code>
          {' '}to retrieve the freshest point data.
        </p>
      </div>
    </BaseModal>
  );
}
