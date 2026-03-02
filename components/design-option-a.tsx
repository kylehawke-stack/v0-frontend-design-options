"use client"

import { ArrowRight, BarChart3, Brain, Target, TrendingUp, Zap, ChevronRight, Activity } from "lucide-react"

export function DesignOptionA() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#e8e8ed]">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-[#1a1a2e]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#00d4aa] rounded flex items-center justify-center">
            <Activity className="w-4 h-4 text-[#0a0a0f]" />
          </div>
          <span className="font-mono text-sm tracking-wider text-[#e8e8ed]">CORPDEV COMPANION</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-[#8888a0]">
          <span className="hover:text-[#00d4aa] cursor-pointer transition-colors">Platform</span>
          <span className="hover:text-[#00d4aa] cursor-pointer transition-colors">Research</span>
          <span className="hover:text-[#00d4aa] cursor-pointer transition-colors">Pricing</span>
        </div>
        <button className="px-4 py-2 text-sm bg-[#00d4aa] text-[#0a0a0f] rounded font-medium hover:bg-[#00e8bb] transition-colors">
          Launch Terminal
        </button>
      </nav>

      {/* Hero */}
      <section className="px-6 py-20 md:py-32 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1a1a2e] text-xs text-[#00d4aa] font-mono mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00d4aa] animate-pulse" />
          LIVE ANALYSIS ENGINE
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
          <span className="text-[#e8e8ed]">M&A Intelligence</span>
          <br />
          <span className="text-[#00d4aa]">at Terminal Speed</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-[#8888a0] max-w-2xl mx-auto leading-relaxed text-pretty">
          AI-powered target prioritization that ingests financials, earnings calls, and analyst data to surface your next strategic acquisition.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="flex items-center gap-2 px-8 py-3.5 bg-[#00d4aa] text-[#0a0a0f] rounded font-medium hover:bg-[#00e8bb] transition-colors text-base">
            Start Analysis <ArrowRight className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-8 py-3.5 border border-[#2a2a3e] text-[#e8e8ed] rounded font-medium hover:border-[#00d4aa] hover:text-[#00d4aa] transition-colors text-base">
            View Demo
          </button>
        </div>
      </section>

      {/* Live ticker bar */}
      <div className="border-y border-[#1a1a2e] bg-[#0d0d15] overflow-hidden">
        <div className="flex items-center gap-8 px-6 py-3 text-xs font-mono text-[#8888a0] animate-marquee whitespace-nowrap">
          <span>HBB <span className="text-[#00d4aa]">+2.4%</span></span>
          <span className="text-[#2a2a3e]">|</span>
          <span>Targets Analyzed: <span className="text-[#e8e8ed]">847</span></span>
          <span className="text-[#2a2a3e]">|</span>
          <span>Pipeline Value: <span className="text-[#00d4aa]">$12.4B</span></span>
          <span className="text-[#2a2a3e]">|</span>
          <span>Active Sessions: <span className="text-[#e8e8ed]">23</span></span>
          <span className="text-[#2a2a3e]">|</span>
          <span>Model Version: <span className="text-[#e8e8ed]">v4.2.1</span></span>
        </div>
      </div>

      {/* Company card */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <div className="rounded-lg border border-[#1a1a2e] bg-[#0d0d15] p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-mono text-[#8888a0] mb-2">ACTIVE ANALYSIS</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#e8e8ed]">Hamilton Beach Brands</h2>
              <div className="flex items-center gap-3 mt-3">
                <span className="px-2 py-0.5 bg-[#00d4aa]/10 text-[#00d4aa] rounded text-xs font-mono">NYSE: HBB</span>
                <span className="px-2 py-0.5 bg-[#1a1a2e] text-[#8888a0] rounded text-xs font-mono">Consumer Durables</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-xs text-[#8888a0] font-mono">MARKET CAP</p>
                <p className="text-xl font-bold text-[#e8e8ed] font-mono">$1.2B</p>
              </div>
              <div className="w-px h-10 bg-[#1a1a2e]" />
              <div className="text-right">
                <p className="text-xs text-[#8888a0] font-mono">EV/EBITDA</p>
                <p className="text-xl font-bold text-[#00d4aa] font-mono">8.4x</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h3 className="text-xs font-mono text-[#8888a0] tracking-widest mb-10">ANALYSIS PIPELINE</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: "01", title: "Ingest Data", desc: "Financials, earnings calls, analyst reports", icon: Zap },
            { step: "02", title: "Strategic Vote", desc: "Establish M&A direction and priorities", icon: Target },
            { step: "03", title: "Segment Analysis", desc: "Generate market segments and categories", icon: BarChart3 },
            { step: "04", title: "Narrow Targets", desc: "Vote to narrow most promising areas", icon: TrendingUp },
            { step: "05", title: "Final Ranking", desc: "AI generates specific company targets", icon: Brain },
          ].map((item) => (
            <div
              key={item.step}
              className="group p-5 rounded-lg border border-[#1a1a2e] bg-[#0d0d15] hover:border-[#00d4aa]/40 transition-all cursor-default"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#00d4aa] font-mono text-xs">{item.step}</span>
                <item.icon className="w-4 h-4 text-[#8888a0] group-hover:text-[#00d4aa] transition-colors" />
              </div>
              <h4 className="font-semibold text-sm text-[#e8e8ed] mb-1">{item.title}</h4>
              <p className="text-xs text-[#8888a0] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 max-w-5xl mx-auto text-center">
        <div className="rounded-lg border border-[#1a1a2e] bg-[#0d0d15] p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#e8e8ed] text-balance">Ready to accelerate your M&A pipeline?</h3>
          <p className="mt-3 text-[#8888a0] max-w-md mx-auto">Start your first analysis in under 60 seconds. No setup required.</p>
          <button className="mt-8 flex items-center gap-2 mx-auto px-8 py-3.5 bg-[#00d4aa] text-[#0a0a0f] rounded font-medium hover:bg-[#00e8bb] transition-colors">
            Begin Analysis <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1a1a2e] px-6 py-6 text-center">
        <p className="text-xs font-mono text-[#8888a0]">CorpDev Companion -- M&A Intelligence Platform</p>
      </footer>
    </div>
  )
}
