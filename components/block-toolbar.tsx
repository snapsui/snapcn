"use client";

import * as React from "react";
import { Monitor, Smartphone, Tablet } from "lucide-react";
import { ImperativePanelHandle } from "react-resizable-panels";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function BlockToolbar({
  resizablePanelRef,
}: {
  resizablePanelRef: React.RefObject<ImperativePanelHandle>;
}) {
  return (
    <div className="flex items-center gap-2 md:gap-4">
      <div className="ml-auto hidden items-center gap-2 md:flex md:pr-[14px]">
        <div className="hidden h-10 items-center gap-1.5 rounded-md border p-[4px] shadow-none md:flex">
          <ToggleGroup
            type="single"
            defaultValue="100"
            onValueChange={(value: any) => {
              if (resizablePanelRef.current) {
                resizablePanelRef.current.resize(parseInt(value));
              }
            }}
          >
            <ToggleGroupItem
              value="100"
              className="h-[30px] w-[30px] rounded-sm p-0"
              title="Desktop"
            >
              <Monitor className="size-5" />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="60"
              className="h-[30px] w-[30px] rounded-sm p-0"
              title="Tablet"
            >
              <Tablet className="size-5" />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="30"
              className="h-[30px] w-[30px] rounded-sm p-0"
              title="Mobile"
            >
              <Smartphone className="size-5" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </div>
  );
}
