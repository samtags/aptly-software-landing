"use client";

import { useEffect, useState } from "react";
import { FaStarOfLife } from "react-icons/fa6";
import { RxChevronDown } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

export default function NavbarClient() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const buttonEl = document.getElementById("menuButton");

    if (buttonEl) {
      const handler = () => setShowMenu((prev) => !prev);

      buttonEl.addEventListener("click", handler);

      return () => buttonEl.removeEventListener("click", handler);
    }
  }, []);

  return (
    <AnimatePresence>
      {showMenu && (
        <motion.div
          key="mobile-menu"
          className="absolute w-screen h-screen bg-[#f6f7f880] top-0 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="py-2 px-4 lg:mx-auto lg:max-w-[800px]">
            <div
              className="bg-[#f3f5f6] rounded-[32px] rounded-t-[24px] p-2 pb-4"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
                    <FaStarOfLife fontSize={14} />
                  </div>
                  <span className="font-black text-[#2D303C] text-xl">
                    Apt<span className="text-[#E07766]">ly</span>
                  </span>
                </div>
                <button
                  onClick={() => setShowMenu(false)}
                  className="bg-white rounded-full p-2 lg:hidden cursor-pointer"
                >
                  <IoClose fontSize={20} />
                </button>
              </div>
              <ul className="text-[#2D303C] text-[14px] font-medium flex flex-col gap-1 pt-4">
                <li className="p-2">About</li>
                <li className="p-2 flex gap-2 items-center">
                  Company
                  <RxChevronDown />
                </li>
                <li className="p-2">Pricing</li>
                <li className="p-2">Contact</li>
                <li className="p-2 flex gap-2 items-center justify-between">
                  Projects
                  <div className="rounded-full bg-[#2D303C] px-2 py-[2px] text-white text-xs">
                    New
                  </div>
                </li>
              </ul>

              <button className="bg-white text-sm font-medium p-3 rounded-full text-[#323745] w-full mt-4">
                Book a Call
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
