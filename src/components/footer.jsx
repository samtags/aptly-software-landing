import Companies from "./companies";
import SectionTitle from "./sectionTitle";
import { HiArrowUpRight } from "react-icons/hi2";
import { FaStarOfLife } from "react-icons/fa6";
import { RxArrowRight } from "react-icons/rx";

export default function Footer() {
  return (
    <footer className="m-5 bg-[#151619] rounded-[52px] pt-[64px] pb-[40px] px-5 text-white">
      <div className="text-center">
        <SectionTitle className="text-white!">Book a call</SectionTitle>
        <div className="text-[28px] font-bold mt-4">
          Join 1500+ professionals elevating their brand
        </div>
        <p className="mt-4 text-sm text-[#fff9] font-medium">
          Schedule a free discovery call with us to talk strategy, goals, and
          how we can help you grow.
        </p>
      </div>
      <div className="mb-8">
        <Companies />
      </div>
      <div className="flex justify-center pb-8">
        <button className="flex justify-center items-center gap-3 bg-white text-sm font-medium px-2 py-3 pl-6 rounded-full border border-[#d2dae4] text-[#323745]">
          Book an intro call
          <div className="bg-[#f3f5f6] p-2 rounded-full">
            <HiArrowUpRight strokeWidth={1} fontSize={12} />
          </div>
        </button>
      </div>
      <svg className="footer-wordmark-svg" viewBox="0 0 1135.905190075325 324">
        <foreignObject
          width="100%"
          height="100%"
          className="footer-wordmark-fit"
          transform="scale(1)"
        >
          <p className="footer-wordmark-text">
            <span className="invisible">l</span>
            Apt
            <span className="footer-wordmark-accent">ly</span>
          </p>
        </foreignObject>
      </svg>

      <div className="mt-8 grid grid-cols-6 gap-4 gap-y-8 mx-auto max-w-[1100px]">
        <div className="max-w-[250px] col-span-full lg:col-span-2">
          <div className="flex gap-2">
            <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center text-[#151619]">
              <FaStarOfLife fontSize={14} />
            </div>
            <span className="font-black text-white text-xl">
              Apt<span className="text-[#E07766]">ly</span>
            </span>
          </div>
          <p className="text-[#fff9] font-medium text-[14px]">
            Strategic web design, and campaigns tailored to drive result and
            conversions.
          </p>
        </div>
        <ul className="flex flex-col gap-3 text-[#fff9] font-medium text-sm col-span-3 md:col-span-1">
          <li className="text-white font-bold">Company</li>
          <li>About Us</li>
          <li>Pricing</li>
          <li>Contact Us</li>
          <li>Projects</li>
        </ul>
        <ul className="flex flex-col gap-3 text-[#fff9] font-medium text-sm col-span-3 md:col-span-2 lg:col-span-1">
          <li className="text-white font-bold">Socials</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Linked in</li>
        </ul>
        <div className="col-span-full md:col-span-3 lg:col-span-2">
          <div className="text-white font-bold">News Letter</div>
          <p className="text-[#fff9] font-medium text-[14px] max-w-[260px]">
            Stay ahead with design & marketing tips and strategies that drive
            results.
          </p>

          <div className="bg-[#25272c] rounded-full flex items-center gap-2 p-2 pl-4 mt-3 md:mt-8">
            <span className="text-[#fff9] text-sm font-medium font-inter">
              @
            </span>
            <input
              className="text-sm font-medium grow outline-none"
              placeholder="Enter your E-mail"
            />
            <div>
              <button className="text-white bg-[#ff5147] rounded-full px-6 py-3">
                <RxArrowRight strokeWidth={0.75} fontSize={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-xs text-[#fff9] mt-4 font-medium flex justify-between mt-8 mx-auto max-w-[1100px]">
        <span>© 2026 Aptly Software</span>
        <ul className="flex gap-1">
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
    </footer>
  );
}
