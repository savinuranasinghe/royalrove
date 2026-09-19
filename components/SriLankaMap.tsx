"use client";

import Image from "next/image";
import { useState } from "react";
import "./SriLankaMap.css";

const destinations = [
  { name: "Anuradhapura", lat: 8.3114, lon: 80.4037, tip: 92, icon: "anuradhapura", image: "anuradhapura", alt: "A white stupa framed by trees at dusk in Anuradhapura", theme: "Sacred cities & timeless stories", description: "Discover ancient stupas, quiet sacred spaces, and the island’s living heritage." },
  { name: "Sigiriya", lat: 7.957, lon: 80.7603, tip: 87, icon: "sigiriarock", image: "sigiriya", alt: "Sigiriya rock fortress rising above the green forest", theme: "A different perspective", description: "Rise above the forest to an ancient rock fortress, where history meets an extraordinary view." },
  { name: "Polonnaruwa", lat: 7.9403, lon: 81.0188, tip: 89, icon: "polonaruwa", image: "polonnaruwa", alt: "A stone Buddha surrounded by the ruins of Polonnaruwa", theme: "Walk through ancient kingdoms", description: "Wander among stone temples, remarkable sculptures, and the traces of a royal city." },
  { name: "Pinnawala", lat: 7.301, lon: 80.388, tip: 89, icon: "pinnawala", image: "pinnawala", alt: "Elephants beside the river at Pinnawala", theme: "By the riverside", description: "Discover the riverside landscapes and lush countryside around Pinnawala." },
  { name: "Kandy", lat: 7.2906, lon: 80.6337, tip: 93, icon: "kandy", image: "kandy", alt: "The Temple of the Sacred Tooth Relic in Kandy", theme: "The cultural heart", description: "Find sacred traditions, lakeside walks, and a city wrapped in green hills." },
  { name: "Colombo", lat: 6.9271, lon: 79.8612, tip: 88, icon: "colombo", image: "colombo", alt: "Colombo’s Lotus Tower and city skyline at sunset", theme: "An island welcome", description: "Explore lively neighbourhoods, local flavours, and sunset along the oceanfront." },
  { name: "Nuwara Eliya", lat: 6.9497, lon: 80.7891, tip: 86, icon: "nuwaraeliya", image: "nuwara-eliya", alt: "A tea picker among the green tea bushes of Sri Lanka’s hill country", theme: "Into the mist", description: "Slow your pace among tea gardens, cool mountain air, and rolling green hills." },
  { name: "Ella", lat: 6.8667, lon: 81.0466, tip: 96, icon: "ella", image: "ella", alt: "A train crossing Ella’s Nine Arch Bridge", theme: "Take the scenic route", description: "Follow mountain trails and railway curves through some of the island’s most memorable scenery." },
  { name: "Galle", lat: 6.0535, lon: 80.221, tip: 84, icon: "galle", image: "galle", alt: "A colourful heritage street and tuk-tuk in Galle Fort", theme: "Stories by the sea", description: "Explore the fort’s characterful streets, small cafés, and ocean-facing ramparts." },
  { name: "Unawatuna", lat: 6.0101, lon: 80.2493, tip: 86, icon: "unawatuna", image: "unawatuna", alt: "A palm swing against the sunset on the Unawatuna coast", theme: "Barefoot moments", description: "Let warm coastal days unfold between palm-fringed beaches and golden sunsets." },
  { name: "Mirissa", lat: 5.9483, lon: 80.4716, tip: 93, icon: "mirissa", image: "mirissa", alt: "Coconut palms overlooking the ocean at Mirissa", theme: "Follow the ocean", description: "Find your own rhythm among swaying palms, coastal viewpoints, and the Indian Ocean." },
];

// Position pins within the original 1024 × 1536 artwork so they scale with it.
const project = (lon: number, lat: number) => [150 + (lon - 79.7) * 371.5, 28 + (9.82 - lat) * 358];
// Keep the closely spaced south-coast icons on land and individually selectable.
// Short connectors preserve the actual destination positions.
const iconOffsets: Record<string, [number, number]> = { Colombo: [25, -5], Unawatuna: [62, -40], Mirissa: [66, -16] };
const iconPosition = (place: typeof destinations[number]) => {
  const [x, y] = project(place.lon, place.lat);
  const [dx, dy] = iconOffsets[place.name] ?? [0, 0];
  return [x + dx, y + dy];
};

export default function SriLankaMap() {
  const [active, setActive] = useState(1);
  const destination = destinations[active];

  return (
    <section className="island-discovery" id="explore-sri-lanka" aria-labelledby="island-discovery-title">
      <div className="island-discovery__intro">
        <p className="island-discovery__eyebrow">A small island. A world to discover.</p>
        <h2 id="island-discovery-title">Find your Sri Lanka.</h2>
        <p className="island-discovery__hint">Hover or tap a destination. Let the journey unfold.</p>
      </div>

      <div className="island-discovery__map" role="group" aria-label="Explore 11 Sri Lanka destinations">
        <Image className="island-discovery__artwork" src="/images/island-map/map.png" alt="Full illustrated map of Sri Lanka" width={1024} height={1536} sizes="(max-width: 767px) 90vw, 44vw" />
        <svg viewBox="0 0 1024 1536" aria-hidden="true" focusable="false" className="island-discovery__guides">
          {destinations.map((place, index) => {
            const [x, y] = project(place.lon, place.lat);
            const [iconX, iconY] = iconPosition(place);
            return <g key={place.name} className={index === active ? "is-active" : ""}>
              {iconOffsets[place.name] && <path className="island-discovery__leader" d={`M${x} ${y} L${iconX} ${iconY}`} />}
              <circle className="island-discovery__pin" cx={x} cy={y} r="4" />
            </g>;
          })}
        </svg>
        {destinations.map((place, index) => {
          const [x, y] = iconPosition(place);
          return (
          <button
            key={place.name}
            type="button"
            className={`island-discovery__label ${active === index ? "is-active" : ""}`}
            style={{ left: `${x / 1024 * 100}%`, top: `${y / 1536 * 100}%`, transform: `translate(-50%, -${place.tip}%)` }}
            aria-label={place.name}
            aria-pressed={active === index}
            aria-controls="island-destination-preview"
            onPointerEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
          >
            <Image src={`/images/island-map/${place.icon}.png`} alt="" width={1254} height={1254} sizes="(max-width: 767px) 10vw, 60px" />
            <span>{place.name}</span>
          </button>
          );
        })}
      </div>

      <div className="island-discovery__preview" id="island-destination-preview">
        <div className="island-discovery__photo">
          {destinations.map((place, index) => (
            <Image key={place.image} src={`/images/map/${place.image}.webp`} alt={index === active ? place.alt : ""} fill sizes="(max-width: 767px) 90vw, 43vw" className={index === active ? "is-active" : ""} aria-hidden={index !== active} />
          ))}
          <div className="island-discovery__photo-shade" />
          <span className="island-discovery__number" aria-hidden="true">{String(active + 1).padStart(2, "0")} / 11</span>
          <div className="island-discovery__caption" aria-live="polite" aria-atomic="true">
            <div key={destination.name} className="island-discovery__caption-content">
              <p>{destination.theme}</p>
              <h3>{destination.name}</h3>
            </div>
          </div>
        </div>
        <p className="island-discovery__description">{destination.description}</p>
        <a className="arrow-link" href="/journeys">Explore Sri Lanka journeys<span aria-hidden="true">⟶</span></a>
      </div>
    </section>
  );
}
