import { useState } from "react";

import { SnapTextarea } from "@/registry/components/snapui/textarea";

export default function SnapTextareaDemo() {
  const [value, setValue] = useState("");

  return (
    <SnapTextarea
      placeholder="Enter your company details..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
