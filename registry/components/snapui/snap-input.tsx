"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  hint?: string;
}

const SnapInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, leftIcon, rightIcon, hint, ...props }, ref) => {
    return (
      <div className="group relative">
        <div className="relative flex items-center w-full">
          {leftIcon && (
            <span className="absolute left-3 flex items-center pointer-events-none text-primary">
              {leftIcon}
            </span>
          )}
          <input
            type={type}
            className={cn(
              "flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-primary ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:bg-transparent hover:bg-muted hover:border-transparent transition duration-300",
              leftIcon ? "pl-10" : "",
              rightIcon ? "pr-10" : "",
              className,
            )}
            ref={ref}
            {...props}
          />
          {rightIcon && (
            <span className="absolute right-3 flex items-center cursor-pointer text-primary">
              {rightIcon}
            </span>
          )}
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
