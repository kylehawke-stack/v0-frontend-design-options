"use client"

import Link from "next/link"
import { BRAND, TOURS, REVIEWS, FAQ } from "@/lib/tours-data"
import { DesignSwitcher } from "@/components/design-switcher"
import { Photo } from "@/components/photo"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Star,
  Phone,
  ShieldCheck,
  CalendarCheck,
  BadgeCheck,
  Clock,
  Check,
  Globe,
  ArrowRight,
} from "lucide-react"

function Stars({ n = 5, className = "" }: { n?: number; className?: string }) {
  return (
    <span className={`inline-flex ${className}`} aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < n ? "fill-amber-400 text-amber-400" : "text-stone-300"}`}
        />
      ))}
    </span>
  )
}

const BENEFITS = [
  { Icon: CalendarCheck, title: "Free cancellation", desc: "Cancel up to 24h before for a full refund." },
  { Icon: BadgeCheck, title: "Licensed guides", desc: "Certified by the Greek Ministry of Tourism." },
  { Icon: Globe, title: "English-speaking", desc: "Fluent, native-level guides on every tour." },
  { Icon: ShieldCheck, title: "No hidden fees", desc: "The price you see is the price you pay." },
]

export default function ConversionDesign() {
  const popular = TOURS.slice(0, 3)

  return (
    <main className="min-h-screen bg-white font-sans text-stone-900 antialiased">
      <DesignSwitcher />

      {/* Sticky nav */}
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Link href="/conversion" className="text-lg font-bold tracking-tight text-teal-800">
            Anglofone<span className="font-normal text-stone-400"> Greek Tours</span>
          </Link>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
              className="hidden items-center gap-2 text-sm font-medium text-stone-600 hover:text-teal-700 sm:flex"
            >
              <Phone className="h-4 w-4" /> {BRAND.phone}
            </a>
            <a
              href="#tours"
              className="rounded-lg bg-teal-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-800"
            >
              Book a tour
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-50 to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-sm font-medium text-amber-900">
              <Stars n={5} />
              <span>{BRAND.rating.toFixed(1)} · {BRAND.reviewCount} reviews</span>
            </div>
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl">
              Private tours of Greece,{" "}
              <span className="text-teal-700">guided in perfect English.</span>
            </h1>
            <p className="mt-5 max-w-md text-lg text-stone-600">
              Skip the lines, skip the language barrier. Licensed local guides, instant
              confirmation, and free cancellation up to 24 hours before.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#tours"
                className="inline-flex items-center gap-2 rounded-xl bg-teal-700 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-700/20 transition-all hover:-translate-y-0.5 hover:bg-teal-800"
              >
                See tours & prices <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#reviews"
                className="rounded-xl border border-stone-300 px-6 py-3.5 text-base font-semibold text-stone-700 hover:border-stone-400"
              >
                Read reviews
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone-500">
              <span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-teal-600" /> Free cancellation</span>
              <span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-teal-600" /> Instant confirmation</span>
              <span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-teal-600" /> Licensed guides</span>
            </div>
          </div>

          {/* Quick-quote card */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xl shadow-stone-200/60">
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
              Check availability
            </p>
            <div className="mt-4 space-y-4">
              <label className="block">
                <span className="text-sm font-medium text-stone-600">Choose a tour</span>
                <select className="mt-1.5 w-full rounded-lg border border-stone-300 bg-white px-3 py-2.5 text-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20">
                  {TOURS.map((t) => (
                    <option key={t.slug}>{t.name} — from €{t.priceFrom}</option>
                  ))}
                </select>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className="block">
                  <span className="text-sm font-medium text-stone-600">Date</span>
                  <input
                    type="date"
                    className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2.5 text-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-stone-600">Travellers</span>
                  <select className="mt-1.5 w-full rounded-lg border border-stone-300 bg-white px-3 py-2.5 text-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20">
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n}>{n} {n === 1 ? "person" : "people"}</option>
                    ))}
                  </select>
                </label>
              </div>
              <button className="w-full rounded-lg bg-amber-500 px-4 py-3 text-base font-bold text-stone-900 shadow-sm transition-colors hover:bg-amber-400">
                Check availability
              </button>
              <p className="text-center text-xs text-stone-400">
                No payment required to check · Replies within a few hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-stone-200 bg-stone-50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 py-6 md:grid-cols-4">
          {BENEFITS.map(({ Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3 px-2 py-2">
              <Icon className="mt-0.5 h-6 w-6 flex-none text-teal-600" />
              <div>
                <p className="text-sm font-semibold">{title}</p>
                <p className="text-xs text-stone-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tours / pricing cards */}
      <section id="tours" className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Most-booked tours
          </h2>
          <p className="mt-3 text-stone-600">
            Transparent pricing, no surprises. Reserve now, pay later.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {popular.map((tour, i) => {
            const featured = i === 1
            return (
              <div
                key={tour.slug}
                className={`relative flex flex-col rounded-2xl border bg-white transition-all hover:-translate-y-1 hover:shadow-xl ${
                  featured ? "border-teal-600 shadow-lg ring-1 ring-teal-600" : "border-stone-200"
                }`}
              >
                {featured && (
                  <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-teal-700 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow">
                    Most popular
                  </span>
                )}
                <Photo
                  src={tour.image}
                  grad={tour.grad}
                  label={tour.name}
                  className="h-44 w-full rounded-t-2xl"
                  overlayClassName="bg-gradient-to-t from-black/30 to-transparent"
                >
                  <span className="absolute bottom-3 left-3 rounded-md bg-white/90 px-2 py-1 text-sm font-bold text-stone-900 shadow-sm">
                    from €{tour.priceFrom} pp
                  </span>
                </Photo>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wide text-stone-500">
                    <span>{tour.region}</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {tour.duration}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold">{tour.name}</h3>
                  <div className="mt-1 flex items-center gap-2">
                    <Stars n={5} />
                    <span className="text-xs text-stone-500">{BRAND.rating.toFixed(1)}</span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">{tour.summary}</p>
                  <ul className="mt-4 space-y-1.5">
                    {tour.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-stone-700">
                        <Check className="mt-0.5 h-4 w-4 flex-none text-teal-600" /> {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 border-t border-stone-100 pt-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm text-stone-500">from</span>
                      <span className="text-3xl font-extrabold">€{tour.priceFrom}</span>
                      <span className="text-sm text-stone-500">/ person</span>
                    </div>
                    <a
                      href={`mailto:${BRAND.email}?subject=Booking enquiry: ${encodeURIComponent(tour.name)}`}
                      className={`mt-4 block rounded-lg px-4 py-3 text-center text-base font-bold transition-colors ${
                        featured
                          ? "bg-teal-700 text-white hover:bg-teal-800"
                          : "bg-stone-900 text-white hover:bg-stone-800"
                      }`}
                    >
                      Book this tour
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* More destinations — compact image tiles */}
        <div className="mt-12">
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wide text-stone-500">
            More day trips & cruises
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {TOURS.slice(3).map((tour) => (
              <a
                key={tour.slug}
                href={`mailto:${BRAND.email}?subject=Booking enquiry: ${encodeURIComponent(tour.name)}`}
                className="group"
              >
                <Photo
                  src={tour.image}
                  grad={tour.grad}
                  label={tour.name}
                  className="aspect-square w-full rounded-xl transition-transform group-hover:scale-[1.03]"
                  overlayClassName="bg-gradient-to-t from-black/75 via-black/10 to-transparent"
                >
                  <div className="absolute inset-x-0 bottom-0 p-3">
                    <p className="text-sm font-bold leading-tight text-white">{tour.name}</p>
                    <p className="text-xs text-white/80">from €{tour.priceFrom}</p>
                  </div>
                </Photo>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <a href={`mailto:${BRAND.email}`} className="font-semibold text-teal-700 underline underline-offset-4 hover:text-teal-900">
            View all {TOURS.length} tours & custom itineraries →
          </a>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-stone-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3">
              <Stars n={5} className="scale-110" />
              <span className="text-2xl font-extrabold">{BRAND.rating.toFixed(1)} / 5</span>
            </div>
            <p className="mt-2 text-stone-600">
              Based on <strong>{BRAND.reviewCount}</strong> verified reviews · Travellers' Choice
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {REVIEWS.map((r) => (
              <figure
                key={r.name}
                className="flex flex-col rounded-xl border border-stone-200 bg-white p-5 shadow-sm"
              >
                <Stars n={r.rating} />
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-stone-700">
                  “{r.quote}”
                </blockquote>
                <figcaption className="mt-4 border-t border-stone-100 pt-3 text-sm">
                  <span className="font-semibold">{r.name}</span>
                  <span className="block text-xs text-stone-500">{r.origin} · {r.tour}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <h2 className="text-center text-3xl font-extrabold tracking-tight">
          Questions, answered
        </h2>
        <Accordion type="single" collapsible className="mt-8 w-full">
          {FAQ.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-stone-600">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Final CTA */}
      <section className="bg-teal-800">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center text-white md:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Greece books up fast in season.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-teal-100">
            Lock in your dates now — reserve with no upfront payment and free cancellation up to
            24 hours before your tour.
          </p>
          <a
            href={`mailto:${BRAND.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-8 py-4 text-lg font-bold text-stone-900 shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-amber-400"
          >
            Reserve your tour <ArrowRight className="h-5 w-5" />
          </a>
          <p className="mt-5 text-sm text-teal-200">
            Or call {BRAND.phone} · Replies within a few hours
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-stone-500 md:flex-row">
          <span className="font-bold text-teal-800">Anglofone Greek Tours</span>
          <span>{BRAND.email} · {BRAND.phone}</span>
          <span>© 2026 · Licensed by the Greek Ministry of Tourism</span>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-stone-200 bg-white p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.06)] md:hidden">
        <a
          href="#tours"
          className="block rounded-lg bg-teal-700 px-4 py-3 text-center text-base font-bold text-white"
        >
          Book a tour — from €{Math.min(...TOURS.map((t) => t.priceFrom))}
        </a>
      </div>
    </main>
  )
}
