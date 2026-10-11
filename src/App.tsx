import { useEffect, useRef, useState } from "react";

type IconName =
  | "sliders"
  | "home"
  | "gear"
  | "sparkles"
  | "bot"
  | "signal"
  | "tv"
  | "layers"
  | "flame"
  | "file"
  | "chevron"
  | "globe"
  | "star"
  | "check"
  | "arrow"
  | "sun"
  | "moon"
  | "shield"
  | "search"
  | "chart"
  | "plus"
  | "down";

function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    sliders: (
      <>
        <path d="M4 7h16M4 17h16" />
        <circle cx="8" cy="7" r="2" />
        <circle cx="16" cy="17" r="2" />
      </>
    ),
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10M9 20v-6h6v6" />
      </>
    ),
    gear: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.9 1.2V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 7 19.4a1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0-1.2-2.9H1a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 2.6 7a1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.7 1.7 0 0 0 7 2.6h.1A1.7 1.7 0 0 0 8.3 1" />
      </>
    ),
    sparkles: (
      <>
        <path d="m12 3-1.6 5.4L5 10l5.4 1.6L12 17l1.6-5.4L19 10l-5.4-1.6L12 3Z" />
        <path d="m19 16-.7 2.3L16 19l2.3.7L19 22l.7-2.3L22 19l-2.3-.7L19 16ZM5 3l-.5 1.5L3 5l1.5.5L5 7l.5-1.5L7 5l-1.5-.5L5 3Z" />
      </>
    ),
    bot: (
      <>
        <rect x="4" y="7" width="16" height="13" rx="4" />
        <path d="M12 3v4M8 12h.01M16 12h.01M9 16h6" />
        <path d="M4 12H2m18 0h-2" />
      </>
    ),
    signal: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M5.6 5.6a9 9 0 0 0 0 12.8M18.4 5.6a9 9 0 0 1 0 12.8M2.8 2.8a13 13 0 0 0 0 18.4M21.2 2.8a13 13 0 0 1 0 18.4" />
      </>
    ),
    tv: (
      <>
        <rect x="3" y="5" width="18" height="13" rx="2" />
        <path d="m8 2 4 3 4-3M8 22h8" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </>
    ),
    flame: <path d="M12 22c4.5 0 7-2.7 7-6.5 0-3.1-1.8-5.4-4.4-7.6.2 2.1-.4 3.3-1.4 4.3.2-4.2-2.6-7.1-5.4-9.2.3 3.2-.4 4.8-1.6 6.7C4.8 11.5 5 13.7 5 15.5 5 19.3 7.5 22 12 22Z" />,
    file: (
      <>
        <path d="M6 3h8l4 4v14H6z" />
        <path d="M14 3v5h5M9 13h6M9 17h6" />
      </>
    ),
    chevron: <path d="m7 9 5 5 5-5" />,
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21c-2.4-2.5-3.6-5.5-3.6-9S9.6 5.5 12 3Z" />
      </>
    ),
    star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />,
    check: <path d="m5 12 4 4L19 6" />,
    arrow: <path d="m5 12h14m-6-6 6 6-6 6" />,
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
      </>
    ),
    moon: <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />,
    shield: <path d="M12 3 20 6v5c0 5.2-3.4 8.7-8 10-4.6-1.3-8-4.8-8-10V6l8-3Z" />,
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.2-3.2" />
      </>
    ),
    chart: (
      <>
        <path d="M3 3v18h18" />
        <path d="M7 15l4-5 3 3 5-7" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
    down: <path d="m6 9 6 6 6-6" />,
  };

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {paths[name]}
    </svg>
  );
}

const navItems: { label: string; icon: IconName; badge?: string }[] = [
  { label: "Dashboard", icon: "home" },
  { label: "Bot Builder", icon: "gear" },
  { label: "Auto Trading", icon: "sparkles", badge: "NEW" },
  { label: "Free Bots", icon: "bot" },
  { label: "Premium AI Bots", icon: "bot" },
  { label: "Signal AI", icon: "signal" },
  { label: "Manual Trader", icon: "tv" },
  { label: "Bulk Trader", icon: "layers" },
];

type HotMarketSignal = {
  symbol: string;
  market: string;
  strategy: string;
  direction: string;
  rule: string;
  score: number;
  details: string;
};

const defaultTelegramTemplate = `👑 DIGITTOOLS • LIVE SIGNAL
🎯 Strategy: {{strategy}}
📊 Market: {{market}} ({{symbol}})
➡️ Direction: {{direction}}
⚡ Window: Next 1 tick · 1,000 tick sample
💡 Pattern: {{details}}
📈 Rule: {{rule}}
🔥 Heat: {{score}}/100
🕒 Time: {{time}} UTC
⚠️ Observation only. Verify in Signal AI before trading.`;

function buildTelegramMessage(template: string, signal: HotMarketSignal) {
  const values: Record<string, string> = {
    strategy: signal.strategy,
    market: signal.market,
    symbol: signal.symbol,
    direction: signal.direction,
    details: signal.details,
    rule: signal.rule,
    score: String(signal.score),
    time: new Date().toISOString().replace("T", " ").replace(".000Z", " UTC"),
  };
  return template.replace(/\{\{(\w+)\}\}/g, (_, key: string) => values[key] || "");
}

function roundedCanvasRect(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

function wrapCanvasText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number) {
  const words = text.split(" ");
  let line = "";
  let currentY = y;
  words.forEach((word) => {
    const next = line ? `${line} ${word}` : word;
    if (ctx.measureText(next).width > maxWidth && line) {
      ctx.fillText(line, x, currentY);
      line = word;
      currentY += lineHeight;
    } else line = next;
  });
  if (line) ctx.fillText(line, x, currentY);
  return currentY;
}

async function createSignalSnapshot(signal: HotMarketSignal) {
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 760;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#090f2b");
  gradient.addColorStop(.55, "#11183b");
  gradient.addColorStop(1, "#28152f");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const glow = ctx.createRadialGradient(160, 145, 8, 160, 145, 260);
  glow.addColorStop(0, "#ff8c4933");
  glow.addColorStop(1, "#ff8c4900");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, 500, 500);
  ctx.strokeStyle = "#f07b3e99";
  ctx.lineWidth = 2;
  roundedCanvasRect(ctx, 2, 2, 1196, 756, 25);
  ctx.stroke();
  ctx.fillStyle = "#f8f5ff";
  ctx.font = "900 36px Arial, sans-serif";
  ctx.fillText("DIGITTOOLS  |  LIVE SIGNAL", 55, 70);
  ctx.fillStyle = "#ffb457";
  ctx.font = "900 25px Arial, sans-serif";
  ctx.fillText(signal.direction, 55, 118);
  ctx.fillStyle = "#f7fbff";
  ctx.font = "700 29px Arial, sans-serif";
  ctx.fillText(signal.market, 55, 170);
  ctx.fillStyle = "#8fa7ce";
  ctx.font = "600 21px Arial, sans-serif";
  ctx.fillText(`Symbol: ${signal.symbol}`, 58, 207);
  ctx.fillText(`Strategy: ${signal.strategy}`, 58, 242);
  ctx.fillText(`Rule: ${signal.rule}`, 58, 277);
  ctx.fillText("Window: 1,000 ticks · observe next tick", 58, 312);
  ctx.fillStyle = "#ffcf67";
  ctx.font = "900 24px Arial, sans-serif";
  ctx.fillText(`Heat score: ${signal.score}/100`, 58, 360);
  ctx.fillStyle = "#55e2b0";
  ctx.font = "800 24px Arial, sans-serif";
  ctx.fillText(signal.details, 58, 410);
  ctx.fillStyle = "#fff";
  ctx.font = "700 22px Arial, sans-serif";
  wrapCanvasText(ctx, "Verify the setup in Signal AI before making any trading decision.", 58, 480, 1020, 33);
  ctx.fillStyle = "#6f86ad";
  ctx.font = "600 18px Arial, sans-serif";
  ctx.fillText(`Generated ${new Date().toISOString().replace("T", " ").replace(".000Z", " UTC")}`, 58, 690);
  return new Promise<Blob | null>((resolve) => canvas.toBlob((blob) => resolve(blob), "image/png", .92));
}

function getHotMarketSignals(marketData: Record<string, MarketFeed>) {
    const signals: HotMarketSignal[] = [];
  const tier = (value: number) => value < 10 ? "below10" : value >= 10.5 ? "above10_5" : "above10";
  const addSignal = (symbol: string, stats: ReturnType<typeof getMarketAnalysis>, watched: number[], strategy: string, direction: string) => {
    const values = watched.map((digit) => stats.percentages[digit]);
      const balanced = values.length > 0 && values.every((value) => value > 0 && value < 9.9);
    if (!balanced || stats.total < ANALYSIS_TICK_COUNT) return;
    const fit = Math.round((values.reduce((sum, value) => sum + value, 0) / values.length / 9.9) * 100);
    signals.push({
      symbol,
      market: marketDisplayName(symbol),
      strategy,
      direction,
      rule: `${watched.join(", ")} below 9.9%`,
      score: Math.min(99, fit),
      details: watched.map((digit) => `${digit}: ${stats.percentages[digit].toFixed(1)}%`).join(" · "),
    });
  };
  const addAlternatorSignal = (symbol: string, stats: ReturnType<typeof getMarketAnalysis>) => {
    if (stats.total < ANALYSIS_TICK_COUNT) return;
    const underFour = [0, 1, 2, 3];
    const overFive = [6, 7, 8, 9];
    const underSum = underFour.reduce((sum, digit) => sum + stats.percentages[digit], 0);
    const overSum = overFive.reduce((sum, digit) => sum + stats.percentages[digit], 0);
    const gap = Math.abs(underSum - overSum);
    const underTiers = underFour.map((digit) => tier(stats.percentages[digit]));
    const overTiers = overFive.map((digit) => tier(stats.percentages[digit]));
    const tierCounts = (values: string[]) => ({
      below10: values.filter((value) => value === "below10").length,
      above10: values.filter((value) => value === "above10").length,
      above10_5: values.filter((value) => value === "above10_5").length,
    });
    const underCounts = tierCounts(underTiers);
    const overCounts = tierCounts(overTiers);
    const highUnder = underCounts.above10_5;
    const highOver = overCounts.above10_5;
    const tiersMatch = underCounts.below10 === overCounts.below10 && underCounts.above10 === overCounts.above10 && highUnder === highOver;
    if (gap > 5 || !tiersMatch || highUnder < 2) return;
    const fit = Math.max(70, Math.min(99, Math.round(100 - gap * 4 + highUnder * 2)));
    signals.push({
      symbol,
      market: marketDisplayName(symbol),
      strategy: "Alternator balance",
      direction: "ALTERNATOR",
      rule: `U4/O5 gap ${gap.toFixed(1)}pp · tiers match · ${highUnder} high each`,
      score: fit,
      details: `Under 4: ${underSum.toFixed(1)}% · Over 5: ${overSum.toFixed(1)}% · ≥10.5%: ${highUnder}/${highOver}`,
    });
  };

  allAnalyzerSymbols.forEach((symbol) => {
    const feed = marketData[symbol];
    if (!feed || feed.digits.length < ANALYSIS_TICK_COUNT) return;
    const stats = getMarketAnalysis(feed);
    addSignal(symbol, stats, [0, 1, 2], "Over 2 balance", "OVER 2");
    addSignal(symbol, stats, [0, 1, 2, 3], "Over 3 balance", "OVER 3");
    addSignal(symbol, stats, [7, 8, 9], "Under 7 balance", "UNDER 7");
    addSignal(symbol, stats, [6, 7, 8, 9], "Under 6 balance", "UNDER 6");
    addAlternatorSignal(symbol, stats);
  });
  return signals;
}

const featureCards = [
  { number: "01", title: "LOAD BOT", description: "Open your trading strategy", image: "/load-bot.png", tone: "blue" },
  { number: "02", title: "PREMIUM BOTS", description: "Exclusive automated strategies", image: "/premium-bot.png", tone: "gold" },
  { number: "03", title: "SPEED BOT", description: "One-click automated trading", image: "/speed-bot.png", tone: "cyan" },
  { number: "04", title: "MANUAL TRADING", description: "Full control, trade your way", image: "/manual-trading.png", tone: "violet", popular: true },
];

const feedback = [
  { initials: "JO", name: "James Ochieng", country: "Kenya", quote: "The dashboard keeps signals and trading tools together, so I can review opportunities much faster.", tags: ["Fast workflow", "Clear signals"] },
  { initials: "AH", name: "Amina Hassan", country: "United Arab Emirates", quote: "The market cards are clear and focused. I can compare confidence before choosing my next setup.", tags: ["Simple layout", "Easy to compare"] },
  { initials: "DM", name: "David Mwangi", country: "Kenya", quote: "Everything I use most is close by, and the live signal view is easy to understand at a glance.", tags: ["Fast workflow", "Clear signals", "Easy to use"] },
  { initials: "GN", name: "Grace Njeri", country: "South Africa", quote: "The layout gives me a simple routine: review the data, compare markets, and then make my decision.", tags: ["Simple routine", "Better focus"] },
  { initials: "EO", name: "Emmanuel Otieno", country: "Nigeria", quote: "The signal rankings help me focus on stronger opportunities instead of scanning every market manually.", tags: ["Signal rankings", "More focus"] },
  { initials: "LM", name: "Lucas Moreira", country: "Brazil", quote: "I can move from market overview to a trading setup without losing the context I need.", tags: ["Clean overview", "Quick setup"] },
  { initials: "SK", name: "Sofia Kowalski", country: "Poland", quote: "The live market strip makes it easy to spot movement before I open a strategy.", tags: ["Live data", "Better timing"] },
  { initials: "RK", name: "Rohan Kapoor", country: "India", quote: "The platform feels organized even when I am watching several markets at the same time.", tags: ["Organized", "Multi-market"] },
  { initials: "EC", name: "Emma Carter", country: "United Kingdom", quote: "The signal tools give me a clear starting point and keep my workflow focused.", tags: ["Clear signals", "Focused trading"] },
  { initials: "MT", name: "Mia Thompson", country: "United States", quote: "The visual hierarchy is excellent. I know where to look first when the market starts moving.", tags: ["Easy navigation", "Fast decisions"] },
];

const analyzerGroups = [
  {
    label: "1HZ Indices",
    symbols: ["1HZ10V", "1HZ15V", "1HZ25V", "1HZ30V", "1HZ50V", "1HZ75V", "1HZ90V", "1HZ100V"],
  },
  {
    label: "R_ Indices",
    symbols: ["R_10", "R_25", "R_50", "R_75", "R_100"],
  },
  {
    label: "JD Indices",
    symbols: ["JD10", "JD25", "JD50", "JD75", "JD100"],
  },
];

const allAnalyzerSymbols = analyzerGroups.flatMap((group) => group.symbols);

function marketDisplayName(symbol: string) {
  if (symbol.startsWith("1HZ")) return `Volatility ${symbol.replace("1HZ", "").replace("V", "")} (1s) Index`;
  if (symbol.startsWith("R_")) return `Volatility ${symbol.replace("R_", "")} Index`;
  if (symbol.startsWith("JD")) return `Jump ${symbol.replace("JD", "")} Index`;
  return symbol;
}

type BotOption = {
  name: string;
  type: string;
  description: string;
  color: "blue" | "cyan" | "violet";
  image: string;
  tone: string;
  markets: string;
  setup: string;
  features: string[];
};

const freeBots: BotOption[] = [
  {
    name: "Digit Pulse",
    type: "Even / Odd",
    description: "A clean starter strategy for reading the latest digit rhythm.",
    color: "blue",
    image: "/bot-digit-pulse.png",
    tone: "cyan",
    markets: "1HZ · R_ · JD",
    setup: "Simple setup",
    features: ["1,000 tick view", "Even / Odd mode", "Live digit stream"],
  },
  {
    name: "Over Under Scout",
    type: "Over / Under",
    description: "A focused template for comparing over, under, and exact digit activity.",
    color: "cyan",
    image: "/bot-over-under.png",
    tone: "green",
    markets: "1HZ · R_ indices",
    setup: "Beginner friendly",
    features: ["Target digit picker", "Over / Under mode", "Recent appearances"],
  },
  {
    name: "Signal Compass",
    type: "Multi-index",
    description: "A calm overview for comparing several synthetic markets before choosing a setup.",
    color: "violet",
    image: "/bot-signal-compass.png",
    tone: "violet",
    markets: "All supported indices",
    setup: "Guided setup",
    features: ["Market comparison", "Signal direction", "Manual confirmation"],
  },
  {
    name: "Parity Scout",
    type: "Parity rhythm",
    description: "A lightweight scanner for spotting recent even and odd streaks without placing trades.",
    color: "blue",
    image: "/bot-neural-grid.png",
    tone: "blue",
    markets: "R_10 · R_50 · R_100",
    setup: "Quick setup",
    features: ["Parity streaks", "Live pointer", "One-click loading"],
  },
  {
    name: "Last Digit Lens",
    type: "Digit frequency",
    description: "A visual digit-frequency template for learning how recent tick history is distributed.",
    color: "cyan",
    image: "/bot-quantum-orbit.png",
    tone: "gold",
    markets: "1HZ · R_ · JD",
    setup: "Learning mode",
    features: ["Frequency bars", "Most / least labels", "Rolling 1,000 ticks"],
  },
];

const premiumBots: BotOption[] = [
  {
    name: "Neural Edge",
    type: "Advanced parity engine",
    description: "A deeper parity workspace that layers streak context, frequency balance, and live confirmation.",
    color: "violet",
    image: "/bot-neural-grid.png",
    tone: "violet",
    markets: "1HZ · R_ · JD",
    setup: "Advanced setup",
    features: ["Streak context", "Adaptive thresholds", "Signal confidence view"],
  },
  {
    name: "Quantum Compass",
    type: "Multi-index intelligence",
    description: "An advanced market comparison board for traders who want context across multiple synthetic indices.",
    color: "cyan",
    image: "/bot-quantum-orbit.png",
    tone: "gold",
    markets: "All supported indices",
    setup: "Expert setup",
    features: ["Cross-index scan", "Regime notes", "Priority watchlist"],
  },
  {
    name: "Apex Digit Matrix",
    type: "Digit frequency engine",
    description: "A premium analysis template with layered digit distribution, recency, and selected target context.",
    color: "violet",
    image: "/bot-signal-compass.png",
    tone: "violet",
    markets: "1HZ · R_ indices",
    setup: "Advanced setup",
    features: ["Recency weighting", "Target comparison", "Matrix overview"],
  },
  {
    name: "Titan Overwatch",
    type: "Over / Under intelligence",
    description: "A structured premium workspace for over, under, and exact digit observations with stronger controls.",
    color: "blue",
    image: "/bot-over-under.png",
    tone: "blue",
    markets: "R_ · JD indices",
    setup: "Expert setup",
    features: ["Custom barriers", "Exact digit context", "Alert-ready layout"],
  },
  {
    name: "Pulse Matrix Pro",
    type: "Advanced signal suite",
    description: "A high-clarity premium template combining live pointer movement with a layered analysis workspace.",
    color: "cyan",
    image: "/bot-digit-pulse.png",
    tone: "cyan",
    markets: "1HZ · R_ · JD",
    setup: "Pro setup",
    features: ["Live pulse map", "Custom data view", "Advanced controls"],
  },
];

