// Content for Anglofone Greek Tours.
//
// CONTENT NOTE: The live site (anglofonegreektours.com) is blocked by this
// environment's network egress policy, so the copy below is realistic placeholder
// content for an English-speaking, licensed Greek tour operator. Every field is
// meant to be edited — swap in the real tour names, prices, and reviews.
//
// IMAGE NOTE: `image` URLs are best-effort Greek stock photos (Unsplash CDN). They
// render on deploy (v0/Vercel) and in your browser, but could NOT be verified from
// the build sandbox, so a few may need swapping. Every photo is rendered over the
// `grad` CSS gradient as a fallback, so a broken/blocked URL degrades to a themed
// gradient instead of a broken-image icon — the layout always looks intentional.
//
// To use the company's own photos instead:
//   1. Drop files in /public (e.g. /public/tours/acropolis.jpg) and set
//      image: "/tours/acropolis.jpg"; or paste a hosted URL.
//   2. Or have the host added to the environment's network allowlist
//      (images.unsplash.com + anglofonegreektours.com) and ask me to pull + verify.

export type Tour = {
  slug: string
  name: string
  region: string
  duration: string
  priceFrom: number // EUR, per person
  groupType: string
  summary: string
  // A longer, history-leaning description for the editorial layout.
  story: string
  highlights: string[]
  image: string // stock photo (see IMAGE NOTE)
  grad: string // CSS gradient fallback shown if the image fails to load
}

export const BRAND = {
  name: "Anglofone Greek Tours",
  shortName: "Anglofone",
  tagline: "Greece, told in English by the people who live it",
  // "Anglofone" = English-speaking. The hook for the whole brand.
  pitch:
    "Licensed, English-speaking guides leading private and small-group tours across Athens and mainland Greece — history made vivid, logistics made effortless.",
  phone: "+30 210 000 0000",
  email: "hello@anglofonegreektours.com",
  rating: 5.0,
  reviewCount: 487,
  yearsActive: 15,
  guestsGuided: "12,000+",
}

// Hero / section backgrounds. Same image-over-gradient contract as the tours.
export const HEROES = {
  imagery: {
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=2400&q=80",
    grad: "linear-gradient(160deg, #1e3a5f 0%, #2563eb 55%, #38bdf8 100%)",
  },
  imageryQuote: {
    image: "https://images.unsplash.com/photo-1504512485720-7d83a16ee930?auto=format&fit=crop&w=2400&q=80",
    grad: "linear-gradient(135deg, #1e40af 0%, #312e81 100%)",
  },
  history: {
    image: "https://images.unsplash.com/photo-1503152394-c571994fd383?auto=format&fit=crop&w=2400&q=80",
    grad: "linear-gradient(135deg, #e7d9bd 0%, #c9b896 50%, #8a7a5c 100%)",
  },
  conversion: {
    image: "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1600&q=80",
    grad: "linear-gradient(135deg, #99f6e4 0%, #14b8a6 100%)",
  },
}

