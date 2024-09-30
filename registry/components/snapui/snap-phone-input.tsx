"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import * as Flags from "country-flag-icons/react/3x2";

import { cn } from "@/lib/utils";

import "react-phone-number-input/style.css";

import { hasFlag } from "country-flag-icons";
import {
  CountryCallingCode,
  E164Number,
  getCountries,
  getCountryCallingCode,
} from "libphonenumber-js";
import { EarthIcon, SearchIcon } from "lucide-react";
import PhoneInput from "react-phone-number-input";

import { Input, SnapInput } from "./snap-input";
import { SelectContent, SelectItem, SelectTrigger } from "./snap-select";

const Select = SelectPrimitive.Root;

const PhoneInputComponent = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      className="rounded-r-lg rounded-l-none border-l-0"
      placeholder="Enter phone number..."
      {...props}
    />
  );
});

const useCountries = () => {
  return React.useMemo(() => {
    const regionNamesInEnglish = new Intl.DisplayNames(["en"], {
      type: "region",
    });
    const countryCodes = getCountries();

    return countryCodes.reduce(
      (result, countryCode) => {
        const countryName = regionNamesInEnglish.of(countryCode);
        if (!countryName || !hasFlag(countryCode)) return result;

        result.push({
          countryCode,
          countryName,
          callingCode: getCountryCallingCode(countryCode),
          Flag: Flags[countryCode],
        });

        return result;
      },
      [] as Array<{
        countryCode: string;
        countryName: string;
        callingCode: CountryCallingCode;
        Flag: Flags.FlagComponent;
      }>,
    );
  }, []);
};

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
        leftIcon={<EarthIcon className="w-4 h-4" />}
        selectedIcon={
          selectedCountry && <selectedCountry.Flag className="w-5 h-4" />
        }
        className="w-[70px] rounded-l-lg rounded-r-none"
      ></SelectTrigger>
      <SelectContent>
        <div className="-top-1 px-2 pb-1.5 sticky bg-popover z-10 pt-2">
          <SnapInput
            ref={inputRef}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="rounded-md h-8"
            leftIcon={<SearchIcon className="w-4 h-4" />}
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
  ({ className, placeholder, value, onChange, autoFocus, ...props }) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleCountrySelect = React.useCallback(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, [value]);

    return (
      <div className="flex rounded-lg bg-background">
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
