import { BaseModal } from './BaseModal';

interface HelpModalProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Modal for displaying help text with simple markdown-like bold formatting.
 */
export function HelpModal({ title, content, isOpen, onClose }: HelpModalProps) {
  // Simple markdown-like rendering for bold text
  const renderContent = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={idx} className="font-semibold text-slate-900">{part.slice(2, -2)}</strong>;
      }
      return <span key={idx}>{part}</span>;
    });
  };

  const icon = (
    <div className="text-slate-500 border border-slate-400 rounded-full w-5 h-5 flex items-center justify-center leading-none text-xs font-medium">
      i
    </div>
  );

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title={title} icon={icon}>
      <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
        {renderContent(content)}
      </div>
    </BaseModal>
  );
}
