"use client"

import { revenueMix } from "@/lib/briefing-data"

export function RevenueMixCompact() {
  const total = revenueMix.reduce((sum, s) => sum + s.revenue, 0)

  return (
    <div className="bg-[#161c24] border border-[#1e2530] rounded-lg p-5 flex flex-col gap-4">
      <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-[#7a8594]">
        Revenue Mix by Segment
      </span>

      {/* Stacked horizontal bar */}
      <div className="flex h-3 rounded-full overflow-hidden">
        {revenueMix.map((seg) => (
          <div
            key={seg.segment}
            style={{
              width: `${seg.share}%`,
              backgroundColor: seg.color,
            }}
            className="first:rounded-l-full last:rounded-r-full"
          />
        ))}
      </div>

      {/* Legend rows */}
      <div className="flex flex-col gap-2">
        {revenueMix.map((seg) => (
          <div key={seg.segment} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="w-2.5 h-2.5 rounded-sm"
                style={{ backgroundColor: seg.color }}
              />
              <span className="text-sm text-[#c0c8d4]">{seg.segment}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-mono text-[#c0c8d4]">
                ${seg.revenue}M
              </span>
              <span className="text-sm font-mono font-semibold" style={{ color: seg.color }}>
                {seg.share}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
