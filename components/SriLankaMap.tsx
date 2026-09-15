"use client";

import Image from "next/image";
import { useState } from "react";
import "./SriLankaMap.css";

const destinations = [
  { name: "Anuradhapura", lat: 8.3114, lon: 80.4037, label: [95, 242], image: "anuradhapura", alt: "A white stupa framed by trees at dusk in Anuradhapura", theme: "Sacred cities & timeless stories", description: "Discover ancient stupas, quiet sacred spaces, and the island’s living heritage." },
  { name: "Sigiriya", lat: 7.957, lon: 80.7603, label: [393, 280], image: "sigiriya", alt: "Sigiriya rock fortress rising above the green forest", theme: "A different perspective", description: "Rise above the forest to an ancient rock fortress, where history meets an extraordinary view." },
  { name: "Polonnaruwa", lat: 7.9403, lon: 81.0188, label: [438, 328], image: "polonnaruwa", alt: "A stone Buddha surrounded by the ruins of Polonnaruwa", theme: "Walk through ancient kingdoms", description: "Wander among stone temples, remarkable sculptures, and the traces of a royal city." },
  { name: "Pinnawala", lat: 7.301, lon: 80.388, label: [89, 364], image: "pinnawala", alt: "Elephants beside the river at Pinnawala", theme: "By the riverside", description: "Discover the riverside landscapes and lush countryside around Pinnawala." },
  { name: "Kandy", lat: 7.2906, lon: 80.6337, label: [416, 388], image: "kandy", alt: "The Temple of the Sacred Tooth Relic in Kandy", theme: "The cultural heart", description: "Find sacred traditions, lakeside walks, and a city wrapped in green hills." },
  { name: "Colombo", lat: 6.9271, lon: 79.8612, label: [61, 447], image: "colombo", alt: "Colombo’s Lotus Tower and city skyline at sunset", theme: "An island welcome", description: "Explore lively neighbourhoods, local flavours, and sunset along the oceanfront." },
  { name: "Nuwara Eliya", lat: 6.9497, lon: 80.7891, label: [430, 435], image: "nuwara-eliya", alt: "A tea picker among the green tea bushes of Sri Lanka’s hill country", theme: "Into the mist", description: "Slow your pace among tea gardens, cool mountain air, and rolling green hills." },
  { name: "Ella", lat: 6.8667, lon: 81.0466, label: [437, 483], image: "ella", alt: "A train crossing Ella’s Nine Arch Bridge", theme: "Take the scenic route", description: "Follow mountain trails and railway curves through some of the island’s most memorable scenery." },
  { name: "Galle", lat: 6.0535, lon: 80.221, label: [78, 548], image: "galle", alt: "A colourful heritage street and tuk-tuk in Galle Fort", theme: "Stories by the sea", description: "Explore the fort’s characterful streets, small cafés, and ocean-facing ramparts." },
  { name: "Unawatuna", lat: 6.0101, lon: 80.2493, label: [127, 628], image: "unawatuna", alt: "A palm swing against the sunset on the Unawatuna coast", theme: "Barefoot moments", description: "Let warm coastal days unfold between palm-fringed beaches and golden sunsets." },
  { name: "Mirissa", lat: 5.9483, lon: 80.4716, label: [350, 616], image: "mirissa", alt: "Coconut palms overlooking the ocean at Mirissa", theme: "Follow the ocean", description: "Find your own rhythm among swaying palms, coastal viewpoints, and the Indian Ocean." },
];

