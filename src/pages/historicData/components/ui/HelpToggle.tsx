import React from "react";

interface HelpToggleProps {
  show: boolean;
  onToggle: (next: boolean) => void;
}

export default function HelpToggle({ show, onToggle }: HelpToggleProps) {
  return (
    <label className="inline-flex cursor-pointer items-center gap-2 text-sm">
      <input
        type="checkbox"
        className="h-4 w-4"
        checked={show}
        onChange={(e) => onToggle(e.target.checked)}
      />
      Show help text
    </label>
  );
}
