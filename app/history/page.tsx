import Link from "next/link"
import { BRAND, TOURS, REVIEWS, HEROES } from "@/lib/tours-data"
import { DesignSwitcher } from "@/components/design-switcher"
import { Photo } from "@/components/photo"

// ── Greek meander (key) divider ──────────────────────────────────────────────
function Meander({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      height="14"
      width="100%"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 96 14"
      role="presentation"
      aria-hidden
    >
      <defs>
        <pattern id="meander" width="24" height="14" patternUnits="userSpaceOnUse">
          <path
            d="M2 12 V4 H14 V10 H8 V6 H10 V8 H12 V2 H4 V12 H2 Z M14 4 V2 H22 V12 H16 V6 H18 V10 H20 V4 H14 Z"
            fill="currentColor"
          />
        </pattern>
      </defs>
      <rect width="96" height="14" fill="url(#meander)" />
    </svg>
  )
}

const TIMELINE = [
  { era: "Bronze Age", years: "3000–1100 BC", note: "Mycenae, the Lion Gate and the world of Homer's heroes." },
  { era: "Classical", years: "508–323 BC", note: "Democracy, the Parthenon, tragedy and philosophy in Athens." },
  { era: "Hellenistic", years: "323–31 BC", note: "Alexander's world — Greek thought from Egypt to the Indus." },
  { era: "Roman & Byzantine", years: "146 BC–1453", note: "Empire, then a thousand years of Orthodox Christendom." },
  { era: "Modern Greece", years: "1821–today", note: "Independence, the first capital at Nafplio, and the living nation." },
]

