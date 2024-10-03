import * as React from "react";

import { Registry } from "@/registry/schema";

const ui: Registry = {
  "snap-input": {
    name: "snap-input",
    type: "components:snapui",
    files: ["registry/components/snapui/snap-input.tsx"],
  },
  "snap-amount-input": {
    name: "snap-amount-input",
    type: "components:snapui",
    registryDependencies: ["shadcn:snap-input", "shadcn:snap-select"],
    files: ["registry/components/snapui/snap-amount-input.tsx"],
  },
  "snap-url-input": {
    name: "snap-url-input",
    type: "components:snapui",
    registryDependencies: ["shadcn:snap-input"],
    files: ["registry/components/snapui/snap-url-input.tsx"],
  },
  "snap-phone-input": {
    name: "snap-phone-input",
    type: "components:snapui",
    registryDependencies: ["shadcn:snap-input", "shadcn:snap-select"],
    dependencies: [
      "@radix-ui/react-select",
      "country-flag-icons",
      "react-phone-number-input",
      "libphonenumber-js",
    ],
    files: ["registry/components/snapui/snap-phone-input.tsx"],
  },
  "snap-textarea": {
    name: "snap-textarea",
    type: "components:snapui",
    files: ["registry/components/snapui/snap-textarea.tsx"],
  },
  "snap-select": {
    name: "snap-select",
    type: "components:snapui",
    dependencies: ["@radix-ui/react-select"],
    registryDependencies: ["shadcn:snap-input"],
    files: ["registry/components/snapui/snap-select.tsx"],
  },
  "snap-button": {
    name: "snap-button",
    type: "components:snapui",
    dependencies: ["@radix-ui/react-slot", "class-variance-authority"],
    files: ["registry/components/snapui/snap-button.tsx"],
  },
  "snap-float-button": {
    name: "snap-float-button",
    type: "components:snapui",
    files: ["registry/components/snapui/snap-float-button.tsx"],
  },
  "shimmer-button": {
    name: "shimmer-button",
    type: "components:magicui",
    files: ["registry/components/magicui/shimmer-button.tsx"],
  },
  "tweet-card": {
    name: "tweet-card",
    type: "components:magicui",
    dependencies: ["react-tweet"],
    files: ["registry/components/magicui/tweet-card.tsx"],
  },
  "client-tweet-card": {
    name: "client-tweet-card",
    type: "components:magicui",
    dependencies: ["react-tweet"],
    files: ["registry/components/magicui/client-tweet-card.tsx"],
  },
  "bento-grid": {
    name: "bento-grid",
    type: "components:magicui",
    registryDependencies: ["shadcn:button"],
    files: ["registry/components/magicui/bento-grid.tsx"],
  },
  particles: {
    name: "particles",
    type: "components:magicui",
    files: ["registry/components/magicui/particles.tsx"],
  },
  "number-ticker": {
    name: "number-ticker",
    type: "components:magicui",
    files: ["registry/components/magicui/number-ticker.tsx"],
  },
  "animated-list": {
    name: "animated-list",
    type: "components:magicui",
    files: ["registry/components/magicui/animated-list.tsx"],
  },
  "animated-shiny-text": {
    name: "animated-shiny-text",
    type: "components:magicui",
    files: ["registry/components/magicui/animated-shiny-text.tsx"],
  },
  "border-beam": {
    name: "border-beam",
    type: "components:magicui",
    files: ["registry/components/magicui/border-beam.tsx"],
  },
  "animated-beam": {
    name: "animated-beam",
    type: "components:magicui",
    files: ["registry/components/magicui/animated-beam.tsx"],
  },
  "hyper-text": {
    name: "hyper-text",
    type: "components:magicui",
    files: ["registry/components/magicui/hyper-text.tsx"],
  },
  "animated-gradient-text": {
    name: "animated-gradient-text",
    type: "components:magicui",
    files: ["registry/components/magicui/animated-gradient-text.tsx"],
  },
  "orbiting-circles": {
    name: "orbiting-circles",
    type: "components:magicui",
    files: ["registry/components/magicui/orbiting-circles.tsx"],
  },
  dock: {
    name: "dock",
    type: "components:magicui",
    files: ["registry/components/magicui/dock.tsx"],
  },
  "word-rotate": {
    name: "word-rotate",
    type: "components:magicui",
    files: ["registry/components/magicui/word-rotate.tsx"],
  },
  "avatar-circles": {
    name: "avatar-circles",
    type: "components:magicui",
    files: ["registry/components/magicui/avatar-circles.tsx"],
  },
  "typing-animation": {
    name: "typing-animation",
    type: "components:magicui",
    files: ["registry/components/magicui/typing-animation.tsx"],
  },
  "sparkles-text": {
    name: "sparkles-text",
    type: "components:magicui",
    files: ["registry/components/magicui/sparkles-text.tsx"],
  },
  "icon-cloud": {
    name: "icon-cloud",
    type: "components:magicui",
    dependencies: ["next-themes", "react-icon-cloud"],
    files: ["registry/components/magicui/icon-cloud.tsx"],
  },
  "gradual-spacing": {
    name: "gradual-spacing",
    type: "components:magicui",
    files: ["registry/components/magicui/gradual-spacing.tsx"],
  },
  "scroll-based-velocity": {
    name: "scroll-based-velocity",
    type: "components:magicui",
    files: ["registry/components/magicui/scroll-based-velocity.tsx"],
  },
};

