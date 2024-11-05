"use client";

import * as React from "react";

import { ComponentName, registry } from "@/registry/index";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: ComponentName;
  align?: "center" | "start" | "end";
  preview?: boolean;
}

export function BlockCodePreview({
  name,
  children,
  className,
  align = "center",
  preview = false,
  ...props
}: ComponentPreviewProps) {
  const Preview = React.useMemo(() => {
    const Component = registry[name]?.component;

    if (!Component) {
      console.error(`Component with name "${name}" not found in registry.`);
      return (
        <p className="text-sm text-muted-foreground">
          Component{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {name}
          </code>{" "}
          not found in registry.
        </p>
      );
    }

    return <Component />;
  }, [name]);

  return (
    <div
      id={name}
      className="relative w-full scroll-m-20"
      style={{ "--container-height": 450 } as React.CSSProperties}
      {...props}
    >
      {Preview}
    </div>
  );
}