type AnalysisMode = "evenOdd" | "overUnder";
type AnalysisStatus = "idle" | "connecting" | "live" | "error";
type SignalSubtab = "analysisTool" | "overUnder" | "evenOdd" | "digitFrequency" | "streaks";
type AnalysisState = {
  digits: number[];
  quote: string;
  epoch: number | null;
  precision: number;
  status: AnalysisStatus;
  error: string;
};

type MarketFeed = {
  digits: number[];
  prices: number[];
  quote: string;
  epoch: number | null;
  precision: number;
  status: AnalysisStatus;
};

function blankMarketFeed(): MarketFeed {
  return { digits: [], prices: [], quote: "--", epoch: null, precision: 2, status: "idle" };
}

const ANALYSIS_TICK_COUNT = 1000;

const initialAnalysis: AnalysisState = {
  digits: [],
  quote: "--",
  epoch: null,
  precision: 2,
  status: "idle",
  error: "",
};

function getMarketAnalysis(feed: MarketFeed) {
  const counts = Array.from({ length: 10 }, () => 0);
  feed.digits.forEach((digit) => { counts[digit] += 1; });
  const total = feed.digits.length;
  const percentages = counts.map((count) => percent(count, total));
  const ranking = counts.map((count, digit) => ({ count, digit })).sort((a, b) => b.count - a.count || a.digit - b.digit);
  const hottest = total ? ranking[0].digit : null;
  const secondHottest = total ? ranking[1].digit : null;
  const coldRanking = [...ranking].reverse();
  const coldest = total ? coldRanking[0].digit : null;
  const secondColdest = total ? coldRanking[1].digit : null;
  const even = feed.digits.filter((digit) => digit % 2 === 0).length;
  const odd = total - even;
  const rises = feed.prices.slice(1).filter((price, index) => price > feed.prices[index]).length;
  const falls = feed.prices.slice(1).filter((price, index) => price < feed.prices[index]).length;
  const over4 = feed.digits.filter((digit) => digit > 4).length;
  const under5 = feed.digits.filter((digit) => digit < 5).length;
  return {
    total,
    counts,
    percentages,
    hottest,
    secondHottest,
    coldest,
    secondColdest,
    even,
    odd,
    rises,
    falls,
    over4,
    under5,
    lastDigits: feed.digits.slice(-10),
    evenPct: percent(even, total),
    oddPct: percent(odd, total),
    risePct: percent(rises, rises + falls),
    fallPct: percent(falls, rises + falls),
    overPct: percent(over4, total),
    underPct: percent(under5, total),
  };
}

function digitFromQuote(quote: unknown, pipSize?: unknown) {
  const numeric = Number(quote);
  if (!Number.isFinite(numeric)) return { digit: null, formatted: "--", precision: 2 };
  const raw = String(quote);
  const rawPrecision = raw.includes(".") ? raw.split(".")[1].length : 0;
  const pipPrecision = Number(pipSize);
  const precision = Number.isFinite(pipPrecision) && pipPrecision >= 0 ? Math.floor(pipPrecision) : rawPrecision;
  const formatted = numeric.toFixed(Math.max(0, precision));
  const decimalPart = formatted.split(".")[1] || "";
  const digit = Number(decimalPart.slice(-1) || formatted.slice(-1));
  return { digit, formatted, precision };
}

function analysisLabel(digit: number, mode: AnalysisMode, target: number) {
  if (mode === "evenOdd") return digit % 2 === 0 ? "Even" : "Odd";
  if (digit === target) return `Exact ${target}`;
  return digit > target ? `Over ${target}` : `Under ${target}`;
}

type Side = "over" | "under" | "exact";

function getSide(digit: number, target: number): Side {
  if (digit > target) return "over";
  if (digit < target) return "under";
  return "exact";
}

function percent(value: number, total: number) {
  return total ? (value / total) * 100 : 0;
}

function getStreaks(digits: number[], target: number) {
  const sides = digits.map((digit) => getSide(digit, target));
  let currentSide: Side | "none" = "none";
  let currentLength = 0;
  let longestOver = 0;
  let longestUnder = 0;
  let longestExact = 0;
  let runSide: Side | "none" = "none";
  let runLength = 0;

  sides.forEach((side) => {
    if (side === runSide) runLength += 1;
    else {
      runSide = side;
      runLength = 1;
    }
    if (side === "over") longestOver = Math.max(longestOver, runLength);
    if (side === "under") longestUnder = Math.max(longestUnder, runLength);
    if (side === "exact") longestExact = Math.max(longestExact, runLength);
  });

  if (runSide !== "none") {
    currentSide = runSide;
    currentLength = runLength;
  }

  return { sides, currentSide, currentLength, longestOver, longestUnder, longestExact };
}

function getOverUnderAnalysis(digits: number[], target: number) {
  const overDigits = Array.from({ length: 10 }, () => 0);
  const underDigits = Array.from({ length: 10 }, () => 0);
  let overCount = 0;
  let underCount = 0;
  let exactCount = 0;
  digits.forEach((digit) => {
    const side = getSide(digit, target);
    if (side === "over") {
      overCount += 1;
      overDigits[digit] += 1;
    } else if (side === "under") {
      underCount += 1;
      underDigits[digit] += 1;
    } else exactCount += 1;
  });

  const total = digits.length;
  const expectedOver = (9 - target) * 10;
  const expectedUnder = target * 10;
  const overPct = percent(overCount, total);
  const underPct = percent(underCount, total);
  const exactPct = percent(exactCount, total);
  const streaks = getStreaks(digits, target);
  const last25 = digits.slice(-25);
  const last100 = digits.slice(-100);
  const recent25Over = percent(last25.filter((digit) => getSide(digit, target) === "over").length, last25.length);
  const recent100Over = percent(last100.filter((digit) => getSide(digit, target) === "over").length, last100.length);
  const recent25Under = percent(last25.filter((digit) => getSide(digit, target) === "under").length, last25.length);
  const recent100Under = percent(last100.filter((digit) => getSide(digit, target) === "under").length, last100.length);
  const overEdge = overPct - expectedOver;
  const underEdge = underPct - expectedUnder;
  const dataReady = total >= 100;
  const currentSide = streaks.currentSide as Side | "none";
  const overTrigger = dataReady && overEdge >= 4 && recent25Over >= expectedOver && currentSide === "under" && streaks.currentLength >= 2;
  const underTrigger = dataReady && underEdge >= 4 && recent25Under >= expectedUnder && currentSide === "over" && streaks.currentLength >= 2;
  const direction = overTrigger && overEdge >= underEdge ? "over" : underTrigger ? "under" : "wait";
  const score = direction === "wait" ? Math.max(0, Math.min(99, Math.round(50 + Math.max(overEdge, underEdge) * 2))) : Math.max(55, Math.min(92, Math.round(60 + Math.max(overEdge, underEdge) * 2 + (streaks.currentLength - 2) * 3)));

  return {
    total,
    overCount,
    underCount,
    exactCount,
    overPct,
    underPct,
    exactPct,
    expectedOver,
    expectedUnder,
    overEdge,
    underEdge,
    overDigits,
    underDigits,
    ...streaks,
    recent25Over,
    recent100Over,
    recent25Under,
    recent100Under,
    dataReady,
    overTrigger,
    underTrigger,
    direction,
    score,
  };
}

function getEvenOddAnalysis(digits: number[]) {
  const evenDigits = Array.from({ length: 10 }, () => 0);
  const oddDigits = Array.from({ length: 10 }, () => 0);
  let evenCount = 0;
  let oddCount = 0;
  let currentParity: "even" | "odd" | "none" = "none";
  let currentLength = 0;
  let runParity: "even" | "odd" | "none" = "none";
  let runLength = 0;
  let longestEven = 0;
  let longestOdd = 0;

  digits.forEach((digit) => {
    const parity = digit % 2 === 0 ? "even" : "odd";
    if (parity === "even") {
      evenCount += 1;
      evenDigits[digit] += 1;
    } else {
      oddCount += 1;
      oddDigits[digit] += 1;
    }
    if (parity === runParity) runLength += 1;
    else {
      runParity = parity;
      runLength = 1;
    }
    if (parity === "even") longestEven = Math.max(longestEven, runLength);
    else longestOdd = Math.max(longestOdd, runLength);
  });

  if (runParity !== "none") {
    currentParity = runParity;
    currentLength = runLength;
  }

  const total = digits.length;
  const last25 = digits.slice(-25);
  const last100 = digits.slice(-100);
  const recent25Even = percent(last25.filter((digit) => digit % 2 === 0).length, last25.length);
  const recent100Even = percent(last100.filter((digit) => digit % 2 === 0).length, last100.length);
  const recent25Odd = 100 - recent25Even;
  const recent100Odd = 100 - recent100Even;
  const evenPct = percent(evenCount, total);
  const oddPct = percent(oddCount, total);
  const evenEdge = evenPct - 50;
  const oddEdge = oddPct - 50;
  const dataReady = total >= 100;
  const activeParity = currentParity as "even" | "odd" | "none";
  const evenTrigger = dataReady && evenEdge >= 4 && recent25Even >= 50 && activeParity === "odd" && currentLength >= 2;
  const oddTrigger = dataReady && oddEdge >= 4 && recent25Odd >= 50 && activeParity === "even" && currentLength >= 2;
  const direction = evenTrigger && evenEdge >= oddEdge ? "even" : oddTrigger ? "odd" : "wait";
  const edge = Math.max(evenEdge, oddEdge);
  const score = direction === "wait"
    ? Math.max(0, Math.min(99, Math.round(50 + edge * 2)))
    : Math.max(55, Math.min(92, Math.round(60 + edge * 2 + (currentLength - 2) * 3)));

  return {
    total,
    evenCount,
    oddCount,
    evenPct,
    oddPct,
    evenEdge,
    oddEdge,
    evenDigits,
    oddDigits,
    currentParity,
    currentLength,
    longestEven,
    longestOdd,
    recent25Even,
    recent100Even,
    recent25Odd,
    recent100Odd,
    dataReady,
    evenTrigger,
    oddTrigger,
    direction,
    score,
    parities: digits.map((digit) => digit % 2 === 0 ? "even" : "odd"),
  };
}

function getDigitFrequencyAnalysis(digits: number[]) {
  const counts = Array.from({ length: 10 }, () => 0);
  const last25 = digits.slice(-25);
  const last100 = digits.slice(-100);
  const recent25 = Array.from({ length: 10 }, () => 0);
  const recent100 = Array.from({ length: 10 }, () => 0);
  digits.forEach((digit) => { counts[digit] += 1; });
  last25.forEach((digit) => { recent25[digit] += 1; });
  last100.forEach((digit) => { recent100[digit] += 1; });
  const total = digits.length;
  const percentages = counts.map((count) => percent(count, total));
  const baseline = total ? 10 : 0;
  const deviations = counts.map((count) => count - baseline);
  const hottest = total ? counts.reduce((best, count, digit) => count > counts[best] ? digit : best, 0) : null;
  const coldest = total ? counts.reduce((best, count, digit) => count < counts[best] ? digit : best, 0) : null;
  const recentHot = last25.length ? recent25.reduce((best, count, digit) => count > recent25[best] ? digit : best, 0) : null;
  const recentCold = last25.length ? recent25.reduce((best, count, digit) => count < recent25[best] ? digit : best, 0) : null;
  const mean = total ? counts.reduce((sum, count) => sum + count, 0) / 10 : 0;
  const variance = total ? counts.reduce((sum, count) => sum + Math.pow(count - mean, 2), 0) / 10 : 0;
  const balanceGap = total ? Math.max(...counts) - Math.min(...counts) : 0;
  const recentHotLead = recent25.length ? Math.max(...recent25) - Math.min(...recent25) : 0;
  const dataReady = total >= 100;
  const signal = !dataReady ? "collecting" : balanceGap >= 22 ? "spread" : recentHotLead >= 5 ? "recent" : "balanced";

  return {
    total, counts, percentages, deviations, recent25, recent100, hottest, coldest, recentHot, recentCold,
    variance, balanceGap, recentHotLead, dataReady, signal,
  };
}

function getStreakAnalysis(digits: number[], target: number) {
  const longestByDigit = Array.from({ length: 10 }, () => 0);
  const currentDigit = digits.at(-1) ?? null;
  let currentLength = 0;
  let runDigit: number | null = null;
  let runLength = 0;
  digits.forEach((digit) => {
    if (digit === runDigit) runLength += 1;
    else {
      runDigit = digit;
      runLength = 1;
    }
    longestByDigit[digit] = Math.max(longestByDigit[digit], runLength);
  });
  if (currentDigit !== null) {
    for (let index = digits.length - 1; index >= 0 && digits[index] === currentDigit; index -= 1) currentLength += 1;
  }
  const parity = getEvenOddAnalysis(digits);
  const direction = getOverUnderAnalysis(digits, target);
  const last25 = digits.slice(-25);
  const transitions = last25.slice(1).filter((digit, index) => getSide(digit, target) !== getSide(last25[index], target)).length;
  const total = digits.length;
  const longestDigit = longestByDigit.reduce((best, length, digit) => length > longestByDigit[best] ? digit : best, 0);
  const longestLength = longestByDigit[longestDigit] || 0;
  const dataReady = total >= 100;
  const signal = !dataReady ? "collecting" : currentLength >= 3 ? "active" : longestLength >= 4 ? "watch" : "quiet";
  return { total, currentDigit, currentLength, longestByDigit, longestDigit, longestLength, parity, direction, transitions, dataReady, signal };
}

function FeatureCard({ card, onClick }: { card: (typeof featureCards)[number]; onClick: () => void }) {
  return (
    <button onClick={onClick} className={`feature-card feature-${card.tone} group text-left`}>
      {card.popular && <span className="popular-tag"><Icon name="star" className="h-3 w-3" /> POPULAR</span>}
      <span className="card-number">{card.number}</span>
      <span className="feature-visual"><img src={card.image} alt="" /></span>
      <span className="relative z-10 mt-1 block text-center">
        <strong>{card.title}</strong>
        <small>{card.description}</small>
      </span>
      <span className="feature-arrow"><Icon name="arrow" className="h-4 w-4" /></span>
    </button>
  );
}

