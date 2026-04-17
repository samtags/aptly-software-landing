"use client";

import { useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import FAQs from "../../components/faqs";
import Hero from "../../components/hero";
import SectionTitle from "../../components/sectionTitle";
import {
  LuAtSign,
  LuBuilding2,
  LuDollarSign,
  LuMessageSquare,
  LuPhone,
  LuUser,
  LuWallet,
  LuWalletCards,
} from "react-icons/lu";
import { FaPesoSign } from "react-icons/fa6";
import CalendlyModal from "../../components/calendlyModals";

export default function Contact() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [calendlyUrl, setCalendlyUrl] = useState("");

  function handleSubmit() {
    const payload = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      company: document.getElementById("company").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value,
      budget: document.getElementById("budget").value,
    };
    if (!payload.name || !payload.email) {
      alert("Please fill in your name and email.");
      return;
    }

    const url = `https://calendly.com/chardcalips2/30min?name=${encodeURIComponent(payload.name)}&email=${encodeURIComponent(payload.email)}`;

    setCalendlyUrl(url);
    setIsCalendlyOpen(true);
  }

  return (
    <div className="contact-page">
      <div className="sticky top-0 left-0 top-0 top-0 w-full z-10">
        <Navbar />
      </div>
      <div className="hero flex mt-38 w-full px-8 mx-auto max-w-[1200px]">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 lg:gap-24 md:items-stretch w-full">
          {/* LEFT */}
          <div className="flex flex-1 flex-col gap-8 md:shrink-0 md:justify-between">
            {/* TOP */}
            <div className="flex flex-col gap-5">
              {/* Bracket label */}

              <span>
                <SectionTitle>Book a call</SectionTitle>
              </span>

              <h1 className="text-[36px] md:text-[40px] lg:text-[44px] font-bold text-[#111] leading-[1.1] tracking-[-0.02em]">
                Let&apos;s collaborate
              </h1>

              <p className="max-w-[300px] text-[#50576b] font-medium max-w-[475px]">
                Reach out and let&apos;s explore how we can bring your ideas to
                life. Whether you&apos;re ready to begin or just have questions.
              </p>
            </div>

            {/* BOTTOM */}
            <div className="flex flex-col gap-3">
              <p className="text-[15px] font-semibold text-[#111]">
                {/* (510) 895-6500 */}
              </p>
              <p className="text-2xl font-bold text-[#111] tracking-[-0.02em]">
                mail.aptly@gmail.com
              </p>
              <p className="max-w-[300px] text-[#50576b] font-medium max-w-[500px]">
                Reach out to us via email or give us a call, we are happy to
                assist you!
              </p>

              <div className="flex flex-col gap-[10px] mt-3">
                <a
                  href="https://www.facebook.com/share/1HAjDwa3mw/?mibextid=wwXIfrhttps://www.facebook.com/share/1HAjDwa3mw/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-[7px] text-[13px] text-[#111] hover:text-[#c0392b] transition-colors w-fit"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M2 12L12 2M12 2H5M12 2v7" />
                  </svg>
                  Facebook
                </a>
                <a
                  href="https://www.tiktok.com/@aptly.software?_r=1&_t=ZS-95KUtmwdYE0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-[7px] text-[13px] text-[#111] hover:text-[#c0392b] transition-colors w-fit"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M2 12L12 2M12 2H5M12 2v7" />
                  </svg>
                  TikTok
                </a>
                <a
                  href="https://www.linkedin.com/company/aptly-software-development-services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-[7px] text-[13px] text-[#111] hover:text-[#c0392b] transition-colors w-fit"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M2 12L12 2M12 2H5M12 2v7" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="flex flex-col gap-5 md:justify-center lg:min-w-[500px]">
            {/* Name */}
            <div className="relative">
              <LuUser className="absolute left-5 top-1/2 -translate-y-1/2 text-[#bbb] pointer-events-none flex" />
              <input
                id="name"
                type="text"
                placeholder="How may I address you?"
                className="w-full bg-white border border-[#dddbd7] rounded-full py-4 pl-12 pr-8 outline-none focus:border-[#DD5240] font-medium text-sm transition-colors appearance-none"
              />
            </div>

            {/* Email */}

            <div className="relative">
              <LuAtSign className="absolute left-5 top-1/2 -translate-y-1/2 text-[#bbb] pointer-events-none flex" />
              <input
                id="email"
                type="email"
                placeholder="What is your email address?"
                className="w-full bg-white border border-[#dddbd7] rounded-full py-4 pl-12 pr-8 outline-none focus:border-[#DD5240] font-medium text-sm transition-colors appearance-none"
              />
            </div>

            {/* Company — stacked sa mobile, side-by-side sa tablet+ */}
            <div className="flex flex-col sm:flex-row gap-[9px]">
              <div className="relative flex-1">
                <LuBuilding2 className="absolute left-5 top-1/2 -translate-y-1/2 text-[#bbb] pointer-events-none flex" />
                <input
                  id="company"
                  type="text"
                  placeholder="Company name"
                  className="w-full bg-white border border-[#dddbd7] rounded-full py-4 pl-12 pr-8 outline-none focus:border-[#DD5240] font-medium text-sm transition-colors appearance-none"
                />
              </div>

              <div className="relative flex-1">
                <LuPhone className="absolute left-5 top-1/2 -translate-y-1/2 text-[#bbb] pointer-events-none flex" />
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone number"
                  className="w-full bg-white border border-[#dddbd7] rounded-full py-4 pl-12 pr-8 outline-none focus:border-[#DD5240] font-medium text-sm transition-colors appearance-none"
                />
              </div>
            </div>

            <div className="relative">
              <LuMessageSquare className="absolute left-5 top-5 text-[#bbb] pointer-events-none flex" />

              <textarea
                id="message"
                placeholder="Let us know how can we help you?"
                rows={6}
                className="w-full bg-white border border-[#dddbd7] rounded-[18px] py-4 pl-12 pr-8 outline-none focus:border-[#DD5240] font-medium text-sm transition-colors appearance-none"
              />
            </div>

            {/* Budget */}
            <div className="relative">
              <LuWallet className="absolute left-5 top-1/2 -translate-y-1/2 text-[#bbb] pointer-events-none flex" />
              <select
                id="budget"
                defaultValue=""
                className="w-full bg-white border border-[#dddbd7] rounded-full py-4 pl-12 pr-8 outline-none focus:border-[#DD5240] font-medium text-sm transition-colors appearance-none cursor-pointer has-[option:disabled:checked]:text-[#959595]"
              >
                <option value="" disabled>
                  What is your budget range?
                </option>
                <option>₱15,000 - ₱30,000</option>
                <option>₱30,000 - ₱50,000</option>
                <option>₱50,000 - ₱80,000</option>
                <option>₱80,000 - ₱100,000</option>
                <option>₱100,000+</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#aaa] pointer-events-none">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M2 4l4 4 4-4" />
                </svg>
              </span>
            </div>

            {/* Message */}

            {/* Send */}
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-[#0f0f0f] hover:bg-[#222] text-white font-medium rounded-full py-4 flex items-center justify-center gap-2 transition-colors cursor-pointer mt-0.5"
            >
              Send Message
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <CalendlyModal
        url={calendlyUrl}
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
      />

      <div className="bg-[#F9FAFB] m-4 mt-16 lg:mt-38 mb-8 lg:mb-16 pb-20 rounded-[52px]">
        <div className="px-8 mx-auto max-w-[1200px] pt-10 lg:pt-24">
          <FAQs cardClassName="bg-white! shadow-md" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
