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
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={"pb-4"}
          >
            <div className="relative overflow-hidden rounded-md">
              <motion.div
                className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800"
                initial={false}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
              <motion.div
                className="relative flex items-center cursor-pointer justify-between px-3 py-1.5"
                onClick={() => toggleDropdown(index)}
              >
                <h4 className="text-base font-semibold">{item.title}</h4>
                <motion.div
                  initial={false}
                  animate={{ opacity: 1 }}
                  className="ml-2 relative size-4"
                >
                  <motion.div
                    animate={{ opacity: isOpen.includes(index) ? 0 : 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                  >
                    <ChevronDownIcon className="size-4" />
                  </motion.div>
                  <motion.div
                    animate={{ opacity: isOpen.includes(index) ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                  >
                    <ChevronUpIcon className="size-4" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
            <AnimatePresence initial={false}>
              {isOpen.includes(index) && item?.items && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <DocsSidebarNavItems items={item.items} pathname={pathname} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
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
    <div className="relative grid grid-flow-row auto-rows-max gap-1 text-sm pl-4">
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-border" />
      {items.map((item, index) =>
        item.href && !item.disabled ? (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "group relative flex w-full items-center py-1",
              item.disabled && "cursor-not-allowed opacity-60",
              pathname === item.href
                ? "font-medium text-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            <div
              className={cn("absolute -left-6 top-1/2 h-[2px] w-5 bg-border")}
            />
            <span className="relative z-10 text-md">{item.title}</span>
            {item.label && (
              <span className="z-10 ml-2 text-sm text-muted-foreground">
                · {item.label}
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
              "group relative flex w-full items-center py-1.5 text-muted-foreground",
              item.disabled && "cursor-not-allowed opacity-60",
            )}
          >
            <div className="absolute -left-4 top-1/2 h-[2px] w-4 bg-border" />
            <span className="relative z-10 text-base">{item.title}</span>
            {item.label && (
              <span className="z-10 ml-2 text-sm text-muted-foreground">
                · {item.label}
              </span>
            )}
          </span>
        ),
      )}
    </div>
  ) : null;
}