function BotMarketplace({ premium, onLoad }: { premium: boolean; onLoad: (bot: BotOption) => void }) {
  const bots = premium ? premiumBots : freeBots;
  return (
    <section className={`bot-marketplace ${premium ? "bot-marketplace-premium" : "bot-marketplace-free"}`} aria-label={premium ? "Premium AI bots" : "Free bots"}>
      <div className="marketplace-heading">
        <div>
          <span className="placeholder-kicker">{premium ? "ADVANCED STRATEGY LAB" : "STARTER STRATEGY LIBRARY"}</span>
          <h1>{premium ? "Premium AI Bots" : "Free Bots"}</h1>
          <p>{premium ? "Advanced analysis templates for traders who want more context, control, and depth." : "Explore clean, focused strategy templates and load one into Bot Builder when you are ready."}</p>
        </div>
        <div className={`marketplace-mark ${premium ? "premium" : ""}`}><Icon name={premium ? "sparkles" : "bot"} /><span>{bots.length} {premium ? "advanced" : "free"} bots</span></div>
      </div>
      <div className="marketplace-toolbar">
        <span><i className="rolling-live-dot" /> {premium ? "Premium collection" : "Open collection"}</span>
        <small>Analysis templates only · no trades are placed from this page</small>
      </div>
      <div className="bot-market-grid">
        {bots.map((bot, index) => (
          <article className={`bot-market-card bot-tone-${bot.tone}`} key={bot.name} style={{ animationDelay: `${index * 70}ms` }}>
            <div className="bot-market-art">
              <span className="bot-tier">{premium ? "ADVANCED AI" : "FREE"}</span>
              <span className="bot-art-ring" />
              <img src={bot.image} alt="" />
              <span className="bot-card-number">0{index + 1}</span>
            </div>
            <div className="bot-market-body">
              <div className="bot-market-title"><div><h2>{bot.name}</h2><span>{bot.type}</span></div><Icon name="sparkles" className="bot-title-icon" /></div>
              <p>{bot.description}</p>
              <div className="bot-market-meta"><span><small>MARKETS</small><b>{bot.markets}</b></span><span><small>SETUP</small><b>{bot.setup}</b></span></div>
              <div className="bot-feature-tags">{bot.features.map((feature) => <span key={feature}>{feature}</span>)}</div>
              <button className="load-bot-button" onClick={() => onLoad(bot)}>Load in Bot Builder <Icon name="arrow" className="h-4 w-4" /></button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function EvenOddSignalWorkspace({
  analysis,
  analysisSymbol,
  setAnalysisSymbol,
}: {
  analysis: AnalysisState;
  analysisSymbol: string;
  setAnalysisSymbol: (symbol: string) => void;
}) {
  const stats = getEvenOddAnalysis(analysis.digits);
  const connectionLabel = analysis.status === "live" ? "LIVE" : analysis.status === "connecting" ? "CONNECTING" : analysis.status === "error" ? "OFFLINE" : "READY";
  const candidateSide = stats.evenEdge >= stats.oddEdge ? "even" : "odd";
  const candidateEdge = candidateSide === "even" ? stats.evenEdge : stats.oddEdge;
  const candidateRecent = candidateSide === "even" ? stats.recent25Even : stats.recent25Odd;
  const activeParity = stats.currentParity as "even" | "odd" | "none";
  const candidateStreak = candidateSide === "even" ? activeParity === "odd" && stats.currentLength >= 2 : activeParity === "even" && stats.currentLength >= 2;
  const leader = (values: number[]) => {
    const max = Math.max(...values);
    return max > 0 ? values.findIndex((value) => value === max) : null;
  };
  const topEvenDigit = leader(stats.evenDigits);
  const topOddDigit = leader(stats.oddDigits);
  const statusText = stats.direction === "wait" ? "WAIT" : stats.direction.toUpperCase();
  const statusDescription = stats.direction === "wait"
    ? "The current observations do not meet every configured condition."
    : `Observed ${stats.direction} bias is supported by the recent ${stats.direction === "even" ? "odd" : "even"} streak.`;
  const lastFlow = stats.parities.slice(-28);

  return (
    <div className="even-odd-workspace">
      <div className="signal-controls even-odd-controls">
        <label><span>INDEX</span><select value={analysisSymbol} onChange={(event) => setAnalysisSymbol(event.target.value)}>{analyzerGroups.map((group) => <optgroup key={group.label} label={group.label}>{group.symbols.map((symbol) => <option key={symbol} value={symbol}>{symbol}</option>)}</optgroup>)}</select></label>
        <div className="signal-window"><span>ANALYSIS WINDOW</span><strong>1,000 ticks</strong><small>Rolling live sample</small></div>
        <div className="signal-symbol-note"><span>SELECTED MARKET</span><strong>{analysisSymbol}</strong><small>Last quote {analysis.quote}</small></div>
        <div className="signal-status even-odd-inline"><i /> {connectionLabel}</div>
      </div>

      <div className={`signal-hero ${stats.direction} even-odd-hero`}>
        <div><span className="signal-hero-kicker"><i /> PARITY OBSERVATION SIGNAL</span><strong>{statusText}</strong><p>{statusDescription}</p></div>
        <div className="signal-score"><small>ANALYSIS SCORE</small><b>{stats.score}</b><span>not a win probability</span></div>
        <div className="signal-action"><small>CANDIDATE ENTRY OBSERVATION</small><strong>{stats.direction === "wait" ? "Wait for conditions" : `Wait for ${stats.direction} confirmation`}</strong><span>{stats.direction === "wait" ? "No entry condition is active" : "A fresh tick should confirm the selected parity"}</span></div>
      </div>

      <div className="signal-metric-grid">
        <div className="signal-metric parity-even"><small>EVEN DIGITS</small><strong>{stats.evenPct.toFixed(1)}%</strong><span>{stats.evenCount} ticks <b className={stats.evenEdge >= 0 ? "positive" : "negative"}>{stats.evenEdge >= 0 ? "+" : ""}{stats.evenEdge.toFixed(1)}pp vs 50%</b></span></div>
        <div className="signal-metric parity-odd"><small>ODD DIGITS</small><strong>{stats.oddPct.toFixed(1)}%</strong><span>{stats.oddCount} ticks <b className={stats.oddEdge >= 0 ? "positive" : "negative"}>{stats.oddEdge >= 0 ? "+" : ""}{stats.oddEdge.toFixed(1)}pp vs 50%</b></span></div>
        <div className="signal-metric"><small>CURRENT RUN</small><strong>{stats.currentLength || 0}</strong><span>{activeParity === "none" ? "Waiting for ticks" : `${activeParity} digits`} · longest E {stats.longestEven} / O {stats.longestOdd}</span></div>
        <div className="signal-metric"><small>LAST DIGIT</small><strong>{analysis.digits.at(-1) ?? "-"}</strong><span>{analysis.digits.at(-1) !== undefined ? (analysis.digits.at(-1)! % 2 === 0 ? "Even" : "Odd") : "Waiting"} · pointer is live</span></div>
      </div>

      <div className="signal-analysis-grid">
        <section className="signal-box parity-distribution-box"><header><div><span className="signal-box-kicker">PARITY VS EXPECTED</span><h2>Observed distribution</h2></div><small>50 / 50 reference</small></header><div className="parity-distribution-row"><div><span><i className="parity-dot even" /> Even</span><b>{stats.evenPct.toFixed(1)}%</b></div><div className="bias-track"><i className="even" style={{ width: `${Math.min(stats.evenPct, 100)}%` }} /><em style={{ left: "50%" }} /></div><small>Expected 50.0%</small></div><div className="parity-distribution-row"><div><span><i className="parity-dot odd" /> Odd</span><b>{stats.oddPct.toFixed(1)}%</b></div><div className="bias-track"><i className="odd" style={{ width: `${Math.min(stats.oddPct, 100)}%` }} /><em style={{ left: "50%" }} /></div><small>Expected 50.0%</small></div><div className="parity-balance"><span>Balance gap</span><b>{Math.abs(stats.evenPct - stats.oddPct).toFixed(1)}pp</b><small>{stats.evenPct >= stats.oddPct ? "Even is leading" : "Odd is leading"}</small></div></section>

        <section className="signal-box"><header><div><span className="signal-box-kicker">PARITY STREAK MONITOR</span><h2>Winning and losing runs</h2></div><small>Live sequence</small></header><div className="streak-summary"><div><span className="streak-side even" /><b>Even</b><strong>{stats.longestEven}</strong><small>longest</small></div><div><span className="streak-side odd" /><b>Odd</b><strong>{stats.longestOdd}</strong><small>longest</small></div><div><span className="streak-side current" /><b>Current</b><strong>{stats.currentLength}</strong><small>{stats.currentParity === "none" ? "waiting" : `${stats.currentParity} run`}</small></div></div><div className="recent-rate-grid"><span>Last 25 Even <b>{stats.recent25Even.toFixed(1)}%</b></span><span>Last 100 Even <b>{stats.recent100Even.toFixed(1)}%</b></span><span>Last 25 Odd <b>{stats.recent25Odd.toFixed(1)}%</b></span><span>Last 100 Odd <b>{stats.recent100Odd.toFixed(1)}%</b></span></div></section>
      </div>

      <div className="signal-analysis-grid second-row">
        <section className="signal-box"><header><div><span className="signal-box-kicker">DIGIT PARITY COMPARISON</span><h2>Even and odd contributors</h2></div><small>Most observed digit</small></header><div className="contributor-columns"><div><h3><i className="over-dot" /> Even {topEvenDigit === null ? "" : `· digit ${topEvenDigit}`}</h3>{[0, 2, 4, 6, 8].map((digit) => <div className="contributor-row" key={`even-${digit}`}><span>{digit}</span><div><i className="even" style={{ width: `${stats.evenCount ? (stats.evenDigits[digit] / stats.evenCount) * 100 : 0}%` }} /></div><b>{stats.evenDigits[digit]}</b></div>)}</div><div><h3><i className="under-dot" /> Odd {topOddDigit === null ? "" : `· digit ${topOddDigit}`}</h3>{[1, 3, 5, 7, 9].map((digit) => <div className="contributor-row" key={`odd-${digit}`}><span>{digit}</span><div><i className="odd" style={{ width: `${stats.oddCount ? (stats.oddDigits[digit] / stats.oddCount) * 100 : 0}%` }} /></div><b>{stats.oddDigits[digit]}</b></div>)}</div></div></section>

        <section className="signal-box signal-conditions"><header><div><span className="signal-box-kicker">SIGNAL CONDITIONS</span><h2>{candidateSide.toUpperCase()} checklist</h2></div><small>{stats.dataReady ? "Sample ready" : `${stats.total}/100 ticks`}</small></header><div className="condition-list"><div className={stats.dataReady ? "met" : "pending"}><i />1,000-tick sample is ready <b>{stats.dataReady ? "MET" : "COLLECTING"}</b></div><div className={candidateEdge >= 4 ? "met" : "pending"}><i />Parity edge is at least +4.0pp <b>{candidateEdge >= 4 ? "MET" : `${candidateEdge.toFixed(1)}pp`}</b></div><div className={candidateRecent >= 50 ? "met" : "pending"}><i />Last 25 ticks support direction <b>{candidateRecent >= 50 ? "MET" : "WAIT"}</b></div><div className={candidateStreak ? "met" : "pending"}><i />Opposite parity streak reaches 2+ <b>{candidateStreak ? "MET" : "WAIT"}</b></div></div><div className="condition-note">A signal appears only when every condition is met. Even and odd are calculated from the last digit of each observed quote.</div></section>
      </div>

      <section className="signal-box signal-flow-box"><header><div><span className="signal-box-kicker">LAST DIGIT PARITY FLOW</span><h2>Recent Even / Odd appearances</h2></div><small>{stats.total} observed ticks</small></header><div className="signal-flow"><div className="flow-line">{lastFlow.length ? lastFlow.map((parity, index) => <span className={parity} key={`${parity}-${index}`}>{parity === "even" ? "E" : "O"}</span>) : <small>Waiting for live ticks...</small>}</div><div className="flow-legend"><span><i className="even" /> E = Even</span><span><i className="odd" /> O = Odd</span></div></div></section>
      {analysis.error && <div className="analysis-error">{analysis.error} Check that your network allows secure WebSocket connections to Deriv.</div>}
      <footer className="signal-disclaimer">Even / Odd Signal AI is informational only. It describes observed digit history and transparent conditions; it does not guarantee the next outcome or place trades.</footer>
    </div>
  );
}

function DigitFrequencyWorkspace({
  analysis,
  analysisSymbol,
  setAnalysisSymbol,
}: {
  analysis: AnalysisState;
  analysisSymbol: string;
  setAnalysisSymbol: (symbol: string) => void;
}) {
  const stats = getDigitFrequencyAnalysis(analysis.digits);
  const connectionLabel = analysis.status === "live" ? "LIVE" : analysis.status === "connecting" ? "CONNECTING" : analysis.status === "error" ? "OFFLINE" : "READY";
  const lastDigits = analysis.digits.slice(-30);
  const hotLabel = stats.hottest === null ? "--" : `${stats.hottest}`;
  const coldLabel = stats.coldest === null ? "--" : `${stats.coldest}`;
  const signalTitle = stats.signal === "collecting" ? "COLLECTING" : stats.signal === "spread" ? "WIDE SPREAD" : stats.signal === "recent" ? "RECENT SHIFT" : "BALANCED";
  const signalText = stats.signal === "collecting" ? "Collecting enough observed ticks before reading frequency." : stats.signal === "spread" ? `Digit ${hotLabel} is leading the full sample while ${coldLabel} is the quietest.` : stats.signal === "recent" ? `The latest 25 ticks are moving differently from the full sample.` : "The observed digits are close to their rolling baseline.";

  return (
    <div className="digit-frequency-workspace">
      <div className="signal-controls frequency-controls">
        <label><span>INDEX</span><select value={analysisSymbol} onChange={(event) => setAnalysisSymbol(event.target.value)}>{analyzerGroups.map((group) => <optgroup key={group.label} label={group.label}>{group.symbols.map((symbol) => <option key={symbol} value={symbol}>{symbol}</option>)}</optgroup>)}</select></label>
        <div className="signal-window"><span>ANALYSIS WINDOW</span><strong>1,000 ticks</strong><small>Rolling live sample</small></div>
        <div className="signal-symbol-note"><span>SELECTED MARKET</span><strong>{analysisSymbol}</strong><small>Last quote {analysis.quote}</small></div>
        <div className="signal-status frequency-inline"><i /> {connectionLabel}</div>
      </div>

      <div className={`signal-hero frequency-hero ${stats.signal}`}>
        <div><span className="signal-hero-kicker"><i /> DIGIT DISTRIBUTION</span><strong>{signalTitle}</strong><p>{signalText}</p></div>
        <div className="signal-score"><small>FREQUENCY SPREAD</small><b>{stats.balanceGap}</b><span>count gap, not probability</span></div>
        <div className="signal-action"><small>HOT / COLD OBSERVATION</small><strong>Digit {hotLabel} / Digit {coldLabel}</strong><span>Use the distribution as context, not as a guaranteed prediction.</span></div>
      </div>

      <div className="signal-metric-grid">
        <div className="signal-metric frequency-hot"><small>MOST APPEARING</small><strong>{hotLabel}</strong><span>{stats.hottest === null ? "Waiting for ticks" : `${stats.counts[stats.hottest]} hits · ${stats.percentages[stats.hottest].toFixed(1)}%`}</span></div>
        <div className="signal-metric frequency-cold"><small>LEAST APPEARING</small><strong>{coldLabel}</strong><span>{stats.coldest === null ? "Waiting for ticks" : `${stats.counts[stats.coldest]} hits · ${stats.percentages[stats.coldest].toFixed(1)}%`}</span></div>
        <div className="signal-metric"><small>RECENT HOT DIGIT</small><strong>{stats.recentHot === null ? "-" : stats.recentHot}</strong><span>Last 25 ticks · {stats.recentHot === null ? "0" : stats.recent25[stats.recentHot]} appearances</span></div>
        <div className="signal-metric"><small>LAST DIGIT</small><strong>{analysis.digits.at(-1) ?? "-"}</strong><span>{analysis.digits.at(-1) !== undefined ? "Latest observed digit" : "Waiting for live ticks"}</span></div>
      </div>

      <section className="signal-box frequency-board"><header><div><span className="signal-box-kicker">DIGIT FREQUENCY BOARD</span><h2>Every digit in the rolling sample</h2></div><small>{stats.total} observed ticks</small></header><div className="frequency-digit-grid">{stats.counts.map((count, digit) => { const pct = stats.percentages[digit]; const recentPct = percent(stats.recent25[digit], 25); const isHot = digit === stats.hottest && stats.total > 0; const isCold = digit === stats.coldest && stats.total > 0; return <div className={`frequency-digit ${isHot ? "hot" : ""} ${isCold ? "cold" : ""}`} key={digit}><div className="frequency-digit-head"><b>{digit}</b><span>{pct.toFixed(1)}%</span></div><div className="frequency-column"><i style={{ height: `${Math.max(pct * 4, count ? 5 : 0)}%` }} /></div><small>{count} hits</small><em>{recentPct.toFixed(0)}% recent</em>{isHot && <strong>HOT</strong>}{isCold && <strong>QUIET</strong>}</div>; })}</div></section>

      <div className="signal-analysis-grid">
        <section className="signal-box"><header><div><span className="signal-box-kicker">RECENCY COMPARISON</span><h2>Latest 25 vs latest 100</h2></div><small>Appearance share</small></header>{stats.counts.map((count, digit) => <div className="recency-row" key={digit}><span>{digit}</span><div><i className="full" style={{ width: `${stats.total ? (count / stats.total) * 100 : 0}%` }} /><i className="recent" style={{ width: `${stats.recent100.length ? (stats.recent100[digit] / stats.recent100.length) * 100 : 0}%` }} /></div><small>{stats.recent25.length ? ((stats.recent25[digit] / stats.recent25.length) * 100).toFixed(0) : "0"}% / {stats.recent100.length ? ((stats.recent100[digit] / stats.recent100.length) * 100).toFixed(0) : "0"}%</small></div>)}</section>
        <section className="signal-box frequency-conditions"><header><div><span className="signal-box-kicker">FREQUENCY CONDITIONS</span><h2>What the sample is showing</h2></div><small>Transparent read</small></header><div className="condition-list"><div className={stats.dataReady ? "met" : "pending"}><i />1,000-tick sample is ready <b>{stats.dataReady ? "MET" : "COLLECTING"}</b></div><div className={stats.balanceGap >= 15 ? "met" : "pending"}><i />Full-sample spread reaches 15+ hits <b>{stats.balanceGap >= 15 ? "MET" : `${stats.balanceGap} hits`}</b></div><div className={stats.recentHotLead >= 5 ? "met" : "pending"}><i />Recent 25 has a 5+ hit leader gap <b>{stats.recentHotLead >= 5 ? "MET" : `${stats.recentHotLead} hits`}</b></div><div className={stats.hottest !== null && stats.coldest !== null && stats.hottest !== stats.coldest ? "met" : "pending"}><i />Hot and quiet digits identified <b>{stats.hottest !== null ? "MET" : "WAIT"}</b></div></div><p className="condition-note">A frequency label describes the observed sample. It does not mean a digit is due to appear or due to stay absent.</p></section>
      </div>

      <section className="signal-box signal-flow-box"><header><div><span className="signal-box-kicker">LAST DIGIT SEQUENCE</span><h2>Recent digit appearances</h2></div><small>Newest on the right</small></header><div className="digit-sequence">{lastDigits.length ? lastDigits.map((digit, index) => <span className={digit === stats.hottest ? "hot" : digit === stats.coldest ? "cold" : ""} key={`${digit}-${index}`}>{digit}</span>) : <small>Waiting for live ticks...</small>}</div><div className="flow-legend"><span><i className="sequence-hot" /> Hot digit</span><span><i className="sequence-cold" /> Quiet digit</span><span><i className="sequence-normal" /> Other observed digit</span></div></section>
      {analysis.error && <div className="analysis-error">{analysis.error} Check that your network allows secure WebSocket connections to Deriv.</div>}
      <footer className="signal-disclaimer">Digit Frequency Signal AI is informational only. It summarizes observed tick history and recency; it does not predict or guarantee the next digit.</footer>
    </div>
  );
}

function StreakSignalWorkspace({
  analysis,
  analysisSymbol,
  setAnalysisSymbol,
  target,
  setTarget,
}: {
  analysis: AnalysisState;
  analysisSymbol: string;
  setAnalysisSymbol: (symbol: string) => void;
  target: number;
  setTarget: (target: number) => void;
}) {
  const stats = getStreakAnalysis(analysis.digits, target);
  const connectionLabel = analysis.status === "live" ? "LIVE" : analysis.status === "connecting" ? "CONNECTING" : analysis.status === "error" ? "OFFLINE" : "READY";
  const currentLabel = stats.currentDigit === null ? "--" : `${stats.currentDigit}`;
  const signalTitle = stats.signal === "collecting" ? "COLLECTING" : stats.signal === "active" ? "ACTIVE RUN" : stats.signal === "watch" ? "WATCH" : "QUIET";
  const lastDigits = analysis.digits.slice(-32);
  const longestRun = stats.longestLength;
  const currentParity = stats.parity.currentParity as "even" | "odd" | "none";
  const currentSide = stats.direction.currentSide as Side | "none";

  return (
    <div className="streak-workspace">
      <div className="signal-controls streak-controls">
        <label><span>INDEX</span><select value={analysisSymbol} onChange={(event) => setAnalysisSymbol(event.target.value)}>{analyzerGroups.map((group) => <optgroup key={group.label} label={group.label}>{group.symbols.map((symbol) => <option key={symbol} value={symbol}>{symbol}</option>)}</optgroup>)}</select></label>
        <label><span>OVER / UNDER TARGET</span><select value={target} onChange={(event) => setTarget(Number(event.target.value))}>{Array.from({ length: 10 }, (_, digit) => <option key={digit} value={digit}>{digit}</option>)}</select></label>
        <div className="signal-window"><span>ANALYSIS WINDOW</span><strong>1,000 ticks</strong><small>Rolling live sample</small></div>
        <div className="signal-status streak-inline"><i /> {connectionLabel}</div>
      </div>

      <div className={`signal-hero streak-hero ${stats.signal}`}>
        <div><span className="signal-hero-kicker"><i /> STREAK OBSERVATION</span><strong>{signalTitle}</strong><p>{stats.currentDigit === null ? "Waiting for the first live digit." : `Digit ${currentLabel} has appeared ${stats.currentLength} time${stats.currentLength === 1 ? "" : "s"} consecutively.`}</p></div>
        <div className="signal-score"><small>LONGEST EXACT RUN</small><b>{longestRun}</b><span>observed in sample</span></div>
        <div className="signal-action"><small>CONTEXT AROUND TARGET {target}</small><strong>{currentSide === "none" ? "Waiting for direction" : `${currentSide} ${target} run`}</strong><span>Parity: {currentParity === "none" ? "waiting" : `${currentParity} run`} · transitions in last 25: {stats.transitions}</span></div>
      </div>

      <div className="signal-metric-grid">
        <div className="signal-metric streak-current"><small>CURRENT EXACT RUN</small><strong>{stats.currentLength}</strong><span>{stats.currentDigit === null ? "No current digit" : `Digit ${stats.currentDigit}`} · live</span></div>
        <div className="signal-metric"><small>LONGEST EXACT RUN</small><strong>{stats.longestLength}</strong><span>Digit {stats.longestDigit} · rolling sample</span></div>
        <div className="signal-metric"><small>PARITY RUN</small><strong>{stats.parity.currentLength}</strong><span>{currentParity === "none" ? "Waiting" : currentParity} · longest E {stats.parity.longestEven} / O {stats.parity.longestOdd}</span></div>
        <div className="signal-metric"><small>OVER / UNDER RUN</small><strong>{stats.direction.currentLength}</strong><span>{currentSide === "none" ? "Waiting" : `${currentSide} ${target}`} · target context</span></div>
      </div>

      <div className="signal-analysis-grid">
        <section className="signal-box exact-streak-board"><header><div><span className="signal-box-kicker">EXACT DIGIT RUNS</span><h2>Longest streak by digit</h2></div><small>0 through 9</small></header><div className="exact-run-grid">{stats.longestByDigit.map((length, digit) => <div className={`${digit === stats.currentDigit ? "current" : ""} ${digit === stats.longestDigit ? "record" : ""}`} key={digit}><span>{digit}</span><strong>{length}</strong><small>{digit === stats.currentDigit ? "CURRENT" : digit === stats.longestDigit ? "RECORD" : "longest"}</small></div>)}</div></section>
        <section className="signal-box"><header><div><span className="signal-box-kicker">RUN CONTEXT</span><h2>Parity and direction streaks</h2></div><small>Current sample</small></header><div className="run-context-list"><div><span className="context-icon even" /><div><strong>Parity</strong><small>{currentParity === "none" ? "Waiting" : `${currentParity} for ${stats.parity.currentLength} ticks`}</small></div><b>{stats.parity.currentLength}</b></div><div><span className="context-icon over" /><div><strong>Over / Under {target}</strong><small>{currentSide === "none" ? "Waiting" : `${currentSide} for ${stats.direction.currentLength} ticks`}</small></div><b>{stats.direction.currentLength}</b></div><div><span className="context-icon current" /><div><strong>Exact digit</strong><small>{stats.currentDigit === null ? "Waiting" : `digit ${stats.currentDigit} repeats`}</small></div><b>{stats.currentLength}</b></div></div><p className="condition-note">A streak is a description of consecutive observed outcomes. It is not evidence that a reversal or continuation is guaranteed.</p></section>
      </div>

      <section className="signal-box signal-flow-box"><header><div><span className="signal-box-kicker">STREAK TIMELINE</span><h2>Recent digit sequence with run context</h2></div><small>Newest on the right</small></header><div className="streak-timeline">{lastDigits.length ? lastDigits.map((digit, index) => <span className={`${digit === stats.currentDigit ? "current" : ""} ${digit % 2 === 0 ? "even" : "odd"}`} key={`${digit}-${index}`}><b>{digit}</b><small>{index + 1}</small></span>) : <small>Waiting for live ticks...</small>}</div><div className="flow-legend"><span><i className="sequence-current" /> Current digit</span><span><i className="sequence-even" /> Even</span><span><i className="sequence-odd" /> Odd</span></div></section>
      {analysis.error && <div className="analysis-error">{analysis.error} Check that your network allows secure WebSocket connections to Deriv.</div>}
      <footer className="signal-disclaimer">Streaks Signal AI is informational only. It measures consecutive observed digits, parity, and target-side runs; it does not guarantee a reversal or continuation.</footer>
    </div>
  );
}

function MarketAnalysisWorkspace({ marketData }: { marketData: Record<string, MarketFeed> }) {
  const liveCount = allAnalyzerSymbols.filter((symbol) => marketData[symbol]?.status === "live").length;
  return (
    <div className="market-analysis-workspace">
      <div className="market-analysis-heading">
        <div>
          <span className="placeholder-kicker">MULTI-MARKET INTELLIGENCE</span>
          <h2>Analysis Tool</h2>
          <p>Compare the current digit distribution, recent sequence, parity, direction, and Over 4 / Under 5 context across every supported market.</p>
        </div>
        <div className="market-analysis-live"><i /> {liveCount}/{allAnalyzerSymbols.length} MARKETS LIVE <small>Last {ANALYSIS_TICK_COUNT.toLocaleString()}</small></div>
      </div>
      <div className="market-analysis-note"><span><i /> Each card starts collecting immediately from its own live tick stream.</span><small>Green = most · Blue = 2nd most · Red = least · Yellow = 2nd least</small></div>
      <div className="market-analysis-grid">
        {allAnalyzerSymbols.map((symbol) => {
          const feed = marketData[symbol] || blankMarketFeed();
          const stats = getMarketAnalysis(feed);
          const ready = stats.total > 0;
          return (
            <article className={`market-analysis-card ${feed.status}`} key={symbol}>
              <header className="market-card-header">
                <div><h3>{marketDisplayName(symbol)}</h3><strong>{feed.quote}</strong></div>
                <span className="market-card-window">Last {ANALYSIS_TICK_COUNT.toLocaleString()}</span>
              </header>
              <div className="market-card-digits">
                {stats.counts.map((count, digit) => <div className={`market-digit ${digit === stats.hottest && ready ? "hot" : ""} ${digit === stats.secondHottest && ready ? "second-hot" : ""} ${digit === stats.coldest && ready ? "cold" : ""} ${digit === stats.secondColdest && ready ? "second-cold" : ""} ${feed.digits.at(-1) === digit ? "pointer-active" : ""}`} key={digit} title={`${count} hits`}><b>{digit}</b><small>{stats.percentages[digit].toFixed(1)}%</small>{feed.digits.at(-1) === digit && <i className="market-digit-pointer" />}</div>)}
              </div>
              <div className="market-pointer-row"><span className="market-pointer-line" /><span className="market-pointer-label"><i /> LIVE POINTER <b>{feed.digits.at(-1) ?? "-"}</b></span><span className="market-pointer-line" /></div>
              <div className="market-last-digits">{stats.lastDigits.length ? stats.lastDigits.map((digit, index) => <span className={digit === stats.hottest ? "hot" : digit === stats.coldest ? "cold" : ""} key={`${digit}-${index}`}>{digit}</span>) : <small>Waiting for tick history...</small>}</div>
              <div className="market-bars">
                <div className="market-bar-row"><span>Even: <b>{stats.evenPct.toFixed(1)}%</b></span><span>Odd: <b>{stats.oddPct.toFixed(1)}%</b></span><div><i className="bar-even" style={{ width: `${stats.evenPct}%` }} /><i className="bar-odd" style={{ width: `${stats.oddPct}%` }} /></div></div>
                <div className="market-bar-row"><span>Rise: <b>{stats.risePct.toFixed(1)}%</b></span><span>Fall: <b>{stats.fallPct.toFixed(1)}%</b></span><div><i className="bar-rise" style={{ width: `${stats.risePct}%` }} /><i className="bar-fall" style={{ width: `${stats.fallPct}%` }} /></div></div>
                <div className="market-bar-row"><span>Over 4: <b>{stats.overPct.toFixed(1)}%</b></span><span>Under 5: <b>{stats.underPct.toFixed(1)}%</b></span><div><i className="bar-over" style={{ width: `${stats.overPct}%` }} /><i className="bar-under" style={{ width: `${stats.underPct}%` }} /></div></div>
              </div>
              <footer className="market-card-footer"><span>{feed.status === "live" ? "LIVE TICKS" : feed.status === "connecting" ? "CONNECTING" : "WAITING"}</span><small>{feed.epoch ? new Date(feed.epoch * 1000).toLocaleTimeString() : "--"}</small></footer>
            </article>
          );
        })}
      </div>
      <footer className="signal-disclaimer">Multi-market analysis is calculated independently for each observed feed. It summarizes recent data and does not predict or guarantee the next digit.</footer>
    </div>
  );
}

type AutoStrategy = {
  id: string;
  name: string;
  type: string;
  description: string;
  condition: string;
  color: "cyan" | "violet" | "gold";
};

const autoStrategies: AutoStrategy[] = [
  { id: "parity-reversal", name: "Parity Reversal", type: "Even / Odd", description: "Waits for a strong parity edge and an opposing run before a paper entry observation.", condition: "Edge >= 4pp + opposite run >= 2" , color: "cyan" },
  { id: "over-under-shift", name: "Over / Under Shift", type: "Over / Under", description: "Waits for a directional edge, recent confirmation, and a reversal-style opposing streak.", condition: "Edge >= 4pp + recent support + run", color: "violet" },
  { id: "frequency-watch", name: "Frequency Watch", type: "Digit Frequency", description: "Monitors a wide full-sample spread and a meaningful recent leader before logging an observation.", condition: "Spread >= 15 hits + recent leader", color: "gold" },
];

function getAutoSignal(strategy: AutoStrategy, digits: number[], target: number) {
  if (strategy.id === "parity-reversal") {
    const stats = getEvenOddAnalysis(digits);
    return { active: stats.direction !== "wait", label: stats.direction === "wait" ? "WAIT" : stats.direction.toUpperCase(), detail: `${stats.evenPct.toFixed(1)}% Even / ${stats.oddPct.toFixed(1)}% Odd`, ready: stats.dataReady };
  }
  if (strategy.id === "over-under-shift") {
    const stats = getOverUnderAnalysis(digits, target);
    return { active: stats.direction !== "wait", label: stats.direction === "wait" ? "WAIT" : `${stats.direction.toUpperCase()} ${target}`, detail: `${stats.overPct.toFixed(1)}% Over / ${stats.underPct.toFixed(1)}% Under`, ready: stats.dataReady };
  }
  const stats = getDigitFrequencyAnalysis(digits);
  return { active: stats.signal === "spread" || stats.signal === "recent", label: stats.signal === "collecting" ? "COLLECTING" : "WATCH", detail: stats.hottest === null ? "Waiting for digit distribution" : `Hot ${stats.hottest} / quiet ${stats.coldest}`, ready: stats.dataReady };
}

function AutoTradingWorkspace({
  analysis,
  analysisSymbol,
  setAnalysisSymbol,
  target,
  setTarget,
  onNotify,
}: {
  analysis: AnalysisState;
  analysisSymbol: string;
  setAnalysisSymbol: (symbol: string) => void;
  target: number;
  setTarget: (target: number) => void;
  onNotify: (message: string) => void;
}) {
  const [strategyId, setStrategyId] = useState(autoStrategies[0].id);
  const [armed, setArmed] = useState(false);
  const [paperOnly, setPaperOnly] = useState(true);
  const [stake, setStake] = useState("1.00");
  const [logs, setLogs] = useState<{ id: number; time: string; label: string; detail: string; status: string }[]>([]);
  const [lastTrigger, setLastTrigger] = useState("");
  const strategy = autoStrategies.find((item) => item.id === strategyId) || autoStrategies[0];
  const signal = getAutoSignal(strategy, analysis.digits, target);
  const activeLabel = analysis.status === "live" ? "LIVE DATA" : analysis.status === "connecting" ? "CONNECTING" : "WAITING FOR DATA";

  useEffect(() => {
    if (!armed || !paperOnly || analysis.status !== "live" || !signal.ready || !signal.active) return;
    const key = `${strategyId}-${analysis.epoch}-${signal.label}`;
    if (key === lastTrigger) return;
    setLastTrigger(key);
    setLogs((current) => [{ id: Date.now(), time: new Date().toLocaleTimeString(), label: signal.label, detail: `${strategy.name} · ${signal.detail}`, status: "PAPER ENTRY" }, ...current].slice(0, 8));
  }, [armed, paperOnly, analysis.status, analysis.epoch, signal.ready, signal.active, signal.label, signal.detail, strategy.name, strategyId, lastTrigger]);

  const toggleArmed = () => {
    setArmed((current) => !current);
    onNotify(armed ? "Auto strategy paused" : "Paper strategy armed");
  };

  return (
    <section className="auto-workspace" aria-label="Auto trading workspace">
      <div className="auto-heading"><div><span className="placeholder-kicker">CONDITION-BASED AUTOMATION</span><h1>Auto Trading</h1><p>Arm a strategy to monitor live observations and log paper entries whenever its conditions are met.</p></div><div className={`auto-feed-status ${analysis.status}`}><i /> {activeLabel}</div></div>
      <div className="auto-safety-banner"><Icon name="shield" className="h-5 w-5" /><div><strong>Safe simulation mode</strong><span>Entries are logged as paper trades. Real-money execution is locked until a secure broker connection and explicit trading authorization are added.</span></div><b>NO LIVE ORDERS</b></div>
      <div className="auto-layout">
        <div className="auto-main-column">
          <section className="auto-signal-panel">
            <div className="auto-signal-top"><div><span className="signal-box-kicker">CURRENT OBSERVATION</span><h2>{signal.label}</h2><p>{signal.detail}</p></div><div className={`auto-signal-badge ${signal.active ? "active" : ""}`}>{signal.active ? "CONDITIONS MET" : signal.ready ? "WAIT" : "COLLECTING"}</div></div>
            <div className="auto-signal-meta"><span><small>MARKET</small><b>{analysisSymbol}</b></span><span><small>STRATEGY</small><b>{strategy.type}</b></span><span><small>WINDOW</small><b>{analysis.digits.length.toLocaleString()} / 1,000</b></span><span><small>STAKE</small><b>${Number(stake || 0).toFixed(2)}</b></span></div>
          </section>
          <section className="auto-strategy-grid">
            {autoStrategies.map((item) => <button key={item.id} className={`auto-strategy-card ${item.color} ${strategyId === item.id ? "selected" : ""}`} onClick={() => setStrategyId(item.id)}><span className="auto-strategy-icon"><Icon name={item.id === "parity-reversal" ? "signal" : item.id === "over-under-shift" ? "sparkles" : "layers"} /></span><div><strong>{item.name}</strong><small>{item.type}</small><p>{item.description}</p></div><i className="auto-select-dot" /></button>)}
          </section>
          <section className="auto-log-panel"><header><div><span className="signal-box-kicker">AUTOMATION LOG</span><h2>Condition events</h2></div><small>{logs.length} paper events</small></header>{logs.length ? <div className="auto-log-list">{logs.map((log) => <div className="auto-log-row" key={log.id}><span className="auto-log-dot" /><div><strong>{log.label}</strong><small>{log.detail}</small></div><b>{log.status}</b><time>{log.time}</time></div>)}</div> : <div className="auto-empty"><Icon name="signal" /><p>No paper entries yet. Arm the strategy and wait for every condition to align.</p></div>}</section>
        </div>
        <aside className="auto-control-panel"><div className="auto-control-header"><span className="signal-box-kicker">STRATEGY CONTROL</span><span className={`arm-indicator ${armed ? "armed" : ""}`}><i /> {armed ? "ARMED" : "PAUSED"}</span></div><label className="auto-control-label"><span>MARKET</span><select value={analysisSymbol} onChange={(event) => setAnalysisSymbol(event.target.value)}>{analyzerGroups.map((group) => <optgroup label={group.label} key={group.label}>{group.symbols.map((symbol) => <option value={symbol} key={symbol}>{symbol}</option>)}</optgroup>)}</select></label><label className="auto-control-label"><span>TARGET DIGIT</span><select value={target} onChange={(event) => setTarget(Number(event.target.value))}>{Array.from({ length: 10 }, (_, digit) => <option value={digit} key={digit}>{digit}</option>)}</select></label><label className="auto-control-label"><span>PAPER STAKE</span><div className="stake-input"><span>$</span><input value={stake} onChange={(event) => setStake(event.target.value)} inputMode="decimal" /></div></label><div className="selected-strategy"><small>SELECTED STRATEGY</small><strong>{strategy.name}</strong><span>{strategy.condition}</span></div><label className="paper-toggle"><input type="checkbox" checked={paperOnly} onChange={(event) => setPaperOnly(event.target.checked)} /><span className="toggle-track" /><span>Paper execution only</span></label><button className={`arm-button ${armed ? "pause" : ""}`} onClick={toggleArmed}>{armed ? "Pause strategy" : "Arm paper strategy"}<Icon name={armed ? "arrow" : "sparkles"} className="h-4 w-4" /></button><div className="auto-control-note"><Icon name="shield" className="h-4 w-4" /><span>Auto Trader will never send a real order from this workspace.</span></div></aside>
      </div>
    </section>
  );
}

function LandingPage({ onEnter }: { onEnter: () => void }) {
  const [activeFeature, setActiveFeature] = useState("Live intelligence");
  const landingFeatures = [
    { title: "Live intelligence", icon: "signal" as IconName, text: "Watch digit behavior, parity, streaks, and market movement from one focused workspace.", accent: "cyan" },
    { title: "Bot Builder", icon: "gear" as IconName, text: "Start with a strategy template, shape the conditions, and keep your workflow visual.", accent: "violet" },
    { title: "Market control", icon: "layers" as IconName, text: "Move between 1HZ, R_, and JD indices without losing the context around your setup.", accent: "gold" },
  ];
  const activeFeatureData = landingFeatures.find((feature) => feature.title === activeFeature) || landingFeatures[0];

  return (
    <div className="landing-page dbtraders-landing">
      <header className="landing-nav">
        <button className="landing-brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span className="landing-brand-mark">I</span>
          <span><b>digittools</b><em>your deriv partner</em></span>
        </button>
        <nav className="landing-links" aria-label="Landing navigation">
          <a href="#platform">Features</a>
          <a href="#intelligence">Signal AI</a>
          <a href="#bots">Trading bots</a>
          <a href="#method">Resources</a>
        </nav>
        <div className="landing-nav-actions"><button className="landing-login" onClick={() => setActiveFeature("Live intelligence")}>Log in</button><span className="landing-live"><i /> Live feed</span><button onClick={onEnter}>Launch workspace <Icon name="arrow" className="h-4 w-4" /></button></div>
      </header>

      <main>
        <section className="landing-hero">
          <div className="landing-hero-glow" />
          <div className="landing-hero-content">
            <div className="landing-eyebrow"><span className="eyebrow-line" /> YOUR ULTIMATE DERIV PARTNER <span className="eyebrow-chip">TRADER-FIRST TOOLS</span></div>
            <h1>We build traders.<br /><span>You build the strategy.</span></h1>
            <p>Bring your Deriv workflow into one clear place with live market analysis, no-code bot templates, advanced strategy tools, and a community-ready trading workspace.</p>
            <div className="landing-hero-actions"><button className="landing-primary" onClick={onEnter}>Start building free <Icon name="arrow" className="h-4 w-4" /></button><a className="landing-secondary" href="#platform">See what you can do <span>↓</span></a></div>
            <div className="landing-proof"><span><i /> No coding required</span><span><i /> Free strategy library</span><span><i /> Live market context</span></div>
          </div>
          <div className="landing-hero-console" aria-label="Live market preview">
            <div className="console-top"><span><i /> LIVE MARKET PULSE</span><small>STREAM 001 / 003</small></div>
            <div className="console-market"><div><small>VOLATILITY 100 (1s)</small><strong>9,470.89</strong></div><span className="console-change">+1.84%</span></div>
            <div className="console-chart"><div className="chart-grid" /><svg viewBox="0 0 430 150" preserveAspectRatio="none"><defs><linearGradient id="landingChart" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#51e4da" stopOpacity=".45" /><stop offset="1" stopColor="#51e4da" stopOpacity="0" /></linearGradient></defs><path d="M0 129 C28 111 41 120 66 99 S106 115 129 76 S174 92 198 61 S238 83 267 47 S314 81 336 54 S380 75 430 17 L430 150 L0 150 Z" fill="url(#landingChart)" /><path d="M0 129 C28 111 41 120 66 99 S106 115 129 76 S174 92 198 61 S238 83 267 47 S314 81 336 54 S380 75 430 17" fill="none" stroke="#58e2d6" strokeWidth="3" /></svg><span className="chart-live-dot" /></div>
            <div className="console-digit-row"><span>LAST DIGIT</span><div><b className="digit-green">4</b><b>1</b><b>8</b><b className="digit-blue">2</b><b>6</b><b className="digit-red">9</b><b>0</b><b>3</b><b className="digit-yellow">7</b></div></div>
            <div className="console-footer"><span><i /> 1,000 ticks observed</span><span>Pointer: <b>4</b></span><span>Parity: <b>Even</b></span></div>
          </div>
          <div className="landing-scroll-cue"><span>SCROLL TO EXPLORE</span><i /></div>
        </section>

        <section className="landing-strip"><div><strong>15+</strong><span>supported synthetic markets</span></div><div><strong>1,000</strong><span>ticks in each rolling view</span></div><div><strong>4</strong><span>analysis modes, one workspace</span></div><div><strong>24/7</strong><span>market context when you need it</span></div></section>

        <section className="landing-section platform-section" id="platform">
          <div className="section-intro"><span className="landing-kicker">ONE WORKSPACE / MANY SIGNALS</span><h2>Everything you need<br /><em>before the next decision.</em></h2><p>DigitTools is designed as a calm command center for synthetic market research. Every tool has a purpose, every number has context, and every signal is transparent about what it knows.</p></div>
          <div className="platform-feature-layout"><div className="feature-selector">{landingFeatures.map((feature) => <button key={feature.title} className={activeFeature === feature.title ? "active" : ""} onClick={() => setActiveFeature(feature.title)}><span className={`feature-selector-icon ${feature.accent}`}><Icon name={feature.icon} /></span><span><b>{feature.title}</b><small>{feature.title === "Live intelligence" ? "Observe the stream" : feature.title === "Bot Builder" ? "Shape a strategy" : "Move with context"}</small></span><Icon name="arrow" className="selector-arrow" /></button>)}</div><div className={`feature-preview feature-preview-${activeFeatureData.accent}`}><div className="preview-orbit" /><div className="preview-header"><span>{activeFeatureData.title.toUpperCase()}</span><i /><small>READY TO EXPLORE</small></div><div className="preview-main"><div className="preview-icon"><Icon name={activeFeatureData.icon} /></div><h3>{activeFeatureData.title}</h3><p>{activeFeatureData.text}</p></div><div className="preview-lines"><span /><span /><span /></div><div className="preview-corner">DT / 01</div></div></div>
        </section>

        <section className="landing-section intelligence-section" id="intelligence"><div className="section-intro centered"><span className="landing-kicker">SIGNAL AI</span><h2>Make the invisible<br /><em>easier to see.</em></h2><p>Compare the shape of the recent market without pretending that history guarantees the next tick.</p></div><div className="intelligence-grid"><article><span className="intelligence-number">01</span><Icon name="signal" /><h3>Digit frequency</h3><p>See the full 0–9 distribution, hot and quiet digits, recency, and the live last-digit pointer.</p><a href="#method">View the method <Icon name="arrow" /></a></article><article><span className="intelligence-number">02</span><Icon name="sparkles" /><h3>Over / Under</h3><p>Compare directional balance, exact digits, streak context, and the conditions behind a WAIT state.</p><a href="#method">Understand the signal <Icon name="arrow" /></a></article><article><span className="intelligence-number">03</span><Icon name="bot" /><h3>Parity & streaks</h3><p>Explore Even/Odd runs, exact repeats, transitions, and the recent sequence in one view.</p><a href="#method">Explore the detail <Icon name="arrow" /></a></article></div></section>

        <section className="landing-section bots-section" id="bots"><div className="section-intro"><span className="landing-kicker">BOT LIBRARY</span><h2>Start simple.<br /><em>Go deeper when ready.</em></h2><p>Load a focused template into Bot Builder, or unlock advanced AI strategy layouts built for richer market context.</p><button className="text-action" onClick={onEnter}>Open bot library <Icon name="arrow" /></button></div><div className="landing-bot-showcase"><div className="showcase-art"><span className="showcase-ring" /><img src="/bot-quantum-orbit.png" alt="" /></div><div className="showcase-copy"><span>PREMIUM AI / 05</span><h3>Quantum Compass</h3><p>Cross-index intelligence for traders who want to compare movement, frequency, and context before choosing a market to watch.</p><div className="showcase-tags"><span>Cross-index scan</span><span>Regime notes</span><span>Priority watchlist</span></div><button onClick={onEnter}>Explore strategies <Icon name="arrow" /></button></div></div></section>

        <section className="landing-section method-section" id="method"><div className="section-intro centered"><span className="landing-kicker">THE DIGITTOOLS METHOD</span><h2>Clarity is a<br /><em>trading feature.</em></h2><p>A simple flow for turning a live stream into a more disciplined decision process.</p></div><div className="method-steps"><div><span>01</span><h3>Choose the market</h3><p>Select from 1HZ, R_, or JD indices and start with a clean sample.</p></div><div><span>02</span><h3>Read the evidence</h3><p>Study frequency, parity, streaks, and directional context together.</p></div><div><span>03</span><h3>Set the conditions</h3><p>Let the workspace show WAIT when the evidence is not aligned.</p></div><div><span>04</span><h3>Build your workflow</h3><p>Load a bot template and keep your strategy visible in Bot Builder.</p></div></div></section>

        <section className="landing-cta"><div className="cta-orb" /><span className="landing-kicker">YOUR NEXT MARKET VIEW</span><h2>Less noise.<br /><em>More signal.</em></h2><p>Open the DigitTools workspace and see what the market is actually showing.</p><button className="landing-primary" onClick={onEnter}>Open DigitTools <Icon name="arrow" className="h-4 w-4" /></button></section>
      </main>
      <footer className="landing-footer"><span>digittools <em>deriv workspace</em></span><small>Informational analysis only. Trading involves risk.</small><span>© 2026 DigitTools</span></footer>
    </div>
  );
}

function SignalAIWorkspace({
  analysis,
  marketData,
  analysisSymbol,
  setAnalysisSymbol,
  analysisTarget,
  setAnalysisTarget,
  signalSubtab,
  setSignalSubtab,
  onComingSoon,
}: {
  analysis: AnalysisState;
  marketData: Record<string, MarketFeed>;
  analysisSymbol: string;
  setAnalysisSymbol: (symbol: string) => void;
  analysisTarget: number;
  setAnalysisTarget: (target: number) => void;
  signalSubtab: SignalSubtab;
  setSignalSubtab: (subtab: SignalSubtab) => void;
  onComingSoon: (label: string) => void;
}) {
  const stats = getOverUnderAnalysis(analysis.digits, analysisTarget);
  const connectionLabel = analysis.status === "live" ? "LIVE" : analysis.status === "connecting" ? "CONNECTING" : analysis.status === "error" ? "OFFLINE" : "READY";
  const candidateSide = stats.overEdge >= stats.underEdge ? "over" : "under";
  const candidateLabel = candidateSide === "over" ? `Over ${analysisTarget}` : `Under ${analysisTarget}`;
  const candidateEdge = candidateSide === "over" ? stats.overEdge : stats.underEdge;
  const candidateRecent = candidateSide === "over" ? stats.recent25Over : stats.recent25Under;
  const candidateExpected = candidateSide === "over" ? stats.expectedOver : stats.expectedUnder;
  const currentSide = stats.currentSide as Side | "none";
  const candidateStreak = candidateSide === "over" ? currentSide === "under" && stats.currentLength >= 2 : currentSide === "over" && stats.currentLength >= 2;
  const leader = (values: number[]) => {
    const max = Math.max(...values);
    return max > 0 ? values.findIndex((value) => value === max) : null;
  };
  const topOverDigit = leader(stats.overDigits);
  const topUnderDigit = leader(stats.underDigits);
  const lastFlow = stats.sides.slice(-28);
  const statusText = stats.direction === "wait" ? "WAIT" : stats.direction === "over" ? `OVER ${analysisTarget}` : `UNDER ${analysisTarget}`;
  const statusDescription = stats.direction === "wait"
    ? "The current observations do not meet every configured condition."
    : stats.direction === "over"
      ? `Observed Over ${analysisTarget} bias is supported by the recent Under streak.`
      : `Observed Under ${analysisTarget} bias is supported by the recent Over streak.`;
  const subTabs: { id: SignalSubtab; label: string; enabled: boolean }[] = [
    { id: "analysisTool", label: "Analysis Tool", enabled: true },
    { id: "overUnder", label: "Over / Under", enabled: true },
    { id: "evenOdd", label: "Even / Odd", enabled: true },
    { id: "digitFrequency", label: "Digit Frequency", enabled: true },
    { id: "streaks", label: "Streaks", enabled: true },
  ];

  return (
    <section className="signal-workspace" aria-label="Signal AI analysis workspace">
      <div className="signal-page-heading">
        <div>
          <span className="placeholder-kicker">LIVE MARKET INTELLIGENCE</span>
          <h1>Signal AI</h1>
          <p>Transparent, observed-data analysis for synthetic index digit contracts. Choose a tool to inspect the market context.</p>
        </div>
        <div className={`signal-status ${analysis.status}`}><i /> {connectionLabel}</div>
      </div>

      <div className="signal-subtabs">
        {subTabs.map((tab) => (
          <button key={tab.id} className={`${signalSubtab === tab.id ? "active" : ""} ${!tab.enabled ? "locked" : ""}`} onClick={() => tab.enabled ? setSignalSubtab(tab.id) : onComingSoon(tab.label)}>
            <span>{tab.label}</span>{!tab.enabled && <small>SOON</small>}
          </button>
        ))}
      </div>

      {signalSubtab === "analysisTool" ? (
        <MarketAnalysisWorkspace marketData={marketData} />
      ) : signalSubtab === "overUnder" ? (
        <>
          <div className="signal-controls">
            <label><span>INDEX</span><select value={analysisSymbol} onChange={(event) => setAnalysisSymbol(event.target.value)}>{analyzerGroups.map((group) => <optgroup key={group.label} label={group.label}>{group.symbols.map((symbol) => <option key={symbol} value={symbol}>{symbol}</option>)}</optgroup>)}</select></label>
            <label><span>TARGET DIGIT</span><select value={analysisTarget} onChange={(event) => setAnalysisTarget(Number(event.target.value))}>{Array.from({ length: 10 }, (_, digit) => <option key={digit} value={digit}>{digit}</option>)}</select></label>
            <div className="signal-window"><span>ANALYSIS WINDOW</span><strong>1,000 ticks</strong><small>Rolling live sample</small></div>
            <div className="signal-symbol-note"><span>SELECTED MARKET</span><strong>{analysisSymbol}</strong><small>Last quote {analysis.quote}</small></div>
          </div>

          <div className={`signal-hero ${stats.direction}`}>
            <div><span className="signal-hero-kicker"><i /> OBSERVATION SIGNAL</span><strong>{statusText}</strong><p>{statusDescription}</p></div>
            <div className="signal-score"><small>ANALYSIS SCORE</small><b>{stats.score}</b><span>not a win probability</span></div>
            <div className="signal-action"><small>CANDIDATE ENTRY OBSERVATION</small><strong>{stats.direction === "wait" ? "Wait for conditions" : `Wait for ${stats.direction === "over" ? "Over" : "Under"} ${analysisTarget} confirmation`}</strong><span>{stats.direction === "wait" ? "No entry condition is active" : "A fresh non-exact tick must confirm the direction"}</span></div>
          </div>

          <div className="signal-metric-grid">
            <div className="signal-metric"><small>OVER {analysisTarget}</small><strong>{stats.overPct.toFixed(1)}%</strong><span>{stats.overCount} ticks <b className={stats.overEdge >= 0 ? "positive" : "negative"}>{stats.overEdge >= 0 ? "+" : ""}{stats.overEdge.toFixed(1)}pp vs expected</b></span></div>
            <div className="signal-metric"><small>UNDER {analysisTarget}</small><strong>{stats.underPct.toFixed(1)}%</strong><span>{stats.underCount} ticks <b className={stats.underEdge >= 0 ? "positive" : "negative"}>{stats.underEdge >= 0 ? "+" : ""}{stats.underEdge.toFixed(1)}pp vs expected</b></span></div>
            <div className="signal-metric"><small>EXACT {analysisTarget}</small><strong>{stats.exactPct.toFixed(1)}%</strong><span>{stats.exactCount} ticks · excluded from Over / Under</span></div>
            <div className="signal-metric"><small>CURRENT STREAK</small><strong>{stats.currentLength || 0}</strong><span>{stats.currentSide === "none" ? "Waiting for ticks" : `${stats.currentSide} ${analysisTarget}`} · longest O {stats.longestOver} / U {stats.longestUnder}</span></div>
          </div>

          <div className="signal-analysis-grid">
            <section className="signal-box signal-bias-box"><header><div><span className="signal-box-kicker">BIAS VS EXPECTED</span><h2>Observed distribution</h2></div><small>Uniform reference</small></header><div className="bias-row"><div><span>Over {analysisTarget}</span><b>{stats.overPct.toFixed(1)}%</b></div><div className="bias-track"><i className="over" style={{ width: `${Math.min(stats.overPct, 100)}%` }} /><em style={{ left: `${stats.expectedOver}%` }} /></div><small>Expected {stats.expectedOver.toFixed(1)}%</small></div><div className="bias-row"><div><span>Under {analysisTarget}</span><b>{stats.underPct.toFixed(1)}%</b></div><div className="bias-track"><i className="under" style={{ width: `${Math.min(stats.underPct, 100)}%` }} /><em style={{ left: `${stats.expectedUnder}%` }} /></div><small>Expected {stats.expectedUnder.toFixed(1)}%</small></div><div className="bias-row"><div><span>Exact {analysisTarget}</span><b>{stats.exactPct.toFixed(1)}%</b></div><div className="bias-track"><i className="exact" style={{ width: `${Math.min(stats.exactPct, 100)}%` }} /><em style={{ left: "10%" }} /></div><small>Expected 10.0%</small></div></section>

            <section className="signal-box signal-streak-box"><header><div><span className="signal-box-kicker">STREAK MONITOR</span><h2>Winning and losing runs</h2></div><small>Live sequence</small></header><div className="streak-summary"><div><span className="streak-side over" /><b>Over</b><strong>{stats.longestOver}</strong><small>longest</small></div><div><span className="streak-side under" /><b>Under</b><strong>{stats.longestUnder}</strong><small>longest</small></div><div><span className="streak-side exact" /><b>Exact</b><strong>{stats.longestExact}</strong><small>longest</small></div></div><div className="recent-rate-grid"><span>Last 25 Over <b>{stats.recent25Over.toFixed(1)}%</b></span><span>Last 100 Over <b>{stats.recent100Over.toFixed(1)}%</b></span><span>Last 25 Under <b>{stats.recent25Under.toFixed(1)}%</b></span><span>Last 100 Under <b>{stats.recent100Under.toFixed(1)}%</b></span></div></section>
          </div>

          <div className="signal-analysis-grid second-row">
            <section className="signal-box"><header><div><span className="signal-box-kicker">DIGIT COMPARISON</span><h2>Over and Under contributors</h2></div><small>Most observed digit</small></header><div className="contributor-columns"><div><h3><i className="over-dot" /> Over {analysisTarget} {topOverDigit === null ? "" : `· digit ${topOverDigit}`}</h3>{stats.overDigits.map((count, digit) => <div className="contributor-row" key={`over-${digit}`}><span>{digit}</span><div><i className="over" style={{ width: `${stats.overCount ? (count / stats.overCount) * 100 : 0}%` }} /></div><b>{count}</b></div>)}</div><div><h3><i className="under-dot" /> Under {analysisTarget} {topUnderDigit === null ? "" : `· digit ${topUnderDigit}`}</h3>{stats.underDigits.map((count, digit) => <div className="contributor-row" key={`under-${digit}`}><span>{digit}</span><div><i className="under" style={{ width: `${stats.underCount ? (count / stats.underCount) * 100 : 0}%` }} /></div><b>{count}</b></div>)}</div></div></section>

            <section className="signal-box signal-conditions"><header><div><span className="signal-box-kicker">SIGNAL CONDITIONS</span><h2>{candidateLabel} checklist</h2></div><small>{stats.dataReady ? "Sample ready" : `${stats.total}/100 ticks`}</small></header><div className="condition-list"><div className={stats.dataReady ? "met" : "pending"}><i />1,000-tick sample is ready <b>{stats.dataReady ? "MET" : "COLLECTING"}</b></div><div className={candidateEdge >= 4 ? "met" : "pending"}><i />Bias edge is at least +4.0pp <b>{candidateEdge >= 4 ? "MET" : `${candidateEdge.toFixed(1)}pp`}</b></div><div className={candidateRecent >= candidateExpected ? "met" : "pending"}><i />Last 25 ticks support direction <b>{candidateRecent >= candidateExpected ? "MET" : "WAIT"}</b></div><div className={candidateStreak ? "met" : "pending"}><i />Opposite-side streak reaches 2+ <b>{candidateStreak ? "MET" : "WAIT"}</b></div></div><div className="condition-note">A signal appears only when every condition is met. Exact target digits are excluded from both directional counts.</div></section>
          </div>

          <section className="signal-box signal-flow-box"><header><div><span className="signal-box-kicker">LAST DIGIT FLOW</span><h2>Recent Over / Under appearances</h2></div><small>{stats.total} observed ticks</small></header><div className="signal-flow"><div className="flow-line">{lastFlow.length ? lastFlow.map((side, index) => <span className={side} key={`${side}-${index}`}>{side === "over" ? "O" : side === "under" ? "U" : "X"}</span>) : <small>Waiting for live ticks...</small>}</div><div className="flow-legend"><span><i className="over" /> O = Over {analysisTarget}</span><span><i className="under" /> U = Under {analysisTarget}</span><span><i className="exact" /> X = Exact {analysisTarget}</span></div></div></section>
          {analysis.error && <div className="analysis-error">{analysis.error} Check that your network allows secure WebSocket connections to Deriv.</div>}
          <footer className="signal-disclaimer">Signal AI is an informational analysis tool. It reports observed historical patterns and transparent conditions; it does not predict outcomes, guarantee accuracy, or place trades.</footer>
        </>
      ) : signalSubtab === "evenOdd" ? (
        <EvenOddSignalWorkspace analysis={analysis} analysisSymbol={analysisSymbol} setAnalysisSymbol={setAnalysisSymbol} />
      ) : signalSubtab === "digitFrequency" ? (
        <DigitFrequencyWorkspace analysis={analysis} analysisSymbol={analysisSymbol} setAnalysisSymbol={setAnalysisSymbol} />
      ) : signalSubtab === "streaks" ? (
        <StreakSignalWorkspace analysis={analysis} analysisSymbol={analysisSymbol} setAnalysisSymbol={setAnalysisSymbol} target={analysisTarget} setTarget={setAnalysisTarget} />
      ) : <div className="signal-coming-soon"><div className="placeholder-orbit"><Icon name="sparkles" /></div><h2>{subTabs.find((tab) => tab.id === signalSubtab)?.label}</h2><p>This analysis module is queued next. Over / Under and Even / Odd analysis remain live above.</p><button onClick={() => setSignalSubtab("overUnder")}>Open Over / Under analysis</button></div>}
    </section>
  );
}

function BotBuilderWorkspace({ loadedBot, onNotify }: { loadedBot: BotOption | null; onNotify: (message: string) => void }) {
  const [activeBlock, setActiveBlock] = useState("Trade parameters");
  const [blocks, setBlocks] = useState([
    { id: 1, title: "Trade parameters", detail: "Volatility 100 (1s) Index · Up/Down · 1 tick", tone: "blue" },
    { id: 2, title: "Purchase conditions", detail: "Purchase when the selected condition is available", tone: "cyan" },
  ]);
  const [rightTab, setRightTab] = useState("Summary");
  const blockMenu = ["Analysis Logics", "Trade parameters", "Purchase conditions", "Sell conditions (optional)", "Restart trading conditions", "Analysis"];
  const addBlock = (title: string) => {
    setActiveBlock(title);
    if (!blocks.some((block) => block.title === title)) setBlocks((current) => [...current, { id: Date.now(), title, detail: "New configurable strategy block", tone: title.includes("Sell") ? "violet" : "gold" }]);
    onNotify(`${title} added to strategy`);
  };
  const reset = () => {
    setBlocks([]);
    onNotify("Bot canvas reset");
  };
  return (
    <section className="bot-builder-workspace" aria-label="Bot Builder workspace">
      <aside className="builder-sidebar">
        <button className="quick-strategy-button" onClick={() => onNotify("Quick strategy selected")}>Quick strategy</button>
        <div className="builder-menu-heading"><strong>Blocks menu</strong><Icon name="chevron" className="h-5 w-5" /></div>
        <label className="builder-search"><Icon name="search" className="h-4 w-4" /><input placeholder="Search blocks" /></label>
        <div className="builder-menu-list">{blockMenu.map((title) => <button key={title} className={activeBlock === title ? "active" : ""} onClick={() => addBlock(title)}>{title}{title === "Analysis Logics" && <span>🔥</span>}</button>)}</div>
      </aside>
      <section className="builder-canvas-area">
        <div className="builder-toolbar"><button onClick={() => setBlocks((current) => [...current])} aria-label="Refresh canvas"><Icon name="arrow" /></button><button onClick={() => onNotify("Strategy opened")}>Open</button><button onClick={() => onNotify("Strategy saved")}>Save</button><span /><button onClick={() => onNotify("Analysis panel opened")}><Icon name="chart" /></button><button onClick={() => setBlocks((current) => [...current, { id: Date.now(), title: "New analysis block", detail: "Drag conditions into this area", tone: "violet" }])}><Icon name="plus" /></button><button onClick={() => setBlocks((current) => current.slice(0, -1))}><Icon name="down" /></button><button onClick={reset}>Reset</button></div>
         <div className="builder-canvas"><div className="canvas-grid" />{blocks.length ? <div className="canvas-blocks">{blocks.map((block, index) => <article className={`strategy-block ${block.tone}`} key={block.id}><header><span>{index + 1}. {block.title}</span><button onClick={() => setBlocks((current) => current.filter((item) => item.id !== block.id))}>x</button></header><div className="strategy-block-body"><label>Market <select defaultValue="1HZ100V"><option>Volatility 100 (1s) Index</option><option>Volatility 50 Index</option><option>Jump 50 Index</option></select></label><p>{block.detail}</p><div className="strategy-chip-row"><span>Ticks</span><span>Stake: USD 1</span><span>Condition ready</span></div></div></article>)}</div> : <div className="canvas-empty"><div className="canvas-empty-icon"><Icon name="gear" /></div><h2>Build your strategy</h2><p>Choose a block from the menu to begin.</p></div>}<div className="canvas-trash"><Icon name="layers" /></div></div></section>
      <aside className="builder-inspector"><div className="inspector-tabs">{["Summary", "Transactions", "Journal"].map((tab) => <button key={tab} className={rightTab === tab ? "active" : ""} onClick={() => setRightTab(tab)}>{tab}</button>)}</div>{rightTab === "Summary" ? <><div className="inspector-actions"><button onClick={() => onNotify("Summary downloaded")}>Download</button><button onClick={() => onNotify("Strategy details opened")}>View detail</button></div><div className="inspector-stats"><div><small>Type</small><strong>{loadedBot?.type || "Custom"}</strong></div><div><small>Entry / Exit spot</small><strong>--</strong></div><div><small>Buy price and P/L</small><strong>0.00</strong></div></div><div className="inspector-empty"><Icon name="file" /><span>No paper contracts yet</span></div><div className="inspector-totals"><div><small>Total stake</small><b>0.00 USD</b></div><div><small>Total payout</small><b>0.00 USD</b></div><div><small>No. of runs</small><b>0</b></div><div><small>Contracts lost</small><b>0</b></div><div><small>Contracts won</small><b>0</b></div><div><small>Total profit/loss</small><b>0.00 USD</b></div></div><button className="inspector-reset" onClick={reset}>Reset strategy</button></> : <div className="inspector-journal"><span className="rolling-live-dot" /><p>{rightTab === "Transactions" ? "Paper transaction activity will appear here." : "Strategy journal notes will appear here."}</p></div>}</aside>
    </section>
  );
}

export default function App() {
  const [showLanding, setShowLanding] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [active, setActive] = useState("Dashboard");
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [currency, setCurrency] = useState<"USD" | "DEMO">("USD");
  const [toast, setToast] = useState("");
  const [analyzerOpen, setAnalyzerOpen] = useState(false);
  const [analysisSymbol, setAnalysisSymbol] = useState("1HZ10V");
  const [analysisMode, setAnalysisMode] = useState<AnalysisMode>("evenOdd");
  const [analysisTarget, setAnalysisTarget] = useState(5);
  const [analysis, setAnalysis] = useState<AnalysisState>(initialAnalysis);
  const [botPickerOpen, setBotPickerOpen] = useState(false);
  const [loadedBot, setLoadedBot] = useState<BotOption | null>(null);
  const [signalSubtab, setSignalSubtab] = useState<SignalSubtab>("overUnder");
  const [marketData, setMarketData] = useState<Record<string, MarketFeed>>(() => Object.fromEntries(allAnalyzerSymbols.map((symbol) => [symbol, blankMarketFeed()])));
  const [hotMarketOpen, setHotMarketOpen] = useState(false);
  const [riskVisible, setRiskVisible] = useState(true);
  const [telegramOpen, setTelegramOpen] = useState(false);
  const [telegramUnlocked, setTelegramUnlocked] = useState(false);
  const [telegramPassword, setTelegramPassword] = useState("");
  const [telegramToken, setTelegramToken] = useState("");
  const [telegramChatId, setTelegramChatId] = useState("");
  const [telegramTemplate, setTelegramTemplate] = useState(defaultTelegramTemplate);
  const [telegramEnabled, setTelegramEnabled] = useState(false);
  const [telegramStatus, setTelegramStatus] = useState("idle");
  const sentTelegramSignals = useRef(new Set<string>());
  const pendingTelegramSignals = useRef(new Map<string, number>());
  const currentHotSignals = useRef<HotMarketSignal[]>([]);
  const [aiPosition, setAiPosition] = useState<{ left: number; top: number } | null>(null);
  const [aiDragging, setAiDragging] = useState(false);
  const aiMoved = useRef(false);
  const [navOrder, setNavOrder] = useState(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem("digittools-nav-order") || "null") as string[] | null;
      if (Array.isArray(saved)) {
        const restored = saved.map((label) => navItems.find((item) => item.label === label)).filter((item): item is typeof navItems[number] => Boolean(item));
        if (restored.length === navItems.length) return restored;
      }
    } catch {
      // Use the product default when saved navigation is unavailable.
    }
    return navItems;
  });
  const [arrangeOpen, setArrangeOpen] = useState(false);

  if (showLanding) return <LandingPage onEnter={() => setShowLanding(false)} />;

  const hotMarketSignals = getHotMarketSignals(marketData);
  currentHotSignals.current = hotMarketSignals;

  const publishTelegramSignal = async (signal: HotMarketSignal) => {
    if (!telegramToken.trim() || !telegramChatId.trim()) return;
    setTelegramStatus("sending");
    try {
      const snapshot = await createSignalSnapshot(signal);
      const caption = buildTelegramMessage(telegramTemplate, signal);
      const endpoint = snapshot ? "sendPhoto" : "sendMessage";
      const body = snapshot ? (() => { const form = new FormData(); form.append("chat_id", telegramChatId.trim()); form.append("caption", caption); form.append("photo", snapshot, `${signal.symbol}-signal.png`); return form; })() : JSON.stringify({ chat_id: telegramChatId.trim(), text: caption, disable_web_page_preview: true });
      const response = await fetch(`https://api.telegram.org/bot${telegramToken.trim()}/${endpoint}`, { method: "POST", ...(snapshot ? {} : { headers: { "Content-Type": "application/json" } }), body });
      if (!response.ok) throw new Error("Telegram rejected the message");
      setTelegramStatus("sent");
    } catch {
      setTelegramStatus("error");
    }
  };

  const publishTelegramTest = async () => {
    if (!telegramToken.trim() || !telegramChatId.trim()) {
      setTelegramStatus("error");
      return;
    }
    await publishTelegramSignal(hotMarketSignals[0] || { symbol: "TEST", market: "DigitTools test market", strategy: "Test signal", direction: "WATCH", rule: "Admin relay test", score: 100, details: "Telegram relay is connected" });
  };

  useEffect(() => {
    if (!telegramEnabled || !telegramToken.trim() || !telegramChatId.trim()) return;
    const activeKeys = new Set(hotMarketSignals.map((signal) => `${signal.symbol}:${signal.strategy}`));
    sentTelegramSignals.current.forEach((key) => { if (!activeKeys.has(key)) sentTelegramSignals.current.delete(key); });
    hotMarketSignals.forEach((signal) => {
      const key = `${signal.symbol}:${signal.strategy}`;
      if (sentTelegramSignals.current.has(key) || pendingTelegramSignals.current.has(key)) return;
      const timer = window.setTimeout(() => {
        pendingTelegramSignals.current.delete(key);
        const stillActive = currentHotSignals.current.find((candidate) => `${candidate.symbol}:${candidate.strategy}` === key);
        if (!stillActive || sentTelegramSignals.current.has(key)) return;
        sentTelegramSignals.current.add(key);
        void publishTelegramSignal(stillActive);
      }, 60000);
      pendingTelegramSignals.current.set(key, timer);
    });
  }, [hotMarketSignals, telegramEnabled, telegramToken, telegramChatId, telegramTemplate]);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(""), 2600);
    return () => window.clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    if (signalSubtab === "analysisTool" || hotMarketOpen) return;
    if (!analyzerOpen && active !== "Signal AI" && active !== "Auto Trading" && !hotMarketOpen) return;

    let disposed = false;
    let socket: WebSocket | null = null;
    let endpointIndex = 0;
    let fallbackTimer = 0;
    let connectionTimer = 0;
    let historyApplied = false;
    let streamPrecision = 2;
    let pendingLiveTicks: { digit: number; formatted: string; precision: number; epoch: number | null }[] = [];
    const endpoints = [
      "wss://ws.binaryws.com/websockets/v3?app_id=1089",
      "wss://api.derivws.com/trading/v1/options/ws/public",
      "wss://ws.derivws.com/websockets/v3?app_id=1089",
    ];
    setAnalysis({ ...initialAnalysis, status: "connecting" });

    const connect = () => {
      if (disposed) return;
      const endpoint = endpoints[endpointIndex];
      try {
        socket = new WebSocket(endpoint);
      } catch {
        endpointIndex += 1;
        if (endpointIndex < endpoints.length) connect();
        else setAnalysis((current) => ({ ...current, status: "error", error: "No Deriv live-data endpoint could be opened." }));
        return;
      }

      const usePublicStream = endpoint.includes("/ws/public");
      let receivedTick = false;
      let advanced = false;
      const advanceToFallback = (message: string) => {
        if (disposed || advanced || receivedTick) return;
        advanced = true;
        window.clearTimeout(connectionTimer);
        socket?.close();
        endpointIndex += 1;
        if (endpointIndex < endpoints.length) {
          setAnalysis((current) => ({ ...current, status: "connecting", error: message }));
          fallbackTimer = window.setTimeout(connect, 180);
        } else {
          setAnalysis((current) => ({ ...current, status: "error", error: message }));
        }
      };

      socket.onopen = () => {
        if (disposed) return;
        window.clearTimeout(connectionTimer);
        setAnalysis((current) => ({ ...current, status: "connecting", error: "" }));
        if (usePublicStream) {
          // The current public endpoint does not need an app id or login.
          socket?.send(JSON.stringify({ ticks: analysisSymbol, subscribe: 1, req_id: 1 }));
          socket?.send(JSON.stringify({ ticks_history: analysisSymbol, end: "latest", count: ANALYSIS_TICK_COUNT, style: "ticks", req_id: 2 }));
        } else {
          // The legacy stream provides both the recent history and live ticks.
          socket?.send(JSON.stringify({
            ticks_history: analysisSymbol,
            end: "latest",
            count: ANALYSIS_TICK_COUNT,
            style: "ticks",
            subscribe: 1,
            req_id: 1,
          }));
        }
        connectionTimer = window.setTimeout(() => advanceToFallback("No live tick response received. Trying another Deriv route..."), 9000);
      };
      socket.onmessage = (event) => {
        if (disposed) return;
        try {
          const message = JSON.parse(event.data) as {
            msg_type?: string;
            error?: { message?: string };
            pip_size?: number | string;
            echo_req?: { ticks_history?: string; ticks?: string };
            history?: { prices?: unknown[]; times?: unknown[]; pip_size?: number | string };
            tick?: { symbol?: string; quote?: unknown; epoch?: number; pip_size?: number | string };
          };

          if (message.error) {
            const errorText = message.error?.message || "Deriv returned an error.";
            if (usePublicStream && receivedTick) {
              setAnalysis((current) => ({ ...current, error: "" }));
            } else advanceToFallback(errorText);
            return;
          }

          if (message.msg_type === "history" && message.history?.prices?.length) {
            window.clearTimeout(connectionTimer);
            const pipSize = message.pip_size ?? message.history.pip_size;
            const parsed = message.history.prices.map((price) => digitFromQuote(price, pipSize));
            const valid = parsed.filter((item): item is { digit: number; formatted: string; precision: number } => item.digit !== null);
            const last = valid[valid.length - 1];
            streamPrecision = last?.precision || streamPrecision;
            const times = message.history.times || [];
            historyApplied = true;
            const liveAfterHistory = pendingLiveTicks;
            pendingLiveTicks = [];
            const latestLive = liveAfterHistory[liveAfterHistory.length - 1];
            setAnalysis({
              digits: [...valid.map((item) => item.digit), ...liveAfterHistory.map((item) => item.digit)].slice(-ANALYSIS_TICK_COUNT),
              quote: latestLive?.formatted || last?.formatted || "--",
              epoch: latestLive?.epoch ?? (typeof times[times.length - 1] === "number" ? times[times.length - 1] as number : null),
              precision: latestLive?.precision || last?.precision || 2,
              status: "live",
              error: "",
            });
            return;
          }

          if (message.msg_type === "tick" && message.tick) {
            receivedTick = true;
            window.clearTimeout(connectionTimer);
            const parsed = digitFromQuote(message.tick.quote, message.tick.pip_size ?? streamPrecision);
            if (parsed.digit === null) return;
            streamPrecision = parsed.precision;
            const liveTick = {
              digit: parsed.digit,
              formatted: parsed.formatted,
              precision: parsed.precision,
              epoch: typeof message.tick?.epoch === "number" ? message.tick.epoch : null,
            };
            if (!historyApplied) pendingLiveTicks = [...pendingLiveTicks, liveTick].slice(-50);
            setAnalysis((current) => ({
              ...current,
              digits: [...current.digits, parsed.digit].slice(-ANALYSIS_TICK_COUNT),
              quote: parsed.formatted,
              epoch: liveTick.epoch ?? current.epoch,
              precision: parsed.precision,
              status: "live",
              error: "",
            }));
          }
        } catch {
          advanceToFallback("Unable to read the live tick response.");
        }
      };
      socket.onerror = () => {
        advanceToFallback("Live data connection failed. Trying another Deriv route...");
      };
      socket.onclose = () => {
        if (!disposed && !advanced && !receivedTick) advanceToFallback("Deriv closed the live data connection.");
      };
    };

    connect();

    return () => {
      disposed = true;
      window.clearTimeout(fallbackTimer);
      window.clearTimeout(connectionTimer);
      socket?.close();
    };
  }, [active, analyzerOpen, analysisSymbol, signalSubtab, hotMarketOpen]);

  useEffect(() => {
    if ((active !== "Signal AI" || signalSubtab !== "analysisTool") && !hotMarketOpen) return;

    let disposed = false;
    let socket: WebSocket | null = null;
    let endpointIndex = 0;
    let retryTimer = 0;
    let responseTimer = 0;
    let advanced = false;
    let receivedAny = false;
    let errorCount = 0;
    const requestSymbols = new Map<number, string>();
    const historyQueue = [...allAnalyzerSymbols];
    const requestTimers: number[] = [];
    const endpoints = [
      "wss://api.derivws.com/trading/v1/options/ws/public",
      "wss://ws.derivws.com/websockets/v3?app_id=1089",
      "wss://ws.binaryws.com/websockets/v3?app_id=1089",
    ];

    setAnalysis({ ...initialAnalysis, status: "connecting" });
    setMarketData((current) => Object.fromEntries(allAnalyzerSymbols.map((symbol) => [symbol, { ...(current[symbol] || blankMarketFeed()), status: "connecting" }])));

    const updateMarket = (symbol: string, next: Partial<MarketFeed>) => {
      if (!allAnalyzerSymbols.includes(symbol)) return;
      const isLive = next.status === "live" || Boolean(next.digits?.length);
      if (isLive) receivedAny = true;
      setMarketData((current) => ({ ...current, [symbol]: { ...(current[symbol] || blankMarketFeed()), ...next } }));
      if (isLive) setAnalysis((current) => ({ ...current, status: "live", error: "" }));
    };

    const advanceEndpoint = (message: string) => {
      if (disposed || advanced || receivedAny) return;
      advanced = true;
      window.clearTimeout(responseTimer);
      socket?.close();
      endpointIndex += 1;
      if (endpointIndex < endpoints.length) {
        setAnalysis((current) => ({ ...current, status: "connecting", error: message }));
        retryTimer = window.setTimeout(connect, 200);
      } else {
        setAnalysis((current) => ({ ...current, status: "error", error: `${message} Both Deriv live-data routes failed.` }));
        setMarketData((current) => Object.fromEntries(allAnalyzerSymbols.map((symbol) => [symbol, { ...(current[symbol] || blankMarketFeed()), status: "error" }])));
      }
    };

    const connect = () => {
      if (disposed) return;
      advanced = false;
      receivedAny = false;
      requestSymbols.clear();
      try {
        socket = new WebSocket(endpoints[endpointIndex]);
      } catch {
        advanceEndpoint("The multi-market WebSocket could not be opened.");
        return;
      }
      socket.onopen = () => {
        if (disposed) return;
        allAnalyzerSymbols.forEach((symbol, index) => {
          const timer = window.setTimeout(() => {
            if (disposed || !socket || socket.readyState !== WebSocket.OPEN) return;
            const reqId = index + 1;
            requestSymbols.set(reqId, symbol);
            socket.send(JSON.stringify({
              ticks_history: symbol,
              end: "latest",
              count: ANALYSIS_TICK_COUNT,
              adjust_start_time: 1,
              style: "ticks",
              subscribe: 1,
              passthrough: { symbol },
              req_id: reqId,
            }));
          }, index * 110);
          requestTimers.push(timer);
        });
        responseTimer = window.setTimeout(() => advanceEndpoint("No multi-market history arrived. Retrying Deriv live data..."), 15000);
      };
      socket.onmessage = (event) => {
        if (disposed) return;
        try {
          const message = JSON.parse(event.data) as {
            msg_type?: string;
            req_id?: number;
            error?: { message?: string };
            pip_size?: number | string;
            echo_req?: { req_id?: number; ticks_history?: string; ticks?: string };
            passthrough?: { symbol?: string };
            history?: { prices?: unknown[]; times?: unknown[]; pip_size?: number | string };
            tick?: { symbol?: string; quote?: unknown; epoch?: number; pip_size?: number | string };
          };
          const requestId = message.req_id ?? message.echo_req?.req_id;
          const requestedSymbol = requestId ? requestSymbols.get(requestId) : undefined;
          const historySymbol = message.echo_req?.ticks_history || message.passthrough?.symbol || requestedSymbol || historyQueue.shift();
          const tickSymbol = message.tick?.symbol || message.echo_req?.ticks || message.echo_req?.ticks_history || requestedSymbol;
          if (message.error) {
            errorCount += 1;
            if (historySymbol) updateMarket(historySymbol, { status: "error" });
            if (!receivedAny && errorCount >= allAnalyzerSymbols.length) advanceEndpoint(message.error.message || "Deriv rejected the multi-market request.");
            return;
          }
          if (message.msg_type === "history" && historySymbol && message.history?.prices?.length) {
            window.clearTimeout(responseTimer);
            receivedAny = true;
            const pipSize = message.pip_size ?? message.history.pip_size;
            const parsed = message.history.prices.map((price) => digitFromQuote(price, pipSize));
            const valid = parsed.filter((item): item is { digit: number; formatted: string; precision: number } => item.digit !== null);
            const prices = message.history.prices.map(Number).filter(Number.isFinite).slice(-ANALYSIS_TICK_COUNT);
            const last = valid[valid.length - 1];
            const times = message.history.times || [];
            updateMarket(historySymbol, {
              digits: valid.map((item) => item.digit).slice(-ANALYSIS_TICK_COUNT),
              prices,
              quote: last?.formatted || "--",
              precision: last?.precision || 2,
              epoch: typeof times[times.length - 1] === "number" ? times[times.length - 1] as number : null,
              status: "live",
            });
            if (historySymbol === analysisSymbol) {
              setAnalysis({
                digits: valid.map((item) => item.digit).slice(-ANALYSIS_TICK_COUNT),
                quote: last?.formatted || "--",
                epoch: typeof times[times.length - 1] === "number" ? times[times.length - 1] as number : null,
                precision: last?.precision || 2,
                status: "live",
                error: "",
              });
            }
          }
          if (message.msg_type === "tick" && tickSymbol && message.tick) {
            const currentFeed = marketData[tickSymbol] || blankMarketFeed();
            const parsed = digitFromQuote(message.tick?.quote, message.tick?.pip_size ?? currentFeed.precision);
            if (parsed.digit === null) return;
            setMarketData((current) => {
              const feed = current[tickSymbol] || blankMarketFeed();
              receivedAny = true;
              setAnalysis((state) => ({ ...state, status: "live", error: "" }));
              return {
                ...current,
                [tickSymbol]: {
                  ...feed,
                  digits: [...feed.digits, parsed.digit].slice(-ANALYSIS_TICK_COUNT),
                  prices: [...feed.prices, Number(message.tick?.quote)].filter(Number.isFinite).slice(-ANALYSIS_TICK_COUNT),
                  quote: parsed.formatted,
                  precision: parsed.precision,
                  epoch: typeof message.tick?.epoch === "number" ? message.tick.epoch : feed.epoch,
                  status: "live",
                },
              };
            });
            if (tickSymbol === analysisSymbol) {
              setAnalysis((current) => ({
                ...current,
                digits: [...current.digits, parsed.digit as number].slice(-ANALYSIS_TICK_COUNT),
                quote: parsed.formatted,
                epoch: typeof message.tick?.epoch === "number" ? message.tick.epoch : current.epoch,
                precision: parsed.precision,
                status: "live",
                error: "",
              }));
            }
          }
        } catch {
          advanceEndpoint("Unable to read the multi-market feed.");
        }
      };
      socket.onerror = () => advanceEndpoint("The multi-market Deriv feed is unavailable.");
      socket.onclose = () => {
        if (!disposed && !receivedAny) advanceEndpoint("Deriv closed the multi-market feed.");
      };
    };

    connect();
    return () => {
      disposed = true;
      requestTimers.forEach((timer) => window.clearTimeout(timer));
      window.clearTimeout(retryTimer);
      window.clearTimeout(responseTimer);
      socket?.close();
    };
  }, [active, signalSubtab]);

  const selectFeature = (title: string) => {
    if (title === "LOAD BOT") {
      setBotPickerOpen(true);
      return;
    }
    if (title === "PREMIUM BOTS") {
      setActive("Free Bots");
      setToast("Free Bots section opened");
      return;
    }
    setToast(`${title} is coming soon`);
  };
  const loadBot = (bot: BotOption) => {
    setLoadedBot(bot);
    setBotPickerOpen(false);
    setActive("Bot Builder");
    setToast(`${bot.name} loaded in Bot Builder`);
  };
  const handleXmlUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const source = String(reader.result || "");
      const xml = new DOMParser().parseFromString(source, "application/xml");
      const parsedName = xml.querySelector("name, strategy, bot")?.textContent?.trim();
      const fileName = file.name.replace(/\.xml$/i, "");
      loadBot({
        name: parsedName || fileName || "Imported XML Bot",
        type: "Imported XML strategy",
        description: `Imported from ${file.name}. Review every block and condition before running it in paper mode.`,
        color: "blue",
        image: "/bot-neural-grid.png",
        tone: "blue",
        markets: "Imported configuration",
        setup: "Review required",
        features: ["XML imported", "Paper mode", "Editable blocks"],
      });
    };
    reader.onerror = () => setToast("The XML file could not be read");
    reader.readAsText(file);
    event.target.value = "";
  };
  const moveNavItem = (index: number, direction: -1 | 1) => {
    const nextIndex = index + direction;
    if (nextIndex < 0 || nextIndex >= navOrder.length) return;
    setNavOrder((current) => {
      const next = [...current];
      [next[index], next[nextIndex]] = [next[nextIndex], next[index]];
      return next;
    });
  };
  const saveNavOrder = () => {
    window.localStorage.setItem("digittools-nav-order", JSON.stringify(navOrder.map((item) => item.label)));
    setArrangeOpen(false);
    setToast("Tab order saved");
  };
  const resetNavOrder = () => {
    window.localStorage.removeItem("digittools-nav-order");
    setNavOrder(navItems);
    setToast("Tabs restored to default order");
  };
  const handleAiPointerDown = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (event.button !== 0) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const start = { x: event.clientX, y: event.clientY, left: rect.left, top: rect.top };
    aiMoved.current = false;
    setAiDragging(true);
    const move = (nextEvent: PointerEvent) => {
      const dx = nextEvent.clientX - start.x;
      const dy = nextEvent.clientY - start.y;
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) aiMoved.current = true;
      const left = Math.min(window.innerWidth - 84, Math.max(8, start.left + dx));
      const top = Math.min(window.innerHeight - 84, Math.max(76, start.top + dy));
      setAiPosition({ left, top });
    };
    const up = () => {
      setAiDragging(false);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };
  const digitCounts = Array.from({ length: 10 }, (_, digit) => analysis.digits.filter((item) => item === digit).length);
  const tickTotal = analysis.digits.length;
  const highestCount = Math.max(...digitCounts);
  const lowestCount = Math.min(...digitCounts);
  const evenCount = digitCounts.filter((_, digit) => digit % 2 === 0).reduce((total, count) => total + count, 0);
  const oddCount = tickTotal - evenCount;
  const overCount = digitCounts.filter((_, digit) => digit > analysisTarget).reduce((total, count) => total + count, 0);
  const underCount = digitCounts.filter((_, digit) => digit < analysisTarget).reduce((total, count) => total + count, 0);
  const exactCount = digitCounts[analysisTarget];
  const latestDigit = analysis.digits[analysis.digits.length - 1];
  const recentDigits = analysis.digits.slice(-18);
  const selectedGroup = analyzerGroups.find((group) => group.symbols.includes(analysisSymbol));
  const connectionLabel = analysis.status === "live" ? "LIVE" : analysis.status === "connecting" ? "CONNECTING" : analysis.status === "error" ? "OFFLINE" : "READY";
  const modeRows = analysisMode === "evenOdd"
    ? [
        { label: "Even", count: evenCount, color: "cyan" },
        { label: "Odd", count: oddCount, color: "violet" },
      ]
    : [
        { label: `Over ${analysisTarget}`, count: overCount, color: "green" },
        { label: `Under ${analysisTarget}`, count: underCount, color: "red" },
        { label: `Exact ${analysisTarget}`, count: exactCount, color: "gold" },
      ];
  const renderAiDigit = (digit: number) => {
    const count = digitCounts[digit];
    const percentage = tickTotal ? (count / tickTotal) * 100 : 0;
    const isMost = tickTotal > 0 && count === highestCount;
    const isLeast = tickTotal > 0 && count === lowestCount;
    return (
      <div className={`digit-stat ${isMost ? "most" : ""} ${isLeast ? "least" : ""}`} key={digit}>
        <div className="digit-stat-top"><b>{digit}</b><span>{percentage.toFixed(1)}%</span></div>
        <div className="digit-bar"><i style={{ height: `${Math.max(percentage, count ? 4 : 0)}%` }} /></div>
        <small>{count} hits</small>
        {isMost && <em>MOST</em>}
        {isLeast && <em>LEAST</em>}
      </div>
    );
  };

  return (
    <div className={`trading-app ${theme === "light" ? "light-theme" : "dark-theme"}`}>
      <header className="top-header">
        <button className="brand brand-mark-only" onClick={() => setActive("Dashboard")} aria-label="Open dashboard">
          <span className="brand-mark">I</span>
        </button>
        <div className="header-actions">
          <button className="theme-toggle" onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}><Icon name={theme === "dark" ? "sun" : "moon"} className="h-5 w-5" /><span>{theme === "dark" ? "Light" : "Dark"}</span></button>
          <div className="currency-wrap">
            <button className="currency-button" onClick={() => setCurrencyOpen((value) => !value)}>
              {currency} <Icon name="chevron" className="h-4 w-4" />
            </button>
            {currencyOpen && (
              <div className="currency-menu">
                {["USD", "DEMO"].map((code) => (
                  <button key={code} onClick={() => { setCurrency(code as "USD" | "DEMO"); setCurrencyOpen(false); }}>{code}</button>
                ))}
              </div>
            )}
          </div>
          {currency === "DEMO" ? <span className="demo-mark" aria-label="Demo account">D</span> : <span className="flag us-flag" aria-label="United States"><i /><b>US</b></span>}
          <strong className="balance">0.30 {currency}</strong>
          <button className="balance-chevron" onClick={() => setToast("Wallet menu opened")}><Icon name="chevron" /></button>
        </div>
      </header>

      <nav className="main-nav" aria-label="Primary navigation">
        <button className={`nav-settings ${arrangeOpen ? "arrange-active" : ""}`} onClick={() => setArrangeOpen((current) => !current)} aria-label="Arrange navigation tabs"><Icon name="sliders" /></button>
        {arrangeOpen && (
          <div className="nav-arranger" onMouseDown={(event) => event.stopPropagation()}>
            <div className="nav-arranger-heading"><div><strong>Arrange tabs</strong><small>Choose your workspace order</small></div><span>DRAG ORDER</span></div>
            <div className="nav-arranger-list">
              {navOrder.map((item, index) => (
                <div className={`nav-arranger-row ${active === item.label ? "current" : ""}`} key={item.label}>
                  <span className="nav-arranger-index">{String(index + 1).padStart(2, "0")}</span><Icon name={item.icon} className="h-4 w-4" /><b>{item.label}</b>
                  <button onClick={() => moveNavItem(index, -1)} disabled={index === 0} aria-label={`Move ${item.label} up`}>▲</button><button onClick={() => moveNavItem(index, 1)} disabled={index === navOrder.length - 1} aria-label={`Move ${item.label} down`}>▼</button>
                </div>
              ))}
            </div>
            <div className="nav-arranger-actions"><button className="nav-reset" onClick={resetNavOrder}>Reset default</button><button className="nav-save" onClick={saveNavOrder}>Save order</button></div>
          </div>
        )}
        <div className="nav-scroll">
          {navOrder.map((item) => (
            <button key={item.label} onClick={() => { setActive(item.label); setToast(`${item.label} selected`); }} className={`nav-item nav-${item.icon} ${active === item.label ? "selected" : ""}`}>
              <Icon name={item.icon} className="nav-icon" />
              <span className="nav-label">{item.label}</span>
              <i className="tab-spark" aria-hidden="true" />
              {item.badge && <b className="new-badge">{item.badge}</b>}
            </button>
          ))}
          <button className={`nav-fire ${hotMarketSignals.length ? "hot" : ""}`} onClick={() => setHotMarketOpen((current) => !current)} aria-label="Open hot markets"><span className="fire-icon-shell"><Icon name="flame" className="nav-fire-icon" /></span>{hotMarketSignals.length > 0 && <sup className="hot-count">{hotMarketSignals.length}</sup>}</button>
        </div>
      </nav>

      {active === "Bot Builder" || active === "Signal AI" ? (
        <div className={`builder-run-strip ${active === "Signal AI" ? "signal-run-strip" : ""}`}>
          <div className="builder-run-strip-main"><span>{active === "Bot Builder" ? "Blocks are monitored in safe simulation mode" : "Signal AI is ready to scan the selected market conditions"}</span><span className="builder-strip-count">{active === "Bot Builder" ? "Builder ready" : "Signal scanner ready"}</span><button className="builder-run" onClick={() => setToast(active === "Bot Builder" ? "Paper strategy ready to run" : "Signal AI scan started")}>{active === "Bot Builder" ? "Run in paper mode" : "Run signal scan"} <Icon name="plus" className="h-4 w-4" /></button></div>
          <div className="builder-run-notice"><i /> <strong>Execution notice:</strong> real-money trading is locked. {active === "Bot Builder" ? "This run evaluates your configured strategy and records paper activity." : "This scan evaluates observed data and does not place a trade."}</div>
        </div>
      ) : null}

      <main className={`dashboard-main ${active === "Bot Builder" ? "builder-page-main" : ""}`}>
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />
        {active === "Dashboard" ? (
          <>
            <section className="feature-grid" aria-label="Trading tools">
              {featureCards.map((card) => <FeatureCard key={card.title} card={card} onClick={() => selectFeature(card.title)} />)}
            </section>

            <section className="feedback-panel" aria-label="Trader feedback">
              <div className="section-heading"><span>TRADER FEEDBACK</span></div>
              <div className="feedback-viewport">
                <div className="feedback-track">
                  {[0, 1].map((group) => (
                    <div className="feedback-group" key={group} aria-hidden={group === 1}>
                      {feedback.map((item) => (
                        <article className="feedback-card" key={`${group}-${item.name}`}>
                          <div className="feedback-top">
                            <span className="avatar">{item.initials}</span>
                            <div className="feedback-name"><strong>{item.name}</strong><small><Icon name="check" className="h-3.5 w-3.5" /> Verified trader <span className="country">· {item.country}</span></small></div>
                            <span className="stars">★★★★★</span>
                          </div>
                          <p>“{item.quote}”</p>
                          <div className="feedback-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                        </article>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="feedback-controls">
                <span className="rolling-live"><i /> LIVE FEEDBACK</span>
                <span className="rolling-copy">Rolling right to left</span>
                <span className="rolling-count">{new Set(feedback.map((item) => item.country)).size} countries represented</span>
              </div>
            </section>
          </>
        ) : active === "Auto Trading" ? (
          <AutoTradingWorkspace analysis={analysis} analysisSymbol={analysisSymbol} setAnalysisSymbol={setAnalysisSymbol} target={analysisTarget} setTarget={setAnalysisTarget} onNotify={setToast} />
        ) : active === "Signal AI" ? (
          <SignalAIWorkspace
            analysis={analysis}
            marketData={marketData}
            analysisSymbol={analysisSymbol}
            setAnalysisSymbol={setAnalysisSymbol}
            analysisTarget={analysisTarget}
            setAnalysisTarget={setAnalysisTarget}
            signalSubtab={signalSubtab}
            setSignalSubtab={setSignalSubtab}
            onComingSoon={(label) => setToast(`${label} analysis is coming soon`)}
          />
        ) : active === "Bot Builder" ? (
          <BotBuilderWorkspace loadedBot={loadedBot} onNotify={setToast} />
        ) : active === "Free Bots" ? (
          <BotMarketplace premium={false} onLoad={loadBot} />
        ) : active === "Premium AI Bots" ? (
          <BotMarketplace premium onLoad={loadBot} />
        ) : (
          <section className="tab-placeholder" aria-label={`${active} workspace`}>
            <div className="placeholder-orbit"><Icon name={active === "Bot Builder" ? "gear" : active === "Free Bots" ? "bot" : "sparkles"} /></div>
            <span className="placeholder-kicker">DIGITTOOLS WORKSPACE</span>
            <h1>{active}</h1>
            {active === "Bot Builder" && loadedBot ? (
              <>
                <p><strong>{loadedBot.name}</strong> is loaded and ready for configuration in Bot Builder.</p>
                <div className="loaded-bot-card"><span className={`loaded-bot-icon ${loadedBot.color}`}><Icon name="bot" /></span><div><strong>{loadedBot.name}</strong><small>{loadedBot.type} strategy template</small></div><button onClick={() => setToast("Bot settings are ready for your configuration")}>Configure bot</button></div>
              </>
            ) : active === "Free Bots" ? (
              <p>Free bot strategies are ready for your next selection. Choose Load Bot from the Dashboard to begin.</p>
            ) : (
              <p>This workspace is ready for the next DigitTools module.</p>
            )}
            <button className="return-dashboard" onClick={() => setActive("Dashboard")}><Icon name="arrow" className="h-4 w-4" /> Return to Dashboard</button>
          </section>
        )}
      </main>

      {hotMarketOpen && (
        <div className="hot-market-backdrop" onMouseDown={() => setHotMarketOpen(false)}>
          <section className="hot-market-panel" onMouseDown={(event) => event.stopPropagation()} aria-label="Hot market signals">
            <header className="hot-market-header"><div><span className="placeholder-kicker">LIVE MARKET SCANNER</span><h2>Hot Markets <sup>{hotMarketSignals.length}</sup><small> / {allAnalyzerSymbols.length}</small><b className="hot-tier hot">{hotMarketSignals.filter((signal) => signal.score >= 98).length} HOT</b><b className="hot-tier warm">{hotMarketSignals.filter((signal) => signal.score < 98).length} WARM</b></h2><p>1,000-tick scan · losers under 9.9% · {analysis.status === "live" ? "connected" : "connecting"}</p><em>{analysis.status === "live" ? `Connected — scanning ${allAnalyzerSymbols.length} markets...` : "Connected — loading market samples..."}</em></div><div className="hot-header-actions"><button onClick={() => setHotMarketOpen(false)} aria-label="Refresh market scanner"><Icon name="arrow" /></button><button className="analysis-close" onClick={() => setHotMarketOpen(false)} aria-label="Close hot markets">x</button></div></header>
            <div className="hot-market-rule"><Icon name="flame" className="h-4 w-4" /><span>Rules: 1,000-tick balance scan for Over 2, Over 3, Under 7, Under 6, and Alternator symmetry.</span><b>OBSERVATION ONLY</b></div>
            {hotMarketSignals.length ? <div className="hot-market-list">{hotMarketSignals.map((signal, index) => <article className="hot-market-row" key={`${signal.symbol}-${signal.strategy}`} style={{ animationDelay: `${index * 70}ms` }}><div className="hot-row-icon"><Icon name="flame" /></div><div className="hot-row-market"><strong>{signal.market}</strong><small>{signal.symbol} · {signal.score >= 98 ? "1000 ticks · 3 strategies qualified" : "1000 ticks · strategy qualified"}</small></div><div className="hot-row-strategy"><span>{signal.strategy}</span><strong>{signal.direction}</strong><small>{signal.rule}</small></div><div className="hot-row-score"><small>HEAT</small><b>{signal.score}</b></div><div className="hot-row-detail"><strong>LOSING DIGITS · FULL WINDOW VS LAST 100</strong><div className="hot-digit-pills">{signal.details.split(" · ").map((detail) => <span key={detail}>{detail}</span>)}</div><div className="hot-meter"><span>block 0.0%</span><i><b style={{ width: `${Math.max(8, Math.min(99, signal.score - 45))}%` }} /></i><span>fair 40%</span></div><div className="hot-meter ceiling"><span>ceiling margin</span><i><b style={{ width: `${Math.min(100, signal.score)}%` }} /></i><span>+9.90pp</span></div><div className="hot-chip-row"><span className="active">{signal.strategy} · worst 0.00%</span><span>OVER 2 · worst 0.00%</span><span>UNDER 7 · worst 0.00%</span></div><p className="hot-condition">✓ every losing digit under 9.9% with no climb</p><button className="hot-open-signal" onClick={() => { setHotMarketOpen(false); setActive("Signal AI"); setSignalSubtab("overUnder"); setAnalysisSymbol(signal.symbol); }}>Open in Signal AI →</button></div></article>)}</div> : <div className="hot-market-empty"><div className="hot-empty-orbit"><Icon name="flame" /></div><h3>No markets are hot yet</h3><p>The scanner is collecting live 1,000-tick samples. A market appears here only when all selected digits remain below 9.9% while staying near the 10% balance line.</p><span><i /> Scanner active</span></div>}
            <footer className="hot-market-footer">A cold losing block can raise the observed share of opposite digits, but the market stays random. Verify any setup in Signal AI and size your stake before running it live.</footer>
          </section>
        </div>
      )}

      <button className="telegram-admin-trigger" onClick={() => setTelegramOpen(true)} aria-label="Open Telegram signal relay settings"><Icon name="signal" className="h-4 w-4" /><span>Signal relay</span></button>
      {telegramOpen && (
        <div className="telegram-backdrop" onMouseDown={() => setTelegramOpen(false)}>
          <section className="telegram-panel" onMouseDown={(event) => event.stopPropagation()} aria-label="Telegram signal relay settings">
            <header className="telegram-header"><div><span className="placeholder-kicker">ADMIN CONTROL</span><h2>Telegram Signal Relay</h2><p>Automatically send qualifying Hot Market signals to a Telegram channel.</p></div><button className="analysis-close" onClick={() => setTelegramOpen(false)} aria-label="Close Telegram settings">x</button></header>
            {!telegramUnlocked ? (
              <div className="telegram-lock"><Icon name="shield" className="h-8 w-8" /><h3>Admin settings locked</h3><p>Enter the admin password to configure the bot token, target channel, and message template.</p><input type="password" value={telegramPassword} onChange={(event) => setTelegramPassword(event.target.value)} placeholder="Admin password" onKeyDown={(event) => { if (event.key === "Enter") { if (telegramPassword === "42953004") setTelegramUnlocked(true); else setTelegramStatus("wrong-password"); } }} /><button onClick={() => telegramPassword === "42953004" ? setTelegramUnlocked(true) : setTelegramStatus("wrong-password")}>Unlock settings</button>{telegramStatus === "wrong-password" && <small className="telegram-error">Incorrect admin password.</small>}</div>
            ) : (
              <div className="telegram-settings-form">
                <div className="telegram-security-note"><Icon name="shield" className="h-4 w-4" /><span>Settings are kept in this browser session. For production, move the Telegram token to a protected server environment.</span></div>
                <label><span>BOT TOKEN</span><input type="password" value={telegramToken} onChange={(event) => setTelegramToken(event.target.value)} placeholder="123456:ABC..." /></label>
                <label><span>CHANNEL USERNAME OR CHAT ID</span><input value={telegramChatId} onChange={(event) => setTelegramChatId(event.target.value)} placeholder="@your_channel or -100..." /></label>
                <label><span>MESSAGE TEMPLATE</span><textarea value={telegramTemplate} onChange={(event) => setTelegramTemplate(event.target.value)} rows={10} /></label>
                <small className="telegram-template-help">Available fields: {"{{strategy}} {{market}} {{symbol}} {{direction}} {{details}} {{rule}} {{score}} {{time}}"}</small>
                <label className="telegram-toggle"><input type="checkbox" checked={telegramEnabled} onChange={(event) => setTelegramEnabled(event.target.checked)} /><span className="toggle-track" /><b>Auto-send new Hot Market signals</b></label>
                <div className="telegram-actions"><button className="telegram-test" onClick={() => void publishTelegramTest()}>Send test</button><button className="telegram-save" onClick={() => { setTelegramOpen(false); setToast(telegramEnabled ? "Telegram relay enabled" : "Telegram settings saved"); }}>Save settings</button></div>
                {telegramStatus === "sending" && <small className="telegram-status">Sending Telegram message...</small>}
                {telegramStatus === "sent" && <small className="telegram-status success">Telegram message sent.</small>}
                {telegramStatus === "error" && <small className="telegram-error">Telegram send failed. Check the token, chat ID, and bot channel permissions.</small>}
              </div>
            )}
          </section>
        </div>
      )}

      {botPickerOpen && (
        <div className="bot-picker-backdrop" onMouseDown={() => setBotPickerOpen(false)}>
          <section className="bot-picker" onMouseDown={(event) => event.stopPropagation()} aria-label="Choose a bot to load">
            <header className="bot-picker-header">
              <div>
                <span className="placeholder-kicker">BOT LIBRARY</span>
                <h2>Choose a bot to load</h2>
                <p>Select a starter strategy and continue in Bot Builder.</p>
              </div>
              <button className="analysis-close" onClick={() => setBotPickerOpen(false)} aria-label="Close bot library">x</button>
            </header>
            <label className="xml-upload-button"><Icon name="file" className="h-4 w-4" /><span>Import XML bot</span><small>Choose from device</small><input type="file" accept=".xml,text/xml,application/xml" onChange={handleXmlUpload} /></label>
            <div className="bot-option-list">
              {freeBots.map((bot) => (
                <button className="bot-option" key={bot.name} onClick={() => loadBot(bot)}>
                  <span className={`loaded-bot-icon ${bot.color}`}><Icon name="bot" /></span>
                  <span className="bot-option-copy"><strong>{bot.name}</strong><small>{bot.type}</small><em>{bot.description}</em></span>
                  <Icon name="arrow" className="bot-option-arrow" />
                </button>
              ))}
            </div>
            <footer>These are strategy templates for the Bot Builder. No trade is placed by selecting a bot.</footer>
          </section>
        </div>
      )}

      {analyzerOpen && (
        <div className="ai-analysis-backdrop" onMouseDown={() => setAnalyzerOpen(false)}>
          <section className="ai-analysis-panel" onMouseDown={(event) => event.stopPropagation()} aria-label="Live Deriv digit analysis">
            <header className="analysis-header">
              <div>
                <div className="analysis-title"><span className="analysis-orbit"><Icon name="sparkles" className="h-4 w-4" /></span> AI DERIV ANALYSIS</div>
                <p>Observed digit statistics from a rolling {ANALYSIS_TICK_COUNT.toLocaleString()}-tick window</p>
              </div>
              <div className={`analysis-connection ${analysis.status}`}><i /> {connectionLabel}</div>
              <button className="analysis-close" onClick={() => setAnalyzerOpen(false)} aria-label="Close analysis">x</button>
            </header>

            <div className="analysis-controls">
              <label className="analysis-select-label">
                <span>INDEX</span>
                <select value={analysisSymbol} onChange={(event) => setAnalysisSymbol(event.target.value)}>
                  {analyzerGroups.map((group) => (
                    <optgroup key={group.label} label={group.label}>
                      {group.symbols.map((symbol) => <option value={symbol} key={symbol}>{symbol}</option>)}
                    </optgroup>
                  ))}
                </select>
              </label>
              <div className="analysis-mode">
                <span>DATA VIEW</span>
                <div>
                  <button className={analysisMode === "evenOdd" ? "active" : ""} onClick={() => setAnalysisMode("evenOdd")}>Even / Odd</button>
                  <button className={analysisMode === "overUnder" ? "active" : ""} onClick={() => setAnalysisMode("overUnder")}>Over / Under</button>
                </div>
              </div>
              {analysisMode === "overUnder" && (
                <label className="analysis-select-label target-select">
                  <span>TARGET DIGIT</span>
                  <select value={analysisTarget} onChange={(event) => setAnalysisTarget(Number(event.target.value))}>
                    {Array.from({ length: 10 }, (_, digit) => <option key={digit} value={digit}>{digit}</option>)}
                  </select>
                </label>
              )}
            </div>

            <div className="analysis-top-grid">
              <div className="tick-readout">
                <div className="analysis-eyebrow"><span className="live-dot" /> LIVE TICK POINTER <small>{selectedGroup?.label}</small></div>
                <strong>{analysis.quote}</strong>
                <p>{analysisSymbol} <span>/</span> Last digit <b>{latestDigit ?? "-"}</b>{analysis.epoch ? ` / ${new Date(analysis.epoch * 1000).toLocaleTimeString()}` : ""}</p>
                <div className="tick-pointer-rail">
                  {Array.from({ length: 10 }, (_, digit) => <span className={latestDigit === digit ? "current" : ""} key={digit}>{digit}</span>)}
                  {latestDigit !== undefined && <i style={{ left: `${latestDigit * 10 + 5}%` }} />}
                </div>
                <div className="pointer-caption"><span>0</span><span>LAST DIGIT POSITION</span><span>9</span></div>
              </div>
              <div className="mode-summary">
                <div className="analysis-eyebrow">{analysisMode === "evenOdd" ? "EVEN / ODD APPEARANCES" : `OVER / UNDER ${analysisTarget}`}</div>
                {modeRows.map((row) => (
                  <div className="mode-row" key={row.label}>
                    <div><span className={`mode-dot ${row.color}`} /> <b>{row.label}</b><small>{row.count} ticks</small></div>
                    <strong>{tickTotal ? ((row.count / tickTotal) * 100).toFixed(1) : "0.0"}%</strong>
                    <div className="mode-bar"><i className={row.color} style={{ width: `${tickTotal ? (row.count / tickTotal) * 100 : 0}%` }} /></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="digit-analysis-block">
              <div className="analysis-section-label"><span>DIGIT PERCENTAGES</span><small>{tickTotal ? "Most observed is green · least observed is red" : "Waiting for market ticks"}</small></div>
              <div className="digit-grid ai-digit-board"><div className="ai-digit-row">{[0, 1, 2, 3, 4].map(renderAiDigit)}</div><div className="ai-digit-row">{[5, 6, 7, 8, 9].map(renderAiDigit)}</div></div>
              <div className="ai-digit-summary"><span><small>MOST</small><b>{digitCounts.indexOf(highestCount)}</b><em>{tickTotal ? ((highestCount / tickTotal) * 100).toFixed(1) : "0.0"}%</em></span><span><small>LEAST</small><b>{digitCounts.indexOf(lowestCount)}</b><em>{tickTotal ? ((lowestCount / tickTotal) * 100).toFixed(1) : "0.0"}%</em></span><span><small>PARITY</small><b>{tickTotal ? `${((evenCount / tickTotal) * 100).toFixed(0)} / ${((oddCount / tickTotal) * 100).toFixed(0)}` : "--"}</b><em>Even / Odd</em></span><span><small>POINTER</small><b>{latestDigit ?? "-"}</b><em>Latest digit</em></span></div>
            </div>

            <div className="recent-digit-block">
              <div className="analysis-section-label"><span>LAST DIGIT APPEARANCES</span><small>{analysisMode === "evenOdd" ? "Even / Odd stream" : `Compared with target ${analysisTarget}`}</small></div>
              <div className="recent-digits">
                {recentDigits.length ? recentDigits.map((digit, index) => <span className={analysisMode === "evenOdd" ? (digit % 2 === 0 ? "even" : "odd") : (digit > analysisTarget ? "over" : digit < analysisTarget ? "under" : "exact")} title={analysisLabel(digit, analysisMode, analysisTarget)} key={`${index}-${digit}`}>{digit}</span>) : <small className="empty-analysis">No ticks received yet</small>}
              </div>
            </div>

            {analysis.error && <div className="analysis-error">{analysis.error} Check that your network allows secure WebSocket connections to Deriv.</div>}
            <footer className="analysis-disclaimer">Informational analysis only. Percentages are calculated from observed Deriv ticks and do not predict the next digit or guarantee a trade outcome.</footer>
          </section>
        </div>
      )}

      {riskVisible && (
        <div className="risk-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="risk-title">
          <section className="risk-modal">
            <header className="risk-modal-heading">
              <span className="risk-warning">!</span>
              <h2 id="risk-title">Risk Disclaimer</h2>
            </header>
            <p className="risk-modal-copy">Trading derivative and synthetic index products carries a high level of risk and may not be suitable for every trader. Past performance is not a reliable indicator of future results. Automated bots, signals and AI tools on this workspace are decision aids - never guarantees. Only trade with money you can afford to lose, and always set your own stake and stop limits.</p>
            <div className="risk-modal-stats">
              <div><small>Max daily loss</small><strong>5%</strong></div>
              <div><small>Default stake</small><strong>$10</strong></div>
              <div><small>Martingale</small><strong>OFF</strong></div>
            </div>
            <button className="risk-understand" onClick={() => { setRiskVisible(false); setToast("Risk disclaimer dismissed for this session"); }}>I understand - don't show again</button>
            <p className="risk-modal-note">Closes the disclaimer for this session - it reappears if you refresh the page.</p>
          </section>
        </div>
      )}
      <button
        className={`ai-orb ai-draggable ${analyzerOpen ? "analysis-open" : ""} ${aiDragging ? "is-dragging" : ""}`}
        onPointerDown={handleAiPointerDown}
        onClick={() => { if (aiMoved.current) { aiMoved.current = false; return; } setAnalyzerOpen((value) => !value); }}
        style={aiPosition ? { left: `${aiPosition.left}px`, top: `${aiPosition.top}px`, bottom: "auto", transform: aiDragging ? "scale(1.08)" : "scale(1)" } : undefined}
        aria-label="Move or open AI assistant"
      ><span>{analyzerOpen ? "x" : "AI"}</span><i /><small>drag</small></button>
      {toast && <div className="toast"><Icon name="check" className="h-4 w-4" /> {toast}</div>}
    </div>
  );
}