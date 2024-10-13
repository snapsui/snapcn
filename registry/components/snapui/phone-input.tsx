"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import * as Flags from "country-flag-icons/react/3x2";

import { cn } from "@/lib/utils";

import "react-phone-number-input/style.css";

import { CountryCallingCode, E164Number } from "libphonenumber-js";
import { EarthIcon, SearchIcon } from "lucide-react";
import PhoneInput from "react-phone-number-input";

import { useCountries } from "../hooks/use-country";
import { Input, SnapInput } from "./input";
import { SelectContent, SelectItem, SelectTrigger } from "./select";

const Select = SelectPrimitive.Root;

const PhoneInputComponent = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      className={cn(
        "flex-1 block w-full px-3 py-2 focus:outline-none border-0 border-l border-input rounded-none rounded-r-lg focus-visible:ring-0 shadow-none focus-visible:ring-offset-0",
        className,
      )}
      {...props}
    />
  );
});

interface Country {
  countryCode: string;
  countryName: string;
  callingCode: CountryCallingCode;
  Flag: Flags.FlagComponent;
}

const PhoneCountryPickerDropdownButton = ({
  value,
  onChange,
  onCountrySelect,
}: {
  value: string;
  onChange: (countryCode: string) => void;
  onCountrySelect: () => void;
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
    onCountrySelect();
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
        leftIcon={<EarthIcon className="size-4" />}
        selectedIcon={
          selectedCountry && <selectedCountry.Flag className="w-5 h-5" />
        }
        className="w-[70px] rounded-l-lg rounded-r-none focus:outline-none border-0 border-input focus-visible:ring-0 shadow-none focus-visible:ring-offset-0"
      ></SelectTrigger>
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
              icon={<Flag className="w-r h-4" />}
            >{`${countryName} (+${callingCode})`}</SelectItem>
          ),
        )}
      </SelectContent>
    </Select>
  );
};

export interface PhoneInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange"
  > {
  value: string;
  onChange: (value: E164Number) => void;
}

const SnapPhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, placeholder, value, onChange, autoFocus, ...props }, ref) => {
    const handleCountrySelect = React.useCallback(() => {
      if (ref && "current" in ref && ref.current) {
        ref.current.focus();
      }
    }, [ref]);

    return (
      <div
        className={cn(
          "mt-1 flex items-center rounded-lg border border-input ring-offset-background focus-within:ring-offset-background focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-background transition duration-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:bg-transparent hover:bg-muted hover:border-transparent",
          props.disabled
            ? "opacity-50 cursor-not-allowed text-muted-foreground"
            : "",
          className,
        )}
      >
        <PhoneInput
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoFocus={autoFocus}
          international={true}
          withCountryCallingCode={true}
          inputComponent={PhoneInputComponent}
          countrySelectComponent={(props) => (
            <PhoneCountryPickerDropdownButton
              {...props}
              onCountrySelect={handleCountrySelect}
            />
          )}
          className={cn("contents", className)}
          {...props}
        />
      </div>
    );
  },
);

SnapPhoneInput.displayName = "SnapPhoneInput";

export { SnapPhoneInput };
