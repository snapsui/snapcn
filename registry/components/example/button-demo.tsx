import { Clipboard, Loader, X } from "lucide-react";

import { SnapButton } from "@/registry/components/snapui/button";

export default function SnapButtonDemo() {
  return (
    <div className="flex gap-8 flex-col flex-wrap justify-center">
      <div className="flex gap-8">
        <SnapButton isAnimated>Default</SnapButton>
        <SnapButton isAnimated variant="outline">
          Outline
        </SnapButton>
        <SnapButton isAnimated variant="soft">
          Lighter
        </SnapButton>
        <SnapButton isAnimated variant="ghost">
          Ghost
        </SnapButton>
        <SnapButton isAnimated variant="link">
          Link
        </SnapButton>
      </div>
      <div className="flex gap-8">
        <SnapButton isAnimated color="error">
          Default
        </SnapButton>
        <SnapButton isAnimated variant="outline" color="error">
          Outline
        </SnapButton>
        <SnapButton isAnimated variant="soft" color="error">
          Lighter
        </SnapButton>
        <SnapButton isAnimated variant="ghost" color="error">
          Ghost
        </SnapButton>
        <SnapButton isAnimated variant="link" color="error">
          Link
        </SnapButton>
      </div>
      <div className="flex gap-8">
        <SnapButton isAnimated size="icon">
          <Clipboard className="size-4" />
        </SnapButton>
        <SnapButton isAnimated variant="outline" size="icon" shape="pill">
          <X className="size-4" />
        </SnapButton>
        <SnapButton isAnimated variant="soft" size="icon">
          <Clipboard className="size-4" />
        </SnapButton>
        <SnapButton isAnimated variant="ghost" size="icon">
          <Clipboard className="size-4" />
        </SnapButton>
      </div>
      <div className="flex gap-8">
        <SnapButton isAnimated size="sm">
          Default
        </SnapButton>
        <SnapButton isAnimated variant="outline" size="sm" shape="square">
          Outline
        </SnapButton>
        <SnapButton isAnimated variant="soft" size="sm" shape="pill">
          Lighter
        </SnapButton>
        <SnapButton isAnimated variant="ghost" size="sm">
          Ghost
        </SnapButton>
        <SnapButton isAnimated variant="link" size="sm">
          Link
        </SnapButton>
      </div>
      <div className="flex gap-8">
        <SnapButton isAnimated disabled>
          <Loader className="size-4 animate-spin" />
          Default
        </SnapButton>
        <SnapButton isAnimated variant="outline">
          <Clipboard className="size-4" /> Outline
        </SnapButton>
      </div>
    </div>
  );
}
