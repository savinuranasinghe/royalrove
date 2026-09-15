import type { Metadata } from "next";
import Home from "@/components/Home";

export const metadata: Metadata = {
  title: "Royal Rove — Personalized Travel in Sri Lanka",
  description: "Personalized Sri Lanka journeys shaped around culture, nature, adventure, relaxation, and authentic local experiences.",
};

export default function Page() {
  return <Home />;
}
