import * as React from "react";

import { cn } from "@/lib/utils";

interface PulseSpinButtonProps {
  className?: string;
  children: React.ReactNode;
}

const PulseSpinButton = ({ className, children }: PulseSpinButtonProps) => {
  return (
    <div
      className={cn(
        "group relative inline-flex overflow-hidden rounded-full p-[2px] transition-all duration-300 hover:scale-105",
        className,
      )}
    >
      <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950/90 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        <span className="relative z-10 flex items-center gap-1">
          {children}
        </span>
      </div>
    </div>
  );
};

export { PulseSpinButton };
