"use client";

import Image from "next/image";
import RoyalRoveLogo from "./RoyalRoveLogo";
import { useEffect, useRef, useState } from "react";
import ArrowLink from "./ArrowLink";
import Header from "./Header";
import LegalLinks from "./LegalLinks";
import FooterContact from "./FooterContact";
import Reveal from "./Reveal";
import ScrollEffects from "./ScrollEffects";
import SriLankaMap from "./SriLankaMap";
import ExperienceCount from "./ExperienceCount";
import "./AboutRoyalRove.css";
import { journeyImage, travelNavigation } from "@/content/travel";

const heroSlides = [
  { src: "/hero.jpg", alt: "Dramatic coastal landscape" },
  { src: "/hero2.jpg", alt: "Sri Lanka travel landscape" },
];

const hotelLogos = [
  ["AITKENSPENCE", "Aitken Spence"], ["AMAYA-1", "Amaya Resorts & Spas"],
  ["ANANTARA", "Anantara"], ["AVANI", "Avani"],
  ["CENTARA", "Centara"], ["CINNAMON", "Cinnamon"],
  ["HERITANCE-1", "Heritance"], ["HILTON", "Hilton"],
  ["ITC-2", "ITC Hotels"], ["JETWING", "Jetwing"],
  ["MARRIOTT", "Marriott"], ["MOVENPICK", "Mövenpick"],
  ["RESPLENDENT", "Resplendent Ceylon"], ["RIU", "RIU"],
  ["SHERATON", "Sheraton"], ["TAJ", "Taj"],
];

const reasons = [
  ["Journeys are built around your interests, preferred pace, accommodation choices, and budget.", "Personalized travel planning"],
  ["Trusted local knowledge connects each destination, stay, and experience with care.", "Local destination expertise"],
  ["Thoughtful support helps every journey unfold smoothly, from planning through travel.", "Professional travel assistance"],
];

const manifestoSlides = [
  { title: "Culture & heritage", subtitle: "Stories shaped by centuries", background: "/images/map/kandy.webp", image: "/images/map/kandy.webp" },
  { title: "Wildlife & nature", subtitle: "Wonder in every landscape", background: "/images/map/pinnawala.webp", image: "/images/map/pinnawala.webp" },
  { title: "Adventure & thrills", subtitle: "Move beyond the familiar", background: "/images/map/ella.webp", image: "/images/map/ella.webp" },
  { title: "Beach & island escapes", subtitle: "Follow the rhythm of the coast", background: "/images/map/unawatuna.webp", image: "/images/map/unawatuna.webp" },
  { title: "Wellness & escapes", subtitle: "Slow down. Reconnect.", background: "/images/map/welness1.jpg", image: "/images/map/welness1.jpg" },
  { title: "Food & local life", subtitle: "Get to know the island", background: "/images/map/nuwara-eliya.webp", image: "/images/map/nuwara-eliya.webp" },
];

const experienceSlugs = ["culture-heritage", "wildlife-nature", "adventure-thrills", "beach-island-escapes", "wellness-escapes", "food-local-life"];
const journeySlugs = ["the-essence-of-sri-lanka", "ancient-sri-lanka", "tea-trails-mountain-escapes", "wild-sri-lanka", "southern-soul"];

const hotelSlides = [
  {
    title: "The Essence of Sri Lanka",
    lead: "One island. A world of experiences.",
    copy: "A complete Sri Lankan journey combining ancient heritage, cultural landmarks, scenic hill country, wildlife encounters, and the tropical southern coastline.",
    left: "/images/travel/train.webp",
    right: journeyImage("sigiriya"),
  },
  {
    title: "Ancient Sri Lanka",
    lead: "History, tradition, and spiritual heritage.",
    copy: "Discover ancient kingdoms, sacred temples, cultural experiences, and iconic heritage locations that reveal the island’s enduring story.",
    left: "/images/map/anuradhapura.webp",
    right: journeyImage("polonnaruwa"),
  },
  {
    title: "Tea Trails & Mountain Escapes",
    lead: "Into the misty heart of the island.",
    copy: "Explore tea plantations, waterfalls, mountain landscapes, Ella experiences, and one of the world’s most memorable scenic train journeys.",
    left: "/images/map/nuwara-eliya.webp",
    right: journeyImage("ella"),
  },
  {
    title: "Wild Sri Lanka",
    lead: "Closer to the island’s wild side.",
    copy: "Experience national parks, safari adventures, bird watching, and remarkable wildlife encounters across Sri Lanka’s diverse natural landscapes.",
    left: "/images/map/pinnawala.webp",
    right: journeyImage("/images/journeys/wild.jpg"),
  },
  {
    title: "Southern Soul",
    lead: "Coastal beauty with a story to tell.",
    copy: "Unwind along Sri Lanka’s southern coast through Galle Fort, beautiful beaches, ocean activities, heritage sites, and authentic local culture.",
    left: "/images/map/galle.webp",
    right: journeyImage("mirissa"),
  },
];

