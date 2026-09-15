"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ArrowLink from "./ArrowLink";
import Header from "./Header";
import LegalLinks from "./LegalLinks";
import Reveal from "./Reveal";
import ScrollEffects from "./ScrollEffects";
import SriLankaMap from "./SriLankaMap";
import ExperienceCount from "./ExperienceCount";
import "./AboutRoyalRove.css";
import { travelNavigation } from "@/content/travel";

const heroSlides = [
  { src: "/hero.jpg", alt: "Dramatic coastal landscape" },
  { src: "/hero2.jpg", alt: "Sri Lanka travel landscape" },
];

const reasons = [
  ["Journeys are built around your interests, preferred pace, accommodation choices, and budget.", "Personalized travel planning"],
  ["Trusted local knowledge connects each destination, stay, and experience with care.", "Local destination expertise"],
  ["Thoughtful support helps every journey unfold smoothly, from planning through travel.", "Professional travel assistance"],
];

const manifestoSlides = [
  { title: "Culture & heritage", subtitle: "Stories shaped by centuries", background: "/images/manifesto-delos.jpg", image: "/images/manifesto-delos.jpg" },
  { title: "Wildlife & nature", subtitle: "Wonder in every landscape", background: "/images/manifesto-milos-bg.jpg", image: "/images/manifesto-milos.jpg" },
  { title: "Adventure & thrills", subtitle: "Move beyond the familiar", background: "/images/manifesto-mykonos-boat.jpg", image: "/images/manifesto-mykonos-boat.jpg" },
  { title: "Beach & island escapes", subtitle: "Follow the rhythm of the coast", background: "/images/manifesto-connection-bg.jpg", image: "/images/manifesto-connection.jpg" },
  { title: "Wellness & escapes", subtitle: "Slow down. Reconnect.", background: "/images/manifesto-church-bg.jpg", image: "/images/manifesto-church.jpg" },
  { title: "Food & local life", subtitle: "Get to know the island", background: "/images/map/nuwara-eliya.webp", image: "/images/map/nuwara-eliya.webp" },
];

const experienceSlugs = ["culture-heritage", "wildlife-nature", "adventure-thrills", "beach-island-escapes", "wellness-escapes", "food-local-life"];
const journeySlugs = ["the-essence-of-sri-lanka", "ancient-sri-lanka", "tea-trails-mountain-escapes", "wild-sri-lanka", "southern-soul"];

const hotelSlides = [
  {
    title: "The Essence of Sri Lanka",
    lead: "One island. A world of experiences.",
    copy: "A complete Sri Lankan journey combining ancient heritage, cultural landmarks, scenic hill country, wildlife encounters, and the tropical southern coastline.",
    left: "/images/hotel-boutique-1.jpg",
    right: "/images/hotel-boutique-2.jpg",
  },
  {
    title: "Ancient Sri Lanka",
    lead: "History, tradition, and spiritual heritage.",
    copy: "Discover ancient kingdoms, sacred temples, cultural experiences, and iconic heritage locations that reveal the island’s enduring story.",
    left: "/images/hotel-resort-1.jpg",
    right: "/images/hotel-resort-2.jpg",
  },
  {
    title: "Tea Trails & Mountain Escapes",
    lead: "Into the misty heart of the island.",
    copy: "Explore tea plantations, waterfalls, mountain landscapes, Ella experiences, and one of the world’s most memorable scenic train journeys.",
    left: "/images/hotel-city-1.jpg",
    right: "/images/hotel-city-2.jpg",
  },
  {
    title: "Wild Sri Lanka",
    lead: "Closer to the island’s wild side.",
    copy: "Experience national parks, safari adventures, bird watching, and remarkable wildlife encounters across Sri Lanka’s diverse natural landscapes.",
    left: "/images/hotel-signature-1.jpg",
    right: "/images/hotel-signature-2.jpg",
  },
  {
    title: "Southern Soul",
    lead: "Coastal beauty with a story to tell.",
    copy: "Unwind along Sri Lanka’s southern coast through Galle Fort, beautiful beaches, ocean activities, heritage sites, and authentic local culture.",
    left: "/images/hotel-villa-1.jpg",
    right: "/images/hotel-villa-2.jpg",
  },
];

