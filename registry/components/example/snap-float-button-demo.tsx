import React from "react";
import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  NotionLogoIcon,
  OpacityIcon,
} from "@radix-ui/react-icons";

import {
  SnapFloatButton,
  SnapFloatButtonItem,
} from "@/components/snapui/snap-float-button";

export default function SnapFloatButtonDemo() {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden bg-background">
      <SnapFloatButton>
        <SnapFloatButtonItem Icon={GitHubLogoIcon} onClick={() => {}} />
        <SnapFloatButtonItem Icon={DiscordLogoIcon} onClick={() => {}} />
        <SnapFloatButtonItem Icon={NotionLogoIcon} onClick={() => {}} />
        <SnapFloatButtonItem Icon={OpacityIcon} onClick={() => {}} />
      </SnapFloatButton>
    </div>
  );
}
