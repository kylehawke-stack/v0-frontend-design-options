"use client"

import { kpiMetrics } from "@/lib/briefing-data"
import { TrendingDown, TrendingUp, DollarSign, Percent, Scale, Crosshair } from "lucide-react"

const kpis = [
  {
    key: "revenue" as const,
    label: "Revenue",
    icon: DollarSign,
    accent: kpiMetrics.revenue.change < 0 ? "#ef4444" : "#22c55e",
  },
  {
    key: "profitability" as const,
    label: "Profitability",
    icon: Percent,
    accent: "#f97316",
  },
  {
    key: "leverage" as const,
    label: "Leverage & Capacity",
    icon: Scale,
    accent: "#22c55e",
  },
  {
    key: "acquisitionFirepower" as const,
    label: "Acquisition Firepower",
    icon: Crosshair,
    accent: "#f59e0b",
  },
]

export function KpiStrip() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {kpis.map((kpi) => {
        const data = kpiMetrics[kpi.key]
        const Icon = kpi.icon
        const isRevenue = kpi.key === "revenue"

        return (
          <div
            key={kpi.key}
            className="relative bg-[#161c24] border border-[#1e2530] rounded-lg p-5 flex flex-col gap-3 overflow-hidden group hover:border-[#2a3441] transition-colors"
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ backgroundColor: kpi.accent }}
            />

            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-[#7a8594]">
                {kpi.label}
              </span>
              <Icon className="w-4 h-4 text-[#4a5568]" />
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[#f0f0f0] tracking-tight font-mono">
                {data.value}
              </span>
              {isRevenue && "change" in data && (
                <span className="flex items-center gap-0.5 text-xs font-semibold text-[#ef4444]">
                  <TrendingDown className="w-3 h-3" />
                  {data.change}%
                </span>
              )}
              {!isRevenue && "subtitle" in data && (
                <span className="text-xs text-[#7a8594]">
                  {data.subtitle}
                </span>
              )}
            </div>

            <p className="text-xs leading-relaxed text-[#8b95a5]">
              {data.commentary}
            </p>
          </div>
        )
      })}
    </div>
  )
}
