import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import SectionTitle from "../../../components/sectionTitle";
import SectionHeader from "../../../components/sectionHeader";

export const metadata = {
  title: "Privacy Policy — Dici | Aptly Software",
  description:
    "How the Dici devotional app handles your information: local storage, permissions, and contact details.",
};

export default function DiciPrivacyPolicyPage() {
  return (
    <div className="dici-privacy-policy-page">
      <div className="sticky top-0 w-full z-50">
        <Navbar />
      </div>

      <div className="p-10 mt-1 md:mt-3 lg:mt-5 flex flex-col items-center">
        <SectionTitle className="mt-4 mb-4">Dici</SectionTitle>
        <SectionHeader
          main="Privacy Policy for Dici"
          className="max-w-[550px] mx-auto px-5 md:px-0 flex flex-col items-center"
        />
        <p className="text-[#697289] text-[14px] md:text-[15px] font-medium mt-4 max-w-[520px] text-center mx-auto">
          Last updated: May 5, 2026.
        </p>
      </div>

      <div className="pb-24 px-5 max-w-[670px] mx-auto">
        <p className="text-[#697289] md:text-[16px] font-normal mt-2 mb-8">
          Dici is a devotional app designed to help users follow their daily
          Scripture reading, create devotion notes, and stay consistent with
          their Bible reading plan.
        </p>
        <p className="text-[#697289] md:text-[16px] font-normal mb-10">
          This Privacy Policy explains how Dici handles your information.
        </p>

        <section className="mb-10">
          <h2 className="md:text-[24px] font-bold text-[#0f1115]">
            1. Information We Collect
          </h2>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            Dici is designed to work offline. We do not require users to create
            an account, sign in, or provide personal information to use the app.
          </p>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            Dici does not collect, store, or transmit your personal notes, Bible
            reading plans, reminders, or devotion entries to our servers.
          </p>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            The information you create inside the app may include:
          </p>
          <ul className="text-[#697289] md:text-[16px] font-normal mt-3 space-y-2 list-disc pl-5">
            <li>Bible reading plans</li>
            <li>Devotion notes</li>
            <li>Reminder schedules</li>
            <li>Reading progress</li>
            <li>Captured note images, if you use note capture features</li>
          </ul>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            This information is stored locally on your device.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="md:text-[24px] font-bold text-[#0f1115]">
            2. Local Device Storage
          </h2>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            Dici stores your app data directly on your device so the app can
            work offline.
          </p>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            This may include your reading schedules, devotion notes, linked
            passages, reminder settings, and other app preferences.
          </p>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            We do not access, upload, sell, or share this locally stored data.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="md:text-[24px] font-bold text-[#0f1115]">
            3. Camera and Photos
          </h2>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            Dici may request access to your camera or photo library if you use
            features such as capturing devotion notes from a physical notebook.
          </p>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            Images selected or captured through the app are used only for the
            feature you choose to use. They are not uploaded to our servers.
          </p>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            You can manage camera and photo permissions through your device
            settings.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="md:text-[24px] font-bold text-[#0f1115]">
            4. Notifications
          </h2>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            Dici may request permission to send local notifications so you can
            receive reminders for your Bible reading schedule.
          </p>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            These reminders are scheduled on your device. We do not use
            notification data to track you.
          </p>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            You can turn off notifications at any time in your device settings.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="md:text-[24px] font-bold text-[#0f1115]">
            5. Data Sharing
          </h2>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            We do not sell, rent, or share your personal data with advertisers
            or third parties.
          </p>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            Dici does not use your devotion notes, Bible reading activity, or
            reminders for advertising or tracking.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="md:text-[24px] font-bold text-[#0f1115]">
            6. Third-Party Services
          </h2>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            Dici may be downloaded through platforms such as the Apple App
            Store. These platforms may process information according to their
            own privacy policies.
          </p>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            If Dici uses third-party services in the future for app updates,
            crash reporting, analytics, or other features, this Privacy Policy
            will be updated to explain what data is collected and why.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="md:text-[24px] font-bold text-[#0f1115]">
            7. Data Retention and Deletion
          </h2>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            Because Dici stores app data locally on your device, your data
            remains on your device unless you delete it.
          </p>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            You may delete your notes, plans, or other app content within the
            app, if supported. You may also delete the app from your device to
            remove locally stored app data.
          </p>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            Some data may remain in device backups depending on your device
            settings.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="md:text-[24px] font-bold text-[#0f1115]">
            8. Children&apos;s Privacy
          </h2>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            Dici is not intended to knowingly collect personal information from
            children.
          </p>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            Since Dici does not require accounts and does not collect personal
            information through our servers, we do not knowingly collect
            personal data from children.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="md:text-[24px] font-bold text-[#0f1115]">
            9. Security
          </h2>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            We care about protecting your devotional content and personal
            reflections. Dici is designed to keep your data on your device and
            avoid unnecessary data collection.
          </p>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            However, no method of electronic storage is completely secure. We
            recommend keeping your device protected with a passcode, Face ID,
            Touch ID, or other security features.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="md:text-[24px] font-bold text-[#0f1115]">
            10. Changes to This Privacy Policy
          </h2>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            We may update this Privacy Policy from time to time.
          </p>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            If we make changes, we will update the &quot;Last updated&quot; date
            above. Continued use of Dici after changes means you accept the
            updated Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="md:text-[24px] font-bold text-[#0f1115]">
            11. Contact Us
          </h2>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            If you have questions about this Privacy Policy or need support, you
            may contact us at:
          </p>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            Aptly Software Development Services
            <br />
            Email:{" "}
            <a
              className="text-[#dd5240] font-medium underline underline-offset-2 hover:opacity-90"
              href="mailto:mail.aptly@gmail.com"
            >
              mail.aptly@gmail.com
            </a>
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
