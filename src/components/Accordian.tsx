import { useState } from "react";
import { Text } from "./ui";
import { IoIosArrowDown } from "react-icons/io";

interface AccordionToggleProps {
  label: string;
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export const AccordionToggle = ({
  label,
  onClick,
  className,
}: AccordionToggleProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center gap-3 rounded-[8px] bg-accent px-6 py-[10px] text-text shadow-md transition-transform transition-shadow hover:translate-y-[1px] hover:shadow-sm active:translate-y-[2px] active:shadow-none focus-visible:outline-none cursor-pointer ${className}`}
    >
      <IoIosArrowDown className="text-background! transition-transform" />
      <Text variant="section-meta-text" className="text-background!">
        {label}
      </Text>
    </button>
  );
};

interface AccordionProps {
  label: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
  panelClassName?: string;
}

export const Accordion = ({
  label,
  children,
  defaultOpen = false,
  className = "",
  panelClassName = "",
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleToggle = () => {
    setIsOpen((previous) => !previous);
  };

  return (
    <div className={`w-full ${className}`}>
      <AccordionToggle label={label} isOpen={isOpen} onClick={handleToggle} />
      {isOpen && (
        <div
          className={`mt-6 w-full rounded-[8px] bg-accent-muted p-8 text-left shadow-sm ${panelClassName}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};
