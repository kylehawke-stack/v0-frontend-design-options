"use client"

import { ArrowUpRight } from "lucide-react"

export function Nav() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-10 py-4 border-b border-[#1e2530] max-w-[1440px] mx-auto">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-0.5">
          <div className="w-1.5 h-6 bg-[#f97316] rounded-sm" />
          <div className="w-1.5 h-4 bg-[#f97316]/60 rounded-sm" />
          <div className="w-1.5 h-5 bg-[#f97316]/80 rounded-sm" />
        </div>
        <span className="font-semibold text-[#f0f0f0] tracking-tight text-lg">CorpDev</span>
        <span className="text-xs text-[#7a8594] hidden md:inline ml-2 font-mono">COMPANION</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm text-[#7a8594]">
        <span className="hover:text-[#f0f0f0] cursor-pointer transition-colors">Overview</span>
        <span className="text-[#f97316] font-medium cursor-pointer">Benchmarking</span>
        <span className="hover:text-[#f0f0f0] cursor-pointer transition-colors">Pipeline</span>
        <span className="hover:text-[#f0f0f0] cursor-pointer transition-colors">Reports</span>
      </div>
      <button className="flex items-center gap-1.5 px-4 py-2 text-sm bg-[#f97316] text-[#0f1419] rounded font-semibold hover:bg-[#fb923c] transition-colors">
        Export <ArrowUpRight className="w-3.5 h-3.5" />
      </button>
    </nav>
  )
}
