"use client"

import { ArrowUpRight, BarChart3, Brain, Target, TrendingUp, Zap, ChevronRight } from "lucide-react"

export function DesignOptionC() {
  return (
    <div className="min-h-screen bg-[#0f1419] text-[#d4d4d8]">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 md:px-10 py-4 border-b border-[#1e2530] max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-0.5">
            <div className="w-1.5 h-6 bg-[#f97316] rounded-sm" />
            <div className="w-1.5 h-4 bg-[#f97316]/60 rounded-sm" />
            <div className="w-1.5 h-5 bg-[#f97316]/80 rounded-sm" />
          </div>
          <span className="font-semibold text-[#f0f0f0] tracking-tight text-lg">CorpDev</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-[#7a8594]">
          <span className="hover:text-[#f0f0f0] cursor-pointer transition-colors">Terminal</span>
          <span className="hover:text-[#f0f0f0] cursor-pointer transition-colors">Markets</span>
          <span className="hover:text-[#f0f0f0] cursor-pointer transition-colors">Research</span>
          <span className="hover:text-[#f0f0f0] cursor-pointer transition-colors">Help</span>
        </div>
        <button className="px-4 py-2 text-sm bg-[#f97316] text-[#0f1419] rounded font-semibold hover:bg-[#fb923c] transition-colors">
          Sign In
        </button>
      </nav>

      {/* Hero - Editorial style, left aligned */}
      <section className="px-6 md:px-10 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <p className="text-xs font-semibold text-[#f97316] uppercase tracking-[0.2em] mb-6">M&A Intelligence Platform</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-[#f0f0f0] text-balance">
              The strategic edge in target prioritization
            </h1>
            <p className="mt-6 text-lg text-[#7a8594] leading-relaxed max-w-lg text-pretty">
              Ingest financial data, earnings transcripts, and market intelligence. Let AI surface the acquisition targets that matter most.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <button className="flex items-center gap-2 px-7 py-3.5 bg-[#f97316] text-[#0f1419] rounded font-semibold hover:bg-[#fb923c] transition-colors">
                Launch Platform <ArrowUpRight className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 px-7 py-3.5 text-[#f0f0f0] font-medium hover:text-[#f97316] transition-colors">
                See How It Works <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Data card - Bloomberg inspired */}
          <div className="rounded border border-[#1e2530] bg-[#141b24]">
            <div className="flex items-center justify-between px-5 py-3 border-b border-[#1e2530]">
              <span className="text-xs font-semibold text-[#f97316] uppercase tracking-wide">Active Analysis</span>
              <span className="text-xs text-[#7a8594]">Live</span>
            </div>
            <div className="p-5">
              <div className="flex items-baseline gap-3 mb-1">
                <h2 className="text-xl font-bold text-[#f0f0f0]">Hamilton Beach Brands</h2>
              </div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs font-mono text-[#f97316]">NYSE: HBB</span>
                <span className="text-xs text-[#7a8594]">Consumer Durables</span>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-5">
                {[
                  { label: "Mkt Cap", value: "$1.2B" },
                  { label: "EV/EBITDA", value: "8.4x" },
                  { label: "Revenue", value: "$561M" },
                ].map((item) => (
                  <div key={item.label} className="p-3 rounded bg-[#0f1419] border border-[#1e2530]">
                    <p className="text-[10px] uppercase text-[#7a8594] tracking-wide mb-1">{item.label}</p>
                    <p className="text-sm font-bold text-[#f0f0f0] font-mono">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Mini pipeline progress */}
              <div className="flex items-center gap-1">
                {[true, true, false, false, false].map((active, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full ${active ? "bg-[#f97316]" : "bg-[#1e2530]"}`}
                  />
                ))}
              </div>
              <p className="text-[10px] text-[#7a8594] mt-2">Pipeline: Step 2 of 5 -- Strategic Voting</p>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="h-px bg-[#1e2530]" />
      </div>

      {/* Steps as editorial grid */}
      <section className="px-6 md:px-10 py-16 md:py-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold text-[#f97316] uppercase tracking-[0.2em] mb-3">Process</p>
            <h3 className="text-2xl md:text-3xl font-bold text-[#f0f0f0] tracking-tight">How the analysis pipeline works</h3>
          </div>
          <p className="text-sm text-[#7a8594] max-w-xs">Five systematic steps from raw data to a ranked list of acquisition targets.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1e2530] rounded overflow-hidden">
          {[
            { num: "01", icon: Zap, title: "Data Ingestion", desc: "Financials, earnings calls, and analyst data are processed and structured." },
            { num: "02", icon: Target, title: "Strategic Voting", desc: "Team votes on priorities to establish clear M&A direction and criteria." },
            { num: "03", icon: BarChart3, title: "Segment Generation", desc: "AI identifies and compares relevant market segments and product categories." },
            { num: "04", icon: TrendingUp, title: "Target Narrowing", desc: "Collaborative voting narrows to the most promising acquisition areas." },
            { num: "05", icon: Brain, title: "Final Ranking", desc: "Specific company targets are generated and ranked for your pipeline." },
            { num: "-->", icon: ArrowUpRight, title: "Execute", desc: "Move forward with data-backed confidence on your top-ranked targets." },
          ].map((item) => (
            <div key={item.num} className="bg-[#141b24] p-6 md:p-8 group hover:bg-[#1a2332] transition-colors">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[#f97316]">{item.num}</span>
                <item.icon className="w-5 h-5 text-[#7a8594] group-hover:text-[#f97316] transition-colors" />
              </div>
              <h4 className="font-bold text-[#f0f0f0] text-lg mb-2">{item.title}</h4>
              <p className="text-sm text-[#7a8594] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats banner */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="border border-[#1e2530] rounded bg-[#141b24] grid grid-cols-2 md:grid-cols-4 divide-x divide-[#1e2530]">
          {[
            { value: "847", label: "Targets Scanned" },
            { value: "23", label: "Active Sessions" },
            { value: "$12.4B", label: "Pipeline Value" },
            { value: "4.2s", label: "Avg. Analysis Time" },
          ].map((stat) => (
            <div key={stat.label} className="p-6 text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#f0f0f0] font-mono">{stat.value}</p>
              <p className="text-xs text-[#7a8594] mt-1 uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="px-6 md:px-10 py-20 md:py-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#f0f0f0] tracking-tight text-balance">
              Start prioritizing your{" "}
              <span className="text-[#f97316]">M&A pipeline</span> today
            </h3>
            <p className="mt-3 text-[#7a8594] max-w-lg">No configuration needed. Connect your data sources and let the AI do the heavy lifting.</p>
          </div>
          <button className="flex items-center gap-2 px-8 py-4 bg-[#f97316] text-[#0f1419] rounded font-semibold hover:bg-[#fb923c] transition-colors whitespace-nowrap self-start">
            Get Started <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1e2530] px-6 md:px-10 py-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              <div className="w-1 h-4 bg-[#f97316] rounded-sm" />
              <div className="w-1 h-2.5 bg-[#f97316]/60 rounded-sm" />
              <div className="w-1 h-3 bg-[#f97316]/80 rounded-sm" />
            </div>
            <span className="text-sm text-[#7a8594]">CorpDev Companion</span>
          </div>
          <p className="text-xs text-[#7a8594]">M&A Intelligence Platform -- Data-driven acquisition targeting</p>
        </div>
      </footer>
    </div>
  )
}
