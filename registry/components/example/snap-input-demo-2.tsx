import { useState } from "react";
import { Cross1Icon, PersonIcon } from "@radix-ui/react-icons";

import { SnapInput } from "@/components/snapui/snap-input";

export default function SnapInputDemo() {
  const [name, setName] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <SnapInput
        type="text"
        placeholder="Enter name..."
        leftIcon={<PersonIcon />}
        hint="This will be displayed on your profile."
      />
      <SnapInput
        type="text"
        value={name}
        placeholder="Enter name..."
        onChange={(e) => setName(e.target.value)}
        rightIcon={name && <Cross1Icon onClick={() => setName("")} />}
      />
    </div>
  );
}
