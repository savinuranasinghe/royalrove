"use client";

import Link from "next/link";
import "./LegalLinks.css";

export const legalPages = [
  { href: "/terms-of-use", label: "Terms of Use" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund Policy" },
];

export default function LegalLinks({ active }: { active?: string }) {
  return <nav className="legal-links" aria-label="Website policies">{legalPages.map(page => <Link key={page.href} href={page.href} aria-current={active === page.href ? "page" : undefined}>{page.label}</Link>)}<button type="button" onClick={() => window.dispatchEvent(new Event("royalrove:cookie-settings"))}>Cookie settings</button></nav>;
}
