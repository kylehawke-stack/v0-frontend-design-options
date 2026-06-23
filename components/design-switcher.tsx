"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const TABS = [
  { href: "/history", label: "History" },
  { href: "/imagery", label: "Imagery" },
  { href: "/conversion", label: "Conversion" },
]

/**
 * A small, neutral floating control for comparing the three design options.
 * It deliberately sits outside each design's visual language so it never reads
 * as part of the page itself — remove it before shipping any single design.
 */
export function DesignSwitcher() {
  const pathname = usePathname()
  return (
    <div className="fixed bottom-4 left-1/2 z-[60] -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-full border border-white/15 bg-stone-900/85 p-1 text-sm shadow-2xl backdrop-blur-md">
        <Link
          href="/"
          className="rounded-full px-3 py-1.5 text-xs font-medium text-stone-300 transition-colors hover:text-white"
        >
          ← All
        </Link>
        {TABS.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
              pathname === t.href
                ? "bg-white text-stone-900"
                : "text-stone-300 hover:text-white",
            )}
          >
            {t.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
