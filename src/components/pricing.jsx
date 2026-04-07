import SectionHeader from "./sectionHeader";
import SectionTitle from "./sectionTitle";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { LuFileCode } from "react-icons/lu";
import { AiOutlineFire } from "react-icons/ai";
import { HiArrowUpRight } from "react-icons/hi2";
import { TestimonyCard } from "./testimonies";

const plans = [
  {
    title: "Starter",
    badge: { label: "New", icon: null },
    description: "Best for individuals and small teams just getting started online.",
    price: "$999+",
    priceLabel: "Fixed",
    features: [
      "Junior Designer",
      "14-21 Days turnaround time",
      { label: "One Active Request", color: "#9ca3af" },
      "Basic SEO Setup",
      "Email Support",
      "50/50 Secure payment",
    ],
    theme: "light",
    className: "md:grid-col-span-1 lg:col-span-2",
  },
  {
    title: "Landing Page",
    badge: { label: "Popular", icon: "fire" },
    description: "Ideal for designing or redesigning a website to increase your conversion rates.",
    price: "$2,999+",
    priceLabel: "Fixed",
    features: [
      "Senior Designer",
      "10-14 Days turnaround time",
      { label: "One Active Request", color: "#9ca3af" },
      "SEO Optimization",
      "Slack Channel",
      "50/50 Secure payment",
    ],
    theme: "light",
    className: "md:grid-col-span-1 lg:col-span-2",
  },
  {
    title: "Enterprise",
    badge: null,
    description: "Full-scale solution for large businesses that need a dedicated team and unlimited capacity.",
    price: "$9,999+",
    priceLabel: "Fixed",
    features: [
      "Dedicated Team",
      "Custom turnaround",
      { label: "Unlimited Requests", color: "#9ca3af" },
      "Advanced SEO",
      "Dedicated Slack Channel",
      "Dedicated Account Manager",
    ],
    theme: "dark",
    className: "md:col-span-full lg:col-span-2",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="pt-[96px] px-5 max-w-[1100px] mx-auto">
      <div className="text-center">
        <SectionTitle>Pricing Plans</SectionTitle>
      </div>
      <SectionHeader
        main="Flexible Pricing built to"
        sub="Scale Businesses"
        className="mt-4 text-center max-w-[480px] mx-auto"
      />
      <p className="text-center text-[#697289] text-[14px] md:text-[15px] font-medium mt-4 max-w-[450px] mx-auto">
        Find out how our happy clients are raving about us.
      </p>

      <div className="bg-[#f9fafb] rounded-[48px] p-5 mt-12 flex flex-col gap-5 md:grid md:grid-cols-2 lg:grid-cols-6">

        {plans.map((plan, i) => (
          <PriceCard key={i} {...plan} />
        ))}

        <div className="p-6 bg-[#151619] rounded-[32px] flex flex-col justify-between service-accent relative md:col-span-1 lg:col-span-3">
          <div className="text-xl lg:text-2xl">
            <div className="text-white font-bold">Can't decide? Let's talk</div>
            <p className="mt-2 text-sm font-medium text-[#fffc]">
              Strategic web design, SEO-driven content, and paid ad campaigns
              tailored to drive result and conversions.
            </p>
          </div>
          <div>
            <button className="flex justify-center items-center gap-3 bg-white text-sm font-medium pl-4 py-1 pr-1 rounded-full border border-[#d2dae4] text-[#323745] mt-5">
              Book a call
              <div className="bg-[#f3f5f6] p-2 rounded-full">
                <HiArrowUpRight strokeWidth={1} fontSize={12} />
              </div>
            </button>
          </div>
        </div>

       <TestimonyCard
          className="md:col-span-1 lg:col-span-3"
          rateDescription="Increased conversation rate by 400%"
          rateDescriptionClassName="text-[#1b1e21]!"
          body={`"We needed a high-converting website, and Bravio delivered. Their expertise helped us increase conversion rate by 400%"`}
          imageUrl="/png/YlbsDACEKLniAdZ2B90nBFRBt14.png"
          name="Danielle Reyes"
          company="Founder, Ember & Co"
          hideQouteIcon
        />
      </div>
    </section>
  );
}

function Feature({ children, color = "#ff5147" }) {
  return (
    <li className="font-medium text-sm flex gap-2 items-center">
      <RiCheckboxCircleFill color={color} />
      {children}
    </li>
  );
}

function PriceCard({ theme, className, title, badge, description, price, priceLabel, features = [] }) {
  const isDark = theme === "dark";
  return (
    <div className={`bg-white rounded-[32px] p-7 service-card-shadow ${className} ${isDark && "bg-[#151619]! text-white!"}`}>
      <div className="w-[44px] h-[44px] flex items-center justify-center rounded-[10px] bg-[#f9fafb]">
        <LuFileCode className="text-[20px] text-[#50576b]" />
      </div>
      <div className="font-bold text-[20px] lg:text-[26px] mt-6 flex items-center gap-2">
        {title}
        {badge && (
          <div className="flex items-center gap-1 text-[12px] font-medium bg-[#fff5f5] text-[#ff5147] px-3 py-1 rounded-full">
            {badge.icon === "fire" && <AiOutlineFire />}
            {badge.label}
          </div>
        )}
      </div>
      <p className={`mt-2 text-sm font-medium text-[#50576b] md:max-w-[500px] ${isDark && "text-[#fffc]"}`}>
        {description}
      </p>
      <div className="flex items-center gap-1 my-7">
        <span className="font-bold text-[20px] lg:text-[26px]">{price}</span>
        <span className="text-sm">{priceLabel}</span>
      </div>
      <div className={`border-t border-[#eff3f7] ${isDark && "border-[#ffffff14]!"}`} />
      <ul className={`py-7 flex flex-col gap-3 text-[#323745] ${isDark && "text-white"}`}>
        {features.map((f, i) => (
          <Feature key={i} color={typeof f === "object" ? f.color : "#ff5147"}>
            {typeof f === "object" ? f.label : f}
          </Feature>
        ))}
      </ul>
      <button className={`w-full rounded-full bg-[#151619] text-white py-4 text-sm font-medium ${isDark && "bg-[#fff]! text-[#151619]!"}`}>
        Get Started Now
      </button>
    </div>
  );
}