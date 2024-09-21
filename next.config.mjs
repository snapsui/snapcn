import { createContentlayerPlugin } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === "production" ? "standalone" : undefined,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
    turbo: {
      resolveExtensions: [
        ".mdx",
        ".tsx",
        ".ts",
        ".jsx",
        ".js",
        ".mjs",
        ".json",
      ],
    },
  },
  images: {
    domains: ["localhost", "cdn.snapui.design"],
  },
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/VWH6J2Hupz",
        permanent: true,
      },
      {
        source: "/components",
        destination: "/docs/components/snap-input",
        permanent: true,
      },
      {
        source: "/snapui",
        destination: "/docs/snapui/snap-input",
        permanent: true,
      },
      {
        source: "/components/:path*",
        destination: "/docs/components/:path*",
        permanent: true,
      },
      {
        source: "/snapui/:path*",
        destination: "/docs/snapui/:path*",
        permanent: true,
      },
      {
        source: "/docs/components",
        destination: "/docs/components/snap-input",
        permanent: true,
      },
      {
        source: "/docs/snapui",
        destination: "/docs/snapui/snap-input",
        permanent: true,
      },
    ];
  },
};

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

export default withContentlayer(nextConfig);
