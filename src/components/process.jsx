import SectionTitle from "./sectionTitle";
import SectionHeader from "./sectionHeader";
import { easeInOut } from "framer-motion";

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
          sub="workflow progress."
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
          title="Initial Meeting"
          description="We start by understanding your business—your goals, current challenges, and where you’re 
          experiencing friction. This helps us identify if and how we can create real value."
          AOSDelay= "800"
          AOSDuration= "1200"
        />
        <Step
          step="02"
          title="Discovery"
          description="We analyze your workflows, users, and requirements to define the right solution. 
          This phase focuses on translating your pain points into a clear, actionable approach."
          AOSDelay= "1000"
          AOSDuration= "1200"
        />
        <Step
          step="03"
          title="Agreement"
          description="We present a structured plan outlining the scope, sprint estimate, timeline, and pricing. 
          This ensures alignment before any development begins."
          AOSDelay= "1200"
          AOSDuration= "1200"
        />
        <Step
          step="04"
          title="Development Kick-off"
          description="Once approved, we initiate the project with a defined sprint plan.
           Development follows a structured cycle with regular updates, feedback loops, and incremental delivery."
           AOSDelay= "1400"
           AOSDuration= "1200"
        />
        <Step
          step="05"
          title="Deployment & Support"
          description="After release, we handle deployment and remain involved for monitoring, fixes, and continuous improvements as your product evolves."
          showLine={false}
          AOSDelay= "1600"
          AOSDuration= "1200"
        />
      </div>
    </section>
  );
}

function Step({ step, title, description, showLine, AOSDelay, AOSDuration, AOSEasing = true }) {
  return (
    <div className="flex pb-[72px]" data-aos="fade-up" data-aos-delay= {AOSDelay} 
                    data-aos-duration= {AOSDuration} data-aos-easing = "easeInOut">
      <div className="pt-6 relative flex flex-col gap-2 items-center ">
        <div className="shrink-0 w-[40px] h-[40px] flex items-center justify-center text-[14px] font-medium rounded-full border border-[#d9dfe8] font-inter">
          {step}
        </div>
        {showLine && (
          <div className="bg-[#DD5240] w-[3px] h-full absolute top-20" />
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
