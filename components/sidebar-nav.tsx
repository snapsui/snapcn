"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarNavItem } from "@/types";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ExternalLinkIcon,
} from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";

export interface DocsSidebarNavProps {
  items: SidebarNavItem[];
}

export function DocsSidebarNav({ items }: DocsSidebarNavProps) {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState<number[]>([0]);

  const toggleDropdown = (index: number) => {
    setIsOpen((prevOpen) =>
      prevOpen.includes(index)
        ? prevOpen.filter((i) => i !== index)
        : [...prevOpen, index],
    );
  };

  useEffect(() => {
    const findActiveIndexes = () => {
      const openIndexes: number[] = [...isOpen];

      items.forEach((item, index) => {
        if (
          item.items &&
          item.items.some((subItem) =>
            (subItem.href + "").includes(pathname + ""),
          )
        ) {
          openIndexes.push(index);
        }
      });

      setIsOpen(openIndexes);
    };

    findActiveIndexes();
  }, [items, pathname]);

  return items.length ? (
    <div className="w-full pt-2 pb-20">
      {items.map((item, index) => {
        return (
          <div key={index} className={"pb-4"}>
            <div
              className="flex items-center cursor-pointer justify-between"
              onClick={() => toggleDropdown(index)}
            >
              <h4 className="mb-1 rounded-md py-1 text-sm font-semibold">
                {item.title}
              </h4>
              {isOpen.includes(index) ? (
                <ChevronDownIcon className="ml-2" />
              ) : (
                <ChevronUpIcon className="ml-2" />
              )}
            </div>
            {isOpen.includes(index) && item?.items && (
              <DocsSidebarNavItems items={item.items} pathname={pathname} />
            )}
          </div>
        );
      })}
    </div>
  ) : null;
}

interface DocsSidebarNavItemsProps {
  items: SidebarNavItem[];
  pathname: string | null;
}

export function DocsSidebarNavItems({
  items,
  pathname,
}: DocsSidebarNavItemsProps) {
  return items?.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item, index) =>
        item.href && !item.disabled ? (
          <div key={index} className="flex gap-[4px] items-center">
            <div
              className={cn(
                "w-[4px] h-[4px]  rounded-xl",
                pathname === item.href
                  ? "bg-foreground"
                  : "bg-muted-foreground",
              )}
            ></div>
            <Link
              href={item.href}
              className={cn(
                "group flex w-full items-center rounded-md border border-transparent px-2 py-1",
                item.disabled && "cursor-not-allowed opacity-60",
                pathname === item.href
                  ? "font-medium text-foreground"
                  : "text-muted-foreground",
              )}
              target={item.external ? "_blank" : ""}
              rel={item.external ? "noreferrer" : ""}
            >
              <span className="shrink-0 hover:underline">{item.title}</span>
              {item.label && (
                <span className="ml-2 rounded-md border bg-[#FFF] px-2 py-0.5 text-xs text-green-800 border-slate-300 no-underline group-hover:no-underline">
                  {item.label}
                </span>
              )}
              {item.paid && (
                <span className="ml-2 rounded-md bg-[#4ade80] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                  Paid
                </span>
              )}
              {item.external && <ExternalLinkIcon className="ml-2 size-4" />}
            </Link>
          </div>
        ) : (
          <span
            key={index}
            className={cn(
              "flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline",
              item.disabled && "cursor-not-allowed opacity-60",
            )}
          >
            {item.title}
            {item.label && (
              <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
            {item.paid && (
              <span className="ml-2 rounded-md bg-[#4ade80] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                Paid
              </span>
            )}
          </span>
        ),
      )}
    </div>
  ) : null;
}
