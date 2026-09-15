import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TravelPage from "@/components/TravelPage";
import { worldDestinations } from "@/content/destinations";
import "./destinations.css";

export const metadata: Metadata = {
  title: "Destinations Around the World | Royal Rove",
  description: "Explore Sri Lanka, Maldives, Singapore, Malaysia, Thailand, Turkey, and Dubai with Royal Rove. Inspiring places, personal journeys.",
};

export default function DestinationsPage() {
  const [sriLanka, ...destinations] = worldDestinations;

  return (
    <TravelPage active="destinations" showPageNav={false} eyebrow="Destinations" title={<>The world.<br />Your way.</>} subtitle="Extraordinary places. Your kind of journey." image="/images/destinations/maldives.webp" imageAlt="Turquoise waters surrounding a Maldives island resort">
      <section className="travel-collection world-collection" id="collection" aria-labelledby="collection-heading">
        <div className="travel-intro world-intro">
          <h2 id="collection-heading">Explore the world’s<br />most inspiring<br />destinations.</h2>
          <div><p>Discover captivating places, rich cultures, and moments that stay with you. From our home in Sri Lanka to the world beyond, Royal Rove brings each journey together around you.</p><span className="travel-eyebrow">Seven destinations · A world of possibility</span></div>
        </div>
        <nav className="travel-category-nav" aria-label="Destinations">
          {worldDestinations.map(destination => <a key={destination.slug} href={`#${destination.slug}`}>{destination.name}</a>)}
        </nav>

        <article className="world-feature" id={sriLanka.slug}>
          <Link className="world-feature__image" href="/journeys" aria-label="Explore Sri Lanka journeys"><Image src={sriLanka.image} alt={sriLanka.alt} fill sizes="(max-width: 767px) 90vw, 52vw" /></Link>
          <div className="world-feature__copy">
            <p className="travel-eyebrow">Our home. Your next discovery.</p>
            <h3>{sriLanka.name}</h3>
            <p className="travel-script">{sriLanka.line}</p>
            <p>{sriLanka.description}</p>
            <ul className="travel-places">{sriLanka.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul>
            <Link className="travel-link" href="/journeys">Explore Sri Lanka journeys <span aria-hidden="true">⟶</span></Link>
          </div>
        </article>

        <div className="world-grid">
          {destinations.map((destination, index) => (
            <article className="travel-card world-card" id={destination.slug} key={destination.slug}>
              <div className="travel-card__image"><Image src={destination.image} alt={destination.alt} fill sizes="(max-width: 767px) 90vw, (max-width: 1100px) 43vw, 27vw" /><span className="travel-card__index">{String(index + 2).padStart(2, "0")}</span></div>
              <p className="travel-eyebrow world-card__region">{destination.region}</p>
              <h3>{destination.name}</h3>
              <p className="travel-script">{destination.line}</p>
              <p>{destination.description}</p>
              <ul className="travel-places">{destination.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul>
              <a className="travel-link" href="#connect" data-plan-popup data-plan-context={destination.name} aria-label={`Plan your ${destination.name} escape`}>Plan your escape <span aria-hidden="true">⟶</span></a>
            </article>
          ))}
        </div>
      </section>
    </TravelPage>
  );
}
