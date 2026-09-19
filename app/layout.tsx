import type { Metadata } from "next";
import "./globals.css";
import PlanJourneyModal from "@/components/PlanJourneyModal";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "Royal Rove — Personalized Travel in Sri Lanka",
  description: "Personal journeys through Sri Lanka, with thoughtfully selected experiences and stays.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
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
