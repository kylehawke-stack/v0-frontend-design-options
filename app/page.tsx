import Link from "next/link"
import { Nav } from "@/components/benchmark/nav"
import { ArrowRight, BarChart3, FileText } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f1419] text-[#d4d4d8]">
      <Nav />
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20">
        <p className="text-xs font-semibold text-[#f97316] uppercase tracking-[0.2em] mb-4">
          CorpDev Companion
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#f0f0f0] mb-4 text-balance">
          M&A Intelligence Platform
        </h1>
        <p className="text-base text-[#7a8594] max-w-xl mb-12 text-pretty">
          AI-powered target prioritization for corporate development teams. Explore the design prototypes below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          <Link href="/briefing" className="group bg-[#161c24] border border-[#1e2530] rounded-lg p-6 hover:border-[#f97316]/40 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-[#f97316]/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#f97316]" />
              </div>
              <h2 className="text-lg font-bold text-[#f0f0f0]">Intelligence Briefing</h2>
            </div>
            <p className="text-sm text-[#7a8594] mb-4">
              HBB company profile with KPI strip, revenue mix, pullquotes, and strategic insight cards.
            </p>
            <span className="flex items-center gap-1.5 text-sm font-semibold text-[#f97316] group-hover:gap-2.5 transition-all">
              View Page <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          <Link href="/benchmark" className="group bg-[#161c24] border border-[#1e2530] rounded-lg p-6 hover:border-[#f97316]/40 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-[#f97316]/10 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-[#f97316]" />
              </div>
              <h2 className="text-lg font-bold text-[#f0f0f0]">Competitor Benchmarking</h2>
            </div>
            <p className="text-sm text-[#7a8594] mb-4">
              LOVE vs PLCE vs HELE cross-company financial comparison with charts and data tables.
            </p>
            <span className="flex items-center gap-1.5 text-sm font-semibold text-[#f97316] group-hover:gap-2.5 transition-all">
              View Page <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
