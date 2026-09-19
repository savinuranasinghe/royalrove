import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy | Royal Rove", description: "How Royal Rove handles personal information and privacy requests." };

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" path="/privacy-policy" intro="Royal Rove respects your privacy and is committed to protecting your personal information.">
      <section><h2>Information you share</h2><p>When you contact us or make a travel enquiry, we use the information you provide, such as your name, contact details, and travel preferences, to respond and help arrange your journey.</p></section>
      <section><h2>Technical information</h2><p>Technical information, such as your IP address, browser, and device details, may be processed to operate the website, resolve technical problems, and protect against misuse.</p></section>
      <section><h2>Cookie choices</h2><p>We use a cookie to remember whether you selected essential cookies only or accepted all cookies. Your choice is saved for up to one year and can be changed through Cookie settings in the footer.</p></section>
      <section><h2>Using and sharing information</h2><p>We use personal information to handle enquiries, provide requested services, and meet applicable legal obligations. Relevant details may be shared with service providers where needed to operate the website or arrange your requested travel.</p></section>
      <section><h2>Keeping your information</h2><p>We keep personal information for as long as needed for these purposes and any applicable legal requirements.</p></section>
      <section><h2>Your privacy choices</h2><p>You can contact Royal Rove to ask about your personal information or request access, correction, or deletion, subject to applicable law and any information we are required to retain.</p></section>
    </LegalPage>
  );
}
