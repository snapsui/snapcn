import { MainNavItem, SidebarNavItem } from "@/types";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "UI",
      href: "/snapui",
    },
    {
      title: "Components",
      href: "/components",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [
            {
              title: "Next.js",
              href: `/docs/installation/nextjs`,
              items: [],
            },
            {
              title: "React.js",
              href: `/docs/installation/react`,
              items: [],
            },
          ],
        },
        {
          title: "CLI",
          href: "/docs/cli",
          items: [],
        },
      ],
    },
    {
      title: "Installation",
      items: [
        {
          title: "Next.js",
          href: "/docs/installation/nextjs",
          items: [],
        },
        {
          title: "Vite",
          href: "/docs/installation/vite",
          items: [],
        },
        {
          title: "Astro",
          href: "/docs/installation/astro",
          items: [],
        },
        {
          title: "Remix",
          href: "/docs/installation/remix",
          items: [],
        },
        {
          title: "Laravel",
          href: "/docs/installation/laravel",
          items: [],
        },
        {
          title: "Gatsby",
          href: "/docs/installation/gatsby",
          items: [],
        },
        {
          title: "React.js / Manual",
          href: "/docs/installation/react",
          items: [],
        },
      ],
    },
    {
      title: "Snap UI",
      items: [
        {
          title: "Input",
          href: `/docs/snapui/snap-input`,
          items: [],
          label: "",
        },
        {
          title: "Phone Input",
          href: `/docs/snapui/snap-phone-input`,
          items: [],
          label: "",
        },
        {
          title: "URL Input",
          href: `/docs/snapui/snap-url-input`,
          items: [],
          label: "",
        },
        {
          title: "Amount Input",
          href: `/docs/snapui/snap-amount-input`,
          items: [],
          label: "",
        },
        {
          title: "TextArea",
          href: `/docs/snapui/snap-textarea`,
          items: [],
          label: "",
        },
        {
          title: "Select",
          href: `/docs/snapui/snap-select`,
          items: [],
          label: "",
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Float Button",
          href: `/docs/components/snap-float-button`,
          items: [],
          label: "",
        },
      ],
    },
  ],
};