export default function Home() {
  const [heroSlide, setHeroSlide] = useState(0);
  const [quote, setQuote] = useState(0);
  const [manifestoSlide, setManifestoSlide] = useState(0);
  const [hotelSlide, setHotelSlide] = useState(0);
  const [leftHotelSlide, setLeftHotelSlide] = useState(0);
  const [journeysInView, setJourneysInView] = useState(false);
  const hotelDragStart = useRef<number | null>(null);
  const journeySection = useRef<HTMLElement>(null);
  const partnerTrack = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const matchOriginalLogoSpeed = () => {
      if (!partnerTrack.current) return;
      const gap = window.innerWidth * 0.1;
      const oldLogoWidth = window.innerWidth <= 767 ? 170 : 180;
      const originalCycle = oldLogoWidth * 3 + (90 * 500 / 440) + 4 * gap;
      const currentCycle = hotelLogos.length * (140 + gap);
      partnerTrack.current.style.animationDuration = `${24 * currentCycle / originalCycle}s`;
    };
    matchOriginalLogoSpeed();
    window.addEventListener("resize", matchOriginalLogoSpeed);
    return () => window.removeEventListener("resize", matchOriginalLogoSpeed);
  }, []);

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

  useEffect(() => {
    if (!journeySection.current) return;
    const observer = new IntersectionObserver(([entry]) => setJourneysInView(entry.isIntersecting), { threshold: 0.2 });
    observer.observe(journeySection.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!journeysInView || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => setHotelSlide((value) => (value + 1) % hotelSlides.length), 6000);
    return () => window.clearTimeout(id);
  }, [journeysInView, hotelSlide]);

  useEffect(() => {
    const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 350;
    const id = window.setTimeout(() => setLeftHotelSlide(hotelSlide), delay);
    return () => window.clearTimeout(id);
  }, [hotelSlide]);

  const changeManifesto = (step: number) => setManifestoSlide((value) => (value + step + manifestoSlides.length) % manifestoSlides.length);
  const changeHotel = (step: number) => setHotelSlide((value) => (value + step + hotelSlides.length) % hotelSlides.length);
  const manifesto = manifestoSlides[manifestoSlide];
  const hotel = hotelSlides[hotelSlide];
  const leftHotel = hotelSlides[leftHotelSlide];

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
        ref={journeySection}
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
        <div className="hotels__slide" aria-live="polite">
          <div className="hotels__collage">
            <div className="hotels__image hotels__image--one" key={`left-${leftHotelSlide}`}><Image className="cover scroll-media" data-parallax="56" src={leftHotel.left} alt={`${leftHotel.title} journey`} fill sizes="(max-width: 768px) 79vw, 33vw" /></div>
            <div className="hotels__image hotels__image--two" key={`right-${hotelSlide}`}><Image className="cover scroll-media" data-parallax="-42" src={hotel.right} alt={`${hotel.title} experience`} fill sizes="(max-width: 768px) 47vw, 30vw" /></div>
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
        <a className="service-card" href="/travel-plus">
          <Image className="cover" src="/images/drivers.jpg" alt="Group travel service" fill sizes="(max-width: 768px) 100vw, 50vw" />
          <span>Travel+<br /><b>⟶</b></span>
        </a>
        <a className="service-card" href="/hotels" id="hotels-stays">
          <Image className="cover" src="/images/concierge.jpg" alt="Selected accommodation" fill sizes="(max-width: 768px) 100vw, 50vw" />
          <span>Our curated<br />stays <b>⟶</b></span>
        </a>
      </section>

      <section className="testimonials" id="why-royal-rove" data-scroll-section>
        <button onClick={() => setQuote((quote - 1 + reasons.length) % reasons.length)} aria-label="Previous reason">←</button>
        <div className="testimonials__orb">
          <Image className="testimonials__round-image" src="/images/roundimage.webp" alt="" fill sizes="(max-width: 767px) 350px, 520px" />
          <h3>Why Royal Rove</h3>
          <p key={quote}>{reasons[quote][0]}</p>
          <strong>{reasons[quote][1]}</strong>
          <div className="testimonials__dots">{reasons.map((_, i) => <i key={i} className={i === quote ? "active" : ""} />)}</div>
        </div>
        <button onClick={() => setQuote((quote + 1) % reasons.length)} aria-label="Next reason">→</button>
      </section>

      <section id="travel-plus" className="journal" data-scroll-section>
        <div className="journal__image"><Image className="cover" src="/images/hansapuutuwa.jpg" alt="Traditional Sri Lankan hansa puttuwa artwork with colorful birds" fill sizes="100vw" /></div>
        <div className="journal__info">
          <div className="journal__title journal__title--brand"><h2>Royal</h2><span aria-hidden="true" /><h2>Rove</h2></div>
        </div>
      </section>

      <section className="connect" id="connect">
        <div className="marquee"><span>Sri Lanka, designed around you. </span><span>Sri Lanka, designed around you. </span></div>
        <a className="outline-button outline-button--sand" href="#connect" data-plan-popup data-plan-context="Start planning">Start planning</a>
      </section>

      <section className="partners" aria-label="Trusted accommodation partners">
        <svg width="0" height="0" aria-hidden="true" style={{ position: "absolute", pointerEvents: "none" }}>
          <defs><filter id="hotel-logo-white" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
            <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  -3 -3 -3 0 8.5" result="whiteLogo" />
            <feFlood floodColor="#0a192f" floodOpacity="1" result="solidBlueBackground" />
            <feComposite in="whiteLogo" in2="solidBlueBackground" operator="over" />
          </filter></defs>
        </svg>
        <div className="partners__track" ref={partnerTrack}>
          {[...hotelLogos, ...hotelLogos].map(([file, name], index) => <Image key={`${file}-${index}`} src={`/images/hotel-logos/${file}.jpg`} alt={index < hotelLogos.length ? name : ""} aria-hidden={index >= hotelLogos.length ? true : undefined} width={500} height={500} sizes="140px" style={{ width: 140, height: 140, maxHeight: 140 }} />)}
        </div>
      </section>

      <footer data-scroll-section>
        <div className="footer__main">
          <div className="footer__brand">
            <a className="footer__wordmark" href="#top" aria-label="Royal Rove home"><RoyalRoveLogo /></a>
            <p>Personal journeys. Meaningful stories.</p>
            <label><span>Enter your email</span><b>⟶</b><input type="email" aria-label="Email address" /></label>
            <h3>Connect with Royal Rove</h3>
            <div className="social"><a href="https://www.facebook.com/royalrovelk?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">Facebook</a></div>
          </div>
          <div className="footer__contact"><FooterContact /></div>
          <div className="footer__links"><h4>Discover</h4><a href="#about-royal-rove">About Royal Rove</a><a href="/journeys">Signature Journeys</a><a href="/experiences">Travel Experiences</a><a href="/destinations">Destinations</a><a href="/hotels">Our Curated Stays</a><a href="/travel-plus">Travel+</a><a href="#connect">Contact</a></div>
          <div className="footer__links"><h4>Experiences</h4><a href="/experiences#culture-heritage">Culture &amp; Heritage</a><a href="/experiences#wildlife-nature">Wildlife &amp; Nature</a><a href="/experiences#adventure-thrills">Adventure &amp; Thrills</a><a href="/experiences#beach-island-escapes">Beach &amp; Island Escapes</a><a href="/experiences#wellness-escapes">Wellness &amp; Escapes</a><a href="/experiences#food-local-life">Food &amp; Local Life</a></div>
        </div>
        <div className="footer__bottom"><span>©2026. Royal Rove. All rights reserved.</span><LegalLinks /><span>Developed by <a href="https://divgaze.com" target="_blank" rel="noopener noreferrer">divgaze.com</a></span></div>
      </footer>
    </main>
  );
}
