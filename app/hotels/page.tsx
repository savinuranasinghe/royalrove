import type { Metadata } from "next";
import Image from "next/image";
import TravelPage from "@/components/TravelPage";
import { curatedStayCategories } from "@/content/curatedStays";
import "./curated-stays.css";

export const metadata: Metadata = {
  title: "Our Curated Stays | Royal Rove",
  description: "Handpicked places to stay across Sri Lanka, chosen for their setting, character, service, and ability to make your journey even more memorable.",
};

export default function HotelsPage() {
  return (
    <TravelPage active="hotels" eyebrow="Handpicked places to stay across Sri Lanka" title={<>Our curated<br />stays.</>} subtitle="Distinctive places. Memorable journeys." image="/images/travel/coast.webp" imageAlt="Sri Lanka’s tropical coastline">
      <section className="travel-collection curated-stays" id="collection" aria-labelledby="collection-heading">
        <div className="travel-intro">
          <h2 id="collection-heading">A sense<br />of place.</h2>
          <div><p>Handpicked places to stay, chosen to make your Sri Lankan journey even more memorable.</p><p className="curated-stays__intro-copy">Our collection brings together distinctive properties selected for their setting, character, service, and the way they enrich your travel experience.</p></div>
        </div>
        <nav className="travel-category-nav" aria-label="Curated stay categories">
          {curatedStayCategories.map(category => <a key={category.slug} href={`#${category.slug}`}>{category.title}</a>)}
        </nav>
        <div className="curated-stays__categories">
          {curatedStayCategories.map((category, index) => (
            <section className="curated-stays__category" id={category.slug} key={category.slug} aria-labelledby={`${category.slug}-title`}>
              <div className="curated-stays__category-heading">
                <div><p className="travel-eyebrow">0{index + 1} / Our collection</p><h2 id={`${category.slug}-title`}>{category.title}</h2></div>
                <figure><div className="curated-stays__landscape"><Image src={category.image} alt={category.alt} fill sizes="(max-width: 767px) 90vw, 38vw" /></div><figcaption>Sri Lanka · A sense of the setting</figcaption></figure>
              </div>
              <div className="curated-stays__grid">
                {category.stays.map(stay => (
                  <article className="curated-stay" id={stay.slug} key={stay.slug}>
                    <p className="travel-eyebrow">{stay.location}</p>
                    <h3>{stay.name}</h3>
                    <p className="travel-script">{stay.line}</p>
                    <p className="curated-stay__description">{stay.description}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </TravelPage>
  );
}
