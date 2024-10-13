import { Clipboard, Loader, X } from "lucide-react";

import { SnapButton } from "@/registry/components/snapui/button";

export default function SnapButtonDemo() {
  return (
    <div className="flex gap-8 flex-col flex-wrap justify-center">
      <div className="flex gap-8">
        <SnapButton>Default</SnapButton>
        <SnapButton variant="outline">Outline</SnapButton>
        <SnapButton variant="soft">Lighter</SnapButton>
        <SnapButton variant="ghost">Ghost</SnapButton>
        <SnapButton variant="link">Link</SnapButton>
      </div>
      <div className="flex gap-8">
        <SnapButton color="error">Default</SnapButton>
        <SnapButton variant="outline" color="error">
          Outline
        </SnapButton>
        <SnapButton variant="soft" color="error">
          Lighter
        </SnapButton>
        <SnapButton variant="ghost" color="error">
          Ghost
        </SnapButton>
        <SnapButton variant="link" color="error">
          Link
        </SnapButton>
      </div>
      <div className="flex gap-8">
        <SnapButton size="icon">
          <Clipboard className="size-4" />
        </SnapButton>
        <SnapButton variant="outline" size="icon" shape="pill">
          <X className="size-4" />
        </SnapButton>
        <SnapButton variant="soft" size="icon">
          <Clipboard className="size-4" />
        </SnapButton>
        <SnapButton variant="ghost" size="icon">
          <Clipboard className="size-4" />
        </SnapButton>
      </div>
      <div className="flex gap-8">
        <SnapButton size="sm">Default</SnapButton>
        <SnapButton variant="outline" size="sm" shape="square">
          Outline
        </SnapButton>
        <SnapButton variant="soft" size="sm" shape="pill">
          Lighter
        </SnapButton>
        <SnapButton variant="ghost" size="sm">
          Ghost
        </SnapButton>
        <SnapButton variant="link" size="sm">
          Link
        </SnapButton>
      </div>
      <div className="flex gap-8">
        <SnapButton disabled>
          <Loader className="size-4 animate-spin" />
          Default
        </SnapButton>
        <SnapButton variant="outline">
          <Clipboard className="size-4" /> Outline
        </SnapButton>
      </div>
    </div>
  );
}
