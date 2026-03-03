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
              highligh="1,200+"
              title="Successful Projects Delivered"
              description="From startups to enterprises, we've built high-performing websites and digital experiences that drive real results."
              className="flex-1 shrink-0"
            />
            <Card
              highligh="5K"
              title="Ad Campaigns Optimized"
              description="We've helped brands lower acquisition costs and boost ROI with data-driven paid media strategies."
              className="flex-1 shrink-0"
            />
          </div>
          <Card
            highligh="$10M+"
            title="Revenue Generated for Clients"
            description="Our strategic design, marketing, and conversion optimization have helped businesses scale and maximize profits."
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
