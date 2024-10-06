import React from "react";

import { SnapRatingInput } from "@/registry/components/snapui/snap-rating-input";

const RATING_VALUES = [1, 2, 3, 4, 5] as const;
type RatingValue = (typeof RATING_VALUES)[number] | null;

export default function SnapRatingInputDemo() {
  const [value, setValue] = React.useState<RatingValue>(4);

  return (
    <SnapRatingInput
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  );
}
