import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TravelPage from "@/components/TravelPage";
import { experiences } from "@/content/travel";

export const metadata: Metadata = { title: "Travel Experiences | Royal Rove", description: "Explore Sri Lanka through culture, wildlife, adventure, beaches, wellness, food, and local life." };

export default function ExperiencesPage() {
  return (
    <TravelPage active="experiences" eyebrow="Travel for the experience" title={<>Feel more.<br />Discover more.</>} subtitle="Moments that become your story." image="/images/travel/coast.webp" imageAlt="Sri Lanka’s coastline curving around a tropical bay">
      <section className="travel-collection" id="collection" aria-labelledby="collection-heading">
        <div className="travel-intro"><h2 id="collection-heading">Follow your<br />curiosity.</h2><p>Six ways to experience the island. Choose what draws you in—we’ll bring the details together.</p></div>
        <nav className="travel-category-nav" aria-label="Experience categories">{experiences.map(experience => <a key={experience.slug} href={`#${experience.slug}`}>{experience.title}</a>)}</nav>
        <div className="travel-stories">{experiences.map((experience, index) => (
          <article className="travel-story" id={experience.slug} key={experience.slug}>
            <div className="travel-story__image"><Image src={experience.image} alt={experience.alt} fill sizes="(max-width: 767px) 90vw, 42vw" /></div>
            <div className="travel-story__copy"><span className="travel-eyebrow">{String(index + 1).padStart(2, "0")} / 06</span><h3>{experience.title}</h3><p className="travel-script">{experience.line}</p><p>{experience.description}</p><ul className="travel-activities">{experience.activities.map(activity => <li key={activity}>{activity}</li>)}</ul><Link className="travel-link" href={`/journeys#${experience.journey}`}>Find your journey <span aria-hidden="true">⟶</span></Link></div>
          </article>
        ))}</div>
      </section>
    </TravelPage>
  );
}
