import NavbarClient from "./navbar.client";

import { HiOutlineMenu } from "react-icons/hi";
import { FaStarOfLife } from "react-icons/fa6";
import { HiArrowUpRight } from "react-icons/hi2";
import { RxChevronDown } from "react-icons/rx";

export default function Navbar() {
  return (
    <>
      <div className="py-2 px-4 lg:mx-auto lg:max-w-[800px]">
        <nav className="bg-[#25272c] p-2 lg:pl-4 rounded-[32px] flex items-center justify-between">
          <div className="flex gap-2">
            <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
              <FaStarOfLife fontSize={14} />
            </div>
            <span className="font-black text-white text-xl">
              Apt<span className="text-[#E07766]">ly</span>
            </span>
          </div>
          <ul className="hidden lg:flex text-[#fffc] text-[14px] font-medium gap-2">
            <li className="p-2">About</li>
            <li className="p-2 flex gap-2 items-center">
              Company
              <RxChevronDown />
            </li>
            <li className="p-2">
              <a href="/#pricing">Pricing</a>
            </li>
            <li className="p-2">Contact</li>
            <li className="p-2 flex gap-2 items-center">
              Projects
              <div className="bg-[#f3f5f6] rounded-full bg-[#ffffff29] px-2 py-[2px] text-white text-xs">
                New
              </div>
            </li>
          </ul>
          <button
            id="menuButton"
            className="bg-white rounded-full p-2 lg:hidden cursor-pointer"
          >
            <HiOutlineMenu fontSize={20} />
          </button>
          <a
            className="cursor-pointer hidden lg:flex justify-center items-center gap-3 bg-white text-sm font-semibold p-2 md:pl-4 rounded-full border border-[#d2dae4] text-[#323745]"
            target="__blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfQPH2hSL8C62bfOwNAlxNJbqDXBPoDAAxvM9PRLGpNu8Mv_A/viewform?usp=preview"
          >
            Book a Call
            <div className="bg-[#f3f5f6] p-[6px] rounded-full">
              <HiArrowUpRight strokeWidth={1} fontSize={10} />
            </div>
          </a>
        </nav>
      </div>
      <NavbarClient />
    </>
  );
}
