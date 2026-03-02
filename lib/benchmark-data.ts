// Real FMP Key Metrics data for competitor benchmarking
// Sources: financialmodelingprep.com/stable/key-metrics

export interface CompanyProfile {
  symbol: string
  name: string
  sector: string
  color: string
}

export interface YearMetrics {
  fiscalYear: string
  marketCap: number
  enterpriseValue: number
  evToSales: number
  evToEBITDA: number
  evToFreeCashFlow: number
  currentRatio: number
  returnOnAssets: number
  returnOnEquity: number
  returnOnInvestedCapital: number
  returnOnCapitalEmployed: number
  earningsYield: number
  freeCashFlowYield: number
  capexToRevenue: number
  netDebtToEBITDA: number
  daysOfInventoryOutstanding: number
  cashConversionCycle: number
  intangiblesToTotalAssets: number
  operatingCycle: number
  incomeQuality: number
  workingCapital: number
}

export const companies: CompanyProfile[] = [
  { symbol: "LOVE", name: "Lovesac", sector: "Consumer Discretionary", color: "#f97316" },
  { symbol: "PLCE", name: "Children's Place", sector: "Specialty Retail", color: "#3b82f6" },
  { symbol: "HELE", name: "Helen of Troy", sector: "Consumer Products", color: "#10b981" },
]

// LOVE - The Lovesac Company
const loveMetrics: YearMetrics[] = [
  {
    fiscalYear: "FY2025",
    marketCap: 396_243_108,
    enterpriseValue: 495_532_108,
    evToSales: 0.728,
    evToEBITDA: 17.47,
    evToFreeCashFlow: 28.38,
    currentRatio: 1.59,
    returnOnAssets: 0.0217,
    returnOnEquity: 0.0534,
    returnOnInvestedCapital: 0.024,
    returnOnCapitalEmployed: 0.0362,
    earningsYield: 0.0292,
    freeCashFlowYield: 0.0441,
    capexToRevenue: 0.0316,
    netDebtToEBITDA: 3.50,
    daysOfInventoryOutstanding: 160.5,
    cashConversionCycle: 102.6,
    intangiblesToTotalAssets: 0.003,
    operatingCycle: 169.5,
    incomeQuality: 3.37,
    workingCapital: 91_487_000,
  },
  {
    fiscalYear: "FY2024",
    marketCap: 357_311_901,
    enterpriseValue: 445_779_901,
    evToSales: 0.637,
    evToEBITDA: 10.44,
    evToFreeCashFlow: 9.44,
    currentRatio: 2.02,
    returnOnAssets: 0.0495,
    returnOnEquity: 0.1097,
    returnOnInvestedCapital: 0.0573,
    returnOnCapitalEmployed: 0.080,
    earningsYield: 0.0668,
    freeCashFlowYield: 0.1322,
    capexToRevenue: 0.0417,
    netDebtToEBITDA: 2.07,
    daysOfInventoryOutstanding: 120.1,
    cashConversionCycle: 91.9,
    intangiblesToTotalAssets: 0.003,
    operatingCycle: 127.1,
    incomeQuality: 3.20,
    workingCapital: 108_092_000,
  },
  {
    fiscalYear: "FY2023",
    marketCap: 391_215_928,
    enterpriseValue: 494_248_928,
    evToSales: 0.759,
    evToEBITDA: 10.34,
    evToFreeCashFlow: -10.53,
    currentRatio: 2.29,
    returnOnAssets: 0.0648,
    returnOnEquity: 0.1372,
    returnOnInvestedCapital: 0.0782,
    returnOnCapitalEmployed: 0.1132,
    earningsYield: 0.0677,
    freeCashFlowYield: -0.1199,
    capexToRevenue: 0.0392,
    netDebtToEBITDA: 2.16,
    daysOfInventoryOutstanding: 142.0,
    cashConversionCycle: 117.9,
    intangiblesToTotalAssets: 0.004,
    operatingCycle: 147.1,
    incomeQuality: -0.81,
    workingCapital: 105_674_000,
  },
  {
    fiscalYear: "FY2022",
    marketCap: 813_563_538,
    enterpriseValue: 829_682_538,
    evToSales: 1.665,
    evToEBITDA: 17.13,
    evToFreeCashFlow: 47.33,
    currentRatio: 1.93,
    returnOnAssets: 0.1287,
    returnOnEquity: 0.3009,
    returnOnInvestedCapital: 0.1524,
    returnOnCapitalEmployed: 0.1595,
    earningsYield: 0.0584,
    freeCashFlowYield: 0.0215,
    capexToRevenue: 0.0303,
    netDebtToEBITDA: 0.33,
    daysOfInventoryOutstanding: 176.2,
    cashConversionCycle: 128.7,
    intangiblesToTotalAssets: 0.004,
    operatingCycle: 182.7,
    incomeQuality: 0.69,
    workingCapital: 107_035_000,
  },
  {
    fiscalYear: "FY2021",
    marketCap: 833_097_381,
    enterpriseValue: 754_756_381,
    evToSales: 2.353,
    evToEBITDA: 35.12,
    evToFreeCashFlow: 23.98,
    currentRatio: 2.55,
    returnOnAssets: 0.0861,
    returnOnEquity: 0.1364,
    returnOnInvestedCapital: 0.129,
    returnOnCapitalEmployed: 0.1297,
    earningsYield: 0.0177,
    freeCashFlowYield: 0.0378,
    capexToRevenue: 0.0282,
    netDebtToEBITDA: -3.64,
    daysOfInventoryOutstanding: 126.1,
    cashConversionCycle: 72.1,
    intangiblesToTotalAssets: 0.010,
    operatingCycle: 132.9,
    incomeQuality: 2.75,
    workingCapital: 87_075_000,
  },
]

