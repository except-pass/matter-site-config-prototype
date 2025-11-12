import { useEffect, ReactNode } from 'react';

export interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  showFooter?: boolean;
  footerContent?: ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl'
};

/**
 * Base modal component with common structure and escape key handling.
 */
export function BaseModal({
  isOpen,
  onClose,
  title,
  icon,
  children,
  showFooter = true,
  footerContent,
  maxWidth = 'lg'
}: BaseModalProps) {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const defaultFooter = (
    <div className="flex justify-end p-4 border-t border-slate-200 bg-slate-50">
      <button
        type="button"
        className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 p-4"
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-xl shadow-2xl w-full ${maxWidthClasses[maxWidth]} border border-slate-300 overflow-hidden`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-5 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            {icon}
            <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
          </div>
          <button
            type="button"
            className="text-slate-400 hover:text-slate-600 transition-colors text-xl leading-none -mt-1"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-5 max-h-[60vh] overflow-y-auto">
          {children}
        </div>

        {/* Footer */}
        {showFooter && (footerContent || defaultFooter)}
      </div>
    </div>
  );
}
