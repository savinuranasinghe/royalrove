import type { Metadata } from "next";
import PartnersPage from "@/components/PartnersPage";

export const metadata: Metadata = {
  title: "Travel Partners in Greece | Luxury DMC by Snami Travel",
  description: "Luxury DMC in Greece working with tour operators and travel advisors, offering bespoke itineraries and refined on-the-ground execution.",
};

export default function Page() {
  return <PartnersPage />;
}
