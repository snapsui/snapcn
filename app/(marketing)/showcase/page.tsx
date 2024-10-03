import { allShowcases } from "contentlayer/generated";

import { ShowcaseCard } from "@/components/sections/showcase";

export default async function Page() {
  return (
    <article className="container py-14 max-w-[120ch]">
      <h2 className="mb-2 text-center text-5xl font-bold leading-[1.2] tracking-tighter text-foreground">
        Showcase
      </h2>
      <h3 className="mx-auto mb-8 text-balance text-center text-lg font-medium tracking-tight text-foreground/80">
        Companies choose Snap UI to build their landing pages.
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"></div>
    </article>
  );
}
