import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Refund Policy | Royal Rove", description: "Royal Rove’s policy on refunds and tour cancellations." };

export default function RefundPage() {
  return (
    <LegalPage title="Refund Policy" path="/refund-policy" intro="Please review this policy before confirming and paying for your booking.">
      <section><h2>Bookings and refunds</h2><p>Due to the nature of our services and the logistical arrangements involved, all bookings are final upon payment and are non-refundable, except where a refund is required by applicable law.</p></section>
      <section><h2>If Royal Rove cancels</h2><p>If Royal Rove cancels your tour, you may choose to reschedule or receive a credit for future travel. This does not limit any refund rights you may have under applicable law.</p></section>
    </LegalPage>
  );
}
