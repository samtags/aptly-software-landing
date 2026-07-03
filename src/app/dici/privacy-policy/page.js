import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import SectionTitle from "../../../components/sectionTitle";
import SectionHeader from "../../../components/sectionHeader";

export const metadata = {
  title: "Privacy Policy — Dici | Aptly Software",
  description:
    "How the Dici devotional app handles your information, including local storage, permissions, purchases, analytics, optional OCR, and contact details.",
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
          className="max-w-[550px] mx-auto px-5 md:px-0 flex flex-col items-center text-center"
        />
        <p className="text-[#697289] text-[14px] md:text-[15px] font-medium mt-4 max-w-[520px] text-center mx-auto">
          Last updated: July 3, 2026.
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
            Dici is designed to work primarily offline. We do not require users
            to create an account, sign in, or provide personal information to
            use the app.
          </p>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            Dici does not require you to send your personal notes, Bible reading
            plans, reminders, or devotion entries to our servers to use the core
            app experience.
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
            <li>Supporter, purchase, and subscription status</li>
            <li>General app usage events and technical app information</li>
          </ul>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            Most devotional content you create in Dici is stored locally on your
            device. Some limited information may be processed by service
            providers as described below.
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
            We do not sell your locally stored devotional content or use it for
            advertising. Locally stored data remains on your device unless you
            choose to use a feature that sends limited data to a service
            provider, such as optional notebook OCR.
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
            feature you choose to use.
          </p>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            If you use notebook capture or OCR features, the image you capture
            or select may be sent to Anthropic to extract text from the image.
            The extracted text is returned to Dici so you can review and save it
            in the app. This feature is optional, and images are sent only when
            you choose to use OCR or note capture features.
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
            5. Payments and Subscriptions
          </h2>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            Dici may offer one-time purchases and auto-renewable subscriptions,
            such as supporter or sponsor options. Purchases and subscriptions
            are processed by the Apple App Store, Google Play, or another app
            store provider. Dici does not receive or store your full credit card
            number, bank details, App Store payment credentials, or Google Play
            payment credentials.
          </p>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            We may receive limited purchase information from the app store, such
            as product identifier, purchase status, subscription status, renewal
            status, expiration date, and localized price. We use this
            information to unlock supporter features, show sponsor status,
            restore purchases, manage subscription-related app behavior, prevent
            duplicate credits, and understand purchase-related app usage.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="md:text-[24px] font-bold text-[#0f1115]">
            6. Analytics and App Improvement
          </h2>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            Dici may use Mixpanel to understand general app usage and improve
            the app. This may include events such as app opens, sessions,
            feature usage, reading activity duration, note creation, plan
            creation, support purchases, and subscription events.
          </p>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            We do not send the contents of your devotion notes, Bible reading
            plans, handwritten notes, captured images, or reminder text to
            Mixpanel.
          </p>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            You can learn more about Mixpanel&apos;s privacy practices at{" "}
            <a
              className="text-[#dd5240] font-medium underline underline-offset-2 hover:opacity-90"
              href="https://mixpanel.com/legal/privacy-policy/"
              target="_blank"
              rel="noreferrer"
            >
              https://mixpanel.com/legal/privacy-policy/
            </a>
            .
          </p>
        </section>

        <section className="mb-10">
          <h2 className="md:text-[24px] font-bold text-[#0f1115]">
            7. Feature Flags and App Configuration
          </h2>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            Dici may use GrowthBook to load feature flags and app configuration.
            This helps us safely enable, disable, or test app features.
          </p>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            GrowthBook may process limited technical information such as app
            version, platform, runtime version, service identifier, and feature
            flag evaluation data. We do not send your devotion note contents,
            Bible reading plan contents, captured images, or reminder text to
            GrowthBook.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="md:text-[24px] font-bold text-[#0f1115]">
            8. Data Sharing
          </h2>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            We do not sell your personal data. We do not use your devotion
            notes, Bible reading plans, reminders, or captured notebook content
            for advertising.
          </p>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            We may share limited data with service providers only as needed to
            operate app features, process purchases, provide analytics, load
            feature flags, perform optional OCR, respond to support requests,
            comply with legal obligations, or protect the app and our users.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="md:text-[24px] font-bold text-[#0f1115]">
            9. Third-Party Services
          </h2>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            Dici may be downloaded through platforms such as the Apple App
            Store. These platforms may process information according to their
            own privacy policies.
          </p>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            Dici may use third-party services to support app functionality,
            analytics, feature configuration, purchases, and optional OCR. These
            services may include Apple, Google, Mixpanel, GrowthBook, Anthropic,
            and cloud infrastructure providers.
          </p>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            You can learn more about Anthropic&apos;s privacy practices at{" "}
            <a
              className="text-[#dd5240] font-medium underline underline-offset-2 hover:opacity-90"
              href="https://www.anthropic.com/legal/privacy"
              target="_blank"
              rel="noreferrer"
            >
              https://www.anthropic.com/legal/privacy
            </a>
            . App store purchases are also subject to the privacy practices of
            the app store provider you use.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="md:text-[24px] font-bold text-[#0f1115]">
            10. Data Retention and Deletion
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
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            Data processed by third-party services, such as app store purchase
            records, analytics events, feature flag data, or optional OCR
            requests, may be retained according to those providers&apos; privacy
            policies and our configuration with those providers.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="md:text-[24px] font-bold text-[#0f1115]">
            11. Children&apos;s Privacy
          </h2>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            Dici is not intended to knowingly collect personal information from
            children.
          </p>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            Since Dici does not require accounts, we do not knowingly collect
            account registration information from children. If you believe a
            child has provided personal information through Dici, please contact
            us so we can review and respond.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="md:text-[24px] font-bold text-[#0f1115]">
            12. Security
          </h2>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            We care about protecting your devotional content and personal
            reflections. Dici is designed to keep core devotional content on
            your device and avoid unnecessary data collection.
          </p>
          <p className="text-[#697289] md:text-[16px] font-normal mt-5">
            However, no method of electronic storage is completely secure. We
            recommend keeping your device protected with a passcode, Face ID,
            Touch ID, or other security features.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="md:text-[24px] font-bold text-[#0f1115]">
            13. Changes to This Privacy Policy
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
            14. Contact Us
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