export default function HistoryDesign() {
  const featured = TOURS.slice(0, 4)

  return (
    <main className="min-h-screen bg-[#f6f1e7] font-[family-name:var(--font-serif)] text-[#2b2520] antialiased">
      <DesignSwitcher />

      {/* Top bar */}
      <header className="border-b border-[#d8cdb8]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link href="/history" className="leading-none">
            <span className="block font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-[#1f3a4d]">
              Anglofone
            </span>
            <span className="block text-[0.65rem] uppercase tracking-[0.35em] text-[#9c5a3c]">
              Greek Tours
            </span>
          </Link>
          <nav className="hidden gap-8 text-sm uppercase tracking-[0.18em] text-[#5b5346] md:flex">
            <a href="#story" className="hover:text-[#9c5a3c]">The Story</a>
            <a href="#journeys" className="hover:text-[#9c5a3c]">Journeys</a>
            <a href="#guides" className="hover:text-[#9c5a3c]">Our Guides</a>
            <a href="#contact" className="hover:text-[#9c5a3c]">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 pb-16 pt-16 md:pt-24 text-center">
          <Meander className="mx-auto mb-8 w-40 text-[#9c5a3c]" />
          <p className="text-sm uppercase tracking-[0.35em] text-[#9c5a3c]">
            Established · {2026 - BRAND.yearsActive}
          </p>
          <h1 className="mx-auto mt-6 max-w-3xl font-[family-name:var(--font-display)] text-5xl font-bold leading-[1.05] tracking-tight text-[#1f3a4d] md:text-7xl">
            Greece, told in English by the people who live it.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-xl leading-relaxed text-[#4a4236]">
            For fifteen years our licensed guides have walked travellers through the ruins of
            Athens and the heart of the mainland — not reciting dates, but turning stone back
            into the living civilisation that shaped our own.
          </p>
          <div className="mt-9 flex items-center justify-center gap-5">
            <a
              href="#journeys"
              className="rounded-sm bg-[#1f3a4d] px-7 py-3 text-sm uppercase tracking-[0.18em] text-[#f6f1e7] transition-colors hover:bg-[#162937]"
            >
              Explore the journeys
            </a>
            <a
              href="#story"
              className="text-sm uppercase tracking-[0.18em] text-[#9c5a3c] underline underline-offset-8 hover:text-[#1f3a4d]"
            >
              Read our philosophy
            </a>
          </div>
        </div>
        <Meander className="w-full text-[#e0d6c2]" />
      </section>

      {/* Framed photographic plate — an antique-illustration feel */}
      <section className="mx-auto max-w-5xl px-6 pb-4 pt-12">
        <figure className="border border-[#d8cdb8] bg-[#efe7d6] p-3 shadow-sm">
          <Photo
            src={HEROES.history.image}
            grad={HEROES.history.grad}
            label="The Acropolis of Athens"
            className="h-[44vh] min-h-[300px] w-full"
            position="center 35%"
            overlayClassName="bg-[#3a2a16]/15"
          />
          <figcaption className="mt-3 text-center text-sm italic text-[#7a6f5c]">
            The Acropolis of Athens — where nearly every Anglofone journey begins.
          </figcaption>
        </figure>
      </section>

      {/* Stat band */}
      <section className="border-y border-[#d8cdb8] bg-[#efe7d6]">
        <div className="mx-auto grid max-w-5xl grid-cols-2 divide-x divide-[#d8cdb8] px-6 md:grid-cols-4">
          {[
            [`${BRAND.yearsActive} yrs`, "Guiding in Greece"],
            [BRAND.guestsGuided, "Travellers welcomed"],
            ["Licensed", "By the Ministry of Tourism"],
            [`${BRAND.rating.toFixed(1)}★`, `${BRAND.reviewCount} reviews`],
          ].map(([big, small]) => (
            <div key={small as string} className="px-4 py-7 text-center">
              <div className="font-[family-name:var(--font-display)] text-3xl font-bold text-[#1f3a4d]">
                {big}
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-[#7a6f5c]">{small}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story / philosophy */}
      <section id="story" className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="mb-4 text-center text-sm uppercase tracking-[0.35em] text-[#9c5a3c]">
          Our Philosophy
        </p>
        <h2 className="text-center font-[family-name:var(--font-display)] text-4xl font-bold leading-tight text-[#1f3a4d] md:text-5xl">
          A ruin is only rubble until someone tells you its story.
        </h2>
        <div className="mt-10 columns-1 gap-10 text-lg leading-relaxed text-[#4a4236] md:columns-2">
          <p className="mb-5">
            <span className="float-left mr-3 mt-1 font-[family-name:var(--font-display)] text-6xl font-bold leading-[0.8] text-[#9c5a3c]">
              W
            </span>
            e began with a simple frustration: too many visitors leave Greece having seen
            everything and understood nothing. A guide rattles off measurements; the crowd
            photographs a column and moves on. The civilisation that gave us democracy, theatre,
            and the very idea of the West stays locked inside the marble.
          </p>
          <p className="mb-5">
            So we built tours around understanding. Every guide is a native or fluent English
            speaker, licensed by the Greek Ministry of Tourism after years of study — and a
            storyteller first. We read the buildings as the Athenians intended them, follow the
            argument of a temple's proportions, and let you feel the moment a whisper crosses an
            ancient theatre.
          </p>
          <p>
            The result is private and unhurried. No flags, no headsets, no rush to the next
            car park — just Greece, explained with the depth it deserves and the ease you came
            here to find.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-y border-[#d8cdb8] bg-[#efe7d6] py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-3 text-center text-sm uppercase tracking-[0.35em] text-[#9c5a3c]">
            Five thousand years
          </p>
          <h2 className="mb-12 text-center font-[family-name:var(--font-display)] text-4xl font-bold text-[#1f3a4d]">
            The ground you'll be standing on
          </h2>
          <ol className="relative space-y-10 border-l-2 border-[#9c5a3c]/40 pl-8 md:pl-10">
            {TIMELINE.map((t) => (
              <li key={t.era} className="relative">
                <span className="absolute -left-[2.55rem] top-1 h-3 w-3 rounded-full bg-[#9c5a3c] ring-4 ring-[#efe7d6] md:-left-[3.05rem]" />
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-5">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[#1f3a4d]">
                    {t.era}
                  </h3>
                  <span className="font-mono text-sm tracking-wide text-[#9c5a3c]">{t.years}</span>
                </div>
                <p className="mt-1 text-lg text-[#4a4236]">{t.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Featured journeys — editorial entries */}
      <section id="journeys" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="mb-3 text-center text-sm uppercase tracking-[0.35em] text-[#9c5a3c]">
          Selected Journeys
        </p>
        <h2 className="mb-16 text-center font-[family-name:var(--font-display)] text-4xl font-bold text-[#1f3a4d] md:text-5xl">
          Where we'll take you
        </h2>
        <div className="space-y-20">
          {featured.map((tour, i) => (
            <article
              key={tour.slug}
              className="grid items-center gap-8 md:grid-cols-2 md:gap-12"
            >
              {/* Framed photo plate, alternating sides */}
              <figure className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="border border-[#d8cdb8] bg-[#efe7d6] p-2.5 shadow-sm">
                  <Photo
                    src={tour.image}
                    grad={tour.grad}
                    label={tour.name}
                    className="aspect-[4/3] w-full"
                    overlayClassName="bg-[#3a2a16]/15"
                  />
                </div>
              </figure>

              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="font-[family-name:var(--font-display)] text-4xl font-bold text-[#9c5a3c]/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#9c5a3c]">
                    {tour.region} · {tour.duration}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[#1f3a4d]">
                  {tour.name}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-[#4a4236]">{tour.story}</p>
                <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 text-[#4a4236]">
                  {tour.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-base">
                      <span className="text-[#9c5a3c]">—</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-[#7a6f5c]">
                  Private, from{" "}
                  <span className="font-[family-name:var(--font-display)] text-lg font-bold text-[#1f3a4d]">
                    €{tour.priceFrom}
                  </span>{" "}
                  per person
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Pull quote over a photographic ground */}
      <Photo
        src={TOURS[4].image}
        grad={TOURS[4].grad}
        label="The Temple of Poseidon at Cape Sounion"
        className="py-24 text-center text-[#f6f1e7]"
        position="center 40%"
        overlayClassName="bg-[#16293c]/80"
      >
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <Meander className="mx-auto mb-8 w-32 text-[#c98a5e]" />
          <blockquote className="font-[family-name:var(--font-display)] text-3xl font-medium italic leading-snug md:text-4xl">
            “We are all Greeks. Our laws, our literature, our religion, our arts have their root
            in Greece.”
          </blockquote>
          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-[#c98a5e]">— Percy Bysshe Shelley</p>
        </div>
      </Photo>

      {/* Guides */}
      <section id="guides" className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#9c5a3c]">Our Guides</p>
        <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold text-[#1f3a4d] md:text-5xl">
          Scholars who happen to be wonderful company
        </h2>
        <p className="mt-7 text-lg leading-relaxed text-[#4a4236]">
          Every Anglofone guide holds a licence from the Greek Ministry of Tourism — a
          qualification that takes years of study in archaeology, history and art. They lead in
          fluent, natural English, and they have the rarer gift of making a long day feel short.
          You will leave with the stories, not just the photographs.
        </p>
      </section>

      {/* Testimonials */}
      <section className="border-t border-[#d8cdb8] bg-[#efe7d6] py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            {REVIEWS.slice(0, 2).map((r) => (
              <figure key={r.name} className="text-center md:text-left">
                <Meander className="mx-auto w-24 text-[#9c5a3c] md:mx-0" />
                <blockquote className="mt-5 font-[family-name:var(--font-display)] text-2xl italic leading-snug text-[#1f3a4d]">
                  “{r.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm uppercase tracking-[0.2em] text-[#7a6f5c]">
                  {r.name} · {r.origin}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / footer */}
      <footer id="contact" className="bg-[#1f3a4d] py-16 text-[#cdd8df]">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-[#f6f1e7]">
                Anglofone
              </span>
              <p className="mt-3 max-w-xs text-sm leading-relaxed">{BRAND.pitch}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#c98a5e]">Reach us</p>
              <p className="mt-3 text-sm">{BRAND.email}</p>
              <p className="text-sm">{BRAND.phone}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#c98a5e]">Begin a journey</p>
              <a
                href={`mailto:${BRAND.email}`}
                className="mt-3 inline-block rounded-sm border border-[#c98a5e] px-6 py-3 text-sm uppercase tracking-[0.18em] text-[#f6f1e7] transition-colors hover:bg-[#c98a5e] hover:text-[#1f3a4d]"
              >
                Plan with us
              </a>
            </div>
          </div>
          <Meander className="mt-12 w-full text-[#2c4d61]" />
          <p className="mt-6 text-center text-xs text-[#7d97a6]">
            © {2026} {BRAND.name}. Licensed guides · Ministry of Tourism.
          </p>
        </div>
      </footer>
    </main>
  )
}
