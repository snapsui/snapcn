import * as React from "react";
import { Check, X } from "lucide-react";

import { cn } from "@/lib/utils";

import { SnapButton } from "./snap-button";

interface SnapBooleanInputProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: any;
  onToggle?: (newValue: boolean) => void;
  readonly?: boolean;
  color?: "default" | "error";
}

const SnapBooleanInput = React.forwardRef<
  HTMLButtonElement,
  SnapBooleanInputProps
>(({ className, value, onToggle, readonly = false, ...props }, ref) => {
  const handleClick = () => {
    if (!readonly && onToggle) {
      onToggle(!value);
    }
  };

  return (
    <SnapButton
      ref={ref}
      className={cn(
        "flex items-center justify-start gap-2",
        readonly ? "cursor-default" : "cursor-pointer",
        className,
      )}
      variant="soft"
      color="default"
      shape="default"
      onClick={handleClick}
      disabled={readonly}
      {...props}
    >
      {value ? <Check className="size-4" /> : <X className="size-4" />}
      <span>{value ? "True" : "False"}</span>
    </SnapButton>
  );
});

SnapBooleanInput.displayName = "SnapBooleanInput";

export { SnapBooleanInput };