export const TOURS: Tour[] = [
  {
    slug: "acropolis-parthenon",
    name: "Acropolis & Parthenon",
    region: "Athens",
    duration: "3.5 hours",
    priceFrom: 65,
    groupType: "Private",
    summary:
      "The Sacred Rock at your pace — the Parthenon, Erechtheion and Propylaea with a guide who knows every stone.",
    story:
      "Climb the marble path Pericles walked and stand beneath the Parthenon, the temple that has defined Western architecture for nearly 2,500 years. Your guide reads the building like a text — the optical refinements, the lost colours, the Panathenaic procession carved into its frieze — so the ruins resolve into a living city.",
    highlights: ["Parthenon & Erechtheion", "Theatre of Dionysus", "Skip-the-line entry", "Photo stops over Athens"],
    image: "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1600&q=80",
    grad: "linear-gradient(135deg, #fde68a 0%, #b8a274 60%, #57534e 100%)",
  },
  {
    slug: "acropolis-museum",
    name: "Acropolis Museum",
    region: "Athens",
    duration: "2 hours",
    priceFrom: 55,
    groupType: "Private",
    summary:
      "The masterpieces up close — the Caryatids, the Parthenon frieze and the light-filled top gallery.",
    story:
      "Bernard Tschumi's glass museum was built to hold the Acropolis in its sightline. Walk its galleries to meet the originals the weather drove indoors — the Caryatids, the Moschophoros, the Parthenon Marbles — and understand the debate over the fragments still in London.",
    highlights: ["The Caryatids", "Parthenon Gallery", "Archaic kore statues", "Glass-floor excavations"],
    image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=1600&q=80",
    grad: "linear-gradient(135deg, #e7e5e4 0%, #a8a29e 60%, #57534e 100%)",
  },
  {
    slug: "athens-highlights",
    name: "Athens City Highlights",
    region: "Athens",
    duration: "Full day",
    priceFrom: 120,
    groupType: "Private",
    summary:
      "Acropolis, Ancient Agora, Plaka and the Roman Forum — the whole arc of the city in one day.",
    story:
      "From the birthplace of democracy in the Agora to the lanes of Plaka beneath the Sacred Rock, this is Athens as a continuous story — Classical, Roman, Byzantine and modern layered street by street, with time for a Greek coffee where the locals take theirs.",
    highlights: ["Acropolis & Agora", "Plaka & Anafiotika", "Roman Forum", "Panathenaic Stadium"],
    image: "https://images.unsplash.com/photo-1503152394-c571994fd383?auto=format&fit=crop&w=1600&q=80",
    grad: "linear-gradient(135deg, #bae6fd 0%, #fcd34d 100%)",
  },
  {
    slug: "delphi",
    name: "Delphi — The Oracle",
    region: "Day trip",
    duration: "Full day",
    priceFrom: 145,
    groupType: "Private",
    summary:
      "The navel of the ancient world, on the slopes of Mount Parnassus — temple, theatre and museum.",
    story:
      "For a thousand years, kings and farmers alike travelled here to consult the Oracle of Apollo. Stand at the omphalos the Greeks believed marked the centre of the earth, walk the Sacred Way past the Athenian Treasury, and take in a view across the olive groves to the Gulf of Corinth.",
    highlights: ["Temple of Apollo", "Sacred Way & Treasuries", "Delphi Museum (Charioteer)", "Mountain scenery"],
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1600&q=80",
    grad: "linear-gradient(135deg, #d9f99d 0%, #65a30d 50%, #fcd34d 100%)",
  },
  {
    slug: "cape-sounion",
    name: "Cape Sounion at Sunset",
    region: "Half day",
    duration: "4.5 hours",
    priceFrom: 95,
    groupType: "Private",
    summary:
      "The Temple of Poseidon on the cliffs of Attica, timed for the most famous sunset in Greece.",
    story:
      "Drive the Athenian Riviera to the edge of Attica, where the Temple of Poseidon has watched over sailors since the 5th century BC. Lord Byron carved his name here; you'll arrive as the sun drops into the Aegean and the marble turns gold.",
    highlights: ["Temple of Poseidon", "Athenian Riviera drive", "Byron's inscription", "Aegean sunset"],
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80",
    grad: "linear-gradient(135deg, #fdba74 0%, #f97316 50%, #be185d 100%)",
  },
  {
    slug: "meteora",
    name: "Meteora Monasteries",
    region: "2 days from Athens",
    duration: "2 days",
    priceFrom: 295,
    groupType: "Private",
    summary:
      "Byzantine monasteries perched on impossible pillars of rock — a UNESCO World Heritage wonder.",
    story:
      "Monks settled these sandstone towers in the 14th century, hauling themselves up in nets to live closer to God. Six monasteries still crown the peaks. We time the visits to dodge the crowds and catch the light, with an overnight in the village of Kalambaka below.",
    highlights: ["Six clifftop monasteries", "UNESCO World Heritage site", "Sunset viewpoints", "Overnight in Kalambaka"],
    image: "https://images.unsplash.com/photo-1586183189334-1ec8b3a9bda5?auto=format&fit=crop&w=1600&q=80",
    grad: "linear-gradient(135deg, #a8a29e 0%, #4d7c0f 60%, #1c1917 100%)",
  },
  {
    slug: "argolis",
    name: "Mycenae, Epidaurus & Nafplio",
    region: "Day trip",
    duration: "Full day",
    priceFrom: 155,
    groupType: "Private",
    summary:
      "The Bronze Age citadel of Agamemnon, the perfect ancient theatre, and Greece's prettiest harbour town.",
    story:
      "Pass through the Lion Gate into Mycenae, capital of Homer's heroes, then test the legendary acoustics of the theatre at Epidaurus — a whisper on stage carries to the back row. Lunch in Nafplio, the elegant first capital of modern Greece, beneath its Venetian fortress.",
    highlights: ["Lion Gate & Treasury of Atreus", "Theatre of Epidaurus", "Corinth Canal stop", "Nafplio old town"],
    image: "https://images.unsplash.com/photo-1602738328654-51ab2ae6c4ff?auto=format&fit=crop&w=1600&q=80",
    grad: "linear-gradient(135deg, #fcd34d 0%, #a16207 55%, #44403c 100%)",
  },
  {
    slug: "saronic-cruise",
    name: "Hydra, Poros & Aegina Cruise",
    region: "Day cruise",
    duration: "Full day",
    priceFrom: 135,
    groupType: "Small group",
    summary:
      "Three Saronic islands in a day — donkey-lined Hydra, pine-clad Poros and the temple island of Aegina.",
    story:
      "Sail from Athens to three distinct islands: car-free Hydra, where artists and sea-captains' mansions line the harbour; green Poros across a narrow strait from the Peloponnese; and Aegina, with its near-complete Temple of Aphaia and famous pistachios.",
    highlights: ["Three islands in a day", "Lunch on board", "Temple of Aphaia option", "Swim stop"],
    image: "https://images.unsplash.com/photo-1601581987809-a874a81309c9?auto=format&fit=crop&w=1600&q=80",
    grad: "linear-gradient(135deg, #7dd3fc 0%, #0ea5e9 55%, #1e3a8a 100%)",
  },
]

