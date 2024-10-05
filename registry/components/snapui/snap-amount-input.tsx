"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { CurrencyIcon, SearchIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Input, SnapInput } from "./snap-input";
import { SelectContent, SelectItem, SelectTrigger } from "./snap-select";

const Select = SelectPrimitive.Root;

const useCurrencies = () => {
  return React.useMemo(() => {
    return [
      {
        code: "USD",
        name: "US Dollar",
        symbol: "$",
        icon: "http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg",
      },
      {
        code: "EUR",
        name: "Euro",
        symbol: "€",
        icon: "http://purecatamphetamine.github.io/country-flag-icons/3x2/EU.svg",
      },
      {
        code: "GBP",
        name: "British Pound",
        symbol: "£",
        icon: "http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg",
      },
    ];
  }, []);
};

const CurrencyPickerDropdownButton = ({
  value,
  onCurrencySelect,
  disabled,
}: {
  value: string;
  onCurrencySelect: (currencyCode: string) => void;
  disabled?: boolean;
}) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [selectedCurrency, setSelectedCurrency] = React.useState<{
    code: string;
    name: string;
    symbol: string;
    icon: string;
  }>();

  const currencies = useCurrencies();

  React.useEffect(() => {
    const currency = currencies.find(({ code }) => code === value);
    if (currency) {
      setSelectedCurrency(currency);
    }
  }, [currencies, value]);

  const handleClick = (currencyCode: string) => {
    const currency = currencies.find(({ code }) => code === currencyCode);
    setSelectedCurrency(currency);
    onCurrencySelect(currencyCode);
  };

  const filteredItems = React.useMemo(
    () =>
      currencies.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.code.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    [searchQuery, currencies],
  );

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <Select
      value={value}
      onValueChange={(value: string) => handleClick(value)}
      disabled={disabled}
    >
      <SelectTrigger
        leftIcon={<CurrencyIcon className="size-4" />}
        selectedIcon={
          selectedCurrency && (
            <img
              className="size-4 rounded-full object-cover"
              src={selectedCurrency.icon}
              alt={selectedCurrency.name}
            />
          )
        }
        className={cn(
          "w-[65px] rounded-lg focus:ring-0 focus:ring-offset-0 [&>span]:line-clamp-0 border-0 border-r rounded-r-none rounded-l-lg",
        )}
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
        {filteredItems.map(({ code, name, icon }) => (
          <SelectItem
            value={code}
            key={code}
            icon={
              <img
                className="size-4 rounded-full object-cover"
                src={icon}
                alt={icon}
              />
            }
          >{`${name} (${code})`}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

const CurrencyInputComponent = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & { leftIcon: string }
>(({ className, leftIcon, ...props }, ref) => {
  return (
    <div className="relative flex items-center">
      {leftIcon && (
        <span className="absolute left-3 flex items-center pointer-events-none text-primary">
          {leftIcon}
        </span>
      )}
      <Input
        ref={ref}
        className={cn("", leftIcon ? "pl-8" : "", className)}
        {...props}
      />
    </div>
  );
});

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onCurrencyChange: (value: string) => void;
  codeValue: string;
}

const SnapAmountInput = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      leftIcon,
      disabled,
      codeValue,
      onCurrencyChange,
      ...props
    },
    ref,
  ) => {
    const [selectedLeftIcon, setSelectedLeftIcon] = React.useState<string>("");
    const currencies = useCurrencies();

    React.useEffect(() => {
      const currency = currencies.find(({ code }) => code === codeValue);
      if (currency) {
        onCurrencyChange(currency.code);
        setSelectedLeftIcon(currency.symbol);
      }
    }, [codeValue]);

    return (
      <div
        className={cn(
          "flex items-center rounded-lg border border-input ring-offset-background focus-within:ring-offset-background focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-background transition duration-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:bg-transparent hover:bg-muted hover:border-transparent",
          disabled ? "opacity-50 cursor-not-allowed text-muted-foreground" : "",
        )}
      >
        <CurrencyPickerDropdownButton
          value={codeValue}
          onCurrencySelect={onCurrencyChange}
          disabled={disabled}
        />
        <CurrencyInputComponent
          ref={ref}
          disabled={disabled}
          className={cn(
            "flex-1 block w-full px-3 py-2 focus:outline-none border-none rounded-none rounded-r-lg focus-visible:ring-0 shadow-none focus-visible:ring-offset-0",
            selectedLeftIcon ? "pl-8" : "",
            className,
          )}
          type="number"
          leftIcon={selectedLeftIcon}
          {...props}
        />
      </div>
    );
  },
);

SnapAmountInput.displayName = "SnapAmountInput";

export { SnapAmountInput };
