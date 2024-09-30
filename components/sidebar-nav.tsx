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
import { AnimatePresence, motion } from "framer-motion";

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
              <h4 className="mb-1 rounded-md py-1 text-base font-semibold">
                {item.title}
              </h4>
              {isOpen.includes(index) ? (
                <ChevronDownIcon className="ml-2" />
              ) : (
                <ChevronUpIcon className="ml-2" />
              )}
            </div>
            <AnimatePresence initial={false}>
              {isOpen.includes(index) && item?.items && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <DocsSidebarNavItems
                    items={item.items}
                    pathname={pathname}
                    groupId={`group-${index}`}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  ) : null;
}

interface DocsSidebarNavItemsProps {
  items: SidebarNavItem[];
  pathname: string | null;
  groupId: string;
}

export function DocsSidebarNavItems({
  items,
  pathname,
  groupId,
}: DocsSidebarNavItemsProps) {
  return items?.length ? (
    <div className="relative grid grid-flow-row auto-rows-max gap-0.5 text-sm">
      {items.map((item, index) =>
        item.href && !item.disabled ? (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "text-base group relative flex w-full items-center rounded-md border border-transparent px-2 py-1",
              item.disabled && "cursor-not-allowed opacity-60",
              pathname === item.href
                ? "font-medium text-foreground"
                : "text-muted-foreground",
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            {pathname === item.href && (
              <motion.div
                layoutId={groupId}
                className="absolute inset-0 rounded-md border-neutral-300 bg-neutral-100 dark:border-neutral-600 dark:bg-neutral-800"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 30,
                  mass: 1,
                  velocity: 200,
                }}
              />
            )}
            <div
              className={cn(
                "relative z-10 mr-2 h-5 w-0.5",
                pathname === item.href ? "bg-foreground" : "",
              )}
            />
            <span className="relative z-10 shrink-0">{item.title}</span>
            {item.label && (
              <span className="z-10 ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000]">
                {item.label}
              </span>
            )}
            {item.paid && (
              <span className="relative z-10 ml-2 rounded-md bg-[#4ade80] px-1.5 py-0.5 text-xs leading-none text-[#000000]">
                Paid
              </span>
            )}
            {item.external && (
              <ExternalLinkIcon className="relative z-10 ml-2 size-4" />
            )}
          </Link>
        ) : (
          <span
            key={index}
            className={cn(
              "z-10 flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline group-hover:underline",
              item.disabled && "cursor-not-allowed opacity-60",
            )}
          >
            {item.title}
            {item.label && (
              <span className="z-10 ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000]">
                {item.label}
              </span>
            )}
            {item.paid && (
              <span className="ml-2 rounded-md bg-[#4ade80] px-1.5 py-0.5 text-xs leading-none text-[#000000]">
                Paid
              </span>
            )}
          </span>
        ),
      )}
    </div>
  ) : null;
}
