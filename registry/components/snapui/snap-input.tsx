"use client";

import * as React from "react";
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  hint?: string;
  copyable?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, leftIcon, rightIcon, copyable = false, ...props },
    ref,
  ) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-primary ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:bg-transparent hover:bg-muted hover:border-transparent transition duration-300",
          leftIcon ? "pl-10" : "",
          rightIcon ? "pr-10" : "",
          copyable ? "pr-10" : "",
          copyable && rightIcon ? "pr-14" : "",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

const SnapInput = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      leftIcon,
      rightIcon,
      hint,
      value,
      copyable = false,
      ...props
    },
    ref,
  ) => {
    const [isCopied, setIsCopied] = React.useState(false);

    const handleCopy = () => {
      if (value) {
        navigator.clipboard.writeText(value.toString()).then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 1000);
        });
      }
    };

    return (
      <div className="group relative">
        <div className="relative flex items-center w-full">
          {leftIcon && (
            <span className="absolute left-3 flex items-center pointer-events-none text-primary">
              {leftIcon}
            </span>
          )}
          <Input
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            type={type}
            ref={ref}
            value={value}
            className={className}
            copyable={copyable}
            {...props}
          />
          <span className="absolute right-3 flex items-center space-x-2">
            {rightIcon && (
              <span className="cursor-pointer text-primary">{rightIcon}</span>
            )}

            {copyable && isCopied && (
              <span
                className={`cursor-pointer transition-all duration-300 ease-in-out ${isCopied ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
              >
                <CheckIcon className="w-full h-full" />
              </span>
            )}
            {copyable && !isCopied && (
              <span
                className={`cursor-pointer transition-all duration-300 ease-in-out ${isCopied ? "opacity-0 scale-50" : "opacity-100 scale-100"}`}
              >
                <CopyIcon onClick={handleCopy} className="w-full h-full" />
              </span>
            )}
          </span>
        </div>
        <p className="pl-1 mt-1 text-xs text-primary text-muted-foreground transition-all duration-300 ease-in-out group-hover:max-h-10 group-hover:opacity-100 max-h-0 overflow-hidden">
          {hint}
        </p>
      </div>
    );
  },
);

SnapInput.displayName = "SnapInput";

export { SnapInput };
