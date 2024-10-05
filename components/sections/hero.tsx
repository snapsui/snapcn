import { CSSProperties } from "react";
import Link from "next/link";
import { allDocs } from "@/.contentlayer/generated";
import { compareDesc } from "date-fns";
import { ChevronRight } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

function HeroPill({ href, title }: { href: string; title: string }) {
  return (
    <Link href={href}>
      <div className="group relative inline-flex overflow-hidden rounded-full p-[2px] transition-all duration-300 hover:scale-105">
        <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950/90 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          <span className="relative z-10 flex items-center gap-1">
            <span className="animate-pulse">✨</span>
            {title}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default async function Hero() {
  const post = allDocs
    .filter(
      (post) =>
        post.date && post.date <= new Date().toISOString() && post.published,
    )
    .sort((a, b) => {
      if (!a.date && !b.date) return 0;
      if (!a.date) return 1;
      if (!b.date) return -1;
      return compareDesc(new Date(a.date), new Date(b.date));
    })[0];

  return (
    <section id="hero">
      <div className="relative h-full overflow-hidden py-5 md:py-14">
        <div className="z-10 flex flex-col">
          <div className="mt-10 grid grid-cols-1 md:mt-20">
            <div className="flex flex-col items-start gap-6 px-7 pb-8 text-center md:items-center md:px-10">
              <HeroPill href={post.slug} title={`Introducing ${post.title}`} />
              <div className="relative flex flex-col gap-4 md:items-center lg:flex-row">
                <h1
                  className={cn(
                    "text-black dark:text-white",
                    "relative mx-0 max-w-[50rem] pt-5 md:mx-auto md:px-4 md:py-2",
                    "text-left tracking-tighter text-balance md:text-center font-semibold",
                    "md:text-7xl lg:text-7xl sm:text-7xl text-5xl",
                    `animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                  )}
                >
                  Frontend Development at Lightning Speed
                </h1>
              </div>

              <p className="text-balance text-left text-base tracking-tight text-black dark:font-medium dark:text-white md:text-center md:text-lg">
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  Elevate your UI
                </span>{" "}
                with our curated{" "}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                  high-performance components
                </span>
                , built with:
                <br />
                <span className="inline-flex flex-wrap gap-2 mt-2">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                    React
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                    TypeScript
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                    Tailwind CSS
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                    Framer Motion
                  </span>
                </span>
                <br />
                <span className="mt-2 inline-block font-medium text-gray-700 dark:text-gray-300">
                  Enhance your{" "}
                  <span className="text-green-600 dark:text-green-400">
                    shadcn/ui
                  </span>{" "}
                  projects with our compatible design system.
                </span>
              </p>

              <div className="mx-0 flex flex-col gap-4 py-1 sm:max-w-lg sm:flex-row md:mx-auto">
                <div className="flex w-full flex-col gap-2 sm:flex-row sm:gap-4">
                  <Link
                    href="/snapui"
                    className={cn(
                      buttonVariants({
                        size: "lg",
                      }),
                      "gap-2 whitespace-pre md:flex",
                      "group relative w-[216px] gap-1 rounded-lg text-sm font-semibold tracking-tighter ring-offset-inherit transition-all duration-150 ease-in-out",
                      "bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200",
                      "overflow-hidden",
                    )}
                  >
                    <span className="relative z-10 flex items-center">
                      Browse Components
                      <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
                    </span>
                  </Link>
                  <Link
                    href={siteConfig.links.calcom}
                    className={cn(
                      buttonVariants({
                        size: "lg",
                        variant: "outline",
                      }),
                      "gap-2 whitespace-pre md:flex",
                      "w-[216px] group relative gap-1 overflow-hidden rounded-lg text-sm font-semibold tracking-tighter transition-all duration-150 ease-in-out",
                      "border-2 border-black text-black hover:bg-black hover:text-white",
                      "dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black",
                    )}
                    target="_blank"
                  >
                    <span className="relative z-10 flex items-center">
                      Hire Me
                      <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
