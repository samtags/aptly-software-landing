import SectionHeader from "./sectionHeader";
import SectionTitle from "./sectionTitle";

export default function Testimonies() {
  return (
    <section className="pt-[96px] px-5 max-w-[1100px] mx-auto">
      <div className="text-center">
        <SectionTitle>Testimonials</SectionTitle>
      </div>
      <SectionHeader
        main="Results that speaks volume"
        sub="Read success stories"
        className="text-center max-w-[500px] mx-auto"
      />
      <p className="text-center text-[#697289] text-[14px] md:text-[15px] font-medium mt-4 max-w-[450px] mx-auto">
        Find out how our happy clients are raving about us.
      </p>

      <div className="bg-[#f9fafb] rounded-[48px] p-5 mt-12 flex flex-col gap-5">
        <Card
          rate="8X"
          rateDescription="Increase in conversion rate"
          body="“We needed a modern, high-converting website, and the Bravio team delivered beyond expectations. Their design and SEO expertise helped us increase conversion rate by 800% in just two weeks. Highly recommend!”"
          imageUrl="/png/YlbsDACEKLniAdZ2B90nBFRBt14.png"
          name="David Callahan"
          company="Marketing Director, Spotify"
          icon={<PlaceholderIcon />}
        />
        <Card
          rate="2X"
          rateDescription="Increase in lead generation"
          rateClassName="flex items-center gap-3"
          body='"From branding to website design, every detail was meticulously handled. The team’s expertise helped us launch faster, and the results have been phenomenal!"'
          imageUrl="/png/XaslT2pMztTMP7q7d0zrknfM4.png"
          name="David Callahan"
          company="Marketing Director, Spotify"
          icon={<PlaceholderIcon />}
        />
        <Card
          body='"Their animation work took our product videos to the next level. The team truly understands user experience and storytelling."'
          imageUrl="/png/TGbM5VpvWt795kur8Wf2anMLlhk.png"
          name="Tom Becker"
          company="Founder, Pulse Core"
          theme="dark"
        />
        <Card
          body='""We needed a modern, high-converting website, and Bravio delivered. Their expertise helped us increase conversion rate by 400% in just a week!"'
          imageUrl="/png/YlbsDACEKLniAdZ2B90nBFRBt14.png"
          name="Danielle Reyes"
          company="Founder, Ember & Co"
        />
      </div>
    </section>
  );
}

function Card({
  rate,
  rateDescription,
  rateClassName,
  body,
  imageUrl,
  name,
  company,
  icon,
  theme,
}) {
  return (
    <div
      className={`
      bg-white rounded-[32px] p-7 service-card-shadow md:order-[1] lg:order-[2] md:col-span-full lg:col-span-2 lg:row-span-1
      ${theme === "dark" && "bg-[#151619]!"}
    `}
    >
      {(rate || rateDescription) && (
        <div className={`mb-6 ${rateClassName}`}>
          {rate && <div className="font-bold text-[28px]">{rate}</div>}
          {rateDescription && (
            <div className="text-[#50576b] text-[18px] font-bold">
              {rateDescription}
            </div>
          )}
        </div>
      )}

      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="var(--token-72f1587e-8bbc-424b-bdb9-13d999bb0e54, rgb(255, 81, 71))"
          className="w-[24px] h-[24px] icon icon-tabler icons-tabler-filled icon-tabler-quote"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>{" "}
          <path d="M9 5a2 2 0 0 1 2 2v6c0 3.13 -1.65 5.193 -4.757 5.97a1 1 0 1 1 -.486 -1.94c2.227 -.557 3.243 -1.827 3.243 -4.03v-1h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 2 -2z"></path>{" "}
          <path d="M18 5a2 2 0 0 1 2 2v6c0 3.13 -1.65 5.193 -4.757 5.97a1 1 0 1 1 -.486 -1.94c2.227 -.557 3.243 -1.827 3.243 -4.03v-1h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 2 -2z"></path>{" "}
        </svg>
        <p
          className={`text-[#50576b] text-[14px] font-medium mt-1 ${theme === "dark" && "text-white"}`}
        >
          {body}
        </p>
      </div>
      <div className="flex justify-between items-center mt-7">
        <div className="flex items-center gap-3">
          <div className="w-[40px] h-[40px] rounded-full bg-gray-100 overflow-hidden">
            <img
              src={imageUrl}
              alt={`${name} avatar`}
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col">
            <span
              className={`text-[14px] text-[#0f1115] font-bold ${theme === "dark" && "text-white!"}`}
            >
              {name}
            </span>

            <span
              className={`text-[12px] text-[#697289] font-medium ${theme === "dark" && "text-[#fff9]"}`}
            >
              {company}
            </span>
          </div>
        </div>
        {icon}
      </div>
    </div>
  );
}

function PlaceholderIcon() {
  return (
    <svg
      className="w-[24px] h-[24px]"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="var(--token-67a06f34-9a19-47d7-8316-48f0ad3f7be7, rgb(105, 114, 137))"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.06364 7.50914C4.70909 4.24092 8.09084 2 12 2C14.6954 2 16.959 2.99095 18.6909 4.60455L15.8227 7.47274C14.7864 6.48185 13.4681 5.97727 12 5.97727C9.39542 5.97727 7.19084 7.73637 6.40455 10.1C6.2045 10.7 6.09086 11.3409 6.09086 12C6.09086 12.6591 6.2045 13.3 6.40455 13.9C7.19084 16.2636 9.39542 18.0227 12 18.0227C13.3454 18.0227 14.4909 17.6682 15.3864 17.0682C16.4454 16.3591 17.15 15.3 17.3818 14.05H12V10.1818H21.4181C21.5364 10.8363 21.6 11.5182 21.6 12.2273C21.6 15.2727 20.5091 17.8363 18.6181 19.5773C16.9636 21.1046 14.7 22 12 22C8.09084 22 4.70909 19.7591 3.06364 16.4909C2.38638 15.1409 2 13.6136 2 12C2 10.3864 2.38638 8.85911 3.06364 7.50914Z"></path>
    </svg>
  );
}
