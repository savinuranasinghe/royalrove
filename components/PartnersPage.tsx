import Image from "next/image";
import Header from "./Header";
import Reveal from "./Reveal";
import ScrollEffects from "./ScrollEffects";

const designingOptions = [
  "Complete Journey Design & Multi-Day Itineraries",
  "Private Day Tours & Curated Experiences",
  "Private Drivers & Seamless Transfers",
  "Concierge & Lifestyle Support",
  "Luxury Travel Concepts & Ideas",
  "Private Events & Special Occasions",
  "Something More Tailored",
];

export default function PartnersPage() {
  return (
    <main id="top" className="partners-page">
      <ScrollEffects />
      <Header />

      <section className="partners-hero" data-scroll-section>
        <div className="partners-hero__marquee" aria-hidden="true">
          <span>Travel Partners</span><i /><span>Travel Partners</span><i /><span>Travel Partners</span><i /><span>Travel Partners</span><i />
        </div>
        <Reveal className="partners-hero__image">
          <Image className="cover scroll-media" data-parallax="-62" src="/images/partners-hero.jpg" alt="Snami Travel luxury hotel partner" fill priority sizes="(max-width: 450px) 220px, (max-width: 991px) 330px, 550px" />
        </Reveal>
      </section>

      <section className="partners-intro" data-scroll-section>
        <Reveal><h1>Designing Grecian Travel Together</h1></Reveal>
        <Reveal delay={120}><h2>A Greece-based DMC partner for leading luxury tour operators and travel advisors worldwide.</h2></Reveal>
        <Reveal className="partners-intro__copy" delay={220}>
          <p>Snami Travel collaborates with established luxury tour operators, boutique agencies, and independent travel designers across Europe, North America, and select international markets. Many of our partners are affiliated with Virtuoso, Serandipians, Signature Travel Network, Fora, Ensemble, Internova, and other leading luxury travel networks. We work as a trusted local extension of your brand in Greece, supporting bespoke itineraries through destination knowledge, access, and refined operational expertise.</p>
          <p>Based in Greece, our role spans both travel design and on-the-ground execution. From custom itinerary planning and handpicked hotels or villas to curated experiences and discreet travel concierge management, our Operations Team ensures every journey unfolds with continuity and care. We integrate seamlessly into your way of working — respecting your client relationships while delivering high-end travel services in Greece that feel thoughtful, personal, and quietly assured.</p>
        </Reveal>
      </section>

      <section className="partners-banner" data-scroll-section>
        <Image className="cover scroll-media" data-parallax="54" src="/images/partners-detail.jpg" alt="Refined hotel interior detail" fill sizes="100vw" />
      </section>

      <section className="partners-contact" id="connect" data-scroll-section>
        <Reveal><h2>Let&apos;s Connect</h2></Reveal>
        <Reveal delay={150}>
          <form className="partners-form">
            <div className="partners-form__row">
              <label>Company / Agency Name<span>*</span><input name="company" required /></label>
              <label>Contact Person<span>*</span><input name="contactPerson" required /></label>
            </div>
            <div className="partners-form__row">
              <label>Email<span>*</span><input type="email" name="email" required /></label>
              <label>Phone Number<span>*</span><input type="tel" name="phone" required /></label>
            </div>
            <div className="partners-form__row">
              <label className="partners-form__select"><span className="sr-only">Country</span><select name="country" defaultValue="" required><option value="" disabled>Country *</option><option>Australia</option><option>Canada</option><option>France</option><option>Germany</option><option>Greece</option><option>Italy</option><option>Switzerland</option><option>United Kingdom</option><option>United States</option></select></label>
              <label className="partners-form__select"><span className="sr-only">What are you designing?</span><select name="designing" defaultValue="" required><option value="" disabled>What are you designing? *</option>{designingOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
            </div>
            <label>Additional Notes<textarea name="notes" rows={5} /></label>
            <label className="partners-form__accept"><input type="checkbox" required /><span>I agree to the <a href="#">Terms of Use</a>, <a href="#">Privacy Policy</a> and <a href="#">Cookie Policy</a>.</span></label>
            <button type="submit">Submit <b>⟶</b></button>
          </form>
        </Reveal>
      </section>

      <section className="partners-newsletter">
        <Reveal><h2>The Journey, In Your Inbox</h2></Reveal>
        <label><span>Email address</span><input type="email" aria-label="Newsletter email address" /><b>⟶</b></label>
      </section>

      <section className="partners-inquiry" data-scroll-section>
        <Image className="cover scroll-media" data-parallax="85" src="/images/partners-inquiry.jpg" alt="Luxury villa overlooking the Aegean" fill sizes="100vw" />
        <div className="partners-inquiry__shade" />
        <Reveal className="partners-inquiry__content">
          <h2>Didn&apos;t Find What You Were Looking For?</h2>
          <a className="outline-button outline-button--partners" href="mailto:info@snamitravel.com">Inquiry</a>
        </Reveal>
      </section>

      <footer data-scroll-section>
        <div className="footer__main">
          <div className="footer__brand">
            <Image src="/images/logo.svg" alt="Snami Travel" width={150} height={74} style={{ height: "auto" }} />
            <p>Travel Differently. Stay Connected</p>
            <label><span>Enter your email</span><b>⟶</b><input type="email" aria-label="Email address" /></label>
            <h3>Connect with Snami</h3>
            <div className="social"><a href="#">Facebook</a><a href="#">Instagram</a><a href="#">Linkedin</a><a href="#">Youtube</a></div>
          </div>
          <div className="footer__contact">Based in Crete<br />Designing Greece<br />T. +30 698 709 7639<br />E. info@snamitravel.com</div>
          <div className="footer__links"><h4>The company</h4><a href="#">About Snami</a><a href="#">Travel Journal</a><a href="#">Sustainability</a><a href="#">FAQ</a><a href="/luxury-dmc-greece">Travel Partners</a><a href="#">Contact</a></div>
          <div className="footer__links"><h4>Luxury services</h4><a href="#">Luxury Hotels &amp; Private Villas</a><a href="#">Day Tours &amp; Curated Experiences</a><a href="#">Private Transfers &amp; Chauffeur Services</a><a href="#">Concierge &amp; Lifestyle Services</a><a href="#">Multi-Day Itineraries</a><a href="#">Signature Destinations</a></div>
        </div>
        <div className="footer__bottom"><span>©2026. Snami Travel. All rights reserved.</span><span>Terms and Conditions&nbsp;&nbsp; · &nbsp;&nbsp;Privacy Policy&nbsp;&nbsp; · &nbsp;&nbsp;Cookie Policy</span><span>Developed by <a href="https://divgaze.com" target="_blank" rel="noopener noreferrer">divgaze.com</a></span></div>
      </footer>
    </main>
  );
}
