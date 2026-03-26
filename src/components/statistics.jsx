import SectionHeader from "./sectionHeader";
import SectionTitle from "./sectionTitle";

export default function Statistics() {
  return (
    <div className="pt-22">
      <div className="text-center">
        <SectionTitle>Impact</SectionTitle>
        <div className="mt-1 md:mt-3 lg:mt-5" />
        <SectionHeader
          main="Aptly simplifies the process,"
          sub="and delivers results."
          className="max-w-[550px] mx-auto px-5 md:px-0"
        />

        <div className="flex flex-col lg:flex-row gap-5 p-5 mt-4 lg:mt-11 max-w-[1300px] mx-auto">
          <div className="flex flex-col gap-5 md:flex-row lg:w-2/3">
            <Card
              highligh="99.9%"
              title="Platform Uptime"
              description="Modern infrastructure engineered for reliability and continuous operation."
              className="flex-1 shrink-0"
            />
            <Card
              highligh="10K+"
              title="Active Users Across Platforms"
              description="Applications built for real usage, not just demos or portfolios."
              className="flex-1 shrink-0"
            />
          </div>
          <Card
            highligh="3+"
            title="Years Building Systems"
            description="Experience operating software in real-world environments."
            className="lg:w-1/3"
          />
        </div>
      </div>
    </div>
  );
}

function Card({ highligh, title, description, className }) {
  return (
    <div
      className={`text-left bg-[#f9fafb] rounded-[32px] p-12 px-10 ${className}`}
    >
      <header className="text-[32px] md:text-[40px] lg:text-[48px] font-bold">
        {highligh}
      </header>
      <div className="text-[#697289] text-[18px] lg:text-[20px] font-bold mt-1">
        {title}
      </div>
      <p className="text-[#697289] text-[14px] md:text-[15px] font-medium mt-4">
        {description}
      </p>
    </div>
  );
}
