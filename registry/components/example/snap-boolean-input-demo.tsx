import React from "react";

import { SnapBooleanInput } from "@/components/snapui/snap-boolean-input";

export default function SnapBooleanInputDemo() {
  const [value, setValue] = React.useState(false);

  return (
    <SnapBooleanInput
      value={value}
      onToggle={(newValue) => setValue(newValue)}
    />
  );
}
