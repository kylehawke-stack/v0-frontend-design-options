// Intelligence Briefing data for HBB - Hamilton Beach Brands Holding Company
// This mirrors the data from the screenshots on corpdevcompanion.netlify.app

export const companyProfile = {
  name: "Hamilton Beach Brands Holding Company",
  ticker: "HBB",
  exchange: "NYSE",
  sector: "Consumer Cyclical",
  industry: "Furnishings, Fixtures & Appliances",
  dataSources: "2 years of financial statements, 4 quarterly earnings calls, analyst consensus, and competitive landscape analysis",
}

export const kpiMetrics = {
  revenue: {
    value: "$607M",
    change: -7.3,
    label: "YoY decline",
    commentary: "Revenue contraction of (7.3%) underscores urgency for portfolio diversification or category expansion through M&A.",
  },
  profitability: {
    value: "4.2%",
    subtitle: "operating margin",
    commentary: "Negative operating margins constrain deal capacity. Focus on margin-accretive tuck-ins or operational efficiency plays that improve the cost structure.",
  },
  leverage: {
    value: "0.23x",
    subtitle: "$-5M net debt",
    commentary: "Very low leverage provides significant borrowing capacity for debt-financed acquisitions. The balance sheet is conservatively managed with room to lever up.",
  },
  acquisitionFirepower: {
    value: "$47M",
    subtitle: "$47M cash + $0 est. capacity",
    commentary: "Limited but workable dry powder best suited for targeted tuck-in acquisitions. Larger deals would require significant leverage or equity.",
  },
}

export const revenueMix = [
  { segment: "Consumer Product", revenue: 532, share: 89, color: "#f97316" },
  { segment: "Commercial Product", revenue: 60, share: 10, color: "#6366f1" },
  { segment: "Licensing", revenue: 9, share: 1, color: "#22c55e" },
]

export type InsightCard = {
  category: string
  headline: string
  badge: string
  badgeType: "positive" | "warning" | "neutral" | "negative"
  body: string
  quote?: {
    text: string
    speaker: string
    role: string
  }
}

export const insightCards: InsightCard[] = [
  {
    category: "EARNINGS CALL INSIGHTS",
    headline: "Tariff Mitigation + Supply Chain Pivot",
    badge: "Accelerating Asia-Pacific diversification strategy",
    badgeType: "positive",
    body: "Management is aggressively diversifying manufacturing away from China to minimize tariff exposure, with foreign trade zone operations and strategic inventory prebuilds already implemented.",
    quote: {
      text: "We meaningfully accelerated our manufacturing diversification efforts away from China to other Asia Pacific countries.",
      speaker: "Scott Tidey",
      role: "CEO",
    },
  },
  {
    category: "ANALYST PERSPECTIVES",
    headline: "Cautious on Near-Term Visibility",
    badge: "Single analyst coverage with margin concerns",
    badgeType: "warning",
    body: "Limited analyst coverage reflects the company's small-cap status, but the sole analyst is probing key operational questions around tariff impacts and retailer relationships.",
    quote: {
      text: "Can you expand a little bit on a more normalized rate from your largest retailer?",
      speaker: "Adam Bradley",
      role: "Analyst",
    },
  },
  {
    category: "COMPETITIVE POSITIONING",
    headline: "Appliance Leader, Limited Smart Tech",
    badge: "Strong in traditional categories vs tech-forward peers",
    badgeType: "neutral",
    body: "HBB dominates traditional small appliances but lags tech-enabled competitors like iRobot ($190M) in smart home categories. While peers like Lifetime Brands focus on kitchenware breadth, HBB's appliance expertise and manufacturing diversification create acquisition opportunities in adjacent categories. The company's commercial segment (10% of revenue) offers a differentiated channel that furniture-focused competitors like Flexsteel and Lovesac lack entirely.",
  },
  {
    category: "ACQUISITIVENESS",
    headline: "Organic-Focused",
    badge: "No acquisitions in 2 years",
    badgeType: "negative",
    body: "No material acquisition activity detected in cash flow statements. Pivoting to an M&A growth strategy would represent a significant strategic shift.",
  },
]
