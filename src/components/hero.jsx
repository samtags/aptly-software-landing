import { IoCallOutline } from "react-icons/io5";
import { HiArrowUpRight } from "react-icons/hi2";
import { PiStarFill } from "react-icons/pi";

export default function Hero() {
  return (
    <section className="hero">
      <div className="flex justify-center items-center mt-11 lg:mt-22">
        <div className="flex gap-3 items-center border border-[#e2e7ee] rounded-full p-1 pr-3 text-xs bg-white">
          <div className="flex items-center gap-2 bg-[#e7f8f4] px-4 py-1 rounded-full  font-medium text-green-800">
            <div className="w-[10px] h-[10px] rounded-full bg-[#3cba8c40] flex items-center justify-center">
              <div className="w-[6px] h-[6px] rounded-full bg-[#3cba8c]" />
            </div>
            Available
          </div>{" "}
          <span className="font-medium ">Get Started</span>{" "}
          <span className="font-medium hidden md:inline">|</span>
          <span className="font-medium hidden md:inline">Inquire Now</span>
        </div>
      </div>
      <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-10 md:leading-11 lg:leading-16 text-center px-12 mt-4 md:mt-8 lg:mt-9 mb-6 lg:mb-7 tracking-tight md:max-w-[580px] lg:max-w-[720px] md:mx-auto">
        Modern problems require modern solutions
      </h1>
      <p className="px-4 text-center text-sm lg:text-base font-medium text-[#323745] mb-9 md:max-w-[530px] md:mx-auto">
        We design, build, and operate modern applications that solve real-world
        problems for businesses and consumers.
      </p>
      <div className="flex flex-col md:flex-row md:justify-center px-4 gap-3">
        <button className="flex justify-center items-center gap-3 bg-[#151619] text-white text-sm font-medium p-4 md:pr-8 py-[10px] rounded-full">
          <div className="bg-[#ffffff21] p-2 rounded-full">
            <IoCallOutline width={2} fontSize={14} />
          </div>
          Book an intro call
        </button>
        <button className="flex justify-center items-center gap-3 bg-white text-sm font-medium p-4 py-[10px] md:pl-8 rounded-full border border-[#d2dae4] text-[#323745]">
          View Pricing
          <div className="bg-[#f3f5f6] p-2 rounded-full">
            <HiArrowUpRight strokeWidth={1} fontSize={12} />
          </div>
        </button>
      </div>
      <div className="flex justify-center mt-8">
        <div className="flex gap-2 items-center">
          <div className="flex">
            <div>
              <Avatar imageUrl="/png/YlbsDACEKLniAdZ2B90nBFRBt14.png" />
            </div>
            <div className="ml-[-16px]">
              <Avatar imageUrl="/png/XaslT2pMztTMP7q7d0zrknfM4.png" />
            </div>
            <div className="ml-[-16px]">
              <Avatar imageUrl="/png/TGbM5VpvWt795kur8Wf2anMLlhk.png" />
            </div>
            <div className="ml-[-16px]">
              <Avatar label="+2K" />
            </div>
          </div>
          <div className="text-[#50576b]">
            <div className="text-sm flex gap-1">
              <PiStarFill />
              <PiStarFill />
              <PiStarFill />
              <PiStarFill />
              <PiStarFill />
            </div>
            <div className="text-xs font-medium">1.5K app reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Avatar({ label, imageUrl }) {
  return (
    <div className="border rounded-full border border-white border-4">
      <div className="w-[36px] h-[36px] rounded-full bg-[#f9fafb] flex items-center justify-center border border-[#e2e7ee] overflow-hidden">
        {label ? (
          <span className="text-[11px] font-medium">{label}</span>
        ) : (
          <img src={imageUrl} alt="Avatar" className="w-full h-full" />
        )}
      </div>
    </div>
  );
}
