"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { PlusIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface SnapFloatButtonProps {
  className?: string;
  children: React.ReactNode;
}

const SnapFloatButton = ({ className, children }: SnapFloatButtonProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="absolute right-4 bottom-4 text-center overflow-hidden">
      <motion.div
        initial={{ height: "3rem" }}
        animate={{ height: isExpanded ? "21.5rem" : "3rem" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-transparent w-16 rounded-full relative"
        onHoverStart={() => setIsExpanded(true)}
        onHoverEnd={() => setIsExpanded(false)}
      >
        <motion.div
          className={cn(
            "absolute bottom-0 right-2 bg-primary h-12 w-12 rounded-full z-10",
            className,
          )}
          initial={{ rotate: 0 }}
          animate={{ rotate: isExpanded ? 135 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="cursor-pointer w-full h-full flex items-center justify-center material-icons text-white">
            <PlusIcon className="text-background size-[1.2rem]" />
          </div>
        </motion.div>

        <motion.div
          className={cn("absolute right-0 bottom-12 rounded-full", className)}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: isExpanded ? 1 : 0, y: isExpanded ? 0 : 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

interface SnapFloatButtonItemProps {
  Icon: React.ElementType;
  onClick: () => void;
  className?: string;
}

const SnapFloatButtonItem: React.FC<SnapFloatButtonItemProps> = ({
  Icon,
  onClick,
  className,
}) => {
  return (
    <motion.div
      className="cursor-pointer flex items-center justify-center relative w-12 h-12 rounded-full bg-primary shadow-lg mb-2 ml-2 mr-2"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      <Icon className={cn("text-background size-[1.2rem]", className)} />
    </motion.div>
  );
};

SnapFloatButton.displayName = "SnapFloatButton";
SnapFloatButtonItem.displayName = "SnapFloatButtonItem";

export { SnapFloatButton, SnapFloatButtonItem };
