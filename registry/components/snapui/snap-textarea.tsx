import * as React from "react";

import { cn } from "@/lib/utils";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  leftIcon?: React.ReactNode;
  maxCharLength?: number;
  value: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, leftIcon, maxCharLength, ...props }, ref) => (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 pt-2 pb-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:bg-transparent hover:bg-muted hover:border-transparent transition duration-300",
        leftIcon ? "pl-10" : "",
        maxCharLength ? "pb-4" : "pb-2",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);

Textarea.displayName = "Textarea";

const SnapTextarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, value, leftIcon, maxCharLength, ...props }, ref) => (
    <div className="relative flex items-start w-[350px]">
      {leftIcon && (
        <span className="absolute left-3 top-2.5 flex items-center pointer-events-none text-primary">
          {leftIcon}
        </span>
      )}
      <Textarea
        leftIcon={leftIcon}
        maxCharLength={maxCharLength}
        className={className}
        value={value}
        ref={ref}
        {...props}
      />
      {maxCharLength && (
        <span className="absolute bottom-1 right-3 text-muted-foreground text-xs leading-[12px]">
          {value.length}/{maxCharLength}
        </span>
      )}
    </div>
  ),
);

SnapTextarea.displayName = "SnapTextarea";

export { SnapTextarea };