const example: Registry = {
  "snap-input-demo-1": {
    name: "snap-input-demo-1",
    type: "components:example",
    registryDependencies: [],
    files: ["registry/components/example/snap-input-demo-1.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/snap-input-demo-1"),
    ),
  },
  "snap-input-demo-2": {
    name: "snap-input-demo-2",
    type: "components:example",
    registryDependencies: [],
    files: ["registry/components/example/snap-input-demo-2.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/snap-input-demo-2"),
    ),
  },
  "snap-amount-input-demo": {
    name: "snap-amount-input-demo",
    type: "components:example",
    registryDependencies: [],
    files: ["registry/components/example/snap-amount-input-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/snap-amount-input-demo"),
    ),
  },
  "snap-url-input-demo": {
    name: "snap-url-input-demo",
    type: "components:example",
    registryDependencies: [],
    files: ["registry/components/example/snap-url-input-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/snap-url-input-demo"),
    ),
  },
  "snap-phone-input-demo": {
    name: "snap-phone-input-demo",
    type: "components:example",
    registryDependencies: [],
    files: ["registry/components/example/snap-phone-input-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/snap-phone-input-demo"),
    ),
  },
  "snap-textarea-demo": {
    name: "snap-textarea-demo",
    type: "components:example",
    registryDependencies: [],
    files: ["registry/components/example/snap-textarea-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/snap-textarea-demo"),
    ),
  },
  "snap-select-demo": {
    name: "snap-select-demo",
    type: "components:example",
    registryDependencies: [],
    files: ["registry/components/example/snap-select-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/snap-select-demo"),
    ),
  },
  "snap-button-demo": {
    name: "snap-button-demo",
    type: "components:example",
    registryDependencies: [],
    files: ["registry/components/example/snap-button-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/snap-button-demo"),
    ),
  },
  "snap-float-button-demo": {
    name: "snap-float-button-demo",
    type: "components:example",
    registryDependencies: [],
    files: ["registry/components/example/snap-float-button-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/snap-float-button-demo"),
    ),
  },
  "tweet-card-demo": {
    name: "tweet-card-demo",
    type: "components:example",
    registryDependencies: ["tweet-card"],
    files: ["registry/components/example/tweet-card-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/tweet-card-demo"),
    ),
  },
  "tweet-card-images": {
    name: "tweet-card-images",
    type: "components:example",
    registryDependencies: ["tweet-card"],
    files: ["registry/components/example/tweet-card-images.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/tweet-card-images"),
    ),
  },
  "tweet-card-meta-preview": {
    name: "tweet-card-meta-preview",
    type: "components:example",
    registryDependencies: ["tweet-card"],
    files: ["registry/components/example/tweet-card-meta-preview.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/tweet-card-meta-preview"),
    ),
  },
  "shimmer-button-demo": {
    name: "shimmer-button-demo",
    type: "components:example",
    registryDependencies: ["shimmer-button"],
    files: ["registry/components/example/shimmer-button-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/shimmer-button-demo"),
    ),
  },
  "bento-demo": {
    name: "bento-demo",
    type: "components:example",
    registryDependencies: [
      "bento-grid",
      "marquee",
      "globe",
      "shadcn:command",
      "shadcn:calendar",
    ],
    files: ["registry/components/example/bento-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/bento-demo"),
    ),
  },
  "bento-demo-vertical": {
    name: "bento-demo-vertical",
    type: "components:example",
    registryDependencies: ["bento-grid"],
    files: ["registry/components/example/bento-demo-vertical.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/bento-demo-vertical"),
    ),
  },
  "number-ticker-demo": {
    name: "number-ticker-demo",
    type: "components:example",
    registryDependencies: ["number-ticker"],
    files: ["registry/components/example/number-ticker-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/number-ticker-demo"),
    ),
  },
  "animated-list-demo": {
    name: "animated-list-demo",
    type: "components:example",
    registryDependencies: ["animated-list"],
    files: ["registry/components/example/animated-list-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/animated-list-demo"),
    ),
  },
  "animated-shiny-text-demo": {
    name: "animated-shiny-text-demo",
    type: "components:example",
    registryDependencies: ["animated-shiny-text"],
    files: ["registry/components/example/animated-shiny-text-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/animated-shiny-text-demo"),
    ),
  },
  "particles-demo": {
    name: "particles-demo",
    type: "components:example",
    registryDependencies: ["particles"],
    dependencies: ["next-themes"],
    files: ["registry/components/example/particles-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/particles-demo"),
    ),
  },
  "border-beam-demo": {
    name: "border-beam-demo",
    type: "components:example",
    registryDependencies: ["border-beam"],
    files: ["registry/components/example/border-beam-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/border-beam-demo"),
    ),
  },
  "animated-beam-demo": {
    name: "animated-beam-demo",
    type: "components:example",
    registryDependencies: ["animated-beam"],
    files: ["registry/components/example/animated-beam-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/animated-beam-demo"),
    ),
  },
  "animated-beam-unidirectional": {
    name: "animated-beam-unidirectional",
    type: "components:example",
    registryDependencies: ["animated-beam"],
    files: ["registry/components/example/animated-beam-unidirectional.tsx"],
    component: React.lazy(
      () =>
        import("@/registry/components/example/animated-beam-unidirectional"),
    ),
  },
  "animated-beam-bidirectional": {
    name: "animated-beam-bidirectional",
    type: "components:example",
    registryDependencies: ["animated-beam"],
    files: ["registry/components/example/animated-beam-bidirectional.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/animated-beam-bidirectional"),
    ),
  },
  "animated-beam-multiple-inputs": {
    name: "animated-beam-multiple-inputs",
    type: "components:example",
    registryDependencies: ["animated-beam"],
    files: ["registry/components/example/animated-beam-multiple-inputs.tsx"],
    component: React.lazy(
      () =>
        import("@/registry/components/example/animated-beam-multiple-inputs"),
    ),
  },
  "animated-beam-multiple-outputs": {
    name: "animated-beam-multiple-outputs",
    type: "components:example",
    registryDependencies: ["animated-beam"],
    files: ["registry/components/example/animated-beam-multiple-outputs.tsx"],
    component: React.lazy(
      () =>
        import("@/registry/components/example/animated-beam-multiple-outputs"),
    ),
  },
  "animated-gradient-text-demo": {
    name: "animated-gradient-text-demo",
    type: "components:example",
    registryDependencies: ["animated-gradient-text"],
    dependencies: ["lucide-react"],
    files: ["registry/components/example/animated-gradient-text-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/animated-gradient-text-demo"),
    ),
  },
  "orbiting-circles-demo": {
    name: "orbiting-circles-demo",
    type: "components:example",
    registryDependencies: ["orbiting-circles"],
    files: ["registry/components/example/orbiting-circles-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/orbiting-circles-demo"),
    ),
  },
  "dock-demo": {
    name: "dock-demo",
    type: "components:example",
    registryDependencies: ["dock"],
    files: ["registry/components/example/dock-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/dock-demo"),
    ),
  },
  "dock-demo-2": {
    name: "dock-demo-2",
    type: "components:example",
    registryDependencies: ["dock"],
    files: ["registry/components/example/dock-demo-2.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/dock-demo-2"),
    ),
  },
  "dock-demo-3": {
    name: "dock-demo-3",
    type: "components:example",
    registryDependencies: ["dock"],
    files: ["registry/components/example/dock-demo-3.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/dock-demo-3"),
    ),
  },
  "word-rotate-demo": {
    name: "word-rotate-demo",
    type: "components:example",
    registryDependencies: ["word-rotate"],
    files: ["registry/components/example/word-rotate-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/word-rotate-demo"),
    ),
  },
  "hyper-text-demo": {
    name: "hyper-text-demo",
    type: "components:example",
    registryDependencies: ["hyper-text"],
    files: ["registry/components/example/hyper-text-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/hyper-text-demo"),
    ),
  },
  "avatar-circles-demo": {
    name: "avatar-circles-demo",
    type: "components:example",
    registryDependencies: ["avatar-circles"],
    files: ["registry/components/example/avatar-circles-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/avatar-circles-demo"),
    ),
  },
  "typing-animation-demo": {
    name: "typing-animation-demo",
    type: "components:example",
    registryDependencies: ["typing-animation"],
    files: ["registry/components/example/typing-animation-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/typing-animation-demo"),
    ),
  },
  "scroll-based-velocity-demo": {
    name: "scroll-based-velocity-demo",
    type: "components:example",
    registryDependencies: ["scroll-based-velocity"],
    files: ["registry/components/example/scroll-based-velocity-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/scroll-based-velocity-demo"),
    ),
  },
  "sparkles-text-demo": {
    name: "sparkles-text-demo",
    type: "components:example",
    files: ["registry/components/example/sparkles-text-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/sparkles-text-demo"),
    ),
  },
  "icon-cloud-demo": {
    name: "icon-cloud-demo",
    type: "components:example",
    registryDependencies: ["icon-cloud"],
    files: ["registry/components/example/icon-cloud-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/icon-cloud-demo"),
    ),
  },
  "wavy-dot-pattern-demo": {
    name: "wavy-dot-pattern-demo",
    type: "components:example",
    files: ["registry/components/example/wavy-dot-pattern-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/wavy-dot-pattern-demo"),
    ),
  },
  "gradual-spacing-demo": {
    name: "gradual-spacing-demo",
    type: "components:example",
    files: ["registry/components/example/gradual-spacing-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/gradual-spacing-demo"),
    ),
  },
};

export const registry: Registry = {
  ...ui,
  ...example,
};

const resolvedExamples = Object.entries(example).map(([key, value]) => ({
  ...value,
  component: () => void 0,
}));

const updatedExample: Registry = resolvedExamples.reduce(
  (acc, curr) => ({ ...acc, [curr.name]: curr }),
  {},
);

export const downloadRegistry: Registry = { ...ui, ...updatedExample };

export type ComponentName = keyof (typeof ui & typeof example);
