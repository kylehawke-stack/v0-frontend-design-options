"use client"

import { companies, metricsData, formatPct } from "@/lib/benchmark-data"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts"

interface Props {
  metric: "returnOnAssets" | "returnOnEquity" | "returnOnInvestedCapital" | "returnOnCapitalEmployed"
  title: string
}

export function ReturnsChart({ metric, title }: Props) {
  const years = ["FY2021", "FY2022", "FY2023", "FY2024", "FY2025"]

  const data = years.map((fy) => {
    const point: Record<string, string | number | null> = { year: fy.replace("FY", "'") }
    companies.forEach((c) => {
      const match = metricsData[c.symbol].find((m) => m.fiscalYear === fy)
        ?? (fy === "FY2021" ? metricsData[c.symbol].find((m) => m.fiscalYear === "FY2020") : undefined)
      if (match) {
        const val = match[metric]
        // Clamp extreme outliers for PLCE ROE
        point[c.symbol] = Math.abs(val) > 2 ? null : parseFloat((val * 100).toFixed(1))
      }
    })
    return point
  })

  return (
    <div className="rounded border border-[#1e2530] bg-[#141b24] overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#1e2530]">
        <span className="text-xs font-semibold text-[#f97316] uppercase tracking-wide">{title}</span>
        <span className="text-[10px] text-[#7a8594] font-mono">% ANNUAL</span>
      </div>
      <div className="p-4 h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 12, left: 0, bottom: 0 }} barGap={2}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e2530" />
            <XAxis
              dataKey="year"
              tick={{ fill: "#7a8594", fontSize: 11 }}
              axisLine={{ stroke: "#1e2530" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#7a8594", fontSize: 11 }}
              axisLine={{ stroke: "#1e2530" }}
              tickLine={false}
              tickFormatter={(v) => `${v}%`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#141b24",
                border: "1px solid #1e2530",
                borderRadius: 6,
                fontSize: 12,
              }}
              labelStyle={{ color: "#f0f0f0", fontWeight: 600, marginBottom: 4 }}
              formatter={(value: number | null) =>
                value != null ? [`${value.toFixed(1)}%`, ""] : ["N/M", ""]
              }
            />
            <Legend
              verticalAlign="top"
              height={28}
              iconType="rect"
              iconSize={8}
              formatter={(value: string) => {
                const c = companies.find((co) => co.symbol === value)
                return <span style={{ color: "#7a8594", fontSize: 11 }}>{c?.name ?? value}</span>
              }}
            />
            <ReferenceLine y={0} stroke="#1e2530" strokeWidth={2} />
            {companies.map((c) => (
              <Bar
                key={c.symbol}
                dataKey={c.symbol}
                fill={c.color}
                radius={[2, 2, 0, 0]}
                opacity={0.85}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
