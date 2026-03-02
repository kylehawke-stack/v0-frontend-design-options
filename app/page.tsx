"use client"

import { Nav } from "@/components/benchmark/nav"
import { CompanyHeaderCards } from "@/components/benchmark/company-header-cards"
import { ValuationChart } from "@/components/benchmark/valuation-chart"
import { ReturnsChart } from "@/components/benchmark/returns-chart"
import { EfficiencyRadar } from "@/components/benchmark/efficiency-radar"
import { MetricsTable } from "@/components/benchmark/metrics-table"
import { LeverageChart } from "@/components/benchmark/leverage-chart"
import { WorkingCapitalChart } from "@/components/benchmark/working-capital-chart"
import { InsightsPanel } from "@/components/benchmark/insights-panel"
import { Database, Clock, BarChart3 } from "lucide-react"

export default function BenchmarkPage() {
  return (
    <div className="min-h-screen bg-[#0f1419] text-[#d4d4d8]">
      <Nav />

      {/* Page Header */}
      <header className="px-6 md:px-10 py-8 md:py-12 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold text-[#f97316] uppercase tracking-[0.2em] mb-3">Competitor Benchmarking</p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#f0f0f0] text-balance">
              LOVE vs PLCE vs HELE
            </h1>
            <p className="mt-2 text-sm text-[#7a8594] max-w-xl text-pretty">
              Cross-company financial comparison using FMP Key Metrics data. Analyzing valuation, returns, balance sheet health, and operational efficiency across five fiscal years.
            </p>
          </div>
          <div className="flex items-center gap-4 text-[10px] text-[#7a8594] font-mono uppercase tracking-wide">
            <div className="flex items-center gap-1.5">
              <Database className="w-3 h-3" />
              <span>FMP API</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              <span>FY2020-FY2025</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BarChart3 className="w-3 h-3" />
              <span>Key Metrics</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="h-px bg-[#1e2530]" />
      </div>

      {/* Company Overview Cards */}
      <section className="px-6 md:px-10 pt-8 pb-4 max-w-[1440px] mx-auto">
        <CompanyHeaderCards />
      </section>

      {/* Valuation Charts Row */}
      <section className="px-6 md:px-10 py-4 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-5 bg-[#f97316] rounded-sm" />
          <h2 className="text-lg font-bold text-[#f0f0f0]">Valuation Multiples</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ValuationChart metric="evToEBITDA" title="EV / EBITDA" />
          <ValuationChart metric="evToSales" title="EV / Sales" />
        </div>
      </section>

      {/* Returns Charts Row */}
      <section className="px-6 md:px-10 py-4 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-5 bg-[#f97316] rounded-sm" />
          <h2 className="text-lg font-bold text-[#f0f0f0]">Return Metrics</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ReturnsChart metric="returnOnAssets" title="Return on Assets" />
          <ReturnsChart metric="returnOnCapitalEmployed" title="Return on Capital Employed" />
        </div>
      </section>

      {/* Radar + Insights Row */}
      <section className="px-6 md:px-10 py-4 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-5 bg-[#f97316] rounded-sm" />
          <h2 className="text-lg font-bold text-[#f0f0f0]">Operational Analysis</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <EfficiencyRadar />
          <InsightsPanel />
        </div>
      </section>

      {/* Leverage + Working Capital Row */}
      <section className="px-6 md:px-10 py-4 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-5 bg-[#f97316] rounded-sm" />
          <h2 className="text-lg font-bold text-[#f0f0f0]">Balance Sheet Trends</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <LeverageChart />
          <WorkingCapitalChart />
        </div>
      </section>

      {/* Full Metrics Table */}
      <section className="px-6 md:px-10 py-4 pb-8 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-5 bg-[#f97316] rounded-sm" />
          <h2 className="text-lg font-bold text-[#f0f0f0]">Full Metrics Comparison</h2>
        </div>
        <MetricsTable />
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
          <p className="text-xs text-[#7a8594]">Data sourced from Financial Modeling Prep (FMP) Key Metrics API -- For informational purposes only</p>
        </div>
      </footer>
    </div>
  )
}
