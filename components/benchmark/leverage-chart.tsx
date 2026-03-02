"use client"

import { companies, metricsData } from "@/lib/benchmark-data"
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts"

export function LeverageChart() {
  const years = ["FY2021", "FY2022", "FY2023", "FY2024", "FY2025"]

  const data = years.map((fy) => {
    const point: Record<string, string | number | null> = { year: fy.replace("FY", "'") }
    companies.forEach((c) => {
      const match = metricsData[c.symbol].find((m) => m.fiscalYear === fy)
        ?? (fy === "FY2021" ? metricsData[c.symbol].find((m) => m.fiscalYear === "FY2020") : undefined)
      if (match) {
        // Clamp extreme outliers
        const val = match.netDebtToEBITDA
        point[c.symbol] = Math.abs(val) > 25 ? null : parseFloat(val.toFixed(1))
      }
    })
    return point
  })

  return (
    <div className="rounded border border-[#1e2530] bg-[#141b24] overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#1e2530]">
        <span className="text-xs font-semibold text-[#f97316] uppercase tracking-wide">Net Debt / EBITDA</span>
        <span className="text-[10px] text-[#7a8594] font-mono">LEVERAGE TREND</span>
      </div>
      <div className="p-4 h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
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
              formatter={(value: number | null) =>
                value != null ? [`${value.toFixed(1)}x`, ""] : ["N/M", ""]
              }
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
            <ReferenceLine y={3} stroke="#f97316" strokeDasharray="6 3" strokeOpacity={0.5} label={{ value: "3.0x", fill: "#7a8594", fontSize: 10, position: "right" }} />
            {companies.map((c) => (
              <Area
                key={c.symbol}
                type="monotone"
                dataKey={c.symbol}
                stroke={c.color}
                fill={c.color}
                fillOpacity={0.08}
                strokeWidth={2}
                dot={{ r: 3, fill: c.color, strokeWidth: 0 }}
                connectNulls
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
