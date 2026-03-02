"use client"

import { companies, getLatestMetrics, formatMcap, formatMultiple, formatPct } from "@/lib/benchmark-data"
import { TrendingDown, TrendingUp, Minus } from "lucide-react"

export function CompanyHeaderCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1e2530] rounded overflow-hidden">
      {companies.map((company) => {
        const m = getLatestMetrics(company.symbol)
        const roaPositive = m.returnOnAssets > 0
        return (
          <div key={company.symbol} className="bg-[#141b24] p-5 md:p-6 group hover:bg-[#1a2332] transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: company.color }} />
                <span className="font-bold text-[#f0f0f0] text-lg">{company.symbol}</span>
              </div>
              <span className="text-xs font-mono text-[#7a8594]">{m.fiscalYear}</span>
            </div>
            <p className="text-sm text-[#7a8594] mb-4">{company.name}</p>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-2.5 rounded bg-[#0f1419] border border-[#1e2530]">
                <p className="text-[10px] uppercase text-[#7a8594] tracking-wide mb-0.5">Mkt Cap</p>
                <p className="text-sm font-bold text-[#f0f0f0] font-mono">{formatMcap(m.marketCap)}</p>
              </div>
              <div className="p-2.5 rounded bg-[#0f1419] border border-[#1e2530]">
                <p className="text-[10px] uppercase text-[#7a8594] tracking-wide mb-0.5">EV/EBITDA</p>
                <p className="text-sm font-bold text-[#f0f0f0] font-mono">{formatMultiple(m.evToEBITDA)}</p>
              </div>
              <div className="p-2.5 rounded bg-[#0f1419] border border-[#1e2530]">
                <p className="text-[10px] uppercase text-[#7a8594] tracking-wide mb-0.5">ROA</p>
                <div className="flex items-center gap-1">
                  <p className={`text-sm font-bold font-mono ${roaPositive ? "text-[#10b981]" : "text-[#ef4444]"}`}>
                    {formatPct(m.returnOnAssets)}
                  </p>
                  {roaPositive ? (
                    <TrendingUp className="w-3 h-3 text-[#10b981]" />
                  ) : (
                    <TrendingDown className="w-3 h-3 text-[#ef4444]" />
                  )}
                </div>
              </div>
              <div className="p-2.5 rounded bg-[#0f1419] border border-[#1e2530]">
                <p className="text-[10px] uppercase text-[#7a8594] tracking-wide mb-0.5">Current</p>
                <div className="flex items-center gap-1">
                  <p className={`text-sm font-bold font-mono ${m.currentRatio >= 1.0 ? "text-[#f0f0f0]" : "text-[#ef4444]"}`}>
                    {m.currentRatio.toFixed(2)}x
                  </p>
                  {m.currentRatio < 1.0 && <Minus className="w-3 h-3 text-[#ef4444]" />}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
