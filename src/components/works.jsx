import SectionTitle from "./sectionTitle";
import SectionHeader from "./sectionHeader";
import { HiArrowUpRight } from "react-icons/hi2";

export default function Works() {
  return (
    <section className="pt-[96px] px-5 max-w-[1100px] mx-auto">
      <SectionTitle>Our work</SectionTitle>
      <SectionHeader
        main="How we've helped other businesses."
        className="mt-4"
      />
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <p className="text-[#697289] text-[14px] md:text-[15px] font-medium mt-4 max-w-[450px]">
          See how we've helped clients turn ambitious ideas into impactful
          digital products.
        </p>
        <div className="flex">
          <button className="flex justify-center items-center gap-3 bg-white text-sm font-medium pl-4 py-2 pr-2 rounded-full border border-[#d2dae4] text-[#323745] mt-5">
            View all projects
            <div className="bg-[#f3f5f6] p-2 rounded-full">
              <HiArrowUpRight strokeWidth={1} fontSize={12} />
            </div>
          </button>
        </div>
      </div>
      <div className="flex flex-col pt-[40px] gap-[20px] md:grid md:grid-cols-2">
        <Project
          title="Vertax Labs (1)"
          tags={["Web design", "Development"]}
          imageUrl="/png/YRBacVkY1hNjQzvJVDb24A3JOM.png"
          redirectUrl="#"
        />
        <Project
          title="Vertax Labs (2)"
          tags={["Web design", "Development"]}
          imageUrl="/png/LWaKedMy6DtEAbrBCG2JzD13Tc.png"
          redirectUrl="#"
        />
        <Project
          title="Vertax Labs (3)"
          tags={["Web design", "Development"]}
          imageUrl="/png/GSJQypQMYu1yzL9SeVvdATXD6tY.png"
          redirectUrl="#"
        />
        <Project
          title="Vertax Labs (1)"
          tags={["Web design", "Development"]}
          imageUrl="/png/YRBacVkY1hNjQzvJVDb24A3JOM.png"
          redirectUrl="#"
        />
      </div>
    </section>
  );
}

function Project({ title, tags, imageUrl, redirectUrl }) {
  return (
    <div className="border border-[#e5eaf0] rounded-[32px] p-[14px]">
      <div className="rounded-[18px] bg-gray-100 h-[320px] overflow-hidden">
        <img
          src={imageUrl}
          alt={`Project ${title}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 pb-3">
        <div className="flex justify-between">
          <div className="text-[18px] font-bold">{title}</div>

          <div className="border border-[#f3f5f6] p-3 rounded-full">
            <HiArrowUpRight strokeWidth={0.25} fontSize={11} />
          </div>
        </div>
        <div className="font-medium text-[12px] text-[#50576b] flex gap-2 mt-[-4px]">
          {tags.map((tag, index) => (
            <span key={`tag-${tag}-${index}`}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
