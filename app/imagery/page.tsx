import Link from "next/link"
import { BRAND, TOURS, REVIEWS, HEROES } from "@/lib/tours-data"
import { DesignSwitcher } from "@/components/design-switcher"
import { Photo } from "@/components/photo"
import { ArrowDown, MapPin } from "lucide-react"

export default function ImageryDesign() {
  const feature = TOURS.slice(0, 3)

  return (
    <main className="min-h-screen bg-[#0c0f12] font-sans text-white antialiased">
      <DesignSwitcher />

      {/* Hero */}
      <Photo
        src={HEROES.imagery.image}
        grad={HEROES.imagery.grad}
        label="The Aegean at dusk"
        className="flex h-screen min-h-[640px] flex-col"
        overlayClassName="bg-gradient-to-b from-black/50 via-black/10 to-black/80"
      >
        <nav className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-7">
          <Link href="/imagery" className="text-lg font-semibold tracking-wide">
            Anglofone<span className="font-light text-white/70"> · Greek Tours</span>
          </Link>
          <div className="hidden items-center gap-8 text-sm text-white/80 md:flex">
            <a href="#journeys" className="hover:text-white">Journeys</a>
            <a href="#gallery" className="hover:text-white">Gallery</a>
            <a
              href="#contact"
              className="rounded-full border border-white/40 px-5 py-2 backdrop-blur-sm transition-colors hover:bg-white hover:text-black"
            >
              Enquire
            </a>
          </div>
        </nav>

        <div className="relative z-10 mx-auto mt-auto w-full max-w-7xl px-6 pb-16">
          <p className="mb-5 text-sm uppercase tracking-[0.4em] text-white/70">
            Private tours of Greece
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-8xl">
            See it the way<br />it was meant to be seen.
          </h1>
          <div className="mt-10 flex items-center gap-3 text-white/70">
            <ArrowDown className="h-5 w-5 animate-bounce" />
            <span className="text-sm">{BRAND.guestsGuided} travellers · {BRAND.rating.toFixed(1)}★</span>
          </div>
        </div>
      </Photo>

      {/* Statement */}
      <section className="mx-auto max-w-5xl px-6 py-28 text-center md:py-40">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium leading-snug tracking-tight md:text-5xl">
          Greece is overwhelming on purpose. We frame it for you —
          <span className="text-white/45"> the light on the marble, the blue beyond the
          columns, the quiet between the crowds.</span>
        </h2>
      </section>

      {/* Immersive alternating blocks */}
      <section id="journeys" className="space-y-0">
        {feature.map((tour, i) => (
          <article
            key={tour.slug}
            className="relative grid min-h-[80vh] grid-cols-1 md:grid-cols-2"
          >
            <Photo
              src={tour.image}
              grad={tour.grad}
              label={tour.name}
              className={`min-h-[50vh] md:min-h-full ${i % 2 === 1 ? "md:order-2" : ""}`}
              overlayClassName="bg-black/10"
            />
            <div className="flex flex-col justify-center bg-[#0c0f12] px-6 py-16 md:px-16">
              <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-sky-400">
                <MapPin className="h-3.5 w-3.5" />
                {tour.region} · {tour.duration}
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight md:text-6xl">
                {tour.name}
              </h3>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">
                {tour.summary}
              </p>
              <div className="mt-8 flex items-center gap-6">
                <span className="text-sm text-white/50">
                  From <span className="text-2xl font-semibold text-white">€{tour.priceFrom}</span> pp
                </span>
                <a
                  href="#contact"
                  className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition-transform hover:scale-[1.03]"
                >
                  Reserve
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Horizontal gallery */}
      <section id="gallery" className="py-24">
        <div className="mx-auto mb-10 flex max-w-7xl items-end justify-between px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold md:text-5xl">
            Every destination
          </h2>
          <span className="hidden text-sm text-white/40 md:block">Scroll →</span>
        </div>
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {TOURS.map((tour) => (
            <Link
              key={tour.slug}
              href="#contact"
              className="group aspect-[3/4] w-[78vw] flex-none snap-center sm:w-[44vw] lg:w-[27vw]"
            >
              <Photo
                src={tour.image}
                grad={tour.grad}
                label={tour.name}
                className="h-full w-full rounded-xl transition-transform duration-700 group-hover:scale-[1.03]"
                overlayClassName="bg-gradient-to-t from-black/80 via-black/10 to-transparent"
              >
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-sky-300">{tour.region}</p>
                  <h3 className="mt-1 font-[family-name:var(--font-display)] text-2xl font-semibold">
                    {tour.name}
                  </h3>
                </div>
              </Photo>
            </Link>
          ))}
        </div>
      </section>

      {/* Full-bleed quote */}
      <Photo
        src={HEROES.imageryQuote.image}
        grad={HEROES.imageryQuote.grad}
        label="Santorini"
        className="flex min-h-[70vh] items-center justify-center"
        overlayClassName="bg-black/55"
      >
        <figure className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <blockquote className="font-[family-name:var(--font-display)] text-3xl font-medium leading-snug md:text-5xl">
            “{REVIEWS[0].quote}”
          </blockquote>
          <figcaption className="mt-8 text-sm uppercase tracking-[0.3em] text-white/70">
            {REVIEWS[0].name} — {REVIEWS[0].origin}
          </figcaption>
        </figure>
      </Photo>

      {/* Contact */}
      <footer id="contact" className="mx-auto max-w-7xl px-6 py-28 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-sky-400">Start the story</p>
        <h2 className="mx-auto mt-6 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight md:text-7xl">
          Let's design your Greece.
        </h2>
        <a
          href={`mailto:${BRAND.email}`}
          className="mt-10 inline-block rounded-full bg-white px-9 py-4 text-base font-medium text-black transition-transform hover:scale-[1.03]"
        >
          Enquire now
        </a>
        <p className="mt-8 text-sm text-white/50">
          {BRAND.email} · {BRAND.phone}
        </p>
        <p className="mt-16 text-xs text-white/30">
          © 2026 {BRAND.name}. Licensed, English-speaking guides.
        </p>
      </footer>
    </main>
  )
}
