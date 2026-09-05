import SectionTitle from "./sectionTitle";
import SectionHeader from "./sectionHeader";
import { HiArrowUpRight } from "react-icons/hi2";
import QnA from "./QnA";
import Link from "next/link";

export default function FAQs({ cardClassName = "" }) {
  return (
    <section className="lg:grid grid-cols-12 lg:gap-12">
      <div className="col-span-5 self-start">
        <div className="relative h-full">
          <div className="md:sticky md:top-24 flex flex-col h-[calc(50vh-1rem)] max-w-[400px]">
            <SectionTitle>FAQs</SectionTitle>

            <SectionHeader
              main="Have questions,"
              sub="We got answers"
              className="mt-4 max-w-[300px]"
            />

            <p className="text-[#697289] text-[14px] md:text-[15px] font-medium mt-4 max-w-[380px]">
              Everything you need to know about our process, and how we deliver
              results.
            </p>
          </div>

          <div
            className={`bg-[#f9fafb] rounded-[28px] p-[28px] max-w-[490px] mt-auto ${cardClassName}`}
          >
            <div className="text-[18px] font-bold">Can't find your answer?</div>

            <span className="text-[#50576b] text-sm font-medium">
              Get in touch with our support team, they are friendly!
            </span>

            <Link href="contact" taget="_blank">
              <button className="cursor-pointer flex justify-center items-center gap-3 bg-white text-sm font-medium pl-4 py-1 pr-1 rounded-full text-[#323745] mt-5 service-card-shadow">
                Contact us
                <div className="bg-[#f3f5f6] p-3 rounded-full">
                  <HiArrowUpRight strokeWidth={1} fontSize={12} />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="p-4 col-span-7">
        <QnA
          showByDefault
          question="What services do you offer?"
          answer="We specialize in web design, no-code development, paid advertising, SEO, branding, copywriting, and motion design. Our goal is to help businesses grow through high-performing digital experiences."
        />

        <QnA
          question="Do you work with startups or only established companies?"
          answer="We work with businesses of all sizes—from early-stage startups building their MVP to established brands looking to scale their online presence. Our flexible approach allows us to tailor solutions that align with your specific goals."
        />

        <QnA
          question="How long does a typical project take?"
          answer="Project timelines vary depending on scope. A landing page may take 1–2 weeks, while full application can take 4–8 weeks. We’ll provide a detailed timeline after the initial discovery call."
        />

        <QnA
          question="Can you help with just one part of the project?"
          answer="Absolutely. We’re happy to collaborate in the way that best complements your team’s workflow. We can jump in as creative partners, support your internal team, or handle everything from concept to execution."
        />

        <QnA
          question="What’s your pricing structure?"
          answer="We use a sprint-based pricing model with fixed rates per sprint, depending on the level of development capacity and team allocation you need."
        />

        <QnA
          question="Do you offer ongoing support after the project is finished?"
          answer="Yes. We provide ongoing maintenance, performance monitoring, and retainer-based support to ensure your website stays optimized, secure, and aligned with your business goals."
          showLine={false}
        />
      </div>
    </section>
  );
}
