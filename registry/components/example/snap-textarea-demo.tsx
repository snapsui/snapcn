import { useState } from "react";
import { InfoCircledIcon } from "@radix-ui/react-icons";

import { SnapTextarea } from "@/components/snapui/snap-textarea";

export default function SnapTextareaDemo() {
  const [value, setValue] = useState("");

  return (
    <SnapTextarea
      leftIcon={<InfoCircledIcon className="size-4" />}
      placeholder="Enter your company details..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      maxCharLength={1000}
    />
  );
}