// PLCE - The Children's Place
const plceMetrics: YearMetrics[] = [
  {
    fiscalYear: "FY2024",
    marketCap: 124_979_140,
    enterpriseValue: 705_959_140,
    evToSales: 0.509,
    evToEBITDA: 27.20,
    evToFreeCashFlow: -5.29,
    currentRatio: 0.90,
    returnOnAssets: -0.0773,
    returnOnEquity: 0.9732,
    returnOnInvestedCapital: 0.0311,
    returnOnCapitalEmployed: 0.0734,
    earningsYield: -0.4626,
    freeCashFlowYield: -1.0676,
    capexToRevenue: 0.0114,
    netDebtToEBITDA: 22.38,
    daysOfInventoryOutstanding: 150.9,
    cashConversionCycle: 114.3,
    intangiblesToTotalAssets: 0.017,
    operatingCycle: 162.2,
    incomeQuality: 2.03,
    workingCapital: -50_114_000,
  },
  {
    fiscalYear: "FY2023",
    marketCap: 278_522_280,
    enterpriseValue: 728_724_280,
    evToSales: 0.455,
    evToEBITDA: -19.95,
    evToFreeCashFlow: 11.17,
    currentRatio: 0.73,
    returnOnAssets: -0.1931,
    returnOnEquity: 17.135,
    returnOnInvestedCapital: -0.0799,
    returnOnCapitalEmployed: -0.2086,
    earningsYield: -0.5549,
    freeCashFlowYield: 0.2342,
    capexToRevenue: 0.0172,
    netDebtToEBITDA: -12.33,
    daysOfInventoryOutstanding: 109.7,
    cashConversionCycle: 48.9,
    intangiblesToTotalAssets: 0.051,
    operatingCycle: 117.3,
    incomeQuality: -0.60,
    workingCapital: -164_278_000,
  },
  {
    fiscalYear: "FY2022",
    marketCap: 591_670_170,
    enterpriseValue: 1_086_781_170,
    evToSales: 0.636,
    evToEBITDA: 7.82,
    evToFreeCashFlow: -20.20,
    currentRatio: 0.87,
    returnOnAssets: -0.0012,
    returnOnEquity: -0.0072,
    returnOnInvestedCapital: 0.0004,
    returnOnCapitalEmployed: 0.0119,
    earningsYield: -0.0019,
    freeCashFlowYield: -0.0909,
    capexToRevenue: 0.0267,
    netDebtToEBITDA: 3.56,
    daysOfInventoryOutstanding: 131.2,
    cashConversionCycle: 89.9,
    intangiblesToTotalAssets: 0.072,
    operatingCycle: 141.8,
    incomeQuality: 7.22,
    workingCapital: -86_442_000,
  },
  {
    fiscalYear: "FY2021",
    marketCap: 1_032_737_750,
    enterpriseValue: 1_428_811_750,
    evToSales: 0.746,
    evToEBITDA: 3.29,
    evToFreeCashFlow: 13.74,
    currentRatio: 0.98,
    returnOnAssets: 0.1804,
    returnOnEquity: 0.8301,
    returnOnInvestedCapital: 0.2897,
    returnOnCapitalEmployed: 0.6356,
    earningsYield: 0.1812,
    freeCashFlowYield: 0.1007,
    capexToRevenue: 0.0153,
    netDebtToEBITDA: 0.91,
    daysOfInventoryOutstanding: 132.9,
    cashConversionCycle: 80.1,
    intangiblesToTotalAssets: 0.069,
    operatingCycle: 137.1,
    incomeQuality: 0.71,
    workingCapital: -10_288_000,
  },
  {
    fiscalYear: "FY2020",
    marketCap: 1_025_633_100,
    enterpriseValue: 1_595_967_100,
    evToSales: 1.048,
    evToEBITDA: -78.61,
    evToFreeCashFlow: -24.07,
    currentRatio: 0.76,
    returnOnAssets: -0.1235,
    returnOnEquity: -1.5032,
    returnOnInvestedCapital: -0.1397,
    returnOnCapitalEmployed: -0.3859,
    earningsYield: -0.1369,
    freeCashFlowYield: -0.0646,
    capexToRevenue: 0.0201,
    netDebtToEBITDA: -28.09,
    daysOfInventoryOutstanding: 112.8,
    cashConversionCycle: 49.0,
    intangiblesToTotalAssets: 0.065,
    operatingCycle: 122.3,
    incomeQuality: 0.25,
    workingCapital: -171_416_000,
  },
]

