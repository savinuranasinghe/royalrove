"use client";

import Image from "next/image";
import RoyalRoveLogo from "./RoyalRoveLogo";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

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
  const [logoOnWhite, setLogoOnWhite] = useState(false);
  const [menuOnWhite, setMenuOnWhite] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (brandName !== "Royal Rove") return;
    let frame = 0;
    const checkBackground = () => {
      frame = 0;
      const header = headerRef.current;
      if (!header) return;
      // Sample the logo's resting position even while the header slides away.
      const y = (parseFloat(getComputedStyle(header).top) || 22) + 35;
      const menu = header.querySelector(".menu-toggle");
      if (menu) {
        const bounds = menu.getBoundingClientRect();
        const menuLayers = document.elementsFromPoint(bounds.left + bounds.width / 2, y);
        let onWhite = false;
        for (const layer of menuLayers) {
          if (header.contains(layer) || layer.closest(".menu-panel")) continue;
          const style = getComputedStyle(layer);
          if (layer.matches("img, video, canvas") || style.backgroundImage !== "none") break;
          const channels = style.backgroundColor.match(/[\d.]+/g)?.map(Number);
          if (!channels || (channels[3] ?? 1) < 0.5) continue;
          onWhite = channels.slice(0, 3).every(channel => channel > 225);
          break;
        }
        setMenuOnWhite(onWhite);
      }
      const aboutBounds = document.getElementById("about-royal-rove")?.getBoundingClientRect();
      if (aboutBounds && aboutBounds.top <= y && aboutBounds.bottom > y) {
        setLogoOnWhite(false);
        return;
      }
      const layers = document.elementsFromPoint(window.innerWidth / 2, y);
      for (const layer of layers) {
        if (header.contains(layer) || layer.closest(".menu-panel")) continue;
        const style = getComputedStyle(layer);
        if (layer.matches("img, video, canvas") || style.backgroundImage !== "none") {
          setLogoOnWhite(false);
          return;
        }
        const channels = style.backgroundColor.match(/[\d.]+/g)?.map(Number);
        if (!channels || (channels[3] ?? 1) < 0.5) continue;
        setLogoOnWhite(channels.slice(0, 3).every(channel => channel > 225));
        return;
      }
      setLogoOnWhite(false);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(checkBackground); };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("load", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("load", schedule);
    };
  }, [brandName]);

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
      <header ref={headerRef} className={`site-header ${scrolled ? "site-header--scrolled" : ""} ${logoOnWhite ? "site-header--blue-logo" : ""}`}>
        {brandName === "Royal Rove" && <svg width="0" height="0" className="header-logo-filter" aria-hidden="true"><defs><filter id="royal-header-blue-letters" colorInterpolationFilters="sRGB">
          <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  10 10 10 0 -28" result="whitePixels" />
          <feComposite in="whitePixels" in2="SourceAlpha" operator="in" result="letterMask" />
          <feFlood floodColor="#0a192f" result="blue" />
          <feComposite in="blue" in2="letterMask" operator="in" result="blueLetters" />
          <feComposite in="blueLetters" in2="SourceGraphic" operator="over" />
        </filter></defs></svg>}
        <button className={`menu-toggle ${menuOnWhite ? "menu-toggle--blue" : ""}`} onClick={() => setOpen(true)} aria-label="Open menu">
          <span /><span />
        </button>
        <a className={`brand ${brandName === "Royal Rove" ? "brand--royal" : brandName !== "Snami Travel" ? "brand--wordmark" : ""}`} href="/" aria-label={`${brandName} home`}>
          {brandName === "Royal Rove" ? <RoyalRoveLogo priority /> : brandName === "Snami Travel" ? <Image src="/images/logo.svg" alt="Snami Travel" width={118} height={58} priority style={{ height: "auto" }} /> : brandName}
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
