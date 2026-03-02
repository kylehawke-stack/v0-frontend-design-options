"use client"

import { companies, getLatestMetrics, formatMcap, formatMultiple, formatPct } from "@/lib/benchmark-data"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

interface MetricRow {
  label: string
  category: string
  values: (string | number)[]
  highlights?: ("best" | "worst" | "neutral")[]
}

function getCellColor(highlight?: "best" | "worst" | "neutral") {
  if (highlight === "best") return "text-[#10b981]"
  if (highlight === "worst") return "text-[#ef4444]"
  return "text-[#f0f0f0]"
}

function getHighlights(values: number[], higherIsBetter: boolean): ("best" | "worst" | "neutral")[] {
  const validValues = values.filter((v) => !isNaN(v) && isFinite(v))
  if (validValues.length < 2) return values.map(() => "neutral")
  const best = higherIsBetter ? Math.max(...validValues) : Math.min(...validValues)
  const worst = higherIsBetter ? Math.min(...validValues) : Math.max(...validValues)
  return values.map((v) => {
    if (v === best) return "best"
    if (v === worst) return "worst"
    return "neutral"
  })
}

export function MetricsTable() {
  const latest = companies.map((c) => getLatestMetrics(c.symbol))

  const categories: { name: string; rows: MetricRow[] }[] = [
    {
      name: "Valuation",
      rows: [
        {
          label: "Market Cap",
          category: "Valuation",
          values: latest.map((m) => formatMcap(m.marketCap)),
        },
        {
          label: "EV/EBITDA",
          category: "Valuation",
          values: latest.map((m) => formatMultiple(m.evToEBITDA)),
          highlights: getHighlights(latest.map((m) => m.evToEBITDA), false),
        },
        {
          label: "EV/Sales",
          category: "Valuation",
          values: latest.map((m) => `${m.evToSales.toFixed(2)}x`),
          highlights: getHighlights(latest.map((m) => m.evToSales), false),
        },
        {
          label: "Earnings Yield",
          category: "Valuation",
          values: latest.map((m) => formatPct(m.earningsYield)),
          highlights: getHighlights(latest.map((m) => m.earningsYield), true),
        },
        {
          label: "FCF Yield",
          category: "Valuation",
          values: latest.map((m) => formatPct(m.freeCashFlowYield)),
          highlights: getHighlights(latest.map((m) => m.freeCashFlowYield), true),
        },
      ],
    },
    {
      name: "Returns",
      rows: [
        {
          label: "ROA",
          category: "Returns",
          values: latest.map((m) => formatPct(m.returnOnAssets)),
          highlights: getHighlights(latest.map((m) => m.returnOnAssets), true),
        },
        {
          label: "ROE",
          category: "Returns",
          values: latest.map((m) => Math.abs(m.returnOnEquity) > 2 ? "N/M" : formatPct(m.returnOnEquity)),
          highlights: getHighlights(
            latest.map((m) => (Math.abs(m.returnOnEquity) > 2 ? -999 : m.returnOnEquity)),
            true
          ),
        },
        {
          label: "ROIC",
          category: "Returns",
          values: latest.map((m) => formatPct(m.returnOnInvestedCapital)),
          highlights: getHighlights(latest.map((m) => m.returnOnInvestedCapital), true),
        },
        {
          label: "ROCE",
          category: "Returns",
          values: latest.map((m) => formatPct(m.returnOnCapitalEmployed)),
          highlights: getHighlights(latest.map((m) => m.returnOnCapitalEmployed), true),
        },
      ],
    },
    {
      name: "Balance Sheet",
      rows: [
        {
          label: "Current Ratio",
          category: "Balance Sheet",
          values: latest.map((m) => `${m.currentRatio.toFixed(2)}x`),
          highlights: getHighlights(latest.map((m) => m.currentRatio), true),
        },
        {
          label: "Net Debt/EBITDA",
          category: "Balance Sheet",
          values: latest.map((m) => formatMultiple(m.netDebtToEBITDA)),
          highlights: getHighlights(latest.map((m) => m.netDebtToEBITDA), false),
        },
        {
          label: "Working Capital",
          category: "Balance Sheet",
          values: latest.map((m) => formatMcap(m.workingCapital)),
          highlights: getHighlights(latest.map((m) => m.workingCapital), true),
        },
        {
          label: "Intangibles/Assets",
          category: "Balance Sheet",
          values: latest.map((m) => formatPct(m.intangiblesToTotalAssets)),
        },
      ],
    },
    {
      name: "Efficiency",
      rows: [
        {
          label: "DIO (Days)",
          category: "Efficiency",
          values: latest.map((m) => `${m.daysOfInventoryOutstanding.toFixed(0)}d`),
          highlights: getHighlights(latest.map((m) => m.daysOfInventoryOutstanding), false),
        },
        {
          label: "CCC (Days)",
          category: "Efficiency",
          values: latest.map((m) => `${m.cashConversionCycle.toFixed(0)}d`),
          highlights: getHighlights(latest.map((m) => m.cashConversionCycle), false),
        },
        {
          label: "Capex/Revenue",
          category: "Efficiency",
          values: latest.map((m) => formatPct(m.capexToRevenue)),
        },
        {
          label: "Income Quality",
          category: "Efficiency",
          values: latest.map((m) => m.incomeQuality.toFixed(2)),
          highlights: getHighlights(latest.map((m) => m.incomeQuality), true),
        },
      ],
    },
  ]

  return (
    <div className="rounded border border-[#1e2530] bg-[#141b24] overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#1e2530]">
        <span className="text-xs font-semibold text-[#f97316] uppercase tracking-wide">Key Metrics Comparison</span>
        <span className="text-[10px] text-[#7a8594] font-mono">LATEST FY</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#1e2530]">
              <th className="text-left text-xs text-[#7a8594] font-medium uppercase tracking-wide px-5 py-3 w-44">
                Metric
              </th>
              {companies.map((c) => (
                <th key={c.symbol} className="text-right text-xs font-medium uppercase tracking-wide px-5 py-3">
                  <div className="flex items-center justify-end gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: c.color }} />
                    <span className="text-[#f0f0f0]">{c.symbol}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <>
                <tr key={cat.name} className="bg-[#0f1419]/60">
                  <td colSpan={4} className="px-5 py-2 text-[10px] font-semibold text-[#f97316] uppercase tracking-[0.15em]">
                    {cat.name}
                  </td>
                </tr>
                {cat.rows.map((row, ri) => (
                  <tr key={row.label} className="border-b border-[#1e2530]/50 hover:bg-[#1a2332]/40 transition-colors">
                    <td className="px-5 py-2.5 text-[#7a8594] text-xs">{row.label}</td>
                    {row.values.map((val, ci) => (
                      <td key={ci} className={`px-5 py-2.5 text-right font-mono text-xs ${getCellColor(row.highlights?.[ci])}`}>
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
