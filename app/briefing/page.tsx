"use client"

import { companyProfile } from "@/lib/briefing-data"
import { Nav } from "@/components/benchmark/nav"
import { KpiStrip } from "@/components/briefing/kpi-strip"
import { RevenueMixCompact } from "@/components/briefing/revenue-mix"
import { InsightCards } from "@/components/briefing/insight-cards"
import { Building2, FileText, ArrowRight } from "lucide-react"

export default function IntelligenceBriefingPage() {
  return (
    <div className="min-h-screen bg-[#0f1419] text-[#d4d4d8]">
      <Nav />

      {/* Company Header */}
      <header className="px-6 md:px-10 pt-10 pb-6 max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-1 mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-[#1e2530] border border-[#2a3441] flex items-center justify-center">
              <Building2 className="w-5 h-5 text-[#f97316]" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#f0f0f0] tracking-tight text-balance">
                {companyProfile.name}
              </h1>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs font-mono font-semibold text-[#f97316]">
                  {companyProfile.exchange}: {companyProfile.ticker}
                </span>
                <span className="text-[10px] text-[#4a5568]">|</span>
                <span className="text-xs text-[#7a8594]">
                  {companyProfile.sector} &middot; {companyProfile.industry}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold text-[#f97316] uppercase tracking-[0.2em] mb-2">Intelligence Briefing</p>
            <p className="text-sm text-[#7a8594] max-w-2xl text-pretty">
              Key findings from {companyProfile.dataSources}
            </p>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-[#7a8594] font-mono uppercase tracking-wide">
            <FileText className="w-3 h-3" />
            <span>AI-Generated Summary</span>
          </div>
        </div>
      </header>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="h-px bg-[#1e2530]" />
      </div>

      {/* KPI Strip */}
      <section className="px-6 md:px-10 py-6 max-w-[1440px] mx-auto">
        <KpiStrip />
      </section>

      {/* Revenue Mix - compact, sits in half width alongside a summary */}
      <section className="px-6 md:px-10 py-4 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-5 bg-[#f97316] rounded-sm" />
          <h2 className="text-lg font-bold text-[#f0f0f0]">Revenue Composition</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-1">
            <RevenueMixCompact />
          </div>
          <div className="lg:col-span-2 bg-[#161c24] border border-[#1e2530] rounded-lg p-6 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-[#7a8594]">
                Segment Analysis
              </span>
              <p className="text-sm leading-relaxed text-[#8b95a5] mt-3">
                HBB is heavily concentrated in Consumer Products at <span className="font-semibold text-[#f97316]">89% of revenue</span>. 
                The Commercial segment represents a differentiated but small <span className="font-semibold text-[#6366f1]">10% channel</span> that 
                competitors like Flexsteel and Lovesac lack entirely. Licensing contributes minimally at 1%. This concentration 
                creates both vulnerability to consumer cyclical shifts and a clear M&A thesis around category diversification 
                into adjacent product lines or expanding the commercial channel.
              </p>
            </div>
            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-[#1e2530]">
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#7a8594]">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                HIGH CONCENTRATION RISK
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#7a8594]">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                COMMERCIAL CHANNEL UPSIDE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insight Cards - two column layout with pullquotes */}
      <section className="px-6 md:px-10 py-4 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-5 bg-[#f97316] rounded-sm" />
          <h2 className="text-lg font-bold text-[#f0f0f0]">Strategic Insights</h2>
        </div>
        <InsightCards />
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-8 max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center gap-4">
          <button className="flex items-center gap-2 px-8 py-3.5 bg-[#f97316] text-[#0f1419] rounded-lg font-semibold text-base hover:bg-[#fb923c] transition-colors">
            Begin Strategic Prioritization
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-xs text-[#7a8594] font-mono">
            25 strategic options ready for pairwise comparison across 6 dimensions
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1e2530] px-6 md:px-10 py-6 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              <div className="w-1 h-4 bg-[#f97316] rounded-sm" />
              <div className="w-1 h-2.5 bg-[#f97316]/60 rounded-sm" />
              <div className="w-1 h-3 bg-[#f97316]/80 rounded-sm" />
            </div>
            <span className="text-sm text-[#7a8594]">CorpDev Companion</span>
          </div>
          <p className="text-xs text-[#7a8594]">AI-generated intelligence briefing -- For informational purposes only</p>
        </div>
      </footer>
    </div>
  )
}