// HELE - Helen of Troy
const heleMetrics: YearMetrics[] = [
  {
    fiscalYear: "FY2025",
    marketCap: 1_268_159_636,
    enterpriseValue: 2_206_135_636,
    evToSales: 1.156,
    evToEBITDA: 8.21,
    evToFreeCashFlow: 26.53,
    currentRatio: 2.00,
    returnOnAssets: 0.0395,
    returnOnEquity: 0.0735,
    returnOnInvestedCapital: 0.0534,
    returnOnCapitalEmployed: 0.0535,
    earningsYield: 0.0976,
    freeCashFlowYield: 0.0656,
    capexToRevenue: 0.0158,
    netDebtToEBITDA: 3.49,
    daysOfInventoryOutstanding: 166.3,
    cashConversionCycle: 150.4,
    intangiblesToTotalAssets: 0.559,
    operatingCycle: 249.4,
    incomeQuality: 0.91,
    workingCapital: 465_453_000,
  },
  {
    fiscalYear: "FY2024",
    marketCap: 3_016_465_519,
    enterpriseValue: 3_700_897_519,
    evToSales: 1.846,
    evToEBITDA: 12.28,
    evToFreeCashFlow: 13.74,
    currentRatio: 1.87,
    returnOnAssets: 0.0594,
    returnOnEquity: 0.1030,
    returnOnInvestedCapital: 0.0878,
    returnOnCapitalEmployed: 0.1091,
    earningsYield: 0.0559,
    freeCashFlowYield: 0.0893,
    capexToRevenue: 0.0183,
    netDebtToEBITDA: 2.27,
    daysOfInventoryOutstanding: 136.8,
    cashConversionCycle: 125.3,
    intangiblesToTotalAssets: 0.565,
    operatingCycle: 210.1,
    incomeQuality: 1.82,
    workingCapital: 393_107_000,
  },
  {
    fiscalYear: "FY2023",
    marketCap: 2_713_518_292,
    enterpriseValue: 3_661_529_292,
    evToSales: 1.767,
    evToEBITDA: 12.76,
    evToFreeCashFlow: 109.70,
    currentRatio: 2.16,
    returnOnAssets: 0.0492,
    returnOnEquity: 0.0962,
    returnOnInvestedCapital: 0.0706,
    returnOnCapitalEmployed: 0.0847,
    earningsYield: 0.0528,
    freeCashFlowYield: 0.0123,
    capexToRevenue: 0.0844,
    netDebtToEBITDA: 3.30,
    daysOfInventoryOutstanding: 141.7,
    cashConversionCycle: 149.8,
    intangiblesToTotalAssets: 0.556,
    operatingCycle: 209.1,
    incomeQuality: 1.45,
    workingCapital: 479_883_000,
  },
  {
    fiscalYear: "FY2022",
    marketCap: 5_018_706_688,
    enterpriseValue: 5_842_286_688,
    evToSales: 2.628,
    evToEBITDA: 18.79,
    evToFreeCashFlow: 93.05,
    currentRatio: 1.80,
    returnOnAssets: 0.0793,
    returnOnEquity: 0.1686,
    returnOnInvestedCapital: 0.1055,
    returnOnCapitalEmployed: 0.1227,
    earningsYield: 0.0446,
    freeCashFlowYield: 0.0125,
    capexToRevenue: 0.0351,
    netDebtToEBITDA: 2.65,
    daysOfInventoryOutstanding: 160.3,
    cashConversionCycle: 147.8,
    intangiblesToTotalAssets: 0.527,
    operatingCycle: 236.4,
    incomeQuality: 0.63,
    workingCapital: 479_390_000,
  },
  {
    fiscalYear: "FY2021",
    marketCap: 5_537_937_350,
    enterpriseValue: 5_874_799_350,
    evToSales: 2.799,
    evToEBITDA: 17.88,
    evToFreeCashFlow: 27.27,
    currentRatio: 1.58,
    returnOnAssets: 0.1122,
    returnOnEquity: 0.2049,
    returnOnInvestedCapital: 0.1607,
    returnOnCapitalEmployed: 0.1707,
    earningsYield: 0.0459,
    freeCashFlowYield: 0.0389,
    capexToRevenue: 0.0470,
    netDebtToEBITDA: 1.03,
    daysOfInventoryOutstanding: 150.1,
    cashConversionCycle: 113.4,
    intangiblesToTotalAssets: 0.485,
    operatingCycle: 217.7,
    incomeQuality: 1.24,
    workingCapital: 357_045_000,
  },
]

export const metricsData: Record<string, YearMetrics[]> = {
  LOVE: loveMetrics,
  PLCE: plceMetrics,
  HELE: heleMetrics,
}

// Utility to get most recent data per company
export function getLatestMetrics(symbol: string): YearMetrics {
  return metricsData[symbol][0]
}

// Format helpers
export function formatMcap(val: number): string {
  if (Math.abs(val) >= 1_000_000_000) return `$${(val / 1_000_000_000).toFixed(1)}B`
  if (Math.abs(val) >= 1_000_000) return `$${(val / 1_000_000).toFixed(0)}M`
  return `$${val.toLocaleString()}`
}

export function formatPct(val: number): string {
  return `${(val * 100).toFixed(1)}%`
}

export function formatMultiple(val: number): string {
  if (Math.abs(val) > 100) return "N/M"
  return `${val.toFixed(1)}x`
}
