"use client"

import { companies, metricsData } from "@/lib/benchmark-data"
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"

interface Props {
  metric: "evToEBITDA" | "evToSales" | "evToFreeCashFlow"
  title: string
}

function clampOutlier(val: number, min: number, max: number): number | null {
  if (Math.abs(val) > 100) return null
  return Math.max(min, Math.min(max, val))
}

export function ValuationChart({ metric, title }: Props) {
  // Build unified time series by aligning fiscal years across companies
  // Use the common labels across all companies
  const years = ["FY2021", "FY2022", "FY2023", "FY2024", "FY2025"]

  const data = years.map((fy) => {
    const point: Record<string, string | number | null> = { year: fy.replace("FY", "'") }
    companies.forEach((c) => {
      const match = metricsData[c.symbol].find((m) => m.fiscalYear === fy)
        // PLCE uses FY2020 instead of FY2021 for the earliest, handle mismatch
        ?? (fy === "FY2021" ? metricsData[c.symbol].find((m) => m.fiscalYear === "FY2020") : undefined)
      if (match) {
        point[c.symbol] = clampOutlier(match[metric], -50, 50)
      }
    })
    return point
  })

  return (
    <div className="rounded border border-[#1e2530] bg-[#141b24] overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#1e2530]">
        <span className="text-xs font-semibold text-[#f97316] uppercase tracking-wide">{title}</span>
        <span className="text-[10px] text-[#7a8594] font-mono">5Y TREND</span>
      </div>
      <div className="p-4 h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
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
              tickFormatter={(v) => `${v}x`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#141b24",
                border: "1px solid #1e2530",
                borderRadius: 6,
                fontSize: 12,
              }}
              labelStyle={{ color: "#f0f0f0", fontWeight: 600, marginBottom: 4 }}
              itemStyle={{ color: "#7a8594" }}
              formatter={(value: number | null) => (value != null ? [`${value.toFixed(1)}x`, ""] : ["N/M", ""])}
            />
            <Legend
              verticalAlign="top"
              height={28}
              iconType="circle"
              iconSize={8}
              formatter={(value: string) => {
                const c = companies.find((co) => co.symbol === value)
                return <span style={{ color: "#7a8594", fontSize: 11 }}>{c?.name ?? value}</span>
              }}
            />
            {companies.map((c) => (
              <Line
                key={c.symbol}
                type="monotone"
                dataKey={c.symbol}
                stroke={c.color}
                strokeWidth={2}
                dot={{ r: 3, fill: c.color, strokeWidth: 0 }}
                activeDot={{ r: 5, strokeWidth: 0 }}
                connectNulls
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
