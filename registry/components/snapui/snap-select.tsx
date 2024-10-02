"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronsUpDown, SearchIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { SnapInput } from "./snap-input";

const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;

export const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
    leftIcon: React.ReactNode;
    selectedIcon?: React.ReactNode;
  }
>(({ className, children, leftIcon, selectedIcon, ...props }, ref) => {
  return (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn(
        "focus-visible:bg-transparent hover:bg-muted hover:border-transparent transition duration-300 flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2 mr-2">
        {selectedIcon ? (
          <span>{selectedIcon}</span>
        ) : (
          leftIcon && <span>{leftIcon}</span>
        )}
        {children}
      </div>
      <SelectPrimitive.Icon asChild>
        <ChevronsUpDown className="h-4 w-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

export const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-80 min-w-[8rem] overflow-hidden rounded-lg border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & {
    icon?: React.ReactNode;
  }
>(({ className, children, icon, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    {icon && <span className="mr-2">{icon}</span>}{" "}
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SnapSelect = ({
  placeholder,
  items,
  isSearch,
  value,
  leftIcon,
  ...props
}: any) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const selectedItem = items.find((item: any) => item.value === value);
  const filteredItems = React.useMemo(
    () =>
      items.filter((item: any) =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    [searchQuery, items],
  );

  React.useEffect(() => {
    if (isSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearch]);

  return (
    <Select value={value} {...props}>
      <SelectTrigger
        className="w-[250px]"
        leftIcon={leftIcon}
        selectedIcon={selectedItem?.icon}
      >
        {selectedItem && <SelectValue>{selectedItem.label}</SelectValue>}
        {!selectedItem && <SelectValue placeholder={placeholder} />}
      </SelectTrigger>
      <SelectContent>
        {isSearch && (
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
        )}
        {filteredItems.length > 0 ? (
          filteredItems.map((item: any) => (
            <SelectItem key={item.value} value={item.value} icon={item.icon}>
              {item.label}
            </SelectItem>
          ))
        ) : (
          <div className="p-2 text-sm">No options found</div>
        )}
      </SelectContent>
    </Select>
  );
};

export { SnapSelect };
