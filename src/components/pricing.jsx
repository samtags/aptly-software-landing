import SectionHeader from "./sectionHeader";
import SectionTitle from "./sectionTitle";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { AiOutlineFire } from "react-icons/ai";
import { HiArrowUpRight } from "react-icons/hi2";
import { TestimonyCard } from "./testimonies";
import { PiLayoutDuotone } from "react-icons/pi";
import { PiTargetDuotone } from "react-icons/pi";
import { PiRocketLaunchDuotone } from "react-icons/pi";

const plans = [
  {
    icon: (
      <PiLayoutDuotone className="text-[30px] text-gray-600 background-none" />
    ),
    title: "Primer",
    badge: null,
    description:
      "Best for early-stage startups building an MVP or small internal tools",
    price: "₱49,999 ",
    priceLabel: "/ Sprint",
    features: [
      "60 hours Dev Capacity",
      "1 Software Engineer",
      "Feature Releases (5-10 days)",
      { label: "Dedicated QA", color: "#9ca3af" },
      { label: "UI/UX Support", color: "#9ca3af" },
    ],
    theme: "light",
    className: "md:grid-col-span-1 lg:col-span-2",
    AOSDelay: 800
  },
  {
    icon: <PiTargetDuotone className="text-[30px] text-gray-600" />,
    title: "Plus",
    badge: { label: "Popular", icon: "fire" },
    description:
      "Tailored for businesses with existing systems that needs to scale",
    price: "₱ 99,999",
    priceLabel: "/ Sprint",
    features: [
      "120 Hours Dev Capacity",
      "2 Software Engineer",
      "Feature Releases (3-5 days)",
      "Dedicated QA",
      { label: "UI/UX Support", color: "#9ca3af" },
    ],
    theme: "light",
    className: "md:grid-col-span-1 lg:col-span-2",
    AOSDelay: 900
  },
  {
    icon: <PiRocketLaunchDuotone className="text-[30px] text-[#ffffffcc]" />,
    title: "Pro",
    badge: null,
    description:
      "Tailored digital experiences built for unique business needs.",
    price: "₱149,999",
    priceLabel: "/ Sprint",
    features: [
      "240 hours Dev Capacity",
      "3 Software Engineer, QA & UI/UX",
      "Feature Releases (2–3 days",
      "Dedicated QA",
      "UI/UX Support",
    ],
    theme: "dark",
    className: "md:col-span-full lg:col-span-2",
    AOSDelay: 1000
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
        Choose from tailored packages that fits your business goals and
        timeline.
      </p>

      <div className="bg-[#f9fafb] rounded-[48px] p-5 mt-12 flex flex-col gap-5 md:grid md:grid-cols-2 lg:grid-cols-6">
        {plans.map((plan, i) => (
          <PriceCard key={i} {...plan} />
        ))}

        <div className="p-6 bg-[#151619] rounded-[32px] flex flex-col justify-between service-accent relative md:col-span-1 lg:col-span-3">
          <div className="text-xl lg:text-2xl">
            <div className="text-white font-bold">What is Sprint?</div>
            <p className="mt-2 text-sm font-medium text-[#fffc]">
              A sprint is a fixed development cycle where a set of features is
              planned, built, and delivered. Typically delivered over
              approximately two (2) weeks, each sprint results in tangible
              progress you can review, test, and give feedback on before the
              next cycle begins.
            </p>

            <p className="mt-2 text-sm font-medium text-[#fffc]">
              Want to know how many Sprint your project might take?
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
          rateDescription="Retainership starts at ₱9,999 / month"
          rateDescriptionClassName="text-[#1b1e21]!"
          body={`"Best for ongoing support, maintenance, and small continuous improvements—ideal after 
            launch to keep your system stable, updated, and evolving with your needs."`}
          imageUrl="/png/YlbsDACEKLniAdZ2B90nBFRBt14.png"
          name="Elite-V"
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

function PriceCard({
  theme,
  className,
  icon,
  title,
  badge,
  description,
  price,
  priceLabel,
  features,
  AOSDelay = [],
}) {
  const isDark = theme === "dark";
  return (
    <div
      className={`bg-white rounded-[32px] p-7 service-card-shadow ${className} ${isDark && "bg-[#151619]! text-white!"}`} 
      data-aos= "fade-up"
      data-aos-delay= {AOSDelay}
    >
      <div className="w-[44px] h-[44px] flex items-center justify-center">
        {icon}
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
      <p
        className={`mt-2 text-sm font-medium text-[#50576b] md:max-w-[500px] ${isDark && "text-[#fffc]"}`}
      >
        {description}
      </p>
      <div className="flex items-center gap-1 my-7">
        <span className="font-bold text-[20px] lg:text-[26px]">{price}</span>
        <span className="text-sm">{priceLabel}</span>
      </div>
      <div
        className={`border-t border-[#eff3f7] ${isDark && "border-[#ffffff14]!"}`}
      />
      <ul
        className={`py-7 flex flex-col gap-3 text-[#323745] ${isDark && "text-white"}`}
      >
        {features.map((f, i) => (
          <Feature key={i} color={typeof f === "object" ? f.color : "#ff5147"}>
            {typeof f === "object" ? f.label : f}
          </Feature>
        ))}
      </ul>
      <button
        className={`w-full rounded-full bg-[#151619] text-white py-4 text-sm font-medium ${isDark && "bg-[#fff]! text-[#151619]!"}`}
      >
        Get Started Now
      </button>
    </div>
  );
}
