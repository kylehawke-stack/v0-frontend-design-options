"use client"

import { ArrowRight, BarChart3, Brain, Target, TrendingUp, Zap, Check, Sparkles } from "lucide-react"

export function DesignOptionB() {
  return (
    <div className="min-h-screen bg-[#fafaf9] text-[#1c1c1c]">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 md:px-10 py-5 max-w-6xl mx-auto">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#1c1c1c] flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-[#fafaf9]" />
          </div>
          <span className="font-semibold text-[#1c1c1c] tracking-tight">CorpDev Companion</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-[#6b6b6b]">
          <span className="hover:text-[#1c1c1c] cursor-pointer transition-colors">Product</span>
          <span className="hover:text-[#1c1c1c] cursor-pointer transition-colors">Use Cases</span>
          <span className="hover:text-[#1c1c1c] cursor-pointer transition-colors">Pricing</span>
        </div>
        <button className="px-5 py-2.5 text-sm bg-[#1c1c1c] text-[#fafaf9] rounded-full font-medium hover:bg-[#333] transition-colors">
          Get Started
        </button>
      </nav>

      {/* Hero */}
      <section className="px-6 md:px-10 pt-16 pb-20 md:pt-24 md:pb-28 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f0ece8] text-xs text-[#6b6b6b] font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
          Now analyzing Hamilton Beach Brands
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance leading-[1.1] text-[#1c1c1c]">
          M&A Target Prioritization,{" "}
          <span className="text-[#6b6b6b]">Powered by AI</span>
        </h1>
        <p className="mt-6 text-lg text-[#6b6b6b] max-w-xl mx-auto leading-relaxed text-pretty">
          Surface the most strategic acquisition targets by combining financial data, earnings calls, and market intelligence into a single prioritized workflow.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button className="flex items-center gap-2 px-8 py-3.5 bg-[#1c1c1c] text-[#fafaf9] rounded-full font-medium hover:bg-[#333] transition-colors">
            Start M&A Analysis <ArrowRight className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-8 py-3.5 text-[#1c1c1c] rounded-full font-medium hover:bg-[#f0ece8] transition-colors">
            Watch Demo
          </button>
        </div>
      </section>

      {/* Company Card */}
      <section className="px-6 md:px-10 max-w-4xl mx-auto pb-20">
        <div className="rounded-2xl border border-[#e5e2de] bg-[#ffffff] p-8 md:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
            <div>
              <p className="text-xs font-medium text-[#6b6b6b] uppercase tracking-wide mb-3">Current Company</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1c1c1c]">Hamilton Beach Brands</h2>
              <div className="flex items-center gap-2 mt-3">
                <span className="px-3 py-1 bg-[#f0ece8] text-[#1c1c1c] rounded-full text-xs font-medium">NYSE: HBB</span>
                <span className="px-3 py-1 bg-[#f0ece8] text-[#6b6b6b] rounded-full text-xs font-medium">Consumer Appliances</span>
              </div>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-[#1c1c1c] text-[#fafaf9] rounded-full text-sm font-medium hover:bg-[#333] transition-colors self-start">
              Start Analysis <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 md:px-10 py-20 bg-[#ffffff]">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-medium text-[#6b6b6b] uppercase tracking-wide mb-3">How it works</p>
          <h3 className="text-3xl md:text-4xl font-bold text-[#1c1c1c] tracking-tight mb-14">Five steps to your next acquisition target</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Ingest Financials", desc: "We process earnings calls, analyst reports, and financial statements automatically." },
              { icon: Target, title: "Vote on Priorities", desc: "Your team votes to establish strategic direction and M&A criteria." },
              { icon: BarChart3, title: "Generate Segments", desc: "AI identifies market segments and product categories to compare." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl bg-[#fafaf9] border border-[#e5e2de]">
                <div className="w-10 h-10 rounded-lg bg-[#f0ece8] flex items-center justify-center mb-5">
                  <item.icon className="w-5 h-5 text-[#1c1c1c]" />
                </div>
                <h4 className="font-semibold text-[#1c1c1c] mb-2">{item.title}</h4>
                <p className="text-sm text-[#6b6b6b] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {[
              { icon: TrendingUp, title: "Narrow Down Targets", desc: "Collaborative voting narrows the field to the most promising acquisition opportunities." },
              { icon: Brain, title: "AI-Powered Ranking", desc: "Our model produces a final ranked list of specific company targets for your pipeline." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl bg-[#fafaf9] border border-[#e5e2de]">
                <div className="w-10 h-10 rounded-lg bg-[#f0ece8] flex items-center justify-center mb-5">
                  <item.icon className="w-5 h-5 text-[#1c1c1c]" />
                </div>
                <h4 className="font-semibold text-[#1c1c1c] mb-2">{item.title}</h4>
                <p className="text-sm text-[#6b6b6b] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-10 py-20 max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "847", label: "Targets Analyzed" },
            { value: "92%", label: "Accuracy Rate" },
            { value: "3.2x", label: "Faster Than Manual" },
            { value: "$12B+", label: "Pipeline Value" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#1c1c1c]">{stat.value}</p>
              <p className="text-sm text-[#6b6b6b] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 md:px-10 py-20 bg-[#ffffff]">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-[#1c1c1c] p-10 md:p-14 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#fafaf9] text-balance">Ready to find your next acquisition?</h3>
            <p className="mt-3 text-[#a0a0a0] max-w-md mx-auto text-pretty">Join corporate development teams already using AI to prioritize their M&A pipeline.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              {["No setup required", "Free trial", "Cancel anytime"].map((benefit) => (
                <span key={benefit} className="flex items-center gap-1.5 text-sm text-[#a0a0a0]">
                  <Check className="w-3.5 h-3.5 text-[#22c55e]" /> {benefit}
                </span>
              ))}
            </div>
            <button className="mt-8 flex items-center gap-2 mx-auto px-8 py-3.5 bg-[#fafaf9] text-[#1c1c1c] rounded-full font-medium hover:bg-[#f0ece8] transition-colors">
              Get Started Free <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-10 py-8 max-w-4xl mx-auto text-center border-t border-[#e5e2de]">
        <p className="text-sm text-[#6b6b6b]">CorpDev Companion -- M&A Target Prioritization</p>
      </footer>
    </div>
  )
}
