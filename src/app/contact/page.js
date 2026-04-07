import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import FAQs from "../../components/faqs";

export default function Contact() {
  return (
    <div>
      <div className="sticky top-0 left-0 top-0 top-0 w-full z-10">
        <Navbar />
      </div>
      <section className="w-full bg-[#f2f1ef] min-h-screen flex items-center justify-center px-6 py-14 md:px-12 lg:px-20">
        <div className="w-full max-w-[1100px]">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24 md:items-stretch">
            {/* LEFT */}
            <div className="flex flex-col gap-8 md:w-[340px] md:shrink-0 md:justify-between lg:w-[420px]">
              {/* TOP */}
              <div className="flex flex-col gap-5">
                {/* Bracket label */}
                <div className="relative inline-flex items-center px-2.5 py-[3px] text-[11.5px] text-[#111]">
                  <span className="absolute top-0 left-0 w-[7px] h-[7px] border-t border-l border-[#c0392b]"></span>
                  <span className="absolute bottom-0 right-0 w-[7px] h-[7px] border-b border-r border-[#c0392b]"></span>
                  Book a call
                </div>

                <h1 className="text-[36px] md:text-[40px] lg:text-[44px] font-bold text-[#111] leading-[1.1] tracking-[-0.02em]">
                  Let&apos;s collaborate
                </h1>

                <p className="text-[13px] text-[#888] leading-[1.65] max-w-[300px]">
                  Reach out and let&apos;s explore how we can bring your ideas
                  to life. Whether you&apos;re ready to begin or just have
                  questions.
                </p>
              </div>

              {/* BOTTOM */}
              <div className="flex flex-col gap-3">
                <p className="text-[15px] font-semibold text-[#111]">
                  {/* (510) 895-6500 */}
                </p>
                <p className="text-[21px] font-bold text-[#111] tracking-[-0.02em]">
                  mail.aptly@gmail.com
                </p>
                <p className="text-[12px] text-[#999] leading-relaxed">
                  Reach out to us via email or give us a call, we are happy to
                  assist you!
                </p>

                <div className="flex flex-col gap-[10px] mt-3">
                  <a
                    href="#"
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
                    href="#"
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
                    Instagram
                  </a>
                  <a
                    href="#"
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
            <div className="flex-1 flex flex-col gap-[9px] md:justify-center">
              {/* Name */}
              <div className="relative">
                <span className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[#bbb] pointer-events-none flex">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  >
                    <circle cx="8" cy="5.5" r="3" />
                    <path d="M1.5 15c0-3.59 2.91-6.5 6.5-6.5s6.5 2.91 6.5 6.5" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-white border border-[#dddbd7] rounded-full py-[13px] pl-[42px] pr-4 text-[13.5px] text-[#111] placeholder-[#aaa] outline-none focus:border-[#555] transition-colors appearance-none"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <span className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[#bbb] pointer-events-none flex">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  >
                    <circle cx="8" cy="8" r="3" />
                    <path d="M14.5 8A6.5 6.5 0 108 14.5" />
                  </svg>
                </span>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white border border-[#dddbd7] rounded-full py-[13px] pl-[42px] pr-4 text-[13.5px] text-[#111] placeholder-[#aaa] outline-none focus:border-[#555] transition-colors appearance-none"
                />
              </div>

              {/* Company — stacked sa mobile, side-by-side sa tablet+ */}
              <div className="flex flex-col sm:flex-row gap-[9px]">
                <div className="relative flex-1">
                  <span className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[#bbb] pointer-events-none flex">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    >
                      <rect x="2" y="6" width="12" height="9" rx="1" />
                      <path d="M5 6V4a3 3 0 016 0v2" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full bg-white border border-[#dddbd7] rounded-full py-[13px] pl-[42px] pr-4 text-[13.5px] text-[#111] placeholder-[#aaa] outline-none focus:border-[#555] transition-colors appearance-none"
                  />
                </div>
                <div className="relative flex-1">
                  <span className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[#bbb] pointer-events-none flex">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    >
                      <rect x="4.5" y="1" width="7" height="14" rx="2" />
                      <line x1="4.5" y1="4" x2="11.5" y2="4" />
                      <line x1="4.5" y1="12" x2="11.5" y2="12" />
                    </svg>
                  </span>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full bg-white border border-[#dddbd7] rounded-full py-[13px] pl-[42px] pr-4 text-[13.5px] text-[#111] placeholder-[#aaa] outline-none focus:border-[#555] transition-colors appearance-none"
                  />
                </div>
              </div>

              {/* Budget */}
              <div className="relative">
                <span className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[#bbb] pointer-events-none flex">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  >
                    <rect x="1" y="4.5" width="14" height="9" rx="1" />
                    <path d="M1 7.5h14" />
                    <circle cx="11.5" cy="10.5" r="1" />
                  </svg>
                </span>
                <select
                  defaultValue=""
                  className="w-full bg-white border border-[#dddbd7] rounded-full py-[13px] pl-[42px] pr-4 text-[13.5px] text-[#aaa] outline-none focus:border-[#555] transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select a budget...
                  </option>
                  <option>$1,000 – $5,000</option>
                  <option>$5,000 – $15,000</option>
                  <option>$15,000 – $50,000</option>
                  <option>$50,000+</option>
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
              <div className="relative">
                <span className="absolute left-[14px] top-[14px] text-[#bbb] pointer-events-none flex">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  >
                    <path d="M14 1H2a1 1 0 00-1 1v9a1 1 0 001 1h2v3l3-3h7a1 1 0 001-1V2a1 1 0 00-1-1z" />
                  </svg>
                </span>
                <textarea
                  placeholder="What can we help you with?"
                  className="w-full bg-white border border-[#dddbd7] rounded-[18px] py-[13px] pl-[42px] pr-4 text-[13.5px] text-[#111] placeholder-[#aaa] outline-none focus:border-[#555] transition-colors resize-none h-[128px] appearance-none"
                />
              </div>

              {/* Send */}
              <button
                type="button"
                className="w-full bg-[#0f0f0f] hover:bg-[#222] text-white text-[13.5px] font-medium rounded-full py-[15px] flex items-center justify-center gap-2 transition-colors cursor-pointer mt-0.5"
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
      </section>
      <FAQs />
      <Footer />
    </div>
  );
}
