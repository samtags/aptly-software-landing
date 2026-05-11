import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import SectionTitle from "../../../components/sectionTitle";
import SectionHeader from "../../../components/sectionHeader";
import Link from "next/link";

export const metadata = {
  title: "Dici Support | Aptly Software",
  description:
    "Contact Aptly for help with the Dici app: email support, report issues, feature requests, and privacy policy.",
};

const SUPPORT_EMAIL = "mail.aptly@gmail.com";
const FACEBOOK_GROUP_URL = "https://www.facebook.com/groups/aptly.dici";

export default function DiciSupportPage() {
  return (
    <div className="dici-support-page">
      <div className="sticky top-0 w-full z-50">
        <Navbar />
      </div>

      <div className="p-10 mt-1 md:mt-3 lg:mt-5 flex flex-col items-center">
        <SectionTitle className="mt-4 mb-4">Support</SectionTitle>
        <SectionHeader
          main="Dici Support"
          className="max-w-[550px] mx-auto px-5 md:px-0 flex flex-col items-center"
        />
        <p className="text-[#697289] text-[14px] md:text-[15px] font-medium mt-4 max-w-[520px] text-center mx-auto">
          Need help with Dici? Reach us for app issues, feedback, or feature
          requests.
        </p>
      </div>

      <div className="pb-24 px-5 max-w-[670px] mx-auto">
        <section className="mb-10">
          <h2 className="md:text-[24px] font-bold mb-4">Contact</h2>
          <p className="text-[#697289] md:text-[16px] font-normal mb-3">
            <span className="text-[#0f1115] font-medium">App:</span> Dici
          </p>
          <p className="text-[#697289] md:text-[16px] font-normal">
            Email:{" "}
            <a
              className="text-[#dd5240] font-medium underline underline-offset-2 hover:opacity-90"
              href={`mailto:${SUPPORT_EMAIL}`}
            >
              {SUPPORT_EMAIL}
            </a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="md:text-[24px] font-bold mb-4">
            How to report issues
          </h2>
          <p className="text-[#697289] md:text-[16px] font-normal mb-3">
            Join our community group to report bugs, share feedback, and ask
            questions—our team monitors the group for Dici-related reports.
          </p>
          <p className="text-[#697289] md:text-[16px] font-normal">
            <a
              className="text-[#dd5240] font-medium underline underline-offset-2 hover:opacity-90"
              href={FACEBOOK_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Dici community on Facebook
            </a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="md:text-[24px] font-bold mb-4">Common questions</h2>
          <ul className="text-[#697289] md:text-[16px] font-normal space-y-4 list-disc pl-5">
            <li>
              <strong className="text-[#0f1115] font-semibold">
                General help:
              </strong>{" "}
              Email{" "}
              <a
                className="text-[#dd5240] font-medium underline underline-offset-2"
                href={`mailto:${SUPPORT_EMAIL}`}
              >
                {SUPPORT_EMAIL}
              </a>{" "}
              with a short description of what you need.
            </li>
            <li>
              <strong className="text-[#0f1115] font-semibold">
                Bugs or crashes:
              </strong>{" "}
              Post in the{" "}
              <a
                className="text-[#dd5240] font-medium underline underline-offset-2"
                href={FACEBOOK_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook group
              </a>{" "}
              or email us with your device model and iOS version if you prefer.
            </li>
            <li>
              <strong className="text-[#0f1115] font-semibold">
                Feature requests:
              </strong>{" "}
              Share ideas in the{" "}
              <a
                className="text-[#dd5240] font-medium underline underline-offset-2"
                href={FACEBOOK_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook group
              </a>
              , or email{" "}
              <a
                className="text-[#dd5240] font-medium underline underline-offset-2"
                href={`mailto:${SUPPORT_EMAIL}`}
              >
                {SUPPORT_EMAIL}
              </a>
              .
            </li>
          </ul>
        </section>

        <section>
          <h2 className="md:text-[24px] font-bold mb-4">Privacy</h2>
          <p className="text-[#697289] md:text-[16px] font-normal">
            <Link
              className="text-[#dd5240] font-medium underline underline-offset-2 hover:opacity-90"
              href="/dici/privacy-policy"
            >
              Privacy Policy for Dici
            </Link>
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
