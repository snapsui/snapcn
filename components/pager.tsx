import Link from "next/link";
import { Doc } from "@/.contentlayer/generated";
import { NavItem, NavItemWithChildren } from "@/types";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface DocsPagerProps {
  doc: Doc;
}

export function DocPager({ doc }: DocsPagerProps) {
  const pager = getPagerForDoc(doc);

  if (!pager) {
    return null;
  }

  return (
    <div className="flex flex-row items-center justify-between">
      {pager?.prev?.href && (
        <Tooltip>
          <TooltipTrigger>
            <Link
              href={pager.prev.href}
              className={buttonVariants({ variant: "outline" })}
            >
              <ChevronLeftIcon className="size-4" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>{pager.prev.title}</TooltipContent>
        </Tooltip>
      )}
      {pager?.next?.href && (
        <div className="ml-auto">
          <Tooltip>
            <TooltipTrigger>
              <Link
                href={pager.next.href}
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                <ChevronRightIcon className="size-4" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>{pager.next.title}</TooltipContent>
          </Tooltip>
        </div>
      )}
    </div>
  );
}

export function getPagerForDoc(doc: Doc) {
  const flattenedLinks = [null, ...flatten(docsConfig.sidebarNav), null];
  const activeIndex = flattenedLinks.findIndex(
    (link) => doc.slug === link?.href,
  );
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null;
  const next =
    activeIndex !== flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null;
  return {
    prev,
    next,
  };
}

export function flatten(links: NavItemWithChildren[]): NavItem[] {
  return links
    .reduce<NavItem[]>((flat, link) => {
      return flat.concat(link.items?.length ? flatten(link.items) : link);
    }, [])
    .filter((link) => !link?.disabled);
}
