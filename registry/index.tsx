import * as React from "react";

import { Registry } from "@/registry/schema";

const ui: Registry = {
  "snap-input": {
    name: "snap-input",
    type: "components:snapui",
    files: ["registry/components/snapui/input.tsx"],
  },
  "snap-amount-input": {
    name: "snap-amount-input",
    type: "components:snapui",
    registryDependencies: ["snap-input", "snap-select"],
    files: ["registry/components/snapui/amount-input.tsx"],
  },
  "snap-url-input": {
    name: "snap-url-input",
    type: "components:snapui",
    registryDependencies: ["snap-input"],
    files: ["registry/components/snapui/url-input.tsx"],
  },
  "snap-phone-input": {
    name: "snap-phone-input",
    type: "components:snapui",
    registryDependencies: ["snap-input", "snap-select"],
    dependencies: [
      "@radix-ui/react-select",
      "country-flag-icons",
      "react-phone-number-input",
      "libphonenumber-js",
    ],
    files: ["registry/components/snapui/phone-input.tsx"],
  },
  "snap-rating-input": {
    name: "snap-rating-input",
    type: "components:snapui",
    dependencies: [],
    files: ["registry/components/snapui/rating-input.tsx"],
  },
  "snap-address-input": {
    name: "snap-address-input",
    type: "components:snapui",
    dependencies: [
      "@radix-ui/react-select",
      "country-flag-icons",
      "libphonenumber-js",
    ],
    registryDependencies: ["snap-input", "snap-select", "use-country"],
    files: ["registry/components/snapui/address-input.tsx"],
  },
  "snap-select": {
    name: "snap-select",
    type: "components:snapui",
    dependencies: ["@radix-ui/react-select"],
    registryDependencies: ["snap-input"],
    files: ["registry/components/snapui/select.tsx"],
  },
  "snap-button": {
    name: "snap-button",
    type: "components:snapui",
    dependencies: [
      "@radix-ui/react-slot",
      "class-variance-authority",
      "framer-motion",
    ],
    files: ["registry/components/snapui/button.tsx"],
  },
  "snap-float-button": {
    name: "snap-float-button",
    type: "components:widgets",
    files: ["registry/components/widgets/float-button.tsx"],
  },
  "snap-pulse-spin-button": {
    name: "snap-pulse-spin-button",
    type: "components:widgets",
    files: ["registry/components/widgets/pulse-spin-button.tsx"],
  },
};

const example: Registry = {
  "snap-name-footer": {
    name: "snap-name-footer",
    type: "components:blocks",
    files: ["registry/components/blocks/name-footer.tsx"],
    component: React.lazy(
      () => import("@/registry/components/blocks/name-footer"),
    ),
  },
  "snap-input-demo-1": {
    name: "snap-input-demo-1",
    type: "components:example",
    registryDependencies: [],
    files: ["registry/components/example/input-demo-1.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/input-demo-1"),
    ),
  },
  "snap-input-demo-2": {
    name: "snap-input-demo-2",
    type: "components:example",
    registryDependencies: [],
    files: ["registry/components/example/input-demo-2.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/input-demo-2"),
    ),
  },
  "snap-amount-input-demo": {
    name: "snap-amount-input-demo",
    type: "components:example",
    registryDependencies: [],
    files: ["registry/components/example/amount-input-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/amount-input-demo"),
    ),
  },
  "snap-url-input-demo": {
    name: "snap-url-input-demo",
    type: "components:example",
    registryDependencies: [],
    files: ["registry/components/example/url-input-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/url-input-demo"),
    ),
  },
  "snap-phone-input-demo": {
    name: "snap-phone-input-demo",
    type: "components:example",
    registryDependencies: [],
    files: ["registry/components/example/phone-input-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/phone-input-demo"),
    ),
  },
  "snap-rating-input-demo": {
    name: "snap-rating-input-demo",
    type: "components:example",
    registryDependencies: [],
    files: ["registry/components/example/rating-input-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/rating-input-demo"),
    ),
  },
  "snap-address-input-demo": {
    name: "snap-address-input-demo",
    type: "components:example",
    registryDependencies: [],
    files: ["registry/components/example/address-input-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/address-input-demo"),
    ),
  },
  "snap-select-demo": {
    name: "snap-select-demo",
    type: "components:example",
    registryDependencies: [],
    files: ["registry/components/example/select-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/select-demo"),
    ),
  },
  "snap-button-demo": {
    name: "snap-button-demo",
    type: "components:example",
    registryDependencies: [],
    files: ["registry/components/example/button-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/button-demo"),
    ),
  },
  "snap-float-button-demo": {
    name: "snap-float-button-demo",
    type: "components:example",
    registryDependencies: [],
    files: ["registry/components/example/float-button-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/float-button-demo"),
    ),
  },
  "snap-pulse-spin-button-demo": {
    name: "snap-pulse-spin-button-demo",
    type: "components:example",
    registryDependencies: [],
    files: ["registry/components/example/pulse-spin-button-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/pulse-spin-button-demo"),
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
