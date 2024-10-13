import { useState } from "react";
import { EarthIcon } from "lucide-react";

import { SnapSelect } from "@/components/snapui/select";

export default function SnapSelectDemo() {
  const [country, setCountry] = useState("");
  const items = [
    {
      label: "India",
      value: "IN",
      icon: (
        <img
          src="http://purecatamphetamine.github.io/country-flag-icons/3x2/IN.svg"
          alt="Option 1"
          className="size-4 rounded-full object-cover"
        />
      ),
    },
    {
      label: "United State America",
      value: "USA",
    },
  ];

  return (
    <SnapSelect
      placeholder="Select country"
      items={items}
      value={country}
      onValueChange={(value: string) => setCountry(value)}
      isSearch
      leftIcon={<EarthIcon className="size-4" />}
    />
  );
}
