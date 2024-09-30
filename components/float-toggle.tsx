"use client";

import React from "react";
import Link from "next/link";
import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  MoonIcon,
  PlusIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export const FloatToggle = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Button> & { className?: string }
>(() => {
  const { theme, setTheme } = useTheme();
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="fixed right-4 bottom-4 text-center overflow-hidden">
      <motion.div
        initial={{ height: "3rem" }}
        animate={{ height: isExpanded ? "21.5rem" : "3rem" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-transparent w-16 rounded-full relative"
        onHoverStart={() => setIsExpanded(true)}
        onHoverEnd={() => setIsExpanded(false)}
      >
        <motion.div
          className="absolute bottom-0 right-2 bg-primary h-12 w-12 rounded-full z-10"
          initial={{ rotate: 0 }}
          animate={{ rotate: isExpanded ? 135 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="cursor-pointer w-full h-full flex items-center justify-center material-icons text-white">
            <PlusIcon className="text-background size-[1.2rem]" />
          </div>
        </motion.div>

        <motion.div
          className="absolute right-0 bottom-12 rounded-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isExpanded ? 1 : 0, y: isExpanded ? 0 : 10 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <motion.div
              className="cursor-pointer flex items-center justify-center relative w-12 h-12 rounded-full bg-primary shadow-lg mb-2 ml-2 mr-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <GitHubLogoIcon className="text-background size-[1.2rem]" />
            </motion.div>
          </Link>

          <Link
            href={siteConfig.links.discord}
            target="_blank"
            rel="noreferrer"
          >
            <motion.div
              className="cursor-pointer flex items-center justify-center relative w-12 h-12 rounded-full bg-primary shadow-lg mb-2 ml-2 mr-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <DiscordLogoIcon className="text-background size-[1.2rem]" />
            </motion.div>
          </Link>

          <motion.div
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="cursor-pointer flex items-center justify-center relative w-12 h-12 rounded-full bg-primary shadow-lg mb-2 ml-2 mr-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <SunIcon className="size-[1.2rem] text-background dark:hidden" />
            <MoonIcon className="hidden size-[1.2rem] text-background dark:block" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
});

FloatToggle.displayName = "FloatToggle";
