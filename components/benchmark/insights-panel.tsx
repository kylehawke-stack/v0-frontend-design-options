"use client"

import { AlertTriangle, CheckCircle, Info, TrendingUp } from "lucide-react"

interface Insight {
  type: "positive" | "warning" | "neutral" | "highlight"
  symbol: string
  text: string
}

const insights: Insight[] = [
  {
    type: "highlight",
    symbol: "HELE",
    text: "Lowest EV/EBITDA at 8.2x with $465M working capital -- strongest current valuation among peers.",
  },
  {
    type: "warning",
    symbol: "PLCE",
    text: "Current ratio below 1.0x and negative working capital signal significant liquidity pressure.",
  },
  {
    type: "positive",
    symbol: "LOVE",
    text: "Income quality score of 3.37 suggests strong earnings-to-cash conversion, highest in peer group.",
  },
  {
    type: "neutral",
    symbol: "HELE",
    text: "Intangibles represent 55.9% of total assets -- brand value is critical to thesis but adds impairment risk.",
  },
  {
    type: "warning",
    symbol: "PLCE",
    text: "Net Debt/EBITDA of 22.4x is extreme -- capital structure is highly leveraged relative to operating profit.",
  },
  {
    type: "positive",
    symbol: "HELE",
    text: "Earnings yield of 9.8% vs. peer average of ~0% makes HELE the clear value candidate on this metric.",
  },
  {
    type: "neutral",
    symbol: "LOVE",
    text: "Cash conversion cycle expanded from 92 to 103 days YoY -- monitor inventory build and receivables.",
  },
  {
    type: "highlight",
    symbol: "ALL",
    text: "All three companies trade below 1.2x EV/Sales -- sector-wide multiple compression may present opportunity.",
  },
]

const iconMap = {
  positive: CheckCircle,
  warning: AlertTriangle,
  neutral: Info,
  highlight: TrendingUp,
}

const colorMap = {
  positive: { icon: "text-[#10b981]", bg: "bg-[#10b981]/5", border: "border-[#10b981]/20" },
  warning: { icon: "text-[#ef4444]", bg: "bg-[#ef4444]/5", border: "border-[#ef4444]/20" },
  neutral: { icon: "text-[#7a8594]", bg: "bg-[#7a8594]/5", border: "border-[#7a8594]/20" },
  highlight: { icon: "text-[#f97316]", bg: "bg-[#f97316]/5", border: "border-[#f97316]/20" },
}

export function InsightsPanel() {
  return (
    <div className="rounded border border-[#1e2530] bg-[#141b24] overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#1e2530]">
        <span className="text-xs font-semibold text-[#f97316] uppercase tracking-wide">AI Benchmark Insights</span>
        <span className="text-[10px] text-[#7a8594] font-mono">{insights.length} SIGNALS</span>
      </div>
      <div className="p-4 flex flex-col gap-2.5 max-h-[520px] overflow-y-auto">
        {insights.map((insight, i) => {
          const Icon = iconMap[insight.type]
          const colors = colorMap[insight.type]
          return (
            <div
              key={i}
              className={`flex items-start gap-3 p-3.5 rounded border ${colors.bg} ${colors.border}`}
            >
              <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${colors.icon}`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono font-bold text-[#f0f0f0] uppercase">{insight.symbol}</span>
                  <span className={`text-[10px] font-mono uppercase ${colors.icon}`}>
                    {insight.type}
                  </span>
                </div>
                <p className="text-xs text-[#7a8594] leading-relaxed">{insight.text}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
