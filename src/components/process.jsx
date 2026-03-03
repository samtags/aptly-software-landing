import SectionTitle from "./sectionTitle";
import SectionHeader from "./sectionHeader";

export default function Process() {
  return (
    <section className="pt-[96px] px-5 md:flex lg:gap-12 max-w-[1100px] mx-auto">
      <div
        id="processEl"
        className="m-w-[300px] md:m-w-[400px] shrink-0 md:sticky md:top-24 self-start"
      >
        <SectionTitle>Our process</SectionTitle>
        <SectionHeader
          main="A proven & effective "
          sub="workflow process."
          className="mt-4 max-w-[300px] md:max-w-[400px]"
        />
        <p className="text-[#697289] text-[14px] md:text-[15px] font-medium mt-4 max-w-[300px]">
          We dig deep into your goals, customers, and challenges to align on
          strategy and direction.
        </p>
      </div>
      <div className="flex flex-col pt-12 md:pt-0">
        <Step
          step="01"
          title="Discover & Strategy"
          description="Through discovery workshops and research, we start by defining a strategy aligned with your vision."
        />
        <Step
          step="02"
          title="Plan & Prioritize"
          description="We map out user journeys, project milestones, and deliverables ensuring a smooth, transparent workflow from start to finish."
        />
        <Step
          step="03"
          title="Design & Prototyping"
          description="Our team crafts purposeful designs, copy, and branding that communicate clearly and convert."
        />
        <Step
          step="04"
          title="Build & Launch"
          description="Whether it’s no-code or custom, we bring your digital presence to life with pixel-perfect execution and performance optimization."
        />
        <Step
          step="05"
          title="Support & Evolve"
          description="
Post-launch, we stay close—monitoring performance, making refinements, and helping your brand adapt and grow continuously."
          showLine={false}
        />
      </div>
    </section>
  );
}

function Step({ step, title, description, showLine = true }) {
  return (
    <div className="flex pb-[72px]">
      <div className="pt-6 relative flex flex-col gap-2 items-center ">
        <div className="shrink-0 w-[40px] h-[40px] flex items-center justify-center text-[14px] font-medium rounded-full border border-[#d9dfe8] font-inter">
          {step}
        </div>
        {showLine && (
          <div className="bg-[#ff5147] w-[3px] h-full absolute top-20" />
        )}
      </div>
      <div className="relative p-6 w-full">
        <div className="text-[20px] lg:text-[24px] font-bold">{title}</div>
        <p className="font-medium text-[14px] lg:text-[16px] text-[#50576b] mt-2">
          {description}
        </p>
        <svg
          className="w-[12px] h-[12px] absolute top-0 right-0"
          viewBox="0 0 12 12"
          id="svg11535893692"
        >
          <path
            d="M 1 1 L 9.5 1 C 10.328 1 11 1.672 11 2.5 L 11 11"
            fill="transparent"
            strokeWidth="2"
            stroke="var(--token-72f1587e-8bbc-424b-bdb9-13d999bb0e54, rgb(255, 81, 71))"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
}
