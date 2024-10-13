"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { Input } from "./input";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  hint?: string;
  prefix?: string;
  disabled?: boolean;
}

const SnapURLInput = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, leftIcon, rightIcon, hint, disabled, prefix, ...props },
    ref,
  ) => {
    return (
      <div
        className={cn(
          "mt-1 flex items-center rounded-lg border border-input ring-offset-background focus-within:ring-offset-background focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-background transition duration-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:bg-transparent hover:bg-muted hover:border-transparent",
          disabled ? "opacity-50 cursor-not-allowed text-muted-foreground" : "",
        )}
      >
        <span className="inline-flex items-center px-3 py-2 text-primary font-normal text-sm border-r rounded-l-lg">
          {prefix}
        </span>
        <Input
          ref={ref}
          disabled={disabled}
          className={cn(
            "flex-1 block w-full px-3 py-2 focus:outline-none border-none rounded-none rounded-r-lg focus-visible:ring-0 shadow-none focus-visible:ring-offset-0",
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);

SnapURLInput.displayName = "SnapURLInput";

export { SnapURLInput };
