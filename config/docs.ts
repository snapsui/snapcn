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
          title: "React.js",
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
          label: ".",
        },
        {
          title: "URL Input",
          href: `/docs/snapui/snap-url-input`,
          items: [],
          label: ".",
        },
        {
          title: "Amount Input",
          href: `/docs/snapui/snap-amount-input`,
          items: [],
          label: ".",
        },
        {
          title: "TextArea",
          href: `/docs/snapui/snap-textarea`,
          items: [],
          label: ".",
        },
        {
          title: "Select",
          href: `/docs/snapui/snap-select`,
          items: [],
          label: "",
        },
        {
          title: "Float Button",
          href: `/docs/snapui/snap-float-button`,
          items: [],
          label: "",
        },
      ],
    },
    {
      title: "Components",
      // items: [
      //   {
      //     title: "Marquee",
      //     href: `/docs/components/marquee`,
      //     items: [],
      //     label: "",
      //   },
      // ],
    },
  ],
};
