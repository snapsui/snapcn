import * as React from "react";
import { Sparkle } from "lucide-react";

import { cn } from "@/lib/utils";

const RATING_VALUES = [1, 2, 3, 4, 5] as const;
type RatingValue = (typeof RATING_VALUES)[number] | null;

interface SnapRatingInputProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  value: RatingValue;
  onChange?: (newValue: RatingValue) => void;
  readonly?: boolean;
}

const SnapRatingInput = React.forwardRef<HTMLDivElement, SnapRatingInputProps>(
  ({ className, value, onChange, readonly = false, ...props }, ref) => {
    const [hoveredValue, setHoveredValue] = React.useState<RatingValue>(null);

    const currentValue = hoveredValue ?? value;
    const selectedIndex = currentValue !== null ? currentValue - 1 : -1;

    const handleClick = (newValue: RatingValue) => {
      if (readonly) return;
      onChange?.(newValue === value ? null : newValue);
    };

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-2",
          readonly ? "pointer-events-none" : "cursor-pointer",
          className,
        )}
        role="slider"
        aria-label="Rating"
        aria-valuemax={RATING_VALUES.length}
        aria-valuemin={1}
        aria-valuenow={selectedIndex + 1}
        tabIndex={0}
        {...props}
      >
        {RATING_VALUES.map((ratingValue, index) => (
          <Sparkle
            key={ratingValue}
            className={cn(
              "size-6 transition-all duration-200 ease-in-out",
              "hover:scale-125 active:scale-95",
              index <= selectedIndex
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300 hover:text-yellow-200",
              "focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 rounded-sm",
            )}
            onClick={() => handleClick(ratingValue)}
            onMouseEnter={() => !readonly && setHoveredValue(ratingValue)}
            onMouseLeave={() => !readonly && setHoveredValue(null)}
          />
        ))}
      </div>
    );
  },
);

SnapRatingInput.displayName = "SnapRatingInput";

export { SnapRatingInput };
