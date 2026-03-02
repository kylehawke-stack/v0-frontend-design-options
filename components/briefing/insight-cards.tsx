"use client"

import { insightCards, type InsightCard } from "@/lib/briefing-data"
import { Quote, TrendingUp, AlertTriangle, Minus, TrendingDown } from "lucide-react"

const badgeConfig = {
  positive: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20", icon: TrendingUp },
  warning: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20", icon: AlertTriangle },
  neutral: { bg: "bg-slate-500/10", text: "text-slate-400", border: "border-slate-500/20", icon: Minus },
  negative: { bg: "bg-red-500/10", text: "text-red-400", border: "border-red-500/20", icon: TrendingDown },
}

function InsightCardComponent({ card }: { card: InsightCard }) {
  const badge = badgeConfig[card.badgeType]
  const BadgeIcon = badge.icon

  return (
    <div className="bg-[#161c24] border border-[#1e2530] rounded-lg p-6 flex flex-col gap-4 hover:border-[#2a3441] transition-colors group">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-[#7a8594]">
            {card.category}
          </span>
          <span className={`flex items-center gap-1.5 text-[10px] font-mono shrink-0 px-2 py-1 rounded-full border ${badge.bg} ${badge.text} ${badge.border}`}>
            <BadgeIcon className="w-3 h-3" />
            {card.badge}
          </span>
        </div>
        <h3 className="text-lg font-bold text-[#f0f0f0] tracking-tight text-balance">
          {card.headline}
        </h3>
      </div>

      {/* Body */}
      <p className="text-sm leading-relaxed text-[#8b95a5]">
        {card.body}
      </p>

      {/* Pullquote */}
      {card.quote && (
        <div className="relative mt-2 pl-5 border-l-2 border-[#f97316] py-3 bg-[#f97316]/[0.03] rounded-r-md -mx-1 px-5">
          <Quote className="absolute top-3 right-4 w-8 h-8 text-[#f97316]/10" />
          <p className="text-[15px] italic leading-relaxed text-[#d4d4d8] font-serif">
            {'"'}{card.quote.text}{'"'}
          </p>
          <div className="flex items-center gap-2 mt-3">
            <div className="w-6 h-6 rounded-full bg-[#f97316]/20 flex items-center justify-center text-[10px] font-bold text-[#f97316]">
              {card.quote.speaker.split(" ").map(n => n[0]).join("")}
            </div>
            <span className="text-xs font-semibold text-[#c0c8d4]">
              {card.quote.speaker}
            </span>
            <span className="text-xs text-[#7a8594]">
              {card.quote.role}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export function InsightCards() {
  // Split into two columns: first two cards left, last two right
  const leftCards = insightCards.filter(c => c.quote)
  const rightCards = insightCards.filter(c => !c.quote)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="flex flex-col gap-4">
        {leftCards.map((card) => (
          <InsightCardComponent key={card.category} card={card} />
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {rightCards.map((card) => (
          <InsightCardComponent key={card.category} card={card} />
        ))}
      </div>
    </div>
  )
}
