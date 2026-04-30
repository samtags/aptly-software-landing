"use client";

import { BsFileText, BsPerson, BsGrid, BsTelephone } from "react-icons/bs";
import Link from "next/link";

const companyLinks = [
  {
    icon: <BsFileText className="w-4 h-4" />,
    label: "Testimonials",
    description: "Latest from the Testimonials",
    href: "/#testimonials",
  },
  {
    icon: <BsPerson className="w-4 h-4" />,
    label: "Projects",
    description: "Learn more about us",
    href: "/#projectHistory",
  },
  {
    icon: <BsGrid className="w-4 h-4" />,
    label: "Pricing",
    description: "See our pricing",
    href: "/#pricing",
  },
  {
    icon: <BsTelephone className="w-4 h-4" />,
    label: "Book a call",
    description: "Let's work together",
    href: "/contact",
  },
];

const pageLinks = [
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Terms of service", href: "/terms-of-service" },
//   { label: "Pricing", href: "/pricing", isNew: true },
  { label: "Contact us", href: "/contact" },
];

export default function CompanyDropdown() {
  return (
    <div
      className="
        absolute top-full left-0 pt-3
        opacity-0 invisible translate-y-1
        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
        transition-all duration-200 ease-out
        z-50
      "
    >
      {/* Arrow pointer */}
      <div className="absolute top-[10px] left-8 w-3 h-3 bg-white rotate-45 rounded-sm shadow-sm z-0" />

      {/* Dropdown card */}
      <div className="relative bg-white rounded-2xl shadow-xl border border-black/5 p-5 flex gap-6 min-w-[440px] z-10">

        {/* Left col — Company links with icons */}
        <div className="flex flex-col gap-0.5 flex-1">
          <p className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest mb-2 px-2">
            Company
          </p>
          {companyLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-start gap-3 px-2 py-2 rounded-xl hover:bg-neutral-100 transition-colors duration-150 group/item"
            >
              {/* Icon box */}
              <div className="w-8 h-8 rounded-lg bg-neutral-100 group-hover/item:bg-neutral-200 flex items-center justify-center text-neutral-500 shrink-0 transition-colors duration-150 mt-0.5">
                {item.icon}
              </div>
              {/* Text */}
              <div>
                <p className="text-sm font-medium text-neutral-900 leading-tight">
                  {item.label}
                </p>
                <p className="text-xs text-neutral-400 mt-0.5">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="w-px bg-neutral-100 self-stretch" />

        {/* Right col — Page links (simple list) */}
        <div className="flex flex-col gap-0.5 min-w-[140px]">
          <p className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest mb-2 px-2">
            Pages
          </p>
          {pageLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-2 px-2 py-2 rounded-xl hover:bg-neutral-100 transition-colors duration-150 text-sm text-neutral-700 hover:text-neutral-900"
            >
              {item.label}
              {item.isNew && (
                <span className="text-[9px] font-bold bg-emerald-100 text-emerald-600 px-1.5 py-0.5 rounded-full uppercase tracking-wide">
                  New
                </span>
              )}
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}