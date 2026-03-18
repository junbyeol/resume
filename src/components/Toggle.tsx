import type { ReactNode } from "react";

type ToggleProps = {
  isOn: boolean;
  onToggle: () => void;
  ariaLabel: string;
  onLabel?: ReactNode;
  offLabel?: ReactNode;
};

const Toggle = ({
  isOn,
  onToggle,
  ariaLabel,
  onLabel,
  offLabel,
}: ToggleProps) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isOn}
      aria-label={ariaLabel}
      onClick={onToggle}
      className="relative inline-flex items-center rounded-full bg-slate-100 px-0.5 py-0.5 text-xs font-semibold text-slate-500 shadow-inner focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg transition-colors"
    >
      <span
        className={`flex items-center justify-center px-4 py-1 rounded-full transition-colors ${
          !isOn ? "bg-white text-accent shadow" : "text-slate-400"
        }`}
      >
        {offLabel}
      </span>
      <span
        className={`flex items-center justify-center px-4 py-1 rounded-full transition-colors ${
          isOn ? "bg-white text-accent shadow" : "text-slate-400"
        }`}
      >
        {onLabel}
      </span>
    </button>
  );
};

export default Toggle;
