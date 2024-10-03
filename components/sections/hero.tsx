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
      <div className="z-10 flex items-center justify-center">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
          )}
        >
          <p
            style={{ "--shimmer-width": `100px` } as CSSProperties}
            className={cn(
              "mx-auto max-w-md text-neutral-600/70 dark:text-neutral-400/70",
              "animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",
              "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent  dark:via-white/80",
              "inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400",
            )}
          >
            <span>✨ {title}</span>
          </p>
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

              <p className="max-w-xl text-balance text-left text-base tracking-tight text-black dark:font-medium dark:text-white md:text-center md:text-lg">
                Explore more than 5+ free components, powered by <b>React</b>,{" "}
                <b>TypeScript</b>, <b>Tailwind CSS</b>, and <b>Framer Motion</b>
                .
                <br />A perfect addition to your <b>shadcn/ui</b> toolkit.
              </p>

              <div className="mx-0 flex flex-col gap-4 py-1 sm:max-w-lg sm:flex-row md:mx-auto">
                <div className="flex w-full flex-col gap-2 sm:flex-row sm:gap-4">
                  <Link
                    href="/snapui"
                    className={cn(
                      buttonVariants({
                        variant: "default",
                        size: "lg",
                      }),
                      "gap-2 whitespace-pre md:flex",
                      "group relative w-[216px] gap-1 rounded-lg text-sm font-semibold tracking-tighter ring-offset-inherit transition-all duration-150 ease-in-out hover:ring-2 hover:ring-black hover:ring-offset-2 hover:ring-offset-current dark:hover:ring-neutral-50",
                    )}
                  >
                    Browse Components
                    <ChevronRight className="ml-1  size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href={siteConfig.links.calcom}
                    className={cn(
                      buttonVariants({
                        size: "lg",
                        variant: "outline",
                      }),
                      "gap-2 whitespace-pre md:flex",
                      "w-[216px] group relative gap-1 overflow-hidden rounded-xl text-sm font-semibold tracking-tighter transition-all duration-150 ease-in-out hover:ring-2 hover:ring-neutral-300 hover:ring-offset-2 hover:ring-offset-inherit dark:hover:ring-black dark:hover:ring-offset-black ",
                    )}
                    target="_blank"
                  >
                    Hire Me
                    <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
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
