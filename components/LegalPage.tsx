import Link from "next/link";
import type { ReactNode } from "react";
import Header from "./Header";
import LegalLinks from "./LegalLinks";
import { travelNavigation } from "@/content/travel";
import "./LegalPage.css";

type Props = { title: string; path: string; intro: string; children: ReactNode };

export default function LegalPage({ title, path, intro, children }: Props) {
  return (
    <main className="legal-page" id="top">
      <Header brandName="Royal Rove" navLinks={travelNavigation} requestLabel="Plan" meta={<>Personal journeys.<br />Meaningful stories.</>} />
      <header className="legal-hero"><p>Royal Rove · Useful information</p><h1>{title}</h1><Link href="/">Home <span aria-hidden="true">↗</span></Link></header>
      <div className="legal-page__navigation"><LegalLinks active={path} /></div>
      <article className="legal-content" aria-label={title}>
        <p className="legal-content__intro">{intro}</p>
        {children}
        <section id="connect"><h2>Questions?</h2><p>If you have questions about this policy, please contact Royal Rove.</p><Link className="legal-contact" href="/#connect">Contact Royal Rove <span aria-hidden="true">⟶</span></Link></section>
      </article>
      <footer className="legal-footer"><Link className="legal-footer__brand" href="/">Royal Rove</Link><LegalLinks active={path} /><div className="legal-footer__bottom"><span>©2026 Royal Rove</span><span>Developed by <a href="https://divgaze.com" target="_blank" rel="noopener noreferrer">divgaze.com</a></span></div></footer>
    </main>
  );
}
