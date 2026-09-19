import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import TravelPage from "@/components/TravelPage";
import { travelPlusEvents } from "@/content/travelPlus";
import "./travel-plus.css";

export const metadata: Metadata = {
  title: "Travel+ | Meetings, Events & Celebrations | Royal Rove",
  description: "Discover Royal Rove’s tailored MICE experiences in Sri Lanka, from conferences and incentive travel to retreats, gala dinners, and destination weddings.",
};

export default function TravelPlusPage() {
  const wedding = travelPlusEvents[9];
  return (
    <TravelPage active="travel-plus" eyebrow="Meetings · Incentives · Conferences · Events" title={<>Together,<br /> extraordinary.</>} subtitle="Travel+ by Royal Rove" image="/images/travel-plus/conference.jpg" imageAlt="A conference audience sharing a moment of inspiration" showPageNav={false}>
      <section className="travel-plus-intro" id="collection" aria-labelledby="plus-intro-title">
        <Reveal className="travel-plus-intro__copy">
          <Image className="travel-plus-logo" src="/images/travel-plus/concept-travel-plus.png" alt="Concept Travel+" width={1711} height={489} sizes="260px" />
          <h2 id="plus-intro-title">Business meets<br />possibility.</h2>
          <p>Elevate your gatherings with bespoke MICE experiences in Sri Lanka. Royal Rove brings together luxury, local character, and thoughtful planning to create occasions that inspire and connect.</p>
          <p>From conference venues and elegant banquets to outdoor settings and exceptional stays, our team shapes every detail around your goals—with personal service from the first idea to the final moment.</p>
        </Reveal>
        <Reveal className="travel-plus-intro__brand" delay={120}>
          <Image src="/images/travel-plus/mice-logo.png" alt="MICE — Meetings, Incentives, Conferences and Exhibitions" width={2048} height={1275} sizes="(max-width: 767px) 85vw, 36vw" />
          <p className="travel-script">A sense of place. A shared purpose.</p>
        </Reveal>
      </section>

      <section className="travel-plus-collection" aria-labelledby="plus-events-title">
        <Reveal className="travel-plus-collection__heading">
          <div><p className="travel-eyebrow">Corporate & group experiences</p><h2 id="plus-events-title">An occasion<br />for every ambition.</h2></div>
          <p>Gather, celebrate, learn, or explore.<br />We’ll bring your people and plans together.</p>
        </Reveal>
        <div className="travel-plus-grid">
          {travelPlusEvents.slice(0, 9).map((event, index) => (
            <Reveal key={event.slug} delay={(index % 3) * 80}>
              <article className="travel-plus-card" id={event.slug}>
                <div className="travel-plus-card__image"><Image src={`/images/travel-plus/${event.image}`} alt={event.alt} fill sizes="(max-width: 600px) 90vw, (max-width: 1050px) 43vw, 27vw" /><span>{String(index + 1).padStart(2, "0")}</span></div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="travel-plus-wedding" id={wedding.slug} aria-labelledby="plus-wedding-title">
        <div className="travel-plus-wedding__image"><Image src={`/images/travel-plus/${wedding.image}`} alt={wedding.alt} fill sizes="(max-width: 767px) 100vw, 50vw" /></div>
        <Reveal className="travel-plus-wedding__copy">
          <p className="travel-eyebrow">10 / A celebration of your own</p>
          <h2 id="plus-wedding-title">Destination<br />wedding.</h2>
          <p className="travel-script">Your story. A beautiful beginning.</p>
          <p>{wedding.description}</p>
          <a className="travel-link" href="#connect" data-plan-popup data-plan-context="Travel+ · Destination wedding">Plan your celebration <span aria-hidden="true">⟶</span></a>
        </Reveal>
      </section>
    </TravelPage>
  );
}
