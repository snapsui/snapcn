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
    {
      title: "Mobile",
      href: "/mobile",
      label: "soon",
      disabled: true,
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
          title: "Rating Input",
          href: `/docs/snapui/snap-rating-input`,
          items: [],
          label: "",
        },
        {
          title: "Address Input",
          href: `/docs/snapui/snap-address-input`,
          items: [],
          label: "",
        },
        {
          title: "Select",
          href: `/docs/snapui/snap-select`,
          items: [],
          label: "",
        },
        {
          title: "Button",
          href: `/docs/snapui/snap-button`,
          items: [],
          label: "",
        },
        {
          title: "Switch Tab",
          href: `/docs/snapui/snap-switch-tab`,
          items: [],
          label: "soon",
          disabled: true,
        },
        {
          title: "Tooltip",
          href: `/docs/snapui/snap-tooltip`,
          items: [],
          label: "soon",
          disabled: true,
        },
        {
          title: "File Upload",
          href: `/docs/snapui/snap-tooltip`,
          items: [],
          label: "soon",
          disabled: true,
        },
        {
          title: "Slider",
          href: `/docs/snapui/snap-tooltip`,
          items: [],
          label: "soon",
          disabled: true,
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Pulse Spin Button",
          href: `/docs/components/snap-pulse-spin-button`,
          items: [],
          label: "New",
        },
        {
          title: "Float Button",
          href: `/docs/components/snap-float-button`,
          items: [],
          label: "",
        },
      ],
    },
    {
      title: "Blocks",
      items: [
        {
          title: "Name Footer",
          href: `/docs/blocks/snap-name-footer`,
          items: [],
          label: "New",
        },
      ],
    },
  ],
};
