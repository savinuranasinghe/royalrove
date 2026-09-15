export const travelNavigation = [
  { label: "Home", href: "/" },
  { label: "Signature Journeys", href: "/journeys" },
  { label: "Travel Experiences", href: "/experiences" },
  { label: "Destinations", href: "/destinations" },
  { label: "Hotels & Stays", href: "/hotels" },
  { label: "About Royal Rove", href: "/#about-royal-rove" },
  { label: "Travel+", href: "/#travel-plus" },
  { label: "Plan Your Journey", href: "/#connect" },
];

export const experiences = [
  { slug: "culture-heritage", title: "Culture & Heritage", line: "Follow the stories.", image: "/images/map/kandy.webp", alt: "The Temple of the Sacred Tooth Relic in Kandy", description: "Ancient kingdoms, sacred traditions, and stories shared by the people who call this island home.", activities: ["Sigiriya Rock Fortress", "Kandy", "Temple experiences", "Galle Fort", "Buddhist heritage", "Ramayana Trail", "Village experiences"], journey: "ancient-sri-lanka" },
  { slug: "wildlife-nature", title: "Wildlife & Nature", line: "A little closer to the wild.", image: "/images/map/pinnawala.webp", alt: "Sri Lankan elephants beside a river", description: "From national parks to the open ocean, make room for the island’s remarkable wildlife.", activities: ["Yala Safari", "Udawalawe", "Gal Oya", "Wilpattu", "Whale watching", "Bird watching"], journey: "wild-sri-lanka" },
  { slug: "adventure-thrills", title: "Adventure & Thrills", line: "Go a little further.", image: "/images/map/ella.webp", alt: "The Nine Arch Bridge surrounded by Ella’s green hills", description: "Find your kind of adventure in the mountains, on the rivers, and along the coast.", activities: ["White-water rafting", "ATV adventures", "Ziplining", "Surfing", "Diving", "Water sports", "Hiking"], journey: "adventure-island" },
  { slug: "beach-island-escapes", title: "Beach & Island Escapes", line: "Stay for the sunset.", image: "/images/map/mirissa.webp", alt: "Coconut palms overlooking the ocean in Mirissa", description: "Choose a surf town, a quiet bay, or a long stretch of sand—and settle into coastal life.", activities: ["Mirissa", "Hiriketiya", "Arugam Bay", "Pasikudah", "Bentota", "Trincomalee"], journey: "southern-soul" },
  { slug: "wellness-escapes", title: "Wellness & Escapes", line: "Time to simply be.", image: "/images/map/unawatuna.webp", alt: "A peaceful sunset on the Sri Lankan coast", description: "Gentler days, restorative rituals, and space to reconnect at your own pace.", activities: ["Yoga", "Ayurveda", "Wellness retreats", "Private villas", "Slow travel"], journey: "island-in-style" },
  { slug: "food-local-life", title: "Food & Local Life", line: "Get to know the island.", image: "/images/map/nuwara-eliya.webp", alt: "A tea picker working among hill-country tea gardens", description: "Meet Sri Lanka through its kitchens, tea gardens, markets, and everyday traditions.", activities: ["Sri Lankan cooking", "Tea experiences", "Village lunches", "Local markets", "Farm-to-table experiences"], journey: "hidden-sri-lanka" },
];


export const stayStyles = [
  { slug: "boutique-hotels", name: "Boutique Hotels", line: "A little more character.", image: "/images/hotel-boutique-1.jpg", alt: "Stay inspiration: a characterful boutique hotel entrance", description: "Intimate spaces with a sense of place, chosen to bring you closer to the destination.", details: ["Heritage settings", "Individual character", "Intimate atmosphere"], destination: "southern-coast" },
  { slug: "beach-resorts", name: "Beach Resorts", line: "Wake up by the ocean.", image: "/images/hotel-resort-1.jpg", alt: "Stay inspiration: a contemporary resort framed by palms", description: "A coastal base for easy days, ocean views, and time to unwind between experiences.", details: ["Coastal settings", "Relaxed days", "Room to unwind"], destination: "east-coast" },
  { slug: "hill-country-retreats", name: "Hill Country Retreats", line: "Above the everyday.", image: "/images/map/nuwara-eliya.webp", alt: "Tea gardens in Sri Lanka’s hill country", description: "Stay among tea country and mountain scenery, with a quieter rhythm and cooler air.", details: ["Tea-country scenery", "Mountain escapes", "A slower pace"], destination: "hill-country" },
  { slug: "private-villas", name: "Private Villas", line: "Somewhere of your own.", image: "/images/hotel-villa-1.jpg", alt: "Stay inspiration: a private terrace overlooking the sea", description: "Space and privacy for a personal escape, a family holiday, or time away together.", details: ["Privacy", "Space to gather", "Flexible stays"], destination: "southern-coast" },
];

export const journeyImage = (image: string) => `/images/${["beach", "waterfall", "train"].includes(image) ? "travel" : "map"}/${image}.webp`;
