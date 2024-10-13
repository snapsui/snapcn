import React from "react";
import { E164Number } from "libphonenumber-js";

import { SnapPhoneInput } from "@/components/snapui/phone-input";

export default function SnapPhoneInputDemo() {
  const [value, setValue] = React.useState<string>("");

  const handleChange = (newValue: E164Number) => {
    setValue(newValue as string);
  };

  return (
    <SnapPhoneInput
      value={value}
      onChange={handleChange}
      placeholder="Enter phone number..."
    />
  );
}
