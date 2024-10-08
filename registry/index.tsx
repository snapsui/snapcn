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
    registryDependencies: ["snapcn:snap-input", "snapcn:snap-select"],
    files: ["registry/components/snapui/snap-amount-input.tsx"],
  },
  "snap-url-input": {
    name: "snap-url-input",
    type: "components:snapui",
    registryDependencies: ["snapcn:snap-input"],
    files: ["registry/components/snapui/snap-url-input.tsx"],
  },
  "snap-phone-input": {
    name: "snap-phone-input",
    type: "components:snapui",
    registryDependencies: ["snapcn:snap-input", "snapcn:snap-select"],
    dependencies: [
      "@radix-ui/react-select",
      "country-flag-icons",
      "react-phone-number-input",
      "libphonenumber-js",
    ],
    files: ["registry/components/snapui/snap-phone-input.tsx"],
  },
  "snap-rating-input": {
    name: "snap-rating-input",
    type: "components:snapui",
    dependencies: [],
    files: ["registry/components/snapui/snap-rating-input.tsx"],
  },
  "snap-address-input": {
    name: "snap-address-input",
    type: "components:snapui",
    dependencies: [
      "@radix-ui/react-select",
      "country-flag-icons",
      "libphonenumber-js",
    ],
    registryDependencies: [
      "snapcn:snap-input",
      "snapcn:snap-select",
      "snapcn:use-country",
    ],
    files: ["registry/components/snapui/snap-address-input.tsx"],
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
    registryDependencies: ["snapcn:snap-input"],
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
    type: "components:widgets",
    files: ["registry/components/widgets/snap-float-button.tsx"],
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
  "snap-rating-input-demo": {
    name: "snap-rating-input-demo",
    type: "components:example",
    registryDependencies: [],
    files: ["registry/components/example/snap-rating-input-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/snap-rating-input-demo"),
    ),
  },
  "snap-address-input-demo": {
    name: "snap-address-input-demo",
    type: "components:example",
    registryDependencies: [],
    files: ["registry/components/example/snap-address-input-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/snap-address-input-demo"),
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
};

const hooks: Registry = {
  "snap-use-country": {
    name: "snap-use-country",
    type: "components:hooks",
    dependencies: ["libphonenumber-js", "country-flag-icons"],
    files: ["registry/components/hooks/use-country.ts"],
  },
};

export const registry: Registry = {
  ...ui,
  ...example,
  ...hooks,
};

const resolvedExamples = Object.entries(example).map(([key, value]) => ({
  ...value,
  component: () => void 0,
}));

const updatedExample: Registry = resolvedExamples.reduce(
  (acc, curr) => ({ ...acc, [curr.name]: curr }),
  {},
);

export const downloadRegistry: Registry = {
  ...ui,
  ...updatedExample,
  ...hooks,
};

export type ComponentName = keyof (typeof ui & typeof example & typeof hooks);
