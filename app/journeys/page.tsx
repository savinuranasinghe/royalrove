import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TravelPage from "@/components/TravelPage";
import journeyContent from "@/content/journeys.json";
import { journeyImage } from "@/content/travel";

const { journeys, inclusions } = journeyContent;

export const metadata: Metadata = { title: "Signature Journeys | Royal Rove", description: "Explore ten customizable Sri Lanka journeys, from ancient kingdoms and tea country to wildlife, beaches, and adventure." };

export default function JourneysPage() {
  return (
    <TravelPage active="journeys" eyebrow="Explore Sri Lanka" title={<>Signature<br />Journeys</>} subtitle="One island. Endless stories." image="/images/travel/train.webp" imageAlt="A blue train winding through Sri Lanka’s green hill country">
      <section className="travel-collection" id="collection" aria-labelledby="collection-heading">
        <div className="travel-intro"><h2 id="collection-heading">Ten ways<br />to begin.</h2><div><p>Start with a journey that speaks to you. We’ll tailor the dates, pace, experiences, and stays to make it your own.</p><span className="travel-eyebrow">10 sample journeys · All customizable</span></div></div>
        <div className="travel-card-grid">
          {journeys.map((journey, index) => (
            <article className="travel-card journey-card" id={journey.slug} key={journey.slug}>
              <div className="travel-card__image"><Image src={journeyImage(journey.image)} alt={`${journey.title} — Sri Lanka travel inspiration`} fill sizes="(max-width: 767px) 90vw, 42vw" /><span className="travel-card__index">{String(index + 1).padStart(2, "0")}</span></div>
              <div className="travel-card__meta"><span>{journey.duration}</span></div>
              <h3>{journey.title}</h3>
              <p className="travel-card__category">{journey.category}</p>
              <p>{journey.summary}</p>
              <details className="travel-details"><summary>Journey highlights <span aria-hidden="true">+</span></summary><ul>{journey.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul><div className="travel-related"><Link href={journey.destinationHref}>{journey.destinationLabel} ↗</Link><Link href={journey.experienceHref}>Related experiences ↗</Link><Link href="/hotels">Explore stays ↗</Link></div></details>
            </article>
          ))}
        </div>
        <section className="travel-practical" aria-labelledby="journey-inclusions"><div><p className="travel-eyebrow">A few useful details</p><h2 id="journey-inclusions">Thoughtfully<br />taken care of.</h2><p>These are sample journeys. Sightseeing, entrance fees, and activities are included only as specified in your final itinerary.</p></div><div><details className="travel-details"><summary>What’s covered <span aria-hidden="true">+</span></summary><ul>{inclusions.covered.map(item => <li key={item}>{item}</li>)}</ul></details><details className="travel-details"><summary>What’s not covered <span aria-hidden="true">+</span></summary><ul>{inclusions.notCovered.map(item => <li key={item}>{item}</li>)}</ul></details></div></section>
      </section>
    </TravelPage>
  );
}