// Natural Earth 1:50m coastline, projected together with the destination coordinates.
// Source: github.com/nvkelso/natural-earth-vector (public domain).
const coastline = [[79.982324,9.812695],[80.078418,9.807471],[80.180957,9.81001],[80.252832,9.796338],[80.375977,9.642334],[80.711133,9.366357],[80.893457,9.085889],[80.910059,9.024512],[80.935449,8.971484],[80.979199,8.956934],[81.016016,8.932617],[81.198242,8.661963],[81.219238,8.608398],[81.216211,8.549414],[81.226953,8.505518],[81.274609,8.483594],[81.333984,8.47207],[81.372852,8.431445],[81.422168,8.215234],[81.422168,8.147852],[81.435938,8.118896],[81.66543,7.782471],[81.678711,7.741553],[81.67627,7.710938],[81.68291,7.684473],[81.727344,7.625],[81.79668,7.464795],[81.832031,7.428418],[81.874121,7.28833],[81.876953,7.020459],[81.861426,6.90127],[81.818555,6.756201],[81.767773,6.614307],[81.712695,6.511865],[81.637402,6.425146],[81.37998,6.240918],[81.30625,6.203857],[80.971094,6.088379],[80.724121,5.979053],[80.495801,5.949365],[80.267383,6.009766],[80.095313,6.153174],[80.007227,6.364404],[79.946973,6.584521],[79.859375,6.829297],[79.79209,7.585205],[79.759961,7.796484],[79.707812,8.065674],[79.712988,8.182324],[79.749805,8.294238],[79.749707,8.048877],[79.783496,8.018457],[79.808887,8.05],[79.831934,8.304053],[79.850879,8.411572],[79.941797,8.691504],[79.943652,8.741162],[79.92793,8.846436],[79.928906,8.899219],[80.064844,9.095654],[80.099609,9.209961],[80.118359,9.326855],[80.110938,9.453271],[80.086328,9.577832],[80.196094,9.538135],[80.256445,9.494775],[80.317969,9.46543],[80.367969,9.480469],[80.42832,9.480957],[80.385352,9.548779],[80.257617,9.611279],[80.045801,9.649902],[79.979492,9.699365],[79.954004,9.742334],[79.966992,9.792627]];
const project = (lon: number, lat: number) => [40 + (lon - 79.4) * 140, 20 + (9.95 - lat) * 140];
const outline = `${coastline.map(([lon, lat], index) => `${index ? "L" : "M"}${project(lon, lat).join(",")}`).join(" ")} Z`;

export default function SriLankaMap() {
  const [active, setActive] = useState(1);
  const destination = destinations[active];

  return (
    <section className="island-discovery" id="explore-sri-lanka" aria-labelledby="island-discovery-title">
      <div className="island-discovery__intro">
        <p className="island-discovery__eyebrow">A small island. A world to discover.</p>
        <h2 id="island-discovery-title">Find your<br />Sri Lanka.</h2>
        <p className="island-discovery__hint">Hover or tap a destination. Let the journey unfold.</p>
      </div>

      <div className="island-discovery__map" role="group" aria-label="Explore 11 Sri Lanka destinations">
        <svg viewBox="0 0 560 680" aria-hidden="true" focusable="false">
          <defs>
            <radialGradient id="island-land-fill"><stop stopColor="#f4f7fa" /><stop offset="1" stopColor="#e2eaf1" /></radialGradient>
          </defs>
          <circle className="island-discovery__ocean-ring" cx="250" cy="333" r="220" />
          <circle className="island-discovery__ocean-ring" cx="250" cy="333" r="270" />
          <path className="island-discovery__land" d={outline} />
          <g className="island-discovery__compass" transform="translate(458 95)">
            <text y="-25" textAnchor="middle">N</text><path d="M0 -13 L5 12 L0 7 L-5 12 Z" />
          </g>
          <text className="island-discovery__ocean" x="411" y="207" textAnchor="middle">INDIAN OCEAN</text>
          {destinations.map((place, index) => {
            const [x, y] = project(place.lon, place.lat);
            const [labelX, labelY] = place.label;
            return (
              <g key={place.name} className={`island-discovery__point ${index === active ? "is-active" : ""}`} onPointerEnter={() => setActive(index)} onClick={() => setActive(index)}>
                <path className="island-discovery__leader" d={`M${x} ${y} L${labelX} ${labelY}`} />
                <circle className="island-discovery__halo" cx={x} cy={y} r="12" />
                <circle className="island-discovery__pin" cx={x} cy={y} r="4" />
              </g>
            );
          })}
        </svg>
        {destinations.map((place, index) => (
          <button
            key={place.name}
            type="button"
            className={`island-discovery__label ${active === index ? "is-active" : ""}`}
            style={{ left: `${place.label[0] / 560 * 100}%`, top: `${place.label[1] / 680 * 100}%` }}
            aria-pressed={active === index}
            aria-controls="island-destination-preview"
            onPointerEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
          >{place.name}</button>
        ))}
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
