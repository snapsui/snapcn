import React from "react";
import { MapPinIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SnapAddressInput } from "@/components/snapui/address-input";
import { SnapButton } from "@/registry/components/snapui/button";

type AddressValue = {
  addressStreet1: string;
  addressStreet2: string | null;
  addressCity: string | null;
  addressState: string | null;
  addressCountry: string | null;
  addressPostcode: string | null;
};

export default function SnapAddressInputDemo() {
  const [address, setAddress] = React.useState<AddressValue>({
    addressStreet1: "1234 Main St",
    addressStreet2: "",
    addressCity: "San Francisco",
    addressState: "CA",
    addressCountry: "US",
    addressPostcode: "94105",
  });

  const formatAddress = (address: AddressValue) => {
    const parts = [
      address.addressStreet1,
      address.addressStreet2,
      address.addressCity,
      address.addressState,
      address.addressCountry,
      address.addressPostcode,
    ];

    return parts.filter((part) => part && part.trim() !== "").join(", ");
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <SnapButton
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !address.addressStreet1 && "text-muted-foreground",
          )}
        >
          <MapPinIcon className="size-4" />
          {formatAddress(address) ? (
            <span className="line-clamp-1">{formatAddress(address)}</span>
          ) : (
            <span>Select Address</span>
          )}
        </SnapButton>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[400px] p-2.5">
        <SnapAddressInput
          value={address}
          onChange={setAddress}
          onBlur={() => console.log("Address input blurred")}
        />
      </PopoverContent>
    </Popover>
  );
}
