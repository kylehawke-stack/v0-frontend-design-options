import Link from "next/link"
import { BRAND, HEROES, TOURS } from "@/lib/tours-data"
import { Photo } from "@/components/photo"
import { ScrollText, Camera, Rocket, ArrowRight } from "lucide-react"

const OPTIONS = [
  {
    href: "/history",
    n: "01",
    title: "History",
    label: "Editorial / Heritage",
    Icon: ScrollText,
    desc: "An editorial, museum-grade layout. Serif typography, parchment tones and a meander motif put 2,500 years of storytelling and guide expertise first.",
    accent: "from-amber-700 to-stone-800",
    chip: "bg-amber-50 text-amber-900 border-amber-200",
    image: HEROES.history.image,
    grad: HEROES.history.grad,
  },
  {
    href: "/imagery",
    n: "02",
    title: "Imagery",
    label: "Immersive / Cinematic",
    Icon: Camera,
    desc: "Full-bleed photography drives everything. Minimal type over cinematic Aegean visuals, a horizontal gallery and big, breathing whitespace.",
    accent: "from-sky-600 to-blue-900",
    chip: "bg-sky-50 text-sky-900 border-sky-200",
    image: HEROES.imagery.image,
    grad: HEROES.imagery.grad,
  },
  {
    href: "/conversion",
    n: "03",
    title: "Conversion",
    label: "Booking-optimised",
    Icon: Rocket,
    desc: "Built to book. Sticky CTA, transparent pricing, trust badges, reviews, urgency and an FAQ — every section engineered to move a visitor to checkout.",
    accent: "from-teal-600 to-emerald-900",
    chip: "bg-teal-50 text-teal-900 border-teal-200",
    image: TOURS[7].image,
    grad: TOURS[7].grad,
  },
]

export default function DesignOptionsHome() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <header className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-500">
            Frontend Design Options
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            {BRAND.name}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            Three distinct directions for the same brand — pick a feeling, not just a layout.
            Each is a complete, responsive landing page built from the same content so you can
            compare them like-for-like.
          </p>
          <p className="mt-3 text-sm text-stone-500">
            {BRAND.tagline}.
          </p>
        </header>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {OPTIONS.map(({ href, n, title, label, Icon, desc, accent, chip, image, grad }) => (
            <Link
              key={href}
              href={href}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all hover:-translate-y-1 hover:border-stone-300 hover:shadow-xl"
            >
              <Photo
                src={image}
                grad={grad}
                label={`${title} design preview`}
                className="h-40 w-full"
                overlayClassName="bg-gradient-to-t from-black/30 to-transparent"
              >
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${accent}`} aria-hidden />
                <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm">
                  <Icon className="h-5 w-5 text-stone-700" />
                </span>
                <span className="absolute bottom-3 left-3 font-mono text-sm text-white/90">{n}</span>
              </Photo>
              <div className="flex flex-1 flex-col p-7">
                <span
                  className={`inline-flex w-fit rounded-full border px-3 py-1 text-xs font-medium ${chip}`}
                >
                  {label}
                </span>
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold">
                  {title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">{desc}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-stone-900">
                  View design
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <footer className="mt-16 border-t border-stone-200 pt-6 text-sm text-stone-500">
          <p>
            Content is realistic placeholder copy for an English-speaking Greek tour operator —
            edit it in <code className="rounded bg-stone-100 px-1.5 py-0.5 font-mono text-xs">lib/tours-data.ts</code>.
            The original benchmarking dashboard now lives at{" "}
            <Link href="/benchmark" className="underline underline-offset-2 hover:text-stone-800">
              /benchmark
            </Link>
            .
          </p>
        </footer>
      </div>
    </main>
  )
}
