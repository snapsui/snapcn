"use client";

import * as React from "react";
import { PlusIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface SnapFloatButtonProps {
  className: string;
  children: React.ReactNode;
}

const SnapFloatButton = ({ className, children }: SnapFloatButtonProps) => {
  return (
    <div
      className={cn(
        "fixed right-4 bottom-4 text-center overflow-hidden",
        className,
        "data-[state=closed]:animate-float-up data-[state=open]:animate-float-down",
      )}
      data-state="closed"
      onMouseEnter={(e) => e.currentTarget.setAttribute("data-state", "open")}
      onMouseLeave={(e) => e.currentTarget.setAttribute("data-state", "closed")}
    >
      <motion.div className="bg-transparent w-16 rounded-full relative overflow-hidden">
        <div className="cursor-pointer w-full h-full flex items-center justify-center material-icons text-white">
          <PlusIcon className="text-background size-[1.2rem]" />
        </div>

        <div className="data-[state=closed]:animate-float-zoom data-[state=open]:animate-float-out absolute right-0 bottom-12 rounded-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

// const SnapFloatButton = ({ className, items }: SnapFloatButtonProps) => {
//   const [isExpanded, setIsExpanded] = React.useState(false);

//   return (
//           {items?.map((item: any, index: number) => {
//             return (
//               <motion.div
//                 className="cursor-pointer flex items-center justify-center relative w-12 h-12 rounded-full bg-primary shadow-lg mb-2 ml-2 mr-2"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 {/* <SunIcon className="size-[1.2rem] text-background dark:hidden" />
//               <MoonIcon className="hidden size-[1.2rem] text-background dark:block" /> */}
//               </motion.div>
//             );
//           })}
//   );
// };

SnapFloatButton.displayName = "SnapFloatButton";

export { SnapFloatButton };
