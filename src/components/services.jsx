import SectionHeader from "./sectionHeader";
import SectionTitle from "./sectionTitle";
import { FaRibbon } from "react-icons/fa6";
import { HiArrowUpRight } from "react-icons/hi2";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from "react-icons/ri";

export default function Services() {
  return (
    <section className="px-5 pt-13 max-w-[1100px] mx-auto">
      <SectionTitle>Our Services</SectionTitle>
      <SectionHeader
        main="From ideas into high-impact solutions"
        sub="That inspire and convert"
        className="mt-4 md:max-w-[600px] lg:max-w-[700px]"
      />
      <div className="bg-[#f9fafb] rounded-[48px] p-5 mt-12 flex flex-col gap-5 md:grid md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white rounded-[32px] p-7 pb-0 service-card-shadow flex flex-col justify-between md:order-[2] lg:order-[1] lg:row-span-2">
          <div>
            <div className="font-bold text-[20px] lg:text-[26px]">
              Web & mobile apps
            </div>
            <p className="mt-2 text-sm font-medium text-[#50576b]">
              We design and develop high-performing web and mobile applications
              that are intuitive, scalable, and visually compelling.
            </p>
          </div>
          <img
            src="/png/VVMO6zTJk0afAQzH1AM75oByNQ.png"
            alt="Web & mobile apps"
            className="object-contain mt-8 bottom-fade h-[250px] md:h-[290px] lg:h-[400px]"
          />
        </div>
        <div className="bg-white rounded-[32px] p-7 service-card-shadow md:order-[1] lg:order-[2] md:col-span-full lg:col-span-2 lg:row-span-1">
          <div className="font-bold text-[20px] lg:text-[26px]">
            No-code websites
          </div>
          <p className="mt-2 text-sm font-medium text-[#50576b] md:max-w-[500px]">
            Launch faster with powerful, fully customizable websites built with
            Webflow and Framer that are easy to manage and optimized for
            conversion.
          </p>
          <div className="flex gap-[10px] flex-wrap mt-8 md:max-w-[450px]">
            <Badge label="Design" icon={<FaRibbon fontSize={14} />} />
            <Badge label="User Research" icon={<FaRibbon fontSize={14} />} />
            <Badge label="Branding" icon={<FaRibbon fontSize={14} />} />
            <Badge label="Development" icon={<FaRibbon fontSize={14} />} />
            <Badge label="UI/UX Design" icon={<FaRibbon fontSize={14} />} />
            <Badge
              label="Copywriting & Storytelling"
              icon={<FaRibbon fontSize={14} />}
            />
            <Badge label="SEO Optimization" icon={<FaRibbon fontSize={14} />} />
          </div>
        </div>
        <div className="bg-white rounded-[32px] p-7 service-card-shadow flex flex-col lg:flex-row gap-12 md:order-[3] lg:col-span-2 lg:row-span-1">
          <ul className="border border-[#e5eaf0] flex flex-col gap-1 rounded-[18px] services-bottom-fade p-[6px] font-medium text-sm lg:text-xs md:order-2 lg:w-[260px]">
            <li className="flex justify-between items-center px-4 py-3 bg-[#f9fafb] rounded-xl">
              <span>Storyboarding</span>
              <RiCheckboxCircleFill fontSize={12} color="#ff5147" />
            </li>
            <li className="flex justify-between items-center p-4 py-1">
              <span>Style Frames & Design</span>
              <RiCheckboxCircleFill fontSize={12} color="#ff5147" />
            </li>
            <li className="flex justify-between items-center p-4 py-1">
              <span>Animation & Motion</span>
              <RiCheckboxCircleFill fontSize={12} color="#ff5147" />
            </li>
            <li className="flex justify-between items-center p-4 py-1">
              <span>Sound Design & Polish</span>
              <RiCheckboxBlankCircleLine fontSize={12} />
            </li>
            <li className="flex justify-between items-center p-4 py-1">
              <span>Review & Delivery</span>
              <RiCheckboxBlankCircleLine fontSize={12} />
            </li>
            <li className="flex justify-between items-center p-4 py-1">
              <span>Final Audit</span>
              <RiCheckboxBlankCircleLine fontSize={12} />
            </li>
          </ul>
          <div className="md:order-1 lg:flex flex-col justify-between">
            <div>
              <div className="font-bold text-[20px] lg:text-[26px]">
                Motion design & animation
              </div>
              <p className="mt-2 text-sm font-medium text-[#50576b]">
                Bring your brand to life with smooth, engaging motion design
                that boost engagement.
              </p>
            </div>
            <div className="flex">
              <button className="flex justify-center items-center gap-3 bg-white text-sm font-medium pl-4 py-1 pr-1 rounded-full border border-[#d2dae4] text-[#323745] mt-5">
                Book a call
                <div className="bg-[#f3f5f6] p-2 rounded-full">
                  <HiArrowUpRight strokeWidth={1} fontSize={12} />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-[32px] p-7 pb-0 service-card-shadow md:order-[4] md:col-span-full lg:col-span-2">
          <div className="font-bold text-[20px] lg:text-[26px]">
            MVP design & development
          </div>
          <p className="mt-2 text-sm font-medium text-[#50576b] md:max-w-[500px]">
            Validate your idea with a fast with functional, and beautifully
            designed MVP. We specialize in rapid prototyping, lean development,
            and scalable design systems.
          </p>
          <div className="mt-8 bottom-fade border border-[#e5eaf0] rounded-2xl bg-[#fff] md:h-[170px]">
            <img
              src="/png/MtntyuU0gcTC33zlQFZa3E3DsYk.png"
              alt="MVP development"
              className="w-full rounded-2xl"
            />
          </div>
        </div>
        <div className="p-6 bg-[#151619] rounded-[32px] h-[230px] md:h-auto flex flex-col justify-end service-accent relative overflow-hidden md:order-[5] md:col-span-full lg:col-span-1">
          <div className="text-xl lg:text-2xl">
            <div className="text-white font-bold">World-class Design,</div>
            <div className="text-white font-bold">Data-Driver Marketing,</div>
            <div className="text-[#fff9] font-bold">Unstoppable Growth</div>
            <button className="flex justify-center items-center gap-3 bg-white text-sm font-medium pl-4 py-1 pr-1 rounded-full border border-[#d2dae4] text-[#323745] mt-5">
              Book a call
              <div className="bg-[#f3f5f6] p-2 rounded-full">
                <HiArrowUpRight strokeWidth={1} fontSize={12} />
              </div>
            </button>
          </div>
          <div className="absolute left-24 top-4 w-full h-full service-accent-pattern">
            <div className="dot-pattern"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ label, icon }) {
  return (
    <div className="text-[12px] font-medium text-[#697289] flex gap-2 items-center py-2 px-4 bg-[#f3f5f6] rounded-full">
      {icon} {label}
    </div>
  );
}