export default function Home() {
  const [heroSlide, setHeroSlide] = useState(0);
  const [quote, setQuote] = useState(0);
  const [manifestoSlide, setManifestoSlide] = useState(0);
  const [hotelSlide, setHotelSlide] = useState(0);
  const hotelDragStart = useRef<number | null>(null);

  useEffect(() => {
    const id = window.setInterval(() => setHeroSlide((value) => (value + 1) % heroSlides.length), 6000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => setQuote((value) => (value + 1) % reasons.length), 6500);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => setManifestoSlide((value) => (value + 1) % manifestoSlides.length), 5000);
    return () => window.clearInterval(id);
  }, []);

  const changeManifesto = (step: number) => setManifestoSlide((value) => (value + step + manifestoSlides.length) % manifestoSlides.length);
  const changeHotel = (step: number) => setHotelSlide((value) => (value + step + hotelSlides.length) % hotelSlides.length);
  const manifesto = manifestoSlides[manifestoSlide];
  const hotel = hotelSlides[hotelSlide];

  return (
    <main id="top">
      <ScrollEffects />
      <Header
        brandName="Royal Rove"
        navLinks={travelNavigation}
        meta={<>Sri Lanka · Designed Around You<br />Personal Journeys · Local Expertise</>}
        requestLabel="Plan"
      />

      <section className="hero" data-scroll-section>
        {heroSlides.map((slide, index) => (
          <Image
            key={slide.src}
            className="cover hero__image"
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            style={{
              opacity: index === heroSlide ? 1 : 0,
              transition: "opacity 1.2s ease-in-out",
            }}
          />
        ))}
        <div className="hero__shade" />
        <h1><span>Sri Lanka, Made Personal</span></h1>
        <a className="outline-button hero__cta" href="#connect" data-plan-popup data-plan-context="Plan your journey">Plan your journey</a>
        <div className="hero__dots">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`hero__dot ${index === heroSlide ? "is-active" : ""}`}
              onClick={() => setHeroSlide(index)}
              aria-label={`Go to hero slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="about" id="philosophy" data-scroll-section>
        <div className="about__image-wrap">
          <Image className="cover parallax-image scroll-media" data-parallax="68" src="/discover.jpg" alt="A quiet sunset by the sea" fill sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        <div className="about__copy">
          <Reveal><h2><span className="motion-line">Discover Sri Lanka.</span><span className="motion-line">Your Way.</span></h2></Reveal>
          <Reveal className="about__text" delay={160}>
            <p>Royal Rove creates unforgettable travel experiences across Sri Lanka and beyond. With carefully planned itineraries, trusted local knowledge, selected accommodations, and personalized service, we help travellers experience every destination in a more meaningful way.</p>
            <ArrowLink href="/journeys">Explore our journeys</ArrowLink>
          </Reveal>
        </div>
      </section>

      <section className="travelers travelers--about" id="about-royal-rove" data-scroll-section aria-labelledby="about-royal-rove-title">
        <Reveal className="travelers__copy">
          <p className="travelers__eyebrow">About Royal Rove</p>
          <h2 id="about-royal-rove-title"><span className="motion-line">Travel shaped</span><span className="motion-line">around you</span></h2>
          <p className="travelers__promise">With us, you are always in for a pleasant surprise.</p>
          <p>Exceptional planning. A dedicated team. Unforgettable experiences. At Royal Rove, we turn your travel aspirations into adventures, bringing over a decade of expertise and thoughtfully arranged details tailored to your unique desires.</p>
          <dl className="travelers__stats">
            <div><dt>Years of experience</dt><dd><ExperienceCount /></dd></div>
            <div><dt>Happy customers</dt><dd><ExperienceCount target={60} suffix="k+" label="60 thousand plus" /></dd></div>
          </dl>
        </Reveal>
      </section>

      <SriLankaMap />

      <section id="travel-experiences" className="manifesto" data-scroll-section aria-roledescription="carousel" aria-label="Travel experiences">
        <Image key={manifesto.background} className="cover manifesto__background" src={manifesto.background} alt="" fill sizes="100vw" priority={manifestoSlide === 0} />
        <div className="manifesto__wash" />
        <button onClick={() => changeManifesto(-1)} aria-label="Previous sentiment">←</button>
        <div className="manifesto__copy" key={`${manifesto.title}-${manifestoSlide}`} aria-live="polite">
          <div className="manifesto__portrait">
            <Image className="cover" src={manifesto.image} alt="Curated travel experience" fill sizes="(max-width: 768px) 44vw, 20vw" />
            <span className="script">{manifesto.subtitle}</span>
          </div>
          <h2><a href={`/experiences#${experienceSlugs[manifestoSlide]}`}>{manifesto.title}</a></h2>
        </div>
        <button onClick={() => changeManifesto(1)} aria-label="Next sentiment">→</button>
        <a className="manifesto__discover text-button" href="/experiences">Explore all experiences</a>
      </section>

      <section
        id="signature-journeys"
        className="hotels"
        data-scroll-section
        aria-roledescription="carousel"
        aria-label="Signature journeys"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") changeHotel(-1);
          if (event.key === "ArrowRight") changeHotel(1);
        }}
        onPointerDown={(event) => {
          if ((event.target as HTMLElement).closest("a, button")) return;
          hotelDragStart.current = event.clientX;
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerCancel={() => { hotelDragStart.current = null; }}
        onPointerUp={(event) => {
          if (hotelDragStart.current !== null && Math.abs(event.clientX - hotelDragStart.current) > 45) changeHotel(event.clientX < hotelDragStart.current ? 1 : -1);
          hotelDragStart.current = null;
        }}
      >
        <div className="hotels__eyebrow">Curated and customizable</div>
        <Reveal><h2><span className="motion-line">Signature</span><span className="motion-line">journeys</span></h2></Reveal>
        <div className="hotels__slide" key={`${hotel.title}-${hotelSlide}`} aria-live="polite">
          <div className="hotels__collage">
            <div className="hotels__image hotels__image--one"><Image className="cover scroll-media" data-parallax="56" src={hotel.left} alt={`${hotel.title} journey`} fill sizes="(max-width: 768px) 79vw, 33vw" /></div>
            <div className="hotels__image hotels__image--two"><Image className="cover scroll-media" data-parallax="-42" src={hotel.right} alt={`${hotel.title} experience`} fill sizes="(max-width: 768px) 47vw, 30vw" /></div>
          </div>
          <div className="hotels__copy">
            <h3>{hotel.title}</h3>
            <p className="lead">{hotel.lead}</p>
            <p>{hotel.copy}</p>
            <ArrowLink href={`/journeys#${journeySlugs[hotelSlide]}`}>Explore this journey</ArrowLink>
          </div>
        </div>
        <a className="text-button hotels__all" href="/journeys">Explore all journeys</a>
        <div className="hotels__pager"><button onClick={() => changeHotel(-1)}>Previous</button><button onClick={() => changeHotel(1)}>Next</button></div>
      </section>

      <section className="destinations" id="destinations" data-scroll-section>
        <Image className="cover scroll-media" data-parallax="72" src="/images/destinations.jpg" alt="Dramatic coastal landscape" fill sizes="100vw" />
        <div className="destinations__shade" />
        <a className="destinations__eyebrow" href="/destinations">Explore our destinations ⟶</a>
        <nav>
          <a href="/destinations#sri-lanka">Sri Lanka</a>
          <a href="/destinations#maldives">Maldives</a>
          <a href="/destinations#singapore">Singapore</a>
          <a href="/destinations#malaysia">Malaysia</a>
          <a href="/destinations#thailand">Thailand</a>
          <a href="/destinations#turkey">Turkey</a>
          <a href="/destinations#dubai">Dubai</a>
        </nav>
      </section>

      <section className="services" data-scroll-section>
        <a className="service-card" href="#travel-plus">
          <Image className="cover" src="/images/drivers.jpg" alt="Group travel service" fill sizes="(max-width: 768px) 100vw, 50vw" />
          <span>Travel+<br /><b>⟶</b></span>
        </a>
        <a className="service-card" href="/hotels" id="hotels-stays">
          <Image className="cover" src="/images/concierge.jpg" alt="Selected accommodation" fill sizes="(max-width: 768px) 100vw, 50vw" />
          <span>Hotels<br />&amp; stays <b>⟶</b></span>
        </a>
      </section>

      <section className="testimonials" id="why-royal-rove" data-scroll-section>
        <button onClick={() => setQuote((quote - 1 + reasons.length) % reasons.length)} aria-label="Previous reason">←</button>
        <div className="testimonials__orb">
          <h3>Why Royal Rove</h3>
          <p key={quote}>{reasons[quote][0]}</p>
          <strong>{reasons[quote][1]}</strong>
          <div className="testimonials__dots">{reasons.map((_, i) => <i key={i} className={i === quote ? "active" : ""} />)}</div>
        </div>
        <button onClick={() => setQuote((quote + 1) % reasons.length)} aria-label="Next reason">→</button>
      </section>

      <section id="travel-plus" className="journal" data-scroll-section>
        <div className="journal__image"><Image className="cover" src="/images/journal.jpg" alt="Historic artwork" fill sizes="100vw" /></div>
        <div className="journal__info">
          <div className="journal__title"><h2>Travel</h2><span aria-hidden="true" /><h2>+</h2></div>
          <a className="journal__link" href="#connect">Corporate, group &amp; event travel</a>
        </div>
      </section>

      <section className="connect" id="connect">
        <div className="marquee"><span>Sri Lanka, designed around you. </span><span>Sri Lanka, designed around you. </span></div>
        <a className="outline-button outline-button--sand" href="#connect" data-plan-popup data-plan-context="Start planning">Start planning</a>
      </section>

      <section className="partners" aria-label="Trusted accommodation partners">
        <div className="partners__track">
          {[1,2,3,4,1,2,3,4].map((number, index) => <Image key={`${number}-${index}`} src={`/images/partner-${number}.png`} alt="Accommodation partner" width={180} height={70} style={{ width: "auto", height: "auto" }} />)}
        </div>
      </section>

      <footer data-scroll-section>
        <div className="footer__main">
          <div className="footer__brand">
            <a className="footer__wordmark" href="#top">Royal Rove</a>
            <p>Personal journeys. Meaningful stories.</p>
            <label><span>Enter your email</span><b>⟶</b><input type="email" aria-label="Email address" /></label>
            <h3>Connect with Royal Rove</h3>
            <div className="social"><a href="#">Facebook</a><a href="#">Instagram</a><a href="#">Linkedin</a><a href="#">Youtube</a></div>
          </div>
          <div className="footer__contact">Based in Sri Lanka<br />Designing journeys<br />Across Sri Lanka<br />And beyond</div>
          <div className="footer__links"><h4>Discover</h4><a href="#about-royal-rove">About Royal Rove</a><a href="/journeys">Signature Journeys</a><a href="/experiences">Travel Experiences</a><a href="/destinations">Destinations</a><a href="/hotels">Hotels &amp; Stays</a><a href="#travel-plus">Travel+</a><a href="#connect">Contact</a></div>
          <div className="footer__links"><h4>Experiences</h4><a href="/experiences#culture-heritage">Culture &amp; Heritage</a><a href="/experiences#wildlife-nature">Wildlife &amp; Nature</a><a href="/experiences#adventure-thrills">Adventure &amp; Thrills</a><a href="/experiences#beach-island-escapes">Beach &amp; Island Escapes</a><a href="/experiences#wellness-escapes">Wellness &amp; Escapes</a><a href="/experiences#food-local-life">Food &amp; Local Life</a></div>
        </div>
        <div className="footer__bottom"><span>©2026. Royal Rove. All rights reserved.</span><LegalLinks /><span>Developed by <a href="https://divgaze.com" target="_blank" rel="noopener noreferrer">divgaze.com</a></span></div>
      </footer>
    </main>
  );
}
