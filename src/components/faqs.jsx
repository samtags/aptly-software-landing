import SectionTitle from "./sectionTitle";
import SectionHeader from "./sectionHeader";
import { HiArrowUpRight } from "react-icons/hi2";
import QnA from "./QnA";

export default function FAQs() {
  return (
    <section className="pt-[96px] px-5 lg:grid grid-cols-12 max-w-[1100px] mx-auto lg:gap-12">
      <div className="col-span-5 flex flex-col justify-between">
        <div>
          <SectionTitle>FAQs</SectionTitle>
          <SectionHeader
            main="Have questions,"
            sub="We got answers"
            className="mt-4 max-w-[250px] max-w-[300px]"
          />
          <p className="text-[#697289] text-[14px] md:text-[15px] font-medium mt-4 max-w-[380px]">
            Everything you need to know about our process, and how we deliver
            results.
          </p>
        </div>
        <div className="bg-[#f9fafb] rounded-[28px] p-[28px] mt-8 max-w-[490px]">
          <div className="text-[18px] font-bold">Can't find your answer?</div>
          <span className="text-[#50576b] text-sm font-medium">
            Get in touch with our support team, they a re friendly!
          </span>
          <div>
            <button className="flex justify-center items-center gap-3 bg-white text-sm font-medium pl-4 py-1 pr-1 rounded-full text-[#323745] mt-5 service-card-shadow">
              Contact us
              <div className="bg-[#f3f5f6] p-3 rounded-full">
                <HiArrowUpRight strokeWidth={1} fontSize={12} />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="p-4 col-span-7">
        <QnA
          question="What services does your agency offer?"
          answer="We specialize in web design, no-code development, paid advertising,
          SEO, branding, copywriting, and motion design. Our goal is to help
          businesses grow through high-performing digital experiences."
        />
        <QnA
          question="What services does your agency offer?"
          answer="We specialize in web design, no-code development, paid advertising,
          SEO, branding, copywriting, and motion design. Our goal is to help
          businesses grow through high-performing digital experiences."
        />
        <QnA
          question="What services does your agency offer?"
          answer="We specialize in web design, no-code development, paid advertising,
          SEO, branding, copywriting, and motion design. Our goal is to help
          businesses grow through high-performing digital experiences."
          showLine={false}
        />
      </div>
    </section>
  );
}
