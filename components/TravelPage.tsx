import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Header from "./Header";
import LegalLinks from "./LegalLinks";
import { travelNavigation } from "@/content/travel";
import "./TravelPage.css";

type TravelPageProps = {
  active: "journeys" | "experiences" | "destinations" | "hotels";
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  image: string;
  imageAlt: string;
  showPageNav?: boolean;
  children: ReactNode;
};

const pages = [
  { slug: "journeys", label: "Journeys" },
  { slug: "experiences", label: "Experiences" },
  { slug: "destinations", label: "Destinations" },
  { slug: "hotels", label: "Hotels & Stays" },
];

export default function TravelPage({ active, eyebrow, title, subtitle, image, imageAlt, showPageNav = true, children }: TravelPageProps) {
  return (
    <main className={`travel-page travel-page--${active}`} id="top">
      <Header brandName="Royal Rove" navLinks={travelNavigation} requestLabel="Plan" meta={<>Sri Lanka · Designed Around You<br />Personal Journeys · Local Expertise</>} />
      <section className="travel-hero" aria-labelledby="travel-title">
        <Image className="travel-hero__image" src={image} alt={imageAlt} fill priority sizes="100vw" />
        <div className="travel-hero__shade" />
        <div className="travel-hero__content">
          <p className="travel-eyebrow">{eyebrow}</p>
          <h1 id="travel-title">{title}</h1>
          <p className="travel-hero__subtitle">{subtitle}</p>
        </div>
        <div className="travel-hero__bottom">
          <span><Link href="/">Home</Link><span aria-hidden="true"> / </span>{pages.find(page => page.slug === active)?.label}</span>
          <a href="#collection">Explore the collection <span aria-hidden="true">↓</span></a>
        </div>
      </section>
      {showPageNav && <nav className="travel-page-nav" aria-label="Explore Royal Rove">
        {pages.filter(page => page.slug !== "destinations").map(page => <Link key={page.slug} href={`/${page.slug}`} aria-current={active === page.slug ? "page" : undefined}>{page.label}</Link>)}
      </nav>}
      {children}
      <section className="travel-invitation" id="connect">
        <p className="travel-eyebrow">Designed around you</p>
        <h2>Your journey.<br /><em>Your rhythm.</em></h2>
        <p>Tell us what you love. We’ll shape the places, experiences, and stays around you.</p>
        <a className="travel-link" href="#connect" data-plan-popup data-plan-context="Plan your journey">Plan your journey <span aria-hidden="true">⟶</span></a>
      </section>
      <footer className="travel-footer">
        <div><Link className="travel-footer__brand" href="/">Royal Rove</Link><p>Personal journeys. Meaningful stories.</p></div>
        <nav aria-label="Footer navigation">{pages.map(page => <Link key={page.slug} href={`/${page.slug}`}>{page.label}</Link>)}<Link href="/#about-royal-rove">About</Link><Link href="/#travel-plus">Travel+</Link><Link href="/#connect">Contact</Link></nav>
        <LegalLinks />
        <div className="travel-footer__bottom"><span>©2026 Royal Rove</span><span>Developed by <a href="https://divgaze.com" target="_blank" rel="noopener noreferrer">divgaze.com</a></span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
