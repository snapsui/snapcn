import * as React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

interface SnapFloatButtonItemProps {}

const SnapNameFooter: React.FC<SnapFloatButtonItemProps> = ({}) => {
  return (
    <footer className="w-full bottom-0 bg-background-900 pt-6 text-primary-50 md:pt-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="max-w-xl">
            <p>
              Order same-day delivery or pickup from more than 300 retailers and
              grocers. Download the Instacart app or start shopping online now
              with Instacart.
            </p>
            <div className="mt-4 flex items-center gap-2 md:mt-6 md:gap-4">
              <motion.div
                className="cursor-pointer"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.92 }}
              >
                <button className="transition duration-300 cursor-pointer flex items-center justify-center w-fit rounded-full bg-neutral-900 text-neutral-50 p-3 hover:bg-neutral-700 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700">
                  <Facebook className="size-5" />
                </button>
              </motion.div>
              <motion.div
                className="cursor-pointer"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.92 }}
              >
                <button className="transition duration-300 cursor-pointer flex items-center justify-center w-fit rounded-full bg-neutral-900 text-neutral-50 p-3 hover:bg-neutral-700 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700">
                  <Instagram className="size-5" />
                </button>
              </motion.div>
              <motion.div
                className="cursor-pointer"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.92 }}
              >
                <button className="transition duration-300 cursor-pointer flex items-center justify-center w-fit rounded-full bg-neutral-900 text-neutral-50 p-3 hover:bg-neutral-700 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700">
                  <Linkedin className="size-5" />
                </button>
              </motion.div>
              <motion.div
                className="cursor-pointer"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.92 }}
              >
                <button className="transition duration-300 cursor-pointer flex items-center justify-center w-fit rounded-full bg-neutral-900 text-neutral-50 p-3 hover:bg-neutral-700 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700">
                  <Youtube className="size-5" />
                </button>
              </motion.div>
              <motion.div
                className="cursor-pointer"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.92 }}
              >
                <button className="transition duration-300 cursor-pointer flex items-center justify-center w-fit rounded-full bg-neutral-900 text-neutral-50 p-3 hover:bg-neutral-700 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700">
                  <Twitter className="size-5" />
                </button>
              </motion.div>
            </div>
          </div>

          <div className="text-sm md:text-md lg:flex lg:flex-col lg:items-center">
            <div className="space-y-3">
              <h4 className="font-semibold">COMPANY</h4>
              <ul className="mt-4 space-y-3">
                <li className="cursor-pointer underline-offset-2 hover:underline">
                  About us
                </li>
                <li className="cursor-pointer underline-offset-2 hover:underline">
                  Privacy policy
                </li>
                <li className="cursor-pointer underline-offset-2 hover:underline">
                  Terms &amp; conditions
                </li>
                <li className="cursor-pointer underline-offset-2 hover:underline">
                  Contact us
                </li>
              </ul>
            </div>
          </div>

          <div className="text-sm md:text-md lg:flex lg:flex-col lg:items-center">
            <div className="space-y-3">
              <h4 className="font-semibold">QUICK LINKS</h4>
              <ul className="mt-4 space-y-3">
                <li className="cursor-pointer underline-offset-2 hover:underline">
                  Privacy Policy
                </li>
                <li className="cursor-pointer underline-offset-2 hover:underline">
                  Terms of Service
                </li>
                <li className="cursor-pointer underline-offset-2 hover:underline">
                  Community
                </li>
                <li className="cursor-pointer underline-offset-2 hover:underline">
                  Events
                </li>
                <li className="cursor-pointer underline-offset-2 hover:underline">
                  Documentation
                </li>
                <li className="cursor-pointer underline-offset-2 hover:underline">
                  Blog
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <h4 className="text-sm font-semibold md:text-lg">
              DOWNLOAD THE APP
            </h4>
            <motion.div
              className="cursor-pointer"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <button className="transition duration-300 cursor-pointer flex items-center justify-center gap-2 w-full rounded-full bg-neutral-900 text-neutral-50 py-3 px-6 hover:bg-neutral-700 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700">
                <span>Download on Google Play</span>
              </button>
            </motion.div>
            <motion.div
              className="cursor-pointer"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <button className="transition duration-300 cursor-pointer flex items-center justify-center gap-2 w-full rounded-full bg-neutral-900 text-neutral-50 py-3 px-6 hover:bg-neutral-700 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700">
                <span>Download on App Store</span>
              </button>
            </motion.div>
          </div>
        </div>

        <div className="text-center mt-16 lg:mt-24">
          <p
            className="text-[4rem] sm:text-[7rem] md:text-[10rem] lg:text-[12rem] xl:text-[16rem] leading-tight font-extrabold text-neutral-300"
            style={{ transform: "scale(1.1)" }}
          >
            instacart
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SnapNameFooter;
