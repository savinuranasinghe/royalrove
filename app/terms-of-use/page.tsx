import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Terms of Use | Royal Rove", description: "Simple terms for using the Royal Rove website and services." };

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" path="/terms-of-use" intro="By using Royal Rove’s website and services, you agree to these Terms of Use. Please read them carefully before continuing.">
      <section><h2>Our services</h2><p>These terms apply to Royal Rove’s website, mobile services, features, and applications, where provided. The services are intended for informational purposes.</p></section>
      <section><h2>Website content</h2><p>These terms cover the text, links, posts, messages, emails, music, software, technology, and other materials made available through our services by Royal Rove, its affiliates, licensors, service providers, or users.</p></section>
      <section><h2>Access to our services</h2><p>You must follow these terms when using our services. Royal Rove may terminate your access if it determines that you have breached them.</p></section>
    </LegalPage>
  );
}
