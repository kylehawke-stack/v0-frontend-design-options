"use client"

import { useState } from "react"
import { DesignOptionA } from "./design-option-a"
import { DesignOptionB } from "./design-option-b"
import { DesignOptionC } from "./design-option-c"

const options = [
  {
    id: "a",
    label: "Dark Terminal",
    description: "Dark finance terminal with teal accents, monospace type, and a data-dense layout",
    colors: ["#0a0a0f", "#00d4aa", "#1a1a2e", "#8888a0"],
  },
  {
    id: "b",
    label: "Clean SaaS",
    description: "Warm, light, minimal SaaS aesthetic with rounded corners and soft neutrals",
    colors: ["#fafaf9", "#1c1c1c", "#f0ece8", "#22c55e"],
  },
  {
    id: "c",
    label: "Bloomberg Editorial",
    description: "Dark editorial layout with orange accents inspired by financial data terminals",
    colors: ["#0f1419", "#f97316", "#141b24", "#7a8594"],
  },
]

export function DesignSelector() {
  const [active, setActive] = useState("a")

  return (
    <div className="min-h-screen bg-[#111] text-[#e0e0e0]">
      {/* Sticky selector bar */}
      <div className="sticky top-0 z-50 bg-[#111]/90 backdrop-blur-md border-b border-[#222]">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-[#e0e0e0] tracking-tight">CorpDev Companion</span>
              <span className="text-xs text-[#666] hidden sm:inline">Design Options</span>
            </div>
            <div className="flex items-center gap-2">
              {options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setActive(option.id)}
                  className={`group flex items-center gap-2.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    active === option.id
                      ? "bg-[#222] text-[#fff]"
                      : "text-[#888] hover:text-[#ccc] hover:bg-[#1a1a1a]"
                  }`}
                >
                  <div className="flex items-center gap-1">
                    {option.colors.slice(0, 3).map((color, i) => (
                      <div
                        key={i}
                        className="w-2.5 h-2.5 rounded-full border border-[#333]"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <span className="hidden sm:inline">{option.label}</span>
                  <span className="sm:hidden">
                    {option.id.toUpperCase()}
                  </span>
                </button>
              ))}
            </div>
          </div>
          {/* Description line */}
          <p className="text-xs text-[#666] mt-1 pb-1 hidden md:block">
            {options.find((o) => o.id === active)?.description}
          </p>
        </div>
      </div>

      {/* Design preview */}
      <div>
        {active === "a" && <DesignOptionA />}
        {active === "b" && <DesignOptionB />}
        {active === "c" && <DesignOptionC />}
      </div>
    </div>
  )
}