export const REVIEWS = [
  {
    name: "Margaret H.",
    origin: "Boston, USA",
    tour: "Acropolis & Parthenon",
    quote:
      "Our guide turned a pile of marble into a living city. Twenty years of travel and this was the best tour we've ever taken — and in flawless English.",
    rating: 5,
  },
  {
    name: "David & Susan R.",
    origin: "London, UK",
    tour: "Delphi — The Oracle",
    quote:
      "Knowledgeable, warm, and never rushed. We learned more in a day at Delphi than in a whole guidebook. Booking was effortless.",
    rating: 5,
  },
  {
    name: "The Nguyen Family",
    origin: "Sydney, Australia",
    tour: "Athens City Highlights",
    quote:
      "Travelling with kids, we worried about a long day. Our guide kept all three children spellbound. Worth every euro.",
    rating: 5,
  },
  {
    name: "Elena P.",
    origin: "Toronto, Canada",
    tour: "Meteora Monasteries",
    quote:
      "Meteora left us speechless and the planning was completely stress-free. They handled hotels, timing, everything. We just showed up.",
    rating: 5,
  },
]

export const TRUST = [
  { label: "Licensed by the Greek Ministry of Tourism", short: "Licensed guides" },
  { label: "TripAdvisor Travellers' Choice", short: "Travellers' Choice" },
  { label: "Free cancellation up to 24 hours", short: "Free cancellation" },
  { label: "Private, English-speaking guides", short: "English-speaking" },
]

export const FAQ = [
  {
    q: "Are your guides really native English speakers?",
    a: "Our guides are licensed by the Greek Ministry of Tourism and lead every tour in fluent, natural English — that is the whole idea behind Anglofone. Other languages are available on request.",
  },
  {
    q: "Are tours private or in a group?",
    a: "Most of our tours are fully private — just your party and your guide — so the pace, the focus and the timing are yours. A few cruises and longer trips run as small groups; each tour page says which.",
  },
  {
    q: "Do you handle skip-the-line tickets and transport?",
    a: "Yes. Where applicable we arrange skip-the-line entry, a licensed driver and an air-conditioned vehicle, and we time visits to avoid the worst of the crowds and heat.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Free cancellation up to 24 hours before your tour for a full refund. Plans change when you travel — we keep it simple.",
  },
  {
    q: "Can you customise an itinerary for us?",
    a: "Absolutely. Tell us your dates, interests and pace and we will build a private itinerary around them, from a single morning at the Acropolis to a week across the mainland.",
  },
]
