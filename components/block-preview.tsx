"use client";

import * as React from "react";
import { ImperativePanelHandle } from "react-resizable-panels";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icons } from "@/components/icons";
import { ComponentName, registry } from "@/registry/index";

import { BlockToolbar } from "./block-toolbar";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: ComponentName;
  align?: "center" | "start" | "end";
  preview?: boolean;
}

export function BlockPreview({
  name,
  children,
  className,
  align = "center",
  preview = false,
  ...props
}: ComponentPreviewProps) {
  const ref = React.useRef<ImperativePanelHandle>(null);

  const Codes = React.Children.toArray(children) as React.ReactElement[];
  const Code = Codes[0];

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
      className="relative w-full scroll-m-20 gap-4"
      style={{ "--container-height": 450 } as React.CSSProperties}
      {...props}
    >
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        {!preview && (
          <div className="mb-4 flex items-center justify-between">
            <TabsList className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
              <TabsTrigger
                value="preview"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              >
                Preview
              </TabsTrigger>
              <TabsTrigger
                value="code"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              >
                Code
              </TabsTrigger>
            </TabsList>
            <BlockToolbar resizablePanelRef={ref} />
          </div>
        )}
        <TabsContent value="preview" className="relative rounded-md">
          <React.Suspense
            fallback={
              <div className="flex items-center text-sm text-muted-foreground">
                <Icons.spinner className="mr-2 size-4 animate-spin" />
                Loading...
              </div>
            }
          >
            <ResizablePanelGroup
              direction="horizontal"
              className="relative z-10"
            >
              <ResizablePanel
                ref={ref}
                className="relative aspect-[4/2.5] sm:aspect-square md:aspect-auto rounded-lg border bg-background"
                defaultSize={100}
                minSize={30}
                style={{ overflow: "auto" }}
              >
                <iframe
                  src={`/blocks/${name.replace(/^snap-/, "")}`}
                  height={450}
                  className="chunk-mode relative z-20 hidden w-full bg-background md:block"
                />
                {/* {Preview} */}
              </ResizablePanel>
              <ResizableHandle className="relative hidden w-3 bg-transparent p-0 after:absolute after:right-0 after:top-1/2 after:h-8 after:w-[6px] after:-translate-y-1/2 after:translate-x-[-1px] after:rounded-full after:bg-border after:transition-all after:hover:h-10 sm:block" />
              <ResizablePanel defaultSize={0} minSize={0} />
            </ResizablePanelGroup>
          </React.Suspense>
        </TabsContent>

        <TabsContent value="code" className="relative rounded-md overflow-auto">
          <div className="flex flex-col space-y-4 overflow-auto">
            <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
              {Code}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
