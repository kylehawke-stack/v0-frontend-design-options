"use client"

import { companies, getLatestMetrics } from "@/lib/benchmark-data"
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  Tooltip,
} from "recharts"

// Normalize each metric to a 0-100 scale for visual comparison
function normalize(val: number, min: number, max: number): number {
  const clamped = Math.max(min, Math.min(max, val))
  return ((clamped - min) / (max - min)) * 100
}

export function EfficiencyRadar() {
  const metrics = companies.map((c) => getLatestMetrics(c.symbol))

  const dimensions = [
    {
      label: "Liquidity",
      key: "currentRatio" as const,
      min: 0,
      max: 3,
    },
    {
      label: "Capital Eff.",
      key: "returnOnCapitalEmployed" as const,
      min: -0.2,
      max: 0.2,
    },
    {
      label: "FCF Yield",
      key: "freeCashFlowYield" as const,
      min: -0.2,
      max: 0.2,
    },
    {
      label: "Inv. Turns",
      key: "daysOfInventoryOutstanding" as const,
      min: 200,
      max: 50,
      invert: true,
    },
    {
      label: "CCC Eff.",
      key: "cashConversionCycle" as const,
      min: 200,
      max: 30,
      invert: true,
    },
    {
      label: "Earnings Q.",
      key: "incomeQuality" as const,
      min: -1,
      max: 4,
    },
  ]

  const data = dimensions.map((dim) => {
    const point: Record<string, string | number> = { dimension: dim.label }
    companies.forEach((c, i) => {
      const val = metrics[i][dim.key]
      point[c.symbol] = Math.round(normalize(val, dim.min, dim.max))
    })
    return point
  })

  return (
    <div className="rounded border border-[#1e2530] bg-[#141b24] overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#1e2530]">
        <span className="text-xs font-semibold text-[#f97316] uppercase tracking-wide">Operational Efficiency</span>
        <span className="text-[10px] text-[#7a8594] font-mono">NORMALIZED SCORE</span>
      </div>
      <div className="p-4 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="72%" data={data}>
            <PolarGrid stroke="#1e2530" />
            <PolarAngleAxis
              dataKey="dimension"
              tick={{ fill: "#7a8594", fontSize: 10 }}
            />
            <PolarRadiusAxis
              angle={30}
              domain={[0, 100]}
              tick={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#141b24",
                border: "1px solid #1e2530",
                borderRadius: 6,
                fontSize: 12,
              }}
              labelStyle={{ color: "#f0f0f0", fontWeight: 600 }}
            />
            {companies.map((c) => (
              <Radar
                key={c.symbol}
                name={c.name}
                dataKey={c.symbol}
                stroke={c.color}
                fill={c.color}
                fillOpacity={0.12}
                strokeWidth={2}
              />
            ))}
            <Legend
              verticalAlign="bottom"
              height={28}
              iconType="circle"
              iconSize={8}
              formatter={(value: string) => (
                <span style={{ color: "#7a8594", fontSize: 11 }}>{value}</span>
              )}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
