import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import SectionTitle from "../../components/sectionTitle";
import SectionHeader from "../../components/sectionHeader";
import Link from "next/link";
import { LuNotepadText } from "react-icons/lu";

export default function TermsOfService() {
  return (
    <div className="terms-of-service-page">
      
      <div className="sticky top-0 w-full z-50">
        <Navbar />
      </div>

     <div className="p-10 mt-1 md:mt-3 lg:mt-5 flex flex-col items-center">
        <SectionTitle className = "mt-4 mb-4"> Legal</SectionTitle>
  <SectionHeader
          main="Privacy Policy"
          className="max-w-[550px] mx-auto px-5 md:px-0 flex flex-col items-center" 
        />
      <p className="text-[#697289] text-[14px] md:text-[15px] font-medium mt-4 max-w-[450px] text-center mx-auto">
          Last updated: April 28, 2026.
          </p>
      </div>

      <div className="pt-[96px] pb-[96px] px-5 flex flex-col md:flex-row gap-8 md:gap-25 max-w-[1100px] mx-auto">
        <div className="p-5 md:sticky md:top-24 self-start max-w-[220px]">
          <p className="md:text-[16px] font-medium">Policies</p>
          <ul className="pt-2">
            <li>
              <Link className = "text-[#697289] md:text-[14px] font-medium flex flex-row items-center" href ="/privacy-policy"><LuNotepadText className="mr-1"/>Privacy Policy</Link>
            </li>
            <li>
              <Link className = " text-[#697289] md:text-[14px] font-medium flex flex-row items-center" href ="/terms-of-service"><LuNotepadText className="mr-1"/>Terms of Service</Link>
            </li>
          </ul>
        </div>
        <div className="max-w-[670px]">

     <p className="md:text-[32px] font-bold">Introduction</p>

        <p className="md:text-[24px] font-bold mt-7">Purpose of the Policy</p>
            <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            This Privacy Policy outlines how [Agency Name] collects, uses, discloses, and protects your information when you visit our website or interact with our services. It is designed to help you understand the types of data we collect, why we collect it, and how we use and manage that information. By making our data practices transparent, we aim to foster trust and ensure compliance with applicable data protection laws.
            </p>

        <p className="md:text-[24px] font-bold mt-5">Scope of Coverage</p>
            <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            This policy applies to all visitors, users, and others who access our website or use our services, regardless of their physical location or device used. It covers all data interactions across our platforms, including our primary website, contact forms, email communications, and third-party service integrations that collect or process data on our behalf.
            </p>
            <p className="md:text-[24px] font-bold mt-5">Consent</p>
            <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            By using our website and services, you consent to the collection and use of your information as described in this Privacy Policy. If you do not agree with the practices outlined here, we recommend discontinuing use of our services. Continued use of our website following the publication of updates constitutes your acceptance of those changes.
            </p>

    <p className="md:text-[32px] font-bold mt-7">Information We Collect</p>
        <p className="md:text-[24px] font-bold mt-5">Personal Information</p>
            <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            We may collect personally identifiable information such as your full name, email address, phone number, job title, company name, and any other details you provide voluntarily through our contact forms or communication channels. This information is collected when you submit inquiries, request quotes, subscribe to newsletters, or engage in any other form of communication with us.
            </p>

        <p className="md:text-[24px] font-bold mt-5">Non-Personal Information</p>
            <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            Non-personal information includes data that does not directly identify you but provides insights into your usage of our website. This may include your browser type, operating system, language preferences, referring URLs, and device information. This data helps us analyze trends, administer the site, and improve user experience.
            </p>

        <p className="md:text-[24px] font-bold mt-5">Information Collected Automatically</p>
            <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            We use cookies, tracking pixels, and third-party analytics tools like Google Analytics to collect information about your interaction with our site. This includes pages visited, time spent on each page, user flow, and interactions with site features. These tools help us understand visitor behavior and optimize our site accordingly.
            </p>

        <p className="md:text-[32px] font-bold mt-7">How We Use Your Information</p>

        <p className="md:text-[24px] font-bold mt-5">To Provide and Maintain Our Services</p>
            <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            Your information is essential for us to deliver the services you request. We use it to process your inquiries, manage project communications, create client accounts, and fulfill our contractual obligations. Without this information, we may be unable to provide personalized service or maintain consistent communication.
            </p>

        <p className="md:text-[24px] font-bold mt-5">To Communicate with You</p>
            <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            We may use your contact information to send you service-related messages, respond to questions, deliver project updates, or provide administrative notices. With your consent, we may also send promotional materials, newsletters, and information about new offerings or features that may interest you.
            </p>

        <p className="md:text-[24px] font-bold mt-5">To Improve User Experience</p>
            <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            We use the data we collect to analyze how our website is being used and to identify areas for improvement. By understanding user behavior, we can refine our content, streamline navigation, and ensure the website functions seamlessly across devices. Your feedback and behavioral data inform design and development decisions that enhance overall usability.
            </p>

    <p className="md:text-[32px] font-bold mt-7">Sharing and Disclosure</p>

        <p className="md:text-[24px] font-bold mt-5">Service Providers and Partners</p>
            <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            We may share your information with third-party service providers who assist us in hosting, maintaining, and analyzing our website and communications. These partners are contractually obligated to safeguard your information and only use it for the purposes specified by us.
            </p>

        <p className="md:text-[24px] font-bold mt-5">For Legal Requirements</p>
            <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            We may disclose your personal information if required to do so by law or in response to valid legal processes such as subpoenas, court orders, or government requests. We also reserve the right to disclose information to protect our legal rights, prevent fraud, and ensure the security of our users and the public.
            </p>

        <p className="md:text-[24px] font-bold mt-5">In Business Transfers</p>
            <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            In the event that [Agency Name] is involved in a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of the business transaction. We will ensure that any new entity handling your data is bound by privacy obligations consistent with this policy.
            </p>

    <p className="md:text-[32px] font-bold mt-7">Data Security</p>

        <p className="md:text-[24px] font-bold mt-5">How We Protect Your Data</p>
            <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            We implement industry-standard security measures, including encryption, firewalls, and secure access controls, to protect your personal data from unauthorized access, disclosure, alteration, or destruction. Our internal processes are designed to minimize data exposure and mitigate potential security risks.
            </p>

    <p className="md:text-[32px] font-bold mt-7">Third-Party Links and Services</p>

        <p className="md:text-[24px] font-bold mt-5">External Websites</p>
            <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            Our website may contain links to other websites not operated by [Agency Name]. We are not responsible for the privacy practices or the content of these external sites. We encourage users to review the privacy policies of any third-party sites they visit.
            </p>

        <p className="md:text-[24px] font-bold mt-5">Embedded Content</p>
            <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            Articles or pages on our website may include embedded content (e.g., videos, images, articles) from other websites. This content behaves in the same way as if the visitor had visited the original website, which may collect data or use cookies independently.
            </p>

        </div>
      </div>
      <Footer />
    </div>
  );
}

