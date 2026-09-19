import type { Metadata } from "next";
import "./globals.css";
import PlanJourneyModal from "@/components/PlanJourneyModal";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "Royal Rove — Personalized Travel in Sri Lanka",
  description: "Personal journeys through Sri Lanka, with thoughtfully selected experiences and stays.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <PlanJourneyModal />
        <CookieConsent />
      </body>
    </html>
  );
}
