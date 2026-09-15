import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TravelPage from "@/components/TravelPage";
import { stayStyles } from "@/content/travel";

export const metadata: Metadata = { title: "Hotels & Stays | Royal Rove", description: "Find your style of stay, from boutique hotels and beach resorts to hill-country retreats and private villas." };

export default function HotelsPage() {
  return (
    <TravelPage active="hotels" eyebrow="Hotels & stays" title={<>Stay somewhere<br />that stays with you.</>} subtitle="The right place. Your kind of comfort." image="/images/hotel-villa-1.jpg" imageAlt="Stay inspiration: a quiet terrace with an ocean view">
      <section className="travel-collection" id="collection" aria-labelledby="collection-heading">
        <div className="travel-intro"><h2 id="collection-heading">Find your<br />kind of stay.</h2><div><p>From intimate hideaways to room for everyone, we’ll select accommodation around your route, preferences, and budget.</p><span className="travel-eyebrow">A collection of stay styles</span></div></div>
        <div className="travel-card-grid">{stayStyles.map((stay, index) => (
          <article className="travel-card" id={stay.slug} key={stay.slug}>
            <div className="travel-card__image"><Image src={stay.image} alt={stay.alt} fill sizes="(max-width: 767px) 90vw, 42vw" /><span className="travel-card__index">{String(index + 1).padStart(2, "0")}</span></div>
            <h3>{stay.name}</h3><p className="travel-script">{stay.line}</p><p>{stay.description}</p>
            <ul className="travel-places">{stay.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
            <div className="travel-related"><Link href="/destinations#sri-lanka">Explore Sri Lanka ↗</Link></div><a className="travel-link" href="#connect" data-plan-popup data-plan-context={stay.name}>Plan your stay <span aria-hidden="true">⟶</span></a>
          </article>
        ))}</div>
        <p className="travel-image-note">Images illustrate stay styles. Your hotel recommendations will be tailored to your dates and journey.</p>
      </section>
    </TravelPage>
  );
}
