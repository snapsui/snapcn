# Snap UI

### Introduction

Snap UI is a customizable component library designed to work seamlessly with Tailwind CSS and can easily integrate with other libraries like `shadcn-ui`. It offers a simple way to add powerful, pre-designed components to your project, along with animations and utilities, while keeping your codebase minimal and maintainable.

## Usage

Initialize your project with the `init` command to set up necessary dependencies and configurations.

Running the `init` command installs essential packages (`framer-motion`), adds the `cn` utility, sets up the `tailwind.config.js`, file, and applies CSS variables for the project.

```bash
npx shadcn@latest init
```

To make Snap UI work, simply add the following two lines in your `components.json`:

```diff
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
+   "ui": "@/components/ui",
+   "snapui": "@/components/snapui"
  }
}
```

## Adding Components

To add components to your project, use the `add` command.

This command adds the specified component and installs any necessary dependencies.

```bash
npx snapcn add [component]
```

To install all available components at once, you can use the `--all` option:

```bash
npx snapcn add --all
```

If you want to install example components or demos from the website, use the `--exmaple` flag:

```bash
npx snapcn add --example
```

Running the command without any arguments will display a list of all available components:

```bash

npx snapcn add
```

## shadcn-ui Integration

You can also use the Snap UI CLI to select and install components from `shadcn-ui`:

```bash
npx snapcn add --shadcn button
```

Or, to install all shadcn-ui components, use:

```bash
npx snapcn add --shadcn --all
```

## Customization

Snap UI components are designed to be flexible. You can extend or override styles using Tailwind CSS or custom CSS to fit your project’s design requirements. You can also modify the component behavior with your own logic.
