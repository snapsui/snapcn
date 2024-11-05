"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import * as Flags from "country-flag-icons/react/3x2";
import { CountryCallingCode } from "libphonenumber-js";
import { SearchIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { useCountries } from "../hooks/use-country";
import { SnapInput } from "./input";
import { SelectContent, SelectItem, SelectTrigger } from "./select";

const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;

type AddressValue = {
  addressStreet1: string;
  addressStreet2: string | null;
  addressCity: string | null;
  addressState: string | null;
  addressCountry: string | null;
  addressPostcode: string | null;
};

interface SnapAddressInputProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  value: AddressValue;
  onChange?: (newValue: AddressValue) => void;
}

interface Country {
  countryCode: string;
  countryName: string;
  callingCode: CountryCallingCode;
  Flag: Flags.FlagComponent;
}

const CountryPickerDropdown = ({
  value,
  onChange,
  className,
  placeholder,
}: {
  value: string;
  onChange: (countryCode: string) => void;
  className?: string;
  placeholder?: string;
}) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [selectedCountry, setSelectedCountry] = React.useState<Country>();

  const countries = useCountries();

  React.useEffect(() => {
    const country = countries.find(({ countryCode }) => countryCode === value);
    if (country !== undefined || country !== null) {
      setSelectedCountry(country);
    }
  }, [countries, value]);

  const handleClick = (countryCode: string) => {
    const country = countries.find(({ countryCode }) => countryCode === value);
    setSelectedCountry(country);
    onChange(countryCode);
  };

  const filteredItems = React.useMemo(
    () =>
      countries.filter(
        (item: any) =>
          item.countryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.callingCode.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    [searchQuery, countries],
  );

  React.useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <Select value={value} onValueChange={(value: string) => handleClick(value)}>
      <SelectTrigger
        selectedIcon={
          selectedCountry && <selectedCountry.Flag className="w-5 h-5" />
        }
        className={cn(
          "w-[70px] rounded-l-lg rounded-r-none focus:outline-none border-0 border-input focus-visible:ring-0 shadow-none focus-visible:ring-offset-0",
          className,
        )}
      >
        {selectedCountry?.countryName && (
          <SelectValue>{selectedCountry?.countryName}</SelectValue>
        )}
        {!selectedCountry?.countryName && (
          <SelectValue placeholder={placeholder} />
        )}
      </SelectTrigger>
      <SelectContent>
        <div className="-top-1 px-2 pb-1.5 sticky bg-popover z-10 pt-2">
          <SnapInput
            ref={inputRef}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="rounded-md h-8"
            leftIcon={<SearchIcon className="size-4" />}
          />
        </div>
        {filteredItems.map(
          ({ countryCode, countryName, callingCode, Flag }) => (
            <SelectItem
              value={countryCode}
              key={countryCode}
              icon={<Flag className="size-4" />}
            >{`${countryName} (+${callingCode})`}</SelectItem>
          ),
        )}
      </SelectContent>
    </Select>
  );
};

const SnapAddressInput = React.forwardRef<
  HTMLDivElement,
  SnapAddressInputProps
>(({ className, value, onChange, onBlur, ...props }, ref) => {
  const handleChange =
    (field: keyof AddressValue) =>
    (event: React.ChangeEvent<HTMLInputElement> | string) => {
      const newValue = typeof event === "string" ? event : event.target.value;
      onChange?.({ ...value, [field]: newValue });
    };

  return (
    <div ref={ref} className={cn("space-y-2", className)} {...props}>
      <SnapInput
        placeholder="Address Line 1"
        value={value.addressStreet1}
        onChange={handleChange("addressStreet1")}
        onBlur={onBlur}
        className="rounded-md"
      />
      <SnapInput
        placeholder="Address Line 2"
        value={value.addressStreet2 ?? ""}
        onChange={handleChange("addressStreet2")}
        onBlur={onBlur}
        className="rounded-md"
      />
      <div className="grid grid-cols-2 gap-4">
        <SnapInput
          placeholder="City"
          value={value.addressCity ?? ""}
          onChange={handleChange("addressCity")}
          onBlur={onBlur}
          className="rounded-md"
        />
        <SnapInput
          placeholder="State"
          value={value.addressState ?? ""}
          onChange={handleChange("addressState")}
          onBlur={onBlur}
          className="rounded-md"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <SnapInput
          placeholder="Postal Code"
          value={value.addressPostcode ?? ""}
          onChange={handleChange("addressPostcode")}
          onBlur={onBlur}
          className="rounded-md"
        />
        <CountryPickerDropdown
          className="rounded-md border border-input w-full"
          value={value.addressCountry ?? ""}
          onChange={handleChange("addressCountry")}
          placeholder="Select Country"
        />
      </div>
    </div>
  );
});

SnapAddressInput.displayName = "SnapAddressInput";

export { SnapAddressInput };
