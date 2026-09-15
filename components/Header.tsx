"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

const links = [
  { label: "Luxury Hotels & Private Villas", href: "#" },
  { label: "Day Tours & Curated Experiences", href: "#" },
  { label: "Private Transfers & Driver Services", href: "#" },
  { label: "Concierge & Lifestyle Services", href: "#" },
  { label: "Multi-Day Itineraries", href: "#" },
  { label: "Destinations We Curate", href: "#" },
  { label: "For Our Partners", href: "/luxury-dmc-greece" },
];

type HeaderProps = {
  brandName?: string;
  navLinks?: typeof links;
  meta?: ReactNode;
  requestLabel?: string;
};

export default function Header({ brandName = "Snami Travel", navLinks = links, meta, requestLabel = "Request" }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let previous = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 90 && current > previous);
      previous = current;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <button className="menu-toggle" onClick={() => setOpen(true)} aria-label="Open menu">
          <span /><span />
        </button>
        <a className={`brand ${brandName !== "Snami Travel" ? "brand--wordmark" : ""}`} href="/" aria-label={`${brandName} home`}>
          {brandName === "Snami Travel" ? <Image src="/images/logo.svg" alt="Snami Travel" width={118} height={58} priority style={{ height: "auto" }} /> : brandName}
        </a>
        <a className="request-bubble" href="#connect" {...(requestLabel === "Plan" ? { "data-plan-popup": "", "data-plan-context": "Plan your journey" } : {})}>{requestLabel}</a>
      </header>

      <aside className={`menu-panel ${open ? "menu-panel--open" : ""}`} aria-hidden={!open}>
        <button className="menu-close" onClick={() => setOpen(false)} aria-label="Close menu">×</button>
        <div className="menu-panel__image" />
        <nav>
          {navLinks.map((link) => <a key={link.label} href={link.href} onClick={() => setOpen(false)} {...(link.label === "Plan Your Journey" ? { "data-plan-popup": "", "data-plan-context": "Plan your journey" } : {})}>{link.label}</a>)}
        </nav>
        <div className="menu-panel__meta">{meta ?? <>Based in Crete · Designing Greece<br />+30 698 709 7639</>}</div>
      </aside>
    </>
  );
}
