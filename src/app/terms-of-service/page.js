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
          main="Terms of Service"
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
              <Link className = "text-[#697289] md:text-[14px] font-medium flex flex-row items-center" href ="privacy-policy"><LuNotepadText className="mr-1"/>Privacy Policy</Link>
            </li>
            <li>
              <Link className = " text-[#697289] md:text-[14px] font-medium flex flex-row items-center" href ="/terms-of-service"><LuNotepadText className="mr-1"/>Terms of Service</Link>
            </li>
          </ul>
        </div>
        <div className="max-w-[670px]">

      <p className="md:text-[32px] font-bold">Introduction</p>
        <p className="md:text-[24px] font-bold mt-7">Purpose of the Terms</p>
              <p className=" text-[#697289] md:text-[16px] font-normal mt-5">These Terms of Service govern your access to and use of Aptly Software Development Services's website and services.
             They are designed to provide clarity on the rights and obligations of both parties involved.
              By clearly outlining expectations, we aim to ensure a smooth and transparent experience for all users.</p>
              <p className=" text-[#697289] md:text-[16px] font-normal mt-5">By accessing or using our website, you agree to comply with these Terms, acknowledging that you have read, understood, 
              and accepted them. If you do not agree with any part of these Terms, please do not use our services. 
              Continued use of our services implies your ongoing acceptance of these terms.</p>

          <p className="md:text-[24px] font-bold mt-5">Modifications to Terms</p>
              <p className=" text-[#697289] md:text-[16px] font-normal mt-5">We reserve the right to modify or update these Terms at any time to reflect changes in our practices, 
                legal requirements, or service offerings. Updates will be posted on this page, with the "Last Updated" date clearly indicated. 
                We encourage you to review these Terms periodically to stay informed.</p>

        <p className="md:text-[32px] font-bold mt-7">Definitions</p>
          <p className="md:text-[24px] font-bold mt-7">Key Terms and Definitions</p>
              <p className=" text-[#697289] md:text-[16px] font-normal mt-5">In these Terms, "we," "us," and "our" refer to Aptly. 
                "You" and "user" refer to any person accessing or using our website and services. "Content" includes text, images,
                 graphics, and any other materials provided through our services.</p>

          <p className="md:text-[24px] font-bold mt-5">User Responsibilities</p>
              <p className=" text-[#697289] md:text-[16px] font-normal mt-5">Users are expected to provide accurate and up-to-date information,
                 respect other users, and comply with all applicable laws and regulations while using our services. You are responsible for 
                 maintaining the security of your account credentials (if applicable).</p>

          <p className="md:text-[24px] font-bold mt-5">Service Description</p>   
              <p className=" text-[#697289] md:text-[16px] font-normal mt-5">We provide creative, design, and consulting services,
                 including graphic design, web design, branding, and other digital services as described on our website. 
                 Our service offerings may evolve over time, and additional terms may apply to specific services.</p>

        <p className="md:text-[32px] font-bold mt-7">Eligibility</p>
          <p className="md:text-[24px] font-bold mt-7">Age Requirements</p> 
              <p className=" text-[#697289] md:text-[16px] font-normal mt-5">Our services are intended for users who are at least
                 18 years old. If you are under 18, you may only use our services with the involvement of a parent or legal guardian 
                 who agrees to these Terms.</p>

          <p className="md:text-[24px] font-bold mt-5">Legal Authority</p>
              <p className=" text-[#697289] md:text-[16px] font-normal mt-5">You represent that you have the legal capacity and
                authority to enter into these Terms and use our services in compliance with applicable laws. Misrepresentation
                of your eligibility may result in termination of your access.</p>

          <p className="md:text-[24px] font-bold mt-5">User Representations</p>  
              <p className=" text-[#697289] md:text-[16px] font-normal mt-5">By using our services, you represent and warrant that
               the information you provide is accurate and that you will not use our services for any fraudulent or unauthorized
                purposes.</p>

        
      <p className="md:text-[32px] font-bold mt-7">Use of Our Services</p>
          <p className="md:text-[24px] font-bold mt-5">Permitted Uses</p>
              <p className=" text-[#697289] md:text-[16px] font-normal mt-5">You are granted a limited, non-exclusive, non-transferable 
                license to use our services for lawful purposes, including browsing our website, requesting services, and accessing 
                client materials we provide.</p>

          <p className="md:text-[24px] font-bold mt-5">Prohibited Uses</p>
              <p className=" text-[#697289] md:text-[16px] font-normal mt-5">You may not use our services to engage in illegal 
                activities, violate the rights of others, transmit harmful content, or attempt to gain unauthorized access to our 
                systems or data.</p>        

          <p className="md:text-[24px] font-bold mt-5">User-Generated Content</p>
              <p className=" text-[#697289] md:text-[16px] font-normal mt-5">Any content you submit to us, such as feedback,
                 project materials, or comments, must be your original work and must not violate any third-party rights. 
                 By submitting content, you grant us a non-exclusive, royalty-free license to use, modify, and display such content.</p>

      <p className="md:text-[32px] font-bold mt-7">Intellectual Property Rights</p>
          <p className="md:text-[24px] font-bold mt-5">Ownership of Content</p>
              <p className=" text-[#697289] md:text-[16px] font-normal mt-5">All content, designs, logos, and materials provided by us
                 are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, modify, or distribute
                  our content without written permission.<br/><br/>We grant you a limited, non-exclusive license to access and use our 
                  website and services for personal or business purposes. This license is revocable at our discretion. <br/> <br/>You are 
                  prohibited from copying, redistributing, or creating derivative works of our intellectual property without authorization.</p>
     
      <p className="md:text-[32px] font-bold mt-7">Disclaimers and Warranties</p>
          <p className="md:text-[24px] font-bold mt-5">No Warranty of Accuracy or Reliability</p>
              <p className=" text-[#697289] md:text-[16px] font-normal mt-5">Our services are provided "as is" without warranties of
                 any kind, whether express or implied. We do not guarantee the accuracy, completeness, or reliability of any information
                  on our website.</p>
          <p className="md:text-[24px] font-bold mt-5">Limitation of Liability</p>
              <p className=" text-[#697289] md:text-[16px] font-normal mt-5">To the fullest extent permitted by law,
                 Aptly is not liable for any direct, indirect, incidental, or consequential damages resulting from your use
                  of our services, including loss of profits, data, or business opportunities.<br/><br/>We may provide links to 
                  third-party websites or integrate with third-party services. We are not responsible for the content, privacy 
                  practices, or performance of these external platforms.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

